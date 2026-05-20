(function () {

  // =========================
  // FORCE SCROLL TOP ON LOAD
  // =========================
  function forceScrollTop() {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }

  // 防止浏览器“记忆滚动位置”
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }

  // 页面加载时回到顶部
  window.addEventListener("load", forceScrollTop);

  // 备用：DOMContentLoaded 也执行一次（防止某些浏览器延迟）
  document.addEventListener("DOMContentLoaded", forceScrollTop);

})();