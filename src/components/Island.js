import React, { useState } from "react";
import street from "./images/street.jpeg";
import "./Island.css";

const Island = () => {
  const [readMore, setReadMore] = useState(false);
  const [readLess, setReadLess] = useState(false);

  const extraContent = (
    <div>
      <div className="extra-content">
        <article className="extra-content-articales">
          <h4>People</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
            consectetur neque ab porro quasi culpa nulla rerum quis minus
            voluptatibus sed hic ad quo sint, libero commodi officia aliquam!
            Maxime.
          </p>
        </article>
        <article className="extra-content-articales">
          <h4>Environment </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
            consectetur neque ab porro quasi culpa nulla rerum quis minus
            voluptatibus sed hic ad quo sint, libero commodi officia aliquam!
            Maxime.
          </p>
        </article>

        <article className="extra-content-articales">
          <h4>Culture </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
            consectetur neque ab porro quasi culpa nulla rerum quis minus
            voluptatibus sed hic ad quo sint, libero commodi officia aliquam!
            Maxime.
          </p>
        </article>
      </div>
    </div>
  );
  return (
    <div className="about" id="island">
      <h2>ISLAND</h2>
      <div className="container">
      <img src={street} alt="street" />
        <div className="col-2">
          {/* <span className="line"></span> */}
          <article>
            <h1>Guraidhoo Island</h1>{" "}
            <p>
               Is a bliss for the ones escaping the crowd into
              the serenity of nature. Inhabited only since 1970, the island, its
              colourful houses occupying around 1700 people and coral chunks
              make it a beautiful place to be at.
            </p>
          </article>
          <button
            className="button"
            onClick={() => {
              setReadMore(!readMore, setReadLess(!readLess));
            }}
          >
            {!readLess ? "Read more" : "Read less"}
          </button>
        </div>
     
      </div>
      <div className="col-3">
       {readMore && extraContent}
        </div>
    </div>
  );
};

export default Island;
