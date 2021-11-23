import React from 'react'
import {MdOutlineFavoriteBorder,MdDeleteOutline} from "react-icons/md"
import "./MovieCard.css"

function MovieCard({title,rating,id,favourite,setFavourite,isAdded}) {
    console.log(favourite)

    const checkExistence = () => {
        let isAlreadyInFavourites = favourite.findIndex((movie)=>movie.id===id);
    
        if(isAlreadyInFavourites>=0){
            return true;
        }
        else{
            return false;
        }
    }

    const handleFavourite = ()=>{
        let isalready = checkExistence();
        
        if(!isalready){
            setFavourite([...favourite,{id,title,rating,isAdded:true}]);
        }

        
    }

    const handleRemove = ()=>{
        let index = favourite.findIndex((movie)=>movie.id===id);
        let newFavourite = [...favourite];
        newFavourite.splice(index,1);
        setFavourite(newFavourite);
        
    }
    return (
        <div className="card">
            <div className={`card-body ${isAdded && "card-added"}`}>
                
            </div>
            <div className="card-footer">
               <div className="card-meta">
                   <h4>{title}</h4>
                   <span>{rating}</span>
               </div>
               <div className="card-control">
                   <button className="favourite_btn" onClick={isAdded?handleRemove:handleFavourite}>
                      {isAdded?<MdDeleteOutline/>:<MdOutlineFavoriteBorder/>}
                   </button>
               </div>
            </div>
            <div className="card-overlay">

            </div>
        </div>
    )
}

export default MovieCard
