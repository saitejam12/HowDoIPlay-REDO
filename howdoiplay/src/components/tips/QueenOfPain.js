import React from "react";

const QueenOfPain = () => {
  return (
    <div class="hero hero-queen-of-pain" data-patch="684">
      <div class="herotitle">
        <span class="portrait">
          <span class="portrait-frame">
            <span class="portrait-frame-inner">
              <img
                class="portrait-img"
                width="256"
                height="144"
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAQABAAD/2wBDAAICAgICAgICAgICAgICAwQDAgIDBAUEBAQEBAUGBQUFBQUFBgYHBwgHBwYJCQoKCQkMDAwMDAwMDAwMDAwMDAz/2wBDAQMDAwUEBQkGBgkNCwkLDQ8ODg4ODw8MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCAAbADADAREAAhEBAxEB/8QAGgAAAgMBAQAAAAAAAAAAAAAABwkDBQYIBP/EADAQAAAFAgQEBAUFAAAAAAAAAAECAwQFAAYHERIhCBMxQRUjYaEiMkJSYjNDU5HB/8QAGwEAAwEBAQEBAAAAAAAAAAAABAUGAwcCAAH/xAAjEQACAgICAQQDAAAAAAAAAAABAgADBBESIQUTIjFxBkFR/9oADAMBAAIRAxEAPwBCiSYnGsCdRpXXyMLWGlyzVkXA2n4NTS5b/qJ9jp9y1lWBY2jD8ylko2I0F3ho/wCKTDOJnIJJGJvSOHRGrLj8ChfqIbcKNxsdqSSJN5F1VqdzVhhM94XsG3j+WM3kLzkTgaXcJCGRftIX0rxkIbn7mlDJUnUU3iXPzF43K8mpg+t2t0/EvYKDYhH4ymoxWejnBG4SEpqIVoouq0ZasmeZg9aGseOsTGJM3EcQ0aHP5esvRQPx71lityuAjbzGP6WAWjWeFSDuV2jBy8JdAMrXdfC7YGNuB8s8g32/qqEHRnKbkBT47kPFPbN4xCM9cd0XqMra6Z9MWwKf6g6EEM/8rPfc2qHsH9ivpUE3wi5KXLmZDl7VNZVhFxnZ/DYi2eOWYORYb5loqqyTXkMPRhMXg4+HtyFy8yYkx5rsB/bJsIB7hS42Gwsf0Iz8YoOQEk/hUw7YOEI6IduhFPWquUg6SFDrvR/iaySXnn86z0rqTHGu/mH7AnEuYtuJCB8RIzTVMJNYj8vbt0qgReQnLfUVLNsOp6se8QZq8Y1tbxZVJ6i0UAgAU2yhh6B6jXz18R3PwWqz+34nO0jFv2DJNF7Fu2C6RfM5hBAB9QGpzylZ9QNOtfhudW+E1e+xIo6MZTdtTICIElo3zWQfyF3zL7UKWNZU/owXLfdxSE7Ddu3e3WyI8QSdEKgGkqxQOAfL92dH4KjgfuTmZYyW7B1O8JNiybYWXIo2ZtW6gpCAnTTKUcsumYBTxAAvUj77GsuPI7+4tqMIQr3IpClAxz6gAOu9C7O48qQfyWDlMnj0SXQXTzSjpy2z1BXtj3MiojI78jI1WxLbVVj2Sip49PWoZIgmHbuIhWrAFO4sosau/wBp19RbVzopNLmkCNE02xBQHMiQAQO/YKS56jiJW4Tln2TP/9k="
                data-src="./assets/media/heroes/large/queenofpain.jpg"
                alt="Queen of Pain"
              />
            </span>
          </span>
        </span>
        <span class="name">Queen&nbsp;of&nbsp;Pain</span>
      </div>
      <div class="tips">
        <h1>Tips</h1>
        <ul>
          <li>
            There's a cast time on Shadow Strike, so stop-cancel the animation
            when laning to try and bait out defensive spells from enemies.
          </li>
          <li>
            Only Blink to initiate if you're absolutely positive that the
            enemies can't take a fight when you show up. If it turns out that
            Lion had just enough mana for a Hex and now Ursa is TPing in, that
            Blink cooldown is going to feel like an eternity.
          </li>
          <li>Scream of Pain can hit invis units and units in fog.</li>
          <li>Sonic Wave can kill couriers.</li>
          <li>
            Sonic Wave's knockback doesn't disable enemies and won't cancel
            channels.
          </li>
          <li>
            The theoretical order of spell blocking priority with the "Spell
            Block" talent goes: Allied Linken's -> Spell Block talent -> QoP's
            own Linken's.
          </li>
        </ul>
        <h1>Counters</h1>
        <ul>
          <li>
            Shadow Strike is not a constant DoT. There's an initial nuke damage
            when the projectile hits and then a tick of damage every 3 seconds
            (5 ticks, for 15 seconds). Get a quick Bottle sip or Armlet toggle
            between ticks to stay alive.
          </li>
          <li>
            Shadow Strike's projectile can be completely disjointed by
            invisibility and blinks.
          </li>
          <li>You can deny allies affected by Shadow Strike.</li>
          <li>
            Watch her Blink animation to determine the direction that she Blinks
            in. The particle 'cone' always points in the direction that she
            traveled.
          </li>
        </ul>
        <div class="video-wrapper">
          <iframe
            title="Dealing with QOP.. Uh What a Pain!!"
            width="672"
            height="420"
            src="//www.youtube.com/embed/sFZAz3Sz1Kk"
            frameborder="0"
            allowfullscreen="0"
          />
        </div>
      </div>
    </div>
  );
};

export default QueenOfPain;
