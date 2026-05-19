import React from "react";
export default function Login({islogged,setIslogged}) {

    function handleBtn(){
        setIslogged(!islogged);
    }

    
  return (
    <div>
        Login
        
        { islogged ? (
            <div>
                <button onClick={handleBtn}>Logout</button>
                
            </div>
        ):(
            <div>
                <button onClick={handleBtn}>Login</button>
               
            </div>
        )}
    </div>
  )
}
