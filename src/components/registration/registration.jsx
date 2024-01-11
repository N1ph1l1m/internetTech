import React, { useEffect, useState } from "react";
import Input from "../input/input";

import './registration.css';



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
                    <h2 className="titleReg">
                      Create an account
                    </h2>
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
                        label = 'Your User Name'
                        value={user}
                        onChange={(e) => handleInputChange(e, "user")}
                        onBlur={checkUser}
                        />   
                      <Input
                        type="email"
                        name="email"
                        label='Your Email'
                        value={email}
                        onChange={(e) => handleInputChange(e, "email")}
                        onBlur={checkEmail}
                      />   

                        <Input
                        type="password"
                        name="pass1"
                        label='Password'
                        value={pass1}
                        onChange={(e) => handleInputChange(e, "pass1")}
                        onBlur={checkPassword}
                        />

                        <Input
                        type="password"
                        name="pass2"
                        label='Repeat your password'
                        value={pass2}
                        onChange={(e) => handleInputChange(e, "pass2")}
                        onBlur={checkPassword}
                        />
                      {/* <Input
                        type="checkbox"
                        defaultValue
                        id="form2Example3cg"
                        label='I agree all statements in'
                      /> */}

                    <div className="form-check d-flex justify-content-center mb-5">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        defaultValue
                        id="form2Example3cg"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="form2Example3g"
                      >
                        I agree all statements in{" "}
                        <a href="#!" className="text-body">
                          <u>Terms of service</u>
                        </a>
                      </label>
                    </div>
                    
                    <div className="d-flex justify-content-center">
                      <input
                        type="submit"
                        defaultValue="Submit"
                        className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                        onClick={handleSubmit}
                      />
                    </div>
                    <p className="text-center text-muted mt-5 mb-0">
                      Have already an account?{" "}
                      <a href="#!" className="fw-bold text-body">
                        <u>Login here</u>
                      </a>
                    </p>
                  </div>
      </section>
    </>
  );
}
export default Registration;
