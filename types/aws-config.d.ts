/**
 * Read ~/.aws/config
 *
 * @param { string } profile
 * @returns {{mfa_serial: string, role_arn: string, role_session_name: string}}
 */
export function loadAWSConfig(profile?: string): {
    mfa_serial: string;
    role_arn: string;
    role_session_name: string;
};
