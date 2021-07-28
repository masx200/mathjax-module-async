"use strict";

function n(n, e, t, m, o, r, a) {
    try {
        var i = n[r](a), c = i.value;
    } catch (n) {
        return void t(n);
    }
    i.done ? e(c) : Promise.resolve(c).then(m, o);
}

function e(e) {
    return function() {
        var t = this, m = arguments;
        return new Promise((function(o, r) {
            var a = e.apply(t, m);
            function i(e) {
                n(a, o, r, i, c, "next", e);
            }
            function c(e) {
                n(a, o, r, i, c, "throw", e);
            }
            i(void 0);
        }));
    };
}

function t(n, e) {
    return (t = Object.setPrototypeOf || function(n, e) {
        return n.__proto__ = e, n;
    })(n, e);
}

function m() {
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

function o(n, e, r) {
    return (o = m() ? Reflect.construct : function(n, e, m) {
        var o = [ null ];
        o.push.apply(o, e);
        var r = new (Function.bind.apply(n, o));
        return m && t(r, m.prototype), r;
    }).apply(null, arguments);
}

function r(n) {
    return function(n) {
        if (Array.isArray(n)) return a(n);
    }(n) || function(n) {
        if ("undefined" != typeof Symbol && null != n[Symbol.iterator] || null != n["@@iterator"]) return Array.from(n);
    }(n) || function(n, e) {
        if (!n) return;
        if ("string" == typeof n) return a(n, e);
        var t = Object.prototype.toString.call(n).slice(8, -1);
        "Object" === t && n.constructor && (t = n.constructor.name);
        if ("Map" === t || "Set" === t) return Array.from(n);
        if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return a(n, e);
    }(n) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
}

function a(n, e) {
    (null == e || e > n.length) && (e = n.length);
    for (var t = 0, m = new Array(e); t < e; t++) m[t] = n[t];
    return m;
}

function i(n) {
    var t = new Map;
    return function() {
        var m = e(regeneratorRuntime.mark((function e(m) {
            var o, r, a, i, c = arguments;
            return regeneratorRuntime.wrap((function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (!t.get(m)) {
                        e.next = 2;
                        break;
                    }
                    return e.abrupt("return", t.get(m));

                  case 2:
                    for (o = c.length, r = new Array(o > 1 ? o - 1 : 0), a = 1; a < o; a++) r[a - 1] = c[a];
                    return i = n.apply(void 0, [ m ].concat(r)), t.set(m, i), e.abrupt("return", i);

                  case 6:
                  case "end":
                    return e.stop();
                }
            }), e);
        })));
        return function(n) {
            return m.apply(this, arguments);
        };
    }();
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), "undefined" == typeof regeneratorRuntime && function(n) {
    var e = new XMLHttpRequest;
    e.open("GET", n, !1), e.send(null);
    var t = e.responseText;
    new Function(t)();
}("https://cdn.jsdelivr.net/npm/regenerator-runtime@0.13.9/runtime.min.js");

var c = i(function() {
    var n = e(regeneratorRuntime.mark((function n(e) {
        var t, m = arguments;
        return regeneratorRuntime.wrap((function(n) {
            for (;;) switch (n.prev = n.next) {
              case 0:
                if (t = m.length > 1 && void 0 !== m[1] ? m[1] : {}, e) {
                    n.next = 3;
                    break;
                }
                throw new Error("href");

              case 3:
                return n.abrupt("return", new Promise((function(n, m) {
                    var o = document.createElement("link");
                    Object.assign(o, t, {
                        rel: "stylesheet"
                    }), o.href = e, o.onload = function() {
                        n();
                    }, o.onerror = function(n, e, t, o, r) {
                        m("string" == typeof n ? n : r || n);
                    }, document.head.appendChild(o);
                })));

              case 4:
              case "end":
                return n.stop();
            }
        }), n);
    })));
    return function(e) {
        return n.apply(this, arguments);
    };
}()), x = "https://cdn.jsdelivr.net/npm/mathjax@".concat("3.2.0", "/es5");

var l = URL.createObjectURL(new Blob([ '@charset "utf-8";\n\n    mjx-mtext {\n        display: inline-block;\n        text-align: left;\n    }\n    \n    mjx-mfenced {\n        display: inline-block;\n        text-align: left;\n    }\n    \n    mjx-msqrt {\n        display: inline-block;\n        text-align: left;\n    }\n    \n    mjx-root {\n        display: inline-block;\n        white-space: nowrap;\n    }\n    \n    mjx-surd {\n        display: inline-block;\n        vertical-align: top;\n    }\n    \n    mjx-sqrt {\n        display: inline-block;\n        padding-top: 0.07em;\n    }\n    \n    mjx-sqrt > mjx-box {\n        border-top: 0.07em solid;\n    }\n    \n    mjx-sqrt.mjx-tall > mjx-box {\n        padding-left: 0.3em;\n        margin-left: -0.3em;\n    }\n    \n    mjx-c.mjx-c1D44E.TEX-I::before {\n        padding: 0.441em 0.529em 0.01em 0px;\n        content: "a";\n    }\n    \n    mjx-c.mjx-c2062::before {\n        padding: 0px;\n        content: "";\n    }\n    \n    mjx-c.mjx-c1D465.TEX-I::before {\n        padding: 0.442em 0.572em 0.011em 0px;\n        content: "x";\n    }\n    \n    mjx-c.mjx-c32::before {\n        padding: 0.666em 0.5em 0px 0px;\n        content: "2";\n    }\n    \n    mjx-c.mjx-c2B::before {\n        padding: 0.583em 0.778em 0.082em 0px;\n        content: "+";\n    }\n    \n    mjx-c.mjx-c1D44F.TEX-I::before {\n        padding: 0.694em 0.429em 0.011em 0px;\n        content: "b";\n    }\n    \n    mjx-c.mjx-c1D450.TEX-I::before {\n        padding: 0.442em 0.433em 0.011em 0px;\n        content: "c";\n    }\n    \n    mjx-c.mjx-c3D::before {\n        padding: 0.583em 0.778em 0.082em 0px;\n        content: "=";\n    }\n    \n    mjx-c.mjx-c30::before {\n        padding: 0.666em 0.5em 0.022em 0px;\n        content: "0";\n    }\n    \n    mjx-c.mjx-c2212::before {\n        padding: 0.583em 0.778em 0.082em 0px;\n        content: "\u2212";\n    }\n    \n    mjx-c.mjx-c2064::before {\n        padding: 0px;\n        content: "";\n    }\n    \n    mjx-c.mjx-c44::before {\n        padding: 0.683em 0.764em 0px 0px;\n        content: "D";\n    }\n    \n    mjx-c.mjx-c69::before {\n        padding: 0.669em 0.278em 0px 0px;\n        content: "i";\n    }\n    \n    mjx-c.mjx-c76::before {\n        padding: 0.431em 0.528em 0.011em 0px;\n        content: "v";\n    }\n    \n    mjx-c.mjx-c64::before {\n        padding: 0.694em 0.556em 0.011em 0px;\n        content: "d";\n    }\n    \n    mjx-c.mjx-c65::before {\n        padding: 0.448em 0.444em 0.011em 0px;\n        content: "e";\n    }\n    \n    mjx-c.mjx-c20::before {\n        padding: 0px 0.25em 0px 0px;\n        content: " ";\n    }\n    \n    mjx-c.mjx-c6F::before {\n        padding: 0.448em 0.5em 0.01em 0px;\n        content: "o";\n    }\n    \n    mjx-c.mjx-c75::before {\n        padding: 0.442em 0.556em 0.011em 0px;\n        content: "u";\n    }\n    \n    mjx-c.mjx-c74::before {\n        padding: 0.615em 0.389em 0.01em 0px;\n        content: "t";\n    }\n    \n    mjx-c.mjx-c6C::before {\n        padding: 0.694em 0.278em 0px 0px;\n        content: "l";\n    }\n    \n    mjx-c.mjx-c61::before {\n        padding: 0.448em 0.5em 0.011em 0px;\n        content: "a";\n    }\n    \n    mjx-c.mjx-c6E::before {\n        padding: 0.442em 0.556em 0px 0px;\n        content: "n";\n    }\n    \n    mjx-c.mjx-c67::before {\n        padding: 0.453em 0.5em 0.206em 0px;\n        content: "g";\n    }\n    \n    mjx-c.mjx-c63::before {\n        padding: 0.448em 0.444em 0.011em 0px;\n        content: "c";\n    }\n    \n    mjx-c.mjx-c66::before {\n        padding: 0.705em 0.372em 0px 0px;\n        content: "f";\n    }\n    \n    mjx-c.mjx-c2E::before {\n        padding: 0.12em 0.278em 0px 0px;\n        content: ".";\n    }\n    \n    mjx-c.mjx-c28.TEX-S1::before {\n        padding: 0.85em 0.458em 0.349em 0px;\n        content: "(";\n    }\n    \n    mjx-c.mjx-c29.TEX-S1::before {\n        padding: 0.85em 0.458em 0.349em 0px;\n        content: ")";\n    }\n    \n    mjx-c.mjx-c28::before {\n        padding: 0.75em 0.389em 0.25em 0px;\n        content: "(";\n    }\n    \n    mjx-c.mjx-c34::before {\n        padding: 0.677em 0.5em 0px 0px;\n        content: "4";\n    }\n    \n    mjx-c.mjx-c29::before {\n        padding: 0.75em 0.389em 0.25em 0px;\n        content: ")";\n    }\n    \n    mjx-c.mjx-c43::before {\n        padding: 0.705em 0.722em 0.021em 0px;\n        content: "C";\n    }\n    \n    mjx-c.mjx-c6D::before {\n        padding: 0.442em 0.833em 0px 0px;\n        content: "m";\n    }\n    \n    mjx-c.mjx-c70::before {\n        padding: 0.442em 0.556em 0.194em 0px;\n        content: "p";\n    }\n    \n    mjx-c.mjx-c68::before {\n        padding: 0.694em 0.556em 0px 0px;\n        content: "h";\n    }\n    \n    mjx-c.mjx-c73::before {\n        padding: 0.448em 0.394em 0.011em 0px;\n        content: "s";\n    }\n    \n    mjx-c.mjx-c71::before {\n        padding: 0.442em 0.528em 0.194em 0px;\n        content: "q";\n    }\n    \n    mjx-c.mjx-c72::before {\n        padding: 0.442em 0.392em 0px 0px;\n        content: "r";\n    }\n    \n    mjx-c.mjx-c28.TEX-S2::before {\n        padding: 1.15em 0.597em 0.649em 0px;\n        content: "(";\n    }\n    \n    mjx-c.mjx-c29.TEX-S2::before {\n        padding: 1.15em 0.597em 0.649em 0px;\n        content: ")";\n    }\n    \n    mjx-c.mjx-c221A.TEX-S2::before {\n        padding: 1.15em 1.02em 0.65em 0px;\n        content: "\u221a";\n    }\n    \n    mjx-c.mjx-cB1::before {\n        padding: 0.666em 0.778em 0px 0px;\n        content: "\xb1";\n    }\n    \n    mjx-c.mjx-c7B::before {\n        padding: 0.75em 0.5em 0.25em 0px;\n        content: "{";\n    }\n    \n    mjx-c.mjx-c1D436.TEX-I::before {\n        padding: 0.705em 0.76em 0.022em 0px;\n        content: "C";\n    }\n    \n    mjx-c.mjx-c7D::before {\n        padding: 0.75em 0.5em 0.25em 0px;\n        content: "}";\n    }\n    \n    mjx-c.mjx-c54::before {\n        padding: 0.677em 0.722em 0px 0px;\n        content: "T";\n    }\n    \n    mjx-c.mjx-c27::before {\n        padding: 0.694em 0.278em 0px 0px;\n        content: "\'";\n    }\n    \n    mjx-c.mjx-c78::before {\n        padding: 0.431em 0.528em 0px 0px;\n        content: "x";\n    }\n    \n    mjx-c.mjx-c221A::before {\n        padding: 0.8em 0.853em 0.2em 0px;\n        content: "\u221a";\n    }\n    \n    mjx-mtable {\n        display: inline-block;\n        text-align: center;\n        vertical-align: 0.25em;\n        position: relative;\n        box-sizing: border-box;\n        border-spacing: 0px;\n        border-collapse: collapse;\n    }\n    \n    mjx-mstyle[size="s"] mjx-mtable {\n        vertical-align: 0.354em;\n    }\n    \n    mjx-labels {\n        position: absolute;\n        left: 0px;\n        top: 0px;\n    }\n    \n    mjx-table {\n        display: inline-block;\n        vertical-align: -0.5ex;\n        box-sizing: border-box;\n    }\n    \n    mjx-table > mjx-itable {\n        vertical-align: middle;\n        text-align: left;\n        box-sizing: border-box;\n    }\n    \n    mjx-labels > mjx-itable {\n        position: absolute;\n        top: 0px;\n    }\n    \n    mjx-mtable[justify="left"] {\n        text-align: left;\n    }\n    \n    mjx-mtable[justify="right"] {\n        text-align: right;\n    }\n    \n    mjx-mtable[justify="left"][side="left"] {\n        padding-right: 0px !important;\n    }\n    \n    mjx-mtable[justify="left"][side="right"] {\n        padding-left: 0px !important;\n    }\n    \n    mjx-mtable[justify="right"][side="left"] {\n        padding-right: 0px !important;\n    }\n    \n    mjx-mtable[justify="right"][side="right"] {\n        padding-left: 0px !important;\n    }\n    \n    mjx-mtable[align] {\n        vertical-align: baseline;\n    }\n    \n    mjx-mtable[align="top"] > mjx-table {\n        vertical-align: top;\n    }\n    \n    mjx-mtable[align="bottom"] > mjx-table {\n        vertical-align: bottom;\n    }\n    \n    mjx-mtable[side="right"] mjx-labels {\n        min-width: 100%;\n    }\n    \n    mjx-mtr {\n        display: table-row;\n        text-align: left;\n    }\n    \n    mjx-mtr[rowalign="top"] > mjx-mtd {\n        vertical-align: top;\n    }\n    \n    mjx-mtr[rowalign="center"] > mjx-mtd {\n        vertical-align: middle;\n    }\n    \n    mjx-mtr[rowalign="bottom"] > mjx-mtd {\n        vertical-align: bottom;\n    }\n    \n    mjx-mtr[rowalign="baseline"] > mjx-mtd {\n        vertical-align: baseline;\n    }\n    \n    mjx-mtr[rowalign="axis"] > mjx-mtd {\n        vertical-align: 0.25em;\n    }\n    \n    mjx-mtd {\n        display: table-cell;\n        text-align: center;\n        padding: 0.215em 0.4em;\n    }\n    \n    mjx-mtd:first-child {\n        padding-left: 0px;\n    }\n    \n    mjx-mtd:last-child {\n        padding-right: 0px;\n    }\n    \n    mjx-mtable > * > mjx-itable > :first-child > mjx-mtd {\n        padding-top: 0px;\n    }\n    \n    mjx-mtable > * > mjx-itable > :last-child > mjx-mtd {\n        padding-bottom: 0px;\n    }\n    \n    mjx-tstrut {\n        display: inline-block;\n        height: 1em;\n        vertical-align: -0.25em;\n    }\n    \n    mjx-labels[align="left"] > mjx-mtr > mjx-mtd {\n        text-align: left;\n    }\n    \n    mjx-labels[align="right"] > mjx-mtr > mjx-mtd {\n        text-align: right;\n    }\n    \n    mjx-mtd[extra] {\n        padding: 0px;\n    }\n    \n    mjx-mtd[rowalign="top"] {\n        vertical-align: top;\n    }\n    \n    mjx-mtd[rowalign="center"] {\n        vertical-align: middle;\n    }\n    \n    mjx-mtd[rowalign="bottom"] {\n        vertical-align: bottom;\n    }\n    \n    mjx-mtd[rowalign="baseline"] {\n        vertical-align: baseline;\n    }\n    \n    mjx-mtd[rowalign="axis"] {\n        vertical-align: 0.25em;\n    }\n    \n    mjx-texatom {\n        display: inline-block;\n        text-align: left;\n    }\n    \n    mjx-mover {\n        display: inline-block;\n        text-align: left;\n    }\n    \n    mjx-mover:not([limits="false"]) {\n        padding-top: 0.1em;\n    }\n    \n    mjx-mover:not([limits="false"]) > * {\n        display: block;\n        text-align: left;\n    }\n    \n    mjx-mspace {\n        display: inline-block;\n        text-align: left;\n    }\n    \n    mjx-stretchy-v.mjx-c7B mjx-beg mjx-c::before {\n        content: "\u23a7";\n        padding: 0.899em 0.889em 0.01em 0px;\n    }\n    \n    mjx-stretchy-v.mjx-c7B mjx-ext mjx-c::before {\n        content: "\u23aa";\n        width: 0.889em;\n    }\n    \n    mjx-stretchy-v.mjx-c7B mjx-end mjx-c::before {\n        content: "\u23a9";\n        padding: 0.01em 0.889em 0.899em 0px;\n    }\n    \n    mjx-stretchy-v.mjx-c7B mjx-mid mjx-c::before {\n        content: "\u23a8";\n        padding: 1.16em 0.889em 0.66em 0px;\n    }\n    \n    mjx-stretchy-v.mjx-c7B > mjx-mid {\n        margin-top: -0.91em;\n        margin-bottom: -0.91em;\n    }\n    \n    mjx-stretchy-v.mjx-c7B > mjx-end {\n        margin-top: -0.909em;\n    }\n    \n    mjx-stretchy-v.mjx-c7B > mjx-ext {\n        height: 50%;\n        border-top-width: 0.879em;\n        border-bottom-width: 0.879em;\n    }\n    \n    mjx-c.mjx-c2207::before {\n        padding: 0.683em 0.833em 0.033em 0px;\n        content: "\u2207";\n    }\n    \n    mjx-c.mjx-cD7::before {\n        padding: 0.491em 0.778em 0px 0px;\n        content: "\xd7";\n    }\n    \n    mjx-c.mjx-c20D7.TEX-V::before {\n        padding: 0.714em 0.5em 0px 0px;\n        content: "\u2192";\n    }\n    \n    mjx-c.mjx-c1D401.TEX-B::before {\n        padding: 0.686em 0.818em 0px 0px;\n        content: "B";\n    }\n    \n    mjx-c.mjx-c2212::before {\n        padding: 0.583em 0.778em 0.082em 0px;\n        content: "\u2212";\n    }\n    \n    mjx-c.mjx-c31::before {\n        padding: 0.666em 0.5em 0px 0px;\n        content: "1";\n    }\n    \n    mjx-c.mjx-c1D450.TEX-I::before {\n        padding: 0.442em 0.433em 0.011em 0px;\n        content: "c";\n    }\n    \n    mjx-c.mjx-c1D715::before {\n        padding: 0.715em 0.566em 0.022em 0px;\n        content: "\u2202";\n    }\n    \n    mjx-c.mjx-c1D404.TEX-B::before {\n        padding: 0.68em 0.756em 0px 0px;\n        content: "E";\n    }\n    \n    mjx-c.mjx-c1D461.TEX-I::before {\n        padding: 0.626em 0.361em 0.011em 0px;\n        content: "t";\n    }\n    \n    mjx-c.mjx-c3D::before {\n        padding: 0.583em 0.778em 0.082em 0px;\n        content: "=";\n    }\n    \n    mjx-c.mjx-c34::before {\n        padding: 0.677em 0.5em 0px 0px;\n        content: "4";\n    }\n    \n    mjx-c.mjx-c1D70B.TEX-I::before {\n        padding: 0.431em 0.57em 0.011em 0px;\n        content: "\u03c0";\n    }\n    \n    mjx-c.mjx-c1D423.TEX-B::before {\n        padding: 0.695em 0.351em 0.2em 0px;\n        content: "j";\n    }\n    \n    mjx-c.mjx-c22C5::before {\n        padding: 0.31em 0.278em 0px 0px;\n        content: "\u22c5";\n    }\n    \n    mjx-c.mjx-c1D70C.TEX-I::before {\n        padding: 0.442em 0.517em 0.216em 0px;\n        content: "\u03c1";\n    }\n    \n    mjx-c.mjx-c2B::before {\n        padding: 0.583em 0.778em 0.082em 0px;\n        content: "+";\n    }\n    \n    mjx-c.mjx-c1D7CE.TEX-B::before {\n        padding: 0.654em 0.575em 0.01em 0px;\n        content: "0";\n    }\n    \n    mjx-c.mjx-c30::before {\n        padding: 0.666em 0.5em 0.022em 0px;\n        content: "0";\n    }\n    \n    mjx-math {\n        display: inline-block;\n        text-align: left;\n        line-height: 0;\n        text-indent: 0px;\n        font-style: normal;\n        font-weight: normal;\n        font-size: 100%;\n        letter-spacing: normal;\n        overflow-wrap: normal;\n        word-spacing: normal;\n        white-space: nowrap;\n        direction: ltr;\n        padding: 1px 0px;\n    }\n    \n    mjx-container[jax="CHTML"][display="true"] {\n        display: block;\n        text-align: center;\n        margin: 1em 0px;\n    }\n    \n    mjx-container[jax="CHTML"][display="true"][width="full"] {\n        display: flex;\n    }\n    \n    mjx-container[jax="CHTML"][display="true"] mjx-math {\n        padding: 0px;\n    }\n    \n    mjx-container[jax="CHTML"][justify="left"] {\n        text-align: left;\n    }\n    \n    mjx-container[jax="CHTML"][justify="right"] {\n        text-align: right;\n    }\n    \n    mjx-mrow {\n        display: inline-block;\n        text-align: left;\n    }\n    \n    mjx-munderover {\n        display: inline-block;\n        text-align: left;\n    }\n    \n    mjx-munderover:not([limits="false"]) {\n        padding-top: 0.1em;\n    }\n    \n    mjx-munderover:not([limits="false"]) > * {\n        display: block;\n    }\n    \n    mjx-msubsup {\n        display: inline-block;\n        text-align: left;\n    }\n    \n    mjx-script {\n        display: inline-block;\n        padding-right: 0.05em;\n        padding-left: 0.033em;\n    }\n    \n    mjx-script > * {\n        display: block;\n    }\n    \n    mjx-mi {\n        display: inline-block;\n        text-align: left;\n    }\n    \n    mjx-c {\n        display: inline-block;\n    }\n    \n    mjx-utext {\n        display: inline-block;\n        padding: 0.75em 0px 0.2em;\n    }\n    \n    mjx-mo {\n        display: inline-block;\n        text-align: left;\n    }\n    \n    mjx-stretchy-h {\n        display: inline-table;\n        width: 100%;\n    }\n    \n    mjx-stretchy-h > * {\n        display: table-cell;\n        width: 0px;\n    }\n    \n    mjx-stretchy-h > * > mjx-c {\n        display: inline-block;\n        transform: scaleX(1);\n    }\n    \n    mjx-stretchy-h > * > mjx-c::before {\n        display: inline-block;\n        width: initial;\n    }\n    \n    mjx-stretchy-h > mjx-ext {\n        overflow: clip visible;\n        width: 100%;\n    }\n    \n    mjx-stretchy-h > mjx-ext > mjx-c::before {\n        transform: scaleX(500);\n    }\n    \n    mjx-stretchy-h > mjx-ext > mjx-c {\n        width: 0px;\n    }\n    \n    mjx-stretchy-h > mjx-beg > mjx-c {\n        margin-right: -0.1em;\n    }\n    \n    mjx-stretchy-h > mjx-end > mjx-c {\n        margin-left: -0.1em;\n    }\n    \n    mjx-stretchy-v {\n        display: inline-block;\n    }\n    \n    mjx-stretchy-v > * {\n        display: block;\n    }\n    \n    mjx-stretchy-v > mjx-beg {\n        height: 0px;\n    }\n    \n    mjx-stretchy-v > mjx-end > mjx-c {\n        display: block;\n    }\n    \n    mjx-stretchy-v > * > mjx-c {\n        transform: scaleY(1);\n        transform-origin: left center;\n        overflow: hidden;\n    }\n    \n    mjx-stretchy-v > mjx-ext {\n        display: block;\n        height: 100%;\n        box-sizing: border-box;\n        border: 0px solid transparent;\n        overflow: visible clip;\n    }\n    \n    mjx-stretchy-v > mjx-ext > mjx-c::before {\n        width: initial;\n        box-sizing: border-box;\n    }\n    \n    mjx-stretchy-v > mjx-ext > mjx-c {\n        transform: scaleY(500) translateY(0.075em);\n        overflow: visible;\n    }\n    \n    mjx-mark {\n        display: inline-block;\n        height: 0px;\n    }\n    \n    mjx-mn {\n        display: inline-block;\n        text-align: left;\n    }\n    \n    mjx-msup {\n        display: inline-block;\n        text-align: left;\n    }\n    \n    mjx-mfrac {\n        display: inline-block;\n        text-align: left;\n    }\n    \n    mjx-frac {\n        display: inline-block;\n        vertical-align: 0.17em;\n        padding: 0px 0.22em;\n    }\n    \n    mjx-frac[type="d"] {\n        vertical-align: 0.04em;\n    }\n    \n    mjx-frac[delims] {\n        padding: 0px 0.1em;\n    }\n    \n    mjx-frac[atop] {\n        padding: 0px 0.12em;\n    }\n    \n    mjx-frac[atop][delims] {\n        padding: 0px;\n    }\n    \n    mjx-dtable {\n        display: inline-table;\n        width: 100%;\n    }\n    \n    mjx-dtable > * {\n        font-size: 2000%;\n    }\n    \n    mjx-dbox {\n        display: block;\n        font-size: 5%;\n    }\n    \n    mjx-num {\n        display: block;\n        text-align: center;\n    }\n    \n    mjx-den {\n        display: block;\n        text-align: center;\n    }\n    \n    mjx-mfrac[bevelled] > mjx-num {\n        display: inline-block;\n    }\n    \n    mjx-mfrac[bevelled] > mjx-den {\n        display: inline-block;\n    }\n    \n    mjx-den[align="right"],\n    mjx-num[align="right"] {\n        text-align: right;\n    }\n    \n    mjx-den[align="left"],\n    mjx-num[align="left"] {\n        text-align: left;\n    }\n    \n    mjx-nstrut {\n        display: inline-block;\n        height: 0.054em;\n        width: 0px;\n        vertical-align: -0.054em;\n    }\n    \n    mjx-nstrut[type="d"] {\n        height: 0.217em;\n        vertical-align: -0.217em;\n    }\n    \n    mjx-dstrut {\n        display: inline-block;\n        height: 0.505em;\n        width: 0px;\n    }\n    \n    mjx-dstrut[type="d"] {\n        height: 0.726em;\n    }\n    \n    mjx-line {\n        display: block;\n        box-sizing: border-box;\n        min-height: 1px;\n        height: 0.06em;\n        border-top: 0.06em solid;\n        margin: 0.06em -0.1em;\n        overflow: hidden;\n    }\n    \n    mjx-line[type="d"] {\n        margin: 0.18em -0.1em;\n    }\n    \n    mjx-c.mjx-c1D45B.TEX-I::before {\n        padding: 0.442em 0.6em 0.011em 0px;\n        content: "n";\n    }\n    \n    mjx-c.mjx-c2211.TEX-S2::before {\n        padding: 0.95em 1.444em 0.45em 0px;\n        content: "\u2211";\n    }\n    \n    mjx-c.mjx-c1D456.TEX-I::before {\n        padding: 0.661em 0.345em 0.011em 0px;\n        content: "i";\n    }\n    \n    mjx-c.mjx-c3D::before {\n        padding: 0.583em 0.778em 0.082em 0px;\n        content: "=";\n    }\n    \n    mjx-c.mjx-c31::before {\n        padding: 0.666em 0.5em 0px 0px;\n        content: "1";\n    }\n    \n    mjx-c.mjx-c33::before {\n        padding: 0.665em 0.5em 0.022em 0px;\n        content: "3";\n    }\n    \n    mjx-c.mjx-c28.TEX-S3::before {\n        padding: 1.45em 0.736em 0.949em 0px;\n        content: "(";\n    }\n    \n    mjx-c.mjx-c28::before {\n        padding: 0.75em 0.389em 0.25em 0px;\n        content: "(";\n    }\n    \n    mjx-c.mjx-c2B::before {\n        padding: 0.583em 0.778em 0.082em 0px;\n        content: "+";\n    }\n    \n    mjx-c.mjx-c29::before {\n        padding: 0.75em 0.389em 0.25em 0px;\n        content: ")";\n    }\n    \n    mjx-c.mjx-c32::before {\n        padding: 0.666em 0.5em 0px 0px;\n        content: "2";\n    }\n    \n    mjx-c.mjx-c29.TEX-S3::before {\n        padding: 1.45em 0.736em 0.949em 0px;\n        content: ")";\n    }\n    \n    mjx-container[jax="CHTML"] {\n        line-height: 0;\n    }\n    \n    mjx-container [space="1"] {\n        margin-left: 0.111em;\n    }\n    \n    mjx-container [space="2"] {\n        margin-left: 0.167em;\n    }\n    \n    mjx-container [space="3"] {\n        margin-left: 0.222em;\n    }\n    \n    mjx-container [space="4"] {\n        margin-left: 0.278em;\n    }\n    \n    mjx-container [space="5"] {\n        margin-left: 0.333em;\n    }\n    \n    mjx-container [rspace="1"] {\n        margin-right: 0.111em;\n    }\n    \n    mjx-container [rspace="2"] {\n        margin-right: 0.167em;\n    }\n    \n    mjx-container [rspace="3"] {\n        margin-right: 0.222em;\n    }\n    \n    mjx-container [rspace="4"] {\n        margin-right: 0.278em;\n    }\n    \n    mjx-container [rspace="5"] {\n        margin-right: 0.333em;\n    }\n    \n    mjx-container [size="s"] {\n        font-size: 70.7%;\n    }\n    \n    mjx-container [size="ss"] {\n        font-size: 50%;\n    }\n    \n    mjx-container [size="Tn"] {\n        font-size: 60%;\n    }\n    \n    mjx-container [size="sm"] {\n        font-size: 85%;\n    }\n    \n    mjx-container [size="lg"] {\n        font-size: 120%;\n    }\n    \n    mjx-container [size="Lg"] {\n        font-size: 144%;\n    }\n    \n    mjx-container [size="LG"] {\n        font-size: 173%;\n    }\n    \n    mjx-container [size="hg"] {\n        font-size: 207%;\n    }\n    \n    mjx-container [size="HG"] {\n        font-size: 249%;\n    }\n    \n    mjx-container [width="full"] {\n        width: 100%;\n    }\n    \n    mjx-box {\n        display: inline-block;\n    }\n    \n    mjx-block {\n        display: block;\n    }\n    \n    mjx-itable {\n        display: inline-table;\n    }\n    \n    mjx-row {\n        display: table-row;\n    }\n    \n    mjx-row > * {\n        display: table-cell;\n    }\n    \n    mjx-mtext {\n        display: inline-block;\n    }\n    \n    mjx-mstyle {\n        display: inline-block;\n    }\n    \n    mjx-merror {\n        display: inline-block;\n        color: red;\n        background-color: yellow;\n    }\n    \n    mjx-mphantom {\n        visibility: hidden;\n    }\n    \n    mjx-c::before {\n        display: block;\n        width: 0px;\n    }\n    \n    .MJX-TEX {\n        font-family: MJXZERO, MJXTEX;\n    }\n    \n    .TEX-B {\n        font-family: MJXZERO, MJXTEX-B;\n    }\n    \n    .TEX-I {\n        font-family: MJXZERO, MJXTEX-I;\n    }\n    \n    .TEX-MI {\n        font-family: MJXZERO, MJXTEX-MI;\n    }\n    \n    .TEX-BI {\n        font-family: MJXZERO, MJXTEX-BI;\n    }\n    \n    .TEX-S1 {\n        font-family: MJXZERO, MJXTEX-S1;\n    }\n    \n    .TEX-S2 {\n        font-family: MJXZERO, MJXTEX-S2;\n    }\n    \n    .TEX-S3 {\n        font-family: MJXZERO, MJXTEX-S3;\n    }\n    \n    .TEX-S4 {\n        font-family: MJXZERO, MJXTEX-S4;\n    }\n    \n    .TEX-A {\n        font-family: MJXZERO, MJXTEX-A;\n    }\n    \n    .TEX-C {\n        font-family: MJXZERO, MJXTEX-C;\n    }\n    \n    .TEX-CB {\n        font-family: MJXZERO, MJXTEX-CB;\n    }\n    \n    .TEX-FR {\n        font-family: MJXZERO, MJXTEX-FR;\n    }\n    \n    .TEX-FRB {\n        font-family: MJXZERO, MJXTEX-FRB;\n    }\n    \n    .TEX-SS {\n        font-family: MJXZERO, MJXTEX-SS;\n    }\n    \n    .TEX-SSB {\n        font-family: MJXZERO, MJXTEX-SSB;\n    }\n    \n    .TEX-SSI {\n        font-family: MJXZERO, MJXTEX-SSI;\n    }\n    \n    .TEX-SC {\n        font-family: MJXZERO, MJXTEX-SC;\n    }\n    \n    .TEX-T {\n        font-family: MJXZERO, MJXTEX-T;\n    }\n    \n    .TEX-V {\n        font-family: MJXZERO, MJXTEX-V;\n    }\n    \n    .TEX-VB {\n        font-family: MJXZERO, MJXTEX-VB;\n    }\n    \n    mjx-stretchy-v mjx-c,\n    mjx-stretchy-h mjx-c {\n        font-family: MJXZERO, MJXTEX-S1, MJXTEX-S4, MJXTEX, MJXTEX-A !important;\n    }\n    \n    @font-face {\n        font-family: MJXZERO;\n        src: url("'.concat(x, '/output/chtml/fonts/woff-v2/MathJax_Zero.woff")\n            format("woff");\n    }\n    \n    @font-face {\n        font-family: MJXTEX;\n        src: url("').concat(x, '/output/chtml/fonts/woff-v2/MathJax_Main-Regular.woff")\n            format("woff");\n    }\n    \n    @font-face {\n        font-family: MJXTEX-B;\n        src: url("').concat(x, '/output/chtml/fonts/woff-v2/MathJax_Main-Bold.woff")\n            format("woff");\n    }\n    \n    @font-face {\n        font-family: MJXTEX-I;\n        src: url("').concat(x, '/output/chtml/fonts/woff-v2/MathJax_Math-Italic.woff")\n            format("woff");\n    }\n    \n    @font-face {\n        font-family: MJXTEX-MI;\n        src: url("').concat(x, '/output/chtml/fonts/woff-v2/MathJax_Main-Italic.woff")\n            format("woff");\n    }\n    \n    @font-face {\n        font-family: MJXTEX-BI;\n        src: url("').concat(x, '/output/chtml/fonts/woff-v2/MathJax_Math-BoldItalic.woff")\n            format("woff");\n    }\n    \n    @font-face {\n        font-family: MJXTEX-S1;\n        src: url("').concat(x, '/output/chtml/fonts/woff-v2/MathJax_Size1-Regular.woff")\n            format("woff");\n    }\n    \n    @font-face {\n        font-family: MJXTEX-S2;\n        src: url("').concat(x, '/output/chtml/fonts/woff-v2/MathJax_Size2-Regular.woff")\n            format("woff");\n    }\n    \n    @font-face {\n        font-family: MJXTEX-S3;\n        src: url("').concat(x, '/output/chtml/fonts/woff-v2/MathJax_Size3-Regular.woff")\n            format("woff");\n    }\n    \n    @font-face {\n        font-family: MJXTEX-S4;\n        src: url("').concat(x, '/output/chtml/fonts/woff-v2/MathJax_Size4-Regular.woff")\n            format("woff");\n    }\n    \n    @font-face {\n        font-family: MJXTEX-A;\n        src: url("').concat(x, '/output/chtml/fonts/woff-v2/MathJax_AMS-Regular.woff")\n            format("woff");\n    }\n    \n    @font-face {\n        font-family: MJXTEX-C;\n        src: url("').concat(x, '/output/chtml/fonts/woff-v2/MathJax_Calligraphic-Regular.woff")\n            format("woff");\n    }\n    \n    @font-face {\n        font-family: MJXTEX-CB;\n        src: url("').concat(x, '/output/chtml/fonts/woff-v2/MathJax_Calligraphic-Bold.woff")\n            format("woff");\n    }\n    \n    @font-face {\n        font-family: MJXTEX-FR;\n        src: url("').concat(x, '/output/chtml/fonts/woff-v2/MathJax_Fraktur-Regular.woff")\n            format("woff");\n    }\n    \n    @font-face {\n        font-family: MJXTEX-FRB;\n        src: url("').concat(x, '/output/chtml/fonts/woff-v2/MathJax_Fraktur-Bold.woff")\n            format("woff");\n    }\n    \n    @font-face {\n        font-family: MJXTEX-SS;\n        src: url("').concat(x, '/output/chtml/fonts/woff-v2/MathJax_SansSerif-Regular.woff")\n            format("woff");\n    }\n    \n    @font-face {\n        font-family: MJXTEX-SSB;\n        src: url("').concat(x, '/output/chtml/fonts/woff-v2/MathJax_SansSerif-Bold.woff")\n            format("woff");\n    }\n    \n    @font-face {\n        font-family: MJXTEX-SSI;\n        src: url("').concat(x, '/output/chtml/fonts/woff-v2/MathJax_SansSerif-Italic.woff")\n            format("woff");\n    }\n    \n    @font-face {\n        font-family: MJXTEX-SC;\n        src: url("').concat(x, '/output/chtml/fonts/woff-v2/MathJax_Script-Regular.woff")\n            format("woff");\n    }\n    \n    @font-face {\n        font-family: MJXTEX-T;\n        src: url("').concat(x, '/output/chtml/fonts/woff-v2/MathJax_Typewriter-Regular.woff")\n            format("woff");\n    }\n    \n    @font-face {\n        font-family: MJXTEX-V;\n        src: url("').concat(x, '/output/chtml/fonts/woff-v2/MathJax_Vector-Regular.woff")\n            format("woff");\n    }\n    \n    @font-face {\n        font-family: MJXTEX-VB;\n        src: url("').concat(x, '/output/chtml/fonts/woff-v2/MathJax_Vector-Bold.woff")\n            format("woff");\n    }\n    ') ], {
    type: "text/css"
})), f = i(function() {
    var n = e(regeneratorRuntime.mark((function n(e) {
        var t, m = arguments;
        return regeneratorRuntime.wrap((function(n) {
            for (;;) switch (n.prev = n.next) {
              case 0:
                return t = m.length > 1 && void 0 !== m[1] ? m[1] : {}, n.abrupt("return", fetch(e, t).then((function(n) {
                    return n.ok ? n : Promise.reject(new Error("fetch failed:" + e));
                })).then((function(n) {
                    return n.text();
                })));

              case 2:
              case "end":
                return n.stop();
            }
        }), n);
    })));
    return function(e) {
        return n.apply(this, arguments);
    };
}()), p = [ "startup", "[tex]/action", "[tex]/all-packages", "[tex]/ams", "[tex]/amscd", "[tex]/bbox", "[tex]/boldsymbol", "[tex]/braket", "[tex]/bussproofs", "[tex]/cancel", "[tex]/cases", "[tex]/centernot", "[tex]/color", "[tex]/colortbl", "[tex]/colorv2", "[tex]/configmacros", "[tex]/empheq", "[tex]/enclose", "[tex]/extpfeil", "[tex]/gensymb", "[tex]/html", "[tex]/mathtools", "[tex]/mhchem", "[tex]/newcommand", "[tex]/noerrors", "[tex]/noundefined", "[tex]/physics", "[tex]/require", "[tex]/setoptions", "[tex]/tagformat", "[tex]/textcomp", "[tex]/textmacros", "[tex]/unicode", "[tex]/upgreek", "[tex]/verb", "core", "input/asciimath", "input/mml", "input/tex-base", "input/tex-full", "loader", "output/chtml", "output/chtml/fonts/tex" ], d = URL.createObjectURL(new Blob([ "\nMathJax.loader.preLoad(".concat(p.map((function(n) {
    return JSON.stringify(n);
})).join(","), ")\n    ") ], {
    type: "application/javascript"
}));

var s = {
    startup: {
        typeset: !1
    },
    loader: {
        load: [],
        paths: {
            mathjax: x
        }
    }
}, j = URL.createObjectURL(new Blob([ "\nwindow.MathJax=".concat(JSON.stringify(s), "\n    ") ], {
    type: "application/javascript"
}));

var u = [ "core", "input/asciimath", "output/chtml", "input/tex-full", "input/mml", "output/chtml/fonts/tex" ].map(b), g = [ j, b("startup"), d ].concat(r(u));

function b(n) {
    return x + "/" + n + ".min.js";
}

function h() {
    return y.apply(this, arguments);
}

function y() {
    return (y = e(regeneratorRuntime.mark((function n() {
        var e, t, m, a, i, c, x, l, p, d, s;
        return regeneratorRuntime.wrap((function(n) {
            for (;;) switch (n.prev = n.next) {
              case 0:
                return n.next = 2, Promise.all(g.map((function(n) {
                    return f(n);
                })));

              case 2:
                return e = n.sent, t = e.join("\n;\n"), m = {}, n.t0 = Proxy, n.t1 = {
                    get MathJax() {
                        return m;
                    },
                    set MathJax(n) {
                        m = n;
                    }
                }, n.t2 = {
                    get: function(n, e, t) {
                        var m = Reflect.get(n, e, t) || Reflect.get(window, e, window);
                        return "function" == typeof m ? m.bind(window) : m;
                    },
                    has: function(n, e) {
                        return Reflect.has(n, e) || Reflect.has(window, e);
                    },
                    ownKeys: function(n) {
                        return Reflect.ownKeys(n) || Reflect.ownKeys(window);
                    }
                }, a = new n.t0(n.t1, n.t2), i = new Proxy({}, {
                    get: function(n, e, t) {
                        return Reflect.get(m, e, m);
                    },
                    set: function(n, e, t, o) {
                        return Reflect.set(m, e, t, m);
                    },
                    has: function(n, e) {
                        return Reflect.has(m, e);
                    },
                    ownKeys: function(n) {
                        return Reflect.ownKeys(m);
                    },
                    defineProperty: function(n, e, t) {
                        return Reflect.defineProperty(m, e, t);
                    },
                    deleteProperty: function(n, e) {
                        return Reflect.deleteProperty(m, e);
                    }
                }), c = Object.fromEntries(Reflect.ownKeys(window).filter((function(n) {
                    return Object.is(window, Reflect.get(window, n));
                })).map((function(n) {
                    return [ n, a ];
                }))), x = {
                    value: void 0,
                    mathfontfamily: void 0,
                    mathfontsize: void 0
                }, l = Object.assign(x, {
                    MathJax: i
                }, c), p = Object.keys(l), d = Object.values(l), s = o(Function, r(p).concat([ t ])), 
                Reflect.apply(s, a, d), n.abrupt("return", m);

              case 18:
              case "end":
                return n.stop();
            }
        }), n);
    })))).apply(this, arguments);
}

var w = i(e(regeneratorRuntime.mark((function n() {
    return regeneratorRuntime.wrap((function(n) {
        for (;;) switch (n.prev = n.next) {
          case 0:
            return n.next = 2, c(l);

          case 2:
            return n.abrupt("return", h());

          case 3:
          case "end":
            return n.stop();
        }
    }), n);
}))));

function X() {
    return v.apply(this, arguments);
}

function v() {
    return (v = e(regeneratorRuntime.mark((function n() {
        var e;
        return regeneratorRuntime.wrap((function(n) {
            for (;;) switch (n.prev = n.next) {
              case 0:
                return n.next = 2, w();

              case 2:
                return e = n.sent, n.next = 5, e.startup.promise;

              case 5:
                return n.abrupt("return", e);

              case 6:
              case "end":
                return n.stop();
            }
        }), n);
    })))).apply(this, arguments);
}

function E() {
    return (E = e(regeneratorRuntime.mark((function n(e, t) {
        var m, o, r;
        return regeneratorRuntime.wrap((function(n) {
            for (;;) switch (n.prev = n.next) {
              case 0:
                return n.next = 2, X();

              case 2:
                return m = n.sent, o = m.getMetricsFor(t), n.next = 6, m.asciimath2chtmlPromise(e, o);

              case 6:
                r = n.sent, t.appendChild(r), m.startup.document.clear(), m.startup.document.updateDocument();

              case 10:
              case "end":
                return n.stop();
            }
        }), n);
    })))).apply(this, arguments);
}

function M() {
    return (M = e(regeneratorRuntime.mark((function n(e, t) {
        var m, o, r;
        return regeneratorRuntime.wrap((function(n) {
            for (;;) switch (n.prev = n.next) {
              case 0:
                return n.next = 2, X();

              case 2:
                return m = n.sent, o = m.getMetricsFor(t), n.next = 6, m.mathml2chtmlPromise(e, o);

              case 6:
                r = n.sent, t.appendChild(r), m.startup.document.clear(), m.startup.document.updateDocument();

              case 10:
              case "end":
                return n.stop();
            }
        }), n);
    })))).apply(this, arguments);
}

function T() {
    return (T = e(regeneratorRuntime.mark((function n(e, t) {
        var m, o, r;
        return regeneratorRuntime.wrap((function(n) {
            for (;;) switch (n.prev = n.next) {
              case 0:
                return n.next = 2, X();

              case 2:
                return m = n.sent, o = m.getMetricsFor(t), n.next = 6, m.tex2chtmlPromise(e, o);

              case 6:
                r = n.sent, t.appendChild(r), m.startup.document.clear(), m.startup.document.updateDocument();

              case 10:
              case "end":
                return n.stop();
            }
        }), n);
    })))).apply(this, arguments);
}

exports.initmathjax = X, exports.renderasciimath = function(n, e) {
    return E.apply(this, arguments);
}, exports.renderlatex = function(n, e) {
    return T.apply(this, arguments);
}, exports.rendermathml = function(n, e) {
    return M.apply(this, arguments);
};
//# sourceMappingURL=index.cjs.map
