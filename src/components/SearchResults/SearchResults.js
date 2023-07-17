import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncSeries,
  getAllMovies,
  getAllSeries,
  getDetailLoading,
} from "../../feature/movies/movieSlice";
import Loader from "../Loader/Loader";
import { useParams } from "react-router-dom";
import ConnectionError from "../ConnectionError/ConnectionError";

const Home = () => {
  // const MovieText = "harry";
  const dispatch = useDispatch();
  const alreadySearchedMovies = useSelector(getAllMovies);
  const alreadySearchedSeries = useSelector(getAllSeries);
  const { searchTerm } = useParams();
  //   console.log(searchTerm);
  const isOnline = navigator.onLine;

  const loading = useSelector(getDetailLoading);

  useEffect(() => {
    dispatch(fetchAsyncMovies(searchTerm));
    dispatch(fetchAsyncSeries(searchTerm));
  }, [dispatch, searchTerm]);

  return (
    <div>
      <div className="banner-img"></div>
      {isOnline ? loading ? <Loader /> : <MovieListing /> : <ConnectionError />}
    </div>
  );
};

export default Home;
