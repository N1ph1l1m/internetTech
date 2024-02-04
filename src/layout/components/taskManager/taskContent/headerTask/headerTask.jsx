import React from "react";
import Icon from "../../../../../components/icon/icon";
import "../headerTask/headerTask.css";
import { CgMoveTask } from "react-icons/cg";
import { BiSort } from "react-icons/bi";
import { IoIosMore } from "react-icons/io";

function HeaderTask(props){
    return(
        <div className="headerWrap">
            <div className="headerTitle">
            <Icon className="taskContent">
            <CgMoveTask size="30" />
          </Icon>
          <span className="titleTask">{props.title}</span>
            </div>
            <div className="headerIcons">
            <Icon className="taskContent">
            <BiSort size="20" />
          </Icon>
          <Icon className="taskContent">
            <IoIosMore size="20" />
          </Icon>
            </div>
        </div>
    )
};
export default HeaderTask