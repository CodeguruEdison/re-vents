import React, { FC, useState } from "react";
import { NavBarFromProps, NavBarFromState } from "./Entity/NavBarEntity";
import { Menu, Container, Button } from "semantic-ui-react";
import { NavLink, Link,withRouter } from "react-router-dom";
import SignedOutMenus from "../Menu/SignedOutMenus";
import SignendInMenus from "../Menu/SignendInMenus";

const NavBar: FC<NavBarFromProps> = props => {
  const {history} =props;
  const initialState: NavBarFromState = {
    authenticated: false
  };
  const handleSignIn = () => {
    setState(prevState => ({
      ...prevState,
      authenticated: true
    }));
  };
  const handleSignOut = () => {
    setState(prevState => ({
      ...prevState,
      authenticated: false
    }));
    history.push('/');
  };
  const [state, setState] = useState<NavBarFromState>(initialState);
  const { authenticated } = state;
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item as={NavLink} to="/" header exact={true}>
          <img src="/assets/logo.png" alt="logo" />
          Re-vents
        </Menu.Item>
        <Menu.Item name="Events" as={NavLink} to="/events" exact={true} />
        <Menu.Item>
          <Button
            as={Link}
            to="/createEvent"
            floated="right"
            positive
            inverted
            content="Create Event"
          />
        </Menu.Item>
        {authenticated ? (
          <SignendInMenus signout={handleSignOut} />
        ) : (
          <SignedOutMenus signIn={handleSignIn} />
        )}
      </Container>
    </Menu>
  );
};

export default withRouter(NavBar);
