const lettersCZ = [
  { title: "Dopis 1", file: "pdf/dopis1.pdf" },
  { title: "Dopis 2", file: "pdf/dopis2.pdf" },
  { title: "Dopis 3", file: "pdf/dopis3.pdf" },
  { title: "Dopis 4", file: "pdf/dopis4.pdf" },
  { title: "Dopis 5", file: "pdf/dopis5.pdf" },
  { title: "Dopis 6", file: "pdf/dopis6.pdf" },
  { title: "Nedokončený dopis", file: "pdf/dopis7.pdf" },
  { title: "Odpověď Larysy", file: "pdf/dopis8.pdf" }
];

const lettersEN = [
  { title: "Letter 1", file: "pdf/dopis1.pdf" },
  { title: "Letter 2", file: "pdf/dopis2.pdf" },
  { title: "Letter 3", file: "pdf/dopis3.pdf" },
  { title: "Letter 4", file: "pdf/dopis4.pdf" },
  { title: "Letter 5", file: "pdf/dopis5.pdf" },
  { title: "Letter 6", file: "pdf/dopis6.pdf" },
  { title: "Unfinished Letter", file: "pdf/dopis7.pdf" },
  { title: "Larysa's Response", file: "pdf/dopis8.pdf" }
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
      <embed src="${letter.file}" type="application/pdf">
    `;
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
