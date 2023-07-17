import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import "./PageNotFound.scss";
import ConnectionError from "../ConnectionError/ConnectionError";

library.add(faTriangleExclamation);

const PageNotFound = () => {
  const isOnline = navigator.onLine;

  if (isOnline) {
    return (
      <div className="loader-container">
        <div className="text">404: Page Not Found</div>
        <div className="loader">
          <FontAwesomeIcon icon="fa-solid fa-triangle-exclamation" beat />
        </div>
      </div>
    );
  } else {
    return <ConnectionError />;
  }
};

export default PageNotFound;
