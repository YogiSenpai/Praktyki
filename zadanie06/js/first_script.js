/*
    Wstawiamy skrypt
    na naszą stronę
    cz.II
*/

console.log("To mój drugi skrypt");

//// Typy danych

var number = 10;
var string = "Ala ma kota.";
var array = [];
var object = {};
var undef;
var nul = null;

// wypisanie typów zmiennych

console.log( typeof number );
console.log( typeof string );
if( Array.isArray(array) )
    console.log("array");;
console.log( typeof object );
console.log( typeof undef );
if( nul==null )
    console.log("null");

// proste działania

console.log(number + string);
console.log(string - number);
console.log(number * string);
console.log(string / number);
console.log(number + undef);

//

let width = "20px";
console.log(parseInt(width) + 30);

//

if(age)
    console.log("Istnieje zmienna age");
else{
    console.log("Nie ma takiej zmiennej");
    var age;
}
console.log(age);

//// ZMIENNE

var myVar1 = 10;
var myVar2 = 20;
console.log(myVar1 + myVar2);
console.log(myVar1 - myVar2);
console.log(myVar1 * myVar2);
console.log(myVar1 / myVar2);
console.log(typeof myVar1);
console.log(typeof myVar2);

//

var CVAR1 = 4;
var CVAR2 = 5;
CVAR1 = 7;
CVAR2 = 8;

//

console.log(text1);
var text1 = "przykładowy tekst";

//

const CONST1 = 3;
const CONST2 = 9;
//CONST1 = 1;
//CONST2 = 2;

// nie można zmieniać stałych const

//

//console.log(text2);
let text2 = "przykładowy tekst";

// nie można operować na nieistniejącej zmiennej let

//// Operatory

let var1 = 20;
let var2 = 33;
let var3 = "20";
var1++;
var2+=1;
console.log(var1+var2);

//

let a = 20;
let b = "20";
if(a===b)
    console.log("Te zmienne są identyczne.");
else
    console.log("Te zmienne się różnią typem lub wartością.");

//

let text = "To miała być ";
text+= "jedna linijka";
text+= " tekstu.";
console.log(text);

//// Math()

let los1 = Math.random();
let los2 = Math.random();
console.log("Większą z liczb: ", los1, " i ", los2, " jest ", Math.max(los1,los2));

//

console.log("Przybliżeniem pierwszej liczby w dół jest: ", Math.floor(los1));
console.log("Przybliżeniem drugiej liczby w dół jest: ", Math.floor(los2));
console.log("Przybliżeniem pierwszej liczby w górę jest: ", Math.ceil(los1));
console.log("Przybliżeniem drugiej liczby w górę jest: ", Math.ceil(los2));

//// String - teksty

let text3 = "Jakiś tekst";
console.log(text3, ", długość tego tekstu to: ", text3.length);

//

const text4 = "Bardzo lubię jeść marchewkę";
let words = text4.split(" ");
console.log(words.length);

//

let name = "marcin";
console.log("Przed: ", name);
name = name[0].toUpperCase() + name.slice(1);
console.log("Po: ", name);

//

const email = "loremimpsum@gmail.com";
if(email.indexOf('@')>-1)
    console.log("Ten e-mail zawiera @.");
else
    console.log("Ten e-mail nie zawiera @.");

//

const text5 = "Uczę się stringów w C++";
text6 = text5.slice(0,text5.indexOf("C")) + "JavaScript";
console.log(text6);

//

let url = "http://mojastrona.pl";
url += "?" + text6;
url = encodeURI(url);
console.log(url);

//

const text7 = "ALA ma kota";
console.log(text7.toLowerCase());
console.log(text7.toUpperCase());

let text8 = "";
for (let i=0; i<text7.length; i++) {
    if (i%2==0)
        text8 += text7[i].toUpperCase();
    else
        text8 += text7[i].toLowerCase();
}
console.log(text8);

text8 = text7.replace("ALA", "OLA");
console.log(text8);

text8 = text7[0].toUpperCase();
text8 += text7.slice(1).toLowerCase();
text9 = text8.substr(text8.indexOf("m")-1,3) + " " + text8.substr(0,2) + "ę";
console.log(text9);

////  Instrukcje warunkowe

a = 2;
b = 3;
let c = 4;

if(a>b && a>c)
    console.log("Największa jest liczba a.");
if(b>a && b>c)
    console.log("Największa jest liczba b.");
if(c>a && c>b)
    console.log("Największa jest liczba c.");

//

//podpinamy się pod wysyłanie formularza
document.querySelector('#myForm').addEventListener('submit', function(e) {
e.preventDefault();

//pobieramy wartość pola #formAge
const age = document.querySelector('#formAge').value;

//w zmiennej age jest tekst wpisany w formularz.
//zamień go na liczbę i sprawdź czy po zamianie masz liczbę czy nie liczbę
//jeżeli liczba jest większa lub równa 18, wypisz w konsoli
//"wszystko ok", w przeciwnym razie wypisz "niestety, dostęp zablokowany"

let ageInt = parseInt(age);
if(typeof(ageInt)=='number'){
    if(ageInt>=18)
        console.log("Wszystko ok.");
    else
        console.log("Niestety, dostęp zablokowany.");
}
})

//// Pętle

let str = "";
for(let i=0;i<6;i++)
    str+="*";
console.log(str);

//

str = "";
for(let i=0;i<10;i++)
    str += i+1;
console.log(str);

//

str = "";
for(let i=0;i<4;i++){
    for(let j=0;j<6;j++)
        str+="*";
    str+="\n";
}
console.log(str);

//

str = "";
let text10 = "To jest jakiś tekst";
let dlugosc = text10.length;
for(let i=0;i<3;i++){
    if(i==0){
        for(let j=0;j<dlugosc+6;j++){
            if(j==0)
                str+="╔";
            else if(j===dlugosc+5)
                str+="╗";
            else
                str+="═";
        }
    }
    if(i==1){
        for(let j=0;j<dlugosc+6;j++){
            if(j==0 || j==dlugosc+5)
                str+="║";
            else if(j>0 && j<3 || j<dlugosc+5 && j>dlugosc+2)
                str+=" ";
            else
                str+=text10[j-3];
        }
    }
    if(i==2){
        for(let j=0;j<dlugosc+6;j++){
            if(j==0)
                str+="╚";
            else if(j==dlugosc+5)
                str+="╝";
            else
                str+="═";
        }
    }
    str+="\n"
}
console.log(str);

//// Funkcje

function dlugoscTekstu(text){
    console.log("Liczba liter: " + text.length);
}
dlugoscTekstu(text10);

//

let tablica = [1,2,3,4];
function sumaTablicy(tab){
    let suma = 0;
    for(let i=0;i<tab.length;i++)
        suma += tab[i];
    return suma;
}
console.log(sumaTablicy(tablica));

//

function zmiksowaneLitery(text){
    let textMix = "";
    for (let i=0; i<text.length; i++) {
        if (i%2==0)
            textMix += text[i].toUpperCase();
        else
            textMix += text[i].toLowerCase();
    }
    return textMix;
}

console.log(zmiksowaneLitery(text10));

//

function iloczyn(liczba1, liczba2){
    if(typeof liczba1 == "number" && typeof liczba2 == "number"){
        let iloczyn = liczba1 * liczba2;
        return iloczyn;
    }else
        return false
}

//

function coRobi(imie,miesiac){
    let text = "";
    miesiac = miesiac.toLowerCase();
    switch(miesiac){
        case "grudzień": case "styczeń": case "luty":
        text = imie + " jeździ na sankach";
        break;
        case "marzec": case "kwiecień": case "maj":
        text = imie + " chodzi po kałużach";
        break;
        case "czerwiec": case "lipiec": case "sierpień":
        text = imie + " się opala";
        break;
        case "wrzesień": case "październik": case "listopad":
        text = imie + " zbiera liście";
        break;
        default:
        text = imie + " uczy się JavaScript";
    }
    return text;
}

//

console.log(coRobi("Kacper","Sierpień"));

//

const str1 = "Ania|Marcin|Bartek|Piotr|Kuba|Beata|Agnieszka";

function sortowanieSpisu(text,znak){
    let posortowane = "";
    spis = text.split(znak);
    spis.sort();
    posortowane = spis.join(znak);
    return posortowane;
}

console.log(sortowanieSpisu(str1,"|"));

//

function sortLiczb(a, b) {
    return a - b;
}

let tab = [];
for(let i=0;i<10;i++)
    tab[i] = Math.round(Math.random()*100);
function getMiniFromTab(tab){
    tab.sort(sortLiczb);
    let minimum = tab[0];
    return minimum;
}
console.log(getMiniFromTab(tab));

//

let imiona = ["Ania" , "Marcin" , "Bartek" , "Piotr"];

function duzeLitery(imiona){
    for(let i=0;i<imiona.length;i++)
        imiona[i] = imiona[i].toUpperCase();
    return imiona;
}
console.log(duzeLitery(imiona));

function zamianaLiter(imiona){
    for(let i=0;i<imiona.length;i++)
        imiona[i] = zmiksowaneLitery(imiona[i]);
    return imiona;
}
console.log(zamianaLiter(imiona));

//

let n;

function multiplikacja(text,n){
    if(typeof text !== "string")
        text = "";
    if(typeof n === "undefined")
        n = 2;

    let wynik = "";

    for(let i=0;i<n;i++)
        wynik += text;

    return wynik;
}

console.log(multiplikacja("kotek ",5));

//

function counter() {
    let a = 0;
    return function() {
        return a++;
    }
}

const kolejne = counter();
kolejne();
kolejne();
console.log(kolejne());

//

function myAbs(nr){
    if(typeof nr !== "number")
        return NaN;

    if(nr<0)
        nr *= (-1);
        return nr;
}

function myPow(nr,pow){

    if(pow === 0){
        nr = 1;
        return nr;
    }

    for(let i=0;i<pow-1;i++)
        nr*=nr;

    if(pow < 0){
        let wynik = nr;
        pow = myAbs(pow);
        for(let i=1;i<pow;i++)
            wynik*=nr;
        nr=1/wynik;
    }

    if(pow < 1 && pow > 0){
        let komunikat = "Nie podnoszę do potęg ułamkowych.";
        return komunikat;
    }

    return nr;
}

function myMax(){
    if(!arguments.length)
        return -Infinity;

    let max = arguments[0];
    for(let i=0;i<arguments.length;i++)
        if(max<arguments[i])
            max = arguments[i];
    return max;
}

console.log(myAbs(-3));
console.log(myPow(2,-3));
console.log(myMax(1,2,3,4));

//// Tablice

let tab1 = ["Bum bum, ","bumerang, ","wraca bumerang!", "Zastanów się ", "czym rzucisz..."];
console.log(tab1);
console.log(tab1.length);

//

for(let i=0;i<tab1.length;i++){
    console.log(tab1[i] + " - długość: " + tab1[i].length);
}

for (const z of tab1) {
    console.log(z + " - długość: " + z.length);
}

tab1.forEach(z => {
    console.log(z + " - długość: " + z.length);
});

//

tab1.push(" - Ewa Farna");
tab1.unshift("Utwór: ");
console.log(tab1.length);

//

let tab2 = [];
for(let i=0;i<10;i++)
    tab2[i] = Math.floor(Math.random() * 10) + 1;

tab2.sort(sortLiczb);

console.log("Największa liczba tablicy: " + tab2[9]);
console.log("Najmniejsza liczba tablicy: " + tab2[0]);

// zadanie dla prawdziwych webmasterów


//zmiennych colors i tab w tym zadaniu nie zmieniaj
const colors = ['#ffffff', '#F8AA00', '#7E1C03', '#DB0F3B', '#0026FF'];
const tab3 = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,3,3,3,3,3,0,0,0,0,0],[0,0,0,3,3,3,3,3,3,3,3,0,0,0],[0,0,0,2,2,2,1,1,2,1,0,0,0,0],[0,0,2,1,2,1,1,1,2,1,1,1,0,0],[0,0,2,1,2,2,1,1,1,2,1,1,1,0],[0,0,2,2,1,1,1,1,2,2,2,2,0,0],[0,0,0,0,1,1,1,1,1,1,0,0,0,0],[0,0,0,3,3,4,3,3,3,0,0,0,0,0],[0,0,3,3,3,4,3,3,4,3,3,3,0,0],[0,3,3,3,3,4,4,4,4,3,3,3,3,0],[0,1,1,3,4,1,4,4,1,4,3,1,1,0],[0,1,1,1,4,4,4,4,4,4,1,1,1,0],[0,1,1,4,4,4,4,4,4,4,4,1,1,0],[0,0,0,4,4,4,0,0,4,4,4,0,0,0],[0,0,2,2,2,0,0,0,0,2,2,2,0,0],[0,2,2,2,2,0,0,0,0,2,2,2,2,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0],
];

/*
-----------------------------------------
ZADANIE JEST TAKIE:
-----------------------------------------
1) zrob petle po 2 wymiarowej talicy "tab3"
2) Kazdą pobraną wartość z tablicy dodawaj do tekstu za pomocą instrukcji:
   tekst += '<div style="background:' + pobranyKolor + '"></div>';
   gdzie pobranyKolor pobieraj z tablicy colors. Indeks koloru pobierzesz z danego miejsca w tablicy tab3 np:
   tab3[0][0] = 0; czyli pobranyKolor = #ffffff
3) Po zakonczeniu kazdej pętli po tablicy 2 wymiaru, do tekstu dodawaj "<br>"
4) W rezultacie powinienes otrzymac rysunek
*/

let tekst = '';

for(let i=0;i<tab3.length;i++){
    for(let j=0;j<tab3[i].length;j++){
        tekst += '<div style="background:' + colors[tab3[i][j]] + '"></div>';
    }
    tekst +="<br>";
}

//tutaj wstawiamy do div wygenerowany html - nie ruszaj poniższej linijki
document.querySelector('.canvas').innerHTML = tekst;

//// Tablice iteracyjne

const tabUsers = [
    {name : "Marcin", age: 14},
    {name : "Piotr", age: 18},
    {name : "Agnieszka", age: 13},
    {name : "Weronika", age: 20}
]

console.log(tabUsers.filter(function(el){
    return el.age >=18;
}));

// kolejne zadanie dla prawdziwych webmasterów

//W pliku cities.js znajduje się tablica cities z miastami - każde miasto to obiekt.

//Naszym zadaniem jest:
//-----------------------
//1. wypisz ile miast jest w Polsce
//2. wypisz ile jest ludzi w tych miastach
//3. Wypisz pierwsze miasto, w którym jest ponad 10000 ludzi
//4. wypisz miasta, w których ludzi jest ponad średnią
//5. wypisz nazwy wszystkich miast, w których jest ponad 10000 ludzi
//6. Wypisz czy więcej jest miast z > 10000 ludzi czy mniejszych


console.log("Liczba miast w Polsce: " + cities.length);


let ludnosc = 0;

cities.forEach(el => {
    console.log("W mieście " + el.name + " jest " + el.people + " ludzi.");
    ludnosc += el.people;
});


console.log("Pierwszym alfabetycznie miastem, w którym jest ponad 10000 ludzi jest: " + cities.find(function(el){
    return el.people > 10000;
}).name);


let srednia = ludnosc / cities.length;

let ponadPrzecietni = cities.filter(el => {
    return el.people > srednia;
});

console.log("Miasta, w których jest ponad przeciętna liczba ludności: ");

ponadPrzecietni.forEach(el => {
    console.log(el.name);
});


console.log("Miasta, w których jest ponad 10000 ludzi: ");

let ponad10k = cities.filter(el => {
    return el.people > 10000;
});

let licznikWiekszy = 0;

ponad10k.forEach(el => {
    licznikWiekszy +=1;
    console.log(el.name);
});


let licznikMniejszy = 0;

let ponizej10k = cities.filter(el => {
    return el.people < 10000;
});

ponizej10k.forEach(el => {
    licznikMniejszy +=1;
});

if(licznikMniejszy > licznikWiekszy)
    console.log("Więcej jest miast, które mają mniej niż 10000 ludzi.");
else
    console.log("Więcej jest miast, które mają więcej niż 10000 ludzi.");