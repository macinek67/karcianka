let blackCards = "image (10).png";
let allCards = [];

//czarne
let c2 = "https://wszystkiesymbole.pl/wp-content/uploads/2021/01/2-pik-wino.png";
let c3 = "https://wszystkiesymbole.pl/wp-content/uploads/2021/01/3-pik-wino.png";
let c4 = "https://wszystkiesymbole.pl/wp-content/uploads/2021/01/4-pik-wino.png";
let c5 = "https://wszystkiesymbole.pl/wp-content/uploads/2021/01/5-pik-wino.png";
let c6 = "https://wszystkiesymbole.pl/wp-content/uploads/2021/01/6-pik-wino.png";
let c7 = "https://wszystkiesymbole.pl/wp-content/uploads/2021/01/7-pik-wino.png";
let c8 = "https://wszystkiesymbole.pl/wp-content/uploads/2021/01/8-pik-wino.png";
let c9 = "https://wszystkiesymbole.pl/wp-content/uploads/2021/01/9-pik-wino.png";
let c10 = "https://wszystkiesymbole.pl/wp-content/uploads/2021/01/10-pik-wino.png";
let cJ = "https://wszystkiesymbole.pl/wp-content/uploads/2021/01/walet-pik-wino.png";
let cQ = "https://wszystkiesymbole.pl/wp-content/uploads/2021/01/dama-pik-wino.png";
let cK = "https://wszystkiesymbole.pl/wp-content/uploads/2021/01/krol-pik-wino.png";
let cA = "https://wszystkiesymbole.pl/wp-content/uploads/2021/01/as-pik-wino.png";

//czerwone
let cr2 = "https://wszystkiesymbole.pl/wp-content/uploads/2021/01/2-kier-serce.png";
let cr3 = "https://wszystkiesymbole.pl/wp-content/uploads/2021/01/3-kier-serce.png";
let cr4 = "https://wszystkiesymbole.pl/wp-content/uploads/2021/01/4-kier-serce.png";
let cr5 = "https://wszystkiesymbole.pl/wp-content/uploads/2021/01/5-kier-serce.png";
let cr6 = "https://wszystkiesymbole.pl/wp-content/uploads/2021/01/6-kier-serce.png";
let cr7 = "https://wszystkiesymbole.pl/wp-content/uploads/2021/01/7-kier-serce.png";
let cr8 = "https://wszystkiesymbole.pl/wp-content/uploads/2021/01/8-kier-serce.png";
let cr9 = "https://wszystkiesymbole.pl/wp-content/uploads/2021/01/9-kier-serce.png";
let cr10 = "https://wszystkiesymbole.pl/wp-content/uploads/2021/01/10-kier-serce.png";
let crJ = "https://wszystkiesymbole.pl/wp-content/uploads/2021/01/walet-kier-serce.png";
let crQ = "https://wszystkiesymbole.pl/wp-content/uploads/2021/01/dama-kier-serce.png";
let crK = "https://wszystkiesymbole.pl/wp-content/uploads/2021/01/krol-kier-serce.png";
let crA = "https://wszystkiesymbole.pl/wp-content/uploads/2021/01/as-kier-serce.png";

let potasowane = [c2,c3,c4,c5,c6,c7,c8,c9,c10,cJ,cQ,cK,cA, cr2,cr3,cr4,cr5,cr6,cr7,cr8,cr9,cr10,crJ,crQ,crK,crA];

function start() {
    for(let i=0; i<(2*13); i++) {
        let x = document.createElement("IMG");
        x.setAttribute("src", blackCards);
        x.setAttribute("width", "115");
        x.setAttribute("height", "176");
        x.classList.add("cardsStart");
        x.id = i;
        document.getElementById("mainBoard").appendChild(x);
        allCards[i] = x;
    }
}

let player1Cards = [];
let player2Cards = [];

function rozmiesc() {
    for(let j=0; j<(2*13); j++) {
        if(j%2 == 0) { setTimeout(() => {  allCards[j].classList.add('horizTranslate'); }, 525+j*2); player1Cards[player1Cards.length] = allCards[j]; } 
        else  { setTimeout(() => {  allCards[j].classList.add('horizTranslate1'); }, 525+j*2); player2Cards[player2Cards.length] = allCards[j];}
    }
    tasuj();
}

function tasuj(){
    for(let i=0; i<13; i++) {
        let k = Math.floor(Math.random() * (1 + 13));
        [potasowane[i+k], potasowane[25-i]] = [potasowane[25-i], potasowane[i+k]];
    }
    for(let i=0; i<13; i++) {
        player1Cards[i].name = potasowane[i]; 
    }
    for(let i=13; i<26; i++) {
        player2Cards[i-13].name = potasowane[i]; 
    }
}

let x1 = 1;
let x2 = 1;

function p1Pull() {
    if(x1==1 || !player2Cards[(player2Cards.length-x1)+1].classList.contains("fightCard")) {
        player2Cards[player2Cards.length-x1].classList.remove("horizTranslate");
        player2Cards[player2Cards.length-x1].classList.add("fightCard");
        player2Cards[player2Cards.length-x1].setAttribute("src",  player2Cards[player2Cards.length-x1].name);
        x1++;
    } else if(czyWojna==true) {
        player2Cards[player2Cards.length-x1].classList.remove("horizTranslate");
        player2Cards[player2Cards.length-x1].classList.add("fightCard");
        player2Cards[player2Cards.length-x1].style.marginTop = 50*x1 + "px";
        x1++;
    }
}

function p2Pull() {
    if(x2==1 || !player1Cards[(player1Cards.length-x2)+1].classList.contains("fightCard1")) {
        player1Cards[player1Cards.length-x2].classList.remove("horizTranslate");
        player1Cards[player1Cards.length-x2].classList.add("fightCard1");
        player1Cards[player1Cards.length-x2].setAttribute("src",  player1Cards[player1Cards.length-x2].name);
        x2++;
    } else if(czyWojna==true) {
        player1Cards[player1Cards.length-x2].classList.remove("horizTranslate");
        player1Cards[player1Cards.length-x2].classList.add("fightCard1");
        player1Cards[player1Cards.length-x2].style.marginTop = 50*x2 + "px";
        x2++;
    }
}

let czyWojna = false;
let poczatek = [c2,c3,c4,c5,c6,c7,c8,c9,c10,cJ,cQ,cK,cA, cr2,cr3,cr4,cr5,cr6,cr7,cr8,cr9,cr10,crJ,crQ,crK,crA];

function wygrana(karta1, karta2) {
    for(let i=13; i>0; i--) {
        player1Cards[i+1] = i;
    }
    karta1.setAttribute("src",  blackCards);
    karta2.setAttribute("src",  blackCards);
    karta1.classList.remove("fightCard");
    karta2.classList.remove("fightCard1");
    karta1.classList.add("hhh");
    karta2.classList.add("hhh1");
    console.log(player1Cards);
}

function walcz() {
    let p1 = player2Cards[player1Cards.length-x1+1];
    let p2 = player1Cards[player2Cards.length-x2+1];
    if(p2.classList.contains("fightCard1") && p1.classList.contains("fightCard")) {
        let jakaKartaP1, jakaKartaP2;
        for(let i=0; i<poczatek.length; i++) {
            if(p1.name==poczatek[i]) jakaKartaP1 = i;
            if(p2.name==poczatek[i]) jakaKartaP2 = i;
        }
        //console.log("P1: " + jakaKartaP1 + "    " + "P2: " + jakaKartaP2);
        //console.log(player1Cards);
        console.log(player2Cards.length);
        if(((jakaKartaP1<=12 && jakaKartaP2<=12) && jakaKartaP1>jakaKartaP2) || ((jakaKartaP1>=12 && jakaKartaP2<=12) && jakaKartaP1-13>jakaKartaP2)) {
            wygrana(p1, p2);
        } else if(((jakaKartaP2<=12 && jakaKartaP1<=12) && jakaKartaP2>jakaKartaP1) || ((jakaKartaP2>=12 && jakaKartaP1<=12) && jakaKartaP2-13>jakaKartaP1)) {
            wygrana(p1, p2);
        } else if(((jakaKartaP1>12 && jakaKartaP2>12) && jakaKartaP1>jakaKartaP2) || ((jakaKartaP2>=12 && jakaKartaP1<=12) && jakaKartaP2-13<jakaKartaP1)) {
            wygrana(p1, p2);
        } else if(((jakaKartaP2>12 && jakaKartaP1>12) && jakaKartaP2>jakaKartaP1-13)) {
            wygrana(p1, p2);
        } else czyWojna = true;
    }
}