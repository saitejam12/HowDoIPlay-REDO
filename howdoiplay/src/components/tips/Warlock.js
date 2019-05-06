import React from "react";

const Warlock = () => {
  return (
    <div class="hero hero-warlock" data-patch="684">
      <div class="herotitle">
        <span class="portrait">
          <span class="portrait-frame">
            <span class="portrait-frame-inner">
              <img
                class="portrait-img"
                width="256"
                height="144"
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAQABAAD/2wBDAAICAgICAgICAgICAgICAwQDAgIDBAUEBAQEBAUGBQUFBQUFBgYHBwgHBwYJCQoKCQkMDAwMDAwMDAwMDAwMDAz/2wBDAQMDAwUEBQkGBgkNCwkLDQ8ODg4ODw8MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCAAbADADAREAAhEBAxEB/8QAGQAAAwEBAQAAAAAAAAAAAAAABgcICQUE/8QALRAAAAUDAgUDAwUAAAAAAAAAAQIDBAUABhEHEhMhIjFRFEFhCBVxFkJEUrH/xAAaAQACAwEBAAAAAAAAAAAAAAAFBgIEBwMI/8QALBEAAQQBAgYABAcAAAAAAAAAAQACAwQRBSEGEhMUMUEHIzJRIiQzcYGhsf/aAAwDAQACEQMRAD8AxGSZnVxgoiJvaqZKPhWhpBEW3pnbjy55xum7uiTSwx3fxkx8fI0q6k+W9IIo/p/1aZwjo8VT89b2DdwFLWoNwvLinJQ8UUWzMxx4oAHM1N1RnbRCNIfEVo6zdknjGG+kBRCb9gqmkukb0UibaCgh0ib4rs4hwS42Mwu3Ry5g1Ui52DiqAkRPC4J2R+IBMDzrpzKLhsqJsvTsHb31DonDYx5fUOlR7ABe1CbVvDcDyUS0yt152g+Pf7IUvu6eM79MyWESnNsbJB/XsA4opRpdtHzu+pEuIdd72TtYD8sf2qOsTRFWItdvcZYv9Qyks34qzE6YmBIo/u5kxmg898ueQp04mws2UcasxL+BnU2htyLbeKzZDG3YbP4CjOnyB7c+0u6tFyv2TX09bkviD2AmB5FnhNdMO4h7DVS6Oi7PpcIXZ2TAZ6Bybp8grKLNoOPN1HeLGKOA/GaGS6uxjdtyj+n8PXb5xFGVydRtSYxnFv4+12isZHOTZEhx69vgw5H/AGrmjadI94km3wiutOr6TS7eE5lf5P2Clq2nb5W6GM6u3+4ItHJFlmxuxyFHO2mS3gN3STpleSSXDNytxdO/q60ZRskWCacbbUoi0Kk7brphvyBcDgfFKElCTOwyEffM1rsPOCPSy9+o+4YnUm8VZe2kSFh2RRKRyQMAqce5qM0GdIcp8qpcqSyM64GWJLWVd0pp9NEk2ZhAhuhwT2Evmrliv1WcrlQrTMikbJ5wqki78GeR+6LSbyQIPVtMYRAvxjNJlugYXcq9L8J8QVbNfqR+vX2UsXsY29Eu420R5l9q0SMYC8syuLpCScon05STNIAUyZBLwewhQjWD8tPPw/YDeOR6Xsuxu39WoPARzgee0PFR0s/KUeO2NF7YekXW6giMOkUUUhLtNy2h5GhVwnrLQuHImu09oIHhL+5WzchTbUES8/YoUaqOJCzrXq8bCeVoH8InsnojjAXpDwHKhOq/qJw4F/DUOF//2Q=="
                data-src="./assets/media/heroes/large/warlock.jpg"
                alt="Warlock"
              />
            </span>
          </span>
        </span>
        <span class="name">Warlock</span>
      </div>
      <div class="tips">
        <h1>Tips</h1>
        <ul>
          <li>
            For some reason the targeting cursor doesn't show it and the tooltip
            doesn't mention it, but Fatal Bonds does have a logic to how it
            chooses secondary Bonds. Basically, it'll search for the nearest
            unit (any unit, including neutrals and units in fog) within 700
            range. Once it finds a unit, it'll continue searching in another 700
            range around the new target until it runs out of bounces or runs out
            of targets.
          </li>
          <li>
            An effective way to use Fatal Bonds in lane is to prepare casting it
            once a wave dies. Chances are the enemy will bumble into their new
            fresh wave as they retreat which is the perfect time to cast it.
            Fatal Bonds lasts 25 seconds, which is roughly the amount of time it
            takes a creep wave to die, so they'll probably take the full damage
            from however many creeps you Bonded.
          </li>
          <li>Roshan can be Fatally Bonded to enemies.</li>
          <li>
            Damage shared through Fatal Bonds is dealt with the same damage type
            as the original source of damage. The shared damage calculates
            reductions (from armor or magic resistance) independently on each
            target.
          </li>
          <li>Damage taken through Fatal Bonds can disable Blink Daggers.</li>
          <li>
            "Overkill" damage on Fatally Bonded targets will spread the full
            damage of the killing damage instance. So if you Laguna Blade a 10HP
            ranged creep, the full Laguna Blade damage will still spread to all
            other Bonded targets.
          </li>
          <li>
            You get a better heal for your buck than the DoT with Shadow Word
            because healing ignores magic resistance. Warlock's
            damage/animation/range are so good you could possibly end up being
            able to deal more net damage by spending the heal on yourself in
            lane and right clicking the enemy.
          </li>
          <li>
            You can and should use Shadow Word to heal your Golem. You can also
            use Urn of Shadows to heal it. Hell, you can Salve, Bottle, or even
            Clarity it too.
          </li>
          <li>
            Upheaval is a proactive slow, not a reactive one. This makes it a
            great area denial spell, especially against aggressive lanes. If
            enemies are choked near the side shop in lane when their wave is
            almost dead, just cast the whole circle behind them. Either they
            have to run through the entire thing, or they have to walk forward
            into your creeps.
          </li>
          <li>
            This also makes it a good spell for discouraging encounters. If your
            team is Roshing, don't sit there plinking away with your weak ass
            auto attacks. Start channeling your slow on a choke point. If you
            think the enemy team is about to push up high ground, start
            channeling Upheaval on the stairs. If your teammate is getting
            chased, cast the circle in front of their path from a safe distance
            so you can get some charge time on the slow. Even if you cancel it
            immediately, as long as an enemy walked into it, they will be slowed
            for 3 seconds.
          </li>
          <li>
            When you drop the Golem on the enemy team and win the fight,
            remember to keep using it. The Golem is especially good at cutting
            off a creep wave during a tower push since its Flaming Fist ability
            deals damage in an AoE.
          </li>
          <li>
            Don't feed your Golem though. It drops a substantial gold bounty.
            Deny it if you have to.
          </li>
          <li>The stun from Chaotic Offering pierces spell immunity.</li>
          <li>
            Try to get your allies to cast buffs on your Golem during the game.
            Surge, Ion Shell, Press the Attack, Frost Shield, Empower, Alacrity,
            Bloodlust, Aphotic Shield, and Mjollnir's Static Shield are a few
            choice examples that make the Golem especially deadly. Even Dazzle
            can Shallow Grave the Golem.
          </li>
          <li>The Golem has 1800 night vision.</li>
          <li>
            The "Summon Golem on Death" talent won't summon a Golem for an Aegis
            death, only a real death.
          </li>
          <li>
            A fantastic hero to get a Refresher on since Fatal Bonds and Shadow
            Word fully stack when Refreshed. I guess two Golems is pretty handy
            too.
          </li>
        </ul>
        <h1>Counters</h1>
        <ul>
          <li>
            Pay attention to who's Fatally Bonded to you in the late game. You
            may inadvertently be killing your support who narrowly escaped just
            because you wanted to finish off Rosh.
          </li>
          <li>
            Fatal Bonds can be dispelled. Offensive or defensive Shadow Word can
            both be purged off as well.
          </li>
          <li>
            The strength of Upheaval's slow isn't determined by how long you've
            been standing in it, but by how long Warlock has been channeling it.
            Don't think you can just quickly run into an established Upheaval
            and get out.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Warlock;
