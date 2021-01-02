import React from 'react';
import Landing from './pages/landing';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//pages
import Politicas from './pages/politicas';

const App = ()=>{
  return (
    <Router>
        <Switch>
            <Route path="/tyc">
               <div>terminos y condiciones</div> 
            </Route>
            <Route path="/politicas">
              <Politicas/>
            </Route>
            <Route path="/">
              <Landing/>
            </Route>
        </Switch>
    </Router>
  ) 
}

export default App;
