export = init;
declare function init(): Promise<{
    credentials: AWS.Credentials;
    region: string;
}>;
import AWS = require("aws-sdk");
