

import { getPopularMovie } from '../redux/movieSlice';
import {useDispatch} from "react-redux";
import axios from "axios"
import { options, Popular_Movie } from '../util/constant';

const usePopularMovies = async () => {
    const dispatch = useDispatch();
    try {
        const res = await axios.get(Popular_Movie, options);
        dispatch(getPopularMovie(res.data.results))
    } catch (error) {
        console.log(error);
    }
}

export default usePopularMovies