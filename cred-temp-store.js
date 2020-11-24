const fs = require('fs');
const path = require('path');
const { homedir } = require('os');

const credTempFilePath = path.resolve(homedir(), '.aws/.aws-mfa-cache');

/**
 * Write
 * @param {AWS.STS.AssumeRoleResponse} roleResponse 
 */
function write(roleResponse) {
  fs.writeFileSync(credTempFilePath, JSON.stringify(roleResponse));
}

/**
 * Read
 * @returns {AWS.STS.AssumeRoleResponse | null}
 */
function read() {
  try {
    return JSON.parse(fs.readFileSync(credTempFilePath, 'utf8'));
  } catch (e) {
    return null;
  }

}

module.exports.write = write;
module.exports.read = read;