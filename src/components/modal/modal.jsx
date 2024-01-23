import React from "react";
// import styled from "styled-components";
 import Portal  from "./portal";
import PropTypes from 'prop-types';
import { MdOutlineCancel } from "react-icons/md";

import './modal.css';
import Icon from "../icon/icon";
import Button from "../button/button";


const Modal = ({
    title, isOpen, onCancel, onSubmit, children,
}
    
) =>{

        return(
            <>
                {isOpen && 
                    <Portal>
        <div className="modalOverlay">
            <div className="modalWindow">

                <div className="modalHeader">
                <div className="modalTitle">{title}</div>
                <Icon  onClick={onCancel}>
                <MdOutlineCancel  size="20"/>
                </Icon>
                </div>
                <div className="modalBody">
                    {children}
                </div>
                <div className="modalFooter">
                    <Button onClick={onCancel} invert>Cancel</Button>
                    <Button onClick={onSubmit}>Submit</Button>
                </div>
            </div>
        </div>
        </Portal>}
            </>
        )  
};

Modal.propTypes = {
    title: PropTypes.string,
    isOpen: PropTypes.bool,
    onCancel: PropTypes.func,
    onSubmit: PropTypes.func,
    children: PropTypes.node,
  };
  
  Modal.defaultProps = {
    title: 'Modal title',
    isOpen: false,
    onCancel: () => {},
    onSubmit: () => {},
    children: null,
  };
export default Modal;