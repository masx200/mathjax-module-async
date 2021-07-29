function t(t, e, n, r, o, a, u) {
    try {
        var c = t[a](u), i = c.value;
    } catch (t) {
        return void n(t);
    }
    c.done ? e(i) : Promise.resolve(i).then(r, o);
}

function e(e) {
    return function() {
        var n = this, r = arguments;
        return new Promise((function(o, a) {
            var u = e.apply(n, r);
            function c(e) {
                t(u, o, a, c, i, "next", e);
            }
            function i(e) {
                t(u, o, a, c, i, "throw", e);
            }
            c(void 0);
        }));
    };
}

function n(t, e) {
    return (n = Object.setPrototypeOf || function(t, e) {
        return t.__proto__ = e, t;
    })(t, e);
}

function r() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), 
        !0;
    } catch (t) {
        return !1;
    }
}

function o(t, e, a) {
    return (o = r() ? Reflect.construct : function(t, e, r) {
        var o = [ null ];
        o.push.apply(o, e);
        var a = new (Function.bind.apply(t, o));
        return r && n(a, r.prototype), a;
    }).apply(null, arguments);
}

function a(t) {
    return function(t) {
        if (Array.isArray(t)) return u(t);
    }(t) || function(t) {
        if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t);
    }(t) || function(t, e) {
        if (!t) return;
        if ("string" == typeof t) return u(t, e);
        var n = Object.prototype.toString.call(t).slice(8, -1);
        "Object" === n && t.constructor && (n = t.constructor.name);
        if ("Map" === n || "Set" === n) return Array.from(t);
        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return u(t, e);
    }(t) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
}

function u(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
    return r;
}

function c(t) {
    var n = new Map;
    return function() {
        var r = e(regeneratorRuntime.mark((function e(r) {
            var o, a, u, c, i = arguments;
            return regeneratorRuntime.wrap((function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (!n.get(r)) {
                        e.next = 2;
                        break;
                    }
                    return e.abrupt("return", n.get(r));

                  case 2:
                    for (o = i.length, a = new Array(o > 1 ? o - 1 : 0), u = 1; u < o; u++) a[u - 1] = i[u];
                    return c = t.apply(void 0, [ r ].concat(a)), n.set(r, c), e.abrupt("return", c);

                  case 6:
                  case "end":
                    return e.stop();
                }
            }), e);
        })));
        return function(t) {
            return r.apply(this, arguments);
        };
    }();
}

"undefined" == typeof regeneratorRuntime && function(t) {
    var e = new XMLHttpRequest;
    e.open("GET", t, !1), e.send(null);
    var n = e.responseText;
    new Function(n)();
}("https://cdn.jsdelivr.net/npm/regenerator-runtime@0.13.9/runtime.min.js");

var i = c(function() {
    var t = e(regeneratorRuntime.mark((function t(e) {
        var n, r = arguments;
        return regeneratorRuntime.wrap((function(t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                return n = r.length > 1 && void 0 !== r[1] ? r[1] : {}, t.abrupt("return", fetch(e, n).then((function(t) {
                    return t.ok ? t : Promise.reject(new Error("fetch failed:" + e));
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
}()), s = [ "startup", "[tex]/action", "[tex]/all-packages", "[tex]/ams", "[tex]/amscd", "[tex]/bbox", "[tex]/boldsymbol", "[tex]/braket", "[tex]/bussproofs", "[tex]/cancel", "[tex]/cases", "[tex]/centernot", "[tex]/color", "[tex]/colortbl", "[tex]/colorv2", "[tex]/configmacros", "[tex]/empheq", "[tex]/enclose", "[tex]/extpfeil", "[tex]/gensymb", "[tex]/html", "[tex]/mathtools", "[tex]/mhchem", "[tex]/newcommand", "[tex]/noerrors", "[tex]/noundefined", "[tex]/physics", "[tex]/require", "[tex]/setoptions", "[tex]/tagformat", "[tex]/textcomp", "[tex]/textmacros", "[tex]/unicode", "[tex]/upgreek", "[tex]/verb", "core", "input/asciimath", "input/mml", "input/tex-base", "input/tex-full", "loader", "output/chtml", "output/chtml/fonts/tex" ], f = URL.createObjectURL(new Blob([ "\nMathJax.loader.preLoad(".concat(s.map((function(t) {
    return JSON.stringify(t);
})).join(","), ")\n    ") ], {
    type: "application/javascript"
}));

var p = "https://cdn.jsdelivr.net/npm/mathjax@".concat("3.2.0", "/es5"), l = {
    startup: {
        typeset: !1
    },
    loader: {
        load: [],
        paths: {
            mathjax: p
        }
    }
}, m = URL.createObjectURL(new Blob([ "\nwindow.MathJax=".concat(JSON.stringify(l), "\n    ") ], {
    type: "application/javascript"
}));

var x = [ "core", "input/asciimath", "output/chtml", "input/tex-full", "input/mml", "output/chtml/fonts/tex" ].map(d), h = [ m, d("startup"), f ].concat(a(x));

function d(t) {
    return p + "/" + t + ".min.js";
}

function y() {
    return w.apply(this, arguments);
}

function w() {
    return (w = e(regeneratorRuntime.mark((function t() {
        var e, n, r, u, c, s, f, p, l, m, x;
        return regeneratorRuntime.wrap((function(t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                return t.next = 2, Promise.all(h.map((function(t) {
                    return i(t);
                })));

              case 2:
                return e = t.sent, n = e.join("\n;\n"), r = {}, t.t0 = Proxy, t.t1 = {
                    get MathJax() {
                        return r;
                    },
                    set MathJax(t) {
                        r = t;
                    }
                }, t.t2 = {
                    get: function(t, e, n) {
                        var r = Reflect.get(t, e, n) || Reflect.get(window, e, window);
                        return "function" == typeof r ? r.bind(window) : r;
                    },
                    has: function(t, e) {
                        return Reflect.has(t, e) || Reflect.has(window, e);
                    },
                    ownKeys: function(t) {
                        return Reflect.ownKeys(t) || Reflect.ownKeys(window);
                    }
                }, u = new t.t0(t.t1, t.t2), c = new Proxy({}, {
                    get: function(t, e, n) {
                        return Reflect.get(r, e, r);
                    },
                    set: function(t, e, n, o) {
                        return Reflect.set(r, e, n, r);
                    },
                    has: function(t, e) {
                        return Reflect.has(r, e);
                    },
                    ownKeys: function(t) {
                        return Reflect.ownKeys(r);
                    },
                    defineProperty: function(t, e, n) {
                        return Reflect.defineProperty(r, e, n);
                    },
                    deleteProperty: function(t, e) {
                        return Reflect.deleteProperty(r, e);
                    }
                }), s = Object.fromEntries(Reflect.ownKeys(window).filter((function(t) {
                    return Object.is(window, Reflect.get(window, t));
                })).map((function(t) {
                    return [ t, u ];
                }))), f = {
                    value: void 0,
                    mathfontfamily: void 0,
                    mathfontsize: void 0
                }, p = Object.assign(f, {
                    MathJax: c
                }, s), l = Object.keys(p), m = Object.values(p), x = o(Function, a(l).concat([ n ])), 
                Reflect.apply(x, u, m), t.abrupt("return", r);

              case 18:
              case "end":
                return t.stop();
            }
        }), t);
    })))).apply(this, arguments);
}

var v, b = c(e(regeneratorRuntime.mark((function t() {
    return regeneratorRuntime.wrap((function(t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            return t.abrupt("return", y());

          case 1:
          case "end":
            return t.stop();
        }
    }), t);
}))));

function g() {
    return R.apply(this, arguments);
}

function R() {
    return (R = e(regeneratorRuntime.mark((function t() {
        var e;
        return regeneratorRuntime.wrap((function(t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                if (!v) {
                    t.next = 2;
                    break;
                }
                return t.abrupt("return", v);

              case 2:
                return t.next = 4, b();

              case 4:
                return e = t.sent, t.next = 7, e.startup.promise;

              case 7:
                return v = e, t.abrupt("return", e);

              case 9:
              case "end":
                return t.stop();
            }
        }), t);
    })))).apply(this, arguments);
}

var j = {
    latex: "tex2chtmlPromise",
    asciimath: "asciimath2chtmlPromise",
    mathml: "mathml2chtmlPromise"
};

function O(t, e, n) {
    return P.apply(this, arguments);
}

function P() {
    return (P = e(regeneratorRuntime.mark((function t(e, n, r) {
        var o, a, u, c, i, s = arguments;
        return regeneratorRuntime.wrap((function(t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                if (o = s.length > 3 && void 0 !== s[3] ? s[3] : {}, a = j[n]) {
                    t.next = 4;
                    break;
                }
                throw new Error("mathtype");

              case 4:
                return t.next = 6, g();

              case 6:
                return u = t.sent, c = Object.assign(u.getMetricsFor(r), o), t.next = 10, Reflect.apply(Reflect.get(u, a), u, [ e, c ]);

              case 10:
                i = t.sent, r.appendChild(i), u.startup.document.clear(), u.startup.document.updateDocument();

              case 14:
              case "end":
                return t.stop();
            }
        }), t);
    })))).apply(this, arguments);
}

export { g as initmathjax, O as rendermath };
//# sourceMappingURL=index.js.map
