import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./row.css"; 
import axios from "../../../utils/axios";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";
import { Height } from '@mui/icons-material';


function Row({title,fetchUrl,isLargeRow}) {
    const navigate=useNavigate();
    const [movies,setMovie]=useState([]);
    const [trailerUrl,setTrailerUrl]=useState("");

    const base_url="https://image.tmdb.org/t/p/original";

    useEffect(()=>{
        (async()=> {
            try{
                const request=await axios.get(fetchUrl);
                console.log(request.data.results);
                setMovie(request.data.results);
            }catch(error) {
                console.log("error",error);
            }
        })()
    },[fetchUrl]);


    const handleNavigate =(movieId) =>{
        navigate(`/movie/${movieId}`)
    }

    const opts={
        height: '390',
        width: "90%",
        playerVars:{
            autoplay:1,
        },
    }

     
    return(
        <div className='row'>
            <h1>{title}</h1>
            <div className='row_posters'>
                {movies?.map((movie,index) => (
                        <div onClick={()=>handleNavigate(movie.id)} key={index} className='container' >
                            <img
                                src={`${base_url}${isLargeRow? movie.poster_path : (movie.backdrop_path || movie.poster_path) }`} alt={movie.name} className={`row_poster  
                                    ${isLargeRow && "row_posterLarge"}`}
                            />
                        </div>
                   
                ))}
            </div>
            <div style={{ padding: '20px'}}>
            </div>

        </div>
    )

}

export default Row;