import React from "react";

export default function Fruit({name, prize, color, weight, stock}) {
  return <div>
    <h1>Name : {name}</h1>
    <h1>Color : {color}</h1>
    <h1>Prize : {prize}</h1>
    <h1>Weight : {weight}</h1>
    <h1>Stock : {stock}</h1>
    <hr />
  </div>;
}
