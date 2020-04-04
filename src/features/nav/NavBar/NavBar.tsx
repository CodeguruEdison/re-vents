import React, { FC } from "react";
import { INavBarFromProps } from "./Entity/NavBarEntity";
import { Menu, Container, Button } from "semantic-ui-react";
import { NavLink, Link, withRouter } from "react-router-dom";
import SignedOutMenus from "../Menu/SignedOutMenus";
import SignendInMenus from "../Menu/SignendInMenus";
import { connect } from "react-redux";
import { openModalAction } from "../../modals/modalActions";
import { IApplicationState } from "../../../app/store/configureStore";

import {LogoutAction} from '../../auth/authActions';
const NavBar: FC<INavBarFromProps> = (props) => {
  const { history, openModal,logout,auth } = props;
  const {authenticated,currentUser} = auth;
 
 /* const initialState: NavBarFromState = {
    authenticated: false,
  };*/
  const handleSignIn = () => {
    openModal({
      modalType: "LoginModal",
      modalProps: {
        open: true,
      },
    });
    /*setState(prevState => ({
      ...prevState,
      authenticated: true
    }));*/
  };
  const handleRegister = () => {
    openModal({
      modalType: "RegisterModal",
      modalProps: {
        open: true,
      },
    });
    // openModal('RegisterModal')
  };
  const handleSignOut = () => {
    logout();
    /*setState((prevState) => ({
      ...prevState,
      authenticated: false,
    }));*/
    history.push("/");
  };
  //const [state, setState] = useState<NavBarFromState>(initialState);
 
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
          <SignendInMenus signout={handleSignOut} currentUser={currentUser} />
        ) : (
          <SignedOutMenus signIn={handleSignIn} register={handleRegister} />
        )}
      </Container>
    </Menu>
  );
};

const mapDispatchToProps = {
  openModal: openModalAction,
  logout:LogoutAction
};
const mapStateToProps = (
  state: IApplicationState,
  ownProps: INavBarFromProps
) => {
  return {
    auth: state.auth,
  };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar) as any );
