// =========================
// HOME TYPEWRITER FIXED
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
  "Fragments remain even after deletion.",
  "Not all entries were meant to be read.",
  "A story is just memory refusing to disappear.",
  "You were never supposed to find this page.",
  "Lost data still dreams in loops.",
  "Some records return without origin.",
  "The archive does not forget, only hides.",
  "What is missing still leaves traces.",
  "Between pages, something still exists.",
  "This system remembers what you erased.",
  "Unread pages are still part of the story.",
  "A quiet error in the structure of memory.",
  "Nothing here is fully gone.",
  "Even broken files continue to echo."
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

  window.addEventListener("DOMContentLoaded", () => {
    typeWriter(pick());
  });
})();

// =========================
// ELEMENTS CACHE (HOME UI)
// =========================
const nav = document.querySelector(".nav");
const hero = document.querySelector(".hero");
const reveals = document.querySelectorAll(".reveal");


// =========================
// SCROLL HANDLER
// =========================
function onScroll() {
  const scrollY = window.scrollY;
  const trigger = window.innerHeight * 0.85;

  // NAV EFFECT
  if (nav) {
    nav.classList.toggle("scrolled", scrollY > 20);
  }

  // HERO HIDE
  if (hero) {
    hero.classList.toggle(
      "hide",
      scrollY > window.innerHeight * 0.6
    );
  }

  // REVEAL SYSTEM
  reveals.forEach((el) => {
    const top = el.getBoundingClientRect().top;

    if (top < trigger) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
}


// =========================
// INIT HOME
// =========================
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();


// ======================================================
// 404 MODULE (ISOLATED SAFE ZONE)
// ======================================================
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

  function typeWriter() {
    let text = pickQuote();
    let i = 0;

    quoteEl404.textContent = "";

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

  window.addEventListener("load", () => {
    typeWriter();
    glitchLoop();
  });
})();