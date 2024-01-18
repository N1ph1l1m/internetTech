import React, {useState}from "react";
import Registration from "../loginForm/registration/registration";
import Login from "../loginForm/login/login";
import styled from "styled-components";


const LoginWrap= styled.div`
margin:0px auto;
border:1px solid blue;
`
const LoginWrapItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* 100% высоты экрана */
  border: 3px solid green;
`
function LoginForm(){
    const [login, setLogin] = useState(false)

  
    function switchLog(){
        setLogin(!login)
        console.log(login);
    }
    function ChangeTitle(){
        if(login){
            return  <span className="switchState"
            onClick={switchLog}>
            Login
         </span>
        }else{
            return  <span className="switchState"
            onClick={switchLog}>
          Register
         </span>
        }
    }
    function ShowElemLog(){
        if(login){
           return <Registration />
        }else{
           return <Login/>
        }
    }
    const show = ShowElemLog();
    const titleState = ChangeTitle();
    return(
        <>
            <LoginWrap>
            {titleState}

            <LoginWrapItem>
            {show}
          </LoginWrapItem>
         
            
        </LoginWrap>
        </>
      
    )
}
export default LoginForm;