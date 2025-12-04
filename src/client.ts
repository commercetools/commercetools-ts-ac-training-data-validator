import { createApiBuilderFromCtpClient } from "@commercetools/platform-sdk";
import {
    AuthMiddlewareOptions,
    ClientBuilder,
    HttpMiddlewareOptions
} from "@commercetools/sdk-client-v2";
import { ApiRoot} from "../types/global";
import { readConfig } from "../utils/config";

const createApiClient = () => {
    const { clientId, clientSecret, host, oauthHost, projectKey } = readConfig();

    const authMiddlewareOptions: AuthMiddlewareOptions = {
        credentials: {
            clientId,
            clientSecret,
        },
        host: oauthHost,
        projectKey,
        fetch,
    };

    const httpMiddlewareOptions: HttpMiddlewareOptions = {
        host,
        fetch,
    };

    const client = new ClientBuilder()
        .withClientCredentialsFlow(authMiddlewareOptions)
        .withHttpMiddleware(httpMiddlewareOptions)
        .build();

    return createApiBuilderFromCtpClient(client).withProjectKey({ projectKey });
};

export const apiRoot: ApiRoot = createApiClient();
