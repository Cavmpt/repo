import { CognitoUserPool } from "amazon-cognito-identity-js";

interface IPoolDataType {
  UserPoolId: string;
  ClientId: string;
}
console.log(process.env.AWS_COGNITO_ID, process.env.CLIENT_AWS);

// const PoolData: IPoolDataType = {
//   UserPoolId: process.env.AWS_COGNITO_ID,
//   ClientId: process.env.CLIENT_AWS,
// };

// export default new CognitoUserPool(PoolData);
