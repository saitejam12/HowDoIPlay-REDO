import React from "react";

const Morphling = () => {
  return (
    <div class="hero hero-morphling" data-patch="684">
      <div class="herotitle">
        <span class="portrait">
          <span class="portrait-frame">
            <span class="portrait-frame-inner">
              <img
                class="portrait-img"
                width="256"
                height="144"
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAQABAAD/2wBDAAICAgICAgICAgICAgICAwQDAgIDBAUEBAQEBAUGBQUFBQUFBgYHBwgHBwYJCQoKCQkMDAwMDAwMDAwMDAwMDAz/2wBDAQMDAwUEBQkGBgkNCwkLDQ8ODg4ODw8MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCAAbADADAREAAhEBAxEB/8QAGQAAAwEBAQAAAAAAAAAAAAAABggJBwUE/8QAMBAAAQMDAQYEBQUBAAAAAAAAAgEDBAAFBhEHCBITITEUIlJxIzJBUZEkNENhgdH/xAAbAQADAQADAQAAAAAAAAAAAAAEBQYDAAIHAf/EACURAAICAQQBBAMBAAAAAAAAAAECAAMEBRESIRMGIjEyFEFxof/aAAwDAQACEQMRAD8AbjBM4jMSchYGSiSGoam0q910Ff8AlPbU32nlHqTn+IxX5kwt4jeRu8jKisUp83LY04XiGx7kKL2prWBSJMaBoDZVRuft5lxb0eR3u1Ji+OWtLZa+jbcYfnc/tfet63D9/uHv6PSk8rH3gdkEvaT4VpydEuMeC/ovDwqgaf7RKAkw7FwsOr+zOrtyHyWJOZNWyHjNxPVRTKNtjGtLFfchnjj2yFHYB5twhJexL9q6ooTuctvdjtKuQ7+zZMijz5L+kV79PNVPQf1qaZYTm0eepkiUZbs6XKdomUJFbKenOVYTq/KjS9dVWnKKnj5NJQagcCsVA7Tl2/HLLs54byaR595Jzgjx+4N8Pda5l8cVfb8mHabbbq7bN1WP9lG92valhO3dmVshzDFoD958GR2u4APCpaJ2pE17r7w0d5Girw2A/kRTee2RBgGVPwLYJxI3GWjJe/0WqZbjdWOMSYGVwJV4tTk6JDjsxX/jGP8AEnematXWmx7MOFb2HkI4N+ylHRMCPzL9ajI+CwILOXrcxcBBwgemhyzdHuqe9H4+o+JCu0nNR9LV5ly2b/ExS63VyQXncJUTXh1X70tttNh3MrMTFSheKxr9wQzd3ibI62EglFohQwRVFNfUtB2/UzbI3AAEe/fD2HtZPLlXhJzbbwERAwqpqvsutUeiXgoAZ5dqbti5LSOl4xHwF6cgGw3zgJUExXiXpTwgM3Ua1ZbePfeGs0iVepEtRcsxAm5Kvm6rXwzdIESOr7aL1RTTVK6zb9S5u4JZrQzaW5zVqtzc3k/vBYbR3t60TWsc/oRBWxNnc7++bIfbx3mNvOtucZJxiSov5SqHQhILVO8nuRss5E7cpbrpE45zF+IS6l+Vqoxx7owu+on/2Q=="
                data-src="./assets/media/heroes/large/morphling.jpg"
                alt="Morphling"
              />
            </span>
          </span>
        </span>
        <span class="name">Morphling</span>
      </div>
      <div class="tips">
        <h1>Tips</h1>
        <ul>
          <li>
            Use Waveform to travel between and damage two jungle camps at the
            same time.
          </li>
          <li>
            Waveform can be used to absorb certain projectiles headfirst since
            you are invulnerable during the spell.
          </li>
          <li>
            When using Waveform to push the lane, move near the ranged creep in
            the enemy wave and Waveform in towards your creeps. You make
            yourself vulnerable to ganks when you Waveform deeper into enemy
            territory.
          </li>
          <li>
            When one Adaptive Strike is cast, the other goes into cooldown for 3
            seconds.
          </li>
          <li>You can toggle Attribute Shift while channeling a TP.</li>
          <li>
            I know you come to these tips because you don't want to read a lot
            of things, but if you <i>are</i> willing to spend a little more
            brain power learning about Dota, I highly recommend studying the
            following post explaining how{" "}
            <a href="https://www.reddit.com/r/DotA2/comments/8f5mtp/attribute_shift_misconceptions_about_the_spell/">
              HP gain from Attribute Shift can be properly exploited.
            </a>
          </li>
          <li>Casting Morph applies a basic dispel on your hero.</li>
          <li>
            After shotgunning a target, they may still have some HP left over
            once you're out of spell damage. However, you can try Morphing into
            your target and finishing them off with whatever magic damage spells
            they have.
          </li>
          <li>Mechanics on Morphs:</li>
          <ul>
            <li>
              Morphs take the target hero's base STR, AGI, INT, primary
              attribute, level, range, and movespeed on cast. You do not get the
              hero's base armor, base damage, BAT, missile speed, or talents.
            </li>
            <li>
              Morphs will keep Morphling's items and you can use them normally
              as the Morphed hero.
            </li>
            <li>
              Morphs copy the current <i>percentage</i> of HP/Mana on Morphling
              when cast.
            </li>
            <li>
              Your Morph and your hero independently maintain their own separate
              HP/Mana pools as you toggle back and forth.
            </li>
            <li>
              If you make a Morph of a target that has an Agh's granted basic
              spell (Treant Protector's Eyes in the Forest or Zeus's Nimbus, for
              example) then your Morph will have that spell as well if the
              target has their Scepter. However, if you Morph out of that hero
              the Scepter spell will stop working.
            </li>
            <li>
              Activating a Manta Style or illusion rune as another hero will
              generate illusions of that hero and keep them even after morphing
              back.
            </li>
            <li>
              If you generate self-illusions using Naga's Mirror Image or Shadow
              Demon's Disruption, you can shift+queue Morph after casting those
              spells to create Morphling illusions.
            </li>
            <li>
              Morphs spawn with a full set of Stone Remnant, Leap, and Shrapnel
              charges, but only one Spirit Siphon charge and two Spin Web
              charges.
            </li>
            <li>
              If your target hero gets 'new spells' or levels up their own
              spells, you can refresh your Morph's spells by toggling in and out
              of the Morph. This is mainly relevant if you Morph an Invoker
              since you can get new Invoker spells whenever he Invokes them.
            </li>
            <li>
              Toggling out of a Morph behaves the same way as Rubick's Spell
              Steal timing out in terms of buffs/spells/summons lingering.
            </li>
            <li>
              Activating Terrorblade's Metamorphosis while Morphed only affects
              your Morph during the initial period. Toggling back to Morphling
              won't preserve the bonus damage or attack range or even the Aura
              for illusions, all it does is give Morphling a slower attack
              projectile.
            </li>
          </ul>
        </ul>
        <h1>Counters</h1>
        <ul>
          <li>Morphling cannot Waveform when rooted.</li>
          <li>
            You need to have nukes if you want to kill Morphling. With STR
            Attribute Shift, he can usually gain HP faster than you can burn him
            down with auto attacks.
          </li>
          <li>
            Spirit Vessel substantially reduces the HP Morphling will gain when
            STR shifting.
          </li>
          <li>
            Silences, stuns, taunts, fears, and hexes are all good ways to
            prevent Morphling from starting to Attribute Shift. They also
            prevent him from being able to un-Morph himself if he's cosplaying
            another hero.
          </li>
          <li>
            You can see how much time Morphling has left in a Morph by clicking
            it and checking the buff timer.
          </li>
          <li>
            The level number shown next to a Morph's HP is the same level as the
            real Morphling, not the same level as the hero Morphed.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Morphling;
