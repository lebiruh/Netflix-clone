import React, { useEffect, useState } from 'react';
import { axiosInstance } from '../../../utils/axios';
import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube';
import "./row.css";

const Row = ({title, fetchUrl, isLargeRow}) => {

  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  const base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    (async () => {
      try {
        const request = await axiosInstance.get(fetchUrl);
        setMovies(request.data.results)
      } catch (error) {
        console.log(error);
      }
    })()
  }, [fetchUrl]);

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl('')
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.orginal_name)
      .then((url) => {
        try {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'))
        }catch (error) {
          console.error("Invalid URL:", error.message);
        }
      })
    }
  }

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1
    }
  }

  return (
    <div className='row'>
      <h1>{title}</h1>
      <div className="row_posters">
        {
          movies?.map((movie, index) => {
            return (
              <img  
                onClick={() => handleClick(movie)}
                key={index}
                src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                alt={movies.name}
                className={`row_poster ${isLargeRow && 'row_poster_large'}`}
              />
            )
              
          })
        }
      </div>
      <div style={{padding: '40px'}}>
        {
          trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>
        }
      </div>
    </div>
  )
}

export default Row