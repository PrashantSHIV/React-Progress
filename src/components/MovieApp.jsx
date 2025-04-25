import axios from "axios";
import { MovieCard } from "./MovieCard";
import { MovieSearchInput } from "./MovieSearchInput";
import { useState } from "react";

export function MovieApp(){

    const [movie,setMovie] = useState('');
    const [movies,setMovies] = useState([]);

    async function getMovie(){
        try {
            let data = (await axios.get(`https://www.omdbapi.com/?apikey=f8b589ff&s=${movie}`)).data;
            console.log(data.Search)
            if (data.Search)  setMovies(data.Search);
        } catch (error) {
            console.log('Error in fetching data',error.message);
        }
    }

    function searchMovie(e){
        e.preventDefault();
        getMovie()
    }

    return (
        <main className="text-white flex gap-6 flex-col items-center pt-10">
            <h1 className="text-5xl font-bold">Movie Search App</h1>
            <MovieSearchInput searchMovie={searchMovie} setMovie={setMovie} movie={movie}/>
            <div className="flex flex-wrap justify-center gap-3">
                { movies.length > 0? movies.map(movie=> <MovieCard poster={movie.Poster} name={movie.Title} year={movie.Year} type={movie.Type} id={movie.imdbID} />): <h1>No Search yet</h1> }
            </div>
        </main> 
    )
}