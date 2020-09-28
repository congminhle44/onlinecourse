import React from "react";
import Header from "../Components/Header/header";

export default function notfound() {
  return (
    <div className="notFound-wrapper">
      <Header />
      <div className="notfoundMain">
        <div className="notfoundImg">
          <img src="../images/NotFoundImg.jpg" alt="not found" />
        </div>
        <div className="notFoundContent">
          <h2>page not found...</h2>
          <p>
            The page that you requested could not be found. Please go back to
            homepage or contact us if you think this is an error in the chat
            area.
          </p>
        </div>
      </div>
    </div>
  );
}
