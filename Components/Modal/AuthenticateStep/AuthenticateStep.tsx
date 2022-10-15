import * as React from "react";

export interface IAuthenticateStepProps {}

export default function AuthenticateStep(props: IAuthenticateStepProps) {
  return (
    <div className="authenticate-step">
      <div className="authenticate-step__password">
        Password
        <input type="password" />
      </div>
    </div>
  );
}
