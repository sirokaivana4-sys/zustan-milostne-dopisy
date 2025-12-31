const lettersCZ = [
  { title: "Dopis 1", text: `Píšu ti v noci...` },
  { title: "Dopis 2", text: `Laryso, od té noci mám pocit...` },
  { title: "Dopis 3", text: `Lásko, píšu to slovo poprvé...` },
  { title: "Dopis 4", text: `Laryso, mám pocit, že se ode mě pomalu vzdaluješ...` },
  { title: "Dopis 5", text: `Laryso, dnes jsem si uvědomil...` },
  { title: "Dopis 6", text: `Laryso, dnes se ve mně něco změnilo...` },
  { title: "Nedokončený dopis", text: `Laryso, je noc...` },
  { title: "Odpověď Larysy", text: `Laryso, je noc...` }
];

const lettersEN = [
  { title: "Letter 1", text: `I write to you at night...` },
  { title: "Letter 2", text: `Larysa, since that night I feel the world slightly different...` },
  { title: "Letter 3", text: `Love, I write this word for the first time...` },
  { title: "Letter 4", text: `Larysa, I feel you slowly moving away from me...` },
  { title: "Letter 5", text: `Larysa, today I realized I no longer search for signs...` },
  { title: "Letter 6", text: `Larysa, something inside me has changed today...` },
  { title: "Unfinished Letter", text: `Larysa, it's night...` },
  { title: "Larysa's Response", text: `Larysa, it's night...` }
];

const lettersContainer = document.getElementById('letters');

function loadLetters(lang) {
  lettersContainer.innerHTML = "";
  const letters = lang === 'cz' ? lettersCZ : lettersEN;
  letters.forEach(letter => {
    const div = document.createElement('div');
    div.className = 'letter';
    div.innerHTML = `<h2>${letter.title}</h2><p>${letter.text}</p>`;
    lettersContainer.appendChild(div);
    setTimeout(() => div.classList.add('loaded'), 100);
  });
}

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
