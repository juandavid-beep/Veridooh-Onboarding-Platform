// Veridooh Onboarding — app logic (vanilla JS, no framework)
// LOGO_SRC is defined in logo.js, loaded before this file.

function getStore(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (e) {
    return fallback;
  }
}
function setStore(key, val) {
  localStorage.setItem(key, JSON.stringify(val));
}

const state = {
  user: null,
  view: 'dashboard',
  activeTrackId: 'core-concepts',
  activeLessonId: LESSONS[0].id,
  lessonTab: 'read',
  interactiveState: {},
  glossaryQuery: '',
  quizAnswers: {},
  quizSubmitted: false,
  quizRetryMode: false,
  retryQuestionIndices: []
};

function getTrack(trackId) {
  return PROGRAMMATIC_TRACKS.find(t => t.id === trackId) || PROGRAMMATIC_TRACKS[0];
}
function getActiveTrack() {
  return getTrack(state.activeTrackId);
}
function switchTrack(trackId) {
  state.activeTrackId = trackId;
  const track = getTrack(trackId);
  state.activeLessonId = track.lessons[0] ? track.lessons[0].id : null;
  state.lessonTab = 'read';
  restoreQuizDraft(trackId);
}

function getNextRecommendedTrack() {
  return PROGRAMMATIC_TRACKS.find(t => {
    if (t.id === state.activeTrackId || t.status !== 'available') return false;
    const p = getProgress(t.id);
    const allLessonsDone = t.lessons.length > 0 && p.completedLessons.length === t.lessons.length;
    return !(allLessonsDone && p.quizPassed);
  }) || null;
}

function spawnConfetti() {
  const colors = ['#518CC7', '#8DCA92', '#EABD59', '#B00020', '#880E4F', '#006064', '#4A148C'];
  const container = document.createElement('div');
  container.className = 'confetti-container';
  for (let i = 0; i < 70; i++) {
    const piece = document.createElement('span');
    piece.className = 'confetti-piece';
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    piece.style.setProperty('--duration', `${2.4 + Math.random() * 1.6}s`);
    piece.style.setProperty('--delay', `${Math.random() * 0.5}s`);
    piece.style.setProperty('--rotate-start', `${Math.random() * 360}deg`);
    piece.style.setProperty('--drift', `${(Math.random() - 0.5) * 140}px`);
    if (Math.random() > 0.5) piece.style.borderRadius = '50%';
    container.appendChild(piece);
  }
  document.body.appendChild(container);
  setTimeout(() => container.remove(), 4300);
}

function progressKey(trackId = state.activeTrackId) {
  const track = getTrack(trackId);
  const suffix = track.legacyProgress ? '' : `_${trackId}`;
  return `vo_progress_${state.user ? state.user.email : 'anon'}${suffix}`;
}
function getProgress(trackId = state.activeTrackId) {
  return getStore(progressKey(trackId), { completedLessons: [], quizScore: null, quizTotal: null, quizPassed: false });
}
function saveProgress(p, trackId = state.activeTrackId) {
  setStore(progressKey(trackId), p);
}

function quizDraftKey(trackId = state.activeTrackId) {
  const track = getTrack(trackId);
  const suffix = track.legacyProgress ? '' : `_${trackId}`;
  return `vo_quiz_draft_${state.user ? state.user.email : 'anon'}${suffix}`;
}
function saveQuizDraft(trackId = state.activeTrackId) {
  setStore(quizDraftKey(trackId), {
    answers: state.quizAnswers,
    submitted: state.quizSubmitted,
    retryMode: state.quizRetryMode,
    retryQuestionIndices: state.retryQuestionIndices
  });
}
function restoreQuizDraft(trackId = state.activeTrackId) {
  const draft = getStore(quizDraftKey(trackId), null);
  state.quizAnswers = (draft && draft.answers) || {};
  state.quizSubmitted = !!(draft && draft.submitted);
  state.quizRetryMode = !!(draft && draft.retryMode);
  state.retryQuestionIndices = (draft && draft.retryQuestionIndices) || [];
}

function initials(name) {
  return name.split(' ').map(p => p[0]).join('').slice(0, 2).toUpperCase();
}

function icon(name, extraAttrs) {
  return `<i data-lucide="${name}" ${extraAttrs || ''}></i>`;
}

function renderIcons() {
  if (window.lucide) window.lucide.createIcons();
}

function render() {
  const root = document.getElementById('app');
  root.innerHTML = renderTopbar() + renderBreadcrumb() + '<div class="page">' + renderPage() + '</div>';
  attachHandlers();
  renderIcons();
}

// ---------------- Boot: verify the server session before showing anything ----------------

async function boot() {
  try {
    const res = await fetch('/api/auth/me');
    if (!res.ok) {
      window.location.href = '/login.html';
      return;
    }
    const data = await res.json();
    state.user = { email: data.email, name: data.name };
    restoreQuizDraft('core-concepts');
    render();
  } catch (e) {
    window.location.href = '/login.html';
  }
}

// ---------------- Shell ----------------

function renderTopbar() {
  return `
    <div class="topbar">
      <div class="topbar-left">
        <img src="${LOGO_SRC}" class="topbar-logo" alt="Veridooh" />
        <div class="topbar-title">|&nbsp; <span>Onboarding</span></div>
      </div>
      <div class="topbar-right">
        <button class="link-btn" data-nav="glossary">Glossary</button>
        <div class="topbar-user">
          <div class="avatar">${initials(state.user.name)}</div>
          ${state.user.name}
        </div>
        <button class="link-btn" id="logout-btn">Sign out</button>
      </div>
    </div>
  `;
}

function renderBreadcrumb() {
  const crumbs = [{ label: 'Home', nav: 'dashboard' }];
  if (state.view === 'programmatic-hub') {
    crumbs.push({ label: 'Programmatic (pDOOH)', nav: null });
  }
  if (state.view === 'module' || state.view === 'lesson' || state.view === 'quiz' || state.view === 'result') {
    crumbs.push({ label: 'Programmatic (pDOOH)', nav: 'programmatic-hub' });
    crumbs.push({ label: getActiveTrack().title, nav: 'module' });
  }
  if (state.view === 'quiz' || state.view === 'result') {
    crumbs.push({ label: 'Quiz', nav: null });
  }
  if (state.view === 'glossary') crumbs.push({ label: 'Glossary', nav: null });
  return `<div class="breadcrumb">${crumbs.map((c, i) => {
    const isLast = i === crumbs.length - 1;
    const sep = i > 0 ? '<span class="sep">&gt;</span>' : '';
    if (isLast || !c.nav) return `${sep}<span class="current">${c.label}</span>`;
    return `${sep}<a data-nav="${c.nav}">${c.label}</a>`;
  }).join('')}</div>`;
}

function renderPage() {
  switch (state.view) {
    case 'dashboard': return renderDashboard();
    case 'programmatic-hub': return renderProgrammaticHub();
    case 'module': return renderModule();
    case 'lesson': return renderModule();
    case 'glossary': return renderGlossary();
    case 'quiz': return renderQuiz();
    case 'result': return renderResult();
    default: return renderDashboard();
  }
}

// ---------------- Dashboard ----------------

function renderDashboard() {
  const coreProgress = getProgress('core-concepts');
  const corePct = Math.round((coreProgress.completedLessons.length / LESSONS.length) * 100);
  return `
    <div class="page-header">
      <div class="page-title">Welcome, ${state.user.name.split(' ')[0]}</div>
      <div class="page-subtitle">Pick a module to get started.</div>
    </div>
    <div class="module-grid">
      ${MODULES.map(m => {
        const isProgrammatic = m.id === 'programmatic';
        const disabled = m.status !== 'available';
        return `
          <div class="card module-card ${disabled ? 'disabled' : ''}" ${disabled ? '' : `data-nav="programmatic-hub"`}>
            <div class="module-icon" style="background:${m.chipBg}">
              <i data-lucide="${m.icon}" style="color:${m.color};width:22px;height:22px"></i>
            </div>
            <h3>${m.title}</h3>
            <p class="tagline">${m.tagline}</p>
            ${isProgrammatic ? `
              <div class="progress-track"><div class="progress-fill ${corePct === 100 ? 'complete' : ''}" style="width:${corePct}%"></div></div>
              <div class="progress-label">Core Concepts: ${coreProgress.completedLessons.length}/${LESSONS.length} lessons${coreProgress.quizPassed ? ' · Quiz passed ✅' : ''}</div>
            ` : `<span class="chip chip-warning">Coming soon</span>`}
          </div>
        `;
      }).join('')}
    </div>
  `;
}

// ---------------- Programmatic Hub ----------------

function renderProgrammaticHub() {
  const coreTrack = getTrack('core-concepts');
  const coreProgress = getProgress('core-concepts');
  const corePct = Math.round((coreProgress.completedLessons.length / coreTrack.lessons.length) * 100);
  const teamTracks = PROGRAMMATIC_TRACKS.filter(t => t.id !== 'core-concepts');

  return `
    <div class="page-header">
      <div class="page-title">Programmatic (pDOOH)</div>
      <div class="page-subtitle">${MODULES.find(m => m.id === 'programmatic').tagline}</div>
    </div>

    <div class="card module-card" style="margin-bottom:24px; cursor:pointer;" data-nav="module" data-track="core-concepts">
      <div class="module-icon" style="background:#FCE4EC">
        <i data-lucide="${coreTrack.icon}" style="color:#880E4F;width:22px;height:22px"></i>
      </div>
      <h3>${coreTrack.title}</h3>
      <p class="tagline">${coreTrack.tagline}</p>
      <div class="progress-track"><div class="progress-fill ${corePct === 100 ? 'complete' : ''}" style="width:${corePct}%"></div></div>
      <div class="progress-label">${coreProgress.completedLessons.length}/${coreTrack.lessons.length} lessons complete${coreProgress.quizPassed ? ' · Quiz passed ✅' : ''}</div>
    </div>

    <div class="page-header" style="margin-bottom:12px;">
      <div class="page-title" style="font-size:18px;">Team Playbooks</div>
      <div class="page-subtitle">Operational, day-to-day tasks — scoped to each team working on programmatic.</div>
    </div>
    <div class="module-grid">
      ${teamTracks.map(t => {
        const disabled = t.status !== 'available';
        const progress = disabled ? null : getProgress(t.id);
        const pct = disabled ? 0 : Math.round((progress.completedLessons.length / (t.lessons.length || 1)) * 100);
        return `
          <div class="card module-card ${disabled ? 'disabled' : ''}" ${disabled ? '' : `data-nav="module" data-track="${t.id}"`}>
            <div class="module-icon" style="background:#EEF4F9">
              <i data-lucide="${t.icon}" style="color:#39628B;width:22px;height:22px"></i>
            </div>
            <h3>${t.title}</h3>
            <p class="tagline">${t.tagline}</p>
            ${!disabled ? `
              <div class="progress-track"><div class="progress-fill ${pct === 100 ? 'complete' : ''}" style="width:${pct}%"></div></div>
              <div class="progress-label">${progress.completedLessons.length}/${t.lessons.length} lessons complete${progress.quizPassed ? ' · Quiz passed ✅' : ''}</div>
            ` : `<span class="chip chip-warning">Coming soon</span>`}
          </div>
        `;
      }).join('')}
    </div>
  `;
}

// ---------------- Module / Lesson ----------------

function renderModule() {
  const track = getActiveTrack();
  const lessons = track.lessons;
  const progress = getProgress();
  const pct = Math.round((progress.completedLessons.length / lessons.length) * 100);
  const activeLesson = lessons.find(l => l.id === state.activeLessonId) || lessons[0];
  const allDone = progress.completedLessons.length === lessons.length;

  const railItems = lessons.map((l, i) => {
    const done = progress.completedLessons.includes(l.id);
    const active = l.id === activeLesson.id;
    return `
      <li class="rail-item ${active ? 'active' : ''}" data-nav="lesson" data-lesson="${l.id}">
        <span class="rail-check ${done ? 'done' : ''}">${done ? icon('check') : ''}</span>
        <span>${i + 1}. ${l.title}</span>
        <span class="rail-badge">interactive</span>
      </li>
    `;
  }).join('');

  const idx = lessons.findIndex(l => l.id === activeLesson.id);
  const isDone = progress.completedLessons.includes(activeLesson.id);
  const nextLesson = lessons[idx + 1];
  const onInteractiveTab = state.lessonTab === 'interactive';

  return `
    <div class="page-header">
      <div class="page-title">${track.title}</div>
      <div class="page-subtitle">${track.tagline}</div>
    </div>
    <div class="module-layout">
      <div class="card lesson-rail">
        <div class="rail-progress-header"><span>Progress</span><strong>${pct}%</strong></div>
        <div class="progress-track"><div class="progress-fill ${pct === 100 ? 'complete' : ''}" style="width:${pct}%"></div></div>
        <ul class="rail-nav">${railItems}</ul>
        <div class="rail-divider"></div>
        <div class="rail-item ${allDone ? '' : 'disabled'}" ${allDone ? 'data-nav="quiz"' : ''} style="${allDone ? '' : 'opacity:.5;cursor:default;'}">
          <span class="rail-check ${progress.quizPassed ? 'done' : ''}">${progress.quizPassed ? icon('check') : icon('help-circle', 'style="width:12px;height:12px;color:#918F90"')}</span>
          <span>Module quiz${allDone ? '' : ' (finish lessons first)'}</span>
        </div>
      </div>
      <div class="card lesson-content">
        <div class="lesson-header">
          <i data-lucide="${activeLesson.icon}" style="width:22px;height:22px;color:#518CC7"></i>
          <h2>${activeLesson.title}</h2>
        </div>
        <div class="lesson-tabs">
          <button class="lesson-tab ${onInteractiveTab ? '' : 'active'}" data-lesson-tab="read">${icon('book-open', 'style="width:14px;height:14px"')} Lesson</button>
          <button class="lesson-tab ${onInteractiveTab ? 'active' : ''}" data-lesson-tab="interactive">${icon('mouse-pointer-click', 'style="width:14px;height:14px"')} Interactive summary</button>
        </div>
        ${onInteractiveTab ? renderInteractiveSummary(activeLesson.id) : activeLesson.body}
        <div class="lesson-footer">
          <button class="btn ${isDone ? 'btn-ghost' : 'btn-secondary'}" id="mark-complete-btn" data-lesson="${activeLesson.id}">
            ${isDone ? icon('check', 'style="width:16px;height:16px"') + ' Completed' : 'Mark complete'}
          </button>
          ${nextLesson
            ? `<button class="btn btn-primary" id="next-lesson-btn" data-lesson="${nextLesson.id}">Next: ${nextLesson.title} ${icon('arrow-right', 'style="width:16px;height:16px"')}</button>`
            : `<button class="btn btn-primary" ${allDone ? 'data-nav="quiz"' : 'disabled'}>Take the quiz ${icon('arrow-right', 'style="width:16px;height:16px"')}</button>`
          }
        </div>
      </div>
    </div>
  `;
}

// ---------------- Glossary ----------------

function renderGlossary() {
  const q = state.glossaryQuery.trim().toLowerCase();
  const filtered = GLOSSARY.filter(g => !q || g.term.toLowerCase().includes(q) || g.def.toLowerCase().includes(q))
    .sort((a, b) => a.term.localeCompare(b.term));
  return `
    <div class="page-header">
      <div class="page-title">Glossary</div>
      <div class="page-subtitle">Every key pDOOH term, explained simply. Don't try to memorise it — search whenever you hit a word you don't know.</div>
    </div>
    <div class="glossary-search">
      ${icon('search')}
      <input type="text" placeholder="Search terms..." id="glossary-search-input" value="${state.glossaryQuery}" />
    </div>
    <div class="glossary-list">
      ${filtered.length ? filtered.map(g => `
        <dl class="card glossary-item">
          <dt>${g.term}</dt>
          <dd>${g.def}</dd>
        </dl>
      `).join('') : `<div class="empty-state">No terms match "${state.glossaryQuery}".</div>`}
    </div>
  `;
}

// ---------------- Quiz ----------------

function getWrongQuestionIndices() {
  const quiz = getActiveTrack().quiz;
  return quiz.map((q, qi) => qi).filter(qi => state.quizAnswers[qi] !== quiz[qi].correct);
}

function getLessonsToRevise(wrongIndices) {
  const track = getActiveTrack();
  const seen = new Set();
  const ids = [];
  wrongIndices.forEach(qi => {
    const lid = track.quiz[qi].lesson;
    if (!seen.has(lid)) { seen.add(lid); ids.push(lid); }
  });
  return ids.map(id => track.lessons.find(l => l.id === id)).filter(Boolean);
}

function renderQuiz() {
  if (state.quizSubmitted) return renderResult();
  const quiz = getActiveTrack().quiz;
  const retryMode = state.quizRetryMode && state.retryQuestionIndices.length > 0;
  const indices = retryMode ? state.retryQuestionIndices : quiz.map((_, i) => i);
  const answeredCount = indices.filter(qi => state.quizAnswers[qi] != null).length;
  return `
    <div class="page-header">
      <div class="page-title">${retryMode ? 'Retry: just the ones you missed' : `${getActiveTrack().title} quiz`}</div>
      <div class="page-subtitle">${retryMode
        ? `${indices.length} question${indices.length === 1 ? '' : 's'} to redo — your correct answers from last time are already saved.`
        : `${quiz.length} questions · answer all to see your score.`}</div>
    </div>
    <div class="quiz-progress muted">${answeredCount}/${indices.length} answered</div>
    ${indices.map(qi => {
      const q = quiz[qi];
      return `
      <div class="card quiz-question">
        <h3>${qi + 1}. ${q.q}</h3>
        <div class="quiz-options">
          ${q.options.map((opt, oi) => `
            <label class="quiz-option ${state.quizAnswers[qi] === oi ? 'selected' : ''}">
              <input type="radio" name="q${qi}" value="${oi}" ${state.quizAnswers[qi] === oi ? 'checked' : ''} data-question="${qi}" data-option="${oi}" />
              ${opt}
            </label>
          `).join('')}
        </div>
      </div>
    `;
    }).join('')}
    <div class="quiz-submit-bar">
      <button class="btn btn-primary" id="submit-quiz-btn" ${answeredCount < indices.length ? 'disabled' : ''}>
        Submit answers ${icon('arrow-right', 'style="width:16px;height:16px"')}
      </button>
    </div>
  `;
}

function renderResult() {
  const track = getActiveTrack();
  const quiz = track.quiz;
  const progress = getProgress();
  const score = progress.quizScore != null ? progress.quizScore : 0;
  const total = progress.quizTotal != null ? progress.quizTotal : quiz.length;
  const pct = Math.round((score / total) * 100);
  const passed = progress.quizPassed;

  if (passed) {
    const nextTrack = getNextRecommendedTrack();
    return `
      <div class="celebration-badge">🎉</div>
      <div class="page-header" style="text-align:center;">
        <div class="page-title">Nice work — you passed!</div>
        <div class="page-subtitle">You've completed the ${track.title} track — ${score}/${total} (${pct}%)</div>
      </div>
      <div class="card result-card">
        <div class="chip chip-success" style="margin:0 auto 12px;">PASSED</div>
        <div class="result-score pass">${score}/${total}</div>
        <div style="display:flex; gap:12px; justify-content:center; margin-top:24px; flex-wrap:wrap;">
          ${nextTrack ? `
            <button class="btn btn-primary" data-nav="module" data-track="${nextTrack.id}">Keep learning: ${nextTrack.title} ${icon('arrow-right', 'style="width:16px;height:16px"')}</button>
            <button class="btn btn-secondary" data-nav="programmatic-hub">Explore other modules</button>
          ` : `
            <button class="btn btn-primary" data-nav="dashboard">Explore other modules ${icon('arrow-right', 'style="width:16px;height:16px"')}</button>
            <button class="btn btn-secondary" data-nav="module">Review ${track.title} again</button>
          `}
        </div>
        <div style="text-align:center; margin-top:16px;">
          <button class="link-btn" id="retake-quiz-btn">Retake this quiz</button>
        </div>
      </div>
      ${renderQuizReview()}
    `;
  }

  const wrongIndices = getWrongQuestionIndices();
  const revisionLessons = getLessonsToRevise(wrongIndices);
  return `
    <div class="page-header">
      <div class="page-title">Quiz results</div>
    </div>
    <div class="card result-card">
      <div class="chip chip-warning" style="margin:0 auto 12px;">NOT PASSED YET</div>
      <div class="result-score fail">${score}/${total}</div>
      <p class="muted">${pct}% correct — you need 80% to pass.</p>
      ${revisionLessons.length ? `
        <div style="text-align:left; margin-top:20px;">
          <p style="font-weight:600; font-size:14px; margin-bottom:8px;">Worth revisiting before you retry:</p>
          <div style="display:flex; flex-wrap:wrap; gap:8px;">
            ${revisionLessons.map(l => `
              <button class="chip chip-info" style="cursor:pointer; border:none;" data-nav="lesson" data-lesson="${l.id}">
                ${l.title}
              </button>
            `).join('')}
          </div>
        </div>
      ` : ''}
      <div style="display:flex; gap:12px; justify-content:center; margin-top:20px; flex-wrap:wrap;">
        <button class="btn btn-secondary" data-nav="module">Back to lessons</button>
        ${wrongIndices.length ? `
          <button class="btn btn-primary" id="retry-incorrect-btn">Retry the ${wrongIndices.length} you missed</button>
        ` : ''}
        <button class="btn ${wrongIndices.length ? 'btn-ghost' : 'btn-primary'}" id="retake-quiz-btn">Retake full quiz</button>
      </div>
    </div>
    ${renderQuizReview()}
  `;
}

function renderQuizReview() {
  const quiz = getActiveTrack().quiz;
  return `
    <div class="page-header" style="margin-top:32px;">
      <div class="page-title" style="font-size:18px;">Review</div>
    </div>
    ${quiz.map((q, qi) => {
      const chosen = state.quizAnswers[qi];
      return `
        <div class="card quiz-question">
          <h3>${qi + 1}. ${q.q}</h3>
          <div class="quiz-options">
            ${q.options.map((opt, oi) => {
              let cls = '';
              if (oi === q.correct) cls = 'correct';
              else if (oi === chosen) cls = 'incorrect';
              return `<div class="quiz-option ${cls}">${opt}</div>`;
            }).join('')}
          </div>
        </div>
      `;
    }).join('')}
  `;
}

// ---------------- Event handling ----------------

function attachHandlers() {
  const root = document.getElementById('app');

  const logoutBtn = document.getElementById('logout-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', async () => {
      await fetch('/api/auth/logout', { method: 'POST' });
      window.location.href = '/login.html';
    });
  }

  root.querySelectorAll('[data-nav]').forEach(el => {
    el.addEventListener('click', () => {
      const nav = el.getAttribute('data-nav');
      if (nav === 'lesson') {
        state.activeLessonId = el.getAttribute('data-lesson');
        state.view = 'lesson';
        state.lessonTab = 'read';
      } else if (nav === 'module') {
        if (el.hasAttribute('data-track')) switchTrack(el.getAttribute('data-track'));
        state.view = 'module';
      } else {
        state.view = nav;
      }
      window.scrollTo(0, 0);
      render();
    });
  });

  const markBtn = document.getElementById('mark-complete-btn');
  if (markBtn) {
    markBtn.addEventListener('click', () => {
      const lessonId = markBtn.getAttribute('data-lesson');
      const progress = getProgress();
      if (!progress.completedLessons.includes(lessonId)) {
        progress.completedLessons.push(lessonId);
        saveProgress(progress);
      }
      render();
    });
  }

  const nextBtn = document.getElementById('next-lesson-btn');
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      const progress = getProgress();
      if (!progress.completedLessons.includes(state.activeLessonId)) {
        progress.completedLessons.push(state.activeLessonId);
        saveProgress(progress);
      }
      state.activeLessonId = nextBtn.getAttribute('data-lesson');
      state.lessonTab = 'read';
      window.scrollTo(0, 0);
      render();
    });
  }

  root.querySelectorAll('[data-lesson-tab]').forEach(el => {
    el.addEventListener('click', () => {
      state.lessonTab = el.getAttribute('data-lesson-tab');
      render();
    });
  });
  attachInteractiveHandlers(root);

  const glossarySearch = document.getElementById('glossary-search-input');
  if (glossarySearch) {
    glossarySearch.addEventListener('input', (e) => {
      state.glossaryQuery = e.target.value;
      const caret = e.target.selectionStart;
      render();
      const el = document.getElementById('glossary-search-input');
      if (el) { el.focus(); el.setSelectionRange(caret, caret); }
    });
  }

  root.querySelectorAll('.quiz-option input[type="radio"]').forEach(input => {
    input.addEventListener('change', (e) => {
      const qi = parseInt(e.target.getAttribute('data-question'), 10);
      const oi = parseInt(e.target.getAttribute('data-option'), 10);
      state.quizAnswers[qi] = oi;
      saveQuizDraft();
      render();
    });
  });

  const submitQuizBtn = document.getElementById('submit-quiz-btn');
  if (submitQuizBtn) {
    submitQuizBtn.addEventListener('click', () => {
      const quiz = getActiveTrack().quiz;
      let score = 0;
      quiz.forEach((q, qi) => { if (state.quizAnswers[qi] === q.correct) score++; });
      const passed = score / quiz.length >= 0.8;
      const progress = getProgress();
      progress.quizScore = score;
      progress.quizTotal = quiz.length;
      progress.quizPassed = passed;
      saveProgress(progress);
      state.quizSubmitted = true;
      state.quizRetryMode = false;
      state.retryQuestionIndices = [];
      saveQuizDraft();
      window.scrollTo(0, 0);
      render();
      if (passed) spawnConfetti();
    });
  }

  const retryIncorrectBtn = document.getElementById('retry-incorrect-btn');
  if (retryIncorrectBtn) {
    retryIncorrectBtn.addEventListener('click', () => {
      state.retryQuestionIndices = getWrongQuestionIndices();
      state.quizRetryMode = true;
      state.quizSubmitted = false;
      saveQuizDraft();
      window.scrollTo(0, 0);
      render();
    });
  }

  const retakeBtn = document.getElementById('retake-quiz-btn');
  if (retakeBtn) {
    retakeBtn.addEventListener('click', () => {
      state.quizAnswers = {};
      state.quizSubmitted = false;
      state.quizRetryMode = false;
      state.retryQuestionIndices = [];
      saveQuizDraft();
      window.scrollTo(0, 0);
      render();
    });
  }
}

boot();
