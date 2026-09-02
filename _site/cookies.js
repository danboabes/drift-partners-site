/* DRIFT Partners — cookie consent.
   Google Analytics loads only after an explicit Accept.
   Choice is stored per browser and can be changed from the footer. */
(function () {
  "use strict";

  var GA_ID = "G-G1VZH0KQ2G";
  var KEY = "drift_cookie_consent";

  function read() {
    try { return window.localStorage.getItem(KEY); } catch (e) { return null; }
  }
  function write(value) {
    try { window.localStorage.setItem(KEY, value); } catch (e) { /* private mode */ }
  }

  function loadAnalytics() {
    if (window.gtag) return;
    var s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag("js", new Date());
    window.gtag("config", GA_ID);
  }

  function clearAnalyticsCookies() {
    var host = location.hostname;
    var domains = [host, "." + host, "." + host.split(".").slice(-2).join(".")];
    document.cookie.split(";").forEach(function (raw) {
      var name = raw.split("=")[0].trim();
      if (name.indexOf("_ga") !== 0 && name.indexOf("_gid") !== 0) return;
      domains.forEach(function (d) {
        document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=" + d;
      });
      document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
    });
  }

  var STYLE = [
    '.drift-cc{position:fixed;left:0;right:0;bottom:0;z-index:9999;',
    'background:#f4f1ea;border-top:1px solid #c9c2b3;',
    'box-shadow:0 -8px 24px rgba(20,17,13,.06);',
    "font-family:'Source Serif 4','Source Serif Pro',Georgia,serif;color:#14110d;}",
    '.drift-cc-in{max-width:1280px;margin:0 auto;padding:20px 56px;',
    'display:flex;align-items:center;justify-content:space-between;gap:32px;flex-wrap:wrap;}',
    '.drift-cc-text{font-size:16px;line-height:1.5;max-width:62ch;}',
    '.drift-cc-text a{color:#7a2e1f;text-underline-offset:3px;}',
    '.drift-cc-btns{display:flex;gap:12px;flex-shrink:0;}',
    ".drift-cc-btn{font-family:'JetBrains Mono',ui-monospace,monospace;font-size:14px;",
    'letter-spacing:.1em;text-transform:uppercase;padding:11px 20px;cursor:pointer;',
    'background:transparent;color:#14110d;border:1px solid #14110d;border-radius:0;',
    'transition:background 150ms ease,color 150ms ease;}',
    '.drift-cc-btn:hover{background:#14110d;color:#f4f1ea;}',
    '.drift-cc-btn:focus-visible{outline:2px solid #7a2e1f;outline-offset:2px;}',
    '@media (max-width:720px){.drift-cc-in{padding:18px 24px;gap:18px;}',
    '.drift-cc-text{font-size:15px;}.drift-cc-btns{width:100%;}',
    '.drift-cc-btn{flex:1;text-align:center;}}',
    '@media (prefers-reduced-motion:reduce){.drift-cc-btn{transition:none;}}'
  ].join("");

  var bar = null;

  function close() {
    if (bar && bar.parentNode) bar.parentNode.removeChild(bar);
    bar = null;
  }

  function show() {
    if (bar) return;
    if (!document.getElementById("drift-cc-style")) {
      var st = document.createElement("style");
      st.id = "drift-cc-style";
      st.textContent = STYLE;
      document.head.appendChild(st);
    }
    bar = document.createElement("div");
    bar.className = "drift-cc";
    bar.setAttribute("role", "dialog");
    bar.setAttribute("aria-label", "Cookies");
    bar.innerHTML =
      '<div class="drift-cc-in">' +
        '<div class="drift-cc-text">We use Google Analytics to count visits to this site. ' +
        'It sets cookies on your device. Nothing here is used for advertising. ' +
        '<a href="/privacy">Privacy Policy</a></div>' +
        '<div class="drift-cc-btns">' +
          '<button type="button" class="drift-cc-btn" data-cc="decline">Decline</button>' +
          '<button type="button" class="drift-cc-btn" data-cc="accept">Accept</button>' +
        '</div>' +
      '</div>';
    bar.addEventListener("click", function (e) {
      var choice = e.target && e.target.getAttribute && e.target.getAttribute("data-cc");
      if (!choice) return;
      if (choice === "accept") { write("accepted"); loadAnalytics(); }
      else { write("declined"); clearAnalyticsCookies(); }
      close();
    });
    document.body.appendChild(bar);
    var first = bar.querySelector(".drift-cc-btn");
    if (first) first.focus();
  }

  function start() {
    var choice = read();
    if (choice === "accepted") { loadAnalytics(); return; }
    if (choice === "declined") { return; }
    show();
  }

  window.driftCookies = {
    reopen: function () { show(); },
    status: function () { return read() || "not set"; }
  };

  document.addEventListener("click", function (e) {
    var t = e.target;
    if (t && t.closest && t.closest('[data-cookie-settings]')) {
      e.preventDefault();
      show();
    }
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
