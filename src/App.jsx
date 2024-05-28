import { ConditionalComponent } from "./components/ConditionalComponent";
import Counter from "./components/Counter";
import Form from "./components/Form";
import Fruits from "./components/Fruits";
import Hello from "./components/Hello"
import Message from "./components/Message";

function App() {


const seatnumber = [1,4,7];

const person = {
  name : "Shifat",
  age : "25",
  seatnumber: [199, 200, 201]
}

  return (
    <div className="App">
        {/* <Hello name={"Shifat"} message={"I want to be a world best programmer" } seatnumber={seatnumber}  person={person}></Hello> */}

        {/* <Fruits></Fruits> */}

        {/* <ConditionalComponent></ConditionalComponent> */}

        {/* <Message></Message> */}

        {/* <Counter></Counter> */}

        <Form></Form>
       
    </div>
  )
}

export default App


