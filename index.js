const AWS = require('aws-sdk');
const mfa = require('./aws-mfa-cache');

async function init() {
  const { roleResponse } = await mfa();
  
  const sts = new AWS.STS();
  AWS.config.credentials = sts.credentialsFrom(roleResponse);
}

module.exports = init;