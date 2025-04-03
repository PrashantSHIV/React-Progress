import { useState } from "react";
import { ColorThemeSwitcher } from "./components/ColorThemeSwitcher";
import { Counter } from "./components/Counter";

function App(){

  function changeTheme(){
    if (state == false){
        setState(true)
    }
    else setState(false)
  }
  const [state,setState] = useState(false)

  return <main className={`h-[100vh] w-[100%] ${state && 'bg-black'}`}>
    <ColorThemeSwitcher state={state} changeTheme={changeTheme} />
  </main>
}

export default App;