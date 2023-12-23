interface Config {
  [key: string]: string;
  auth: "session" | "token";
}

// Session auth needs to use the same origin anyway
export const config: Config = {
  apiUrl: "http://localhost:8080/api",
  adminUrl: "http://localhost:8080/api/admin",
  authUrl: "http://localhost:8080/api/auth",
  auth: "token",
};

export const auth0 = {
  url: "dev-ejhtvfjrge0apx07.us.auth0.com/v2",
  clientId: "8PEYpE6RWymP9phS2KJTw7T1ydyZ0ssI",
  returnUrl: "http://localhost:8080",
};
