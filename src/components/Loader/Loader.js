import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClapperboard } from "@fortawesome/free-solid-svg-icons";
import "./Loader.scss";

library.add(faClapperboard);

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader">
        <FontAwesomeIcon icon="fa-solid fa-clapperboard" bounce />
      </div>
    </div>
  );
};

export default Loader;
