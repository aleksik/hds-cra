import React, { useState } from "react";
import { createCookieController } from "hds-js";

export const Cookies = () => {
  const cookieName = "HDS-JS-COOKIE";
  const controller = createCookieController({}, cookieName);

  const data = controller.get();

  const cookieOutput = data || "No cookies";

  const [, updateState] = useState(0);

  const setCookieData = () => {
    const newData = { cookie1: true, cookie2: false };
    newData[`cookie_${Date.now()}`] = true;
    controller.set(JSON.stringify(newData));
    updateState((n) => n + 1);
  };

  return (
    <div>
      <h1>Cookie output</h1>
      <button onClick={setCookieData}>Set new cookie data</button>
      <p>Current stored cookies:</p>
      <pre>{cookieOutput}</pre>
    </div>
  );
};
