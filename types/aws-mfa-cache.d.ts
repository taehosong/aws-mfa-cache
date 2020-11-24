export = mfa;
/**
 * mfa-cache
 * @returns {Promise<{roleResponse: AWS.STS.AssumeRoleResponse, config: {region: string }>}}
 */
declare function mfa(): Promise<{
    roleResponse: AWS.STS.AssumeRoleResponse;
    config: {
        region: string;
    };
}>;
import AWS = require("aws-sdk");
