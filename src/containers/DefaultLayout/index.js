import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navagation from '../../components/Navigation';
import Particles from '../../components/Particles';
import ReactLogo from '../../components/ReactLogo';

const WrapperBody = styled.div`
  text-align: center;
`;

const AppBody = styled.div`
  // background-image: linear-gradient(to right, #62bdfc 0%, #6574ff 100%);
  background-color: transparent;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

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

        <WrapperBody>
          <AppBody>
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
          </AppBody>
        </WrapperBody>
      </Router>
    </>
  );
};

export default DefaultLayout;
