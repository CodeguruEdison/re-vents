import React, { FC } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { ISettingDashBoardFromProp } from "./Entity/SettingsEntity";
import { Grid } from "semantic-ui-react";
import SettingNav from "./SettingNav";
import BasicPage from "./BasicPage";
import AboutPage from "./AboutPage";
import PhotosPage from "./Photos/PhotosPage";
import AccountPage from "./AccountPage";
import { connect } from "react-redux";
import { UpdateUserPasswordAction } from "../../auth/authActions";
import { IApplicationState } from "../../../app/store/configureStore";
import { updateProfileAction } from "../userAction";

export const SettingDashboard: FC<ISettingDashBoardFromProp> = props => {
  const { updatePassword, providerId ,user,updateProfile} = props;
   /*if(user.dateOfBirth){
       user.dateOfBirth = new Date( user.dateOfBirth.seconds*1000);
   }*/
  console.log('updatePassword'+JSON.stringify(user));
  return (
    <Grid>
      <Grid.Column width={12}>
        <Switch>
          <Redirect exact={true} from="/settings" to="/settings/basic" />
          <Route path="/settings/basic" render ={()=>(<BasicPage initialValues={user} updateProfile={updateProfile}/>)}  />
          <Route path="/settings/about"  render ={()=>(<AboutPage initialValues={user} updateProfile={updateProfile}/>)} />
          <Route path="/settings/photos" component={PhotosPage} />
          <Route
            path="/settings/account"
            render={() => (
              <AccountPage
                updatePassword={updatePassword}
                providerId={providerId}
              />
            )}
          />
        </Switch>
      </Grid.Column>
      <Grid.Column width={4}>
        <SettingNav />
      </Grid.Column>
    </Grid>
  );
};
const mapDispatchToProps = {
  // openModal:openModalAction,
  updatePassword: UpdateUserPasswordAction,
  updateProfile:updateProfileAction
};
const mapStateToProps = (
  state: IApplicationState) => {
  let providerId = '' as  any;
  if (state.firebase.auth.providerData) {
     providerId=  state.firebase.auth.isLoaded && state.firebase.auth.providerData[0].providerId;
     
  }
  return {
    providerId,
    user:state.firebase.profile
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SettingDashboard);
