import React, { FC, useState } from "react";
import { INavBarFromProps, NavBarFromState } from "./Entity/NavBarEntity";
import { Menu, Container, Button } from "semantic-ui-react";
import { NavLink, Link,withRouter } from "react-router-dom";
import SignedOutMenus from "../Menu/SignedOutMenus";
import SignendInMenus from "../Menu/SignendInMenus";
import { connect } from "react-redux";
import {  openModalAction } from "../../modals/modalActions";

const NavBar: FC<INavBarFromProps> = props => {
  const {history,openModal} =props;
  const initialState: NavBarFromState = {
    authenticated: false
  };
  const handleSignIn = () => {
    
    openModal({ modalType:'LoginModal',
      modalProps: {
        open:true
      }
  });
    /*setState(prevState => ({
      ...prevState,
      authenticated: true
    }));*/
    
  };
  const handleRegister =() =>{
    openModal({ modalType:'RegisterModal',
      modalProps: {
        open:true
      }
  });
   // openModal('RegisterModal')
  }
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
          <SignedOutMenus signIn={handleSignIn} register ={handleRegister} />
        )}
      </Container>
    </Menu>
  );
};

 const mapDispatchToProps = {
  openModal: openModalAction
};
export default withRouter(connect(null, mapDispatchToProps) (NavBar));
