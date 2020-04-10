import React, { FC, Fragment } from "react";
import { INavBarFromProps } from "./Entity/NavBarEntity";
import {withFirebase, WithFirebaseProps} from 'react-redux-firebase';
import { Menu, Container, Button } from "semantic-ui-react";
import { NavLink, Link, withRouter } from "react-router-dom";
import SignedOutMenus from "../Menu/SignedOutMenus";
import SignendInMenus from "../Menu/SignendInMenus";
import { connect } from "react-redux";
import { openModalAction } from "../../modals/modalActions";
import { IApplicationState } from "../../../app/store/configureStore";

import { LogoutAction } from "../../auth/authActions";
const NavBar: FC<INavBarFromProps & WithFirebaseProps<INavBarFromProps>> = (props) => {
  const { history, openModal, logout, auth,firebase,profile } = props;
  
  //const {  currentUser } = auth;
   const authenticated = auth.isLoaded && !auth.isEmpty;
  /* const initialState: NavBarFromState = {
    authenticated: false,
  };*/
  //AuthTypes.FirebaseAuth
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
    firebase.logout();
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
        {authenticated && (
          <Fragment>
           
            <Menu.Item name="People" as={NavLink} to="/people"></Menu.Item>
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
          </Fragment>
        )}
        {authenticated ? (
          <SignendInMenus profile={profile} signout={handleSignOut}  />
        ) : (
          <SignedOutMenus signIn={handleSignIn} register={handleRegister} />
        )}
      </Container>
    </Menu>
  );
};

const mapDispatchToProps = {
  openModal: openModalAction,
  logout: LogoutAction,
};
const mapStateToProps = (
  state: IApplicationState,
  ownProps: INavBarFromProps
) => {
  return {
    auth: state.firebase.auth,
    profile:state.firebase.profile
  };
};
export default withRouter(
  withFirebase(connect(mapStateToProps, mapDispatchToProps)(NavBar)) as any
);
