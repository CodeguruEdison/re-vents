import React, { FC } from "react";
import { Menu, Dropdown, Image } from "semantic-ui-react";
import { ISignedInMenuFromProp } from "./Entity/MenuEntity";
import { Link } from "react-router-dom";


export const SignendInMenus: FC<ISignedInMenuFromProp> = prop => {
  const { signout,profile} = prop;
  console.log(profile);
  return (
    <Menu.Item position="right">
      <Image avatar spaced="right" src={profile.photoURL || "/assets/user.png" }/>
      <Dropdown pointing="top left" text={profile.displayName}>
        <Dropdown.Menu>
          <Dropdown.Item text="Create Event" icon="plus" />
          <Dropdown.Item text="My Events" icon="calendar" />
          <Dropdown.Item text="My Network" icon="users" />
          <Dropdown.Item text="My Profile" icon="user" />
          <Dropdown.Item
            text="Settings"
            icon="settings"
            as={Link}
            to="/settings"
          />
          <Dropdown.Item text="Sign Out" icon="power" onClick={signout} />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
};

export default SignendInMenus;
