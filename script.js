const usernameCorretto = "areeba";
const passwordCorretta = "TVB";

function verificaLogin() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === usernameCorretto && password === passwordCorretta) {
    document.getElementById("login-box").style.display = "none";
    document.getElementById("lettera-box").style.display = "block";
    scriviLettera();
  } else {
    document.getElementById("errore").style.display = "block";
  }
}

const testo =
  "Mia amata Ari, nemmeno l'intero mare basterebbe a placare la sete che ho di te. Sei la mia acqua, il mio respiro, il desiderio che non conosce fine. Più ti amo, più ti voglio... 💖";
const dataMiManchi = "15/02/2025 18:50";
const testoMiManchi =
  "Mi manchi come il sonno a uno studente sotto esami, come il sole nei giorni di cielo grigio, come un bagno caldo nel mare d'inverno... 💖";
let i = 0;
let j = 0;
let k = 0;

function scriviLettera() {
  if (i < testo.length) {
    document.getElementById("testoLettera").innerHTML += testo.charAt(i);
    i++;
    setTimeout(scriviLettera, 50);
  } else {
    document.getElementById("messaggioSegreto").style.display = "block";
  }
}

function scriviLetteraMiManchi() {
  if (k < dataMiManchi.length) {
    document.getElementById("dataMiManchi").innerHTML += dataMiManchi.charAt(k);
    k++;
    setTimeout(scriviLetteraMiManchi, 50);
  } else if (j < testoMiManchi.length) {
    document.getElementById("testoMiManchi").innerHTML +=
      testoMiManchi.charAt(j);
    j++;
    setTimeout(scriviLetteraMiManchi, 50);
  }
}

function mostraMessaggio() {
  document.getElementById("messaggioFinaleFiore").style.display = "block";
  document.getElementById("messaggioFinale").style.display = "block";
  document.getElementById("testoMiManchi").style.display = "block";
  document.getElementById("dataMiManchi").style.display = "block";
  scriviLetteraMiManchi();
}

function mostraMessaggioMiManchi() {
  scriviLetteraMiManchi();
}
