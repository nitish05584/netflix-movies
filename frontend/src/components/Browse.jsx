import React, { useEffect } from 'react'
import Header from './Header.jsx'
import {  useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import MainContainer from './MainContainer.jsx';
import MovieContainer from './MovieContainer.jsx';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies.jsx';
import usePopularMovies from '../hooks/usePopularMovies.jsx';
import useTopRatedMovies from '../hooks/useTopRatedMovies.jsx';
import useUpcomingMovies from '../hooks/useUpcomingMovies.jsx';
import SearchMovie from './SearchMovie.jsx';

const Browse = () => {
  const user = useSelector(store => store.app.user);
  const toggle=useSelector(store=>store.movie.toggle)
  const navigate = useNavigate();

  
    useNowPlayingMovies() ;
    
    usePopularMovies();

    useTopRatedMovies();

    useUpcomingMovies()
 



  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, []);

  return (
    <div>
      <Header />
      <div>
        {
          toggle? <SearchMovie/> :<>
               <MainContainer />
               <MovieContainer />
          </>

        }

    
      
      </div>
    </div>
  )
}

export default Browse
