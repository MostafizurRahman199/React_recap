import React from "react";
import Welcome from "./Welcome";
import Code from "./Code";

export const ConditionalComponent = (props) => {

  const display = true;
    let message;


  if(display){
   message = <h1>This is message one</h1>
  }else{
   message = <h1>This is message two</h1>
  }

  return message;

};
