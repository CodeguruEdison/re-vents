import { Button, Icon } from "semantic-ui-react";
import React, { FC } from "react";
import { ISocialLogin } from "../Entity/authEntity";

export const SocialLogin:FC<ISocialLogin> = () => {
  return (
    <div>
      <Button
        type="button"
        style={{ marginBottom: "10px" }}
        fluid
        color="facebook"
      >
        <Icon name="facebook" /> Login with Facebook
      </Button>

      <Button type="button" fluid color="google plus">
        <Icon name="google plus" />
        Login with Google
      </Button>
    </div>
  );
};
