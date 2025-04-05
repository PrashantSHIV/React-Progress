import { useState } from "react";
import { ColorThemeSwitcher } from "./components/ColorThemeSwitcher";
import { Counter } from "./components/Counter";
import { ToDoApp } from "./components/ToDoApp";

function App(){

  /* Color Theme Switcher:
  function changeTheme(){
  //   if (state == false){
  //       setState(true)
  //   }
  //   else setState(false)
  // }
  const [state,setState] = useState(false) */

  return <main className={`h-[100vh] w-[100%] bg-zinc-900`}>
    <ToDoApp/>
  </main>
}

export default App;