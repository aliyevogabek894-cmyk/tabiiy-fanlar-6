// ==========================================================================
// 6-SINF TABIIY FANLAR — ULTRA-MODERN 2026 PLATFORM JAVASCRIPT (v40)
// - Chap tomonda ixcham, TAGMA-TAG (ustma-ust) joylashgan 25 ta mavzu qatorlari
// - Mavzuni ustiga bosganda -> Ekranda FAQAT o'sha mavzuning o'zi 100% kenglikda!
// - "⬅ Orqaga" bosganda -> Yana chap tomonda Mavzular ro'yxati chiqadi!
// ==========================================================================

class TabiiyFanlarApp {
  constructor() {
    this.currentTopicId = 1;
    this.completedTopics = this.loadCompleted();
    this.notes = this.loadNotes();
    this.activeFilter = 'all';
    this.searchQuery = '';
    this.audioUtterance = null;
    this.htmlAudio = null;
    this.audioPlaying = false;
    this.audioRate = 1.0;
    this.audioCtx = null;
    this.iframeResizeObserver = null;

    this.initElements();
    this.initCanvas();
    this.initEventListeners();
    this.renderSidebar();
    this.loadTopic(1);
    this.updateOverallProgress();
    this.initAudioContext();
  }

  initElements() {
    this.mainContentArea = document.getElementById('main-content-area');
    this.topicsList = document.getElementById('topics-list');
    this.topicIframe = document.getElementById('topic-iframe');
    this.frameContainer = document.querySelector('.interactive-frame-container');
    this.frameLoader = document.getElementById('frame-loader');
    this.searchInput = document.getElementById('search-topics');
    this.filterChips = document.querySelectorAll('.chip-btn');

    // Top bar elements
    this.topicBadge = document.getElementById('topic-badge');
    this.topicTitle = document.getElementById('topic-title');
    this.topicCategory = document.getElementById('topic-category');
    this.btnPrev = document.getElementById('btn-prev');
    this.btnNext = document.getElementById('btn-next');
    this.btnComplete = document.getElementById('btn-complete');
    this.btnFullscreen = document.getElementById('btn-fullscreen');
    this.btnNewTab = document.getElementById('btn-newtab');
    this.btnReload = document.getElementById('btn-reload');

    // Back / Topics Navigation Buttons
    this.btnBackHeader = document.getElementById('btn-back-header');
    this.btnBackToTopics = document.getElementById('btn-back-to-topics');
    this.btnBottomBack = document.getElementById('btn-bottom-back');
    this.btnBottomNext = document.getElementById('btn-bottom-next');
    this.btnMobileToggle = document.getElementById('btn-mobile-sidebar');
    this.sidebar = document.getElementById('topics-sidebar');

    // Audio elements
    this.btnAudioToggle = document.getElementById('btn-audio-toggle');
    this.audioIcon = document.getElementById('audio-icon');
    this.soundWave = document.getElementById('sound-wave');
    this.audioSpeedSelect = document.getElementById('audio-speed');

    // Bottom panel tabs
    this.tabButtons = document.querySelectorAll('.panel-tab-btn');
    this.tabPanes = document.querySelectorAll('.tab-pane');
    this.fullTheoryText = document.getElementById('full-theory-text');
    this.keyPointsList = document.getElementById('key-points-list');
    this.realLifeAppBox = document.getElementById('real-life-app-box');
    this.funFactsList = document.getElementById('fun-facts-list');
    this.experimentBox = document.getElementById('experiment-box');
    this.quizContainer = document.getElementById('quiz-container');
    this.topicNotes = document.getElementById('topic-notes');
    this.btnSaveNotes = document.getElementById('btn-save-notes');

    // Progress
    this.progressFill = document.getElementById('progress-bar-fill');
    this.progressText = document.getElementById('progress-label-text');
    this.sidebarCount = document.getElementById('sidebar-count');

    // Modals
    this.modalHelp = document.getElementById('modal-help');
    this.modalLab = document.getElementById('modal-lab');
    this.modalBadges = document.getElementById('modal-badges');
    this.btnOpenHelp = document.getElementById('btn-open-help');
    this.btnOpenLab = document.getElementById('btn-open-lab');
    this.btnOpenBadges = document.getElementById('btn-open-badges');
  }

  initAudioContext() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.audioCtx = new AudioCtx();
      }
    } catch (e) { }
  }

  playBeep(freq = 520, type = 'sine', duration = 0.08) {
    if (!this.audioCtx) return;
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
    try {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);
      gain.gain.setValueAtTime(0.08, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + duration);
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start();
      osc.stop(this.audioCtx.currentTime + duration);
    } catch (e) { }
  }

  playSuccessChime() {
    this.playBeep(523.25, 'triangle', 0.1);
    setTimeout(() => this.playBeep(659.25, 'triangle', 0.1), 100);
    setTimeout(() => this.playBeep(783.99, 'triangle', 0.18), 200);
  }

  loadCompleted() {
    try {
      return JSON.parse(localStorage.getItem('tabiiy_fanlar_completed') || '[]');
    } catch (e) {
      return [];
    }
  }

  saveCompleted() {
    localStorage.setItem('tabiiy_fanlar_completed', JSON.stringify(this.completedTopics));
    this.updateOverallProgress();
  }

  loadNotes() {
    try {
      return JSON.parse(localStorage.getItem('tabiiy_fanlar_notes') || '{}');
    } catch (e) {
      return {};
    }
  }

  saveNotes() {
    localStorage.setItem('tabiiy_fanlar_notes', JSON.stringify(this.notes));
  }

  // ==========================================================================
  // FULL-SCREEN TOPIC FOCUS MODE vs SPLIT TOPICS LIST MODE
  // ==========================================================================

  openTopicFullScreen(id, pushHistory = true) {
    this.loadTopic(id);
    document.body.classList.add('topic-focused');
    if (this.mainContentArea) {
      this.mainContentArea.scrollTo({ top: 0, behavior: 'smooth' });
    }
    if (pushHistory && window.history && window.history.pushState) {
      try {
        window.history.pushState({ mode: 'topic-focused', topicId: id }, '', `#mavzu-${id}`);
      } catch (e) { }
    }
    setTimeout(() => this.adjustIframeHeight(), 150);
  }

  returnToTopicsView() {
    this.playBeep(420, 'sine', 0.05);
    document.body.classList.remove('topic-focused');
    this.updateSidebarActiveItem();
    setTimeout(() => this.adjustIframeHeight(), 150);
  }

  toggleTopicsSidebar() {
    if (document.body.classList.contains('topic-focused')) {
      this.returnToTopicsView();
    } else {
      document.body.classList.add('topic-focused');
      setTimeout(() => this.adjustIframeHeight(), 150);
    }
  }

  adjustIframeHeight() {
    if (!this.topicIframe || !this.frameContainer) return;
    if (this.frameContainer.classList.contains('fullscreen')) return;
    try {
      const doc = this.topicIframe.contentDocument || (this.topicIframe.contentWindow && this.topicIframe.contentWindow.document);
      if (!doc || !doc.body) return;
      const bodyHeight = Math.max(
        doc.body.scrollHeight || 0,
        doc.documentElement ? doc.documentElement.scrollHeight : 0,
        620
      );
      const targetHeight = Math.min(Math.max(bodyHeight + 24, 620), 6500);
      this.frameContainer.style.height = `${targetHeight}px`;
      this.topicIframe.style.height = `${targetHeight}px`;
    } catch (e) {
      this.frameContainer.style.height = '75vh';
    }
  }

  // ==========================================================================
  // RENDER COMPACT TAGMA-TAG TOPICS LIST (No boxy rectangles!)
  // ==========================================================================
  renderSidebar() {
    this.topicsList.innerHTML = '';
    const filtered = TOPICS_DATA.filter(t => {
      const matchesCat = this.activeFilter === 'all' || t.cat.toLowerCase() === this.activeFilter.toLowerCase();
      const matchesSearch = !this.searchQuery ||
        t.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        `${t.num}-mavzu`.includes(this.searchQuery.toLowerCase()) ||
        t.cat.toLowerCase().includes(this.searchQuery.toLowerCase());
      return matchesCat && matchesSearch;
    });

    this.sidebarCount.textContent = `${filtered.length}`;

    if (filtered.length === 0) {
      this.topicsList.innerHTML = `
        <div style="text-align:center; padding: 18px 4px; color: var(--text-dim); font-size: 11px;">
          Topilmadi
        </div>
      `;
      return;
    }

    filtered.forEach(topic => {
      const isCompleted = this.completedTopics.includes(topic.id);
      const isActive = topic.id === this.currentTopicId;

      const item = document.createElement('div');
      item.className = `topic-nav-item ${isActive ? 'active' : ''}`;
      item.dataset.id = topic.id;
      item.title = `${topic.num}-mavzu: ${topic.title} (${topic.cat})`;
      item.innerHTML = `
        <span class="t-num-pill">${topic.num}</span>
        <span class="t-row-text">${topic.icon} ${topic.title}</span>
        <span class="t-row-status ${isCompleted ? 'done' : ''}">${isCompleted ? '✓' : '›'}</span>
      `;

      // Clicking any topic opens ONLY that topic in 100% full-screen focus mode!
      item.addEventListener('click', () => {
        this.playBeep(440, 'sine', 0.05);
        this.openTopicFullScreen(topic.id, true);
      });

      this.topicsList.appendChild(item);
    });
  }

  // Load a Topic
  loadTopic(id) {
    const topic = TOPICS_DATA.find(t => t.id === id);
    if (!topic) return;

    this.currentTopicId = id;
    this.stopAudio();

    this.frameLoader.classList.add('active');

    this.topicBadge.textContent = `${topic.num}-MAVZU`;
    this.topicTitle.textContent = `${topic.icon} ${topic.title}`;
    this.topicCategory.textContent = topic.cat;

    this.btnPrev.disabled = (id === 1);
    this.btnNext.disabled = (id === TOPICS_DATA.length);
    if (this.btnBottomNext) {
      this.btnBottomNext.disabled = (id === TOPICS_DATA.length);
    }

    const isCompleted = this.completedTopics.includes(id);
    this.updateCompleteButton(isCompleted);

    if (this.iframeResizeObserver) {
      this.iframeResizeObserver.disconnect();
      this.iframeResizeObserver = null;
    }

    this.topicIframe.src = `topics/${topic.slug}`;
    this.topicIframe.onload = () => {
      setTimeout(() => {
        this.frameLoader.classList.remove('active');
        this.adjustIframeHeight();

        try {
          const doc = this.topicIframe.contentDocument || (this.topicIframe.contentWindow && this.topicIframe.contentWindow.document);
          if (doc && doc.body) {
            if ('ResizeObserver' in window) {
              this.iframeResizeObserver = new ResizeObserver(() => {
                this.adjustIframeHeight();
              });
              this.iframeResizeObserver.observe(doc.body);
            }
            doc.body.addEventListener('click', () => {
              setTimeout(() => this.adjustIframeHeight(), 120);
            });
          }
        } catch (e) { }
      }, 160);
    };

    this.renderEnrichedContent(topic);
    this.renderQuiz(topic);
    this.topicNotes.value = this.notes[topic.id] || '';
    this.updateSidebarActiveItem();
  }

  updateSidebarActiveItem() {
    const items = this.topicsList.querySelectorAll('.topic-nav-item');
    items.forEach(el => {
      if (parseInt(el.dataset.id) === this.currentTopicId) {
        el.classList.add('active');
        el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      } else {
        el.classList.remove('active');
      }
    });
  }

  renderEnrichedContent(topic) {
    if (this.fullTheoryText) {
      this.fullTheoryText.innerHTML = `
        <div style="font-weight:700; color:var(--accent); margin-bottom:4px; font-size:13.5px;">📖 Ilmiy Tushuntirish:</div>
        <div>${topic.fullTheory || topic.description}</div>
      `;
    }

    this.keyPointsList.innerHTML = '';
    (topic.keyPoints || []).forEach(point => {
      const card = document.createElement('div');
      card.className = 'key-point-card';
      card.innerHTML = `
        <span style="font-size: 15px; line-height: 1.2;">💡</span>
        <div>${point}</div>
      `;
      this.keyPointsList.appendChild(card);
    });

    if (this.realLifeAppBox) {
      if (topic.realLifeApp) {
        this.realLifeAppBox.innerHTML = `
          <div style="font-weight:700; color:var(--accent); margin-bottom:3px; display:flex; align-items:center; gap:5px;">
            <span>🌍</span> <span>Hayotda va Texnologiyada Qo'llanilishi:</span>
          </div>
          <div>${topic.realLifeApp}</div>
        `;
        this.realLifeAppBox.style.display = 'block';
      } else {
        this.realLifeAppBox.style.display = 'none';
      }
    }

    if (this.funFactsList) {
      this.funFactsList.innerHTML = '';
      if (topic.funFacts && topic.funFacts.length > 0) {
        topic.funFacts.forEach(fact => {
          const item = document.createElement('div');
          item.style.cssText = "background: rgba(245, 158, 11, 0.07); border-left: 3px solid var(--warning); padding: 9px 11px; border-radius: 7px; font-size: 13px; line-height: 1.5; color: var(--text-main); display: flex; gap: 8px;";
          item.innerHTML = `<span style="font-size:16px; line-height:1.2;">⚡</span> <div>${fact}</div>`;
          this.funFactsList.appendChild(item);
        });
      }
    }

    if (this.experimentBox) {
      if (topic.experiment) {
        this.experimentBox.innerHTML = `
          <div style="font-weight: 800; color: #34d399; font-size: 13.5px; margin-bottom: 4px; display: flex; align-items: center; gap: 6px;">
            <span>🔬</span> <span>${topic.experiment.title}</span>
          </div>
          <div style="font-size: 13px; line-height: 1.55; color: var(--text-main);">
            ${topic.experiment.steps}
          </div>
        `;
        this.experimentBox.style.display = 'block';
      } else {
        this.experimentBox.style.display = 'none';
      }
    }
  }

  renderQuiz(topic) {
    this.quizContainer.innerHTML = '';
    const quizState = { answered: 0, correct: 0 };

    topic.quiz.forEach((qItem, qIdx) => {
      const card = document.createElement('div');
      card.className = 'quiz-card';
      card.innerHTML = `
        <h4><span>${qIdx + 1}.</span> ${qItem.q}</h4>
        <div class="quiz-options">
          ${qItem.options.map((opt, optIdx) => `
            <button class="quiz-opt-btn" data-opt="${optIdx}">
              <span>${String.fromCharCode(65 + optIdx)}) ${opt}</span>
              <span class="opt-indicator"></span>
            </button>
          `).join('')}
        </div>
        <div class="quiz-explanation">${qItem.exp}</div>
      `;

      const buttons = card.querySelectorAll('.quiz-opt-btn');
      const expBox = card.querySelector('.quiz-explanation');

      buttons.forEach(btn => {
        btn.addEventListener('click', () => {
          const selectedIdx = parseInt(btn.dataset.opt);
          buttons.forEach(b => b.disabled = true);
          expBox.style.display = 'block';

          if (selectedIdx === qItem.answer) {
            btn.classList.add('correct');
            btn.querySelector('.opt-indicator').innerHTML = '✓';
            this.playBeep(659, 'sine', 0.08);
            quizState.correct++;
          } else {
            btn.classList.add('wrong');
            btn.querySelector('.opt-indicator').innerHTML = '✗';
            buttons[qItem.answer].classList.add('correct');
            buttons[qItem.answer].querySelector('.opt-indicator').innerHTML = '✓';
            this.playBeep(220, 'sawtooth', 0.12);
          }

          quizState.answered++;
          if (quizState.answered === topic.quiz.length) {
            if (quizState.correct === topic.quiz.length) {
              this.playSuccessChime();
              this.triggerConfetti();
              this.showToast("Barakalla! Barcha savollarga to'g'ri javob berdingiz! 🌟");
              if (!this.completedTopics.includes(topic.id)) {
                this.completedTopics.push(topic.id);
                this.saveCompleted();
                this.updateCompleteButton(true);
                this.renderSidebar();
              }
            } else {
              this.showToast(`Test yakunlandi: ${quizState.correct} / ${topic.quiz.length} ta to'g'ri`);
            }
          }
        });
      });

      this.quizContainer.appendChild(card);
    });
  }

  updateCompleteButton(isCompleted) {
    if (isCompleted) {
      this.btnComplete.classList.add('completed');
      this.btnComplete.innerHTML = '<span>✅</span> <span class="ctrl-label">Tugallangan</span>';
    } else {
      this.btnComplete.classList.remove('completed');
      this.btnComplete.innerHTML = '<span>⭕</span> <span class="ctrl-label">Tugallandi</span>';
    }
  }

  updateOverallProgress() {
    const total = TOPICS_DATA.length;
    const completed = this.completedTopics.length;
    const percent = Math.round((completed / total) * 100);

    this.progressFill.style.width = `${percent}%`;
    this.progressText.textContent = `${completed}/${total}`;
  }

  toggleAudio() {
    if (this.audioPlaying) {
      this.stopAudio();
      this.showToast("🔇 Ovoz to'xtatildi");
    } else {
      this.startAudio();
    }
  }

  startAudio() {
    this.stopAudio();
    const topic = TOPICS_DATA.find(t => t.id === this.currentTopicId);
    if (!topic) return;

    // Play pre-generated Pure Uzbek Male (uz-UZ-SardorNeural) MP3 audio file!
    const mp3Url = `audio/mavzu-${topic.id}.mp3?v=50`;
    this.htmlAudio = new Audio(mp3Url);
    this.htmlAudio.playbackRate = this.audioRate;

    this.htmlAudio.onplay = () => {
      this.audioPlaying = true;
      this.audioIcon.textContent = '⏸️';
      this.soundWave.classList.add('active');
      this.showToast(`🎙️ ${topic.num}-mavzu ovozli o'qilmoqda...`);
    };

    this.htmlAudio.onended = () => {
      this.stopAudio();
    };

    this.htmlAudio.onerror = () => {
      // Fallback to SpeechSynthesis if MP3 fails
      this.startFallbackSpeech(topic);
    };

    const playPromise = this.htmlAudio.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        this.startFallbackSpeech(topic);
      });
    }
  }

  startFallbackSpeech(topic) {
    if (!('speechSynthesis' in window)) {
      this.showToast("⚠️ Brauzeringizda ovoz rejimi qo'llab-quvvatlanmaydi");
      return;
    }
    window.speechSynthesis.cancel();
    setTimeout(() => {
      this.audioUtterance = new SpeechSynthesisUtterance(topic.audioScript);
      this.audioUtterance.rate = this.audioRate;
      this.audioUtterance.onstart = () => {
        this.audioPlaying = true;
        this.audioIcon.textContent = '⏸️';
        this.soundWave.classList.add('active');
      };
      this.audioUtterance.onend = () => this.stopAudio();
      this.audioUtterance.onerror = () => this.stopAudio();
      window.speechSynthesis.speak(this.audioUtterance);
    }, 60);
  }

  stopAudio() {
    if (this.htmlAudio) {
      try {
        this.htmlAudio.pause();
        this.htmlAudio.currentTime = 0;
      } catch (e) { }
      this.htmlAudio = null;
    }
    if ('speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel();
      } catch (e) { }
    }
    this.audioPlaying = false;
    if (this.audioIcon) this.audioIcon.textContent = '🔊';
    if (this.soundWave) this.soundWave.classList.remove('active');
  }

  triggerConfetti() {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100vw';
    canvas.style.height = '100vh';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '99999';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const pieces = [];
    const colors = ['#6366f1', '#06b6d4', '#10b981', '#f59e0b', '#ec4899', '#ffffff'];

    for (let i = 0; i < 90; i++) {
      pieces.push({
        x: canvas.width / 2,
        y: canvas.height / 2,
        vx: (Math.random() - 0.5) * 15,
        vy: (Math.random() - 0.7) * 16,
        size: Math.random() * 7 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        vr: (Math.random() - 0.5) * 10,
        gravity: 0.35,
        opacity: 1
      });
    }

    let frame = 0;
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pieces.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += p.gravity;
        p.rotation += p.vr;
        p.opacity -= 0.012;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, p.opacity);
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
      });

      frame++;
      if (frame < 110) {
        requestAnimationFrame(animate);
      } else {
        canvas.remove();
      }
    }
    requestAnimationFrame(animate);
  }

  showToast(msg) {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.className = 'toast-container';
      document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span>🔔</span> <span>${msg}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }

  drawCertificate(canvas, studentName) {
    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;

    const bgGrad = ctx.createLinearGradient(0, 0, w, h);
    bgGrad.addColorStop(0, '#0a0f24');
    bgGrad.addColorStop(0.5, '#141b3d');
    bgGrad.addColorStop(1, '#070b1a');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, w, h);

    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 8;
    ctx.strokeRect(20, 20, w - 40, h - 40);

    ctx.strokeStyle = 'rgba(212, 175, 55, 0.4)';
    ctx.lineWidth = 2;
    ctx.strokeRect(30, 30, w - 60, h - 60);

    ctx.textAlign = 'center';
    ctx.fillStyle = '#06b6d4';
    ctx.font = 'bold 16px "Inter", sans-serif';
    ctx.fillText('★ ★ ★ RASMIY TA’LIM HUJJATI ★ ★ ★', w / 2, 75);

    ctx.fillStyle = '#f8fafc';
    ctx.font = '800 38px "Inter", Georgia, sans-serif';
    ctx.fillText('SERTIFIKAT', w / 2, 125);

    ctx.fillStyle = '#94a3b8';
    ctx.font = '15px "Inter", sans-serif';
    ctx.fillText('6-SINF TABIIY FANLAR | INTERAKTIV RAQAMLI KURS', w / 2, 155);

    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(w / 2 - 180, 175);
    ctx.lineTo(w / 2 + 180, 175);
    ctx.stroke();

    ctx.fillStyle = '#cbd5e1';
    ctx.font = 'italic 16px "Inter", Georgia, serif';
    ctx.fillText('Ushbu sertifikat bilan tantanali ravishda taqdirlanadi:', w / 2, 215);

    ctx.fillStyle = '#ffd700';
    ctx.font = '800 32px "Inter", sans-serif';
    ctx.fillText(studentName, w / 2, 265);

    ctx.fillStyle = '#e2e8f0';
    ctx.font = '15px "Inter", sans-serif';
    ctx.fillText('Tabiiy fanlar bo‘yicha barcha 25 ta interaktiv darslar, virtual tajribalar,', w / 2, 310);
    ctx.fillText('laboratoriya sinovlari hamda mavzulashtirilgan testlarni a’lo darajada yakunlagani uchun.', w / 2, 335);

    const sealX = w / 2;
    const sealY = 415;
    ctx.beginPath();
    ctx.arc(sealX, sealY, 44, 0, Math.PI * 2);
    ctx.fillStyle = '#d4af37';
    ctx.fill();

    ctx.fillStyle = '#0a0f24';
    ctx.font = 'bold 11px "Inter", sans-serif';
    ctx.fillText('A’LO', sealX, sealY - 10);
    ctx.fillText('DARAJA', sealX, sealY + 4);
    ctx.font = 'bold 9px "Inter", sans-serif';
    ctx.fillText('★★★★★', sealX, sealY + 18);

    const dateStr = new Date().toLocaleDateString('uz-UZ');
    ctx.fillStyle = '#94a3b8';
    ctx.font = '13px "Inter", sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(`Berilgan sana: ${dateStr}`, 60, 460);
    ctx.fillText(`ID: TF-6-${Math.floor(100000 + Math.random() * 900000)}`, 60, 480);

    ctx.textAlign = 'right';
    ctx.fillText('Platforma Ilmiy Kengashi', w - 60, 460);
    ctx.fillText('Imzo: Tasdiqlangan ✓', w - 60, 480);
  }

  initCanvas() {
    const canvas = document.getElementById('space-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      this.adjustIframeHeight();
    });

    const stars = [];
    for (let i = 0; i < 80; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.4 + 0.4,
        alpha: Math.random() * 0.7 + 0.2,
        speed: Math.random() * 0.18 + 0.04
      });
    }

    function render() {
      ctx.clearRect(0, 0, width, height);
      stars.forEach(s => {
        s.y -= s.speed;
        if (s.y < 0) s.y = height;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${s.alpha})`;
        ctx.fill();
      });
      requestAnimationFrame(render);
    }
    render();
  }

  initEventListeners() {
    this.searchInput.addEventListener('input', (e) => {
      this.searchQuery = e.target.value.trim();
      this.renderSidebar();
    });

    this.filterChips.forEach(chip => {
      chip.addEventListener('click', () => {
        this.filterChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        this.activeFilter = chip.dataset.cat;
        this.renderSidebar();
      });
    });

    // BACK TO TOPICS BUTTONS ("⬅ Orqaga")
    if (this.btnBackHeader) {
      this.btnBackHeader.addEventListener('click', () => this.returnToTopicsView());
    }
    if (this.btnBackToTopics) {
      this.btnBackToTopics.addEventListener('click', () => this.returnToTopicsView());
    }
    if (this.btnBottomBack) {
      this.btnBottomBack.addEventListener('click', () => this.returnToTopicsView());
    }

    if (this.btnMobileToggle) {
      this.btnMobileToggle.addEventListener('click', () => this.toggleTopicsSidebar());
    }

    window.addEventListener('popstate', () => {
      if (document.body.classList.contains('topic-focused')) {
        this.returnToTopicsView();
      }
    });

    this.btnPrev.addEventListener('click', () => {
      if (this.currentTopicId > 1) {
        this.playBeep(400, 'sine', 0.06);
        this.loadTopic(this.currentTopicId - 1);
        if (this.mainContentArea) this.mainContentArea.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });

    this.btnNext.addEventListener('click', () => {
      if (this.currentTopicId < TOPICS_DATA.length) {
        this.playBeep(480, 'sine', 0.06);
        this.loadTopic(this.currentTopicId + 1);
        if (this.mainContentArea) this.mainContentArea.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });

    if (this.btnBottomNext) {
      this.btnBottomNext.addEventListener('click', () => {
        if (this.currentTopicId < TOPICS_DATA.length) {
          this.playBeep(480, 'sine', 0.06);
          this.loadTopic(this.currentTopicId + 1);
          if (this.mainContentArea) this.mainContentArea.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
    }

    this.btnComplete.addEventListener('click', () => {
      const id = this.currentTopicId;
      const idx = this.completedTopics.indexOf(id);
      if (idx > -1) {
        this.completedTopics.splice(idx, 1);
        this.updateCompleteButton(false);
        this.showToast("Mavzu o'rganilmagan holatiga qaytarildi");
      } else {
        this.completedTopics.push(id);
        this.updateCompleteButton(true);
        this.playSuccessChime();
        this.showToast("Mavzu muvaffaqiyatli yakunlandi! 🎉");
      }
      this.saveCompleted();
      this.renderSidebar();
    });

    this.btnFullscreen.addEventListener('click', () => {
      this.frameContainer.classList.toggle('fullscreen');
      this.btnFullscreen.innerHTML = this.frameContainer.classList.contains('fullscreen') ? '🗗' : '⛶';
      if (!this.frameContainer.classList.contains('fullscreen')) {
        this.adjustIframeHeight();
      }
    });

    this.btnNewTab.addEventListener('click', () => {
      const topic = TOPICS_DATA.find(t => t.id === this.currentTopicId);
      if (topic) {
        window.open(`topics/${topic.slug}`, '_blank');
      }
    });

    this.btnReload.addEventListener('click', () => {
      this.frameLoader.classList.add('active');
      this.topicIframe.src = this.topicIframe.src;
    });

    this.btnAudioToggle.addEventListener('click', () => this.toggleAudio());
    this.audioSpeedSelect.addEventListener('change', (e) => {
      this.audioRate = parseFloat(e.target.value);
      if (this.htmlAudio) {
        this.htmlAudio.playbackRate = this.audioRate;
      } else if (this.audioPlaying) {
        this.startAudio();
      }
    });

    this.tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        this.tabButtons.forEach(b => b.classList.remove('active'));
        this.tabPanes.forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        const targetPane = document.getElementById(btn.dataset.tab);
        if (targetPane) targetPane.classList.add('active');
      });
    });

    this.btnSaveNotes.addEventListener('click', () => {
      this.notes[this.currentTopicId] = this.topicNotes.value;
      this.saveNotes();
      this.playBeep(520, 'sine', 0.08);
      this.showToast("Qaydlar xotirada saqlandi! 📝");
    });

    const themeSelect = document.getElementById('theme-select');
    if (themeSelect) {
      themeSelect.addEventListener('change', (e) => {
        document.documentElement.setAttribute('data-theme', e.target.value);
      });
    }

    const setupModal = (btn, modal) => {
      if (!btn || !modal) return;
      btn.addEventListener('click', () => modal.classList.add('active'));
      const close = modal.querySelector('.modal-close-btn');
      if (close) close.addEventListener('click', () => modal.classList.remove('active'));
      modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('active');
      });
    };

    setupModal(this.btnOpenHelp, this.modalHelp);
    setupModal(this.btnOpenLab, this.modalLab);
    setupModal(this.btnOpenBadges, this.modalBadges);

    const btnGenCert = document.getElementById('btn-generate-cert');
    const btnPrintCert = document.getElementById('btn-print-cert');
    const certInput = document.getElementById('cert-student-name');
    const certWrapper = document.getElementById('cert-preview-wrapper');
    const certCanvas = document.getElementById('cert-canvas');

    if (btnGenCert && certCanvas) {
      btnGenCert.addEventListener('click', () => {
        const studentName = certInput.value.trim() || "Bilimdon O'quvchi";
        this.drawCertificate(certCanvas, studentName);
        certWrapper.style.display = 'block';
        if (btnPrintCert) btnPrintCert.style.display = 'inline-flex';
        this.playSuccessChime();
        this.triggerConfetti();
        this.showToast("Sertifikat muvaffaqiyatli tayyorlandi! 🎓");
      });
    }

    if (btnPrintCert && certCanvas) {
      btnPrintCert.addEventListener('click', () => {
        const imgUrl = certCanvas.toDataURL('image/png');
        const printWin = window.open('', '_blank');
        if (printWin) {
          printWin.document.write(`
            <html>
              <head><title>Sertifikat - 6-sinf Tabiiy Fanlar</title></head>
              <body style="margin:0; display:flex; align-items:center; justify-content:center; height:100vh; background:#000;">
                <img src="${imgUrl}" style="max-width:98%; max-height:98%; border-radius:10px; box-shadow:0 0 20px #fff4;" />
                <script>setTimeout(() => { window.print(); }, 500);<\/script>
              </body>
            </html>
          `);
          printWin.document.close();
        }
      });
    }

    window.addEventListener('keydown', (e) => {
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;
      if (e.key === 'ArrowLeft') {
        if (this.currentTopicId > 1) this.loadTopic(this.currentTopicId - 1);
      } else if (e.key === 'ArrowRight') {
        if (this.currentTopicId < TOPICS_DATA.length) this.loadTopic(this.currentTopicId + 1);
      } else if (e.key === 'Escape') {
        if (document.body.classList.contains('topic-focused')) {
          this.returnToTopicsView();
        }
      } else if (e.key === '/') {
        e.preventDefault();
        this.searchInput.focus();
      } else if (e.key.toLowerCase() === 'f') {
        this.btnFullscreen.click();
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.app = new TabiiyFanlarApp();
});
