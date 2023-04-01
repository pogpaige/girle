const Discord = require('discord.js');
const fs = require('fs');

module.exports = {
  reactToMessage: function(message, content) {{
    if (message.author.id == '246594063896150016' || message.author.bot) { return };
    {
    if (message.content.includes("!!")) {
        message.react("‼️"); 
    }}{
    if (message.content.includes("🇨🇳")) {
        message.react("🇨🇳"); 
    }}{
    if (message.content.includes("fuck thing1")) {
        message.react('882827667550896160')
        .catch(console.error); 
    }}
    {
    if (message.content.includes("🇵🇱")) {
        message.react("🇵🇱"); 
    }}{
    if (message.content.includes("polish") || message.content.includes("poland")) {
        message.react("🇵🇱"); 
    }}{
      if (message.content.includes("Polish") || message.content.includes("Poland")) {
          message.react("🇵🇱"); 
    }}{
      if (message.content.startsWith("bruh")) {
          message.react("😤"); 
      }}
  }
},
respondToMessage: function(message, content) { 
  var yea = Math.random() * 100;
  if (message.author.id == '246594063896150016' || message.author.bot) { return };
  
  if (message.content.startsWith("!coinflip")) {
    if (yea > 50) {
      message.channel.send("heads"); }
    else 
      message.channel.send("tails");
  }
  if (message.content.includes("hiii")) {
    message.channel.send("hi :3");
  }{
    if (message.content.includes("absolute bullshit")) {
      message.channel.send("https://media.discordapp.net/attachments/295109703103545345/678483847285047347/unknown.png");
  }}{
    if (message.content.includes("accuse")) {
      message.channel.send("https://catgirl.top/i/ed5neckf.png");
  }}{
    if (message.content.includes("argue")) {
      message.channel.send("https://catgirl.top/i/uc9laxl2.png");
  }}{
    if (message.content.includes("autism") || message.content.includes("Autism")) {
      if (yea < 21) { // 20%
        message.channel.send("https://cdn.discordapp.com/attachments/782326236340682803/905530408979030106/kmbfR5BaXpMu8kjL.mp4") }
      else // 80%
        return;
  }}{
    if (message.content.includes("argument") || message.content.includes("arguing")) {
      message.channel.send("https://catgirl.top/i/uc9laxl2.png");
  }}{
    if (message.content.includes("assumption")) {
      message.channel.send("https://catgirl.top/i/fjzxxm16.png");
  }}{
    if (message.content.includes("beanguy")) {
      message.channel.send("https://cdn.discordapp.com/attachments/634047352591745044/776058891925848074/kz_beanguy_v2_in_00_58.74_by_Jak.webm");
  }}{
    if (message.content.includes("bible")) {
      message.channel.send("https://catgirl.top/i/umdq0jj3.png");
  }}{
    if (message.content.includes("bladee") || message.content.includes("BLADEE")) {
      if (yea < 11) // 10%   
        message.channel.send("love em") 
      else if (yea < 16) // 5%
        message.channel.send("https://cdn.discordapp.com/attachments/780872292263657475/906343310900199485/bladee.png")
      else if (yea < 36) // 20%
        message.channel.send("♻️✨♻️✨♻️✨♻️✨♻️✨")
      else if (yea < 41) // 5%
        message.channel.send("I Want To Have Sex With Bladee ‼️👊")
      else if (yea < 56) // 15%
        message.channel.send("drain gang man drain ceo shit man")
      else if (yea < 71) // 15%
        message.channel.send("drain high school scholar man first in the class man")
      else if (yea < 76) // 5%
        message.channel.send("https://cdn.discordapp.com/attachments/782326236340682803/905531290596573224/unknown-16.png")
      else if (yea < 86) // 10%
        message.channel.send("bladee")
      else if (yea < 91) // 5%
        message.channel.send("https://media.discordapp.net/attachments/882739815752290375/905937693291204689/IMG_5508.png")
      else if (yea < 96) // 5%
        message.channel.send("MAN IF U GIVE UP THATS WHEN U FUCKED UP GET UR FUCKIN RACKS UP 📈")
      else if (yea < 101) // 5%
        message.channel.send("https://c.tenor.com/FessOPQPe20AAAAM/bladee-chaewon.gif")
  }}{
    if (message.content.includes("breakaway")) {
      message.channel.send("https://catgirl.top/i/uwa2rln8.png");
  }}{
    if (message.content.includes("crazy")) {
      if (yea < 31) // 30%
        message.channel.send("https://media.discordapp.net/attachments/462217571081650186/906938146682437632/u457xhebz6y71.jpg")
      else
        return;
  }}{
    if (message.content.includes("caja")) {
      message.channel.send("https://cdn.discordapp.com/attachments/634047352591745044/776061041473749022/kz_by_caja_and_persona_in_00_22.71_by_Jak.webm");
  }}{
    if (message.content.startsWith("cat")) {
      message.channel.send("cat");
  }}{
    if (message.content.includes("cum")) {
      message.channel.send("Fortnite");
  }}{
    if (message.content.includes("daniel")) {
      message.channel.send("https://media.discordapp.net/attachments/780872292263657475/849525149668474920/unknown.png");
  }}{
    if (message.content.includes("deadlift")) {
      message.channel.send("https://catgirl.top/i/0zlopti2.png");
  }}{
    if (message.content.includes("disadvantage")) {
      message.channel.send("https://catgirl.top/i/hvv5tw3t.png");
  }}{
    if (message.content.includes("dick")) {
      if (yea < 41) // 40%
      message.channel.send("https://media.discordapp.net/attachments/696314290239700992/696636441458900992/Discord_EkoydxSNIE.png")
      else
        return;
  }}{
    if (message.content.includes("eliminate")) {
      message.channel.send("https://catgirl.top/i/vao4extv.png");
  }}{
    if (message.content.includes("ecco") || message.content.includes("ecco2k") || message.content.includes("Ecco2k")) {
      if (yea < 41) // 40%
        message.channel.send("https://tenor.com/view/ecco2k-bladee-drain-gang-obedient-blingee-gif-18120409")
      else if (yea < 51) // 10%
        message.channel.send("[Verse 2: Ecco2k]\nEvery time I close my eyes I stop existing\nEvery now and again I can tell the difference\nWoke up falling I'm still falling off of buildings\nWant a new addiction want to fall victim\nSomething you might crush my heart but I'ma risk it\nAnd I'm still sinking need a curse lifted\nBlacklisted at all the clubs but I can fix this\nThink I need stitches pray to three sixes\nI wanna see heads roll execute past life\nHundred white birds ninety-nine fall out the sky\nFast life race against time it will outrun you\nRains return to the earth sunlight to the underworld\nMaybe in another life we could be lovers\nEver since we met these thoughts keep getting worse\nIron will ironed shirt now I want a Fendi purse\nI don't talk with empty words what is any of it worth?\nEvery time I close my eyes I go to prison\nEvery now and again I can feel the distance\nWoke up running I'm still running through the system\nWant a new sickness want to fall victim\nSomewhere someone broke your heart but I'ma fix it\nAnd I'm still wishing for that first kiss\nGet blacklisted at all the clubs in Seven Sisters\nIndustry children play with three sixes")
      else
        return;
  }}{
    if (message.content.includes("femboy")) {
      message.channel.send("love em");
  }}{
    if (message.content.includes("fucker cringe")) {
      message.channel.send("https://catgirl.top/i/8el4yyrx.png");
  }}{
    if (message.content.includes("gemischte")) {
      message.channel.send("https://catgirl.top/i/ntxx77z1.png");
  }}{
    if (message.content.includes("gunna") || message.content.includes("Gunna") || message.content.includes("GUNNA")) {
      message.channel.send("https://media.discordapp.net/attachments/762855442778685461/902173321616035930/unknown.png");
  }}{
    if (message.content.includes("hater") || message.content.includes("bitch ass") || message.content.includes("whats up")) {
      message.channel.send("ayo man its ya boy thaiboy man man fuck you man you a bitch ass man fuck all the hater shit man man i be turning up bitch whats up man whats up bitch :100:");
  }}{
    if (message.content.includes("genius")) {
      if (yea < 51) // 50%
      message.channel.send("https://i.imgur.com/VldNe2h.png")
      else
        return;
  }}{
    if (message.content.includes("inspiration")) {
      message.channel.send("https://cdn.discordapp.com/attachments/326941062893535242/655739592946876435/unknown.png");
  }}{
    if (message.content.includes("insult")) {
      message.channel.send("i didn’t insult you to help me get unbanned i do not care about the server, i insulted you because you’re too oblivious to realize that you’re a piece of shit human being, and if someone didn’t tell you, you would never even try to better yourself, so maybe now the people you meet in the future will be spared from dealing with your enormous ego and assholish personality");
  }}{
    if (message.content.includes("jew")) {
      if (yea < 21) // 20%
      message.channel.send("https://cdn.discordapp.com/attachments/326941062893535242/735658296534368296/image0-4.png")
      else
        return;
  }}{
    if (message.content.includes("kebab")) {
      message.channel.send("REMOVE KEBAB remove kebab you are worst turk. you are the turk idiot you are the turk smell. return to croatioa. to our croatia cousins you may come our contry. you may live in the zoo….ahahahaha ,bosnia we will never forgeve you. cetnik rascal FUck but fuck asshole turk stink bosnia sqhipere shqipare..turk genocide best day of my life. take a bath of dead turk..ahahahahahBOSNIA WE WILL GET YOU!! do not forget ww2 .albiania we kill the king , albania return to your precious mongolia….hahahahaha idiot turk and bosnian smell so bad..wow i can smell it. REMOVE KEBAB FROM THE PREMISES. you will get caught. russia+usa+croatia+slovak=kill bosnia…you will ww2/ tupac alive in serbia, tupac making album of serbia . fast rap tupac serbia. we are rich and have gold now hahahaha ha because of tupac… you are ppoor stink turk… you live in a hovel hahahaha, you live in a yurt tupac alive numbr one #1 in serbia ….fuck the croatia ,..FUCKk ashol turks no good i spit﻿ in the mouth eye of ur flag and contry. 2pac aliv and real strong wizard kill all the turk farm aminal with rap magic now we the serba rule .ape of the zoo presidant georg bush fukc the great satan and lay egg this egg hatch and bosnia wa;s born. stupid baby form the eggn give bak our clay we will crush u lik a skull of pig. serbia greattst countrey");
  }}{
    if (message.content.includes("ketamine")) {
      if (yea < 21) // 20%
      message.channel.send("https://www.youtube.com/watch?v=O3skZlcsiSY")
      else
        return;
  }}{
    if (message.content.includes("lawnmower")) {
      message.channel.send("https://www.youtube.com/watch?v=9Yrt9qkBQ2Q");
  }}{
    if (message.content.includes("lets go")) {
      message.channel.send("https://tenor.com/bexIZ.gif");
  }}{
    if (message.content.includes("liberal")) {
      message.channel.send("https://i.redd.it/pf9dkh5u1b371.jpg");
  }}{
    if (message.content.includes("lifechanging") || message.content.includes("life changing")) {
      message.channel.send("'Outstanding' Gamespot\n'Life Changing' IMDB\n'A Little Something For Everyone' IGN");
  }}{
    if (message.content.includes("ligma")) {
      message.channel.send("https://i.redd.it/gz0yso71gtn51.jpg");
  }}{
    if (message.content.includes("llnuke")) {
      message.channel.send("https://cdn.discordapp.com/attachments/295109703103545345/797769157927501834/unknown.png");
  }}{
    if (message.content.includes("mp3")) {
      message.channel.send("https://media.discordapp.net/attachments/780872292263657475/1091492273113538760/image.png");
  }}{
    if (message.content.includes("mystery")) {
      message.channel.send("https://cdn.discordapp.com/attachments/326941062893535242/655738130044813312/unknown.png");
  }}{
    if (message.content.includes("nekomimi")) {
      message.channel.send("reddit.com/r/nekomimi");
  }}{
    if (message.content.includes("WOOO")) {
      message.channel.send("https://media.discordapp.net/attachments/696314290239700992/856606962074910750/unknown.png");
  }}{
    if (message.content.includes("racist") || message.content.includes("RACIST")) {
      message.channel.send("thing1 pedo racist transphobe homophobe xenophobe furry queer");
  }}{
    if (message.content.includes("stfu")) {
      message.channel.send("https://www.youtube.com/watch?v=x55HD7PhO-s");
  }}{
    if (message.content.includes("!idiot")) {
      message.channel.send("Persona");
    }}   
  }
}