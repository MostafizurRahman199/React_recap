import React from 'react'

function displayMessage(){
    return "WOW!"
}


export default function Hello(props) {

    const {name, message, seatnumber, person} = props
        console.log(person);
  return (
    <div>{"Name : "+name+" Message : "+ message+ " Seat Number : "+ seatnumber + " Age : "+person.age }</div>
  )
}
 