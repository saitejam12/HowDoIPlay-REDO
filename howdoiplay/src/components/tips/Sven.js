import React from "react";

const Sven = () => {
  return (
    <div class="hero hero-sven" data-patch="684">
      <div class="herotitle">
        <span class="portrait">
          <span class="portrait-frame">
            <span class="portrait-frame-inner">
              <img
                class="portrait-img"
                width="256"
                height="144"
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAQABAAD/2wBDAAICAgICAgICAgICAgICAwQDAgIDBAUEBAQEBAUGBQUFBQUFBgYHBwgHBwYJCQoKCQkMDAwMDAwMDAwMDAwMDAz/2wBDAQMDAwUEBQkGBgkNCwkLDQ8ODg4ODw8MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCAAbADADAREAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAABwkFBggE/8QALhAAAQMDAwIFAgcBAAAAAAAAAQIDBAUGEQAHEiExCBMUQVEicRUWIzI0YYGR/8QAGQEAAwEBAQAAAAAAAAAAAAAAAwQFAgYA/8QAIhEAAgICAgICAwAAAAAAAAAAAAIBAwQRITESIgUUMkFh/9oADAMBAAIRAxEAPwBLjTC1K7nW9CssTDMJxRGMk+2t6B7NqeFzw4XFel7Ua4rloU1mzqO6iVJLqCnz8YKeOfbWHnUHvLXfQ6HcioP0mhvUm1aU0647T/SRMnCI6eIRk/5nURWVn9pKd9j1JHguxdu3O0u3v56n3RuTVKP66lrU3T6OFjg6+pR5LWc/OiPd6+oTw32Sl2bIeH+561UZ02u0mLKeBUiFAcCW0Z9yc99eTKtWNA3x0mRVNEoEqpPJbZZJyeqz0SPudW+iXzPRoG1ou3NmJROrDTtzXJFUHI0Fv+MlQ7BXzoDM7fgFVEXlzRFqeLDcZq6oL6YcOBby0pjPUxpIShKO3QaE2I/jPPJv7te4gNe+W+1RiUCP+FyfINTi5dcB64I7ahU1TL8leZjQp65rquOq1J6RFkT3ipfJ1LRPbPzq5VRx/BCy0tUBqM7ARML1WElSP1gpR7/90z40k9myNnLGekKaSwhflNDoQjpn7nRoSAU2zBY6dTVLICBjRIgVdy+QKNx4KPTBHXRIUWlwe3vctZqM9dMdedmNxMNsHBwhGvTh01ew/XlW2LC7DrtjtZKrFFa8umCNFk4U5PcT9ThPuM+2oOVky7ajou4+PCxz2H2Z4YnYlpu1Nc9nk6MxmAn6lHHbiE50jL6G/DYvGB+7XTwcswSKL7aJApYEWCAeIIB6acxo24uwIJyQZdVJAJ9YgZ/rl20P5njos/HRA0bb5ttNBtltKEJbEVJCAMDPH41yJ0ROX9IfbttgtvOo5rWF8VEZwdLP2G/R/9k="
                data-src="./assets/media/heroes/large/sven.jpg"
                alt="Sven"
              />
            </span>
          </span>
        </span>
        <span class="name">Sven</span>
      </div>
      <div class="tips">
        <h1>Tips</h1>
        <ul>
          <li>
            The "Storm Hammer Dispels Enemies" talent works to purge off Ghost
            Scepter and spells like Guardian Angel and whatnot.
          </li>
          <li>
            Linken's Sphere can severely cut Sven's solo ganking potential, but
            remember that Storm Hammer stuns and damages everything in its AoE.
            If an enemy has Linken's but is sitting inside their creep wave,
            just target the Hammer on a creep.
          </li>
          <li>
            Warcry works fully on illusions and creep-heroes (Visage Familiars,
            Lone Druid's Spirit Bear, or Warlock's Golem), making them far more
            tanky against right click damage.
          </li>
          <li>
            Mechanically, think of Warcry like a Pipe for right clicks/attack
            damage. It isn't 'damage block' like a Crimson Guard, it's damage
            negation.
          </li>
          <li>
            Damage absorbed from Warcry prevents on-damage effects from
            triggering, like Blink Dagger's damage cooldown or consumables being
            dispelled.
          </li>
          <li>
            Attacks from ward-type units (Death Ward, Serpent Wards, Plague
            Wards) will be negated by Warcry.
          </li>
          <li>
            Since Warcry scales with Sven's STR on cast, you should try
            activating God's Strength <i>before</i> casting Warcry.
          </li>
          <li>
            God's Strength multiplies Sven's primary attribute damage. Meaning,
            when you go full WOLOLO, your STR is getting multiplied, but items
            that are adding green + damage (raw damage items) aren't get
            multiplied.
          </li>
          <li>
            God's Strength raises your HP when cast thanks to the STR addition,
            so you may consider using it when escaping if the bonus HP will help
            you survive a gank.
          </li>
          <li>
            Core Sven is a rare hero on whom BKB is truly <i>core</i> core. On
            nearly every other hero, BKB is primarily bought as a defensive
            item, but because God's Strength jacks Sven up from his STR, BKB is
            also a strong offensive item. This is the same reason why Heart can
            actually be a viable damage item on Sven.
          </li>
          <li>
            BKB is also necessary to serve as the can opener for the whoop ass
            you deliver with God's Strength. Time spent disabled is time spent
            not smashing everything in your path.
          </li>
        </ul>
        <h1>Counters</h1>
        <ul>
          <li>
            Storm Hammer's projectile can be disjointed. However,{" "}
            <i>
              <a href="https://dota2.gamepedia.com/Sven/Changelogs">
                despite the 6.79 changelog never explicitly being reverted,
              </a>
            </i>{" "}
            the AoE stun will still land even after the Hammer is disjointed.
            Spagooti code.
          </li>
          <li>Warcry can be purged off Sven and his allies.</li>
        </ul>
      </div>
    </div>
  );
};

export default Sven;
