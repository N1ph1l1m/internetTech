import React from "react";
import Registration from "./registration/registration";
import Login from "./login/login";

import styled from "styled-components";

const LoginWrap= styled.div`
max-width:600px;
${'' /* border:1px solid blue; */}

`
function LoginForm(){
    //const [login, setLogin] = useState("");

    return(
        <LoginWrap>
        <Login/>
        <Registration />
        </LoginWrap>
    )
}
export default LoginForm;