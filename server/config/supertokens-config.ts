import ThirdPartyEmailPassword from "supertokens-node/recipe/thirdpartyemailpassword";
import Session from "supertokens-node/recipe/session";
import { TypeInput } from "supertokens-node/types";
import Dashboard from "supertokens-node/recipe/dashboard";

export function getApiDomain() {
    const apiUrl = process.env.VITE_APP_API_URL || `http://localhost:5000`;
    return apiUrl;
}

export function getWebsiteDomain() {
    const websiteUrl = process.env.VITE_APP_WEBSITE_URL || `http://localhost:5173`;
    return websiteUrl;
}

export function getSupertokensCoreURI(){
    const supertokensCoreURI = process.env.VITE_APP_SUPTKENS_CORE || `http://127.0.0.1:3567`
    return supertokensCoreURI;
}

function getGoogleTokens(){
    const clientId = process.env.GOOGLE_CLIENT_ID
    const secretKey = process.env.GOOGLE_SECRET_KEY
    if(!clientId || !secretKey)throw new Error("Error loading google tokens")
    return { clientId, secretKey }
}

function getGithubTokens(){
    const clientId = process.env.GITHUB_CLIENT_ID
    const secretKey = process.env.GITHUB_SECRET_KEY
    if(!clientId || !secretKey)throw new Error("Error loading github tokens")
    return { clientId, secretKey }
}

export const SuperTokensConfig: TypeInput = {
    supertokens: {
        // this is the location of the SuperTokens core.
        connectionURI: getSupertokensCoreURI(),
    },
    appInfo: {
        appName: "Video Encoding",
        apiDomain: getApiDomain(),
        websiteDomain: getWebsiteDomain(),
    },
    recipeList: [
        ThirdPartyEmailPassword.init({
            providers: [
                {
                    config: {
                        thirdPartyId: "google",
                        clients: [
                            {
                                clientId: getGoogleTokens().clientId,
                                clientSecret: getGoogleTokens().secretKey,
                            },
                        ]
                    }
                },
                {
                    config: {
                        thirdPartyId: "github",
                        clients: [
                            {
                                clientId: getGithubTokens().clientId,
                                clientSecret: getGithubTokens().secretKey,
                            },
                        ],
                    },
                },
            ]
        }),
        Session.init(),
        Dashboard.init(),
    ]
}