import React, { useEffect, useState } from "react";
import Input from "../input/input";
import Button from "../button/button";

import "./registration.css";

function Registration() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");
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
      case "pass2":
        setPass2("");
        setPass2(e.target.value);
        if (e.target.value === "") {
          setError("Confirm password has left  blank");
        } else if (e.target.value !== pass1) {
          setError("Confirm password does not watch");
        }
        break;
      default:
    }
  };

  function handleSubmit() {
    if (user !== "" && email !== "" && pass1 !== "" && pass2 !== "") {
      var url = "http://macbook-air-vlad.local/react-task/registration.php";
      var headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      var Data = {
        user: user,
        email: email,
        pass: pass2,
      };
      fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(Data),
      })
        .then((response) => response.json())
        .then((response) => {
          setMsg(response[0].result);
          //console.log(response);
        })
        .catch((err) => {
          setError(err);
          console.log(err);
        });
      setUser("");
      setEmail("");
      setPass1("");
      setPass2("");
    } else {
      setError("All fields are required!");
    }
  }
  function checkUser() {
    var url = "http://macbook-air-vlad.local/react-task/checkuser.php";
    var headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    var Data = {
      user: user,
    };
    fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(Data),
    })
      .then((response) => response.json())
      .then((response) => {
        setError(response[0].result);
      })
      .catch((err) => {
        setError(err);
        console.log(err);
      });
  }

  function checkEmail() {
    var url = "http://macbook-air-vlad.local/react-task/checkemail.php";
    var headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    var Data = {
      email: email,
    };
    fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(Data),
    })
      .then((response) => response.json())
      .then((response) => {
        setError(response[0].result);
      })
      .catch((err) => {
        setError(err);
        console.log(err);
      });
  }

  function checkPassword() {
    if (pass1.length < 8) {
      setError("Password is less than 8 characters!");
    }
  }

  return (
    <>
      <section>
        <div className="wrap_container">
          <h2 className="titleReg">Create an account</h2>
          <p>
            {msg !== "" ? (
              <span className="success">{msg}</span>
            ) : (
              <span className="error">{error}</span>
            )}
          </p>
          <Input
            type="text"
            name="user"
            label="Your User Name"
            value={user}
            onChange={(e) => handleInputChange(e, "user")}
            onBlur={checkUser}
          />
          <Input
            type="email"
            name="email"
            label="Your Email"
            value={email}
            onChange={(e) => handleInputChange(e, "email")}
            onBlur={checkEmail}
          />

          <Input
            type="password"
            name="pass1"
            label="Password"
            value={pass1}
            onChange={(e) => handleInputChange(e, "pass1")}
            onBlur={checkPassword}
          />

          <Input
            type="password"
            name="pass2"
            label="Repeat your password"
            value={pass2}
            onChange={(e) => handleInputChange(e, "pass2")}
            onBlur={checkPassword}
          />

          <div className="checkAccount">
            <Input
              type="checkbox"
              defaultValue
              className="form-check"
              id="form2Example3cg"
            />
            <span>
              I agree all statements in{" "}
              <a href="#!">
                <u>Terms of service</u>
              </a>
            </span>
          </div>

          <Button type="submit" onClick={handleSubmit}>Submit</Button>
          <p className="textAccount">
            Have already an account?{" "}
            <a href="#!">
              <u>Login here</u>
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
export default Registration;
