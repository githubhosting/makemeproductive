!(function (e) {
  "use strict";
  e(window).on("load", function () {
    e(".preloader-wrap").fadeOut(1e3);
  });
  var o = !1,
    F = !1,
    u = !0,
    s = !0,
    a = !0,
    t = !0,
    h = "no",
    n = new Date(e("#count-down-date").val()).getTime();
  function d() {
    var d = e(".years"),
      i = e(".months"),
      f = e(".days"),
      l = e(".hours"),
      x = e(".minutes"),
      c = e(".seconds"),
      D = e(".expired-text"),
      w = e(".count-down-list"),
      m = new Date().getTime(),
      M = n - m;
    if (M < 0)
      clearInterval(r), e(D).removeClass("hidden"), e(w).addClass("hidden");
    else {
      if (o || F || u || s || a || t) {
        if (t) {
          var y = Math.floor(M / 1e3);
          e("#years").hide(),
            e("#months").hide(),
            e("#days").hide(),
            e("#hours").hide(),
            e("#minutes").hide(),
            e("#seconds").show();
        }
        if (a) {
          var v = Math.floor(M / 6e4);
          y = Math.floor((M % 6e4) / 1e3);
          e("#years").hide(),
            e("#months").hide(),
            e("#days").hide(),
            e("#hours").hide(),
            e("#minutes").show(),
            e("#seconds").show();
        }
        if (s) {
          var C = Math.floor(M / 36e5);
          (v = Math.floor((M % 36e5) / 6e4)), (y = Math.floor((M % 6e4) / 1e3));
          e("#years").hide(),
            e("#months").hide(),
            e("#days").hide(),
            e("#hours").show(),
            e("#minutes").show(),
            e("#seconds").show();
        }
        if (u) {
          var E = Math.floor(M / 864e5);
          (C = Math.floor((M % 864e5) / 36e5)),
            (v = Math.floor((M % 36e5) / 6e4)),
            (y = Math.floor((M % 6e4) / 1e3));
          e("#years").hide(),
            e("#months").hide(),
            e("#days").show(),
            e("#hours").show(),
            e("#minutes").show(),
            e("#seconds").show();
        }
        if (F) {
          var A = Math.floor(M / 2629746e3);
          (E = Math.floor((M % 2629746e3) / 864e5)),
            (C = Math.floor((M % 864e5) / 36e5)),
            (v = Math.floor((M % 36e5) / 6e4)),
            (y = Math.floor((M % 6e4) / 1e3));
          e("#years").hide(),
            e("#months").show(),
            e("#days").show(),
            e("#hours").show(),
            e("#minutes").show(),
            e("#seconds").show();
        }
        if (o) {
          var p = Math.floor(M / 31556952e3);
          (A = Math.floor((M % 31556952e3) / 2629746e3)),
            (E = Math.floor((M % 2629746e3) / 864e5)),
            (C = Math.floor((M % 864e5) / 36e5)),
            (v = Math.floor((M % 36e5) / 6e4)),
            (y = Math.floor((M % 6e4) / 1e3));
          e("#years").show(),
            e("#months").show(),
            e("#days").show(),
            e("#hours").show(),
            e("#minutes").show(),
            e("#seconds").show();
        }
        "yes" == h &&
          (e("#hours").hide(), e("#minutes").hide(), e("#seconds").hide());
      } else e("#countdown-boxes").hide();
      p < 10 && (p = "0" + p),
        A < 10 && (A = "0" + A),
        E < 10 && (E = "0" + E),
        C < 10 && (C = "0" + C),
        v < 10 && (v = "0" + v),
        y < 10 && (y = "0" + y),
        p > 0 ? e(d).text(p) : e("#years").hide(),
        A > 0 ? e(i).text(A) : e("#months").hide(),
        E > 0 ? e(f).text(E) : e("#days").hide(),
        e(l).text(C),
        e(x).text(v),
        e(c).text(y);
    }
  }
  d();
  var r = setInterval(function () {
    d();
  }, 1e3);
  e.fn.final_countdown &&
    e(".countdown").final_countdown({
      start: 1362139200,
      end: 1388461320,
      now: 1387461319,
    }),
    e("#contact-form").on("submit", function (o) {
      o.preventDefault();
      var F,
        u = e("#name").val(),
        s = e("#email_address").val(),
        a = e("#message").val(),
        t = "name=" + u + "&email=" + s + "&message=" + a;
      return (
        (F = s),
        new RegExp(
          /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i
        ).test(F) &&
        a.length > 1 &&
        u.length > 1
          ? e.ajax({
              type: "POST",
              url: "php/sendmail.php",
              data: t,
              success: function () {
                e("#contact-form .success").fadeIn(1e3),
                  e("#contact-form .error").fadeOut(500),
                  e("#contact-form")[0].reset();
              },
            })
          : (e("#contact-form .error").fadeIn(1e3),
            e("#contact-form .success").fadeOut(500)),
        !1
      );
    });
})(jQuery);
