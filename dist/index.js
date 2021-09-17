import t from "regenerator-runtime";

function e(t, e, n, r, o, a, c) {
    try {
        var u = t[a](c), i = u.value;
    } catch (t) {
        return void n(t);
    }
    u.done ? e(i) : Promise.resolve(i).then(r, o);
}

function n(t) {
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

function r(t) {
    return function(t) {
        if (Array.isArray(t)) return o(t);
    }(t) || function(t) {
        if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t);
    }(t) || function(t, e) {
        if (!t) return;
        if ("string" == typeof t) return o(t, e);
        var n = Object.prototype.toString.call(t).slice(8, -1);
        "Object" === n && t.constructor && (n = t.constructor.name);
        if ("Map" === n || "Set" === n) return Array.from(t);
        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return o(t, e);
    }(t) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
}

function o(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
    return r;
}

var a = {
    containerWidth: 1261.3333740234375,
    em: 16,
    ex: 8.65,
    family: "",
    lineWidth: 1e6,
    scale: 1.223133484162896
};

function c(e) {
    var r = new Map;
    return function() {
        var o = n(t.mark((function n(o) {
            var a, c, u, i, s = arguments;
            return t.wrap((function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (!r.get(o)) {
                        t.next = 2;
                        break;
                    }
                    return t.abrupt("return", r.get(o));

                  case 2:
                    for (a = s.length, c = new Array(a > 1 ? a - 1 : 0), u = 1; u < a; u++) c[u - 1] = s[u];
                    return i = e.apply(void 0, [ o ].concat(c)), r.set(o, i), t.abrupt("return", i);

                  case 6:
                  case "end":
                    return t.stop();
                }
            }), n);
        })));
        return function(t) {
            return o.apply(this, arguments);
        };
    }();
}

function u(t) {
    return URL.createObjectURL(new Blob([ t ], {
        type: "application/javascript"
    }));
}

function i() {
    return "xxxxxxxxyxxxxyxxxyyxxxyxxxxxxxxxxxx".replace(/[xy]/g, (function(t) {
        var e = 16 * Math.random() | 0;
        return ("x" == t ? e : 3 & e | 8).toString(16);
    }));
}

var s = c(function() {
    var e = n(t.mark((function e(n) {
        var r, o = arguments;
        return t.wrap((function(t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                if (r = o.length > 1 && void 0 !== o[1] ? o[1] : {}, n) {
                    t.next = 3;
                    break;
                }
                throw new Error("src");

              case 3:
                return t.abrupt("return", new Promise((function(t, e) {
                    function o() {
                        try {
                            window.removeEventListener("error", a);
                        } catch (t) {}
                        c.remove(), c.onload = c.onerror = null;
                    }
                    var a = function(t) {
                        e(t.error), o();
                    }, c = document.createElement("script");
                    Object.assign(c, r, {
                        async: !0
                    }), c.src = n, c.onload = function() {
                        t(), o();
                    }, c.onerror = function(t, n, r, a, c) {
                        e("string" == typeof t ? t : c || t), o();
                    }, window.addEventListener("error", a, {
                        once: !0
                    }), document.head.appendChild(c);
                })));

              case 4:
              case "end":
                return t.stop();
            }
        }), e);
    })));
    return function(t) {
        return e.apply(this, arguments);
    };
}());

function f() {
    return p.apply(this, arguments);
}

function p() {
    return (p = n(t.mark((function e() {
        var n, r, o, a, c, f, p, l, x = arguments;
        return t.wrap((function(t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                for (n = x.length, r = new Array(n), o = 0; o < n; o++) r[o] = x[o];
                return a = r[r.length - 1], c = r.slice(0, r.length - 1), f = "function-" + i(), 
                p = "window['".concat(f, "']=function(").concat(c.join("\n,\n"), "){\n").concat(a, "\n}"), 
                l = u(p), t.prev = 6, t.next = 9, s(l);

              case 9:
                return t.abrupt("return", Reflect.get(window, f));

              case 12:
                throw t.prev = 12, t.t0 = t.catch(6), t.t0;

              case 15:
                return t.prev = 15, URL.revokeObjectURL(l), Reflect.set(window, f, void 0), t.finish(15);

              case 19:
              case "end":
                return t.stop();
            }
        }), e, null, [ [ 6, 12, 15, 19 ] ]);
    })))).apply(this, arguments);
}

var l = c(function() {
    var e = n(t.mark((function e(n) {
        var r, o = arguments;
        return t.wrap((function(t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                return r = o.length > 1 && void 0 !== o[1] ? o[1] : {}, t.abrupt("return", fetch(n, r).then((function(t) {
                    return t.ok ? t : Promise.reject(new Error("fetch failed:" + n));
                })).then((function(t) {
                    return t.text();
                })));

              case 2:
              case "end":
                return t.stop();
            }
        }), e);
    })));
    return function(t) {
        return e.apply(this, arguments);
    };
}()), x = u("\nMathJax.loader.preLoad(".concat([ "startup", "[tex]/action", "[tex]/all-packages", "[tex]/ams", "[tex]/amscd", "[tex]/bbox", "[tex]/boldsymbol", "[tex]/braket", "[tex]/bussproofs", "[tex]/cancel", "[tex]/cases", "[tex]/centernot", "[tex]/color", "[tex]/colortbl", "[tex]/colorv2", "[tex]/configmacros", "[tex]/empheq", "[tex]/enclose", "[tex]/extpfeil", "[tex]/gensymb", "[tex]/html", "[tex]/mathtools", "[tex]/mhchem", "[tex]/newcommand", "[tex]/noerrors", "[tex]/noundefined", "[tex]/physics", "[tex]/require", "[tex]/setoptions", "[tex]/tagformat", "[tex]/textcomp", "[tex]/textmacros", "[tex]/unicode", "[tex]/upgreek", "[tex]/verb", "core", "input/asciimath", "input/mml", "input/tex-base", "input/tex-full", "loader", "output/chtml", "output/chtml/fonts/tex" ].map((function(t) {
    return JSON.stringify(t);
})).join(","), ")\n    "));

var m = "https://cdn.jsdelivr.net/npm/mathjax@".concat("3.2.0", "/es5"), h = {
    startup: {
        typeset: !1
    },
    loader: {
        load: [],
        paths: {
            mathjax: m
        }
    }
}, d = URL.createObjectURL(new Blob([ "\nwindow.MathJax=".concat(JSON.stringify(h), "\n    ") ], {
    type: "application/javascript"
}));

var y = [ "core", "input/asciimath", "output/chtml", "input/tex-full", "input/mml", "output/chtml/fonts/tex" ].map(w), v = [ d, w("startup"), x ].concat(r(y));

function w(t) {
    return m + "/" + t + ".min.js";
}

function b() {
    return g.apply(this, arguments);
}

function g() {
    return (g = n(t.mark((function e() {
        var n, o, a, c, u, i, s, p, x, m, h, d, y;
        return t.wrap((function(t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                return t.next = 2, Promise.all(v.map((function(t) {
                    return l(t);
                })));

              case 2:
                return n = t.sent, o = n.join("\n;\n"), a = {}, c = {
                    get MathJax() {
                        return a;
                    },
                    set MathJax(t) {
                        a = t;
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
                        return Array.from(new Set([].concat(r(Reflect.ownKeys(t)), r(Reflect.ownKeys(c)))));
                    },
                    defineProperty: function(t, e, n) {
                        return Reflect.defineProperty(c, e, n);
                    },
                    deleteProperty: function(t, e) {
                        return Reflect.deleteProperty(c, e);
                    }
                }), i = new Proxy({}, {
                    get: function(t, e, n) {
                        return Reflect.get(a, e, a);
                    },
                    set: function(t, e, n, r) {
                        return Reflect.set(a, e, n, a);
                    },
                    has: function(t, e) {
                        return Reflect.has(a, e);
                    },
                    ownKeys: function(t) {
                        return Reflect.ownKeys(a);
                    },
                    defineProperty: function(t, e, n) {
                        return Reflect.defineProperty(a, e, n);
                    },
                    deleteProperty: function(t, e) {
                        return Reflect.deleteProperty(a, e);
                    }
                }), s = [ "self", "frames", "parent", "content", "window", "top", "globalThis" ], 
                p = Object.fromEntries(s.map((function(t) {
                    return [ t, u ];
                }))), x = {
                    value: void 0,
                    mathfontfamily: void 0,
                    mathfontsize: void 0
                }, m = Object.assign(x, {
                    MathJax: i
                }, p), h = Object.keys(m), d = Object.values(m), t.next = 16, f.apply(void 0, r(h).concat([ o ]));

              case 16:
                return y = t.sent, Reflect.apply(y, u, d), t.abrupt("return", a);

              case 19:
              case "end":
                return t.stop();
            }
        }), e);
    })))).apply(this, arguments);
}

var R, j = c(n(t.mark((function e() {
    return t.wrap((function(t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            return t.abrupt("return", b());

          case 1:
          case "end":
            return t.stop();
        }
    }), e);
}))));

function k() {
    return P.apply(this, arguments);
}

function P() {
    return (P = n(t.mark((function e() {
        var n;
        return t.wrap((function(t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                if (!R) {
                    t.next = 2;
                    break;
                }
                return t.abrupt("return", R);

              case 2:
                return t.next = 4, j();

              case 4:
                return n = t.sent, t.next = 7, n.startup.promise;

              case 7:
                return R = n, t.abrupt("return", n);

              case 9:
              case "end":
                return t.stop();
            }
        }), e);
    })))).apply(this, arguments);
}

var O = {
    latex: "tex2chtmlPromise",
    asciimath: "asciimath2chtmlPromise",
    mathml: "mathml2chtmlPromise"
};

function S(t, e) {
    return A.apply(this, arguments);
}

function A() {
    return (A = n(t.mark((function e(n, r) {
        var o, c, u, i, s, f, p = arguments;
        return t.wrap((function(t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                if (o = p.length > 2 && void 0 !== p[2] ? p[2] : {}, c = document.createElement("div"), 
                u = O[r]) {
                    t.next = 5;
                    break;
                }
                throw new Error('mathtype "latex" | "mathml" | "asciimath"');

              case 5:
                return t.next = 7, k();

              case 7:
                return i = t.sent, i.startup.document.addStyleSheet(), s = Object.assign({}, a, o), 
                t.next = 13, Reflect.apply(Reflect.get(i, u), i, [ n.trim(), s ]);

              case 13:
                return f = t.sent, c.appendChild(f), i.startup.document.clear(), i.startup.document.updateDocument(), 
                t.abrupt("return", c.innerHTML);

              case 18:
              case "end":
                return t.stop();
            }
        }), e);
    })))).apply(this, arguments);
}

export { a as defaultoptions, k as initmathjax, S as rendermath };
//# sourceMappingURL=index.js.map
