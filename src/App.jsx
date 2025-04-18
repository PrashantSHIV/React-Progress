// import { useState } from "react";
// import { ColorThemeSwitcher } from "./components/ColorThemeSwitcher";
// import { Counter } from "./components/Counter";
// import { ToDoApp } from "./components/ToDoApp";
// import { QuoteGen } from "./components/QuoteGen";
import { WeatherApp } from "./components/Weather";

function App(){

  /* Color Theme Switcher:
  function changeTheme(){
  //   if (state == false){
  //       setState(true)
  //   }
  //   else setState(false)
  // }
  const [state,setState] = useState(false) */

  return <main className={`h-[100vh] w-[100%] bg-[#698fb6]`}>
    <WeatherApp/>
  </main>
}

export default App;