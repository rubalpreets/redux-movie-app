import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWifi } from "@fortawesome/free-solid-svg-icons";
import "./ConnectionError.scss";

library.add(faWifi);

const ConnectionError = () => {
  return (
    <div className="loader-container">
      <div className="text">Connection Error</div>
      <div className="loader">
        <FontAwesomeIcon icon="fa-solid fa-wifi" shake />
      </div>
    </div>
  );
};

export default ConnectionError;
