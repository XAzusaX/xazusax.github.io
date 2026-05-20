(function () {

  // =========================
  // ACCESS GUARD
  // =========================
  const access = sessionStorage.getItem("reverie_access");

  if (!access) {
    window.location.replace("gate.html");
    return;
  }

  // =========================
  // ELEMENTS
  // =========================
  const nav = document.querySelector(".nav");
  const hero = document.querySelector(".hero");
  const reveals = document.querySelectorAll(".reveal");

  // =========================
  // SCROLL CORE
  // =========================
  function onScroll() {
    const scrollY = window.scrollY;
    const trigger = window.innerHeight * 0.85;

    if (nav) {
      nav.classList.toggle("scrolled", scrollY > 20);
    }

    if (hero) {
      hero.classList.toggle(
        "hide",
        scrollY > window.innerHeight * 0.5
      );
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

  // =========================
  // GLOBAL HOOK
  // =========================
  window.ReverieArchive = {
    unlocked: true,
    getState: () => ({
      access: sessionStorage.getItem("reverie_access"),
      time: new Date().toISOString()
    })
  };

  // =========================
  // TYPEWRITER QUOTE
  // =========================
  const el = document.getElementById("libQuote");

  if (el) {
    const quotes = [
      "A place where stories are carefully stored.",
      "Every fragment here once meant something.",
      "You are entering a structured archive of fiction.",
      "Pages arranged by memory, not time.",
      "This library holds stories waiting to be chosen.",
      "A quiet collection of readable worlds.",
      "Each entry is a doorway into something preserved.",
      "Stories here are organized, not lost.",
      "A catalog of unfinished universes.",
      "Some stories only exist when selected.",
      "This space remembers every written path.",
      "A library built from imagined echoes.",
      "Every cover hides a world behind it.",
      "You are browsing fragments of narrative memory.",
      "Not all stories are visible at first glance.",
      "Some entries require curiosity to unlock.",
      "This archive classifies what was once created.",
      "Each selection leads deeper into structure.",
      "A shelf of silent narratives waiting for attention.",
      "Here, stories are not read randomly — they are chosen."
    ];

    const pick = () => quotes[Math.floor(Math.random() * quotes.length)];

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
  }
  // =========================
// 🚀 DYNAMIC LIBRARY SYSTEM
// =========================

async function loadLibrary() {
  const grid = document.querySelector(".library-grid");
  if (!grid) return;

  try {
    const res = await fetch("../data/library.json");
    const data = await res.json();

    grid.innerHTML = "";

    data.books.forEach(book => {
      const a = document.createElement("a");

      a.className = "novel-card large";
      a.href = book.link;

      // meta data（以后可以做过滤/分类用）
      a.dataset.id = book.id;
      a.dataset.status = book.status;

      // cover
      const cover = document.createElement("div");
      cover.className = "cover";

      if (book.cover) {
        cover.style.backgroundImage = `url('${book.cover}')`;
        cover.style.backgroundSize = "cover";
        cover.style.backgroundPosition = "center";
        cover.dataset.cover = "img";
      } else {
        cover.dataset.cover = "N/A";
      }

      // info
      const info = document.createElement("div");
      info.className = "info";

      const h3 = document.createElement("h3");
      h3.textContent = book.title;

      const p = document.createElement("p");
      p.textContent = book.desc;

      info.appendChild(h3);
      info.appendChild(p);

      a.appendChild(cover);
      a.appendChild(info);

      grid.appendChild(a);
    });

  } catch (err) {
    console.warn("Library load failed:", err);
  }
}

// init
window.addEventListener("DOMContentLoaded", loadLibrary);

})();