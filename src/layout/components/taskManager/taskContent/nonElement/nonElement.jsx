import React from "react";
import Icon from "../../../../../components/icon/icon";
import "../nonElement/nonElement.css";
function NonElement(props){
    return(
        <div className="wrapBlock">
            <Icon>
                {props.icon}
            </Icon>
            <span className="titleInfo">
                {props.title}
            </span>
            <span className="textInfo">
                {props.text}
            </span>
        </div>
    )

}export default NonElement;