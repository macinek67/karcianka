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
let ileKartP1 = 1;
let ileKartP2 = 1;

function p1Pull() {
    if((x1==1 || !player2Cards[(player2Cards.length-x1)+1].classList.contains("fightCard")) && czyWojna!=true) {
        //console.log(player2Cards);
        if((!player2Cards[player2Cards.length-x1].classList.contains("hhhV21")) && !player2Cards[player2Cards.length-x1].classList.contains("hhhV2")) player2Cards[player2Cards.length-x1].classList.add("fightCard");
        if(player2Cards[player2Cards.length-x1].classList.contains("hhhV2")) player2Cards[player2Cards.length-x1].classList.remove("hhhV2");
        if(player2Cards[player2Cards.length-x1].classList.contains("hhhV21")) player2Cards[player2Cards.length-x1].classList.remove("hhhV21");
        if(player2Cards[player2Cards.length-x1].classList.contains("hhh")) { player2Cards[player2Cards.length-x1].classList.remove("hhh"); player2Cards[player2Cards.length-x2].classList.add("fightCardV2") }
        if(player2Cards[player2Cards.length-x1].classList.contains("hhh1")) { player2Cards[player2Cards.length-x1].classList.remove("hhh1"); player2Cards[player2Cards.length-x2].classList.add("fightCardV2") }
        if(player2Cards[player2Cards.length-x1].classList.contains("fightCardV2")) player2Cards[player2Cards.length-x1].classList.remove("horizTranslate1");
        player2Cards[player2Cards.length-x1].setAttribute("src",  player2Cards[player2Cards.length-x1].name);
        //x1++;
    } else if(czyWojna==true && ileKartP1<=2) {
        x1++;
        ileKartP1++;
        player2Cards[player2Cards.length-x1].classList.remove("horizTranslate");
        player2Cards[player2Cards.length-x1].classList.add("fightCard");
        player2Cards[player2Cards.length-x1].style.marginTop = 50*x1 + "px";
        if(x1%2==1) player2Cards[player2Cards.length-x1].setAttribute("src",  player2Cards[player2Cards.length-x1].name);
    }
}

function p2Pull() {
    if((x2==1 || !player1Cards[(player1Cards.length-x2)+1].classList.contains("fightCard1")) && czyWojna!=true) {
        //console.log(player1Cards);
        if((!player1Cards[player1Cards.length-x1].classList.contains("hhhV21")) && !player1Cards[player1Cards.length-x1].classList.contains("hhhV2")) player1Cards[player1Cards.length-x2].classList.add("fightCard1");
        if(player1Cards[player1Cards.length-x1].classList.contains("hhh")) player1Cards[player1Cards.length-x1].classList.remove("hhh");
        if(player1Cards[player1Cards.length-x1].classList.contains("hhh1")) player1Cards[player1Cards.length-x1].classList.remove("hhh1");
        if(player1Cards[player1Cards.length-x1].classList.contains("hhhV2")) { player1Cards[player1Cards.length-x1].classList.remove("hhhV2"); player1Cards[player1Cards.length-x2].classList.add("fightCardV21")}
        if(player1Cards[player1Cards.length-x1].classList.contains("hhhV21")) { player1Cards[player1Cards.length-x1].classList.remove("hhhV21"); player1Cards[player1Cards.length-x2].classList.add("fightCardV21") }
        player1Cards[player1Cards.length-x2].classList.remove("horizTranslate");
        if(player1Cards[player1Cards.length-x1].classList.contains("fightCardV21")) player1Cards[player1Cards.length-x1].classList.remove("horizTranslate1");
        player1Cards[player1Cards.length-x2].setAttribute("src",  player1Cards[player1Cards.length-x2].name);
        //x2++;
    } else if(czyWojna==true && ileKartP2<=2) {
        x2++;
        ileKartP2++;
        player1Cards[player1Cards.length-x2].classList.remove("horizTranslate");
        player1Cards[player1Cards.length-x2].classList.add("fightCard1");
        player1Cards[player1Cards.length-x2].style.marginTop = 50*x2 + "px";
        if(x2%2==1) player1Cards[player1Cards.length-x2].setAttribute("src",  player1Cards[player1Cards.length-x2].name);
    }
}

let czyWojna = false;
let poczatek = [c2,c3,c4,c5,c6,c7,c8,c9,c10,cJ,cQ,cK,cA, cr2,cr3,cr4,cr5,cr6,cr7,cr8,cr9,cr10,crJ,crQ,crK,crA];


function wygranaP1(karta1, karta2) {
    if(x1>1) { wygranaBitwaP1(); return; }
    player2Cards.pop();
    player1Cards.pop();
    for(let i=player2Cards.length+1; i>0; i--) {
        [player2Cards[i], player2Cards[i-2]] = [player2Cards[i-2], player2Cards[i]];
    }
    player2Cards[0] = karta1;
    player2Cards[1] = karta2;
    karta1.setAttribute("src",  blackCards);
    karta2.setAttribute("src",  blackCards);
    if(karta1.classList.contains("fightCard")) karta1.classList.remove("fightCard");
    if(karta2.classList.contains("fightCard1")) karta2.classList.remove("fightCard1");
    if(karta1.classList.contains("fightCardV2")) karta1.classList.remove("fightCardV2");
    if(karta2.classList.contains("fightCardV21")) karta2.classList.remove("fightCardV21");
    karta1.classList.add("horizTranslate1");
    karta1.classList.add("hhh");
    karta2.classList.add("hhh1");
    //console.log(player1Cards);
    //console.log(player2Cards);
}

function wygranaP2(karta1, karta2) {
    if(x2>1) { wygranaBitwaP2(); return; }
    player2Cards.pop();
    player1Cards.pop();
    for(let i=player1Cards.length+1; i>0; i--) {
        [player1Cards[i], player1Cards[i-2]] = [player1Cards[i-2], player1Cards[i]];
    }
    player1Cards[0] = karta1;
    player1Cards[1] = karta2;
    karta1.setAttribute("src",  blackCards);
    karta2.setAttribute("src",  blackCards);
    if(karta1.classList.contains("fightCard")) karta1.classList.remove("fightCard");
    if(karta2.classList.contains("fightCard1")) karta2.classList.remove("fightCard1");
    if(karta1.classList.contains("fightCardV2")) karta1.classList.remove("fightCardV2");
    if(karta2.classList.contains("fightCardV21")) karta2.classList.remove("fightCardV21");
    karta1.classList.add("horizTranslate1");
    karta1.classList.add("hhhV2");
    karta2.classList.add("hhhV21");
    //console.log(player1Cards);
    //console.log(player2Cards);
}

function wygranaBitwaP1() {
    x1 = 1;
    x2 = 1;
    let kartaa1 = player2Cards[player2Cards.length-1];
    let kartaa2 = player2Cards[player2Cards.length-2]; 
    let kartaa3 = player2Cards[player2Cards.length-3];
    let kartaa4 = player1Cards[player1Cards.length-1];
    let kartaa5 = player1Cards[player1Cards.length-2]; 
    let kartaa6 = player1Cards[player1Cards.length-3];   
    player2Cards.pop();
    player2Cards.pop();
    player2Cards.pop();
    player1Cards.pop();
    player1Cards.pop();
    player1Cards.pop();
    for(let i=player2Cards.length+5; i>0; i--) {
        [player2Cards[i], player2Cards[i-6]] = [player2Cards[i-6], player2Cards[i]];
    }
    player2Cards[0] = kartaa1;
    player2Cards[1] = kartaa2;
    player2Cards[2] = kartaa3;
    player2Cards[3] = kartaa4;
    player2Cards[4] = kartaa5;
    player2Cards[5] = kartaa6;
    kartaa1.style.marginTop = 0 + "px";
    kartaa2.style.marginTop = 0 + "px";
    kartaa3.style.marginTop = 0 + "px";
    kartaa4.style.marginTop = 0 + "px";
    kartaa5.style.marginTop = 0 + "px";
    kartaa6.style.marginTop = 0 + "px";
    kartaa1.setAttribute("src",  blackCards);
    kartaa2.setAttribute("src",  blackCards);
    kartaa3.setAttribute("src",  blackCards);
    kartaa4.setAttribute("src",  blackCards);
    kartaa5.setAttribute("src",  blackCards);
    kartaa6.setAttribute("src",  blackCards);
    if(kartaa1.classList.contains("fightCard")) kartaa1.classList.remove("fightCard");
    else kartaa1.classList.remove("fightCardV2");
    if(kartaa2.classList.contains("fightCard1")) kartaa2.classList.remove("fightCard1");
    else kartaa2.classList.remove("fightCardV21");
    if(kartaa3.classList.contains("fightCard")) kartaa3.classList.remove("fightCard");
    else kartaa3.classList.remove("fightCardV2");
    if(kartaa4.classList.contains("fightCard1")) kartaa4.classList.remove("fightCard1");
    else kartaa4.classList.remove("fightCardV21");
    if(kartaa5.classList.contains("fightCard")) kartaa5.classList.remove("fightCard");
    else kartaa5.classList.remove("fightCardV2");
    if(kartaa6.classList.contains("fightCard1")) kartaa6.classList.remove("fightCard1");
    else kartaa6.classList.remove("fightCardV21");
    kartaa1.classList.add("horizTranslate1");
    kartaa1.classList.add("hhh");
    kartaa2.classList.add("horizTranslate1");
    kartaa2.classList.add("hhh");
    kartaa3.classList.add("horizTranslate1");
    kartaa3.classList.add("hhh");
    kartaa4.classList.add("hhh1");
    kartaa5.classList.add("hhh1");
    kartaa6.classList.add("hhh1");
    console.log(player2Cards); 
}

function wygranaBitwaP2() {
    x2 = 1;
    x1 = 1;
    let kartaa1 = player2Cards[player1Cards.length-1];
    let kartaa2 = player2Cards[player1Cards.length-2]; 
    let kartaa3 = player2Cards[player1Cards.length-3];
    let kartaa4 = player1Cards[player2Cards.length-1];
    let kartaa5 = player1Cards[player2Cards.length-2]; 
    let kartaa6 = player1Cards[player2Cards.length-3];
    player2Cards.pop();
    player2Cards.pop();
    player2Cards.pop();
    player1Cards.pop();
    player1Cards.pop();
    player1Cards.pop();
    for(let i=player1Cards.length+5; i>0; i--) {
        [player1Cards[i], player1Cards[i-6]] = [player1Cards[i-6], player1Cards[i]];
    }
    player1Cards[0] = kartaa1;
    player1Cards[1] = kartaa2;
    player1Cards[2] = kartaa3;
    player1Cards[3] = kartaa4;
    player1Cards[4] = kartaa5;
    player1Cards[5] = kartaa6;
    kartaa1.style.marginTop = 0 + "px";
    kartaa2.style.marginTop = 0 + "px";
    kartaa3.style.marginTop = 0 + "px";
    kartaa4.style.marginTop = 0 + "px";
    kartaa5.style.marginTop = 0 + "px";
    kartaa6.style.marginTop = 0 + "px";
    kartaa1.setAttribute("src",  blackCards);
    kartaa2.setAttribute("src",  blackCards);
    kartaa3.setAttribute("src",  blackCards);
    kartaa4.setAttribute("src",  blackCards);
    kartaa5.setAttribute("src",  blackCards);
    kartaa6.setAttribute("src",  blackCards);
    if(kartaa1.classList.contains("fightCard")) kartaa1.classList.remove("fightCard");
    else kartaa1.classList.remove("fightCardV2");
    if(kartaa2.classList.contains("fightCard1")) kartaa2.classList.remove("fightCard1");
    else kartaa2.classList.remove("fightCardV21");
    if(kartaa3.classList.contains("fightCard")) kartaa3.classList.remove("fightCard");
    else kartaa3.classList.remove("fightCardV2");
    if(kartaa4.classList.contains("fightCard1")) kartaa4.classList.remove("fightCard1");
    else kartaa4.classList.remove("fightCardV21");
    if(kartaa5.classList.contains("fightCard")) kartaa5.classList.remove("fightCard");
    else kartaa5.classList.remove("fightCardV2");
    if(kartaa6.classList.contains("fightCard1")) kartaa6.classList.remove("fightCard1");
    else kartaa6.classList.remove("fightCardV21");
    kartaa1.classList.add("horizTranslate1");
    kartaa1.classList.add("hhhV2");
    kartaa2.classList.add("horizTranslate1");
    kartaa2.classList.add("hhhV2");
    kartaa3.classList.add("horizTranslate1");
    kartaa3.classList.add("hhhV2");
    kartaa4.classList.add("hhhV21");
    kartaa5.classList.add("hhhV21");
    kartaa6.classList.add("hhhV21");
    console.log(player1Cards);
}

function walcz() {
    if(ileKartP1==3 && ileKartP2==3) { czyWojna = false; ileKartP1=1; ileKartP2=1 }
    let p1 = player2Cards[player2Cards.length-x1];
    let p2 = player1Cards[player1Cards.length-x2];
    if(((p2.classList.contains("fightCard1") && p1.classList.contains("fightCard")) || (p2.classList.contains("fightCardV21") && p1.classList.contains("fightCardV2"))) && czyWojna==false) {
        let jakaKartaP1, jakaKartaP2;
        for(let i=0; i<poczatek.length; i++) {
            if(p1.name==poczatek[i]) jakaKartaP1 = i;
            if(p2.name==poczatek[i]) jakaKartaP2 = i;
        }
        if(((jakaKartaP1<13 && jakaKartaP2<13) && jakaKartaP1>jakaKartaP2) || ((jakaKartaP1>=13 && jakaKartaP2<=13) && jakaKartaP1-13>jakaKartaP2)) {
            wygranaP1(p1, p2);
        } else if(((jakaKartaP2<=13 && jakaKartaP1<=13) && jakaKartaP2>jakaKartaP1) || ((jakaKartaP2>=13 && jakaKartaP1<=13) && jakaKartaP2-13>jakaKartaP1)) {
            wygranaP2(p1, p2);
        } else if(((jakaKartaP1>=13 && jakaKartaP2>=13) && jakaKartaP1>jakaKartaP2) || ((jakaKartaP2>=13 && jakaKartaP1<=13) && jakaKartaP2-13<jakaKartaP1-13)) {
            wygranaP1(p1, p2);
        } else if(((jakaKartaP2>=13 && jakaKartaP1>=13) && jakaKartaP2>jakaKartaP1-13)) {
            wygranaP2(p1, p2);
        } else if(jakaKartaP1>=13 && jakaKartaP1-13<jakaKartaP2) {
            wygranaP2(p1, p2);
        } else if(jakaKartaP2>=13 && jakaKartaP1>jakaKartaP2-13) {
            wygranaP1(p1, p2);
        } else czyWojna = true;
    }
}