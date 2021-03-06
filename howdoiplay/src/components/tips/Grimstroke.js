import React from "react";

const Grimstroke = () => {
  return (
    <div class="hero hero-grimstroke" data-patch="684">
      <div class="herotitle">
        <span class="portrait">
          <span class="portrait-frame">
            <span class="portrait-frame-inner">
              <img
                class="portrait-img"
                width="256"
                height="144"
                src="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABLAAD/4QMvaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0MiA3OS4xNjA5MjQsIDIwMTcvMDcvMTMtMDE6MDY6MzkgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE4IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpERjc4OEZEN0FFNDAxMUU4QTcxOUQ3MDVCMzQ2NzgzNCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpERjc4OEZEOEFFNDAxMUU4QTcxOUQ3MDVCMzQ2NzgzNCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkRGNzg4RkQ1QUU0MDExRThBNzE5RDcwNUIzNDY3ODM0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkRGNzg4RkQ2QUU0MDExRThBNzE5RDcwNUIzNDY3ODM0Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQAAwICAgICAwICAwUDAwMFBQQDAwQFBgUFBQUFBggGBwcHBwYICAkKCgoJCAwMDAwMDA4ODg4OEBAQEBAQEBAQEAEDBAQGBgYMCAgMEg4MDhIUEBAQEBQREBAQEBARERAQEBAQEBEQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQ/8AAEQgAGwAwAwERAAIRAQMRAf/EAIkAAAICAwEAAAAAAAAAAAAAAAYHBQgCAwQJAQEAAgMBAQAAAAAAAAAAAAAFAgYDBAcAARAAAAUCBQICCAcAAAAAAAAAARECAwQFBgAxEhMHIVFhFEFxgSIyQjQWkaFigqI1CBEAAQMDAwQCAwEAAAAAAAAAAQACAxESBCExBUFRIjJhQoGhEwb/2gAMAwEAAhEDEQA/APO9E+QsQDWJn09eFCUSG6pr0+7ahWWo8q+nd8YkZMOIkB99TSctRdsGZGQBoN1asCAhtZNlfjgK0uF+LOKY3NUplL1wSmVKgS3Q1bQpDoCcZ8Vop5FZJo73+ISs5jump8+2hHuHebmOuuPITtAWjQOY4K5qWwNFag7K7f5iJrnucdLR+1Vm6ePJdCiMqkP7z6xMEIMUgk8AMmHRXaXD/q24lQ1zQqrQ4rMFxItvPtJeYcHLSrIsP4uOxwvOq5hzXLzQvMMYpTqhe27Dvi4EInUOiPzY4mIPJbHbJOY6sumFnSDaqoccZBrTRO7gbiOBdN5RpfK7yqJbkNaEugroqQJloR4dxwSxlX+XdNnIaBRqtJ/r3l7hm0+M4fGXHjrTrqkIYhQIywWDYD01Dp9I4dma2NlK6qURPVIu2rvo9jRKLb8dxaG4qESpTSSEVOr6rSPrxV+UiMrRaNlcuAyo4nujeaXDQ/K7rjuqh3tI3KVSwpyAc3HwMFiptPUdJ5YrMUD7tTqujSRWRFxd0SX5Rqcm4a8Hlh3IkJAMREAAakoDuWLxhxGOEBcC5Sb+uQ7sFlSeeqvQKFMtZkARAfWrYYZ9zQhfygIdSxjidUXdVDKhqfha6TyBXotKmRZzTkpM1vy8J51Q6Y6FCZJ7YmWVcDVGXAGgS8uKjSqdVglvPitxsUrUOoVD36Dj7IaEdilcZ9wr2REi4FtuQatId3Eukl0BExAugHj0rfGoW5C4OlF2yMmX6lApz12S5SApyFglDAEla9eQB3DvjQZANSrI/lJHeOoaoG8HIDMmLUKSpSfONA4+0IECVeA9sNwnwCpGa0CQkdUHxNvzon5P4VfHuafYX5YJh3KWf+EcztX24PsyIsvl8cbn2VZl90Ezi8q5rIyAvMHr/bp6fjiOZs1LYWxXM2X206en4gLWf8S9OJfRZB7qfuXV9h0T6gtYmZbR/r9J9ixoR7uSsnqN1JXN/WUYy+lTnnn4YWg9UHmewX//2Q=="
                data-src="./assets/media/heroes/large/grimstroke.jpg"
                alt="Grimstroke"
              />
            </span>
          </span>
        </span>
        <span class="name">Grimstroke</span>
      </div>
      <div class="tips">
        <h1>Tips</h1>
        <ul>
          <li>
            The Stroke of Fate projectile actually does shoot out at a slight
            angle, as the visual suggests. It always starts 120 range to your
            left, so if you're trying to hit someone close quarters, target
            accordingly.
          </li>
          <li>
            The Stroke projectile provides a small radius of vision as it
            travels and where it ends.
          </li>
          <li>
            Phantom's Embrace pops Linken's Sphere on cast, not on projectile
            impact.
          </li>
          <li>
            Casting Phantom's Embrace on a siege creep will make it immediately
            lose interest in the tower it's attacking and start catapulting the
            Phantom instead.
          </li>
          <li>
            Even though enemies can't disjoint Phantom's Embrace, for some
            reason Grimstroke can disjoint it himself when it's returning. So be
            sure to retrieve your wife before you Blink if she's flying back,
            otherwise the cooldown won't refresh.
          </li>
          <li>
            When entering a Chronosphere the Phantom's Embrace projectile will
            pause if it's traveling to a target. If it's latched on to someone
            inside of a Chronosphere, it automatically flies back and applies
            the nuke damage. Thus, if you catch an enemy facing into a Chrono,
            but still on the edge where the Phantom can latch it, you can spam
            the spell on them.
          </li>
          <li>
            Ink Swell reaches its max damage/stun after 15 total damage ticks on
            enemy heroes.
          </li>
          <li>Ink Swell can be cast on allied creeps and summons.</li>
          <li>
            Enemies won't see any visual of the tendrils damaging them if the
            Ink Swelled target is invisible.
          </li>
          <li>
            Ink Swell works fully on banished targets, however none of the
            particle effects will be visible.
          </li>
          <li>
            Soulbind's leash can cancel TPs, even through spell immunity, but
            only if the target is actually bound to something else. No bind, no
            leash, no TP cancel.
          </li>
          <li>
            Soulbind provides shared vision for all targets that are affected.
          </li>
          <li>
            Soulbind can target and connect to creep-heroes, like Lone Druid's
            Spirit Bear, Visage Familiars, and Warlock's Golem.
          </li>
          <li>
            Linken's Sphere can block Soulbind for the primary target, but Lotus
            Orb has no effect on Soulbind. Cast it on a Lotus'd target without
            fear of it being reflected.
          </li>
          <li>
            Soulbind is a wacky spell. Mechanically, think of it like you're
            putting a Lotus Orb on an enemy, except anything that would get
            reflected will actually be cast again targeting the other bound
            hero. That being said, here are the answers to a few burning
            questions you may have always wanted the answer to:
            <ul>
              <li>
                Axe's Culling Blade will only give your cooldown back if the
                primary target is successfully Culled.
              </li>
              <li>
                Chaos Knight's Reality Rift will suck both targets in towards
                you.
              </li>
              <li>
                Kunkka's X will connect on both heroes, but casting the Return
                will only bring back the primary target.
              </li>
              <li>
                Huskar will Life Break to the primary target, then immediately
                to the secondary target after connecting.
              </li>
              <li>
                Legion Commander will quite literally 2v1 in a Duel. You'll get
                Duel damage for each target that dies. If you die, they'll both
                get damage. If the primary target dies, you'll move on to the
                secondary target for however much time is left. I have
                absolutely no clue how the primary target is chosen, I can't
                find any logic to it.
              </li>
              <li>
                Nature's Prophet's Wrath of Nature will only double up if you
                directly cast it on one of the targets, not if you ground target
                it.
              </li>
              <li>
                Oracle will start channeling another Fortune's End after the
                first one connects, but you won't see the channel bar on your
                HUD and you need to be standing still before the second channel
                starts.
              </li>
              <li>
                Phantom Assassin will end up on the primary target with Phantom
                Strike. She will also shoot out six Daggers with her "Triple
                Strike Stifling Dagger" talent.
              </li>
              <li>
                Riki's Blink Strike will damage both heroes, but he'll end up on
                the primary target.
              </li>
              <li>
                Sand King will Burrowstrike and end up at the targeted location,
                but a second Burrowstrike will be cast from SK's starting point
                in the direction of the secondary target. If the secondary
                target is out of range, the stun won't connect. If the primary
                target is along the same angle, they can get hit twice.
              </li>
              <li>
                Yes, with Skywrath's "+1 Arcane Bolt Per Cast" talent and Agh's,
                he can shoot <i>six</i> Arcane Bolts in a single cast.
              </li>
              <li>
                Sniper will target the primary hero with Assassinate and then
                immediately shoot another projectile at the secondary target
                once the first connects.
              </li>
              <li>
                Tiny's Toss doesn't do anything when you're throwing a Soulbound
                target, but if you Toss something <i>at</i> a bound target, you
                will attempt another Toss targeting the secondary hero once your
                first Toss lands. So if you Toss a Soulbound hero on itself,
                they'll fly up in the air and if you keep standing there, you'll
                Toss them to the secondary target as soon as they land.
              </li>
              <li>
                Tusk's Snowball and Walrus Punch only target the primary hero,
                but both targets will get the boot from a Walrus Kick.
              </li>
              <li>
                Terrorblade will Sunder the primary target's HP, the primary
                gets the secondary's HP, and the secondary will get TB's HP.
              </li>
              <li>
                Vengeful Spirit will Nether Swap to the primary target's
                location, the primary will move to the secondary, and the
                secondary will move to Venge.
              </li>
              <li>
                Winter Wyvern's Winter's Curse will work on both enemies and
                their allies will attack whichever hero is closest to them.
                However, if both Cursed targets are within the AoE of each
                other's Curse, neither of them will take any damage.
              </li>
              <li>
                Channeled spells like Fiend's Grip, Mana Drain, and Shackles
                work as expected. You stay still, both enemies get affected.
              </li>
              <li>
                Only the primary hero gets targeted by Omnislash, Morph, Spell
                Steal, Charge of Darkness, Snowball, Soul Assumption, and Focus
                Fire.
              </li>
              <li>
                Only the secondary hero gets targeted by Spirit Siphon (but
                it'll blow 2 charges), Static Link, and Nether Strike.
              </li>
            </ul>
          </li>
        </ul>
        <h1>Counters</h1>
        <ul>
          <li>
            You can kill the Phantom's Embrace projectile while it's flying
            towards its target.
          </li>
          <li>
            The Phantom can't be dispelled, but will instantly die if you go
            invis, spell immune, or become invulnerable (like from a banish,
            Manta Style activation, or Bane Nightmare).
          </li>
          <li>
            The Ink Swell buff can be dispelled off enemies, but it'll still
            stun and damage the area once purged.
          </li>
          <li>
            However, killing the Ink Swelled target will prevent the stun and
            damage from going off.
          </li>
          <li>
            You only count as leashed if Soulbind is actually binding you to
            someone else. If not, you can use movement spells and TPs freely.
          </li>
          <li>
            There are no reliable ways of breaking the Soulbind leash, so please
            cooperate with your chained ally to move around instead of comically
            stretching the bind in opposite directions. Think of it like one of
            those races where both of you have one leg tied together, except
            your teammate is actually a cat who's freaking out and wants nothing
            to do with this.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Grimstroke;
