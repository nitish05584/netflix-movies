import { configureStore } from '@reduxjs/toolkit';
import userReducer from "./userSlice.jsx";
import movieReducer from "./movieSlice.jsx"
import searchSlice from "./searchSlice";


export const store = configureStore({
  reducer: {
   app: userReducer,
   movie:movieReducer,
   searchMovie:searchSlice
  },
});
