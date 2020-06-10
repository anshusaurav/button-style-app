import React from 'react';
import Icon from './Icon';
const Button = props => {
  const { text, type, size} = props;
  return (
    <div class='single-btn'>
        <button className={`${type} ${size}`}>
          <Icon icon = {props.icon}/>{text.toUpperCase()}
        </button>
      
    </div>
  )
}


export default Button
