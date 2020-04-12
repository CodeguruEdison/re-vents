import React, { FC } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { ISettingDashBoardFromProp } from "./Entity/SettingsEntity";
import { Grid } from "semantic-ui-react";
import SettingNav from "./SettingNav";
import BasicPage from "./BasicPage";
import AboutPage from "./AboutPage";
import PhotosPage from "./PhotosPage";
import AccountPage from "./AccountPage";
import { connect } from "react-redux";
import { UpdateUserPasswordAction } from "../../auth/authActions";
import { IApplicationState } from "../../../app/store/configureStore";

export const SettingDashboard: FC<ISettingDashBoardFromProp> = props => {
  const { updatePassword, providerId } = props;
  //console.log('updatePassword'+updatePassword);
  return (
    <Grid>
      <Grid.Column width={12}>
        <Switch>
          <Redirect exact={true} from="/settings" to="/settings/basic" />
          <Route path="/settings/basic" component={BasicPage} />
          <Route path="/settings/about" component={AboutPage} />
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
  updatePassword: UpdateUserPasswordAction
};
const mapStateToProps = (
  state: IApplicationState,
  ownProps: ISettingDashBoardFromProp
) => {
  let providerId = '' as  any;
  if (state.firebase.auth.providerData) {
     providerId= state.firebase.auth.providerData[0].providerId;
  }
  return {
    providerId
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SettingDashboard);
