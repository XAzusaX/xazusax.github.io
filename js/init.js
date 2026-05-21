(function () {

  function forceScrollTop() {
    window.scrollTo(0, 0);
  }

  // 防止浏览器记忆滚动位置
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }

  // 用 pageshow（更稳！解决 bfcache 问题）
  window.addEventListener("pageshow", forceScrollTop);

})();