import { config } from "dotenv";

config();

export const readConfig = () => {
  return {
    clientId: process.env["CTP_CLIENT_ID"] || "",
    clientSecret: process.env["CTP_CLIENT_SECRET"] || "",
    projectKey: process.env["CTP_PROJECT_KEY"] || "",
    oauthHost: process.env["CTP_AUTH_URL"] || "",
    host: process.env["CTP_API_URL"] || "",
  };
};

export type Config = {
  clientId: string;
  clientSecret: string;
  projectKey: string;
  oauthHost: string;
  host: string;
};
