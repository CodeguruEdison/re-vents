import React, { FC, Fragment } from 'react';
import { Container } from 'semantic-ui-react';
import EventDashboard from '../../features/event/EventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar/NavBar';

const App: FC = () => {
  return (
   <Fragment>
    <NavBar/>
    <Container className="main">
      <h1>Re-vents</h1>
      <EventDashboard></EventDashboard>
    </Container>
    </Fragment>
  );
};

export default App;
