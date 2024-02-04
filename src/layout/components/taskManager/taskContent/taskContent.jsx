import React, { useState } from "react";
import TaskContentText from "./taskContentText";
import Input from "../../../../components/input/input";



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

  const handleInputEnter = (e) => {
    if (e.key === "Enter" && inputText.trim() !== "") {
      const newTask = { id: tasks.length + 1, text: inputText};

      // Вызов функции обратного вызова для передачи данных в родительский компонент
      props.onTaskAdd(newTask);

      // Обновление состояния компонента TaskContent
      setTasks([...tasks, newTask]);
      setInputText("");
    }
  };

  
  // const  handleInputEnter = (e)=>{
  //   if (e.key === "Enter" && inputText.trim() !== "") {
  //     var url = "http://macbook-air-vlad.local/react-task/inputdata.php";
  //     var headers = {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     };
  //     var Data = {
  //       task_name: inputText,
  //     };
  //     fetch(url,{
  //       method: "POST",
  //       headers: headers,
  //       body: JSON.stringify(Data),
  //     })
  //       .then((response) => response.json())
  //       .then((response)=>{
  //         console.log(response[0].result);
  //       })
  //       .catch((err)=>{
  //         console.log(err);
           
  //       });
  //       setInputText("");
  //   }
  
      
  // };
  

  return (
    <>
      <Input
        type="text"
        className="inputTask"
        placeholder="+ Add tast to  'task' , press Enter to save. "
        onChange={(e) => handleInputChange(e, "text")}
        onKeyDown={handleInputEnter}
        value={inputText}
      ></Input>
      {props.tasks.map((task) => (
        <TaskContentText key={task.id} text={task.text} isChecked={task.checked} />
      ))}
    </>
  );
}

export default TaskContent;
