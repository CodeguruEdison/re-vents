import React, { FC, Fragment } from "react";
import { Container } from "semantic-ui-react";
import EventDashboard from "../../features/event/EventDashboard/EventDashboard";
import NavBar from "../../features/nav/NavBar/NavBar";
import { Route, Switch } from "react-router-dom";
import { HomePage } from "../../features/home/HomePage";
import { EventDetailedPage } from "../../features/event/EventDetailed/EventDetailed";
import { PeopleDashboard } from "../../features/user/PeopleDashboard/PeopleDashboard";
import { SettingDashboard } from "../../features/user/Settings/SettingDashboard";
import EventForm from "../../features/event/EventForm/EventForm";
import { IRouteConfig } from "./Entitty/LayoutEntity";

const App: FC = () => {
  const routes: IRouteConfig[] = [
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
  );
  return (
    <Fragment>
  <Switch>
      <Route path="/" component={HomePage} exact={true} />
      <Route
        path="/(.+)"
        render={() => (
          <Fragment>
            <NavBar />
            <Container className="main">
              <Route path="/events" component={EventDashboard} exact={true} />
              <Route
                path="/events/:id"
                component={EventDetailedPage}
                exact={true}
              />
              <Route path="/people" component={PeopleDashboard} exact={true} />
              <Route
                path="/profile/:id"
                component={EventDashboard}
                exact={true}
              />
              <Route
                path="/settings"
                component={SettingDashboard}
                
              />
              <Route path="/createEvent" component={EventForm} exact={true} />
            </Container>
          </Fragment>
        )}
      />
      </Switch>
    </Fragment>
  );
};

export default App;
