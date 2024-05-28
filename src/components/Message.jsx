import React from "react";

export default function Message() {
  const display = () => {
    {
      console.log("Button clicked");
    }
    return (
      <>
        <h1>Hello How are you?</h1>
      </>
    );
  };

  return (
    <div>
      <button onClick={() => display()}>Get Message</button>
    </div>
  );
}
