import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

//pages
import Landing from './pages/landing';
import Politicas from './pages/politicas';
import TerminosYCondiciones from './pages/terminos_y_condiciones';
import Contrato from './pages/contrato';

const App = ()=>{
  return (
    <Router>
        <Switch>
            <Route path="/tyc">
               <TerminosYCondiciones/>
            </Route>
            <Route path="/politicas">
              <Politicas/>
            </Route>
            <Route path="/contrato">
              <Contrato/>
            </Route>
            <Route path="/">
                <Landing/>
            </Route>
        </Switch>
    </Router>
  ) 
}

export default App;
