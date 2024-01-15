import React, {useState}from "react";
import Registration from "./registration/registration";
import Login from "./login/login";
import styled from "styled-components";


const LoginWrap= styled.div`
margin:0px auto;
width:1920px;
${'' /* border:1px solid blue; */}
`
const LoginItem = styled.div`
display:flex;
justify-content:center;
align-items: center;
height:808px;
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
          <LoginItem>
            {show}
          </LoginItem>
            
        </LoginWrap>
        </>
      
    )
}
export default LoginForm;