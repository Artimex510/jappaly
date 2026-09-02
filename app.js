// CHIAVE UNSPLASH (Incolla la tua chiave tra le virgolette)
const UNSPLASH_ACCESS_KEY = '0YAUROXF7o-sYd5Xv6lNyeS0oiK9632OU_VAyYmk7bo';

// Database Vocabolario (Esempio strutturato pronto per l'espansione)
const vocabularyDatabase = [
  { id: 1, keyword: "water", ja_kanji: "水", ja_kana: "みず", ja_romaji: "mizu", it: "Acqua", example_ja: "水を飲みます (Mizu wo nomimasu)", example_it: "Bevo l'acqua" },
  { id: 2, keyword: "dog", ja_kanji: "犬", ja_kana: "いぬ", ja_romaji: "inu", it: "Cane", example_ja: "犬が好きです (Inu ga suki desu)", example_it: "Mi piacciono i cani" },
  { id: 3, keyword: "car", ja_kanji: "車", ja_kana: "くるま", ja_romaji: "kuruma", it: "Macchina", example_ja: "新しい車です (Atarashii kuruma desu)", example_it: "È un'auto nuova" },
  { id: 4, keyword: "cat", ja_kanji: "猫", ja_kana: "ねこ", ja_romaji: "neko", it: "Gatto", example_ja: "猫がいます (Neko ga imasu)", example_it: "C'è un gatto" },
  { id: 5, keyword: "book", ja_kanji: "本", ja_kana: "ほん", ja_romaji: "hon", it: "Libro", example_ja: "本を読みます (Hon wo yomimasu)", example_it: "Lego un libro" }
];

const kanaList = [
  { char: "あ", romaji: "a" }, { char: "い", romaji: "i" }, { char: "う", romaji: "u" }, { char: "え", romaji: "e" }, { char: "お", romaji: "o" },
  { char: "か", romaji: "ka" }, { char: "き", romaji: "ki" }, { char: "く", romaji: "ku" }, { char: "け", romaji: "ke" }, { char: "こ", romaji: "ko" }
];

// Stato Applicazione
let currentProfile = localStorage.getItem('jappaly_profile') || null;
let userProgress = {};
let currentIndex = 0;

window.onload = () => {
  if (currentProfile) {
    loadProgress();
    showAppScreen();
  }
};

function selectProfile(lang) {
  currentProfile = lang;
  localStorage.setItem('jappaly_profile', lang);
  loadProgress();
  showAppScreen();
}

function resetProfile() {
  localStorage.removeItem('jappaly_profile');
  currentProfile = null;
  document.getElementById('app-screen').classList.remove('active');
  document.getElementById('onboarding-screen').classList.add('active');
}

function loadProgress() {
  const saved = localStorage.getItem(`jappaly_progress_${currentProfile}`);
  userProgress = saved ? JSON.parse(saved) : {};
}

function saveProgress() {
  localStorage.setItem(`jappaly_progress_${currentProfile}`, JSON.stringify(userProgress));
  updateKoiTracker();
}

function showAppScreen() {
  document.getElementById('onboarding-screen').classList.remove('active');
  document.getElementById('app-screen').classList.add('active');

  const badge = document.getElementById('user-badge');
  if (currentProfile === 'it') {
    badge.innerText = "🇮🇹 Studia Giapponese";
  } else {
    badge.innerText = "🇯🇵 Studia Italiano";
  }

  renderKanaGrid();
  updateKoiTracker();
  loadCurrentCard();
}

// Visual Tracker: Avanzamento della Carpa Koi
function updateKoiTracker() {
  const total = vocabularyDatabase.length; // O 2000 quando caricheremo tutto il file
  let masteredCount = 0;

  Object.values(userProgress).forEach(score => {
    if (score >= 3) masteredCount++;
  });

  const percent = Math.min(Math.round((masteredCount / total) * 100), 100);
  document.getElementById('progress-text').innerText = `Parole memorizzate: ${masteredCount} / ${total} (${percent}%)`;
  document.getElementById('koi-fish').style.left = `${percent}%`;
}

// Caricamento Flashcard e chiamate API
async function loadCurrentCard() {
  const card = vocabularyDatabase[currentIndex];
  document.querySelector('.flashcard-container').classList.remove('is-flipped');

  // Testo Fronte e Retro dinamico
  if (currentProfile === 'it') {
    document.getElementById('card-front-word').innerText = card.it;
    document.getElementById('card-back-main').innerText = `${card.ja_kanji} (${card.ja_kana})`;
    document.getElementById('card-back-sub').innerText = `Romaji: ${card.ja_romaji}`;
    document.getElementById('card-example').innerText = card.example_ja;
  } else {
    document.getElementById('card-front-word').innerText = card.ja_kanji;
    document.getElementById('card-back-main').innerText = card.it;
    document.getElementById('card-back-sub').innerText = `Giapponese: ${card.ja_kana}`;
    document.getElementById('card-example').innerText = card.example_it;
  }

  // Immagine Unsplash
  const imgElement = document.getElementById('card-image');
  if (UNSPLASH_ACCESS_KEY && UNSPLASH_ACCESS_KEY !== 'INSERISCI_QUI_LA_TUA_CHIAVE_UNSPLASH') {
    try {
      const res = await fetch(`https://api.unsplash.com/photos/random?query=${card.keyword}&client_id=${UNSPLASH_ACCESS_KEY}`);
      const data = await res.json();
      imgElement.src = data.urls.small;
    } catch (e) {
      imgElement.src = `https://picsum.photos/400/300?random=${card.id}`;
    }
  } else {
    // Fallback automatico senza API key
    imgElement.src = `https://picsum.photos/400/300?random=${card.id}`;
  }
}

function flipCard() {
  document.querySelector('.flashcard-container').classList.toggle('is-flipped');
}

// Pronuncia Vocale Nausea/Nativa (Web Speech API)
function playAudio() {
  const card = vocabularyDatabase[currentIndex];
  const utterance = new SpeechSynthesisUtterance();

  if (currentProfile === 'it') {
    // Legge in Giapponese
    utterance.text = card.ja_kana;
    utterance.lang = 'ja-JP';
  } else {
    // Legge in Italiano
    utterance.text = card.it;
    utterance.lang = 'it-IT';
  }

  window.speechSynthesis.speak(utterance);
}

// Algoritmo Risposta
function submitAnswer(isEasy) {
  const card = vocabularyDatabase[currentIndex];
  const currentScore = userProgress[card.id] || 0;

  if (isEasy) {
    userProgress[card.id] = currentScore + 1;
  } else {
    userProgress[card.id] = Math.max(0, currentScore - 1);
  }

  saveProgress();
  currentIndex = (currentIndex + 1) % vocabularyDatabase.length;
  loadCurrentCard();
}

// Tab Switch
function switchTab(tabName) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

  document.getElementById(`tab-${tabName}`).classList.add('active');
  document.getElementById(`section-${tabName}`).classList.add('active');
}

// Griglia Kana
function renderKanaGrid() {
  const grid = document.getElementById('kana-grid');
  grid.innerHTML = '';
  kanaList.forEach(k => {
    const card = document.createElement('div');
    card.className = 'kana-card';
    card.innerHTML = `<h2>${k.char}</h2><small>${k.romaji}</small>`;
    card.onclick = () => {
      const u = new SpeechSynthesisUtterance(k.char);
      u.lang = 'ja-JP';
      window.speechSynthesis.speak(u);
    };
    grid.appendChild(card);
  });
}