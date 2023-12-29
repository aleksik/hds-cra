import React, { useMemo } from "react";
import { createLoginSystem } from "hds-js";

export const Login = () => {
  const beacon = useMemo(() => {
    return createLoginSystem({
      userManagerSettings: {
        authority: "https://tunnistamo.dev.hel.ninja/",
        client_id: "exampleapp-ui-dev",
        scope: "openid profile email https://api.hel.fi/auth/helsinkiprofiledev https://api.hel.fi/auth/exampleappdev",
        redirect_uri: `${window.origin}/callback/`,
        silent_redirect_uri: `/silent_renew.html`,
        post_logout_redirect_uri: `/logout`,
      },
      apiTokensClientSettings: { url: "https://tunnistamo.dev.hel.ninja/api-tokens/" },
      sessionPollerSettings: { pollIntervalInMs: 10000 },
    });
  }, []);

  const login = () => {
    const client = beacon.getSignalContext("oidcClient");
    client.login();
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={login}>Login</button>
    </div>
  );
};
