import Session from "supertokens-auth-react/recipe/session";
import ThirdPartyEmailPassword, { Google, Github } from "supertokens-auth-react/recipe/thirdpartyemailpassword"
import { ThirdPartyEmailPasswordPreBuiltUI } from "supertokens-auth-react/recipe/thirdpartyemailpassword/prebuiltui";

export function getApiDomain() {
    const apiUrl = import.meta.env.VITE_APP_API_URL || `http://localhost:5000`;
    return apiUrl;
}

export function getWebsiteDomain() {
    const websiteUrl = import.meta.env.VITE_APP_WEBSITE_URL || `http://localhost:5173`;
    return websiteUrl;
}

export const SuperTokensConfig = {
    appInfo: {
        appName: "Video Encoding",
        apiDomain: getApiDomain(),
        websiteDomain: getWebsiteDomain(),
    },
    recipeList: [
        ThirdPartyEmailPassword.init({
            signInAndUpFeature: {
                providers: [Google.init(), Github.init()]
            }
        }),
        Session.init(),
    ]
}

export const recipeDetails = {
    docsLink: "https://supertokens.com/docs/thirdpartyemailpassword/introduction",
};

export const PreBuiltUIList = [ThirdPartyEmailPasswordPreBuiltUI];

export const ComponentWrapper = (props: { children: JSX.Element }): JSX.Element => {
    return props.children;
};