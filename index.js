const AWS = require('aws-sdk');
const mfa = require('./aws-mfa-cache');

async function init() {
  const { roleResponse, config } = await mfa();
  
  const credentials = new AWS.Credentials({
    accessKeyId: roleResponse.Credentials.AccessKeyId,
    secretAccessKey: roleResponse.Credentials.SecretAccessKey,
    sessionToken: roleResponse.Credentials.SessionToken
  });

  AWS.config.update({
    credentials: credentials,
    region: config.region
  });

  return { credentials, region: config.region };
}

module.exports = init;