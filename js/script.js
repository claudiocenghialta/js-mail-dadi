/*
---------CONSEGNA ESERCIZIO----------------
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato
*/


//creo l'array per l'elenco delle mail
var elencoMail = []

//creo l'elenco delle mail usando un ciclo for (da 1@gmail.com a 10@gmail.com)
for (var i = 1; i<=10;i++) {
    if (elencoMail.length == 0) {
        elencoMail=[i+'@gmail.com'];
    }
    else {elencoMail.push(i+'@gmail.com');
    }
}

//inizializzo variabile risultato = false e chiedo di inserire una mail all'utente
var risultato = false;
var email = prompt('inserisci la tua mail per accedere es. 5@gmail.com');

//ciclo for per verificare che la mail inserita sia presente nell'elenco delle mail generato
for (var i=0; i < elencoMail.length; i++) {
    if (email == elencoMail[i]) {
        risultato = true;
        i = elencoMail.length;
    }
}

//resituisco risultato su HTML
if (risultato==true) {
    document.getElementById('risultato').innerHTML="OK la tua mail "+email+" è valida";
    document.getElementById('risultato').style.backgroundColor="green";
} else {
    document.getElementById('risultato').innerHTML="KO la tua mail "+email+" non è valida";
    document.getElementById('risultato').style.backgroundColor="red";
}

// -------------------------aggiungo gioco dadi utente vs. pc-----------------
// Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

var dadoUtente = Math.floor(Math.random()*6)+1
var dadoComputer = Math.floor(Math.random()*6)+1
var vincitore;
if (dadoUtente == dadoComputer) {
    vincitore="Parità";
} else if (dadoUtente > dadoComputer) {
    vincitore="Hai vinto!";
} else {
    vincitore="Hai perso!";
}

document.getElementById('vincitore').innerHTML = vincitore;
document.getElementById('dadoUtente').innerHTML = dadoUtente;
document.getElementById('dadoComputer').innerHTML = dadoComputer;
