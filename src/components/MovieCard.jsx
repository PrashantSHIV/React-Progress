import axios from "axios"
import { useState } from "react"

export function MovieCard({poster,name,year,type,id}){

    const [rate,setRate] = useState('');

    ( async ()=>{
        const data = await axios.get(`http://www.omdbapi.com/?apikey=f8b589ff&i=${id}
            `);
        setRate(data.data.imdbRating)
    })();

    return <div className="bg-zinc-800 p-4 flex w-58 flex-col gap-2 rounded-md h-fit">
                <img className="w-50 h-50 rounded-md object-contain" src={poster} alt="" />
                <h1 className="text-[17px] font-[500]">{name}</h1>
                <h2>{year}</h2>
                <h3>{type}</h3>
                <h4>IMDB: {rate}</h4>
            </div>
}