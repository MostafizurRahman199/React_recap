import React from "react";

export default function Fruit({name, prize, color, weight, stock}) {

  console.log(prize);

//   return  <ul>{prize > 5 ?( <li>{name} {prize}</li>) : ("")}</ul>

return <>

{
    !stock && <ul> <li>{name} {prize}</li></ul>
}

</>
    
 }
