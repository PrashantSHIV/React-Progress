import { useState } from "react"

export function Counter(){

    const [CurrValue, setValue] = useState(0)

    function changeValue(e){
        let value = CurrValue
        if (e.target.id == 'plus') value = value + 1;
        else if (e.target.id == 'minus') value = value - 1;
        setValue(value)
    }

    return <div className="counter text-white  absolute top-[50%] left-[50%] translate-x-[-50%] ">
        <h1 className="text-3xl text-center text-yellow-300 mb-4">Counter</h1>
        <div className="flex items-center text-2xl font-bold border-yellow-500 border-1">
            <button className="p-4 w-16 bg-zinc-600 " id="plus" onClick={changeValue} > + </button>
            <h1 className="p-4 bg-amber-300 text-black w-20 text-center ">{CurrValue}</h1>
            <button className="p-4 w-16 bg-zinc-600 " id="minus" onClick={changeValue}> - </button>
        </div>
    </div>
}