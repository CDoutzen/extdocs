!(function (p) {
  "use strict";
  !(function (t) {
    var s = window,
      e = document,
      i = p,
      c = "".concat("https:" === e.location.protocol ? "https://" : "http://", "./js-sdk-pro.min.js"),
      n = e.createElement("script"),
      r = e.getElementsByTagName("script")[0];
    (n.type = "text/javascript"), n.setAttribute("charset", "UTF-8"), (n.async = !0), (n.src = c), (n.id = "LA_COLLECT"), (i.d = n);
    var o = function () {
      s.LA.ids.push(i);
    };
    s.LA ? s.LA.ids && o() : ((s.LA = p), (s.LA.ids = []), o()), r.parentNode.insertBefore(n, r);
  })();
})({ id: "JmmL9XR2qq9iZ0Tm", ck: "JmmL9XR2qq9iZ0Tm", hashMode: true });
