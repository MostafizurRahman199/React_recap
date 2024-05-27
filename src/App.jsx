import { ConditionalComponent } from "./components/ConditionalComponent";
import Fruits from "./components/Fruits";
import Hello from "./components/Hello"

function App() {


const seatnumber = [1,4,7];

const person = {
  name : "Shifat",
  age : "25",
  seatnumber: [199, 200, 201]
}

  return (
    <div className="App">
        <Hello name={"Shifat"} message={"I want to be a world best programmer" } seatnumber={seatnumber}  person={person}></Hello>

        <Fruits></Fruits>

        <ConditionalComponent></ConditionalComponent>
       
    </div>
  )
}

export default App


