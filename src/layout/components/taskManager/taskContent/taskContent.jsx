import React, { useState } from "react";
import styled from "styled-components";
import { BiSort } from "react-icons/bi";
import { IoIosMore } from "react-icons/io";
import { CgMoveTask } from "react-icons/cg";
import TaskContentText from "./taskContentText";
import Input from "../../../../components/input/input";
import Icon from "../../../../components/icon/icon";
import { MdOutlineAddTask } from "react-icons/md";

const TaskContentWrap = styled.div`
  width: 95%;
  height: 100vh;
  padding: 15px 20px;
`;

const TitleTask = styled.span`
  font-size: 21px;
  color: black;
  margin-top: 3px;
`;

const HeaderTask = styled.div`
  min-width: 545px;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderTaskTitle = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderTaskIcons = styled.div``;

function TaskContent(props) {
  const [tasks, setTasks] = useState([]);
  const [inputText, setInputText] = useState("");

  const handleInputChange = (e, type) => {
    switch (type) {
      case "text":
        setInputText(e.target.value);
        
        if (e.target.value === "") {
          alert("Input is null");
        }
        break;
      default:
    }
  };

  // const handleInputEnter = (e) => {
  //   if (e.key === "Enter" && inputText.trim() !== "") {
  //     setTasks([...tasks, { id: tasks.length + 1, text: inputText }]);
  //     setInputText("");
  //   }
  // };

  
  const handleInputEnter = async (e) => {
    // if (e.key === "Enter" && inputText.trim() !== "") {
    //   // Обновление состояния локальных задач
    //   setTasks([...tasks, { id: tasks.length + 1, text: inputText }]);
     
  
      // Создание объекта данных для отправки на сервер
      const requestData = {
        user_id: 1, // Замените на реальное значение
        task_name: inputText,
        task_description: "Описание задачи - test 1 ", // Замените на реальное значение
        task_status: 1, // Замените на реальное значение
        type_id: 1 // Замените на реальное значение
      };
      var url = "http://macbook-air-vlad.local/react-task/inputdata.php";
      var headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      fetch(url,{
        method:"POST",
        headers:headers,
        body:JSON.stringify(requestData),
      }).then((response) => response.json())
        .then((response)=>{
          alert(response[0].result);
        })

        // Отправка данных на сервер
        // const response =  fetch(url, {
        //   method: "POST",
        //   headers: headers,
        //   body: JSON.stringify(requestData),
        // });
  


        // if (response.ok) {
        //   const data = response.json();
        //   // Обработка ответа от сервера
        //   console.log(data);
        //   // Дополнительная логика в зависимости от ответа сервера
        //   if (data.result === "Данные успешно внесены в таблицу") {
        //     alert("True");
        //   } else {
        //     alert("False");
        //   }
        // } else {
        //   console.error("Error:", response.statusText);
        //   alert("Error");
        // }
      // } catch (error) {
      //   console.error("Error:", error);
      //   // Логика в случае ошибки при обращении к серверу
      // }
    
    //setInputText("");
  };
  

  return (
    <TaskContentWrap>
      <HeaderTask>
        <HeaderTaskTitle>
          <Icon className="taskContent">
            <CgMoveTask size="30" />
          </Icon>
          <TitleTask>{props.title} </TitleTask>
        </HeaderTaskTitle>
        <HeaderTaskIcons>
          <Icon className="taskContent">
            <BiSort size="20" />
          </Icon>
          <Icon className="taskContent">
            <IoIosMore size="20" />
          </Icon>
        </HeaderTaskIcons>
      </HeaderTask>

      <Input
        type="text"
        className="inputTask"
        placeholder="+ Add tast to  'task' , press Enter to save. "
        onChange={(e) => handleInputChange(e, "text")}
        onKeyDown={handleInputEnter}
        value={inputText}
      ></Input>

      {tasks.map((task) => (
        <TaskContentText key={task.id} text={task.text} />
      ))}
    </TaskContentWrap>
  );
}

export default TaskContent;
