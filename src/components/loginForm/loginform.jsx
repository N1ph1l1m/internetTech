import React, {useState}from "react";
import Registration from "./registration/registration";
import Login from "./login/login";

import styled from "styled-components";


const LoginWrap= styled.div`
max-width:600px;
${'' /* border:1px solid blue; */}

`
function LoginForm(){
    const [login, setLogin] = useState(false)
  
    function switchLog(){
        setLogin(!login)
        console.log(login);
    }
  

    function ShowElemLog(){
        if(login){
           return <Registration switchElem={switchLog}/>
        }else{
           return <Login switchElem={switchLog}/>
        }
    }
    const show = ShowElemLog();
    return(
      
        <LoginWrap>
        {show}
        </LoginWrap>
    )
}
export default LoginForm;