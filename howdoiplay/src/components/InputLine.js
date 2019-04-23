import React from "react";

const quotes = [
  [`I JUST RANDOMED`, `. NOW WHAT?`],
  [`MY CAPTAIN PICKED ME`, `AND NOW I'M PANICKING.`],
  [`I TOLD MY TEAM I KNOW HOW TO PLAY`, `BUT I REALLY DON'T.`],
  [`I'M GETTING OWNED BY`, `. WHAT DO?`],
  [`CREEPS ARE SPAWNING. QUICK, TELL ME HOW TO`, `.`],
  [`FILTHY`, `PICKERS.`],
  [`WHAT THE HELL IS A`, `?`],
  [`GOD DAMN IT, I'M SICK OF LOSING TO`, `.`],
  [`I'VE NEVER PLAYED`, `BEFORE. GUESS I'LL LEARN IN THIS RANKED MATCH.`],
  [`OF COURSE I KNOW HOW TO PLAY`, `. I'M JUST REFRESHING MY MEMORY.`],
  [`HOW DO I COUNTER`, `? DAGON 5, RIGHT?`],
  [`HOW DO I COUNTER`, `? STACK RAPIERS, RIGHT?`],
  [`HOW DO I COUNTER`, `? WARD THEIR JUNGLE, RIGHT?`],
  [`ICEFROG PLS NERF`, `.`],
  [`ICEFROG PLS BUFF`, `.`],
  [`NO MORE 0% DOTABUFF WIN RATE ON`, `FROM NOW ON.`],
  [`WHY DOES`, `EVEN EXIST? GARBAGE HERO IMO.`],
  [`ALL THE PROS ARE SPAMMING`, `THESE DAYS, SO I WILL TOO.`],
  [`EXPANDING MY HERO PUDDLE TO INCLUDE`, `.`],
  [`OH BOY, MY FIRST DRAFT!`, `IS WEAK AGAINST GRASS TYPE, RIGHT?`],
  [`BLESSED BE THY`, `. GUIDE ME ON THIS RIGHTEOUS PATH TO IMMORTAL.`],
  [`MY STACK BANNED ME FROM PLAYING`, `, BUT I'LL SHOW 'EM.`],
  [`ANYONE WANT TO SWAP FOR`, `? NO? WELL THAT'S NOT GOOD.`],
  [`GIVE ME THE SPARKNOTES ON PLAYING`, `.`],
  [`I NEVER WIN WITH`, `. I BLAME BAD TEAMMATES.`],
  [`BET ALL MY RARES AND GOT SOME DOPE`, `HATS. TIME TO USE 'EM.`],
  [`I HAVE NO IDEA HOW TO PLAY`, `, BUT I WANT THAT BONUS MANGO.`],
  [`GOT AN UNTRADEABLE SET FOR`, `. GUESS I'LL LEARN HOW TO PLAY 'EM.`],
  [`I'M PLAYING`, `? <font color='green'>+25</font>, HERE I COME.`],
  [`I'M PLAYING`, `? <font color='indianred'>-25</font>, HERE I COME.`],
  [`WHO NEEDS VERSATILITY? I'M THE`, `MASTER.`],
  [`I NEED THE LEVEL 25 DOTA PLUS VOICE LINE ON`, `.`],
  [`ALL THE BOOSTERS ARE SPAMMING`, `? THEY MUST BE ON TO SOMETHING.`],
  [
    `<img src='./assets/media/OSfrog.png' alt='OSfrog'> LE BALANCED`,
    `HERO <img src='./assets/media/OSfrog.png' alt='OSfrog'>`
  ],
  [`But is `, `good as pos 6 🤔?`],
  [
    `one`,
    `Ye.. im DED`
  ] /*,
          ["GOOD TIPS MATE REAL USEFUL, SEE U AT", "J"],
          ["U", "-PLAYING PUNKS ARE NEVER SATISFIED ARE YOU?"],
          ["HOW 2 PLEY", "? #HARDWORK #DEDICATION. DEFENSIVE LANING."],
          ["", "CAN YOU TP TOP?"],
          ["", "'S A GOOD HERO, A BIT OVERRATED IN MY OPINION."],
          ["I WONDER IF I CAN JUNGLE", "?"],
          ["Ｈｅｌｌｏ Ｉ＇ｍ Ｓｎｉｔｈ， ｐｌａｙｉｎｇ ｍｙ ２０２１４３ｔｈ ｇａｍｅ ｏｎ", "."],
          ["👌👀👌👀👌👀 good tips go౦ԁ tIps👌 thats ✔ some good👌👌", "right👌👌there👌👌👌"],
          ["13 MANA", ""],
          ["IF I PLAY", "NOW, DO I GET ALL THE PREVIOUS REWARDS?"],
          ["hey its me ur", ""],
          ["I'M A SIMPLE MAN. I PLAY", ", I LOSE."],
          ["420", "WIZARD"],
          ["<img src='./assets/media/CoolCat.png' alt='CoolCat'>", "𝓑𝓪𝔂 <img src='./assets/media/CoolCat.png' alt='CoolCat'>"],
          ["", "is an ass, and we won't be picking it again."],
          ["Nippy. Kind.", "."],
          ["But is ", "good as pos 6 🤔?"],
          ["one", "Ye.. im DED"]*/
];

const random = quotes[Math.floor(Math.random() * quotes.length)];
console.log(random);
const InputLine = () => {
  return (
    <div>
      <form id="heroinput-form" action="/" method="get">
        <span id="hero-input-quote-start">{random[0]}</span>
        <span id="heroinput">
          <input
            className="typeahead"
            type="text"
            placeholder="Hero Name"
            autoComplete="off"
            aria-label="Hero Name"
          />
          <span id="randomhero">
            <div />
          </span>
          <span className="arrow" />
        </span>
        <span id="hero-input-quote-end">{random[1]}</span>
        <input type="submit" value="" />
      </form>
    </div>
  );
};

export default InputLine;
