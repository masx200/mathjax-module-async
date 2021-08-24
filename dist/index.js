function e(e, t, n, r, o, a, c) {
    try {
        var u = e[a](c), i = u.value;
    } catch (e) {
        return void n(e);
    }
    u.done ? t(i) : Promise.resolve(i).then(r, o);
}

function t(t) {
    return function() {
        var n = this, r = arguments;
        return new Promise((function(o, a) {
            var c = t.apply(n, r);
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

function n(e) {
    return function(e) {
        if (Array.isArray(e)) return r(e);
    }(e) || function(e) {
        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
    }(e) || function(e, t) {
        if (!e) return;
        if ("string" == typeof e) return r(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        "Object" === n && e.constructor && (n = e.constructor.name);
        if ("Map" === n || "Set" === n) return Array.from(e);
        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return r(e, t);
    }(e) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
}

function r(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
}

function o(e) {
    var n = new Map;
    return function() {
        var r = t(regeneratorRuntime.mark((function t(r) {
            var o, a, c, u, i = arguments;
            return regeneratorRuntime.wrap((function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (!n.get(r)) {
                        t.next = 2;
                        break;
                    }
                    return t.abrupt("return", n.get(r));

                  case 2:
                    for (o = i.length, a = new Array(o > 1 ? o - 1 : 0), c = 1; c < o; c++) a[c - 1] = i[c];
                    return u = e.apply(void 0, [ r ].concat(a)), n.set(r, u), t.abrupt("return", u);

                  case 6:
                  case "end":
                    return t.stop();
                }
            }), t);
        })));
        return function(e) {
            return r.apply(this, arguments);
        };
    }();
}

function a(e) {
    return URL.createObjectURL(new Blob([ e ], {
        type: "application/javascript"
    }));
}

function c() {
    return "xxxxxxxxyxxxxyxxxyyxxxyxxxxxxxxxxxx".replace(/[xy]/g, (function(e) {
        var t = 16 * Math.random() | 0;
        return ("x" == e ? t : 3 & t | 8).toString(16);
    }));
}

"undefined" == typeof regeneratorRuntime && function(e) {
    var t = new XMLHttpRequest;
    t.open("GET", e, !1), t.send(null);
    var n = t.responseText;
    new Function(n)();
}("https://cdn.jsdelivr.net/npm/regenerator-runtime@0.13.9/runtime.min.js");

var u = o(function() {
    var e = t(regeneratorRuntime.mark((function e(t) {
        var n, r = arguments;
        return regeneratorRuntime.wrap((function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if (n = r.length > 1 && void 0 !== r[1] ? r[1] : {}, t) {
                    e.next = 3;
                    break;
                }
                throw new Error("src");

              case 3:
                return e.abrupt("return", new Promise((function(e, r) {
                    function o() {
                        try {
                            window.removeEventListener("error", a);
                        } catch (e) {}
                        c.remove(), c.onload = c.onerror = null;
                    }
                    var a = function(e) {
                        r(e.error), o();
                    }, c = document.createElement("script");
                    Object.assign(c, n, {
                        async: !0
                    }), c.src = t, c.onload = function() {
                        e(), o();
                    }, c.onerror = function(e, t, n, a, c) {
                        r("string" == typeof e ? e : c || e), o();
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

function i() {
    return s.apply(this, arguments);
}

function s() {
    return (s = t(regeneratorRuntime.mark((function e() {
        var t, n, r, o, i, s, f, p, l = arguments;
        return regeneratorRuntime.wrap((function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                for (t = l.length, n = new Array(t), r = 0; r < t; r++) n[r] = l[r];
                return o = n[n.length - 1], i = n.slice(0, n.length - 1), s = "function-" + c(), 
                f = "window['".concat(s, "']=function(").concat(i.join("\n,\n"), "){\n").concat(o, "\n}"), 
                p = a(f), e.prev = 6, e.next = 9, u(p);

              case 9:
                return e.abrupt("return", Reflect.get(window, s));

              case 12:
                throw e.prev = 12, e.t0 = e.catch(6), e.t0;

              case 15:
                return e.prev = 15, URL.revokeObjectURL(p), Reflect.set(window, s, void 0), e.finish(15);

              case 19:
              case "end":
                return e.stop();
            }
        }), e, null, [ [ 6, 12, 15, 19 ] ]);
    })))).apply(this, arguments);
}

var f = o(function() {
    var e = t(regeneratorRuntime.mark((function e(t) {
        var n, r = arguments;
        return regeneratorRuntime.wrap((function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return n = r.length > 1 && void 0 !== r[1] ? r[1] : {}, e.abrupt("return", fetch(t, n).then((function(e) {
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
}()), p = a("\nMathJax.loader.preLoad(".concat([ "startup", "[tex]/action", "[tex]/all-packages", "[tex]/ams", "[tex]/amscd", "[tex]/bbox", "[tex]/boldsymbol", "[tex]/braket", "[tex]/bussproofs", "[tex]/cancel", "[tex]/cases", "[tex]/centernot", "[tex]/color", "[tex]/colortbl", "[tex]/colorv2", "[tex]/configmacros", "[tex]/empheq", "[tex]/enclose", "[tex]/extpfeil", "[tex]/gensymb", "[tex]/html", "[tex]/mathtools", "[tex]/mhchem", "[tex]/newcommand", "[tex]/noerrors", "[tex]/noundefined", "[tex]/physics", "[tex]/require", "[tex]/setoptions", "[tex]/tagformat", "[tex]/textcomp", "[tex]/textmacros", "[tex]/unicode", "[tex]/upgreek", "[tex]/verb", "core", "input/asciimath", "input/mml", "input/tex-base", "input/tex-full", "loader", "output/chtml", "output/chtml/fonts/tex" ].map((function(e) {
    return JSON.stringify(e);
})).join(","), ")\n    "));

var l = "https://cdn.jsdelivr.net/npm/mathjax@".concat("3.2.0", "/es5"), x = {
    startup: {
        typeset: !1
    },
    loader: {
        load: [],
        paths: {
            mathjax: l
        }
    }
}, m = URL.createObjectURL(new Blob([ "\nwindow.MathJax=".concat(JSON.stringify(x), "\n    ") ], {
    type: "application/javascript"
}));

var h = [ "core", "input/asciimath", "output/chtml", "input/tex-full", "input/mml", "output/chtml/fonts/tex" ].map(y), d = [ m, y("startup"), p ].concat(n(h));

function y(e) {
    return l + "/" + e + ".min.js";
}

function v() {
    return w.apply(this, arguments);
}

function w() {
    return (w = t(regeneratorRuntime.mark((function e() {
        var t, r, o, a, c, u, s, p, l, x, m, h, y;
        return regeneratorRuntime.wrap((function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, Promise.all(d.map((function(e) {
                    return f(e);
                })));

              case 2:
                return t = e.sent, r = t.join("\n;\n"), o = {}, a = {
                    get MathJax() {
                        return o;
                    },
                    set MathJax(e) {
                        o = e;
                    }
                }, c = new Proxy(window, {
                    get: function(e, t, n) {
                        var r = Reflect.get(a, t, a) || Reflect.get(window, t, window);
                        return "function" == typeof r ? r.bind(window) : r;
                    },
                    has: function(e, t) {
                        return Reflect.has(e, t) || Reflect.has(a, t);
                    },
                    set: function(e, t, n, r) {
                        return Reflect.set(a, t, n, a);
                    },
                    ownKeys: function(e) {
                        return Array.from(new Set([].concat(n(Reflect.ownKeys(e)), n(Reflect.ownKeys(a)))));
                    },
                    defineProperty: function(e, t, n) {
                        return Reflect.defineProperty(a, t, n);
                    },
                    deleteProperty: function(e, t) {
                        return Reflect.deleteProperty(a, t);
                    }
                }), u = new Proxy({}, {
                    get: function(e, t, n) {
                        return Reflect.get(o, t, o);
                    },
                    set: function(e, t, n, r) {
                        return Reflect.set(o, t, n, o);
                    },
                    has: function(e, t) {
                        return Reflect.has(o, t);
                    },
                    ownKeys: function(e) {
                        return Reflect.ownKeys(o);
                    },
                    defineProperty: function(e, t, n) {
                        return Reflect.defineProperty(o, t, n);
                    },
                    deleteProperty: function(e, t) {
                        return Reflect.deleteProperty(o, t);
                    }
                }), s = [ "self", "frames", "parent", "content", "window", "top", "globalThis" ], 
                p = Object.fromEntries(s.map((function(e) {
                    return [ e, c ];
                }))), l = {
                    value: void 0,
                    mathfontfamily: void 0,
                    mathfontsize: void 0
                }, x = Object.assign(l, {
                    MathJax: u
                }, p), m = Object.keys(x), h = Object.values(x), e.next = 16, i.apply(void 0, n(m).concat([ r ]));

              case 16:
                return y = e.sent, Reflect.apply(y, c, h), e.abrupt("return", o);

              case 19:
              case "end":
                return e.stop();
            }
        }), e);
    })))).apply(this, arguments);
}

var g, b = o(t(regeneratorRuntime.mark((function e() {
    return regeneratorRuntime.wrap((function(e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return e.abrupt("return", v());

          case 1:
          case "end":
            return e.stop();
        }
    }), e);
}))));

function R() {
    return j.apply(this, arguments);
}

function j() {
    return (j = t(regeneratorRuntime.mark((function e() {
        var t;
        return regeneratorRuntime.wrap((function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if (!g) {
                    e.next = 2;
                    break;
                }
                return e.abrupt("return", g);

              case 2:
                return e.next = 4, b();

              case 4:
                return t = e.sent, e.next = 7, t.startup.promise;

              case 7:
                return g = t, e.abrupt("return", t);

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

function P(e, t, n) {
    return O.apply(this, arguments);
}

function O() {
    return (O = t(regeneratorRuntime.mark((function e(t, n, r) {
        var o, a, c, u, i, s = arguments;
        return regeneratorRuntime.wrap((function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if (o = s.length > 3 && void 0 !== s[3] ? s[3] : {}, a = k[n]) {
                    e.next = 4;
                    break;
                }
                throw new Error("mathtype");

              case 4:
                return e.next = 6, R();

              case 6:
                return c = e.sent, c.startup.document.addStyleSheet(), u = Object.assign(c.getMetricsFor(r), o), 
                e.next = 12, Reflect.apply(Reflect.get(c, a), c, [ t, u ]);

              case 12:
                i = e.sent, r.appendChild(i), c.startup.document.clear(), c.startup.document.updateDocument();

              case 16:
              case "end":
                return e.stop();
            }
        }), e);
    })))).apply(this, arguments);
}

export { R as initmathjax, P as rendermath };
//# sourceMappingURL=index.js.map
