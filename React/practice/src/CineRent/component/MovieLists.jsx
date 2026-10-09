import React from 'react'
import MovieCard from "./MovieCard"
import { initialData } from '../utils'

const MovieLists = () => {

  return (
    <div className="content">

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">

            {
                initialData().map((movie)=>(
                    <MovieCard key={movie.id} movie={movie}/>
                ))
            }

        </div>
    </div>
  )
}

export default MovieLists