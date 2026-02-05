import React from 'react'
import Body from './components/Body'
import { ToastContainer } from 'react-toastify';
import MovieDialog from './components/MovieDialog';

const App = () => {
  return (
    <div>
      <Body/>
      
      <ToastContainer />
      <MovieDialog/>

    </div>
  )
}

export default App

