import React, { useState, useEffect } from 'react';
import axios from '../../utils/axios';
import { useParams } from 'react-router-dom';
import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube';
import './movie.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const Movie = () => {
    const [movie, setMovie] = useState({});
    const [trailerUrl, setTrailerUrl] = useState("");
    const { id } = useParams();
    const API_KEY = process.env.REACT_APP_API_KEY; // Accessing the API key from environment variables

    const base_url="https://image.tmdb.org/t/p/original";
    const [loading, setLoading] = useState(true);

    const [genresArray,setGenresArray]=useState([]);
    const [spokenLanguages, setSpokenLanguages]=useState("");
    const [watchTrailerClicked, setWatchTrailerClicked]=useState(false);



    useEffect(() => {
        (async () => {
            try {
                const request = await axios.get(`/movie/${id}?api_key=${API_KEY}`);
                setMovie(request.data);
                setLoading(false);
                console.log(movie);
            } catch (error) {
                console.log("error", error);
                setLoading(false)
            }
        })();
    }, [id]);

    useEffect(() => {
        if (movie?.genres) {
            const genres = movie.genres.map(genre => genre.name).join(", ");
            setGenresArray(genres);
        }
        if (movie?.spoken_languages) {
            const languages = movie.spoken_languages.map(lang => lang.name).join(", ");
            setSpokenLanguages(languages);
        }
    }, [movie]);



    
    const handleClick = () => {
        if(watchTrailerClicked){
            setWatchTrailerClicked(false);
        }else{
            setWatchTrailerClicked(true);
        }
        
        if (trailerUrl){
            setTrailerUrl("");
        }else{
            movieTrailer(movie?.title || movie?.name || movie?.original_name)
            .then((url) => {
                if (url) {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get('v'));
                } else {
                    console.log("Trailer not found");
                }
            })
            .catch((error) => console.log(error));

        }
    };

    const closeVideo=()=>{
        setTrailerUrl("");
    }

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    };

    
    return (
        <div>

            {loading ? (
            <p>Loading...</p>
        ) : (
            
            <div>

                <Header/>

                <div className='image_container'>
                    <img src={`${base_url}${movie?.poster_path}`} alt={movie?.title || movie?.name || movie?.original_name} className='movie_image' />
                </div>
                <div className='info'>
                    <p style={{padding:['0px 0px 10px 0px'] }} ><strong>Title</strong>: {movie?.title || movie?.original_name || movie?.name} [{movie?.release_date}]</p>
                    <p style={{paddingBottom: '10px' }} ><strong>Genre</strong>: {genresArray}</p>
                    <p style={{paddingBottom: '10px' }} ><strong>Language</strong>: {spokenLanguages} </p>
                    <p style={{paddingBottom: '10px' }} ><strong>Story line</strong>: {movie?.overview}</p>
                    <button className='btn' onClick={handleClick}>Watch Trailer</button>
                </div>
                <div style={{ padding: '20px' }}>
                    {trailerUrl && <button className='closebtn' onClick={()=>closeVideo()}>X</button>}  
                    {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
                    {(!trailerUrl && watchTrailerClicked )&& <p style={{width:'60%', margin:'0 auto 0 auto', fontSize:'25px', color:'rgb(100,100,100)'}}>This movie doesn't have a trailer on youtube :( </p>}
                    
                </div>

                <Footer/>
            </div>
            )}

        </div>
    );
};

export default Movie;
