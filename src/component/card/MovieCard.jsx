import React from "react";

function MovieCard(props) {
  // console.log(props);

  return (
    <>
      <div className="cards">
        <div className="card">
          <img src={props.banner} alt="img" />
          <div className="card_info">
            <span className="card_category"> {props.category} </span>
            <h3 className="card_title"> {props.title} </h3>
            <a href={props.url} target="">
              <button className="btn"> {props.btnName} </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieCard;
