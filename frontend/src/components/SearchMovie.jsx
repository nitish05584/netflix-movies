import React, { useState } from 'react';
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setSearchMovieDetails } from '../redux/searchSlice';
import MovieList from './MovieList';
import { options, SEARCH_MOVIE_URL } from '../util/constant';

const SearchMovie = () => {
  const [searchMovie, setSearchMovie] = useState("");
  const dispatch = useDispatch();

  // ✅ get state from Redux
  const { movieName, searchedMovie } = useSelector((store) => store.searchMovie);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!searchMovie.trim()) return; // prevent empty searches

    try {
      const res = await axios.get(
        `${SEARCH_MOVIE_URL}${searchMovie}&include_adult=false&language=en-US&page=1`,
        options
      );

      const movies = res?.data?.results || [];
      dispatch(setSearchMovieDetails({ searchMovie, movies }));
    } catch (error) {
      console.error("Error fetching movies:", error);
    } finally {
      setSearchMovie(""); // ✅ clear input after request completes
    }
  };

  return (
    <>
      <div className='flex justify-center pt-[10%] w-[100%]'>
        <form onSubmit={submitHandler} className='w-[50%]'>
          <div className='flex justify-between shadow-md border-2 p-2 border-gray-200 rounded-lg w-[100%]'>
            <input
              value={searchMovie}
              onChange={(e) => setSearchMovie(e.target.value)}
              className='w-full outline-none rounded-md text-lg'
              type="text"
              placeholder='Search Movies...'
            />
            <button className='bg-red-800 text-white rounded-md px-4 py-2'>
              Search
            </button>
          </div>
        </form>
      </div>

      {/* ✅ Show results if available */}
      {searchedMovie && searchedMovie.length > 0 ? (
        <MovieList
          title={movieName}
          searchMovie={true}
          movies={searchedMovie}
        />
      ) : (
        <h1 className='text-center mt-10 text-gray-500'>Movie Not Found!!</h1>
      )}
    </>
  );
};

export default SearchMovie;
