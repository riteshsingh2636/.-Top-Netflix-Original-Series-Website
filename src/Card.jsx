import React from "react";
import MovieCard from "./component/card/MovieCard";
import images2 from "./images/images2.jpg";
import image from "./images/54686.jpg";
import download1 from "./images/download1.jpg";

function Card() {
  return (
    <>
      <div className="card_container">
        <h1 className="heading"> Top Netflix Original series </h1>
        <MovieCard
          banner={images2}
          title="Batman Dark Knight"
          category="Netflix Original series"
          btnName="Watch Now"
          url="https://www.netflix.com/in/title/70079583"
        />
        <MovieCard
          banner={image}
          title="Black Panther"
          category="Netflix Original series"
          btnName="Watch Now"
          url="https://www.imdb.com/title/tt1825683/"
        />
        <MovieCard
          banner={download1}
          title="The Twilight Saga"
          category="Netflix Original series"
          btnName="Watch Now"
          url="https://www.netflix.com/in/title/70099113"
        />

        <div className="cards">
          <div className="card">
            <img src={require("./images/images.jpg")} alt="img" />
            <div className="card_info">
              <span className="card_category"> Netflix Original series </span>
              <h3 className="card_title"> Iron Man </h3>
              <a href="https://www.netflix.com/es-en/title/70080038" target="">
                <button className="btn"> Watch Now </button>
              </a>
            </div>
          </div>
        </div>

        <div className="cards">
          <div className="card">
            <img src={require("./images/download.jpg")} alt="img" />
            <div className="card_info">
              <span className="card_category"> Netflix Original series </span>
              <h3 className="card_title"> Thor Love and Thunder</h3>
              <a
                href="https://www.hotstar.com/in/movies/thor-love-and-thunder/1260110008"
                target=""
              >
                <button className="btn"> Watch Now </button>
              </a>
            </div>
          </div>
        </div>

        <div className="cards">
          <div className="card">
            <img src={require("./images/images1.jpg")} alt="img" />
            <div className="card_info">
              <span className="card_category"> Netflix Original series</span>
              <h3 className="card_title"> Loki </h3>
              <a href="https://www.imdb.com/title/tt9140554/" target="">
                <button className="btn"> Watch Now </button>
              </a>
            </div>
          </div>
        </div>

        <div className="cards">
          <div className="card">
            <img src={require("./images/download2.jpg")} alt="img" />
            <div className="card_info">
              <span className="card_category"> Netflix Original series </span>
              <h3 className="card_title"> Vampire Diaries </h3>
              <a href="https://www.netflix.com/in/title/70143860" target="">
                <button className="btn"> Watch Now </button>
              </a>
            </div>
          </div>
        </div>

        <div className="cards">
          <div className="card">
            <img src={require("./images/download4.jpg")} alt="img" />
            <div className="card_info">
              <span className="card_category"> Netflix Original series </span>
              <h3 className="card_title"> Dark </h3>
              <a href="https://www.netflix.com/in/title/80100172" target="">
                <button className="btn"> Watch Now </button>
              </a>
            </div>
          </div>
        </div>

        <div className="cards">
          <div className="card">
            <img src={require("./images/images2.jpg")} alt="img" />
            <div className="card_info">
              <span className="card_category"> Netflix Original series </span>
              <h3 className="card_title"> Batman Dark Knight </h3>
              <a href="https://www.netflix.com/in/title/70079583" target="">
                <button className="btn"> Watch Now </button>
              </a>
            </div>
          </div>
        </div>

        <div className="cards">
          <div className="card">
            <img src={require("./images/images3.jpg")} alt="img" />
            <div className="card_info">
              <span className="card_category"> Netflix Original series </span>
              <h3 className="card_title"> The Flash</h3>
              <a href="https://www.netflix.com/in/title/81251375" target="">
                <button className="btn"> Watch Now </button>
              </a>
            </div>
          </div>
        </div>

        <div className="cards">
          <div className="card">
            <img src={require("./images/images4.jpg")} alt="img" />
            <div className="card_info">
              <span className="card_category"> Netflix Original series </span>
              <h3 className="card_title"> Man of Steel </h3>
              <a href="https://www.netflix.com/in/title/70264797" target="">
                <button className="btn"> Watch Now </button>
              </a>
            </div>
          </div>
        </div>

        <div className="cards">
          <div className="card">
            <img src={require("./images/images5.jpg")} alt="img" />
            <div className="card_info">
              <span className="card_category"> Netflix Original series </span>
              <h3 className="card_title"> Batman vs Superman </h3>
              <a href="https://www.netflix.com/in/title/80081793" target="">
                <button className="btn"> Watch Now </button>
              </a>
            </div>
          </div>
        </div>

        <div className="cards">
          <div className="card">
            <img src={require("./images/images6.jpg")} alt="img" />
            <div className="card_info">
              <span className="card_category"> Netflix Original series </span>
              <h3 className="card_title"> Spider Man </h3>
              <a
                href="https://www.netflix.com/in/browse/genre/871925"
                target=""
              >
                <button className="btn"> Watch Now </button>
              </a>
            </div>
          </div>
        </div>

        <div className="cards">
          <div className="card">
            <img src={require("./images/images7.jpg")} alt="img" />
            <div className="card_info">
              <span className="card_category"> Netflix Original series </span>
              <h3 className="card_title">
                {" "}
                Captain America The First Avenger{" "}
              </h3>
              <a href="https://www.imdb.com/title/tt0458339/" target="">
                <button className="btn"> Watch Now </button>
              </a>
            </div>
          </div>
        </div>

        <div className="cards">
          <div className="card">
            <img src={require("./images/images8.jpg")} alt="img" />
            <div className="card_info">
              <span className="card_category"> Netflix Original series </span>
              <h3 className="card_title"> Avengers Endgame </h3>
              <a href="https://www.imdb.com/title/tt4154796/" target="">
                <button className="btn"> Watch Now </button>
              </a>
            </div>
          </div>
        </div>

        <div className="cards">
          <div className="card">
            <img src={require("./images/images9.jpg")} alt="img" />
            <div className="card_info">
              <span className="card_category"> Netflix Original series </span>
              <h3 className="card_title"> Thor: The Dark World </h3>
              <a href="https://www.imdb.com/title/tt1981115/" target="">
                <button className="btn"> Watch Now </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
