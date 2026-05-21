(async function () {
  // =========================
  // ACCESS GUARD
  // =========================
  const access = sessionStorage.getItem("reverie_access");

  if (!access) {
    window.location.replace("gate.html");
    return;
  }

  const SUPABASE_URL = "https://jpgcsxgbtciermeahsjm.supabase.co/";
  const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpwZ2NzeGdidGNpZXJtZWFoc2ptIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkyNzk2ODQsImV4cCI6MjA5NDg1NTY4NH0.GzekIuan0SljFjsZGJKr4II3r9xxHTk0srd5aV4_suA";

  const headers = {
    apikey: SUPABASE_KEY,
    Authorization: `Bearer ${SUPABASE_KEY}`
  };

  const chapterTitle = document.getElementById("chapterTitle");
  const contentBox = document.getElementById("contentBox");

  let data = null;
  let chapterIndex = 0;
  let bookId = null;

  // =========================
  // LOAD CHAPTERS FROM SUPABASE
  // =========================
  async function loadIndex() {

    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/chapters?book_id=eq.${bookId}&order=chapter_index.asc`,
      { headers }
    );

    if (!res.ok) {
      contentBox.innerHTML = `
        <div class="empty">
          // ARCHIVE ERROR //<br><br>
          INDEX CORRUPTED OR MISSING<br>
          STATUS: ${res.status}
        </div>
      `;
      return null;
    }

    return await res.json();
  }

  // =========================
  // LOAD SINGLE CHAPTER
  // =========================
  async function loadChapter(chapter) {

    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/chapters?id=eq.${chapter.id}&book_id=eq.${bookId}&select=*`,
      { headers }
    );

    if (!res.ok) {
      contentBox.innerHTML = `
        <div class="empty">
          // ARCHIVE ERROR //<br><br>
          NODE: ${chapter.id}<br>
          STATUS: ${res.status}
        </div>
      `;
      return;
    }

    const data = await res.json();
    const ch = data?.[0];

    if (!ch) {
      contentBox.innerHTML = `
        <div class="empty">
          // ARCHIVE ERROR //<br><br>
          NODE NOT FOUND
        </div>
      `;
      return;
    }

    const mdText = ch.content || "";

    const html = mdText
      .replace(/\r\n/g, "\n")
      .split("\n")
      .map(line => {
        if (line.trim() === "") return `<br>`;
        return `<p>${line}</p>`;
      })
      .join("");

    contentBox.innerHTML = html;

    // =========================
    // PRELOAD NEXT
    // =========================
    const next = data[chapterIndex + 1];
    if (next) {
      fetch(
        `${SUPABASE_URL}/rest/v1/chapters?id=eq.${next.id}&book_id=eq.${bookId}`,
        { headers }
      );
    }
  }

  // =========================
  // RENDER CHAPTER
  // =========================
  function renderChapter(index) {

    const chapter = data[index];
    if (!chapter) return;

    chapterIndex = index;

    const url = new URL(window.location);
url.searchParams.set("book", bookId);
url.searchParams.set("chapter", chapter.id);
    history.pushState({}, "", url);

    chapterTitle.textContent = chapter.title;

    loadChapter(chapter);
  }

  function go(i) {
    renderChapter(i);
  }

  // =========================
  // INIT
  // =========================
  window.addEventListener("DOMContentLoaded", async () => {

    const params = new URLSearchParams(window.location.search);

    bookId = params.get("book") || "tne";

    data = await loadIndex();
    if (!data) return;

    const chapterId = params.get("chapter") || data[0].id;

    chapterIndex = data.findIndex(c => c.id === chapterId);

    if (chapterIndex === -1) {
      contentBox.innerHTML = `
        <div class="empty">
          // ARCHIVE ERROR //<br><br>
          NODE NOT FOUND
        </div>
      `;
      return;
    }

    renderChapter(chapterIndex);

    // =========================
    // BUTTONS
    // =========================
    const prevTop = document.getElementById("prevTop");
    const prevBottom = document.getElementById("prevBottom");
    const nextTop = document.getElementById("nextTop");
    const nextBottom = document.getElementById("nextBottom");

    if (prevTop) prevTop.onclick = () => go(chapterIndex - 1);
    if (prevBottom) prevBottom.onclick = () => go(chapterIndex - 1);

    if (nextTop) nextTop.onclick = () => go(chapterIndex + 1);
    if (nextBottom) nextBottom.onclick = () => go(chapterIndex + 1);

    const backBtn = document.getElementById("backBtn");

    if (backBtn) {
      backBtn.onclick = () => {
        window.location.href = `/page/book.html?id=${bookId}`;
      };
    }

  });

})();