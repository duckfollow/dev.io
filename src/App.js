import React from 'react';
import './App.css';
import { HashRouter, Route} from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Main from './view/Main';
import Oauth2 from './view/Oauth2';
import AboutMe from './view/AboutMe';

function App() {
  return (
      <HashRouter basename="/">
        <ScrollToTop/>
        <Route exact path="/" component={Main} />
        <Route exact path="/oauth2" component={Oauth2} />
        <Route exact path="/aboutme" component={AboutMe} />
      </HashRouter>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
export default App;