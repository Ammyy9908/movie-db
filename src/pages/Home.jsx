import React from 'react'
import MovieCard from '../components/MovieCard'
import "./Home.css"
import movies from '../data/movies.js'
function Home() {
    const [favourite,setFavourite] = React.useState([]);
    console.log(favourite)

    

    return (
        <div className="home">
            <div className="movie-container">
                <h1>All Movies</h1>
                    <div className="movies">
                        {
                            movies.map((movie,index)=>{
                                return <MovieCard key={index} id={movie.id} movie={movie} setFavourite={setFavourite} favourite={favourite} title={movie.name} rating={movie.rating}/>
                            })
                        }
                    </div>
            </div>
            <div className="favourites">
                {favourite.length>0 && <h1>Your Favourites</h1>}
                <div className="favourite-cards">
                {
                    favourite.length>0?favourite.map((movie)=>{
                        return <MovieCard title={movie.title} id={movie.id} rating={movie.rating} isAdded={movie.isAdded} favourite={favourite} setFavourite={setFavourite}/>
                    }):null
                }
                </div>
            </div>
        </div>
    )
}

export default Home
