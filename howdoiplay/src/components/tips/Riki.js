import React from "react";

const Riki = () => {
  return (
    <div class="hero hero-riki" data-patch="684">
      <div class="herotitle">
        <span class="portrait">
          <span class="portrait-frame">
            <span class="portrait-frame-inner">
              <img
                class="portrait-img"
                width="256"
                height="144"
                src="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMqaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjUtYzAyMSA3OS4xNTQ5MTEsIDIwMTMvMTAvMjktMTE6NDc6MTYgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDVBOUE2NTYwQTYwMTFFN0I5Njg5NENCNTIzODUzNzIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDVBOUE2NTcwQTYwMTFFN0I5Njg5NENCNTIzODUzNzIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpENUE5QTY1NDBBNjAxMUU3Qjk2ODk0Q0I1MjM4NTM3MiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpENUE5QTY1NTBBNjAxMUU3Qjk2ODk0Q0I1MjM4NTM3MiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv/uACZBZG9iZQBkwAAAAAEDABUEAwYKDQAABXEAAAW9AAAGYgAABzH/2wCEAAYEBAQFBAYFBQYJBgUGCQsIBgYICwwKCgsKCgwQDAwMDAwMEAwODxAPDgwTExQUExMcGxsbHB8fHx8fHx8fHx8BBwcHDQwNGBAQGBoVERUaHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fH//CABEIABsAMAMBEQACEQEDEQH/xACiAAADAQEBAAAAAAAAAAAAAAAEBQYDAgABAAMBAQEAAAAAAAAAAAAAAAECBAMABRAAAgIDAQACAwAAAAAAAAAAAQIAAxARBBIhQTEyExEAAgECBQUBAAAAAAAAAAAAAAECERIQMWFCAyFBkcEiMhIBAAAAAAAAAAAAAAAAAAAAQBMAAgICAgMAAgMAAAAAAAAAAAERITFBEFFhcYEgwfDR8f/aAAwDAQACEQMRAAABgqFzHGMlZTMIrIEq8o1acRTT0YkOYyG1w+ZNXnIJb3OuW+hXZUNOkAVVxs4RuGNBYP/aAAgBAQABBQLUYfNl7TiLvTX0itAw8+YK/NdZ9vT1Mk7BWKf57KVe2vZQEGn4epfXf3h1QArT+rz6rn3V+P/aAAgBAgABBQIY3BBkLgGHJOsIYTNRcGDP/9oACAEDAAEFAsmayWhhgwTllirBLIMHP//aAAgBAgIGPwJH/9oACAEDAgY/Akf/2gAIAQEBBj8CwtWbHxcvWiJ8ajS0nKW7BypVn1mj5VXuRfb+zQoWLJDfYd3kUImoxjH6w2n/2gAIAQEDAT8hv6KELBCVUApWdHohsXcHl4obqjCx3pEtHoIrrPAYKtJZpT4j0oQl0MdpxBEhC/tKpFiaP+PPEgyBYYzshP8Asf/aAAgBAgMBPyFBlWJKEg1fEhHE1CsQhIHxKK8WYGRsXw//2gAIAQMDAT8h4ggnKFaRcXQVVCE54gQrcjVcTvwK4LAj/9oADAMBAAIRAxEAABCG7t92eFEH7ur/2gAIAQEDAT8QTyn2EJuQmhHC05RhsJzZH2uEib1ObP2Fj1eGIU9lQSVDUm/oVNVqBLpoe2ZuxK0/Jdn0sYrm5b0kR+QSdvsZGksjwfbbTQwtNUYLO9iwa/X85Mc95PG36+mj16fZI/vHZ8ysH//aAAgBAgMBPxCUVGkJJcoRh3sJQiFLGqmRkVZYcCvMk3BCVkoktsiQnkc0HwZmDieBEf/aAAgBAwMBPxBcQz0L2AkXsZElHQqCbJUhiFubJTiRENihBSx2zXP6PkyX4D//2Q=="
                data-src="./assets/media/heroes/large/riki.jpg"
                alt="Riki"
              />
            </span>
          </span>
        </span>
        <span class="name">Riki</span>
      </div>
      <div class="tips">
        <h1>Tips</h1>
        <ul>
          <li>
            Smoke Screen. Great silence, great blind, great slow, great range.
            So don't hotbox your gank target in the center of the cloud unless
            you're terrified of them casting something, just leave them near the
            edge of the AoE. By reflex, most enemies won't even realize that you
            duped them until they're halfway through the cloud.
          </li>
          <li>You can Blink Strike to allies as well as enemies.</li>
          <li>
            You still have collision when you're in Cloak and Dagger, so don't
            bump into enemies you're stalking.
          </li>
          <li>Tricks of the Trade prioritizes heroes over all other units.</li>
          <li>
            Tricks of the Trade will always target real heroes out of illusions
            unless there are no real heroes in the AoE.
          </li>
          <li>
            Tricks of the Trade can hit couriers if there are no other targets
            in the AoE.
          </li>
          <li>
            Treat Tricks of the Trade how you would Slark's Shadow Dance. You
            don't really want to blow it as soon as you jump on an enemy, but
            rather use it for the banish if things are getting hairy. Enemies
            won't want to stick around in the AoE and if Blink Strike is maxed,
            it'll come off CD before Tricks ends, so you can jump to an ally to
            escape.
          </li>
          <li>
            If you're prowling around an area that you think might be sentry
            warded, try intentionally forcing creep aggro while invis by right
            clicking a hero. This is a quick way to confirm if the enemy has
            true sight or not.
          </li>
          <li>
            Another way to confirm is through heroes who go into 'attack
            stances' like Brew, Jugg, Abaddon, or listening to see if enemies
            say deny lines even though there is no one else in your lane. If
            these things happen for no good reason, they can see you.
          </li>
        </ul>
        <h1>Counters</h1>
        <ul>
          <li>
            <i>
              ♪ Turn around. Every now and then you get a little bit greedy when
              you realize that you've got no farm. Turn around. Every now and
              then you get a little bit tired of listening to all the 'missing'
              calls. Turn around. Every now and then you get a little bit
              nervous when you're in your jungle without any wards. Turn around.
              Every now and then you get a little bit scared 'cause now you're
              standing in a purple cloud. AND I NEED A STUN RIGHT NOW, AND I
              NEED ONE MORE THAN EVER. ♪
            </i>
            Riki hates attacking heroes who decide to hold a staring contest
            rather than run scared. He is practically working with a Double
            Damage rune from Cloak and Dagger when your back is turned, so if
            you think you can last the Smoke's duration, turn around and have a
            chat with him. Most of your attacks will miss, and you're still
            going to be silenced, but if backup is coming, fight him. All of
            this is assuming that you're not playing Bristleback, though.
          </li>
          <li>
            Good anti-Riki items as a support include pretty much any mid-game
            support item. Smoke Screen stops you from using spells, not items.
            Force Staff is the typical pickup, Eul's is good, and Ghost Scepter
            is good.
          </li>
          <li>
            Riki holds a strong grudge against both King Bars. BKB and MKB are
            good carry items against a Riki because they both allow you to fight
            in the Smoke.
          </li>
          <li>
            Practice the buddy system. Riki can't really deal with solo-ganking
            two heroes at the same time.
          </li>
          <li>
            Don't make it obvious that you have a sentry ward down in the lane
            unless you're ready to go for the kill.
          </li>
          <li>Riki cannot Blink Strike or Tricks of the Trade when rooted.</li>
          <li>
            Keep your Spidey senses on point. If you notice that your hero is
            doing some peculiar pathing or stutter stepping for some reason,
            Riki's probably following you around, gently licking you.
          </li>
          <li>
            When pushing, place a sentry ward in/around/behind your team out of
            the tower's sight. If your team hasn't been super aggressive with
            detection, it's highly likely that Riki is right in the middle of
            your team and waiting for the perfect Smoke.
          </li>
          <li>
            Dust of Appearance slows invis units by 20%. Since the only way Riki
            can force himself to become visible is by attacking, Dust is usually
            a huge pain for him to deal with when escaping.
          </li>
        </ul>
        <div class="video-wrapper">
          <iframe
            title="Dealing with Rikimaru"
            width="672"
            height="420"
            src="//www.youtube.com/embed/GE1lAN0dO0A"
            frameborder="0"
            allowfullscreen="0"
          />
        </div>
      </div>
    </div>
  );
};

export default Riki;
