"use strict";

function t(t) {
    return t && "object" == typeof t && "default" in t ? t : {
        default: t
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = t(require("regenerator-runtime"));

function n(t, e, n, r, a, o, c) {
    try {
        var u = t[o](c), i = u.value;
    } catch (t) {
        return void n(t);
    }
    u.done ? e(i) : Promise.resolve(i).then(r, a);
}

function r(t) {
    return function() {
        var e = this, r = arguments;
        return new Promise((function(a, o) {
            var c = t.apply(e, r);
            function u(t) {
                n(c, a, o, u, i, "next", t);
            }
            function i(t) {
                n(c, a, o, u, i, "throw", t);
            }
            u(void 0);
        }));
    };
}

function a(t) {
    return function(t) {
        if (Array.isArray(t)) return o(t);
    }(t) || function(t) {
        if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t);
    }(t) || function(t, e) {
        if (t) {
            if ("string" == typeof t) return o(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? o(t, e) : void 0;
        }
    }(t) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
}

function o(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
    return r;
}

var c = {
    containerWidth: 1261.3333740234375,
    em: 16,
    ex: 8.65,
    family: "",
    lineWidth: 1e6,
    scale: 1.223133484162896
};

function u(t) {
    var n = new Map;
    return function() {
        var a = r(e.default.mark((function r(a) {
            var o, c, u, i, s = arguments;
            return e.default.wrap((function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (!n.get(a)) {
                        e.next = 2;
                        break;
                    }
                    return e.abrupt("return", n.get(a));

                  case 2:
                    for (o = s.length, c = new Array(o > 1 ? o - 1 : 0), u = 1; u < o; u++) c[u - 1] = s[u];
                    return i = t.apply(void 0, [ a ].concat(c)), n.set(a, i), e.abrupt("return", i);

                  case 6:
                  case "end":
                    return e.stop();
                }
            }), r);
        })));
        return function(t) {
            return a.apply(this, arguments);
        };
    }();
}

function i(t) {
    return URL.createObjectURL(new Blob([ t ], {
        type: "application/javascript"
    }));
}

function s() {
    return "xxxxxxxxyxxxxyxxxyyxxxyxxxxxxxxxxxx".replace(/[xy]/g, (function(t) {
        var e = 16 * Math.random() | 0;
        return ("x" == t ? e : 3 & e | 8).toString(16);
    }));
}

var f = u(function() {
    var t = r(e.default.mark((function t(n) {
        var r, a = arguments;
        return e.default.wrap((function(t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                if (r = a.length > 1 && void 0 !== a[1] ? a[1] : {}, n) {
                    t.next = 3;
                    break;
                }
                throw new Error("src");

              case 3:
                return t.abrupt("return", new Promise((function(t, e) {
                    function a() {
                        try {
                            window.removeEventListener("error", o);
                        } catch (t) {}
                        c.remove(), c.onload = c.onerror = null;
                    }
                    var o = function(t) {
                        e(t.error), a();
                    }, c = document.createElement("script");
                    Object.assign(c, r, {
                        async: !0
                    }), c.src = n, c.onload = function() {
                        t(), a();
                    }, c.onerror = function(t, n, r, o, c) {
                        e("string" == typeof t ? t : c || t), a();
                    }, window.addEventListener("error", o, {
                        once: !0
                    }), document.head.appendChild(c);
                })));

              case 4:
              case "end":
                return t.stop();
            }
        }), t);
    })));
    return function(e) {
        return t.apply(this, arguments);
    };
}());

function l() {
    return p.apply(this, arguments);
}

function p() {
    return (p = r(e.default.mark((function t() {
        var n, r, a, o, c, u, l, p, x = arguments;
        return e.default.wrap((function(t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                for (n = x.length, r = new Array(n), a = 0; a < n; a++) r[a] = x[a];
                return o = r[r.length - 1], c = r.slice(0, r.length - 1), u = "function-" + s(), 
                l = "window['".concat(u, "']=function(").concat(c.join("\n,\n"), "){\n").concat(o, "\n}"), 
                p = i(l), t.prev = 6, t.next = 9, f(p);

              case 9:
                return t.abrupt("return", Reflect.get(window, u));

              case 12:
                throw t.prev = 12, t.t0 = t.catch(6), t.t0;

              case 15:
                return t.prev = 15, URL.revokeObjectURL(p), Reflect.set(window, u, void 0), t.finish(15);

              case 19:
              case "end":
                return t.stop();
            }
        }), t, null, [ [ 6, 12, 15, 19 ] ]);
    })))).apply(this, arguments);
}

var x = u(function() {
    var t = r(e.default.mark((function t(n) {
        var r, a = arguments;
        return e.default.wrap((function(t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                return r = a.length > 1 && void 0 !== a[1] ? a[1] : {}, t.abrupt("return", fetch(n, r).then((function(t) {
                    return t.ok ? t : Promise.reject(new Error("fetch failed:" + n));
                })).then((function(t) {
                    return t.text();
                })));

              case 2:
              case "end":
                return t.stop();
            }
        }), t);
    })));
    return function(e) {
        return t.apply(this, arguments);
    };
}()), d = i("\nMathJax.loader.preLoad(".concat([ "startup", "[tex]/action", "[tex]/all-packages", "[tex]/ams", "[tex]/amscd", "[tex]/bbox", "[tex]/boldsymbol", "[tex]/braket", "[tex]/bussproofs", "[tex]/cancel", "[tex]/cases", "[tex]/centernot", "[tex]/color", "[tex]/colortbl", "[tex]/colorv2", "[tex]/configmacros", "[tex]/empheq", "[tex]/enclose", "[tex]/extpfeil", "[tex]/gensymb", "[tex]/html", "[tex]/mathtools", "[tex]/mhchem", "[tex]/newcommand", "[tex]/noerrors", "[tex]/noundefined", "[tex]/physics", "[tex]/require", "[tex]/setoptions", "[tex]/tagformat", "[tex]/textcomp", "[tex]/textmacros", "[tex]/unicode", "[tex]/upgreek", "[tex]/verb", "core", "input/asciimath", "input/mml", "input/tex-base", "input/tex-full", "loader", "output/chtml", "output/chtml/fonts/tex" ].map((function(t) {
    return JSON.stringify(t);
})).join(","), ")\n    ")), m = "https://cdn.jsdelivr.net/npm/mathjax@".concat("3.2.0", "/es5"), h = {
    startup: {
        typeset: !1
    },
    loader: {
        load: [],
        paths: {
            mathjax: m
        }
    }
}, y = URL.createObjectURL(new Blob([ "\nwindow.MathJax=".concat(JSON.stringify(h), "\n    ") ], {
    type: "application/javascript"
})), v = [ "core", "input/asciimath", "output/chtml", "input/tex-full", "input/mml", "output/chtml/fonts/tex" ].map(b), w = [ y, b("startup"), d ].concat(a(v));

function b(t) {
    return m + "/" + t + ".min.js";
}

function g() {
    return R.apply(this, arguments);
}

function R() {
    return (R = r(e.default.mark((function t() {
        var n, r, o, c, u, i, s, f, p, d, m, h, y;
        return e.default.wrap((function(t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                return t.next = 2, Promise.all(w.map((function(t) {
                    return x(t);
                })));

              case 2:
                return n = t.sent, r = n.join("\n;\n"), o = {}, c = {
                    get MathJax() {
                        return o;
                    },
                    set MathJax(t) {
                        o = t;
                    }
                }, u = new Proxy(window, {
                    get: function(t, e, n) {
                        var r = Reflect.get(c, e, c) || Reflect.get(window, e, window);
                        return "function" == typeof r ? r.bind(window) : r;
                    },
                    has: function(t, e) {
                        return Reflect.has(t, e) || Reflect.has(c, e);
                    },
                    set: function(t, e, n, r) {
                        return Reflect.set(c, e, n, c);
                    },
                    ownKeys: function(t) {
                        return Array.from(new Set([].concat(a(Reflect.ownKeys(t)), a(Reflect.ownKeys(c)))));
                    },
                    defineProperty: function(t, e, n) {
                        return Reflect.defineProperty(c, e, n);
                    },
                    deleteProperty: function(t, e) {
                        return Reflect.deleteProperty(c, e);
                    }
                }), i = new Proxy({}, {
                    get: function(t, e, n) {
                        return Reflect.get(o, e, o);
                    },
                    set: function(t, e, n, r) {
                        return Reflect.set(o, e, n, o);
                    },
                    has: function(t, e) {
                        return Reflect.has(o, e);
                    },
                    ownKeys: function(t) {
                        return Reflect.ownKeys(o);
                    },
                    defineProperty: function(t, e, n) {
                        return Reflect.defineProperty(o, e, n);
                    },
                    deleteProperty: function(t, e) {
                        return Reflect.deleteProperty(o, e);
                    }
                }), s = [ "self", "frames", "parent", "content", "window", "top", "globalThis" ], 
                f = Object.fromEntries(s.map((function(t) {
                    return [ t, u ];
                }))), p = {
                    value: void 0,
                    mathfontfamily: void 0,
                    mathfontsize: void 0
                }, d = Object.assign(p, {
                    MathJax: i
                }, f), m = Object.keys(d), h = Object.values(d), t.next = 16, l.apply(void 0, a(m).concat([ r ]));

              case 16:
                return y = t.sent, Reflect.apply(y, u, h), t.abrupt("return", o);

              case 19:
              case "end":
                return t.stop();
            }
        }), t);
    })))).apply(this, arguments);
}

var j, P = u(r(e.default.mark((function t() {
    return e.default.wrap((function(t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            return t.abrupt("return", g());

          case 1:
          case "end":
            return t.stop();
        }
    }), t);
}))));

function k() {
    return O.apply(this, arguments);
}

function O() {
    return (O = r(e.default.mark((function t() {
        var n;
        return e.default.wrap((function(t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                if (!j) {
                    t.next = 2;
                    break;
                }
                return t.abrupt("return", j);

              case 2:
                return t.next = 4, P();

              case 4:
                return n = t.sent, t.next = 7, n.startup.promise;

              case 7:
                return j = n, t.abrupt("return", n);

              case 9:
              case "end":
                return t.stop();
            }
        }), t);
    })))).apply(this, arguments);
}

var S = {
    latex: "tex2chtmlPromise",
    asciimath: "asciimath2chtmlPromise",
    mathml: "mathml2chtmlPromise"
};

function A() {
    return (A = r(e.default.mark((function t(n, r) {
        var a, o, u, i, s, f, l = arguments;
        return e.default.wrap((function(t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                if (a = l.length > 2 && void 0 !== l[2] ? l[2] : {}, o = document.createElement("div"), 
                u = S[r]) {
                    t.next = 5;
                    break;
                }
                throw new Error('mathtype "latex" | "mathml" | "asciimath"');

              case 5:
                return t.next = 7, k();

              case 7:
                return (i = t.sent).startup.document.addStyleSheet(), s = Object.assign({}, c, a), 
                t.next = 13, Reflect.apply(Reflect.get(i, u), i, [ n.trim(), s ]);

              case 13:
                return f = t.sent, o.appendChild(f), i.startup.document.clear(), i.startup.document.updateDocument(), 
                t.abrupt("return", o.innerHTML);

              case 18:
              case "end":
                return t.stop();
            }
        }), t);
    })))).apply(this, arguments);
}

exports.defaultoptions = c, exports.initmathjax = k, exports.rendermath = function(t, e) {
    return A.apply(this, arguments);
};
//# sourceMappingURL=index.cjs.map
