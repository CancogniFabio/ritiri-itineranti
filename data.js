/* Mock-up data: example departures and example facilitator profiles */
window.RI = {
  destinations: {
    marocco: { name: "Desert Way", country: "Marocco", page: "marocco.html", img: "img/dunes.jpg", days: "7 giorni", price: 2000, color: "#B6492B", level: 4, levelName: "Avventura" },
    nilo: { name: "La Via del Nilo", country: "Egitto", page: "nilo.html", img: "img/felucca.jpg", days: "8 giorni", price: 2800, color: "#17676A", level: 1, levelName: "Dolce" },
    cappadocia: { name: "Valli di Pietra", country: "Turchia", page: "cappadocia.html", img: "img/balloons.jpg", days: "7 giorni", price: 2600, color: "#9B3F67", level: 3, levelName: "Attivo" }
  },
  facilitators: [
    { id: "fabio-flavia", rating: 4.9, reviews: 64, name: "Fabio e Flavia", role: "Fondatori · breathwork, yoga e Deep Coaching", themes: ["Breathwork", "Yoga", "Meditazione"], color: "#23203B", initials: "F&F", base: "Lisbona", founders: true,
      bio: "Disegnano gli itinerari e i temi di ogni viaggio, scelgono gli insegnanti e guidano alcune partenze ogni anno." },
    { id: "giulia", rating: 4.9, reviews: 31, name: "Giulia M.", role: "Astrologa e insegnante di meditazione", themes: ["Astrologia", "Meditazione"], color: "#9B3F67", initials: "GM", base: "Bologna",
      bio: "Legge il cielo come una mappa interiore. Nel deserto e in Anatolia lavora con le stelle, i cicli e le intenzioni." },
    { id: "luca", rating: 4.8, reviews: 22, name: "Luca F.", role: "Insegnante di yoga e operatore somatico", themes: ["Yoga", "Lavoro somatico"], color: "#B6492B", initials: "LF", base: "Torino",
      bio: "Unisce vinyasa lento e ascolto del corpo. Porta in viaggio pratiche semplici da continuare a casa." },
    { id: "sara", rating: 5.0, reviews: 18, name: "Sara C.", role: "Insegnante di meditazione e simbologia sacra", themes: ["Meditazione", "Simbologia sacra"], color: "#17676A", initials: "SC", base: "Roma",
      bio: "Studia i simboli dell'antico Egitto, dal fiore di loto all'occhio di Horus, e li traduce in meditazioni guidate." },
    { id: "davide", rating: 4.9, reviews: 27, name: "Davide R.", role: "Sound healer e musicista", themes: ["Sound healing", "Meditazione"], color: "#E9A23B", initials: "DR", base: "Milano",
      bio: "Campane tibetane, voce e tamburi a cornice. Sul Nilo trasforma il ponte della barca in uno spazio di ascolto." },
    { id: "elena", rating: 4.8, reviews: 35, name: "Elena R.", role: "Coach e insegnante di yoga", themes: ["Coaching", "Yoga"], color: "#5F8F8B", initials: "ER", base: "Firenze",
      bio: "Aiuta le persone a fare il punto sulla propria vita. Alterna pratica sul tappetino e sessioni di coaching di gruppo." },
    { id: "marco", rating: 4.7, reviews: 19, name: "Marco G.", role: "Guida di cammino e meditazione", themes: ["Meditazione", "Cammino in silenzio"], color: "#6B4A30", initials: "MG", base: "Verona",
      bio: "Ex guida alpina, oggi accompagna camminate in silenzio. Crede che i piedi sappiano pensare meglio della testa." }
  ],
  departures: [
    { id: "ma-apr27", dest: "marocco", month: 4, date: "21-27 aprile 2027", fac: "fabio-flavia", theme: "Breathwork", title: "Respiro e silenzio nel Sahara", seats: 4 },
    { id: "ma-ott27", dest: "marocco", month: 10, date: "13-19 ottobre 2027", fac: "giulia", theme: "Astrologia", title: "Le stelle del deserto", seats: 7 },
    { id: "ma-nov27", dest: "marocco", month: 11, date: "3-9 novembre 2027", fac: "luca", theme: "Yoga", title: "Il corpo nella sabbia", seats: 9 },
    { id: "ni-feb27", dest: "nilo", month: 2, date: "6-13 febbraio 2027", fac: "sara", theme: "Simbologia sacra", title: "Il fiore di loto", seats: 3 },
    { id: "ni-nov27", dest: "nilo", month: 11, date: "6-13 novembre 2027", fac: "davide", theme: "Sound healing", title: "Il suono del fiume", seats: 8 },
    { id: "ni-dic27", dest: "nilo", month: 12, date: "4-11 dicembre 2027", fac: "fabio-flavia", theme: "Breathwork", title: "Respirare con il Nilo", seats: 10 },
    { id: "ca-mag27", dest: "cappadocia", month: 5, date: "2-8 maggio 2027", fac: "elena", theme: "Coaching", title: "Radici e direzione", seats: 5 },
    { id: "ca-set27", dest: "cappadocia", month: 9, date: "19-25 settembre 2027", fac: "marco", theme: "Cammino in silenzio", title: "Valli in silenzio", seats: 11 },
    { id: "ca-ott27", dest: "cappadocia", month: 10, date: "10-16 ottobre 2027", fac: "giulia", theme: "Astrologia", title: "Il cielo d'Anatolia", seats: 6 }
  ],
  minPax: 6,
  months: ["", "Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"]
};

(function () {
  var D = window.RI;
  function fac(id) { return D.facilitators.filter(function (f) { return f.id === id; })[0]; }
  function eur(n) { return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ' €'; }
  function avatar(f, size) {
    return '<span class="avatar-sm" style="background:' + f.color + ';width:' + size + 'px;height:' + size + 'px;font-size:' + Math.round(size * 0.36) + 'px" aria-hidden="true">' + f.initials + '</span>';
  }
  function dots(n) { var o = ''; for (var i = 1; i <= 5; i++) o += '<i class="' + (i <= n ? 'on' : '') + '"></i>'; return '<span class="dots" aria-hidden="true">' + o + '</span>'; }
  function level(ds) { return '<span class="lvl">' + dots(ds.level) + '<span>Impegno fisico ' + ds.level + ' su 5</span></span>'; }
  function stars(f) { return '<span class="stars" aria-label="Valutazione ' + f.rating + ' su 5">★ ' + f.rating.toFixed(1) + ' <em>(' + f.reviews + ')</em></span>'; }
  function status(d) {
    var booked = 12 - d.seats, min = D.minPax, ok = booked >= min, miss = min - booked;
    var label = ok ? 'Partenza confermata' : (miss === 1 ? 'Manca 1 persona per partire' : 'Mancano ' + miss + ' persone per partire');
    return '<div class="go ' + (ok ? 'ok' : 'wait') + '"><div class="go-bar"><span style="width:' + (booked / 12 * 100).toFixed(0) + '%"></span><i style="left:' + (min / 12 * 100).toFixed(0) + '%"></i></div><span class="go-label">' + (ok ? '✓ ' : '') + label + '</span></div>';
  }
  function depCard(d) {
    var ds = D.destinations[d.dest], f = fac(d.fac);
    var few = d.seats <= 4 ? ' few' : '';
    return '<a class="dep-card" href="' + ds.page + '#date" style="--c:' + ds.color + '">' +
      '<div class="dep-img"><img src="' + ds.img + '" alt="' + ds.country + '" loading="lazy"><span class="dep-country">' + ds.country + '</span></div>' +
      '<div class="dep-body"><span class="dep-date">' + d.date + '</span><h3>' + ds.country + ' · ' + ds.name + '</h3>' +
      '<span class="dep-trip">' + ds.days + ' · tema: ' + d.theme + '</span>' + level(ds) +
      '<div class="dep-fac">' + avatar(f, 34) + '<div><strong>con ' + f.name + ' ' + stars(f) + '</strong><span>' + f.role + '</span></div></div>' +
      status(d) + '<div class="dep-foot"><span class="dep-price">' + eur(ds.price) + '</span><span class="dep-seats' + few + '">' + 'Restano ' + d.seats + ' posti</span></div></div></a>';
  }
  window.RIrender = { fac: fac, eur: eur, avatar: avatar, depCard: depCard, dots: dots, stars: stars };

  // ---------- home: search (linked filters) ----------
  var grid = document.getElementById('dep-grid');
  if (grid) {
    var sel = { dest: document.getElementById('f-dest'), month: document.getElementById('f-month'), theme: document.getElementById('f-theme'), fac: document.getElementById('f-fac') };
    var ALL = { dest: 'Tutte', month: 'Qualsiasi', theme: 'Tutti', fac: 'Tutti' };
    var EMPTY = { dest: 'nessuna partenza', month: 'nessuna partenza', theme: 'nessuna partenza', fac: 'nessun viaggio' };
    var hint = document.getElementById('search-hint'), count = document.getElementById('dep-count');
    function key(d, k) { return k === 'month' ? String(d.month) : d[k]; }
    function label(k, v) {
      if (k === 'dest') return D.destinations[v].country;
      if (k === 'month') return D.months[+v];
      if (k === 'fac') return fac(v).name;
      return v;
    }
    var options = { dest: Object.keys(D.destinations), month: [], theme: [], fac: D.facilitators.map(function (f) { return f.id; }) };
    var mm = {}, tt = {};
    D.departures.forEach(function (d) { mm[d.month] = 1; tt[d.theme] = 1; });
    options.month = Object.keys(mm).sort(function (a, b) { return a - b; });
    options.theme = Object.keys(tt).sort();
    function matches(d, skip) {
      return Object.keys(sel).every(function (k) { return k === skip || !sel[k].value || key(d, k) === sel[k].value; });
    }
    function rebuild() {
      Object.keys(sel).forEach(function (k) {
        var cur = sel[k].value;
        var html = '<option value="">' + ALL[k] + '</option>';
        options[k].forEach(function (v) {
          var n = D.departures.filter(function (d) { return matches(d, k) && key(d, k) === v; }).length;
          html += '<option value="' + v + '"' + (n ? '' : ' disabled') + (v === cur ? ' selected' : '') + '>' + label(k, v) + (n ? ' (' + n + ')' : ' · ' + EMPTY[k]) + '</option>';
        });
        sel[k].innerHTML = html;
      });
    }
    function run() {
      rebuild();
      var list = D.departures.filter(function (d) { return matches(d, null); }).sort(function (a, b) { return a.month - b.month; });
      grid.innerHTML = list.length ? list.map(depCard).join('') : '<p class="empty">Nessuna partenza con questi filtri. Prova a toglierne uno.</p>';
      count.textContent = list.length + (list.length === 1 ? ' partenza' : ' partenze');
      var active = Object.keys(sel).some(function (k) { return sel[k].value; });
      if (hint) hint.textContent = active ? (list.length ? (list.length === 1 ? 'Trovata 1 partenza. ' : 'Trovate ' + list.length + ' partenze. ') + 'Le voci grigie non hanno date con questi filtri.' : 'Nessuna partenza con questi filtri: prova un altro mese o togline uno.') : '';
    }
    Object.keys(sel).forEach(function (k) { sel[k].addEventListener('change', run); });
    document.getElementById('f-reset').addEventListener('click', function () { Object.keys(sel).forEach(function (k) { sel[k].value = ''; }); run(); });
    run();
  }

  // ---------- trip page: departures ----------
  var tripDeps = document.getElementById('trip-deps');
  if (tripDeps) {
    var dest = tripDeps.getAttribute('data-dest'), ds = D.destinations[dest];
    tripDeps.innerHTML = D.departures.filter(function (d) { return d.dest === dest; }).sort(function (a, b) { return a.month - b.month; }).map(function (d) {
      var f = fac(d.fac);
      return '<article class="dep-tile"><span class="dep-date">' + d.date + '</span>' +
        '<div class="dep-fac">' + avatar(f, 48) + '<div><strong>con ' + f.name + '</strong><span>' + f.role + '</span></div></div>' +
        '<span class="dep-theme">Tema: ' + d.theme + '</span>' + status(d) +
        '<div class="dep-foot"><span class="dep-price">' + eur(ds.price) + '</span><span class="dep-seats' + (d.seats <= 4 ? ' few' : '') + '">Restano ' + d.seats + ' posti</span></div>' +
        '<button class="btn accent" type="button" data-book="' + d.id + '">Richiedi un posto</button></article>';
    }).join('');
  }

  // ---------- booking modal (demo) ----------
  var modal = document.getElementById('book-modal');
  if (modal) {
    var form = modal.querySelector('form'), title = modal.querySelector('.modal-title'), done = modal.querySelector('.modal-done');
    document.addEventListener('click', function (e) {
      var b = e.target.closest('[data-book]');
      if (b) {
        var d = D.departures.filter(function (x) { return x.id === b.getAttribute('data-book'); })[0];
        title.textContent = D.destinations[d.dest].country + ' · ' + D.destinations[d.dest].name + ' · ' + d.date;
        form.hidden = false; done.hidden = true; modal.hidden = false; modal.querySelector('input').focus();
      }
      if (e.target.closest('[data-close]') || e.target === modal) modal.hidden = true;
    });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') modal.hidden = true; });
    form.addEventListener('submit', function (e) { e.preventDefault(); form.hidden = true; done.hidden = false; });
  }

  // ---------- network page ----------
  var net = document.getElementById('net-grid');
  if (net) {
    var chips = document.getElementById('net-chips'), all = {};
    D.facilitators.forEach(function (f) { f.themes.forEach(function (t) { all[t] = 1; }); });
    chips.innerHTML = '<button type="button" class="chip on" data-t="">Tutti</button>' + Object.keys(all).sort().map(function (t) { return '<button type="button" class="chip" data-t="' + t + '">' + t + '</button>'; }).join('');
    function draw(t) {
      net.innerHTML = D.facilitators.filter(function (f) { return !t || f.themes.indexOf(t) > -1; }).map(function (f) {
        var deps = D.departures.filter(function (d) { return d.fac === f.id; });
        return '<article class="fac-card">' + avatar(f, 76) + '<h3>' + f.name + (f.founders ? ' <span class="badge">Fondatori</span>' : '') + '</h3><span class="fac-role">' + f.role + ' · ' + f.base + '</span>' +
          '<p>' + f.bio + '</p><div class="fac-themes">' + f.themes.map(function (x) { return '<span>' + x + '</span>'; }).join('') + '</div>' +
          '<div class="fac-deps"><strong>Prossimi viaggi</strong>' + deps.map(function (d) { var ds = D.destinations[d.dest]; return '<a href="' + ds.page + '#date">' + ds.country + ' · ' + d.date + '</a>'; }).join('') + '</div></article>';
      }).join('');
    }
    chips.addEventListener('click', function (e) {
      var b = e.target.closest('.chip'); if (!b) return;
      Array.prototype.forEach.call(chips.children, function (c) { c.classList.toggle('on', c === b); });
      draw(b.getAttribute('data-t'));
    });
    draw('');
  }
})();
