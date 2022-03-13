import React from "react";
import { useState } from "react";
import { AppStyle } from "./App-style";
import Lander from "./components/Lander";

export const TaskList = React.createContext();

function App() {
  const windowHeight = window.innerHeight
  const [appHeight,setHeight]=useState(windowHeight)
  

  window.addEventListener('resize', function() {
    // viewport and full window dimensions will change

    const windowHeight = window.innerHeight;

    setHeight(windowHeight)
  });


  return (
    <AppStyle windowHeight={appHeight}>
      <Lander/>
    </AppStyle>
  );
}



export default App;
