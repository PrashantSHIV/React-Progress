import { useState } from "react"

export function MovieSearchInput({searchMovie,setMovie,movie}){

    return <form onSubmit={(e)=>searchMovie(e)} className="flex items-center mt-6">
                <input onChange={(e)=>{ setMovie(e.target.value);}} value={movie} className="bg-zinc-700 py-3 px-5 rounded text-xl w-100 mr-4" type="text" placeholder="Search for a movie..." />
                <button className="py-3  px-4 bg-blue-500 rounded text-xl">Search</button>
            </form>
}