import React from "react";
import Welcome from "./Welcome";
import Code from "./Code";

export const ConditionalComponent = (props) => {

  const display = false;
    let message;


//   if(display){
//    message = <h1>This is message one</h1>
//   }else{ 
//    message = <h1>This is message two</h1>
//   }


return  display ? <Welcome></Welcome>: <Code></Code>;


};
