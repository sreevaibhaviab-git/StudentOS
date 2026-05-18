javascript


const SAMPLE_NOTES = {
  biology: `The mitochondria is the powerhouse of the cell. It produces ATP (adenosine triphosphate) through a process called cellular respiration.
This occurs in two main stages: the Krebs cycle (citric acid cycle) and oxidative phosphorylation via the electron transport chain.
The inner mitochondrial membrane is highly folded into cristae, which increases surface area for ATP synthesis.
Mitochondria contain their own circular DNA, suggesting they evgenerateBtn.addEventListener('click', async () => {olved from ancient prokaryotes through endosymbiosis.
The process of chemiosmosis drives the ATP synthase enzyme using a proton gradient across the inner membrane.
Each glucose molecule can yield up to 38 ATP molecules in total.`,

  history: `World War II began in 1939 when Nazi Germany invaded Poland, prompting Britain and France to declare war.
Adolf Hitler led Germany under the Nazi ideology, pursuing aggressive territorial expansion across Europe.
Key events include the Fall of France in 1940, the Battle of Britain, Operation Barbarossa (1941), and the D-Day landings in Normandy on June 6, 1944.
The United States entered the war following the Japanese attack on Pearl Harbor on December 7, 1941.
The Holocaust saw the systematic murder of six million Jews and millions of others by the Nazi regime.
Germany surrendered on May 8, 1945 (V-E Day), and Japan surrendered on September 2, 1945 (V-J Day) following the atomic bombings of Hiroshima and Nagasaki.
The war resulted in an estimated 70-85 million deaths worldwide.`,

  physics: `Quantum mechanics describes the behaviour of matter and energy at the smallest scales — atoms and subatomic particles.
The wave-particle duality principle states that particles like electrons exhibit both wave and particle properties.
Heisenberg's Uncertainty Principle states that you cannot simultaneously know the exact position and momentum of a particle.
The Schrödinger equation describes how the quantum state of a physical system changes over time.
Quantum entanglement occurs when two particles become correlated such that the state of one instantly influences the other, regardless of distance.
Superposition means a quantum particle exists in multiple states simultaneously until measured.
Quantum tunnelling allows particles to pass through energy barriers they classically could not overcome.
These principles form the basis of modern technologies like transistors, lasers, and MRI machines.`
};

const STUDY_DATA = {
  biology: {
    summary: `<p>Mitochondria are double-membraned organelles responsible for energy production in eukaryotic cells. Often called the "powerhouse of the cell," they generate ATP through <strong>cellular respiration</strong> — a two-stage process involving the Krebs cycle and oxidative phosphorylation.</p>
<p>The inner membrane's elaborate <strong>cristae folds</strong> dramatically increase surface area, enabling efficient ATP synthesis via the ATP synthase enzyme, powered by a proton gradient created through chemiosmosis. A single glucose molecule can yield up to <strong>38 ATP molecules</strong>.</p>
<p>Mitochondria also carry their own circular DNA, supporting the <strong>endosymbiotic theory</strong> — that they evolved from ancient free-living bacteria absorbed by early eukaryotic cells.</p>`,
    keyPoints: [
      { icon: "⚡", text: "Produce ATP via the Krebs cycle and electron transport chain" },
      { icon: "🔬", text: "Cristae folds increase inner membrane surface area" },
      { icon: "🧬", text: "Contain their own circular mitochondrial DNA" },
      { icon: "🔋", text: "Up to 38 ATP molecules produced per glucose" },
      { icon: "🌀", text: "Chemiosmosis drives ATP synthase via proton gradients" },
      { icon: "🦠", text: "Originated through endosymbiosis with ancient prokaryotes" }
    ],
    flashcards: [
      { q: "What is the primary function of mitochondria?", a: "To produce ATP (adenosine triphosphate) through cellular respiration, providing energy for the cell's activities." },
      { q: "What are cristae?", a: "Folds of the inner mitochondrial membrane that increase surface area, allowing more space for ATP synthesis." },
      { q: "What is chemiosmosis?", a: "The process where a proton gradient across the inner membrane drives the ATP synthase enzyme to produce ATP." },
      { q: "Why do mitochondria have their own DNA?", a: "It supports the endosymbiotic theory — mitochondria evolved from free-living prokaryotes absorbed by early eukaryotic cells." }
    ],
    quiz: [
      {
        q: "How many ATP molecules can be produced from a single glucose molecule?",
        options: ["10", "20", "38", "100"],
        answer: 2
      },
      {
        q: "What term describes the folded structures of the inner mitochondrial membrane?",
        options: ["Ribosomes", "Cristae", "Vacuoles", "Nuclei"],
        answer: 1
      },
      {
        q: "What theory explains why mitochondria have their own DNA?",
        options: ["Cell Theory", "Germ Theory", "Endosymbiotic Theory", "Quantum Biology"],
        answer: 2
      },
      {
        q: "Which cycle is part of cellular respiration in mitochondria?",
        options: ["Calvin Cycle", "Lytic Cycle", "Krebs Cycle", "Urea Cycle"],
        answer: 2
      }
    ]
  },
  history: {
    summary: `<p>World War II (1939–1945) was the deadliest conflict in human history, resulting in an estimated <strong>70–85 million deaths</strong>. It began when Nazi Germany, led by Adolf Hitler, invaded Poland on September 1, 1939, triggering declarations of war from Britain and France.</p>
<p>The war unfolded across multiple theatres. Germany rapidly conquered Western Europe, but was repelled during the <strong>Battle of Britain</strong> in 1940. The tide turned when Germany invaded the Soviet Union (Operation Barbarossa) and Japan attacked <strong>Pearl Harbor</strong>, drawing the United States into the conflict.</p>
<p>The Allied liberation of Europe culminated in D-Day (June 6, 1944) and Germany's surrender on <strong>V-E Day, May 8, 1945</strong>. Japan surrendered on September 2, 1945, following atomic bombings of Hiroshima and Nagasaki. The Holocaust — Nazi Germany's genocide of six million Jews — remains one of history's darkest chapters.</p>`,
    keyPoints: [
      { icon: "📅", text: "War began September 1, 1939 with Germany's invasion of Poland" },
      { icon: "🎯", text: "D-Day landings at Normandy, June 6, 1944 — turning point in Europe" },
      { icon: "💥", text: "USA entered after Japan's attack on Pearl Harbor, Dec 7, 1941" },
      { icon: "🕍", text: "The Holocaust: systematic murder of 6 million Jews by Nazis" },
      { icon: "🏳️", text: "Germany surrendered V-E Day (May 8) Japan surrendered V-J Day (Sep 2, 1945)" },
      { icon: "☢️", text: "Atomic bombs dropped on Hiroshima and Nagasaki, August 1945" }
    ],
    flashcards: [
      { q: "When did World War II begin and what triggered it?", a: "September 1, 1939 — Germany's invasion of Poland prompted Britain and France to declare war." },
      { q: "What was Operation Barbarossa?", a: "Germany's massive invasion of the Soviet Union in 1941, opening the Eastern Front and proving a fatal strategic mistake." },
      { q: "What happened on D-Day, June 6, 1944?", a: "Allied forces launched the largest seaborne invasion in history at Normandy, France, beginning the liberation of Western Europe." },
      { q: "What was the Holocaust?", a: "The systematic, state-sponsored murder of six million Jews and millions of others by the Nazi regime during World War II." }
    ],
    quiz: [
      {
        q: "When did Germany invade Poland, starting World War II?",
        options: ["August 1938", "September 1939", "January 1940", "June 1941"],
        answer: 1
      },
      {
        q: "What event brought the United States into World War II?",
        options: ["Fall of France", "Battle of Britain", "Attack on Pearl Harbor", "D-Day Landings"],
        answer: 2
      },
      {
        q: "On what date did the D-Day landings occur?",
        options: ["May 8, 1945", "June 6, 1944", "December 7, 1941", "September 2, 1945"],
        answer: 1
      },
      {
        q: "How many Jews were killed during the Holocaust?",
        options: ["1 million", "3 million", "6 million", "10 million"],
        answer: 2
      }
    ]
  },
  physics: {
    summary: `<p>Quantum mechanics is the branch of physics describing matter and energy at the atomic and subatomic scale. It replaces classical Newtonian mechanics when dealing with very small particles, revealing a deeply probabilistic universe.</p>
<p>Key principles include <strong>wave-particle duality</strong> (particles exhibit both wave and particle behaviour), <strong>Heisenberg's Uncertainty Principle</strong> (you cannot simultaneously know a particle's exact position and momentum), and <strong>superposition</strong> (particles exist in multiple states until observed).</p>
<p><strong>Quantum entanglement</strong> links particles across any distance, while <strong>quantum tunnelling</strong> allows particles to pass through classically forbidden energy barriers. These principles underpin modern technologies including transistors, lasers, and MRI scanners, making quantum mechanics the most experimentally verified theory in science.</p>`,
    keyPoints: [
      { icon: "🌊", text: "Wave-particle duality: particles behave as both waves and particles" },
      { icon: "❓", text: "Uncertainty Principle: position and momentum can't both be known exactly" },
      { icon: "🔗", text: "Entanglement: linked particles influence each other instantly across distances" },
      { icon: "👻", text: "Quantum tunnelling: particles can pass through energy barriers" },
      { icon: "🎲", text: "Superposition: particles exist in multiple states until measured" },
      { icon: "💻", text: "Underpins transistors, lasers, MRI, and quantum computing" }
    ],
    flashcards: [
      { q: "What is wave-particle duality?", a: "The principle that quantum particles like electrons exhibit both wave-like and particle-like properties depending on how they are observed." },
      { q: "State Heisenberg's Uncertainty Principle.", a: "It is impossible to simultaneously know the exact position and exact momentum of a particle — measuring one disturbs the other." },
      { q: "What is quantum superposition?", a: "A quantum particle exists in multiple possible states simultaneously until it is observed or measured, at which point it 'collapses' into one state." },
      { q: "What is quantum entanglement?", a: "Two particles become correlated so that the quantum state of one instantly affects the other, regardless of the distance between them." }
    ],
    quiz: [
      {
        q: "Which principle states you cannot know both position and momentum of a particle exactly?",
        options: ["Pauli Exclusion Principle", "Heisenberg's Uncertainty Principle", "Schrödinger's Equation", "Bohr's Postulate"],
        answer: 1
      },
      {
        q: "What does quantum superposition describe?",
        options: [
          "Two particles sharing energy",
          "A particle moving faster than light",
          "A particle existing in multiple states until measured",
          "Nuclear fusion reactions"
        ],
        answer: 2
      },
      {
        q: "Which technology is NOT directly based on quantum mechanics?",
        options: ["Lasers", "Transistors", "MRI machines", "Combustion engines"],
        answer: 3
      },
      {
        q: "What allows particles to pass through energy barriers they classically cannot?",
        options: ["Wave-particle duality", "Quantum entanglement", "Quantum tunnelling", "Superposition"],
        answer: 2
      }
    ]
  }
};

// ─── GENERIC SUMMARY GENERATOR ────────────────────────────────────────────────

function generateFromText(text) {
  const words = text.trim().split(/\s+/);
  const sentences = text.trim().split(/[.!?]+/).filter(s => s.trim().length > 10);
  const wordCount = words.length;
  const topic = sentences[0] ? sentences[0].trim().split(' ').slice(0, 6).join(' ') + '...' : 'your topic';

  const para1 = sentences.slice(0, Math.min(3, sentences.length)).join('. ').trim();
  const para2 = sentences.length > 3 ? sentences.slice(3, Math.min(6, sentences.length)).join('. ').trim() : '';

  return {
    summary: `<p>${para1 ? para1 + '.' : 'This section covers key concepts from your notes.'}</p>${para2 ? `<p>${para2}.</p>` : ''}<p>These concepts are drawn from your <strong>${wordCount} words</strong> of notes, distilled into the essential ideas.</p>`,
    keyPoints: sentences.slice(0, 6).map((s, i) => {
      const icons = ['💡', '📌', '🔑', '📖', '✅', '🎯'];
      return { icon: icons[i % icons.length], text: s.trim().substring(0, 90) + (s.trim().length > 90 ? '…' : '') };
    }),
    flashcards: sentences.slice(0, 4).map((s, i) => ({
      q: `What is the key idea in point ${i + 1}?`,
      a: s.trim()
    })),
    quiz: sentences.slice(0, 4).map((s, i) => {
      const snippet = s.trim().split(' ').slice(0, 5).join(' ');
      return {
        q: `Which of the following best relates to: "${snippet}..."?`,
        options: [
          s.trim().substring(0, 55),
          'A completely unrelated statement about something else entirely.',
          'This option describes a different concept altogether.',
          'An incorrect paraphrase that misses the main idea.'
        ],
        answer: 0
      };
    })
  };
}

// ─── STATE ────────────────────────────────────────────────────────────────────

let currentData = null;
let currentCard = 0;
let quizAnswers = {};
let currentSample = null;

// ─── DOM REFERENCES ───────────────────────────────────────────────────────────

const themeToggle  = document.getElementById('themeToggle');
const themeIcon    = document.getElementById('themeIcon');
const notesInput   = document.getElementById('notesInput');
const charCount    = document.getElementById('charCount');
const generateBtn  = document.getElementById('generateBtn');
const outputWrapper= document.getElementById('outputWrapper');
const loadingOverlay=document.getElementById('loadingOverlay');
const loadingText  = document.getElementById('loadingText');
const loadingFill  = document.getElementById('loadingFill');

// ─── THEME TOGGLE ─────────────────────────────────────────────────────────────

const savedTheme = localStorage.getItem('studyos-theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);
themeIcon.textContent = savedTheme === 'dark' ? '☀' : '☾';

themeToggle.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  themeIcon.textContent = next === 'dark' ? '☀' : '☾';
  localStorage.setItem('studyos-theme', next);
});

// ─── CHAR COUNT ───────────────────────────────────────────────────────────────

notesInput.addEventListener('input', () => {
  const len = notesInput.value.length;
  charCount.textContent = len === 0 ? '0 characters' : `${len.toLocaleString()} characters`;
});

// ─── SAMPLE BUTTONS ───────────────────────────────────────────────────────────

document.querySelectorAll('.sample-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const key = btn.dataset.sample;
    notesInput.value = SAMPLE_NOTES[key];
    charCount.textContent = `${SAMPLE_NOTES[key].length.toLocaleString()} characters`;
    currentSample = key;
    document.querySelectorAll('.sample-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// ─── LOADING SIMULATION ───────────────────────────────────────────────────────

function simulateLoading(cb) {
  const messages = [
    'Analysing your notes…',
    'Extracting key concepts…',
    'Generating flashcards…',
    'Building quiz questions…',
    'Almost ready…'
  ];
  let progress = 0;
  let msgIdx = 0;
  loadingFill.style.width = '0%';
  loadingText.textContent = messages[0];

  const interval = setInterval(() => {
    progress += Math.random() * 22 + 10;
    if (progress > 100) progress = 100;
    loadingFill.style.width = progress + '%';

    msgIdx = Math.min(Math.floor(progress / 25), messages.length - 1);
    loadingText.textContent = messages[msgIdx];

    if (progress >= 100) {
      clearInterval(interval);
      setTimeout(cb, 300);
    }
  }, 200);
}

// ─── GENERATE ─────────────────────────────────────────────────────────────────

generateBtn.addEventListener('click', async () => {
  const text = notesInput.value.trim();

  if (!text) return;

  outputWrapper.classList.remove('hidden');
  loadingOverlay.style.display = 'flex';
  outputWrapper.scrollIntoView({ behavior: 'smooth', block: 'center' });

  try {
    const res = await generateWithAI(text);
    const aiText = res.choices[0].message.content;

    const data = JSON.parse(aiText);

    currentData = data;

    renderAll();
    switchTab('summary');

  } catch (err) {
    console.error(err);
    alert("AI broke 😭 check console or API response format");
  }

  loadingOverlay.style.display = 'none';
}); 
  const text = notesInput.value.trim();
  if (!text) {
    notesInput.style.borderBottom = '2px solid var(--accent-2)';
    notesInput.placeholder = 'Please enter some notes first!';
    notesInput.focus();
    setTimeout(() => {
      notesInput.style.borderBottom = '';
      notesInput.placeholder = 'e.g. The mitochondria is the powerhouse of the cell…';
    }, 2000);
    return;
  }

  // Show output wrapper + loading
  outputWrapper.classList.remove('hidden');
  loadingOverlay.style.display = 'flex';
  outputWrapper.scrollIntoView({ behavior: 'smooth', block: 'center' });

  simulateLoading(() => {
    // Pick data
    if (currentSample && STUDY_DATA[currentSample]) {
      currentData = STUDY_DATA[currentSample];
    } else {
      currentData = await generateWithAI(text);
    }

    renderAll();
    loadingOverlay.style.display = 'none';

    // Auto-switch to summary tab
    switchTab('summary');
    document.getElementById('tabsSection').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// ─── RENDER ───────────────────────────────────────────────────────────────────

function renderAll() {
  renderSummary();
  renderFlashcards();
  renderQuiz();
}

function renderSummary() {
  const el = document.getElementById('summaryContent');
  el.innerHTML = currentData.summary;

  const kp = document.getElementById('keyPoints');
  kp.innerHTML = currentData.keyPoints.map(p => `
    <div class="key-point">
      <span class="key-point-icon">${p.icon}</span>
      <span class="key-point-text">${p.text}</span>
    </div>
  `).join('');
}

// Copy button
document.querySelector('.copy-btn').addEventListener('click', () => {
  const text = document.getElementById('summaryContent').innerText;
  navigator.clipboard.writeText(text).then(() => {
    const btn = document.querySelector('.copy-btn');
    btn.textContent = 'Copied!';
    setTimeout(() => { btn.textContent = 'Copy'; }, 2000);
  });
});

// ── Flashcards ──

function renderFlashcards() {
  currentCard = 0;
  const stack = document.getElementById('flashcardStack');
  const data  = currentData.flashcards;

  stack.innerHTML = data.map((card, i) => `
    <div class="flashcard${i === 0 ? '' : ' hidden-card'}" data-index="${i}">
      <div class="fc-face fc-front">
        <div class="fc-label">Question</div>
        <div class="fc-text">${card.q}</div>
      </div>
      <div class="fc-face fc-back">
        <div class="fc-label">Answer</div>
        <div class="fc-text">${card.a}</div>
      </div>
    </div>
  `).join('');

  // Dots
  const dots = document.getElementById('flashcardDots');
  dots.innerHTML = data.map((_, i) => `
    <div class="fc-dot${i === 0 ? ' active' : ''}" data-dot="${i}"></div>
  `).join('');

  updateCardCounter();
  attachCardListeners();
}

function attachCardListeners() {
  // Flip
  document.querySelectorAll('.flashcard').forEach(card => {
    card.addEventListener('click', () => card.classList.toggle('flipped'));
  });

  // Dots
  document.querySelectorAll('.fc-dot').forEach(dot => {
    dot.addEventListener('click', () => goToCard(parseInt(dot.dataset.dot)));
  });
}

document.getElementById('fcNext').addEventListener('click', () => {
  const n = currentData?.flashcards.length || 0;
  goToCard((currentCard + 1) % n);
});

document.getElementById('fcPrev').addEventListener('click', () => {
  const n = currentData?.flashcards.length || 0;
  goToCard((currentCard - 1 + n) % n);
});

function goToCard(idx) {
  const cards = document.querySelectorAll('.flashcard');
  cards.forEach(c => { c.classList.add('hidden-card'); c.classList.remove('flipped'); });
  cards[idx]?.classList.remove('hidden-card');

  const dots = document.querySelectorAll('.fc-dot');
  dots.forEach(d => d.classList.remove('active'));
  dots[idx]?.classList.add('active');

  currentCard = idx;
  updateCardCounter();
}

function updateCardCounter() {
  const n = currentData?.flashcards.length || 0;
  document.getElementById('cardCounter').textContent = `Card ${currentCard + 1} of ${n}`;
}

// Add hidden-card style
const style = document.createElement('style');
style.textContent = `.flashcard.hidden-card { display: none; }`;
document.head.appendChild(style);

// ── Quiz ──

function renderQuiz() {
  quizAnswers = {};
  const data = currentData.quiz;
  const container = document.getElementById('quizQuestions');

  container.innerHTML = data.map((item, qi) => `
    <div class="quiz-q" id="quiz-q-${qi}">
      <div class="quiz-q-num">Question ${qi + 1}</div>
      <div class="quiz-q-text">${item.q}</div>
      <div class="quiz-options">
        ${item.options.map((opt, oi) => `
          <button class="quiz-option" data-q="${qi}" data-o="${oi}">
            <span class="option-key">${['A','B','C','D'][oi]}</span>
            ${opt}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');

  // Reset results
  document.getElementById('quizResult').style.display = 'none';
  document.getElementById('quizScoreBadge').style.display = 'none';
  document.getElementById('submitQuizBtn').disabled = false;

  // Option click
  container.querySelectorAll('.quiz-option').forEach(btn => {
    btn.addEventListener('click', () => {
      const qi = btn.dataset.q;
      const oi = parseInt(btn.dataset.o);
      // Deselect others in same question
      container.querySelectorAll(`.quiz-option[data-q="${qi}"]`).forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      quizAnswers[qi] = oi;
    });
  });
}

document.getElementById('submitQuizBtn').addEventListener('click', () => {
  const data = currentData.quiz;
  let correct = 0;

  data.forEach((item, qi) => {
    const selectedOpt = parseInt(quizAnswers[qi]);
    const qEl = document.getElementById(`quiz-q-${qi}`);
    const opts = qEl.querySelectorAll('.quiz-option');

    opts.forEach(btn => {
      btn.disabled = true;
      const oi = parseInt(btn.dataset.o);
      btn.classList.remove('selected');
      if (oi === item.answer) btn.classList.add('reveal-correct');
      else if (oi === selectedOpt && selectedOpt !== item.answer) btn.classList.add('reveal-wrong');
    });

    if (selectedOpt === item.answer) {
      correct++;
      qEl.classList.add('correct');
    } else {
      qEl.classList.add('wrong');
    }
  });

  // Score badge
  document.getElementById('quizScore').textContent = correct;
  document.getElementById('quizTotal').textContent = data.length;
  document.getElementById('quizScoreBadge').style.display = 'flex';

  // Result message
  const pct = (correct / data.length) * 100;
  let emoji = '💪', msg = '';
  if (pct === 100) { emoji = '🎉'; msg = 'Perfect score! Absolutely brilliant.'; }
  else if (pct >= 75) { emoji = '🌟'; msg = 'Great job! You have a solid understanding.'; }
  else if (pct >= 50) { emoji = '📚'; msg = 'Good effort! Review the incorrect answers above.'; }
  else { emoji = '🔄'; msg = 'Keep revising — you\'ve got this! Re-read the summary.'; }

  const resultEl = document.getElementById('quizResult');
  resultEl.innerHTML = `<h3>${emoji} ${correct}/${data.length}</h3><p>${msg}</p>`;
  resultEl.style.display = 'block';

  document.getElementById('submitQuizBtn').disabled = true;
  resultEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});

// ─── TABS ─────────────────────────────────────────────────────────────────────

function switchTab(name) {
  document.querySelectorAll('.tab-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.tab === name);
  });
  document.querySelectorAll('.tab-panel').forEach(p => {
    p.classList.toggle('active', p.id === `tab-${name}`);
  });
}

document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => switchTab(btn.dataset.tab));
});

// ─── SMOOTH SCROLL FOR HERO CTA ───────────────────────────────────────────────

document.querySelector('.hero-cta').addEventListener('click', e => {
  e.preventDefault();
  document.getElementById('input-section').scrollIntoView({ behavior: 'smooth' });
});
Done

const API_KEY = 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 ;

async function generateWithAI(text) {
  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${API_KEY}`
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: text }]
    })
  });

  return await res.json();
}
