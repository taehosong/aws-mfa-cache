const AWS = require('aws-sdk');
const { prompt } = require('inquirer');
const { loadAWSConfig } = require('./aws-config');
const credStore = require('./cred-temp-store');

/**
 * Read mfa
 * @returns { Promise<string> }
 */
async function readMfaCodeFromPrompt() {
  const questions = [
    {
      type: 'input',
      name: 'code',
      message: 'input your MFA code'
    }
  ];
  const answers = await prompt(questions);
  if (!answers.code) {
    throw new Error('MFA code required to use a aws-mfa-cache');
  }
  return answers.code;
}

/**
 * AssumeRoleResponse Validation
 * @param {AWS.STS.AssumeRoleResponse} roleResponse 
 */
function isValidCredentials(roleResponse) {
  if (!roleResponse) return false;

  const now = Date.now();
  return now < (new Date(roleResponse.Credentials.Expiration)).getTime();
}

async function assumeRole(config) {
  const tokenCode = await readMfaCodeFromPrompt();

  const sts = new AWS.STS();
  const roleResponse = await sts.assumeRole({
    RoleArn: config.role_arn,
    RoleSessionName: config.role_session_name,
    SerialNumber: config.mfa_serial,
    TokenCode: tokenCode
  }).promise();

  return roleResponse;
}

/**
 * mfa-cache
 * @returns {Promise<{roleResponse: AWS.STS.AssumeRoleResponse, config: {region: string }>}}
 */
async function mfa() {
  const config = loadAWSConfig();

  AWS.config.update({
    region: config.region,
  });

  let roleResponse = credStore.read();

  if (isValidCredentials(roleResponse) === false) {
    roleResponse = await assumeRole(config);
    credStore.write(roleResponse);
  }

  return {
    roleResponse, config
  }
}

module.exports = mfa;
