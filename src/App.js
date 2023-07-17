import "./App.scss";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Footer from "./components/Footer/Footer";
import SearchResults from "./components/SearchResults/SearchResults";

function App() {
  return (
    <div className="outer-container">
      <div className="App">
        <Router>
          <Header />
          <div className="container">
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/movie/:imdbID" element={<MovieDetail />} />
              <Route path="/search/:searchTerm" element={<SearchResults />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
