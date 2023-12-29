const util = require("util");
const path = require("path");
const { spawn } = require("child_process");
const exec = util.promisify(require("child_process").exec);
const simpleGit = require("simple-git");

const ENABLE_TOKENS = true;
const ENABLE_CORE = true;
const ENABLE_REACT = true;
const ENABLE_JS = true;

const PACKAGE_FILENAME = {
  react: `hds-react-${Date.now()}.tgz`,
  "design-tokens": `hds-design-tokens-${Date.now()}.tgz`,
  core: `hds-core-${Date.now()}.tgz`,
  "hds-js": `hds-js-${Date.now()}.tgz`,
};

const CRA_DIR = path.resolve(__dirname, "../");
const HDS_DIR = path.resolve(__dirname, "../../helsinki-design-system/");

const gitOptions = {
  baseDir: HDS_DIR,
  binary: "git",
  maxConcurrentProcesses: 6,
};

const git = simpleGit(gitOptions);

const isModified = async () => {
  const status = await git.status();
  return status.files.length > 0;
};

const stash = async () => {
  console.log("Stashing changes...");
  return await git.stash(["push", "--include-untracked", "--message", `hds-cra`]);
};

const gitClean = async () => {
  console.log("Cleaning HDS dir...");
  await git.clean("f", ["-d"]);
};

const stashPop = async () => {
  console.log("Popping changes from stash...");
  return await git.stash(["pop"]);
};

const build = (packageName, command) => {
  console.log(`Building ${command || packageName}...`);
  return new Promise((resolve, reject) => {
    const build = spawn("yarn", [command || "build"], {
      cwd: path.join(HDS_DIR, `./packages/${packageName}`),
      env: { NODE_ENV: "production", PATH: process.env.PATH },
    });
    build.stdout.on("data", (data) => {
      console.log(`${data}`);
    });
    build.stderr.on("data", (data) => {
      console.error(`${data}`);
    });
    build.on("close", (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject();
      }
    });
  });
};

const prepareReact = async () => {
  console.log("Preparing react...");
  await exec(`cp -r ./lib/. .`, {
    cwd: path.join(HDS_DIR, "./packages/react"),
  });
};

const prepareHdsJs = async () => {
  console.log("Preparing hds-js...");
  await exec(`cp -r ./lib/. .`, {
    cwd: path.join(HDS_DIR, "./packages/hds-js"),
  });
};

const pack = async (packageName) => {
  console.log(`Packing ${packageName}...`);
  await exec(`yarn pack --filename ${path.join(CRA_DIR, PACKAGE_FILENAME[packageName])}`, {
    cwd: path.join(HDS_DIR, "./packages", packageName),
  });
};

const install = async (packageName) => {
  console.log(`Installing ${packageName}...`);
  await exec(`yarn add file:./${PACKAGE_FILENAME[packageName]}`, {
    cwd: CRA_DIR,
  });
};

(async () => {
  try {
    let stashed = false;

    // Build packages
    if (ENABLE_TOKENS) await build("design-tokens");
    if (ENABLE_CORE) await build("core");
    if (ENABLE_REACT) await build("react");
    if (ENABLE_JS) await build("react", "build:hds-js");

    // Stash changes
    if (await isModified()) {
      await stash();
      stashed = true;
    }

    // Pack and install hds-design-tokens
    if (ENABLE_TOKENS) {
      await pack("design-tokens");
      await install("design-tokens");
    }

    // Pack and install hds-core
    if (ENABLE_CORE) {
      await pack("core");
      await install("core");
    }

    // Pack and install hds-react
    if (ENABLE_REACT) {
      await prepareReact();
      await pack("react");
      await install("react");
    }

    // Pack and install hds-js
    if (ENABLE_JS) {
      await prepareHdsJs();
      await pack("hds-js");
      await install("hds-js");
    }

    // Clean
    await gitClean();
    if (stashed) {
      await stashPop();
    }
  } catch (error) {
    console.error(error);
  }
})();
