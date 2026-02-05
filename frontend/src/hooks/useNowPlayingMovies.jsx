import axios from "axios";
import { getNowPlayingMovies } from "../redux/movieSlice";

import {useDispatch} from "react-redux";
import { Now_Playing_Movie, options } from "../util/constant";

const useNowPlayingMovies = async () => {
    const dispatch = useDispatch();
    try {
        const res = await axios.get(Now_Playing_Movie, options);
        dispatch(getNowPlayingMovies(res.data.results));
    } catch (error) {
        console.log(error);
    }
}
export default useNowPlayingMovies;