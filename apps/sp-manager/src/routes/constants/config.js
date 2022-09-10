const CLIENT_ID = '0oa6ggwsbrNows2JN5d7';
const ISSUER = 'https://dev-10972897.okta.com/oauth2/default';
const OKTA_TESTING_DISABLEHTTPSCHECK = process.env.OKTA_TESTING_DISABLEHTTPSCHECK || false;
const REDIRECT_URI = `${window.location.origin}/login/callback`;

const OIDC = {
    clientId: CLIENT_ID,
    issuer: ISSUER,
    redirectUri: REDIRECT_URI,
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: OKTA_TESTING_DISABLEHTTPSCHECK
}

const RESOURCESERVER = {
    messagesUrl: `${window.location.origin}/login/callback`,
}

// eslint-disable-next-line
export { OIDC, RESOURCESERVER };
