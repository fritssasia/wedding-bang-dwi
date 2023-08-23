/*! bdtUIkit 3.15.10 | https://www.getuikit.com | (c) 2014 - 2022 YOOtheme | MIT License */
(function (ue, de) {
    typeof exports == "object" && typeof module < "u" ? module.exports = de() : typeof define == "function" && define.amd ? define("uikit", de) : (ue = typeof globalThis < "u" ? globalThis : ue || self, ue.bdtUIkit = de())
})(this, function () {
    "use strict";
    const {
        hasOwnProperty: ue,
        toString: de
    } = Object.prototype;

    function Bt(t, e) {
        return ue.call(t, e)
    }
    const fo = /\B([A-Z])/g,
        Xt = ft(t => t.replace(fo, "-$1").toLowerCase()),
        po = /-(\w)/g,
        fe = ft(t => t.replace(po, fs)),
        St = ft(t => t.length ? fs(null, t.charAt(0)) + t.slice(1) : "");

    function fs(t, e) {
        return e ? e.toUpperCase() : ""
    }

    function lt(t, e) {
        return t == null || t.startsWith == null ? void 0 : t.startsWith(e)
    }

    function Gt(t, e) {
        return t == null || t.endsWith == null ? void 0 : t.endsWith(e)
    }

    function p(t, e) {
        return t == null || t.includes == null ? void 0 : t.includes(e)
    }

    function bt(t, e) {
        return t == null || t.findIndex == null ? void 0 : t.findIndex(e)
    }
    const {
        isArray: U,
        from: xi
    } = Array, {
        assign: xt
    } = Object;

    function mt(t) {
        return typeof t == "function"
    }

    function Tt(t) {
        return t !== null && typeof t == "object"
    }

    function yt(t) {
        return de.call(t) === "[object Object]"
    }

    function Jt(t) {
        return Tt(t) && t === t.window
    }

    function De(t) {
        return $i(t) === 9
    }

    function yi(t) {
        return $i(t) >= 1
    }

    function Kt(t) {
        return $i(t) === 1
    }

    function $i(t) {
        return !Jt(t) && Tt(t) && t.nodeType
    }

    function Me(t) {
        return typeof t == "boolean"
    }

    function B(t) {
        return typeof t == "string"
    }

    function Zt(t) {
        return typeof t == "number"
    }

    function Dt(t) {
        return Zt(t) || B(t) && !isNaN(t - parseFloat(t))
    }

    function pe(t) {
        return !(U(t) ? t.length : Tt(t) ? Object.keys(t).length : !1)
    }

    function R(t) {
        return t === void 0
    }

    function ki(t) {
        return Me(t) ? t : t === "true" || t === "1" || t === "" ? !0 : t === "false" || t === "0" ? !1 : t
    }

    function Ct(t) {
        const e = Number(t);
        return isNaN(e) ? !1 : e
    }

    function w(t) {
        return parseFloat(t) || 0
    }

    function j(t) {
        return $(t)[0]
    }

    function $(t) {
        return t && (yi(t) ? [t] : Array.from(t).filter(yi)) || []
    }

    function Mt(t) {
        var e;
        if (Jt(t)) return t;
        t = j(t);
        const i = De(t) ? t : (e = t) == null ? void 0 : e.ownerDocument;
        return (i == null ? void 0 : i.defaultView) || window
    }

    function ge(t, e) {
        return t === e || Tt(t) && Tt(e) && Object.keys(t).length === Object.keys(e).length && $t(t, (i, s) => i === e[s])
    }

    function Si(t, e, i) {
        return t.replace(new RegExp(e + "|" + i, "g"), s => s === e ? i : e)
    }

    function Qt(t) {
        return t[t.length - 1]
    }

    function $t(t, e) {
        for (const i in t)
            if (e(t[i], i) === !1) return !1;
        return !0
    }

    function Ne(t, e) {
        return t.slice().sort((i, s) => {
            let {
                [e]: n = 0
            } = i, {
                [e]: o = 0
            } = s;
            return n > o ? 1 : o > n ? -1 : 0
        })
    }

    function ps(t, e) {
        const i = new Set;
        return t.filter(s => {
            let {
                [e]: n
            } = s;
            return i.has(n) ? !1 : i.add(n)
        })
    }

    function tt(t, e, i) {
        return e === void 0 && (e = 0), i === void 0 && (i = 1), Math.min(Math.max(Ct(t) || 0, e), i)
    }

    function T() {}

    function Ti() {
        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
        return [
            ["bottom", "top"],
            ["right", "left"]
        ].every(s => {
            let [n, o] = s;
            return Math.min(...e.map(r => {
                let {
                    [n]: a
                } = r;
                return a
            })) - Math.max(...e.map(r => {
                let {
                    [o]: a
                } = r;
                return a
            })) > 0
        })
    }

    function ze(t, e) {
        return t.x <= e.right && t.x >= e.left && t.y <= e.bottom && t.y >= e.top
    }

    function Ci(t, e, i) {
        const s = e === "width" ? "height" : "width";
        return {
            [s]: t[e] ? Math.round(i * t[s] / t[e]) : t[s],
            [e]: i
        }
    }

    function gs(t, e) {
        t = {
            ...t
        };
        for (const i in t) t = t[i] > e[i] ? Ci(t, i, e[i]) : t;
        return t
    }

    function go(t, e) {
        t = gs(t, e);
        for (const i in t) t = t[i] < e[i] ? Ci(t, i, e[i]) : t;
        return t
    }
    const Fe = {
        ratio: Ci,
        contain: gs,
        cover: go
    };

    function Ut(t, e, i, s) {
        i === void 0 && (i = 0), s === void 0 && (s = !1), e = $(e);
        const {
            length: n
        } = e;
        return n ? (t = Dt(t) ? Ct(t) : t === "next" ? i + 1 : t === "previous" ? i - 1 : e.indexOf(j(t)), s ? tt(t, 0, n - 1) : (t %= n, t < 0 ? t + n : t)) : -1
    }

    function ft(t) {
        const e = Object.create(null);
        return i => e[i] || (e[i] = t(i))
    }
    class He {
        constructor() {
            this.promise = new Promise((e, i) => {
                this.reject = i, this.resolve = e
            })
        }
    }

    function v(t, e, i) {
        if (Tt(e)) {
            for (const n in e) v(t, n, e[n]);
            return
        }
        if (R(i)) {
            var s;
            return (s = j(t)) == null ? void 0 : s.getAttribute(e)
        } else
            for (const n of $(t)) mt(i) && (i = i.call(n, v(n, e))), i === null ? me(n, e) : n.setAttribute(e, i)
    }

    function It(t, e) {
        return $(t).some(i => i.hasAttribute(e))
    }

    function me(t, e) {
        const i = $(t);
        for (const s of e.split(" "))
            for (const n of i) n.removeAttribute(s)
    }

    function ot(t, e) {
        for (const i of [e, "data-" + e])
            if (It(t, i)) return v(t, i)
    }
    const mo = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        menuitem: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    };

    function Ii(t) {
        return $(t).some(e => mo[e.tagName.toLowerCase()])
    }

    function q(t) {
        return $(t).some(e => e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }
    const ve = "input,select,textarea,button";

    function Pi(t) {
        return $(t).some(e => F(e, ve))
    }
    const Le = ve + ",a[href],[tabindex]";

    function We(t) {
        return F(t, Le)
    }

    function A(t) {
        var e;
        return (e = j(t)) == null ? void 0 : e.parentElement
    }

    function Re(t, e) {
        return $(t).filter(i => F(i, e))
    }

    function F(t, e) {
        return $(t).some(i => i.matches(e))
    }

    function et(t, e) {
        return Kt(t) ? t.closest(lt(e, ">") ? e.slice(1) : e) : $(t).map(i => et(i, e)).filter(Boolean)
    }

    function _(t, e) {
        return B(e) ? !!et(t, e) : j(e).contains(j(t))
    }

    function te(t, e) {
        const i = [];
        for (; t = A(t);)(!e || F(t, e)) && i.push(t);
        return i
    }

    function D(t, e) {
        t = j(t);
        const i = t ? $(t.children) : [];
        return e ? Re(i, e) : i
    }

    function ee(t, e) {
        return e ? $(t).indexOf(j(e)) : D(A(t)).indexOf(t)
    }

    function ht(t, e) {
        return Ai(t, vs(t, e))
    }

    function we(t, e) {
        return be(t, vs(t, e))
    }

    function Ai(t, e) {
        return j(ws(t, e, "querySelector"))
    }

    function be(t, e) {
        return $(ws(t, e, "querySelectorAll"))
    }
    const vo = /(^|[^\\],)\s*[!>+~-]/,
        ms = ft(t => t.match(vo));

    function vs(t, e) {
        return e === void 0 && (e = document), B(t) && ms(t) || De(e) ? e : e.ownerDocument
    }
    const wo = /([!>+~-])(?=\s+[!>+~-]|\s*$)/g,
        bo = ft(t => t.replace(wo, "$1 *"));

    function ws(t, e, i) {
        if (e === void 0 && (e = document), !t || !B(t)) return t;
        if (t = bo(t), ms(t)) {
            const s = yo(t);
            t = "";
            for (let n of s) {
                let o = e;
                if (n[0] === "!") {
                    const r = n.substr(1).trim().split(" ");
                    if (o = et(A(e), r[0]), n = r.slice(1).join(" ").trim(), !n.length && s.length === 1) return o
                }
                if (n[0] === "-") {
                    const r = n.substr(1).trim().split(" "),
                        a = (o || e).previousElementSibling;
                    o = F(a, n.substr(1)) ? a : null, n = r.slice(1).join(" ")
                }
                o && (t += (t ? "," : "") + $o(o) + " " + n)
            }
            e = document
        }
        try {
            return e[i](t)
        } catch {
            return null
        }
    }
    const xo = /.*?[^\\](?:,|$)/g,
        yo = ft(t => t.match(xo).map(e => e.replace(/,$/, "").trim()));

    function $o(t) {
        const e = [];
        for (; t.parentNode;) {
            const i = v(t, "id");
            if (i) {
                e.unshift("#" + Ei(i));
                break
            } else {
                let {
                    tagName: s
                } = t;
                s !== "HTML" && (s += ":nth-child(" + (ee(t) + 1) + ")"), e.unshift(s), t = t.parentNode
            }
        }
        return e.join(" > ")
    }

    function Ei(t) {
        return B(t) ? CSS.escape(t) : ""
    }

    function k() {
        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
        let [s, n, o, r, a = !1] = _i(e);
        r.length > 1 && (r = So(r)), a != null && a.self && (r = To(r)), o && (r = ko(o, r));
        for (const l of n)
            for (const c of s) c.addEventListener(l, r, a);
        return () => Nt(s, n, r, a)
    }

    function Nt() {
        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
        let [s, n, , o, r = !1] = _i(e);
        for (const a of n)
            for (const l of s) l.removeEventListener(a, o, r)
    }

    function N() {
        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
        const [s, n, o, r, a = !1, l] = _i(e), c = k(s, n, o, u => {
            const d = !l || l(u);
            d && (c(), r(u, d))
        }, a);
        return c
    }

    function g(t, e, i) {
        return Oi(t).every(s => s.dispatchEvent(zt(e, !0, !0, i)))
    }

    function zt(t, e, i, s) {
        return e === void 0 && (e = !0), i === void 0 && (i = !1), B(t) && (t = new CustomEvent(t, {
            bubbles: e,
            cancelable: i,
            detail: s
        })), t
    }

    function _i(t) {
        return t[0] = Oi(t[0]), B(t[1]) && (t[1] = t[1].split(" ")), mt(t[2]) && t.splice(2, 0, !1), t
    }

    function ko(t, e) {
        return i => {
            const s = t[0] === ">" ? be(t, i.currentTarget).reverse().filter(n => _(i.target, n))[0] : et(i.target, t);
            s && (i.current = s, e.call(this, i))
        }
    }

    function So(t) {
        return e => U(e.detail) ? t(e, ...e.detail) : t(e)
    }

    function To(t) {
        return function (e) {
            if (e.target === e.currentTarget || e.target === e.current) return t.call(null, e)
        }
    }

    function bs(t) {
        return t && "addEventListener" in t
    }

    function Co(t) {
        return bs(t) ? t : j(t)
    }

    function Oi(t) {
        return U(t) ? t.map(Co).filter(Boolean) : B(t) ? be(t) : bs(t) ? [t] : $(t)
    }

    function kt(t) {
        return t.pointerType === "touch" || !!t.touches
    }

    function ie(t) {
        var e, i;
        const {
            clientX: s,
            clientY: n
        } = ((e = t.touches) == null ? void 0 : e[0]) || ((i = t.changedTouches) == null ? void 0 : i[0]) || t;
        return {
            x: s,
            y: n
        }
    }

    function xs(t, e) {
        const i = {
            data: null,
            method: "GET",
            headers: {},
            xhr: new XMLHttpRequest,
            beforeSend: T,
            responseType: "",
            ...e
        };
        return Promise.resolve().then(() => i.beforeSend(i)).then(() => Io(t, i))
    }

    function Io(t, e) {
        return new Promise((i, s) => {
            const {
                xhr: n
            } = e;
            for (const o in e)
                if (o in n) try {
                    n[o] = e[o]
                } catch {}
            n.open(e.method.toUpperCase(), t);
            for (const o in e.headers) n.setRequestHeader(o, e.headers[o]);
            k(n, "load", () => {
                n.status === 0 || n.status >= 200 && n.status < 300 || n.status === 304 ? i(n) : s(xt(Error(n.statusText), {
                    xhr: n,
                    status: n.status
                }))
            }), k(n, "error", () => s(xt(Error("Network Error"), {
                xhr: n
            }))), k(n, "timeout", () => s(xt(Error("Network Timeout"), {
                xhr: n
            }))), n.send(e.data)
        })
    }

    function ys(t, e, i) {
        return new Promise((s, n) => {
            const o = new Image;
            o.onerror = r => {
                n(r)
            }, o.onload = () => {
                s(o)
            }, i && (o.sizes = i), e && (o.srcset = e), o.src = t
        })
    }
    const Po = {
        "animation-iteration-count": !0,
        "column-count": !0,
        "fill-opacity": !0,
        "flex-grow": !0,
        "flex-shrink": !0,
        "font-weight": !0,
        "line-height": !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        "stroke-dasharray": !0,
        "stroke-dashoffset": !0,
        widows: !0,
        "z-index": !0,
        zoom: !0
    };

    function h(t, e, i, s) {
        s === void 0 && (s = "");
        const n = $(t);
        for (const o of n)
            if (B(e)) {
                if (e = Bi(e), R(i)) return getComputedStyle(o).getPropertyValue(e);
                o.style.setProperty(e, Dt(i) && !Po[e] ? i + "px" : i || Zt(i) ? i : "", s)
            } else if (U(e)) {
            const r = {};
            for (const a of e) r[a] = h(o, a);
            return r
        } else Tt(e) && (s = i, $t(e, (r, a) => h(o, a, r, s)));
        return n[0]
    }
    const Bi = ft(t => Ao(t));

    function Ao(t) {
        if (lt(t, "--")) return t;
        t = Xt(t);
        const {
            style: e
        } = document.documentElement;
        if (t in e) return t;
        for (const i of ["webkit", "moz"]) {
            const s = "-" + i + "-" + t;
            if (s in e) return s
        }
    }

    function x(t) {
        for (var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), s = 1; s < e; s++) i[s - 1] = arguments[s];
        $s(t, i, "add")
    }

    function O(t) {
        for (var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), s = 1; s < e; s++) i[s - 1] = arguments[s];
        $s(t, i, "remove")
    }

    function Di(t, e) {
        v(t, "class", i => (i || "").replace(new RegExp("\\b" + e + "\\b\\s?", "g"), ""))
    }

    function Mi(t) {
        !(arguments.length <= 1) && arguments[1] && O(t, arguments.length <= 1 ? void 0 : arguments[1]), !(arguments.length <= 2) && arguments[2] && x(t, arguments.length <= 2 ? void 0 : arguments[2])
    }

    function E(t, e) {
        return [e] = Ni(e), !!e && $(t).some(i => i.classList.contains(e))
    }

    function H(t, e, i) {
        const s = Ni(e);
        R(i) || (i = !!i);
        for (const n of $(t))
            for (const o of s) n.classList.toggle(o, i)
    }

    function $s(t, e, i) {
        e = e.reduce((s, n) => s.concat(Ni(n)), []);
        for (const s of $(t)) s.classList[i](...e)
    }

    function Ni(t) {
        return String(t).split(/\s|,/).filter(Boolean)
    }

    function Eo(t, e, i, s) {
        return i === void 0 && (i = 400), s === void 0 && (s = "linear"), i = Math.round(i), Promise.all($(t).map(n => new Promise((o, r) => {
            for (const l in e) {
                const c = h(n, l);
                c === "" && h(n, l, c)
            }
            const a = setTimeout(() => g(n, "transitionend"), i);
            N(n, "transitionend transitioncanceled", l => {
                let {
                    type: c
                } = l;
                clearTimeout(a), O(n, "bdt-transition"), h(n, {
                    transitionProperty: "",
                    transitionDuration: "",
                    transitionTimingFunction: ""
                }), c === "transitioncanceled" ? r() : o(n)
            }, {
                self: !0
            }), x(n, "bdt-transition"), h(n, {
                transitionProperty: Object.keys(e).map(Bi).join(","),
                transitionDuration: i + "ms",
                transitionTimingFunction: s,
                ...e
            })
        })))
    }
    const S = {
            start: Eo,
            async stop(t) {
                g(t, "transitionend"), await Promise.resolve()
            },
            async cancel(t) {
                g(t, "transitioncanceled"), await Promise.resolve()
            },
            inProgress(t) {
                return E(t, "bdt-transition")
            }
        },
        xe = "bdt-animation-";

    function ks(t, e, i, s, n) {
        return i === void 0 && (i = 200), Promise.all($(t).map(o => new Promise((r, a) => {
            g(o, "animationcanceled");
            const l = setTimeout(() => g(o, "animationend"), i);
            N(o, "animationend animationcanceled", c => {
                let {
                    type: u
                } = c;
                clearTimeout(l), u === "animationcanceled" ? a() : r(o), h(o, "animationDuration", ""), Di(o, xe + "\\S*")
            }, {
                self: !0
            }), h(o, "animationDuration", i + "ms"), x(o, e, xe + (n ? "leave" : "enter")), lt(e, xe) && (s && x(o, "bdt-transform-origin-" + s), n && x(o, xe + "reverse"))
        })))
    }
    const _o = new RegExp(xe + "(enter|leave)"),
        pt = {
            in: ks,
            out(t, e, i, s) {
                return ks(t, e, i, s, !0)
            },
            inProgress(t) {
                return _o.test(v(t, "class"))
            },
            cancel(t) {
                g(t, "animationcanceled")
            }
        },
        Ft = {
            width: ["left", "right"],
            height: ["top", "bottom"]
        };

    function y(t) {
        const e = Kt(t) ? j(t).getBoundingClientRect() : {
            height: J(t),
            width: ye(t),
            top: 0,
            left: 0
        };
        return {
            height: e.height,
            width: e.width,
            top: e.top,
            left: e.left,
            bottom: e.top + e.height,
            right: e.left + e.width
        }
    }

    function C(t, e) {
        const i = y(t);
        if (t) {
            const {
                scrollY: n,
                scrollX: o
            } = Mt(t), r = {
                height: n,
                width: o
            };
            for (const a in Ft)
                for (const l of Ft[a]) i[l] += r[a]
        }
        if (!e) return i;
        const s = h(t, "position");
        $t(h(t, ["left", "top"]), (n, o) => h(t, o, e[o] - i[o] + w(s === "absolute" && n === "auto" ? je(t)[o] : n)))
    }

    function je(t) {
        let {
            top: e,
            left: i
        } = C(t);
        const {
            ownerDocument: {
                body: s,
                documentElement: n
            },
            offsetParent: o
        } = j(t);
        let r = o || n;
        for (; r && (r === s || r === n) && h(r, "position") === "static";) r = r.parentNode;
        if (Kt(r)) {
            const a = C(r);
            e -= a.top + w(h(r, "borderTopWidth")), i -= a.left + w(h(r, "borderLeftWidth"))
        }
        return {
            top: e - w(h(t, "marginTop")),
            left: i - w(h(t, "marginLeft"))
        }
    }

    function Ht(t) {
        t = j(t);
        const e = [t.offsetTop, t.offsetLeft];
        for (; t = t.offsetParent;)
            if (e[0] += t.offsetTop + w(h(t, "borderTopWidth")), e[1] += t.offsetLeft + w(h(t, "borderLeftWidth")), h(t, "position") === "fixed") {
                const i = Mt(t);
                return e[0] += i.scrollY, e[1] += i.scrollX, e
            } return e
    }
    const J = Ss("height"),
        ye = Ss("width");

    function Ss(t) {
        const e = St(t);
        return (i, s) => {
            if (R(s)) {
                if (Jt(i)) return i["inner" + e];
                if (De(i)) {
                    const n = i.documentElement;
                    return Math.max(n["offset" + e], n["scroll" + e])
                }
                return i = j(i), s = h(i, t), s = s === "auto" ? i["offset" + e] : w(s) || 0, s - se(i, t)
            } else return h(i, t, !s && s !== 0 ? "" : +s + se(i, t) + "px")
        }
    }

    function se(t, e, i) {
        return i === void 0 && (i = "border-box"), h(t, "boxSizing") === i ? Ft[e].map(St).reduce((s, n) => s + w(h(t, "padding" + n)) + w(h(t, "border" + n + "Width")), 0) : 0
    }

    function qe(t) {
        for (const e in Ft)
            for (const i in Ft[e])
                if (Ft[e][i] === t) return Ft[e][1 - i];
        return t
    }

    function K(t, e, i, s) {
        return e === void 0 && (e = "width"), i === void 0 && (i = window), s === void 0 && (s = !1), B(t) ? Bo(t).reduce((n, o) => {
            const r = Mo(o);
            return r && (o = No(r === "vh" ? J(Mt(i)) : r === "vw" ? ye(Mt(i)) : s ? i["offset" + St(e)] : y(i)[e], o)), n + w(o)
        }, 0) : w(t)
    }
    const Oo = /-?\d+(?:\.\d+)?(?:v[wh]|%|px)?/g,
        Bo = ft(t => t.toString().replace(/\s/g, "").match(Oo) || []),
        Do = /(?:v[hw]|%)$/,
        Mo = ft(t => (t.match(Do) || [])[0]);

    function No(t, e) {
        return t * w(e) / 100
    }

    function zi(t) {
        if (document.readyState !== "loading") {
            t();
            return
        }
        N(document, "DOMContentLoaded", t)
    }

    function ct(t, e) {
        var i;
        return (t == null || (i = t.tagName) == null ? void 0 : i.toLowerCase()) === e.toLowerCase()
    }

    function Ts(t) {
        return t = b(t), t.innerHTML = "", t
    }

    function Pt(t, e) {
        return R(e) ? b(t).innerHTML : L(Ts(t), e)
    }
    const zo = Ve("prepend"),
        L = Ve("append"),
        Fi = Ve("before"),
        Ye = Ve("after");

    function Ve(t) {
        return function (e, i) {
            var s;
            const n = $(B(i) ? Lt(i) : i);
            return (s = b(e)) == null || s[t](...n), Cs(n)
        }
    }

    function ut(t) {
        $(t).forEach(e => e.remove())
    }

    function Xe(t, e) {
        for (e = j(Fi(t, e)); e.firstChild;) e = e.firstChild;
        return L(e, t), e
    }

    function Hi(t, e) {
        return $($(t).map(i => i.hasChildNodes() ? Xe($(i.childNodes), e) : L(i, e)))
    }

    function $e(t) {
        $(t).map(A).filter((e, i, s) => s.indexOf(e) === i).forEach(e => e.replaceWith(...e.childNodes))
    }
    const Fo = /^\s*<(\w+|!)[^>]*>/,
        Ho = /^<(\w+)\s*\/?>(?:<\/\1>)?$/;

    function Lt(t) {
        const e = Ho.exec(t);
        if (e) return document.createElement(e[1]);
        const i = document.createElement("div");
        return Fo.test(t) ? i.insertAdjacentHTML("beforeend", t.trim()) : i.textContent = t, Cs(i.childNodes)
    }

    function Cs(t) {
        return t.length > 1 ? t : t[0]
    }

    function vt(t, e) {
        if (!!Kt(t))
            for (e(t), t = t.firstElementChild; t;) {
                const i = t.nextElementSibling;
                vt(t, e), t = i
            }
    }

    function b(t, e) {
        return Is(t) ? j(Lt(t)) : Ai(t, e)
    }

    function M(t, e) {
        return Is(t) ? $(Lt(t)) : be(t, e)
    }

    function Is(t) {
        return B(t) && lt(t.trim(), "<")
    }
    const Wt = typeof window < "u",
        X = Wt && v(document.documentElement, "dir") === "rtl",
        Rt = Wt && "ontouchstart" in window,
        ne = Wt && window.PointerEvent,
        gt = ne ? "pointerdown" : Rt ? "touchstart" : "mousedown",
        Ge = ne ? "pointermove" : Rt ? "touchmove" : "mousemove",
        At = ne ? "pointerup" : Rt ? "touchend" : "mouseup",
        jt = ne ? "pointerenter" : Rt ? "" : "mouseenter",
        oe = ne ? "pointerleave" : Rt ? "" : "mouseleave",
        Je = ne ? "pointercancel" : "touchcancel",
        G = {
            reads: [],
            writes: [],
            read(t) {
                return this.reads.push(t), Wi(), t
            },
            write(t) {
                return this.writes.push(t), Wi(), t
            },
            clear(t) {
                As(this.reads, t), As(this.writes, t)
            },
            flush: Li
        };

    function Li(t) {
        Ps(G.reads), Ps(G.writes.splice(0)), G.scheduled = !1, (G.reads.length || G.writes.length) && Wi(t + 1)
    }
    const Lo = 4;

    function Wi(t) {
        G.scheduled || (G.scheduled = !0, t && t < Lo ? Promise.resolve().then(() => Li(t)) : requestAnimationFrame(() => Li(1)))
    }

    function Ps(t) {
        let e;
        for (; e = t.shift();) try {
            e()
        } catch (i) {
            console.error(i)
        }
    }

    function As(t, e) {
        const i = t.indexOf(e);
        return ~i && t.splice(i, 1)
    }

    function Ri() {}
    Ri.prototype = {
        positions: [],
        init() {
            this.positions = [];
            let t;
            this.unbind = k(document, "mousemove", e => t = ie(e)), this.interval = setInterval(() => {
                !t || (this.positions.push(t), this.positions.length > 5 && this.positions.shift())
            }, 50)
        },
        cancel() {
            var t;
            (t = this.unbind) == null || t.call(this), this.interval && clearInterval(this.interval)
        },
        movesTo(t) {
            if (this.positions.length < 2) return !1;
            const e = t.getBoundingClientRect(),
                {
                    left: i,
                    right: s,
                    top: n,
                    bottom: o
                } = e,
                [r] = this.positions,
                a = Qt(this.positions),
                l = [r, a];
            return ze(a, e) ? !1 : [
                [{
                    x: i,
                    y: n
                }, {
                    x: s,
                    y: o
                }],
                [{
                    x: i,
                    y: o
                }, {
                    x: s,
                    y: n
                }]
            ].some(u => {
                const d = Wo(l, u);
                return d && ze(d, e)
            })
        }
    };

    function Wo(t, e) {
        let [{
            x: i,
            y: s
        }, {
            x: n,
            y: o
        }] = t, [{
            x: r,
            y: a
        }, {
            x: l,
            y: c
        }] = e;
        const u = (c - a) * (n - i) - (l - r) * (o - s);
        if (u === 0) return !1;
        const d = ((l - r) * (s - a) - (c - a) * (i - r)) / u;
        return d < 0 ? !1 : {
            x: i + d * (n - i),
            y: s + d * (o - s)
        }
    }

    function re(t, e, i, s) {
        s === void 0 && (s = !0);
        const n = new IntersectionObserver(s ? (o, r) => {
            o.some(a => a.isIntersecting) && e(o, r)
        } : e, i);
        for (const o of $(t)) n.observe(o);
        return n
    }
    const Ro = Wt && window.ResizeObserver;

    function Ke(t, e, i) {
        return i === void 0 && (i = {
            box: "border-box"
        }), Ro ? Es(ResizeObserver, t, e, i) : (jo(), ke.add(e), {
            disconnect() {
                ke.delete(e)
            }
        })
    }
    let ke;

    function jo() {
        if (ke) return;
        ke = new Set;
        let t;
        const e = () => {
            if (!t) {
                t = !0, requestAnimationFrame(() => t = !1);
                for (const i of ke) i()
            }
        };
        k(window, "load resize", e), k(document, "loadedmetadata load", e, !0)
    }

    function ji(t, e, i) {
        return Es(MutationObserver, t, e, i)
    }

    function Es(t, e, i, s) {
        const n = new t(i);
        for (const o of $(e)) n.observe(o, s);
        return n
    }
    const Z = {};
    Z.events = Z.created = Z.beforeConnect = Z.connected = Z.beforeDisconnect = Z.disconnected = Z.destroy = qi, Z.args = function (t, e) {
        return e !== !1 && qi(e || t)
    }, Z.update = function (t, e) {
        return Ne(qi(t, mt(e) ? {
            read: e
        } : e), "order")
    }, Z.props = function (t, e) {
        if (U(e)) {
            const i = {};
            for (const s of e) i[s] = String;
            e = i
        }
        return Z.methods(t, e)
    }, Z.computed = Z.methods = function (t, e) {
        return e ? t ? {
            ...t,
            ...e
        } : e : t
    }, Z.data = function (t, e, i) {
        return i ? _s(t, e, i) : e ? t ? function (s) {
            return _s(t, e, s)
        } : e : t
    };

    function _s(t, e, i) {
        return Z.computed(mt(t) ? t.call(i, i) : t, mt(e) ? e.call(i, i) : e)
    }

    function qi(t, e) {
        return t = t && !U(t) ? [t] : t, e ? t ? t.concat(e) : U(e) ? e : [e] : t
    }

    function qo(t, e) {
        return R(e) ? t : e
    }

    function ae(t, e, i) {
        const s = {};
        if (mt(e) && (e = e.options), e.extends && (t = ae(t, e.extends, i)), e.mixins)
            for (const o of e.mixins) t = ae(t, o, i);
        for (const o in t) n(o);
        for (const o in e) Bt(t, o) || n(o);

        function n(o) {
            s[o] = (Z[o] || qo)(t[o], e[o], i)
        }
        return s
    }

    function Se(t, e) {
        e === void 0 && (e = []);
        try {
            return t ? lt(t, "{") ? JSON.parse(t) : e.length && !p(t, ":") ? {
                [e[0]]: t
            } : t.split(";").reduce((i, s) => {
                const [n, o] = s.split(/:(.*)/);
                return n && !R(o) && (i[n.trim()] = o.trim()), i
            }, {}) : {}
        } catch {
            return {}
        }
    }

    function Os(t) {
        if (Qe(t) && Yi(t, {
                func: "playVideo",
                method: "play"
            }), Ze(t)) try {
            t.play().catch(T)
        } catch {}
    }

    function Bs(t) {
        Qe(t) && Yi(t, {
            func: "pauseVideo",
            method: "pause"
        }), Ze(t) && t.pause()
    }

    function Ds(t) {
        Qe(t) && Yi(t, {
            func: "mute",
            method: "setVolume",
            value: 0
        }), Ze(t) && (t.muted = !0)
    }

    function Ms(t) {
        return Ze(t) || Qe(t)
    }

    function Ze(t) {
        return ct(t, "video")
    }

    function Qe(t) {
        return ct(t, "iframe") && (Ns(t) || zs(t))
    }

    function Ns(t) {
        return !!t.src.match(/\/\/.*?youtube(-nocookie)?\.[a-z]+\/(watch\?v=[^&\s]+|embed)|youtu\.be\/.*/)
    }

    function zs(t) {
        return !!t.src.match(/vimeo\.com\/video\/.*/)
    }
    async function Yi(t, e) {
        await Vo(t), Fs(t, e)
    }

    function Fs(t, e) {
        try {
            t.contentWindow.postMessage(JSON.stringify({
                event: "command",
                ...e
            }), "*")
        } catch {}
    }
    const Vi = "_ukPlayer";
    let Yo = 0;

    function Vo(t) {
        if (t[Vi]) return t[Vi];
        const e = Ns(t),
            i = zs(t),
            s = ++Yo;
        let n;
        return t[Vi] = new Promise(o => {
            e && N(t, "load", () => {
                const r = () => Fs(t, {
                    event: "listening",
                    id: s
                });
                n = setInterval(r, 100), r()
            }), N(window, "message", o, !1, r => {
                let {
                    data: a
                } = r;
                try {
                    return a = JSON.parse(a), a && (e && a.id === s && a.event === "onReady" || i && Number(a.player_id) === s)
                } catch {}
            }), t.src = "" + t.src + (p(t.src, "?") ? "&" : "?") + (e ? "enablejsapi=1" : "api=1&player_id=" + s)
        }).then(() => clearInterval(n))
    }

    function Xi(t, e, i) {
        return e === void 0 && (e = 0), i === void 0 && (i = 0), q(t) ? Ti(...Q(t).map(s => {
            const {
                top: n,
                left: o,
                bottom: r,
                right: a
            } = rt(s);
            return {
                top: n - e,
                left: o - i,
                bottom: r + e,
                right: a + i
            }
        }).concat(C(t))) : !1
    }

    function Hs(t, e) {
        let {
            offset: i = 0
        } = e === void 0 ? {} : e;
        const s = q(t) ? Q(t) : [];
        return s.reduce((a, l, c) => {
            const {
                scrollTop: u,
                scrollHeight: d,
                offsetHeight: f
            } = l, m = rt(l), I = d - m.height, {
                height: P,
                top: W
            } = s[c - 1] ? rt(s[c - 1]) : C(t);
            let V = Math.ceil(W - m.top - i + u);
            return i > 0 && f < P + i ? V += i : i = 0, V > I ? (i -= V - I, V = I) : V < 0 && (i -= V, V = 0), () => n(l, V - u).then(a)
        }, () => Promise.resolve())();

        function n(a, l) {
            return new Promise(c => {
                const u = a.scrollTop,
                    d = o(Math.abs(l)),
                    f = Date.now();
                (function m() {
                    const I = r(tt((Date.now() - f) / d));
                    a.scrollTop = u + l * I, I === 1 ? c() : requestAnimationFrame(m)
                })()
            })
        }

        function o(a) {
            return 40 * Math.pow(a, .375)
        }

        function r(a) {
            return .5 * (1 - Math.cos(Math.PI * a))
        }
    }

    function Gi(t, e, i) {
        if (e === void 0 && (e = 0), i === void 0 && (i = 0), !q(t)) return 0;
        const [s] = Q(t, /auto|scroll/, !0), {
            scrollHeight: n,
            scrollTop: o
        } = s, {
            height: r
        } = rt(s), a = n - r, l = Ht(t)[0] - Ht(s)[0], c = Math.max(0, l - r + e), u = Math.min(a, l + t.offsetHeight - i);
        return tt((o - c) / (u - c))
    }

    function Q(t, e, i) {
        e === void 0 && (e = /auto|scroll|hidden|clip/), i === void 0 && (i = !1);
        const s = Ls(t);
        let n = te(t).reverse();
        n = n.slice(n.indexOf(s) + 1);
        const o = bt(n, r => h(r, "position") === "fixed");
        return ~o && (n = n.slice(o)), [s].concat(n.filter(r => e.test(h(r, "overflow")) && (!i || r.scrollHeight > rt(r).height))).reverse()
    }

    function rt(t) {
        const e = Mt(t),
            {
                document: {
                    documentElement: i
                }
            } = e;
        let s = t === Ls(t) ? e : t;
        const {
            visualViewport: n
        } = e;
        if (Jt(s) && n) {
            let {
                height: r,
                width: a,
                scale: l,
                pageTop: c,
                pageLeft: u
            } = n;
            return r = Math.round(r * l), a = Math.round(a * l), {
                height: r,
                width: a,
                top: c,
                left: u,
                bottom: c + r,
                right: u + a
            }
        }
        let o = C(s);
        for (let [r, a, l, c] of [
                ["width", "x", "left", "right"],
                ["height", "y", "top", "bottom"]
            ]) Jt(s) ? s = i : o[l] += w(h(s, "border-" + l + "-width")), o[r] = o[a] = s["client" + St(r)], o[c] = o[r] + o[l];
        return o
    }

    function Ls(t) {
        return Mt(t).document.scrollingElement
    }
    const at = [
        ["width", "x", "left", "right"],
        ["height", "y", "top", "bottom"]
    ];

    function Ws(t, e, i) {
        i = {
            attach: {
                element: ["left", "top"],
                target: ["left", "top"],
                ...i.attach
            },
            offset: [0, 0],
            placement: [],
            ...i
        }, U(e) || (e = [e, e]), C(t, Rs(t, e, i))
    }

    function Rs(t, e, i) {
        const s = js(t, e, i),
            {
                boundary: n,
                viewportOffset: o = 0,
                placement: r
            } = i;
        let a = s;
        for (const [l, [c, , u, d]] of Object.entries(at)) {
            const f = Xo(e[l], o, n, l);
            if (Ue(s, f, l)) continue;
            let m = 0;
            if (r[l] === "flip") {
                const I = i.attach.target[l];
                if (I === d && s[d] <= f[d] || I === u && s[u] >= f[u]) continue;
                m = Jo(t, e, i, l)[u] - s[u];
                const P = Go(e[l], o, l);
                if (!Ue(Ji(s, m, l), P, l)) {
                    if (Ue(s, P, l)) continue;
                    if (i.recursion) return !1;
                    const W = Ko(t, e, i);
                    if (W && Ue(W, P, 1 - l)) return W;
                    continue
                }
            } else if (r[l] === "shift") {
                const I = C(e[l]),
                    {
                        offset: P
                    } = i;
                m = tt(tt(s[u], f[u], f[d] - s[c]), I[u] - s[c] + P[l], I[d] - P[l]) - s[u]
            }
            a = Ji(a, m, l)
        }
        return a
    }

    function js(t, e, i) {
        let {
            attach: s,
            offset: n
        } = {
            attach: {
                element: ["left", "top"],
                target: ["left", "top"],
                ...i.attach
            },
            offset: [0, 0],
            ...i
        }, o = C(t);
        for (const [r, [a, , l, c]] of Object.entries(at)) {
            const u = s.target[r] === s.element[r] ? rt(e[r]) : C(e[r]);
            o = Ji(o, u[l] - o[l] + qs(s.target[r], c, u[a]) - qs(s.element[r], c, o[a]) + +n[r], r)
        }
        return o
    }

    function Ji(t, e, i) {
        const [, s, n, o] = at[i], r = {
            ...t
        };
        return r[n] = t[s] = t[n] + e, r[o] += e, r
    }

    function qs(t, e, i) {
        return t === "center" ? i / 2 : t === e ? i : 0
    }

    function Xo(t, e, i, s) {
        let n = Ys(...Q(t).map(rt));
        return e && (n[at[s][2]] += e, n[at[s][3]] -= e), i && (n = Ys(n, C(U(i) ? i[s] : i))), n
    }

    function Go(t, e, i) {
        const [s, , n, o] = at[i], [r] = Q(t), a = rt(r);
        return a[n] -= r["scroll" + St(n)] - e, a[o] = a[n] + r["scroll" + St(s)] - e, a
    }

    function Ys() {
        let t = {};
        for (var e = arguments.length, i = new Array(e), s = 0; s < e; s++) i[s] = arguments[s];
        for (const n of i)
            for (const [, , o, r] of at) t[o] = Math.max(t[o] || 0, n[o]), t[r] = Math.min(...[t[r], n[r]].filter(Boolean));
        return t
    }

    function Ue(t, e, i) {
        const [, , s, n] = at[i];
        return t[s] >= e[s] && t[n] <= e[n]
    }

    function Jo(t, e, i, s) {
        let {
            offset: n,
            attach: o
        } = i;
        return js(t, e, {
            attach: {
                element: Vs(o.element, s),
                target: Vs(o.target, s)
            },
            offset: Zo(n, s)
        })
    }

    function Ko(t, e, i) {
        return Rs(t, e, {
            ...i,
            attach: {
                element: i.attach.element.map(Xs).reverse(),
                target: i.attach.target.map(Xs).reverse()
            },
            offset: i.offset.reverse(),
            placement: i.placement.reverse(),
            recursion: !0
        })
    }

    function Vs(t, e) {
        const i = [...t],
            s = at[e].indexOf(t[e]);
        return ~s && (i[e] = at[e][1 - s % 2 + 2]), i
    }

    function Xs(t) {
        for (let e = 0; e < at.length; e++) {
            const i = at[e].indexOf(t);
            if (~i) return at[1 - e][i % 2 + 2]
        }
    }

    function Zo(t, e) {
        return t = [...t], t[e] *= -1, t
    }
    var Qo = Object.freeze({
        __proto__: null,
        ajax: xs,
        getImage: ys,
        Transition: S,
        Animation: pt,
        attr: v,
        hasAttr: It,
        removeAttr: me,
        data: ot,
        addClass: x,
        removeClass: O,
        removeClasses: Di,
        replaceClass: Mi,
        hasClass: E,
        toggleClass: H,
        dimensions: y,
        offset: C,
        position: je,
        offsetPosition: Ht,
        height: J,
        width: ye,
        boxModelAdjust: se,
        flipPosition: qe,
        toPx: K,
        ready: zi,
        isTag: ct,
        empty: Ts,
        html: Pt,
        prepend: zo,
        append: L,
        before: Fi,
        after: Ye,
        remove: ut,
        wrapAll: Xe,
        wrapInner: Hi,
        unwrap: $e,
        fragment: Lt,
        apply: vt,
        $: b,
        $$: M,
        inBrowser: Wt,
        isRtl: X,
        hasTouch: Rt,
        pointerDown: gt,
        pointerMove: Ge,
        pointerUp: At,
        pointerEnter: jt,
        pointerLeave: oe,
        pointerCancel: Je,
        on: k,
        off: Nt,
        once: N,
        trigger: g,
        createEvent: zt,
        toEventTargets: Oi,
        isTouch: kt,
        getEventPos: ie,
        fastdom: G,
        isVoidElement: Ii,
        isVisible: q,
        selInput: ve,
        isInput: Pi,
        selFocusable: Le,
        isFocusable: We,
        parent: A,
        filter: Re,
        matches: F,
        closest: et,
        within: _,
        parents: te,
        children: D,
        index: ee,
        hasOwn: Bt,
        hyphenate: Xt,
        camelize: fe,
        ucfirst: St,
        startsWith: lt,
        endsWith: Gt,
        includes: p,
        findIndex: bt,
        isArray: U,
        toArray: xi,
        assign: xt,
        isFunction: mt,
        isObject: Tt,
        isPlainObject: yt,
        isWindow: Jt,
        isDocument: De,
        isNode: yi,
        isElement: Kt,
        isBoolean: Me,
        isString: B,
        isNumber: Zt,
        isNumeric: Dt,
        isEmpty: pe,
        isUndefined: R,
        toBoolean: ki,
        toNumber: Ct,
        toFloat: w,
        toNode: j,
        toNodes: $,
        toWindow: Mt,
        isEqual: ge,
        swap: Si,
        last: Qt,
        each: $t,
        sortBy: Ne,
        uniqueBy: ps,
        clamp: tt,
        noop: T,
        intersectRect: Ti,
        pointInRect: ze,
        Dimensions: Fe,
        getIndex: Ut,
        memoize: ft,
        Deferred: He,
        MouseTracker: Ri,
        observeIntersection: re,
        observeResize: Ke,
        observeMutation: ji,
        mergeOptions: ae,
        parseOptions: Se,
        play: Os,
        pause: Bs,
        mute: Ds,
        isVideo: Ms,
        positionAt: Ws,
        query: ht,
        queryAll: we,
        find: Ai,
        findAll: be,
        escape: Ei,
        css: h,
        propName: Bi,
        isInView: Xi,
        scrollIntoView: Hs,
        scrolledOver: Gi,
        scrollParents: Q,
        offsetViewport: rt
    });

    function Uo(t) {
        const e = t.data;
        t.use = function (n) {
            if (!n.installed) return n.call(null, this), n.installed = !0, this
        }, t.mixin = function (n, o) {
            o = (B(o) ? t.component(o) : o) || this, o.options = ae(o.options, n)
        }, t.extend = function (n) {
            n = n || {};
            const o = this,
                r = function (l) {
                    this._init(l)
                };
            return r.prototype = Object.create(o.prototype), r.prototype.constructor = r, r.options = ae(o.options, n), r.super = o, r.extend = o.extend, r
        }, t.update = function (n, o) {
            n = n ? j(n) : document.body;
            for (const r of te(n).reverse()) s(r[e], o);
            vt(n, r => s(r[e], o))
        };
        let i;
        Object.defineProperty(t, "container", {
            get() {
                return i || document.body
            },
            set(n) {
                i = b(n)
            }
        });

        function s(n, o) {
            if (!!n)
                for (const r in n) n[r]._connected && n[r]._callUpdate(o)
        }
    }

    function tr(t) {
        t.prototype._callHook = function (s) {
            var n;
            (n = this.$options[s]) == null || n.forEach(o => o.call(this))
        }, t.prototype._callConnected = function () {
            this._connected || (this._data = {}, this._computed = {}, this._initProps(), this._callHook("beforeConnect"), this._connected = !0, this._initEvents(), this._initObservers(), this._callHook("connected"), this._callUpdate())
        }, t.prototype._callDisconnected = function () {
            !this._connected || (this._callHook("beforeDisconnect"), this._disconnectObservers(), this._unbindEvents(), this._callHook("disconnected"), this._connected = !1, delete this._watch)
        }, t.prototype._callUpdate = function (s) {
            s === void 0 && (s = "update"), this._connected && ((s === "update" || s === "resize") && this._callWatches(), this.$options.update && (this._updates || (this._updates = new Set, G.read(() => {
                this._connected && e.call(this, this._updates), delete this._updates
            })), this._updates.add(s.type || s)))
        }, t.prototype._callWatches = function () {
            if (this._watch) return;
            const s = !Bt(this, "_watch");
            this._watch = G.read(() => {
                this._connected && i.call(this, s), this._watch = null
            })
        };

        function e(s) {
            for (const {
                    read: n,
                    write: o,
                    events: r = []
                } of this.$options.update) {
                if (!s.has("update") && !r.some(l => s.has(l))) continue;
                let a;
                n && (a = n.call(this, this._data, s), a && yt(a) && xt(this._data, a)), o && a !== !1 && G.write(() => {
                    this._connected && o.call(this, this._data, s)
                })
            }
        }

        function i(s) {
            const {
                $options: {
                    computed: n
                }
            } = this, o = {
                ...this._computed
            };
            this._computed = {};
            for (const r in n) {
                const {
                    watch: a,
                    immediate: l
                } = n[r];
                a && (s && l || Bt(o, r) && !ge(o[r], this[r])) && a.call(this, this[r], o[r])
            }
        }
    }

    function er(t) {
        let e = 0;
        t.prototype._init = function (i) {
            i = i || {}, i.data = or(i, this.constructor.options), this.$options = ae(this.constructor.options, i, this), this.$el = null, this.$props = {}, this._uid = e++, this._initData(), this._initMethods(), this._initComputeds(), this._callHook("created"), i.el && this.$mount(i.el)
        }, t.prototype._initData = function () {
            const {
                data: i = {}
            } = this.$options;
            for (const s in i) this.$props[s] = this[s] = i[s]
        }, t.prototype._initMethods = function () {
            const {
                methods: i
            } = this.$options;
            if (i)
                for (const s in i) this[s] = i[s].bind(this)
        }, t.prototype._initComputeds = function () {
            const {
                computed: i
            } = this.$options;
            if (this._computed = {}, i)
                for (const s in i) ir(this, s, i[s])
        }, t.prototype._initProps = function (i) {
            let s;
            i = i || Gs(this.$options);
            for (s in i) R(i[s]) || (this.$props[s] = i[s]);
            const n = [this.$options.computed, this.$options.methods];
            for (s in this.$props) s in i && sr(n, s) && (this[s] = this.$props[s])
        }, t.prototype._initEvents = function () {
            this._events = [];
            for (const i of this.$options.events || [])
                if (Bt(i, "handler")) ti(this, i);
                else
                    for (const s in i) ti(this, i[s], s)
        }, t.prototype._unbindEvents = function () {
            this._events.forEach(i => i()), delete this._events
        }, t.prototype._initObservers = function () {
            this._observers = [ar(this)], this.$options.computed && this.registerObserver(rr(this))
        }, t.prototype.registerObserver = function () {
            this._observers.push(...arguments)
        }, t.prototype._disconnectObservers = function () {
            this._observers.forEach(i => i == null ? void 0 : i.disconnect())
        }
    }

    function Gs(t) {
        const e = {},
            {
                args: i = [],
                props: s = {},
                el: n,
                id: o
            } = t;
        if (!s) return e;
        for (const a in s) {
            const l = Xt(a);
            let c = ot(n, l);
            R(c) || (c = s[a] === Boolean && c === "" ? !0 : Ki(s[a], c), !(l === "target" && lt(c, "_")) && (e[a] = c))
        }
        const r = Se(ot(n, o), i);
        for (const a in r) {
            const l = fe(a);
            R(s[l]) || (e[l] = Ki(s[l], r[a]))
        }
        return e
    }

    function ir(t, e, i) {
        Object.defineProperty(t, e, {
            enumerable: !0,
            get() {
                const {
                    _computed: s,
                    $props: n,
                    $el: o
                } = t;
                return Bt(s, e) || (s[e] = (i.get || i).call(t, n, o)), s[e]
            },
            set(s) {
                const {
                    _computed: n
                } = t;
                n[e] = i.set ? i.set.call(t, s) : s, R(n[e]) && delete n[e]
            }
        })
    }

    function ti(t, e, i) {
        yt(e) || (e = {
            name: i,
            handler: e
        });
        let {
            name: s,
            el: n,
            handler: o,
            capture: r,
            passive: a,
            delegate: l,
            filter: c,
            self: u
        } = e;
        if (n = mt(n) ? n.call(t) : n || t.$el, U(n)) {
            n.forEach(d => ti(t, {
                ...e,
                el: d
            }, i));
            return
        }!n || c && !c.call(t) || t._events.push(k(n, s, l ? B(l) ? l : l.call(t) : null, B(o) ? t[o] : o.bind(t), {
            passive: a,
            capture: r,
            self: u
        }))
    }

    function sr(t, e) {
        return t.every(i => !i || !Bt(i, e))
    }

    function Ki(t, e) {
        return t === Boolean ? ki(e) : t === Number ? Ct(e) : t === "list" ? nr(e) : t ? t(e) : e
    }

    function nr(t) {
        return U(t) ? t : B(t) ? t.split(/,(?![^(]*\))/).map(e => Dt(e) ? Ct(e) : ki(e.trim())) : [t]
    }

    function or(t, e) {
        let {
            data: i = {}
        } = t, {
            args: s = [],
            props: n = {}
        } = e;
        U(i) && (i = i.slice(0, s.length).reduce((o, r, a) => (yt(r) ? xt(o, r) : o[s[a]] = r, o), {}));
        for (const o in i) R(i[o]) ? delete i[o] : n[o] && (i[o] = Ki(n[o], i[o]));
        return i
    }

    function rr(t) {
        const {
            el: e
        } = t.$options, i = new MutationObserver(() => t._callWatches());
        return i.observe(e, {
            childList: !0,
            subtree: !0
        }), i
    }

    function ar(t) {
        const {
            $options: e,
            $props: i
        } = t, {
            id: s,
            attrs: n,
            props: o,
            el: r
        } = e;
        if (!o || n === !1) return;
        const a = U(n) ? n : Object.keys(o),
            l = a.map(u => Xt(u)).concat(s),
            c = new MutationObserver(u => {
                const d = Gs(e);
                u.some(f => {
                    let {
                        attributeName: m
                    } = f;
                    const I = m.replace("data-", "");
                    return (I === s ? a : [fe(I), fe(m)]).some(P => !R(d[P]) && d[P] !== i[P])
                }) && t.$reset()
            });
        return c.observe(r, {
            attributes: !0,
            attributeFilter: l.concat(l.map(u => "data-" + u))
        }), c
    }

    function lr(t) {
        const e = t.data;
        t.prototype.$create = function (i, s, n) {
            return t[i](s, n)
        }, t.prototype.$mount = function (i) {
            const {
                name: s
            } = this.$options;
            i[e] || (i[e] = {}), !i[e][s] && (i[e][s] = this, this.$el = this.$options.el = this.$options.el || i, _(i, document) && this._callConnected())
        }, t.prototype.$reset = function () {
            this._callDisconnected(), this._callConnected()
        }, t.prototype.$destroy = function (i) {
            i === void 0 && (i = !1);
            const {
                el: s,
                name: n
            } = this.$options;
            s && this._callDisconnected(), this._callHook("destroy"), s != null && s[e] && (delete s[e][n], pe(s[e]) || delete s[e], i && ut(this.$el))
        }, t.prototype.$emit = function (i) {
            this._callUpdate(i)
        }, t.prototype.$update = function (i, s) {
            i === void 0 && (i = this.$el), t.update(i, s)
        }, t.prototype.$getComponent = t.getComponent, Object.defineProperty(t.prototype, "$container", Object.getOwnPropertyDescriptor(t, "container"))
    }
    const Et = {};

    function hr(t) {
        const {
            data: e,
            prefix: i
        } = t;
        t.component = function (s, n) {
            s = Xt(s);
            const o = i + s;
            if (!n) return yt(Et[o]) && (Et[o] = Et["data-" + o] = t.extend(Et[o])), Et[o];
            s = fe(s), t[s] = function (a, l) {
                const c = t.component(s);
                return c.options.functional ? new c({
                    data: yt(a) ? a : [...arguments]
                }) : a ? M(a).map(u)[0] : u();

                function u(d) {
                    const f = t.getComponent(d, s);
                    if (f)
                        if (l) f.$destroy();
                        else return f;
                    return new c({
                        el: d,
                        data: l
                    })
                }
            };
            const r = yt(n) ? {
                ...n
            } : n.options;
            return r.id = o, r.name = s, r.install == null || r.install(t, r, s), t._initialized && !r.functional && requestAnimationFrame(() => t[s]("[" + o + "],[data-" + o + "]")), Et[o] = Et["data-" + o] = yt(n) ? r : n
        }, t.getComponents = s => (s == null ? void 0 : s[e]) || {}, t.getComponent = (s, n) => t.getComponents(s)[n], t.connect = s => {
            if (s[e])
                for (const n in s[e]) s[e][n]._callConnected();
            for (const n of s.getAttributeNames()) {
                const o = Js(n);
                o && t[o](s)
            }
        }, t.disconnect = s => {
            for (const n in s[e]) s[e][n]._callDisconnected()
        }
    }

    function Js(t) {
        const e = Et[t];
        return e && (yt(e) ? e : e.options).name
    }
    const it = function (t) {
        this._init(t)
    };
    it.util = Qo, it.data = "__uikit__", it.prefix = "bdt-", it.options = {}, it.version = "3.15.10", Uo(it), tr(it), er(it), hr(it), lr(it);

    function cr(t) {
        const {
            connect: e,
            disconnect: i
        } = t;
        if (!Wt || !window.MutationObserver) return;
        requestAnimationFrame(function () {
            document.body && vt(document.body, e), new MutationObserver(o => o.forEach(s)).observe(document, {
                childList: !0,
                subtree: !0
            }), new MutationObserver(o => o.forEach(n)).observe(document, {
                attributes: !0,
                subtree: !0
            }), t._initialized = !0
        });

        function s(o) {
            let {
                addedNodes: r,
                removedNodes: a
            } = o;
            for (const l of r) vt(l, e);
            for (const l of a) vt(l, i)
        }

        function n(o) {
            let {
                target: r,
                attributeName: a
            } = o;
            const l = Js(a);
            if (l) {
                var c;
                if (It(r, a)) {
                    t[l](r);
                    return
                }(c = t.getComponent(r, l)) == null || c.$destroy()
            }
        }
    }
    var st = {
            connected() {
                x(this.$el, this.$options.id)
            }
        },
        Te = {
            data: {
                preload: 5
            },
            methods: {
                lazyload(t, e) {
                    t === void 0 && (t = this.$el), e === void 0 && (e = this.$el), this.registerObserver(re(t, (i, s) => {
                        for (const n of $(mt(e) ? e() : e)) M('[loading="lazy"]', n).slice(0, this.preload - 1).forEach(o => me(o, "loading"));
                        for (const n of i.filter(o => {
                                let {
                                    isIntersecting: r
                                } = o;
                                return r
                            }).map(o => {
                                let {
                                    target: r
                                } = o;
                                return r
                            })) s.unobserve(n)
                    }))
                }
            }
        },
        _t = {
            props: {
                cls: Boolean,
                animation: "list",
                duration: Number,
                velocity: Number,
                origin: String,
                transition: String
            },
            data: {
                cls: !1,
                animation: [!1],
                duration: 200,
                velocity: .2,
                origin: !1,
                transition: "ease",
                clsEnter: "bdt-togglabe-enter",
                clsLeave: "bdt-togglabe-leave"
            },
            computed: {
                hasAnimation(t) {
                    let {
                        animation: e
                    } = t;
                    return !!e[0]
                },
                hasTransition(t) {
                    let {
                        animation: e
                    } = t;
                    return ["slide", "reveal"].some(i => lt(e[0], i))
                }
            },
            methods: {
                toggleElement(t, e, i) {
                    return new Promise(s => Promise.all($(t).map(n => {
                        const o = Me(e) ? e : !this.isToggled(n);
                        if (!g(n, "before" + (o ? "show" : "hide"), [this])) return Promise.reject();
                        const r = (mt(i) ? i : i === !1 || !this.hasAnimation ? ur : this.hasTransition ? dr : fr)(n, o, this),
                            a = o ? this.clsEnter : this.clsLeave;
                        x(n, a), g(n, o ? "show" : "hide", [this]);
                        const l = () => {
                            O(n, a), g(n, o ? "shown" : "hidden", [this])
                        };
                        return r ? r.then(l, () => (O(n, a), Promise.reject())) : l()
                    })).then(s, T))
                },
                isToggled(t) {
                    return t === void 0 && (t = this.$el), [t] = $(t), E(t, this.clsEnter) ? !0 : E(t, this.clsLeave) ? !1 : this.cls ? E(t, this.cls.split(" ")[0]) : q(t)
                },
                _toggle(t, e) {
                    if (!t) return;
                    e = Boolean(e);
                    let i;
                    this.cls ? (i = p(this.cls, " ") || e !== E(t, this.cls), i && H(t, this.cls, p(this.cls, " ") ? void 0 : e)) : (i = e === t.hidden, i && (t.hidden = !e)), M("[autofocus]", t).some(s => q(s) ? s.focus() || !0 : s.blur()), i && g(t, "toggled", [e, this])
                }
            }
        };

    function ur(t, e, i) {
        let {
            _toggle: s
        } = i;
        return pt.cancel(t), S.cancel(t), s(t, e)
    }
    async function dr(t, e, i) {
        var s;
        let {
            animation: n,
            duration: o,
            velocity: r,
            transition: a,
            _toggle: l
        } = i;
        const [c = "reveal", u = "top"] = ((s = n[0]) == null ? void 0 : s.split("-")) || [], d = [
            ["left", "right"],
            ["top", "bottom"]
        ], f = d[p(d[0], u) ? 0 : 1], m = f[1] === u, P = ["width", "height"][d.indexOf(f)], W = "margin-" + f[0], V = "margin-" + u;
        let Ot = y(t)[P];
        const us = S.inProgress(t);
        await S.cancel(t), e && l(t, !0);
        const Fl = Object.fromEntries(["padding", "border", "width", "height", "minWidth", "minHeight", "overflowY", "overflowX", W, V].map(uo => [uo, t.style[uo]])),
            Be = y(t),
            ds = w(h(t, W)),
            lo = w(h(t, V)),
            Vt = Be[P] + lo;
        !us && !e && (Ot += lo);
        const [bi] = Hi(t, "<div>");
        h(bi, {
            boxSizing: "border-box",
            height: Be.height,
            width: Be.width,
            ...h(t, ["overflow", "padding", "borderTop", "borderRight", "borderBottom", "borderLeft", "borderImage", V])
        }), h(t, {
            padding: 0,
            border: 0,
            minWidth: 0,
            minHeight: 0,
            [V]: 0,
            width: Be.width,
            height: Be.height,
            overflow: "hidden",
            [P]: Ot
        });
        const ho = Ot / Vt;
        o = (r * Vt + o) * (e ? 1 - ho : ho);
        const co = {
            [P]: e ? Vt : 0
        };
        m && (h(t, W, Vt - Ot + ds), co[W] = e ? ds : Vt + ds), !m ^ c === "reveal" && (h(bi, W, -Vt + Ot), S.start(bi, {
            [W]: e ? 0 : -Vt
        }, o, a));
        try {
            await S.start(t, co, o, a)
        } finally {
            h(t, Fl), $e(bi.firstChild), e || l(t, !1)
        }
    }

    function fr(t, e, i) {
        pt.cancel(t);
        const {
            animation: s,
            duration: n,
            _toggle: o
        } = i;
        return e ? (o(t, !0), pt.in(t, s[0], n, i.origin)) : pt.out(t, s[1] || s[0], n, i.origin).then(() => o(t, !1))
    }
    var Ks = {
        mixins: [st, Te, _t],
        props: {
            animation: Boolean,
            targets: String,
            active: null,
            collapsible: Boolean,
            multiple: Boolean,
            toggle: String,
            content: String,
            offset: Number
        },
        data: {
            targets: "> *",
            active: !1,
            animation: !0,
            collapsible: !0,
            multiple: !1,
            clsOpen: "bdt-open",
            toggle: "> .bdt-accordion-title",
            content: "> .bdt-accordion-content",
            offset: 0
        },
        computed: {
            items: {
                get(t, e) {
                    let {
                        targets: i
                    } = t;
                    return M(i, e)
                },
                watch(t, e) {
                    if (e || E(t, this.clsOpen)) return;
                    const i = this.active !== !1 && t[Number(this.active)] || !this.collapsible && t[0];
                    i && this.toggle(i, !1)
                },
                immediate: !0
            },
            toggles(t) {
                let {
                    toggle: e
                } = t;
                return this.items.map(i => b(e, i))
            },
            contents: {
                get(t) {
                    let {
                        content: e
                    } = t;
                    return this.items.map(i => b(e, i))
                },
                watch(t) {
                    for (const e of t) ei(e, !E(this.items.find(i => _(e, i)), this.clsOpen))
                },
                immediate: !0
            }
        },
        connected() {
            this.lazyload()
        },
        events: [{
            name: "click",
            delegate() {
                return this.targets + " " + this.$props.toggle
            },
            async handler(t) {
                var e;
                t.preventDefault(), (e = this._off) == null || e.call(this), this._off = gr(t.target), await this.toggle(ee(this.toggles, t.current)), this._off()
            }
        }],
        methods: {
            async toggle(t, e) {
                t = this.items[Ut(t, this.items)];
                let i = [t];
                const s = Re(this.items, "." + this.clsOpen);
                !this.multiple && !p(s, i[0]) && (i = i.concat(s)), !(!this.collapsible && s.length < 2 && p(s, t)) && await Promise.all(i.map(n => this.toggleElement(n, !p(s, n), (o, r) => {
                    if (H(o, this.clsOpen, r), v(b(this.$props.toggle, o), "aria-expanded", r), e === !1 || !this.animation) {
                        ei(b(this.content, o), !r);
                        return
                    }
                    return pr(o, r, this)
                })))
            }
        }
    };

    function ei(t, e) {
        t && (t.hidden = e)
    }
    async function pr(t, e, i) {
        var s;
        let {
            content: n,
            duration: o,
            velocity: r,
            transition: a
        } = i;
        n = ((s = t._wrapper) == null ? void 0 : s.firstElementChild) || b(n, t), t._wrapper || (t._wrapper = Xe(n, "<div>"));
        const l = t._wrapper;
        h(l, "overflow", "hidden");
        const c = w(h(l, "height"));
        await S.cancel(l), ei(n, !1);
        const u = w(h(n, "height")) + w(h(n, "marginTop")) + w(h(n, "marginBottom")),
            d = c / u;
        o = (r * u + o) * (e ? 1 - d : d), h(l, "height", c), await S.start(l, {
            height: e ? u : 0
        }, o, a), $e(n), delete t._wrapper, e || ei(n, !0)
    }

    function gr(t) {
        const e = Q(t)[0];
        let i;
        return function s() {
            i = requestAnimationFrame(() => {
                const {
                    top: n
                } = t.getBoundingClientRect();
                n < 0 && (e.scrollTop += n), s()
            })
        }(), () => requestAnimationFrame(() => cancelAnimationFrame(i))
    }
    var mr = {
        mixins: [st, _t],
        args: "animation",
        props: {
            animation: Boolean,
            close: String
        },
        data: {
            animation: !0,
            selClose: ".bdt-alert-close",
            duration: 150
        },
        events: {
            name: "click",
            delegate() {
                return this.selClose
            },
            handler(t) {
                t.preventDefault(), this.close()
            }
        },
        methods: {
            async close() {
                await this.toggleElement(this.$el, !1, vr), this.$destroy(!0)
            }
        }
    };

    function vr(t, e, i) {
        let {
            duration: s,
            transition: n,
            velocity: o
        } = i;
        const r = w(h(t, "height"));
        return h(t, "height", r), S.start(t, {
            height: 0,
            marginTop: 0,
            marginBottom: 0,
            paddingTop: 0,
            paddingBottom: 0,
            borderTop: 0,
            borderBottom: 0,
            opacity: 0
        }, o * r + s, n)
    }
    var Zs = {
            args: "autoplay",
            props: {
                automute: Boolean,
                autoplay: Boolean
            },
            data: {
                automute: !1,
                autoplay: !0
            },
            connected() {
                this.inView = this.autoplay === "inview", this.inView && !It(this.$el, "preload") && (this.$el.preload = "none"), ct(this.$el, "iframe") && !It(this.$el, "allow") && (this.$el.allow = "autoplay"), this.automute && Ds(this.$el), this.registerObserver(re(this.$el, () => this.$emit(), {}, !1))
            },
            update: {
                read() {
                    return Ms(this.$el) ? {
                        visible: q(this.$el) && h(this.$el, "visibility") !== "hidden",
                        inView: this.inView && Xi(this.$el)
                    } : !1
                },
                write(t) {
                    let {
                        visible: e,
                        inView: i
                    } = t;
                    !e || this.inView && !i ? Bs(this.$el) : (this.autoplay === !0 || this.inView && i) && Os(this.$el)
                }
            }
        },
        wt = {
            connected() {
                var t;
                this.registerObserver(Ke(((t = this.$options.resizeTargets) == null ? void 0 : t.call(this)) || this.$el, () => this.$emit("resize")))
            }
        },
        wr = {
            mixins: [wt, Zs],
            props: {
                width: Number,
                height: Number
            },
            data: {
                automute: !0
            },
            events: {
                "load loadedmetadata"() {
                    this.$emit("resize")
                }
            },
            resizeTargets() {
                return [this.$el, Qs(this.$el) || A(this.$el)]
            },
            update: {
                read() {
                    const {
                        ratio: t,
                        cover: e
                    } = Fe, {
                        $el: i,
                        width: s,
                        height: n
                    } = this;
                    let o = {
                        width: s,
                        height: n
                    };
                    if (!o.width || !o.height) {
                        const c = {
                            width: i.naturalWidth || i.videoWidth || i.clientWidth,
                            height: i.naturalHeight || i.videoHeight || i.clientHeight
                        };
                        o.width ? o = t(c, "width", o.width) : n ? o = t(c, "height", o.height) : o = c
                    }
                    const {
                        offsetHeight: r,
                        offsetWidth: a
                    } = Qs(i) || A(i), l = e(o, {
                        width: a + (a % 2 ? 1 : 0),
                        height: r + (r % 2 ? 1 : 0)
                    });
                    return !l.width || !l.height ? !1 : l
                },
                write(t) {
                    let {
                        height: e,
                        width: i
                    } = t;
                    h(this.$el, {
                        height: e,
                        width: i
                    })
                },
                events: ["resize"]
            }
        };

    function Qs(t) {
        for (; t = A(t);)
            if (h(t, "position") !== "static") return t
    }
    var le = {
            props: {
                container: Boolean
            },
            data: {
                container: !0
            },
            computed: {
                container(t) {
                    let {
                        container: e
                    } = t;
                    return e === !0 && this.$container || e && b(e)
                }
            }
        },
        Us = {
            props: {
                pos: String,
                offset: null,
                flip: Boolean,
                shift: Boolean,
                inset: Boolean
            },
            data: {
                pos: "bottom-" + (X ? "right" : "left"),
                offset: !1,
                flip: !0,
                shift: !0,
                inset: !1
            },
            connected() {
                this.pos = this.$props.pos.split("-").concat("center").slice(0, 2), [this.dir, this.align] = this.pos, this.axis = p(["top", "bottom"], this.dir) ? "y" : "x"
            },
            methods: {
                positionAt(t, e, i) {
                    let s = [this.getPositionOffset(t), this.getShiftOffset(t)];
                    const n = [this.flip && "flip", this.shift && "shift"],
                        o = {
                            element: [this.inset ? this.dir : qe(this.dir), this.align],
                            target: [this.dir, this.align]
                        };
                    if (this.axis === "y") {
                        for (const u in o) o[u].reverse();
                        s.reverse(), n.reverse()
                    }
                    const [r] = Q(t, /auto|scroll/), {
                        scrollTop: a,
                        scrollLeft: l
                    } = r, c = y(t);
                    h(t, {
                        top: -c.height,
                        left: -c.width
                    }), Ws(t, e, {
                        attach: o,
                        offset: s,
                        boundary: i,
                        placement: n,
                        viewportOffset: this.getViewportOffset(t)
                    }), r.scrollTop = a, r.scrollLeft = l
                },
                getPositionOffset(t) {
                    return K(this.offset === !1 ? h(t, "--bdt-position-offset") : this.offset, this.axis === "x" ? "width" : "height", t) * (p(["left", "top"], this.dir) ? -1 : 1) * (this.inset ? -1 : 1)
                },
                getShiftOffset(t) {
                    return this.align === "center" ? 0 : K(h(t, "--bdt-position-shift-offset"), this.axis === "y" ? "width" : "height", t) * (p(["left", "top"], this.align) ? 1 : -1)
                },
                getViewportOffset(t) {
                    return K(h(t, "--bdt-position-viewport-offset"))
                }
            }
        },
        br = {
            beforeConnect() {
                this._style = v(this.$el, "style")
            },
            disconnected() {
                v(this.$el, "style", this._style)
            }
        };
    const nt = [];
    var Zi = {
        mixins: [st, le, _t],
        props: {
            selPanel: String,
            selClose: String,
            escClose: Boolean,
            bgClose: Boolean,
            stack: Boolean
        },
        data: {
            cls: "bdt-open",
            escClose: !0,
            bgClose: !0,
            overlay: !0,
            stack: !1
        },
        computed: {
            panel(t, e) {
                let {
                    selPanel: i
                } = t;
                return b(i, e)
            },
            transitionElement() {
                return this.panel
            },
            bgClose(t) {
                let {
                    bgClose: e
                } = t;
                return e && this.panel
            }
        },
        beforeDisconnect() {
            p(nt, this) && this.toggleElement(this.$el, !1, !1)
        },
        events: [{
            name: "click",
            delegate() {
                return this.selClose
            },
            handler(t) {
                t.preventDefault(), this.hide()
            }
        }, {
            name: "click",
            delegate() {
                return 'a[href*="#"]'
            },
            handler(t) {
                let {
                    current: e,
                    defaultPrevented: i
                } = t;
                const {
                    hash: s
                } = e;
                !i && s && Ui(e) && !_(s, this.$el) && b(s, document.body) && this.hide()
            }
        }, {
            name: "toggle",
            self: !0,
            handler(t) {
                t.defaultPrevented || (t.preventDefault(), this.isToggled() === p(nt, this) && this.toggle())
            }
        }, {
            name: "beforeshow",
            self: !0,
            handler(t) {
                if (p(nt, this)) return !1;
                !this.stack && nt.length ? (Promise.all(nt.map(e => e.hide())).then(this.show), t.preventDefault()) : nt.push(this)
            }
        }, {
            name: "show",
            self: !0,
            handler() {
                N(this.$el, "hide", k(document, "focusin", t => {
                    Qt(nt) === this && !_(t.target, this.$el) && this.$el.focus()
                })), this.overlay && (N(this.$el, "hidden", en(this.$el), {
                    self: !0
                }), N(this.$el, "hidden", sn(), {
                    self: !0
                })), this.stack && h(this.$el, "zIndex", w(h(this.$el, "zIndex")) + nt.length), x(document.documentElement, this.clsPage), this.bgClose && N(this.$el, "hide", k(document, gt, t => {
                    let {
                        target: e
                    } = t;
                    Qt(nt) !== this || this.overlay && !_(e, this.$el) || _(e, this.panel) || N(document, At + " " + Je + " scroll", i => {
                        let {
                            defaultPrevented: s,
                            type: n,
                            target: o
                        } = i;
                        !s && n === At && e === o && this.hide()
                    }, !0)
                }), {
                    self: !0
                }), this.escClose && N(this.$el, "hide", k(document, "keydown", t => {
                    t.keyCode === 27 && Qt(nt) === this && this.hide()
                }), {
                    self: !0
                })
            }
        }, {
            name: "shown",
            self: !0,
            handler() {
                We(this.$el) || v(this.$el, "tabindex", "-1"), b(":focus", this.$el) || this.$el.focus()
            }
        }, {
            name: "hidden",
            self: !0,
            handler() {
                p(nt, this) && nt.splice(nt.indexOf(this), 1), h(this.$el, "zIndex", ""), nt.some(t => t.clsPage === this.clsPage) || O(document.documentElement, this.clsPage)
            }
        }],
        methods: {
            toggle() {
                return this.isToggled() ? this.hide() : this.show()
            },
            show() {
                return this.container && A(this.$el) !== this.container ? (L(this.container, this.$el), new Promise(t => requestAnimationFrame(() => this.show().then(t)))) : this.toggleElement(this.$el, !0, tn)
            },
            hide() {
                return this.toggleElement(this.$el, !1, tn)
            }
        }
    };

    function tn(t, e, i) {
        let {
            transitionElement: s,
            _toggle: n
        } = i;
        return new Promise((o, r) => N(t, "show hide", () => {
            t._reject == null || t._reject(), t._reject = r, n(t, e);
            const a = N(s, "transitionstart", () => {
                    N(s, "transitionend transitioncancel", o, {
                        self: !0
                    }), clearTimeout(l)
                }, {
                    self: !0
                }),
                l = setTimeout(() => {
                    a(), o()
                }, xr(h(s, "transitionDuration")))
        })).then(() => delete t._reject)
    }

    function xr(t) {
        return t ? Gt(t, "ms") ? w(t) : w(t) * 1e3 : 0
    }

    function en(t) {
        if (CSS.supports("overscroll-behavior", "contain")) {
            const s = yr(t, n => /auto|scroll/.test(h(n, "overflow")));
            return h(s, "overscrollBehavior", "contain"), () => h(s, "overscrollBehavior", "")
        }
        let e;
        const i = [k(t, "touchstart", s => {
            let {
                targetTouches: n
            } = s;
            n.length === 1 && (e = n[0].clientY)
        }, {
            passive: !0
        }), k(t, "touchmove", s => {
            if (s.targetTouches.length !== 1) return;
            let [n] = Q(s.target, /auto|scroll/);
            _(n, t) || (n = t);
            const o = s.targetTouches[0].clientY - e,
                {
                    scrollTop: r,
                    scrollHeight: a,
                    clientHeight: l
                } = n;
            (l >= a || r === 0 && o > 0 || a - r <= l && o < 0) && s.cancelable && s.preventDefault()
        }, {
            passive: !1
        })];
        return () => i.forEach(s => s())
    }
    let Qi;

    function sn() {
        if (Qi) return T;
        Qi = !0;
        const {
            scrollingElement: t
        } = document;
        return h(t, {
            overflowY: "hidden",
            touchAction: "none",
            paddingRight: ye(window) - t.clientWidth
        }), () => {
            Qi = !1, h(t, {
                overflowY: "",
                touchAction: "",
                paddingRight: ""
            })
        }
    }

    function yr(t, e) {
        const i = [];
        return vt(t, s => {
            e(s) && i.push(s)
        }), i
    }

    function Ui(t) {
        return ["origin", "pathname", "search"].every(e => t[e] === location[e])
    }
    let Y;
    var nn = {
        mixins: [le, Te, Us, br, _t],
        args: "pos",
        props: {
            mode: "list",
            toggle: Boolean,
            boundary: Boolean,
            boundaryX: Boolean,
            boundaryY: Boolean,
            target: Boolean,
            targetX: Boolean,
            targetY: Boolean,
            stretch: Boolean,
            delayShow: Number,
            delayHide: Number,
            autoUpdate: Boolean,
            clsDrop: String,
            animateOut: Boolean,
            bgScroll: Boolean
        },
        data: {
            mode: ["click", "hover"],
            toggle: "- *",
            boundary: !1,
            boundaryX: !1,
            boundaryY: !1,
            target: !1,
            targetX: !1,
            targetY: !1,
            stretch: !1,
            delayShow: 0,
            delayHide: 800,
            autoUpdate: !0,
            clsDrop: !1,
            animateOut: !1,
            bgScroll: !0,
            animation: ["bdt-animation-fade"],
            cls: "bdt-open",
            container: !1
        },
        computed: {
            boundary(t, e) {
                let {
                    boundary: i,
                    boundaryX: s,
                    boundaryY: n
                } = t;
                return [ht(s || i, e) || window, ht(n || i, e) || window]
            },
            target(t, e) {
                let {
                    target: i,
                    targetX: s,
                    targetY: n
                } = t;
                return s = s || i || this.targetEl, n = n || i || this.targetEl, [s === !0 ? window : ht(s, e), n === !0 ? window : ht(n, e)]
            }
        },
        created() {
            this.tracker = new Ri
        },
        beforeConnect() {
            this.clsDrop = this.$props.clsDrop || "bdt-" + this.$options.name
        },
        connected() {
            x(this.$el, this.clsDrop), this.toggle && !this.targetEl && (this.targetEl = this.$create("toggle", ht(this.toggle, this.$el), {
                target: this.$el,
                mode: this.mode
            }).$el, v(this.targetEl, "aria-haspopup", !0), this.lazyload(this.targetEl))
        },
        disconnected() {
            this.isActive() && (this.hide(!1), Y = null)
        },
        events: [{
            name: "click",
            delegate() {
                return "." + this.clsDrop + "-close"
            },
            handler(t) {
                t.preventDefault(), this.hide(!1)
            }
        }, {
            name: "click",
            delegate() {
                return 'a[href*="#"]'
            },
            handler(t) {
                let {
                    defaultPrevented: e,
                    current: i
                } = t;
                const {
                    hash: s
                } = i;
                !e && s && Ui(i) && !_(s, this.$el) && this.hide(!1)
            }
        }, {
            name: "beforescroll",
            handler() {
                this.hide(!1)
            }
        }, {
            name: "toggle",
            self: !0,
            handler(t, e) {
                t.preventDefault(), this.isToggled() ? this.hide(!1) : this.show(e == null ? void 0 : e.$el, !1)
            }
        }, {
            name: "toggleshow",
            self: !0,
            handler(t, e) {
                t.preventDefault(), this.show(e == null ? void 0 : e.$el)
            }
        }, {
            name: "togglehide",
            self: !0,
            handler(t) {
                t.preventDefault(), F(this.$el, ":focus,:hover") || this.hide()
            }
        }, {
            name: jt + " focusin",
            filter() {
                return p(this.mode, "hover")
            },
            handler(t) {
                kt(t) || this.clearTimers()
            }
        }, {
            name: oe + " focusout",
            filter() {
                return p(this.mode, "hover")
            },
            handler(t) {
                !kt(t) && t.relatedTarget && this.hide()
            }
        }, {
            name: "toggled",
            self: !0,
            handler(t, e) {
                !e || (this.clearTimers(), this.position())
            }
        }, {
            name: "show",
            self: !0,
            handler() {
                Y = this, this.tracker.init();
                const t = () => this.$emit(),
                    e = [k(document, gt, i => {
                        let {
                            target: s
                        } = i;
                        return !_(s, this.$el) && N(document, At + " " + Je + " scroll", n => {
                            let {
                                defaultPrevented: o,
                                type: r,
                                target: a
                            } = n;
                            !o && r === At && s === a && !(this.targetEl && _(s, this.targetEl)) && this.hide(!1)
                        }, !0)
                    }), k(document, "keydown", i => {
                        i.keyCode === 27 && this.hide(!1)
                    }), k(window, "resize", t), (() => {
                        const i = Ke(Q(this.$el).concat(this.target), t);
                        return () => i.disconnect()
                    })(), ...this.autoUpdate ? [k([document, Q(this.$el)], "scroll", t, {
                        passive: !0
                    })] : [], ...this.bgScroll ? [] : [en(this.$el), sn()]];
                N(this.$el, "hide", () => e.forEach(i => i()), {
                    self: !0
                })
            }
        }, {
            name: "beforehide",
            self: !0,
            handler() {
                this.clearTimers()
            }
        }, {
            name: "hide",
            handler(t) {
                let {
                    target: e
                } = t;
                if (this.$el !== e) {
                    Y = Y === null && _(e, this.$el) && this.isToggled() ? this : Y;
                    return
                }
                Y = this.isActive() ? null : Y, this.tracker.cancel()
            }
        }],
        update: {
            write() {
                this.isToggled() && !E(this.$el, this.clsEnter) && this.position()
            }
        },
        methods: {
            show(t, e) {
                if (t === void 0 && (t = this.targetEl), e === void 0 && (e = !0), this.isToggled() && t && this.targetEl && t !== this.targetEl && this.hide(!1, !1), this.targetEl = t, this.clearTimers(), !this.isActive()) {
                    if (Y) {
                        if (e && Y.isDelaying) {
                            this.showTimer = setTimeout(() => F(t, ":hover") && this.show(), 10);
                            return
                        }
                        let i;
                        for (; Y && i !== Y && !_(this.$el, Y.$el);) i = Y, Y.hide(!1, !1)
                    }
                    this.container && A(this.$el) !== this.container && L(this.container, this.$el), this.showTimer = setTimeout(() => this.toggleElement(this.$el, !0), e && this.delayShow || 0)
                }
            },
            hide(t, e) {
                t === void 0 && (t = !0), e === void 0 && (e = !0);
                const i = () => this.toggleElement(this.$el, !1, this.animateOut && e);
                this.clearTimers(), this.isDelaying = $r(this.$el).some(s => this.tracker.movesTo(s)), t && this.isDelaying ? this.hideTimer = setTimeout(this.hide, 50) : t && this.delayHide ? this.hideTimer = setTimeout(i, this.delayHide) : i()
            },
            clearTimers() {
                clearTimeout(this.showTimer), clearTimeout(this.hideTimer), this.showTimer = null, this.hideTimer = null, this.isDelaying = !1
            },
            isActive() {
                return Y === this
            },
            position() {
                O(this.$el, this.clsDrop + "-stack"), v(this.$el, "style", this._style), this.$el.hidden = !0;
                const t = this.target.map(n => rt(Q(n)[0])),
                    e = this.getViewportOffset(this.$el),
                    i = [
                        [0, ["x", "width", "left", "right"]],
                        [1, ["y", "height", "top", "bottom"]]
                    ];
                for (const [n, [o, r]] of i) this.axis !== o && p([o, !0], this.stretch) && h(this.$el, {
                    [r]: Math.min(C(this.boundary[n])[r], t[n][r] - 2 * e),
                    ["overflow-" + o]: "auto"
                });
                const s = t[0].width - 2 * e;
                this.$el.offsetWidth > s && x(this.$el, this.clsDrop + "-stack"), h(this.$el, "maxWidth", s), this.$el.hidden = !1, this.positionAt(this.$el, this.target, this.boundary);
                for (const [n, [o, r, a, l]] of i)
                    if (this.axis === o && p([o, !0], this.stretch)) {
                        const c = Math.abs(this.getPositionOffset(this.$el)),
                            u = C(this.target[n]),
                            d = C(this.$el);
                        h(this.$el, {
                            [r]: (u[a] > d[a] ? u[a] - Math.max(C(this.boundary[n])[a], t[n][a] + e) : Math.min(C(this.boundary[n])[l], t[n][l] - e) - u[l]) - c,
                            ["overflow-" + o]: "auto"
                        }), this.positionAt(this.$el, this.target, this.boundary)
                    }
            }
        }
    };

    function $r(t) {
        const e = [];
        return vt(t, i => h(i, "position") !== "static" && e.push(i)), e
    }
    var kr = {
            mixins: [st],
            args: "target",
            props: {
                target: Boolean
            },
            data: {
                target: !1
            },
            computed: {
                input(t, e) {
                    return b(ve, e)
                },
                state() {
                    return this.input.nextElementSibling
                },
                target(t, e) {
                    let {
                        target: i
                    } = t;
                    return i && (i === !0 && A(this.input) === e && this.input.nextElementSibling || b(i, e))
                }
            },
            update() {
                var t;
                const {
                    target: e,
                    input: i
                } = this;
                if (!e) return;
                let s;
                const n = Pi(e) ? "value" : "textContent",
                    o = e[n],
                    r = (t = i.files) != null && t[0] ? i.files[0].name : F(i, "select") && (s = M("option", i).filter(a => a.selected)[0]) ? s.textContent : i.value;
                o !== r && (e[n] = r)
            },
            events: [{
                name: "change",
                handler() {
                    this.$emit()
                }
            }, {
                name: "reset",
                el() {
                    return et(this.$el, "form")
                },
                handler() {
                    this.$emit()
                }
            }]
        },
        on = {
            mixins: [wt],
            props: {
                margin: String,
                firstColumn: Boolean
            },
            data: {
                margin: "bdt-margin-small-top",
                firstColumn: "bdt-first-column"
            },
            resizeTargets() {
                return [this.$el, ...xi(this.$el.children)]
            },
            connected() {
                this.registerObserver(ji(this.$el, () => this.$reset(), {
                    childList: !0
                }))
            },
            update: {
                read() {
                    const t = ts(this.$el.children);
                    return {
                        rows: t,
                        columns: Sr(t)
                    }
                },
                write(t) {
                    let {
                        columns: e,
                        rows: i
                    } = t;
                    for (const s of i)
                        for (const n of s) H(n, this.margin, i[0] !== s), H(n, this.firstColumn, e[0].includes(n))
                },
                events: ["resize"]
            }
        };

    function ts(t) {
        return rn(t, "top", "bottom")
    }

    function Sr(t) {
        const e = [];
        for (const i of t) {
            const s = rn(i, "left", "right");
            for (let n = 0; n < s.length; n++) e[n] = e[n] ? e[n].concat(s[n]) : s[n]
        }
        return X ? e.reverse() : e
    }

    function rn(t, e, i) {
        const s = [
            []
        ];
        for (const n of t) {
            if (!q(n)) continue;
            let o = ii(n);
            for (let r = s.length - 1; r >= 0; r--) {
                const a = s[r];
                if (!a[0]) {
                    a.push(n);
                    break
                }
                let l;
                if (a[0].offsetParent === n.offsetParent ? l = ii(a[0]) : (o = ii(n, !0), l = ii(a[0], !0)), o[e] >= l[i] - 1 && o[e] !== l[e]) {
                    s.push([n]);
                    break
                }
                if (o[i] - 1 > l[e] || o[e] === l[e]) {
                    a.push(n);
                    break
                }
                if (r === 0) {
                    s.unshift([n]);
                    break
                }
            }
        }
        return s
    }

    function ii(t, e) {
        e === void 0 && (e = !1);
        let {
            offsetTop: i,
            offsetLeft: s,
            offsetHeight: n,
            offsetWidth: o
        } = t;
        return e && ([i, s] = Ht(t)), {
            top: i,
            left: s,
            bottom: i + n,
            right: s + o
        }
    }
    var si = {
        connected() {
            an(this._uid, () => this.$emit("scroll"))
        },
        disconnected() {
            ln(this._uid)
        }
    };
    const ni = new Map;
    let Ce;

    function an(t, e) {
        Ce = Ce || k(window, "scroll", () => ni.forEach(i => i()), {
            passive: !0,
            capture: !0
        }), ni.set(t, e)
    }

    function ln(t) {
        ni.delete(t), Ce && !ni.size && (Ce(), Ce = null)
    }
    var Tr = {
        extends: on,
        mixins: [st],
        name: "grid",
        props: {
            masonry: Boolean,
            parallax: Number
        },
        data: {
            margin: "bdt-grid-margin",
            clsStack: "bdt-grid-stack",
            masonry: !1,
            parallax: 0
        },
        connected() {
            this.masonry && x(this.$el, "bdt-flex-top bdt-flex-wrap-top"), this.parallax && an(this._uid, () => this.$emit("scroll"))
        },
        disconnected() {
            ln(this._uid)
        },
        update: [{
            write(t) {
                let {
                    columns: e
                } = t;
                H(this.$el, this.clsStack, e.length < 2)
            },
            events: ["resize"]
        }, {
            read(t) {
                let {
                    columns: e,
                    rows: i
                } = t;
                if (!e.length || !this.masonry && !this.parallax || hn(this.$el)) return t.translates = !1, !1;
                let s = !1;
                const n = D(this.$el),
                    o = Pr(e),
                    r = Ir(n, this.margin) * (i.length - 1),
                    a = Math.max(...o) + r;
                this.masonry && (e = e.map(c => Ne(c, "offsetTop")), s = Cr(i, e));
                let l = Math.abs(this.parallax);
                return l && (l = o.reduce((c, u, d) => Math.max(c, u + r + (d % 2 ? l : l / 8) - a), 0)), {
                    padding: l,
                    columns: e,
                    translates: s,
                    height: s ? a : ""
                }
            },
            write(t) {
                let {
                    height: e,
                    padding: i
                } = t;
                h(this.$el, "paddingBottom", i || ""), e !== !1 && h(this.$el, "height", e)
            },
            events: ["resize"]
        }, {
            read() {
                return this.parallax && hn(this.$el) ? !1 : {
                    scrolled: this.parallax ? Gi(this.$el) * Math.abs(this.parallax) : !1
                }
            },
            write(t) {
                let {
                    columns: e,
                    scrolled: i,
                    translates: s
                } = t;
                i === !1 && !s || e.forEach((n, o) => n.forEach((r, a) => h(r, "transform", !i && !s ? "" : "translateY(" + ((s && -s[o][a]) + (i ? o % 2 ? i : i / 8 : 0)) + "px)")))
            },
            events: ["scroll", "resize"]
        }]
    };

    function hn(t) {
        return D(t).some(e => h(e, "position") === "absolute")
    }

    function Cr(t, e) {
        const i = t.map(s => Math.max(...s.map(n => n.offsetHeight)));
        return e.map(s => {
            let n = 0;
            return s.map((o, r) => n += r ? i[r - 1] - s[r - 1].offsetHeight : 0)
        })
    }

    function Ir(t, e) {
        const [i] = t.filter(s => E(s, e));
        return w(i ? h(i, "marginTop") : h(t[0], "paddingLeft"))
    }

    function Pr(t) {
        return t.map(e => e.reduce((i, s) => i + s.offsetHeight, 0))
    }
    var Ar = {
        mixins: [wt],
        args: "target",
        props: {
            target: String,
            row: Boolean
        },
        data: {
            target: "> *",
            row: !0
        },
        computed: {
            elements: {
                get(t, e) {
                    let {
                        target: i
                    } = t;
                    return M(i, e)
                },
                watch() {
                    this.$reset()
                }
            }
        },
        resizeTargets() {
            return [this.$el, ...this.elements]
        },
        update: {
            read() {
                return {
                    rows: (this.row ? ts(this.elements) : [this.elements]).map(Er)
                }
            },
            write(t) {
                let {
                    rows: e
                } = t;
                for (const {
                        heights: i,
                        elements: s
                    } of e) s.forEach((n, o) => h(n, "minHeight", i[o]))
            },
            events: ["resize"]
        }
    };

    function Er(t) {
        if (t.length < 2) return {
            heights: [""],
            elements: t
        };
        h(t, "minHeight", "");
        let e = t.map(_r);
        const i = Math.max(...e);
        return {
            heights: t.map((s, n) => e[n].toFixed(2) === i.toFixed(2) ? "" : i),
            elements: t
        }
    }

    function _r(t) {
        let e = !1;
        q(t) || (e = t.style.display, h(t, "display", "block", "important"));
        const i = y(t).height - se(t, "height", "content-box");
        return e !== !1 && h(t, "display", e), i
    }
    var Or = {
            mixins: [wt],
            props: {
                expand: Boolean,
                offsetTop: Boolean,
                offsetBottom: Boolean,
                minHeight: Number
            },
            data: {
                expand: !1,
                offsetTop: !1,
                offsetBottom: !1,
                minHeight: 0
            },
            resizeTargets() {
                return [this.$el, ...Q(this.$el, /auto|scroll/)]
            },
            update: {
                read(t) {
                    let {
                        minHeight: e
                    } = t;
                    if (!q(this.$el)) return !1;
                    let i = "";
                    const s = se(this.$el, "height", "content-box"),
                        {
                            body: n,
                            scrollingElement: o
                        } = document,
                        [r] = Q(this.$el, /auto|scroll/),
                        {
                            height: a
                        } = rt(r === n ? o : r);
                    if (this.expand) i = Math.max(a - (y(r).height - y(this.$el).height) - s, 0);
                    else {
                        const l = o === r || n === r;
                        if (i = "calc(" + (l ? "100vh" : a + "px"), this.offsetTop)
                            if (l) {
                                const c = Ht(this.$el)[0] - Ht(r)[0];
                                i += c > 0 && c < a / 2 ? " - " + c + "px" : ""
                            } else i += " - " + h(r, "paddingTop");
                        this.offsetBottom === !0 ? i += " - " + y(this.$el.nextElementSibling).height + "px" : Dt(this.offsetBottom) ? i += " - " + this.offsetBottom + "vh" : this.offsetBottom && Gt(this.offsetBottom, "px") ? i += " - " + w(this.offsetBottom) + "px" : B(this.offsetBottom) && (i += " - " + y(ht(this.offsetBottom, this.$el)).height + "px"), i += (s ? " - " + s + "px" : "") + ")"
                    }
                    return {
                        minHeight: i,
                        prev: e
                    }
                },
                write(t) {
                    let {
                        minHeight: e
                    } = t;
                    h(this.$el, {
                        minHeight: e
                    }), this.minHeight && w(h(this.$el, "minHeight")) < this.minHeight && h(this.$el, "minHeight", this.minHeight)
                },
                events: ["resize"]
            }
        },
        cn = {
            args: "src",
            props: {
                id: Boolean,
                icon: String,
                src: String,
                style: String,
                width: Number,
                height: Number,
                ratio: Number,
                class: String,
                strokeAnimation: Boolean,
                focusable: Boolean,
                attributes: "list"
            },
            data: {
                ratio: 1,
                include: ["style", "class", "focusable"],
                class: "",
                strokeAnimation: !1
            },
            beforeConnect() {
                this.class += " bdt-svg"
            },
            connected() {
                !this.icon && p(this.src, "#") && ([this.src, this.icon] = this.src.split("#")), this.svg = this.getSvg().then(t => {
                    if (this._connected) {
                        const e = Nr(t, this.$el);
                        return this.svgEl && e !== this.svgEl && ut(this.svgEl), this.applyAttributes(e, t), this.svgEl = e
                    }
                }, T), this.strokeAnimation && this.svg.then(t => {
                    this._connected && (dn(t), this.registerObserver(re(t, (e, i) => {
                        dn(t), i.disconnect()
                    })))
                })
            },
            disconnected() {
                this.svg.then(t => {
                    this._connected || (Ii(this.$el) && (this.$el.hidden = !1), ut(t), this.svgEl = null)
                }), this.svg = null
            },
            methods: {
                async getSvg() {
                    return ct(this.$el, "img") && !this.$el.complete && this.$el.loading === "lazy" ? new Promise(t => N(this.$el, "load", () => t(this.getSvg()))) : Dr(await Br(this.src), this.icon) || Promise.reject("SVG not found.")
                },
                applyAttributes(t, e) {
                    for (const o in this.$options.props) p(this.include, o) && o in this && v(t, o, this[o]);
                    for (const o in this.attributes) {
                        const [r, a] = this.attributes[o].split(":", 2);
                        v(t, r, a)
                    }
                    this.id || me(t, "id");
                    const i = ["width", "height"];
                    let s = i.map(o => this[o]);
                    s.some(o => o) || (s = i.map(o => v(e, o)));
                    const n = v(e, "viewBox");
                    n && !s.some(o => o) && (s = n.split(" ").slice(2)), s.forEach((o, r) => v(t, i[r], w(o) * this.ratio || null))
                }
            }
        };
    const Br = ft(async t => t ? lt(t, "data:") ? decodeURIComponent(t.split(",")[1]) : (await fetch(t)).text() : Promise.reject());

    function Dr(t, e) {
        var i;
        return e && p(t, "<symbol") && (t = Mr(t, e) || t), t = b(t.substr(t.indexOf("<svg"))), ((i = t) == null ? void 0 : i.hasChildNodes()) && t
    }
    const un = /<symbol([^]*?id=(['"])(.+?)\2[^]*?<\/)symbol>/g,
        oi = {};

    function Mr(t, e) {
        if (!oi[t]) {
            oi[t] = {}, un.lastIndex = 0;
            let i;
            for (; i = un.exec(t);) oi[t][i[3]] = '<svg xmlns="http://www.w3.org/2000/svg"' + i[1] + "svg>"
        }
        return oi[t][e]
    }

    function dn(t) {
        const e = fn(t);
        e && t.style.setProperty("--bdt-animation-stroke", e)
    }

    function fn(t) {
        return Math.ceil(Math.max(0, ...M("[stroke]", t).map(e => {
            try {
                return e.getTotalLength()
            } catch {
                return 0
            }
        })))
    }

    function Nr(t, e) {
        if (Ii(e) || ct(e, "canvas")) {
            e.hidden = !0;
            const s = e.nextElementSibling;
            return pn(t, s) ? s : Ye(e, t)
        }
        const i = e.lastElementChild;
        return pn(t, i) ? i : L(e, t)
    }

    function pn(t, e) {
        return ct(t, "svg") && ct(e, "svg") && gn(t) === gn(e)
    }

    function gn(t) {
        return (t.innerHTML || new XMLSerializer().serializeToString(t).replace(/<svg.*?>(.*?)<\/svg>/g, "$1")).replace(/\s/g, "")
    }
    var zr = '<svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.1" x1="1" y1="1" x2="13" y2="13"/><line fill="none" stroke="#000" stroke-width="1.1" x1="13" y1="1" x2="1" y2="13"/></svg>',
        Fr = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.4" x1="1" y1="1" x2="19" y2="19"/><line fill="none" stroke="#000" stroke-width="1.4" x1="19" y1="1" x2="1" y2="19"/></svg>',
        Hr = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="9" y="4" width="1" height="11"/><rect x="4" y="9" width="11" height="1"/></svg>',
        Lr = '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"/></svg>',
        Wr = '<svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 4 7 10 13 4"/></svg>',
        Rr = '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"/></svg>',
        jr = `<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><style>.bdt-navbar-toggle-animate svg > [class*='line-'] {
            transition: 0.2s ease-in-out;
            transition-property: transform, opacity,;
            transform-origin: center;
            opacity: 1;
        }

        .bdt-navbar-toggle svg > .line-3 { opacity: 0; }
        .bdt-navbar-toggle-animate[aria-expanded="true"] svg > .line-3 { opacity: 1; }

        .bdt-navbar-toggle-animate[aria-expanded="true"] svg > .line-2 { transform: rotate(45deg); }
        .bdt-navbar-toggle-animate[aria-expanded="true"] svg > .line-3 { transform: rotate(-45deg); }

        .bdt-navbar-toggle-animate[aria-expanded="true"] svg > .line-1,
        .bdt-navbar-toggle-animate[aria-expanded="true"] svg > .line-4 { opacity: 0; }
        .bdt-navbar-toggle-animate[aria-expanded="true"] svg > .line-1 { transform: translateY(6px) scaleX(0); }
        .bdt-navbar-toggle-animate[aria-expanded="true"] svg > .line-4 { transform: translateY(-6px) scaleX(0); }</style><rect class="line-1" y="3" width="20" height="2"/><rect class="line-2" y="9" width="20" height="2"/><rect class="line-3" y="9" width="20" height="2"/><rect class="line-4" y="15" width="20" height="2"/></svg>`,
        qr = '<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><rect x="19" y="0" width="1" height="40"/><rect x="0" y="19" width="40" height="1"/></svg>',
        Yr = '<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 1 6 6 1 11"/></svg>',
        Vr = '<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="6 1 1 6 6 11"/></svg>',
        Xr = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9" cy="9" r="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z"/></svg>',
        Gr = '<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.8" cx="17.5" cy="17.5" r="16.5"/><line fill="none" stroke="#000" stroke-width="1.8" x1="38" y1="39" x2="29" y2="30"/></svg>',
        Jr = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10.5" cy="10.5" r="9.5"/><line fill="none" stroke="#000" stroke-width="1.1" x1="23" y1="23" x2="17" y2="17"/></svg>',
        Kr = '<svg width="14" height="24" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="1.225,23 12.775,12 1.225,1 "/></svg>',
        Zr = '<svg width="25" height="40" viewBox="0 0 25 40" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="2" points="4.002,38.547 22.527,20.024 4,1.5 "/></svg>',
        Qr = '<svg width="14" height="24" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="12.775,1 1.225,12 12.775,23 "/></svg>',
        Ur = '<svg width="25" height="40" viewBox="0 0 25 40" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="2" points="20.527,1.5 2,20.024 20.525,38.547 "/></svg>',
        ta = '<svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" cx="15" cy="15" r="14"/></svg>',
        ea = '<svg width="18" height="10" viewBox="0 0 18 10" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 9 9 1 17 9 "/></svg>';
    const ri = {
            spinner: ta,
            totop: ea,
            marker: Hr,
            "close-icon": zr,
            "close-large": Fr,
            "nav-parent-icon": Lr,
            "nav-parent-icon-large": Wr,
            "navbar-parent-icon": Rr,
            "navbar-toggle-icon": jr,
            "overlay-icon": qr,
            "pagination-next": Yr,
            "pagination-previous": Vr,
            "search-icon": Xr,
            "search-large": Gr,
            "search-navbar": Jr,
            "slidenav-next": Kr,
            "slidenav-next-large": Zr,
            "slidenav-previous": Qr,
            "slidenav-previous-large": Ur
        },
        es = {
            install: ra,
            extends: cn,
            args: "icon",
            props: ["icon"],
            data: {
                include: ["focusable"]
            },
            isIcon: !0,
            beforeConnect() {
                x(this.$el, "bdt-icon")
            },
            methods: {
                async getSvg() {
                    const t = aa(this.icon);
                    if (!t) throw "Icon not found.";
                    return t
                }
            }
        },
        dt = {
            args: !1,
            extends: es,
            data: t => ({
                icon: Xt(t.constructor.options.name)
            }),
            beforeConnect() {
                x(this.$el, this.$options.id)
            }
        },
        ia = {
            extends: dt,
            beforeConnect() {
                const t = this.$props.icon;
                this.icon = et(this.$el, ".bdt-nav-primary") ? t + "-large" : t
            }
        },
        mn = {
            extends: dt,
            beforeConnect() {
                x(this.$el, "bdt-slidenav");
                const t = this.$props.icon;
                this.icon = E(this.$el, "bdt-slidenav-large") ? t + "-large" : t
            }
        },
        sa = {
            extends: dt,
            beforeConnect() {
                this.icon = E(this.$el, "bdt-search-icon") && te(this.$el, ".bdt-search-large").length ? "search-large" : te(this.$el, ".bdt-search-navbar").length ? "search-navbar" : this.$props.icon
            }
        },
        na = {
            extends: dt,
            beforeConnect() {
                this.icon = "close-" + (E(this.$el, "bdt-close-large") ? "large" : "icon")
            }
        },
        oa = {
            extends: dt,
            methods: {
                async getSvg() {
                    const t = await es.methods.getSvg.call(this);
                    return this.ratio !== 1 && h(b("circle", t), "strokeWidth", 1 / this.ratio), t
                }
            }
        },
        ai = {};

    function ra(t) {
        t.icon.add = (e, i) => {
            const s = B(e) ? {
                [e]: i
            } : e;
            $t(s, (n, o) => {
                ri[o] = n, delete ai[o]
            }), t._initialized && vt(document.body, n => $t(t.getComponents(n), o => {
                o.$options.isIcon && o.icon in s && o.$reset()
            }))
        }
    }

    function aa(t) {
        return ri[t] ? (ai[t] || (ai[t] = b((ri[la(t)] || ri[t]).trim())), ai[t].cloneNode(!0)) : null
    }

    function la(t) {
        return X ? Si(Si(t, "left", "right"), "previous", "next") : t
    }
    const ha = Wt && "loading" in HTMLImageElement.prototype;
    var ca = {
        args: "dataSrc",
        props: {
            dataSrc: String,
            sources: String,
            offsetTop: String,
            offsetLeft: String,
            target: String,
            loading: String
        },
        data: {
            dataSrc: "",
            sources: !1,
            offsetTop: "50vh",
            offsetLeft: "50vw",
            target: !1,
            loading: "lazy"
        },
        connected() {
            if (this.loading !== "lazy") {
                this.load();
                return
            }
            const t = [this.$el, ...we(this.$props.target, this.$el)];
            ha && li(this.$el) && (this.$el.loading = "lazy", is(this.$el), t.length === 1) || (ga(this.$el), this.registerObserver(re(t, (e, i) => {
                this.load(), i.disconnect()
            }, {
                rootMargin: K(this.offsetTop, "height") + "px " + K(this.offsetLeft, "width") + "px"
            })))
        },
        disconnected() {
            this._data.image && (this._data.image.onload = "")
        },
        methods: {
            load() {
                if (this._data.image) return this._data.image;
                const t = li(this.$el) ? this.$el : da(this.$el, this.dataSrc, this.sources);
                return me(t, "loading"), is(this.$el, t.currentSrc), this._data.image = t
            }
        }
    };

    function is(t, e) {
        if (li(t)) {
            const i = A(t);
            (ma(i) ? D(i) : [t]).forEach(n => vn(n, n))
        } else e && !p(t.style.backgroundImage, e) && (h(t, "backgroundImage", "url(" + Ei(e) + ")"), g(t, zt("load", !1)))
    }
    const ua = ["data-src", "data-srcset", "sizes"];

    function vn(t, e) {
        ua.forEach(i => {
            const s = ot(t, i);
            s && v(e, i.replace(/^(data-)+/, ""), s)
        })
    }

    function da(t, e, i) {
        const s = new Image;
        return fa(s, i), vn(t, s), s.onload = () => {
            is(t, s.currentSrc)
        }, v(s, "src", e), s
    }

    function fa(t, e) {
        if (e = pa(e), e.length) {
            const i = Lt("<picture>");
            for (const s of e) {
                const n = Lt("<source>");
                v(n, s), L(i, n)
            }
            L(i, t)
        }
    }

    function pa(t) {
        if (!t) return [];
        if (lt(t, "[")) try {
            t = JSON.parse(t)
        } catch {
            t = []
        } else t = Se(t);
        return U(t) || (t = [t]), t.filter(e => !pe(e))
    }

    function ga(t) {
        li(t) && !It(t, "src") && v(t, "src", 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"></svg>')
    }

    function ma(t) {
        return ct(t, "picture")
    }

    function li(t) {
        return ct(t, "img")
    }
    var hi = {
        props: {
            media: Boolean
        },
        data: {
            media: !1
        },
        connected() {
            const t = va(this.media, this.$el);
            if (this.matchMedia = !0, t) {
                this.mediaObj = window.matchMedia(t);
                const e = () => {
                    this.matchMedia = this.mediaObj.matches, g(this.$el, zt("mediachange", !1, !0, [this.mediaObj]))
                };
                this.offMediaObj = k(this.mediaObj, "change", () => {
                    e(), this.$emit("resize")
                }), e()
            }
        },
        disconnected() {
            var t;
            (t = this.offMediaObj) == null || t.call(this)
        }
    };

    function va(t, e) {
        if (B(t)) {
            if (lt(t, "@")) t = w(h(e, "--bdt-breakpoint-" + t.substr(1)));
            else if (isNaN(t)) return t
        }
        return t && Dt(t) ? "(min-width: " + t + "px)" : ""
    }
    var wa = {
            mixins: [st, hi, wt],
            props: {
                fill: String
            },
            data: {
                fill: "",
                clsWrapper: "bdt-leader-fill",
                clsHide: "bdt-leader-hide",
                attrFill: "data-fill"
            },
            computed: {
                fill(t) {
                    let {
                        fill: e
                    } = t;
                    return e || h(this.$el, "--bdt-leader-fill-content")
                }
            },
            connected() {
                [this.wrapper] = Hi(this.$el, '<span class="' + this.clsWrapper + '">')
            },
            disconnected() {
                $e(this.wrapper.childNodes)
            },
            update: {
                read() {
                    return {
                        width: Math.trunc(this.$el.offsetWidth / 2),
                        fill: this.fill,
                        hide: !this.matchMedia
                    }
                },
                write(t) {
                    let {
                        width: e,
                        fill: i,
                        hide: s
                    } = t;
                    H(this.wrapper, this.clsHide, s), v(this.wrapper, this.attrFill, new Array(e).join(i))
                },
                events: ["resize"]
            }
        },
        ba = {
            install: xa,
            mixins: [Zi],
            data: {
                clsPage: "bdt-modal-page",
                selPanel: ".bdt-modal-dialog",
                selClose: ".bdt-modal-close, .bdt-modal-close-default, .bdt-modal-close-outside, .bdt-modal-close-full"
            },
            events: [{
                name: "show",
                self: !0,
                handler() {
                    E(this.panel, "bdt-margin-auto-vertical") ? x(this.$el, "bdt-flex") : h(this.$el, "display", "block"), J(this.$el)
                }
            }, {
                name: "hidden",
                self: !0,
                handler() {
                    h(this.$el, "display", ""), O(this.$el, "bdt-flex")
                }
            }]
        };

    function xa(t) {
        let {
            modal: e
        } = t;
        e.dialog = function (s, n) {
            const o = e('<div class="bdt-modal"> <div class="bdt-modal-dialog">' + s + "</div> </div>", n);
            return o.show(), k(o.$el, "hidden", async () => {
                await Promise.resolve(), o.$destroy(!0)
            }, {
                self: !0
            }), o
        }, e.alert = function (s, n) {
            return i(o => {
                let {
                    labels: r
                } = o;
                return '<div class="bdt-modal-body">' + (B(s) ? s : Pt(s)) + '</div> <div class="bdt-modal-footer bdt-text-right"> <button class="bdt-button bdt-button-primary bdt-modal-close" autofocus>' + r.ok + "</button> </div>"
            }, n, o => o.resolve())
        }, e.confirm = function (s, n) {
            return i(o => {
                let {
                    labels: r
                } = o;
                return '<form> <div class="bdt-modal-body">' + (B(s) ? s : Pt(s)) + '</div> <div class="bdt-modal-footer bdt-text-right"> <button class="bdt-button bdt-button-default bdt-modal-close" type="button">' + r.cancel + '</button> <button class="bdt-button bdt-button-primary" autofocus>' + r.ok + "</button> </div> </form>"
            }, n, o => o.reject())
        }, e.prompt = function (s, n, o) {
            return i(r => {
                let {
                    labels: a
                } = r;
                return '<form class="bdt-form-stacked"> <div class="bdt-modal-body"> <label>' + (B(s) ? s : Pt(s)) + '</label> <input class="bdt-input" value="' + (n || "") + '" autofocus> </div> <div class="bdt-modal-footer bdt-text-right"> <button class="bdt-button bdt-button-default bdt-modal-close" type="button">' + a.cancel + '</button> <button class="bdt-button bdt-button-primary">' + a.ok + "</button> </div> </form>"
            }, o, r => r.resolve(null), r => b("input", r.$el).value)
        }, e.labels = {
            ok: "Ok",
            cancel: "Cancel"
        };

        function i(s, n, o, r) {
            n = {
                bgClose: !1,
                escClose: !0,
                labels: e.labels,
                ...n
            };
            const a = e.dialog(s(n), n),
                l = new He;
            let c = !1;
            return k(a.$el, "submit", "form", u => {
                u.preventDefault(), l.resolve(r == null ? void 0 : r(a)), c = !0, a.hide()
            }), k(a.$el, "hide", () => !c && o(l)), l.promise.dialog = a, l.promise
        }
    }
    var ya = {
            extends: Ks,
            data: {
                targets: "> .bdt-parent",
                toggle: "> a",
                content: "> ul"
            }
        },
        $a = {
            mixins: [st, le],
            props: {
                dropdown: String,
                align: String,
                clsDrop: String,
                boundary: Boolean,
                dropbar: Boolean,
                dropbarAnchor: Boolean,
                duration: Number,
                mode: Boolean,
                offset: Boolean,
                stretch: Boolean,
                delayShow: Boolean,
                delayHide: Boolean,
                target: Boolean,
                targetX: Boolean,
                targetY: Boolean,
                animation: Boolean,
                animateOut: Boolean
            },
            data: {
                dropdown: ".bdt-navbar-nav > li > a, .bdt-navbar-item, .bdt-navbar-toggle",
                align: X ? "right" : "left",
                clsDrop: "bdt-navbar-dropdown",
                boundary: !0,
                dropbar: !1,
                dropbarAnchor: !1,
                duration: 200,
                container: !1
            },
            computed: {
                dropbarAnchor(t, e) {
                    let {
                        dropbarAnchor: i
                    } = t;
                    return ht(i, e) || e
                },
                dropbar: {
                    get(t) {
                        let {
                            dropbar: e
                        } = t;
                        return e ? (e = this._dropbar || ht(e, this.$el) || b("+ .bdt-navbar-dropbar", this.$el), e || (this._dropbar = b("<div></div>"))) : null
                    },
                    watch(t) {
                        x(t, "bdt-dropbar", "bdt-dropbar-top", "bdt-navbar-dropbar")
                    },
                    immediate: !0
                },
                dropContainer(t, e) {
                    return this.container || e
                },
                dropdowns: {
                    get(t, e) {
                        let {
                            clsDrop: i
                        } = t;
                        const s = M("." + i, e);
                        if (this.dropContainer !== e)
                            for (const o of M("." + i, this.dropContainer)) {
                                var n;
                                const r = (n = this.getDropdown(o)) == null ? void 0 : n.targetEl;
                                !p(s, o) && r && _(r, this.$el) && s.push(o)
                            }
                        return s
                    },
                    watch(t) {
                        this.$create("drop", t.filter(e => !this.getDropdown(e)), {
                            ...this.$props,
                            flip: !1,
                            shift: !0,
                            pos: "bottom-" + this.align,
                            boundary: this.boundary === !0 ? this.$el : this.boundary
                        })
                    },
                    immediate: !0
                },
                toggles: {
                    get(t, e) {
                        let {
                            dropdown: i
                        } = t;
                        return M(i, e)
                    },
                    watch() {
                        const t = E(this.$el, "bdt-navbar-justify");
                        for (const e of M(".bdt-navbar-nav, .bdt-navbar-left, .bdt-navbar-right", this.$el)) h(e, "flexGrow", t ? M(this.dropdown, e).length : "")
                    },
                    immediate: !0
                }
            },
            disconnected() {
                this.dropbar && ut(this.dropbar), delete this._dropbar
            },
            events: [{
                name: "mouseover focusin",
                delegate() {
                    return this.dropdown
                },
                handler(t) {
                    let {
                        current: e
                    } = t;
                    const i = this.getActive();
                    i && p(i.mode, "hover") && i.targetEl && !_(i.targetEl, e) && !i.isDelaying && i.hide(!1)
                }
            }, {
                name: "keydown",
                delegate() {
                    return this.dropdown
                },
                handler(t) {
                    const {
                        current: e,
                        keyCode: i
                    } = t, s = this.getActive();
                    i === qt.DOWN && It(e, "aria-expanded") && (t.preventDefault(), !s || s.targetEl !== e ? (e.click(), N(this.dropContainer, "show", n => {
                        let {
                            target: o
                        } = n;
                        return bn(o)
                    })) : bn(s.$el)), wn(t, this.toggles, s)
                }
            }, {
                name: "keydown",
                el() {
                    return this.dropContainer
                },
                delegate() {
                    return "." + this.clsDrop
                },
                handler(t) {
                    const {
                        current: e,
                        keyCode: i
                    } = t;
                    if (!p(this.dropdowns, e)) return;
                    const s = this.getActive(),
                        n = M(Le, e),
                        o = bt(n, a => F(a, ":focus"));
                    if (i === qt.UP && (t.preventDefault(), o > 0 && n[o - 1].focus()), i === qt.DOWN && (t.preventDefault(), o < n.length - 1 && n[o + 1].focus()), i === qt.ESC) {
                        var r;
                        s == null || (r = s.targetEl) == null || r.focus()
                    }
                    wn(t, this.toggles, s)
                }
            }, {
                name: "mouseleave",
                el() {
                    return this.dropbar
                },
                filter() {
                    return this.dropbar
                },
                handler() {
                    const t = this.getActive();
                    t && p(t.mode, "hover") && !this.dropdowns.some(e => F(e, ":hover")) && t.hide()
                }
            }, {
                name: "beforeshow",
                el() {
                    return this.dropContainer
                },
                filter() {
                    return this.dropbar
                },
                handler(t) {
                    let {
                        target: e
                    } = t;
                    !this.isDropbarDrop(e) || (this.dropbar.previousElementSibling !== this.dropbarAnchor && Ye(this.dropbarAnchor, this.dropbar), x(e, this.clsDrop + "-dropbar"))
                }
            }, {
                name: "show",
                el() {
                    return this.dropContainer
                },
                filter() {
                    return this.dropbar
                },
                handler(t) {
                    let {
                        target: e
                    } = t;
                    if (!this.isDropbarDrop(e)) return;
                    const i = this.getDropdown(e);
                    this._observer = Ke([i.$el, ...i.target], () => {
                        const s = te(e, "." + this.clsDrop).concat(e).map(a => C(a)),
                            n = Math.min(...s.map(a => {
                                let {
                                    top: l
                                } = a;
                                return l
                            })),
                            o = Math.max(...s.map(a => {
                                let {
                                    bottom: l
                                } = a;
                                return l
                            })),
                            r = C(this.dropbar);
                        h(this.dropbar, "top", this.dropbar.offsetTop - (r.top - n)), this.transitionTo(o - n + w(h(e, "marginBottom")), e)
                    })
                }
            }, {
                name: "beforehide",
                el() {
                    return this.dropContainer
                },
                filter() {
                    return this.dropbar
                },
                handler(t) {
                    const e = this.getActive();
                    F(this.dropbar, ":hover") && (e == null ? void 0 : e.$el) === t.target && !this.toggles.some(i => e.targetEl !== i && F(i, ":focus")) && t.preventDefault()
                }
            }, {
                name: "hide",
                el() {
                    return this.dropContainer
                },
                filter() {
                    return this.dropbar
                },
                handler(t) {
                    var e;
                    let {
                        target: i
                    } = t;
                    if (!this.isDropbarDrop(i)) return;
                    (e = this._observer) == null || e.disconnect();
                    const s = this.getActive();
                    (!s || (s == null ? void 0 : s.$el) === i) && this.transitionTo(0)
                }
            }],
            methods: {
                getActive() {
                    return p(this.dropdowns, Y == null ? void 0 : Y.$el) && Y
                },
                transitionTo(t, e) {
                    const {
                        dropbar: i
                    } = this, s = J(i);
                    e = s < t && e, h(e, "clipPath", "polygon(0 0,100% 0,100% " + s + "px,0 " + s + "px)"), J(i, s), S.cancel([e, i]), Promise.all([S.start(i, {
                        height: t
                    }, this.duration), S.start(e, {
                        clipPath: "polygon(0 0,100% 0,100% " + t + "px,0 " + t + "px)"
                    }, this.duration)]).catch(T).then(() => h(e, {
                        clipPath: ""
                    }))
                },
                getDropdown(t) {
                    return this.$getComponent(t, "drop") || this.$getComponent(t, "dropdown")
                },
                isDropbarDrop(t) {
                    return this.getDropdown(t) && E(t, this.clsDrop)
                }
            }
        };

    function wn(t, e, i) {
        const {
            current: s,
            keyCode: n
        } = t, o = (i == null ? void 0 : i.targetEl) || s, r = e.indexOf(o);
        n === qt.LEFT && r > 0 && (i == null || i.hide(!1), e[r - 1].focus()), n === qt.RIGHT && r < e.length - 1 && (i == null || i.hide(!1), e[r + 1].focus()), n === qt.TAB && (o.focus(), i == null || i.hide(!1))
    }

    function bn(t) {
        if (!b(":focus", t)) {
            var e;
            (e = b(Le, t)) == null || e.focus()
        }
    }
    const qt = {
        TAB: 9,
        ESC: 27,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40
    };
    var xn = {
        props: {
            swiping: Boolean
        },
        data: {
            swiping: !0
        },
        computed: {
            swipeTarget(t, e) {
                return e
            }
        },
        connected() {
            !this.swiping || ti(this, {
                el: this.swipeTarget,
                name: gt,
                passive: !0,
                handler(t) {
                    if (!kt(t)) return;
                    const e = ie(t),
                        i = "tagName" in t.target ? t.target : A(t.target);
                    N(document, At + " " + Je + " scroll", s => {
                        const {
                            x: n,
                            y: o
                        } = ie(s);
                        (s.type !== "scroll" && i && n && Math.abs(e.x - n) > 100 || o && Math.abs(e.y - o) > 100) && setTimeout(() => {
                            g(i, "swipe"), g(i, "swipe" + ka(e.x, e.y, n, o))
                        })
                    })
                }
            })
        }
    };

    function ka(t, e, i, s) {
        return Math.abs(t - i) >= Math.abs(e - s) ? t - i > 0 ? "Left" : "Right" : e - s > 0 ? "Up" : "Down"
    }
    var Sa = {
        mixins: [Zi, xn],
        args: "mode",
        props: {
            mode: String,
            flip: Boolean,
            overlay: Boolean
        },
        data: {
            mode: "slide",
            flip: !1,
            overlay: !1,
            clsPage: "bdt-offcanvas-page",
            clsContainer: "bdt-offcanvas-container",
            selPanel: ".bdt-offcanvas-bar",
            clsFlip: "bdt-offcanvas-flip",
            clsContainerAnimation: "bdt-offcanvas-container-animation",
            clsSidebarAnimation: "bdt-offcanvas-bar-animation",
            clsMode: "bdt-offcanvas",
            clsOverlay: "bdt-offcanvas-overlay",
            selClose: ".bdt-offcanvas-close",
            container: !1
        },
        computed: {
            clsFlip(t) {
                let {
                    flip: e,
                    clsFlip: i
                } = t;
                return e ? i : ""
            },
            clsOverlay(t) {
                let {
                    overlay: e,
                    clsOverlay: i
                } = t;
                return e ? i : ""
            },
            clsMode(t) {
                let {
                    mode: e,
                    clsMode: i
                } = t;
                return i + "-" + e
            },
            clsSidebarAnimation(t) {
                let {
                    mode: e,
                    clsSidebarAnimation: i
                } = t;
                return e === "none" || e === "reveal" ? "" : i
            },
            clsContainerAnimation(t) {
                let {
                    mode: e,
                    clsContainerAnimation: i
                } = t;
                return e !== "push" && e !== "reveal" ? "" : i
            },
            transitionElement(t) {
                let {
                    mode: e
                } = t;
                return e === "reveal" ? A(this.panel) : this.panel
            }
        },
        update: {
            read() {
                this.isToggled() && !q(this.$el) && this.hide()
            },
            events: ["resize"]
        },
        events: [{
            name: "touchmove",
            self: !0,
            passive: !1,
            filter() {
                return this.overlay
            },
            handler(t) {
                t.cancelable && t.preventDefault()
            }
        }, {
            name: "show",
            self: !0,
            handler() {
                this.mode === "reveal" && !E(A(this.panel), this.clsMode) && (Xe(this.panel, "<div>"), x(A(this.panel), this.clsMode));
                const {
                    body: t,
                    scrollingElement: e
                } = document;
                x(t, this.clsContainer, this.clsFlip), h(t, "touch-action", "pan-y pinch-zoom"), h(this.$el, "display", "block"), h(this.panel, "maxWidth", e.clientWidth), x(this.$el, this.clsOverlay), x(this.panel, this.clsSidebarAnimation, this.mode === "reveal" ? "" : this.clsMode), J(t), x(t, this.clsContainerAnimation), this.clsContainerAnimation && Ta()
            }
        }, {
            name: "hide",
            self: !0,
            handler() {
                O(document.body, this.clsContainerAnimation), h(document.body, "touch-action", "")
            }
        }, {
            name: "hidden",
            self: !0,
            handler() {
                this.clsContainerAnimation && Ca(), this.mode === "reveal" && $e(this.panel), O(this.panel, this.clsSidebarAnimation, this.clsMode), O(this.$el, this.clsOverlay), h(this.$el, "display", ""), h(this.panel, "maxWidth", ""), O(document.body, this.clsContainer, this.clsFlip)
            }
        }, {
            name: "swipeLeft swipeRight",
            handler(t) {
                this.isToggled() && Gt(t.type, "Left") ^ this.flip && this.hide()
            }
        }]
    };

    function Ta() {
        yn().content += ",user-scalable=0"
    }

    function Ca() {
        const t = yn();
        t.content = t.content.replace(/,user-scalable=0$/, "")
    }

    function yn() {
        return b('meta[name="viewport"]', document.head) || L(document.head, '<meta name="viewport">')
    }
    var Ia = {
            mixins: [st, wt],
            props: {
                selContainer: String,
                selContent: String,
                minHeight: Number
            },
            data: {
                selContainer: ".bdt-modal",
                selContent: ".bdt-modal-dialog",
                minHeight: 150
            },
            computed: {
                container(t, e) {
                    let {
                        selContainer: i
                    } = t;
                    return et(e, i)
                },
                content(t, e) {
                    let {
                        selContent: i
                    } = t;
                    return et(e, i)
                }
            },
            resizeTargets() {
                return [this.container, this.content]
            },
            update: {
                read() {
                    return !this.content || !this.container || !q(this.$el) ? !1 : {
                        max: Math.max(this.minHeight, J(this.container) - (y(this.content).height - J(this.$el)))
                    }
                },
                write(t) {
                    let {
                        max: e
                    } = t;
                    h(this.$el, {
                        minHeight: this.minHeight,
                        maxHeight: e
                    })
                },
                events: ["resize"]
            }
        },
        Pa = {
            mixins: [wt],
            props: ["width", "height"],
            resizeTargets() {
                return [this.$el, A(this.$el)]
            },
            connected() {
                x(this.$el, "bdt-responsive-width")
            },
            update: {
                read() {
                    return q(this.$el) && this.width && this.height ? {
                        width: ye(A(this.$el)),
                        height: this.height
                    } : !1
                },
                write(t) {
                    J(this.$el, Fe.contain({
                        height: this.height,
                        width: this.width
                    }, t).height)
                },
                events: ["resize"]
            }
        },
        Aa = {
            props: {
                offset: Number
            },
            data: {
                offset: 0
            },
            connected() {
                Ea(this)
            },
            disconnected() {
                _a(this)
            },
            methods: {
                async scrollTo(t) {
                    t = t && b(t) || document.body, g(this.$el, "beforescroll", [this, t]) && (await Hs(t, {
                        offset: this.offset
                    }), g(this.$el, "scrolled", [this, t]))
                }
            }
        };
    const Ie = new Set;

    function Ea(t) {
        Ie.size || k(document, "click", $n), Ie.add(t)
    }

    function _a(t) {
        Ie.delete(t), Ie.size || Nt(document, "click", $n)
    }

    function $n(t) {
        if (!t.defaultPrevented)
            for (const e of Ie) _(t.target, e.$el) && (t.preventDefault(), e.scrollTo(kn(e.$el)))
    }

    function kn(t) {
        return document.getElementById(decodeURIComponent(t.hash).substring(1))
    }
    var Oa = {
            mixins: [si],
            args: "cls",
            props: {
                cls: String,
                target: String,
                hidden: Boolean,
                offsetTop: Number,
                offsetLeft: Number,
                repeat: Boolean,
                delay: Number
            },
            data: () => ({
                cls: "",
                target: !1,
                hidden: !0,
                offsetTop: 0,
                offsetLeft: 0,
                repeat: !1,
                delay: 0,
                inViewClass: "bdt-scrollspy-inview"
            }),
            computed: {
                elements: {
                    get(t, e) {
                        let {
                            target: i
                        } = t;
                        return i ? M(i, e) : [e]
                    },
                    watch(t, e) {
                        this.hidden && h(Re(t, ":not(." + this.inViewClass + ")"), "visibility", "hidden"), ge(t, e) || this.$reset()
                    },
                    immediate: !0
                }
            },
            connected() {
                this._data.elements = new Map, this.registerObserver(re(this.elements, t => {
                    const e = this._data.elements;
                    for (const {
                            target: i,
                            isIntersecting: s
                        } of t) {
                        e.has(i) || e.set(i, {
                            cls: ot(i, "bdt-scrollspy-class") || this.cls
                        });
                        const n = e.get(i);
                        !this.repeat && n.show || (n.show = s)
                    }
                    this.$emit()
                }, {
                    rootMargin: K(this.offsetTop, "height") - 1 + "px " + (K(this.offsetLeft, "width") - 1) + "px"
                }, !1))
            },
            disconnected() {
                for (const [t, e] of this._data.elements.entries()) O(t, this.inViewClass, (e == null ? void 0 : e.cls) || "")
            },
            update: [{
                write(t) {
                    for (const [e, i] of t.elements.entries()) i.show && !i.inview && !i.queued ? (i.queued = !0, t.promise = (t.promise || Promise.resolve()).then(() => new Promise(s => setTimeout(s, this.delay))).then(() => {
                        this.toggle(e, !0), setTimeout(() => {
                            i.queued = !1, this.$emit()
                        }, 300)
                    })) : !i.show && i.inview && !i.queued && this.repeat && this.toggle(e, !1)
                }
            }],
            methods: {
                toggle(t, e) {
                    const i = this._data.elements.get(t);
                    if (!!i) {
                        if (i.off == null || i.off(), h(t, "visibility", !e && this.hidden ? "hidden" : ""), H(t, this.inViewClass, e), H(t, i.cls), /\bbdt-animation-/.test(i.cls)) {
                            const s = () => Di(t, "bdt-animation-[\\w-]+");
                            e ? i.off = N(t, "animationcancel animationend", s) : s()
                        }
                        g(t, e ? "inview" : "outview"), i.inview = e, this.$update(t)
                    }
                }
            }
        },
        Ba = {
            mixins: [si],
            props: {
                cls: String,
                closest: String,
                scroll: Boolean,
                overflow: Boolean,
                offset: Number
            },
            data: {
                cls: "bdt-active",
                closest: !1,
                scroll: !1,
                overflow: !0,
                offset: 0
            },
            computed: {
                links: {
                    get(t, e) {
                        return M('a[href*="#"]', e).filter(i => i.hash && Ui(i))
                    },
                    watch(t) {
                        this.scroll && this.$create("scroll", t, {
                            offset: this.offset || 0
                        })
                    },
                    immediate: !0
                },
                elements(t) {
                    let {
                        closest: e
                    } = t;
                    return et(this.links, e || "*")
                }
            },
            update: [{
                read() {
                    const t = this.links.map(kn).filter(Boolean),
                        {
                            length: e
                        } = t;
                    if (!e || !q(this.$el)) return !1;
                    const [i] = Q(t, /auto|scroll/, !0), {
                        scrollTop: s,
                        scrollHeight: n
                    } = i, o = rt(i), r = n - o.height;
                    let a = !1;
                    if (s === r) a = e - 1;
                    else {
                        for (let l = 0; l < t.length && !(C(t[l]).top - o.top - this.offset > 0); l++) a = +l;
                        a === !1 && this.overflow && (a = 0)
                    }
                    return {
                        active: a
                    }
                },
                write(t) {
                    let {
                        active: e
                    } = t;
                    const i = e !== !1 && !E(this.elements[e], this.cls);
                    this.links.forEach(s => s.blur());
                    for (let s = 0; s < this.elements.length; s++) H(this.elements[s], this.cls, +s === e);
                    i && g(this.$el, "active", [e, this.elements[e]])
                },
                events: ["scroll", "resize"]
            }]
        },
        Da = {
            mixins: [st, hi, wt, si],
            props: {
                position: String,
                top: null,
                bottom: null,
                start: null,
                end: null,
                offset: String,
                overflowFlip: Boolean,
                animation: String,
                clsActive: String,
                clsInactive: String,
                clsFixed: String,
                clsBelow: String,
                selTarget: String,
                showOnUp: Boolean,
                targetOffset: Number
            },
            data: {
                position: "top",
                top: !1,
                bottom: !1,
                start: !1,
                end: !1,
                offset: 0,
                overflowFlip: !1,
                animation: "",
                clsActive: "bdt-active",
                clsInactive: "",
                clsFixed: "bdt-sticky-fixed",
                clsBelow: "bdt-sticky-below",
                selTarget: "",
                showOnUp: !1,
                targetOffset: !1
            },
            computed: {
                selTarget(t, e) {
                    let {
                        selTarget: i
                    } = t;
                    return i && b(i, e) || e
                }
            },
            resizeTargets() {
                return document.documentElement
            },
            connected() {
                this.start = Tn(this.start || this.top), this.end = Tn(this.end || this.bottom), this.placeholder = b("+ .bdt-sticky-placeholder", this.$el) || b('<div class="bdt-sticky-placeholder"></div>'), this.isFixed = !1, this.setActive(!1)
            },
            disconnected() {
                this.isFixed && (this.hide(), O(this.selTarget, this.clsInactive)), ut(this.placeholder), this.placeholder = null
            },
            events: [{
                name: "resize",
                el() {
                    return window
                },
                handler() {
                    this.$emit("resize")
                }
            }, {
                name: "load hashchange popstate",
                el() {
                    return window
                },
                filter() {
                    return this.targetOffset !== !1
                },
                handler() {
                    const {
                        scrollingElement: t
                    } = document;
                    !location.hash || t.scrollTop === 0 || setTimeout(() => {
                        const e = C(b(location.hash)),
                            i = C(this.$el);
                        this.isFixed && Ti(e, i) && (t.scrollTop = e.top - i.height - K(this.targetOffset, "height", this.placeholder) - K(this.offset, "height", this.placeholder))
                    })
                }
            }],
            update: [{
                read(t, e) {
                    let {
                        height: i,
                        margin: s
                    } = t;
                    if (this.inactive = !this.matchMedia || !q(this.$el), this.inactive) return !1;
                    const n = this.active && e.has("resize");
                    n && (h(this.selTarget, "transition", "0s"), this.hide()), this.active || (i = C(this.$el).height, s = h(this.$el, "margin")), n && (this.show(), requestAnimationFrame(() => h(this.selTarget, "transition", "")));
                    const o = this.isFixed ? this.placeholder : this.$el,
                        r = J(window);
                    let a = this.position;
                    this.overflowFlip && i > r && (a = a === "top" ? "bottom" : "top");
                    let l = K(this.offset, "height", o);
                    a === "bottom" && (i < r || this.overflowFlip) && (l += r - i);
                    const c = this.overflowFlip ? 0 : Math.max(0, i + l - r),
                        u = C(o).top,
                        d = (this.start === !1 ? u : Sn(this.start, this.$el, u)) - l,
                        f = this.end === !1 ? document.scrollingElement.scrollHeight - r : Sn(this.end, this.$el, u + i, !0) - C(this.$el).height + c - l;
                    return {
                        start: d,
                        end: f,
                        offset: l,
                        overflow: c,
                        topOffset: u,
                        height: i,
                        margin: s,
                        width: y(o).width,
                        top: Ht(o)[0]
                    }
                },
                write(t) {
                    let {
                        height: e,
                        margin: i
                    } = t;
                    const {
                        placeholder: s
                    } = this;
                    h(s, {
                        height: e,
                        margin: i
                    }), _(s, document) || (Ye(this.$el, s), s.hidden = !0)
                },
                events: ["resize"]
            }, {
                read(t) {
                    let {
                        scroll: e = 0,
                        dir: i = "down",
                        overflow: s,
                        overflowScroll: n = 0,
                        start: o,
                        end: r
                    } = t;
                    const a = document.scrollingElement.scrollTop;
                    return {
                        dir: e <= a ? "down" : "up",
                        prevDir: i,
                        scroll: a,
                        prevScroll: e,
                        offsetParentTop: C((this.isFixed ? this.placeholder : this.$el).offsetParent).top,
                        overflowScroll: tt(n + tt(a, o, r) - tt(e, o, r), 0, s)
                    }
                },
                write(t, e) {
                    const i = e.has("scroll"),
                        {
                            initTimestamp: s = 0,
                            dir: n,
                            prevDir: o,
                            scroll: r,
                            prevScroll: a = 0,
                            top: l,
                            start: c,
                            topOffset: u,
                            height: d
                        } = t;
                    if (r < 0 || r === a && i || this.showOnUp && !i && !this.isFixed) return;
                    const f = Date.now();
                    if ((f - s > 300 || n !== o) && (t.initScroll = r, t.initTimestamp = f), !(this.showOnUp && !this.isFixed && Math.abs(t.initScroll - r) <= 30 && Math.abs(a - r) <= 10))
                        if (this.inactive || r < c || this.showOnUp && (r <= c || n === "down" && i || n === "up" && !this.isFixed && r <= u + d)) {
                            if (!this.isFixed) {
                                pt.inProgress(this.$el) && l > r && (pt.cancel(this.$el), this.hide());
                                return
                            }
                            this.isFixed = !1, this.animation && r > u ? (pt.cancel(this.$el), pt.out(this.$el, this.animation).then(() => this.hide(), T)) : this.hide()
                        } else this.isFixed ? this.update() : this.animation && r > u ? (pt.cancel(this.$el), this.show(), pt.in(this.$el, this.animation).catch(T)) : this.show()
                },
                events: ["resize", "scroll"]
            }],
            methods: {
                show() {
                    this.isFixed = !0, this.update(), this.placeholder.hidden = !1
                },
                hide() {
                    this.setActive(!1), O(this.$el, this.clsFixed, this.clsBelow), h(this.$el, {
                        position: "",
                        top: "",
                        width: ""
                    }), this.placeholder.hidden = !0
                },
                update() {
                    let {
                        width: t,
                        scroll: e = 0,
                        overflow: i,
                        overflowScroll: s = 0,
                        start: n,
                        end: o,
                        offset: r,
                        topOffset: a,
                        height: l,
                        offsetParentTop: c
                    } = this._data;
                    const u = n !== 0 || e > n;
                    let d = "fixed";
                    e > o && (r += o - c, d = "absolute"), i && (r -= s), h(this.$el, {
                        position: d,
                        top: r + "px",
                        width: t
                    }), this.setActive(u), H(this.$el, this.clsBelow, e > a + l), x(this.$el, this.clsFixed)
                },
                setActive(t) {
                    const e = this.active;
                    this.active = t, t ? (Mi(this.selTarget, this.clsInactive, this.clsActive), e !== t && g(this.$el, "active")) : (Mi(this.selTarget, this.clsActive, this.clsInactive), e !== t && g(this.$el, "inactive"))
                }
            }
        };

    function Sn(t, e, i, s) {
        if (!t) return 0;
        if (Dt(t) || B(t) && t.match(/^-?\d/)) return i + K(t, "height", e, !0); {
            const n = t === !0 ? A(e) : ht(t, e);
            return C(n).bottom - (s && n && _(e, n) ? w(h(n, "paddingBottom")) : 0)
        }
    }

    function Tn(t) {
        return t === "true" ? !0 : t === "false" ? !1 : t
    }
    var Cn = {
            mixins: [Te, xn, _t],
            args: "connect",
            props: {
                connect: String,
                toggle: String,
                itemNav: String,
                active: Number
            },
            data: {
                connect: "~.bdt-switcher",
                toggle: "> * > :first-child",
                itemNav: !1,
                active: 0,
                cls: "bdt-active",
                attrItem: "bdt-switcher-item"
            },
            computed: {
                connects: {
                    get(t, e) {
                        let {
                            connect: i
                        } = t;
                        return we(i, e)
                    },
                    watch(t) {
                        var e;
                        this.swiping && h(t, "touchAction", "pan-y pinch-zoom"), (e = this._observer) == null || e.disconnect(), this.registerObserver(this._observer = ji(t, i => {
                            const s = this.index();
                            for (const {
                                    target: n
                                } of i) D(n).forEach((o, r) => H(o, this.cls, r === s)), this.lazyload(this.$el, D(n))
                        }, {
                            childList: !0
                        }))
                    },
                    immediate: !0
                },
                toggles: {
                    get(t, e) {
                        let {
                            toggle: i
                        } = t;
                        return M(i, e).filter(s => !F(s, ".bdt-disabled *, .bdt-disabled, [disabled]"))
                    },
                    watch(t) {
                        const e = this.index();
                        this.show(~e ? e : t[this.active] || t[0])
                    },
                    immediate: !0
                },
                children() {
                    return D(this.$el).filter(t => this.toggles.some(e => _(e, t)))
                },
                swipeTarget() {
                    return this.connects
                }
            },
            connected() {
                zi(() => this.$emit())
            },
            events: [{
                name: "click",
                delegate() {
                    return this.toggle
                },
                handler(t) {
                    t.preventDefault(), this.show(t.current)
                }
            }, {
                name: "click",
                el() {
                    return this.connects.concat(this.itemNav ? we(this.itemNav, this.$el) : [])
                },
                delegate() {
                    return "[" + this.attrItem + "],[data-" + this.attrItem + "]"
                },
                handler(t) {
                    t.preventDefault(), this.show(ot(t.current, this.attrItem))
                }
            }, {
                name: "swipeRight swipeLeft",
                filter() {
                    return this.swiping
                },
                el() {
                    return this.connects
                },
                handler(t) {
                    let {
                        type: e
                    } = t;
                    this.show(Gt(e, "Left") ? "next" : "previous")
                }
            }],
            methods: {
                index() {
                    return bt(this.children, t => E(t, this.cls))
                },
                show(t) {
                    const e = this.index(),
                        i = Ut(t, this.toggles, e),
                        s = Ut(this.children[i], D(this.$el));
                    D(this.$el).forEach((o, r) => {
                        H(o, this.cls, s === r), v(this.toggles[r], "aria-expanded", s === r)
                    });
                    const n = e >= 0 && e !== i;
                    this.connects.forEach(async o => {
                        let {
                            children: r
                        } = o;
                        await this.toggleElement($(r).filter(a => E(a, this.cls)), !1, n), await this.toggleElement(r[s], !0, n)
                    })
                }
            }
        },
        Ma = {
            mixins: [st],
            extends: Cn,
            props: {
                media: Boolean
            },
            data: {
                media: 960,
                attrItem: "bdt-tab-item"
            },
            connected() {
                const t = E(this.$el, "bdt-tab-left") ? "bdt-tab-left" : E(this.$el, "bdt-tab-right") ? "bdt-tab-right" : !1;
                t && this.$create("toggle", this.$el, {
                    cls: t,
                    mode: "media",
                    media: this.media
                })
            }
        };
    const Na = 32;
    var za = {
            mixins: [Te, hi, _t],
            args: "target",
            props: {
                href: String,
                target: null,
                mode: "list",
                queued: Boolean
            },
            data: {
                href: !1,
                target: !1,
                mode: "click",
                queued: !0
            },
            computed: {
                target: {
                    get(t, e) {
                        let {
                            href: i,
                            target: s
                        } = t;
                        return s = we(s || i, e), s.length && s || [e]
                    },
                    watch() {
                        this.updateAria(), this.lazyload(this.$el, this.target)
                    },
                    immediate: !0
                }
            },
            connected() {
                !p(this.mode, "media") && !We(this.$el) && v(this.$el, "tabindex", "0"), zi(() => this.$emit())
            },
            events: [{
                name: gt,
                filter() {
                    return p(this.mode, "hover")
                },
                handler(t) {
                    this._preventClick = null, !(!kt(t) || this._showState) && (g(this.$el, "focus"), N(document, gt, () => g(this.$el, "blur"), !0, e => !_(e.target, this.$el)), p(this.mode, "click") && (this._preventClick = !0))
                }
            }, {
                name: jt + " " + oe + " focus blur",
                filter() {
                    return p(this.mode, "hover")
                },
                handler(t) {
                    if (kt(t)) return;
                    const e = p([jt, "focus"], t.type),
                        i = v(this.$el, "aria-expanded");
                    if (!(!e && (t.type === oe && F(this.$el, ":focus") || t.type === "blur" && F(this.$el, ":hover")))) {
                        if (this._showState && e && i !== this._showState) {
                            e || (this._showState = null);
                            return
                        }
                        this._showState = e ? i : null, this.toggle("toggle" + (e ? "show" : "hide"))
                    }
                }
            }, {
                name: "keydown",
                filter() {
                    return p(this.mode, "click") && !ct(this.$el, "input")
                },
                handler(t) {
                    t.keyCode === Na && (t.preventDefault(), this.$el.click())
                }
            }, {
                name: "click",
                filter() {
                    return ["click", "hover"].some(t => p(this.mode, t))
                },
                handler(t) {
                    let e;
                    (this._preventClick || et(t.target, 'a[href="#"], a[href=""]') || (e = et(t.target, "a[href]")) && (v(this.$el, "aria-expanded") !== "true" || e.hash && F(this.target, e.hash))) && t.preventDefault(), !this._preventClick && p(this.mode, "click") && this.toggle()
                }
            }, {
                name: "hide show",
                self: !0,
                el() {
                    return this.target
                },
                handler(t) {
                    let {
                        target: e,
                        type: i
                    } = t;
                    this.updateAria(e === this.target[0] && i === "show")
                }
            }, {
                name: "mediachange",
                filter() {
                    return p(this.mode, "media")
                },
                el() {
                    return this.target
                },
                handler(t, e) {
                    e.matches ^ this.isToggled(this.target) && this.toggle()
                }
            }],
            methods: {
                async toggle(t) {
                    if (!g(this.target, t || "toggle", [this])) return;
                    if (!this.queued) return this.toggleElement(this.target);
                    const e = this.target.filter(s => E(s, this.clsLeave));
                    if (e.length) {
                        for (const s of this.target) {
                            const n = p(e, s);
                            this.toggleElement(s, n, n)
                        }
                        return
                    }
                    const i = this.target.filter(this.isToggled);
                    await this.toggleElement(i, !1), await this.toggleElement(this.target.filter(s => !p(i, s)), !0)
                },
                updateAria(t) {
                    p(this.mode, "media") || v(this.$el, "aria-expanded", Me(t) ? t : this.isToggled(this.target))
                }
            }
        },
        Fa = Object.freeze({
            __proto__: null,
            Accordion: Ks,
            Alert: mr,
            Cover: wr,
            Drop: nn,
            Dropdown: nn,
            FormCustom: kr,
            Grid: Tr,
            HeightMatch: Ar,
            HeightViewport: Or,
            Icon: es,
            Img: ca,
            Leader: wa,
            Margin: on,
            Modal: ba,
            Nav: ya,
            Navbar: $a,
            Offcanvas: Sa,
            OverflowAuto: Ia,
            Responsive: Pa,
            Scroll: Aa,
            Scrollspy: Oa,
            ScrollspyNav: Ba,
            Sticky: Da,
            Svg: cn,
            Switcher: Cn,
            Tab: Ma,
            Toggle: za,
            Video: Zs,
            Close: na,
            Spinner: oa,
            NavParentIcon: ia,
            SlidenavNext: mn,
            SlidenavPrevious: mn,
            SearchIcon: sa,
            Marker: dt,
            NavbarParentIcon: dt,
            NavbarToggleIcon: dt,
            OverlayIcon: dt,
            PaginationNext: dt,
            PaginationPrevious: dt,
            Totop: dt
        });
    $t(Fa, (t, e) => it.component(e, t)), cr(it)
    const ss = "bdt-transition-leave",
        ns = "bdt-transition-enter";

    function In(t, e, i, s) {
        s === void 0 && (s = 0);
        const n = ci(e, !0),
            o = {
                opacity: 1
            },
            r = {
                opacity: 0
            },
            a = u => () => n === ci(e) ? u() : Promise.reject(),
            l = a(async () => {
                x(e, ss), await Promise.all(An(e).map((u, d) => new Promise(f => setTimeout(() => S.start(u, r, i / 2, "ease").then(f), d * s)))), O(e, ss)
            }),
            c = a(async () => {
                const u = J(e);
                x(e, ns), t(), h(D(e), {
                    opacity: 0
                }), await Ra();
                const d = D(e),
                    f = J(e);
                h(e, "alignContent", "flex-start"), J(e, u);
                const m = An(e);
                h(d, r);
                const I = m.map(async (P, W) => {
                    await ja(W * s), await S.start(P, o, i / 2, "ease")
                });
                u !== f && I.push(S.start(e, {
                    height: f
                }, i / 2 + m.length * s, "ease")), await Promise.all(I).then(() => {
                    O(e, ns), n === ci(e) && (h(e, {
                        height: "",
                        alignContent: ""
                    }), h(d, {
                        opacity: ""
                    }), delete e.dataset.transition)
                })
            });
        return E(e, ss) ? Pn(e).then(c) : E(e, ns) ? Pn(e).then(l).then(c) : l().then(c)
    }

    function ci(t, e) {
        return e && (t.dataset.transition = 1 + ci(t)), Ct(t.dataset.transition) || 0
    }

    function Pn(t) {
        return Promise.all(D(t).filter(S.inProgress).map(e => new Promise(i => N(e, "transitionend transitioncanceled", i))))
    }

    function An(t) {
        return ts(D(t)).reduce((e, i) => e.concat(Ne(i.filter(s => Xi(s)), "offsetLeft")), [])
    }

    function Ra() {
        return new Promise(t => requestAnimationFrame(t))
    }

    function ja(t) {
        return new Promise(e => setTimeout(e, t))
    }
    async function qa(t, e, i) {
        await On();
        let s = D(e);
        const n = s.map(f => En(f, !0)),
            o = {
                ...h(e, ["height", "padding"]),
                display: "block"
            };
        await Promise.all(s.concat(e).map(S.cancel)), t(), s = s.concat(D(e).filter(f => !p(s, f))), await Promise.resolve(), G.flush();
        const r = v(e, "style"),
            a = h(e, ["height", "padding"]),
            [l, c] = Ya(e, s, n),
            u = s.map(f => ({
                class: v(f, "class"),
                style: v(f, "style")
            }));
        s.forEach((f, m) => c[m] && h(f, c[m])), h(e, o), await On();
        const d = s.map((f, m) => A(f) === e && S.start(f, l[m], i, "ease")).concat(S.start(e, a, i, "ease"));
        try {
            await Promise.all(d), s.forEach((f, m) => {
                v(f, u[m]), A(f) === e && h(f, "display", l[m].opacity === 0 ? "none" : "")
            }), v(e, "style", r)
        } catch {
            v(s, "style", ""), Va(e, o)
        }
    }

    function En(t, e) {
        const i = h(t, "zIndex");
        return q(t) ? {
            display: "",
            opacity: e ? h(t, "opacity") : "0",
            pointerEvents: "none",
            position: "absolute",
            zIndex: i === "auto" ? ee(t) : i,
            ..._n(t)
        } : !1
    }

    function Ya(t, e, i) {
        const s = e.map((o, r) => A(o) && r in i ? i[r] ? q(o) ? _n(o) : {
                opacity: 0
            } : {
                opacity: q(o) ? 1 : 0
            } : !1),
            n = s.map((o, r) => {
                const a = A(e[r]) === t && (i[r] || En(e[r]));
                if (!a) return !1;
                if (!o) delete a.opacity;
                else if (!("opacity" in o)) {
                    const {
                        opacity: l
                    } = a;
                    l % 1 ? o.opacity = 1 : delete a.opacity
                }
                return a
            });
        return [s, n]
    }

    function Va(t, e) {
        for (const i in e) h(t, i, "")
    }

    function _n(t) {
        const {
            height: e,
            width: i
        } = C(t);
        return {
            height: e,
            width: i,
            transform: "",
            ...je(t),
            ...h(t, ["marginTop", "marginLeft"])
        }
    }

    function On() {
        return new Promise(t => requestAnimationFrame(t))
    }
    var Bn = {
            props: {
                duration: Number,
                animation: Boolean
            },
            data: {
                duration: 150,
                animation: "slide"
            },
            methods: {
                animate(t, e) {
                    e === void 0 && (e = this.$el);
                    const i = this.animation;
                    return (i === "fade" ? In : i === "delayed-fade" ? function () {
                        for (var n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                        return In(...o, 40)
                    } : i ? qa : () => (t(), Promise.resolve()))(t, e, this.duration).catch(T)
                }
            }
        },
        Xa = {
            mixins: [Bn],
            args: "target",
            props: {
                target: Boolean,
                selActive: Boolean
            },
            data: {
                target: null,
                selActive: !1,
                attrItem: "bdt-filter-control",
                cls: "bdt-active",
                duration: 250
            },
            computed: {
                toggles: {
                    get(t, e) {
                        let {
                            attrItem: i
                        } = t;
                        return M("[" + i + "],[data-" + i + "]", e)
                    },
                    watch() {
                        if (this.updateState(), this.selActive !== !1) {
                            const t = M(this.selActive, this.$el);
                            this.toggles.forEach(e => H(e, this.cls, p(t, e)))
                        }
                    },
                    immediate: !0
                },
                children: {
                    get(t, e) {
                        let {
                            target: i
                        } = t;
                        return M(i + " > *", e)
                    },
                    watch(t, e) {
                        e && !Za(t, e) && this.updateState()
                    },
                    immediate: !0
                }
            },
            events: [{
                name: "click",
                delegate() {
                    return "[" + this.attrItem + "],[data-" + this.attrItem + "]"
                },
                handler(t) {
                    t.preventDefault(), this.apply(t.current)
                }
            }],
            methods: {
                apply(t) {
                    const e = this.getState(),
                        i = Mn(t, this.attrItem, this.getState());
                    Ga(e, i) || this.setState(i)
                },
                getState() {
                    return this.toggles.filter(t => E(t, this.cls)).reduce((t, e) => Mn(e, this.attrItem, t), {
                        filter: {
                            "": ""
                        },
                        sort: []
                    })
                },
                async setState(t, e) {
                    e === void 0 && (e = !0), t = {
                        filter: {
                            "": ""
                        },
                        sort: [],
                        ...t
                    }, g(this.$el, "beforeFilter", [this, t]), this.toggles.forEach(i => H(i, this.cls, !!Ka(i, this.attrItem, t))), await Promise.all(M(this.target, this.$el).map(i => {
                        const s = () => {
                            Ja(t, i, D(i)), this.$update(this.$el)
                        };
                        return e ? this.animate(s, i) : s()
                    })), g(this.$el, "afterFilter", [this])
                },
                updateState() {
                    G.write(() => this.setState(this.getState(), !1))
                }
            }
        };

    function Dn(t, e) {
        return Se(ot(t, e), ["filter"])
    }

    function Ga(t, e) {
        return ["filter", "sort"].every(i => ge(t[i], e[i]))
    }

    function Ja(t, e, i) {
        const s = Qa(t);
        i.forEach(r => h(r, "display", s && !F(r, s) ? "none" : ""));
        const [n, o] = t.sort;
        if (n) {
            const r = Ua(i, n, o);
            ge(r, i) || L(e, r)
        }
    }

    function Mn(t, e, i) {
        const {
            filter: s,
            group: n,
            sort: o,
            order: r = "asc"
        } = Dn(t, e);
        return (s || R(o)) && (n ? s ? (delete i.filter[""], i.filter[n] = s) : (delete i.filter[n], (pe(i.filter) || "" in i.filter) && (i.filter = {
            "": s || ""
        })) : i.filter = {
            "": s || ""
        }), R(o) || (i.sort = [o, r]), i
    }

    function Ka(t, e, i) {
        let {
            filter: s = {
                "": ""
            },
            sort: [n, o]
        } = i;
        const {
            filter: r = "",
            group: a = "",
            sort: l,
            order: c = "asc"
        } = Dn(t, e);
        return R(l) ? a in s && r === s[a] || !r && a && !(a in s) && !s[""] : n === l && o === c
    }

    function Za(t, e) {
        return t.length === e.length && t.every(i => e.includes(i))
    }

    function Qa(t) {
        let {
            filter: e
        } = t, i = "";
        return $t(e, s => i += s || ""), i
    }

    function Ua(t, e, i) {
        return [...t].sort((s, n) => ot(s, e).localeCompare(ot(n, e), void 0, {
            numeric: !0
        }) * (i === "asc" || -1))
    }
    var os = {
        slide: {
            show(t) {
                return [{
                    transform: z(t * -100)
                }, {
                    transform: z()
                }]
            },
            percent(t) {
                return Pe(t)
            },
            translate(t, e) {
                return [{
                    transform: z(e * -100 * t)
                }, {
                    transform: z(e * 100 * (1 - t))
                }]
            }
        }
    };

    function Pe(t) {
        return Math.abs(h(t, "transform").split(",")[4] / t.offsetWidth) || 0
    }

    function z(t, e) {
        return t === void 0 && (t = 0), e === void 0 && (e = "%"), t += t ? e : "", "translate3d(" + t + ", 0, 0)"
    }

    function he(t) {
        return "scale3d(" + t + ", " + t + ", 1)"
    }
    var Nn = {
        ...os,
        fade: {
            show() {
                return [{
                    opacity: 0
                }, {
                    opacity: 1
                }]
            },
            percent(t) {
                return 1 - h(t, "opacity")
            },
            translate(t) {
                return [{
                    opacity: 1 - t
                }, {
                    opacity: t
                }]
            }
        },
        scale: {
            show() {
                return [{
                    opacity: 0,
                    transform: he(1 - .2)
                }, {
                    opacity: 1,
                    transform: he(1)
                }]
            },
            percent(t) {
                return 1 - h(t, "opacity")
            },
            translate(t) {
                return [{
                    opacity: 1 - t,
                    transform: he(1 - .2 * t)
                }, {
                    opacity: t,
                    transform: he(1 - .2 + .2 * t)
                }]
            }
        }
    };

    function tl(t, e, i, s) {
        let {
            animation: n,
            easing: o
        } = s;
        const {
            percent: r,
            translate: a,
            show: l = T
        } = n, c = l(i), u = new He;
        return {
            dir: i,
            show(d, f, m) {
                f === void 0 && (f = 0);
                const I = m ? "linear" : o;
                return d -= Math.round(d * tt(f, -1, 1)), this.translate(f), ui(e, "itemin", {
                    percent: f,
                    duration: d,
                    timing: I,
                    dir: i
                }), ui(t, "itemout", {
                    percent: 1 - f,
                    duration: d,
                    timing: I,
                    dir: i
                }), Promise.all([S.start(e, c[1], d, I), S.start(t, c[0], d, I)]).then(() => {
                    this.reset(), u.resolve()
                }, T), u.promise
            },
            cancel() {
                S.cancel([e, t])
            },
            reset() {
                for (const d in c[0]) h([e, t], d, "")
            },
            forward(d, f) {
                return f === void 0 && (f = this.percent()), S.cancel([e, t]), this.show(d, f, !0)
            },
            translate(d) {
                this.reset();
                const f = a(d, i);
                h(e, f[1]), h(t, f[0]), ui(e, "itemtranslatein", {
                    percent: d,
                    dir: i
                }), ui(t, "itemtranslateout", {
                    percent: 1 - d,
                    dir: i
                })
            },
            percent() {
                return r(t || e, e, i)
            },
            getDistance() {
                return t == null ? void 0 : t.offsetWidth
            }
        }
    }

    function ui(t, e, i) {
        g(t, zt(e, !1, !1, i))
    }
    var el = {
        props: {
            autoplay: Boolean,
            autoplayInterval: Number,
            pauseOnHover: Boolean
        },
        data: {
            autoplay: !1,
            autoplayInterval: 7e3,
            pauseOnHover: !0
        },
        connected() {
            this.autoplay && this.startAutoplay()
        },
        disconnected() {
            this.stopAutoplay()
        },
        update() {
            v(this.slides, "tabindex", "-1")
        },
        events: [{
            name: "visibilitychange",
            el() {
                return document
            },
            filter() {
                return this.autoplay
            },
            handler() {
                document.hidden ? this.stopAutoplay() : this.startAutoplay()
            }
        }],
        methods: {
            startAutoplay() {
                this.stopAutoplay(), this.interval = setInterval(() => (!this.draggable || !b(":focus", this.$el)) && (!this.pauseOnHover || !F(this.$el, ":hover")) && !this.stack.length && this.show("next"), this.autoplayInterval)
            },
            stopAutoplay() {
                this.interval && clearInterval(this.interval)
            }
        }
    };
    const rs = {
            passive: !1,
            capture: !0
        },
        zn = {
            passive: !0,
            capture: !0
        },
        il = "touchstart mousedown",
        as = "touchmove mousemove",
        Fn = "touchend touchcancel mouseup click input scroll";
    var sl = {
        props: {
            draggable: Boolean
        },
        data: {
            draggable: !0,
            threshold: 10
        },
        created() {
            for (const t of ["start", "move", "end"]) {
                const e = this[t];
                this[t] = i => {
                    const s = ie(i).x * (X ? -1 : 1);
                    this.prevPos = s === this.pos ? this.prevPos : this.pos, this.pos = s, e(i)
                }
            }
        },
        events: [{
            name: il,
            passive: !0,
            delegate() {
                return this.selSlides
            },
            handler(t) {
                !this.draggable || !kt(t) && nl(t.target) || et(t.target, ve) || t.button > 0 || this.length < 2 || this.start(t)
            }
        }, {
            name: "dragstart",
            handler(t) {
                t.preventDefault()
            }
        }, {
            name: as,
            el() {
                return this.list
            },
            handler: T,
            ...rs
        }],
        methods: {
            start() {
                this.drag = this.pos, this._transitioner ? (this.percent = this._transitioner.percent(), this.drag += this._transitioner.getDistance() * this.percent * this.dir, this._transitioner.cancel(), this._transitioner.translate(this.percent), this.dragging = !0, this.stack = []) : this.prevIndex = this.index, k(document, as, this.move, rs), k(document, Fn, this.end, zn), h(this.list, "userSelect", "none")
            },
            move(t) {
                const e = this.pos - this.drag;
                if (e === 0 || this.prevPos === this.pos || !this.dragging && Math.abs(e) < this.threshold) return;
                h(this.list, "pointerEvents", "none"), t.cancelable && t.preventDefault(), this.dragging = !0, this.dir = e < 0 ? 1 : -1;
                const {
                    slides: i
                } = this;
                let {
                    prevIndex: s
                } = this, n = Math.abs(e), o = this.getIndex(s + this.dir, s), r = this._getDistance(s, o) || i[s].offsetWidth;
                for (; o !== s && n > r;) this.drag -= r * this.dir, s = o, n -= r, o = this.getIndex(s + this.dir, s), r = this._getDistance(s, o) || i[s].offsetWidth;
                this.percent = n / r;
                const a = i[s],
                    l = i[o],
                    c = this.index !== o,
                    u = s === o;
                let d;
                [this.index, this.prevIndex].filter(f => !p([o, s], f)).forEach(f => {
                    g(i[f], "itemhidden", [this]), u && (d = !0, this.prevIndex = s)
                }), (this.index === s && this.prevIndex !== s || d) && g(i[this.index], "itemshown", [this]), c && (this.prevIndex = s, this.index = o, !u && g(a, "beforeitemhide", [this]), g(l, "beforeitemshow", [this])), this._transitioner = this._translate(Math.abs(this.percent), a, !u && l), c && (!u && g(a, "itemhide", [this]), g(l, "itemshow", [this]))
            },
            end() {
                if (Nt(document, as, this.move, rs), Nt(document, Fn, this.end, zn), this.dragging)
                    if (this.dragging = null, this.index === this.prevIndex) this.percent = 1 - this.percent, this.dir *= -1, this._show(!1, this.index, !0), this._transitioner = null;
                    else {
                        const t = (X ? this.dir * (X ? 1 : -1) : this.dir) < 0 == this.prevPos > this.pos;
                        this.index = t ? this.index : this.prevIndex, t && (this.percent = 1 - this.percent), this.show(this.dir > 0 && !t || this.dir < 0 && t ? "next" : "previous", !0)
                    } h(this.list, {
                    userSelect: "",
                    pointerEvents: ""
                }), this.drag = this.percent = null
            }
        }
    };

    function nl(t) {
        return h(t, "userSelect") !== "none" && $(t.childNodes).some(e => e.nodeType === 3 && e.textContent.trim())
    }
    var ol = {
            data: {
                selNav: !1
            },
            computed: {
                nav(t, e) {
                    let {
                        selNav: i
                    } = t;
                    return b(i, e)
                },
                selNavItem(t) {
                    let {
                        attrItem: e
                    } = t;
                    return "[" + e + "],[data-" + e + "]"
                },
                navItems(t, e) {
                    return M(this.selNavItem, e)
                }
            },
            update: {
                write() {
                    this.nav && this.length !== this.nav.children.length && Pt(this.nav, this.slides.map((t, e) => "<li " + this.attrItem + '="' + e + '"><a href></a></li>').join("")), this.navItems.concat(this.nav).forEach(t => t && (t.hidden = !this.maxIndex)), this.updateNav()
                },
                events: ["resize"]
            },
            events: [{
                name: "click",
                delegate() {
                    return this.selNavItem
                },
                handler(t) {
                    t.preventDefault(), this.show(ot(t.current, this.attrItem))
                }
            }, {
                name: "itemshow",
                handler: "updateNav"
            }],
            methods: {
                updateNav() {
                    const t = this.getValidIndex();
                    for (const e of this.navItems) {
                        const i = ot(e, this.attrItem);
                        H(e, this.clsActive, Ct(i) === t), H(e, "bdt-invisible", this.finite && (i === "previous" && t === 0 || i === "next" && t >= this.maxIndex))
                    }
                }
            }
        },
        Hn = {
            mixins: [el, sl, ol, wt],
            props: {
                clsActivated: Boolean,
                easing: String,
                index: Number,
                finite: Boolean,
                velocity: Number,
                selSlides: String
            },
            data: () => ({
                easing: "ease",
                finite: !1,
                velocity: 1,
                index: 0,
                prevIndex: -1,
                stack: [],
                percent: 0,
                clsActive: "bdt-active",
                clsActivated: !1,
                Transitioner: !1,
                transitionOptions: {}
            }),
            connected() {
                this.prevIndex = -1, this.index = this.getValidIndex(this.$props.index), this.stack = []
            },
            disconnected() {
                O(this.slides, this.clsActive)
            },
            computed: {
                duration(t, e) {
                    let {
                        velocity: i
                    } = t;
                    return Ln(e.offsetWidth / i)
                },
                list(t, e) {
                    let {
                        selList: i
                    } = t;
                    return b(i, e)
                },
                maxIndex() {
                    return this.length - 1
                },
                selSlides(t) {
                    let {
                        selList: e,
                        selSlides: i
                    } = t;
                    return e + " " + (i || "> *")
                },
                slides: {
                    get() {
                        return M(this.selSlides, this.$el)
                    },
                    watch() {
                        this.$emit("resize")
                    }
                },
                length() {
                    return this.slides.length
                }
            },
            methods: {
                show(t, e) {
                    if (e === void 0 && (e = !1), this.dragging || !this.length) return;
                    const {
                        stack: i
                    } = this, s = e ? 0 : i.length, n = () => {
                        i.splice(s, 1), i.length && this.show(i.shift(), !0)
                    };
                    if (i[e ? "unshift" : "push"](t), !e && i.length > 1) {
                        i.length === 2 && this._transitioner.forward(Math.min(this.duration, 200));
                        return
                    }
                    const o = this.getIndex(this.index),
                        r = E(this.slides, this.clsActive) && this.slides[o],
                        a = this.getIndex(t, this.index),
                        l = this.slides[a];
                    if (r === l) {
                        n();
                        return
                    }
                    if (this.dir = rl(t, o), this.prevIndex = o, this.index = a, r && !g(r, "beforeitemhide", [this]) || !g(l, "beforeitemshow", [this, r])) {
                        this.index = this.prevIndex, n();
                        return
                    }
                    const c = this._show(r, l, e).then(() => (r && g(r, "itemhidden", [this]), g(l, "itemshown", [this]), new Promise(u => {
                        requestAnimationFrame(() => {
                            i.shift(), i.length ? this.show(i.shift(), !0) : this._transitioner = null, u()
                        })
                    })));
                    return r && g(r, "itemhide", [this]), g(l, "itemshow", [this]), c
                },
                getIndex(t, e) {
                    return t === void 0 && (t = this.index), e === void 0 && (e = this.index), tt(Ut(t, this.slides, e, this.finite), 0, this.maxIndex)
                },
                getValidIndex(t, e) {
                    return t === void 0 && (t = this.index), e === void 0 && (e = this.prevIndex), this.getIndex(t, e)
                },
                _show(t, e, i) {
                    if (this._transitioner = this._getTransitioner(t, e, this.dir, {
                            easing: i ? e.offsetWidth < 600 ? "cubic-bezier(0.25, 0.46, 0.45, 0.94)" : "cubic-bezier(0.165, 0.84, 0.44, 1)" : this.easing,
                            ...this.transitionOptions
                        }), !i && !t) return this._translate(1), Promise.resolve();
                    const {
                        length: s
                    } = this.stack;
                    return this._transitioner[s > 1 ? "forward" : "show"](s > 1 ? Math.min(this.duration, 75 + 75 / (s - 1)) : this.duration, this.percent)
                },
                _getDistance(t, e) {
                    return this._getTransitioner(t, t !== e && e).getDistance()
                },
                _translate(t, e, i) {
                    e === void 0 && (e = this.prevIndex), i === void 0 && (i = this.index);
                    const s = this._getTransitioner(e !== i ? e : !1, i);
                    return s.translate(t), s
                },
                _getTransitioner(t, e, i, s) {
                    return t === void 0 && (t = this.prevIndex), e === void 0 && (e = this.index), i === void 0 && (i = this.dir || 1), s === void 0 && (s = this.transitionOptions), new this.Transitioner(Zt(t) ? this.slides[t] : t, Zt(e) ? this.slides[e] : e, i * (X ? -1 : 1), s)
                }
            }
        };

    function rl(t, e) {
        return t === "next" ? 1 : t === "previous" || t < e ? -1 : 1
    }

    function Ln(t) {
        return .5 * t + 300
    }
    var Wn = {
            mixins: [Hn],
            props: {
                animation: String
            },
            data: {
                animation: "slide",
                clsActivated: "bdt-transition-active",
                Animations: os,
                Transitioner: tl
            },
            computed: {
                animation(t) {
                    let {
                        animation: e,
                        Animations: i
                    } = t;
                    return {
                        ...i[e] || i.slide,
                        name: e
                    }
                },
                transitionOptions() {
                    return {
                        animation: this.animation
                    }
                }
            },
            events: {
                beforeitemshow(t) {
                    let {
                        target: e
                    } = t;
                    x(e, this.clsActive)
                },
                itemshown(t) {
                    let {
                        target: e
                    } = t;
                    x(e, this.clsActivated)
                },
                itemhidden(t) {
                    let {
                        target: e
                    } = t;
                    O(e, this.clsActive, this.clsActivated)
                }
            }
        },
        Rn = {
            mixins: [le, Zi, _t, Wn],
            functional: !0,
            props: {
                delayControls: Number,
                preload: Number,
                videoAutoplay: Boolean,
                template: String
            },
            data: () => ({
                preload: 1,
                videoAutoplay: !1,
                delayControls: 3e3,
                items: [],
                cls: "bdt-open",
                clsPage: "bdt-lightbox-page",
                selList: ".bdt-lightbox-items",
                attrItem: "bdt-lightbox-item",
                selClose: ".bdt-close-large",
                selCaption: ".bdt-lightbox-caption",
                pauseOnHover: !1,
                velocity: 2,
                Animations: Nn,
                template: '<div class="bdt-lightbox bdt-overflow-hidden"> <ul class="bdt-lightbox-items"></ul> <div class="bdt-lightbox-toolbar bdt-position-top bdt-text-right bdt-transition-slide-top bdt-transition-opaque"> <button class="bdt-lightbox-toolbar-icon bdt-close-large" type="button" bdt-close></button> </div> <a class="bdt-lightbox-button bdt-position-center-left bdt-position-medium bdt-transition-fade" href bdt-slidenav-previous bdt-lightbox-item="previous"></a> <a class="bdt-lightbox-button bdt-position-center-right bdt-position-medium bdt-transition-fade" href bdt-slidenav-next bdt-lightbox-item="next"></a> <div class="bdt-lightbox-toolbar bdt-lightbox-caption bdt-position-bottom bdt-text-center bdt-transition-slide-bottom bdt-transition-opaque"></div> </div>'
            }),
            created() {
                const t = b(this.template),
                    e = b(this.selList, t);
                this.items.forEach(() => L(e, "<li>")), this.$mount(L(this.container, t))
            },
            computed: {
                caption(t, e) {
                    let {
                        selCaption: i
                    } = t;
                    return b(i, e)
                }
            },
            events: [{
                name: Ge + " " + gt + " keydown",
                handler: "showControls"
            }, {
                name: "click",
                self: !0,
                delegate() {
                    return this.selSlides
                },
                handler(t) {
                    t.defaultPrevented || this.hide()
                }
            }, {
                name: "shown",
                self: !0,
                handler() {
                    this.showControls()
                }
            }, {
                name: "hide",
                self: !0,
                handler() {
                    this.hideControls(), O(this.slides, this.clsActive), S.stop(this.slides)
                }
            }, {
                name: "hidden",
                self: !0,
                handler() {
                    this.$destroy(!0)
                }
            }, {
                name: "keyup",
                el() {
                    return document
                },
                handler(t) {
                    if (!(!this.isToggled(this.$el) || !this.draggable)) switch (t.keyCode) {
                        case 37:
                            this.show("previous");
                            break;
                        case 39:
                            this.show("next");
                            break
                    }
                }
            }, {
                name: "beforeitemshow",
                handler(t) {
                    this.isToggled() || (this.draggable = !1, t.preventDefault(), this.toggleElement(this.$el, !0, !1), this.animation = Nn.scale, O(t.target, this.clsActive), this.stack.splice(1, 0, this.index))
                }
            }, {
                name: "itemshow",
                handler() {
                    Pt(this.caption, this.getItem().caption || "");
                    for (let t = -this.preload; t <= this.preload; t++) this.loadItem(this.index + t)
                }
            }, {
                name: "itemshown",
                handler() {
                    this.draggable = this.$props.draggable
                }
            }, {
                name: "itemload",
                async handler(t, e) {
                    const {
                        source: i,
                        type: s,
                        alt: n = "",
                        poster: o,
                        attrs: r = {}
                    } = e;
                    if (this.setItem(e, "<span bdt-spinner></span>"), !i) return;
                    let a;
                    const l = {
                        allowfullscreen: "",
                        style: "max-width: 100%; box-sizing: border-box;",
                        "bdt-responsive": "",
                        "bdt-video": "" + this.videoAutoplay
                    };
                    if (s === "image" || i.match(/\.(avif|jpe?g|jfif|a?png|gif|svg|webp)($|\?)/i)) try {
                        const {
                            width: c,
                            height: u
                        } = await ys(i, r.srcset, r.size);
                        this.setItem(e, Ae("img", {
                            src: i,
                            width: c,
                            height: u,
                            alt: n,
                            ...r
                        }))
                    } catch {
                        this.setError(e)
                    } else if (s === "video" || i.match(/\.(mp4|webm|ogv)($|\?)/i)) {
                        const c = Ae("video", {
                            src: i,
                            poster: o,
                            controls: "",
                            playsinline: "",
                            "bdt-video": "" + this.videoAutoplay,
                            ...r
                        });
                        k(c, "loadedmetadata", () => {
                            v(c, {
                                width: c.videoWidth,
                                height: c.videoHeight
                            }), this.setItem(e, c)
                        }), k(c, "error", () => this.setError(e))
                    } else if (s === "iframe" || i.match(/\.(html|php)($|\?)/i)) this.setItem(e, Ae("iframe", {
                        src: i,
                        allowfullscreen: "",
                        class: "bdt-lightbox-iframe",
                        ...r
                    }));
                    else if (a = i.match(/\/\/(?:.*?youtube(-nocookie)?\..*?[?&]v=|youtu\.be\/)([\w-]{11})[&?]?(.*)?/)) this.setItem(e, Ae("iframe", {
                        src: "https://www.youtube" + (a[1] || "") + ".com/embed/" + a[2] + (a[3] ? "?" + a[3] : ""),
                        width: 1920,
                        height: 1080,
                        ...l,
                        ...r
                    }));
                    else if (a = i.match(/\/\/.*?vimeo\.[a-z]+\/(\d+)[&?]?(.*)?/)) try {
                        const {
                            height: c,
                            width: u
                        } = await (await fetch("https://vimeo.com/api/oembed.json?maxwidth=1920&url=" + encodeURI(i), {
                            credentials: "omit"
                        })).json();
                        this.setItem(e, Ae("iframe", {
                            src: "https://player.vimeo.com/video/" + a[1] + (a[2] ? "?" + a[2] : ""),
                            width: u,
                            height: c,
                            ...l,
                            ...r
                        }))
                    } catch {
                        this.setError(e)
                    }
                }
            }],
            methods: {
                loadItem(t) {
                    t === void 0 && (t = this.index);
                    const e = this.getItem(t);
                    this.getSlide(e).childElementCount || g(this.$el, "itemload", [e])
                },
                getItem(t) {
                    return t === void 0 && (t = this.index), this.items[Ut(t, this.slides)]
                },
                setItem(t, e) {
                    g(this.$el, "itemloaded", [this, Pt(this.getSlide(t), e)])
                },
                getSlide(t) {
                    return this.slides[this.items.indexOf(t)]
                },
                setError(t) {
                    this.setItem(t, '<span bdt-icon="icon: bolt; ratio: 2"></span>')
                },
                showControls() {
                    clearTimeout(this.controlsTimer), this.controlsTimer = setTimeout(this.hideControls, this.delayControls), x(this.$el, "bdt-active", "bdt-transition-active")
                },
                hideControls() {
                    O(this.$el, "bdt-active", "bdt-transition-active")
                }
            }
        };

    function Ae(t, e) {
        const i = Lt("<" + t + ">");
        return v(i, e), i
    }
    var al = {
        install: ll,
        props: {
            toggle: String
        },
        data: {
            toggle: "a"
        },
        computed: {
            toggles: {
                get(t, e) {
                    let {
                        toggle: i
                    } = t;
                    return M(i, e)
                },
                watch() {
                    this.hide()
                }
            }
        },
        disconnected() {
            this.hide()
        },
        events: [{
            name: "click",
            delegate() {
                return this.toggle + ":not(.bdt-disabled)"
            },
            handler(t) {
                t.preventDefault(), this.show(t.current)
            }
        }],
        methods: {
            show(t) {
                const e = ps(this.toggles.map(jn), "source");
                if (Kt(t)) {
                    const {
                        source: i
                    } = jn(t);
                    t = bt(e, s => {
                        let {
                            source: n
                        } = s;
                        return i === n
                    })
                }
                return this.panel = this.panel || this.$create("lightboxPanel", {
                    ...this.$props,
                    items: e
                }), k(this.panel.$el, "hidden", () => this.panel = !1), this.panel.show(t)
            },
            hide() {
                var t;
                return (t = this.panel) == null ? void 0 : t.hide()
            }
        }
    };

    function ll(t, e) {
        t.lightboxPanel || t.component("lightboxPanel", Rn), xt(e.props, t.component("lightboxPanel").options.props)
    }

    function jn(t) {
        const e = {};
        for (const i of ["href", "caption", "type", "poster", "alt", "attrs"]) e[i === "href" ? "source" : i] = ot(t, i);
        return e.attrs = Se(e.attrs), e
    }
    var hl = {
        mixins: [le],
        functional: !0,
        args: ["message", "status"],
        data: {
            message: "",
            status: "",
            timeout: 5e3,
            group: null,
            pos: "top-center",
            clsContainer: "bdt-notification",
            clsClose: "bdt-notification-close",
            clsMsg: "bdt-notification-message"
        },
        install: cl,
        computed: {
            marginProp(t) {
                let {
                    pos: e
                } = t;
                return "margin" + (lt(e, "top") ? "Top" : "Bottom")
            },
            startProps() {
                return {
                    opacity: 0,
                    [this.marginProp]: -this.$el.offsetHeight
                }
            }
        },
        created() {
            const t = b("." + this.clsContainer + "-" + this.pos, this.container) || L(this.container, '<div class="' + this.clsContainer + " " + this.clsContainer + "-" + this.pos + '" style="display: block"></div>');
            this.$mount(L(t, '<div class="' + this.clsMsg + (this.status ? " " + this.clsMsg + "-" + this.status : "") + '" role="alert"> <a href class="' + this.clsClose + '" data-bdt-close></a> <div>' + this.message + "</div> </div>"))
        },
        async connected() {
            const t = w(h(this.$el, this.marginProp));
            await S.start(h(this.$el, this.startProps), {
                opacity: 1,
                [this.marginProp]: t
            }), this.timeout && (this.timer = setTimeout(this.close, this.timeout))
        },
        events: {
            click(t) {
                et(t.target, 'a[href="#"],a[href=""]') && t.preventDefault(), this.close()
            },
            [jt]() {
                this.timer && clearTimeout(this.timer)
            },
            [oe]() {
                this.timeout && (this.timer = setTimeout(this.close, this.timeout))
            }
        },
        methods: {
            async close(t) {
                const e = i => {
                    const s = A(i);
                    g(i, "close", [this]), ut(i), s != null && s.hasChildNodes() || ut(s)
                };
                this.timer && clearTimeout(this.timer), t || await S.start(this.$el, this.startProps), e(this.$el)
            }
        }
    };

    function cl(t) {
        t.notification.closeAll = function (e, i) {
            vt(document.body, s => {
                const n = t.getComponent(s, "notification");
                n && (!e || e === n.group) && n.close(i)
            })
        }
    }
    const di = {
            x: fi,
            y: fi,
            rotate: fi,
            scale: fi,
            color: ls,
            backgroundColor: ls,
            borderColor: ls,
            blur: Yt,
            hue: Yt,
            fopacity: Yt,
            grayscale: Yt,
            invert: Yt,
            saturate: Yt,
            sepia: Yt,
            opacity: dl,
            stroke: fl,
            bgx: Vn,
            bgy: Vn
        },
        {
            keys: qn
        } = Object;
    var Yn = {
        mixins: [hi],
        props: Kn(qn(di), "list"),
        data: Kn(qn(di), void 0),
        computed: {
            props(t, e) {
                const i = {};
                for (const n in t) n in di && !R(t[n]) && (i[n] = t[n].slice());
                const s = {};
                for (const n in i) s[n] = di[n](n, e, i[n], i);
                return s
            }
        },
        events: {
            load() {
                this.$emit()
            }
        },
        methods: {
            reset() {
                for (const t in this.getCss(0)) h(this.$el, t, "")
            },
            getCss(t) {
                const e = {
                    transform: "",
                    filter: ""
                };
                for (const i in this.props) this.props[i](e, t);
                return e
            }
        }
    };

    function fi(t, e, i) {
        let s = gi(i) || {
                x: "px",
                y: "px",
                rotate: "deg"
            } [t] || "",
            n;
        return t === "x" || t === "y" ? (t = "translate" + St(t), n = o => w(w(o).toFixed(s === "px" ? 0 : 6))) : t === "scale" && (s = "", n = o => gi([o]) ? K(o, "width", e, !0) / e.offsetWidth : o), i.length === 1 && i.unshift(t === "scale" ? 1 : 0), i = ce(i, n), (o, r) => {
            o.transform += " " + t + "(" + Ee(i, r) + s + ")"
        }
    }

    function ls(t, e, i) {
        return i.length === 1 && i.unshift(_e(e, t, "")), i = ce(i, s => ul(e, s)), (s, n) => {
            const [o, r, a] = Jn(i, n), l = o.map((c, u) => (c += a * (r[u] - c), u === 3 ? w(c) : parseInt(c, 10))).join(",");
            s[t] = "rgba(" + l + ")"
        }
    }

    function ul(t, e) {
        return _e(t, "color", e).split(/[(),]/g).slice(1, -1).concat(1).slice(0, 4).map(w)
    }

    function Yt(t, e, i) {
        i.length === 1 && i.unshift(0);
        const s = gi(i) || {
            blur: "px",
            hue: "deg"
        } [t] || "%";
        return t = {
            fopacity: "opacity",
            hue: "hue-rotate"
        } [t] || t, i = ce(i), (n, o) => {
            const r = Ee(i, o);
            n.filter += " " + t + "(" + (r + s) + ")"
        }
    }

    function dl(t, e, i) {
        return i.length === 1 && i.unshift(_e(e, t, "")), i = ce(i), (s, n) => {
            s[t] = Ee(i, n)
        }
    }

    function fl(t, e, i) {
        i.length === 1 && i.unshift(0);
        const s = gi(i),
            n = fn(e);
        return i = ce(i.reverse(), o => (o = w(o), s === "%" ? o * n / 100 : o)), i.some(o => {
            let [r] = o;
            return r
        }) ? (h(e, "strokeDasharray", n), (o, r) => {
            o.strokeDashoffset = Ee(i, r)
        }) : T
    }

    function Vn(t, e, i, s) {
        i.length === 1 && i.unshift(0);
        const n = t === "bgy" ? "height" : "width";
        s[t] = ce(i, a => K(a, n, e));
        const o = ["bgx", "bgy"].filter(a => a in s);
        if (o.length === 2 && t === "bgx") return T;
        if (_e(e, "backgroundSize", "") === "cover") return pl(t, e, i, s);
        const r = {};
        for (const a of o) r[a] = Xn(e, a);
        return Gn(o, r, s)
    }

    function pl(t, e, i, s) {
        const n = gl(e);
        if (!n.width) return T;
        const o = {
                width: e.offsetWidth,
                height: e.offsetHeight
            },
            r = ["bgx", "bgy"].filter(u => u in s),
            a = {};
        for (const u of r) {
            const d = s[u].map(W => {
                    let [V] = W;
                    return V
                }),
                f = Math.min(...d),
                m = Math.max(...d),
                I = d.indexOf(f) < d.indexOf(m),
                P = m - f;
            a[u] = (I ? -P : 0) - (I ? f : m) + "px", o[u === "bgy" ? "height" : "width"] += P
        }
        const l = Fe.cover(n, o);
        for (const u of r) {
            const d = u === "bgy" ? "height" : "width",
                f = l[d] - o[d];
            a[u] = "max(" + Xn(e, u) + ",-" + f + "px) + " + a[u]
        }
        const c = Gn(r, a, s);
        return (u, d) => {
            c(u, d), u.backgroundSize = l.width + "px " + l.height + "px", u.backgroundRepeat = "no-repeat"
        }
    }

    function Xn(t, e) {
        return _e(t, "background-position-" + e.substr(-1), "")
    }

    function Gn(t, e, i) {
        return function (s, n) {
            for (const o of t) {
                const r = Ee(i[o], n);
                s["background-position-" + o.substr(-1)] = "calc(" + e[o] + " + " + r + "px)"
            }
        }
    }
    const pi = {};

    function gl(t) {
        const e = h(t, "backgroundImage").replace(/^none|url\(["']?(.+?)["']?\)$/, "$1");
        if (pi[e]) return pi[e];
        const i = new Image;
        return e && (i.src = e, !i.naturalWidth) ? (i.onload = () => {
            pi[e] = hs(i), g(t, zt("load", !1))
        }, hs(i)) : pi[e] = hs(i)
    }

    function hs(t) {
        return {
            width: t.naturalWidth,
            height: t.naturalHeight
        }
    }

    function ce(t, e) {
        e === void 0 && (e = w);
        const i = [],
            {
                length: s
            } = t;
        let n = 0;
        for (let o = 0; o < s; o++) {
            let [r, a] = B(t[o]) ? t[o].trim().split(" ") : [t[o]];
            if (r = e(r), a = a ? w(a) / 100 : null, o === 0 ? a === null ? a = 0 : a && i.push([r, 0]) : o === s - 1 && (a === null ? a = 1 : a !== 1 && (i.push([r, a]), a = 1)), i.push([r, a]), a === null) n++;
            else if (n) {
                const l = i[o - n - 1][1],
                    c = (a - l) / (n + 1);
                for (let u = n; u > 0; u--) i[o - u][1] = l + c * (n - u + 1);
                n = 0
            }
        }
        return i
    }

    function Jn(t, e) {
        const i = bt(t.slice(1), s => {
            let [, n] = s;
            return e <= n
        }) + 1;
        return [t[i - 1][0], t[i][0], (e - t[i - 1][1]) / (t[i][1] - t[i - 1][1])]
    }

    function Ee(t, e) {
        const [i, s, n] = Jn(t, e);
        return Zt(i) ? i + Math.abs(i - s) * n * (i < s ? 1 : -1) : +s
    }
    const ml = /^-?\d+(\S+)/;

    function gi(t, e) {
        for (const i of t) {
            const s = i.match == null ? void 0 : i.match(ml);
            if (s) return s[1]
        }
        return e
    }

    function _e(t, e, i) {
        const s = t.style[e],
            n = h(h(t, e, i), e);
        return t.style[e] = s, n
    }

    function Kn(t, e) {
        return t.reduce((i, s) => (i[s] = e, i), {})
    }
    var vl = {
        mixins: [Yn, wt, si],
        props: {
            target: String,
            viewport: Number,
            easing: Number,
            start: String,
            end: String
        },
        data: {
            target: !1,
            viewport: 1,
            easing: 1,
            start: 0,
            end: 0
        },
        computed: {
            target(t, e) {
                let {
                    target: i
                } = t;
                return Zn(i && ht(i, e) || e)
            },
            start(t) {
                let {
                    start: e
                } = t;
                return K(e, "height", this.target, !0)
            },
            end(t) {
                let {
                    end: e,
                    viewport: i
                } = t;
                return K(e || (i = (1 - i) * 100) && i + "vh+" + i + "%", "height", this.target, !0)
            }
        },
        update: {
            read(t, e) {
                let {
                    percent: i
                } = t;
                if (e.has("scroll") || (i = !1), !this.matchMedia) return;
                const s = i;
                return i = wl(Gi(this.target, this.start, this.end), this.easing), {
                    percent: i,
                    style: s === i ? !1 : this.getCss(i)
                }
            },
            write(t) {
                let {
                    style: e
                } = t;
                if (!this.matchMedia) {
                    this.reset();
                    return
                }
                e && h(this.$el, e)
            },
            events: ["scroll", "resize"]
        }
    };

    function wl(t, e) {
        return e >= 0 ? Math.pow(t, e + 1) : 1 - Math.pow(1 - t, 1 - e)
    }

    function Zn(t) {
        return t ? "offsetTop" in t ? t : Zn(A(t)) : document.documentElement
    }
    var Qn = {
            update: {
                write() {
                    if (this.stack.length || this.dragging) return;
                    const t = this.getValidIndex(this.index);
                    !~this.prevIndex || this.index !== t ? this.show(t) : this._translate(1, this.prevIndex, this.index)
                },
                events: ["resize"]
            }
        },
        Un = {
            mixins: [Te],
            connected() {
                this.lazyload(this.slides, this.getAdjacentSlides)
            }
        };

    function bl(t, e, i, s) {
        let {
            center: n,
            easing: o,
            list: r
        } = s;
        const a = new He,
            l = t ? Oe(t, r, n) : Oe(e, r, n) + y(e).width * i,
            c = e ? Oe(e, r, n) : l + y(t).width * i * (X ? -1 : 1);
        return {
            dir: i,
            show(u, d, f) {
                d === void 0 && (d = 0);
                const m = f ? "linear" : o;
                return u -= Math.round(u * tt(d, -1, 1)), this.translate(d), d = t ? d : tt(d, 0, 1), cs(this.getItemIn(), "itemin", {
                    percent: d,
                    duration: u,
                    timing: m,
                    dir: i
                }), t && cs(this.getItemIn(!0), "itemout", {
                    percent: 1 - d,
                    duration: u,
                    timing: m,
                    dir: i
                }), S.start(r, {
                    transform: z(-c * (X ? -1 : 1), "px")
                }, u, m).then(a.resolve, T), a.promise
            },
            cancel() {
                S.cancel(r)
            },
            reset() {
                h(r, "transform", "")
            },
            forward(u, d) {
                return d === void 0 && (d = this.percent()), S.cancel(r), this.show(u, d, !0)
            },
            translate(u) {
                const d = this.getDistance() * i * (X ? -1 : 1);
                h(r, "transform", z(tt(-c + (d - d * u), -mi(r), y(r).width) * (X ? -1 : 1), "px"));
                const f = this.getActives(),
                    m = this.getItemIn(),
                    I = this.getItemIn(!0);
                u = t ? tt(u, -1, 1) : 0;
                for (const P of D(r)) {
                    const W = p(f, P),
                        V = P === m,
                        Ot = P === I,
                        us = V || !Ot && (W || i * (X ? -1 : 1) === -1 ^ vi(P, r) > vi(t || e));
                    cs(P, "itemtranslate" + (us ? "in" : "out"), {
                        dir: i,
                        percent: Ot ? 1 - u : V ? u : W ? 1 : 0
                    })
                }
            },
            percent() {
                return Math.abs((h(r, "transform").split(",")[4] * (X ? -1 : 1) + l) / (c - l))
            },
            getDistance() {
                return Math.abs(c - l)
            },
            getItemIn(u) {
                u === void 0 && (u = !1);
                let d = this.getActives(),
                    f = eo(r, Oe(e || t, r, n));
                if (u) {
                    const m = d;
                    d = f, f = m
                }
                return f[bt(f, m => !p(d, m))]
            },
            getActives() {
                return eo(r, Oe(t || e, r, n))
            }
        }
    }

    function Oe(t, e, i) {
        const s = vi(t, e);
        return i ? s - xl(t, e) : Math.min(s, to(e))
    }

    function to(t) {
        return Math.max(0, mi(t) - y(t).width)
    }

    function mi(t) {
        return D(t).reduce((e, i) => y(i).width + e, 0)
    }

    function xl(t, e) {
        return y(e).width / 2 - y(t).width / 2
    }

    function vi(t, e) {
        return t && (je(t).left + (X ? y(t).width - y(e).width : 0)) * (X ? -1 : 1) || 0
    }

    function eo(t, e) {
        e -= 1;
        const i = y(t).width,
            s = e + i + 2;
        return D(t).filter(n => {
            const o = vi(n, t),
                r = o + Math.min(y(n).width, i);
            return o >= e && r <= s
        })
    }

    function cs(t, e, i) {
        g(t, zt(e, !1, !1, i))
    }
    var yl = {
        mixins: [st, Hn, Qn, Un],
        props: {
            center: Boolean,
            sets: Boolean
        },
        data: {
            center: !1,
            sets: !1,
            attrItem: "bdt-slider-item",
            selList: ".bdt-slider-items",
            selNav: ".bdt-slider-nav",
            clsContainer: "bdt-slider-container",
            Transitioner: bl
        },
        computed: {
            avgWidth() {
                return mi(this.list) / this.length
            },
            finite(t) {
                let {
                    finite: e
                } = t;
                return e || Math.ceil(mi(this.list)) < Math.trunc(y(this.list).width + $l(this.list) + this.center)
            },
            maxIndex() {
                if (!this.finite || this.center && !this.sets) return this.length - 1;
                if (this.center) return Qt(this.sets);
                let t = 0;
                const e = to(this.list),
                    i = bt(this.slides, s => {
                        if (t >= e) return !0;
                        t += y(s).width
                    });
                return ~i ? i : this.length - 1
            },
            sets(t) {
                let {
                    sets: e
                } = t;
                if (!e) return;
                let i = 0;
                const s = [],
                    n = y(this.list).width;
                for (let o = 0; o < this.slides.length; o++) {
                    const r = y(this.slides[o]).width;
                    i + r > n && (i = 0), this.center ? i < n / 2 && i + r + y(this.slides[+o + 1]).width / 2 > n / 2 && (s.push(+o), i = n / 2 - r / 2) : i === 0 && s.push(Math.min(+o, this.maxIndex)), i += r
                }
                if (s.length) return s
            },
            transitionOptions() {
                return {
                    center: this.center,
                    list: this.list
                }
            }
        },
        connected() {
            H(this.$el, this.clsContainer, !b("." + this.clsContainer, this.$el))
        },
        update: {
            write() {
                for (const t of this.navItems) {
                    const e = Ct(ot(t, this.attrItem));
                    e !== !1 && (t.hidden = !this.maxIndex || e > this.maxIndex || this.sets && !p(this.sets, e))
                }
                this.length && !this.dragging && !this.stack.length && (this.reorder(), this._translate(1)), this.updateActiveClasses()
            },
            events: ["resize"]
        },
        events: {
            beforeitemshow(t) {
                !this.dragging && this.sets && this.stack.length < 2 && !p(this.sets, this.index) && (this.index = this.getValidIndex());
                const e = Math.abs(this.index - this.prevIndex + (this.dir > 0 && this.index < this.prevIndex || this.dir < 0 && this.index > this.prevIndex ? (this.maxIndex + 1) * this.dir : 0));
                if (!this.dragging && e > 1) {
                    for (let s = 0; s < e; s++) this.stack.splice(1, 0, this.dir > 0 ? "next" : "previous");
                    t.preventDefault();
                    return
                }
                const i = this.dir < 0 || !this.slides[this.prevIndex] ? this.index : this.prevIndex;
                this.duration = Ln(this.avgWidth / this.velocity) * (y(this.slides[i]).width / this.avgWidth), this.reorder()
            },
            itemshow() {
                ~this.prevIndex && x(this._getTransitioner().getItemIn(), this.clsActive)
            },
            itemshown() {
                this.updateActiveClasses()
            }
        },
        methods: {
            reorder() {
                if (this.finite) {
                    h(this.slides, "order", "");
                    return
                }
                const t = this.dir > 0 && this.slides[this.prevIndex] ? this.prevIndex : this.index;
                if (this.slides.forEach((n, o) => h(n, "order", this.dir > 0 && o < t ? 1 : this.dir < 0 && o >= this.index ? -1 : "")), !this.center) return;
                const e = this.slides[t];
                let i = y(this.list).width / 2 - y(e).width / 2,
                    s = 0;
                for (; i > 0;) {
                    const n = this.getIndex(--s + t, t),
                        o = this.slides[n];
                    h(o, "order", n > t ? -2 : -1), i -= y(o).width
                }
            },
            updateActiveClasses() {
                const t = this._getTransitioner(this.index).getActives(),
                    e = [this.clsActive, (!this.sets || p(this.sets, w(this.index))) && this.clsActivated || ""];
                for (const i of this.slides) H(i, e, p(t, i))
            },
            getValidIndex(t, e) {
                if (t === void 0 && (t = this.index), e === void 0 && (e = this.prevIndex), t = this.getIndex(t, e), !this.sets) return t;
                let i;
                do {
                    if (p(this.sets, t)) return t;
                    i = t, t = this.getIndex(t + this.dir, e)
                } while (t !== i);
                return t
            },
            getAdjacentSlides() {
                const {
                    width: t
                } = y(this.list), e = -t, i = t * 2, s = y(this.slides[this.index]).width, n = this.center ? t / 2 - s / 2 : 0, o = new Set;
                for (const r of [-1, 1]) {
                    let a = n + (r > 0 ? s : 0),
                        l = 0;
                    do {
                        const c = this.slides[this.getIndex(this.index + r + l++ * r)];
                        a += y(c).width * r, o.add(c)
                    } while (this.slides.length > l && a > e && a < i)
                }
                return Array.from(o)
            }
        }
    };

    function $l(t) {
        return Math.max(0, ...D(t).map(e => y(e).width))
    }
    var io = {
        mixins: [Yn],
        data: {
            selItem: "!li"
        },
        beforeConnect() {
            this.item = ht(this.selItem, this.$el)
        },
        disconnected() {
            this.item = null
        },
        events: [{
            name: "itemin itemout",
            self: !0,
            el() {
                return this.item
            },
            handler(t) {
                let {
                    type: e,
                    detail: {
                        percent: i,
                        duration: s,
                        timing: n,
                        dir: o
                    }
                } = t;
                G.read(() => {
                    const r = this.getCss(no(e, o, i)),
                        a = this.getCss(so(e) ? .5 : o > 0 ? 1 : 0);
                    G.write(() => {
                        h(this.$el, r), S.start(this.$el, a, s, n).catch(T)
                    })
                })
            }
        }, {
            name: "transitioncanceled transitionend",
            self: !0,
            el() {
                return this.item
            },
            handler() {
                S.cancel(this.$el)
            }
        }, {
            name: "itemtranslatein itemtranslateout",
            self: !0,
            el() {
                return this.item
            },
            handler(t) {
                let {
                    type: e,
                    detail: {
                        percent: i,
                        dir: s
                    }
                } = t;
                G.read(() => {
                    const n = this.getCss(no(e, s, i));
                    G.write(() => h(this.$el, n))
                })
            }
        }]
    };

    function so(t) {
        return Gt(t, "in")
    }

    function no(t, e, i) {
        return i /= 2, so(t) ^ e < 0 ? i : 1 - i
    }
    var kl = {
            ...os,
            fade: {
                show() {
                    return [{
                        opacity: 0,
                        zIndex: 0
                    }, {
                        zIndex: -1
                    }]
                },
                percent(t) {
                    return 1 - h(t, "opacity")
                },
                translate(t) {
                    return [{
                        opacity: 1 - t,
                        zIndex: 0
                    }, {
                        zIndex: -1
                    }]
                }
            },
            scale: {
                show() {
                    return [{
                        opacity: 0,
                        transform: he(1 + .5),
                        zIndex: 0
                    }, {
                        zIndex: -1
                    }]
                },
                percent(t) {
                    return 1 - h(t, "opacity")
                },
                translate(t) {
                    return [{
                        opacity: 1 - t,
                        transform: he(1 + .5 * t),
                        zIndex: 0
                    }, {
                        zIndex: -1
                    }]
                }
            },
            pull: {
                show(t) {
                    return t < 0 ? [{
                        transform: z(30),
                        zIndex: -1
                    }, {
                        transform: z(),
                        zIndex: 0
                    }] : [{
                        transform: z(-100),
                        zIndex: 0
                    }, {
                        transform: z(),
                        zIndex: -1
                    }]
                },
                percent(t, e, i) {
                    return i < 0 ? 1 - Pe(e) : Pe(t)
                },
                translate(t, e) {
                    return e < 0 ? [{
                        transform: z(30 * t),
                        zIndex: -1
                    }, {
                        transform: z(-100 * (1 - t)),
                        zIndex: 0
                    }] : [{
                        transform: z(-t * 100),
                        zIndex: 0
                    }, {
                        transform: z(30 * (1 - t)),
                        zIndex: -1
                    }]
                }
            },
            push: {
                show(t) {
                    return t < 0 ? [{
                        transform: z(100),
                        zIndex: 0
                    }, {
                        transform: z(),
                        zIndex: -1
                    }] : [{
                        transform: z(-30),
                        zIndex: -1
                    }, {
                        transform: z(),
                        zIndex: 0
                    }]
                },
                percent(t, e, i) {
                    return i > 0 ? 1 - Pe(e) : Pe(t)
                },
                translate(t, e) {
                    return e < 0 ? [{
                        transform: z(t * 100),
                        zIndex: 0
                    }, {
                        transform: z(-30 * (1 - t)),
                        zIndex: -1
                    }] : [{
                        transform: z(-30 * t),
                        zIndex: -1
                    }, {
                        transform: z(100 * (1 - t)),
                        zIndex: 0
                    }]
                }
            }
        },
        Sl = {
            mixins: [st, Wn, Qn, Un],
            props: {
                ratio: String,
                minHeight: Number,
                maxHeight: Number
            },
            data: {
                ratio: "16:9",
                minHeight: !1,
                maxHeight: !1,
                selList: ".bdt-slideshow-items",
                attrItem: "bdt-slideshow-item",
                selNav: ".bdt-slideshow-nav",
                Animations: kl
            },
            update: {
                read() {
                    if (!this.list) return !1;
                    let [t, e] = this.ratio.split(":").map(Number);
                    return e = e * this.list.offsetWidth / t || 0, this.minHeight && (e = Math.max(this.minHeight, e)), this.maxHeight && (e = Math.min(this.maxHeight, e)), {
                        height: e - se(this.list, "height", "content-box")
                    }
                },
                write(t) {
                    let {
                        height: e
                    } = t;
                    e > 0 && h(this.list, "minHeight", e)
                },
                events: ["resize"]
            },
            methods: {
                getAdjacentSlides() {
                    return [1, -1].map(t => this.slides[this.getIndex(this.index + t)])
                }
            }
        },
        Tl = {
            mixins: [st, Bn],
            props: {
                group: String,
                threshold: Number,
                clsItem: String,
                clsPlaceholder: String,
                clsDrag: String,
                clsDragState: String,
                clsBase: String,
                clsNoDrag: String,
                clsEmpty: String,
                clsCustom: String,
                handle: String
            },
            data: {
                group: !1,
                threshold: 5,
                clsItem: "bdt-sortable-item",
                clsPlaceholder: "bdt-sortable-placeholder",
                clsDrag: "bdt-sortable-drag",
                clsDragState: "bdt-drag",
                clsBase: "bdt-sortable",
                clsNoDrag: "bdt-sortable-nodrag",
                clsEmpty: "bdt-sortable-empty",
                clsCustom: "",
                handle: !1,
                pos: {}
            },
            created() {
                for (const t of ["init", "start", "move", "end"]) {
                    const e = this[t];
                    this[t] = i => {
                        xt(this.pos, ie(i)), e(i)
                    }
                }
            },
            events: {
                name: gt,
                passive: !1,
                handler: "init"
            },
            computed: {
                target() {
                    return (this.$el.tBodies || [this.$el])[0]
                },
                items() {
                    return D(this.target)
                },
                isEmpty: {
                    get() {
                        return pe(this.items)
                    },
                    watch(t) {
                        H(this.target, this.clsEmpty, t)
                    },
                    immediate: !0
                },
                handles: {
                    get(t, e) {
                        let {
                            handle: i
                        } = t;
                        return i ? M(i, e) : this.items
                    },
                    watch(t, e) {
                        h(e, {
                            touchAction: "",
                            userSelect: ""
                        }), h(t, {
                            touchAction: Rt ? "none" : "",
                            userSelect: "none"
                        })
                    },
                    immediate: !0
                }
            },
            update: {
                write(t) {
                    if (!this.drag || !A(this.placeholder)) return;
                    const {
                        pos: {
                            x: e,
                            y: i
                        },
                        origin: {
                            offsetTop: s,
                            offsetLeft: n
                        },
                        placeholder: o
                    } = this;
                    h(this.drag, {
                        top: i - s,
                        left: e - n
                    });
                    const r = this.getSortable(document.elementFromPoint(e, i));
                    if (!r) return;
                    const {
                        items: a
                    } = r;
                    if (a.some(S.inProgress)) return;
                    const l = Al(a, {
                        x: e,
                        y: i
                    });
                    if (a.length && (!l || l === o)) return;
                    const c = this.getSortable(o),
                        u = El(r.target, l, o, e, i, r === c && t.moved !== l);
                    u !== !1 && (u && o === u || (r !== c ? (c.remove(o), t.moved = l) : delete t.moved, r.insert(o, u), this.touched.add(r)))
                },
                events: ["move"]
            },
            methods: {
                init(t) {
                    const {
                        target: e,
                        button: i,
                        defaultPrevented: s
                    } = t, [n] = this.items.filter(o => _(e, o));
                    !n || s || i > 0 || Pi(e) || _(e, "." + this.clsNoDrag) || this.handle && !_(e, this.handle) || (t.preventDefault(), this.touched = new Set([this]), this.placeholder = n, this.origin = {
                        target: e,
                        index: ee(n),
                        ...this.pos
                    }, k(document, Ge, this.move), k(document, At, this.end), this.threshold || this.start(t))
                },
                start(t) {
                    this.drag = Pl(this.$container, this.placeholder);
                    const {
                        left: e,
                        top: i
                    } = this.placeholder.getBoundingClientRect();
                    xt(this.origin, {
                        offsetLeft: this.pos.x - e,
                        offsetTop: this.pos.y - i
                    }), x(this.drag, this.clsDrag, this.clsCustom), x(this.placeholder, this.clsPlaceholder), x(this.items, this.clsItem), x(document.documentElement, this.clsDragState), g(this.$el, "start", [this, this.placeholder]), Cl(this.pos), this.move(t)
                },
                move(t) {
                    this.drag ? this.$emit("move") : (Math.abs(this.pos.x - this.origin.x) > this.threshold || Math.abs(this.pos.y - this.origin.y) > this.threshold) && this.start(t)
                },
                end() {
                    if (Nt(document, Ge, this.move), Nt(document, At, this.end), !this.drag) return;
                    Il();
                    const t = this.getSortable(this.placeholder);
                    this === t ? this.origin.index !== ee(this.placeholder) && g(this.$el, "moved", [this, this.placeholder]) : (g(t.$el, "added", [t, this.placeholder]), g(this.$el, "removed", [this, this.placeholder])), g(this.$el, "stop", [this, this.placeholder]), ut(this.drag), this.drag = null;
                    for (const {
                            clsPlaceholder: e,
                            clsItem: i
                        } of this.touched)
                        for (const s of this.touched) O(s.items, e, i);
                    this.touched = null, O(document.documentElement, this.clsDragState)
                },
                insert(t, e) {
                    x(this.items, this.clsItem);
                    const i = () => e ? Fi(e, t) : L(this.target, t);
                    this.animate(i)
                },
                remove(t) {
                    !_(t, this.target) || this.animate(() => ut(t))
                },
                getSortable(t) {
                    do {
                        const e = this.$getComponent(t, "sortable");
                        if (e && (e === this || this.group !== !1 && e.group === this.group)) return e
                    } while (t = A(t))
                }
            }
        };
    let oo;

    function Cl(t) {
        let e = Date.now();
        oo = setInterval(() => {
            let {
                x: i,
                y: s
            } = t;
            s += document.scrollingElement.scrollTop;
            const n = (Date.now() - e) * .3;
            e = Date.now(), Q(document.elementFromPoint(i, t.y), /auto|scroll/).reverse().some(o => {
                let {
                    scrollTop: r,
                    scrollHeight: a
                } = o;
                const {
                    top: l,
                    bottom: c,
                    height: u
                } = rt(o);
                if (l < s && l + 35 > s) r -= n;
                else if (c > s && c - 35 < s) r += n;
                else return;
                if (r > 0 && r < a - u) return o.scrollTop = r, !0
            })
        }, 15)
    }

    function Il() {
        clearInterval(oo)
    }

    function Pl(t, e) {
        let i;
        if (["li", "tr"].some(s => ct(e, s))) {
            i = b("<div>"), L(i, e.cloneNode(!0).children);
            for (const s of e.getAttributeNames()) v(i, s, e.getAttribute(s))
        } else i = e.cloneNode(!0);
        return L(t, i), h(i, "margin", "0", "important"), h(i, {
            boxSizing: "border-box",
            width: e.offsetWidth,
            height: e.offsetHeight,
            padding: h(e, "padding")
        }), J(i.firstElementChild, J(e.firstElementChild)), i
    }

    function Al(t, e) {
        return t[bt(t, i => ze(e, i.getBoundingClientRect()))]
    }

    function El(t, e, i, s, n, o) {
        if (!D(t).length) return;
        const r = e.getBoundingClientRect();
        if (!o) return _l(t, i) || n < r.top + r.height / 2 ? e : e.nextElementSibling;
        const a = i.getBoundingClientRect(),
            l = ro([r.top, r.bottom], [a.top, a.bottom]),
            c = l ? s : n,
            u = l ? "width" : "height",
            d = l ? "left" : "top",
            f = l ? "right" : "bottom",
            m = a[u] < r[u] ? r[u] - a[u] : 0;
        return a[d] < r[d] ? m && c < r[d] + m ? !1 : e.nextElementSibling : m && c > r[f] - m ? !1 : e
    }

    function _l(t, e) {
        const i = D(t).length === 1;
        i && L(t, e);
        const s = D(t),
            n = s.some((o, r) => {
                const a = o.getBoundingClientRect();
                return s.slice(r + 1).some(l => {
                    const c = l.getBoundingClientRect();
                    return !ro([a.left, a.right], [c.left, c.right])
                })
            });
        return i && ut(e), n
    }

    function ro(t, e) {
        return t[1] > e[0] && e[1] > t[0]
    }
    var Ol = {
        mixins: [le, _t, Us],
        args: "title",
        props: {
            delay: Number,
            title: String
        },
        data: {
            pos: "top",
            title: "",
            delay: 0,
            animation: ["bdt-animation-scale-up"],
            duration: 100,
            cls: "bdt-active"
        },
        beforeConnect() {
            this.id = "bdt-tooltip-" + this._uid, this._hasTitle = It(this.$el, "title"), v(this.$el, {
                title: "",
                "aria-describedby": this.id
            }), Bl(this.$el)
        },
        disconnected() {
            this.hide(), v(this.$el, "title", this._hasTitle ? this.title : null)
        },
        methods: {
            show() {
                this.isToggled(this.tooltip || null) || !this.title || (this._unbind = N(document, "keydown " + gt, this.hide, !1, t => t.type === gt && !_(t.target, this.$el) || t.type === "keydown" && t.keyCode === 27), clearTimeout(this.showTimer), this.showTimer = setTimeout(this._show, this.delay))
            },
            async hide() {
                F(this.$el, "input:focus") || (clearTimeout(this.showTimer), this.isToggled(this.tooltip || null) && (await this.toggleElement(this.tooltip, !1, !1), ut(this.tooltip), this.tooltip = null, this._unbind()))
            },
            _show() {
                this.tooltip = L(this.container, '<div id="' + this.id + '" class="bdt-' + this.$options.name + '" role="tooltip"> <div class="bdt-' + this.$options.name + '-inner">' + this.title + "</div> </div>"), k(this.tooltip, "toggled", (t, e) => {
                    if (!e) return;
                    this.positionAt(this.tooltip, this.$el);
                    const [i, s] = Dl(this.tooltip, this.$el, this.pos);
                    this.origin = this.axis === "y" ? qe(i) + "-" + s : s + "-" + qe(i)
                }), this.toggleElement(this.tooltip, !0)
            }
        },
        events: {
            focus: "show",
            blur: "hide",
            [jt + " " + oe](t) {
                kt(t) || this[t.type === jt ? "show" : "hide"]()
            },
            [gt](t) {
                kt(t) && this.show()
            }
        }
    };

    function Bl(t) {
        We(t) || v(t, "tabindex", "0")
    }

    function Dl(t, e, i) {
        let [s, n] = i;
        const o = C(t),
            r = C(e),
            a = [
                ["left", "right"],
                ["top", "bottom"]
            ];
        for (const c of a) {
            if (o[c[0]] >= r[c[1]]) {
                s = c[1];
                break
            }
            if (o[c[1]] <= r[c[0]]) {
                s = c[0];
                break
            }
        }
        const l = p(a[0], s) ? a[1] : a[0];
        return o[l[0]] === r[l[0]] ? n = l[0] : o[l[1]] === r[l[1]] ? n = l[1] : n = "center", [s, n]
    }
    var Ml = {
        props: {
            allow: String,
            clsDragover: String,
            concurrent: Number,
            maxSize: Number,
            method: String,
            mime: String,
            msgInvalidMime: String,
            msgInvalidName: String,
            msgInvalidSize: String,
            multiple: Boolean,
            name: String,
            params: Object,
            type: String,
            url: String
        },
        data: {
            allow: !1,
            clsDragover: "bdt-dragover",
            concurrent: 1,
            maxSize: 0,
            method: "POST",
            mime: !1,
            msgInvalidMime: "Invalid File Type: %s",
            msgInvalidName: "Invalid File Name: %s",
            msgInvalidSize: "Invalid File Size: %s Kilobytes Max",
            multiple: !1,
            name: "files[]",
            params: {},
            type: "",
            url: "",
            abort: T,
            beforeAll: T,
            beforeSend: T,
            complete: T,
            completeAll: T,
            error: T,
            fail: T,
            load: T,
            loadEnd: T,
            loadStart: T,
            progress: T
        },
        events: {
            change(t) {
                !F(t.target, 'input[type="file"]') || (t.preventDefault(), t.target.files && this.upload(t.target.files), t.target.value = "")
            },
            drop(t) {
                wi(t);
                const e = t.dataTransfer;
                !(e != null && e.files) || (O(this.$el, this.clsDragover), this.upload(e.files))
            },
            dragenter(t) {
                wi(t)
            },
            dragover(t) {
                wi(t), x(this.$el, this.clsDragover)
            },
            dragleave(t) {
                wi(t), O(this.$el, this.clsDragover)
            }
        },
        methods: {
            async upload(t) {
                if (t = xi(t), !t.length) return;
                g(this.$el, "upload", [t]);
                for (const s of t) {
                    if (this.maxSize && this.maxSize * 1e3 < s.size) {
                        this.fail(this.msgInvalidSize.replace("%s", this.maxSize));
                        return
                    }
                    if (this.allow && !ao(this.allow, s.name)) {
                        this.fail(this.msgInvalidName.replace("%s", this.allow));
                        return
                    }
                    if (this.mime && !ao(this.mime, s.type)) {
                        this.fail(this.msgInvalidMime.replace("%s", this.mime));
                        return
                    }
                }
                this.multiple || (t = t.slice(0, 1)), this.beforeAll(this, t);
                const e = Nl(t, this.concurrent),
                    i = async s => {
                        const n = new FormData;
                        s.forEach(o => n.append(this.name, o));
                        for (const o in this.params) n.append(o, this.params[o]);
                        try {
                            const o = await xs(this.url, {
                                data: n,
                                method: this.method,
                                responseType: this.type,
                                beforeSend: r => {
                                    const {
                                        xhr: a
                                    } = r;
                                    a.upload && k(a.upload, "progress", this.progress);
                                    for (const l of ["loadStart", "load", "loadEnd", "abort"]) k(a, l.toLowerCase(), this[l]);
                                    return this.beforeSend(r)
                                }
                            });
                            this.complete(o), e.length ? await i(e.shift()) : this.completeAll(o)
                        } catch (o) {
                            this.error(o)
                        }
                    };
                await i(e.shift())
            }
        }
    };

    function ao(t, e) {
        return e.match(new RegExp("^" + t.replace(/\//g, "\\/").replace(/\*\*/g, "(\\/[^\\/]+)*").replace(/\*/g, "[^\\/]+").replace(/((?!\\))\?/g, "$1.") + "$", "i"))
    }

    function Nl(t, e) {
        const i = [];
        for (let s = 0; s < t.length; s += e) i.push(t.slice(s, s + e));
        return i
    }

    function wi(t) {
        t.preventDefault(), t.stopPropagation()
    }
    var zl = Object.freeze({
        __proto__: null,
        Countdown: La,
        Filter: Xa,
        Lightbox: al,
        LightboxPanel: Rn,
        Notification: hl,
        Parallax: vl,
        Slider: yl,
        SliderParallax: io,
        Slideshow: Sl,
        SlideshowParallax: io,
        Sortable: Tl,
        Tooltip: Ol,
        Upload: Ml
    });
    return $t(zl, (t, e) => it.component(e, t)), it
});