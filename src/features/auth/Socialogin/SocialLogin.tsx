import { Button, Icon } from "semantic-ui-react";
import React, { FC } from "react";
import { ISocialLogin } from "../Entity/authEntity";
import { SocialProviderEnum } from "../authConstant";

export const SocialLogin:FC<ISocialLogin> = (props) => {
    const {sociallogin}  = props;
    const handleSociallogin =(provider:SocialProviderEnum)=>{
        sociallogin({selectedProvider:provider});
    }
  return (
    <div>
      <Button onClick ={()=>handleSociallogin(SocialProviderEnum.FaceBook)}
        type="button"
        style={{ marginBottom: "10px" }}
        fluid
        color="facebook"
      >
        <Icon name="facebook" /> Login with Facebook
      </Button>

      <Button type="button" fluid color="google plus" onClick ={()=>handleSociallogin(SocialProviderEnum.Google)}>
        <Icon name="google plus" />
        Login with Google
      </Button>
    </div>
  );
};
