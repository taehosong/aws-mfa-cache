const AWS = require('aws-sdk');
const mfa = require('./aws-mfa-cache');

async function init() {
  const { roleReponse } = await mfa();
  
  const sts = new AWS.STS();
  AWS.config.credentials = sts.credentialsFrom(roleReponse);
}

module.exports = init;