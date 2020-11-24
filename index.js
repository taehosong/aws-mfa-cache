const AWS = require('aws-sdk');
const mfa = require('./aws-mfa-cache');

async function init() {
  const { roleResponse } = await mfa();
  
  AWS.config.credentials = AWS.STS.credentialsFrom(roleResponse);
  return roleResponse;
}

module.exports = init;