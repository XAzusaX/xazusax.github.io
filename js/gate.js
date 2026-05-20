const input = document.getElementById("codeInput");
const status = document.getElementById("status");

const PASSWORD = "Azusa";
let locked = false;

// =========================
// ERROR STATE
// =========================
function setError() {
  status.textContent = "ACCESS DENIED";
  status.className = "status error";
}

// =========================
// SUCCESS STATE
// =========================
function setGranted() {
  status.textContent = "ACCESS GRANTED";
  status.className = "status ok";

  // 🔐 只有成功才写入权限
  sessionStorage.setItem("reverie_access", "true");

  setTimeout(() => {
    window.location.href = "novel.html";
  }, 600);
}

// =========================
// INPUT HANDLER
// =========================
input.addEventListener("keydown", (e) => {
  if (e.key !== "Enter") return;

  const value = input.value.trim();

  // 防止连续触发
  if (locked) return;
  locked = true;

  if (value === PASSWORD) {
    setGranted();
  } else {
    setError();

    // 失败后短暂解锁
    setTimeout(() => {
      locked = false;
    }, 500);
  }
});