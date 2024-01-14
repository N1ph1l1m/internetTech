import React from "react";
import Input from "../../input/input";
import Button from "../../button/button";

import '../loginform.css'
function Login(props){
    // const [user, setUser] = useState("");
    // const [email, setEmail] = useState("");
    // const [pass, setPass1] = useState("");
    return(
        <>
          <section>
        <div className="wrap_container">
          <h2 className="titleReg">Log in to your Account</h2>
          <p>
            {/* {msg !== "" ? (
              <span className="success">{msg}</span>
            ) : (
              <span className="error">{error}</span>
            )} */}
          </p>
          <Input
            type="text"
            name="user"
            //value={user}
            //onChange={(e) => handleInputChange(e, "user")}
            //onBlur={checkUser}
            placeholder="Username"
          />
          <Input
            type="email"
            name="email"
            placeholder="Email"
           // value={email}
            ///onChange={(e) => handleInputChange(e, "email")}
            //onBlur={checkEmail}
          />

          <Input
            type="password"
            name="pass1"
            placeholder="Password"
            //value={pass}
            //onChange={(e) => handleInputChange(e, "pass1")}
            //onBlur={checkPassword}
          />
          <Button type="submit" 
            className="newSize"
        //   onClick={handleSubmit}
          >
            Log in
          </Button>
          <br />
          <Button type="submit" className="newSize"
             onClick={props.switchElem}>
            Don't have an account? Sign Up
          </Button>
        </div>
      </section>
        </>
    )
}
export default Login;