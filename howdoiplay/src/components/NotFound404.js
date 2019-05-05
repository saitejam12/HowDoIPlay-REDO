import React from "react";

const NotFound404 = () => {
  return (
    <div>
      <header id="header">
        <h1>What are you doing here?</h1>
        <p>
          No wards, huh. Let's get you back to{" "}
          <a href="http://howdoiplay.com">where you belong</a>.
        </p>
      </header>

      <div id="bg">
        <img
          alt="404 page Punk Maiden"
          src="http://howdoiplay.com/assets/media/404maiden.png"
        />
      </div>

      <footer id="footer">
        <ul class="details">
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
