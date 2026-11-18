/* Shared code for every page of "for my princess Gulu". */
(function () {
  var PASSWORD = "260525";            // change here if you ever want a new password
  var TOGETHER_SINCE = [2025, 5, 26]; // year, month, day (used for the days-together counter)
  var INK = "#46304f";

  var root = document.documentElement;
  var page = root.getAttribute("data-page");

  // Everything except the first page needs the password to have been entered.
  if (page && page !== "gate") {
    try { if (sessionStorage.getItem("gulu_ok") !== "1") location.replace("index.html"); } catch (e) {}
  }

  var S = {
    heart: '<svg viewBox="0 0 64 64"><path d="M32 58C6 40 4 22 14 12 22 4 31 8 32 16 33 8 42 4 50 12 60 22 58 40 32 58Z" fill="#ff6fa3" stroke="' + INK + '" stroke-width="2.5" stroke-linejoin="round"/><path d="M14 20c1-4 4-6 8-6" stroke="#fff" stroke-width="3" stroke-linecap="round" fill="none" opacity=".8"/></svg>',
    star: '<svg viewBox="0 0 64 64"><path d="M32 5 40 24 61 25 45 39 51 59 32 48 13 59 19 39 3 25 24 24Z" fill="#ffd36e" stroke="' + INK + '" stroke-width="2.5" stroke-linejoin="round"/></svg>',
    sparkle: '<svg viewBox="0 0 64 64"><path d="M32 4C34 22 42 30 60 32 42 34 34 42 32 60 30 42 22 34 4 32 22 30 30 22 32 4Z" fill="#8cc8ff" stroke="' + INK + '" stroke-width="2" stroke-linejoin="round"/></svg>',
    crown: '<svg viewBox="0 0 64 64"><path d="M8 48 4 18 20 30 32 10 44 30 60 18 56 48Z" fill="#ffd36e" stroke="' + INK + '" stroke-width="2.5" stroke-linejoin="round"/><path d="M8 54H56" stroke="' + INK + '" stroke-width="3" stroke-linecap="round"/><circle cx="32" cy="38" r="4" fill="#ff6fa3"/><circle cx="18" cy="42" r="3" fill="#3f9bff"/><circle cx="46" cy="42" r="3" fill="#3f9bff"/></svg>',
    cat: '<svg viewBox="0 0 64 64"><path d="M10 26 12 6 26 16Q32 14 38 16L52 6 54 26Q58 34 52 44 44 58 32 58 20 58 12 44 6 34 10 26Z" fill="#fff" stroke="' + INK + '" stroke-width="2.5" stroke-linejoin="round"/><path d="M14 11 22 16 14 22Z" fill="#ffb3cd"/><path d="M50 11 42 16 50 22Z" fill="#ffb3cd"/><circle cx="23" cy="32" r="3.2" fill="' + INK + '"/><circle cx="41" cy="32" r="3.2" fill="' + INK + '"/><circle cx="17" cy="40" r="4" fill="#ff8fb8" opacity=".55"/><circle cx="47" cy="40" r="4" fill="#ff8fb8" opacity=".55"/><path d="M29 38h6l-3 3.5Z" fill="#ff6fa3"/><path d="M32 41.5Q29 46 26 44M32 41.5Q35 46 38 44" stroke="' + INK + '" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M8 36 18 38M8 44 18 42M56 36 46 38M56 44 46 42" stroke="' + INK + '" stroke-width="1.6" stroke-linecap="round"/></svg>',
    dog: '<svg viewBox="0 0 64 64"><path d="M16 14Q3 20 8 46 19 48 22 30Z" fill="#8cc8ff" stroke="' + INK + '" stroke-width="2.5" stroke-linejoin="round"/><path d="M48 14Q61 20 56 46 45 48 42 30Z" fill="#8cc8ff" stroke="' + INK + '" stroke-width="2.5" stroke-linejoin="round"/><ellipse cx="32" cy="35" rx="19" ry="20" fill="#fff" stroke="' + INK + '" stroke-width="2.5"/><circle cx="24" cy="31" r="3.2" fill="' + INK + '"/><circle cx="40" cy="31" r="3.2" fill="' + INK + '"/><circle cx="18" cy="40" r="4" fill="#ff8fb8" opacity=".55"/><circle cx="46" cy="40" r="4" fill="#ff8fb8" opacity=".55"/><ellipse cx="32" cy="39" rx="5.5" ry="4" fill="' + INK + '"/><path d="M32 43V47M32 47Q28 51 25 48M32 47Q36 51 39 48" stroke="' + INK + '" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M30 49Q32 57 35 49Z" fill="#ff8fb8"/></svg>',
    momo: '<svg viewBox="0 0 64 64"><path d="M6 44Q6 20 32 14 58 20 58 44 58 54 48 54H16Q6 54 6 44Z" fill="#fff6ea" stroke="' + INK + '" stroke-width="2.5" stroke-linejoin="round"/><path d="M32 14Q26 22 20 30M32 14Q32 24 32 32M32 14Q38 22 44 30M32 14Q22 20 12 26M32 14Q42 20 52 26" stroke="#d9b98f" stroke-width="2" fill="none" stroke-linecap="round"/><circle cx="24" cy="44" r="2.8" fill="' + INK + '"/><circle cx="40" cy="44" r="2.8" fill="' + INK + '"/><circle cx="18" cy="49" r="3.4" fill="#ff8fb8" opacity=".6"/><circle cx="46" cy="49" r="3.4" fill="#ff8fb8" opacity=".6"/><path d="M29 47Q32 50 35 47" stroke="' + INK + '" stroke-width="2" fill="none" stroke-linecap="round"/></svg>',
    choco: '<svg viewBox="0 0 64 64"><rect x="12" y="8" width="40" height="48" rx="6" fill="#9a6040" stroke="' + INK + '" stroke-width="2.5"/><path d="M12 24H52M12 40H52M25 8V56M39 8V56" stroke="#7a4a30" stroke-width="2"/><rect x="12" y="8" width="40" height="12" rx="6" fill="#ff8fb8" stroke="' + INK + '" stroke-width="2.5"/><circle cx="32" cy="14" r="3" fill="#fff"/></svg>',
    chicken: '<svg viewBox="0 0 64 64"><path d="M16 16Q32 4 44 18 52 30 38 42 28 50 18 40 6 28 16 16Z" fill="#e9a45e" stroke="' + INK + '" stroke-width="2.5" stroke-linejoin="round"/><path d="M22 20Q28 16 34 20" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round" opacity=".6"/><path d="M38 42 52 56" stroke="' + INK + '" stroke-width="7" stroke-linecap="round"/><path d="M38 42 52 56" stroke="#fff" stroke-width="3.5" stroke-linecap="round"/><circle cx="55" cy="55" r="4" fill="#fff" stroke="' + INK + '" stroke-width="2"/><circle cx="50" cy="60" r="3.5" fill="#fff" stroke="' + INK + '" stroke-width="2"/></svg>',
    paw: '<svg viewBox="0 0 64 64"><ellipse cx="32" cy="42" rx="15" ry="12" fill="#ff8fb8" stroke="' + INK + '" stroke-width="2.2"/><ellipse cx="14" cy="28" rx="6" ry="8" fill="#ff8fb8" stroke="' + INK + '" stroke-width="2.2"/><ellipse cx="25" cy="16" rx="6" ry="8" fill="#ff8fb8" stroke="' + INK + '" stroke-width="2.2"/><ellipse cx="39" cy="16" rx="6" ry="8" fill="#ff8fb8" stroke="' + INK + '" stroke-width="2.2"/><ellipse cx="50" cy="28" rx="6" ry="8" fill="#ff8fb8" stroke="' + INK + '" stroke-width="2.2"/></svg>',
    bow: '<svg viewBox="0 0 64 64"><path d="M32 32 6 16V48Z" fill="#ff8fb8" stroke="' + INK + '" stroke-width="2.5" stroke-linejoin="round"/><path d="M32 32 58 16V48Z" fill="#ff8fb8" stroke="' + INK + '" stroke-width="2.5" stroke-linejoin="round"/><circle cx="32" cy="32" r="8" fill="#e2437f" stroke="' + INK + '" stroke-width="2.5"/></svg>',
    mail: '<svg viewBox="0 0 64 64"><rect x="6" y="14" width="52" height="38" rx="6" fill="#fff" stroke="' + INK + '" stroke-width="2.5"/><path d="M8 18 32 38 56 18" fill="none" stroke="' + INK + '" stroke-width="2.5" stroke-linejoin="round"/><path d="M32 46C22 40 21 33 25 30 28 28 31 30 32 33 33 30 36 28 39 30 43 33 42 40 32 46Z" fill="#ff6fa3"/></svg>',
    photo: '<svg viewBox="0 0 64 64"><rect x="8" y="12" width="48" height="40" rx="6" fill="#fff" stroke="' + INK + '" stroke-width="2.5"/><rect x="13" y="17" width="38" height="25" rx="3" fill="#bfe0ff"/><circle cx="24" cy="26" r="4" fill="#ffd36e"/><path d="M13 42 26 30 36 38 42 32 51 42Z" fill="#ff8fb8"/></svg>',
    gift: '<svg viewBox="0 0 64 64"><rect x="8" y="26" width="48" height="30" rx="4" fill="#8cc8ff" stroke="' + INK + '" stroke-width="2.5"/><rect x="5" y="18" width="54" height="12" rx="4" fill="#ff8fb8" stroke="' + INK + '" stroke-width="2.5"/><path d="M32 18V56" stroke="#fff" stroke-width="6"/><path d="M32 18C22 6 14 12 20 18ZM32 18C42 6 50 12 44 18Z" fill="#fff" stroke="' + INK + '" stroke-width="2.5" stroke-linejoin="round"/></svg>'
  };
  var CONFETTI = ["heart", "star", "sparkle", "paw", "heart", "bow"];
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function stickersIn(scope) {
    var els = (scope || document).querySelectorAll("[data-s]");
    for (var i = 0; i < els.length; i++) {
      if (!els[i].firstChild) els[i].innerHTML = S[els[i].getAttribute("data-s")] || "";
    }
  }

  function burst(x, y, n, kinds) {
    if (reduce) return;
    kinds = kinds || CONFETTI;
    for (var i = 0; i < n; i++) {
      var el = document.createElement("div");
      el.className = "fx-bit";
      el.innerHTML = S[kinds[i % kinds.length]];
      el.style.left = x - 15 + "px"; el.style.top = y - 15 + "px";
      document.body.appendChild(el);
      var a = Math.random() * Math.PI * 2, d = 60 + Math.random() * 140;
      var anim = el.animate([
        { transform: "translate(0,0) scale(.3) rotate(0deg)", opacity: 1 },
        { transform: "translate(" + Math.cos(a) * d + "px," + (Math.sin(a) * d - 60) + "px) scale(1.1) rotate(" + (Math.random() * 360 - 180) + "deg)", opacity: 1, offset: .6 },
        { transform: "translate(" + Math.cos(a) * d * 1.1 + "px," + (Math.sin(a) * d + 80) + "px) scale(.8) rotate(" + (Math.random() * 360 - 180) + "deg)", opacity: 0 }
      ], { duration: 1300 + Math.random() * 400, easing: "ease-out" });
      anim.onfinish = (function (node) { return function () { node.remove(); }; })(el);
    }
  }

  function rain(kinds, count) {
    if (reduce) return;
    for (var i = 0; i < count; i++) {
      (function (i) {
        setTimeout(function () {
          var el = document.createElement("div");
          el.className = "fx-bit";
          el.style.width = el.style.height = 34 + Math.random() * 20 + "px";
          el.innerHTML = S[kinds[i % kinds.length]];
          el.style.left = Math.random() * 100 + "vw"; el.style.top = "-60px";
          document.body.appendChild(el);
          var anim = el.animate([
            { transform: "translateY(0) rotate(0deg)" },
            { transform: "translateY(" + (window.innerHeight + 100) + "px) rotate(" + (Math.random() * 540 - 270) + "deg)" }
          ], { duration: 2600 + Math.random() * 1800, easing: "linear" });
          anim.onfinish = function () { el.remove(); };
        }, i * 90);
      })(i);
    }
  }

  window.Gulu = { burst: burst, rain: rain, stickers: S, stickersIn: stickersIn, reduce: reduce };

  document.addEventListener("click", function (e) {
    var t = e.target.closest ? e.target.closest("[data-burst]") : null;
    if (t) burst(e.clientX, e.clientY, 12);
  });

  function floaters() {
    if (reduce) return;
    var box = document.createElement("div");
    box.className = "floaters"; box.setAttribute("aria-hidden", "true");
    var kinds = ["heart", "sparkle", "paw", "star", "heart", "bow"];
    for (var i = 0; i < 14; i++) {
      var f = document.createElement("div");
      f.className = "f sticker";
      var size = 22 + Math.random() * 26;
      f.style.width = f.style.height = size + "px";
      f.style.left = Math.random() * 96 + "vw";
      f.style.animationDuration = 14 + Math.random() * 14 + "s";
      f.style.animationDelay = -Math.random() * 20 + "s";
      f.innerHTML = S[kinds[i % kinds.length]];
      box.appendChild(f);
    }
    document.body.appendChild(box);
  }

  function pals() {
    var l = document.createElement("button"), r = document.createElement("button");
    l.className = "pals left"; r.className = "pals right";
    l.setAttribute("aria-label", "A friendly cat. Tap for hearts."); r.setAttribute("aria-label", "A friendly dog. Tap for hearts.");
    l.innerHTML = '<span class="sticker bob" style="width:100%;height:100%">' + S.cat + "</span>";
    r.innerHTML = '<span class="sticker bob delay2" style="width:100%;height:100%">' + S.dog + "</span>";
    [l, r].forEach(function (b) {
      b.addEventListener("click", function () {
        var rc = b.getBoundingClientRect();
        burst(rc.left + rc.width / 2, rc.top + 10, 10, ["heart", "heart", "star"]);
      });
      document.body.appendChild(b);
    });
  }

  function nav() {
    var el = document.getElementById("nav");
    if (!el) return;
    var items = [["home.html", "Home", "home"], ["messages.html", "Messages", "messages"], ["gallery.html", "Photos", "gallery"], ["favourites.html", "Favourites", "favourites"], ["surprise.html", "Surprise", "surprise"]];
    var html = '<a class="brand" href="home.html">for my princess Gulu</a><nav class="links" aria-label="Pages">';
    items.forEach(function (it) { html += '<a href="' + it[0] + '"' + (it[2] === page ? ' aria-current="page"' : "") + ">" + it[1] + "</a>"; });
    el.className = "top"; el.innerHTML = html + "</nav>";
  }

  function together() {
    var out = document.getElementById("together");
    if (!out) return;
    var s = new Date(TOGETHER_SINCE[0], TOGETHER_SINCE[1] - 1, TOGETHER_SINCE[2]);
    var n = new Date(); n = new Date(n.getFullYear(), n.getMonth(), n.getDate());
    var days = Math.round((n - s) / 864e5);
    var y = n.getFullYear() - s.getFullYear(), m = n.getMonth() - s.getMonth(), d = n.getDate() - s.getDate();
    if (d < 0) { m--; d += new Date(n.getFullYear(), n.getMonth(), 0).getDate(); }
    if (m < 0) { y--; m += 12; }
    var parts = [];
    if (y > 0) parts.push(y + (y === 1 ? " year" : " years"));
    if (m > 0) parts.push(m + (m === 1 ? " month" : " months"));
    if (d > 0 || !parts.length) parts.push(d + (d === 1 ? " day" : " days"));
    document.getElementById("days").textContent = days.toLocaleString() + " days";
    out.textContent = parts.join(", ");
  }

  function gate() {
    var form = document.getElementById("gate-form");
    if (!form) return;
    var input = document.getElementById("pw"), msg = document.getElementById("msg"), hint = document.getElementById("hint"), card = document.getElementById("gate-card");
    var tries = 0;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (input.value.trim() === PASSWORD) {
        try { sessionStorage.setItem("gulu_ok", "1"); } catch (err) {}
        msg.textContent = "Unlocked! Welcome, my princess.";
        var rc = card.getBoundingClientRect();
        burst(rc.left + rc.width / 2, rc.top + rc.height / 2, 40);
        setTimeout(function () { location.href = "home.html"; }, 1500);
        return;
      }
      tries++;
      msg.textContent = "Oops, that is not it. Try again, Gulu!";
      card.classList.remove("shake"); void card.offsetWidth; card.classList.add("shake");
      input.select();
      if (tries >= 2) hint.hidden = false;
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    nav(); stickersIn(); floaters(); if (page !== "gate") pals(); together(); gate();
    // Messages: tap a letter to open it
    var mails = document.querySelectorAll(".mail > button");
    for (var i = 0; i < mails.length; i++) {
      mails[i].addEventListener("click", function (e) {
        var card = this.parentNode, open = !card.classList.contains("open");
        card.classList.toggle("open", open);
        this.setAttribute("aria-expanded", open ? "true" : "false");
        if (open) burst(e.clientX, e.clientY, 10, ["heart", "heart", "sparkle"]);
      });
    }
    // Favourites: tap a card and its sticker hops
    var favs = document.querySelectorAll(".fav");
    for (var j = 0; j < favs.length; j++) {
      favs[j].addEventListener("click", function (e) {
        var st = this.querySelector(".sticker, .swatch");
        if (st) { st.classList.remove("hop"); void st.offsetWidth; st.classList.add("hop"); }
        burst(e.clientX, e.clientY, 10, ["heart", "star", "sparkle"]);
      });
    }
    var treat = document.getElementById("treat");
    if (treat) treat.addEventListener("click", function () { rain(["momo", "choco", "chicken", "heart", "paw"], 40); });
    // Photos: tap to enlarge
    var lb = document.getElementById("lightbox");
    if (lb) {
      var shots = document.querySelectorAll(".shot");
      for (var k = 0; k < shots.length; k++) {
        shots[k].addEventListener("click", function () {
          var img = this.querySelector("img");
          if (!img || img.style.display === "none" || !img.naturalWidth) { burst(this.getBoundingClientRect().left + 60, this.getBoundingClientRect().top + 60, 8, ["paw", "heart"]); return; }
          lb.querySelector("img").src = img.src; lb.classList.add("on");
        });
      }
      lb.addEventListener("click", function () { lb.classList.remove("on"); });
      document.addEventListener("keydown", function (e) { if (e.key === "Escape") lb.classList.remove("on"); });
    }
    // Surprise: the "No" button runs away
    var no = document.getElementById("no"), yes = document.getElementById("yes"), arena = document.getElementById("arena");
    if (no && yes && arena) {
      var scale = 1;
      function dodge() {
        var aw = arena.clientWidth - no.offsetWidth, ah = arena.clientHeight - no.offsetHeight;
        no.style.position = "absolute";
        no.style.left = Math.max(0, Math.random() * aw) + "px"; no.style.top = Math.max(0, Math.random() * ah) + "px";
        scale = Math.min(scale + 0.12, 1.8); yes.style.transform = "scale(" + scale + ")";
      }
      no.addEventListener("mouseenter", dodge);
      no.addEventListener("touchstart", function (e) { e.preventDefault(); dodge(); }, { passive: false });
      no.addEventListener("click", dodge);
      yes.addEventListener("click", function () {
        document.getElementById("ask").hidden = true;
        document.getElementById("reveal").classList.add("on");
        burst(window.innerWidth / 2, window.innerHeight / 3, 50);
        rain(["heart", "star", "sparkle", "paw", "bow"], 40);
      });
    }
  });
})();
