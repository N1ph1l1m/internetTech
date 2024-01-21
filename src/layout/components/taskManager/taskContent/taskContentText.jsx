import React from "react";
import styled from "styled-components";
import Input from "../../../../components/input/input";

const ContentTextWrap = styled.div`
    width:100%;
    height:40px;
    display:flex;
    align-items:center;
    padding:10px;
    background-color:#ECF1FE;
    border-radius:5px;
    margin-bottom:10px;
    &:hover{
        cursor:pointer;
        background-color:#F8F8F8;
    }
`
const ContentText = styled.span`
font-size:16px;

`

function TaskContentText(props){
    return(
        <ContentTextWrap>
           <Input  className="checkTask" id="checkbox"  onChange={() => {}} type="checkbox" />
           <ContentText>{props.text}</ContentText>
        </ContentTextWrap>
    )
}
export default TaskContentText;