import React from "react";
import "./assets/styles/minimap-icons.css";
import "./assets/styles/normalize.css";
import "./assets/styles/style.css";

const donationquotearray = [
  //   `You don't even need to donate, <audio id='tts' preload='none'><source src='./assets/media/texttospeech.mp3' type='audio/mpeg'><source src='./assets/media/texttospeech.ogg' type='audio/ogg'></audio><a title='The Ballad of Admiral Bulldog' href='#' onclick='tts.play();return false;'>I'll give you the text-to-speech for free</a>`,
  "This button makes a last hit sound. For me, not for you",
  "Quick, donate all your unreliable cash before you die! It's not morbid, it's efficiency",
  "This button is tradeable, marketable, and giftable",
  "Here, pretend this button is a chest. SPINSPINSPINSPIN--you got an ugly Sven set. Now wasn't that easier?",
  "Here, pretend this button is a chest. SPINSPINSPINSPIN--you got an ugly Axe set. Now wasn't that easier?",
  "Here, pretend this button is a chest. SPINSPINSPINSPIN--you got an ugly TA set. Now wasn't that easier?",
  "Stack my camps IRL. Don't worry, I'll ignore the gesture just like a real carry"
];
let donationQuote =
  donationquotearray[Math.floor(Math.random() * donationquotearray.length)];
export default function Social() {
  return (
    <div>
      <div id="links">
        <span id="donation-quote">{donationQuote}</span>
        <hr style={{ height: "2px", visibility: "hidden" }} />
        <button
          id="paypal-button"
          className="paypal"
          title="Help support the site!"
          // onClick={
          //   "window.location.href='https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=9YV8EDYT2T3NS'"
          // }
        >
          <span className="paypal-button-logo"></span>
        </button>
      </div>

      <div id="social">
        <a
          target="_blank"
          rel="noopener noreferrer"
          title="Twitter"
          href="https://twitter.com/tsunami643"
          className="twitter"
        >
          
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a
          target="_blank"
          rel="noopener noreferrer"
          title="Twitch"
          href="https://twitch.tv/tsunami643"
          className="twitch"
        >
          
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a
          target="_blank"
          rel="noopener noreferrer"
          title="YouTube"
          href="https://youtube.com/tsunami643"
          className="youtube"
        >
          
        </a>
      </div>
    </div>
  );
}
