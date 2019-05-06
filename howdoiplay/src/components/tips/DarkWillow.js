import React from "react";

const DarkWillow = () => {
  return (
    <div class="hero hero-dark-willow" data-patch="684">
      <div class="herotitle">
        <span class="portrait">
          <span class="portrait-frame">
            <span class="portrait-frame-inner">
              <img
                class="portrait-img"
                width="256"
                height="144"
                src="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABLAAD/4QMvaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0MiA3OS4xNjA5MjQsIDIwMTcvMDcvMTMtMDE6MDY6MzkgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE4IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDMjdCMDU4N0FFNDAxMUU4ODlDMEZGM0NBOEU2RUVFRCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDMjdCMDU4OEFFNDAxMUU4ODlDMEZGM0NBOEU2RUVFRCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkMyN0IwNTg1QUU0MDExRTg4OUMwRkYzQ0E4RTZFRUVEIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkMyN0IwNTg2QUU0MDExRTg4OUMwRkYzQ0E4RTZFRUVEIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQAAwICAgICAwICAwUDAwMFBQQDAwQFBgUFBQUFBggGBwcHBwYICAkKCgoJCAwMDAwMDA4ODg4OEBAQEBAQEBAQEAEDBAQGBgYMCAgMEg4MDhIUEBAQEBQREBAQEBARERAQEBAQEBEQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQ/8AAEQgAGwAwAwERAAIRAQMRAf/EAIgAAAMBAAAAAAAAAAAAAAAAAAYHCAUBAAIDAQEAAAAAAAAAAAAAAAQFAwYHAQIQAAECBAQDBQcFAAAAAAAAAAECAxEEBQYAIRITMUEHUSIyMxRhcYFCgiMWsYMkFQgRAAEDAgUCBQUBAAAAAAAAAAEAAgMRBCExQRIFcTLwUYETNMEiQiMVBv/aAAwDAQACEQMRAD8AhORoLbogU97litOlovBCc8nZUlX7Np1SfYUtSP4kzlnqHhViWGUOFFsX+fDLi2DvyGBVIdMOmJl6HTaI00A64yFIMIeI/rDCia7FaDzT6RjWRlzsgVj9W7LlpFLtMppBel856ZPyqHyj3YngaXu3Oy0RNlC6Vm84DRTOi0XK5U56kUttU0+YlcMzq9uD5p9ooFUeeijbCWg1cdEEq6cTRceVNp22mFFK48yDmMQx3FVlzIC5EUzWaJRWJdySkkpmNALm4oqBV2wwfBCx5rRO4LO3dbB5ruKZHRR29Lqk3J+3gmfYlnx/ZU0pAS22M9SccvvbgoNtAfJW3gp3W4owVaTinh1Bve/KJJyDdtU912adAV9hB1NpAyzHDCCK1hYS95wWg3r44Yt1KgrKRW+odz0yFXoyJVh5sTEzPPOAOKUOKVgwzODbeaN4IZkENx9/7jSWtowZJaVy+rV6Y2rU65IyokpycUtKCo6nXnDkYHkMSva6Z+xKOQksra3dKcZH5VUs1G9r0uF5yYfU8mVdUVhtoEJgTh9DZMYBQLJWvFccls3y9MMOyrngbWj7a+RPMY5xgBaeq9WMoEewpy/4sviqWldVScnBCjz7YZfJ4bnIjHOVdGQ1lfuV14WKSrnjtCvW278tluRdnXWW1phoySDpSOZJ4Yquwg0VyubeR9K5KeeufU9qszgplDbAkiVhejupJhxy44JH62V1UjntiZsGJopf60zciqg0anTCt+Y1laVfKEjtHPDDiY3Olc85BZ3y4Y5rQc0D0qYGlKd3SkcAMhh/NK4JJGG+SKbj0fhg1+m8Qh6rVuft6efvxXeP+Rr6ZeqSWveijpRD8QRDR5x8mOv4x54G5L5eq2bhafz9Mz4KoWj7/wCNzG963RtiG/tbXx2u9gl/cPBRre3X6JbXtDLRph6fLYjp+nVnHtjgO47x1ULux3RT91YjvUiO55avMhHj7MWLjMndVnvI5t6IZYjtiGv6YYIlzSxq/9k="
                data-src="./assets/media/heroes/large/dark_willow.jpg"
                alt="Dark Willow"
              />
            </span>
          </span>
        </span>
        <span class="name">Dark&nbsp;Willow</span>
      </div>
      <div class="tips">
        <h1>Tips</h1>
        <ul>
          <li>
            Brambles can trigger on invisible units, but they won't give true
            sight.
          </li>
          <li>
            Activating items or casting spells won't break Shadow Realm. You can
            also cast Shadow Realm while channeling a TP.
          </li>
          <li>
            However, being untargetable in Shadow Realm applies to everyone,
            including yourself and your allies. You can't self-target a Eul's or
            Force Staff and allies can't use any spells or items on you when in
            Shadow Realm.
          </li>
          <li>
            Shadow Realm will disjoint all incoming projectiles on cast. You
            will also be invulnerable to any{" "}
            <a href="https://dota2.gamepedia.com/Attack_damage#Instant_attacks">
              instant attacks
            </a>{" "}
            from spells while in Realm.
          </li>
          <li>
            The bonus damage from Shadow Realm doesn't work on buildings or
            wards, but you can still use the bonus attack range provided by the
            spell to attack those types of units.
          </li>
          <li>
            If your attack misses, Shadow Realm damage won't land. If you die
            while the Shadow Realm projectile is flying, the bonus damage won't
            land.
          </li>
          <li>
            Cursed Crown draws aggro from creeps. If you're getting chased by a
            few enemies in the jungle, you can try casting it on a neutral who
            will start following you and then start following the people chasing
            you.
          </li>
          <li>
            A target becoming banished/cycloned won't stop the Crown AoE stun
            from triggering around them.
          </li>
          <li>Jex won't attack any units in fog during Bedlam.</li>
          <li>
            Jex's targeting is completely random in Bedlam. No priority is given
            to heroes, low HP targets, units you're right clicking, or anything.
            However, you can obviously influence what target is chosen by moving
            your hero around. You can vaguely see Jex's attack range from the
            pink aura surrounding him as he flies.
          </li>
          <li>Jex can attack Rosh during Bedlam.</li>
          <li>
            Even though Jex 'attacks,' they're not actual right clicks, but
            instead just a bunch of tiny magic damage nukes. This means that you
            increase Jex's damage with magic amplification, not armor minus.
          </li>
          <li>
            When casting Terrorize, you have to compensate for the lengthy cast
            animation and the time it takes for Jex to fly. Cancel the animation
            if you look like you're going to whiff it.
          </li>
          <li>
            You can't cast Bedlam if Jex's projectile is still flying to/from a
            Terrorize cast location. But you can 'catch' Jex by blinking into
            him to get access to Bedlam quicker.
          </li>
          <li>
            Terrorize provides shared vision over all affected units over the
            duration of the fear.
          </li>
          <li>
            Remember that fears are also silences+mutes during their duration. A
            Terrorized Morph can't activate Attribute Shift and a Terrorized
            Sven can't activate BKB. All they can do is run.
          </li>
          <li>
            Terrorize is your only reliable channel breaker. With an effective
            range of ~1700 units, it can be one that enemies may not expect.
          </li>
          <li>
            When Terrorized, Rosh just sits in his pit sulking and won't attack
            anything.
          </li>
          <li>
            When you Terrorize enemies who have breached your side lane high
            ground and are attacking your barracks, it's likely that the feared
            path they'll take will be through your base into the mid lane,
            rather than down the side lane stairs.
          </li>
        </ul>
        <h1>Counters</h1>
        <ul>
          <li>
            Pay attention to your pathing when playing against a Willow. The
            capture radius on Brambles is tiny. With a little effort, you should
            be able to sidestep the roots.
          </li>
          <li>
            Bramble roots, the Cursed Crown debuff, and the Terrorize fear can
            all be purged off by any basic dispel. Lotus Orb can be a handy item
            to have on your team to help with that.
          </li>
          <li>
            On every bell toll from Cursed Crown you can faintly see some
            particles indicating the AoE of stun around your hero.
          </li>
          <li>
            Shadow Realm is basically the same thing as Slark's active Shadow
            Dance for targeting purposes. Ground targeted spells and items still
            work just fine against her.
          </li>
          <li>
            Blade Mail can discourage Willow from soloing you with Shadow
            Realm+Bedlam damage.
          </li>
          <li>
            Bedlam targets randomly, so surrounding yourself with creeps or
            summons makes it much harder for Willow to damage you.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DarkWillow;
