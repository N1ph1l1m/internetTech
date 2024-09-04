import React from "react";
import { Outlet, Link } from "react-router-dom";

import styled from "styled-components";
import Button from "../button/button";
import Icon from "../icon/icon";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { RiTaskFill , } from "react-icons/ri";
import { FaUser, FaCalendarAlt , FaSearch ,FaSyncAlt } from "react-icons/fa";
import { ImExit } from "react-icons/im";
import "../../../src/index.css";
const OutletWRap = styled.div`
  width: 100vw;
  height: 100vh;
  background-color:white;
`;
const MainWrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

const NavigatorItemWrap = styled.div`
  width: 60px;
  height: 100vh;
  ${'' /* border: 3px solid black; */}
  background-color: #F8F8F8;
  padding: 5px;
  display:flex;
  flex-direction:column;
  align-items: flex-start;

`;
const ChildNavItem = styled.div`
margin-top: auto;
`


function Root() {
  const history = useNavigate();



//   function logOut() {
//     var data = {
//       username : "ghost",
//       password : "niphilim1313",
//       token : "c59b480bb07dad7f093751eed087062e6a1d9eff"

//     };
//     // Определение данных пользователя и токена
//     // var username = "ghost";  // Пример имени пользователя
//     // var password = "niphilim1313";  // Пример пароля
//     // var token = "8cd13085e297f9d2975134b1191c95a83cf3b65e";  // Пример токена

//     var url = "http://127.0.0.1:8000/auth/token/logout/";

//     axios.post(url, data, {
//         headers: {
//             'Authorization': `Token ${data.token}`
//         }
//     })
//     .then((response) => {
//         if (response.status === 204) {  // 204 No Content indicates successful logout
//             // Очистка локального хранилища
//             localStorage.removeItem("login");
//             localStorage.removeItem("username");
//             localStorage.removeItem("token");

//             // Перенаправление на страницу входа
//             history("/");
//         } else {
//             console.log("Logout failed.");
//         }
//     })
//     .catch((err) => {
//         console.log("An error occurred: " + err.message);
//     });
// }

function logOut() {
  // Получаем токен из localStorage
  var token = localStorage.getItem('token');

  if (!token) {
      console.log("No token found. User might not be logged in.");
      return;
  }

  var url = "http://127.0.0.1:8000/auth/token/logout/";

  axios.post(url, {}, {
      headers: {
          'Authorization': `Token ${token}`
      }
  })
  .then((response) => {
      if (response.status === 204) {  // 204 No Content indicates successful logout
          // Очистка локального хранилища
          localStorage.removeItem("login");
          localStorage.removeItem("username");
          localStorage.removeItem("token");

          console.log("Logout successful!");
          // Перенаправление на страницу входа
          history("/");
      } else {
          console.log("Logout failed.");
      }
  })
  .catch((err) => {
      console.log("An error occurred: " + err.message);
      console.log(err);
  });
}


  return (
    <MainWrap>
      <NavigatorItemWrap>

      <Button className="newColor">
          <Link className="colorLink" to={"taskmanager"}>
            <Icon> <FaUser size={20}/></Icon>
          </Link>
        </Button>


        <Button className="newColor">
          <Link className="colorLink" to={"taskmanager"}>
            <Icon> <RiTaskFill size={20}/></Icon>
          </Link>
        </Button>

        <Button className="newColor">
          <Link className="colorLink" to={"calendar"}>
            <Icon><FaCalendarAlt size={20}/></Icon>
          </Link>
        </Button>
        <Button className="newColor">
          <Link className="colorLink" to={""}>
          <Icon><FaSearch size={20}/></Icon>
          </Link>
        </Button>

      <ChildNavItem>
      <Button className="newColor ">
          <Link className="colorLink" to={""}>
          <Icon><FaSyncAlt  size={20}/></Icon>
          </Link>
        </Button>

        <Button
            onClick={logOut}
            className="newColor">
          <Link className="colorLink" to={"/"}>
          <Icon><ImExit size={20}/></Icon>
          </Link>
        </Button>
      </ChildNavItem>



      </NavigatorItemWrap>
      <OutletWRap>
        <Outlet />
      </OutletWRap>
    </MainWrap>
  );
}
export default Root;
