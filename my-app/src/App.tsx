import { useState } from "react";
import "./App.css";
import useTime from "./hooks/useTime";

function App() {
  const day = useTime<string>("day");
  const hour = useTime<string>("hour");

  return (
    <>
      <div>
        <p>Day : {day}</p>
        <p>Hour : {hour}</p>
      </div>
    </>
  );
}

export default App;
