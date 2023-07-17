import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncSeries,
  // getAllMovies,
  // getAllSeries,
  getDetailLoading,
} from "../../feature/movies/movieSlice";
import Loader from "../Loader/Loader";
import ConnectionError from "../ConnectionError/ConnectionError";

const Home = () => {
  // const MovieText = "harry";
  const dispatch = useDispatch();
  const isOnline = navigator.onLine;
  // const alreadySearchedMovies = useSelector(getAllMovies);
  // const alreadySearchedSeries = useSelector(getAllSeries);
  // console.log(alreadySearchedMovies);

  const loading = useSelector(getDetailLoading);

  useEffect(() => {
    // const fetchMovies = async () => {
    //   const response = await MovieApi.get(
    //     `?apikey=${APIkey}&s=${MovieText}&type=movie`
    //   ).catch((err) => {
    //     console.log(err);
    //   });

    // console.log(response);
    // if (
    //   Object.keys(alreadySearchedMovies).length == 0 &&
    //   Object.keys(alreadySearchedSeries).length == 0
    // ) {
    dispatch(fetchAsyncMovies("Harry"));
    dispatch(fetchAsyncSeries("harry"));
    // }
  }, [dispatch]);

  return (
    <div>
      <div className="banner-img"></div>
      {isOnline ? loading ? <Loader /> : <MovieListing /> : <ConnectionError />}
    </div>
  );
};

export default Home;
