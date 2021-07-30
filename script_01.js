/***** Funktionen 01 *****/

// 1. Kapselung von Codeblöcken

// // Funktionsrumpf (body) | callee
// function test()
// {
//     console.log("Hallo Kevin!");
// }

// // Funktionsaufruf (call)
// test();

/**** Funktionen 02a ****/
// 2a. Parametrisierung + Datenübergabe von INNEN

function ausgabeNamen() 
{
    const firstName = "Kevin"; // Variable --> lokal scope (Geltungsbereich)
    console.log("Hallo " + firstName + "!");
  
}

ausgabeNamen();
console.log(firstName); // Fehler --> lokal!!!!