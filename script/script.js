let nama = prompt("Hei, Let us know what's your name", "");
alert("Hello "+ nama +"! Thanks for your appreciation by visiting our web even we're still in maintenance. hope you love our design!");




let side = document.getElementById("sidetab")
let listmenu = document.getElementById("listmenu")
let butfish = document.getElementById("fishes")
let desc = document.getElementsByClassName("desc")
let butRedSn = document.getElementById("red-Snapper")
let butTuna = document.getElementById("tuna")
let butRedKer = document.getElementById("red-Kerapu")
let butTig = document.getElementById("tiger-Prawn")
let butManta = document.getElementById("manta-Ray")
let butMouS = document.getElementById("mouse-Shark")
let butMob = document.getElementById("mobula")
let butDara = document.getElementById("dara-Shells")
let butMus = document.getElementById("mussels")
let butDung = document.getElementById("dungeness")
let butBigLob = document.getElementById("big-Lobster")
let butWhitCav = document.getElementById("white-Caviar")
let butBigOct = document.getElementById("big-Octopus")
let butSquid = document.getElementById("squid")
let butBigShr = document.getElementById("big-Shrimp")


// listmenu.classList.add("class")
// // listmenu.remove()
console.log(listmenu);
console.log(butRedKer.id);

function explain(){
  return result.innerHTML = `We apologized for being still in a <b>maintenance</b> period so there were some deficiencies in our features. for the future, we will try to provide the best for you.<br><br><br> best regards, <br><br> Tony Starks.`
}

function dont(){
  return result.innerHTML = `
  We're sorry, but we don't know if you already know that this breed is an <b>endangered one</b>. read this <a href="https://www.iucnredlist.org/">link</a> further. thanks. <br><br><br> best regards, <br><br> Tony Starks.`
}

butRedKer.addEventListener("click", explain)
butTig.addEventListener("click", explain)
butTuna.addEventListener("click", explain)
butRedSn.addEventListener("click", explain)
butDara.addEventListener("click", explain)
butMus.addEventListener("click", explain)
butDung.addEventListener("click", explain)
butBigLob.addEventListener("click", explain)
butBigOct.addEventListener("click", explain)
butBigShr.addEventListener("click", explain)
butWhitCav.addEventListener("click", explain)
butSquid.addEventListener("click", explain)
butManta.addEventListener("click", dont)
butMob.addEventListener("click", dont)
butMouS.addEventListener("click", dont)

