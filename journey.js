(function () {
  var route = document.getElementById('route');
  var trail = document.getElementById('trail');
  var steps = Array.prototype.slice.call(document.querySelectorAll('.step'));
  var stops = Array.prototype.slice.call(document.querySelectorAll('#map .stop'));
  var walkers = [document.getElementById('w1'), document.getElementById('w2')];
  if (!route || !steps.length) return;

  var total = route.getTotalLength();
  trail.setAttribute('d', route.getAttribute('d'));
  trail.style.strokeDasharray = '0 ' + (total + 10);

  // Where each step lives along the path (found in order, so the return leg works)
  var targets = [[486, 147], [733, 488], [869, 545], [800, 522]];
  var stopLen = [];
  var from = 0;
  targets.forEach(function (t) {
    var best = from, bestD = Infinity;
    for (var l = from; l <= total; l += 2) {
      var p = route.getPointAtLength(l);
      var d = (p.x - t[0]) * (p.x - t[0]) + (p.y - t[1]) * (p.y - t[1]);
      if (d < bestD) { bestD = d; best = l; }
      if (bestD < 4 && d > 400) break;
    }
    stopLen.push(best);
    from = best + 10;
  });
  stopLen.push(total);

  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var cur = 0, target = 0, phase = 0, active = -1;

  function progress() {
    var mid = window.scrollY + window.innerHeight * 0.55;
    var centers = steps.map(function (s) {
      var r = s.getBoundingClientRect();
      return r.top + window.scrollY + r.height / 2;
    });
    if (mid <= centers[0]) return 0;
    for (var i = 0; i < centers.length - 1; i++) {
      if (mid < centers[i + 1]) return i + (mid - centers[i]) / (centers[i + 1] - centers[i]);
    }
    return centers.length - 1;
  }

  function update() {
    var p = progress();
    var i = Math.min(Math.floor(p), stopLen.length - 2);
    var f = Math.max(0, Math.min(1, p - i));
    target = stopLen[i] + (stopLen[i + 1] - stopLen[i]) * f;
    var a = Math.round(p);
    if (a !== active) {
      active = a;
      steps.forEach(function (s, k) { s.classList.toggle('active', k === a); });
    }
  }

  function legs(w, swing) {
    var ls = w.querySelectorAll('.leg');
    ls[0].setAttribute('d', 'M17 58 L' + (13 + swing) + ' 93.5');
    ls[1].setAttribute('d', 'M29 58 L' + (31 - swing) + ' 93.5');
  }

  function place(w, len, swing, bob) {
    len = Math.max(0, Math.min(total, len));
    var p = route.getPointAtLength(len);
    var a = route.getPointAtLength(Math.max(0, len - 2));
    var b = route.getPointAtLength(Math.min(total, len + 2));
    var dir = (b.x - a.x) < -0.2 ? -1 : 1;
    w.setAttribute('transform', 'translate(' + p.x.toFixed(1) + ' ' + (p.y - bob).toFixed(1) + ') scale(' + (0.7 * dir) + ' 0.7)');
    legs(w, swing);
  }

  function frame() {
    var delta = target - cur;
    cur = reduce ? target : cur + delta * 0.08;
    var moving = Math.abs(delta) > 0.6 && !reduce;
    if (moving) phase += 0.32;
    var swing = moving ? Math.sin(phase) * 10 : 0;
    var bob = moving ? Math.abs(Math.sin(phase)) * 3 : 0;
    place(walkers[0], cur, swing, bob);
    place(walkers[1], cur - 34, moving ? -swing : 0, moving ? Math.abs(Math.cos(phase)) * 3 : 0);
    trail.style.strokeDasharray = cur.toFixed(1) + ' ' + (total + 10);
    stops.forEach(function (s, k) {
      s.classList.toggle('on', stopLen[k] <= cur + 3);
      s.classList.toggle('current', k === active || (active === stops.length && k === 0));
    });
    requestAnimationFrame(frame);
  }

  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
  requestAnimationFrame(frame);
})();
