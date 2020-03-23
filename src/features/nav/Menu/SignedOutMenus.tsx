import React, { FC } from 'react'
import { Menu, Button } from 'semantic-ui-react'
import { SignedOutMenusFromProp } from './Entity/MenuEntity'

export const SignedOutMenus:FC<SignedOutMenusFromProp> = (prop) => {

    const {signIn} =prop;
    return (
       
        <Menu.Item position="right">
        <Button basic inverted content="Login" onClick={signIn} />
        <Button
          basic
          inverted
          content="Register"
          style={{ marginLeft: "0.5em" }}
        />
      </Menu.Item>
     
    )
}

export default SignedOutMenus