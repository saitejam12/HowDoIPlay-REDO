import React from "react";

const ArcWarden = () => {
  return (
    <div class="hero hero-arc-warden" data-patch="684">
      <div class="herotitle">
        <span class="portrait">
          <span class="portrait-frame">
            <span class="portrait-frame-inner">
              <img
                class="portrait-img"
                width="256"
                height="144"
                src="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAAyAAD/7gAhQWRvYmUAZMAAAAABAwAQAwMGCQAAAk4AAAMNAAAD4f/bAIQACAYGBgYGCAYGCAwIBwgMDgoICAoOEA0NDg0NEBEMDg0NDgwRDxITFBMSDxgYGhoYGCMiIiIjJycnJycnJycnJwEJCAgJCgkLCQkLDgsNCw4RDg4ODhETDQ0ODQ0TGBEPDw8PERgWFxQUFBcWGhoYGBoaISEgISEnJycnJycnJycn/8IAEQgAGwAwAwEiAAIRAQMRAf/EALcAAAMBAQEAAAAAAAAAAAAAAAMFBgQHAgEBAQEBAAAAAAAAAAAAAAAABQQGAxAAAQQBBAIDAAAAAAAAAAAAAwERAgQAIRITBTIUQSIVEQABAgQEBAQHAAAAAAAAAAABAAIRIRIDMUFRgWEyghMQIiMEccHxUqKDFBIAAgEDAwUAAAAAAAAAAAAAAAERIUESMWECUXGB0SITAQACAgICAgMAAAAAAAAAAAEAESExQWFRcYGR8KHR/9oADAMBAAIRAxEAAACLzk80dLMD7DoDQwJ5nOsdAWO7KiaYPqmWQo1qt6uC1//aAAgBAgABBQGCaujLosWdFXF8v//aAAgBAwABBQH4RZbl1yaqxIyWarPP/9oACAEBAAEFAVsmhlkKn7WOySknCB172LHMhzHerV60sy2x1YxqSouK1XFOAhsQofZr9ZULz8px5L6AszgSx+SbiBgPGw/tdlu4w7XC/qf/2gAIAQICBj8BjcxtpA10NynGX3Q8nHs//9oACAEDAgY/ATyKT5UleeKvRsWKP//aAAgBAQEGPwEWPbEifrFW7QzABPDNNFPoW5MZ80XWGyE6SothbeMQUfMIEx3VwWxO4R50193mpcKtk247STl/Y50Gaaqo3gJxpzUGz0TrWeIUPtx2xTvalx7JMWcFRVVqcgiMoyRuctLe44jjgPCVH68eqKPNHb6Ix73407wVyrtxpl3KquimUfiuluOHUv/aAAgBAgMBPxCw64XPby4aw+O4a1USF7nFag9/WmfmAc8VvmrZ1P/aAAgBAwMBPxDXbcdeslsxNg4gdw9gHu4AUsKfoUQtL6q1Qsn/2gAIAQEDAT8QAwxDMUtVctOAq4G0Zr4NQ2u2HhPDhri4G/gB5GPFizVBbmXcrVs11KdKlHtUZuhsGljuQhpuaeCL62kPPiWKOcUg5fYQFti7VaIbVdbweH1HcK6yOCBbKp2CFRaDxQq9k2NytdNl5fj6mp0Yr+o8Kc1/Y+p3qRAYNfU4eX6n/9k="
                data-src="./assets/media/heroes/large/arc_warden.jpg"
                alt="Arc Warden"
              />
            </span>
          </span>
        </span>
        <span class="name">Arc Warden</span>
      </div>
      <div class="tips">
        <h1>Tips</h1>
        <ul>
          <li>Multiple Flux casts on the same target fully stack.</li>
          <li>
            Manipulate creep aggro to get good Fluxes in lane. The search radius
            for muting Flux is basically melee range, so right click an enemy
            hero to attract their creeps towards you, then Flux 'em. Just don't
            forget to kill their ranged creep first.
          </li>
          <li>
            Magnetic Field works fully on towers to provide bonus attack speed
            and evasion.
          </li>
          <li>
            Spark Wraiths trigger on invisible <i>and</i> Smoked units.
          </li>
          <li>
            Spark Wraiths provide a small radius of ground vision wherever
            they're planted. You can use these like temporary TA Traps to
            provide basic vision over choke points or in the Rosh pit.
          </li>
          <li>
            You don't need to fully envelope a tower to give it the bonus attack
            speed and evasion. Place the bubble in a way that just barely skims
            the back of the tower so enemies can't easily stand in it and bypass
            the evasion.
          </li>
          <li>
            The Tempest Double's item cooldowns operate independently of your
            own. Keep track of its Midas cooldown in the early game and its BoT
            cooldown in the late game.
          </li>
          <li>
            At Necro 3, both the Archer and the Warrior give 200 gold each and
            200 experience each. If those numbers mean nothing to you, know that
            Midasing the big creep in a hard camp gives ~300 exp. So while
            you're turbo leveling with the Double's Midas, you're also handing
            the enemy a ton of experience every time you kamikaze your Doubled
            Necro creeps.
          </li>
          <li>
            However, if Necro creeps time out they won't give any experience
            (this is true for all summons).
          </li>
          <li>
            The same is true for the Double itself. The gold/experience bounty
            on it is significant, so avoid feeding it to enemies.
          </li>
          <li>
            Always keep a TP scroll loaded in your inventory. It doesn't share a
            cooldown with Boots of Travel, allowing you to escape in an
            emergency or to quickly get in and out of a fight.
          </li>
          <li>
            Interactions with various items on the Double:
            <ul>
              <li>
                Doubles cannot duplicate any consumable item (including Bottle).
              </li>
              <li>
                Items with charges (Urn, Drum, etc.) copy the Original's
                charges.
              </li>
              <li>
                Doubles cannot copy Aegis, Gem, or Rapier. It <i>can</i> copy
                Refresher, but it can't activate it.
              </li>
              <li>A Double's BKB time decrements on its own.</li>
              <li>
                Doubles cannot pick up or drop items. You also cannot move items
                around in the Double's inventory/backpack.
              </li>
            </ul>{" "}
          </li>
          <li>
            So what can you do with items?
            <ul>
              <li>
                Midas is considered core since the item effectively has a 2x
                multiplier on Zet.
              </li>
              <li>
                Double Shivas' is basically 400 magic damage in a 900 radius.
                The active's slow and passive aura don't stack, however.
              </li>
              <li>
                As stated earlier, double Necrobooks is a very common build on
                Zet.
              </li>
              <li>
                Manta can be a safer and more versatile pushing/DPS build.
                Remember, he's an AGI hero and You+Double+Four illusions under
                two Magnetic Fields can dole out some serious damage.
              </li>
              <li>
                In 6.87, the stack duration for Pipe of Insight's Barrier was
                removed, meaning your team can benefit from the Pipe active as
                often as you have the item available. Then again I'd only
                recommend building Pipe on Arc if you're against a Zeus, Sand
                King, Leshrac, KotL, Tinker team or something.
              </li>
              <li>
                Interestingly, Mek has a 25 second stack limit duration against
                its 65 second cooldown. I... I don't think MekZet is a good idea
                yet, but I am intrigued.
              </li>
              <li>
                A double Dagon 5 can deal 1600 magic damage from 800 range. It
                can also be completely nullified by someone building BKB.
              </li>
              <li>
                The debuff from Medallion/Solar Crest does <i>not</i> stack if
                cast on the same enemy, but it's still an item worth
                considering.
              </li>
              <li>
                Tempest Doubles copy the Moon Shard buff if the main hero has
                one consumed.
              </li>
            </ul>
          </li>
          <h1>Counters</h1>
          <ul>
            <li>
              For the love of god, please stand next to an ally if they're
              Fluxed and you're nearby. Arc Warden is pretty much 99% single
              target damage. If you jump into the mix to save an ally he's
              probably not going to even touch you. This is highly relevant when
              going for runes.
            </li>
            <li>Flux can be muted by standing next to neutral creeps.</li>
            <li>
              Much like Bloodseeker, Arc Warden has no stuns. If you think you
              can't survive a surprise Flux gank, just TP out. Unfortunately,
              the courier does not mute Flux, so you still may die to the
              damage.
            </li>
            <li>
              In team fights, positioning items like Blink or Shadow Blade can
              help you isolate him before he gets the opportunity to lay down a
              bunch of spells.
            </li>
            <li>
              The Double cannot duplicate any sources of true sight, so Glimmer
              Cape can be invaluable for supports.
            </li>
            <li>
              Dominating or banishing a unit will cancel any Boots of Travel
              channels on that unit.
            </li>
            <li>
              Accuracy does not affect attacks on structures, so MKB or true
              strike won't help you hit buildings under Magnetic Field.
            </li>
            <li>
              Magnetic Field won't provide any evasion to enemies (heroes or
              buildings) if you're attacking while inside the Field.
            </li>
            <li>
              Spark Wraiths cannot be disjointed. Think of it like Skywrath's
              Arcane Bolt since it also provides vision as it travels towards
              you.
            </li>
            <li>
              Once he gets Tempest Double up and running with Midas, Zet will be
              spending a lot of his time cycling around neutral camps while his
              Double pushes lanes. It's a running joke, but warding his jungle
              really is one of the best ways to slow down Arc Warden. Find him
              and kill him, block his camps, or just take his jungle over and
              hem him out.
            </li>
            <li>
              If Zet is going for a zoo build, you'll need AoE damage to deal
              with him. If you don’t have any good AoE spells to deal with a
              Necro+Manta siege, consider building items like
              Maelstrom/Mjollnir, Battle Fury, Radiance, Veil, or Shiva's Guard
              to deal with the onslaught.
            </li>
            <li>
              Kill the Double. This is easier said than done in the late game,
              but it's worth having your team cooperate to slaughter the Tempest
              since the bounty on it is significant and it pushes very quickly
              if left alone.
            </li>
            <li>
              Spells treat the Double like a hero, not like an illusion. Except
              for interactions that occur when a hero dies, like Bloodstone or
              Track or Duel. Those spells treat the Double like an illusion.
              Unless the Double <i>wins</i> a Duel. Then it actually can use the
              bonus damage. Unlike an illusion. Hoo boy.
            </li>
            <li>
              OD can INT steal, Bounty Hunter can Jinada money, and Slark can
              Essence Shift from the Double. If the Double times out or dies,
              Slark gets the permanent AGI.
            </li>
            <li>
              If the Double times out or dies while under Soul Catcher, Shadow
              Demon keeps the Tempest Double illusion until Arc Warden re-casts
              the Double assuming he's taken the "Soul Catcher Creates Illusion
              On Death" talent.
            </li>
          </ul>
        </ul>
      </div>
    </div>
  );
};

export default ArcWarden;
