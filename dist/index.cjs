"use strict";

function e(e, t, r, n, o, a, c) {
    try {
        var u = e[a](c), i = u.value;
    } catch (e) {
        return void r(e);
    }
    u.done ? t(i) : Promise.resolve(i).then(n, o);
}

function t(t) {
    return function() {
        var r = this, n = arguments;
        return new Promise((function(o, a) {
            var c = t.apply(r, n);
            function u(t) {
                e(c, o, a, u, i, "next", t);
            }
            function i(t) {
                e(c, o, a, u, i, "throw", t);
            }
            u(void 0);
        }));
    };
}

function r(e) {
    return function(e) {
        if (Array.isArray(e)) return n(e);
    }(e) || function(e) {
        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
    }(e) || function(e, t) {
        if (!e) return;
        if ("string" == typeof e) return n(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        "Object" === r && e.constructor && (r = e.constructor.name);
        if ("Map" === r || "Set" === r) return Array.from(e);
        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return n(e, t);
    }(e) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
}

function n(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), "undefined" == typeof regeneratorRuntime && function(e) {
    var t = new XMLHttpRequest;
    t.open("GET", e, !1), t.send(null);
    var r = t.responseText;
    new Function(r)();
}("https://cdn.jsdelivr.net/npm/regenerator-runtime@0.13.9/runtime.min.js");

var o = {
    containerWidth: 1261.3333740234375,
    em: 16,
    ex: 8.65,
    family: "",
    lineWidth: 1e6,
    scale: 1.223133484162896
};

function a(e) {
    var r = new Map;
    return function() {
        var n = t(regeneratorRuntime.mark((function t(n) {
            var o, a, c, u, i = arguments;
            return regeneratorRuntime.wrap((function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (!r.get(n)) {
                        t.next = 2;
                        break;
                    }
                    return t.abrupt("return", r.get(n));

                  case 2:
                    for (o = i.length, a = new Array(o > 1 ? o - 1 : 0), c = 1; c < o; c++) a[c - 1] = i[c];
                    return u = e.apply(void 0, [ n ].concat(a)), r.set(n, u), t.abrupt("return", u);

                  case 6:
                  case "end":
                    return t.stop();
                }
            }), t);
        })));
        return function(e) {
            return n.apply(this, arguments);
        };
    }();
}

function c(e) {
    return URL.createObjectURL(new Blob([ e ], {
        type: "application/javascript"
    }));
}

function u() {
    return "xxxxxxxxyxxxxyxxxyyxxxyxxxxxxxxxxxx".replace(/[xy]/g, (function(e) {
        var t = 16 * Math.random() | 0;
        return ("x" == e ? t : 3 & t | 8).toString(16);
    }));
}

var i = a(function() {
    var e = t(regeneratorRuntime.mark((function e(t) {
        var r, n = arguments;
        return regeneratorRuntime.wrap((function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if (r = n.length > 1 && void 0 !== n[1] ? n[1] : {}, t) {
                    e.next = 3;
                    break;
                }
                throw new Error("src");

              case 3:
                return e.abrupt("return", new Promise((function(e, n) {
                    function o() {
                        try {
                            window.removeEventListener("error", a);
                        } catch (e) {}
                        c.remove(), c.onload = c.onerror = null;
                    }
                    var a = function(e) {
                        n(e.error), o();
                    }, c = document.createElement("script");
                    Object.assign(c, r, {
                        async: !0
                    }), c.src = t, c.onload = function() {
                        e(), o();
                    }, c.onerror = function(e, t, r, a, c) {
                        n("string" == typeof e ? e : c || e), o();
                    }, window.addEventListener("error", a, {
                        once: !0
                    }), document.head.appendChild(c);
                })));

              case 4:
              case "end":
                return e.stop();
            }
        }), e);
    })));
    return function(t) {
        return e.apply(this, arguments);
    };
}());

function s() {
    return p.apply(this, arguments);
}

function p() {
    return (p = t(regeneratorRuntime.mark((function e() {
        var t, r, n, o, a, s, p, f, l = arguments;
        return regeneratorRuntime.wrap((function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                for (t = l.length, r = new Array(t), n = 0; n < t; n++) r[n] = l[n];
                return o = r[r.length - 1], a = r.slice(0, r.length - 1), s = "function-" + u(), 
                p = "window['".concat(s, "']=function(").concat(a.join("\n,\n"), "){\n").concat(o, "\n}"), 
                f = c(p), e.prev = 6, e.next = 9, i(f);

              case 9:
                return e.abrupt("return", Reflect.get(window, s));

              case 12:
                throw e.prev = 12, e.t0 = e.catch(6), e.t0;

              case 15:
                return e.prev = 15, URL.revokeObjectURL(f), Reflect.set(window, s, void 0), e.finish(15);

              case 19:
              case "end":
                return e.stop();
            }
        }), e, null, [ [ 6, 12, 15, 19 ] ]);
    })))).apply(this, arguments);
}

var f = a(function() {
    var e = t(regeneratorRuntime.mark((function e(t) {
        var r, n = arguments;
        return regeneratorRuntime.wrap((function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return r = n.length > 1 && void 0 !== n[1] ? n[1] : {}, e.abrupt("return", fetch(t, r).then((function(e) {
                    return e.ok ? e : Promise.reject(new Error("fetch failed:" + t));
                })).then((function(e) {
                    return e.text();
                })));

              case 2:
              case "end":
                return e.stop();
            }
        }), e);
    })));
    return function(t) {
        return e.apply(this, arguments);
    };
}()), l = c("\nMathJax.loader.preLoad(".concat([ "startup", "[tex]/action", "[tex]/all-packages", "[tex]/ams", "[tex]/amscd", "[tex]/bbox", "[tex]/boldsymbol", "[tex]/braket", "[tex]/bussproofs", "[tex]/cancel", "[tex]/cases", "[tex]/centernot", "[tex]/color", "[tex]/colortbl", "[tex]/colorv2", "[tex]/configmacros", "[tex]/empheq", "[tex]/enclose", "[tex]/extpfeil", "[tex]/gensymb", "[tex]/html", "[tex]/mathtools", "[tex]/mhchem", "[tex]/newcommand", "[tex]/noerrors", "[tex]/noundefined", "[tex]/physics", "[tex]/require", "[tex]/setoptions", "[tex]/tagformat", "[tex]/textcomp", "[tex]/textmacros", "[tex]/unicode", "[tex]/upgreek", "[tex]/verb", "core", "input/asciimath", "input/mml", "input/tex-base", "input/tex-full", "loader", "output/chtml", "output/chtml/fonts/tex" ].map((function(e) {
    return JSON.stringify(e);
})).join(","), ")\n    "));

var m = "https://cdn.jsdelivr.net/npm/mathjax@".concat("3.2.0", "/es5"), x = {
    startup: {
        typeset: !1
    },
    loader: {
        load: [],
        paths: {
            mathjax: m
        }
    }
}, h = URL.createObjectURL(new Blob([ "\nwindow.MathJax=".concat(JSON.stringify(x), "\n    ") ], {
    type: "application/javascript"
}));

var d = [ "core", "input/asciimath", "output/chtml", "input/tex-full", "input/mml", "output/chtml/fonts/tex" ].map(v), y = [ h, v("startup"), l ].concat(r(d));

function v(e) {
    return m + "/" + e + ".min.js";
}

function w() {
    return g.apply(this, arguments);
}

function g() {
    return (g = t(regeneratorRuntime.mark((function e() {
        var t, n, o, a, c, u, i, p, l, m, x, h, d;
        return regeneratorRuntime.wrap((function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, Promise.all(y.map((function(e) {
                    return f(e);
                })));

              case 2:
                return t = e.sent, n = t.join("\n;\n"), o = {}, a = {
                    get MathJax() {
                        return o;
                    },
                    set MathJax(e) {
                        o = e;
                    }
                }, c = new Proxy(window, {
                    get: function(e, t, r) {
                        var n = Reflect.get(a, t, a) || Reflect.get(window, t, window);
                        return "function" == typeof n ? n.bind(window) : n;
                    },
                    has: function(e, t) {
                        return Reflect.has(e, t) || Reflect.has(a, t);
                    },
                    set: function(e, t, r, n) {
                        return Reflect.set(a, t, r, a);
                    },
                    ownKeys: function(e) {
                        return Array.from(new Set([].concat(r(Reflect.ownKeys(e)), r(Reflect.ownKeys(a)))));
                    },
                    defineProperty: function(e, t, r) {
                        return Reflect.defineProperty(a, t, r);
                    },
                    deleteProperty: function(e, t) {
                        return Reflect.deleteProperty(a, t);
                    }
                }), u = new Proxy({}, {
                    get: function(e, t, r) {
                        return Reflect.get(o, t, o);
                    },
                    set: function(e, t, r, n) {
                        return Reflect.set(o, t, r, o);
                    },
                    has: function(e, t) {
                        return Reflect.has(o, t);
                    },
                    ownKeys: function(e) {
                        return Reflect.ownKeys(o);
                    },
                    defineProperty: function(e, t, r) {
                        return Reflect.defineProperty(o, t, r);
                    },
                    deleteProperty: function(e, t) {
                        return Reflect.deleteProperty(o, t);
                    }
                }), i = [ "self", "frames", "parent", "content", "window", "top", "globalThis" ], 
                p = Object.fromEntries(i.map((function(e) {
                    return [ e, c ];
                }))), l = {
                    value: void 0,
                    mathfontfamily: void 0,
                    mathfontsize: void 0
                }, m = Object.assign(l, {
                    MathJax: u
                }, p), x = Object.keys(m), h = Object.values(m), e.next = 16, s.apply(void 0, r(x).concat([ n ]));

              case 16:
                return d = e.sent, Reflect.apply(d, c, h), e.abrupt("return", o);

              case 19:
              case "end":
                return e.stop();
            }
        }), e);
    })))).apply(this, arguments);
}

var b, R = a(t(regeneratorRuntime.mark((function e() {
    return regeneratorRuntime.wrap((function(e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return e.abrupt("return", w());

          case 1:
          case "end":
            return e.stop();
        }
    }), e);
}))));

function j() {
    return P.apply(this, arguments);
}

function P() {
    return (P = t(regeneratorRuntime.mark((function e() {
        var t;
        return regeneratorRuntime.wrap((function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if (!b) {
                    e.next = 2;
                    break;
                }
                return e.abrupt("return", b);

              case 2:
                return e.next = 4, R();

              case 4:
                return t = e.sent, e.next = 7, t.startup.promise;

              case 7:
                return b = t, e.abrupt("return", t);

              case 9:
              case "end":
                return e.stop();
            }
        }), e);
    })))).apply(this, arguments);
}

var k = {
    latex: "tex2chtmlPromise",
    asciimath: "asciimath2chtmlPromise",
    mathml: "mathml2chtmlPromise"
};

function O() {
    return (O = t(regeneratorRuntime.mark((function e(t, r, n) {
        var a, c, u, i, s, p = arguments;
        return regeneratorRuntime.wrap((function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if (a = p.length > 3 && void 0 !== p[3] ? p[3] : {}, c = k[r]) {
                    e.next = 4;
                    break;
                }
                throw new Error('mathtype "latex" | "mathml" | "asciimath"');

              case 4:
                return e.next = 6, j();

              case 6:
                return u = e.sent, u.startup.document.addStyleSheet(), i = Object.assign(u.getMetricsFor(n), o, a), 
                e.next = 12, Reflect.apply(Reflect.get(u, c), u, [ t, i ]);

              case 12:
                s = e.sent, n.appendChild(s), u.startup.document.clear(), u.startup.document.updateDocument();

              case 16:
              case "end":
                return e.stop();
            }
        }), e);
    })))).apply(this, arguments);
}

exports.defaultoptions = o, exports.initmathjax = j, exports.rendermath = function(e, t, r) {
    return O.apply(this, arguments);
};
//# sourceMappingURL=index.cjs.map
