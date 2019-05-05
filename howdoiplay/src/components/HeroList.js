import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import NotFound404 from "./NotFound404";
//Hero Components
import Abaddon from "./tips/Abaddon";
import Alchemist from "./tips/Alchemist";
import AncientApparition from "./tips/AncientApparition";
import AntiMage from "./tips/AntiMage";
import ArcWarden from "./tips/ArcWarden";
import Axe from "./tips/Axe";
import Bane from "./tips/Bane";
import Batrider from "./tips/Batrider";
import Beastmaster from "./tips/Beastmaster";
import Bloodseeker from "./tips/Bloodseeker";

//Rendered Component
export default class HeroList extends Component {
  render() {
    return (
      <Router>
        <div className="grey">
          <div className="tipcontainer">
            <Switch>
              <Route path="/Abaddon" component={Abaddon} />
              <Route path="/Alchemist" component={Alchemist} />
              <Route path="/AncientApparition" component={AncientApparition} />
              <Route path="/AntiMage" component={AntiMage} />
              <Route path="/ArcWarden" component={ArcWarden} />
              <Route path="/Axe" component={Axe} />
              <Route path="/Bane" component={Bane} />
              <Route path="/Batrider" component={Batrider} />
              <Route path="/Beastmaster" component={Beastmaster} />
              <Route path="/Bloodseeker" component={Bloodseeker} />
              {/* 
              <Route path="/Bane" component={Bane} />
              <Route path="/Batrider" component={Batrider} />
              <Route path="/Beastmaster" component={Beastmaster} />
              <Route path="/Bloodseeker" component={Bloodseeker} />
              <Route path="/BountyHunter" component={BountyHunter} />
              <Route path="/Brewmaster" component={Brewmaster} />
              <Route path="/Bristleback" component={Bristleback} />
              <Route path="/Broodmother" component={Broodmother} />
              <Route path="/CentaurWarrunner" component={CentaurWarrunner} />
              <Route path="/ChaosKnight" component={ChaosKnight} />
              <Route path="/Chen" component={Chen} />
              <Route path="/Clinkz" component={Clinkz} />
              <Route path="/Clockwerk" component={Clockwerk} />
              <Route path="/CrystalMaiden" component={CrystalMaiden} />
              <Route path="/DarkSeer" component={DarkSeer} />
              <Route path="/DarkWillow" component={DarkWillow} />
              <Route path="/Dazzle" component={Dazzle} />
              <Route path="/DeathProphet" component={DeathProphet} />
              <Route path="/Disruptor" component={Disruptor} />
              <Route path="/Doom" component={Doom} />
              <Route path="/DragonKnight" component={DragonKnight} />
              <Route path="/DrowRanger" component={DrowRanger} />
              <Route path="/EarthSpirit" component={EarthSpirit} />
              <Route path="/EarthShaker" component={EarthShaker} />
              <Route path="/ElderTitan" component={ElderTitan} />
              <Route path="/EmberSpirit" component={EmberSpirit} />
              <Route path="/Enchantress" component={Enchantress} />
              <Route path="/Enigma" component={Enigma} />
              <Route path="/FacelessVoid" component={FacelessVoid} />
              <Route path="/Grimstroke" component={Grimstroke} />
              <Route path="/Gyrocopter" component={Gyrocopter} />
              <Route path="/Huskar" component={Huskar} />
              <Route path="/Invoker" component={Invoker} />
              <Route path="/Io" component={Io} />
              <Route path="/Jakiro" component={Jakiro} />
              <Route path="/Juggernaut" component={Juggernaut} />
              <Route path="/KeeperOfTheLight" component={KeeperOfTheLight} />
              <Route path="/Kunkka" component={Kunkka} />
              <Route path="/LegionCommander" component={LegionCommander} />
              <Route path="/Leshrac" component={Leshrac} />
              <Route path="/Lich" component={Lich} />
              <Route path="/Lifestealer" component={Lifestealer} />
              <Route path="/Lina" component={Lina} />
              <Route path="/Lion" component={Lion} />
              <Route path="/LoneDruid" component={LoneDruid} />
              <Route path="/Luna" component={Luna} />
              <Route path="/Lycan" component={Lycan} />
              <Route path="/Magnus" component={Magnus} />
              <Route path="/Mars" component={Mars} />
              <Route path="/Medusa" component={Medusa} />
              <Route path="/Meepo" component={Meepo} />
              <Route path="/Mirana" component={Mirana} />
              <Route path="/MonkeyKing" component={MonkeyKing} />
              <Route path="/Morphling" component={Morphling} /> */}

              <Route component={NotFound404} />
            </Switch>
          </div>
          <ul className="herolist">
            <li className="herolist__hero abaddon">
              <Link
                className="herolist__hero__link"
                title="Abaddon"
                to="/Abaddon"
              >
                <span className="herolist__hero__name">Abaddon</span>
              </Link>
            </li>
            <li className="herolist__hero alchemist">
              <Link
                className="herolist__hero__link"
                title="Alchemist"
                to="/Alchemist"
              >
                <span className="herolist__hero__name">Alchemist</span>
              </Link>
            </li>
            <li className="herolist__hero ancient_apparition">
              <Link
                className="herolist__hero__link"
                title="Ancient Apparition"
                to="/AncientApparition"
              >
                <span className="herolist__hero__name">Ancient Apparition</span>
              </Link>
            </li>
            <li className="herolist__hero anti-mage">
              <Link
                className="herolist__hero__link"
                title="Anti-Mage"
                to="/AntiMage"
              >
                <span className="herolist__hero__name">Anti-Mage</span>
              </Link>
            </li>
            <li className="herolist__hero arc_warden">
              <Link
                className="herolist__hero__link"
                title="Arc Warden"
                to="/ArcWarden"
              >
                <span className="herolist__hero__name">Arc Warden</span>
              </Link>
            </li>
            <li className="herolist__hero axe">
              <Link className="herolist__hero__link" title="Axe" to="/Axe">
                <span className="herolist__hero__name">Axe</span>
              </Link>
            </li>
            <li className="herolist__hero bane">
              <Link className="herolist__hero__link" title="Bane" to="/Bane">
                <span className="herolist__hero__name">Bane</span>
              </Link>
            </li>
            <li className="herolist__hero batrider">
              <Link
                className="herolist__hero__link"
                title="Batrider"
                to="/Batrider"
              >
                <span className="herolist__hero__name">Batrider</span>
              </Link>
            </li>
            <li className="herolist__hero beastmaster">
              <Link
                className="herolist__hero__link"
                title="Beastmaster"
                to="/Beastmaster"
              >
                <span className="herolist__hero__name">Beastmaster</span>
              </Link>
            </li>
            <li className="herolist__hero bloodseeker">
              <Link
                className="herolist__hero__link"
                title="Bloodseeker"
                to="/Bloodseeker"
              >
                <span className="herolist__hero__name">Bloodseeker</span>
              </Link>
            </li>
            <li className="herolist__hero bounty_hunter">
              <Link
                className="herolist__hero__link"
                title="Bounty Hunter"
                to="/BountyHunter"
              >
                <span className="herolist__hero__name">Bounty Hunter</span>
              </Link>
            </li>
            <li className="herolist__hero brewmaster">
              <Link
                className="herolist__hero__link"
                title="Brewmaster"
                to="/Brewmaster"
              >
                <span className="herolist__hero__name">Brewmaster</span>
              </Link>
            </li>
            <li className="herolist__hero bristleback">
              <Link
                className="herolist__hero__link"
                title="Bristleback"
                to="/Bristleback"
              >
                <span className="herolist__hero__name">Bristleback</span>
              </Link>
            </li>
            <li className="herolist__hero broodmother">
              <Link
                className="herolist__hero__link"
                title="Broodmother"
                to="/Broodmother"
              >
                <span className="herolist__hero__name">Broodmother</span>
              </Link>
            </li>
            <li className="herolist__hero centaur_warrunner">
              <Link
                className="herolist__hero__link"
                title="Centaur Warrunner"
                to="/Centaur+Warrunner"
              >
                <span className="herolist__hero__name">Centaur Warrunner</span>
              </Link>
            </li>
            <li className="herolist__hero chaos_knight">
              <Link
                className="herolist__hero__link"
                title="Chaos Knight"
                to="/Chaos+Knight"
              >
                <span className="herolist__hero__name">Chaos Knight</span>
              </Link>
            </li>
            <li className="herolist__hero chen">
              <Link className="herolist__hero__link" title="Chen" to="/Chen">
                <span className="herolist__hero__name">Chen</span>
              </Link>
            </li>
            <li className="herolist__hero clinkz">
              <Link
                className="herolist__hero__link"
                title="Clinkz"
                to="/Clinkz"
              >
                <span className="herolist__hero__name">Clinkz</span>
              </Link>
            </li>
            <li className="herolist__hero clockwerk">
              <Link
                className="herolist__hero__link"
                title="Clockwerk"
                to="/Clockwerk"
              >
                <span className="herolist__hero__name">Clockwerk</span>
              </Link>
            </li>
            <li className="herolist__hero crystal_maiden">
              <Link
                className="herolist__hero__link"
                title="Crystal Maiden"
                to="/Crystal+Maiden"
              >
                <span className="herolist__hero__name">Crystal Maiden</span>
              </Link>
            </li>
            <li className="herolist__hero dark_seer">
              <Link
                className="herolist__hero__link"
                title="Dark Seer"
                to="/Dark+Seer"
              >
                <span className="herolist__hero__name">Dark Seer</span>
              </Link>
            </li>
            <li className="herolist__hero dark_willow">
              <Link
                className="herolist__hero__link"
                title="Dark Willow"
                to="/Dark+Willow"
              >
                <span className="herolist__hero__name">Dark Willow</span>
              </Link>
            </li>
            <li className="herolist__hero dazzle">
              <Link
                className="herolist__hero__link"
                title="Dazzle"
                to="/Dazzle"
              >
                <span className="herolist__hero__name">Dazzle</span>
              </Link>
            </li>
            <li className="herolist__hero death_prophet">
              <Link
                className="herolist__hero__link"
                title="Death Prophet"
                to="/Death+Prophet"
              >
                <span className="herolist__hero__name">Death Prophet</span>
              </Link>
            </li>
            <li className="herolist__hero disruptor">
              <Link
                className="herolist__hero__link"
                title="Disruptor"
                to="/Disruptor"
              >
                <span className="herolist__hero__name">Disruptor</span>
              </Link>
            </li>
            <li className="herolist__hero doom">
              <Link className="herolist__hero__link" title="Doom" to="/Doom">
                <span className="herolist__hero__name">Doom</span>
              </Link>
            </li>
            <li className="herolist__hero dragon_knight">
              <Link
                className="herolist__hero__link"
                title="Dragon Knight"
                to="/Dragon+Knight"
              >
                <span className="herolist__hero__name">Dragon Knight</span>
              </Link>
            </li>
            <li className="herolist__hero drow_ranger">
              <Link
                className="herolist__hero__link"
                title="Drow Ranger"
                to="/Drow+Ranger"
              >
                <span className="herolist__hero__name">Drow Ranger</span>
              </Link>
            </li>
            <li className="herolist__hero earth_spirit">
              <Link
                className="herolist__hero__link"
                title="Earth Spirit"
                to="/Earth+Spirit"
              >
                <span className="herolist__hero__name">Earth Spirit</span>
              </Link>
            </li>
            <li className="herolist__hero earthshaker">
              <Link
                className="herolist__hero__link"
                title="Earthshaker"
                to="/Earthshaker"
              >
                <span className="herolist__hero__name">Earthshaker</span>
              </Link>
            </li>
            <li className="herolist__hero elder_titan">
              <Link
                className="herolist__hero__link"
                title="Elder Titan"
                to="/Elder+Titan"
              >
                <span className="herolist__hero__name">Elder Titan</span>
              </Link>
            </li>
            <li className="herolist__hero ember_spirit">
              <Link
                className="herolist__hero__link"
                title="Ember Spirit"
                to="/Ember+Spirit"
              >
                <span className="herolist__hero__name">Ember Spirit</span>
              </Link>
            </li>
            <li className="herolist__hero enchantress">
              <Link
                className="herolist__hero__link"
                title="Enchantress"
                to="/Enchantress"
              >
                <span className="herolist__hero__name">Enchantress</span>
              </Link>
            </li>
            <li className="herolist__hero enigma">
              <Link
                className="herolist__hero__link"
                title="Enigma"
                to="/Enigma"
              >
                <span className="herolist__hero__name">Enigma</span>
              </Link>
            </li>
            <li className="herolist__hero faceless_void">
              <Link
                className="herolist__hero__link"
                title="Faceless Void"
                to="/Faceless+Void"
              >
                <span className="herolist__hero__name">Faceless Void</span>
              </Link>
            </li>
            <li className="herolist__hero grimstroke">
              <Link
                className="herolist__hero__link"
                title="Grimstroke"
                to="/Grimstroke"
              >
                <span className="herolist__hero__name">Grimstroke</span>
              </Link>
            </li>
            <li className="herolist__hero gyrocopter">
              <Link
                className="herolist__hero__link"
                title="Gyrocopter"
                to="/Gyrocopter"
              >
                <span className="herolist__hero__name">Gyrocopter</span>
              </Link>
            </li>
            <li className="herolist__hero huskar">
              <Link
                className="herolist__hero__link"
                title="Huskar"
                to="/Huskar"
              >
                <span className="herolist__hero__name">Huskar</span>
              </Link>
            </li>
            <li className="herolist__hero invoker">
              <Link
                className="herolist__hero__link"
                title="Invoker"
                to="/Invoker"
              >
                <span className="herolist__hero__name">Invoker</span>
              </Link>
            </li>
            <li className="herolist__hero io">
              <Link className="herolist__hero__link" title="Io" to="/Io">
                <span className="herolist__hero__name">Io</span>
              </Link>
            </li>
            <li className="herolist__hero jakiro">
              <Link
                className="herolist__hero__link"
                title="Jakiro"
                to="/Jakiro"
              >
                <span className="herolist__hero__name">Jakiro</span>
              </Link>
            </li>
            <li className="herolist__hero juggernaut">
              <Link
                className="herolist__hero__link"
                title="Juggernaut"
                to="/Juggernaut"
              >
                <span className="herolist__hero__name">Juggernaut</span>
              </Link>
            </li>
            <li className="herolist__hero keeper_of_the_light">
              <Link
                className="herolist__hero__link"
                title="Keeper of the Light"
                to="/Keeper+of+the+Light"
              >
                <span className="herolist__hero__name">
                  Keeper of the Light
                </span>
              </Link>
            </li>
            <li className="herolist__hero kunkka">
              <Link
                className="herolist__hero__link"
                title="Kunkka"
                to="/Kunkka"
              >
                <span className="herolist__hero__name">Kunkka</span>
              </Link>
            </li>
            <li className="herolist__hero legion_commander">
              <Link
                className="herolist__hero__link"
                title="Legion Commander"
                to="/Legion+Commander"
              >
                <span className="herolist__hero__name">Legion Commander</span>
              </Link>
            </li>
            <li className="herolist__hero leshrac">
              <Link
                className="herolist__hero__link"
                title="Leshrac"
                to="/Leshrac"
              >
                <span className="herolist__hero__name">Leshrac</span>
              </Link>
            </li>
            <li className="herolist__hero lich">
              <Link className="herolist__hero__link" title="Lich" to="/Lich">
                <span className="herolist__hero__name">Lich</span>
              </Link>
            </li>
            <li className="herolist__hero lifestealer">
              <Link
                className="herolist__hero__link"
                title="Lifestealer"
                to="/Lifestealer"
              >
                <span className="herolist__hero__name">Lifestealer</span>
              </Link>
            </li>
            <li className="herolist__hero lina">
              <Link className="herolist__hero__link" title="Lina" to="/Lina">
                <span className="herolist__hero__name">Lina</span>
              </Link>
            </li>
            <li className="herolist__hero lion">
              <Link className="herolist__hero__link" title="Lion" to="/Lion">
                <span className="herolist__hero__name">Lion</span>
              </Link>
            </li>
            <li className="herolist__hero lone_druid">
              <Link
                className="herolist__hero__link"
                title="Lone Druid"
                to="/Lone+Druid"
              >
                <span className="herolist__hero__name">Lone Druid</span>
              </Link>
            </li>
            <li className="herolist__hero luna">
              <Link className="herolist__hero__link" title="Luna" to="/Luna">
                <span className="herolist__hero__name">Luna</span>
              </Link>
            </li>
            <li className="herolist__hero lycan">
              <Link className="herolist__hero__link" title="Lycan" to="/Lycan">
                <span className="herolist__hero__name">Lycan</span>
              </Link>
            </li>
            <li className="herolist__hero magnus">
              <Link
                className="herolist__hero__link"
                title="Magnus"
                to="/Magnus"
              >
                <span className="herolist__hero__name">Magnus</span>
              </Link>
            </li>
            <li className="herolist__hero mars">
              <Link className="herolist__hero__link" title="Mars" to="/Mars">
                <span className="herolist__hero__name">Mars</span>
              </Link>
            </li>
            <li className="herolist__hero medusa">
              <Link
                className="herolist__hero__link"
                title="Medusa"
                to="/Medusa"
              >
                <span className="herolist__hero__name">Medusa</span>
              </Link>
            </li>
            <li className="herolist__hero meepo">
              <Link className="herolist__hero__link" title="Meepo" to="/Meepo">
                <span className="herolist__hero__name">Meepo</span>
              </Link>
            </li>
            <li className="herolist__hero mirana">
              <Link
                className="herolist__hero__link"
                title="Mirana"
                to="/Mirana"
              >
                <span className="herolist__hero__name">Mirana</span>
              </Link>
            </li>
            <li className="herolist__hero monkey_king">
              <Link
                className="herolist__hero__link"
                title="Monkey King"
                to="/Monkey+King"
              >
                <span className="herolist__hero__name">Monkey King</span>
              </Link>
            </li>
            <li className="herolist__hero morphling">
              <Link
                className="herolist__hero__link"
                title="Morphling"
                to="/Morphling"
              >
                <span className="herolist__hero__name">Morphling</span>
              </Link>
            </li>
            <li className="herolist__hero naga_siren">
              <Link
                className="herolist__hero__link"
                title="Naga Siren"
                to="/Naga+Siren"
              >
                <span className="herolist__hero__name">Naga Siren</span>
              </Link>
            </li>
            <li className="herolist__hero natures_prophet">
              <Link
                className="herolist__hero__link"
                title="Nature's Prophet"
                to="/Nature's+Prophet"
              >
                <span className="herolist__hero__name">Nature's Prophet</span>
              </Link>
            </li>
            <li className="herolist__hero necrophos">
              <Link
                className="herolist__hero__link"
                title="Necrophos"
                to="/Necrophos"
              >
                <span className="herolist__hero__name">Necrophos</span>
              </Link>
            </li>
            <li className="herolist__hero night_stalker">
              <Link
                className="herolist__hero__link"
                title="Night Stalker"
                to="/Night+Stalker"
              >
                <span className="herolist__hero__name">Night Stalker</span>
              </Link>
            </li>
            <li className="herolist__hero nyx_assassin">
              <Link
                className="herolist__hero__link"
                title="Nyx Assassin"
                to="/Nyx+Assassin"
              >
                <span className="herolist__hero__name">Nyx Assassin</span>
              </Link>
            </li>
            <li className="herolist__hero ogre_magi">
              <Link
                className="herolist__hero__link"
                title="Ogre Magi"
                to="/Ogre+Magi"
              >
                <span className="herolist__hero__name">Ogre Magi</span>
              </Link>
            </li>
            <li className="herolist__hero omniknight">
              <Link
                className="herolist__hero__link"
                title="Omniknight"
                to="/Omniknight"
              >
                <span className="herolist__hero__name">Omniknight</span>
              </Link>
            </li>
            <li className="herolist__hero oracle">
              <Link
                className="herolist__hero__link"
                title="Oracle"
                to="/Oracle"
              >
                <span className="herolist__hero__name">Oracle</span>
              </Link>
            </li>
            <li className="herolist__hero outworld_devourer">
              <Link
                className="herolist__hero__link"
                title="Outworld Devourer"
                to="/Outworld+Devourer"
              >
                <span className="herolist__hero__name">Outworld Devourer</span>
              </Link>
            </li>
            <li className="herolist__hero pangolier">
              <Link
                className="herolist__hero__link"
                title="Pangolier"
                to="/Pangolier"
              >
                <span className="herolist__hero__name">Pangolier</span>
              </Link>
            </li>
            <li className="herolist__hero phantom_assassin">
              <Link
                className="herolist__hero__link"
                title="Phantom Assassin"
                to="/Phantom+Assassin"
              >
                <span className="herolist__hero__name">Phantom Assassin</span>
              </Link>
            </li>
            <li className="herolist__hero phantom_lancer">
              <Link
                className="herolist__hero__link"
                title="Phantom Lancer"
                to="/Phantom+Lancer"
              >
                <span className="herolist__hero__name">Phantom Lancer</span>
              </Link>
            </li>
            <li className="herolist__hero phoenix">
              <Link
                className="herolist__hero__link"
                title="Phoenix"
                to="/Phoenix"
              >
                <span className="herolist__hero__name">Phoenix</span>
              </Link>
            </li>
            <li className="herolist__hero puck">
              <Link className="herolist__hero__link" title="Puck" to="/Puck">
                <span className="herolist__hero__name">Puck</span>
              </Link>
            </li>
            <li className="herolist__hero pudge">
              <Link className="herolist__hero__link" title="Pudge" to="/Pudge">
                <span className="herolist__hero__name">Pudge</span>
              </Link>
            </li>
            <li className="herolist__hero pugna">
              <Link className="herolist__hero__link" title="Pugna" to="/Pugna">
                <span className="herolist__hero__name">Pugna</span>
              </Link>
            </li>
            <li className="herolist__hero queen_of_pain">
              <Link
                className="herolist__hero__link"
                title="Queen of Pain"
                to="/Queen+of+Pain"
              >
                <span className="herolist__hero__name">Queen of Pain</span>
              </Link>
            </li>
            <li className="herolist__hero razor">
              <Link className="herolist__hero__link" title="Razor" to="/Razor">
                <span className="herolist__hero__name">Razor</span>
              </Link>
            </li>
            <li className="herolist__hero riki">
              <Link className="herolist__hero__link" title="Riki" to="/Riki">
                <span className="herolist__hero__name">Riki</span>
              </Link>
            </li>
            <li className="herolist__hero rubick">
              <Link
                className="herolist__hero__link"
                title="Rubick"
                to="/Rubick"
              >
                <span className="herolist__hero__name">Rubick</span>
              </Link>
            </li>
            <li className="herolist__hero sand_king">
              <Link
                className="herolist__hero__link"
                title="Sand King"
                to="/Sand+King"
              >
                <span className="herolist__hero__name">Sand King</span>
              </Link>
            </li>
            <li className="herolist__hero shadow_demon">
              <Link
                className="herolist__hero__link"
                title="Shadow Demon"
                to="/Shadow+Demon"
              >
                <span className="herolist__hero__name">Shadow Demon</span>
              </Link>
            </li>
            <li className="herolist__hero shadow_fiend">
              <Link
                className="herolist__hero__link"
                title="Shadow Fiend"
                to="/Shadow+Fiend"
              >
                <span className="herolist__hero__name">Shadow Fiend</span>
              </Link>
            </li>
            <li className="herolist__hero shadow_shaman">
              <Link
                className="herolist__hero__link"
                title="Shadow Shaman"
                to="/Shadow+Shaman"
              >
                <span className="herolist__hero__name">Shadow Shaman</span>
              </Link>
            </li>
            <li className="herolist__hero silencer">
              <Link
                className="herolist__hero__link"
                title="Silencer"
                to="/Silencer"
              >
                <span className="herolist__hero__name">Silencer</span>
              </Link>
            </li>
            <li className="herolist__hero skywrath_mage">
              <Link
                className="herolist__hero__link"
                title="Skywrath Mage"
                to="/Skywrath+Mage"
              >
                <span className="herolist__hero__name">Skywrath Mage</span>
              </Link>
            </li>
            <li className="herolist__hero slardar">
              <Link
                className="herolist__hero__link"
                title="Slardar"
                to="/Slardar"
              >
                <span className="herolist__hero__name">Slardar</span>
              </Link>
            </li>
            <li className="herolist__hero slark">
              <Link className="herolist__hero__link" title="Slark" to="/Slark">
                <span className="herolist__hero__name">Slark</span>
              </Link>
            </li>
            <li className="herolist__hero sniper">
              <Link
                className="herolist__hero__link"
                title="Sniper"
                to="/Sniper"
              >
                <span className="herolist__hero__name">Sniper</span>
              </Link>
            </li>
            <li className="herolist__hero spectre">
              <Link
                className="herolist__hero__link"
                title="Spectre"
                to="/Spectre"
              >
                <span className="herolist__hero__name">Spectre</span>
              </Link>
            </li>
            <li className="herolist__hero spirit_breaker">
              <Link
                className="herolist__hero__link"
                title="Spirit Breaker"
                to="/Spirit+Breaker"
              >
                <span className="herolist__hero__name">Spirit Breaker</span>
              </Link>
            </li>
            <li className="herolist__hero storm_spirit">
              <Link
                className="herolist__hero__link"
                title="Storm Spirit"
                to="/Storm+Spirit"
              >
                <span className="herolist__hero__name">Storm Spirit</span>
              </Link>
            </li>
            <li className="herolist__hero sven">
              <Link className="herolist__hero__link" title="Sven" to="/Sven">
                <span className="herolist__hero__name">Sven</span>
              </Link>
            </li>
            <li className="herolist__hero techies">
              <Link
                className="herolist__hero__link"
                title="Techies"
                to="/Techies"
              >
                <span className="herolist__hero__name">Techies</span>
              </Link>
            </li>
            <li className="herolist__hero templar_assassin">
              <Link
                className="herolist__hero__link"
                title="Templar Assassin"
                to="/Templar+Assassin"
              >
                <span className="herolist__hero__name">Templar Assassin</span>
              </Link>
            </li>
            <li className="herolist__hero terrorblade">
              <Link
                className="herolist__hero__link"
                title="Terrorblade"
                to="/Terrorblade"
              >
                <span className="herolist__hero__name">Terrorblade</span>
              </Link>
            </li>
            <li className="herolist__hero tidehunter">
              <Link
                className="herolist__hero__link"
                title="Tidehunter"
                to="/Tidehunter"
              >
                <span className="herolist__hero__name">Tidehunter</span>
              </Link>
            </li>
            <li className="herolist__hero timbersaw">
              <Link
                className="herolist__hero__link"
                title="Timbersaw"
                to="/Timbersaw"
              >
                <span className="herolist__hero__name">Timbersaw</span>
              </Link>
            </li>
            <li className="herolist__hero tinker">
              <Link
                className="herolist__hero__link"
                title="Tinker"
                to="/Tinker"
              >
                <span className="herolist__hero__name">Tinker</span>
              </Link>
            </li>
            <li className="herolist__hero tiny">
              <Link className="herolist__hero__link" title="Tiny" to="/Tiny">
                <span className="herolist__hero__name">Tiny</span>
              </Link>
            </li>
            <li className="herolist__hero treant_protector">
              <Link
                className="herolist__hero__link"
                title="Treant Protector"
                to="/Treant+Protector"
              >
                <span className="herolist__hero__name">Treant Protector</span>
              </Link>
            </li>
            <li className="herolist__hero troll_warlord">
              <Link
                className="herolist__hero__link"
                title="Troll Warlord"
                to="/Troll+Warlord"
              >
                <span className="herolist__hero__name">Troll Warlord</span>
              </Link>
            </li>
            <li className="herolist__hero tusk">
              <Link className="herolist__hero__link" title="Tusk" to="/Tusk">
                <span className="herolist__hero__name">Tusk</span>
              </Link>
            </li>
            <li className="herolist__hero underlord">
              <Link
                className="herolist__hero__link"
                title="Underlord"
                to="/Underlord"
              >
                <span className="herolist__hero__name">Underlord</span>
              </Link>
            </li>
            <li className="herolist__hero undying">
              <Link
                className="herolist__hero__link"
                title="Undying"
                to="/Undying"
              >
                <span className="herolist__hero__name">Undying</span>
              </Link>
            </li>
            <li className="herolist__hero ursa">
              <Link className="herolist__hero__link" title="Ursa" to="/Ursa">
                <span className="herolist__hero__name">Ursa</span>
              </Link>
            </li>
            <li className="herolist__hero vengeful_spirit">
              <Link
                className="herolist__hero__link"
                title="Vengeful Spirit"
                to="/Vengeful+Spirit"
              >
                <span className="herolist__hero__name">Vengeful Spirit</span>
              </Link>
            </li>
            <li className="herolist__hero venomancer">
              <Link
                className="herolist__hero__link"
                title="Venomancer"
                to="/Venomancer"
              >
                <span className="herolist__hero__name">Venomancer</span>
              </Link>
            </li>
            <li className="herolist__hero viper">
              <Link className="herolist__hero__link" title="Viper" to="/Viper">
                <span className="herolist__hero__name">Viper</span>
              </Link>
            </li>
            <li className="herolist__hero visage">
              <Link
                className="herolist__hero__link"
                title="Visage"
                to="/Visage"
              >
                <span className="herolist__hero__name">Visage</span>
              </Link>
            </li>
            <li className="herolist__hero warlock">
              <Link
                className="herolist__hero__link"
                title="Warlock"
                to="/Warlock"
              >
                <span className="herolist__hero__name">Warlock</span>
              </Link>
            </li>
            <li className="herolist__hero weaver">
              <Link
                className="herolist__hero__link"
                title="Weaver"
                to="/Weaver"
              >
                <span className="herolist__hero__name">Weaver</span>
              </Link>
            </li>
            <li className="herolist__hero windranger">
              <Link
                className="herolist__hero__link"
                title="Windranger"
                to="/Windranger"
              >
                <span className="herolist__hero__name">Windranger</span>
              </Link>
            </li>
            <li className="herolist__hero winter_wyvern">
              <Link
                className="herolist__hero__link"
                title="Winter Wyvern"
                to="/Winter+Wyvern"
              >
                <span className="herolist__hero__name">Winter Wyvern</span>
              </Link>
            </li>
            <li className="herolist__hero witch_doctor">
              <Link
                className="herolist__hero__link"
                title="Witch Doctor"
                to="/Witch+Doctor"
              >
                <span className="herolist__hero__name">Witch Doctor</span>
              </Link>
            </li>
            <li className="herolist__hero wraith_king">
              <Link
                className="herolist__hero__link"
                title="Wraith King"
                to="/Wraith+King"
              >
                <span className="herolist__hero__name">Wraith King</span>
              </Link>
            </li>
            <li className="herolist__hero zeus">
              <Link className="herolist__hero__link" title="Zeus" to="/Zeus">
                <span className="herolist__hero__name">Zeus</span>
              </Link>
            </li>
          </ul>
        </div>
      </Router>
    );
  }
}
