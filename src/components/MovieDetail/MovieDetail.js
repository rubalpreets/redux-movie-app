import React, { useEffect } from "react";
import {
  fetchAsyncMovieOrSeriesDetail,
  getSelectedMovieOrShow,
  getDetailLoading,
  // removeSelectedShowOrMovies,
} from "../../feature/movies/movieSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faThumbsUp,
  faFilm,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
import "./MovieDetail.scss";
import Loader from "../Loader/Loader";
import ConnectionError from "../ConnectionError/ConnectionError";

library.add(faStar, faThumbsUp, faFilm, faCalendar);

const MovieDetail = () => {
  let { imdbID } = useParams();
  // console.log(imdbID);
  const dispatch = useDispatch();
  const isOnline = navigator.onLine;

  const LoadingStatus = useSelector(getDetailLoading);

  useEffect(() => {
    dispatch(fetchAsyncMovieOrSeriesDetail(imdbID));
    //cleanup function
    // return () => dispatch(removeSelectedShowOrMovies());
  }, [dispatch, imdbID]);

  const movieOrSeriesDetails = useSelector(getSelectedMovieOrShow);

  // console.log(movieOrSeriesDetails);

  if (isOnline) {
    if (LoadingStatus == true) {
      return <Loader />;
    } else {
      return (
        <div className="movie-section">
          <div className="section-left">
            <div className="movie-title">{movieOrSeriesDetails.Title}</div>
            <div className="movie-rating">
              <span>
                {" "}
                IMDB Rating <FontAwesomeIcon icon="star" /> :{" "}
                {movieOrSeriesDetails.imdbRating}{" "}
              </span>
              <span>
                {" "}
                IMDB Votes <FontAwesomeIcon icon="thumbs-up" /> :{" "}
                {movieOrSeriesDetails.imdbVotes}{" "}
              </span>
              <span>
                {" "}
                Runtime <FontAwesomeIcon icon="film" /> :{" "}
                {movieOrSeriesDetails.Runtime}{" "}
              </span>
              <span>
                {" "}
                Year <FontAwesomeIcon icon="calendar" /> :{" "}
                {movieOrSeriesDetails.Year}{" "}
              </span>
            </div>
            <div className="movie-plot">{movieOrSeriesDetails.Plot}</div>
            <div className="movie-info">
              <div>
                <span>Director</span>
                <span>{movieOrSeriesDetails.Director}</span>
              </div>
              <div>
                <span>Stars</span>
                <span>{movieOrSeriesDetails.Actors}</span>
              </div>
              <div>
                <span>Genres</span>
                <span>{movieOrSeriesDetails.Genre}</span>
              </div>
              <div>
                <span>Languages</span>
                <span>{movieOrSeriesDetails.Language}</span>
              </div>
              <div>
                <span>Awards</span>
                <span>{movieOrSeriesDetails.Awards}</span>
              </div>
            </div>
          </div>

          <div className="section-right">
            <img
              src={movieOrSeriesDetails.Poster}
              alt={movieOrSeriesDetails.Title}
            />
          </div>
        </div>
      );
    }
  } else {
    return <ConnectionError />;
  }
};

export default MovieDetail;
