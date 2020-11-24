# aws-mfa-cache

```typescript
  const AWS = require('aws-sdk');
  const mfa = require('aws-mfa-cache');

  const { credentials, region }  = await mfa();

  AWS.config.update({
    credentials: credentials,
    region: config.region
  });

  // TODO ...
```