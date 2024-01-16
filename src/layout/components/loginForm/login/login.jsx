import React, { useEffect, useState } from "react";
import Input from "../../../../components/input/input";
import Button from "../../../../components/button/button";
//import {useNavigate} from 'react-router-dom';

import '../loginform.css'
function Login(props){
 // const naviget = useNavigate();
    
    const [email, setEmail] = useState("");
    const [pass, setPass1] = useState("");
    const [error, setError] = useState("");
    const [msg, setMsg] = useState("");

    useEffect(() => {
      setTimeout(function () {
        setMsg("");
      }, 15000);
    }, [msg]);

    const handleInputChange = (e, type) => {
        switch (type) {
          case "email":
            setError("");
            setEmail(e.target.value);
            if (e.target.value === "") {
              setError("Email has left blank");
            }
            break;
          case "pass":
            setPass1("");
            setPass1(e.target.value);
            if (e.target.value === "") {
              setError("Pass has left blank");
            }
            break;
          default:
        }
      };

      function loginSubmit() {
        if (email !== "" && pass !== "") {
      
           var url = "http://macbook-air-vlad.local/react-task/login.php";
          var headers = {
            Accept: "application/json",
            "Content-Type": "application/json",
          };
          var Data = {
            email: email,
            pass: pass,
          };
          fetch(url, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(Data),
          })
            .then((response) => response.json())
            .then((response) => {
              if(response[0].result === "Invalid email" || response[0].result === "Invalid passsword"){
                setError(response[0].result);  
              }else{
                setMsg(response[0].result);
                  setTimeout(function(){
                    localStorage.setItem("login",true);
                    localStorage.setItem('email',email);
                   //naviget("/dashboard")
                  },5000);
                }
            }).catch((err) => {
              setError(err);
              console.log(err);
            });
          setEmail("");
          setPass1("");
        } else {
          setError("All fields are required!");
        }
      }

    return(
        <>
          <section>
          {/* <span className="switchState"
             onClick={props.switchElem}>
            Register
          </span> */}
          <div className="wrap_container">
          <div className="item_container">
          <h1 className="titleReg">Login</h1>
          <p>
            {msg !== "" ? (
              <span className="success">{msg}</span>
            ) : (
              <span className="error">{error}</span>
            )}
          </p>
          
          <Input
            type="text"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => handleInputChange(e, "email")}
          />
          <Input
            type="password"
            id="pass"
            placeholder="Password"
            value={pass}
            onChange={(e) => handleInputChange(e, "pass")}
          />
          <Button type="submit" 
            className="newSize"
          onClick={loginSubmit}
          >
            Login
          </Button>
          <br />
          
        </div>
          </div>
       
      </section>
        </>
    )
}
export default Login;