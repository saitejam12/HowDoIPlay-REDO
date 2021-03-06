import React from "react";

const Lich = () => {
  return (
    <div class="hero hero-lich" data-patch="684">
      <div class="herotitle">
        <span class="portrait">
          <span class="portrait-frame">
            <span class="portrait-frame-inner">
              <img
                class="portrait-img"
                width="256"
                height="144"
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAQABAAD/2wBDAAICAgICAgICAgICAgICAwQDAgIDBAUEBAQEBAUGBQUFBQUFBgYHBwgHBwYJCQoKCQkMDAwMDAwMDAwMDAwMDAz/2wBDAQMDAwUEBQkGBgkNCwkLDQ8ODg4ODw8MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCAAbADADAREAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAACAQGBwkF/8QAMBAAAQMCBQICCQUAAAAAAAAAAQIDBAUGAAcREiEiUTFBCBMWMkJhgZGhFSMlNbH/xAAbAQABBQEBAAAAAAAAAAAAAAAEAQIDBQYAB//EACURAAICAQIGAwEBAAAAAAAAAAECAAMEERIFEyEiMUEUM0JRFf/aAAwDAQACEQMRAD8A5j02mhe1KUlSlHRKR4nGirlA8VOQdr2KxWhUb9okqtIRzGpKUEnj4iNMECz0Iv8An22IG/sZl2yvR9zJt2ZRp9ou24y9GcjRJIbIfRJCeggEa7dwwM24gyZMJq7AAdXnOPKhtNLn3VZrjoeaoc5z9OePBU1qSn8YXA87TIuJrp3RCsRI6mt7ikIQB1LUdAPqcWD16SqSzWRn6HDnNFyOtqQ2PFbagofjA5UHxJ9xEHluOVB6S07TIUia9GUHdrSCoDbzzgRWh7dJsKsyMyrfhO1Ghx4inZn7SwGQpbZHGnmMSlum5Yiua20Y9PUQNoZ23o1bKC9lvDqEtmLuckPpJcS547gAdPxiMW2v+YVZVTX387uhtpNRZq19Vi4FRhR6jOBMmAgaN6gkeGnbHYQs+QP5BuIOrUEz06ov22fZpMC4ZUJMZX8jTU9JKe4VoMddZbfl8ojtjKUTHxuZ+pdLVtWn2u96+FV6k6lY0djOrKkK+5xarw4VnUSrfiDWjQy/WS5YtgSa3arIaZbq7S5DlQW2CthvnpBI4xmHt2vsmmu4ez4wyPUyu3r8tenXA7RbUSLmInKdkGWBtcTuPuapPniSm/Z4gV1JZO6IG682Lnp79uPWnlzBiwGiPaZEhJVuR3RqO3zwcM8j1K74an3PNzeqGQE+g0+8YtUj2jdDqkiZDYQCF8dW5J26c4bj5y1WbzJGostTliFunuQ6XdLFSpU9qr0qrp0izWfi+RAJ0OEbLQ3cwdIb8duTsPnSXqRUFMrcTynQ8JPbGyXR1DD3MgdUbSRszv7a+1DhQpw0V5/DjD8TUC8za4DscNRr7hNt91yNVrRVGcXHUodSmztJ93tiu9w5es6O2lJkP0iMp5955SuFFairUfXDgYmxd3iEzPNllF3wW0NNobKxqgAAfbHRTIFDQhFfrrSEpQ2yyypltI0ShWquUjyw3TrIiek0SqkmQSSSfVo/zHomH9KzD5P2tP/Z"
                data-src="./assets/media/heroes/large/lich.jpg"
                alt="Lich"
              />
            </span>
          </span>
        </span>
        <span class="name">Lich</span>
      </div>
      <div class="tips">
        <h1>Tips</h1>
        <ul>
          <li>
            Frost Shield only reduces right clicks, not physical or magical
            spell damage.
          </li>
          <li>You can cast Frost Shield on creeps.</li>
          <li>
            You can cast Frost Shield on <i>all</i> towers and buildings. If you
            take the "Frost Shield Provides HP Regen" talent, it can also heal
            buildings.
          </li>
          <li>
            Targets under Sinister Gaze will ignore pathing. This allows you to
            draw targets up and down cliffs.
          </li>
          <li>Sinister Gaze can break channels.</li>
          <li>
            Don't always let the Chain Frost go as soon as you get into cast
            range. The projectile is incredibly slow and targets will usually
            split faster than the ball can travel. The closer you can get to
            your initial target, the better chances you have of getting
            successful bounces off.
          </li>
        </ul>
        <h1>Counters</h1>
        <ul>
          <li>
            Be very careful of how far Sinister Gaze can pull you out of
            position.
          </li>
          <li>
            Frost Shield and Sinister Gaze can both be dispelled with basic
            dispels.
          </li>
          <li>Frost Shield won't deal damage to units in fog.</li>
        </ul>
      </div>
    </div>
  );
};

export default Lich;
