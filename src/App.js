import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './scss/layout.scss';
// import './scss/header.scss';

import Home from './modules/Home'; 
import Disc from './modules/PageDisc';
import Studio from './modules/PageStudio';
import Services from './modules/PageServices';


function App() {
  return ( 
    <BrowserRouter>
        <div className="page-wrap">
          <Switch>
            <Route path="/" exact component={Home} />  
            <Route path="/disc" component={Disc} />
            <Route path="/stills" component={Studio} />
            <Route path="/biography" component={Services} />
            <Route component={Error} />
          </Switch>
        </div>
    </BrowserRouter>
  );
}

export default App;
