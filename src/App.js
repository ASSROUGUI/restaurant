import React from 'react';
import Search from './components/Search'; 
import Map from './components/Map'; 
import HomePage from './components/HomePage'; 
import { BrowserRouter as Router, Route, HashRouter, Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  return (
   
  <HashRouter> 

   
<div className="b"> 

 <Route exact path="/" component={HomePage}  /> 
 <Route exact path="/Search" component={Search} /> 
 {/* <Route exact path="/aboutMe" component={aboutMe} />  */}
 <Route exact path="/Map" component={Map} /> 


 </div> 


</HashRouter>
  );
}

export default App;
