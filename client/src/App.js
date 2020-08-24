//import React from "react";
import {  BrowserRouter as Router, Switch,  Route,  Link} from "react-router-dom";
import DataSubmited from "./Route/DataSubmited";
import Profile from "./Route/Profile";
import SignUp from "./Route/SignUp";
import SignIn from "./Route/SignIn";
import SendData from "./Route/Senddata";
 import Home from "./Route/Home";

//import './App.css';



import React from "react";







      
function Head (){
  
  return (  <Router>
    <div>
      <nav>
        <ul >
          <li className="y">
            {<Link to="/">Home</Link>}
          </li>
          <li className="y">
            <Link to="/signup">Sign Up</Link>
          </li>
          <li className="y">
            <Link to="/signin">Sign In</Link>
          </li>
          <li className="y">
            <Link to="/profile">Profile</Link>
          </li>
          <li className="y">
            <Link to="/senddata">Send Data</Link>
          </li>
          <li className="y">
            <Link to="/datasubmited">Data submited</Link>
          </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/signup">
            <SignUp />
            </Route>
            <Route path="/profile">
            <Profile />
            </Route>
            <Route path="/senddata">
            <SendData />
            </Route>
            <Route path="/datasubmited">
            <DataSubmited />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        
      </div>
    </Router>
  

      
    );
  };
    
  


export default Head;































