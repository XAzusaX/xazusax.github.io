(function () {

  const navHTML = `
    <header class="nav">

      <a href="/index.html" class="logo">
        <img src="/assets/logo.png" alt="logo" />
        <span>Reverie Archive</span>
      </a>
      
      <div class="hamburger" id="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>

    </header>

    <div class="overlay" id="overlay"></div>

    <div class="side-menu" id="sideMenu">
      <a href="/index.html" class="menu-item">
        <img src="/assets/icons/home.svg" class="icon" />
        <span>Home</span>
      </a>
      <a href="/page/abt.html" class="menu-item">
          <img src="/assets/icons/abt.svg" class="icon" />
          <span>About</span>
      </a>
      <a href="/page/ptf.html" class="menu-item">
          <img src="/assets/icons/ptf.svg" class="icon" />
          <span>Portfolio</span>
      </a>
      <a href="/page/lib.html" class="menu-item">
        <img src="/assets/icons/lib.svg" class="icon" />
        <span>Library</span>
      </a>


    </div>
  `;

  document.getElementById("nav").innerHTML = navHTML;

})();

(function () {

  const footerHTML = `
    <footer class="footer reveal">

      <p>© 2026 Reverie Archive</p>

      <p class="sub">
        Built quietly with code, design, and imagination.
      </p>

      <div class="footer-links">
        <a href="https://github.com/XAzusaX">
        <img src="/assets/icons/git.svg" class="icon" />
        GitHub</a>
        <a href="mailto:acexmrealm@gmail.com">
        <img src="/assets/icons/mail.svg" class="icon" />
        Contact</a>
      </div>

    </footer>
  `;

  const el = document.getElementById("footer");
  if (el) {
    el.innerHTML = footerHTML;
  }
  
})();