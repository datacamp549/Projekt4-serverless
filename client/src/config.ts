// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'z54f8v4g0e'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`
//https://z54f8v4g0e.execute-api.us-east-1.amazonaws.com/dev

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map. For example:
  // domain: 'dev-nd9990-p4.us.auth0.com',
  domain: 'dev-vzp0zhczidw26ys0.us.auth0.com',            // Auth0 domain
  clientId: 'VfGLAV79JG0UZVKIfdwFjZemJg3j3aEX',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
