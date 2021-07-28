"use strict";

function n(t) {
    return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
        return typeof n;
    } : function(n) {
        return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
    })(t);
}

function t(n, t, e, r, o, i, a) {
    try {
        var m = n[i](a), c = m.value;
    } catch (n) {
        return void e(n);
    }
    m.done ? t(c) : Promise.resolve(c).then(r, o);
}

function e(n) {
    return function() {
        var e = this, r = arguments;
        return new Promise((function(o, i) {
            var a = n.apply(e, r);
            function m(n) {
                t(a, o, i, m, c, "next", n);
            }
            function c(n) {
                t(a, o, i, m, c, "throw", n);
            }
            m(void 0);
        }));
    };
}

function r(n, t) {
    return (r = Object.setPrototypeOf || function(n, t) {
        return n.__proto__ = t, n;
    })(n, t);
}

function o() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), 
        !0;
    } catch (n) {
        return !1;
    }
}

function i(n, t, e) {
    return (i = o() ? Reflect.construct : function(n, t, e) {
        var o = [ null ];
        o.push.apply(o, t);
        var i = new (Function.bind.apply(n, o));
        return e && r(i, e.prototype), i;
    }).apply(null, arguments);
}

function a(n) {
    return function(n) {
        if (Array.isArray(n)) return m(n);
    }(n) || function(n) {
        if ("undefined" != typeof Symbol && null != n[Symbol.iterator] || null != n["@@iterator"]) return Array.from(n);
    }(n) || function(n, t) {
        if (!n) return;
        if ("string" == typeof n) return m(n, t);
        var e = Object.prototype.toString.call(n).slice(8, -1);
        "Object" === e && n.constructor && (e = n.constructor.name);
        if ("Map" === e || "Set" === e) return Array.from(n);
        if ("Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return m(n, t);
    }(n) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
}

function m(n, t) {
    (null == t || t > n.length) && (t = n.length);
    for (var e = 0, r = new Array(t); e < t; e++) r[e] = n[e];
    return r;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

function c(n) {
    var t = new Map;
    return function() {
        var r = e(regeneratorRuntime.mark((function e(r) {
            var o, i, a, m, c = arguments;
            return regeneratorRuntime.wrap((function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (!t.get(r)) {
                        e.next = 2;
                        break;
                    }
                    return e.abrupt("return", t.get(r));

                  case 2:
                    for (o = c.length, i = new Array(o > 1 ? o - 1 : 0), a = 1; a < o; a++) i[a - 1] = c[a];
                    return m = n.apply(void 0, [ r ].concat(i)), t.set(r, m), e.abrupt("return", m);

                  case 6:
                  case "end":
                    return e.stop();
                }
            }), e);
        })));
        return function(n) {
            return r.apply(this, arguments);
        };
    }();
}

!function(t) {
    var e = function(t) {
        var e, r = Object.prototype, o = r.hasOwnProperty, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", m = i.asyncIterator || "@@asyncIterator", c = i.toStringTag || "@@toStringTag";
        function l(n, t, e) {
            return Object.defineProperty(n, t, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }), n[t];
        }
        try {
            l({}, "");
        } catch (n) {
            l = function(n, t, e) {
                return n[t] = e;
            };
        }
        function f(n, t, e, r) {
            var o = t && t.prototype instanceof h ? t : h, i = Object.create(o.prototype), a = new k(r || []);
            return i._invoke = function(n, t, e) {
                var r = p;
                return function(o, i) {
                    if (r === u) throw new Error("Generator is already running");
                    if (r === d) {
                        if ("throw" === o) throw i;
                        return O();
                    }
                    for (e.method = o, e.arg = i; ;) {
                        var a = e.delegate;
                        if (a) {
                            var m = T(a, e);
                            if (m) {
                                if (m === j) continue;
                                return m;
                            }
                        }
                        if ("next" === e.method) e.sent = e._sent = e.arg; else if ("throw" === e.method) {
                            if (r === p) throw r = d, e.arg;
                            e.dispatchException(e.arg);
                        } else "return" === e.method && e.abrupt("return", e.arg);
                        r = u;
                        var c = x(n, t, e);
                        if ("normal" === c.type) {
                            if (r = e.done ? d : s, c.arg === j) continue;
                            return {
                                value: c.arg,
                                done: e.done
                            };
                        }
                        "throw" === c.type && (r = d, e.method = "throw", e.arg = c.arg);
                    }
                };
            }(n, e, a), i;
        }
        function x(n, t, e) {
            try {
                return {
                    type: "normal",
                    arg: n.call(t, e)
                };
            } catch (n) {
                return {
                    type: "throw",
                    arg: n
                };
            }
        }
        t.wrap = f;
        var p = "suspendedStart", s = "suspendedYield", u = "executing", d = "completed", j = {};
        function h() {}
        function g() {}
        function y() {}
        var b = {};
        l(b, a, (function() {
            return this;
        }));
        var w = Object.getPrototypeOf, v = w && w(w(S([])));
        v && v !== r && o.call(v, a) && (b = v);
        var X = y.prototype = h.prototype = Object.create(b);
        function E(n) {
            [ "next", "throw", "return" ].forEach((function(t) {
                l(n, t, (function(n) {
                    return this._invoke(t, n);
                }));
            }));
        }
        function M(t, e) {
            function r(i, a, m, c) {
                var l = x(t[i], t, a);
                if ("throw" !== l.type) {
                    var f = l.arg, p = f.value;
                    return p && "object" === n(p) && o.call(p, "__await") ? e.resolve(p.__await).then((function(n) {
                        r("next", n, m, c);
                    }), (function(n) {
                        r("throw", n, m, c);
                    })) : e.resolve(p).then((function(n) {
                        f.value = n, m(f);
                    }), (function(n) {
                        return r("throw", n, m, c);
                    }));
                }
                c(l.arg);
            }
            var i;
            this._invoke = function(n, t) {
                function o() {
                    return new e((function(e, o) {
                        r(n, t, e, o);
                    }));
                }
                return i = i ? i.then(o, o) : o();
            };
        }
        function T(n, t) {
            var r = n.iterator[t.method];
            if (r === e) {
                if (t.delegate = null, "throw" === t.method) {
                    if (n.iterator.return && (t.method = "return", t.arg = e, T(n, t), "throw" === t.method)) return j;
                    t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method");
                }
                return j;
            }
            var o = x(r, n.iterator, t.arg);
            if ("throw" === o.type) return t.method = "throw", t.arg = o.arg, t.delegate = null, 
            j;
            var i = o.arg;
            return i ? i.done ? (t[n.resultName] = i.value, t.next = n.nextLoc, "return" !== t.method && (t.method = "next", 
            t.arg = e), t.delegate = null, j) : i : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), 
            t.delegate = null, j);
        }
        function J(n) {
            var t = {
                tryLoc: n[0]
            };
            1 in n && (t.catchLoc = n[1]), 2 in n && (t.finallyLoc = n[2], t.afterLoc = n[3]), 
            this.tryEntries.push(t);
        }
        function R(n) {
            var t = n.completion || {};
            t.type = "normal", delete t.arg, n.completion = t;
        }
        function k(n) {
            this.tryEntries = [ {
                tryLoc: "root"
            } ], n.forEach(J, this), this.reset(!0);
        }
        function S(n) {
            if (n) {
                var t = n[a];
                if (t) return t.call(n);
                if ("function" == typeof n.next) return n;
                if (!isNaN(n.length)) {
                    var r = -1, i = function t() {
                        for (;++r < n.length; ) if (o.call(n, r)) return t.value = n[r], t.done = !1, t;
                        return t.value = e, t.done = !0, t;
                    };
                    return i.next = i;
                }
            }
            return {
                next: O
            };
        }
        function O() {
            return {
                value: e,
                done: !0
            };
        }
        return g.prototype = y, l(X, "constructor", y), l(y, "constructor", g), g.displayName = l(y, c, "GeneratorFunction"), 
        t.isGeneratorFunction = function(n) {
            var t = "function" == typeof n && n.constructor;
            return !!t && (t === g || "GeneratorFunction" === (t.displayName || t.name));
        }, t.mark = function(n) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(n, y) : (n.__proto__ = y, l(n, c, "GeneratorFunction")), 
            n.prototype = Object.create(X), n;
        }, t.awrap = function(n) {
            return {
                __await: n
            };
        }, E(M.prototype), l(M.prototype, m, (function() {
            return this;
        })), t.AsyncIterator = M, t.async = function(n, e, r, o, i) {
            void 0 === i && (i = Promise);
            var a = new M(f(n, e, r, o), i);
            return t.isGeneratorFunction(e) ? a : a.next().then((function(n) {
                return n.done ? n.value : a.next();
            }));
        }, E(X), l(X, c, "Generator"), l(X, a, (function() {
            return this;
        })), l(X, "toString", (function() {
            return "[object Generator]";
        })), t.keys = function(n) {
            var t = [];
            for (var e in n) t.push(e);
            return t.reverse(), function e() {
                for (;t.length; ) {
                    var r = t.pop();
                    if (r in n) return e.value = r, e.done = !1, e;
                }
                return e.done = !0, e;
            };
        }, t.values = S, k.prototype = {
            constructor: k,
            reset: function(n) {
                if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, 
                this.method = "next", this.arg = e, this.tryEntries.forEach(R), !n) for (var t in this) "t" === t.charAt(0) && o.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = e);
            },
            stop: function() {
                this.done = !0;
                var n = this.tryEntries[0].completion;
                if ("throw" === n.type) throw n.arg;
                return this.rval;
            },
            dispatchException: function(n) {
                if (this.done) throw n;
                var t = this;
                function r(r, o) {
                    return m.type = "throw", m.arg = n, t.next = r, o && (t.method = "next", t.arg = e), 
                    !!o;
                }
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                    var a = this.tryEntries[i], m = a.completion;
                    if ("root" === a.tryLoc) return r("end");
                    if (a.tryLoc <= this.prev) {
                        var c = o.call(a, "catchLoc"), l = o.call(a, "finallyLoc");
                        if (c && l) {
                            if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                            if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                        } else if (c) {
                            if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                        } else {
                            if (!l) throw new Error("try statement without catch or finally");
                            if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                        }
                    }
                }
            },
            abrupt: function(n, t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                    var r = this.tryEntries[e];
                    if (r.tryLoc <= this.prev && o.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                        var i = r;
                        break;
                    }
                }
                i && ("break" === n || "continue" === n) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                var a = i ? i.completion : {};
                return a.type = n, a.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, 
                j) : this.complete(a);
            },
            complete: function(n, t) {
                if ("throw" === n.type) throw n.arg;
                return "break" === n.type || "continue" === n.type ? this.next = n.arg : "return" === n.type ? (this.rval = this.arg = n.arg, 
                this.method = "return", this.next = "end") : "normal" === n.type && t && (this.next = t), 
                j;
            },
            finish: function(n) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var e = this.tryEntries[t];
                    if (e.finallyLoc === n) return this.complete(e.completion, e.afterLoc), R(e), j;
                }
            },
            catch: function(n) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var e = this.tryEntries[t];
                    if (e.tryLoc === n) {
                        var r = e.completion;
                        if ("throw" === r.type) {
                            var o = r.arg;
                            R(e);
                        }
                        return o;
                    }
                }
                throw new Error("illegal catch attempt");
            },
            delegateYield: function(n, t, r) {
                return this.delegate = {
                    iterator: S(n),
                    resultName: t,
                    nextLoc: r
                }, "next" === this.method && (this.arg = e), j;
            }
        }, t;
    }(t.exports);
    try {
        regeneratorRuntime = e;
    } catch (t) {
        "object" === ("undefined" == typeof globalThis ? "undefined" : n(globalThis)) ? globalThis.regeneratorRuntime = e : Function("r", "regeneratorRuntime = r")(e);
    }
}({
    exports: {}
});

var l = c(function() {
    var n = e(regeneratorRuntime.mark((function n(t) {
        var e, r = arguments;
        return regeneratorRuntime.wrap((function(n) {
            for (;;) switch (n.prev = n.next) {
              case 0:
                if (e = r.length > 1 && void 0 !== r[1] ? r[1] : {}, t) {
                    n.next = 3;
                    break;
                }
                throw new Error("href");

              case 3:
                return n.abrupt("return", new Promise((function(n, r) {
                    var o = document.createElement("link");
                    Object.assign(o, e, {
                        rel: "stylesheet"
                    }), o.href = t, o.onload = function() {
                        n();
                    }, o.onerror = function(n, t, e, o, i) {
                        r("string" == typeof n ? n : i || n);
                    }, document.head.appendChild(o);
                })));

              case 4:
              case "end":
                return n.stop();
            }
        }), n);
    })));
    return function(t) {
        return n.apply(this, arguments);
    };
}()), f = "https://cdn.jsdelivr.net/npm/mathjax@".concat("3.2.0", "/es5");

var x = URL.createObjectURL(new Blob([ '@charset "utf-8";\n\n    mjx-mtext {\n        display: inline-block;\n        text-align: left;\n    }\n    \n    mjx-mfenced {\n        display: inline-block;\n        text-align: left;\n    }\n    \n    mjx-msqrt {\n        display: inline-block;\n        text-align: left;\n    }\n    \n    mjx-root {\n        display: inline-block;\n        white-space: nowrap;\n    }\n    \n    mjx-surd {\n        display: inline-block;\n        vertical-align: top;\n    }\n    \n    mjx-sqrt {\n        display: inline-block;\n        padding-top: 0.07em;\n    }\n    \n    mjx-sqrt > mjx-box {\n        border-top: 0.07em solid;\n    }\n    \n    mjx-sqrt.mjx-tall > mjx-box {\n        padding-left: 0.3em;\n        margin-left: -0.3em;\n    }\n    \n    mjx-c.mjx-c1D44E.TEX-I::before {\n        padding: 0.441em 0.529em 0.01em 0px;\n        content: "a";\n    }\n    \n    mjx-c.mjx-c2062::before {\n        padding: 0px;\n        content: "";\n    }\n    \n    mjx-c.mjx-c1D465.TEX-I::before {\n        padding: 0.442em 0.572em 0.011em 0px;\n        content: "x";\n    }\n    \n    mjx-c.mjx-c32::before {\n        padding: 0.666em 0.5em 0px 0px;\n        content: "2";\n    }\n    \n    mjx-c.mjx-c2B::before {\n        padding: 0.583em 0.778em 0.082em 0px;\n        content: "+";\n    }\n    \n    mjx-c.mjx-c1D44F.TEX-I::before {\n        padding: 0.694em 0.429em 0.011em 0px;\n        content: "b";\n    }\n    \n    mjx-c.mjx-c1D450.TEX-I::before {\n        padding: 0.442em 0.433em 0.011em 0px;\n        content: "c";\n    }\n    \n    mjx-c.mjx-c3D::before {\n        padding: 0.583em 0.778em 0.082em 0px;\n        content: "=";\n    }\n    \n    mjx-c.mjx-c30::before {\n        padding: 0.666em 0.5em 0.022em 0px;\n        content: "0";\n    }\n    \n    mjx-c.mjx-c2212::before {\n        padding: 0.583em 0.778em 0.082em 0px;\n        content: "\u2212";\n    }\n    \n    mjx-c.mjx-c2064::before {\n        padding: 0px;\n        content: "";\n    }\n    \n    mjx-c.mjx-c44::before {\n        padding: 0.683em 0.764em 0px 0px;\n        content: "D";\n    }\n    \n    mjx-c.mjx-c69::before {\n        padding: 0.669em 0.278em 0px 0px;\n        content: "i";\n    }\n    \n    mjx-c.mjx-c76::before {\n        padding: 0.431em 0.528em 0.011em 0px;\n        content: "v";\n    }\n    \n    mjx-c.mjx-c64::before {\n        padding: 0.694em 0.556em 0.011em 0px;\n        content: "d";\n    }\n    \n    mjx-c.mjx-c65::before {\n        padding: 0.448em 0.444em 0.011em 0px;\n        content: "e";\n    }\n    \n    mjx-c.mjx-c20::before {\n        padding: 0px 0.25em 0px 0px;\n        content: " ";\n    }\n    \n    mjx-c.mjx-c6F::before {\n        padding: 0.448em 0.5em 0.01em 0px;\n        content: "o";\n    }\n    \n    mjx-c.mjx-c75::before {\n        padding: 0.442em 0.556em 0.011em 0px;\n        content: "u";\n    }\n    \n    mjx-c.mjx-c74::before {\n        padding: 0.615em 0.389em 0.01em 0px;\n        content: "t";\n    }\n    \n    mjx-c.mjx-c6C::before {\n        padding: 0.694em 0.278em 0px 0px;\n        content: "l";\n    }\n    \n    mjx-c.mjx-c61::before {\n        padding: 0.448em 0.5em 0.011em 0px;\n        content: "a";\n    }\n    \n    mjx-c.mjx-c6E::before {\n        padding: 0.442em 0.556em 0px 0px;\n        content: "n";\n    }\n    \n    mjx-c.mjx-c67::before {\n        padding: 0.453em 0.5em 0.206em 0px;\n        content: "g";\n    }\n    \n    mjx-c.mjx-c63::before {\n        padding: 0.448em 0.444em 0.011em 0px;\n        content: "c";\n    }\n    \n    mjx-c.mjx-c66::before {\n        padding: 0.705em 0.372em 0px 0px;\n        content: "f";\n    }\n    \n    mjx-c.mjx-c2E::before {\n        padding: 0.12em 0.278em 0px 0px;\n        content: ".";\n    }\n    \n    mjx-c.mjx-c28.TEX-S1::before {\n        padding: 0.85em 0.458em 0.349em 0px;\n        content: "(";\n    }\n    \n    mjx-c.mjx-c29.TEX-S1::before {\n        padding: 0.85em 0.458em 0.349em 0px;\n        content: ")";\n    }\n    \n    mjx-c.mjx-c28::before {\n        padding: 0.75em 0.389em 0.25em 0px;\n        content: "(";\n    }\n    \n    mjx-c.mjx-c34::before {\n        padding: 0.677em 0.5em 0px 0px;\n        content: "4";\n    }\n    \n    mjx-c.mjx-c29::before {\n        padding: 0.75em 0.389em 0.25em 0px;\n        content: ")";\n    }\n    \n    mjx-c.mjx-c43::before {\n        padding: 0.705em 0.722em 0.021em 0px;\n        content: "C";\n    }\n    \n    mjx-c.mjx-c6D::before {\n        padding: 0.442em 0.833em 0px 0px;\n        content: "m";\n    }\n    \n    mjx-c.mjx-c70::before {\n        padding: 0.442em 0.556em 0.194em 0px;\n        content: "p";\n    }\n    \n    mjx-c.mjx-c68::before {\n        padding: 0.694em 0.556em 0px 0px;\n        content: "h";\n    }\n    \n    mjx-c.mjx-c73::before {\n        padding: 0.448em 0.394em 0.011em 0px;\n        content: "s";\n    }\n    \n    mjx-c.mjx-c71::before {\n        padding: 0.442em 0.528em 0.194em 0px;\n        content: "q";\n    }\n    \n    mjx-c.mjx-c72::before {\n        padding: 0.442em 0.392em 0px 0px;\n        content: "r";\n    }\n    \n    mjx-c.mjx-c28.TEX-S2::before {\n        padding: 1.15em 0.597em 0.649em 0px;\n        content: "(";\n    }\n    \n    mjx-c.mjx-c29.TEX-S2::before {\n        padding: 1.15em 0.597em 0.649em 0px;\n        content: ")";\n    }\n    \n    mjx-c.mjx-c221A.TEX-S2::before {\n        padding: 1.15em 1.02em 0.65em 0px;\n        content: "\u221a";\n    }\n    \n    mjx-c.mjx-cB1::before {\n        padding: 0.666em 0.778em 0px 0px;\n        content: "\xb1";\n    }\n    \n    mjx-c.mjx-c7B::before {\n        padding: 0.75em 0.5em 0.25em 0px;\n        content: "{";\n    }\n    \n    mjx-c.mjx-c1D436.TEX-I::before {\n        padding: 0.705em 0.76em 0.022em 0px;\n        content: "C";\n    }\n    \n    mjx-c.mjx-c7D::before {\n        padding: 0.75em 0.5em 0.25em 0px;\n        content: "}";\n    }\n    \n    mjx-c.mjx-c54::before {\n        padding: 0.677em 0.722em 0px 0px;\n        content: "T";\n    }\n    \n    mjx-c.mjx-c27::before {\n        padding: 0.694em 0.278em 0px 0px;\n        content: "\'";\n    }\n    \n    mjx-c.mjx-c78::before {\n        padding: 0.431em 0.528em 0px 0px;\n        content: "x";\n    }\n    \n    mjx-c.mjx-c221A::before {\n        padding: 0.8em 0.853em 0.2em 0px;\n        content: "\u221a";\n    }\n    \n    mjx-mtable {\n        display: inline-block;\n        text-align: center;\n        vertical-align: 0.25em;\n        position: relative;\n        box-sizing: border-box;\n        border-spacing: 0px;\n        border-collapse: collapse;\n    }\n    \n    mjx-mstyle[size="s"] mjx-mtable {\n        vertical-align: 0.354em;\n    }\n    \n    mjx-labels {\n        position: absolute;\n        left: 0px;\n        top: 0px;\n    }\n    \n    mjx-table {\n        display: inline-block;\n        vertical-align: -0.5ex;\n        box-sizing: border-box;\n    }\n    \n    mjx-table > mjx-itable {\n        vertical-align: middle;\n        text-align: left;\n        box-sizing: border-box;\n    }\n    \n    mjx-labels > mjx-itable {\n        position: absolute;\n        top: 0px;\n    }\n    \n    mjx-mtable[justify="left"] {\n        text-align: left;\n    }\n    \n    mjx-mtable[justify="right"] {\n        text-align: right;\n    }\n    \n    mjx-mtable[justify="left"][side="left"] {\n        padding-right: 0px !important;\n    }\n    \n    mjx-mtable[justify="left"][side="right"] {\n        padding-left: 0px !important;\n    }\n    \n    mjx-mtable[justify="right"][side="left"] {\n        padding-right: 0px !important;\n    }\n    \n    mjx-mtable[justify="right"][side="right"] {\n        padding-left: 0px !important;\n    }\n    \n    mjx-mtable[align] {\n        vertical-align: baseline;\n    }\n    \n    mjx-mtable[align="top"] > mjx-table {\n        vertical-align: top;\n    }\n    \n    mjx-mtable[align="bottom"] > mjx-table {\n        vertical-align: bottom;\n    }\n    \n    mjx-mtable[side="right"] mjx-labels {\n        min-width: 100%;\n    }\n    \n    mjx-mtr {\n        display: table-row;\n        text-align: left;\n    }\n    \n    mjx-mtr[rowalign="top"] > mjx-mtd {\n        vertical-align: top;\n    }\n    \n    mjx-mtr[rowalign="center"] > mjx-mtd {\n        vertical-align: middle;\n    }\n    \n    mjx-mtr[rowalign="bottom"] > mjx-mtd {\n        vertical-align: bottom;\n    }\n    \n    mjx-mtr[rowalign="baseline"] > mjx-mtd {\n        vertical-align: baseline;\n    }\n    \n    mjx-mtr[rowalign="axis"] > mjx-mtd {\n        vertical-align: 0.25em;\n    }\n    \n    mjx-mtd {\n        display: table-cell;\n        text-align: center;\n        padding: 0.215em 0.4em;\n    }\n    \n    mjx-mtd:first-child {\n        padding-left: 0px;\n    }\n    \n    mjx-mtd:last-child {\n        padding-right: 0px;\n    }\n    \n    mjx-mtable > * > mjx-itable > :first-child > mjx-mtd {\n        padding-top: 0px;\n    }\n    \n    mjx-mtable > * > mjx-itable > :last-child > mjx-mtd {\n        padding-bottom: 0px;\n    }\n    \n    mjx-tstrut {\n        display: inline-block;\n        height: 1em;\n        vertical-align: -0.25em;\n    }\n    \n    mjx-labels[align="left"] > mjx-mtr > mjx-mtd {\n        text-align: left;\n    }\n    \n    mjx-labels[align="right"] > mjx-mtr > mjx-mtd {\n        text-align: right;\n    }\n    \n    mjx-mtd[extra] {\n        padding: 0px;\n    }\n    \n    mjx-mtd[rowalign="top"] {\n        vertical-align: top;\n    }\n    \n    mjx-mtd[rowalign="center"] {\n        vertical-align: middle;\n    }\n    \n    mjx-mtd[rowalign="bottom"] {\n        vertical-align: bottom;\n    }\n    \n    mjx-mtd[rowalign="baseline"] {\n        vertical-align: baseline;\n    }\n    \n    mjx-mtd[rowalign="axis"] {\n        vertical-align: 0.25em;\n    }\n    \n    mjx-texatom {\n        display: inline-block;\n        text-align: left;\n    }\n    \n    mjx-mover {\n        display: inline-block;\n        text-align: left;\n    }\n    \n    mjx-mover:not([limits="false"]) {\n        padding-top: 0.1em;\n    }\n    \n    mjx-mover:not([limits="false"]) > * {\n        display: block;\n        text-align: left;\n    }\n    \n    mjx-mspace {\n        display: inline-block;\n        text-align: left;\n    }\n    \n    mjx-stretchy-v.mjx-c7B mjx-beg mjx-c::before {\n        content: "\u23a7";\n        padding: 0.899em 0.889em 0.01em 0px;\n    }\n    \n    mjx-stretchy-v.mjx-c7B mjx-ext mjx-c::before {\n        content: "\u23aa";\n        width: 0.889em;\n    }\n    \n    mjx-stretchy-v.mjx-c7B mjx-end mjx-c::before {\n        content: "\u23a9";\n        padding: 0.01em 0.889em 0.899em 0px;\n    }\n    \n    mjx-stretchy-v.mjx-c7B mjx-mid mjx-c::before {\n        content: "\u23a8";\n        padding: 1.16em 0.889em 0.66em 0px;\n    }\n    \n    mjx-stretchy-v.mjx-c7B > mjx-mid {\n        margin-top: -0.91em;\n        margin-bottom: -0.91em;\n    }\n    \n    mjx-stretchy-v.mjx-c7B > mjx-end {\n        margin-top: -0.909em;\n    }\n    \n    mjx-stretchy-v.mjx-c7B > mjx-ext {\n        height: 50%;\n        border-top-width: 0.879em;\n        border-bottom-width: 0.879em;\n    }\n    \n    mjx-c.mjx-c2207::before {\n        padding: 0.683em 0.833em 0.033em 0px;\n        content: "\u2207";\n    }\n    \n    mjx-c.mjx-cD7::before {\n        padding: 0.491em 0.778em 0px 0px;\n        content: "\xd7";\n    }\n    \n    mjx-c.mjx-c20D7.TEX-V::before {\n        padding: 0.714em 0.5em 0px 0px;\n        content: "\u2192";\n    }\n    \n    mjx-c.mjx-c1D401.TEX-B::before {\n        padding: 0.686em 0.818em 0px 0px;\n        content: "B";\n    }\n    \n    mjx-c.mjx-c2212::before {\n        padding: 0.583em 0.778em 0.082em 0px;\n        content: "\u2212";\n    }\n    \n    mjx-c.mjx-c31::before {\n        padding: 0.666em 0.5em 0px 0px;\n        content: "1";\n    }\n    \n    mjx-c.mjx-c1D450.TEX-I::before {\n        padding: 0.442em 0.433em 0.011em 0px;\n        content: "c";\n    }\n    \n    mjx-c.mjx-c1D715::before {\n        padding: 0.715em 0.566em 0.022em 0px;\n        content: "\u2202";\n    }\n    \n    mjx-c.mjx-c1D404.TEX-B::before {\n        padding: 0.68em 0.756em 0px 0px;\n        content: "E";\n    }\n    \n    mjx-c.mjx-c1D461.TEX-I::before {\n        padding: 0.626em 0.361em 0.011em 0px;\n        content: "t";\n    }\n    \n    mjx-c.mjx-c3D::before {\n        padding: 0.583em 0.778em 0.082em 0px;\n        content: "=";\n    }\n    \n    mjx-c.mjx-c34::before {\n        padding: 0.677em 0.5em 0px 0px;\n        content: "4";\n    }\n    \n    mjx-c.mjx-c1D70B.TEX-I::before {\n        padding: 0.431em 0.57em 0.011em 0px;\n        content: "\u03c0";\n    }\n    \n    mjx-c.mjx-c1D423.TEX-B::before {\n        padding: 0.695em 0.351em 0.2em 0px;\n        content: "j";\n    }\n    \n    mjx-c.mjx-c22C5::before {\n        padding: 0.31em 0.278em 0px 0px;\n        content: "\u22c5";\n    }\n    \n    mjx-c.mjx-c1D70C.TEX-I::before {\n        padding: 0.442em 0.517em 0.216em 0px;\n        content: "\u03c1";\n    }\n    \n    mjx-c.mjx-c2B::before {\n        padding: 0.583em 0.778em 0.082em 0px;\n        content: "+";\n    }\n    \n    mjx-c.mjx-c1D7CE.TEX-B::before {\n        padding: 0.654em 0.575em 0.01em 0px;\n        content: "0";\n    }\n    \n    mjx-c.mjx-c30::before {\n        padding: 0.666em 0.5em 0.022em 0px;\n        content: "0";\n    }\n    \n    mjx-math {\n        display: inline-block;\n        text-align: left;\n        line-height: 0;\n        text-indent: 0px;\n        font-style: normal;\n        font-weight: normal;\n        font-size: 100%;\n        letter-spacing: normal;\n        overflow-wrap: normal;\n        word-spacing: normal;\n        white-space: nowrap;\n        direction: ltr;\n        padding: 1px 0px;\n    }\n    \n    mjx-container[jax="CHTML"][display="true"] {\n        display: block;\n        text-align: center;\n        margin: 1em 0px;\n    }\n    \n    mjx-container[jax="CHTML"][display="true"][width="full"] {\n        display: flex;\n    }\n    \n    mjx-container[jax="CHTML"][display="true"] mjx-math {\n        padding: 0px;\n    }\n    \n    mjx-container[jax="CHTML"][justify="left"] {\n        text-align: left;\n    }\n    \n    mjx-container[jax="CHTML"][justify="right"] {\n        text-align: right;\n    }\n    \n    mjx-mrow {\n        display: inline-block;\n        text-align: left;\n    }\n    \n    mjx-munderover {\n        display: inline-block;\n        text-align: left;\n    }\n    \n    mjx-munderover:not([limits="false"]) {\n        padding-top: 0.1em;\n    }\n    \n    mjx-munderover:not([limits="false"]) > * {\n        display: block;\n    }\n    \n    mjx-msubsup {\n        display: inline-block;\n        text-align: left;\n    }\n    \n    mjx-script {\n        display: inline-block;\n        padding-right: 0.05em;\n        padding-left: 0.033em;\n    }\n    \n    mjx-script > * {\n        display: block;\n    }\n    \n    mjx-mi {\n        display: inline-block;\n        text-align: left;\n    }\n    \n    mjx-c {\n        display: inline-block;\n    }\n    \n    mjx-utext {\n        display: inline-block;\n        padding: 0.75em 0px 0.2em;\n    }\n    \n    mjx-mo {\n        display: inline-block;\n        text-align: left;\n    }\n    \n    mjx-stretchy-h {\n        display: inline-table;\n        width: 100%;\n    }\n    \n    mjx-stretchy-h > * {\n        display: table-cell;\n        width: 0px;\n    }\n    \n    mjx-stretchy-h > * > mjx-c {\n        display: inline-block;\n        transform: scaleX(1);\n    }\n    \n    mjx-stretchy-h > * > mjx-c::before {\n        display: inline-block;\n        width: initial;\n    }\n    \n    mjx-stretchy-h > mjx-ext {\n        overflow: clip visible;\n        width: 100%;\n    }\n    \n    mjx-stretchy-h > mjx-ext > mjx-c::before {\n        transform: scaleX(500);\n    }\n    \n    mjx-stretchy-h > mjx-ext > mjx-c {\n        width: 0px;\n    }\n    \n    mjx-stretchy-h > mjx-beg > mjx-c {\n        margin-right: -0.1em;\n    }\n    \n    mjx-stretchy-h > mjx-end > mjx-c {\n        margin-left: -0.1em;\n    }\n    \n    mjx-stretchy-v {\n        display: inline-block;\n    }\n    \n    mjx-stretchy-v > * {\n        display: block;\n    }\n    \n    mjx-stretchy-v > mjx-beg {\n        height: 0px;\n    }\n    \n    mjx-stretchy-v > mjx-end > mjx-c {\n        display: block;\n    }\n    \n    mjx-stretchy-v > * > mjx-c {\n        transform: scaleY(1);\n        transform-origin: left center;\n        overflow: hidden;\n    }\n    \n    mjx-stretchy-v > mjx-ext {\n        display: block;\n        height: 100%;\n        box-sizing: border-box;\n        border: 0px solid transparent;\n        overflow: visible clip;\n    }\n    \n    mjx-stretchy-v > mjx-ext > mjx-c::before {\n        width: initial;\n        box-sizing: border-box;\n    }\n    \n    mjx-stretchy-v > mjx-ext > mjx-c {\n        transform: scaleY(500) translateY(0.075em);\n        overflow: visible;\n    }\n    \n    mjx-mark {\n        display: inline-block;\n        height: 0px;\n    }\n    \n    mjx-mn {\n        display: inline-block;\n        text-align: left;\n    }\n    \n    mjx-msup {\n        display: inline-block;\n        text-align: left;\n    }\n    \n    mjx-mfrac {\n        display: inline-block;\n        text-align: left;\n    }\n    \n    mjx-frac {\n        display: inline-block;\n        vertical-align: 0.17em;\n        padding: 0px 0.22em;\n    }\n    \n    mjx-frac[type="d"] {\n        vertical-align: 0.04em;\n    }\n    \n    mjx-frac[delims] {\n        padding: 0px 0.1em;\n    }\n    \n    mjx-frac[atop] {\n        padding: 0px 0.12em;\n    }\n    \n    mjx-frac[atop][delims] {\n        padding: 0px;\n    }\n    \n    mjx-dtable {\n        display: inline-table;\n        width: 100%;\n    }\n    \n    mjx-dtable > * {\n        font-size: 2000%;\n    }\n    \n    mjx-dbox {\n        display: block;\n        font-size: 5%;\n    }\n    \n    mjx-num {\n        display: block;\n        text-align: center;\n    }\n    \n    mjx-den {\n        display: block;\n        text-align: center;\n    }\n    \n    mjx-mfrac[bevelled] > mjx-num {\n        display: inline-block;\n    }\n    \n    mjx-mfrac[bevelled] > mjx-den {\n        display: inline-block;\n    }\n    \n    mjx-den[align="right"],\n    mjx-num[align="right"] {\n        text-align: right;\n    }\n    \n    mjx-den[align="left"],\n    mjx-num[align="left"] {\n        text-align: left;\n    }\n    \n    mjx-nstrut {\n        display: inline-block;\n        height: 0.054em;\n        width: 0px;\n        vertical-align: -0.054em;\n    }\n    \n    mjx-nstrut[type="d"] {\n        height: 0.217em;\n        vertical-align: -0.217em;\n    }\n    \n    mjx-dstrut {\n        display: inline-block;\n        height: 0.505em;\n        width: 0px;\n    }\n    \n    mjx-dstrut[type="d"] {\n        height: 0.726em;\n    }\n    \n    mjx-line {\n        display: block;\n        box-sizing: border-box;\n        min-height: 1px;\n        height: 0.06em;\n        border-top: 0.06em solid;\n        margin: 0.06em -0.1em;\n        overflow: hidden;\n    }\n    \n    mjx-line[type="d"] {\n        margin: 0.18em -0.1em;\n    }\n    \n    mjx-c.mjx-c1D45B.TEX-I::before {\n        padding: 0.442em 0.6em 0.011em 0px;\n        content: "n";\n    }\n    \n    mjx-c.mjx-c2211.TEX-S2::before {\n        padding: 0.95em 1.444em 0.45em 0px;\n        content: "\u2211";\n    }\n    \n    mjx-c.mjx-c1D456.TEX-I::before {\n        padding: 0.661em 0.345em 0.011em 0px;\n        content: "i";\n    }\n    \n    mjx-c.mjx-c3D::before {\n        padding: 0.583em 0.778em 0.082em 0px;\n        content: "=";\n    }\n    \n    mjx-c.mjx-c31::before {\n        padding: 0.666em 0.5em 0px 0px;\n        content: "1";\n    }\n    \n    mjx-c.mjx-c33::before {\n        padding: 0.665em 0.5em 0.022em 0px;\n        content: "3";\n    }\n    \n    mjx-c.mjx-c28.TEX-S3::before {\n        padding: 1.45em 0.736em 0.949em 0px;\n        content: "(";\n    }\n    \n    mjx-c.mjx-c28::before {\n        padding: 0.75em 0.389em 0.25em 0px;\n        content: "(";\n    }\n    \n    mjx-c.mjx-c2B::before {\n        padding: 0.583em 0.778em 0.082em 0px;\n        content: "+";\n    }\n    \n    mjx-c.mjx-c29::before {\n        padding: 0.75em 0.389em 0.25em 0px;\n        content: ")";\n    }\n    \n    mjx-c.mjx-c32::before {\n        padding: 0.666em 0.5em 0px 0px;\n        content: "2";\n    }\n    \n    mjx-c.mjx-c29.TEX-S3::before {\n        padding: 1.45em 0.736em 0.949em 0px;\n        content: ")";\n    }\n    \n    mjx-container[jax="CHTML"] {\n        line-height: 0;\n    }\n    \n    mjx-container [space="1"] {\n        margin-left: 0.111em;\n    }\n    \n    mjx-container [space="2"] {\n        margin-left: 0.167em;\n    }\n    \n    mjx-container [space="3"] {\n        margin-left: 0.222em;\n    }\n    \n    mjx-container [space="4"] {\n        margin-left: 0.278em;\n    }\n    \n    mjx-container [space="5"] {\n        margin-left: 0.333em;\n    }\n    \n    mjx-container [rspace="1"] {\n        margin-right: 0.111em;\n    }\n    \n    mjx-container [rspace="2"] {\n        margin-right: 0.167em;\n    }\n    \n    mjx-container [rspace="3"] {\n        margin-right: 0.222em;\n    }\n    \n    mjx-container [rspace="4"] {\n        margin-right: 0.278em;\n    }\n    \n    mjx-container [rspace="5"] {\n        margin-right: 0.333em;\n    }\n    \n    mjx-container [size="s"] {\n        font-size: 70.7%;\n    }\n    \n    mjx-container [size="ss"] {\n        font-size: 50%;\n    }\n    \n    mjx-container [size="Tn"] {\n        font-size: 60%;\n    }\n    \n    mjx-container [size="sm"] {\n        font-size: 85%;\n    }\n    \n    mjx-container [size="lg"] {\n        font-size: 120%;\n    }\n    \n    mjx-container [size="Lg"] {\n        font-size: 144%;\n    }\n    \n    mjx-container [size="LG"] {\n        font-size: 173%;\n    }\n    \n    mjx-container [size="hg"] {\n        font-size: 207%;\n    }\n    \n    mjx-container [size="HG"] {\n        font-size: 249%;\n    }\n    \n    mjx-container [width="full"] {\n        width: 100%;\n    }\n    \n    mjx-box {\n        display: inline-block;\n    }\n    \n    mjx-block {\n        display: block;\n    }\n    \n    mjx-itable {\n        display: inline-table;\n    }\n    \n    mjx-row {\n        display: table-row;\n    }\n    \n    mjx-row > * {\n        display: table-cell;\n    }\n    \n    mjx-mtext {\n        display: inline-block;\n    }\n    \n    mjx-mstyle {\n        display: inline-block;\n    }\n    \n    mjx-merror {\n        display: inline-block;\n        color: red;\n        background-color: yellow;\n    }\n    \n    mjx-mphantom {\n        visibility: hidden;\n    }\n    \n    mjx-c::before {\n        display: block;\n        width: 0px;\n    }\n    \n    .MJX-TEX {\n        font-family: MJXZERO, MJXTEX;\n    }\n    \n    .TEX-B {\n        font-family: MJXZERO, MJXTEX-B;\n    }\n    \n    .TEX-I {\n        font-family: MJXZERO, MJXTEX-I;\n    }\n    \n    .TEX-MI {\n        font-family: MJXZERO, MJXTEX-MI;\n    }\n    \n    .TEX-BI {\n        font-family: MJXZERO, MJXTEX-BI;\n    }\n    \n    .TEX-S1 {\n        font-family: MJXZERO, MJXTEX-S1;\n    }\n    \n    .TEX-S2 {\n        font-family: MJXZERO, MJXTEX-S2;\n    }\n    \n    .TEX-S3 {\n        font-family: MJXZERO, MJXTEX-S3;\n    }\n    \n    .TEX-S4 {\n        font-family: MJXZERO, MJXTEX-S4;\n    }\n    \n    .TEX-A {\n        font-family: MJXZERO, MJXTEX-A;\n    }\n    \n    .TEX-C {\n        font-family: MJXZERO, MJXTEX-C;\n    }\n    \n    .TEX-CB {\n        font-family: MJXZERO, MJXTEX-CB;\n    }\n    \n    .TEX-FR {\n        font-family: MJXZERO, MJXTEX-FR;\n    }\n    \n    .TEX-FRB {\n        font-family: MJXZERO, MJXTEX-FRB;\n    }\n    \n    .TEX-SS {\n        font-family: MJXZERO, MJXTEX-SS;\n    }\n    \n    .TEX-SSB {\n        font-family: MJXZERO, MJXTEX-SSB;\n    }\n    \n    .TEX-SSI {\n        font-family: MJXZERO, MJXTEX-SSI;\n    }\n    \n    .TEX-SC {\n        font-family: MJXZERO, MJXTEX-SC;\n    }\n    \n    .TEX-T {\n        font-family: MJXZERO, MJXTEX-T;\n    }\n    \n    .TEX-V {\n        font-family: MJXZERO, MJXTEX-V;\n    }\n    \n    .TEX-VB {\n        font-family: MJXZERO, MJXTEX-VB;\n    }\n    \n    mjx-stretchy-v mjx-c,\n    mjx-stretchy-h mjx-c {\n        font-family: MJXZERO, MJXTEX-S1, MJXTEX-S4, MJXTEX, MJXTEX-A !important;\n    }\n    \n    @font-face {\n        font-family: MJXZERO;\n        src: url("'.concat(f, '/output/chtml/fonts/woff-v2/MathJax_Zero.woff")\n            format("woff");\n    }\n    \n    @font-face {\n        font-family: MJXTEX;\n        src: url("').concat(f, '/output/chtml/fonts/woff-v2/MathJax_Main-Regular.woff")\n            format("woff");\n    }\n    \n    @font-face {\n        font-family: MJXTEX-B;\n        src: url("').concat(f, '/output/chtml/fonts/woff-v2/MathJax_Main-Bold.woff")\n            format("woff");\n    }\n    \n    @font-face {\n        font-family: MJXTEX-I;\n        src: url("').concat(f, '/output/chtml/fonts/woff-v2/MathJax_Math-Italic.woff")\n            format("woff");\n    }\n    \n    @font-face {\n        font-family: MJXTEX-MI;\n        src: url("').concat(f, '/output/chtml/fonts/woff-v2/MathJax_Main-Italic.woff")\n            format("woff");\n    }\n    \n    @font-face {\n        font-family: MJXTEX-BI;\n        src: url("').concat(f, '/output/chtml/fonts/woff-v2/MathJax_Math-BoldItalic.woff")\n            format("woff");\n    }\n    \n    @font-face {\n        font-family: MJXTEX-S1;\n        src: url("').concat(f, '/output/chtml/fonts/woff-v2/MathJax_Size1-Regular.woff")\n            format("woff");\n    }\n    \n    @font-face {\n        font-family: MJXTEX-S2;\n        src: url("').concat(f, '/output/chtml/fonts/woff-v2/MathJax_Size2-Regular.woff")\n            format("woff");\n    }\n    \n    @font-face {\n        font-family: MJXTEX-S3;\n        src: url("').concat(f, '/output/chtml/fonts/woff-v2/MathJax_Size3-Regular.woff")\n            format("woff");\n    }\n    \n    @font-face {\n        font-family: MJXTEX-S4;\n        src: url("').concat(f, '/output/chtml/fonts/woff-v2/MathJax_Size4-Regular.woff")\n            format("woff");\n    }\n    \n    @font-face {\n        font-family: MJXTEX-A;\n        src: url("').concat(f, '/output/chtml/fonts/woff-v2/MathJax_AMS-Regular.woff")\n            format("woff");\n    }\n    \n    @font-face {\n        font-family: MJXTEX-C;\n        src: url("').concat(f, '/output/chtml/fonts/woff-v2/MathJax_Calligraphic-Regular.woff")\n            format("woff");\n    }\n    \n    @font-face {\n        font-family: MJXTEX-CB;\n        src: url("').concat(f, '/output/chtml/fonts/woff-v2/MathJax_Calligraphic-Bold.woff")\n            format("woff");\n    }\n    \n    @font-face {\n        font-family: MJXTEX-FR;\n        src: url("').concat(f, '/output/chtml/fonts/woff-v2/MathJax_Fraktur-Regular.woff")\n            format("woff");\n    }\n    \n    @font-face {\n        font-family: MJXTEX-FRB;\n        src: url("').concat(f, '/output/chtml/fonts/woff-v2/MathJax_Fraktur-Bold.woff")\n            format("woff");\n    }\n    \n    @font-face {\n        font-family: MJXTEX-SS;\n        src: url("').concat(f, '/output/chtml/fonts/woff-v2/MathJax_SansSerif-Regular.woff")\n            format("woff");\n    }\n    \n    @font-face {\n        font-family: MJXTEX-SSB;\n        src: url("').concat(f, '/output/chtml/fonts/woff-v2/MathJax_SansSerif-Bold.woff")\n            format("woff");\n    }\n    \n    @font-face {\n        font-family: MJXTEX-SSI;\n        src: url("').concat(f, '/output/chtml/fonts/woff-v2/MathJax_SansSerif-Italic.woff")\n            format("woff");\n    }\n    \n    @font-face {\n        font-family: MJXTEX-SC;\n        src: url("').concat(f, '/output/chtml/fonts/woff-v2/MathJax_Script-Regular.woff")\n            format("woff");\n    }\n    \n    @font-face {\n        font-family: MJXTEX-T;\n        src: url("').concat(f, '/output/chtml/fonts/woff-v2/MathJax_Typewriter-Regular.woff")\n            format("woff");\n    }\n    \n    @font-face {\n        font-family: MJXTEX-V;\n        src: url("').concat(f, '/output/chtml/fonts/woff-v2/MathJax_Vector-Regular.woff")\n            format("woff");\n    }\n    \n    @font-face {\n        font-family: MJXTEX-VB;\n        src: url("').concat(f, '/output/chtml/fonts/woff-v2/MathJax_Vector-Bold.woff")\n            format("woff");\n    }\n    ') ], {
    type: "text/css"
})), p = c(function() {
    var n = e(regeneratorRuntime.mark((function n(t) {
        var e, r = arguments;
        return regeneratorRuntime.wrap((function(n) {
            for (;;) switch (n.prev = n.next) {
              case 0:
                return e = r.length > 1 && void 0 !== r[1] ? r[1] : {}, n.abrupt("return", fetch(t, e).then((function(n) {
                    return n.ok ? n : Promise.reject(new Error("fetch failed:" + t));
                })).then((function(n) {
                    return n.text();
                })));

              case 2:
              case "end":
                return n.stop();
            }
        }), n);
    })));
    return function(t) {
        return n.apply(this, arguments);
    };
}()), s = [ "startup", "[tex]/action", "[tex]/all-packages", "[tex]/ams", "[tex]/amscd", "[tex]/bbox", "[tex]/boldsymbol", "[tex]/braket", "[tex]/bussproofs", "[tex]/cancel", "[tex]/cases", "[tex]/centernot", "[tex]/color", "[tex]/colortbl", "[tex]/colorv2", "[tex]/configmacros", "[tex]/empheq", "[tex]/enclose", "[tex]/extpfeil", "[tex]/gensymb", "[tex]/html", "[tex]/mathtools", "[tex]/mhchem", "[tex]/newcommand", "[tex]/noerrors", "[tex]/noundefined", "[tex]/physics", "[tex]/require", "[tex]/setoptions", "[tex]/tagformat", "[tex]/textcomp", "[tex]/textmacros", "[tex]/unicode", "[tex]/upgreek", "[tex]/verb", "core", "input/asciimath", "input/mml", "input/tex-base", "input/tex-full", "loader", "output/chtml", "output/chtml/fonts/tex" ], u = URL.createObjectURL(new Blob([ "\nMathJax.loader.preLoad(".concat(s.map((function(n) {
    return JSON.stringify(n);
})).join(","), ")\n    ") ], {
    type: "application/javascript"
}));

var d = {
    startup: {
        typeset: !1
    },
    loader: {
        load: [],
        paths: {
            mathjax: f
        }
    }
}, j = URL.createObjectURL(new Blob([ "\nwindow.MathJax=".concat(JSON.stringify(d), "\n    ") ], {
    type: "application/javascript"
}));

var h = [ "core", "input/asciimath", "output/chtml", "input/tex-full", "input/mml", "output/chtml/fonts/tex" ].map(y), g = [ j, y("startup"), u ].concat(a(h));

function y(n) {
    return f + "/" + n + ".min.js";
}

function b() {
    return w.apply(this, arguments);
}

function w() {
    return (w = e(regeneratorRuntime.mark((function n() {
        var t, e, r, o, m, c, l, f, x, s, u;
        return regeneratorRuntime.wrap((function(n) {
            for (;;) switch (n.prev = n.next) {
              case 0:
                return n.next = 2, Promise.all(g.map((function(n) {
                    return p(n);
                })));

              case 2:
                return t = n.sent, e = t.join("\n;\n"), n.t0 = Proxy, n.t1 = {
                    get MathJax() {
                        return r;
                    },
                    set MathJax(n) {
                        r = n;
                    }
                }, n.t2 = {
                    get: function(n, t, e) {
                        var r = Reflect.get(n, t, e) || Reflect.get(window, t, window);
                        return "function" == typeof r ? r.bind(window) : r;
                    },
                    has: function(n, t) {
                        return Reflect.has(n, t) || Reflect.has(window, t);
                    },
                    ownKeys: function(n) {
                        return Reflect.ownKeys(n) || Reflect.ownKeys(window);
                    }
                }, o = new n.t0(n.t1, n.t2), m = new Proxy({}, {
                    get: function(n, t, e) {
                        return Reflect.get(r, t, r);
                    },
                    set: function(n, t, e, o) {
                        return Reflect.set(r, t, e, r);
                    },
                    has: function(n, t) {
                        return Reflect.has(r, t);
                    },
                    ownKeys: function(n) {
                        return Reflect.ownKeys(r);
                    },
                    defineProperty: function(n, t, e) {
                        return Reflect.defineProperty(r, t, e);
                    },
                    deleteProperty: function(n, t) {
                        return Reflect.deleteProperty(r, t);
                    }
                }), c = Object.fromEntries(Reflect.ownKeys(window).filter((function(n) {
                    return Object.is(window, Reflect.get(window, n));
                })).map((function(n) {
                    return [ n, o ];
                }))), l = {
                    value: void 0,
                    mathfontfamily: void 0,
                    mathfontsize: void 0
                }, f = Object.assign(l, {
                    MathJax: m
                }, c), x = Object.keys(f), s = Object.values(f), u = i(Function, a(x).concat([ e ])), 
                Reflect.apply(u, o, s), n.abrupt("return", r);

              case 17:
              case "end":
                return n.stop();
            }
        }), n);
    })))).apply(this, arguments);
}

var v = c(e(regeneratorRuntime.mark((function n() {
    return regeneratorRuntime.wrap((function(n) {
        for (;;) switch (n.prev = n.next) {
          case 0:
            return n.next = 2, l(x);

          case 2:
            return n.abrupt("return", b());

          case 3:
          case "end":
            return n.stop();
        }
    }), n);
}))));

function X() {
    return E.apply(this, arguments);
}

function E() {
    return (E = e(regeneratorRuntime.mark((function n() {
        var t;
        return regeneratorRuntime.wrap((function(n) {
            for (;;) switch (n.prev = n.next) {
              case 0:
                return n.next = 2, v();

              case 2:
                return t = n.sent, n.next = 5, t.startup.promise;

              case 5:
                return n.abrupt("return", t);

              case 6:
              case "end":
                return n.stop();
            }
        }), n);
    })))).apply(this, arguments);
}

function M() {
    return (M = e(regeneratorRuntime.mark((function n(t, e) {
        var r, o, i;
        return regeneratorRuntime.wrap((function(n) {
            for (;;) switch (n.prev = n.next) {
              case 0:
                return n.next = 2, X();

              case 2:
                return r = n.sent, o = r.getMetricsFor(e), n.next = 6, r.asciimath2chtmlPromise(t, o);

              case 6:
                i = n.sent, e.appendChild(i), r.startup.document.clear(), r.startup.document.updateDocument();

              case 10:
              case "end":
                return n.stop();
            }
        }), n);
    })))).apply(this, arguments);
}

function T() {
    return (T = e(regeneratorRuntime.mark((function n(t, e) {
        var r, o, i;
        return regeneratorRuntime.wrap((function(n) {
            for (;;) switch (n.prev = n.next) {
              case 0:
                return n.next = 2, X();

              case 2:
                return r = n.sent, o = r.getMetricsFor(e), n.next = 6, r.mathml2chtmlPromise(t, o);

              case 6:
                i = n.sent, e.appendChild(i), r.startup.document.clear(), r.startup.document.updateDocument();

              case 10:
              case "end":
                return n.stop();
            }
        }), n);
    })))).apply(this, arguments);
}

function J() {
    return (J = e(regeneratorRuntime.mark((function n(t, e) {
        var r, o, i;
        return regeneratorRuntime.wrap((function(n) {
            for (;;) switch (n.prev = n.next) {
              case 0:
                return n.next = 2, X();

              case 2:
                return r = n.sent, o = r.getMetricsFor(e), n.next = 6, r.tex2chtmlPromise(t, o);

              case 6:
                i = n.sent, e.appendChild(i), r.startup.document.clear(), r.startup.document.updateDocument();

              case 10:
              case "end":
                return n.stop();
            }
        }), n);
    })))).apply(this, arguments);
}

exports.initmathjax = X, exports.renderasciimath = function(n, t) {
    return M.apply(this, arguments);
}, exports.renderlatex = function(n, t) {
    return J.apply(this, arguments);
}, exports.rendermathml = function(n, t) {
    return T.apply(this, arguments);
};
//# sourceMappingURL=index.cjs.map
