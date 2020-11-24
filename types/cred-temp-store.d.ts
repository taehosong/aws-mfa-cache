/**
 * Write
 * @param {AWS.STS.AssumeRoleResponse} roleResponse
 */
export function write(roleResponse: AWS.STS.AssumeRoleResponse): void;
/**
 * Read
 * @returns {AWS.STS.AssumeRoleResponse | null}
 */
export function read(): AWS.STS.AssumeRoleResponse | null;
