# hds-cra

This is a [Create React App](https://github.com/facebook/create-react-app) project which can be used to test Helsinki Design System components.

## Setup

This project assumes that it has been cloned as a sibling to the helsinki-design-sytem project. So your directory structure should be something like this:

```
projects/
├─ helsinki-design-system/
├─ hds-cra/
```

## Available Scripts

Note: With HDS v3, you'll need node 18 to install packages with `yarn`, but node 16 to run `yarn start`. This a react scripts v4 issue.

In the project directory, you can run:

### `yarn hds`

Builds, packages and installs `hds-core`, `hds-design-tokens`, `hds-react` and `hds-js` from your local `helsinki-design-system` repository.

Note: once installed, the created tar-packages are in the yarn.lock. If `yarn hds` is run multiple times, it may throw when a tar-file is not found anymore. Remove the yarn.lock to fix this.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
