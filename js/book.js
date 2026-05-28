(async function () {
  // =========================
  // ACCESS GUARD
  // =========================
  const access = sessionStorage.getItem("reverie_access");

  if (!access) {
    window.location.replace("gate.html");
    return;
  }
  
  // =========================
  // SUPABASE CONFIG
  // =========================
  const SUPABASE_URL = "https://jpgcsxgbtciermeahsjm.supabase.co/";
  const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpwZ2NzeGdidGNpZXJtZWFoc2ptIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkyNzk2ODQsImV4cCI6MjA5NDg1NTY4NH0.GzekIuan0SljFjsZGJKr4II3r9xxHTk0srd5aV4_suA";

  const headers = {
    apikey: SUPABASE_KEY,
    Authorization: `Bearer ${SUPABASE_KEY}`
  };

  // =========================
  // GET BOOK ID
  // =========================
  const urlParams = new URLSearchParams(window.location.search);
  const bookId = urlParams.get("id");

  const isOATH = bookId === "oathborne";
  const isTNE = bookId === "tne";

  // =========================
  // DOM CACHE
  // =========================
  const titleEl = document.getElementById("bookTitle");
  const codeEl = document.getElementById("bookCode");
  const statusEl = document.getElementById("bookStatus");
  const descEl = document.getElementById("bookDesc");
  const coverEl = document.getElementById("bookCover");
  const metaEl = document.getElementById("bookMeta");
  const chapterEl = document.getElementById("chapterList");

  let book = null;

  // =========================
  // FETCH FROM SUPABASE
  // =========================
  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/books?id=eq.${bookId}&select=*`,
      { headers }
    );

    if (!res.ok) throw new Error(res.status);

    const data = await res.json();
    book = data?.[0];

  } catch (err) {
    console.error("BOOK LOAD FAILED", err);
    titleEl.textContent = "ARCHIVE ERROR";
    descEl.textContent = "DATABASE CORRUPTED OR UNREACHABLE";
    return;
  }

  if (!book) {
    titleEl.textContent = "ARCHIVE NODE NOT FOUND";
    descEl.textContent = "The requested record does not exist.";
    return;
  }

  // =========================
  // BASIC INFO
  // =========================
  titleEl.textContent = book.title || "UNKNOWN TITLE";
  codeEl.textContent = `ARCHIVE NODE / ${book.code || book.id}`;
  statusEl.textContent = book.status || "UNKNOWN";
  descEl.textContent = book.description || "No description available.";

  // ⭐ NEW: DYNAMIC TAB TITLE
  document.title = book.title || "UNKNOWN";
  // =========================
  // COVER
  // =========================
  if (book["cover-p"]) {
    coverEl.style.backgroundImage = `url(${book["cover-p"]})`;
    coverEl.style.backgroundSize = "cover";
    coverEl.style.backgroundPosition = "center";
  }

  // =========================
  // META SYSTEM
  // =========================
  metaEl.innerHTML = "";

  const chapterCountDisplay = isOATH
    ? "██"
    : (book.chapters?.length || 0);

  const defaultMeta = [
    { label: "TYPE", value: "ARCHIVE ENTRY" },
    { label: "STATUS", value: book.status || "UNKNOWN" },
    { label: "CHAPTERS", value: chapterCountDisplay },
    { label: "SYNC", value: "SUPABASE NODE" }
  ];

  const metaData = Array.isArray(book.meta) && book.meta.length
    ? book.meta.map(m => {
        if (m.label === "CHAPTERS" && isOATH) {
          return { ...m, value: "██" };
        }
        if (m.label === "CHAPTERS" && !isOATH) {
          return { ...m, value: book.chapters?.length || 0 };
        }
        return m;
      })
    : defaultMeta;

  metaData.forEach(item => {
    const div = document.createElement("div");
    div.className = "meta-item";

    div.innerHTML = `
      <div class="meta-label">${item.label}</div>
      <div class="meta-value">${item.value}</div>
    `;

    metaEl.appendChild(div);
  });

  // =========================
  // CHAPTER LIST
  // =========================
  chapterEl.innerHTML = "";

  const chapters = book.chapters || [];

  chapters.forEach((ch, index) => {

    const a = document.createElement("a");
    a.className = "chapter";

    const indexLabel = isOATH
      ? "██"
      : String(index + 1).padStart(2, "0");

    const isLockedNode =
      (isTNE && (ch.id === "c35" || ch.title === "FILE CORRUPTED")) ||
      (isOATH && (ch.id === "null" || ch.title === "NULL"));

    a.href = isLockedNode
      ? "#"
      : `/page/reader.html?book=${book.id}&chapter=${ch.id}`;

    a.textContent = `[${indexLabel}] ${ch.title}`;

    if (isLockedNode) {
      a.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
      });

      a.style.cursor = "not-allowed";
      a.style.opacity = "0.7";
    }

    chapterEl.appendChild(a);
  });

})();