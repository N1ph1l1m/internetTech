import React, { useEffect, useState } from "react";
import Input from "../../input/input";
import Button from "../../button/button";

import '../loginform.css'
function Login(props){
     const [user, setUser] = useState("");
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
          case "user":
            setError("");
            setUser(e.target.value);
            if (e.target.value === "") {
              setError("User has left blank");
            }
            break;
          case "email":
            setError("");
            setEmail(e.target.value);
            if (e.target.value === "") {
              setError("Email has left blank");
            }
            break;
          case "pass1":
            setPass1("");
            setPass1(e.target.value);
            if (e.target.value === "") {
              setError("Pass has left blank");
            }
            break;
          default:
        }
      };

      function handleSubmit() {
        if (email !== "" && pass !== "") {
           var url = "http://macbook-air-vlad.local/react-task/chekaccount.php";
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
              setMsg(response[0].result);
              console.log(response);
            })
            .catch((err) => {
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
        <div className="wrap_container">
          <h2 className="titleReg">Log in to your Account</h2>
          <p>
            {msg !== "" ? (
              <span className="success">{msg}</span>
            ) : (
              <span className="error">{error}</span>
            )}
          </p>
          
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => handleInputChange(e, "email")}
            //onBlur={checkEmail}
          />

          <Input
            type="password"
            name="pass1"
            placeholder="Password"
            value={pass}
            onChange={(e) => handleInputChange(e, "pass1")}
            //onBlur={checkPassword}
          />
          <Button type="submit" 
            className="newSize"
          onClick={handleSubmit}
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