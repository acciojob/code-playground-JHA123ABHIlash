import React, { useState } from 'react'
import './../styles/App.css';
import { Switch,Route,Link } from "react-router-dom";
import PlayGround from "./PlayGround";
import Login from "./Login";

const App = () => {
    const [islogged,setIslogged]=useState(false);

    function PrivateRoute({islogged,children}){
      if(islogged){
        return children;
      }else{
        return <Login setIslogged={setIslogged} islogged={islogged}/>
      }
    }
  return (
    <div>

      <nav>
             { islogged ? (
            <div>
               
                <p>Logged In, Now you can Enter PlayGround</p>
            </div>
        ):(
            <div>
                
                <p>You are not authenticated, Please login first</p>
            </div>
        )}
        </nav>
        
          <ul>
            <li>
              <Link to="/playground"> PlayGround</Link>
            </li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        
        <Switch>

          <Route exact path="/" render={() => <div>Page not Found</div>}></Route>

          <Route path="/playGround" render={()=>(

            <PrivateRoute islogged={islogged}>
              <PlayGround/>
            </PrivateRoute>
        
          )}/>

          <Route path="/login"  render={() => (
            <Login
              islogged={islogged}
              setIslogged={setIslogged}
            />
          )}/>

        </Switch>
        
    </div>
  )
}

export default App
