import React, { useState } from "react";

export default function Form() {
  const [value, setValue] = useState({
    firstName: "",
    lastName: "",
    age: "",
  });

const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(value);
}

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <form className="flex flex-col w-1/3 text-center mx-auto gap-2 justify-center">
          <input
            type="text"
            value={value.firstName}
            onChange={(e) => setValue({ ...value, firstName: e.target.value })}
            className="border border-pink-600 focus:ring-2 focus:ring-pink-500 focus:opacity-75 p-5"
            placeholder="First Name"
          />

          <input
            type="text"
            value={value.lastName}
            onChange={(e) => setValue({ ...value, lastName: e.target.value })}
            className="border border-pink-600 focus:ring-2 focus:ring-pink-500 focus:opacity-75 p-5"
            placeholder="Last Name"
          />

          <input
            type="text"
            value={value.age}
            onChange={(e) => setValue({ ...value, age: e.target.value })}
            className="border border-pink-600 focus:ring-2 focus:ring-pink-500 focus:opacity-75 p-5"
            placeholder="Age"
          />
          <hr />


          <p className="bg-pink-600 text-3xl font-thin py-2">OutPut</p>


          <h1 className="bg-violet-600 border border-pink-600 focus:ring-2 focus:ring-pink-500 focus:opacity-75 p-5">
            {value.firstName}{" "}
          </h1>
          <h1 className="bg-violet-600 border border-pink-600 focus:ring-2 focus:ring-pink-500 focus:opacity-75 p-5">
            {value.lastName}{" "}
          </h1>
          <h1 className="bg-violet-600 border border-pink-600 focus:ring-2 focus:ring-pink-500 focus:opacity-75 p-5">
            {value.age}{" "}
          </h1>


          <button className="border rounded-lg bg-pink-400 focus:ring-2 focus:ring-pink-200 focus:opacity-75 p-4" onClick={(e)=>{
                handleSubmit(e)
          }}>Submit</button>


        </form>
      </div>
    </>
  );
}
