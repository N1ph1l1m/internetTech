import React, { useState } from "react";
import styled from "styled-components";
import Input from "../../../../components/input/input";
import Modal from "../../../../components/modal/modal";

const ContentTextWrap = styled.div`
  width: 100%;
  min-height: 40px;
  display: flex;
  align-items: center;
  padding: 5px;
  background-color: #ecf1fe;
  border-radius: 5px;
  margin-bottom: 10px;
  &:hover {
    cursor: pointer;
    background-color: #f8f8f8;
  }
`;

const ContentText = styled.span`
  font-size: 16px;
  ${(props) => (props.checked ? "text-decoration: line-through;" : "")}
`;

const ContentTextItem = styled.div`
  width: 100%;
  height:40px;
`;

const TextSpan = styled.span`
  display: block;
  color: gray;
  font-size: 14px;
`;

function TaskContentText(props) {
  const [showModal, setShowModal] = useState(false);
  const [textTask, setTask] = useState();
  const [isChecked, setChecked] = useState(false);

  function handleModal() {
    setShowModal(true);
    console.log(showModal);
  }

  function handleCancel() {
    setShowModal(false);
    console.log(showModal);
  }

  const handleInputChange = (e, type) => {
    switch (type) {
      case "text":
        setTask(e.target.value);

        if (e.target.value === "") {
          console.log("Input is null");
        }
        break;
      default:
    }
  };

  function handleSubmit() {
    setShowModal(false);
  }

  function showText() {
    if (!showModal) {
      const task = textTask;
      return <TextSpan>{task}</TextSpan>;
    }
  }

  const showTxt = showText();
  return (
    <>
      <ContentTextWrap>
        <Input
          className="checkTask"
          id="checkbox"
          onChange={() => setChecked(!isChecked)}
          type="checkbox"
        />
        <ContentTextItem onClick={handleModal}>
          <ContentText checked={isChecked}>
            {props.text}
            {showTxt}
          </ContentText>
        </ContentTextItem>
      </ContentTextWrap>
      <Modal
        title={props.title}
        isOpen={showModal}
        onCancel={handleCancel}
        onSubmit={handleSubmit}
      >
        <Input
          className="taskTextContent"
          type="text"
          onChange={(e) => handleInputChange(e, "text")}
          value={textTask}
        ></Input>
      </Modal>
    </>
  );
}

export default TaskContentText;
