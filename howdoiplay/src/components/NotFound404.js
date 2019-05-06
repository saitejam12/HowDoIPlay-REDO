import React from "react";
//import "./NotFound404.css";

const NotFound404 = () => {
  return (
    <div>
      <header id="header" style={{ paddingTop: "20px" }}>
        <h1>What are you doing here?</h1>
        <p>
          No wards, huh. Let's get you back to{" "}
          <a href="http://howdoiplay.com">where you belong</a>.
        </p>
      </header>

      <div id="bg" style={{ opacity: "0.35" }}>
        <img
          alt="404 page Punk Maiden"
          src="http://howdoiplay.com/assets/media/404maiden.png"
        />
      </div>

      <footer id="footer">
        <ul
          className="details"
          style={{
            listStyle: "none",
            lineHeight: "40px"
          }}
        >
          <li>
            If you reached this page in error, let me know{" "}
            <a href="https://www.twitter.com/tsunami643">@tsunami643</a>
          </li>
          <li>
            Art by{" "}
            <a href="http://fruitscs.deviantart.com/art/delinquent-CM-438735626">
              fruitscs
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default NotFound404;
