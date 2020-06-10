import React from 'react'
import SmileyIcon from './SmileyIcon';
const Icon = (props) =>{
    console.log(props);
    let  icon = props.icon;
    if (icon) return <SmileyIcon/>;
    return "";
  }
export default Icon