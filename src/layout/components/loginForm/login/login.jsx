import React, { useEffect, useState } from "react";
import Input from "../../../../components/input/input";
// import { Link } from "react-router-dom";
import Button from "../../../../components/button/button";
import {useNavigate} from 'react-router-dom';
//import {useNavigate} from 'react-router-dom';
import axios from 'axios';


import '../loginform.css'
function Login(props){
 // const naviget = useNavigate();

    const [username, setusername] = useState("");
    const [password, setpassword1] = useState("");
    const [error, setError] = useState("");
    const [msg, setMsg] = useState("");
    const history = useNavigate();

    useEffect(() => {
      setTimeout(function () {
        setMsg("");
      }, 15000);
    }, [msg]);

    const handleInputChange = (e, type) => {
        switch (type) {
          case "username":
            setError("");
            setusername(e.target.value);
            if (e.target.value === "") {
              setError("username has left blank");
            }
            break;
          case "password":
            setpassword1("");
            setpassword1(e.target.value);
            if (e.target.value === "") {
              setError("password has left blank");
            }
            break;
          default:
        }
      };



    //   function loginSubmit(){
    //     if (username !== "" && password !== "") {
    //       var data = {
    //         username: username,
    //         password: password,
    //       };

    //     var url = "http://127.0.0.1:8000/auth/token/login/";

    //     axios.post(url,data)
    //         .then((response) => {
    //           if(response.status === 200){
    //           setMsg("Login successfull!");
    //           localStorage.setItem("login", true);
    //           localStorage.setItem('username', username);
    //           setTimeout(() => {
    //               history("/task");
    //           }, 2000);
    //           }else{
    //             setError("Login failed: " + response.data.detail);
    //             }
    //         }).catch((err) => {
    //           if (err.response && err.response.status === 400) {
    //             setError("Bad Request: " + err.response.data.detail);
    //         } else {
    //             setError("An error occurred: " + err.message);
    //         }
    //         console.log(err);
    //         });
    //       setusername("");
    //       setpassword1("");
    //   }else {
    //         setError("All fields are required!");
    //       }
    // }


    function loginSubmit() {
      if (username !== "" && password !== "") {
          var data = {
              username: username,
              password: password,
          };

          var url = "http://127.0.0.1:8000/auth/token/login/";

          axios.post(url, data)
              .then((response) => {
                  if (response.status === 200) {
                      var token = response.data.auth_token;  // Получаем токен из ответа
                      setMsg("Login successful!");

                      // Сохраняем токен и имя пользователя в localStorage
                      localStorage.setItem("login", true);
                      localStorage.setItem('username', username);
                      localStorage.setItem('token', token);  // Сохраняем токен

                      // Перенаправление на страницу задач
                      setTimeout(() => {
                          history("/task");
                      }, 1000);
                  } else {
                      setError("Login failed: " + response.data.detail);
                  }
              })
              .catch((err) => {
                  if (err.response && err.response.status === 400) {
                      setError("Bad Request: " + err.response.data.detail);
                  } else {
                      setError("An error occurred: " + err.message);
                  }
                  console.log(err);
              });

          // Сброс полей формы
          setusername("");
          setpassword1("");
      } else {
          setError("All fields are required!");
      }
  }



      // function loginSubmit() {
      //   if (username !== "" && password !== "") {

      //      var url = "http://127.0.0.1:8000/auth/token/login/";
      //     var headers = {
      //       Accept: "application/json",
      //       "Content-Type": "application/json",
      //     };
      //     var Data = {
      //       username: username,
      //       password: password,
      //     };
      //     fetch.post(url, {
      //       method: "POST",
      //       headers: headers,
      //       body: JSON.stringify(Data),
      //     })
      //       .then((response) => response.json())
      //       .then((response) => {
      //         if(response[0].result === '400 Bad Request' || response[0].result === '400 Bad Request'){
      //           setError(response[0].result);
      //         }else{
      //           setMsg(response[0].result);
      //             setTimeout(function(){
      //               localStorage.setItem("login",true);
      //               localStorage.setItem('username',username);
      //              history("/task");
      //             },2000);
      //           }
      //       }).catch((err) => {
      //         setError(err);
      //         console.log(err);
      //       });
      //     setusername("");
      //     setpassword1("");
      //   } else {
      //     setError("All fields are required!");
      //   }
      // }

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
            id="username"
            placeholder="username"
            value={username}
            onChange={(e) => handleInputChange(e, "username")}
          />
          <Input
            type="passwordword"
            id="password"
            placeholder="passwordword"
            value={password}
            onChange={(e) => handleInputChange(e, "password")}
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
