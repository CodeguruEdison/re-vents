import React, { FC } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { ISettingDashBoardFromProp } from "./Entity/SettingsEntity";
import { Grid } from "semantic-ui-react";
import SettingNav from "./SettingNav";
import BasicPage from "./BasicPage";
import AboutPage from "./AboutPage";
import PhotosPage from "./PhotosPage";
import AccountPage from "./AccountPage";

export const SettingDashboard: FC<ISettingDashBoardFromProp> = prop => {
  return (
    <Grid>
      <Grid.Column width={12}>
      <Switch>
        <Redirect exact={true} from="/settings" to="/settings/basic" />
        <Route path="/settings/basic" component={BasicPage} />
        <Route path="/settings/about" component={AboutPage} />
        <Route path="/settings/photos" component={PhotosPage} />
        <Route path="/settings/account" component={AccountPage} />
        </Switch>
      </Grid.Column>
      <Grid.Column width={4}>
        <SettingNav />
      </Grid.Column>
    </Grid>
  );
};

export default SettingDashboard;
