import { ThemeProvider } from "./components/theme-provider";
import SuperTokens, { SuperTokensWrapper } from "supertokens-auth-react";
import { SuperTokensConfig, PreBuiltUIList } from "./config/supertokens-config";
import { getSuperTokensRoutesForReactRouterDom } from "supertokens-auth-react/ui";
import { SessionAuth } from "supertokens-auth-react/recipe/session";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import * as ReactRouterDom from "react-router-dom";

SuperTokens.init(SuperTokensConfig);

export default function App() {
  return (
    <ThemeProvider>
      <SuperTokensWrapper>
        <div>
          <Router>
            <Routes>
              {/* This shows the login UI on "/auth" route */}
              {getSuperTokensRoutesForReactRouterDom(
                ReactRouterDom,
                PreBuiltUIList
              )}

              <Route
                path="/"
                element={
                  /* This protects the "/" route so that it shows
                    <Home /> only if the user is logged in.
                    Else it redirects the user to "/auth" */
                  <SessionAuth>
                    <div>anubhav</div>
                  </SessionAuth>
                }
              />
            </Routes>
          </Router>
        </div>
      </SuperTokensWrapper>
    </ThemeProvider>
  );
}
