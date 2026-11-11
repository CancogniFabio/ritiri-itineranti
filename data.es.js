/* Mock-up data: example departures and example facilitator profiles */
window.RI = {
  destinations: {
    marocco: { name: "Desert Way", country: "Marruecos", page: "marocco-es.html", img: "img/dunes.jpg", days: "7 días", price: 2000, color: "#B6492B", level: 4, levelName: "Aventura" },
    nilo: { name: "La Vía del Nilo", country: "Egipto", page: "nilo-es.html", img: "img/felucca.jpg", days: "8 días", price: 2800, color: "#17676A", level: 1, levelName: "Suave" },
    cappadocia: { name: "Valles de Piedra", country: "Turquía", page: "cappadocia-es.html", img: "img/balloons.jpg", days: "7 días", price: 2600, color: "#9B3F67", level: 3, levelName: "Activo" }
  },
  facilitators: [
    { id: "fabio-flavia", rating: 4.9, reviews: 64, name: "Fabio y Flavia", role: "Fundadores · breathwork, yoga y Deep Coaching", themes: ["Breathwork", "Yoga", "Meditación"], color: "#23203B", initials: "F&F", base: "Lisboa", founders: true,
      bio: "Diseñan los itinerarios y los temas de cada viaje, seleccionan a los facilitadores y guían algunas salidas cada año." },
    { id: "giulia", rating: 4.9, reviews: 31, name: "Giulia M.", role: "Astróloga y profesora de meditación", themes: ["Astrología", "Meditación"], color: "#9B3F67", initials: "GM", base: "Bologna",
      bio: "Lee el cielo como un mapa interior. En el desierto y en Anatolia trabaja con las estrellas, los ciclos y las intenciones." },
    { id: "luca", rating: 4.8, reviews: 22, name: "Luca F.", role: "Profesor de yoga y terapeuta somático", themes: ["Yoga", "Trabajo somático"], color: "#B6492B", initials: "LF", base: "Turín",
      bio: "Une vinyasa lento y escucha del cuerpo. Lleva de viaje prácticas sencillas para seguir en casa." },
    { id: "sara", rating: 5.0, reviews: 18, name: "Sara C.", role: "Facilitadora de meditación y simbología sagrada", themes: ["Meditación", "Simbología sagrada"], color: "#17676A", initials: "SC", base: "Roma",
      bio: "Estudia los símbolos del antiguo Egipto, de la flor de loto al ojo de Horus, y los traduce en meditaciones guiadas." },
    { id: "davide", rating: 4.9, reviews: 27, name: "Davide R.", role: "Sound healer y músico", themes: ["Sound healing", "Meditación"], color: "#E9A23B", initials: "DR", base: "Milán",
      bio: "Cuencos tibetanos, voz y tambores de marco. En el Nilo convierte la cubierta del barco en un espacio de escucha." },
    { id: "elena", rating: 4.8, reviews: 35, name: "Elena R.", role: "Coach y profesora de yoga", themes: ["Coaching", "Yoga"], color: "#5F8F8B", initials: "ER", base: "Florencia",
      bio: "Ayuda a las personas a hacer balance de su vida. Alterna práctica en la esterilla y sesiones de coaching en grupo." },
    { id: "marco", rating: 4.7, reviews: 19, name: "Marco G.", role: "Guía de caminatas y meditación", themes: ["Meditación", "Camino en silencio"], color: "#6B4A30", initials: "MG", base: "Verona",
      bio: "Ex guía de montaña, hoy acompaña caminatas en silencio. Cree que los pies piensan mejor que la cabeza." }
  ],
  departures: [
    { id: "ma-apr27", dest: "marocco", month: 4, date: "21-27 abril 2027", fac: "fabio-flavia", theme: "Breathwork", title: "Respiración y silencio en el Sáhara", seats: 4 },
    { id: "ma-ott27", dest: "marocco", month: 10, date: "13-19 octubre 2027", fac: "giulia", theme: "Astrología", title: "Las estrellas del desierto", seats: 7 },
    { id: "ma-nov27", dest: "marocco", month: 11, date: "3-9 noviembre 2027", fac: "luca", theme: "Yoga", title: "El cuerpo en la arena", seats: 9 },
    { id: "ni-feb27", dest: "nilo", month: 2, date: "6-13 febrero 2027", fac: "sara", theme: "Simbología sagrada", title: "La flor de loto", seats: 3 },
    { id: "ni-nov27", dest: "nilo", month: 11, date: "6-13 noviembre 2027", fac: "davide", theme: "Sound healing", title: "El sonido del río", seats: 8 },
    { id: "ni-dic27", dest: "nilo", month: 12, date: "4-11 diciembre 2027", fac: "fabio-flavia", theme: "Breathwork", title: "Respirar con el Nilo", seats: 10 },
    { id: "ca-mag27", dest: "cappadocia", month: 5, date: "2-8 mayo 2027", fac: "elena", theme: "Coaching", title: "Raíces y dirección", seats: 5 },
    { id: "ca-set27", dest: "cappadocia", month: 9, date: "19-25 septiembre 2027", fac: "marco", theme: "Camino en silencio", title: "Valles en silencio", seats: 11 },
    { id: "ca-ott27", dest: "cappadocia", month: 10, date: "10-16 octubre 2027", fac: "giulia", theme: "Astrología", title: "El cielo de Anatolia", seats: 6 }
  ],
  minPax: 6,
  months: ["", "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
};

(function () {
  var D = window.RI;
  function fac(id) { return D.facilitators.filter(function (f) { return f.id === id; })[0]; }
  function eur(n) { return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ' €'; }
  function avatar(f, size) {
    return '<span class="avatar-sm" style="background:' + f.color + ';width:' + size + 'px;height:' + size + 'px;font-size:' + Math.round(size * 0.36) + 'px" aria-hidden="true">' + f.initials + '</span>';
  }
  function dots(n) { var o = ''; for (var i = 1; i <= 5; i++) o += '<i class="' + (i <= n ? 'on' : '') + '"></i>'; return '<span class="dots" aria-hidden="true">' + o + '</span>'; }
  function level(ds) { return '<span class="lvl">' + dots(ds.level) + '<span>Intensidad ' + ds.levelName.toLowerCase() + '</span></span>'; }
  function stars(f) { return '<span class="stars" aria-label="Valutazione ' + f.rating + ' de 5">★ ' + f.rating.toFixed(1) + ' <em>(' + f.reviews + ')</em></span>'; }
  function status(d) {
    var booked = 12 - d.seats, min = D.minPax, ok = booked >= min, miss = min - booked;
    var label = ok ? 'Salida confirmada' : (miss === 1 ? 'Falta 1 persona para salir' : 'Faltan ' + miss + ' personas para salir');
    return '<div class="go ' + (ok ? 'ok' : 'wait') + '"><div class="go-bar"><span style="width:' + (booked / 12 * 100).toFixed(0) + '%"></span><i style="left:' + (min / 12 * 100).toFixed(0) + '%"></i></div><span class="go-label">' + (ok ? '✓ ' : '') + label + '</span></div>';
  }
  function depCard(d) {
    var ds = D.destinations[d.dest], f = fac(d.fac);
    var few = d.seats <= 4 ? ' few' : '';
    return '<a class="dep-card" href="' + ds.page + '#date" style="--c:' + ds.color + '">' +
      '<div class="dep-img"><img src="' + ds.img + '" alt="' + ds.country + '" loading="lazy"><span class="dep-country">' + ds.country + '</span></div>' +
      '<div class="dep-body"><span class="dep-date">' + d.date + '</span><h3>' + d.title + '</h3>' +
      '<span class="dep-trip">' + ds.name + ' · ' + ds.days + '</span>' + level(ds) +
      '<div class="dep-fac">' + avatar(f, 34) + '<div><strong>' + f.name + ' ' + stars(f) + '</strong><span>' + d.theme + '</span></div></div>' +
      status(d) + '<div class="dep-foot"><span class="dep-price">' + eur(ds.price) + '</span><span class="dep-seats' + few + '">' + 'Quedan ' + d.seats + ' plazas</span></div></div></a>';
  }
  window.RIrender = { fac: fac, eur: eur, avatar: avatar, depCard: depCard, dots: dots, stars: stars };

  // ---------- home: search ----------
  var grid = document.getElementById('dep-grid');
  if (grid) {
    var sel = { dest: document.getElementById('f-dest'), month: document.getElementById('f-month'), theme: document.getElementById('f-theme'), fac: document.getElementById('f-fac') };
    var lv = document.getElementById('f-level'), lvOut = document.getElementById('f-level-out'), LV = ['', 'Suave', 'Tranquilo', 'Activo', 'Aventura', 'Intenso'];
    var themes = {};
    D.departures.forEach(function (d) { themes[d.theme] = 1; });
    Object.keys(D.destinations).forEach(function (k) { sel.dest.insertAdjacentHTML('beforeend', '<option value="' + k + '">' + D.destinations[k].country + '</option>'); });
    var months = {}; D.departures.forEach(function (d) { months[d.month] = 1; });
    Object.keys(months).sort(function (a, b) { return a - b; }).forEach(function (m) { sel.month.insertAdjacentHTML('beforeend', '<option value="' + m + '">' + D.months[m] + '</option>'); });
    Object.keys(themes).sort().forEach(function (t) { sel.theme.insertAdjacentHTML('beforeend', '<option>' + t + '</option>'); });
    D.facilitators.forEach(function (f) { sel.fac.insertAdjacentHTML('beforeend', '<option value="' + f.id + '">' + f.name + '</option>'); });
    var count = document.getElementById('dep-count');
    function run() {
      var list = D.departures.filter(function (d) {
        return (!sel.dest.value || d.dest === sel.dest.value) && (!sel.month.value || d.month == sel.month.value) &&
          (!sel.theme.value || d.theme === sel.theme.value) && (!sel.fac.value || d.fac === sel.fac.value) && D.destinations[d.dest].level <= +lv.value;
      }).sort(function (a, b) { return a.month - b.month; });
      grid.innerHTML = list.length ? list.map(depCard).join('') : '<p class="empty">No hay salidas con estos filtros. Prueba a quitar alguno.</p>';
      count.textContent = list.length + (list.length === 1 ? ' salida' : ' salidas');
    }
    Object.keys(sel).forEach(function (k) { sel[k].addEventListener('change', run); });
    function lvShow() { lvOut.textContent = 'hasta ' + LV[+lv.value]; }
    lv.addEventListener('input', function () { lvShow(); run(); }); lvShow();
    document.getElementById('f-reset').addEventListener('click', function () { Object.keys(sel).forEach(function (k) { sel[k].value = ''; }); lv.value = 5; lvShow(); run(); });
    Array.prototype.forEach.call(document.querySelectorAll('[data-theme-pick]'), function (b) {
      b.addEventListener('click', function () { sel.theme.value = b.getAttribute('data-theme-pick'); run(); document.getElementById('viaggi').scrollIntoView({ behavior: 'smooth' }); });
    });
    run();
  }

  // ---------- trip page: departures ----------
  var tripDeps = document.getElementById('trip-deps');
  if (tripDeps) {
    var dest = tripDeps.getAttribute('data-dest'), ds = D.destinations[dest];
    tripDeps.innerHTML = D.departures.filter(function (d) { return d.dest === dest; }).map(function (d) {
      var f = fac(d.fac);
      return '<article class="dep-row"><div class="dep-row-date"><strong>' + d.date + '</strong><span class="dep-seats' + (d.seats <= 4 ? ' few' : '') + '">' + 'Quedan ' + d.seats + ' plazas</span></div>' +
        '<div class="dep-row-fac">' + avatar(f, 52) + '<div><span class="dep-theme">' + d.theme + '</span><h3>' + d.title + '</h3><span>con ' + f.name + ' · ' + f.role + '</span></div></div>' +
        '<div class="dep-row-cta"><span class="dep-price">' + eur(ds.price) + '</span><button class="btn accent" type="button" data-book="' + d.id + '">Solicita una plaza</button></div></article>';
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
        title.textContent = D.destinations[d.dest].name + ' · ' + d.date;
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
    chips.innerHTML = '<button type="button" class="chip on" data-t="">Todos</button>' + Object.keys(all).sort().map(function (t) { return '<button type="button" class="chip" data-t="' + t + '">' + t + '</button>'; }).join('');
    function draw(t) {
      net.innerHTML = D.facilitators.filter(function (f) { return !t || f.themes.indexOf(t) > -1; }).map(function (f) {
        var deps = D.departures.filter(function (d) { return d.fac === f.id; });
        return '<article class="fac-card">' + avatar(f, 76) + '<h3>' + f.name + (f.founders ? ' <span class="badge">Fundadores</span>' : '') + '</h3><span class="fac-role">' + f.role + ' · ' + f.base + '</span>' +
          '<p>' + f.bio + '</p><div class="fac-themes">' + f.themes.map(function (x) { return '<span>' + x + '</span>'; }).join('') + '</div>' +
          '<div class="fac-deps"><strong>Próximos viajes</strong>' + deps.map(function (d) { var ds = D.destinations[d.dest]; return '<a href="' + ds.page + '#date">' + ds.country + ' · ' + d.date + '</a>'; }).join('') + '</div></article>';
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
