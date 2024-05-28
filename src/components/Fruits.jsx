import React from "react";
import Fruit from "./Fruit";

export default function Fruits() {
  const fruits = ["Apple", "Mango", "Banana", "Orange", "PineApple"];
  const prizes = [10, 20, 30, 40, 50, 60];
  const discount_prize = prizes.map((prize) => prize * (32 / 100) + " , ");

  const fruits_objects = [
    {
      name: "Apple",
      prize: 10,
      weight: "5gm",
      color: "Red",
      stock: true,
     
    },
    {
      name: "Orange",
      prize: 12,
      weight: "6gm",
      color: "Orange",
      stock: false,
    },
    {
      name: "Banana",
      prize: 4,
      weight: "10gm",
      color: "yellow",
      stock: true,
    },
    {
        name : "Mango",
        prize : 20,
        weight: "4gm",
        color:"Green",
        stock:false
    }
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>

      <h1>Discount Prize : {discount_prize}</h1>

      
        {
            fruits_objects.map((fruit=>(
           
            <Fruit name={fruit.name}  color={fruit.color} weight={fruit.weight} stock={fruit.stock} prize={fruit.prize}></Fruit>

            )))
        }
     
    </div>
  );
}
