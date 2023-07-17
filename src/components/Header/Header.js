import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import user from "../../images/user.png";
import "./Header.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {
  fetchAsyncMovies,
  fetchAsyncSeries,
} from "../../feature/movies/movieSlice";
import { useDispatch } from "react-redux";

library.add(faSearch);

const Header = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // dispatch(fetchAsyncMovies(term));

  const submitHandler = (e) => {
    e.preventDefault();
    if (term != "") {
      // dispatch(fetchAsyncMovies(term));
      // dispatch(fetchAsyncSeries(term));

      navigate(`/search/${term}`);
    }
  };

  const homeclickHandler = () => {
    dispatch(fetchAsyncMovies("harry"));
    dispatch(fetchAsyncSeries("harry"));
    setTerm("");
  };
  return (
    <>
      <div className="header">
        <Link to={"/"} onClick={homeclickHandler}>
          <div className="logo">Movies App</div>
        </Link>
        <div className="search-bar">
          <form onSubmit={submitHandler}>
            <input
              type="text"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              placeholder="Search Movies or Shows"
            />
            <button type="submit">
              <FontAwesomeIcon icon="search" />
            </button>
          </form>
        </div>
        <div className="user-image">
          <img src={user} />
        </div>
      </div>
    </>
  );
};

export default Header;
