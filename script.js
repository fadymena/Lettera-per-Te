const usernameCorretto = "bimba-mia";
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

const k_velocita_testo = 0.8;

const testo = "Salgo sul primo treno per marte... 💖 Ti voglio bene";
  // "Mia bimba Marzietta, nemmeno l'intero mare basterebbe a placare la sete che ho di te. Sei la mia acqua, il mio respiro, il desiderio che non conosce fine. Più ti amo, più ti voglio... 💖";

const dataArray = [
  {
    '<div id="heartChart"></div><p class="dataMessaggio">26/02/2025 19:10<p>': `<p class="contenutoMessaggio">
      Ascolta questa canzone, è per te <a href="https://youtu.be/ofqn8t8iajI?si=DrOjum1hr6AD7mKT">Angela 🎸</a>
    </p>`,
  },
];

let i = 0;

function scriviLettera() {
  if (i < testo.length) {
    document.getElementById("testoLettera").innerHTML += testo.charAt(i);
    i++;
    setTimeout(scriviLettera, 50 * k_velocita_testo);
  } else {
    document.getElementById("messaggioSegreto").style.display = "block";
  }
}

const container = document.getElementById("output");
function mostraMessaggio() {
  document.getElementById("messaggioFinale").style.display = "block";
  container.style.display = "block";
  scriviLettera();

 

  dataArray.forEach((obj, index) => {
    setTimeout(() => {
      Object.entries(obj).forEach(([date, message]) => {
        const div = document.createElement("div");
        div.innerHTML = `${date} ${message}`;
        container.appendChild(div);
      });
    }, index * 500); // Ritardo di 1 secondo tra un messaggio e l'altro
  });
}
