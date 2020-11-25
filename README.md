# aws-mfa-cache

## SDK
```typescript
  const AWS = require('aws-sdk');
  const mfa = require('aws-mfa-cache');

  const { credentials, region }  = await mfa();

  AWS.config.update({
    credentials: credentials,
    region: region
  });

  // TODO ...
```

## CLI
```bash
 $ env $(aws-mfa-cache) node index.js
```