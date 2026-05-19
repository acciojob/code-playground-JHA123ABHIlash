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
                <button onClick={handleBtn}>Log Out</button>
                
            </div>
        ):(
            <div>
                <button onClick={handleBtn}>Log In</button>
               
            </div>
        )}
    </div>
  )
}
