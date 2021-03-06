import React from "react";

const Pangolier = () => {
  return (
    <div class="hero hero-pangolier" data-patch="684">
      <div class="herotitle">
        <span class="portrait">
          <span class="portrait-frame">
            <span class="portrait-frame-inner">
              <img
                class="portrait-img"
                width="256"
                height="144"
                src="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABLAAD/4QMvaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0MiA3OS4xNjA5MjQsIDIwMTcvMDcvMTMtMDE6MDY6MzkgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE4IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpENzYxQzAzM0FFNDAxMUU4QUMyQUI0ODg5Q0EwNDgxMCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpENzYxQzAzNEFFNDAxMUU4QUMyQUI0ODg5Q0EwNDgxMCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkQ3NjFDMDMxQUU0MDExRThBQzJBQjQ4ODlDQTA0ODEwIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkQ3NjFDMDMyQUU0MDExRThBQzJBQjQ4ODlDQTA0ODEwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQAAwICAgICAwICAwUDAwMFBQQDAwQFBgUFBQUFBggGBwcHBwYICAkKCgoJCAwMDAwMDA4ODg4OEBAQEBAQEBAQEAEDBAQGBgYMCAgMEg4MDhIUEBAQEBQREBAQEBARERAQEBAQEBEQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQ/8AAEQgAGwAwAwERAAIRAQMRAf/EAI4AAAIDAQEAAAAAAAAAAAAAAAYHBAgJAwUBAAMBAQEAAAAAAAAAAAAAAAQFBgMCBxAAAQMCAwUFAw0AAAAAAAAAAQIDBBEFABIGIUFREwcxcSIyFWFSFIGhQoIjM0NjJDQWJggRAAIBAwQABAUFAAAAAAAAAAECABEDBCExEgVBgRMz8FGhMgZhcSJCNP/aAAwDAQACEQMRAD8Az0sthfuiyVuJZaT946s0A7uODiQN5tYx2utRYawtB2QsB0OOPbs5GUE+wY1F0DaV+L+PK4qxMIocSVbLWzEhtOMMNOFbEuhoF9+NrLn1KqdY0bqrPomyRUbx59Nuvl+07Ci2y+n1GKnY68gUcaHYD7cUmP3DK3C5qJLZX4rVeVk6jwMez/VJmHpZUvTShLiXRaWZYB2pae8KgoDbvwN2b1UACo8DO+t6y1f5Nebgyjb9Znd1W0srTmtLtFjoKYokOFgH3VKqMTqigiG8tGpJ100fKcfLFuQgsNGoSlVanG64d9l5UEf4xsIKGTVapmwWUQp0RMYsJCAUp8wG84U+iUaksLfZ8LdPAbQ+6TdS9MJclaY1Ny5MSbRTbbtPs1cU1wsy1ZLgcaRe2cHuVBjYt/SyXL52o9FRhJt8VKlOxyjOh9JFcp4d+Fd/sGqATrC3vuyjWhH1ntaF09BvV6h3SCl6ywWEkzYLlSS8lXkKT8xw/wAftSbfEmpnFz03tG5cH8xFF/o3TjVx1Gtm1xiuTIcIQ2kVUScNx9tSZ5/e3lf7be5UJ1LseQpBB2pVUjA9u/dTVTK97dhxqKQuVeYGsrc5DdSGrgyKoV2Z6cMOEcZS8WFHETtXHbTVYv2mFMXYrkDKpo5SMS+RWpB8JhedWeq7SwnS/rXrnpkiKsrfnWaeUsvRU1JbbJpmHdiZzOtW+tRowhdnONsgHUS2N31DZo1rt+pbTFzTrgzy0FAol0rHmUj3hgj8cwmYtyFAvxpC+xvsqgcq1gm/ossLk6v1AOUbawZr7y07AfooFd5w77G8SpW2ZPIQxqZn83TKPJhnLQbeEkW+vqDdM9fyaZ/krsxpZ9wb+W8EyacDt5zldK+pKrXtFa0r9am/C7L90yYhR+o9YjZfV8lWP2/I+C7Bx8VMYL5Qc7y6tgz/ANUzc7Lyk5edl5G7yU25u/BWB/menz/rv9Yxz9xvtOnVz4j+I9R6+qZOW1kzcn4Ts/Ap46cc2FK+4v7/ABWBD7DP/9k="
                data-src="./assets/media/heroes/large/pangolier.jpg"
                alt="Pangolier"
              />
            </span>
          </span>
        </span>
        <span class="name">Pangolier</span>
      </div>
      <div class="tips">
        <h1>Tips</h1>
        <ul>
          <li>
            Swashbuckle sets your damage flat and attacks every unit in the AoE
            four times. There are a few interactions to note:
          </li>
          <ul>
            <li>
              Even though there are four... swashes? Each target receives their
              own individual 'attack.' A Javelin Piercing one target doesn't
              mean every target will get Pierced on the same swipe.
            </li>
            <li>Javelin is a popular damage option regardless.</li>
            <li>Each attack will burn mana with Diffusal Blade.</li>
            <li>
              Crits are not great because they multiply off of Swashbuckle's
              damage, but Bloodthorn can be good since the active will guarantee
              a crit for all four attacks.
            </li>
            <li>
              Basher gives you a pretty high probability Bashing a target in
              Swashbuckle, but only one unit in the AoE can ever get bashed due
              to Basher's cooldown.
            </li>
            <li>
              Maelstrom also has a cooldown, but you can potentially proc it
              twice in a Swashbuckle.
            </li>
            <li>
              Echo Sabre will slow every target in the AoE and won't put the
              Sabre on cooldown.
            </li>
            <li>Quelling Blade doesn't add damage to creeps in Swashbuckle.</li>
            <li>
              Cleave can take advantage of the individual Swashbuckle attacks
              since each target will proc its own cleave AoE.
            </li>
          </ul>
          <li>
            Swashbuckle attacks have true strike and works through disarms.
          </li>
          <li>
            Swashbuckle and Shield Crash's movements are classed as forced
            movement. You can use them to move up and down cliffs, travel
            through trees without destroying them, and break out of spells like
            Disruptor's Kinetic Field.
          </li>
          <li>You can Shield Crash while rooted/leashed.</li>
          <li>
            Every time you successfully hit a hero in Shield Crash, the damage
            resistance buff is refreshed. The resistance buff can increase if
            you hit more heroes, but it'll never decrease if you hit fewer
            heroes.
          </li>
          <li>
            Shield Crash doesn't factor illusions for damage reduction, but it
            does factor Meepos. Sweet, sweet Meepos.
          </li>
          <li>
            You're disabled during the Shield Crash animation when walking, but
            you're not disabled during the Shield Crash animation when Rolling.{" "}
            <a href="https://www.reddit.com/r/DotA2/comments/7d2rog/pangolier_trick_that_people_may_not_know/">
              This means that you can cancel a Rolling Shield Crash into
              Swashbuckle to move your Shield Crash landing AoE.
            </a>
          </li>
          <li>All items work while in Rolling Thunder:</li>
          <ul>
            <li>You can channel a TP while Rolling.</li>
            <li>
              You can Blink while Rolling. You'll continue Rolling in the same
              direction after Blinking.
            </li>
            <li>
              You can Eul's yourself while Rolling to multihit a single enemy
              without needing to bounce.
            </li>
            <li>
              If you don't press anything except for the Shield Crash hotkey
              while in the Eul's Cyclone, you'll do stationary Shield Crash
              in-place after landing.
            </li>
          </ul>
          <li>
            Rolling Thunder can bounce into the secret shops, Power Cogs,
            Fissure, and Ice Shards. You don't bounce off any other structures,
            though.
          </li>
          <li>
            Rolling Thunder provides spell immunity and also serves as a basic
            dispel on cast.
          </li>
          <li>
            Hitting someone in Chronosphere with Rolling Thunder will damage and
            bump them away like normal and you'll continue Rolling in place.
          </li>
          <li>
            You can jump off the edges of the map in Rolling Thunder with Shield
            Crash. The only situation I can see this being useful is if you want
            to hide yourself as you TP out if the enemy has a spell immune
            piercing disable.
          </li>
          <li>
            Pangolier is the only other hero besides Io that doesn't have to
            turn to cast items.
          </li>
          <li>Every Lucky Shot debuff fully stacks on an enemy.</li>
        </ul>
        <h1>Counters</h1>
        <ul>
          <li>
            Pangolier can't cast Swashbuckle or Rolling Thunder if he's
            rooted/leashed.
          </li>
          <li>
            Leashes/roots that go through spell immunity will cause Pango's
            Rolling Thunder do a burnout and just spin in place.
          </li>
          <li>
            Spells causing{" "}
            <a href="https://dota2.gamepedia.com/Forced_movement#Non-disabling_forced_movement">
              forced movement
            </a>
            can interrupt Pangolier's Rolling Thunder cast animation and put the
            spell on cooldown. Force Staff also works.
          </li>
          <li>
            Bloodseeker's Rupture forces Pangolier to make some tough choices
            about life while Rolling.
          </li>
          <li>
            The Shield Crash damage reduction buff can be purged off Pango.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Pangolier;
