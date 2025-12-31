const lettersCZ = [
  { title: "Dopis 1", text: `Píšu ti v noci. V té době, kdy svět ztichne natolik, že už se nedá přehrávat nic, co není pravda. Sedím nad tímhle papírem a uvědomuju si, že to v sobě už nedokážu držet...` },
  { title: "Dopis 2", text: `Laryso, od té noci mám pocit, že je svět trochu jiný...` },
  { title: "Dopis 3", text: `Lásko, píšu to slovo poprvé...` },
  { title: "Dopis 4", text: `Laryso, mám pocit, že se ode mě pomalu vzdaluješ...` },
  { title: "Dopis 5", text: `Laryso, dnes jsem si uvědomil, že už nehledám žádná znamení...` },
  { title: "Dopis 6", text: `Laryso, dnes se ve mně něco změnilo...` },
  { title: "Nedokončený dopis", text: `Laryso, je noc. Svět ztichl jako někdo, kdo tuší, že se má stát něco důležitého...` },
  { title: "Odpověď Larysy", text: `Laryso, je noc. Svět ztichl jako někdo, kdo tuší, že se má stát něco důležitého...` }
];

const lettersEN = [
  { title: "Letter 1", text: `I write to you at night. At the time when the world quiets down enough that nothing untrue can play. I sit over this paper and realize I can't hold it in anymore...` },
  { title: "Letter 2", text: `Larysa, since that night I feel the world slightly different...` },
  { title: "Letter 3", text: `Love, I write this word for the first time...` },
  { title: "Letter 4", text: `Larysa, I feel you slowly moving away from me...` },
  { title: "Letter 5", text: `Larysa, today I realized I no longer search for signs...` },
  { title: "Letter 6", text: `Larysa, something inside me has changed today...` },
  { title: "Unfinished Letter", text: `Larysa, it's night. The world has quieted down as if sensing something important is about to happen...` },
  { title: "Larysa's Response", text: `Larysa, it's night. The world has quieted down as if sensing something important is about to happen...` }
];

const lettersContainer = document.getElementById('letters');

function loadLetters(lang) {
  lettersContainer.innerHTML = "";
  const letters = lang === 'cz' ? lettersCZ : lettersEN;

  letters.forEach(letter => {
    const div = document.createElement('div');
    div.className = 'letter';
    div.innerHTML = `
      <h2>${letter.title}</h2>
      <p>${letter.text}</p>
    `;
    lettersContainer.appendChild(div);
    setTimeout(() => div.classList.add('loaded'), 100);
  });
}

// výchozí načtení v češtině
loadLetters('cz');

document.getElementById('cz-btn').addEventListener('click', () => {
  document.getElementById('intro-cz').style.display = 'block';
  document.getElementById('intro-en').style.display = 'none';
  loadLetters('cz');
});

document.getElementById('en-btn').addEventListener('click', () => {
  document.getElementById('intro-cz').style.display = 'none';
  document.getElementById('intro-en').style.display = 'block';
  loadLetters('en');
});
