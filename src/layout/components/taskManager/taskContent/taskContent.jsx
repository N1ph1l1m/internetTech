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
        console.log(inputText);
        
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

  
  const  handleInputEnter = (e)=>{
    if (e.key === "Enter" && inputText.trim() !== "") {
      var url = "http://macbook-air-vlad.local/react-task/inputdata.php";
      var headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      var Data = {
        task_name: inputText,
      };
      fetch(url,{
        method: "POST",
        headers: headers,
        body: JSON.stringify(Data),
      })
        .then((response) => response.json())
        .then((response)=>{
          console.log(response[0].result);
        })
        .catch((err)=>{
          console.log(err);
           
        });
        setInputText("");
    }
  
      
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
