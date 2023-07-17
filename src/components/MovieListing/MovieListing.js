import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getAllSeries } from "../../feature/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from "../../common/slickSettings.js";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

library.add(faTriangleExclamation);

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const series = useSelector(getAllSeries);
  console.log(movies);

  let movielist,
    serieslist = "";

  movielist =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => {
        return <MovieCard key={index} movie={movie} />;
      })
    ) : (
      <div className="movie-error">
        <h1>{movies.Error} </h1>
      </div>
    );

  serieslist =
    series.Response === "True" ? (
      series.Search.map((movie, index) => {
        return <MovieCard key={index} movie={movie} />;
      })
    ) : (
      <div className="movie-error">
        <h1>{series.Error} </h1>
      </div>
    );

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <span>
          <h2>Movies</h2>
          {movies.Response === "True" ? (
            <h4>{`(${movies.Search.length} movies found)`}</h4>
          ) : (
            ""
          )}
        </span>
        <div className="movie-container">
          {movies.Response === "True" ? (
            <Slider {...settings}>{movielist}</Slider>
          ) : (
            <div className="movie-error">{movies.Error}</div>
          )}
          {/* <Slider {...settings}>{movielist}</Slider> */}
        </div>
      </div>
      <div className="movie-list">
        <span>
          <h2>Shows</h2>
          {series.Response === "True" ? (
            <h4>{`(${series.Search.length} shows found)`}</h4>
          ) : (
            ""
          )}
        </span>
        <div className="movie-container">
          {series.Response === "True" ? (
            <Slider {...settings}>{serieslist}</Slider>
          ) : (
            <div className="movie-error">{series.Error}</div>
          )}
        </div>
      </div>

      {movies.Response === "False" && series.Response === "False" ? (
        <div className="not-found-icon">
          <FontAwesomeIcon icon="fa-solid fa-triangle-exclamation" bounce />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default MovieListing;
