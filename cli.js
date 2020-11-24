const mfa = require('./aws-mfa-cache');

(async () => {
  const { roleResponse, config } = await mfa();

  console.log(`AWS_ACCESS_KEY_ID=${roleResponse.Credentials.AccessKeyId}`);
  console.log(
    `AWS_SECRET_ACCESS_KEY=${roleResponse.Credentials.SecretAccessKey}`
  );
  console.log(`AWS_SESSION_TOKEN=${roleResponse.Credentials.SessionToken}`);
  console.log(`AWS_DEFAULT_REGION=${config.region}`);
})();
