const usernameCorretto = "areeba";
// const passwordCorretta = "TVB";

function verificaLogin() {
  const username = document.getElementById("username").value;
  // const password = document.getElementById("password").value;

  if (username === usernameCorretto) {
    document.getElementById("login-box").style.display = "none";
    document.getElementById("lettera-box").style.display = "block";
    scriviLettera();
  } else {
    document.getElementById("errore").style.display = "block";
  }
}

const k_velocita_testo = 1;

const testo =
  "Mia amata Ari, nemmeno l'intero mare basterebbe a placare la sete che ho di te. Sei la mia acqua, il mio respiro, il desiderio che non conosce fine. Più ti amo, più ti voglio... 💖";
const dataMiManchi = "15/02/2025 18:50";
const testoMiManchi =
  "Mi manchi come il sonno a uno studente sotto esami, come il sole nei giorni di cielo grigio, come un bagno caldo nel mare d'inverno... 💖";
const dataMiManchi_2 = "22/02/2025 16:40";
const testoMiManchi_2 =
  "Ho il dubbio che leggerai mai questo messagggio, ma se lo dovessi mai fare sappi che ti penso tutto il tempo";

let i = 0;
let j = 0;
let k = 0;
let l = 0;
let m = 0;

function scriviLettera() {
  if (i < testo.length) {
    document.getElementById("testoLettera").innerHTML += testo.charAt(i);
    i++;
    setTimeout(scriviLettera, 50 * k_velocita_testo);
  } else {
    document.getElementById("messaggioSegreto").style.display = "block";
  }
}

function scriviLetteraMiManchi() {
  if (k < dataMiManchi.length) {
    document.getElementById("dataMiManchi").innerHTML += dataMiManchi.charAt(k);
    k++;
    setTimeout(scriviLetteraMiManchi, 50 * k_velocita_testo);
  } else if (j < testoMiManchi.length) {
    document.getElementById("testoMiManchi").innerHTML +=
      testoMiManchi.charAt(j);
    j++;
    setTimeout(scriviLetteraMiManchi, 50 * k_velocita_testo);
  } else if (l < dataMiManchi_2.length) {
    document.getElementById("dataMiManchi_2").innerHTML +=
      dataMiManchi_2.charAt(l);
    l++;
    setTimeout(scriviLetteraMiManchi, 50 * k_velocita_testo);
  } else if (m < testoMiManchi_2.length) {
    document.getElementById("testoMiManchi_2").innerHTML +=
      testoMiManchi_2.charAt(m);
    m++;
    setTimeout(scriviLetteraMiManchi, 50 * k_velocita_testo);
  } else {
    document.getElementById("heartChart").style.display = "block";
  }
}

function mostraMessaggio() {
  document.getElementById("messaggioFinaleFiore").style.display = "block";
  document.getElementById("messaggioFinale").style.display = "block";
  document.getElementById("testoMiManchi").style.display = "block";
  document.getElementById("dataMiManchi").style.display = "block";
  document.getElementById("dataMiManchi_2").style.display = "block";
  document.getElementById("testoMiManchi_2").style.display = "block";
  scriviLetteraMiManchi();
  // drawHeart();
}

function mostraMessaggioMiManchi() {
  scriviLetteraMiManchi();
}

const text_array = [
  {
    data: "15/02/2025 18:50",
    text: "Mi manchi come il sonno a uno studente sotto esami, come il sole nei giorni di cielo grigio, come un bagno caldo nel mare d'inverno... 💖",
  },
  {
    data: "22/02/2025 16:40",
    text: "Ho il dubbio che leggerai mai questo messagggio, ma se lo dovessi mai fare sappi che ti penso tutto il tempo",
  },
];

function mostraMessaggi() {
  text_array.forEach((element, index) => {
    setTimeout(() => {
      document.getElementById("dataMiManchi").innerHTML = element.data;
      document.getElementById("testoMiManchi").innerHTML = element.text;
    }, 5000 * index);
  });
}
