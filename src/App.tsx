import React from 'react';
import LaunchList from './components/LaunchList';
import LaunchProfile from './components/LaunchProfile';
import Error from './components/Misc/Error';
import Home from "./screens/Home";
import { Route, Switch } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/launches" component={LaunchList} />
        <Route exact path="/launches/:id" component={LaunchProfile} />
        <Route path="*" component={Error} />

      </Switch>
    </div>
  );
}

export default App;
