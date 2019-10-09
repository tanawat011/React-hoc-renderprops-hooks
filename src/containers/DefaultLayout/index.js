import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navagation from '../../components/Navigation';
import Particles from '../../components/Particles';
import ReactLogo from '../../components/ReactLogo';

const DefaultLayout = () => {
  return (
    <>
      <Router>
        {/* <header>
          <div class="header">
            <h2>Scroll Down</h2>
            <p>Scroll down to see the sticky effect.</p>
          </div>
        </header> */}

        <Navagation />
        <Particles />

        <div className="wrapper-body">
          <div className="body">
            <Switch>
              <Route path="/about">
                aaa
                <ReactLogo />
              </Route>
              <Route path="/topics">
                bbb
                <ReactLogo />
              </Route>
              <Route path="/">
                ccc
                <ReactLogo />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </>
  );
};

export default DefaultLayout;
