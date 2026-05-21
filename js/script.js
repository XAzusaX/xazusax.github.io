
// =========================
// HOME TYPEWRITER
// =========================
(function () {
  const el = document.getElementById("homeQuote");
  if (!el) return;

  const quotes = [
    "Some stories are never finished, only paused.",
    "A quiet world built from words.",
    "You are now entering a private archive.",
    "Every page remembers you.",
    "Stories exist where memory fades.",
    "This archive breathes in silence.",
    "A collection of moments that never disappeared.",
    "Where memories are stored, not lost.",
    "Pages turn even when no one is watching.",
    "A place built from forgotten thoughts.",
    "Stories wait patiently to be read.",
    "This archive holds what time left behind.",
    "Not everything written is meant to end.",
    "Some pages only exist in quiet spaces.",
    "A record of things that once mattered.",
    "Each entry is a trace of presence.",
    "You are standing inside preserved time.",
    "Words here are kept, not forgotten.",
    "A soft archive of unfinished thoughts.",
    "This is where silence becomes structure."
  ];

  function pick() {
    return quotes[Math.floor(Math.random() * quotes.length)];
  }

  function typeWriter(text) {
    el.textContent = "";
    let i = 0;

    function step() {
      if (i < text.length) {
        el.textContent += text[i++];
        setTimeout(step, 45);
      }
    }

    step();
  }

  // 🔥 改成「立即執行」避免 DOMContentLoaded miss
  typeWriter(pick());
})();


// =========================
// MOBILE MENU
// =========================
(function () {

  function initMenu() {
    const hamburger = document.getElementById("hamburger");
    const sideMenu = document.getElementById("sideMenu");
    const overlay = document.getElementById("overlay");

    if (!hamburger || !sideMenu || !overlay) return;

    function toggle() {
      hamburger.classList.toggle("active");
      sideMenu.classList.toggle("active");
      overlay.classList.toggle("active");
    }

    hamburger.addEventListener("click", toggle);
    overlay.addEventListener("click", toggle);
  }

  // 等 DOM + nav 注入完成
  window.addEventListener("DOMContentLoaded", () => {
    setTimeout(initMenu, 0);
  });

})();

// =========================
// SCROLL SYSTEM
// =========================
(function () {
  const nav = document.querySelector(".nav");
  const hero = document.querySelector(".hero");
  const reveals = document.querySelectorAll(".reveal");

  function onScroll() {
    const scrollY = window.scrollY;
    const trigger = window.innerHeight * 0.85;

    if (nav) {
      nav.classList.toggle("scrolled", scrollY > 20);
    }

    if (hero) {
      hero.classList.toggle("hide", scrollY > window.innerHeight * 0.6);
    }

    reveals.forEach((el) => {
      const top = el.getBoundingClientRect().top;

      if (top < trigger) {
        el.classList.add("active");
      } else {
        el.classList.remove("active");
      }
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("load", onScroll);

  onScroll();
})();


// =========================
// INIT (SAFE VERSION)
// =========================
window.addEventListener("DOMContentLoaded", () => {
  if (typeof loadLatestUpdates === "function") {
    loadLatestUpdates();
  }

  if (typeof loadLibrary === "function") {
    loadLibrary();
  }
});


// =========================
// 404 MODULE
// =========================
(function () {
  const quoteEl404 = document.getElementById("randomQuote");
  if (!quoteEl404) return;

  const quoteList = [
    "This fragment cannot be located in the archive.",
    "Memory index corrupted. Attempting recovery...",
    "You are reading a missing page.",
    "Signal lost between chapters.",
    "This record has been erased or never existed.",
    "Archive node returned null.",
    "Section unreachable: data stream interrupted.",
    "No matching record found in active memory.",
    "Fragment drift detected across timeline layers.",
    "Unable to resolve origin of this entry.",
    "Checksum failed. Content integrity compromised.",
    "Access denied: sealed by system override.",
    "Temporal offset exceeds safe retrieval range.",
    "Node response delayed indefinitely.",
    "Archive chain broken at segment 03.",
    "Partial data recovered. Remaining content missing.",
    "Memory echo detected but unreadable.",
    "Index pointer loops with no valid target.",
    "System cannot confirm existence of this page.",
    "Retrieval process terminated unexpectedly."
  ];

  function pickQuote() {
    return quoteList[Math.floor(Math.random() * quoteList.length)];
  }

  function typeWriter404(text) {
    quoteEl404.textContent = "";
    let i = 0;

    function step() {
      if (i < text.length) {
        quoteEl404.textContent += text[i++];
        setTimeout(step, 45);
      }
    }

    step();
  }

  function glitchLoop() {
    setInterval(() => {
      if (Math.random() > 0.7) {
        quoteEl404.style.opacity = "0.6";
        setTimeout(() => {
          quoteEl404.style.opacity = "1";
        }, 80);
      }
    }, 1200);
  }

  // 🔥 同樣改成立即執行，避免 load timing 問題
  typeWriter404(pickQuote());
  glitchLoop();
})();

(function () {

  const backButton = document.getElementById("backButton");
  if (!backButton) return;

  backButton.addEventListener("click", (e) => {
    e.preventDefault();

    // 有上一頁
    if (history.length > 1) {
      history.back();
    }

    // 沒上一頁 → 回首頁
    else {
      window.location.href = "/index.html";
    }
  });

})();