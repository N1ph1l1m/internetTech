import React from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './buttonGroup.css'

const ButtonGroup = ({
    children, //кнопки которые будет оборачивать
     className,// передаваемые стили
     vertical, // ориентация кнопок
      ...attrs
  }) => {
  
    const classes = classNames(
      'btn-group',// стандартный стиль кнопки
      className,// передаваемый класс кнопки через пропс 
      { vertical },// применяется стиль к кнопке если состояние активное
    );  
    return (
        <div
        className={classes}
        {...attrs}>
            {children}
        </div>
    );
  };
  // присваевание типов к каждому пропсу 
  ButtonGroup.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    vertical: PropTypes.bool,
  };
  // дефолтное значение пропсов
  ButtonGroup.defaultProps = {
    children: null,
    onClick: () => {},
    className: '',
    vertical: false,
  };
  
  export default ButtonGroup;
  