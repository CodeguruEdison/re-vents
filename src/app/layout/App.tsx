import React, { FC, Fragment } from "react";
import { Container } from "semantic-ui-react";
import EventDashboard from "../../features/event/EventDashboard/EventDashboard";
import NavBar from "../../features/nav/NavBar/NavBar";
import { Route, Switch, withRouter } from "react-router-dom";
import { HomePage } from "../../features/home/HomePage";

import { PeopleDashboard } from "../../features/user/PeopleDashboard/PeopleDashboard";
import  SettingDashboard  from "../../features/user/Settings/SettingDashboard";
import EventForm from "../../features/event/EventForm/EventForm";
//import { IRouteConfig } from "./Entitty/LayoutEntity";
import EventDetailedPage from "../../features/event/EventDetailed/EventDetailedPage";
import withScrollTop from "../common/util/ScrollToTop";
import { IAppProps } from "./Entitty/LayoutEntity";
import  ModalManager  from "../../features/modals/modalManager";
import testComponent from "../../features/testarea/testComponent";
import  UserDetailedPage from "../../features/user/UserDetailed/UserDetailedPage";


const App: FC<IAppProps> = (props) => {
 /* const routes: IRouteConfig[] = [
    {
      path: "/events",
      component: EventDashboard,
      exact: true
    },
    {
      path: "/",
      component: HomePage,
      exact: true
    },
    {
      path: "/events/:id",
      component: EventDetailedPage,
      exact: true
    },
    {
      path: "/people",
      component: PeopleDashboard,
      exact: true
    },
    {
      path: "/profile/:id",
      component: EventDashboard,
      exact: true
    },
    {
      path: "settings",
      component: SettingDashboard,
      exact: true
    },
    {
      path: "createEvent",
      component: EventForm,
      exact: true
    }
  ];

  const RouteWithSubRoutes = (route: any) => (
    <Route
      path={route.path}
      exact={route.exact}
      render={props => (
        <route.component {...props} routes={route.routes} exact={route.exact} />
      )}
    />
  );*/
  return (
    <Fragment>
     <ModalManager ></ModalManager>
      <Route path="/" component={HomePage} exact={true} />
      <Route
        path="/(.+)"
        render={() => (
          <Fragment>
            <NavBar  />
            <Container className="main">
            <Switch  key={props.location.key}>
              <Route path="/events" component={EventDashboard} exact={true} />
              <Route
                path="/events/:id"
                component={EventDetailedPage}
                exact={true}
              />
              <Route path="/people" component={PeopleDashboard} exact={true} />
              <Route
                path="/profile/:id"
                component={UserDetailedPage}
                exact={true}
              />
              <Route
                path="/settings"
                component={SettingDashboard}
                
              />
              <Route path={["/createEvent","/manage/:id"]} component={EventForm} exact={true} />

              <Route path='/test' component={testComponent} />
              </Switch>

            </Container>
          </Fragment>
        )}
      />
   
    </Fragment>
  );
};

export default withRouter(withScrollTop(App));
