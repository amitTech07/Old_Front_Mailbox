/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 */
! function() {
    "use strict";
    var r = function(e) {
            if (null === e) return "null";
            if (e === undefined) return "undefined";
            var t = typeof e;
            return "object" == t && (Array.prototype.isPrototypeOf(e) || e.constructor && "Array" === e.constructor.name) ? "array" : "object" == t && (String.prototype.isPrototypeOf(e) || e.constructor && "String" === e.constructor.name) ? "string" : t
        },
        t = function(e) {
            return {
                eq: e
            }
        },
        s = t(function(e, t) {
            return e === t
        }),
        i = function(o) {
            return t(function(e, t) {
                if (e.length !== t.length) return !1;
                for (var n = e.length, r = 0; r < n; r++)
                    if (!o.eq(e[r], t[r])) return !1;
                return !0
            })
        },
        c = function(e, r) {
            return n = i(e), o = function(e) {
                return t = e, n = r, Array.prototype.slice.call(t).sort(n);
                var t, n
            }, t(function(e, t) {
                return n.eq(o(e), o(t))
            });
            var n, o
        },
        u = function(u) {
            return t(function(e, t) {
                var n = Object.keys(e),
                    r = Object.keys(t);
                if (!c(s).eq(n, r)) return !1;
                for (var o = n.length, i = 0; i < o; i++) {
                    var a = n[i];
                    if (!u.eq(e[a], t[a])) return !1
                }
                return !0
            })
        },
        l = t(function(e, t) {
            if (e === t) return !0;
            var n = r(e);
            return n === r(t) && (-1 !== ["undefined", "boolean", "number", "string", "function", "xml", "null"].indexOf(n) ? e === t : "array" === n ? i(l).eq(e, t) : "object" === n && u(l).eq(e, t))
        }),
        e = function(r) {
            return function(e) {
                return n = typeof(t = e), (null === t ? "null" : "object" == n && (Array.prototype.isPrototypeOf(t) || t.constructor && "Array" === t.constructor.name) ? "array" : "object" == n && (String.prototype.isPrototypeOf(t) || t.constructor && "String" === t.constructor.name) ? "string" : n) === r;
                var t, n
            }
        },
        n = function(t) {
            return function(e) {
                return typeof e === t
            }
        },
        o = function(t) {
            return function(e) {
                return t === e
            }
        },
        K = e("string"),
        w = e("object"),
        S = e("array"),
        a = o(null),
        f = n("boolean"),
        d = o(undefined),
        X = function(e) {
            return null === e || e === undefined
        },
        V = function(e) {
            return !X(e)
        },
        m = n("function"),
        N = n("number"),
        te = function() {},
        C = function(n, r) {
            return function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return n(r.apply(null, e))
            }
        },
        E = function(e) {
            return function() {
                return e
            }
        },
        g = function(e) {
            return e
        };
    function k(r) {
        for (var o = [], e = 1; e < arguments.length; e++) o[e - 1] = arguments[e];
        return function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            var n = o.concat(e);
            return r.apply(null, n)
        }
    }
    var p, h, v, y = function(t) {
            return function(e) {
                return !t(e)
            }
        },
        b = function(e) {
            return function() {
                throw new Error(e)
            }
        },
        x = function(e) {
            return e()
        },
        _ = function(e) {
            e()
        },
        A = E(!1),
        R = E(!0),
        T = function() {
            return D
        },
        D = (p = function(e) {
            return e.isNone()
        }, {
            fold: function(e, t) {
                return e()
            },
            is: A,
            isSome: A,
            isNone: R,
            getOr: v = function(e) {
                return e
            },
            getOrThunk: h = function(e) {
                return e()
            },
            getOrDie: function(e) {
                throw new Error(e || "error: getOrDie called on none.")
            },
            getOrNull: E(null),
            getOrUndefined: E(undefined),
            or: v,
            orThunk: h,
            map: T,
            each: te,
            bind: T,
            exists: A,
            forall: R,
            filter: T,
            equals: p,
            equals_: p,
            toArray: function() {
                return []
            },
            toString: E("none()")
        }),
        O = function(n) {
            var e = E(n),
                t = function() {
                    return o
                },
                r = function(e) {
                    return e(n)
                },
                o = {
                    fold: function(e, t) {
                        return t(n)
                    },
                    is: function(e) {
                        return n === e
                    },
                    isSome: R,
                    isNone: A,
                    getOr: e,
                    getOrThunk: e,
                    getOrDie: e,
                    getOrNull: e,
                    getOrUndefined: e,
                    or: t,
                    orThunk: t,
                    map: function(e) {
                        return O(e(n))
                    },
                    each: function(e) {
                        e(n)
                    },
                    bind: r,
                    exists: r,
                    forall: r,
                    filter: function(e) {
                        return e(n) ? o : D
                    },
                    toArray: function() {
                        return [n]
                    },
                    toString: function() {
                        return "some(" + n + ")"
                    },
                    equals: function(e) {
                        return e.is(n)
                    },
                    equals_: function(e, t) {
                        return e.fold(A, function(e) {
                            return t(n, e)
                        })
                    }
                };
            return o
        },
        U = {
            some: O,
            none: T,
            from: function(e) {
                return null === e || e === undefined ? D : O(e)
            }
        },
        B = Array.prototype.slice,
        P = Array.prototype.indexOf,
        L = Array.prototype.push,
        I = function(e, t) {
            return P.call(e, t)
        },
        M = function(e, t) {
            return -1 < I(e, t)
        },
        F = function(e, t) {
            for (var n = 0, r = e.length; n < r; n++) {
                if (t(e[n], n)) return !0
            }
            return !1
        },
        z = function(e, t) {
            for (var n = e.length, r = new Array(n), o = 0; o < n; o++) {
                var i = e[o];
                r[o] = t(i, o)
            }
            return r
        },
        Y = function(e, t) {
            for (var n = 0, r = e.length; n < r; n++) {
                t(e[n], n)
            }
        },
        j = function(e, t) {
            for (var n = e.length - 1; 0 <= n; n--) {
                t(e[n], n)
            }
        },
        H = function(e, t) {
            for (var n = [], r = 0, o = e.length; r < o; r++) {
                var i = e[r];
                t(i, r) && n.push(i)
            }
            return n
        },
        q = function(e, t, n) {
            return j(e, function(e) {
                n = t(n, e)
            }), n
        },
        $ = function(e, t, n) {
            return Y(e, function(e) {
                n = t(n, e)
            }), n
        },
        W = function(e, t) {
            return function(e, t, n) {
                for (var r = 0, o = e.length; r < o; r++) {
                    var i = e[r];
                    if (t(i, r)) return U.some(i);
                    if (n(i, r)) break
                }
                return U.none()
            }(e, t, A)
        },
        G = function(e, t) {
            for (var n = 0, r = e.length; n < r; n++) {
                if (t(e[n], n)) return U.some(n)
            }
            return U.none()
        },
        J = function(e, t) {
            return function(e) {
                for (var t = [], n = 0, r = e.length; n < r; ++n) {
                    if (!S(e[n])) throw new Error("Arr.flatten item " + n + " was not an array, input: " + e);
                    L.apply(t, e[n])
                }
                return t
            }(z(e, t))
        },
        Q = function(e, t) {
            for (var n = 0, r = e.length; n < r; ++n) {
                if (!0 !== t(e[n], n)) return !1
            }
            return !0
        },
        Z = function(e) {
            var t = B.call(e, 0);
            return t.reverse(), t
        },
        ee = function(e, t) {
            return H(e, function(e) {
                return !M(t, e)
            })
        },
        ne = function(e, t) {
            return 0 <= t && t < e.length ? U.some(e[t]) : U.none()
        },
        re = function(e) {
            return ne(e, 0)
        },
        oe = function(e) {
            return ne(e, e.length - 1)
        },
        ie = m(Array.from) ? Array.from : function(e) {
            return B.call(e)
        },
        ae = Object.keys,
        ue = Object.hasOwnProperty,
        se = function(e, t) {
            for (var n = ae(e), r = 0, o = n.length; r < o; r++) {
                var i = n[r];
                t(e[i], i)
            }
        },
        ce = function(e, n) {
            return le(e, function(e, t) {
                return {
                    k: t,
                    v: n(e, t)
                }
            })
        },
        le = function(e, r) {
            var o = {};
            return se(e, function(e, t) {
                var n = r(e, t);
                o[n.k] = n.v
            }), o
        },
        fe = function(n) {
            return function(e, t) {
                n[t] = e
            }
        },
        de = function(e, n, r, o) {
            return se(e, function(e, t) {
                (n(e, t) ? r : o)(e, t)
            }), {}
        },
        me = function(e, t) {
            var n = {},
                r = {};
            return de(e, t, fe(n), fe(r)), {
                t: n,
                f: r
            }
        },
        ge = function(e, t) {
            var n = {};
            return de(e, t, fe(n), te), n
        },
        pe = function(e) {
            return n = function(e) {
                return e
            }, r = [], se(e, function(e, t) {
                r.push(n(e, t))
            }), r;
            var n, r
        },
        he = function(e, t) {
            return ve(e, t) ? U.from(e[t]) : U.none()
        },
        ve = function(e, t) {
            return ue.call(e, t)
        },
        ye = function(e, t) {
            return ve(e, t) && e[t] !== undefined && null !== e[t]
        },
        be = Array.isArray,
        Ce = function(e, t, n) {
            var r, o;
            if (!e) return !1;
            if (n = n || e, e.length !== undefined) {
                for (r = 0, o = e.length; r < o; r++)
                    if (!1 === t.call(n, e[r], r, e)) return !1
            } else
                for (r in e)
                    if (e.hasOwnProperty(r) && !1 === t.call(n, e[r], r, e)) return !1;
            return !0
        },
        we = function(n, r) {
            var o = [];
            return Ce(n, function(e, t) {
                o.push(r(e, t, n))
            }), o
        },
        xe = function(n, r) {
            var o = [];
            return Ce(n, function(e, t) {
                r && !r(e, t, n) || o.push(e)
            }), o
        },
        Se = function(e, t) {
            if (e)
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
            return -1
        },
        Ne = function(e, t, n, r) {
            for (var o = d(n) ? e[0] : n, i = 0; i < e.length; i++) o = t.call(r, o, e[i], i);
            return o
        },
        Ee = function(e, t, n) {
            for (var r = 0, o = e.length; r < o; r++)
                if (t.call(n, e[r], r, e)) return r;
            return -1
        },
        ke = function(e) {
            return e[e.length - 1]
        },
        _e = function() {
            return (_e = Object.assign || function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }).apply(this, arguments)
        };
    function Ae() {
        for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
        for (var r = Array(e), o = 0, t = 0; t < n; t++)
            for (var i = arguments[t], a = 0, u = i.length; a < u; a++, o++) r[o] = i[a];
        return r
    }
    var Re, Te, De, Oe, Be, Pe, Le, Ie = function(e, t) {
            var n = function(e, t) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    if (r.test(t)) return r
                }
                return undefined
            }(e, t);
            if (!n) return {
                major: 0,
                minor: 0
            };
            var r = function(e) {
                return Number(t.replace(n, "$" + e))
            };
            return Fe(r(1), r(2))
        },
        Me = function() {
            return Fe(0, 0)
        },
        Fe = function(e, t) {
            return {
                major: e,
                minor: t
            }
        },
        Ue = {
            nu: Fe,
            detect: function(e, t) {
                var n = String(t).toLowerCase();
                return 0 === e.length ? Me() : Ie(e, n)
            },
            unknown: Me
        },
        ze = function(e, t) {
            var n = String(t).toLowerCase();
            return W(e, function(e) {
                return e.search(n)
            })
        },
        je = function(e, n) {
            return ze(e, n).map(function(e) {
                var t = Ue.detect(e.versionRegexes, n);
                return {
                    current: e.name,
                    version: t
                }
            })
        },
        He = function(e, n) {
            return ze(e, n).map(function(e) {
                var t = Ue.detect(e.versionRegexes, n);
                return {
                    current: e.name,
                    version: t
                }
            })
        },
        Ve = function(e, t) {
            return -1 !== e.indexOf(t)
        },
        qe = function(e, t) {
            return n = e, o = 0, "" === (r = t) || n.length >= r.length && n.substr(o, o + r.length) === r;
            var n, r, o
        },
        $e = function(t) {
            return function(e) {
                return e.replace(t, "")
            }
        },
        We = $e(/^\s+|\s+$/g),
        Ke = $e(/^\s+/g),
        Xe = $e(/\s+$/g),
        Ye = function(e) {
            return 0 < e.length
        },
        Ge = /.*?version\/\ ?([0-9]+)\.([0-9]+).*/,
        Je = function(t) {
            return function(e) {
                return Ve(e, t)
            }
        },
        Qe = [{
            name: "Edge",
            versionRegexes: [/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],
            search: function(e) {
                return Ve(e, "edge/") && Ve(e, "chrome") && Ve(e, "safari") && Ve(e, "applewebkit")
            }
        }, {
            name: "Chrome",
            versionRegexes: [/.*?chrome\/([0-9]+)\.([0-9]+).*/, Ge],
            search: function(e) {
                return Ve(e, "chrome") && !Ve(e, "chromeframe")
            }
        }, {
            name: "IE",
            versionRegexes: [/.*?msie\ ?([0-9]+)\.([0-9]+).*/, /.*?rv:([0-9]+)\.([0-9]+).*/],
            search: function(e) {
                return Ve(e, "msie") || Ve(e, "trident")
            }
        }, {
            name: "Opera",
            versionRegexes: [Ge, /.*?opera\/([0-9]+)\.([0-9]+).*/],
            search: Je("opera")
        }, {
            name: "Firefox",
            versionRegexes: [/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],
            search: Je("firefox")
        }, {
            name: "Safari",
            versionRegexes: [Ge, /.*?cpu os ([0-9]+)_([0-9]+).*/],
            search: function(e) {
                return (Ve(e, "safari") || Ve(e, "mobile/")) && Ve(e, "applewebkit")
            }
        }],
        Ze = [{
            name: "Windows",
            search: Je("win"),
            versionRegexes: [/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]
        }, {
            name: "iOS",
            search: function(e) {
                return Ve(e, "iphone") || Ve(e, "ipad")
            },
            versionRegexes: [/.*?version\/\ ?([0-9]+)\.([0-9]+).*/, /.*cpu os ([0-9]+)_([0-9]+).*/, /.*cpu iphone os ([0-9]+)_([0-9]+).*/]
        }, {
            name: "Android",
            search: Je("android"),
            versionRegexes: [/.*?android\ ?([0-9]+)\.([0-9]+).*/]
        }, {
            name: "OSX",
            search: Je("mac os x"),
            versionRegexes: [/.*?mac\ os\ x\ ?([0-9]+)_([0-9]+).*/]
        }, {
            name: "Linux",
            search: Je("linux"),
            versionRegexes: []
        }, {
            name: "Solaris",
            search: Je("sunos"),
            versionRegexes: []
        }, {
            name: "FreeBSD",
            search: Je("freebsd"),
            versionRegexes: []
        }, {
            name: "ChromeOS",
            search: Je("cros"),
            versionRegexes: [/.*?chrome\/([0-9]+)\.([0-9]+).*/]
        }],
        et = {
            browsers: E(Qe),
            oses: E(Ze)
        },
        tt = "Firefox",
        nt = function(e) {
            var t = e.current,
                n = e.version,
                r = function(e) {
                    return function() {
                        return t === e
                    }
                };
            return {
                current: t,
                version: n,
                isEdge: r("Edge"),
                isChrome: r("Chrome"),
                isIE: r("IE"),
                isOpera: r("Opera"),
                isFirefox: r(tt),
                isSafari: r("Safari")
            }
        },
        rt = {
            unknown: function() {
                return nt({
                    current: undefined,
                    version: Ue.unknown()
                })
            },
            nu: nt,
            edge: E("Edge"),
            chrome: E("Chrome"),
            ie: E("IE"),
            opera: E("Opera"),
            firefox: E(tt),
            safari: E("Safari")
        },
        ot = "Windows",
        it = "Android",
        at = "Solaris",
        ut = "FreeBSD",
        st = "ChromeOS",
        ct = function(e) {
            var t = e.current,
                n = e.version,
                r = function(e) {
                    return function() {
                        return t === e
                    }
                };
            return {
                current: t,
                version: n,
                isWindows: r(ot),
                isiOS: r("iOS"),
                isAndroid: r(it),
                isOSX: r("OSX"),
                isLinux: r("Linux"),
                isSolaris: r(at),
                isFreeBSD: r(ut),
                isChromeOS: r(st)
            }
        },
        lt = {
            unknown: function() {
                return ct({
                    current: undefined,
                    version: Ue.unknown()
                })
            },
            nu: ct,
            windows: E(ot),
            ios: E("iOS"),
            android: E(it),
            linux: E("Linux"),
            osx: E("OSX"),
            solaris: E(at),
            freebsd: E(ut),
            chromeos: E(st)
        },
        ft = function(e, t) {
            var n, r, o, i, a, u, s, c, l, f, d, m, g = et.browsers(),
                p = et.oses(),
                h = je(g, e).fold(rt.unknown, rt.nu),
                v = He(p, e).fold(lt.unknown, lt.nu);
            return {
                browser: h,
                os: v,
                deviceType: (r = h, o = e, i = t, a = (n = v).isiOS() && !0 === /ipad/i.test(o), u = n.isiOS() && !a, s = n.isiOS() || n.isAndroid(), c = s || i("(pointer:coarse)"), l = a || !u && s && i("(min-device-width:768px)"), f = u || s && !l, d = r.isSafari() && n.isiOS() && !1 === /safari/i.test(o), m = !f && !l && !d, {
                    isiPad: E(a),
                    isiPhone: E(u),
                    isTablet: E(l),
                    isPhone: E(f),
                    isTouch: E(c),
                    isAndroid: n.isAndroid,
                    isiOS: n.isiOS,
                    isWebView: E(d),
                    isDesktop: E(m)
                })
            }
        },
        dt = function(e) {
            return window.matchMedia(e).matches
        },
        mt = (De = !(Re = function() {
            return ft(navigator.userAgent, dt)
        }), function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return De || (De = !0, Te = Re.apply(null, e)), Te
        }),
        gt = function() {
            return mt()
        },
        pt = navigator.userAgent,
        ht = gt(),
        vt = ht.browser,
        yt = ht.os,
        bt = ht.deviceType,
        Ct = /WebKit/.test(pt) && !vt.isEdge(),
        wt = "FormData" in window && "FileReader" in window && "URL" in window && !!URL.createObjectURL,
        xt = -1 !== pt.indexOf("Windows Phone"),
        St = {
            opera: vt.isOpera(),
            webkit: Ct,
            ie: !(!vt.isIE() && !vt.isEdge()) && vt.version.major,
            gecko: vt.isFirefox(),
            mac: yt.isOSX() || yt.isiOS(),
            iOS: bt.isiPad() || bt.isiPhone(),
            android: yt.isAndroid(),
            contentEditable: !0,
            transparentSrc: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
            caretAfter: !0,
            range: window.getSelection && "Range" in window,
            documentMode: vt.isIE() ? document.documentMode || 7 : 10,
            fileApi: wt,
            ceFalse: !0,
            cacheSuffix: null,
            container: null,
            experimentalShadowDom: !1,
            canHaveCSP: !vt.isIE(),
            desktop: bt.isDesktop(),
            windowsPhone: xt,
            browser: {
                current: vt.current,
                version: vt.version,
                isChrome: vt.isChrome,
                isEdge: vt.isEdge,
                isFirefox: vt.isFirefox,
                isIE: vt.isIE,
                isOpera: vt.isOpera,
                isSafari: vt.isSafari
            },
            os: {
                current: yt.current,
                version: yt.version,
                isAndroid: yt.isAndroid,
                isChromeOS: yt.isChromeOS,
                isFreeBSD: yt.isFreeBSD,
                isiOS: yt.isiOS,
                isLinux: yt.isLinux,
                isOSX: yt.isOSX,
                isSolaris: yt.isSolaris,
                isWindows: yt.isWindows
            },
            deviceType: {
                isDesktop: bt.isDesktop,
                isiPad: bt.isiPad,
                isiPhone: bt.isiPhone,
                isPhone: bt.isPhone,
                isTablet: bt.isTablet,
                isTouch: bt.isTouch,
                isWebView: bt.isWebView
            }
        },
        Nt = /^\s*|\s*$/g,
        Et = function(e) {
            return null === e || e === undefined ? "" : ("" + e).replace(Nt, "")
        },
        kt = function(e, t) {
            return t ? !("array" !== t || !be(e)) || typeof e === t : e !== undefined
        },
        _t = function(e, n, r, o) {
            o = o || this, e && (r && (e = e[r]), Ce(e, function(e, t) {
                return !1 !== n.call(o, e, t, r) && void _t(e, n, r, o)
            }))
        },
        At = {
            trim: Et,
            isArray: be,
            is: kt,
            toArray: function(e) {
                if (be(e)) return e;
                for (var t = [], n = 0, r = e.length; n < r; n++) t[n] = e[n];
                return t
            },
            makeMap: function(e, t, n) {
                var r;
                for (t = t || ",", "string" == typeof(e = e || []) && (e = e.split(t)), n = n || {}, r = e.length; r--;) n[e[r]] = {};
                return n
            },
            each: Ce,
            map: we,
            grep: xe,
            inArray: Se,
            hasOwn: function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            },
            extend: function(e) {
                for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                for (var r = 0; r < t.length; r++) {
                    var o, i = t[r];
                    for (var a in i) {
                        !i.hasOwnProperty(a) || (o = i[a]) !== undefined && (e[a] = o)
                    }
                }
                return e
            },
            create: function(e, t, n) {
                var r, o, i, a = this,
                    u = 0,
                    s = (e = /^((static) )?([\w.]+)(:([\w.]+))?/.exec(e))[3].match(/(^|\.)(\w+)$/i)[2],
                    c = a.createNS(e[3].replace(/\.\w+$/, ""), n);
                if (!c[s]) {
                    if ("static" === e[2]) return c[s] = t, void(this.onCreate && this.onCreate(e[2], e[3], c[s]));
                    t[s] || (t[s] = function() {}, u = 1), c[s] = t[s], a.extend(c[s].prototype, t), e[5] && (r = a.resolve(e[5]).prototype, o = e[5].match(/\.(\w+)$/i)[1], i = c[s], c[s] = u ? function() {
                        return r[o].apply(this, arguments)
                    } : function() {
                        return this.parent = r[o], i.apply(this, arguments)
                    }, c[s].prototype[s] = c[s], a.each(r, function(e, t) {
                        c[s].prototype[t] = r[t]
                    }), a.each(t, function(e, t) {
                        r[t] ? c[s].prototype[t] = function() {
                            return this.parent = r[t], e.apply(this, arguments)
                        } : t !== s && (c[s].prototype[t] = e)
                    })), a.each(t["static"], function(e, t) {
                        c[s][t] = e
                    })
                }
            },
            walk: _t,
            createNS: function(e, t) {
                var n, r;
                for (t = t || window, e = e.split("."), n = 0; n < e.length; n++) t[r = e[n]] || (t[r] = {}), t = t[r];
                return t
            },
            resolve: function(e, t) {
                var n, r;
                for (t = t || window, n = 0, r = (e = e.split(".")).length; n < r && (t = t[e[n]]); n++);
                return t
            },
            explode: function(e, t) {
                return !e || kt(e, "array") ? e : we(e.split(t || ","), Et)
            },
            _addCacheSuffix: function(e) {
                var t = St.cacheSuffix;
                return t && (e += (-1 === e.indexOf("?") ? "?" : "&") + t), e
            }
        },
        Rt = function(e) {
            if (null === e || e === undefined) throw new Error("Node cannot be null or undefined");
            return {
                dom: e
            }
        },
        Tt = {
            fromHtml: function(e, t) {
                var n = (t || document).createElement("div");
                if (n.innerHTML = e, !n.hasChildNodes() || 1 < n.childNodes.length) throw console.error("HTML does not have a single root node", e), new Error("HTML must have a single root node");
                return Rt(n.childNodes[0])
            },
            fromTag: function(e, t) {
                var n = (t || document).createElement(e);
                return Rt(n)
            },
            fromText: function(e, t) {
                var n = (t || document).createTextNode(e);
                return Rt(n)
            },
            fromDom: Rt,
            fromPoint: function(e, t, n) {
                return U.from(e.dom.elementFromPoint(t, n)).map(Rt)
            }
        },
        Dt = function(e, t) {
            for (var n = [], r = function(e) {
                    return n.push(e), t(e)
                }, o = t(e);
                (o = o.bind(r)).isSome(););
            return n
        },
        Ot = function(e, t) {
            var n = e.dom;
            if (1 !== n.nodeType) return !1;
            var r = n;
            if (r.matches !== undefined) return r.matches(t);
            if (r.msMatchesSelector !== undefined) return r.msMatchesSelector(t);
            if (r.webkitMatchesSelector !== undefined) return r.webkitMatchesSelector(t);
            if (r.mozMatchesSelector !== undefined) return r.mozMatchesSelector(t);
            throw new Error("Browser lacks native selectors")
        },
        Bt = function(e) {
            return 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType || 0 === e.childElementCount
        },
        Pt = function(e, t) {
            return e.dom === t.dom
        },
        Lt = function(e, t) {
            return n = e.dom, r = t.dom, o = n, i = r, a = Node.DOCUMENT_POSITION_CONTAINED_BY, 0 != (o.compareDocumentPosition(i) & a);
            var n, r, o, i, a
        },
        It = function(e, t) {
            return gt().browser.isIE() ? Lt(e, t) : (n = t, r = e.dom, o = n.dom, r !== o && r.contains(o));
            var n, r, o
        },
        Mt = ("undefined" != typeof window || Function("return this;")(), function(e) {
            return e.dom.nodeName.toLowerCase()
        }),
        Ft = function(e) {
            return e.dom.nodeType
        },
        Ut = function(t) {
            return function(e) {
                return Ft(e) === t
            }
        },
        zt = Ut(1),
        jt = Ut(3),
        Ht = Ut(9),
        Vt = Ut(11),
        qt = function(e) {
            return Tt.fromDom(e.dom.ownerDocument)
        },
        $t = function(e) {
            return Ht(e) ? e : qt(e)
        },
        Wt = function(e) {
            return Tt.fromDom($t(e).dom.defaultView)
        },
        Kt = function(e) {
            return U.from(e.dom.parentNode).map(Tt.fromDom)
        },
        Xt = function(e) {
            return U.from(e.dom.previousSibling).map(Tt.fromDom)
        },
        Yt = function(e) {
            return U.from(e.dom.nextSibling).map(Tt.fromDom)
        },
        Gt = function(e) {
            return Z(Dt(e, Xt))
        },
        Jt = function(e) {
            return Dt(e, Yt)
        },
        Qt = function(e) {
            return z(e.dom.childNodes, Tt.fromDom)
        },
        Zt = function(e, t) {
            var n = e.dom.childNodes;
            return U.from(n[t]).map(Tt.fromDom)
        },
        en = function(e) {
            return Zt(e, 0)
        },
        tn = function(e) {
            return Zt(e, e.dom.childNodes.length - 1)
        },
        nn = function(e) {
            return Vt(e) && V(e.dom.host)
        },
        rn = m(Element.prototype.attachShadow) && m(Node.prototype.getRootNode),
        on = E(rn),
        an = rn ? function(e) {
            return Tt.fromDom(e.dom.getRootNode())
        } : $t,
        un = function(e) {
            return nn(e) ? e : function(e) {
                var t = e.dom.head;
                if (null === t || t === undefined) throw new Error("Head is not available yet");
                return Tt.fromDom(t)
            }($t(e))
        },
        sn = function(e) {
            return Tt.fromDom(e.dom.host)
        },
        cn = function(e) {
            return V(e.dom.shadowRoot)
        },
        ln = function(t, n) {
            Kt(t).each(function(e) {
                e.dom.insertBefore(n.dom, t.dom)
            })
        },
        fn = function(e, t) {
            Yt(e).fold(function() {
                Kt(e).each(function(e) {
                    mn(e, t)
                })
            }, function(e) {
                ln(e, t)
            })
        },
        dn = function(t, n) {
            en(t).fold(function() {
                mn(t, n)
            }, function(e) {
                t.dom.insertBefore(n.dom, e.dom)
            })
        },
        mn = function(e, t) {
            e.dom.appendChild(t.dom)
        },
        gn = function(t, e) {
            Y(e, function(e) {
                mn(t, e)
            })
        },
        pn = function(e) {
            e.dom.textContent = "", Y(Qt(e), function(e) {
                hn(e)
            })
        },
        hn = function(e) {
            var t = e.dom;
            null !== t.parentNode && t.parentNode.removeChild(t)
        },
        vn = function(e) {
            var t, n = Qt(e);
            0 < n.length && (t = e, Y(n, function(e) {
                ln(t, e)
            })), hn(e)
        },
        yn = function(e) {
            var t = jt(e) ? e.dom.parentNode : e.dom;
            if (t === undefined || null === t || null === t.ownerDocument) return !1;
            var n, r, o, i, a = t.ownerDocument;
            return o = Tt.fromDom(t), i = an(o), (nn(i) ? U.some(i) : U.none()).fold(function() {
                return a.body.contains(t)
            }, (n = yn, r = sn, function(e) {
                return n(r(e))
            }))
        },
        bn = function(n, r) {
            return {
                left: n,
                top: r,
                translate: function(e, t) {
                    return bn(n + e, r + t)
                }
            }
        },
        Cn = bn,
        wn = function(e, t) {
            return e !== undefined ? e : t !== undefined ? t : 0
        },
        xn = function(e) {
            var t, n = e.dom,
                r = n.ownerDocument.body;
            return r === n ? Cn(r.offsetLeft, r.offsetTop) : yn(e) ? (t = n.getBoundingClientRect(), Cn(t.left, t.top)) : Cn(0, 0)
        },
        Sn = function(e) {
            var t = e !== undefined ? e.dom : document,
                n = t.body.scrollLeft || t.documentElement.scrollLeft,
                r = t.body.scrollTop || t.documentElement.scrollTop;
            return Cn(n, r)
        },
        Nn = function(e, t, n) {
            var r = (n !== undefined ? n.dom : document).defaultView;
            r && r.scrollTo(e, t)
        },
        En = function(e, t) {
            gt().browser.isSafari() && m(e.dom.scrollIntoViewIfNeeded) ? e.dom.scrollIntoViewIfNeeded(!1) : e.dom.scrollIntoView(t)
        },
        kn = function(e, t, n, r) {
            return {
                x: e,
                y: t,
                width: n,
                height: r,
                right: e + n,
                bottom: t + r
            }
        },
        _n = function(e) {
            var t, n, r = e === undefined ? window : e,
                o = r.document,
                i = Sn(Tt.fromDom(o));
            return n = (t = r) === undefined ? window : t, U.from(n.visualViewport).fold(function() {
                var e = r.document.documentElement,
                    t = e.clientWidth,
                    n = e.clientHeight;
                return kn(i.left, i.top, t, n)
            }, function(e) {
                return kn(Math.max(e.pageLeft, i.left), Math.max(e.pageTop, i.top), e.width, e.height)
            })
        },
        An = function(t) {
            return function(e) {
                return !!e && e.nodeType === t
            }
        },
        Rn = function(e) {
            return !!e && !Object.getPrototypeOf(e)
        },
        Tn = An(1),
        Dn = function(e) {
            var n = e.map(function(e) {
                return e.toLowerCase()
            });
            return function(e) {
                if (e && e.nodeName) {
                    var t = e.nodeName.toLowerCase();
                    return M(n, t)
                }
                return !1
            }
        },
        On = function(r, e) {
            var o = e.toLowerCase().split(" ");
            return function(e) {
                var t;
                if (Tn(e))
                    for (t = 0; t < o.length; t++) {
                        var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
                        if ((n ? n.getPropertyValue(r) : null) === o[t]) return !0
                    }
                return !1
            }
        },
        Bn = function(t) {
            return function(e) {
                return Tn(e) && e.hasAttribute(t)
            }
        },
        Pn = function(e) {
            return Tn(e) && e.hasAttribute("data-mce-bogus")
        },
        Ln = function(e) {
            return Tn(e) && "TABLE" === e.tagName
        },
        In = function(t) {
            return function(e) {
                if (Tn(e)) {
                    if (e.contentEditable === t) return !0;
                    if (e.getAttribute("data-mce-contenteditable") === t) return !0
                }
                return !1
            }
        },
        Mn = Dn(["textarea", "input"]),
        Fn = An(3),
        Un = An(8),
        zn = An(9),
        jn = An(11),
        Hn = Dn(["br"]),
        Vn = Dn(["img"]),
        qn = In("true"),
        $n = In("false"),
        Wn = Dn(["td", "th"]),
        Kn = Dn(["video", "audio", "object", "embed"]),
        Xn = function(e) {
            return e.style !== undefined && m(e.style.getPropertyValue)
        },
        Yn = function(e, t, n) {
            if (!(K(n) || f(n) || N(n))) throw console.error("Invalid call to Attribute.set. Key ", t, ":: Value ", n, ":: Element ", e), new Error("Attribute value was not simple");
            e.setAttribute(t, n + "")
        },
        Gn = function(e, t, n) {
            Yn(e.dom, t, n)
        },
        Jn = function(e, t) {
            var n = e.dom;
            se(t, function(e, t) {
                Yn(n, t, e)
            })
        },
        Qn = function(e, t) {
            var n = e.dom.getAttribute(t);
            return null === n ? undefined : n
        },
        Zn = function(e, t) {
            return U.from(Qn(e, t))
        },
        er = function(e, t) {
            e.dom.removeAttribute(t)
        },
        tr = function(e, t) {
            var n = e.dom;
            se(t, function(e, t) {
                ! function(e, t, n) {
                    if (!K(n)) throw console.error("Invalid call to CSS.set. Property ", t, ":: Value ", n, ":: Element ", e), new Error("CSS value must be a string: " + n);
                    Xn(e) && e.style.setProperty(t, n)
                }(n, t, e)
            })
        },
        nr = function(e, t) {
            var n = e.dom,
                r = window.getComputedStyle(n).getPropertyValue(t);
            return "" !== r || yn(e) ? r : rr(n, t)
        },
        rr = function(e, t) {
            return Xn(e) ? e.style.getPropertyValue(t) : ""
        },
        or = function(e, t) {
            var n = e.dom,
                r = rr(n, t);
            return U.from(r).filter(function(e) {
                return 0 < e.length
            })
        },
        ir = function(e) {
            var t = {},
                n = e.dom;
            if (Xn(n))
                for (var r = 0; r < n.style.length; r++) {
                    var o = n.style.item(r);
                    t[o] = n.style[o]
                }
            return t
        },
        ar = gt().browser,
        ur = function(e) {
            return W(e, zt)
        },
        sr = function(e, t) {
            return e.children && M(e.children, t)
        },
        cr = function(e, t, n) {
            var r, o, i, a = 0,
                u = 0,
                s = e.ownerDocument;
            if (n = n || e, t) {
                if (n === e && t.getBoundingClientRect && "static" === nr(Tt.fromDom(e), "position")) return {
                    x: a = (o = t.getBoundingClientRect()).left + (s.documentElement.scrollLeft || e.scrollLeft) - s.documentElement.clientLeft,
                    y: u = o.top + (s.documentElement.scrollTop || e.scrollTop) - s.documentElement.clientTop
                };
                for (r = t; r && r !== n && r.nodeType && !sr(r, n);) a += r.offsetLeft || 0, u += r.offsetTop || 0, r = r.offsetParent;
                for (r = t.parentNode; r && r !== n && r.nodeType && !sr(r, n);) a -= r.scrollLeft || 0, u -= r.scrollTop || 0, r = r.parentNode;
                u += (i = Tt.fromDom(t), ar.isFirefox() && "table" === Mt(i) ? ur(Qt(i)).filter(function(e) {
                    return "caption" === Mt(e)
                }).bind(function(o) {
                    return ur(Jt(o)).map(function(e) {
                        var t = e.dom.offsetTop,
                            n = o.dom.offsetTop,
                            r = o.dom.offsetHeight;
                        return t <= n ? -r : 0
                    })
                }).getOr(0) : 0)
            }
            return {
                x: a,
                y: u
            }
        },
        lr = {},
        fr = {
            exports: lr
        };
    Oe = undefined, Be = lr, Pe = fr, Le = undefined,
        function(e) {
            "object" == typeof Be && void 0 !== Pe ? Pe.exports = e() : "function" == typeof Oe && Oe.amd ? Oe([], e) : ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).EphoxContactWrapper = e()
        }(function() {
            return function l(i, a, u) {
                function s(t, e) {
                    if (!a[t]) {
                        if (!i[t]) {
                            var n = "function" == typeof Le && Le;
                            if (!e && n) return n(t, !0);
                            if (c) return c(t, !0);
                            var r = new Error("Cannot find module '" + t + "'");
                            throw r.code = "MODULE_NOT_FOUND", r
                        }
                        var o = a[t] = {
                            exports: {}
                        };
                        i[t][0].call(o.exports, function(e) {
                            return s(i[t][1][e] || e)
                        }, o, o.exports, l, i, a, u)
                    }
                    return a[t].exports
                }
                for (var c = "function" == typeof Le && Le, e = 0; e < u.length; e++) s(u[e]);
                return s
            }({
                1: [function(e, t, n) {
                    var r, o, i = t.exports = {};
                    function a() {
                        throw new Error("setTimeout has not been defined")
                    }
                    function u() {
                        throw new Error("clearTimeout has not been defined")
                    }
                    function s(e) {
                        if (r === setTimeout) return setTimeout(e, 0);
                        if ((r === a || !r) && setTimeout) return r = setTimeout, setTimeout(e, 0);
                        try {
                            return r(e, 0)
                        } catch (t) {
                            try {
                                return r.call(null, e, 0)
                            } catch (t) {
                                return r.call(this, e, 0)
                            }
                        }
                    }! function() {
                        try {
                            r = "function" == typeof setTimeout ? setTimeout : a
                        } catch (e) {
                            r = a
                        }
                        try {
                            o = "function" == typeof clearTimeout ? clearTimeout : u
                        } catch (e) {
                            o = u
                        }
                    }();
                    var c, l = [],
                        f = !1,
                        d = -1;
                    function m() {
                        f && c && (f = !1, c.length ? l = c.concat(l) : d = -1, l.length && g())
                    }
                    function g() {
                        if (!f) {
                            var e = s(m);
                            f = !0;
                            for (var t = l.length; t;) {
                                for (c = l, l = []; ++d < t;) c && c[d].run();
                                d = -1, t = l.length
                            }
                            c = null, f = !1,
                                function(e) {
                                    if (o === clearTimeout) return clearTimeout(e);
                                    if ((o === u || !o) && clearTimeout) return o = clearTimeout, clearTimeout(e);
                                    try {
                                        o(e)
                                    } catch (t) {
                                        try {
                                            return o.call(null, e)
                                        } catch (t) {
                                            return o.call(this, e)
                                        }
                                    }
                                }(e)
                        }
                    }
                    function p(e, t) {
                        this.fun = e, this.array = t
                    }
                    function h() {}
                    i.nextTick = function(e) {
                        var t = new Array(arguments.length - 1);
                        if (1 < arguments.length)
                            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                        l.push(new p(e, t)), 1 !== l.length || f || s(g)
                    }, p.prototype.run = function() {
                        this.fun.apply(null, this.array)
                    }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = h, i.addListener = h, i.once = h, i.off = h, i.removeListener = h, i.removeAllListeners = h, i.emit = h, i.prependListener = h, i.prependOnceListener = h, i.listeners = function(e) {
                        return []
                    }, i.binding = function(e) {
                        throw new Error("process.binding is not supported")
                    }, i.cwd = function() {
                        return "/"
                    }, i.chdir = function(e) {
                        throw new Error("process.chdir is not supported")
                    }, i.umask = function() {
                        return 0
                    }
                }, {}],
                2: [function(e, f, t) {
                    (function(t) {
                        function r() {}
                        function a(e) {
                            if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
                            if ("function" != typeof e) throw new TypeError("not a function");
                            this._state = 0, this._handled = !1, this._value = undefined, this._deferreds = [], l(e, this)
                        }
                        function o(r, o) {
                            for (; 3 === r._state;) r = r._value;
                            0 !== r._state ? (r._handled = !0, a._immediateFn(function() {
                                var e, t = 1 === r._state ? o.onFulfilled : o.onRejected;
                                if (null !== t) {
                                    try {
                                        e = t(r._value)
                                    } catch (n) {
                                        return void u(o.promise, n)
                                    }
                                    i(o.promise, e)
                                } else(1 === r._state ? i : u)(o.promise, r._value)
                            })) : r._deferreds.push(o)
                        }
                        function i(e, t) {
                            try {
                                if (t === e) throw new TypeError("A promise cannot be resolved with itself.");
                                if (t && ("object" == typeof t || "function" == typeof t)) {
                                    var n = t.then;
                                    if (t instanceof a) return e._state = 3, e._value = t, void s(e);
                                    if ("function" == typeof n) return void l((r = n, o = t, function() {
                                        r.apply(o, arguments)
                                    }), e)
                                }
                                e._state = 1, e._value = t, s(e)
                            } catch (i) {
                                u(e, i)
                            }
                            var r, o
                        }
                        function u(e, t) {
                            e._state = 2, e._value = t, s(e)
                        }
                        function s(e) {
                            2 === e._state && 0 === e._deferreds.length && a._immediateFn(function() {
                                e._handled || a._unhandledRejectionFn(e._value)
                            });
                            for (var t = 0, n = e._deferreds.length; t < n; t++) o(e, e._deferreds[t]);
                            e._deferreds = null
                        }
                        function c(e, t, n) {
                            this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = n
                        }
                        function l(e, t) {
                            var n = !1;
                            try {
                                e(function(e) {
                                    n || (n = !0, i(t, e))
                                }, function(e) {
                                    n || (n = !0, u(t, e))
                                })
                            } catch (r) {
                                if (n) return;
                                n = !0, u(t, r)
                            }
                        }
                        var e, n;
                        e = this, n = setTimeout, a.prototype["catch"] = function(e) {
                            return this.then(null, e)
                        }, a.prototype.then = function(e, t) {
                            var n = new this.constructor(r);
                            return o(this, new c(e, t, n)), n
                        }, a.all = function(e) {
                            var s = Array.prototype.slice.call(e);
                            return new a(function(o, i) {
                                if (0 === s.length) return o([]);
                                var a = s.length;
                                for (var e = 0; e < s.length; e++) ! function u(t, e) {
                                    try {
                                        if (e && ("object" == typeof e || "function" == typeof e)) {
                                            var n = e.then;
                                            if ("function" == typeof n) return void n.call(e, function(e) {
                                                u(t, e)
                                            }, i)
                                        }
                                        s[t] = e, 0 == --a && o(s)
                                    } catch (r) {
                                        i(r)
                                    }
                                }(e, s[e])
                            })
                        }, a.resolve = function(t) {
                            return t && "object" == typeof t && t.constructor === a ? t : new a(function(e) {
                                e(t)
                            })
                        }, a.reject = function(n) {
                            return new a(function(e, t) {
                                t(n)
                            })
                        }, a.race = function(o) {
                            return new a(function(e, t) {
                                for (var n = 0, r = o.length; n < r; n++) o[n].then(e, t)
                            })
                        }, a._immediateFn = "function" == typeof t ? function(e) {
                            t(e)
                        } : function(e) {
                            n(e, 0)
                        }, a._unhandledRejectionFn = function(e) {
                            "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
                        }, a._setImmediateFn = function(e) {
                            a._immediateFn = e
                        }, a._setUnhandledRejectionFn = function(e) {
                            a._unhandledRejectionFn = e
                        }, void 0 !== f && f.exports ? f.exports = a : e.Promise || (e.Promise = a)
                    }).call(this, e("timers").setImmediate)
                }, {
                    timers: 3
                }],
                3: [function(s, e, c) {
                    (function(e, t) {
                        var r = s("process/browser.js").nextTick,
                            n = Function.prototype.apply,
                            o = Array.prototype.slice,
                            i = {},
                            a = 0;
                        function u(e, t) {
                            this._id = e, this._clearFn = t
                        }
                        c.setTimeout = function() {
                            return new u(n.call(setTimeout, window, arguments), clearTimeout)
                        }, c.setInterval = function() {
                            return new u(n.call(setInterval, window, arguments), clearInterval)
                        }, c.clearTimeout = c.clearInterval = function(e) {
                            e.close()
                        }, u.prototype.unref = u.prototype.ref = function() {}, u.prototype.close = function() {
                            this._clearFn.call(window, this._id)
                        }, c.enroll = function(e, t) {
                            clearTimeout(e._idleTimeoutId), e._idleTimeout = t
                        }, c.unenroll = function(e) {
                            clearTimeout(e._idleTimeoutId), e._idleTimeout = -1
                        }, c._unrefActive = c.active = function(e) {
                            clearTimeout(e._idleTimeoutId);
                            var t = e._idleTimeout;
                            0 <= t && (e._idleTimeoutId = setTimeout(function() {
                                e._onTimeout && e._onTimeout()
                            }, t))
                        }, c.setImmediate = "function" == typeof e ? e : function(e) {
                            var t = a++,
                                n = !(arguments.length < 2) && o.call(arguments, 1);
                            return i[t] = !0, r(function() {
                                i[t] && (n ? e.apply(null, n) : e.call(null), c.clearImmediate(t))
                            }), t
                        }, c.clearImmediate = "function" == typeof t ? t : function(e) {
                            delete i[e]
                        }
                    }).call(this, s("timers").setImmediate, s("timers").clearImmediate)
                }, {
                    "process/browser.js": 1,
                    timers: 3
                }],
                4: [function(e, t, n) {
                    var r = e("promise-polyfill"),
                        o = "undefined" != typeof window ? window : Function("return this;")();
                    t.exports = {
                        boltExport: o.Promise || r
                    }
                }, {
                    "promise-polyfill": 2
                }]
            }, {}, [4])(4)
        });
    var dr = fr.exports.boltExport,
        mr = function(e) {
            var n = U.none(),
                t = [],
                r = function(e) {
                    o() ? a(e) : t.push(e)
                },
                o = function() {
                    return n.isSome()
                },
                i = function(e) {
                    Y(e, a)
                },
                a = function(t) {
                    n.each(function(e) {
                        setTimeout(function() {
                            t(e)
                        }, 0)
                    })
                };
            return e(function(e) {
                o() || (n = U.some(e), i(t), t = [])
            }), {
                get: r,
                map: function(n) {
                    return mr(function(t) {
                        r(function(e) {
                            t(n(e))
                        })
                    })
                },
                isReady: o
            }
        },
        gr = {
            nu: mr,
            pure: function(t) {
                return mr(function(e) {
                    e(t)
                })
            }
        },
        pr = function(e) {
            setTimeout(function() {
                throw e
            }, 0)
        },
        hr = function(n) {
            var e = function(e) {
                n().then(e, pr)
            };
            return {
                map: function(e) {
                    return hr(function() {
                        return n().then(e)
                    })
                },
                bind: function(t) {
                    return hr(function() {
                        return n().then(function(e) {
                            return t(e).toPromise()
                        })
                    })
                },
                anonBind: function(e) {
                    return hr(function() {
                        return n().then(function() {
                            return e.toPromise()
                        })
                    })
                },
                toLazy: function() {
                    return gr.nu(e)
                },
                toCached: function() {
                    var e = null;
                    return hr(function() {
                        return null === e && (e = n()), e
                    })
                },
                toPromise: n,
                get: e
            }
        },
        vr = function(e) {
            return hr(function() {
                return new dr(e)
            })
        },
        yr = function(a, e) {
            return e(function(r) {
                var o = [],
                    i = 0;
                0 === a.length ? r([]) : Y(a, function(e, t) {
                    var n;
                    e.get((n = t, function(e) {
                        o[n] = e, ++i >= a.length && r(o)
                    }))
                })
            })
        },
        br = function(n) {
            return {
                is: function(e) {
                    return n === e
                },
                isValue: R,
                isError: A,
                getOr: E(n),
                getOrThunk: E(n),
                getOrDie: E(n),
                or: function(e) {
                    return br(n)
                },
                orThunk: function(e) {
                    return br(n)
                },
                fold: function(e, t) {
                    return t(n)
                },
                map: function(e) {
                    return br(e(n))
                },
                mapError: function(e) {
                    return br(n)
                },
                each: function(e) {
                    e(n)
                },
                bind: function(e) {
                    return e(n)
                },
                exists: function(e) {
                    return e(n)
                },
                forall: function(e) {
                    return e(n)
                },
                toOptional: function() {
                    return U.some(n)
                }
            }
        },
        Cr = function(n) {
            return {
                is: A,
                isValue: A,
                isError: R,
                getOr: g,
                getOrThunk: function(e) {
                    return e()
                },
                getOrDie: function() {
                    return b(String(n))()
                },
                or: function(e) {
                    return e
                },
                orThunk: function(e) {
                    return e()
                },
                fold: function(e, t) {
                    return e(n)
                },
                map: function(e) {
                    return Cr(n)
                },
                mapError: function(e) {
                    return Cr(e(n))
                },
                each: te,
                bind: function(e) {
                    return Cr(n)
                },
                exists: A,
                forall: R,
                toOptional: U.none
            }
        },
        wr = {
            value: br,
            error: Cr,
            fromOption: function(e, t) {
                return e.fold(function() {
                    return Cr(t)
                }, br)
            }
        },
        xr = function(a) {
            if (!S(a)) throw new Error("cases must be an array");
            if (0 === a.length) throw new Error("there must be at least one case");
            var u = [],
                n = {};
            return Y(a, function(e, r) {
                var t = ae(e);
                if (1 !== t.length) throw new Error("one and only one name per case");
                var o = t[0],
                    i = e[o];
                if (n[o] !== undefined) throw new Error("duplicate key detected:" + o);
                if ("cata" === o) throw new Error("cannot have a case named cata (sorry)");
                if (!S(i)) throw new Error("case arguments must be an array");
                u.push(o), n[o] = function() {
                    for (var n = [], e = 0; e < arguments.length; e++) n[e] = arguments[e];
                    var t = n.length;
                    if (t !== i.length) throw new Error("Wrong number of arguments to case " + o + ". Expected " + i.length + " (" + i + "), got " + t);
                    return {
                        fold: function() {
                            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                            if (e.length !== a.length) throw new Error("Wrong number of arguments to fold. Expected " + a.length + ", got " + e.length);
                            return e[r].apply(null, n)
                        },
                        match: function(e) {
                            var t = ae(e);
                            if (u.length !== t.length) throw new Error("Wrong number of arguments to match. Expected: " + u.join(",") + "\nActual: " + t.join(","));
                            if (!Q(u, function(e) {
                                    return M(t, e)
                                })) throw new Error("Not all branches were specified when using match. Specified: " + t.join(", ") + "\nRequired: " + u.join(", "));
                            return e[o].apply(null, n)
                        },
                        log: function(e) {
                            console.log(e, {
                                constructors: u,
                                constructor: o,
                                params: n
                            })
                        }
                    }
                }
            }), n
        },
        Sr = (xr([{
            bothErrors: ["error1", "error2"]
        }, {
            firstError: ["error1", "value2"]
        }, {
            secondError: ["value1", "error2"]
        }, {
            bothValues: ["value1", "value2"]
        }]), function(e) {
            return e.fold(g, g)
        });
    function Nr(e, t, n, r, o) {
        return e(n, r) ? U.some(n) : m(o) && o(n) ? U.none() : t(n, r, o)
    }
    var Er, kr, _r, Ar, Rr, Tr, Dr = function(e, t, n) {
            for (var r = e.dom, o = m(n) ? n : A; r.parentNode;) {
                r = r.parentNode;
                var i = Tt.fromDom(r);
                if (t(i)) return U.some(i);
                if (o(i)) break
            }
            return U.none()
        },
        Or = function(e, t, n) {
            return Nr(function(e, t) {
                return t(e)
            }, Dr, e, t, n)
        },
        Br = function(e, t) {
            return W(e.dom.childNodes, function(e) {
                return t(Tt.fromDom(e))
            }).map(Tt.fromDom)
        },
        Pr = function(e, t, n) {
            return Dr(e, function(e) {
                return Ot(e, t)
            }, n)
        },
        Lr = function(e, t) {
            return n = t, o = (r = e) === undefined ? document : r.dom, Bt(o) ? U.none() : U.from(o.querySelector(n)).map(Tt.fromDom);
            var n, r, o
        },
        Ir = function(e, t, n) {
            return Nr(Ot, Pr, e, t, n)
        },
        Mr = window.Promise ? window.Promise : (Er = function(n, r) {
            return function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                n.apply(r, e)
            }
        }, kr = Array.isArray || function(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        }, Ar = (_r = function(e) {
            if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
            if ("function" != typeof e) throw new TypeError("not a function");
            this._state = null, this._value = null, this._deferreds = [], Rr(e, Er(Ur, this), Er(zr, this))
        }).immediateFn || "function" == typeof setImmediate && setImmediate || function(e) {
            return setTimeout(e, 1)
        }, Rr = function(e, t, n) {
            var r = !1;
            try {
                e(function(e) {
                    r || (r = !0, t(e))
                }, function(e) {
                    r || (r = !0, n(e))
                })
            } catch (o) {
                if (r) return;
                r = !0, n(o)
            }
        }, _r.prototype["catch"] = function(e) {
            return this.then(null, e)
        }, _r.prototype.then = function(n, r) {
            var o = this;
            return new _r(function(e, t) {
                Fr.call(o, new Hr(n, r, e, t))
            })
        }, _r.all = function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            var s = Array.prototype.slice.call(1 === e.length && kr(e[0]) ? e[0] : e);
            return new _r(function(o, i) {
                if (0 === s.length) return o([]);
                for (var a = s.length, u = function(t, e) {
                        try {
                            if (e && ("object" == typeof e || "function" == typeof e)) {
                                var n = e.then;
                                if ("function" == typeof n) return void n.call(e, function(e) {
                                    u(t, e)
                                }, i)
                            }
                            s[t] = e, 0 == --a && o(s)
                        } catch (r) {
                            i(r)
                        }
                    }, e = 0; e < s.length; e++) u(e, s[e])
            })
        }, _r.resolve = function(t) {
            return t && "object" == typeof t && t.constructor === _r ? t : new _r(function(e) {
                e(t)
            })
        }, _r.reject = function(n) {
            return new _r(function(e, t) {
                t(n)
            })
        }, _r.race = function(o) {
            return new _r(function(e, t) {
                for (var n = 0, r = o.length; n < r; n++) o[n].then(e, t)
            })
        }, _r);
    function Fr(r) {
        var o = this;
        null !== this._state ? Ar(function() {
            var e, t = o._state ? r.onFulfilled : r.onRejected;
            if (null !== t) {
                try {
                    e = t(o._value)
                } catch (n) {
                    return void r.reject(n)
                }
                r.resolve(e)
            } else(o._state ? r.resolve : r.reject)(o._value)
        }) : this._deferreds.push(r)
    }
    function Ur(e) {
        try {
            if (e === this) throw new TypeError("A promise cannot be resolved with itself.");
            if (e && ("object" == typeof e || "function" == typeof e)) {
                var t = e.then;
                if ("function" == typeof t) return void Rr(Er(t, e), Er(Ur, this), Er(zr, this))
            }
            this._state = !0, this._value = e, jr.call(this)
        } catch (n) {
            zr.call(this, n)
        }
    }
    function zr(e) {
        this._state = !1, this._value = e, jr.call(this)
    }
    function jr() {
        for (var e = 0, t = this._deferreds.length; e < t; e++) Fr.call(this, this._deferreds[e]);
        this._deferreds = null
    }
    function Hr(e, t, n, r) {
        this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.resolve = n, this.reject = r
    }
    var Vr, qr = function(e, t) {
            return "number" != typeof t && (t = 0), setTimeout(e, t)
        },
        $r = function(e, t) {
            return "number" != typeof t && (t = 1), setInterval(e, t)
        },
        Wr = function(n, r) {
            var o, e = function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                clearTimeout(o), o = qr(function() {
                    n.apply(this, e)
                }, r)
            };
            return e.stop = function() {
                clearTimeout(o)
            }, e
        },
        Kr = {
            requestAnimationFrame: function(e, t) {
                Tr ? Tr.then(e) : Tr = new Mr(function(e) {
                    ! function(e, t) {
                        for (var n = window.requestAnimationFrame, r = ["ms", "moz", "webkit"], o = 0; o < r.length && !n; o++) n = window[r[o] + "RequestAnimationFrame"];
                        (n = n || function(e) {
                            window.setTimeout(e, 0)
                        })(e, t)
                    }(e, t = t || document.body)
                }).then(e)
            },
            setTimeout: qr,
            setInterval: $r,
            setEditorTimeout: function(e, t, n) {
                return qr(function() {
                    e.removed || t()
                }, n)
            },
            setEditorInterval: function(e, t, n) {
                var r = $r(function() {
                    e.removed ? clearInterval(r) : t()
                }, n);
                return r
            },
            debounce: Wr,
            throttle: Wr,
            clearInterval: function(e) {
                return clearInterval(e)
            },
            clearTimeout: function(e) {
                return clearTimeout(e)
            }
        },
        Xr = function(m, g) {
            void 0 === g && (g = {});
            var p = 0,
                h = {},
                v = Tt.fromDom(m),
                y = $t(v),
                b = g.maxLoadTime || 5e3,
                n = function(e, t, n) {
                    var r, o = At._addCacheSuffix(e),
                        i = he(h, o).getOrThunk(function() {
                            return {
                                id: "mce-u" + p++,
                                passed: [],
                                failed: [],
                                count: 0
                            }
                        });
                    (h[o] = i).count++;
                    var a, u, s, c = function(e, t) {
                            for (var n = e.length; n--;) e[n]();
                            i.status = t, i.passed = [], i.failed = [], r && (r.onload = null, r.onerror = null, r = null)
                        },
                        l = function() {
                            return c(i.passed, 2)
                        },
                        f = function() {
                            return c(i.failed, 3)
                        },
                        d = function() {
                            var e;
                            e = d,
                                function() {
                                    for (var e = m.styleSheets, t = e.length; t--;) {
                                        var n = e[t].ownerNode;
                                        if (n && n.id === r.id) return l(), 1
                                    }
                                }() || (Date.now() - u < b ? Kr.setTimeout(e) : f())
                        };
                    t && i.passed.push(t), n && i.failed.push(n), 1 !== i.status && (2 !== i.status ? 3 !== i.status ? (i.status = 1, a = Tt.fromTag("link", y.dom), Jn(a, {
                        rel: "stylesheet",
                        type: "text/css",
                        id: i.id
                    }), u = Date.now(), g.contentCssCors && Gn(a, "crossOrigin", "anonymous"), g.referrerPolicy && Gn(a, "referrerpolicy", g.referrerPolicy), (r = a.dom).onload = d, r.onerror = f, s = a, mn(un(v), s), Gn(a, "href", o)) : f() : l())
                },
                o = function(t) {
                    return vr(function(e) {
                        n(t, C(e, E(wr.value(t))), C(e, E(wr.error(t))))
                    })
                },
                t = function(e) {
                    var r = At._addCacheSuffix(e);
                    he(h, r).each(function(e) {
                        var t, n;
                        0 == --e.count && (delete h[r], t = e.id, n = un(v), Lr(n, "#" + t).each(hn))
                    })
                };
            return {
                load: n,
                loadAll: function(e, n, r) {
                    var t;
                    t = z(e, o), yr(t, vr).get(function(e) {
                        var t = function(e, t) {
                            for (var n = [], r = [], o = 0, i = e.length; o < i; o++) {
                                var a = e[o];
                                (t(a, o) ? n : r).push(a)
                            }
                            return {
                                pass: n,
                                fail: r
                            }
                        }(e, function(e) {
                            return e.isValue()
                        });
                        0 < t.fail.length ? r(t.fail.map(Sr)) : n(t.pass.map(Sr))
                    })
                },
                unload: t,
                unloadAll: function(e) {
                    Y(e, function(e) {
                        t(e)
                    })
                },
                _setReferrerPolicy: function(e) {
                    g.referrerPolicy = e
                }
            }
        },
        Yr = (Vr = new WeakMap, {
            forElement: function(e, t) {
                var n = an(e).dom;
                return U.from(Vr.get(n)).getOrThunk(function() {
                    var e = Xr(n, t);
                    return Vr.set(n, e), e
                })
            }
        }),
        Gr = (Jr.prototype.current = function() {
            return this.node
        }, Jr.prototype.next = function(e) {
            return this.node = this.findSibling(this.node, "firstChild", "nextSibling", e), this.node
        }, Jr.prototype.prev = function(e) {
            return this.node = this.findSibling(this.node, "lastChild", "previousSibling", e), this.node
        }, Jr.prototype.prev2 = function(e) {
            return this.node = this.findPreviousNode(this.node, "lastChild", "previousSibling", e), this.node
        }, Jr.prototype.findSibling = function(e, t, n, r) {
            var o, i;
            if (e) {
                if (!r && e[t]) return e[t];
                if (e !== this.rootNode) {
                    if (o = e[n]) return o;
                    for (i = e.parentNode; i && i !== this.rootNode; i = i.parentNode)
                        if (o = i[n]) return o
                }
            }
        }, Jr.prototype.findPreviousNode = function(e, t, n, r) {
            var o, i, a;
            if (e) {
                if (o = e[n], this.rootNode && o === this.rootNode) return;
                if (o) {
                    if (!r)
                        for (a = o[t]; a; a = a[t])
                            if (!a[t]) return a;
                    return o
                }
                if ((i = e.parentNode) && i !== this.rootNode) return i
            }
        }, Jr);
    function Jr(e, t) {
        this.node = e, this.rootNode = t, this.current = this.current.bind(this), this.next = this.next.bind(this), this.prev = this.prev.bind(this), this.prev2 = this.prev2.bind(this)
    }
    var Qr, Zr, eo = function(t) {
            var n;
            return function(e) {
                return (n = n || function(e, t) {
                    for (var n = {}, r = 0, o = e.length; r < o; r++) {
                        var i = e[r];
                        n[String(i)] = t(i, r)
                    }
                    return n
                }(t, R)).hasOwnProperty(Mt(e))
            }
        },
        to = eo(["h1", "h2", "h3", "h4", "h5", "h6"]),
        no = eo(["article", "aside", "details", "div", "dt", "figcaption", "footer", "form", "fieldset", "header", "hgroup", "html", "main", "nav", "section", "summary", "body", "p", "dl", "multicol", "dd", "figure", "address", "center", "blockquote", "h1", "h2", "h3", "h4", "h5", "h6", "listing", "xmp", "pre", "plaintext", "menu", "dir", "ul", "ol", "li", "hr", "table", "tbody", "thead", "tfoot", "th", "tr", "td", "caption"]),
        ro = function(e) {
            return zt(e) && !no(e)
        },
        oo = function(e) {
            return zt(e) && "br" === Mt(e)
        },
        io = eo(["h1", "h2", "h3", "h4", "h5", "h6", "p", "div", "address", "pre", "form", "blockquote", "center", "dir", "fieldset", "header", "footer", "article", "section", "hgroup", "aside", "nav", "figure"]),
        ao = eo(["ul", "ol", "dl"]),
        uo = eo(["li", "dd", "dt"]),
        so = eo(["thead", "tbody", "tfoot"]),
        co = eo(["td", "th"]),
        lo = eo(["pre", "script", "textarea", "style"]),
        fo = "\ufeff",
        mo = "\xa0",
        go = fo,
        po = function(e) {
            return e === fo
        },
        ho = function(e) {
            return e.replace(/\uFEFF/g, "")
        },
        vo = Tn,
        yo = Fn,
        bo = function(e) {
            return yo(e) && (e = e.parentNode), vo(e) && e.hasAttribute("data-mce-caret")
        },
        Co = function(e) {
            return yo(e) && po(e.data)
        },
        wo = function(e) {
            return bo(e) || Co(e)
        },
        xo = function(e) {
            return e.firstChild !== e.lastChild || !Hn(e.firstChild)
        },
        So = function(e) {
            var t = e.container();
            return !!Fn(t) && (t.data.charAt(e.offset()) === go || e.isAtStart() && Co(t.previousSibling))
        },
        No = function(e) {
            var t = e.container();
            return !!Fn(t) && (t.data.charAt(e.offset() - 1) === go || e.isAtEnd() && Co(t.nextSibling))
        },
        Eo = function(e, t, n) {
            var r, o = t.ownerDocument.createElement(e);
            o.setAttribute("data-mce-caret", n ? "before" : "after"), o.setAttribute("data-mce-bogus", "all"), o.appendChild(((r = document.createElement("br")).setAttribute("data-mce-bogus", "1"), r));
            var i = t.parentNode;
            return n ? i.insertBefore(o, t) : t.nextSibling ? i.insertBefore(o, t.nextSibling) : i.appendChild(o), o
        },
        ko = function(e) {
            return yo(e) && e.data[0] === go
        },
        _o = function(e) {
            return yo(e) && e.data[e.data.length - 1] === go
        },
        Ao = function(e) {
            return e && e.hasAttribute("data-mce-caret") ? (t = e.getElementsByTagName("br"), n = t[t.length - 1], Pn(n) && n.parentNode.removeChild(n), e.removeAttribute("data-mce-caret"), e.removeAttribute("data-mce-bogus"), e.removeAttribute("style"), e.removeAttribute("_moz_abspos"), e) : null;
            var t, n
        },
        Ro = qn,
        To = $n,
        Do = Hn,
        Oo = Fn,
        Bo = Dn(["script", "style", "textarea"]),
        Po = Dn(["img", "input", "textarea", "hr", "iframe", "video", "audio", "object", "embed"]),
        Lo = Dn(["table"]),
        Io = wo,
        Mo = function(e) {
            return !Io(e) && (Oo(e) ? !Bo(e.parentNode) : Po(e) || Do(e) || Lo(e) || Fo(e))
        },
        Fo = function(e) {
            return !1 === (Tn(t = e) && "true" === t.getAttribute("unselectable")) && To(e);
            var t
        },
        Uo = function(e, t) {
            return Mo(e) && function(e, t) {
                for (e = e.parentNode; e && e !== t; e = e.parentNode) {
                    if (Fo(e)) return !1;
                    if (Ro(e)) return !0
                }
                return !0
            }(e, t)
        },
        zo = /^[ \t\r\n]*$/,
        jo = function(e) {
            return zo.test(e)
        },
        Ho = function(e, t) {
            var n, r, o, i = Tt.fromDom(t),
                a = Tt.fromDom(e);
            return n = a, r = "pre,code", o = k(Pt, i), Pr(n, r, o).isSome()
        },
        Vo = function(e, t) {
            return Mo(e) && !1 === (o = t, Fn(r = e) && jo(r.data) && !1 === Ho(r, o)) || Tn(n = e) && "A" === n.nodeName && !n.hasAttribute("href") && (n.hasAttribute("name") || n.hasAttribute("id")) || qo(e);
            var n, r, o
        },
        qo = Bn("data-mce-bookmark"),
        $o = Bn("data-mce-bogus"),
        Wo = (Qr = "data-mce-bogus", Zr = "all", function(e) {
            return Tn(e) && e.getAttribute(Qr) === Zr
        }),
        Ko = function(e, t) {
            return void 0 === t && (t = !0),
                function(e, t) {
                    var n, r = 0;
                    if (Vo(e, e)) return !1;
                    if (!(n = e.firstChild)) return !0;
                    var o = new Gr(n, e);
                    do {
                        if (t) {
                            if (Wo(n)) {
                                n = o.next(!0);
                                continue
                            }
                            if ($o(n)) {
                                n = o.next();
                                continue
                            }
                        }
                        if (Hn(n)) r++, n = o.next();
                        else {
                            if (Vo(n, e)) return !1;
                            n = o.next()
                        }
                    } while (n);
                    return r <= 1
                }(e.dom, t)
        },
        Xo = function(e, t) {
            return V(e) && (Vo(e, t) || ro(Tt.fromDom(e)))
        },
        Yo = function(e) {
            return "span" === e.nodeName.toLowerCase() && "bookmark" === e.getAttribute("data-mce-type")
        },
        Go = function(e, t) {
            return Fn(e) && 0 < e.data.length && (o = new Gr(n = e, r = t).prev(!1), i = new Gr(n, r).next(!1), a = d(o) || Xo(o, r), u = d(i) || Xo(i, r), a && u);
            var n, r, o, i, a, u
        },
        Jo = function(e, t, n) {
            var r = n || t;
            if (Tn(t) && Yo(t)) return t;
            for (var o, i, a, u = t.childNodes, s = u.length - 1; 0 <= s; s--) Jo(e, u[s], r);
            return !Tn(t) || 1 === (o = t.childNodes).length && Yo(o[0]) && t.parentNode.insertBefore(o[0], t), jn(a = t) || zn(a) || Vo(t, r) || Tn(i = t) && 0 < i.childNodes.length || Go(t, r) || e.remove(t), t
        },
        Qo = At.makeMap,
        Zo = /[&<>\"\u0060\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
        ei = /[<>&\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
        ti = /[<>&\"\']/g,
        ni = /&#([a-z0-9]+);?|&([a-z0-9]+);/gi,
        ri = {
            128: "\u20ac",
            130: "\u201a",
            131: "\u0192",
            132: "\u201e",
            133: "\u2026",
            134: "\u2020",
            135: "\u2021",
            136: "\u02c6",
            137: "\u2030",
            138: "\u0160",
            139: "\u2039",
            140: "\u0152",
            142: "\u017d",
            145: "\u2018",
            146: "\u2019",
            147: "\u201c",
            148: "\u201d",
            149: "\u2022",
            150: "\u2013",
            151: "\u2014",
            152: "\u02dc",
            153: "\u2122",
            154: "\u0161",
            155: "\u203a",
            156: "\u0153",
            158: "\u017e",
            159: "\u0178"
        },
        oi = {
            '"': "&quot;",
            "'": "&#39;",
            "<": "&lt;",
            ">": "&gt;",
            "&": "&amp;",
            "`": "&#96;"
        },
        ii = {
            "&lt;": "<",
            "&gt;": ">",
            "&amp;": "&",
            "&quot;": '"',
            "&apos;": "'"
        },
        ai = function(e, t) {
            var n, r, o, i = {};
            if (e) {
                for (e = e.split(","), t = t || 10, n = 0; n < e.length; n += 2) r = String.fromCharCode(parseInt(e[n], t)), oi[r] || (o = "&" + e[n + 1] + ";", i[r] = o, i[o] = r);
                return i
            }
        },
        ui = ai("50,nbsp,51,iexcl,52,cent,53,pound,54,curren,55,yen,56,brvbar,57,sect,58,uml,59,copy,5a,ordf,5b,laquo,5c,not,5d,shy,5e,reg,5f,macr,5g,deg,5h,plusmn,5i,sup2,5j,sup3,5k,acute,5l,micro,5m,para,5n,middot,5o,cedil,5p,sup1,5q,ordm,5r,raquo,5s,frac14,5t,frac12,5u,frac34,5v,iquest,60,Agrave,61,Aacute,62,Acirc,63,Atilde,64,Auml,65,Aring,66,AElig,67,Ccedil,68,Egrave,69,Eacute,6a,Ecirc,6b,Euml,6c,Igrave,6d,Iacute,6e,Icirc,6f,Iuml,6g,ETH,6h,Ntilde,6i,Ograve,6j,Oacute,6k,Ocirc,6l,Otilde,6m,Ouml,6n,times,6o,Oslash,6p,Ugrave,6q,Uacute,6r,Ucirc,6s,Uuml,6t,Yacute,6u,THORN,6v,szlig,70,agrave,71,aacute,72,acirc,73,atilde,74,auml,75,aring,76,aelig,77,ccedil,78,egrave,79,eacute,7a,ecirc,7b,euml,7c,igrave,7d,iacute,7e,icirc,7f,iuml,7g,eth,7h,ntilde,7i,ograve,7j,oacute,7k,ocirc,7l,otilde,7m,ouml,7n,divide,7o,oslash,7p,ugrave,7q,uacute,7r,ucirc,7s,uuml,7t,yacute,7u,thorn,7v,yuml,ci,fnof,sh,Alpha,si,Beta,sj,Gamma,sk,Delta,sl,Epsilon,sm,Zeta,sn,Eta,so,Theta,sp,Iota,sq,Kappa,sr,Lambda,ss,Mu,st,Nu,su,Xi,sv,Omicron,t0,Pi,t1,Rho,t3,Sigma,t4,Tau,t5,Upsilon,t6,Phi,t7,Chi,t8,Psi,t9,Omega,th,alpha,ti,beta,tj,gamma,tk,delta,tl,epsilon,tm,zeta,tn,eta,to,theta,tp,iota,tq,kappa,tr,lambda,ts,mu,tt,nu,tu,xi,tv,omicron,u0,pi,u1,rho,u2,sigmaf,u3,sigma,u4,tau,u5,upsilon,u6,phi,u7,chi,u8,psi,u9,omega,uh,thetasym,ui,upsih,um,piv,812,bull,816,hellip,81i,prime,81j,Prime,81u,oline,824,frasl,88o,weierp,88h,image,88s,real,892,trade,89l,alefsym,8cg,larr,8ch,uarr,8ci,rarr,8cj,darr,8ck,harr,8dl,crarr,8eg,lArr,8eh,uArr,8ei,rArr,8ej,dArr,8ek,hArr,8g0,forall,8g2,part,8g3,exist,8g5,empty,8g7,nabla,8g8,isin,8g9,notin,8gb,ni,8gf,prod,8gh,sum,8gi,minus,8gn,lowast,8gq,radic,8gt,prop,8gu,infin,8h0,ang,8h7,and,8h8,or,8h9,cap,8ha,cup,8hb,int,8hk,there4,8hs,sim,8i5,cong,8i8,asymp,8j0,ne,8j1,equiv,8j4,le,8j5,ge,8k2,sub,8k3,sup,8k4,nsub,8k6,sube,8k7,supe,8kl,oplus,8kn,otimes,8l5,perp,8m5,sdot,8o8,lceil,8o9,rceil,8oa,lfloor,8ob,rfloor,8p9,lang,8pa,rang,9ea,loz,9j0,spades,9j3,clubs,9j5,hearts,9j6,diams,ai,OElig,aj,oelig,b0,Scaron,b1,scaron,bo,Yuml,m6,circ,ms,tilde,802,ensp,803,emsp,809,thinsp,80c,zwnj,80d,zwj,80e,lrm,80f,rlm,80j,ndash,80k,mdash,80o,lsquo,80p,rsquo,80q,sbquo,80s,ldquo,80t,rdquo,80u,bdquo,810,dagger,811,Dagger,81g,permil,81p,lsaquo,81q,rsaquo,85c,euro", 32),
        si = function(e, t) {
            return e.replace(t ? Zo : ei, function(e) {
                return oi[e] || e
            })
        },
        ci = function(e, t) {
            return e.replace(t ? Zo : ei, function(e) {
                return 1 < e.length ? "&#" + (1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320) + 65536) + ";" : oi[e] || "&#" + e.charCodeAt(0) + ";"
            })
        },
        li = function(e, t, n) {
            return n = n || ui, e.replace(t ? Zo : ei, function(e) {
                return oi[e] || n[e] || e
            })
        },
        fi = {
            encodeRaw: si,
            encodeAllRaw: function(e) {
                return ("" + e).replace(ti, function(e) {
                    return oi[e] || e
                })
            },
            encodeNumeric: ci,
            encodeNamed: li,
            getEncodeFunc: function(e, t) {
                var n = ai(t) || ui,
                    r = Qo(e.replace(/\+/g, ","));
                return r.named && r.numeric ? function(e, t) {
                    return e.replace(t ? Zo : ei, function(e) {
                        return oi[e] !== undefined ? oi[e] : n[e] !== undefined ? n[e] : 1 < e.length ? "&#" + (1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320) + 65536) + ";" : "&#" + e.charCodeAt(0) + ";"
                    })
                } : r.named ? t ? function(e, t) {
                    return li(e, t, n)
                } : li : r.numeric ? ci : si
            },
            decode: function(e) {
                return e.replace(ni, function(e, t) {
                    return t ? 65535 < (t = "x" === t.charAt(0).toLowerCase() ? parseInt(t.substr(1), 16) : parseInt(t, 10)) ? (t -= 65536, String.fromCharCode(55296 + (t >> 10), 56320 + (1023 & t))) : ri[t] || String.fromCharCode(t) : ii[e] || ui[e] || (n = e, (r = Tt.fromTag("div").dom).innerHTML = n, r.textContent || r.innerText || n);
                    var n, r
                })
            }
        },
        di = {},
        mi = {},
        gi = At.makeMap,
        pi = At.each,
        hi = At.extend,
        vi = At.explode,
        yi = At.inArray,
        bi = function(e, t) {
            return (e = At.trim(e)) ? e.split(t || " ") : []
        },
        Ci = function(e, n) {
            var r;
            return e && (r = {}, "string" == typeof e && (e = {
                "*": e
            }), pi(e, function(e, t) {
                r[t] = r[t.toUpperCase()] = ("map" === n ? gi : vi)(e, /[, ]/)
            })), r
        },
        wi = function(i) {
            var e, s, t, n, r, o, a, c, u, l, S = {},
                f = {},
                N = [],
                d = {},
                m = {},
                g = function(e, t, n) {
                    var r = i[e];
                    return r ? r = gi(r, /[, ]/, gi(r.toUpperCase(), /[, ]/)) : (r = di[e]) || (r = gi(t, " ", gi(t.toUpperCase(), " ")), r = hi(r, n), di[e] = r), r
                },
                p = (e = (i = i || {}).schema, c = {}, u = function(e, t, n) {
                    var r, o, i = function(e, t) {
                        for (var n = {}, r = 0, o = e.length; r < o; r++) n[e[r]] = t || {};
                        return n
                    };
                    t = t || "", "string" == typeof(n = n || []) && (n = bi(n));
                    for (var a = bi(e), u = a.length; u--;) o = {
                        attributes: i(r = bi([s, t].join(" "))),
                        attributesOrder: r,
                        children: i(n, mi)
                    }, c[a[u]] = o
                }, l = function(e, t) {
                    for (var n, r, o, i = bi(e), a = i.length, u = bi(t); a--;)
                        for (n = c[i[a]], r = 0, o = u.length; r < o; r++) n.attributes[u[r]] = {}, n.attributesOrder.push(u[r])
                }, di[e] ? di[e] : (s = "id accesskey class dir lang style tabindex title role", t = "address blockquote div dl fieldset form h1 h2 h3 h4 h5 h6 hr menu ol p pre table ul", n = "a abbr b bdo br button cite code del dfn em embed i iframe img input ins kbd label map noscript object q s samp script select small span strong sub sup textarea u var #text #comment", "html4" !== e && (s += " contenteditable contextmenu draggable dropzone hidden spellcheck translate", t += " article aside details dialog figure main header footer hgroup section nav", n += " audio canvas command datalist mark meter output picture progress time wbr video ruby bdi keygen"), "html5-strict" !== e && (s += " xml:lang", n = [n, a = "acronym applet basefont big font strike tt"].join(" "), pi(bi(a), function(e) {
                    u(e, "", n)
                }), t = [t, o = "center dir isindex noframes"].join(" "), r = [t, n].join(" "), pi(bi(o), function(e) {
                    u(e, "", r)
                })), r = r || [t, n].join(" "), u("html", "manifest", "head body"), u("head", "", "base command link meta noscript script style title"), u("title hr noscript br"), u("base", "href target"), u("link", "href rel media hreflang type sizes hreflang"), u("meta", "name http-equiv content charset"), u("style", "media type scoped"), u("script", "src async defer type charset"), u("body", "onafterprint onbeforeprint onbeforeunload onblur onerror onfocus onhashchange onload onmessage onoffline ononline onpagehide onpageshow onpopstate onresize onscroll onstorage onunload", r), u("address dt dd div caption", "", r), u("h1 h2 h3 h4 h5 h6 pre p abbr code var samp kbd sub sup i b u bdo span legend em strong small s cite dfn", "", n), u("blockquote", "cite", r), u("ol", "reversed start type", "li"), u("ul", "", "li"), u("li", "value", r), u("dl", "", "dt dd"), u("a", "href target rel media hreflang type", n), u("q", "cite", n), u("ins del", "cite datetime", r), u("img", "src sizes srcset alt usemap ismap width height"), u("iframe", "src name width height", r), u("embed", "src type width height"), u("object", "data type typemustmatch name usemap form width height", [r, "param"].join(" ")), u("param", "name value"), u("map", "name", [r, "area"].join(" ")), u("area", "alt coords shape href target rel media hreflang type"), u("table", "border", "caption colgroup thead tfoot tbody tr" + ("html4" === e ? " col" : "")), u("colgroup", "span", "col"), u("col", "span"), u("tbody thead tfoot", "", "tr"), u("tr", "", "td th"), u("td", "colspan rowspan headers", r), u("th", "colspan rowspan headers scope abbr", r), u("form", "accept-charset action autocomplete enctype method name novalidate target", r), u("fieldset", "disabled form name", [r, "legend"].join(" ")), u("label", "form for", n), u("input", "accept alt autocomplete checked dirname disabled form formaction formenctype formmethod formnovalidate formtarget height list max maxlength min multiple name pattern readonly required size src step type value width"), u("button", "disabled form formaction formenctype formmethod formnovalidate formtarget name type value", "html4" === e ? r : n), u("select", "disabled form multiple name required size", "option optgroup"), u("optgroup", "disabled label", "option"), u("option", "disabled label selected value"), u("textarea", "cols dirname disabled form maxlength name readonly required rows wrap"), u("menu", "type label", [r, "li"].join(" ")), u("noscript", "", r), "html4" !== e && (u("wbr"), u("ruby", "", [n, "rt rp"].join(" ")), u("figcaption", "", r), u("mark rt rp summary bdi", "", n), u("canvas", "width height", r), u("video", "src crossorigin poster preload autoplay mediagroup loop muted controls width height buffered", [r, "track source"].join(" ")), u("audio", "src crossorigin preload autoplay mediagroup loop muted controls buffered volume", [r, "track source"].join(" ")), u("picture", "", "img source"), u("source", "src srcset type media sizes"), u("track", "kind src srclang label default"), u("datalist", "", [n, "option"].join(" ")), u("article section nav aside main header footer", "", r), u("hgroup", "", "h1 h2 h3 h4 h5 h6"), u("figure", "", [r, "figcaption"].join(" ")), u("time", "datetime", n), u("dialog", "open", r), u("command", "type label icon disabled checked radiogroup command"), u("output", "for form name", n), u("progress", "value max", n), u("meter", "value min max low high optimum", n), u("details", "open", [r, "summary"].join(" ")), u("keygen", "autofocus challenge disabled form keytype name")), "html5-strict" !== e && (l("script", "language xml:space"), l("style", "xml:space"), l("object", "declare classid code codebase codetype archive standby align border hspace vspace"), l("embed", "align name hspace vspace"), l("param", "valuetype type"), l("a", "charset name rev shape coords"), l("br", "clear"), l("applet", "codebase archive code object alt name width height align hspace vspace"), l("img", "name longdesc align border hspace vspace"), l("iframe", "longdesc frameborder marginwidth marginheight scrolling align"), l("font basefont", "size color face"), l("input", "usemap align"), l("select"), l("textarea"), l("h1 h2 h3 h4 h5 h6 div p legend caption", "align"), l("ul", "type compact"), l("li", "type"), l("ol dl menu dir", "compact"), l("pre", "width xml:space"), l("hr", "align noshade size width"), l("isindex", "prompt"), l("table", "summary width frame rules cellspacing cellpadding align bgcolor"), l("col", "width align char charoff valign"), l("colgroup", "width align char charoff valign"), l("thead", "align char charoff valign"), l("tr", "align char charoff valign bgcolor"), l("th", "axis align char charoff valign nowrap bgcolor width height"), l("form", "accept"), l("td", "abbr axis scope align char charoff valign nowrap bgcolor width height"), l("tfoot", "align char charoff valign"), l("tbody", "align char charoff valign"), l("area", "nohref"), l("body", "background bgcolor text link vlink alink")), "html4" !== e && (l("input button select textarea", "autofocus"), l("input textarea", "placeholder"), l("a", "download"), l("link script img", "crossorigin"), l("img", "loading"), l("iframe", "sandbox seamless allowfullscreen loading")), pi(bi("a form meter progress dfn"), function(e) {
                    c[e] && delete c[e].children[e]
                }), delete c.caption.children.table, delete c.script, di[e] = c));
            !1 === i.verify_html && (i.valid_elements = "*[*]");
            var h = Ci(i.valid_styles),
                v = Ci(i.invalid_styles, "map"),
                y = Ci(i.valid_classes, "map"),
                b = g("whitespace_elements", "pre script noscript style textarea video audio iframe object code"),
                C = g("self_closing_elements", "colgroup dd dt li option p td tfoot th thead tr"),
                w = g("short_ended_elements", "area base basefont br col frame hr img input isindex link meta param embed source wbr track"),
                x = g("boolean_attributes", "checked compact declare defer disabled ismap multiple nohref noresize noshade nowrap readonly selected autoplay loop controls"),
                E = "td th iframe video audio object script code",
                k = g("non_empty_elements", E + " pre", w),
                _ = g("move_caret_before_on_enter_elements", E + " table", w),
                A = g("text_block_elements", "h1 h2 h3 h4 h5 h6 p div address pre form blockquote center dir fieldset header footer article section hgroup aside main nav figure"),
                R = g("block_elements", "hr table tbody thead tfoot th tr td li ol ul caption dl dt dd noscript menu isindex option datalist select optgroup figcaption details summary", A),
                T = g("text_inline_elements", "span strong b em i font strike u var cite dfn code mark q sup sub samp");
            pi((i.special || "script noscript iframe noframes noembed title style textarea xmp").split(" "), function(e) {
                m[e] = new RegExp("</" + e + "[^>]*>", "gi")
            });
            var D = function(e) {
                    return new RegExp("^" + e.replace(/([?+*])/g, ".$1") + "$")
                },
                O = function(e) {
                    var t, n, r, o, i, a, u, s, c, l, f, d, m, g, p, h, v, y, b = /^([#+\-])?([^\[!\/]+)(?:\/([^\[!]+))?(?:(!?)\[([^\]]+)])?$/,
                        C = /^([!\-])?(\w+[\\:]:\w+|[^=:<]+)?(?:([=:<])(.*))?$/,
                        w = /[*?+]/;
                    if (e) {
                        var x = bi(e, ",");
                        for (S["@"] && (h = S["@"].attributes, v = S["@"].attributesOrder), t = 0, n = x.length; t < n; t++)
                            if (i = b.exec(x[t])) {
                                if (g = i[1], c = i[2], p = i[3], s = i[5], a = {
                                        attributes: d = {},
                                        attributesOrder: m = []
                                    }, "#" === g && (a.paddEmpty = !0), "-" === g && (a.removeEmpty = !0), "!" === i[4] && (a.removeEmptyAttrs = !0), h && (se(h, function(e, t) {
                                        d[t] = e
                                    }), m.push.apply(m, v)), s)
                                    for (r = 0, o = (s = bi(s, "|")).length; r < o; r++)
                                        if (i = C.exec(s[r])) {
                                            if (u = {}, f = i[1], l = i[2].replace(/[\\:]:/g, ":"), g = i[3], y = i[4], "!" === f && (a.attributesRequired = a.attributesRequired || [], a.attributesRequired.push(l), u.required = !0), "-" === f) {
                                                delete d[l], m.splice(yi(m, l), 1);
                                                continue
                                            }
                                            g && ("=" === g && (a.attributesDefault = a.attributesDefault || [], a.attributesDefault.push({
                                                name: l,
                                                value: y
                                            }), u.defaultValue = y), ":" === g && (a.attributesForced = a.attributesForced || [], a.attributesForced.push({
                                                name: l,
                                                value: y
                                            }), u.forcedValue = y), "<" === g && (u.validValues = gi(y, "?"))), w.test(l) ? (a.attributePatterns = a.attributePatterns || [], u.pattern = D(l), a.attributePatterns.push(u)) : (d[l] || m.push(l), d[l] = u)
                                        } h || "@" !== c || (h = d, v = m), p && (a.outputName = c, S[p] = a), w.test(c) ? (a.pattern = D(c), N.push(a)) : S[c] = a
                            }
                    }
                },
                B = function(e) {
                    S = {}, N = [], O(e), pi(p, function(e, t) {
                        f[t] = e.children
                    })
                },
                P = function(e) {
                    var a = /^(~)?(.+)$/;
                    e && (di.text_block_elements = di.block_elements = null, pi(bi(e, ","), function(e) {
                        var t, n = a.exec(e),
                            r = "~" === n[1],
                            o = r ? "span" : "div",
                            i = n[2];
                        f[i] = f[o], d[i] = o, r || (R[i.toUpperCase()] = {}, R[i] = {}), S[i] || (t = S[o], delete(t = hi({}, t)).removeEmptyAttrs, delete t.removeEmpty, S[i] = t), pi(f, function(e, t) {
                            e[o] && (f[t] = e = hi({}, f[t]), e[i] = e[o])
                        })
                    }))
                },
                L = function(e) {
                    var o = /^([+\-]?)([A-Za-z0-9_\-.\u00b7\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u037d\u037f-\u1fff\u200c-\u200d\u203f-\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]+)\[([^\]]+)]$/;
                    di[i.schema] = null, e && pi(bi(e, ","), function(e) {
                        var t, n, r = o.exec(e);
                        r && (n = r[1], t = n ? f[r[2]] : f[r[2]] = {
                            "#comment": {}
                        }, t = f[r[2]], pi(bi(r[3], "|"), function(e) {
                            "-" === n ? delete t[e] : t[e] = {}
                        }))
                    })
                },
                I = function(e) {
                    var t, n = S[e];
                    if (n) return n;
                    for (t = N.length; t--;)
                        if ((n = N[t]).pattern.test(e)) return n
                };
            i.valid_elements ? B(i.valid_elements) : (pi(p, function(e, t) {
                S[t] = {
                    attributes: e.attributes,
                    attributesOrder: e.attributesOrder
                }, f[t] = e.children
            }), "html5" !== i.schema && pi(bi("strong/b em/i"), function(e) {
                var t = bi(e, "/");
                S[t[1]].outputName = t[0]
            }), pi(bi("ol ul sub sup blockquote span font a table tbody strong em b i"), function(e) {
                S[e] && (S[e].removeEmpty = !0)
            }), pi(bi("p h1 h2 h3 h4 h5 h6 th td pre div address caption li"), function(e) {
                S[e].paddEmpty = !0
            }), pi(bi("span"), function(e) {
                S[e].removeEmptyAttrs = !0
            })), P(i.custom_elements), L(i.valid_children), O(i.extended_valid_elements), L("+ol[ul|ol],+ul[ul|ol]"), pi({
                dd: "dl",
                dt: "dl",
                li: "ul ol",
                td: "tr",
                th: "tr",
                tr: "tbody thead tfoot",
                tbody: "table",
                thead: "table",
                tfoot: "table",
                legend: "fieldset",
                area: "map",
                param: "video audio object"
            }, function(e, t) {
                S[t] && (S[t].parentsRequired = bi(e))
            }), i.invalid_elements && pi(vi(i.invalid_elements), function(e) {
                S[e] && delete S[e]
            }), I("span") || O("span[!data-mce-type|*]");
            return {
                children: f,
                elements: S,
                getValidStyles: function() {
                    return h
                },
                getValidClasses: function() {
                    return y
                },
                getBlockElements: function() {
                    return R
                },
                getInvalidStyles: function() {
                    return v
                },
                getShortEndedElements: function() {
                    return w
                },
                getTextBlockElements: function() {
                    return A
                },
                getTextInlineElements: function() {
                    return T
                },
                getBoolAttrs: function() {
                    return x
                },
                getElementRule: I,
                getSelfClosingElements: function() {
                    return C
                },
                getNonEmptyElements: function() {
                    return k
                },
                getMoveCaretBeforeOnEnterElements: function() {
                    return _
                },
                getWhiteSpaceElements: function() {
                    return b
                },
                getSpecialElements: function() {
                    return m
                },
                isValidChild: function(e, t) {
                    var n = f[e.toLowerCase()];
                    return !(!n || !n[t.toLowerCase()])
                },
                isValid: function(e, t) {
                    var n, r, o = I(e);
                    if (o) {
                        if (!t) return !0;
                        if (o.attributes[t]) return !0;
                        if (n = o.attributePatterns)
                            for (r = n.length; r--;)
                                if (n[r].pattern.test(e)) return !0
                    }
                    return !1
                },
                getCustomElements: function() {
                    return d
                },
                addValidElements: O,
                setValidElements: B,
                addCustomElements: P,
                addValidChildren: L
            }
        },
        xi = function(e, t, n, r) {
            var o = function(e) {
                return 1 < (e = parseInt(e, 10).toString(16)).length ? e : "0" + e
            };
            return "#" + o(t) + o(n) + o(r)
        },
        Si = function(b, e) {
            var s, c, C = this,
                w = /rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\s*\)/gi,
                x = /(?:url(?:(?:\(\s*\"([^\"]+)\"\s*\))|(?:\(\s*\'([^\']+)\'\s*\))|(?:\(\s*([^)\s]+)\s*\))))|(?:\'([^\']+)\')|(?:\"([^\"]+)\")/gi,
                S = /\s*([^:]+):\s*([^;]+);?/g,
                N = /\s+$/,
                E = {},
                k = fo;
            b = b || {}, e && (s = e.getValidStyles(), c = e.getInvalidStyles());
            for (var t = ("\\\" \\' \\; \\: ; : " + k).split(" "), _ = 0; _ < t.length; _++) E[t[_]] = k + _, E[k + _] = t[_];
            return {
                toHex: function(e) {
                    return e.replace(w, xi)
                },
                parse: function(e) {
                    var t, n, r, o, i, a, u, s, c = {},
                        l = b.url_converter,
                        f = b.url_converter_scope || C,
                        d = function(e, t, n) {
                            var r = c[e + "-top" + t];
                            if (r) {
                                var o = c[e + "-right" + t];
                                if (o) {
                                    var i = c[e + "-bottom" + t];
                                    if (i) {
                                        var a = c[e + "-left" + t];
                                        if (a) {
                                            var u = [r, o, i, a];
                                            for (_ = u.length - 1; _-- && u[_] === u[_ + 1];); - 1 < _ && n || (c[e + t] = -1 === _ ? u[0] : u.join(" "), delete c[e + "-top" + t], delete c[e + "-right" + t], delete c[e + "-bottom" + t], delete c[e + "-left" + t])
                                        }
                                    }
                                }
                            }
                        },
                        m = function(e) {
                            var t, n = c[e];
                            if (n) {
                                for (t = (n = n.split(" ")).length; t--;)
                                    if (n[t] !== n[0]) return !1;
                                return c[e] = n[0], !0
                            }
                        },
                        g = function(e) {
                            return o = !0, E[e]
                        },
                        p = function(e, t) {
                            return o && (e = e.replace(/\uFEFF[0-9]/g, function(e) {
                                return E[e]
                            })), t || (e = e.replace(/\\([\'\";:])/g, "$1")), e
                        },
                        h = function(e) {
                            return String.fromCharCode(parseInt(e.slice(1), 16))
                        },
                        v = function(e) {
                            return e.replace(/\\[0-9a-f]+/gi, h)
                        },
                        y = function(e, t, n, r, o, i) {
                            if (o = o || i) return "'" + (o = p(o)).replace(/\'/g, "\\'") + "'";
                            if (t = p(t || n || r), !b.allow_script_urls) {
                                var a = t.replace(/[\s\r\n]+/g, "");
                                if (/(java|vb)script:/i.test(a)) return "";
                                if (!b.allow_svg_data_urls && /^data:image\/svg/i.test(a)) return ""
                            }
                            return l && (t = l.call(f, t, "style")), "url('" + t.replace(/\'/g, "\\'") + "')"
                        };
                    if (e) {
                        for (e = (e = e.replace(/[\u0000-\u001F]/g, "")).replace(/\\[\"\';:\uFEFF]/g, g).replace(/\"[^\"]+\"|\'[^\']+\'/g, function(e) {
                                return e.replace(/[;:]/g, g)
                            }); t = S.exec(e);)
                            if (S.lastIndex = t.index + t[0].length, n = t[1].replace(N, "").toLowerCase(), r = t[2].replace(N, ""), n && r) {
                                if (n = v(n), r = v(r), -1 !== n.indexOf(k) || -1 !== n.indexOf('"')) continue;
                                if (!b.allow_script_urls && ("behavior" === n || /expression\s*\(|\/\*|\*\//.test(r))) continue;
                                "font-weight" === n && "700" === r ? r = "bold" : "color" !== n && "background-color" !== n || (r = r.toLowerCase()), r = (r = r.replace(w, xi)).replace(x, y), c[n] = o ? p(r, !0) : r
                            } d("border", "", !0), d("border", "-width"), d("border", "-color"), d("border", "-style"), d("padding", ""), d("margin", ""), i = "border", u = "border-style", s = "border-color", m(a = "border-width") && m(u) && m(s) && (c[i] = c[a] + " " + c[u] + " " + c[s], delete c[a], delete c[u], delete c[s]), "medium none" === c.border && delete c.border, "none" === c["border-image"] && delete c["border-image"]
                    }
                    return c
                },
                serialize: function(i, a) {
                    var u = "",
                        e = function(e) {
                            var t, n = s[e];
                            if (n)
                                for (var r = 0, o = n.length; r < o; r++) e = n[r], (t = i[e]) && (u += (0 < u.length ? " " : "") + e + ": " + t + ";")
                        };
                    return a && s ? (e("*"), e(a)) : se(i, function(e, t) {
                        var n, r, o;
                        !e || c && (n = t, r = a, (o = c["*"]) && o[n] || (o = c[r]) && o[n]) || (u += (0 < u.length ? " " : "") + t + ": " + e + ";")
                    }), u
                }
            }
        },
        Ni = /^(?:mouse|contextmenu)|click/,
        Ei = {
            keyLocation: 1,
            layerX: 1,
            layerY: 1,
            returnValue: 1,
            webkitMovementX: 1,
            webkitMovementY: 1,
            keyIdentifier: 1,
            mozPressure: 1
        },
        ki = A,
        _i = R,
        Ai = function(e, t, n, r) {
            e.addEventListener ? e.addEventListener(t, n, r || !1) : e.attachEvent && e.attachEvent("on" + t, n)
        },
        Ri = function(e, t, n, r) {
            e.removeEventListener ? e.removeEventListener(t, n, r || !1) : e.detachEvent && e.detachEvent("on" + t, n)
        },
        Ti = function(e, t) {
            var n, r, o, i, a, u, s = t || {};
            for (n in e) Ei[n] || (s[n] = e[n]);
            return s.target || (s.target = s.srcElement || document), s.composedPath && (s.composedPath = function() {
                return e.composedPath()
            }), e && (a = e, Ni.test(a.type)) && e.pageX === undefined && e.clientX !== undefined && (o = (r = s.target.ownerDocument || document).documentElement, i = r.body, s.pageX = e.clientX + (o && o.scrollLeft || i && i.scrollLeft || 0) - (o && o.clientLeft || i && i.clientLeft || 0), s.pageY = e.clientY + (o && o.scrollTop || i && i.scrollTop || 0) - (o && o.clientTop || i && i.clientTop || 0)), s.preventDefault = function() {
                s.defaultPrevented = !0, s.isDefaultPrevented = _i, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
            }, s.stopPropagation = function() {
                s.cancelBubble = !0, s.isPropagationStopped = _i, e && (e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0)
            }, !(s.stopImmediatePropagation = function() {
                s.isImmediatePropagationStopped = _i, s.stopPropagation()
            }) == ((u = s).isDefaultPrevented === _i || u.isDefaultPrevented === ki) && (s.isDefaultPrevented = !0 === s.defaultPrevented ? _i : ki, s.isPropagationStopped = !0 === s.cancelBubble ? _i : ki, s.isImmediatePropagationStopped = ki), "undefined" == typeof s.metaKey && (s.metaKey = !1), s
        },
        Di = (Oi.prototype.bind = function(e, t, n, r) {
            var o, i, a, u, s, c, l = this,
                f = window,
                d = function(e) {
                    l.executeHandlers(Ti(e || f.event), o)
                };
            if (e && 3 !== e.nodeType && 8 !== e.nodeType) {
                e[l.expando] ? o = e[l.expando] : (o = l.count++, e[l.expando] = o, l.events[o] = {}), r = r || e;
                for (var m = t.split(" "), g = m.length; g--;) s = d, u = c = !1, "DOMContentLoaded" === (a = m[g]) && (a = "ready"), l.domLoaded && "ready" === a && "complete" === e.readyState ? n.call(r, Ti({
                    type: a
                })) : (l.hasMouseEnterLeave || (u = l.mouseEnterLeave[a]) && (s = function(e) {
                    var t = e.currentTarget,
                        n = e.relatedTarget;
                    if (n && t.contains) n = t.contains(n);
                    else
                        for (; n && n !== t;) n = n.parentNode;
                    n || ((e = Ti(e || f.event)).type = "mouseout" === e.type ? "mouseleave" : "mouseenter", e.target = t, l.executeHandlers(e, o))
                }), l.hasFocusIn || "focusin" !== a && "focusout" !== a || (c = !0, u = "focusin" === a ? "focus" : "blur", s = function(e) {
                    (e = Ti(e || f.event)).type = "focus" === e.type ? "focusin" : "focusout", l.executeHandlers(e, o)
                }), (i = l.events[o][a]) ? "ready" === a && l.domLoaded ? n(Ti({
                    type: a
                })) : i.push({
                    func: n,
                    scope: r
                }) : (l.events[o][a] = i = [{
                    func: n,
                    scope: r
                }], i.fakeName = u, i.capture = c, i.nativeHandler = s, "ready" === a ? function(e, t, n) {
                    var r, o = e.document,
                        i = {
                            type: "ready"
                        };
                    n.domLoaded ? t(i) : (r = function() {
                        Ri(e, "DOMContentLoaded", r), Ri(e, "load", r), n.domLoaded || (n.domLoaded = !0, t(i)), e = null
                    }, "complete" === o.readyState || "interactive" === o.readyState && o.body ? r() : Ai(e, "DOMContentLoaded", r), n.domLoaded || Ai(e, "load", r))
                }(e, s, l) : Ai(e, u || a, s, c)));
                return e = i = null, n
            }
        }, Oi.prototype.unbind = function(n, e, t) {
            var r, o, i;
            if (!n || 3 === n.nodeType || 8 === n.nodeType) return this;
            var a = n[this.expando];
            if (a) {
                if (i = this.events[a], e) {
                    for (var u, s, c, l, f = e.split(" "), d = f.length; d--;)
                        if (l = i[o = f[d]]) {
                            if (t)
                                for (r = l.length; r--;) l[r].func === t && (u = l.nativeHandler, s = l.fakeName, c = l.capture, (l = l.slice(0, r).concat(l.slice(r + 1))).nativeHandler = u, l.fakeName = s, l.capture = c, i[o] = l);
                            t && 0 !== l.length || (delete i[o], Ri(n, l.fakeName || o, l.nativeHandler, l.capture))
                        }
                } else se(i, function(e, t) {
                    Ri(n, e.fakeName || t, e.nativeHandler, e.capture)
                }), i = {};
                for (o in i)
                    if (ve(i, o)) return this;
                delete this.events[a];
                try {
                    delete n[this.expando]
                } catch (m) {
                    n[this.expando] = null
                }
            }
            return this
        }, Oi.prototype.fire = function(e, t, n) {
            var r;
            if (!e || 3 === e.nodeType || 8 === e.nodeType) return this;
            var o = Ti(null, n);
            for (o.type = t, o.target = e;
                (r = e[this.expando]) && this.executeHandlers(o, r), (e = e.parentNode || e.ownerDocument || e.defaultView || e.parentWindow) && !o.isPropagationStopped(););
            return this
        }, Oi.prototype.clean = function(e) {
            var t, n;
            if (!e || 3 === e.nodeType || 8 === e.nodeType) return this;
            if (e[this.expando] && this.unbind(e), e.getElementsByTagName || (e = e.document), e && e.getElementsByTagName)
                for (this.unbind(e), t = (n = e.getElementsByTagName("*")).length; t--;)(e = n[t])[this.expando] && this.unbind(e);
            return this
        }, Oi.prototype.destroy = function() {
            this.events = {}
        }, Oi.prototype.cancel = function(e) {
            return e && (e.preventDefault(), e.stopImmediatePropagation()), !1
        }, Oi.prototype.executeHandlers = function(e, t) {
            var n = this.events[t],
                r = n && n[e.type];
            if (r)
                for (var o = 0, i = r.length; o < i; o++) {
                    var a = r[o];
                    if (a && !1 === a.func.call(a.scope, e) && e.preventDefault(), e.isImmediatePropagationStopped()) return
                }
        }, Oi.Event = new Oi, Oi);
    function Oi() {
        this.domLoaded = !1, this.events = {}, this.count = 1, this.expando = "mce-data-" + (+new Date).toString(32), this.hasMouseEnterLeave = "onmouseenter" in document.documentElement, this.hasFocusIn = "onfocusin" in document.documentElement, this.count = 1
    }
    var Bi, Pi, Li, Ii, Mi, Fi, Ui, zi, ji, Hi, Vi, qi, $i, Wi, Ki, Xi, Yi, Gi = "sizzle" + -new Date,
        Ji = window.document,
        Qi = 0,
        Zi = 0,
        ea = Oa(),
        ta = Oa(),
        na = Oa(),
        ra = function(e, t) {
            return e === t && (Hi = !0), 0
        },
        oa = typeof undefined,
        ia = {}.hasOwnProperty,
        aa = [],
        ua = aa.pop,
        sa = aa.push,
        ca = aa.push,
        la = aa.slice,
        fa = aa.indexOf || function(e) {
            for (var t = 0, n = this.length; t < n; t++)
                if (this[t] === e) return t;
            return -1
        },
        da = "[\\x20\\t\\r\\n\\f]",
        ma = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        ga = "\\[" + da + "*(" + ma + ")(?:" + da + "*([*^$|!~]?=)" + da + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ma + "))|)" + da + "*\\]",
        pa = ":(" + ma + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ga + ")*)|.*)\\)|)",
        ha = new RegExp("^" + da + "+|((?:^|[^\\\\])(?:\\\\.)*)" + da + "+$", "g"),
        va = new RegExp("^" + da + "*," + da + "*"),
        ya = new RegExp("^" + da + "*([>+~]|" + da + ")" + da + "*"),
        ba = new RegExp("=" + da + "*([^\\]'\"]*?)" + da + "*\\]", "g"),
        Ca = new RegExp(pa),
        wa = new RegExp("^" + ma + "$"),
        xa = {
            ID: new RegExp("^#(" + ma + ")"),
            CLASS: new RegExp("^\\.(" + ma + ")"),
            TAG: new RegExp("^(" + ma + "|[*])"),
            ATTR: new RegExp("^" + ga),
            PSEUDO: new RegExp("^" + pa),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + da + "*(even|odd|(([+-]|)(\\d*)n|)" + da + "*(?:([+-]|)" + da + "*(\\d+)|))" + da + "*\\)|)", "i"),
            bool: new RegExp("^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$", "i"),
            needsContext: new RegExp("^" + da + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + da + "*((?:-\\d)?\\d*)" + da + "*\\)|)(?=[^-]|$)", "i")
        },
        Sa = /^(?:input|select|textarea|button)$/i,
        Na = /^h\d$/i,
        Ea = /^[^{]+\{\s*\[native \w/,
        ka = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        _a = /[+~]/,
        Aa = /'|\\/g,
        Ra = new RegExp("\\\\([\\da-f]{1,6}" + da + "?|(" + da + ")|.)", "ig"),
        Ta = function(e, t, n) {
            var r = "0x" + t - 65536;
            return r != r || n ? t : r < 0 ? String.fromCharCode(65536 + r) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        };
    try {
        ca.apply(aa = la.call(Ji.childNodes), Ji.childNodes), aa[Ji.childNodes.length].nodeType
    } catch (zk) {
        ca = {
            apply: aa.length ? function(e, t) {
                sa.apply(e, la.call(t))
            } : function(e, t) {
                for (var n = e.length, r = 0; e[n++] = t[r++];);
                e.length = n - 1
            }
        }
    }
    var Da = function(e, t, n, r) {
        var o, i, a, u, s, c, l, f, d, m;
        if ((t ? t.ownerDocument || t : Ji) !== qi && Vi(t), n = n || [], !e || "string" != typeof e) return n;
        if (1 !== (u = (t = t || qi).nodeType) && 9 !== u) return [];
        if (Wi && !r) {
            if (o = ka.exec(e))
                if (a = o[1]) {
                    if (9 === u) {
                        if (!(i = t.getElementById(a)) || !i.parentNode) return n;
                        if (i.id === a) return n.push(i), n
                    } else if (t.ownerDocument && (i = t.ownerDocument.getElementById(a)) && Yi(t, i) && i.id === a) return n.push(i), n
                } else {
                    if (o[2]) return ca.apply(n, t.getElementsByTagName(e)), n;
                    if ((a = o[3]) && Bi.getElementsByClassName) return ca.apply(n, t.getElementsByClassName(a)), n
                } if (Bi.qsa && (!Ki || !Ki.test(e))) {
                if (f = l = Gi, d = t, m = 9 === u && e, 1 === u && "object" !== t.nodeName.toLowerCase()) {
                    for (c = Mi(e), (l = t.getAttribute("id")) ? f = l.replace(Aa, "\\$&") : t.setAttribute("id", f), f = "[id='" + f + "'] ", s = c.length; s--;) c[s] = f + Fa(c[s]);
                    d = _a.test(e) && Ia(t.parentNode) || t, m = c.join(",")
                }
                if (m) try {
                    return ca.apply(n, d.querySelectorAll(m)), n
                } catch (g) {} finally {
                    l || t.removeAttribute("id")
                }
            }
        }
        return Ui(e.replace(ha, "$1"), t, n, r)
    };
    function Oa() {
        var n = [];
        function r(e, t) {
            return n.push(e + " ") > Pi.cacheLength && delete r[n.shift()], r[e + " "] = t
        }
        return r
    }
    function Ba(e) {
        return e[Gi] = !0, e
    }
    function Pa(e, t) {
        var n = t && e,
            r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || 1 << 31) - (~e.sourceIndex || 1 << 31);
        if (r) return r;
        if (n)
            for (; n = n.nextSibling;)
                if (n === t) return -1;
        return e ? 1 : -1
    }
    function La(a) {
        return Ba(function(i) {
            return i = +i, Ba(function(e, t) {
                for (var n, r = a([], e.length, i), o = r.length; o--;) e[n = r[o]] && (e[n] = !(t[n] = e[n]))
            })
        })
    }
    function Ia(e) {
        return e && typeof e.getElementsByTagName != oa && e
    }
    function Ma() {}
    function Fa(e) {
        for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
        return r
    }
    function Ua(a, e, t) {
        var u = e.dir,
            s = t && "parentNode" === u,
            c = Zi++;
        return e.first ? function(e, t, n) {
            for (; e = e[u];)
                if (1 === e.nodeType || s) return a(e, t, n)
        } : function(e, t, n) {
            var r, o, i = [Qi, c];
            if (n) {
                for (; e = e[u];)
                    if ((1 === e.nodeType || s) && a(e, t, n)) return !0
            } else
                for (; e = e[u];)
                    if (1 === e.nodeType || s) {
                        if ((r = (o = e[Gi] || (e[Gi] = {}))[u]) && r[0] === Qi && r[1] === c) return i[2] = r[2];
                        if ((o[u] = i)[2] = a(e, t, n)) return !0
                    }
        }
    }
    function za(o) {
        return 1 < o.length ? function(e, t, n) {
            for (var r = o.length; r--;)
                if (!o[r](e, t, n)) return !1;
            return !0
        } : o[0]
    }
    function ja(e, t, n, r, o) {
        for (var i, a = [], u = 0, s = e.length, c = null != t; u < s; u++)(i = e[u]) && (n && !n(i, r, o) || (a.push(i), c && t.push(u)));
        return a
    }
    function Ha(m, g, p, h, v, e) {
        return h && !h[Gi] && (h = Ha(h)), v && !v[Gi] && (v = Ha(v, e)), Ba(function(e, t, n, r) {
            var o, i, a, u = [],
                s = [],
                c = t.length,
                l = e || function(e, t, n) {
                    for (var r = 0, o = t.length; r < o; r++) Da(e, t[r], n);
                    return n
                }(g || "*", n.nodeType ? [n] : n, []),
                f = !m || !e && g ? l : ja(l, u, m, n, r),
                d = p ? v || (e ? m : c || h) ? [] : t : f;
            if (p && p(f, d, n, r), h)
                for (o = ja(d, s), h(o, [], n, r), i = o.length; i--;)(a = o[i]) && (d[s[i]] = !(f[s[i]] = a));
            if (e) {
                if (v || m) {
                    if (v) {
                        for (o = [], i = d.length; i--;)(a = d[i]) && o.push(f[i] = a);
                        v(null, d = [], o, r)
                    }
                    for (i = d.length; i--;)(a = d[i]) && -1 < (o = v ? fa.call(e, a) : u[i]) && (e[o] = !(t[o] = a))
                }
            } else d = ja(d === t ? d.splice(c, d.length) : d), v ? v(null, t, d, r) : ca.apply(t, d)
        })
    }
    Bi = Da.support = {}, Ii = Da.isXML = function(e) {
        var t = e && (e.ownerDocument || e).documentElement;
        return !!t && "HTML" !== t.nodeName
    }, Vi = Da.setDocument = function(e) {
        var t, s = e ? e.ownerDocument || e : Ji,
            n = s.defaultView;
        return s !== qi && 9 === s.nodeType && s.documentElement ? ($i = (qi = s).documentElement, Wi = !Ii(s), n && n !== function(e) {
            try {
                return e.top
            } catch (t) {}
            return null
        }(n) && (n.addEventListener ? n.addEventListener("unload", function() {
            Vi()
        }, !1) : n.attachEvent && n.attachEvent("onunload", function() {
            Vi()
        })), Bi.attributes = !0, Bi.getElementsByTagName = !0, Bi.getElementsByClassName = Ea.test(s.getElementsByClassName), Bi.getById = !0, Pi.find.ID = function(e, t) {
            if (typeof t.getElementById != oa && Wi) {
                var n = t.getElementById(e);
                return n && n.parentNode ? [n] : []
            }
        }, Pi.filter.ID = function(e) {
            var t = e.replace(Ra, Ta);
            return function(e) {
                return e.getAttribute("id") === t
            }
        }, Pi.find.TAG = Bi.getElementsByTagName ? function(e, t) {
            if (typeof t.getElementsByTagName != oa) return t.getElementsByTagName(e)
        } : function(e, t) {
            var n, r = [],
                o = 0,
                i = t.getElementsByTagName(e);
            if ("*" !== e) return i;
            for (; n = i[o++];) 1 === n.nodeType && r.push(n);
            return r
        }, Pi.find.CLASS = Bi.getElementsByClassName && function(e, t) {
            if (Wi) return t.getElementsByClassName(e)
        }, Xi = [], Ki = [], Bi.disconnectedMatch = !0, Ki = Ki.length && new RegExp(Ki.join("|")), Xi = Xi.length && new RegExp(Xi.join("|")), t = Ea.test($i.compareDocumentPosition), Yi = t || Ea.test($i.contains) ? function(e, t) {
            var n = 9 === e.nodeType ? e.documentElement : e,
                r = t && t.parentNode;
            return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
        } : function(e, t) {
            if (t)
                for (; t = t.parentNode;)
                    if (t === e) return !0;
            return !1
        }, ra = t ? function(e, t) {
            if (e === t) return Hi = !0, 0;
            var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
            return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !Bi.sortDetached && t.compareDocumentPosition(e) === n ? e === s || e.ownerDocument === Ji && Yi(Ji, e) ? -1 : t === s || t.ownerDocument === Ji && Yi(Ji, t) ? 1 : ji ? fa.call(ji, e) - fa.call(ji, t) : 0 : 4 & n ? -1 : 1)
        } : function(e, t) {
            if (e === t) return Hi = !0, 0;
            var n, r = 0,
                o = e.parentNode,
                i = t.parentNode,
                a = [e],
                u = [t];
            if (!o || !i) return e === s ? -1 : t === s ? 1 : o ? -1 : i ? 1 : ji ? fa.call(ji, e) - fa.call(ji, t) : 0;
            if (o === i) return Pa(e, t);
            for (n = e; n = n.parentNode;) a.unshift(n);
            for (n = t; n = n.parentNode;) u.unshift(n);
            for (; a[r] === u[r];) r++;
            return r ? Pa(a[r], u[r]) : a[r] === Ji ? -1 : u[r] === Ji ? 1 : 0
        }, s) : qi
    }, Da.matches = function(e, t) {
        return Da(e, null, null, t)
    }, Da.matchesSelector = function(e, t) {
        if ((e.ownerDocument || e) !== qi && Vi(e), t = t.replace(ba, "='$1']"), Bi.matchesSelector && Wi && (!Xi || !Xi.test(t)) && (!Ki || !Ki.test(t))) try {
            var n = (void 0).call(e, t);
            if (n || Bi.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
        } catch (zk) {}
        return 0 < Da(t, qi, null, [e]).length
    }, Da.contains = function(e, t) {
        return (e.ownerDocument || e) !== qi && Vi(e), Yi(e, t)
    }, Da.attr = function(e, t) {
        (e.ownerDocument || e) !== qi && Vi(e);
        var n = Pi.attrHandle[t.toLowerCase()],
            r = n && ia.call(Pi.attrHandle, t.toLowerCase()) ? n(e, t, !Wi) : undefined;
        return r !== undefined ? r : Bi.attributes || !Wi ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
    }, Da.error = function(e) {
        throw new Error("Syntax error, unrecognized expression: " + e)
    }, Da.uniqueSort = function(e) {
        var t, n = [],
            r = 0,
            o = 0;
        if (Hi = !Bi.detectDuplicates, ji = !Bi.sortStable && e.slice(0), e.sort(ra), Hi) {
            for (; t = e[o++];) t === e[o] && (r = n.push(o));
            for (; r--;) e.splice(n[r], 1)
        }
        return ji = null, e
    }, Li = Da.getText = function(e) {
        var t, n = "",
            r = 0,
            o = e.nodeType;
        if (o) {
            if (1 === o || 9 === o || 11 === o) {
                if ("string" == typeof e.textContent) return e.textContent;
                for (e = e.firstChild; e; e = e.nextSibling) n += Li(e)
            } else if (3 === o || 4 === o) return e.nodeValue
        } else
            for (; t = e[r++];) n += Li(t);
        return n
    }, (Pi = Da.selectors = {
        cacheLength: 50,
        createPseudo: Ba,
        match: xa,
        attrHandle: {},
        find: {},
        relative: {
            ">": {
                dir: "parentNode",
                first: !0
            },
            " ": {
                dir: "parentNode"
            },
            "+": {
                dir: "previousSibling",
                first: !0
            },
            "~": {
                dir: "previousSibling"
            }
        },
        preFilter: {
            ATTR: function(e) {
                return e[1] = e[1].replace(Ra, Ta), e[3] = (e[3] || e[4] || e[5] || "").replace(Ra, Ta), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
            },
            CHILD: function(e) {
                return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || Da.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && Da.error(e[0]), e
            },
            PSEUDO: function(e) {
                var t, n = !e[6] && e[2];
                return xa.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && Ca.test(n) && (t = Mi(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
            }
        },
        filter: {
            TAG: function(e) {
                var t = e.replace(Ra, Ta).toLowerCase();
                return "*" === e ? function() {
                    return !0
                } : function(e) {
                    return e.nodeName && e.nodeName.toLowerCase() === t
                }
            },
            CLASS: function(e) {
                var t = ea[e + " "];
                return t || (t = new RegExp("(^|" + da + ")" + e + "(" + da + "|$)")) && ea(e, function(e) {
                    return t.test("string" == typeof e.className && e.className || typeof e.getAttribute != oa && e.getAttribute("class") || "")
                })
            },
            ATTR: function(n, r, o) {
                return function(e) {
                    var t = Da.attr(e, n);
                    return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === o : "!=" === r ? t !== o : "^=" === r ? o && 0 === t.indexOf(o) : "*=" === r ? o && -1 < t.indexOf(o) : "$=" === r ? o && t.slice(-o.length) === o : "~=" === r ? -1 < (" " + t + " ").indexOf(o) : "|=" === r && (t === o || t.slice(0, o.length + 1) === o + "-"))
                }
            },
            CHILD: function(m, e, t, g, p) {
                var h = "nth" !== m.slice(0, 3),
                    v = "last" !== m.slice(-4),
                    y = "of-type" === e;
                return 1 === g && 0 === p ? function(e) {
                    return !!e.parentNode
                } : function(e, t, n) {
                    var r, o, i, a, u, s, c = h != v ? "nextSibling" : "previousSibling",
                        l = e.parentNode,
                        f = y && e.nodeName.toLowerCase(),
                        d = !n && !y;
                    if (l) {
                        if (h) {
                            for (; c;) {
                                for (i = e; i = i[c];)
                                    if (y ? i.nodeName.toLowerCase() === f : 1 === i.nodeType) return !1;
                                s = c = "only" === m && !s && "nextSibling"
                            }
                            return !0
                        }
                        if (s = [v ? l.firstChild : l.lastChild], v && d) {
                            for (u = (r = (o = l[Gi] || (l[Gi] = {}))[m] || [])[0] === Qi && r[1], a = r[0] === Qi && r[2], i = u && l.childNodes[u]; i = ++u && i && i[c] || (a = u = 0) || s.pop();)
                                if (1 === i.nodeType && ++a && i === e) {
                                    o[m] = [Qi, u, a];
                                    break
                                }
                        } else if (d && (r = (e[Gi] || (e[Gi] = {}))[m]) && r[0] === Qi) a = r[1];
                        else
                            for (;
                                (i = ++u && i && i[c] || (a = u = 0) || s.pop()) && ((y ? i.nodeName.toLowerCase() !== f : 1 !== i.nodeType) || !++a || (d && ((i[Gi] || (i[Gi] = {}))[m] = [Qi, a]), i !== e)););
                        return (a -= p) === g || a % g == 0 && 0 <= a / g
                    }
                }
            },
            PSEUDO: function(e, i) {
                var t, a = Pi.pseudos[e] || Pi.setFilters[e.toLowerCase()] || Da.error("unsupported pseudo: " + e);
                return a[Gi] ? a(i) : 1 < a.length ? (t = [e, e, "", i], Pi.setFilters.hasOwnProperty(e.toLowerCase()) ? Ba(function(e, t) {
                    for (var n, r = a(e, i), o = r.length; o--;) e[n = fa.call(e, r[o])] = !(t[n] = r[o])
                }) : function(e) {
                    return a(e, 0, t)
                }) : a
            }
        },
        pseudos: {
            not: Ba(function(e) {
                var r = [],
                    o = [],
                    u = Fi(e.replace(ha, "$1"));
                return u[Gi] ? Ba(function(e, t, n, r) {
                    for (var o, i = u(e, null, r, []), a = e.length; a--;)(o = i[a]) && (e[a] = !(t[a] = o))
                }) : function(e, t, n) {
                    return r[0] = e, u(r, null, n, o), r[0] = null, !o.pop()
                }
            }),
            has: Ba(function(t) {
                return function(e) {
                    return 0 < Da(t, e).length
                }
            }),
            contains: Ba(function(t) {
                return t = t.replace(Ra, Ta),
                    function(e) {
                        return -1 < (e.textContent || e.innerText || Li(e)).indexOf(t)
                    }
            }),
            lang: Ba(function(n) {
                return wa.test(n || "") || Da.error("unsupported lang: " + n), n = n.replace(Ra, Ta).toLowerCase(),
                    function(e) {
                        var t;
                        do {
                            if (t = Wi ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
            }),
            target: function(e) {
                var t = window.location && window.location.hash;
                return t && t.slice(1) === e.id
            },
            root: function(e) {
                return e === $i
            },
            focus: function(e) {
                return e === qi.activeElement && (!qi.hasFocus || qi.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
            },
            enabled: function(e) {
                return !1 === e.disabled
            },
            disabled: function(e) {
                return !0 === e.disabled
            },
            checked: function(e) {
                var t = e.nodeName.toLowerCase();
                return "input" === t && !!e.checked || "option" === t && !!e.selected
            },
            selected: function(e) {
                return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
            },
            empty: function(e) {
                for (e = e.firstChild; e; e = e.nextSibling)
                    if (e.nodeType < 6) return !1;
                return !0
            },
            parent: function(e) {
                return !Pi.pseudos.empty(e)
            },
            header: function(e) {
                return Na.test(e.nodeName)
            },
            input: function(e) {
                return Sa.test(e.nodeName)
            },
            button: function(e) {
                var t = e.nodeName.toLowerCase();
                return "input" === t && "button" === e.type || "button" === t
            },
            text: function(e) {
                var t;
                return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
            },
            first: La(function() {
                return [0]
            }),
            last: La(function(e, t) {
                return [t - 1]
            }),
            eq: La(function(e, t, n) {
                return [n < 0 ? n + t : n]
            }),
            even: La(function(e, t) {
                for (var n = 0; n < t; n += 2) e.push(n);
                return e
            }),
            odd: La(function(e, t) {
                for (var n = 1; n < t; n += 2) e.push(n);
                return e
            }),
            lt: La(function(e, t, n) {
                for (var r = n < 0 ? n + t : n; 0 <= --r;) e.push(r);
                return e
            }),
            gt: La(function(e, t, n) {
                for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                return e
            })
        }
    }).pseudos.nth = Pi.pseudos.eq, Y(["radio", "checkbox", "file", "password", "image"], function(e) {
        var t;
        Pi.pseudos[e] = (t = e, function(e) {
            return "input" === e.nodeName.toLowerCase() && e.type === t
        })
    }), Y(["submit", "reset"], function(e) {
        var n;
        Pi.pseudos[e] = (n = e, function(e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t || "button" === t) && e.type === n
        })
    }), Ma.prototype = Pi.filters = Pi.pseudos, Pi.setFilters = new Ma, Mi = Da.tokenize = function(e, t) {
        var n, r, o, i, a, u, s, c = ta[e + " "];
        if (c) return t ? 0 : c.slice(0);
        for (a = e, u = [], s = Pi.preFilter; a;) {
            for (i in n && !(r = va.exec(a)) || (r && (a = a.slice(r[0].length) || a), u.push(o = [])), n = !1, (r = ya.exec(a)) && (n = r.shift(), o.push({
                    value: n,
                    type: r[0].replace(ha, " ")
                }), a = a.slice(n.length)), Pi.filter) Pi.filter.hasOwnProperty(i) && (!(r = xa[i].exec(a)) || s[i] && !(r = s[i](r)) || (n = r.shift(), o.push({
                value: n,
                type: i,
                matches: r
            }), a = a.slice(n.length)));
            if (!n) break
        }
        return t ? a.length : a ? Da.error(e) : ta(e, u).slice(0)
    }, Fi = Da.compile = function(e, t) {
        var n, h, v, y, b, r, o = [],
            i = [],
            a = na[e + " "];
        if (!a) {
            for (n = (t = t || Mi(e)).length; n--;)(a = function f(e) {
                for (var o, t, n, r = e.length, i = Pi.relative[e[0].type], a = i || Pi.relative[" "], u = i ? 1 : 0, s = Ua(function(e) {
                        return e === o
                    }, a, !0), c = Ua(function(e) {
                        return -1 < fa.call(o, e)
                    }, a, !0), l = [function(e, t, n) {
                        var r = !i && (n || t !== zi) || ((o = t).nodeType ? s : c)(e, t, n);
                        return o = null, r
                    }]; u < r; u++)
                    if (t = Pi.relative[e[u].type]) l = [Ua(za(l), t)];
                    else {
                        if ((t = Pi.filter[e[u].type].apply(null, e[u].matches))[Gi]) {
                            for (n = ++u; n < r && !Pi.relative[e[n].type]; n++);
                            return Ha(1 < u && za(l), 1 < u && Fa(e.slice(0, u - 1).concat({
                                value: " " === e[u - 2].type ? "*" : ""
                            })).replace(ha, "$1"), t, u < n && f(e.slice(u, n)), n < r && f(e = e.slice(n)), n < r && Fa(e))
                        }
                        l.push(t)
                    } return za(l)
            }(t[n]))[Gi] ? o.push(a) : i.push(a);
            (a = na(e, (h = i, y = 0 < (v = o).length, b = 0 < h.length, r = function(e, t, n, r, o) {
                var i, a, u, s = 0,
                    c = "0",
                    l = e && [],
                    f = [],
                    d = zi,
                    m = e || b && Pi.find.TAG("*", o),
                    g = Qi += null == d ? 1 : Math.random() || .1,
                    p = m.length;
                for (o && (zi = t !== qi && t); c !== p && null != (i = m[c]); c++) {
                    if (b && i) {
                        for (a = 0; u = h[a++];)
                            if (u(i, t, n)) {
                                r.push(i);
                                break
                            } o && (Qi = g)
                    }
                    y && ((i = !u && i) && s--, e && l.push(i))
                }
                if (s += c, y && c !== s) {
                    for (a = 0; u = v[a++];) u(l, f, t, n);
                    if (e) {
                        if (0 < s)
                            for (; c--;) l[c] || f[c] || (f[c] = ua.call(r));
                        f = ja(f)
                    }
                    ca.apply(r, f), o && !e && 0 < f.length && 1 < s + v.length && Da.uniqueSort(r)
                }
                return o && (Qi = g, zi = d), l
            }, y ? Ba(r) : r))).selector = e
        }
        return a
    }, Ui = Da.select = function(e, t, n, r) {
        var o, i, a, u, s, c = "function" == typeof e && e,
            l = !r && Mi(e = c.selector || e);
        if (n = n || [], 1 === l.length) {
            if (2 < (i = l[0] = l[0].slice(0)).length && "ID" === (a = i[0]).type && Bi.getById && 9 === t.nodeType && Wi && Pi.relative[i[1].type]) {
                if (!(t = (Pi.find.ID(a.matches[0].replace(Ra, Ta), t) || [])[0])) return n;
                c && (t = t.parentNode), e = e.slice(i.shift().value.length)
            }
            for (o = xa.needsContext.test(e) ? 0 : i.length; o-- && (a = i[o], !Pi.relative[u = a.type]);)
                if ((s = Pi.find[u]) && (r = s(a.matches[0].replace(Ra, Ta), _a.test(i[0].type) && Ia(t.parentNode) || t))) {
                    if (i.splice(o, 1), !(e = r.length && Fa(i))) return ca.apply(n, r), n;
                    break
                }
        }
        return (c || Fi(e, l))(r, t, !Wi, n, _a.test(e) && Ia(t.parentNode) || t), n
    }, Bi.sortStable = Gi.split("").sort(ra).join("") === Gi, Bi.detectDuplicates = !!Hi, Vi(), Bi.sortDetached = !0;
    var Va = document,
        qa = Array.prototype.push,
        $a = Array.prototype.slice,
        Wa = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
        Ka = Di.Event,
        Xa = At.makeMap("children,contents,next,prev"),
        Ya = function(e) {
            return void 0 !== e
        },
        Ga = function(e) {
            return "string" == typeof e
        },
        Ja = function(e, t) {
            var n, r = (t = t || Va).createElement("div"),
                o = t.createDocumentFragment();
            for (r.innerHTML = e; n = r.firstChild;) o.appendChild(n);
            return o
        },
        Qa = function(e, t, n, r) {
            var o;
            if (Ga(t)) t = Ja(t, du(e[0]));
            else if (t.length && !t.nodeType) {
                if (t = hu.makeArray(t), r)
                    for (o = t.length - 1; 0 <= o; o--) Qa(e, t[o], n, r);
                else
                    for (o = 0; o < t.length; o++) Qa(e, t[o], n, r);
                return e
            }
            if (t.nodeType)
                for (o = e.length; o--;) n.call(e[o], t);
            return e
        },
        Za = function(e, t) {
            return e && t && -1 !== (" " + e.className + " ").indexOf(" " + t + " ")
        },
        eu = function(e, t, n) {
            var r, o;
            return t = hu(t)[0], e.each(function() {
                n && r === this.parentNode || (r = this.parentNode, o = t.cloneNode(!1), this.parentNode.insertBefore(o, this)), o.appendChild(this)
            }), e
        },
        tu = At.makeMap("fillOpacity fontWeight lineHeight opacity orphans widows zIndex zoom", " "),
        nu = At.makeMap("checked compact declare defer disabled ismap multiple nohref noshade nowrap readonly selected", " "),
        ru = {
            "for": "htmlFor",
            "class": "className",
            readonly: "readOnly"
        },
        ou = {
            "float": "cssFloat"
        },
        iu = {},
        au = {},
        uu = function(e, t) {
            return new hu.fn.init(e, t)
        },
        su = /^\s*|\s*$/g,
        cu = function(e) {
            return null === e || e === undefined ? "" : ("" + e).replace(su, "")
        },
        lu = function(e, t) {
            var n, r, o, i;
            if (e)
                if ((n = e.length) === undefined) {
                    for (r in e)
                        if (e.hasOwnProperty(r) && (i = e[r], !1 === t.call(i, r, i))) break
                } else
                    for (o = 0; o < n && (i = e[o], !1 !== t.call(i, o, i)); o++);
            return e
        },
        fu = function(e, n) {
            var r = [];
            return lu(e, function(e, t) {
                n(t, e) && r.push(t)
            }), r
        },
        du = function(e) {
            return e ? 9 === e.nodeType ? e : e.ownerDocument : Va
        };
    uu.fn = uu.prototype = {
        constructor: uu,
        selector: "",
        context: null,
        length: 0,
        init: function(e, t) {
            var n, r, o = this;
            if (!e) return o;
            if (e.nodeType) return o.context = o[0] = e, o.length = 1, o;
            if (t && t.nodeType) o.context = t;
            else {
                if (t) return hu(e).attr(t);
                o.context = t = document
            }
            if (Ga(e)) {
                if (!(n = "<" === (o.selector = e).charAt(0) && ">" === e.charAt(e.length - 1) && 3 <= e.length ? [null, e, null] : Wa.exec(e))) return hu(t).find(e);
                if (n[1])
                    for (r = Ja(e, du(t)).firstChild; r;) qa.call(o, r), r = r.nextSibling;
                else {
                    if (!(r = du(t).getElementById(n[2]))) return o;
                    if (r.id !== n[2]) return o.find(e);
                    o.length = 1, o[0] = r
                }
            } else this.add(e, !1);
            return o
        },
        toArray: function() {
            return At.toArray(this)
        },
        add: function(e, t) {
            var n, r;
            if (Ga(e)) return this.add(hu(e));
            if (!1 !== t)
                for (n = hu.unique(this.toArray().concat(hu.makeArray(e))), this.length = n.length, r = 0; r < n.length; r++) this[r] = n[r];
            else qa.apply(this, hu.makeArray(e));
            return this
        },
        attr: function(t, n) {
            var e, r = this;
            if ("object" == typeof t) lu(t, function(e, t) {
                r.attr(e, t)
            });
            else {
                if (!Ya(n)) {
                    if (r[0] && 1 === r[0].nodeType) {
                        if ((e = iu[t]) && e.get) return e.get(r[0], t);
                        if (nu[t]) return r.prop(t) ? t : undefined;
                        null === (n = r[0].getAttribute(t, 2)) && (n = undefined)
                    }
                    return n
                }
                this.each(function() {
                    var e;
                    if (1 === this.nodeType) {
                        if ((e = iu[t]) && e.set) return void e.set(this, n);
                        null === n ? this.removeAttribute(t, 2) : this.setAttribute(t, n, 2)
                    }
                })
            }
            return r
        },
        removeAttr: function(e) {
            return this.attr(e, null)
        },
        prop: function(e, t) {
            var n = this;
            if ("object" == typeof(e = ru[e] || e)) lu(e, function(e, t) {
                n.prop(e, t)
            });
            else {
                if (!Ya(t)) return n[0] && n[0].nodeType && e in n[0] ? n[0][e] : t;
                this.each(function() {
                    1 === this.nodeType && (this[e] = t)
                })
            }
            return n
        },
        css: function(n, r) {
            var e, o, i = this,
                t = function(e) {
                    return e.replace(/-(\D)/g, function(e, t) {
                        return t.toUpperCase()
                    })
                },
                a = function(e) {
                    return e.replace(/[A-Z]/g, function(e) {
                        return "-" + e
                    })
                };
            if ("object" == typeof n) lu(n, function(e, t) {
                i.css(e, t)
            });
            else if (Ya(r)) n = t(n), "number" != typeof r || tu[n] || (r = r.toString() + "px"), i.each(function() {
                var e = this.style;
                if ((o = au[n]) && o.set) o.set(this, r);
                else {
                    try {
                        this.style[ou[n] || n] = r
                    } catch (t) {}
                    null !== r && "" !== r || (e.removeProperty ? e.removeProperty(a(n)) : e.removeAttribute(n))
                }
            });
            else {
                if (e = i[0], (o = au[n]) && o.get) return o.get(e);
                if (!e.ownerDocument.defaultView) return e.currentStyle ? e.currentStyle[t(n)] : "";
                try {
                    return e.ownerDocument.defaultView.getComputedStyle(e, null).getPropertyValue(a(n))
                } catch (u) {
                    return undefined
                }
            }
            return i
        },
        remove: function() {
            for (var e, t = this.length; t--;) e = this[t], Ka.clean(e), e.parentNode && e.parentNode.removeChild(e);
            return this
        },
        empty: function() {
            for (var e, t = this.length; t--;)
                for (e = this[t]; e.firstChild;) e.removeChild(e.firstChild);
            return this
        },
        html: function(e) {
            var t;
            if (Ya(e)) {
                t = this.length;
                try {
                    for (; t--;) this[t].innerHTML = e
                } catch (n) {
                    hu(this[t]).empty().append(e)
                }
                return this
            }
            return this[0] ? this[0].innerHTML : ""
        },
        text: function(e) {
            var t;
            if (Ya(e)) {
                for (t = this.length; t--;) "innerText" in this[t] ? this[t].innerText = e : this[0].textContent = e;
                return this
            }
            return this[0] ? this[0].innerText || this[0].textContent : ""
        },
        append: function() {
            return Qa(this, arguments, function(e) {
                (1 === this.nodeType || this.host && 1 === this.host.nodeType) && this.appendChild(e)
            })
        },
        prepend: function() {
            return Qa(this, arguments, function(e) {
                (1 === this.nodeType || this.host && 1 === this.host.nodeType) && this.insertBefore(e, this.firstChild)
            }, !0)
        },
        before: function() {
            return this[0] && this[0].parentNode ? Qa(this, arguments, function(e) {
                this.parentNode.insertBefore(e, this)
            }) : this
        },
        after: function() {
            return this[0] && this[0].parentNode ? Qa(this, arguments, function(e) {
                this.parentNode.insertBefore(e, this.nextSibling)
            }, !0) : this
        },
        appendTo: function(e) {
            return hu(e).append(this), this
        },
        prependTo: function(e) {
            return hu(e).prepend(this), this
        },
        replaceWith: function(e) {
            return this.before(e).remove()
        },
        wrap: function(e) {
            return eu(this, e)
        },
        wrapAll: function(e) {
            return eu(this, e, !0)
        },
        wrapInner: function(e) {
            return this.each(function() {
                hu(this).contents().wrapAll(e)
            }), this
        },
        unwrap: function() {
            return this.parent().each(function() {
                hu(this).replaceWith(this.childNodes)
            })
        },
        clone: function() {
            var e = [];
            return this.each(function() {
                e.push(this.cloneNode(!0))
            }), hu(e)
        },
        addClass: function(e) {
            return this.toggleClass(e, !0)
        },
        removeClass: function(e) {
            return this.toggleClass(e, !1)
        },
        toggleClass: function(o, i) {
            var e = this;
            return "string" != typeof o || (-1 !== o.indexOf(" ") ? lu(o.split(" "), function() {
                e.toggleClass(this, i)
            }) : e.each(function(e, t) {
                var n, r = Za(t, o);
                r !== i && (n = t.className, r ? t.className = cu((" " + n + " ").replace(" " + o + " ", " ")) : t.className += n ? " " + o : o)
            })), e
        },
        hasClass: function(e) {
            return Za(this[0], e)
        },
        each: function(e) {
            return lu(this, e)
        },
        on: function(e, t) {
            return this.each(function() {
                Ka.bind(this, e, t)
            })
        },
        off: function(e, t) {
            return this.each(function() {
                Ka.unbind(this, e, t)
            })
        },
        trigger: function(e) {
            return this.each(function() {
                "object" == typeof e ? Ka.fire(this, e.type, e) : Ka.fire(this, e)
            })
        },
        show: function() {
            return this.css("display", "")
        },
        hide: function() {
            return this.css("display", "none")
        },
        slice: function() {
            return hu($a.apply(this, arguments))
        },
        eq: function(e) {
            return -1 === e ? this.slice(e) : this.slice(e, +e + 1)
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        find: function(e) {
            for (var t = [], n = 0, r = this.length; n < r; n++) hu.find(e, this[n], t);
            return hu(t)
        },
        filter: function(n) {
            return hu("function" == typeof n ? fu(this.toArray(), function(e, t) {
                return n(t, e)
            }) : hu.filter(n, this.toArray()))
        },
        closest: function(n) {
            var r = [];
            return n instanceof hu && (n = n[0]), this.each(function(e, t) {
                for (; t;) {
                    if ("string" == typeof n && hu(t).is(n)) {
                        r.push(t);
                        break
                    }
                    if (t === n) {
                        r.push(t);
                        break
                    }
                    t = t.parentNode
                }
            }), hu(r)
        },
        offset: function(e) {
            var t, n, r, o, i = 0,
                a = 0;
            return e ? this.css(e) : ((t = this[0]) && (r = (n = t.ownerDocument).documentElement, t.getBoundingClientRect && (i = (o = t.getBoundingClientRect()).left + (r.scrollLeft || n.body.scrollLeft) - r.clientLeft, a = o.top + (r.scrollTop || n.body.scrollTop) - r.clientTop)), {
                left: i,
                top: a
            })
        },
        push: qa,
        sort: Array.prototype.sort,
        splice: Array.prototype.splice
    }, At.extend(uu, {
        extend: At.extend,
        makeArray: function(e) {
            return (t = e) && t === t.window || e.nodeType ? [e] : At.toArray(e);
            var t
        },
        inArray: function(e, t) {
            var n;
            if (t.indexOf) return t.indexOf(e);
            for (n = t.length; n--;)
                if (t[n] === e) return n;
            return -1
        },
        isArray: At.isArray,
        each: lu,
        trim: cu,
        grep: fu,
        find: Da,
        expr: Da.selectors,
        unique: Da.uniqueSort,
        text: Da.getText,
        contains: Da.contains,
        filter: function(e, t, n) {
            var r = t.length;
            for (n && (e = ":not(" + e + ")"); r--;) 1 !== t[r].nodeType && t.splice(r, 1);
            return t = 1 === t.length ? hu.find.matchesSelector(t[0], e) ? [t[0]] : [] : hu.find.matches(e, t)
        }
    });
    var mu = function(e, t, n) {
            var r = [],
                o = e[t];
            for ("string" != typeof n && n instanceof hu && (n = n[0]); o && 9 !== o.nodeType;) {
                if (n !== undefined) {
                    if (o === n) break;
                    if ("string" == typeof n && hu(o).is(n)) break
                }
                1 === o.nodeType && r.push(o), o = o[t]
            }
            return r
        },
        gu = function(e, t, n, r) {
            var o = [];
            for (r instanceof hu && (r = r[0]); e; e = e[t])
                if (!n || e.nodeType === n) {
                    if (r !== undefined) {
                        if (e === r) break;
                        if ("string" == typeof r && hu(e).is(r)) break
                    }
                    o.push(e)
                } return o
        },
        pu = function(e, t, n) {
            for (e = e[t]; e; e = e[t])
                if (e.nodeType === n) return e;
            return null
        };
    lu({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return mu(e, "parentNode")
        },
        next: function(e) {
            return pu(e, "nextSibling", 1)
        },
        prev: function(e) {
            return pu(e, "previousSibling", 1)
        },
        children: function(e) {
            return gu(e.firstChild, "nextSibling", 1)
        },
        contents: function(e) {
            return At.toArray(("iframe" === e.nodeName ? e.contentDocument || e.contentWindow.document : e).childNodes)
        }
    }, function(r, o) {
        uu.fn[r] = function(t) {
            var n = [];
            this.each(function() {
                var e = o.call(n, this, t, n);
                e && (hu.isArray(e) ? n.push.apply(n, e) : n.push(e))
            }), 1 < this.length && (Xa[r] || (n = hu.unique(n)), 0 === r.indexOf("parents") && (n = n.reverse()));
            var e = hu(n);
            return t ? e.filter(t) : e
        }
    }), lu({
        parentsUntil: function(e, t) {
            return mu(e, "parentNode", t)
        },
        nextUntil: function(e, t) {
            return gu(e, "nextSibling", 1, t).slice(1)
        },
        prevUntil: function(e, t) {
            return gu(e, "previousSibling", 1, t).slice(1)
        }
    }, function(o, i) {
        uu.fn[o] = function(t, e) {
            var n = [];
            this.each(function() {
                var e = i.call(n, this, t, n);
                e && (hu.isArray(e) ? n.push.apply(n, e) : n.push(e))
            }), 1 < this.length && (n = hu.unique(n), 0 !== o.indexOf("parents") && "prevUntil" !== o || (n = n.reverse()));
            var r = hu(n);
            return e ? r.filter(e) : r
        }
    }), uu.fn.is = function(e) {
        return !!e && 0 < this.filter(e).length
    }, uu.fn.init.prototype = uu.fn, uu.overrideDefaults = function(n) {
        var r, o = function(e, t) {
            return r = r || n(), 0 === arguments.length && (e = r.element), t = t || r.context, new o.fn.init(e, t)
        };
        return hu.extend(o, this), o
    }, uu.attrHooks = iu, uu.cssHooks = au;
    var hu = uu,
        vu = At.each,
        yu = At.grep,
        bu = St.ie,
        Cu = /^([a-z0-9],?)+$/i,
        wu = function(e, t) {
            var n = t.attr("style"),
                r = (r = e.serialize(e.parse(n), t[0].nodeName)) || null;
            t.attr("data-mce-style", r)
        },
        xu = function(e, t) {
            var n, r, o = 0;
            if (e)
                for (n = e.nodeType, e = e.previousSibling; e; e = e.previousSibling) r = e.nodeType, (!t || 3 !== r || r !== n && e.nodeValue.length) && (o++, n = r);
            return o
        },
        Su = function(a, u) {
            void 0 === u && (u = {});
            var n, r, o, i, e, t, s = {},
                c = window,
                l = {},
                f = 0,
                d = Yr.forElement(Tt.fromDom(a), {
                    contentCssCors: u.contentCssCors,
                    referrerPolicy: u.referrerPolicy
                }),
                m = [],
                g = u.schema ? u.schema : wi({}),
                p = Si({
                    url_converter: u.url_converter,
                    url_converter_scope: u.url_converter_scope
                }, u.schema),
                h = u.ownEvents ? new Di : Di.Event,
                v = g.getBlockElements(),
                y = hu.overrideDefaults(function() {
                    return {
                        context: a,
                        element: $.getRoot()
                    }
                }),
                b = function(e) {
                    return e && a && K(e) ? a.getElementById(e) : e
                },
                C = function(e) {
                    return y("string" == typeof e ? b(e) : e)
                },
                w = function(e, t, n) {
                    var r, o, i = C(e);
                    return i.length && (o = (r = W[t]) && r.get ? r.get(i, t) : i.attr(t)), void 0 === o && (o = n || ""), o
                },
                x = function(e) {
                    var t = b(e);
                    return t ? t.attributes : []
                },
                S = function(e, t, n) {
                    "" === n && (n = null);
                    var r, o = C(e),
                        i = o.attr(t);
                    o.length && ((r = W[t]) && r.set ? r.set(o, n, t) : o.attr(t, n), i !== n && u.onSetAttrib && u.onSetAttrib({
                        attrElm: o,
                        attrName: t,
                        attrValue: n
                    }))
                },
                N = function() {
                    return u.root_element || a.body
                },
                E = function(e, t) {
                    return cr(a.body, b(e), t)
                },
                k = function(e, t, n) {
                    var r = C(e);
                    return n ? r.css(t) : ("float" === (t = t.replace(/-(\D)/g, function(e, t) {
                        return t.toUpperCase()
                    })) && (t = St.browser.isIE() ? "styleFloat" : "cssFloat"), r[0] && r[0].style ? r[0].style[t] : undefined)
                },
                _ = function(e) {
                    var t, n;
                    return e = b(e), t = k(e, "width"), n = k(e, "height"), -1 === t.indexOf("px") && (t = 0), -1 === n.indexOf("px") && (n = 0), {
                        w: parseInt(t, 10) || e.offsetWidth || e.clientWidth,
                        h: parseInt(n, 10) || e.offsetHeight || e.clientHeight
                    }
                },
                A = function(e, t) {
                    if (!e) return !1;
                    if (!Array.isArray(e)) {
                        if ("*" === t) return 1 === e.nodeType;
                        if (Cu.test(t)) {
                            for (var n = t.toLowerCase().split(/,/), r = e.nodeName.toLowerCase(), o = n.length - 1; 0 <= o; o--)
                                if (n[o] === r) return !0;
                            return !1
                        }
                        if (e.nodeType && 1 !== e.nodeType) return !1
                    }
                    var i = Array.isArray(e) ? e : [e];
                    return 0 < Da(t, i[0].ownerDocument || i[0], null, i).length
                },
                R = function(e, t, n, r) {
                    var o, i = [],
                        a = b(e);
                    for (r = r === undefined, n = n || ("BODY" !== N().nodeName ? N().parentNode : null), At.is(t, "string") && (t = "*" === (o = t) ? function(e) {
                            return 1 === e.nodeType
                        } : function(e) {
                            return A(e, o)
                        }); a && !(a === n || X(a.nodeType) || zn(a) || jn(a));) {
                        if (!t || "function" == typeof t && t(a)) {
                            if (!r) return [a];
                            i.push(a)
                        }
                        a = a.parentNode
                    }
                    return r ? i : null
                },
                T = function(e, t, n) {
                    var r = t;
                    if (e)
                        for ("string" == typeof t && (r = function(e) {
                                return A(e, t)
                            }), e = e[n]; e; e = e[n])
                            if ("function" == typeof r && r(e)) return e;
                    return null
                },
                D = function(e, n, r) {
                    var o, t = "string" == typeof e ? b(e) : e;
                    if (!t) return !1;
                    if (At.isArray(t) && (t.length || 0 === t.length)) return o = [], vu(t, function(e, t) {
                        e && o.push(n.call(r, "string" == typeof e ? b(e) : e, t))
                    }), o;
                    var i = r || this;
                    return n.call(i, t)
                },
                O = function(e, t) {
                    C(e).each(function(e, n) {
                        vu(t, function(e, t) {
                            S(n, t, e)
                        })
                    })
                },
                B = function(e, r) {
                    var t = C(e);
                    bu ? t.each(function(e, t) {
                        if (!1 !== t.canHaveHTML) {
                            for (; t.firstChild;) t.removeChild(t.firstChild);
                            try {
                                t.innerHTML = "<br>" + r, t.removeChild(t.firstChild)
                            } catch (n) {
                                hu("<div></div>").html("<br>" + r).contents().slice(1).appendTo(t)
                            }
                            return r
                        }
                    }) : t.html(r)
                },
                P = function(e, n, r, o, i) {
                    return D(e, function(e) {
                        var t = "string" == typeof n ? a.createElement(n) : n;
                        return O(t, r), o && ("string" != typeof o && o.nodeType ? t.appendChild(o) : "string" == typeof o && B(t, o)), i ? t : e.appendChild(t)
                    })
                },
                L = function(e, t, n) {
                    return P(a.createElement(e), e, t, n, !0)
                },
                I = fi.encodeAllRaw,
                M = function(e, t) {
                    var n = C(e);
                    return t ? n.each(function() {
                        for (var e; e = this.firstChild;) 3 === e.nodeType && 0 === e.data.length ? this.removeChild(e) : this.parentNode.insertBefore(e, this)
                    }).remove() : n.remove(), 1 < n.length ? n.toArray() : n[0]
                },
                F = function(e, t, n) {
                    C(e).toggleClass(t, n).each(function() {
                        "" === this.className && hu(this).attr("class", null)
                    })
                },
                U = function(t, e, n) {
                    return D(e, function(e) {
                        return At.is(e, "array") && (t = t.cloneNode(!0)), n && vu(yu(e.childNodes), function(e) {
                            t.appendChild(e)
                        }), e.parentNode.replaceChild(t, e)
                    })
                },
                z = function(e) {
                    if (Tn(e)) {
                        var t = "a" === e.nodeName.toLowerCase() && !w(e, "href") && w(e, "id");
                        if (w(e, "name") || w(e, "data-mce-bookmark") || t) return !0
                    }
                    return !1
                },
                j = function() {
                    return a.createRange()
                },
                H = function(e, t, n, r) {
                    if (At.isArray(e)) {
                        for (var o = e.length, i = []; o--;) i[o] = H(e[o], t, n, r);
                        return i
                    }
                    return !u.collect || e !== a && e !== c || m.push([e, t, n, r]), h.bind(e, t, n, r || $)
                },
                V = function(e, t, n) {
                    if (At.isArray(e)) {
                        for (var r = e.length, o = []; r--;) o[r] = V(e[r], t, n);
                        return o
                    }
                    if (0 < m.length && (e === a || e === c))
                        for (r = m.length; r--;) {
                            var i = m[r];
                            e !== i[0] || t && t !== i[1] || n && n !== i[2] || h.unbind(i[0], i[1], i[2])
                        }
                    return h.unbind(e, t, n)
                },
                q = function(e) {
                    if (e && Tn(e)) {
                        var t = e.getAttribute("data-mce-contenteditable");
                        return t && "inherit" !== t ? t : "inherit" !== e.contentEditable ? e.contentEditable : null
                    }
                    return null
                },
                $ = {
                    doc: a,
                    settings: u,
                    win: c,
                    files: l,
                    stdMode: !0,
                    boxModel: !0,
                    styleSheetLoader: d,
                    boundEvents: m,
                    styles: p,
                    schema: g,
                    events: h,
                    isBlock: function(e) {
                        if ("string" == typeof e) return !!v[e];
                        if (e) {
                            var t = e.nodeType;
                            if (t) return !(1 !== t || !v[e.nodeName])
                        }
                        return !1
                    },
                    $: y,
                    $$: C,
                    root: null,
                    clone: function(t, e) {
                        if (!bu || 1 !== t.nodeType || e) return t.cloneNode(e);
                        var n = a.createElement(t.nodeName);
                        return vu(x(t), function(e) {
                            S(n, e.nodeName, w(t, e.nodeName))
                        }), n
                    },
                    getRoot: N,
                    getViewPort: function(e) {
                        var t = _n(e);
                        return {
                            x: t.x,
                            y: t.y,
                            w: t.width,
                            h: t.height
                        }
                    },
                    getRect: function(e) {
                        e = b(e);
                        var t = E(e),
                            n = _(e);
                        return {
                            x: t.x,
                            y: t.y,
                            w: n.w,
                            h: n.h
                        }
                    },
                    getSize: _,
                    getParent: function(e, t, n) {
                        var r = R(e, t, n, !1);
                        return r && 0 < r.length ? r[0] : null
                    },
                    getParents: R,
                    get: b,
                    getNext: function(e, t) {
                        return T(e, t, "nextSibling")
                    },
                    getPrev: function(e, t) {
                        return T(e, t, "previousSibling")
                    },
                    select: function(e, t) {
                        return Da(e, b(t) || u.root_element || a, [])
                    },
                    is: A,
                    add: P,
                    create: L,
                    createHTML: function(e, t, n) {
                        var r, o = "";
                        for (r in o += "<" + e, t) t.hasOwnProperty(r) && null !== t[r] && "undefined" != typeof t[r] && (o += " " + r + '="' + I(t[r]) + '"');
                        return void 0 !== n ? o + ">" + n + "</" + e + ">" : o + " />"
                    },
                    createFragment: function(e) {
                        var t, n = a.createElement("div"),
                            r = a.createDocumentFragment();
                        for (r.appendChild(n), e && (n.innerHTML = e); t = n.firstChild;) r.appendChild(t);
                        return r.removeChild(n), r
                    },
                    remove: M,
                    setStyle: function(e, t, n) {
                        var r = K(t) ? C(e).css(t, n) : C(e).css(t);
                        u.update_styles && wu(p, r)
                    },
                    getStyle: k,
                    setStyles: function(e, t) {
                        var n = C(e).css(t);
                        u.update_styles && wu(p, n)
                    },
                    removeAllAttribs: function(e) {
                        return D(e, function(e) {
                            for (var t = e.attributes, n = t.length - 1; 0 <= n; n--) e.removeAttributeNode(t.item(n))
                        })
                    },
                    setAttrib: S,
                    setAttribs: O,
                    getAttrib: w,
                    getPos: E,
                    parseStyle: function(e) {
                        return p.parse(e)
                    },
                    serializeStyle: function(e, t) {
                        return p.serialize(e, t)
                    },
                    addStyle: function(e) {
                        var t, n;
                        if ($ !== Su.DOM && a === document) {
                            if (s[e]) return;
                            s[e] = !0
                        }(n = a.getElementById("mceDefaultStyles")) || ((n = a.createElement("style")).id = "mceDefaultStyles", n.type = "text/css", (t = a.getElementsByTagName("head")[0]).firstChild ? t.insertBefore(n, t.firstChild) : t.appendChild(n)), n.styleSheet ? n.styleSheet.cssText += e : n.appendChild(a.createTextNode(e))
                    },
                    loadCSS: function(e) {
                        Y((e = e || "").split(","), function(e) {
                            l[e] = !0, d.load(e, te)
                        })
                    },
                    addClass: function(e, t) {
                        C(e).addClass(t)
                    },
                    removeClass: function(e, t) {
                        F(e, t, !1)
                    },
                    hasClass: function(e, t) {
                        return C(e).hasClass(t)
                    },
                    toggleClass: F,
                    show: function(e) {
                        C(e).show()
                    },
                    hide: function(e) {
                        C(e).hide()
                    },
                    isHidden: function(e) {
                        return "none" === C(e).css("display")
                    },
                    uniqueId: function(e) {
                        return (e || "mce_") + f++
                    },
                    setHTML: B,
                    getOuterHTML: function(e) {
                        var t = "string" == typeof e ? b(e) : e;
                        return Tn(t) ? t.outerHTML : hu("<div></div>").append(hu(t).clone()).html()
                    },
                    setOuterHTML: function(e, t) {
                        C(e).each(function() {
                            try {
                                if ("outerHTML" in this) return void(this.outerHTML = t)
                            } catch (e) {}
                            M(hu(this).html(t), !0)
                        })
                    },
                    decode: fi.decode,
                    encode: I,
                    insertAfter: function(e, t) {
                        var r = b(t);
                        return D(e, function(e) {
                            var t = r.parentNode,
                                n = r.nextSibling;
                            return n ? t.insertBefore(e, n) : t.appendChild(e), e
                        })
                    },
                    replace: U,
                    rename: function(t, e) {
                        var n;
                        return t.nodeName !== e.toUpperCase() && (n = L(e), vu(x(t), function(e) {
                            S(n, e.nodeName, w(t, e.nodeName))
                        }), U(n, t, !0)), n || t
                    },
                    findCommonAncestor: function(e, t) {
                        for (var n, r = e; r;) {
                            for (n = t; n && r !== n;) n = n.parentNode;
                            if (r === n) break;
                            r = r.parentNode
                        }
                        return !r && e.ownerDocument ? e.ownerDocument.documentElement : r
                    },
                    toHex: function(e) {
                        return p.toHex(At.trim(e))
                    },
                    run: D,
                    getAttribs: x,
                    isEmpty: function(e, t) {
                        var n, r, o = 0;
                        if (z(e)) return !1;
                        if (e = e.firstChild) {
                            var i = new Gr(e, e.parentNode),
                                a = g ? g.getWhiteSpaceElements() : {};
                            t = t || (g ? g.getNonEmptyElements() : null);
                            do {
                                if (n = e.nodeType, Tn(e)) {
                                    var u = e.getAttribute("data-mce-bogus");
                                    if (u) {
                                        e = i.next("all" === u);
                                        continue
                                    }
                                    if (r = e.nodeName.toLowerCase(), t && t[r]) {
                                        if ("br" !== r) return !1;
                                        o++, e = i.next();
                                        continue
                                    }
                                    if (z(e)) return !1
                                }
                                if (8 === n) return !1;
                                if (3 === n && !jo(e.nodeValue)) return !1;
                                if (3 === n && e.parentNode && a[e.parentNode.nodeName] && jo(e.nodeValue)) return !1;
                                e = i.next()
                            } while (e)
                        }
                        return o <= 1
                    },
                    createRng: j,
                    nodeIndex: xu,
                    split: function(e, t, n) {
                        var r, o, i, a = j();
                        if (e && t) return a.setStart(e.parentNode, xu(e)), a.setEnd(t.parentNode, xu(t)), r = a.extractContents(), (a = j()).setStart(t.parentNode, xu(t) + 1), a.setEnd(e.parentNode, xu(e) + 1), o = a.extractContents(), (i = e.parentNode).insertBefore(Jo($, r), e), n ? i.insertBefore(n, e) : i.insertBefore(t, e), i.insertBefore(Jo($, o), e), M(e), n || t
                    },
                    bind: H,
                    unbind: V,
                    fire: function(e, t, n) {
                        return h.fire(e, t, n)
                    },
                    getContentEditable: q,
                    getContentEditableParent: function(e) {
                        for (var t = N(), n = null; e && e !== t && null === (n = q(e)); e = e.parentNode);
                        return n
                    },
                    destroy: function() {
                        if (0 < m.length)
                            for (var e = m.length; e--;) {
                                var t = m[e];
                                h.unbind(t[0], t[1], t[2])
                            }
                        se(l, function(e, t) {
                            d.unload(t), delete l[t]
                        }), Da.setDocument && Da.setDocument()
                    },
                    isChildOf: function(e, t) {
                        for (; e;) {
                            if (t === e) return !0;
                            e = e.parentNode
                        }
                        return !1
                    },
                    dumpRng: function(e) {
                        return "startContainer: " + e.startContainer.nodeName + ", startOffset: " + e.startOffset + ", endContainer: " + e.endContainer.nodeName + ", endOffset: " + e.endOffset
                    }
                },
                W = (n = p, o = function() {
                    return $
                }, i = (r = u).keep_values, e = {
                    set: function(e, t, n) {
                        r.url_converter && (t = r.url_converter.call(r.url_converter_scope || o(), t, n, e[0])), e.attr("data-mce-" + n, t).attr(n, t)
                    },
                    get: function(e, t) {
                        return e.attr("data-mce-" + t) || e.attr(t)
                    }
                }, t = {
                    style: {
                        set: function(e, t) {
                            null === t || "object" != typeof t ? (i && e.attr("data-mce-style", t), null !== t && "string" == typeof t ? (e.removeAttr("style"), e.css(n.parse(t))) : e.attr("style", t)) : e.css(t)
                        },
                        get: function(e) {
                            var t = e.attr("data-mce-style") || e.attr("style");
                            return t = n.serialize(n.parse(t), e[0].nodeName)
                        }
                    }
                }, i && (t.href = t.src = e), t);
            return $
        };
    Su.DOM = Su(document), Su.nodeIndex = xu;
    var Nu = Su.DOM,
        Eu = At.each,
        ku = At.grep,
        _u = (Au.prototype._setReferrerPolicy = function(e) {
            this.settings.referrerPolicy = e
        }, Au.prototype.loadScript = function(e, t, n) {
            var r = Nu,
                o = function() {
                    r.remove(i), a && (a.onerror = a.onload = a = null)
                },
                i = r.uniqueId(),
                a = document.createElement("script");
            a.id = i, a.type = "text/javascript", a.src = At._addCacheSuffix(e), this.settings.referrerPolicy && r.setAttrib(a, "referrerpolicy", this.settings.referrerPolicy), a.onload = function() {
                o(), t()
            }, a.onerror = function() {
                o(), m(n) ? n() : "undefined" != typeof console && console.log && console.log("Failed to load script: " + e)
            }, (document.getElementsByTagName("head")[0] || document.body).appendChild(a)
        }, Au.prototype.isDone = function(e) {
            return 2 === this.states[e]
        }, Au.prototype.markDone = function(e) {
            this.states[e] = 2
        }, Au.prototype.add = function(e, t, n, r) {
            var o = this.states[e];
            this.queue.push(e), o === undefined && (this.states[e] = 0), t && (this.scriptLoadedCallbacks[e] || (this.scriptLoadedCallbacks[e] = []), this.scriptLoadedCallbacks[e].push({
                success: t,
                failure: r,
                scope: n || this
            }))
        }, Au.prototype.load = function(e, t, n, r) {
            return this.add(e, t, n, r)
        }, Au.prototype.remove = function(e) {
            delete this.states[e], delete this.scriptLoadedCallbacks[e]
        }, Au.prototype.loadQueue = function(e, t, n) {
            this.loadScripts(this.queue, e, t, n)
        }, Au.prototype.loadScripts = function(n, e, t, r) {
            var o = this,
                i = [],
                a = function(t, e) {
                    Eu(o.scriptLoadedCallbacks[e], function(e) {
                        m(e[t]) && e[t].call(e.scope)
                    }), o.scriptLoadedCallbacks[e] = undefined
                };
            o.queueLoadedCallbacks.push({
                success: e,
                failure: r,
                scope: t || this
            });
            var u = function() {
                var e, t = ku(n);
                n.length = 0, Eu(t, function(e) {
                    2 !== o.states[e] ? 3 !== o.states[e] ? 1 !== o.states[e] && (o.states[e] = 1, o.loading++, o.loadScript(e, function() {
                        o.states[e] = 2, o.loading--, a("success", e), u()
                    }, function() {
                        o.states[e] = 3, o.loading--, i.push(e), a("failure", e), u()
                    })) : a("failure", e) : a("success", e)
                }), o.loading || (e = o.queueLoadedCallbacks.slice(0), o.queueLoadedCallbacks.length = 0, Eu(e, function(e) {
                    0 === i.length ? m(e.success) && e.success.call(e.scope) : m(e.failure) && e.failure.call(e.scope, i)
                }))
            };
            u()
        }, Au.ScriptLoader = new Au, Au);
    function Au(e) {
        void 0 === e && (e = {}), this.states = {}, this.queue = [], this.scriptLoadedCallbacks = {}, this.queueLoadedCallbacks = [], this.loading = 0, this.settings = e
    }
    var Ru = function(e) {
            var t = e;
            return {
                get: function() {
                    return t
                },
                set: function(e) {
                    t = e
                }
            }
        },
        Tu = {},
        Du = Ru("en"),
        Ou = function() {
            return he(Tu, Du.get())
        },
        Bu = {
            getData: function() {
                return ce(Tu, function(e) {
                    return _e({}, e)
                })
            },
            setCode: function(e) {
                e && Du.set(e)
            },
            getCode: function() {
                return Du.get()
            },
            add: function(e, t) {
                var n = Tu[e];
                n || (Tu[e] = n = {}), se(t, function(e, t) {
                    n[t.toLowerCase()] = e
                })
            },
            translate: function(e) {
                var t, n, r = Ou().getOr({}),
                    o = function(e) {
                        return m(e) ? Object.prototype.toString.call(e) : i(e) ? "" : "" + e
                    },
                    i = function(e) {
                        return "" === e || null === e || e === undefined
                    },
                    a = function(e) {
                        var t = o(e);
                        return he(r, t.toLowerCase()).map(o).getOr(t)
                    },
                    u = function(e) {
                        return e.replace(/{context:\w+}$/, "")
                    };
                if (i(e)) return "";
                if (w(t = e) && ve(t, "raw")) return o(e.raw);
                if (S(n = e) && 1 < n.length) {
                    var s = e.slice(1);
                    return u(a(e[0]).replace(/\{([0-9]+)\}/g, function(e, t) {
                        return ve(s, t) ? o(s[t]) : e
                    }))
                }
                return u(a(e))
            },
            isRtl: function() {
                return Ou().bind(function(e) {
                    return he(e, "_dir")
                }).exists(function(e) {
                    return "rtl" === e
                })
            },
            hasCode: function(e) {
                return ve(Tu, e)
            }
        },
        Pu = function() {
            var o = [],
                r = {},
                s = {},
                i = [],
                c = function(t, n) {
                    var e = H(i, function(e) {
                        return e.name === t && e.state === n
                    });
                    Y(e, function(e) {
                        return e.callback()
                    })
                },
                l = function(e) {
                    var t;
                    return s[e] && (t = s[e].dependencies), t || []
                },
                f = function(e, t) {
                    return "object" == typeof t ? t : "string" == typeof e ? {
                        prefix: "",
                        resource: t,
                        suffix: ""
                    } : {
                        prefix: e.prefix,
                        resource: t,
                        suffix: e.suffix
                    }
                },
                d = function(o, i, a, u, e) {
                    var t, n;
                    r[o] || (0 !== (t = "string" == typeof i ? i : i.prefix + i.resource + i.suffix).indexOf("/") && -1 === t.indexOf("://") && (t = Pu.baseURL + "/" + t), r[o] = t.substring(0, t.lastIndexOf("/")), n = function() {
                        var n, e, t, r;
                        c(o, "loaded"), n = i, e = a, t = u, r = l(o), Y(r, function(e) {
                            var t = f(n, e);
                            d(t.resource, t, undefined, undefined)
                        }), e && (t ? e.call(t) : e.call(_u))
                    }, s[o] ? n() : _u.ScriptLoader.add(t, n, u, e))
                },
                e = function(e, t, n) {
                    void 0 === n && (n = "added"), ve(s, e) && "added" === n || ve(r, e) && "loaded" === n ? t() : i.push({
                        name: e,
                        state: n,
                        callback: t
                    })
                };
            return {
                items: o,
                urls: r,
                lookup: s,
                _listeners: i,
                get: function(e) {
                    return s[e] ? s[e].instance : undefined
                },
                dependencies: l,
                requireLangPack: function(t, n) {
                    !1 !== Pu.languageLoad && e(t, function() {
                        var e = Bu.getCode();
                        !e || n && -1 === ("," + (n || "") + ",").indexOf("," + e + ",") || _u.ScriptLoader.add(r[t] + "/langs/" + e + ".js")
                    }, "loaded")
                },
                add: function(e, t, n) {
                    var r = t;
                    return o.push(r), s[e] = {
                        instance: r,
                        dependencies: n
                    }, c(e, "added"), r
                },
                remove: function(e) {
                    delete r[e], delete s[e]
                },
                createUrl: f,
                addComponents: function(e, t) {
                    var n = r[e];
                    Y(t, function(e) {
                        _u.ScriptLoader.add(n + "/" + e)
                    })
                },
                load: d,
                waitFor: e
            }
        };
    Pu.languageLoad = !0, Pu.baseURL = "", Pu.PluginManager = Pu(), Pu.ThemeManager = Pu();
    var Lu = function(n, r) {
            var o = null;
            return {
                cancel: function() {
                    null !== o && (clearTimeout(o), o = null)
                },
                throttle: function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    null === o && (o = setTimeout(function() {
                        n.apply(null, e), o = null
                    }, r))
                }
            }
        },
        Iu = function(n, r) {
            var o = null;
            return {
                cancel: function() {
                    null !== o && (clearTimeout(o), o = null)
                },
                throttle: function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    null !== o && clearTimeout(o), o = setTimeout(function() {
                        n.apply(null, e), o = null
                    }, r)
                }
            }
        },
        Mu = function(e, t) {
            var n = Qn(e, t);
            return n === undefined || "" === n ? [] : n.split(" ")
        },
        Fu = function(e) {
            return e.dom.classList !== undefined
        },
        Uu = function(e, t) {
            return o = t, i = Mu(n = e, r = "class").concat([o]), Gn(n, r, i.join(" ")), !0;
            var n, r, o, i
        },
        zu = function(e, t) {
            return o = t, 0 < (i = H(Mu(n = e, r = "class"), function(e) {
                return e !== o
            })).length ? Gn(n, r, i.join(" ")) : er(n, r), !1;
            var n, r, o, i
        },
        ju = function(e, t) {
            Fu(e) ? e.dom.classList.add(t) : Uu(e, t)
        },
        Hu = function(e) {
            0 === (Fu(e) ? e.dom.classList : Mu(e, "class")).length && er(e, "class")
        },
        Vu = function(e, t) {
            return Fu(e) && e.dom.classList.contains(t)
        },
        qu = function(e, t) {
            var n = [];
            return Y(Qt(e), function(e) {
                t(e) && (n = n.concat([e])), n = n.concat(qu(e, t))
            }), n
        },
        $u = function(e, t) {
            return n = t, o = (r = e) === undefined ? document : r.dom, Bt(o) ? [] : z(o.querySelectorAll(n), Tt.fromDom);
            var n, r, o
        },
        Wu = E("mce-annotation"),
        Ku = E("data-mce-annotation"),
        Xu = E("data-mce-annotation-uid"),
        Yu = function(r, e) {
            var t = r.selection.getRng(),
                n = Tt.fromDom(t.startContainer),
                o = Tt.fromDom(r.getBody()),
                i = e.fold(function() {
                    return "." + Wu()
                }, function(e) {
                    return "[" + Ku() + '="' + e + '"]'
                }),
                a = Zt(n, t.startOffset).getOr(n),
                u = Ir(a, i, function(e) {
                    return Pt(e, o)
                }),
                s = function(e, t) {
                    return n = t, (r = e.dom) && r.hasAttribute && r.hasAttribute(n) ? U.some(Qn(e, t)) : U.none();
                    var n, r
                };
            return u.bind(function(e) {
                return s(e, "" + Xu()).bind(function(n) {
                    return s(e, "" + Ku()).map(function(e) {
                        var t = Gu(r, n);
                        return {
                            uid: n,
                            name: e,
                            elements: t
                        }
                    })
                })
            })
        },
        Gu = function(e, t) {
            var n = Tt.fromDom(e.getBody());
            return $u(n, "[" + Xu() + '="' + t + '"]')
        },
        Ju = function(i, e) {
            var a = Ru({}),
                c = function(e, t) {
                    u(e, function(e) {
                        return t(e), e
                    })
                },
                u = function(e, t) {
                    var n = a.get(),
                        r = t(n.hasOwnProperty(e) ? n[e] : {
                            listeners: [],
                            previous: Ru(U.none())
                        });
                    n[e] = r, a.set(n)
                },
                t = Iu(function() {
                    var e, t, n, r = a.get(),
                        o = (e = ae(r), (n = B.call(e, 0)).sort(t), n);
                    Y(o, function(e) {
                        u(e, function(u) {
                            var s = u.previous.get();
                            return Yu(i, U.some(e)).fold(function() {
                                var t;
                                s.isSome() && (c(t = e, function(e) {
                                    Y(e.listeners, function(e) {
                                        return e(!1, t)
                                    })
                                }), u.previous.set(U.none()))
                            }, function(e) {
                                var t, n, r, o = e.uid,
                                    i = e.name,
                                    a = e.elements;
                                s.is(o) || (n = o, r = a, c(t = i, function(e) {
                                    Y(e.listeners, function(e) {
                                        return e(!0, t, {
                                            uid: n,
                                            nodes: z(r, function(e) {
                                                return e.dom
                                            })
                                        })
                                    })
                                }), u.previous.set(U.some(o)))
                            }), {
                                previous: u.previous,
                                listeners: u.listeners
                            }
                        })
                    })
                }, 30);
            i.on("remove", function() {
                t.cancel()
            }), i.on("NodeChange", function() {
                t.throttle()
            });
            return {
                addListener: function(e, t) {
                    u(e, function(e) {
                        return {
                            previous: e.previous,
                            listeners: e.listeners.concat([t])
                        }
                    })
                }
            }
        },
        Qu = function(e, n) {
            e.on("init", function() {
                e.serializer.addNodeFilter("span", function(e) {
                    Y(e, function(t) {
                        var e;
                        e = t, U.from(e.attr(Ku())).bind(n.lookup).each(function(e) {
                            !1 === e.persistent && t.unwrap()
                        })
                    })
                })
            })
        },
        Zu = 0,
        es = function(e) {
            var t = (new Date).getTime();
            return e + "_" + Math.floor(1e9 * Math.random()) + ++Zu + String(t)
        },
        ts = function(e, t) {
            var n, r, o = qt(e).dom,
                i = Tt.fromDom(o.createDocumentFragment()),
                a = (n = t, (r = (o || document).createElement("div")).innerHTML = n, Qt(Tt.fromDom(r)));
            gn(i, a), pn(e), mn(e, i)
        },
        ns = function(e, t) {
            return Tt.fromDom(e.dom.cloneNode(t))
        },
        rs = function(e) {
            return ns(e, !1)
        },
        os = function(e) {
            return ns(e, !0)
        },
        is = function(e, t, n) {
            void 0 === n && (n = A);
            var r = new Gr(e, t),
                o = function(e) {
                    for (var t;
                        (t = r[e]()) && !Fn(t) && !n(t););
                    return U.from(t).filter(Fn)
                };
            return {
                current: function() {
                    return U.from(r.current()).filter(Fn)
                },
                next: function() {
                    return o("next")
                },
                prev: function() {
                    return o("prev")
                },
                prev2: function() {
                    return o("prev2")
                }
            }
        },
        as = function(t, e) {
            var i = e || function(e) {
                    return t.isBlock(e) || Hn(e) || $n(e)
                },
                a = function(e, t, n, r) {
                    if (Fn(e)) {
                        var o = r(e, t, e.data);
                        if (-1 !== o) return U.some({
                            container: e,
                            offset: o
                        })
                    }
                    return n().bind(function(e) {
                        return a(e.container, e.offset, n, r)
                    })
                };
            return {
                backwards: function(e, t, n, r) {
                    var o = is(e, r, i);
                    return a(e, t, function() {
                        return o.prev().map(function(e) {
                            return {
                                container: e,
                                offset: e.length
                            }
                        })
                    }, n).getOrNull()
                },
                forwards: function(e, t, n, r) {
                    var o = is(e, r, i);
                    return a(e, t, function() {
                        return o.next().map(function(e) {
                            return {
                                container: e,
                                offset: 0
                            }
                        })
                    }, n).getOrNull()
                }
            }
        },
        us = function(e, t, n) {
            return e.isSome() && t.isSome() ? U.some(n(e.getOrDie(), t.getOrDie())) : U.none()
        },
        ss = Math.round,
        cs = function(e) {
            return e ? {
                left: ss(e.left),
                top: ss(e.top),
                bottom: ss(e.bottom),
                right: ss(e.right),
                width: ss(e.width),
                height: ss(e.height)
            } : {
                left: 0,
                top: 0,
                bottom: 0,
                right: 0,
                width: 0,
                height: 0
            }
        },
        ls = function(e, t) {
            return e = cs(e), t || (e.left = e.left + e.width), e.right = e.left, e.width = 0, e
        },
        fs = function(e, t, n) {
            return 0 <= e && e <= Math.min(t.height, n.height) / 2
        },
        ds = function(e, t) {
            var n = Math.min(t.height / 2, e.height / 2);
            return e.bottom - n < t.top || !(e.top > t.bottom) && fs(t.top - e.bottom, e, t)
        },
        ms = function(e, t) {
            return e.top > t.bottom || !(e.bottom < t.top) && fs(t.bottom - e.top, e, t)
        },
        gs = function(e, t, n) {
            return t >= e.left && t <= e.right && n >= e.top && n <= e.bottom
        },
        ps = function(e) {
            var t = e.startContainer,
                n = e.startOffset;
            return t.hasChildNodes() && e.endOffset === n + 1 ? t.childNodes[n] : null
        },
        hs = function(e, t) {
            return 1 === e.nodeType && e.hasChildNodes() && (t >= e.childNodes.length && (t = e.childNodes.length - 1), e = e.childNodes[t]), e
        },
        vs = new RegExp("[\u0300-\u036f\u0483-\u0487\u0488-\u0489\u0591-\u05bd\u05bf\u05c1-\u05c2\u05c4-\u05c5\u05c7\u0610-\u061a\u064b-\u065f\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7-\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u08e3-\u0902\u093a\u093c\u0941-\u0948\u094d\u0951-\u0957\u0962-\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2-\u09e3\u0a01-\u0a02\u0a3c\u0a41-\u0a42\u0a47-\u0a48\u0a4b-\u0a4d\u0a51\u0a70-\u0a71\u0a75\u0a81-\u0a82\u0abc\u0ac1-\u0ac5\u0ac7-\u0ac8\u0acd\u0ae2-\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62-\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c00\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55-\u0c56\u0c62-\u0c63\u0c81\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc-\u0ccd\u0cd5-\u0cd6\u0ce2-\u0ce3\u0d01\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62-\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb-\u0ebc\u0ec8-\u0ecd\u0f18-\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86-\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039-\u103a\u103d-\u103e\u1058-\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085-\u1086\u108d\u109d\u135d-\u135f\u1712-\u1714\u1732-\u1734\u1752-\u1753\u1772-\u1773\u17b4-\u17b5\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927-\u1928\u1932\u1939-\u193b\u1a17-\u1a18\u1a1b\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1ab0-\u1abd\u1abe\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80-\u1b81\u1ba2-\u1ba5\u1ba8-\u1ba9\u1bab-\u1bad\u1be6\u1be8-\u1be9\u1bed\u1bef-\u1bf1\u1c2c-\u1c33\u1c36-\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1cf4\u1cf8-\u1cf9\u1dc0-\u1df5\u1dfc-\u1dff\u200c-\u200d\u20d0-\u20dc\u20dd-\u20e0\u20e1\u20e2-\u20e4\u20e5-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302d\u302e-\u302f\u3099-\u309a\ua66f\ua670-\ua672\ua674-\ua67d\ua69e-\ua69f\ua6f0-\ua6f1\ua802\ua806\ua80b\ua825-\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\ua9e5\uaa29-\uaa2e\uaa31-\uaa32\uaa35-\uaa36\uaa43\uaa4c\uaa7c\uaab0\uaab2-\uaab4\uaab7-\uaab8\uaabe-\uaabf\uaac1\uaaec-\uaaed\uaaf6\uabe5\uabe8\uabed\ufb1e\ufe00-\ufe0f\ufe20-\ufe2f\uff9e-\uff9f]"),
        ys = function(e) {
            return "string" == typeof e && 768 <= e.charCodeAt(0) && vs.test(e)
        },
        bs = Tn,
        Cs = Mo,
        ws = On("display", "block table"),
        xs = On("float", "left right"),
        Ss = function() {
            for (var n = [], e = 0; e < arguments.length; e++) n[e] = arguments[e];
            return function(e) {
                for (var t = 0; t < n.length; t++)
                    if (!n[t](e)) return !1;
                return !0
            }
        }(bs, Cs, y(xs)),
        Ns = y(On("white-space", "pre pre-line pre-wrap")),
        Es = Fn,
        ks = Hn,
        _s = Su.nodeIndex,
        As = hs,
        Rs = function(e) {
            return "createRange" in e ? e.createRange() : Su.DOM.createRng()
        },
        Ts = function(e) {
            return e && /[\r\n\t ]/.test(e)
        },
        Ds = function(e) {
            return !!e.setStart && !!e.setEnd
        },
        Os = function(e) {
            var t, n = e.startContainer,
                r = e.startOffset;
            return !!(Ts(e.toString()) && Ns(n.parentNode) && Fn(n) && (t = n.data, Ts(t[r - 1]) || Ts(t[r + 1])))
        },
        Bs = function(e) {
            return 0 === e.left && 0 === e.right && 0 === e.top && 0 === e.bottom
        },
        Ps = function(e) {
            var t = e.getClientRects(),
                n = 0 < t.length ? cs(t[0]) : cs(e.getBoundingClientRect());
            return !Ds(e) && ks(e) && Bs(n) ? function(e) {
                var t = e.ownerDocument,
                    n = Rs(t),
                    r = t.createTextNode(mo),
                    o = e.parentNode;
                o.insertBefore(r, e), n.setStart(r, 0), n.setEnd(r, 1);
                var i = cs(n.getBoundingClientRect());
                return o.removeChild(r), i
            }(e) : Bs(n) && Ds(e) ? function(e) {
                var t = e.startContainer,
                    n = e.endContainer,
                    r = e.startOffset,
                    o = e.endOffset;
                if (t === n && Fn(n) && 0 === r && 1 === o) {
                    var i = e.cloneRange();
                    return i.setEndAfter(n), Ps(i)
                }
                return null
            }(e) : n
        },
        Ls = function(e, t) {
            var n = ls(e, t);
            return n.width = 1, n.right = n.left + 1, n
        },
        Is = function(e) {
            var t, n, r = [],
                o = function(e) {
                    var t, n;
                    0 !== e.height && (0 < r.length && (t = e, n = r[r.length - 1], t.left === n.left && t.top === n.top && t.bottom === n.bottom && t.right === n.right) || r.push(e))
                },
                i = function(e, t) {
                    var n = Rs(e.ownerDocument);
                    if (t < e.data.length) {
                        if (ys(e.data[t])) return r;
                        if (ys(e.data[t - 1]) && (n.setStart(e, t), n.setEnd(e, t + 1), !Os(n))) return o(Ls(Ps(n), !1)), r
                    }
                    0 < t && (n.setStart(e, t - 1), n.setEnd(e, t), Os(n) || o(Ls(Ps(n), !1))), t < e.data.length && (n.setStart(e, t), n.setEnd(e, t + 1), Os(n) || o(Ls(Ps(n), !0)))
                };
            if (Es(e.container())) return i(e.container(), e.offset()), r;
            if (bs(e.container()))
                if (e.isAtEnd()) n = As(e.container(), e.offset()), Es(n) && i(n, n.data.length), Ss(n) && !ks(n) && o(Ls(Ps(n), !1));
                else {
                    if (n = As(e.container(), e.offset()), Es(n) && i(n, 0), Ss(n) && e.isAtEnd()) return o(Ls(Ps(n), !1)), r;
                    t = As(e.container(), e.offset() - 1), Ss(t) && !ks(t) && (!ws(t) && !ws(n) && Ss(n) || o(Ls(Ps(t), !1))), Ss(n) && o(Ls(Ps(n), !0))
                } return r
        },
        Ms = function(t, n, e) {
            var r = function() {
                return e = e || Is(Ms(t, n))
            };
            return {
                container: E(t),
                offset: E(n),
                toRange: function() {
                    var e = Rs(t.ownerDocument);
                    return e.setStart(t, n), e.setEnd(t, n), e
                },
                getClientRects: r,
                isVisible: function() {
                    return 0 < r().length
                },
                isAtStart: function() {
                    return Es(t), 0 === n
                },
                isAtEnd: function() {
                    return Es(t) ? n >= t.data.length : n >= t.childNodes.length
                },
                isEqual: function(e) {
                    return e && t === e.container() && n === e.offset()
                },
                getNode: function(e) {
                    return As(t, e ? n - 1 : n)
                }
            }
        };
    Ms.fromRangeStart = function(e) {
        return Ms(e.startContainer, e.startOffset)
    }, Ms.fromRangeEnd = function(e) {
        return Ms(e.endContainer, e.endOffset)
    }, Ms.after = function(e) {
        return Ms(e.parentNode, _s(e) + 1)
    }, Ms.before = function(e) {
        return Ms(e.parentNode, _s(e))
    }, Ms.isAbove = function(e, t) {
        return us(re(t.getClientRects()), oe(e.getClientRects()), ds).getOr(!1)
    }, Ms.isBelow = function(e, t) {
        return us(oe(t.getClientRects()), re(e.getClientRects()), ms).getOr(!1)
    }, Ms.isAtStart = function(e) {
        return !!e && e.isAtStart()
    }, Ms.isAtEnd = function(e) {
        return !!e && e.isAtEnd()
    }, Ms.isTextPosition = function(e) {
        return !!e && Fn(e.container())
    }, Ms.isElementPosition = function(e) {
        return !1 === Ms.isTextPosition(e)
    };
    var Fs, Us, zs = function(e, t) {
            Fn(t) && 0 === t.data.length && e.remove(t)
        },
        js = function(e, t, n) {
            var r, o, i, a, u, s, c;
            jn(n) ? (i = e, a = t, u = n, s = U.from(u.firstChild), c = U.from(u.lastChild), a.insertNode(u), s.each(function(e) {
                return zs(i, e.previousSibling)
            }), c.each(function(e) {
                return zs(i, e.nextSibling)
            })) : (r = e, o = n, t.insertNode(o), zs(r, o.previousSibling), zs(r, o.nextSibling))
        },
        Hs = Fn,
        Vs = Pn,
        qs = Su.nodeIndex,
        $s = function(e) {
            var t = e.parentNode;
            return Vs(t) ? $s(t) : t
        },
        Ws = function(e) {
            return e ? Ne(e.childNodes, function(e, t) {
                return Vs(t) && "BR" !== t.nodeName ? e = e.concat(Ws(t)) : e.push(t), e
            }, []) : []
        },
        Ks = function(t) {
            return function(e) {
                return t === e
            }
        },
        Xs = function(e) {
            var t = Hs(e) ? "text()" : e.nodeName.toLowerCase();
            return t + "[" + function(e) {
                var r = Ws($s(e)),
                    t = Ee(r, Ks(e), e);
                r = r.slice(0, t + 1);
                var n = Ne(r, function(e, t, n) {
                    return Hs(t) && Hs(r[n - 1]) && e++, e
                }, 0);
                return r = xe(r, Dn([e.nodeName])), (t = Ee(r, Ks(e), e)) - n
            }(e) + "]"
        },
        Ys = function(e, t) {
            var n, r, o, i = [],
                a = t.container(),
                u = t.offset();
            return Hs(a) ? n = function(e, t) {
                for (;
                    (e = e.previousSibling) && Hs(e);) t += e.data.length;
                return t
            }(a, u) : (u >= (r = a.childNodes).length ? (n = "after", u = r.length - 1) : n = "before", a = r[u]), i.push(Xs(a)), o = function(e, t, n) {
                var r = [];
                for (t = t.parentNode; t !== e && (!n || !n(t)); t = t.parentNode) r.push(t);
                return r
            }(e, a), o = xe(o, y(Pn)), (i = i.concat(we(o, Xs))).reverse().join("/") + "," + n
        },
        Gs = function(e, t) {
            if (!t) return null;
            var n = t.split(","),
                r = n[0].split("/"),
                o = 1 < n.length ? n[1] : "before",
                i = Ne(r, function(e, t) {
                    var n, r, o, i, a = /([\w\-\(\)]+)\[([0-9]+)\]/.exec(t);
                    return a ? ("text()" === a[1] && (a[1] = "#text"), n = e, r = a[1], o = parseInt(a[2], 10), i = Ws(n), i = xe(i, function(e, t) {
                        return !Hs(e) || !Hs(i[t - 1])
                    }), (i = xe(i, Dn([r])))[o]) : null
                }, e);
            return i ? Hs(i) ? function(e, t) {
                for (var n, r = e, o = 0; Hs(r);) {
                    if (n = r.data.length, o <= t && t <= o + n) {
                        e = r, t -= o;
                        break
                    }
                    if (!Hs(r.nextSibling)) {
                        e = r, t = n;
                        break
                    }
                    o += n, r = r.nextSibling
                }
                return Hs(e) && t > e.data.length && (t = e.data.length), Ms(e, t)
            }(i, parseInt(o, 10)) : (o = "after" === o ? qs(i) + 1 : qs(i), Ms(i.parentNode, o)) : null
        },
        Js = $n,
        Qs = function(e, t, n, r, o) {
            var i, a = r[o ? "startContainer" : "endContainer"],
                u = r[o ? "startOffset" : "endOffset"],
                s = [],
                c = 0,
                l = e.getRoot();
            for (Fn(a) ? s.push(n ? function(e, t, n) {
                    for (var r = e(t.data.slice(0, n)).length, o = t.previousSibling; o && Fn(o); o = o.previousSibling) r += e(o.data).length;
                    return r
                }(t, a, u) : u) : (u >= (i = a.childNodes).length && i.length && (c = 1, u = Math.max(0, i.length - 1)), s.push(e.nodeIndex(i[u], n) + c)); a && a !== l; a = a.parentNode) s.push(e.nodeIndex(a, n));
            return s
        },
        Zs = function(e, t, n) {
            var r = 0;
            return At.each(e.select(t), function(e) {
                if ("all" !== e.getAttribute("data-mce-bogus")) return e !== n && void r++
            }), r
        },
        ec = function(e, t) {
            var n, r = t ? "start" : "end",
                o = e[r + "Container"],
                i = e[r + "Offset"];
            Tn(o) && "TR" === o.nodeName && (o = (n = o.childNodes)[Math.min(t ? i : i - 1, n.length - 1)]) && (i = t ? 0 : o.childNodes.length, e["set" + (t ? "Start" : "End")](o, i))
        },
        tc = function(e) {
            return ec(e, !0), ec(e, !1), e
        },
        nc = function(e, t) {
            var n;
            if (Tn(e) && (e = hs(e, t), Js(e))) return e;
            if (wo(e)) {
                if (Fn(e) && bo(e) && (e = e.parentNode), n = e.previousSibling, Js(n)) return n;
                if (n = e.nextSibling, Js(n)) return n
            }
        },
        rc = function(e, t, n) {
            var r = n.getNode(),
                o = r ? r.nodeName : null,
                i = n.getRng();
            if (Js(r) || "IMG" === o) return {
                name: o,
                index: Zs(n.dom, o, r)
            };
            var a, u, s, c, l, f, d, m = nc((a = i).startContainer, a.startOffset) || nc(a.endContainer, a.endOffset);
            return m ? {
                name: o = m.tagName,
                index: Zs(n.dom, o, m)
            } : (u = e, c = t, l = i, f = (s = n).dom, (d = {}).start = Qs(f, u, c, l, !0), s.isCollapsed() || (d.end = Qs(f, u, c, l, !1)), d)
        },
        oc = function(e, t, n) {
            var r = {
                "data-mce-type": "bookmark",
                id: t,
                style: "overflow:hidden;line-height:0px"
            };
            return n ? e.create("span", r, "&#xFEFF;") : e.create("span", r)
        },
        ic = function(e, t) {
            var n = e.dom,
                r = e.getRng(),
                o = n.uniqueId(),
                i = e.isCollapsed(),
                a = e.getNode(),
                u = a.nodeName;
            if ("IMG" === u) return {
                name: u,
                index: Zs(n, u, a)
            };
            var s, c = tc(r.cloneRange());
            i || (c.collapse(!1), s = oc(n, o + "_end", t), js(n, c, s)), (r = tc(r)).collapse(!0);
            var l = oc(n, o + "_start", t);
            return js(n, r, l), e.moveToBookmark({
                id: o,
                keep: !0
            }), {
                id: o
            }
        },
        ac = function(e, t, n) {
            return 2 === t ? rc(ho, n, e) : 3 === t ? (o = (r = e).getRng(), {
                start: Ys(r.dom.getRoot(), Ms.fromRangeStart(o)),
                end: Ys(r.dom.getRoot(), Ms.fromRangeEnd(o))
            }) : t ? {
                rng: e.getRng()
            } : ic(e, !1);
            var r, o
        },
        uc = k(rc, g, !0),
        sc = Su.DOM,
        cc = function(e, t, n) {
            var r = e.getParam(t, n);
            if (-1 === r.indexOf("=")) return r;
            var o = e.getParam(t, "", "hash");
            return o.hasOwnProperty(e.id) ? o[e.id] : n
        },
        lc = function(e) {
            return e.getParam("content_security_policy", "")
        },
        fc = function(e) {
            if (e.getParam("force_p_newlines", !1)) return "p";
            var t = e.getParam("forced_root_block", "p");
            return !1 === t ? "" : !0 === t ? "p" : t
        },
        dc = function(e) {
            return e.getParam("forced_root_block_attrs", {})
        },
        mc = function(e) {
            return e.getParam("automatic_uploads", !0, "boolean")
        },
        gc = function(e) {
            return e.getParam("icons", "", "string")
        },
        pc = function(e) {
            return e.getParam("referrer_policy", "", "string")
        },
        hc = function(e) {
            return e.getParam("language", "en", "string")
        },
        vc = function(e) {
            return e.getParam("indent_use_margin", !1)
        },
        yc = function(e) {
            var t = e.getParam("font_css", []);
            return S(t) ? t : z(t.split(","), We)
        },
        bc = function(e) {
            var t = e.getParam("object_resizing");
            return !1 !== t && !St.iOS && (K(t) ? t : "table,img,figure.image,div,video,iframe")
        },
        Cc = function(e) {
            return e.getParam("event_root")
        },
        wc = function(e) {
            return e.getParam("theme")
        },
        xc = function(e) {
            return !1 !== e.getParam("inline_boundaries")
        },
        Sc = function(e) {
            return e.getParam("plugins", "", "string")
        },
        Nc = Tn,
        Ec = Fn,
        kc = function(e) {
            var t = e.parentNode;
            t && t.removeChild(e)
        },
        _c = function(e) {
            var t = ho(e);
            return {
                count: e.length - t.length,
                text: t
            }
        },
        Ac = function(e) {
            for (var t; - 1 !== (t = e.data.lastIndexOf(go));) e.deleteData(t, 1)
        },
        Rc = function(e, t) {
            return Bc(e), t
        },
        Tc = function(e, t) {
            var n, r, o = t.container(),
                i = (n = ie(o.childNodes), (-1 === (r = I(n, e)) ? U.none() : U.some(r)).map(function(e) {
                    return e < t.offset() ? Ms(o, t.offset() - 1) : t
                }).getOr(t));
            return Bc(e), i
        },
        Dc = function(e, t) {
            return Ec(e) && t.container() === e ? (r = t, o = _c((n = e).data.substr(0, r.offset())), i = _c(n.data.substr(r.offset())), 0 < (o.text + i.text).length ? (Ac(n), Ms(n, r.offset() - o.count)) : r) : Rc(e, t);
            var n, r, o, i
        },
        Oc = function(e, t) {
            return Ms.isTextPosition(t) ? Dc(e, t) : (n = e, ((r = t).container() === n.parentNode ? Tc : Rc)(n, r));
            var n, r
        },
        Bc = function(e) {
            Nc(e) && wo(e) && (xo(e) ? e.removeAttribute("data-mce-caret") : kc(e)), Ec(e) && (Ac(e), 0 === e.data.length && kc(e))
        },
        Pc = gt().browser,
        Lc = $n,
        Ic = Kn,
        Mc = Wn,
        Fc = function(e, t, n) {
            var r, o, i, a, u = ls(t.getBoundingClientRect(), n),
                s = "BODY" === e.tagName ? (r = e.ownerDocument.documentElement, o = e.scrollLeft || r.scrollLeft, e.scrollTop || r.scrollTop) : (a = e.getBoundingClientRect(), o = e.scrollLeft - a.left, e.scrollTop - a.top);
            return u.left += o, u.right += o, u.top += s, u.bottom += s, u.width = 1, 0 < (i = t.offsetWidth - t.clientWidth) && (n && (i *= -1), u.left += i, u.right += i), u
        },
        Uc = function(e, i, a, t) {
            var n, u, s = Ru(U.none()),
                r = fc(e),
                c = 0 < r.length ? r : "p",
                l = function() {
                    ! function(e) {
                        for (var t = $u(Tt.fromDom(e), "*[contentEditable=false],video,audio,embed,object"), n = 0; n < t.length; n++) {
                            var r, o = t[n].dom,
                                i = o.previousSibling;
                            _o(i) && (1 === (r = i.data).length ? i.parentNode.removeChild(i) : i.deleteData(r.length - 1, 1)), i = o.nextSibling, ko(i) && (1 === (r = i.data).length ? i.parentNode.removeChild(i) : i.deleteData(0, 1))
                        }
                    }(i), u && (Bc(u), u = null), s.get().each(function(e) {
                        hu(e.caret).remove(), s.set(U.none())
                    }), n && (Kr.clearInterval(n), n = null)
                },
                f = function() {
                    n = Kr.setInterval(function() {
                        t() ? hu("div.mce-visual-caret", i).toggleClass("mce-visual-caret-hidden") : hu("div.mce-visual-caret", i).addClass("mce-visual-caret-hidden")
                    }, 500)
                };
            return {
                show: function(t, e) {
                    var n, r;
                    if (l(), Mc(e)) return null;
                    if (!a(e)) return u = function(e, t) {
                        var n, r = e.ownerDocument.createTextNode(go),
                            o = e.parentNode;
                        if (t) {
                            if (n = e.previousSibling, yo(n)) {
                                if (wo(n)) return n;
                                if (_o(n)) return n.splitText(n.data.length - 1)
                            }
                            o.insertBefore(r, e)
                        } else {
                            if (n = e.nextSibling, yo(n)) {
                                if (wo(n)) return n;
                                if (ko(n)) return n.splitText(1), n
                            }
                            e.nextSibling ? o.insertBefore(r, e.nextSibling) : o.appendChild(r)
                        }
                        return r
                    }(e, t), r = e.ownerDocument.createRange(), jc(u.nextSibling) ? (r.setStart(u, 0), r.setEnd(u, 0)) : (r.setStart(u, 1), r.setEnd(u, 1)), r;
                    u = Eo(c, e, t), n = Fc(i, e, t), hu(u).css("top", n.top);
                    var o = hu('<div class="mce-visual-caret" data-mce-bogus="all"></div>').css(n).appendTo(i)[0];
                    return s.set(U.some({
                        caret: o,
                        element: e,
                        before: t
                    })), s.get().each(function(e) {
                        t && hu(e.caret).addClass("mce-visual-caret-before")
                    }), f(), (r = e.ownerDocument.createRange()).setStart(u, 0), r.setEnd(u, 0), r
                },
                hide: l,
                getCss: function() {
                    return ".mce-visual-caret {position: absolute;background-color: black;background-color: currentcolor;}.mce-visual-caret-hidden {display: none;}*[data-mce-caret] {position: absolute;left: -1000px;right: auto;top: 0;margin: 0;padding: 0;}"
                },
                reposition: function() {
                    s.get().each(function(e) {
                        var t = Fc(i, e.element, e.before);
                        hu(e.caret).css(_e({}, t))
                    })
                },
                destroy: function() {
                    return Kr.clearInterval(n)
                }
            }
        },
        zc = function() {
            return Pc.isIE() || Pc.isEdge() || Pc.isFirefox()
        },
        jc = function(e) {
            return Lc(e) || Ic(e)
        },
        Hc = function(e) {
            return jc(e) || Ln(e) && zc()
        },
        Vc = $n,
        qc = Kn,
        $c = On("display", "block table table-cell table-caption list-item"),
        Wc = wo,
        Kc = bo,
        Xc = Tn,
        Yc = Mo,
        Gc = function(e, t) {
            for (var n; n = e(t);)
                if (!Kc(n)) return n;
            return null
        },
        Jc = function(e, t, n, r, o) {
            var i = new Gr(e, r),
                a = Vc(e) || Kc(e);
            if (t < 0) {
                if (a && n(e = Gc(i.prev.bind(i), !0))) return e;
                for (; e = Gc(i.prev.bind(i), o);)
                    if (n(e)) return e
            }
            if (0 < t) {
                if (a && n(e = Gc(i.next.bind(i), !0))) return e;
                for (; e = Gc(i.next.bind(i), o);)
                    if (n(e)) return e
            }
            return null
        },
        Qc = function(e, t) {
            for (; e && e !== t;) {
                if ($c(e)) return e;
                e = e.parentNode
            }
            return null
        },
        Zc = function(e, t, n) {
            return Qc(e.container(), n) === Qc(t.container(), n)
        },
        el = function(e, t) {
            if (!t) return null;
            var n = t.container(),
                r = t.offset();
            return Xc(n) ? n.childNodes[r + e] : null
        },
        tl = function(e, t) {
            var n = t.ownerDocument.createRange();
            return e ? (n.setStartBefore(t), n.setEndBefore(t)) : (n.setStartAfter(t), n.setEndAfter(t)), n
        },
        nl = function(e, t, n) {
            for (var r, o, i, a = e ? "previousSibling" : "nextSibling"; n && n !== t;) {
                if (r = n[a], Wc(r) && (r = r[a]), Vc(r) || qc(r)) {
                    if (i = n, Qc(r, o = t) === Qc(i, o)) return r;
                    break
                }
                if (Yc(r)) break;
                n = n.parentNode
            }
            return null
        },
        rl = k(tl, !0),
        ol = k(tl, !1),
        il = function(e, t, n) {
            var r, o, i = k(nl, !0, t),
                a = k(nl, !1, t),
                u = n.startContainer,
                s = n.startOffset;
            if (bo(u)) {
                if (Xc(u) || (u = u.parentNode), "before" === (o = u.getAttribute("data-mce-caret")) && (r = u.nextSibling, Hc(r))) return rl(r);
                if ("after" === o && (r = u.previousSibling, Hc(r))) return ol(r)
            }
            if (!n.collapsed) return n;
            if (Fn(u)) {
                if (Wc(u)) {
                    if (1 === e) {
                        if (r = a(u)) return rl(r);
                        if (r = i(u)) return ol(r)
                    }
                    if (-1 === e) {
                        if (r = i(u)) return ol(r);
                        if (r = a(u)) return rl(r)
                    }
                    return n
                }
                if (_o(u) && s >= u.data.length - 1) return 1 === e && (r = a(u)) ? rl(r) : n;
                if (ko(u) && s <= 1) return -1 === e && (r = i(u)) ? ol(r) : n;
                if (s === u.data.length) return (r = a(u)) ? rl(r) : n;
                if (0 === s) return (r = i(u)) ? ol(r) : n
            }
            return n
        },
        al = function(e, t) {
            return U.from(el(e ? 0 : -1, t)).filter(Vc)
        },
        ul = function(e, t, n) {
            var r = il(e, t, n);
            return -1 === e ? Ms.fromRangeStart(r) : Ms.fromRangeEnd(r)
        },
        sl = function(e) {
            return U.from(e.getNode()).map(Tt.fromDom)
        },
        cl = function(e, t) {
            for (; t = e(t);)
                if (t.isVisible()) return t;
            return t
        },
        ll = function(e, t) {
            var n = Zc(e, t);
            return !(n || !Hn(e.getNode())) || n
        };
    (Us = Fs = Fs || {})[Us.Backwards = -1] = "Backwards", Us[Us.Forwards = 1] = "Forwards";
    var fl, dl, ml, gl, pl = $n,
        hl = Fn,
        vl = Tn,
        yl = Hn,
        bl = Mo,
        Cl = function(e) {
            return Po(e) || !!Fo(t = e) && !0 !== $(ie(t.getElementsByTagName("*")), function(e, t) {
                return e || Ro(t)
            }, !1);
            var t
        },
        wl = Uo,
        xl = function(e, t) {
            return e.hasChildNodes() && t < e.childNodes.length ? e.childNodes[t] : null
        },
        Sl = function(e, t) {
            if (0 < e) {
                if (bl(t.previousSibling) && !hl(t.previousSibling)) return Ms.before(t);
                if (hl(t)) return Ms(t, 0)
            }
            if (e < 0) {
                if (bl(t.nextSibling) && !hl(t.nextSibling)) return Ms.after(t);
                if (hl(t)) return Ms(t, t.data.length)
            }
            return !(e < 0) || yl(t) ? Ms.before(t) : Ms.after(t)
        },
        Nl = function(e, t, n) {
            var r, o, i, a;
            if (!vl(n) || !t) return null;
            if (t.isEqual(Ms.after(n)) && n.lastChild) {
                if (a = Ms.after(n.lastChild), e < 0 && bl(n.lastChild) && vl(n.lastChild)) return yl(n.lastChild) ? Ms.before(n.lastChild) : a
            } else a = t;
            var u, s, c, l = a.container(),
                f = a.offset();
            if (hl(l)) {
                if (e < 0 && 0 < f) return Ms(l, --f);
                if (0 < e && f < l.length) return Ms(l, ++f);
                r = l
            } else {
                if (e < 0 && 0 < f && (o = xl(l, f - 1), bl(o))) return !Cl(o) && (i = Jc(o, e, wl, o)) ? hl(i) ? Ms(i, i.data.length) : Ms.after(i) : hl(o) ? Ms(o, o.data.length) : Ms.before(o);
                if (0 < e && f < l.childNodes.length && (o = xl(l, f), bl(o))) return yl(o) ? (u = n, (c = (s = o).nextSibling) && bl(c) ? hl(c) ? Ms(c, 0) : Ms.before(c) : Nl(Fs.Forwards, Ms.after(s), u)) : !Cl(o) && (i = Jc(o, e, wl, o)) ? hl(i) ? Ms(i, 0) : Ms.before(i) : hl(o) ? Ms(o, 0) : Ms.after(o);
                r = o || a.getNode()
            }
            if ((0 < e && a.isAtEnd() || e < 0 && a.isAtStart()) && (r = Jc(r, e, R, n, !0), wl(r, n))) return Sl(e, r);
            o = Jc(r, e, wl, n);
            var d = ke(H(function(e, t) {
                for (var n = []; e && e !== t;) n.push(e), e = e.parentNode;
                return n
            }(l, n), pl));
            return !d || o && d.contains(o) ? o ? Sl(e, o) : null : a = 0 < e ? Ms.after(d) : Ms.before(d)
        },
        El = function(t) {
            return {
                next: function(e) {
                    return Nl(Fs.Forwards, e, t)
                },
                prev: function(e) {
                    return Nl(Fs.Backwards, e, t)
                }
            }
        },
        kl = function(e) {
            return Ms.isTextPosition(e) ? 0 === e.offset() : Mo(e.getNode())
        },
        _l = function(e) {
            if (Ms.isTextPosition(e)) {
                var t = e.container();
                return e.offset() === t.data.length
            }
            return Mo(e.getNode(!0))
        },
        Al = function(e, t) {
            return !Ms.isTextPosition(e) && !Ms.isTextPosition(t) && e.getNode() === t.getNode(!0)
        },
        Rl = function(e, t, n) {
            return e ? !Al(t, n) && (r = t, !(!Ms.isTextPosition(r) && Hn(r.getNode()))) && _l(t) && kl(n) : !Al(n, t) && kl(t) && _l(n);
            var r
        },
        Tl = function(e, t, n) {
            var r = El(t);
            return U.from(e ? r.next(n) : r.prev(n))
        },
        Dl = function(t, n, r) {
            return Tl(t, n, r).bind(function(e) {
                return Zc(r, e, n) && Rl(t, r, e) ? Tl(t, n, e) : U.some(e)
            })
        },
        Ol = function(t, n, e, r) {
            return Dl(t, n, e).bind(function(e) {
                return r(e) ? Ol(t, n, e, r) : U.some(e)
            })
        },
        Bl = function(e, t) {
            var n, r, o, i, a, u = e ? t.firstChild : t.lastChild;
            return Fn(u) ? U.some(Ms(u, e ? 0 : u.data.length)) : u ? Mo(u) ? U.some(e ? Ms.before(u) : Hn(a = u) ? Ms.before(a) : Ms.after(a)) : (r = t, o = u, i = (n = e) ? Ms.before(o) : Ms.after(o), Tl(n, r, i)) : U.none()
        },
        Pl = k(Tl, !0),
        Ll = k(Tl, !1),
        Il = k(Bl, !0),
        Ml = k(Bl, !1),
        Fl = "_mce_caret",
        Ul = function(e) {
            return Tn(e) && e.id === Fl
        },
        zl = function(e, t) {
            for (; t && t !== e;) {
                if (t.id === Fl) return t;
                t = t.parentNode
            }
            return null
        },
        jl = function(e, t) {
            return Tn(t) && e.isBlock(t) && !t.innerHTML && !St.ie && (t.innerHTML = '<br data-mce-bogus="1" />'), t
        },
        Hl = function(e, t, n) {
            return !(!1 !== t.hasChildNodes() || !zl(e, t)) && (o = n, i = (r = t).ownerDocument.createTextNode(go), r.appendChild(i), o.setStart(i, 0), o.setEnd(i, 0), !0);
            var r, o, i
        },
        Vl = function(e, t, n, r) {
            var o, i, a, u, s = n[t ? "start" : "end"],
                c = e.getRoot();
            if (s) {
                for (a = s[0], i = c, o = s.length - 1; 1 <= o; o--) {
                    if (u = i.childNodes, Hl(c, i, r)) return !0;
                    if (s[o] > u.length - 1) return !!Hl(c, i, r) || function(e, t) {
                        return Ml(e).fold(A, function(e) {
                            return t.setStart(e.container(), e.offset()), t.setEnd(e.container(), e.offset()), !0
                        })
                    }(i, r);
                    i = u[s[o]]
                }
                3 === i.nodeType && (a = Math.min(s[0], i.nodeValue.length)), 1 === i.nodeType && (a = Math.min(s[0], i.childNodes.length)), t ? r.setStart(i, a) : r.setEnd(i, a)
            }
            return !0
        },
        ql = function(e) {
            return Fn(e) && 0 < e.data.length
        },
        $l = function(e, t, n) {
            var r, o, i, a, u, s, c = e.get(n.id + "_" + t),
                l = n.keep;
            if (c) {
                if (r = c.parentNode, s = (u = (o = "start" === t ? l ? c.hasChildNodes() ? (r = c.firstChild, 1) : ql(c.nextSibling) ? (r = c.nextSibling, 0) : ql(c.previousSibling) ? (r = c.previousSibling, c.previousSibling.data.length) : (r = c.parentNode, e.nodeIndex(c) + 1) : e.nodeIndex(c) : l ? c.hasChildNodes() ? (r = c.firstChild, 1) : ql(c.previousSibling) ? (r = c.previousSibling, c.previousSibling.data.length) : (r = c.parentNode, e.nodeIndex(c)) : e.nodeIndex(c), r), o), !l) {
                    for (a = c.previousSibling, i = c.nextSibling, At.each(At.grep(c.childNodes), function(e) {
                            Fn(e) && (e.nodeValue = e.nodeValue.replace(/\uFEFF/g, ""))
                        }); c = e.get(n.id + "_" + t);) e.remove(c, !0);
                    a && i && a.nodeType === i.nodeType && Fn(a) && !St.opera && (o = a.nodeValue.length, a.appendData(i.nodeValue), e.remove(i), u = a, s = o)
                }
                return U.some(Ms(u, s))
            }
            return U.none()
        },
        Wl = function(e, t) {
            var n, r, o, i, a, u, s, c, l, f, d, m, g, p, h = e.dom;
            if (t) {
                if (p = t, At.isArray(p.start)) return m = t, g = (d = h).createRng(), Vl(d, !0, m, g) && Vl(d, !1, m, g) ? U.some(g) : U.none();
                if (K(t.start)) return U.some((c = t, l = (s = h).createRng(), f = Gs(s.getRoot(), c.start), l.setStart(f.container(), f.offset()), f = Gs(s.getRoot(), c.end), l.setEnd(f.container(), f.offset()), l));
                if (t.hasOwnProperty("id")) return a = $l(o = h, "start", i = t), u = $l(o, "end", i), us(a, u.or(a), function(e, t) {
                    var n = o.createRng();
                    return n.setStart(jl(o, e.container()), e.offset()), n.setEnd(jl(o, t.container()), t.offset()), n
                });
                if (t.hasOwnProperty("name")) return n = h, r = t, U.from(n.select(r.name)[r.index]).map(function(e) {
                    var t = n.createRng();
                    return t.selectNode(e), t
                });
                if (t.hasOwnProperty("rng")) return U.some(t.rng)
            }
            return U.none()
        },
        Kl = ac,
        Xl = function(t, e) {
            Wl(t, e).each(function(e) {
                t.setRng(e)
            })
        },
        Yl = function(e) {
            return Tn(e) && "SPAN" === e.tagName && "bookmark" === e.getAttribute("data-mce-type")
        },
        Gl = (fl = mo, function(e) {
            return fl === e
        }),
        Jl = function(e) {
            return "" !== e && -1 !== " \f\n\r\t\x0B".indexOf(e)
        },
        Ql = function(e) {
            return !Jl(e) && !Gl(e)
        },
        Zl = function(e) {
            return !!e.nodeType
        },
        ef = function(e, t, n) {
            var r, o, i, a, u = n.startOffset,
                s = n.startContainer;
            if ((n.startContainer !== n.endContainer || !(a = n.startContainer.childNodes[n.startOffset]) || !/^(IMG)$/.test(a.nodeName)) && 1 === s.nodeType)
                for (u < (i = s.childNodes).length ? (s = i[u], r = new Gr(s, e.getParent(s, e.isBlock))) : (s = i[i.length - 1], (r = new Gr(s, e.getParent(s, e.isBlock))).next(!0)), o = r.current(); o; o = r.next())
                    if (3 === o.nodeType && ! of (o)) return n.setStart(o, 0), void t.setRng(n)
        },
        tf = function(e, t, n) {
            if (e) {
                var r = t ? "nextSibling" : "previousSibling";
                for (e = n ? e : e[r]; e; e = e[r])
                    if (1 === e.nodeType || ! of (e)) return e
            }
        },
        nf = function(e, t) {
            return Zl(t) && (t = t.nodeName), !!e.schema.getTextBlockElements()[t.toLowerCase()]
        },
        rf = function(e, t, n) {
            return e.schema.isValidChild(t, n)
        },
        of = function(e, t) {
            if (void 0 === t && (t = !1), V(e) && Fn(e)) {
                var n = t ? e.data.replace(/ /g, "\xa0") : e.data;
                return jo(n)
            }
            return !1
        },
        af = function(e, n) {
            return "string" != typeof e ? e = e(n) : n && (e = e.replace(/%(\w+)/g, function(e, t) {
                return n[t] || e
            })), e
        },
        uf = function(e, t) {
            return e = "" + ((e = e || "").nodeName || e), t = "" + ((t = t || "").nodeName || t), e.toLowerCase() === t.toLowerCase()
        },
        sf = function(e, t, n) {
            return "color" !== n && "backgroundColor" !== n || (t = e.toHex(t)), "fontWeight" === n && 700 === t && (t = "bold"), "fontFamily" === n && (t = t.replace(/[\'\"]/g, "").replace(/,\s+/g, ",")), "" + t
        },
        cf = function(e, t, n) {
            return sf(e, e.getStyle(t, n), n)
        },
        lf = function(t, e) {
            var n;
            return t.getParent(e, function(e) {
                return (n = t.getStyle(e, "text-decoration")) && "none" !== n
            }), n
        },
        ff = function(e, t, n) {
            return e.getParents(t, n, e.getRoot())
        },
        df = function(t, e, n) {
            var r = ["inline", "block", "selector", "attributes", "styles", "classes"],
                a = function(e) {
                    return ge(e, function(e, t) {
                        return F(r, function(e) {
                            return e === t
                        })
                    })
                };
            return F(t.formatter.get(e), function(e) {
                var i = a(e);
                return F(t.formatter.get(n), function(e) {
                    var t, n, r, o = a(e);
                    return t = i, n = o, void 0 === r && (r = l), u(r).eq(t, n)
                })
            })
        },
        mf = function(e) {
            return ye(e, "block")
        },
        gf = function(e) {
            return ye(e, "selector")
        },
        pf = function(e) {
            return ye(e, "inline")
        },
        hf = function(e, t) {
            return F(t.childNodes, e.isBlock)
        },
        vf = Yl,
        yf = ff,
        bf = of ,
        Cf = nf,
        wf = function(e, t) {
            for (var n = t; n;) {
                if (Tn(n) && e.getContentEditable(n)) return "false" === e.getContentEditable(n) ? n : t;
                n = n.parentNode
            }
            return t
        },
        xf = function(e, t, n, r) {
            for (var o = t.data, i = n; e ? 0 <= i : i < o.length; e ? i-- : i++)
                if (r(o.charAt(i))) return e ? i + 1 : i;
            return -1
        },
        Sf = function(e, t, n) {
            return xf(e, t, n, function(e) {
                return Gl(e) || Jl(e)
            })
        },
        Nf = function(e, t, n) {
            return xf(e, t, n, Ql)
        },
        Ef = function(i, e, t, n, a, r) {
            var u, s = i.getParent(t, i.isBlock) || e,
                o = function(e, t, n) {
                    var r = as(i),
                        o = a ? r.backwards : r.forwards;
                    return U.from(o(e, t, function(e, t) {
                        return vf(e.parentNode) ? -1 : n(a, u = e, t)
                    }, s))
                };
            return o(t, n, Sf).bind(function(e) {
                return r ? o(e.container, e.offset + (a ? -1 : 0), Nf) : U.some(e)
            }).orThunk(function() {
                return u ? U.some({
                    container: u,
                    offset: a ? 0 : u.length
                }) : U.none()
            })
        },
        kf = function(e, t, n, r, o) {
            Fn(r) && 0 === r.nodeValue.length && r[o] && (r = r[o]);
            for (var i = yf(e, r), a = 0; a < i.length; a++)
                for (var u = 0; u < t.length; u++) {
                    var s = t[u];
                    if (!("collapsed" in s && s.collapsed !== n.collapsed) && e.is(i[a], s.selector)) return i[a]
                }
            return r
        },
        _f = function(t, e, n, r) {
            var o, i, a = t.dom,
                u = a.getRoot();
            if (e[0].wrapper || (i = a.getParent(n, e[0].block, u)), i || (o = a.getParent(n, "LI,TD,TH"), i = a.getParent(Fn(n) ? n.parentNode : n, function(e) {
                    return e !== u && Cf(t, e)
                }, o)), i && e[0].wrapper && (i = yf(a, i, "ul,ol").reverse()[0] || i), !i)
                for (i = n; i[r] && !a.isBlock(i[r]) && (i = i[r], !uf(i, "br")););
            return i || n
        },
        Af = function(e, t, n, r) {
            var o = n.parentNode;
            return !V(n[r]) && (!(o !== t && !X(o) && !e.isBlock(o)) || Af(e, t, o, r))
        },
        Rf = function(e, t, n, r, o) {
            var i, a, u = n,
                s = o ? "previousSibling" : "nextSibling",
                c = e.getRoot();
            if (Fn(n) && !bf(n) && (o ? 0 < r : r < n.data.length)) return n;
            for (;;) {
                if (!t[0].block_expand && e.isBlock(u)) return u;
                for (i = u[s]; i; i = i[s]) {
                    var l = Fn(i) && !Af(e, c, i, s);
                    if (!vf(i) && (!Hn(a = i) || !a.getAttribute("data-mce-bogus") || a.nextSibling) && !bf(i, l)) return u
                }
                if (u === c || u.parentNode === c) {
                    n = u;
                    break
                }
                u = u.parentNode
            }
            return n
        },
        Tf = function(e) {
            return vf(e.parentNode) || vf(e)
        },
        Df = function(e, t, n, r) {
            void 0 === r && (r = !1);
            var o = t.startContainer,
                i = t.startOffset,
                a = t.endContainer,
                u = t.endOffset,
                s = e.dom;
            return Tn(o) && o.hasChildNodes() && (o = hs(o, i), Fn(o) && (i = 0)), Tn(a) && a.hasChildNodes() && (a = hs(a, t.collapsed ? u : u - 1), Fn(a) && (u = a.nodeValue.length)), o = wf(s, o), a = wf(s, a), Tf(o) && (o = vf(o) ? o : o.parentNode, o = t.collapsed ? o.previousSibling || o : o.nextSibling || o, Fn(o) && (i = t.collapsed ? o.length : 0)), Tf(a) && (a = vf(a) ? a : a.parentNode, a = t.collapsed ? a.nextSibling || a : a.previousSibling || a, Fn(a) && (u = t.collapsed ? 0 : a.length)), t.collapsed && (Ef(s, e.getBody(), o, i, !0, r).each(function(e) {
                var t = e.container,
                    n = e.offset;
                o = t, i = n
            }), Ef(s, e.getBody(), a, u, !1, r).each(function(e) {
                var t = e.container,
                    n = e.offset;
                a = t, u = n
            })), (n[0].inline || n[0].block_expand) && (n[0].inline && Fn(o) && 0 !== i || (o = Rf(s, n, o, i, !0)), n[0].inline && Fn(a) && u !== a.nodeValue.length || (a = Rf(s, n, a, u, !1))), n[0].selector && !1 !== n[0].expand && !n[0].inline && (o = kf(s, n, t, o, "previousSibling"), a = kf(s, n, t, a, "nextSibling")), (n[0].block || n[0].selector) && (o = _f(e, n, o, "previousSibling"), a = _f(e, n, a, "nextSibling"), n[0].block && (s.isBlock(o) || (o = Rf(s, n, o, i, !0)), s.isBlock(a) || (a = Rf(s, n, a, u, !1)))), Tn(o) && (i = s.nodeIndex(o), o = o.parentNode), Tn(a) && (u = s.nodeIndex(a) + 1, a = a.parentNode), {
                startContainer: o,
                startOffset: i,
                endContainer: a,
                endOffset: u
            }
        },
        Of = function(e, t) {
            var n = e.childNodes;
            return t >= n.length ? t = n.length - 1 : t < 0 && (t = 0), n[t] || e
        },
        Bf = function(e, t, u) {
            var n = t.startContainer,
                r = t.startOffset,
                o = t.endContainer,
                i = t.endOffset,
                s = function(e) {
                    var t = e[0];
                    return 3 === t.nodeType && t === n && r >= t.nodeValue.length && e.splice(0, 1), t = e[e.length - 1], 0 === i && 0 < e.length && t === o && 3 === t.nodeType && e.splice(e.length - 1, 1), e
                },
                c = function(e, t, n) {
                    for (var r = []; e && e !== n; e = e[t]) r.push(e);
                    return r
                },
                a = function(e, t) {
                    do {
                        if (e.parentNode === t) return e;
                        e = e.parentNode
                    } while (e)
                },
                l = function(e, t, n) {
                    for (var r = n ? "nextSibling" : "previousSibling", o = e, i = o.parentNode; o && o !== t; o = i) {
                        i = o.parentNode;
                        var a = c(o === e ? o : o[r], r);
                        a.length && (n || a.reverse(), u(s(a)))
                    }
                };
            if (1 === n.nodeType && n.hasChildNodes() && (n = Of(n, r)), 1 === o.nodeType && o.hasChildNodes() && (o = Of(o, i - 1)), n === o) return u(s([n]));
            for (var f = e.findCommonAncestor(n, o), d = n; d; d = d.parentNode) {
                if (d === o) return l(n, f, !0);
                if (d === f) break
            }
            for (d = o; d; d = d.parentNode) {
                if (d === n) return l(o, f);
                if (d === f) break
            }
            var m = a(n, f) || n,
                g = a(o, f) || o;
            l(n, m, !0);
            var p = c(m === n ? m : m.nextSibling, "nextSibling", g === o ? g.nextSibling : g);
            p.length && u(s(p)), l(o, g)
        },
        Pf = function(e) {
            var t = [];
            if (e)
                for (var n = 0; n < e.rangeCount; n++) t.push(e.getRangeAt(n));
            return t
        },
        Lf = function(e) {
            return H(J(e, function(e) {
                var t = ps(e);
                return t ? [Tt.fromDom(t)] : []
            }), co)
        },
        If = function(e, t) {
            var n = $u(t, "td[data-mce-selected],th[data-mce-selected]");
            return 0 < n.length ? n : Lf(e)
        },
        Mf = function(e) {
            return If(Pf(e.selection.getSel()), Tt.fromDom(e.getBody()))
        },
        Ff = function(t) {
            return en(t).fold(E([t]), function(e) {
                return [t].concat(Ff(e))
            })
        },
        Uf = function(t) {
            return tn(t).fold(E([t]), function(e) {
                return "br" === Mt(e) ? Xt(e).map(function(e) {
                    return [t].concat(Uf(e))
                }).getOr([]) : [t].concat(Uf(e))
            })
        },
        zf = function(o, e) {
            return us((a = (i = e).startContainer, u = i.startOffset, Fn(a) ? 0 === u ? U.some(Tt.fromDom(a)) : U.none() : U.from(a.childNodes[u]).map(Tt.fromDom)), (n = (t = e).endContainer, r = t.endOffset, Fn(n) ? r === n.data.length ? U.some(Tt.fromDom(n)) : U.none() : U.from(n.childNodes[r - 1]).map(Tt.fromDom)), function(e, t) {
                var n = W(Ff(o), k(Pt, e)),
                    r = W(Uf(o), k(Pt, t));
                return n.isSome() && r.isSome()
            }).getOr(!1);
            var t, n, r, i, a, u
        },
        jf = function(e, t, n, r) {
            var o = n,
                i = new Gr(n, o),
                a = ge(e.schema.getMoveCaretBeforeOnEnterElements(), function(e, t) {
                    return !M(["td", "th", "table"], t.toLowerCase())
                });
            do {
                if (Fn(n) && 0 !== At.trim(n.nodeValue).length) return void(r ? t.setStart(n, 0) : t.setEnd(n, n.nodeValue.length));
                if (a[n.nodeName]) return void(r ? t.setStartBefore(n) : "BR" === n.nodeName ? t.setEndBefore(n) : t.setEndAfter(n))
            } while (n = r ? i.next() : i.prev());
            "BODY" === o.nodeName && (r ? t.setStart(o, 0) : t.setEnd(o, o.childNodes.length))
        },
        Hf = function(e) {
            var t = e.selection.getSel();
            return t && 0 < t.rangeCount
        },
        Vf = function(r, o) {
            var e = Mf(r);
            0 < e.length ? Y(e, function(e) {
                var t = e.dom,
                    n = r.dom.createRng();
                n.setStartBefore(t), n.setEndAfter(t), o(n, !0)
            }) : o(r.selection.getRng(), !1)
        },
        qf = function(e, t, n) {
            var r = ic(e, t);
            n(r), e.moveToBookmark(r)
        },
        $f = (dl = jt, ml = "text", {
            get: function(e) {
                if (!dl(e)) throw new Error("Can only get " + ml + " value of a " + ml + " node");
                return gl(e).getOr("")
            },
            getOption: gl = function(e) {
                return dl(e) ? U.from(e.dom.nodeValue) : U.none()
            },
            set: function(e, t) {
                if (!dl(e)) throw new Error("Can only set raw " + ml + " value of a " + ml + " node");
                e.dom.nodeValue = t
            }
        }),
        Wf = function(e) {
            return $f.get(e)
        },
        Kf = function(r, o, i, a) {
            return Kt(o).fold(function() {
                return "skipping"
            }, function(e) {
                return "br" === a || jt(n = o) && Wf(n) === go ? "valid" : zt(t = o) && Vu(t, Wu()) ? "existing" : Ul(o.dom) ? "caret" : rf(r, i, a) && rf(r, Mt(e), i) ? "valid" : "invalid-child";
                var t, n
            })
        },
        Xf = function(e, t, n, r) {
            var o = t.uid,
                i = void 0 === o ? es("mce-annotation") : o,
                a = function(e, t) {
                    var n = {};
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                    if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
                    return n
                }(t, ["uid"]),
                u = Tt.fromTag("span", e);
            ju(u, Wu()), Gn(u, "" + Xu(), i), Gn(u, "" + Ku(), n);
            var s, c = r(i, a),
                l = c.attributes,
                f = void 0 === l ? {} : l,
                d = c.classes,
                m = void 0 === d ? [] : d;
            return Jn(u, f), s = u, Y(m, function(e) {
                ju(s, e)
            }), u
        },
        Yf = function(i, e, t, n, r) {
            var a = [],
                u = Xf(i.getDoc(), r, t, n),
                s = Ru(U.none()),
                c = function() {
                    s.set(U.none())
                },
                l = function(e) {
                    Y(e, o)
                },
                o = function(e) {
                    var t, n;
                    switch (Kf(i, e, "span", Mt(e))) {
                        case "invalid-child":
                            c();
                            var r = Qt(e);
                            l(r), c();
                            break;
                        case "valid":
                            var o = s.get().getOrThunk(function() {
                                var e = rs(u);
                                return a.push(e), s.set(U.some(e)), e
                            });
                            ln(t = e, n = o), mn(n, t)
                    }
                };
            return Bf(i.dom, e, function(e) {
                var t;
                c(), t = z(e, Tt.fromDom), l(t)
            }), a
        },
        Gf = function(u, s, c, l) {
            u.undoManager.transact(function() {
                var e, t, n, r, o = u.selection,
                    i = o.getRng(),
                    a = 0 < Mf(u).length;
                i.collapsed && !a && (n = Df(e = u, t = i, [{
                    inline: !0
                }]), t.setStart(n.startContainer, n.startOffset), t.setEnd(n.endContainer, n.endOffset), e.selection.setRng(t)), o.getRng().collapsed && !a ? (r = Xf(u.getDoc(), l, s, c.decorate), ts(r, mo), o.getRng().insertNode(r.dom), o.select(r.dom)) : qf(o, !1, function() {
                    Vf(u, function(e) {
                        Yf(u, e, s, c.decorate, l)
                    })
                })
            })
        },
        Jf = function(u) {
            var n, r = (n = {}, {
                register: function(e, t) {
                    n[e] = {
                        name: e,
                        settings: t
                    }
                },
                lookup: function(e) {
                    return n.hasOwnProperty(e) ? U.from(n[e]).map(function(e) {
                        return e.settings
                    }) : U.none()
                }
            });
            Qu(u, r);
            var o = Ju(u);
            return {
                register: function(e, t) {
                    r.register(e, t)
                },
                annotate: function(t, n) {
                    r.lookup(t).each(function(e) {
                        Gf(u, t, e, n)
                    })
                },
                annotationChanged: function(e, t) {
                    o.addListener(e, t)
                },
                remove: function(e) {
                    Yu(u, U.some(e)).each(function(e) {
                        var t = e.elements;
                        Y(t, vn)
                    })
                },
                getAll: function(e) {
                    var t, n, r, o, i, a = (t = u, n = e, r = Tt.fromDom(t.getBody()), o = $u(r, "[" + Ku() + '="' + n + '"]'), i = {}, Y(o, function(e) {
                        var t = Qn(e, Xu()),
                            n = i.hasOwnProperty(t) ? i[t] : [];
                        i[t] = n.concat([e])
                    }), i);
                    return ce(a, function(e) {
                        return z(e, function(e) {
                            return e.dom
                        })
                    })
                }
            }
        },
        Qf = function(e) {
            return {
                getBookmark: k(Kl, e),
                moveToBookmark: k(Xl, e)
            }
        };
    Qf.isBookmarkNode = Yl;
    var Zf = function(e, t) {
            for (; t && t !== e;) {
                if (qn(t) || $n(t)) return t;
                t = t.parentNode
            }
            return null
        },
        ed = function(t, n, e) {
            if (e.collapsed) return !1;
            if (St.browser.isIE() && e.startOffset === e.endOffset - 1 && e.startContainer === e.endContainer) {
                var r = e.startContainer.childNodes[e.startOffset];
                if (Tn(r)) return F(r.getClientRects(), function(e) {
                    return gs(e, t, n)
                })
            }
            return F(e.getClientRects(), function(e) {
                return gs(e, t, n)
            })
        },
        td = function(e, t, n) {
            return e.fire(t, n)
        },
        nd = {
            BACKSPACE: 8,
            DELETE: 46,
            DOWN: 40,
            ENTER: 13,
            LEFT: 37,
            RIGHT: 39,
            SPACEBAR: 32,
            TAB: 9,
            UP: 38,
            PAGE_UP: 33,
            PAGE_DOWN: 34,
            END: 35,
            HOME: 36,
            modifierPressed: function(e) {
                return e.shiftKey || e.ctrlKey || e.altKey || nd.metaKeyPressed(e)
            },
            metaKeyPressed: function(e) {
                return St.mac ? e.metaKey : e.ctrlKey && !e.altKey
            }
        },
        rd = $n,
        od = function(r, l) {
            var f, d, m, g, c, p, h, v, y, b, C, w, x, S, N, E = "data-mce-selected",
                k = l.dom,
                _ = At.each,
                A = l.getDoc(),
                R = document,
                T = Math.abs,
                D = Math.round,
                O = l.getBody(),
                B = {
                    nw: [0, 0, -1, -1],
                    ne: [1, 0, 1, -1],
                    se: [1, 1, 1, 1],
                    sw: [0, 1, -1, 1]
                },
                P = function(e) {
                    return e && ("IMG" === e.nodeName || l.dom.is(e, "figure.image"))
                },
                L = function(e) {
                    return Kn(e) || k.hasClass(e, "mce-preview-object")
                },
                n = function(e) {
                    var t = e.target;
                    ! function(e, t) {
                        if ("longpress" !== e.type && 0 !== e.type.indexOf("touch")) return P(e.target) && !ed(e.clientX, e.clientY, t);
                        var n = e.touches[0];
                        return P(e.target) && !ed(n.clientX, n.clientY, t)
                    }(e, l.selection.getRng()) || e.isDefaultPrevented() || l.selection.select(t)
                },
                I = function(e) {
                    return k.is(e, "figure.image") ? [e.querySelector("img")] : k.hasClass(e, "mce-preview-object") && V(e.firstElementChild) ? [e, e.firstElementChild] : [e]
                },
                M = function(e) {
                    var t = bc(l);
                    return !!t && ("false" !== e.getAttribute("data-mce-resize") && (e !== l.getBody() && (k.hasClass(e, "mce-preview-object") ? Ot(Tt.fromDom(e.firstElementChild), t) : Ot(Tt.fromDom(e), t))))
                },
                a = function(e, t, n) {
                    var r;
                    V(n) && (r = I(e), Y(r, function(e) {
                        e.style[t] || !l.schema.isValid(e.nodeName.toLowerCase(), t) ? k.setStyle(e, t, n) : k.setAttrib(e, t, "" + n)
                    }))
                },
                F = function(e, t, n) {
                    a(e, "width", t), a(e, "height", n)
                },
                U = function(e) {
                    var t, n, r, o, i, a, u, s = e.screenX - p,
                        c = e.screenY - h;
                    w = s * g[2] + v, x = c * g[3] + y, w = w < 5 ? 5 : w, x = x < 5 ? 5 : x, ((P(f) || L(f)) && !1 !== l.getParam("resize_img_proportional", !0, "boolean") ? !nd.modifierPressed(e) : nd.modifierPressed(e)) && (T(s) > T(c) ? (x = D(w * b), w = D(x / b)) : (w = D(x / b), x = D(w * b))), F(d, w, x), t = 0 < (t = g.startPos.x + s) ? t : 0, n = 0 < (n = g.startPos.y + c) ? n : 0, k.setStyles(m, {
                        left: t,
                        top: n,
                        display: "block"
                    }), m.innerHTML = w + " &times; " + x, g[2] < 0 && d.clientWidth <= w && k.setStyle(d, "left", void 0 + (v - w)), g[3] < 0 && d.clientHeight <= x && k.setStyle(d, "top", void 0 + (y - x)), (s = O.scrollWidth - S) + (c = O.scrollHeight - N) !== 0 && k.setStyles(m, {
                        left: t - s,
                        top: n - c
                    }), C || (r = l, o = f, i = v, a = y, u = "corner-" + g.name, r.fire("ObjectResizeStart", {
                        target: o,
                        width: i,
                        height: a,
                        origin: u
                    }), C = !0)
                },
                z = function() {
                    var e, t, n, r, o, i = C;
                    C = !1, i && (a(f, "width", w), a(f, "height", x)), k.unbind(A, "mousemove", U), k.unbind(A, "mouseup", z), R !== A && (k.unbind(R, "mousemove", U), k.unbind(R, "mouseup", z)), k.remove(d), k.remove(m), k.remove(c), u(f), i && (e = l, t = f, n = w, r = x, o = "corner-" + g.name, e.fire("ObjectResized", {
                        target: t,
                        width: n,
                        height: r,
                        origin: o
                    }), k.setAttrib(f, "style", k.getAttrib(f, "style"))), l.nodeChanged()
                },
                u = function(e) {
                    H();
                    var t = k.getPos(e, O),
                        i = t.x,
                        a = t.y,
                        n = e.getBoundingClientRect(),
                        u = n.width || n.right - n.left,
                        s = n.height || n.bottom - n.top;
                    f !== e && (j(), f = e, w = x = 0);
                    var r = l.fire("ObjectSelected", {
                            target: e
                        }),
                        o = k.getAttrib(f, E, "1");
                    M(e) && !r.isDefaultPrevented() ? _(B, function(r, o) {
                        var t = function(e) {
                                var t, n = I(f)[0];
                                p = e.screenX, h = e.screenY, v = n.clientWidth, y = n.clientHeight, b = y / v, (g = r).name = o, g.startPos = {
                                    x: u * r[0] + i,
                                    y: s * r[1] + a
                                }, S = O.scrollWidth, N = O.scrollHeight, c = k.add(O, "div", {
                                    "class": "mce-resize-backdrop"
                                }), k.setStyles(c, {
                                    position: "fixed",
                                    left: "0",
                                    top: "0",
                                    width: "100%",
                                    height: "100%"
                                }), d = L(t = f) ? k.create("img", {
                                    src: St.transparentSrc
                                }) : t.cloneNode(!0), k.addClass(d, "mce-clonedresizable"), k.setAttrib(d, "data-mce-bogus", "all"), d.contentEditable = "false", k.setStyles(d, {
                                    left: i,
                                    top: a,
                                    margin: 0
                                }), F(d, u, s), d.removeAttribute(E), O.appendChild(d), k.bind(A, "mousemove", U), k.bind(A, "mouseup", z), R !== A && (k.bind(R, "mousemove", U), k.bind(R, "mouseup", z)), m = k.add(O, "div", {
                                    "class": "mce-resize-helper",
                                    "data-mce-bogus": "all"
                                }, v + " &times; " + y)
                            },
                            e = k.get("mceResizeHandle" + o);
                        e && k.remove(e), e = k.add(O, "div", {
                            id: "mceResizeHandle" + o,
                            "data-mce-bogus": "all",
                            "class": "mce-resizehandle",
                            unselectable: !0,
                            style: "cursor:" + o + "-resize; margin:0; padding:0"
                        }), 11 === St.ie && (e.contentEditable = !1), k.bind(e, "mousedown", function(e) {
                            e.stopImmediatePropagation(), e.preventDefault(), t(e)
                        }), r.elm = e, k.setStyles(e, {
                            left: u * r[0] + i - e.offsetWidth / 2,
                            top: s * r[1] + a - e.offsetHeight / 2
                        })
                    }) : j(), k.getAttrib(f, E) || f.setAttribute(E, o)
                },
                j = function() {
                    H(), f && f.removeAttribute(E), se(B, function(e, t) {
                        var n = k.get("mceResizeHandle" + t);
                        n && (k.unbind(n), k.remove(n))
                    })
                },
                o = function(e) {
                    var t, n = function(e, t) {
                        if (e)
                            do {
                                if (e === t) return !0
                            } while (e = e.parentNode)
                    };
                    C || l.removed || (_(k.select("img[data-mce-selected],hr[data-mce-selected]"), function(e) {
                        e.removeAttribute(E)
                    }), t = "mousedown" === e.type ? e.target : r.getNode(), n(t = k.$(t).closest("table,img,figure.image,hr,video,span.mce-preview-object")[0], O) && (s(), n(r.getStart(!0), t) && n(r.getEnd(!0), t)) ? u(t) : j())
                },
                i = function(e) {
                    return rd(Zf(l.getBody(), e))
                },
                H = function() {
                    se(B, function(e) {
                        e.elm && (k.unbind(e.elm), delete e.elm)
                    })
                },
                s = function() {
                    try {
                        l.getDoc().execCommand("enableObjectResizing", !1, "false")
                    } catch (e) {}
                };
            l.on("init", function() {
                var e;
                s(), (St.browser.isIE() || St.browser.isEdge()) && (l.on("mousedown click", function(e) {
                    var t = e.target,
                        n = t.nodeName;
                    C || !/^(TABLE|IMG|HR)$/.test(n) || i(t) || (2 !== e.button && l.selection.select(t, "TABLE" === n), "mousedown" === e.type && l.nodeChanged())
                }), e = function(e) {
                    var t = function(e) {
                        Kr.setEditorTimeout(l, function() {
                            return l.selection.select(e)
                        })
                    };
                    if (i(e.target) || Kn(e.target)) return e.preventDefault(), void t(e.target);
                    /^(TABLE|IMG|HR)$/.test(e.target.nodeName) && (e.preventDefault(), "IMG" === e.target.tagName && t(e.target))
                }, k.bind(O, "mscontrolselect", e), l.on("remove", function() {
                    return k.unbind(O, "mscontrolselect", e)
                }));
                var t = Kr.throttle(function(e) {
                    l.composing || o(e)
                });
                l.on("nodechange ResizeEditor ResizeWindow ResizeContent drop FullscreenStateChanged", t), l.on("keyup compositionend", function(e) {
                    f && "TABLE" === f.nodeName && t(e)
                }), l.on("hide blur", j), l.on("contextmenu longpress", n, !0)
            }), l.on("remove", H);
            return {
                isResizable: M,
                showResizeRect: u,
                hideResizeRect: j,
                updateResizeRect: o,
                destroy: function() {
                    f = d = c = null
                }
            }
        },
        id = function(e) {
            return qn(e) || $n(e)
        },
        ad = function(e, t, n) {
            var r, o, i, a, u, s = n;
            if (s.caretPositionFromPoint)(o = s.caretPositionFromPoint(e, t)) && ((r = n.createRange()).setStart(o.offsetNode, o.offset), r.collapse(!0));
            else if (n.caretRangeFromPoint) r = n.caretRangeFromPoint(e, t);
            else if (s.body.createTextRange) {
                r = s.body.createTextRange();
                try {
                    r.moveToPoint(e, t), r.collapse(!0)
                } catch (c) {
                    r = function(e, n, t) {
                        var r, o = t.elementFromPoint(e, n),
                            i = t.body.createTextRange();
                        if (o && "HTML" !== o.tagName || (o = t.body), i.moveToElementText(o), 0 < (r = (r = At.toArray(i.getClientRects())).sort(function(e, t) {
                                return (e = Math.abs(Math.max(e.top - n, e.bottom - n))) - (t = Math.abs(Math.max(t.top - n, t.bottom - n)))
                            })).length) {
                            n = (r[0].bottom + r[0].top) / 2;
                            try {
                                return i.moveToPoint(e, n), i.collapse(!0), i
                            } catch (a) {}
                        }
                        return null
                    }(e, t, n)
                }
                return i = r, a = n.body, u = i && i.parentElement ? i.parentElement() : null, $n(function(e, t, n) {
                    for (; e && e !== t;) {
                        if (n(e)) return e;
                        e = e.parentNode
                    }
                    return null
                }(u, a, id)) ? null : i
            }
            return r
        },
        ud = function(e, t) {
            return e && t && e.startContainer === t.startContainer && e.startOffset === t.startOffset && e.endContainer === t.endContainer && e.endOffset === t.endOffset
        },
        sd = function(e, t, n) {
            return null !== function(e, t, n) {
                for (; e && e !== t;) {
                    if (n(e)) return e;
                    e = e.parentNode
                }
                return null
            }(e, t, n)
        },
        cd = function(e) {
            return e && "TABLE" === e.nodeName
        },
        ld = function(e, t, n) {
            for (var r = new Gr(t, e.getParent(t.parentNode, e.isBlock) || e.getRoot()); t = r[n ? "prev" : "next"]();)
                if (Hn(t)) return !0
        },
        fd = function(e, t, n, r, o) {
            var i, a, u = e.getRoot(),
                s = e.schema.getNonEmptyElements(),
                c = e.getParent(o.parentNode, e.isBlock) || u;
            if (r && Hn(o) && t && e.isEmpty(c)) return U.some(Ms(o.parentNode, e.nodeIndex(o)));
            for (var l, f, d = new Gr(o, c); a = d[r ? "prev" : "next"]();) {
                if ("false" === e.getContentEditableParent(a) || (f = u, wo(l = a) && !1 === sd(l, f, Ul))) return U.none();
                if (Fn(a) && 0 < a.nodeValue.length) return !1 === function(e, t, n) {
                    return sd(e, t, function(e) {
                        return e.nodeName === n
                    })
                }(a, u, "A") ? U.some(Ms(a, r ? a.nodeValue.length : 0)) : U.none();
                if (e.isBlock(a) || s[a.nodeName.toLowerCase()]) return U.none();
                i = a
            }
            return n && i ? U.some(Ms(i, 0)) : U.none()
        },
        dd = function(e, t, n, r) {
            var o, i, a, u, s = e.getRoot(),
                c = !1,
                l = r[(n ? "start" : "end") + "Container"],
                f = r[(n ? "start" : "end") + "Offset"],
                d = Tn(l) && f === l.childNodes.length,
                m = e.schema.getNonEmptyElements(),
                g = n;
            if (wo(l)) return U.none();
            if (Tn(l) && f > l.childNodes.length - 1 && (g = !1), zn(l) && (l = s, f = 0), l === s) {
                if (g && (o = l.childNodes[0 < f ? f - 1 : 0])) {
                    if (wo(o)) return U.none();
                    if (m[o.nodeName] || cd(o)) return U.none()
                }
                if (l.hasChildNodes()) {
                    if (f = Math.min(!g && 0 < f ? f - 1 : f, l.childNodes.length - 1), l = l.childNodes[f], f = Fn(l) && d ? l.data.length : 0, !t && l === s.lastChild && cd(l)) return U.none();
                    if (function(e, t) {
                            for (; t && t !== e;) {
                                if ($n(t)) return !0;
                                t = t.parentNode
                            }
                            return !1
                        }(s, l) || wo(l)) return U.none();
                    if (l.hasChildNodes() && !1 === cd(l)) {
                        var p = new Gr(o = l, s);
                        do {
                            if ($n(o) || wo(o)) {
                                c = !1;
                                break
                            }
                            if (Fn(o) && 0 < o.nodeValue.length) {
                                f = g ? 0 : o.nodeValue.length, l = o, c = !0;
                                break
                            }
                            if (m[o.nodeName.toLowerCase()] && (!(i = o) || !/^(TD|TH|CAPTION)$/.test(i.nodeName))) {
                                f = e.nodeIndex(o), l = o.parentNode, g || f++, c = !0;
                                break
                            }
                        } while (o = g ? p.next() : p.prev())
                    }
                }
            }
            return t && (Fn(l) && 0 === f && fd(e, d, t, !0, l).each(function(e) {
                l = e.container(), f = e.offset(), c = !0
            }), Tn(l) && (!(o = (o = l.childNodes[f]) || l.childNodes[f - 1]) || !Hn(o) || (u = "A", (a = o).previousSibling && a.previousSibling.nodeName === u) || ld(e, o, !1) || ld(e, o, !0) || fd(e, d, t, !0, o).each(function(e) {
                l = e.container(), f = e.offset(), c = !0
            }))), g && !t && Fn(l) && f === l.nodeValue.length && fd(e, d, t, !1, l).each(function(e) {
                l = e.container(), f = e.offset(), c = !0
            }), c ? U.some(Ms(l, f)) : U.none()
        },
        md = function(e, t) {
            var n = t.collapsed,
                r = t.cloneRange(),
                o = Ms.fromRangeStart(t);
            return dd(e, n, !0, r).each(function(e) {
                n && Ms.isAbove(o, e) || r.setStart(e.container(), e.offset())
            }), n || dd(e, n, !1, r).each(function(e) {
                r.setEnd(e.container(), e.offset())
            }), n && r.collapse(!0), ud(t, r) ? U.none() : U.some(r)
        },
        gd = function(e, t) {
            return e.splitText(t)
        },
        pd = function(e) {
            var t = e.startContainer,
                n = e.startOffset,
                r = e.endContainer,
                o = e.endOffset;
            return t === r && Fn(t) ? 0 < n && n < t.nodeValue.length && (t = (r = gd(t, n)).previousSibling, n < o ? (t = r = gd(r, o -= n).previousSibling, o = r.nodeValue.length, n = 0) : o = 0) : (Fn(t) && 0 < n && n < t.nodeValue.length && (t = gd(t, n), n = 0), Fn(r) && 0 < o && o < r.nodeValue.length && (o = (r = gd(r, o).previousSibling).nodeValue.length)), {
                startContainer: t,
                startOffset: n,
                endContainer: r,
                endOffset: o
            }
        },
        hd = function(n) {
            return {
                walk: function(e, t) {
                    return Bf(n, e, t)
                },
                split: pd,
                normalize: function(t) {
                    return md(n, t).fold(A, function(e) {
                        return t.setStart(e.startContainer, e.startOffset), t.setEnd(e.endContainer, e.endOffset), !0
                    })
                }
            }
        };
    hd.compareRanges = ud, hd.getCaretRangeFromPoint = ad, hd.getSelectedNode = ps, hd.getNode = hs;
    var vd, yd, bd, Cd, wd, xd = (vd = "height", yd = function(e) {
            var t = e.dom;
            return yn(e) ? t.getBoundingClientRect().height : t.offsetHeight
        }, {
            set: function(e, t) {
                if (!N(t) && !t.match(/^[0-9]+$/)) throw new Error(vd + ".set accepts only positive integer values. Value was " + t);
                var n = e.dom;
                Xn(n) && (n.style[vd] = t + "px")
            },
            get: bd = function(e) {
                var t = yd(e);
                if (t <= 0 || null === t) {
                    var n = nr(e, vd);
                    return parseFloat(n) || 0
                }
                return t
            },
            getOuter: bd,
            aggregate: Cd = function(o, e) {
                return $(e, function(e, t) {
                    var n = nr(o, t),
                        r = n === undefined ? 0 : parseInt(n, 10);
                    return isNaN(r) ? e : e + r
                }, 0)
            },
            max: function(e, t, n) {
                var r = Cd(e, n);
                return r < t ? t - r : 0
            }
        }),
        Sd = function(r, e) {
            return r.view(e).fold(E([]), function(e) {
                var t = r.owner(e),
                    n = Sd(r, t);
                return [e].concat(n)
            })
        },
        Nd = /* */ Object.freeze({
            __proto__: null,
            view: function(e) {
                var t;
                return (e.dom === document ? U.none() : U.from(null === (t = e.dom.defaultView) || void 0 === t ? void 0 : t.frameElement)).map(Tt.fromDom)
            },
            owner: $t
        }),
        Ed = function(e) {
            var t, n, r, o = Tt.fromDom(document),
                i = Sn(o),
                a = (t = e, r = (n = Nd).owner(t), Sd(n, r)),
                u = xn(e),
                s = q(a, function(e, t) {
                    var n = xn(t);
                    return {
                        left: e.left + n.left,
                        top: e.top + n.top
                    }
                }, {
                    left: 0,
                    top: 0
                });
            return Cn(s.left + u.left + i.left, s.top + u.top + i.top)
        },
        kd = function(e) {
            return "textarea" === Mt(e)
        },
        _d = function(e, t) {
            var n, r = function(e) {
                    var t = e.dom.ownerDocument,
                        n = t.body,
                        r = t.defaultView,
                        o = t.documentElement;
                    if (n === e.dom) return Cn(n.offsetLeft, n.offsetTop);
                    var i = wn(null == r ? void 0 : r.pageYOffset, o.scrollTop),
                        a = wn(null == r ? void 0 : r.pageXOffset, o.scrollLeft),
                        u = wn(o.clientTop, n.clientTop),
                        s = wn(o.clientLeft, n.clientLeft);
                    return xn(e).translate(a - s, i - u)
                }(e),
                o = (n = e, xd.get(n));
            return {
                element: e,
                bottom: r.top + o,
                height: o,
                pos: r,
                cleanup: t
            }
        },
        Ad = function(e, t) {
            var n = function(e, t) {
                    var n = Qt(e);
                    if (0 === n.length || kd(e)) return {
                        element: e,
                        offset: t
                    };
                    if (t < n.length && !kd(n[t])) return {
                        element: n[t],
                        offset: 0
                    };
                    var r = n[n.length - 1];
                    return kd(r) ? {
                        element: e,
                        offset: t
                    } : "img" === Mt(r) ? {
                        element: r,
                        offset: 1
                    } : jt(r) ? {
                        element: r,
                        offset: Wf(r).length
                    } : {
                        element: r,
                        offset: Qt(r).length
                    }
                }(e, t),
                r = Tt.fromHtml('<span data-mce-bogus="all">\ufeff</span>');
            return ln(n.element, r), _d(r, function() {
                return hn(r)
            })
        },
        Rd = function(n, r, o, i) {
            Bd(n, function(e, t) {
                return Dd(n, r, o, i)
            }, o)
        },
        Td = function(e, t, n, r, o) {
            var i, a, u = {
                elm: r.element.dom,
                alignToTop: o
            };
            i = u, e.fire("ScrollIntoView", i).isDefaultPrevented() || (n(t, Sn(t).top, r, o), a = u, e.fire("AfterScrollIntoView", a))
        },
        Dd = function(e, t, n, r) {
            var o = Tt.fromDom(e.getBody()),
                i = Tt.fromDom(e.getDoc());
            o.dom.offsetWidth;
            var a = Ad(Tt.fromDom(n.startContainer), n.startOffset);
            Td(e, i, t, a, r), a.cleanup()
        },
        Od = function(e, t, n, r) {
            var o, i = Tt.fromDom(e.getDoc());
            Td(e, i, n, (o = t, _d(Tt.fromDom(o), te)), r)
        },
        Bd = function(e, t, n) {
            var r = n.startContainer,
                o = n.startOffset,
                i = n.endContainer,
                a = n.endOffset;
            t(Tt.fromDom(r), Tt.fromDom(i));
            var u = e.dom.createRng();
            u.setStart(r, o), u.setEnd(i, a), e.selection.setRng(n)
        },
        Pd = function(e, t, n, r) {
            var o, i = e.pos;
            n ? Nn(i.left, i.top, r) : (o = i.top - t + e.height, Nn(i.left, o, r))
        },
        Ld = function(e, t, n, r, o) {
            var i = n + t,
                a = r.pos.top,
                u = r.bottom,
                s = n <= u - a;
            a < t ? Pd(r, n, !1 !== o, e) : i < a ? Pd(r, n, s ? !1 !== o : !0 === o, e) : i < u && !s && Pd(r, n, !0 === o, e)
        },
        Id = function(e, t, n, r) {
            var o = e.dom.defaultView.innerHeight;
            Ld(e, t, o, n, r)
        },
        Md = function(e, t, n, r) {
            var o = e.dom.defaultView.innerHeight;
            Ld(e, t, o, n, r);
            var i = Ed(n.element),
                a = _n(window);
            i.top < a.y ? En(n.element, !1 !== r) : i.top > a.bottom && En(n.element, !0 === r)
        },
        Fd = function(e, t, n) {
            return Rd(e, Id, t, n)
        },
        Ud = function(e, t, n) {
            return Od(e, t, Id, n)
        },
        zd = function(e, t, n) {
            return Rd(e, Md, t, n)
        },
        jd = function(e, t, n) {
            return Od(e, t, Md, n)
        },
        Hd = function(e, t, n) {
            (e.inline ? Fd : zd)(e, t, n)
        },
        Vd = function(e) {
            var t = an(e).dom;
            return e.dom === t.activeElement
        },
        qd = function(e) {
            return void 0 === e && (e = Tt.fromDom(document)), U.from(e.dom.activeElement).map(Tt.fromDom)
        },
        $d = function(e, t, n, r) {
            return {
                start: e,
                soffset: t,
                finish: n,
                foffset: r
            }
        },
        Wd = xr([{
            before: ["element"]
        }, {
            on: ["element", "offset"]
        }, {
            after: ["element"]
        }]),
        Kd = (Wd.before, Wd.on, Wd.after, function(e) {
            return e.fold(g, g, g)
        }),
        Xd = xr([{
            domRange: ["rng"]
        }, {
            relative: ["startSitu", "finishSitu"]
        }, {
            exact: ["start", "soffset", "finish", "foffset"]
        }]),
        Yd = {
            domRange: Xd.domRange,
            relative: Xd.relative,
            exact: Xd.exact,
            exactFromRange: function(e) {
                return Xd.exact(e.start, e.soffset, e.finish, e.foffset)
            },
            getWin: function(e) {
                var t = e.match({
                    domRange: function(e) {
                        return Tt.fromDom(e.startContainer)
                    },
                    relative: function(e, t) {
                        return Kd(e)
                    },
                    exact: function(e, t, n, r) {
                        return e
                    }
                });
                return Wt(t)
            },
            range: $d
        },
        Gd = gt().browser,
        Jd = function(e, t) {
            var n = jt(t) ? Wf(t).length : Qt(t).length + 1;
            return n < e ? n : e < 0 ? 0 : e
        },
        Qd = function(e) {
            return Yd.range(e.start, Jd(e.soffset, e.start), e.finish, Jd(e.foffset, e.finish))
        },
        Zd = function(e, t) {
            return !Rn(t.dom) && (It(e, t) || Pt(e, t))
        },
        em = function(t) {
            return function(e) {
                return Zd(t, e.start) && Zd(t, e.finish)
            }
        },
        tm = function(e) {
            return !0 === e.inline || Gd.isIE()
        },
        nm = function(e) {
            return Yd.range(Tt.fromDom(e.startContainer), e.startOffset, Tt.fromDom(e.endContainer), e.endOffset)
        },
        rm = function(e) {
            var t, n, r = Wt(e);
            return t = r.dom, ((n = t.getSelection()) && 0 !== n.rangeCount ? U.from(n.getRangeAt(0)) : U.none()).map(nm).filter(em(e))
        },
        om = function(e) {
            var t = document.createRange();
            try {
                return t.setStart(e.start.dom, e.soffset), t.setEnd(e.finish.dom, e.foffset), U.some(t)
            } catch (n) {
                return U.none()
            }
        },
        im = function(e) {
            var t = tm(e) ? rm(Tt.fromDom(e.getBody())) : U.none();
            e.bookmark = t.isSome() ? t : e.bookmark
        },
        am = function(r) {
            return (r.bookmark ? r.bookmark : U.none()).bind(function(e) {
                return t = Tt.fromDom(r.getBody()), n = e, U.from(n).filter(em(t)).map(Qd);
                var t, n
            }).bind(om)
        },
        um = {
            isEditorUIElement: function(e) {
                var t = e.className.toString();
                return -1 !== t.indexOf("tox-") || -1 !== t.indexOf("mce-")
            }
        },
        sm = function(n, e) {
            var t, r;
            gt().browser.isIE() ? (r = n).on("focusout", function() {
                im(r)
            }) : (t = e, n.on("mouseup touchend", function(e) {
                t.throttle()
            })), n.on("keyup NodeChange", function(e) {
                var t;
                "nodechange" === (t = e).type && t.selectionChange || im(n)
            })
        },
        cm = function(r) {
            var o = Lu(function() {
                im(r)
            }, 0);
            r.on("init", function() {
                var e, t, n;
                r.inline && (e = r, t = o, n = function() {
                    t.throttle()
                }, Su.DOM.bind(document, "mouseup", n), e.on("remove", function() {
                    Su.DOM.unbind(document, "mouseup", n)
                })), sm(r, o)
            }), r.on("remove", function() {
                o.cancel()
            })
        },
        lm = Su.DOM,
        fm = function(t, e) {
            var n = t.getParam("custom_ui_selector", "", "string");
            return null !== lm.getParent(e, function(e) {
                return um.isEditorUIElement(e) || !!n && t.dom.is(e, n)
            })
        },
        dm = function(n, e) {
            var t = e.editor;
            cm(t), t.on("focusin", function() {
                var e = n.focusedEditor;
                e !== t && (e && e.fire("blur", {
                    focusedEditor: t
                }), n.setActive(t), (n.focusedEditor = t).fire("focus", {
                    blurredEditor: e
                }), t.focus(!0))
            }), t.on("focusout", function() {
                Kr.setEditorTimeout(t, function() {
                    var e = n.focusedEditor;
                    fm(t, function(e) {
                        try {
                            var t = an(Tt.fromDom(e.getElement()));
                            return qd(t).fold(function() {
                                return document.body
                            }, function(e) {
                                return e.dom
                            })
                        } catch (n) {
                            return document.body
                        }
                    }(t)) || e !== t || (t.fire("blur", {
                        focusedEditor: null
                    }), n.focusedEditor = null)
                })
            }), wd || (wd = function(e) {
                var t = n.activeEditor;
                t && function(e) {
                    if (on() && V(e.target)) {
                        var t = Tt.fromDom(e.target);
                        if (zt(t) && cn(t) && e.composed && e.composedPath) {
                            var n = e.composedPath();
                            if (n) return re(n)
                        }
                    }
                    return U.from(e.target)
                }(e).each(function(e) {
                    e.ownerDocument === document && (e === document.body || fm(t, e) || n.focusedEditor !== t || (t.fire("blur", {
                        focusedEditor: null
                    }), n.focusedEditor = null))
                })
            }, lm.bind(document, "focusin", wd))
        },
        mm = function(e, t) {
            e.focusedEditor === t.editor && (e.focusedEditor = null), e.activeEditor || (lm.unbind(document, "focusin", wd), wd = null)
        },
        gm = function(t, e) {
            return ((n = e).collapsed ? U.from(hs(n.startContainer, n.startOffset)).map(Tt.fromDom) : U.none()).bind(function(e) {
                return so(e) ? U.some(e) : !1 === It(t, e) ? U.some(t) : U.none()
            });
            var n
        },
        pm = function(t, e) {
            gm(Tt.fromDom(t.getBody()), e).bind(function(e) {
                return Il(e.dom)
            }).fold(function() {
                t.selection.normalize()
            }, function(e) {
                return t.selection.setRng(e.toRange())
            })
        },
        hm = function(e) {
            if (e.setActive) try {
                e.setActive()
            } catch (t) {
                e.focus()
            } else e.focus()
        },
        vm = function(e) {
            return Vd(e) || qd(an(t = e)).filter(function(e) {
                return t.dom.contains(e.dom)
            }).isSome();
            var t
        },
        ym = function(r) {
            var e = an(Tt.fromDom(r.getElement()));
            return qd(e).filter(function(e) {
                return t = e.dom, !((n = t.classList) !== undefined && (n.contains("tox-edit-area") || n.contains("tox-edit-area__iframe") || n.contains("mce-content-body"))) && fm(r, e.dom);
                var t, n
            }).isSome()
        },
        bm = function(e) {
            return e.inline ? (n = e.getBody()) && vm(Tt.fromDom(n)) : (t = e).iframeElement && Vd(Tt.fromDom(t.iframeElement));
            var t, n
        },
        Cm = function(t) {
            var e = t.selection,
                n = t.getBody(),
                r = e.getRng();
            t.quirks.refreshContentEditable(), t.bookmark !== undefined && !1 === bm(t) && am(t).each(function(e) {
                t.selection.setRng(e), r = e
            });
            var o, i, a = (o = t, i = e.getNode(), o.dom.getParent(i, function(e) {
                return "true" === o.dom.getContentEditable(e)
            }));
            if (t.$.contains(n, a)) return hm(a), pm(t, r), void wm(t);
            t.inline || (St.opera || hm(n), t.getWin().focus()), (St.gecko || t.inline) && (hm(n), pm(t, r)), wm(t)
        },
        wm = function(e) {
            return e.editorManager.setActive(e)
        },
        xm = function(e, t, n, r, o) {
            var i = n ? t.startContainer : t.endContainer,
                a = n ? t.startOffset : t.endOffset;
            return U.from(i).map(Tt.fromDom).map(function(e) {
                return r && t.collapsed ? e : Zt(e, o(e, a)).getOr(e)
            }).bind(function(e) {
                return zt(e) ? U.some(e) : Kt(e).filter(zt)
            }).map(function(e) {
                return e.dom
            }).getOr(e)
        },
        Sm = function(e, t, n) {
            return xm(e, t, !0, n, function(e, t) {
                return Math.min(e.dom.childNodes.length, t)
            })
        },
        Nm = function(e, t, n) {
            return xm(e, t, !1, n, function(e, t) {
                return 0 < t ? t - 1 : t
            })
        },
        Em = function(e, t) {
            for (var n = e; e && Fn(e) && 0 === e.length;) e = t ? e.nextSibling : e.previousSibling;
            return e || n
        },
        km = function(n, e) {
            return z(e, function(e) {
                var t = n.fire("GetSelectionRange", {
                    range: e
                });
                return t.range !== e ? t.range : e
            })
        },
        _m = {
            "#text": 3,
            "#comment": 8,
            "#cdata": 4,
            "#pi": 7,
            "#doctype": 10,
            "#document-fragment": 11
        },
        Am = function(e, t, n) {
            var r = n ? "lastChild" : "firstChild",
                o = n ? "prev" : "next";
            if (e[r]) return e[r];
            if (e !== t) {
                var i = e[o];
                if (i) return i;
                for (var a = e.parent; a && a !== t; a = a.parent)
                    if (i = a[o]) return i
            }
        },
        Rm = function(e) {
            var t = "a" === e.name && !e.attr("href") && e.attr("id");
            return e.attr("name") || e.attr("id") && !e.firstChild || e.attr("data-mce-bookmark") || t
        },
        Tm = (Dm.create = function(e, t) {
            var n = new Dm(e, _m[e] || 1);
            return t && se(t, function(e, t) {
                n.attr(t, e)
            }), n
        }, Dm.prototype.replace = function(e) {
            return e.parent && e.remove(), this.insert(e, this), this.remove(), this
        }, Dm.prototype.attr = function(e, t) {
            var n, r = this;
            if ("string" != typeof e) return e !== undefined && null !== e && se(e, function(e, t) {
                r.attr(t, e)
            }), r;
            if (n = r.attributes) {
                if (t === undefined) return n.map[e];
                if (null === t) {
                    if (e in n.map) {
                        delete n.map[e];
                        for (var o = n.length; o--;)
                            if (n[o].name === e) return n.splice(o, 1), r
                    }
                    return r
                }
                if (e in n.map) {
                    for (o = n.length; o--;)
                        if (n[o].name === e) {
                            n[o].value = t;
                            break
                        }
                } else n.push({
                    name: e,
                    value: t
                });
                return n.map[e] = t, r
            }
        }, Dm.prototype.clone = function() {
            var e, t = new Dm(this.name, this.type);
            if (e = this.attributes) {
                var n = [];
                n.map = {};
                for (var r = 0, o = e.length; r < o; r++) {
                    var i = e[r];
                    "id" !== i.name && (n[n.length] = {
                        name: i.name,
                        value: i.value
                    }, n.map[i.name] = i.value)
                }
                t.attributes = n
            }
            return t.value = this.value, t.shortEnded = this.shortEnded, t
        }, Dm.prototype.wrap = function(e) {
            return this.parent.insert(e, this), e.append(this), this
        }, Dm.prototype.unwrap = function() {
            for (var e = this.firstChild; e;) {
                var t = e.next;
                this.insert(e, this, !0), e = t
            }
            this.remove()
        }, Dm.prototype.remove = function() {
            var e = this.parent,
                t = this.next,
                n = this.prev;
            return e && (e.firstChild === this ? (e.firstChild = t) && (t.prev = null) : n.next = t, e.lastChild === this ? (e.lastChild = n) && (n.next = null) : t.prev = n, this.parent = this.next = this.prev = null), this
        }, Dm.prototype.append = function(e) {
            e.parent && e.remove();
            var t = this.lastChild;
            return t ? ((t.next = e).prev = t, this.lastChild = e) : this.lastChild = this.firstChild = e, e.parent = this, e
        }, Dm.prototype.insert = function(e, t, n) {
            e.parent && e.remove();
            var r = t.parent || this;
            return n ? (t === r.firstChild ? r.firstChild = e : t.prev.next = e, e.prev = t.prev, (e.next = t).prev = e) : (t === r.lastChild ? r.lastChild = e : t.next.prev = e, e.next = t.next, (e.prev = t).next = e), e.parent = r, e
        }, Dm.prototype.getAll = function(e) {
            for (var t = [], n = this.firstChild; n; n = Am(n, this)) n.name === e && t.push(n);
            return t
        }, Dm.prototype.empty = function() {
            if (this.firstChild) {
                for (var e = [], t = this.firstChild; t; t = Am(t, this)) e.push(t);
                for (var n = e.length; n--;)(t = e[n]).parent = t.firstChild = t.lastChild = t.next = t.prev = null
            }
            return this.firstChild = this.lastChild = null, this
        }, Dm.prototype.isEmpty = function(e, t, n) {
            void 0 === t && (t = {});
            var r = this.firstChild;
            if (Rm(this)) return !1;
            if (r)
                do {
                    if (1 === r.type) {
                        if (r.attr("data-mce-bogus")) continue;
                        if (e[r.name]) return !1;
                        if (Rm(r)) return !1
                    }
                    if (8 === r.type) return !1;
                    if (3 === r.type && ! function(e) {
                            if (jo(e.value)) {
                                var t = e.parent;
                                return !t || "span" === t.name && !t.attr("style") || !/^[ ]+$/.test(e.value)
                            }
                        }(r)) return !1;
                    if (3 === r.type && r.parent && t[r.parent.name] && jo(r.value)) return !1;
                    if (n && n(r)) return !1
                } while (r = Am(r, this));
            return !0
        }, Dm.prototype.walk = function(e) {
            return Am(this, null, e)
        }, Dm);
    function Dm(e, t) {
        this.name = e, 1 === (this.type = t) && (this.attributes = [], this.attributes.map = {})
    }
    var Om = function(e, t) {
            return e.replace(t.re, function(e) {
                return he(t.uris, e).getOr(e)
            })
        },
        Bm = ["img", "video"],
        Pm = function(e, t, n) {
            return !e.allow_html_data_urls && (/^data:image\//i.test(t) ? (r = e.allow_svg_data_urls, o = n, !(X(r) ? M(Bm, o) : r) && /^data:image\/svg\+xml/i.test(t)) : /^data:/i.test(t));
            var r, o
        },
        Lm = function(e, t, n) {
            var r, o, i = 1,
                a = e.getShortEndedElements(),
                u = /<([!?\/])?([A-Za-z0-9\-_:.]+)(\s(?:[^'">]+(?:"[^"]*"|'[^']*'))*[^"'>]*(?:"[^">]*|'[^'>]*)?|\s*|\/)>/g;
            for (u.lastIndex = r = n; o = u.exec(t);) {
                if (r = u.lastIndex, "/" === o[1]) i--;
                else if (!o[1]) {
                    if (o[2] in a) continue;
                    i++
                }
                if (0 === i) break
            }
            return r
        },
        Im = function(W, K) {
            void 0 === K && (K = wi()), !1 !== (W = W || {}).fix_self_closing && (W.fix_self_closing = !0);
            var X = W.comment ? W.comment : te,
                Y = W.cdata ? W.cdata : te,
                G = W.text ? W.text : te,
                J = W.start ? W.start : te,
                Q = W.end ? W.end : te,
                Z = W.pi ? W.pi : te,
                ee = W.doctype ? W.doctype : te,
                n = function(f, e) {
                    void 0 === e && (e = "html");
                    for (var t, i, n, d, r, o, a, m, u, s, c, l, g, p, h, v, y, b, C, w = f.html, x = 0, S = [], N = 0, E = fi.decode, k = At.makeMap("src,href,data,background,action,formaction,poster,xlink:href"), _ = /((java|vb)script|mhtml):/i, A = "html" === e ? 0 : 1, R = function(e) {
                            for (var t, n = S.length; n-- && S[n].name !== e;);
                            if (0 <= n) {
                                for (t = S.length - 1; n <= t; t--)(e = S[t]).valid && Q(e.name);
                                S.length = n
                            }
                        }, T = function(e, t) {
                            return G(Om(e, f), t)
                        }, D = function(e) {
                            "" !== e && (">" === e.charAt(0) && (e = " " + e), W.allow_conditional_comments || "[if" !== e.substr(0, 3).toLowerCase() || (e = " " + e), X(Om(e, f)))
                        }, O = function(e, t) {
                            var n = e || "",
                                r = !qe(n, "--"),
                                o = function(e, t, n) {
                                    void 0 === n && (n = 0);
                                    var r = e.toLowerCase();
                                    if (-1 !== r.indexOf("[if ", n) && (u = n, /^\s*\[if [\w\W]+\]>.*<!\[endif\](--!?)?>/.test(r.substr(u)))) {
                                        var o = r.indexOf("[endif]", n);
                                        return r.indexOf(">", o)
                                    }
                                    if (t) {
                                        var i = r.indexOf(">", n);
                                        return -1 !== i ? i : r.length
                                    }
                                    var a = /--!?>/g;
                                    a.lastIndex = n;
                                    var u, s = a.exec(e);
                                    return s ? s.index + s[0].length : r.length
                                }(w, r, t);
                            return e = w.substr(t, o - t), D(r ? n + e : e), o + 1
                        }, B = function(e, t, n, r, o) {
                            var i, a, u, s;
                            if (t = t.toLowerCase(), u = t in F ? t : E(n || r || o || ""), n = Om(u, f), U && !m && !1 == (0 === (s = t).indexOf("data-") || 0 === s.indexOf("aria-"))) {
                                if (!(i = p[t]) && h) {
                                    for (a = h.length; a-- && !(i = h[a]).pattern.test(t);); - 1 === a && (i = null)
                                }
                                if (!i) return;
                                if (i.validValues && !(n in i.validValues)) return
                            }
                            if (k[t] && !W.allow_script_urls) {
                                var c = n.replace(/[\s\u0000-\u001F]+/g, "");
                                try {
                                    c = decodeURIComponent(c)
                                } catch (l) {
                                    c = unescape(c)
                                }
                                if (_.test(c)) return;
                                if (Pm(W, c, e)) return
                            }
                            m && (t in k || 0 === t.indexOf("on")) || (d.map[t] = n, d.push({
                                name: t,
                                value: n
                            }))
                        }, P = new RegExp("<(?:(?:!--([\\w\\W]*?)--!?>)|(?:!\\[CDATA\\[([\\w\\W]*?)\\]\\]>)|(?:![Dd][Oo][Cc][Tt][Yy][Pp][Ee]([\\w\\W]*?)>)|(?:!(--)?)|(?:\\?([^\\s\\/<>]+) ?([\\w\\W]*?)[?/]>)|(?:\\/([A-Za-z][A-Za-z0-9\\-_\\:\\.]*)>)|(?:([A-Za-z][A-Za-z0-9\\-_:.]*)(\\s(?:[^'\">]+(?:\"[^\"]*\"|'[^']*'))*[^\"'>]*(?:\"[^\">]*|'[^'>]*)?|\\s*|\\/)>))", "g"), L = /([\w:\-]+)(?:\s*=\s*(?:(?:\"((?:[^\"])*)\")|(?:\'((?:[^\'])*)\')|([^>\s]+)))?/g, I = K.getShortEndedElements(), M = W.self_closing_elements || K.getSelfClosingElements(), F = K.getBoolAttrs(), U = W.validate, z = W.remove_internals, j = W.fix_self_closing, H = K.getSpecialElements(), V = w + ">"; t = P.exec(V);) {
                        var q = t[0];
                        if (x < t.index && T(E(w.substr(x, t.index - x))), i = t[7]) ":" === (i = i.toLowerCase()).charAt(0) && (i = i.substr(1)), R(i);
                        else if (i = t[8]) {
                            if (t.index + q.length > w.length) {
                                T(E(w.substr(t.index))), x = t.index + q.length;
                                continue
                            }
                            ":" === (i = i.toLowerCase()).charAt(0) && (i = i.substr(1)), u = i in I, j && M[i] && 0 < S.length && S[S.length - 1].name === i && R(i);
                            var $ = function(e, t) {
                                var n = e.exec(t);
                                if (n) {
                                    var r = n[1],
                                        o = n[2];
                                    return "string" == typeof r && "data-mce-bogus" === r.toLowerCase() ? o : null
                                }
                                return null
                            }(L, t[9]);
                            if (null !== $) {
                                if ("all" === $) {
                                    x = Lm(K, w, P.lastIndex), P.lastIndex = x;
                                    continue
                                }
                                c = !1
                            }
                            if (!U || (s = K.getElementRule(i))) {
                                if (c = !0, U && (p = s.attributes, h = s.attributePatterns), (g = t[9]) ? ((m = -1 !== g.indexOf("data-mce-type")) && z && (c = !1), (d = []).map = {}, g.replace(L, function(e, t, n, r, o) {
                                        return B(i, t, n, r, o), ""
                                    })) : (d = []).map = {}, U && !m) {
                                    if (v = s.attributesRequired, y = s.attributesDefault, b = s.attributesForced, s.removeEmptyAttrs && !d.length && (c = !1), b)
                                        for (r = b.length; r--;) a = (l = b[r]).name, "{$uid}" === (C = l.value) && (C = "mce_" + N++), d.map[a] = C, d.push({
                                            name: a,
                                            value: C
                                        });
                                    if (y)
                                        for (r = y.length; r--;)(a = (l = y[r]).name) in d.map || ("{$uid}" === (C = l.value) && (C = "mce_" + N++), d.map[a] = C, d.push({
                                            name: a,
                                            value: C
                                        }));
                                    if (v) {
                                        for (r = v.length; r-- && !(v[r] in d.map);); - 1 === r && (c = !1)
                                    }
                                    if (l = d.map["data-mce-bogus"]) {
                                        if ("all" === l) {
                                            x = Lm(K, w, P.lastIndex), P.lastIndex = x;
                                            continue
                                        }
                                        c = !1
                                    }
                                }
                                c && J(i, d, u)
                            } else c = !1;
                            if (n = H[i]) {
                                n.lastIndex = x = t.index + q.length, x = (t = n.exec(w)) ? (c && (o = w.substr(x, t.index - x)), t.index + t[0].length) : (o = w.substr(x), w.length), c && (0 < o.length && T(o, !0), Q(i)), P.lastIndex = x;
                                continue
                            }
                            u || (g && g.indexOf("/") === g.length - 1 ? c && Q(i) : S.push({
                                name: i,
                                valid: c
                            }))
                        } else if (i = t[1]) D(i);
                        else if (i = t[2]) {
                            if (!(1 == A || W.preserve_cdata || 0 < S.length && K.isValidChild(S[S.length - 1].name, "#cdata"))) {
                                x = O("", t.index + 2), P.lastIndex = x;
                                continue
                            }
                            Y(i)
                        } else if (i = t[3]) ee(i);
                        else {
                            if ((i = t[4]) || "<!" === q) {
                                x = O(i, t.index + q.length), P.lastIndex = x;
                                continue
                            }
                            if (i = t[5]) {
                                if (1 != A) {
                                    x = O("?", t.index + 2), P.lastIndex = x;
                                    continue
                                }
                                Z(i, t[6])
                            }
                        }
                        x = t.index + q.length
                    }
                    for (x < w.length && T(E(w.substr(x))), r = S.length - 1; 0 <= r; r--)(i = S[r]).valid && Q(i.name)
                };
            return {
                parse: function(e, t) {
                    void 0 === t && (t = "html"), n(function(e) {
                        for (var t, n = /data:[^;]+;base64,([a-z0-9\+\/=]+)/gi, r = [], o = {}, i = es("img"), a = 0, u = 0; t = n.exec(e);) {
                            var s = t[0],
                                c = i + "_" + u++;
                            o[c] = s, a < t.index && r.push(e.substr(a, t.index - a)), r.push(c), a = t.index + s.length
                        }
                        var l = new RegExp(i + "_[0-9]+", "g");
                        return 0 === a ? {
                            prefix: i,
                            uris: o,
                            html: e,
                            re: l
                        } : (a < e.length && r.push(e.substr(a)), {
                            prefix: i,
                            uris: o,
                            html: r.join(""),
                            re: l
                        })
                    }(e), t)
                }
            }
        };
    Im.findEndTag = Lm;
    var Mm = function(e, t) {
            var n, r, o, i, a, u, s, c = t,
                l = /<(\w+) [^>]*data-mce-bogus="all"[^>]*>/g,
                f = e.schema;
            a = e.getTempAttrs(), u = c, s = new RegExp(["\\s?(" + a.join("|") + ')="[^"]+"'].join("|"), "gi"), c = u.replace(s, "");
            for (var d = f.getShortEndedElements(); i = l.exec(c);) r = l.lastIndex, o = i[0].length, n = d[i[1]] ? r : Im.findEndTag(f, c, r), c = c.substring(0, r - o) + c.substring(n), l.lastIndex = r - o;
            return ho(c)
        },
        Fm = Mm,
        Um = function(e, t, n, r) {
            var o, i, a, u, s;
            return t.format = n, t.get = !0, t.getInner = !0, t.no_events || e.fire("BeforeGetContent", t), o = "raw" === t.format ? At.trim(Fm(e.serializer, r.innerHTML)) : "text" === t.format ? e.dom.isEmpty(r) ? "" : ho(r.innerText || r.textContent) : "tree" === t.format ? e.serializer.serialize(r, t) : (a = (i = e).serializer.serialize(r, t), u = fc(i), s = new RegExp("^(<" + u + "[^>]*>(&nbsp;|&#160;|\\s|\xa0|<br \\/>|)<\\/" + u + ">[\r\n]*|<br \\/>[\r\n]*)$"), a.replace(s, "")), M(["text", "tree"], t.format) || lo(Tt.fromDom(r)) ? t.content = o : t.content = At.trim(o), t.no_events || e.fire("GetContent", t), t.content
        },
        zm = At.each,
        jm = function(o) {
            return {
                compare: function(e, t) {
                    if (e.nodeName !== t.nodeName) return !1;
                    var n = function(n) {
                            var r = {};
                            return zm(o.getAttribs(n), function(e) {
                                var t = e.nodeName.toLowerCase();
                                0 !== t.indexOf("_") && "style" !== t && 0 !== t.indexOf("data-") && (r[t] = o.getAttrib(n, t))
                            }), r
                        },
                        r = function(e, t) {
                            var n, r;
                            for (r in e)
                                if (e.hasOwnProperty(r)) {
                                    if (void 0 === (n = t[r])) return !1;
                                    if (e[r] !== n) return !1;
                                    delete t[r]
                                } for (r in t)
                                if (t.hasOwnProperty(r)) return !1;
                            return !0
                        };
                    return !!r(n(e), n(t)) && (!!r(o.parseStyle(o.getAttrib(e, "style")), o.parseStyle(o.getAttrib(t, "style"))) && (!Yl(e) && !Yl(t)))
                }
            }
        },
        Hm = At.makeMap,
        Vm = function(e) {
            var u = [],
                s = (e = e || {}).indent,
                c = Hm(e.indent_before || ""),
                l = Hm(e.indent_after || ""),
                f = fi.getEncodeFunc(e.entity_encoding || "raw", e.entities),
                d = "html" === e.element_format;
            return {
                start: function(e, t, n) {
                    var r, o, i, a;
                    if (s && c[e] && 0 < u.length && 0 < (a = u[u.length - 1]).length && "\n" !== a && u.push("\n"), u.push("<", e), t)
                        for (r = 0, o = t.length; r < o; r++) i = t[r], u.push(" ", i.name, '="', f(i.value, !0), '"');
                    u[u.length] = !n || d ? ">" : " />", n && s && l[e] && 0 < u.length && 0 < (a = u[u.length - 1]).length && "\n" !== a && u.push("\n")
                },
                end: function(e) {
                    var t;
                    u.push("</", e, ">"), s && l[e] && 0 < u.length && 0 < (t = u[u.length - 1]).length && "\n" !== t && u.push("\n")
                },
                text: function(e, t) {
                    0 < e.length && (u[u.length] = t ? e : f(e))
                },
                cdata: function(e) {
                    u.push("<![CDATA[", e, "]]>")
                },
                comment: function(e) {
                    u.push("\x3c!--", e, "--\x3e")
                },
                pi: function(e, t) {
                    t ? u.push("<?", e, " ", f(t), "?>") : u.push("<?", e, "?>"), s && u.push("\n")
                },
                doctype: function(e) {
                    u.push("<!DOCTYPE", e, ">", s ? "\n" : "")
                },
                reset: function() {
                    u.length = 0
                },
                getContent: function() {
                    return u.join("").replace(/\n$/, "")
                }
            }
        },
        qm = function(t, g) {
            void 0 === g && (g = wi());
            var p = Vm(t);
            (t = t || {}).validate = !("validate" in t) || t.validate;
            return {
                serialize: function(e) {
                    var f = t.validate,
                        d = {
                            3: function(e) {
                                p.text(e.value, e.raw)
                            },
                            8: function(e) {
                                p.comment(e.value)
                            },
                            7: function(e) {
                                p.pi(e.name, e.value)
                            },
                            10: function(e) {
                                p.doctype(e.value)
                            },
                            4: function(e) {
                                p.cdata(e.value)
                            },
                            11: function(e) {
                                if (e = e.firstChild)
                                    for (; m(e), e = e.next;);
                            }
                        };
                    p.reset();
                    var m = function(e) {
                        var t, n, r, o, i, a, u, s, c, l = d[e.type];
                        if (l) l(e);
                        else {
                            if (t = e.name, n = e.shortEnded, r = e.attributes, f && r && 1 < r.length && ((a = []).map = {}, c = g.getElementRule(e.name))) {
                                for (u = 0, s = c.attributesOrder.length; u < s; u++)(o = c.attributesOrder[u]) in r.map && (i = r.map[o], a.map[o] = i, a.push({
                                    name: o,
                                    value: i
                                }));
                                for (u = 0, s = r.length; u < s; u++)(o = r[u].name) in a.map || (i = r.map[o], a.map[o] = i, a.push({
                                    name: o,
                                    value: i
                                }));
                                r = a
                            }
                            if (p.start(e.name, r, n), !n) {
                                if (e = e.firstChild)
                                    for (; m(e), e = e.next;);
                                p.end(t)
                            }
                        }
                    };
                    return 1 !== e.type || t.inner ? d[11](e) : m(e), p.getContent()
                }
            }
        },
        $m = new Set;
    Y(["margin", "margin-left", "margin-right", "margin-top", "margin-bottom", "padding", "padding-left", "padding-right", "padding-top", "padding-bottom", "border", "border-width", "border-style", "border-color", "background", "background-attachment", "background-clip", "background-color", "background-image", "background-origin", "background-position", "background-repeat", "background-size", "float", "position", "left", "right", "top", "bottom", "z-index", "display", "transform", "width", "max-width", "min-width", "height", "max-height", "min-height", "overflow", "overflow-x", "overflow-y", "text-overflow", "vertical-align", "transition", "transition-delay", "transition-duration", "transition-property", "transition-timing-function"], function(e) {
        $m.add(e)
    });
    var Wm, Km, Xm = ["font", "text-decoration", "text-emphasis"],
        Ym = function(e, t) {
            return ae(e.parseStyle(e.getAttrib(t, "style")))
        },
        Gm = function(e, t) {
            return Q(Ym(e, t), function(e) {
                return t = e, !$m.has(t);
                var t
            })
        },
        Jm = function(r, o, i) {
            var e = Ym(r, o),
                a = Ym(r, i),
                u = function(e) {
                    var t = r.getStyle(o, e),
                        n = r.getStyle(i, e);
                    return Ye(t) && Ye(n) && t !== n
                };
            return F(e, function(t) {
                var e = function(e) {
                    return F(e, function(e) {
                        return e === t
                    })
                };
                if (e(a) || !e(Xm)) return u(t);
                var n = H(a, function(t) {
                    return F(Xm, function(e) {
                        return qe(t, e)
                    })
                });
                return F(n, u)
            })
        },
        Qm = function(n, r, o) {
            return U.from(o.container()).filter(Fn).exists(function(e) {
                var t = n ? 0 : -1;
                return r(e.data.charAt(o.offset() + t))
            })
        },
        Zm = k(Qm, !0, Jl),
        eg = k(Qm, !1, Jl),
        tg = function(e) {
            var t = e.container();
            return Fn(t) && (0 === t.data.length || po(t.data) && Qf.isBookmarkNode(t.parentNode))
        },
        ng = function(t, n) {
            return function(e) {
                return U.from(el(t ? 0 : -1, e)).filter(n).isSome()
            }
        },
        rg = function(e) {
            return Vn(e) && "block" === nr(Tt.fromDom(e), "display")
        },
        og = function(e) {
            return $n(e) && !(Tn(t = e) && "all" === t.getAttribute("data-mce-bogus"));
            var t
        },
        ig = ng(!0, rg),
        ag = ng(!1, rg),
        ug = ng(!0, Kn),
        sg = ng(!1, Kn),
        cg = ng(!0, Ln),
        lg = ng(!1, Ln),
        fg = ng(!0, og),
        dg = ng(!1, og),
        mg = function(e) {
            var t = $u(e, "br"),
                n = H(function(e) {
                    for (var t = [], n = e.dom; n;) t.push(Tt.fromDom(n)), n = n.lastChild;
                    return t
                }(e).slice(-1), oo);
            t.length === n.length && Y(n, hn)
        },
        gg = function(e) {
            pn(e), mn(e, Tt.fromHtml('<br data-mce-bogus="1">'))
        },
        pg = function(n) {
            tn(n).each(function(t) {
                Xt(t).each(function(e) {
                    no(n) && oo(t) && no(e) && hn(t)
                })
            })
        },
        hg = function(e, t, n) {
            return It(t, e) ? function(e, t) {
                for (var n = m(t) ? t : A, r = e.dom, o = []; null !== r.parentNode && r.parentNode !== undefined;) {
                    var i = r.parentNode,
                        a = Tt.fromDom(i);
                    if (o.push(a), !0 === n(a)) break;
                    r = i
                }
                return o
            }(e, function(e) {
                return n(e) || Pt(e, t)
            }).slice(0, -1) : []
        },
        vg = function(e, t) {
            return hg(e, t, A)
        },
        yg = function(e, t) {
            return [e].concat(vg(e, t))
        },
        bg = function(e, t, n) {
            return Ol(e, t, n, tg)
        },
        Cg = function(e, t) {
            return W(yg(Tt.fromDom(t.container()), e), no)
        },
        wg = function(e, n, r) {
            return bg(e, n.dom, r).forall(function(t) {
                return Cg(n, r).fold(function() {
                    return !1 === Zc(t, r, n.dom)
                }, function(e) {
                    return !1 === Zc(t, r, n.dom) && It(e, Tt.fromDom(t.container()))
                })
            })
        },
        xg = function(t, n, r) {
            return Cg(n, r).fold(function() {
                return bg(t, n.dom, r).forall(function(e) {
                    return !1 === Zc(e, r, n.dom)
                })
            }, function(e) {
                return bg(t, e.dom, r).isNone()
            })
        },
        Sg = k(xg, !1),
        Ng = k(xg, !0),
        Eg = k(wg, !1),
        kg = k(wg, !0),
        _g = function(e) {
            return sl(e).exists(oo)
        },
        Ag = function(e, t, n) {
            var r = H(yg(Tt.fromDom(n.container()), t), no),
                o = re(r).getOr(t);
            return Tl(e, o.dom, n).filter(_g)
        },
        Rg = function(e, t) {
            return sl(t).exists(oo) || Ag(!0, e, t).isSome()
        },
        Tg = function(e, t) {
            return n = t, U.from(n.getNode(!0)).map(Tt.fromDom).exists(oo) || Ag(!1, e, t).isSome();
            var n
        },
        Dg = k(Ag, !1),
        Og = k(Ag, !0),
        Bg = function(e) {
            return Ms.isTextPosition(e) && !e.isAtStart() && !e.isAtEnd()
        },
        Pg = function(e, t) {
            var n = H(yg(Tt.fromDom(t.container()), e), no);
            return re(n).getOr(e)
        },
        Lg = function(e, t) {
            return Bg(t) ? eg(t) : eg(t) || Ll(Pg(e, t).dom, t).exists(eg)
        },
        Ig = function(e, t) {
            return Bg(t) ? Zm(t) : Zm(t) || Pl(Pg(e, t).dom, t).exists(Zm)
        },
        Mg = function(e) {
            return sl(e).bind(function(e) {
                return Or(e, zt)
            }).exists(function(e) {
                return t = nr(e, "white-space"), M(["pre", "pre-wrap"], t);
                var t
            })
        },
        Fg = function(e, t) {
            return r = t, Ll(e.dom, r).isNone() || (n = t, Pl(e.dom, n).isNone()) || Sg(e, t) || Ng(e, t) || Tg(e, t) || Rg(e, t);
            var n, r
        },
        Ug = function(e, t) {
            return !Mg(t) && (Sg(e, t) || Eg(e, t) || Tg(e, t) || Lg(e, t))
        },
        zg = function(e, t) {
            return !Mg(t) && (Ng(e, t) || kg(e, t) || Rg(e, t) || Ig(e, t))
        },
        jg = function(e, t) {
            return Ug(e, t) || zg(e, (r = (n = t).container(), o = n.offset(), Fn(r) && o < r.data.length ? Ms(r, o + 1) : n));
            var n, r, o
        },
        Hg = function(e, t) {
            return Gl(e.charAt(t))
        },
        Vg = function(e) {
            var t = e.container();
            return Fn(t) && Ve(t.data, mo)
        },
        qg = function(e) {
            var n, t = e.data,
                r = (n = t.split(""), z(n, function(e, t) {
                    return Gl(e) && 0 < t && t < n.length - 1 && Ql(n[t - 1]) && Ql(n[t + 1]) ? " " : e
                }).join(""));
            return r !== t && (e.data = r, !0)
        },
        $g = function(l, e) {
            return U.some(e).filter(Vg).bind(function(e) {
                var t, n, r, o, i, a, u, s, c = e.container();
                return (i = l, u = (a = c).data, s = Ms(a, 0), !(!Hg(u, 0) || jg(i, s) || (a.data = " " + u.slice(1), 0)) || qg(c) || (t = l, r = (n = c).data, o = Ms(n, r.length - 1), !(!Hg(r, r.length - 1) || jg(t, o) || (n.data = r.slice(0, -1) + " ", 0)))) ? U.some(e) : U.none()
            })
        },
        Wg = function(t) {
            var e = Tt.fromDom(t.getBody());
            t.selection.isCollapsed() && $g(e, Ms.fromRangeStart(t.selection.getRng())).each(function(e) {
                t.selection.setRng(e.toRange())
            })
        },
        Kg = function(e, t, n) {
            var r, o, i, a, u, s, c, l;
            0 !== n && (r = Tt.fromDom(e), o = Dr(r, no).getOr(r), i = e.data.slice(t, t + n), a = t + n >= e.data.length && zg(o, Ms(e, e.data.length)), u = 0 === t && Ug(o, Ms(e, 0)), e.replaceData(t, n, (c = u, l = a, $(s = i, function(e, t) {
                return Jl(t) || Gl(t) ? e.previousCharIsSpace || "" === e.str && c || e.str.length === s.length - 1 && l ? {
                    previousCharIsSpace: !1,
                    str: e.str + mo
                } : {
                    previousCharIsSpace: !0,
                    str: e.str + " "
                } : {
                    previousCharIsSpace: !1,
                    str: e.str + t
                }
            }, {
                previousCharIsSpace: !1,
                str: ""
            }).str)))
        },
        Xg = function(e, t) {
            var n = e.data.slice(t),
                r = n.length - Ke(n).length;
            return Kg(e, t, r)
        },
        Yg = function(e, t) {
            var n = e.data.slice(0, t),
                r = n.length - Xe(n).length;
            return Kg(e, t - r, r)
        },
        Gg = function(e, t, n, r) {
            void 0 === r && (r = !0);
            var o = Xe(e.data).length,
                i = r ? e : t,
                a = r ? t : e;
            return r ? i.appendData(a.data) : i.insertData(0, a.data), hn(Tt.fromDom(a)), n && Xg(i, o), i
        },
        Jg = function(e, t) {
            return r = e, o = (n = t).container(), i = n.offset(), !1 === Ms.isTextPosition(n) && o === r.parentNode && i > Ms.before(r).offset() ? Ms(t.container(), t.offset() - 1) : t;
            var n, r, o, i
        },
        Qg = function(e) {
            return Mo(e.previousSibling) ? U.some((t = e.previousSibling, Fn(t) ? Ms(t, t.data.length) : Ms.after(t))) : e.previousSibling ? Ml(e.previousSibling) : U.none();
            var t
        },
        Zg = function(e) {
            return Mo(e.nextSibling) ? U.some((t = e.nextSibling, Fn(t) ? Ms(t, 0) : Ms.before(t))) : e.nextSibling ? Il(e.nextSibling) : U.none();
            var t
        },
        ep = function(r, o) {
            return Qg(o).orThunk(function() {
                return Zg(o)
            }).orThunk(function() {
                return e = r, t = o, n = Ms.before(t.previousSibling ? t.previousSibling : t.parentNode), Ll(e, n).fold(function() {
                    return Pl(e, Ms.after(t))
                }, U.some);
                var e, t, n
            })
        },
        tp = function(n, r) {
            return Zg(r).orThunk(function() {
                return Qg(r)
            }).orThunk(function() {
                return t = r, Pl(e = n, Ms.after(t)).fold(function() {
                    return Ll(e, Ms.before(t))
                }, U.some);
                var e, t
            })
        },
        np = function(e, t, n) {
            return (e ? tp : ep)(t, n).map(k(Jg, n))
        },
        rp = function(t, n, e) {
            e.fold(function() {
                t.focus()
            }, function(e) {
                t.selection.setRng(e.toRange(), n)
            })
        },
        op = function(e, t) {
            return t && ve(e.schema.getBlockElements(), Mt(t))
        },
        ip = function(e) {
            if (Ko(e)) {
                var t = Tt.fromHtml('<br data-mce-bogus="1">');
                return pn(e), mn(e, t), U.some(Ms.before(t.dom))
            }
            return U.none()
        },
        ap = function(e, t, a) {
            var n, r, o, i, u = Xt(e).filter(jt),
                s = Yt(e).filter(jt);
            return hn(e), r = s, o = t, i = function(e, t, n) {
                var r = e.dom,
                    o = t.dom,
                    i = r.data.length;
                return Gg(r, o, a), n.container() === o ? Ms(r, i) : n
            }, ((n = u).isSome() && r.isSome() && o.isSome() ? U.some(i(n.getOrDie(), r.getOrDie(), o.getOrDie())) : U.none()).orThunk(function() {
                return a && (u.each(function(e) {
                    return Yg(e.dom, e.dom.length)
                }), s.each(function(e) {
                    return Xg(e.dom, 0)
                })), t
            })
        },
        up = function(t, n, e, r) {
            void 0 === r && (r = !0);
            var o, i, a = np(n, t.getBody(), e.dom),
                u = Dr(e, k(op, t), (o = t.getBody(), function(e) {
                    return e.dom === o
                })),
                s = ap(e, a, (i = e, ve(t.schema.getTextInlineElements(), Mt(i))));
            t.dom.isEmpty(t.getBody()) ? (t.setContent(""), t.selection.setCursorLocation()) : u.bind(ip).fold(function() {
                r && rp(t, n, s)
            }, function(e) {
                r && rp(t, n, U.some(e))
            })
        },
        sp = function(e, t) {
            return {
                start: e,
                end: t
            }
        },
        cp = xr([{
            removeTable: ["element"]
        }, {
            emptyCells: ["cells"]
        }, {
            deleteCellSelection: ["rng", "cell"]
        }]),
        lp = function(e, t) {
            return Ir(Tt.fromDom(e), "td,th", t)
        },
        fp = function(e, t) {
            return Pr(e, "table", t)
        },
        dp = function(e) {
            return !Pt(e.start, e.end)
        },
        mp = function(e, t) {
            return fp(e.start, t).bind(function(r) {
                return fp(e.end, t).bind(function(e) {
                    return t = Pt(r, e), n = r, t ? U.some(n) : U.none();
                    var t, n
                })
            })
        },
        gp = function(e) {
            return $u(e, "td,th")
        },
        pp = function(r, e) {
            var t = lp(e.startContainer, r),
                n = lp(e.endContainer, r);
            return e.collapsed ? U.none() : us(t, n, sp).fold(function() {
                return t.fold(function() {
                    return n.bind(function(t) {
                        return fp(t, r).bind(function(e) {
                            return re(gp(e)).map(function(e) {
                                return sp(e, t)
                            })
                        })
                    })
                }, function(t) {
                    return fp(t, r).bind(function(e) {
                        return oe(gp(e)).map(function(e) {
                            return sp(t, e)
                        })
                    })
                })
            }, function(e) {
                return hp(r, e) ? U.none() : (n = r, fp((t = e).start, n).bind(function(e) {
                    return oe(gp(e)).map(function(e) {
                        return sp(t.start, e)
                    })
                }));
                var t, n
            })
        },
        hp = function(e, t) {
            return mp(t, e).isSome()
        },
        vp = function(e, t, n) {
            return e.filter(function(e) {
                return dp(e) && hp(n, e)
            }).orThunk(function() {
                return pp(n, t)
            }).bind(function(e) {
                return mp(t = e, n).map(function(e) {
                    return {
                        rng: t,
                        table: e,
                        cells: gp(e)
                    }
                });
                var t
            })
        },
        yp = function(e, t) {
            return G(e, function(e) {
                return Pt(e, t)
            })
        },
        bp = function(e, r, o) {
            return e.filter(function(e) {
                return n = o, !dp(t = e) && mp(t, n).exists(function(e) {
                    var t = e.dom.rows;
                    return 1 === t.length && 1 === t[0].cells.length
                }) && zf(e.start, r);
                var t, n
            }).map(function(e) {
                return e.start
            })
        },
        Cp = function(n) {
            return us(yp((r = n).cells, r.rng.start), yp(r.cells, r.rng.end), function(e, t) {
                return r.cells.slice(e, t + 1)
            }).map(function(e) {
                var t = n.cells;
                return e.length === t.length ? cp.removeTable(n.table) : cp.emptyCells(e)
            });
            var r
        },
        wp = function(e, t) {
            var n, r, o, i, a, u = (n = e, function(e) {
                    return Pt(n, e)
                }),
                s = (o = u, i = lp((r = t).startContainer, o), a = lp(r.endContainer, o), us(i, a, sp));
            return bp(s, t, u).map(function(e) {
                return cp.deleteCellSelection(t, e)
            }).orThunk(function() {
                return vp(s, t, u).bind(Cp)
            })
        },
        xp = function(e) {
            var t;
            return (8 === Ft(t = e) || "#comment" === Mt(t) ? Xt : tn)(e).bind(xp).orThunk(function() {
                return U.some(e)
            })
        },
        Sp = function(e, t) {
            return Y(t, gg), e.selection.setCursorLocation(t[0].dom, 0), !0
        },
        Np = function(e, t, n) {
            t.deleteContents();
            var r, o, i = xp(n).getOr(n),
                a = Tt.fromDom(e.dom.getParent(i.dom, e.dom.isBlock));
            return Ko(a) && (gg(a), e.selection.setCursorLocation(a.dom, 0)), Pt(n, a) || (r = Kt(a).is(n) ? [] : Kt(o = a).map(Qt).map(function(e) {
                return H(e, function(e) {
                    return !Pt(o, e)
                })
            }).getOr([]), Y(r.concat(Qt(n)), function(e) {
                Pt(e, a) || It(e, a) || hn(e)
            })), !0
        },
        Ep = function(e, t) {
            return up(e, !1, t), !0
        },
        kp = function(n, e, r, t) {
            return Ap(e, t).fold(function() {
                return t = n, wp(e, r).map(function(e) {
                    return e.fold(k(Ep, t), k(Sp, t), k(Np, t))
                });
                var t
            }, function(e) {
                return Rp(n, e)
            }).getOr(!1)
        },
        _p = function(e, t) {
            return W(yg(t, e), co)
        },
        Ap = function(e, t) {
            return W(yg(t, e), function(e) {
                return "caption" === Mt(e)
            })
        },
        Rp = function(e, t) {
            return gg(t), e.selection.setCursorLocation(t.dom, 0), U.some(!0)
        },
        Tp = function(u, s, c, l, f) {
            return Dl(c, u.getBody(), f).bind(function(e) {
                return o = c, i = f, a = e, Il((r = l).dom).bind(function(t) {
                    return Ml(r.dom).map(function(e) {
                        return o ? i.isEqual(t) && a.isEqual(e) : i.isEqual(e) && a.isEqual(t)
                    })
                }).getOr(!0) ? Rp(u, l) : (t = l, n = e, Ap(s, Tt.fromDom(n.getNode())).map(function(e) {
                    return !1 === Pt(e, t)
                }));
                var t, n, r, o, i, a
            }).or(U.some(!0))
        },
        Dp = function(o, i, a, e) {
            var u = Ms.fromRangeStart(o.selection.getRng());
            return _p(a, e).bind(function(e) {
                return Ko(e) ? Rp(o, e) : (t = a, n = e, r = u, Dl(i, o.getBody(), r).bind(function(e) {
                    return _p(t, Tt.fromDom(e.getNode())).map(function(e) {
                        return !1 === Pt(e, n)
                    })
                }));
                var t, n, r
            }).getOr(!1)
        },
        Op = function(e, t) {
            return (e ? cg : lg)(t)
        },
        Bp = function(a, u, r) {
            var s = Tt.fromDom(a.getBody());
            return Ap(s, r).fold(function() {
                return Dp(a, u, s, r) || (e = a, t = u, n = Ms.fromRangeStart(e.selection.getRng()), Op(t, n) || Tl(t, e.getBody(), n).exists(function(e) {
                    return Op(t, e)
                }));
                var e, t, n
            }, function(e) {
                return t = a, n = u, r = s, o = e, i = Ms.fromRangeStart(t.selection.getRng()), (Ko(o) ? Rp(t, o) : Tp(t, r, n, o, i)).getOr(!1);
                var t, n, r, o, i
            })
        },
        Pp = function(e, t) {
            var n, r, o, i, a, u = Tt.fromDom(e.selection.getStart(!0)),
                s = Mf(e);
            return e.selection.isCollapsed() && 0 === s.length ? Bp(e, t, u) : (n = e, r = u, o = Tt.fromDom(n.getBody()), i = n.selection.getRng(), 0 !== (a = Mf(n)).length ? Sp(n, a) : kp(n, o, i, r))
        },
        Lp = function(a) {
            var u = Ms.fromRangeStart(a),
                s = Ms.fromRangeEnd(a),
                c = a.commonAncestorContainer;
            return Tl(!1, c, s).map(function(e) {
                return !Zc(u, s, c) && Zc(u, e, c) ? (t = u.container(), n = u.offset(), r = e.container(), o = e.offset(), (i = document.createRange()).setStart(t, n), i.setEnd(r, o), i) : a;
                var t, n, r, o, i
            }).getOr(a)
        },
        Ip = function(e) {
            return e.collapsed ? e : Lp(e)
        },
        Mp = function(e, t) {
            var n, r;
            return e.getBlockElements()[t.name] && ((r = t).firstChild && r.firstChild === r.lastChild) && ("br" === (n = t.firstChild).name || n.value === mo)
        },
        Fp = function(e, t) {
            var n, r, o, i = t.firstChild,
                a = t.lastChild;
            return i && "meta" === i.name && (i = i.next), a && "mce_marker" === a.attr("id") && (a = a.prev), r = a, o = (n = e).getNonEmptyElements(), r && (r.isEmpty(o) || Mp(n, r)) && (a = a.prev), !(!i || i !== a) && ("ul" === i.name || "ol" === i.name)
        },
        Up = function(e) {
            return e && e.firstChild && e.firstChild === e.lastChild && ((t = e.firstChild).data === mo || Hn(t));
            var t
        },
        zp = function(e) {
            return 0 < e.length && (!(t = e[e.length - 1]).firstChild || Up(t)) ? e.slice(0, -1) : e;
            var t
        },
        jp = function(e, t) {
            var n = e.getParent(t, e.isBlock);
            return n && "LI" === n.nodeName ? n : null
        },
        Hp = function(e, t) {
            var n = Ms.after(e),
                r = El(t).prev(n);
            return r ? r.toRange() : null
        },
        Vp = function(t, e, n) {
            var r, o, i, a, u = t.parentNode;
            return At.each(e, function(e) {
                u.insertBefore(e, t)
            }), r = t, o = n, i = Ms.before(r), (a = El(o).next(i)) ? a.toRange() : null
        },
        qp = function(e, o, i, t) {
            var n, r, a, u, s, c, l, f, d, m, g, p, h, v, y, b, C, w, x, S, N = (n = o, r = t, c = e.serialize(r), l = n.createFragment(c), u = (a = l).firstChild, s = a.lastChild, u && "META" === u.nodeName && u.parentNode.removeChild(u), s && "mce_marker" === s.id && s.parentNode.removeChild(s), a),
                E = jp(o, i.startContainer),
                k = zp((f = N.firstChild, At.grep(f.childNodes, function(e) {
                    return "LI" === e.nodeName
                }))),
                _ = o.getRoot(),
                A = function(e) {
                    var t = Ms.fromRangeStart(i),
                        n = El(o.getRoot()),
                        r = 1 === e ? n.prev(t) : n.next(t);
                    return !r || jp(o, r.getNode()) !== E
                };
            return A(1) ? Vp(E, k, _) : A(2) ? (d = E, m = k, g = _, o.insertAfter(m.reverse(), d), Hp(m[0], g)) : (h = k, v = _, y = p = E, C = (b = i).cloneRange(), w = b.cloneRange(), C.setStartBefore(y), w.setEndAfter(y), x = [C.cloneContents(), w.cloneContents()], (S = p.parentNode).insertBefore(x[0], p), At.each(h, function(e) {
                S.insertBefore(e, p)
            }), S.insertBefore(x[1], p), S.removeChild(p), Hp(h[h.length - 1], v))
        },
        $p = Wn,
        Wp = function(e) {
            var t = e.dom,
                n = Ip(e.selection.getRng());
            e.selection.setRng(n);
            var r, o, i, a = t.getParent(n.startContainer, $p);
            r = t, o = n, null !== (i = a) && i === r.getParent(o.endContainer, $p) && zf(Tt.fromDom(i), o) ? Np(e, n, Tt.fromDom(a)) : e.getDoc().execCommand("Delete", !1, null)
        },
        Kp = function(e, t, n) {
            var r, o, i, a, u, s, c, l, f, d = e.selection,
                m = e.dom;
            /^ | $/.test(t) && (s = m, c = d.getRng(), l = t, f = Tt.fromDom(s.getRoot()), l = Ug(f, Ms.fromRangeStart(c)) ? l.replace(/^ /, "&nbsp;") : l.replace(/^&nbsp;/, " "), t = l = zg(f, Ms.fromRangeEnd(c)) ? l.replace(/(&nbsp;| )(<br( \/)>)?$/, "&nbsp;") : l.replace(/&nbsp;(<br( \/)?>)?$/, " "));
            var g = e.parser,
                p = n.merge,
                h = qm({
                    validate: e.getParam("validate")
                }, e.schema),
                v = '<span id="mce_marker" data-mce-type="bookmark">&#xFEFF;</span>',
                y = {
                    content: t,
                    format: "html",
                    selection: !0,
                    paste: n.paste
                };
            if ((y = e.fire("BeforeSetContent", y)).isDefaultPrevented()) e.fire("SetContent", {
                content: y.content,
                format: "html",
                selection: !0,
                paste: n.paste
            });
            else {
                -1 === (t = y.content).indexOf("{$caret}") && (t += "{$caret}"), t = t.replace(/\{\$caret\}/, v);
                var b, C, w = (a = d.getRng()).startContainer || (a.parentElement ? a.parentElement() : null),
                    x = e.getBody();
                w === x && d.isCollapsed() && m.isBlock(x.firstChild) && (b = e, (C = x.firstChild) && !b.schema.getShortEndedElements()[C.nodeName]) && m.isEmpty(x.firstChild) && ((a = m.createRng()).setStart(x.firstChild, 0), a.setEnd(x.firstChild, 0), d.setRng(a)), d.isCollapsed() || Wp(e);
                var S, N, E, k, _, A, R, T, D, O, B, P, L, I, M = {
                        context: (r = d.getNode()).nodeName.toLowerCase(),
                        data: n.data,
                        insert: !0
                    },
                    F = g.parse(t, M);
                if (!0 === n.paste && Fp(e.schema, F) && jp(m, r)) return a = qp(h, m, d.getRng(), F), d.setRng(a), void e.fire("SetContent", y);
                if (! function(e) {
                        for (var t = e; t = t.walk();) 1 === t.type && t.attr("data-mce-fragment", "1")
                    }(F), "mce_marker" === (u = F.lastChild).attr("id"))
                    for (u = (i = u).prev; u; u = u.walk(!0))
                        if (3 === u.type || !m.isBlock(u.name)) {
                            e.schema.isValidChild(u.parent.name, "span") && u.parent.insert(i, u, "br" === u.name);
                            break
                        } if (e._selectionOverrides.showBlockCaretContainer(r), M.invalid) {
                    for (e.selection.setContent(v), r = d.getNode(), o = e.getBody(), 9 === r.nodeType ? r = u = o : u = r; u !== o;) u = (r = u).parentNode;
                    t = r === o ? o.innerHTML : m.getOuterHTML(r), t = h.serialize(g.parse(t.replace(/<span (id="mce_marker"|id=mce_marker).+?<\/span>/i, function() {
                        return h.serialize(F)
                    }))), r === o ? m.setHTML(o, t) : m.setOuterHTML(r, t)
                } else t = h.serialize(F), S = e, N = t, "all" === (E = r).getAttribute("data-mce-bogus") ? E.parentNode.insertBefore(S.dom.createFragment(N), E) : (k = E.firstChild, _ = E.lastChild, !k || k === _ && "BR" === k.nodeName ? S.dom.setHTML(E, N) : S.selection.setContent(N));
                R = p, O = (A = e).schema.getTextInlineElements(), B = A.dom, R && (T = A.getBody(), D = jm(B), At.each(B.select("*[data-mce-fragment]"), function(e) {
                        if (V(O[e.nodeName.toLowerCase()]) && Gm(B, e))
                            for (var t = e.parentNode; V(t) && t !== T; t = t.parentNode) {
                                if (Jm(B, e, t)) break;
                                if (D.compare(t, e)) {
                                    B.remove(e, !0);
                                    break
                                }
                            }
                    })),
                    function(n, e) {
                        var t, r, o = n.dom,
                            i = n.selection;
                        if (e) {
                            i.scrollIntoView(e);
                            var a = function(e) {
                                for (var t = n.getBody(); e && e !== t; e = e.parentNode)
                                    if ("false" === o.getContentEditable(e)) return e;
                                return null
                            }(e);
                            if (a) return o.remove(e), i.select(a);
                            var u = o.createRng(),
                                s = e.previousSibling;
                            s && 3 === s.nodeType ? (u.setStart(s, s.nodeValue.length), St.ie || (r = e.nextSibling) && 3 === r.nodeType && (s.appendData(r.data), r.parentNode.removeChild(r))) : (u.setStartBefore(e), u.setEndBefore(e));
                            var c = o.getParent(e, o.isBlock);
                            o.remove(e), c && o.isEmpty(c) && (n.$(c).empty(), u.setStart(c, 0), u.setEnd(c, 0), $p(c) || c.getAttribute("data-mce-fragment") || !(t = function(e) {
                                var t = Ms.fromRangeStart(e);
                                if (t = El(n.getBody()).next(t)) return t.toRange()
                            }(u)) ? o.add(c, o.create("br", {
                                "data-mce-bogus": "1"
                            })) : (u = t, o.remove(c))), i.setRng(u)
                        }
                    }(e, m.get("mce_marker")), P = e.getBody(), At.each(P.getElementsByTagName("*"), function(e) {
                        e.removeAttribute("data-mce-fragment")
                    }), L = m, I = d.getStart(), U.from(L.getParent(I, "td,th")).map(Tt.fromDom).each(pg), e.fire("SetContent", y), e.addVisual()
            }
        },
        Xp = function(e, t) {
            t(e), e.firstChild && Xp(e.firstChild, t), e.next && Xp(e.next, t)
        },
        Yp = function(e, t, n) {
            var r = function(e, n, t) {
                var r = {},
                    o = {},
                    i = [];
                for (var a in t.firstChild && Xp(t.firstChild, function(t) {
                        Y(e, function(e) {
                            e.name === t.name && (r[e.name] ? r[e.name].nodes.push(t) : r[e.name] = {
                                filter: e,
                                nodes: [t]
                            })
                        }), Y(n, function(e) {
                            "string" == typeof t.attr(e.name) && (o[e.name] ? o[e.name].nodes.push(t) : o[e.name] = {
                                filter: e,
                                nodes: [t]
                            })
                        })
                    }), r) r.hasOwnProperty(a) && i.push(r[a]);
                for (var u in o) o.hasOwnProperty(u) && i.push(o[u]);
                return i
            }(e, t, n);
            Y(r, function(t) {
                Y(t.filter.callbacks, function(e) {
                    e(t.nodes, t.filter.name, {})
                })
            })
        },
        Gp = function(e) {
            return e instanceof Tm
        },
        Jp = function(e, t) {
            var r;
            e.dom.setHTML(e.getBody(), t), bm(r = e) && Il(r.getBody()).each(function(e) {
                var t = e.getNode(),
                    n = Ln(t) ? Il(t).getOr(e) : e;
                r.selection.setRng(n.toRange())
            })
        },
        Qp = function(u, s, c) {
            return c.format = c.format ? c.format : "html", c.set = !0, c.content = Gp(s) ? "" : s, c.no_events || u.fire("BeforeSetContent", c), Gp(s) || (s = c.content), U.from(u.getBody()).fold(E(s), function(e) {
                return Gp(s) ? function(e, t, n, r) {
                    Yp(e.parser.getNodeFilters(), e.parser.getAttributeFilters(), n);
                    var o = qm({
                        validate: e.validate
                    }, e.schema).serialize(n);
                    return r.content = lo(Tt.fromDom(t)) ? o : At.trim(o), Jp(e, r.content), r.no_events || e.fire("SetContent", r), n
                }(u, e, s, c) : (t = u, n = e, o = c, 0 === (r = s).length || /^\s+$/.test(r) ? (a = '<br data-mce-bogus="1">', "TABLE" === n.nodeName ? r = "<tr><td>" + a + "</td></tr>" : /^(UL|OL)$/.test(n.nodeName) && (r = "<li>" + a + "</li>"), r = (i = fc(t)) && t.schema.isValidChild(n.nodeName.toLowerCase(), i.toLowerCase()) ? (r = a, t.dom.createHTML(i, dc(t), r)) : r || '<br data-mce-bogus="1">', Jp(t, r), t.fire("SetContent", o)) : ("raw" !== o.format && (r = qm({
                    validate: t.validate
                }, t.schema).serialize(t.parser.parse(r, {
                    isRootContent: !0,
                    insert: !0
                }))), o.content = lo(Tt.fromDom(n)) ? r : At.trim(r), Jp(t, o.content), o.no_events || t.fire("SetContent", o)), o.content);
                var t, n, r, o, i, a
            })
        },
        Zp = function(e, t) {
            return r = t, ((o = (n = e).dom).parentNode ? Br(Tt.fromDom(o.parentNode), function(e) {
                return !Pt(n, e) && r(e)
            }) : U.none()).isSome();
            var n, r, o
        },
        eh = function(e) {
            return m(e) ? e : A
        },
        th = function(e, t, n) {
            var r = t(e),
                o = eh(n);
            return r.orThunk(function() {
                return o(e) ? U.none() : function(e, t, n) {
                    for (var r = e.dom, o = eh(n); r.parentNode;) {
                        r = r.parentNode;
                        var i = Tt.fromDom(r),
                            a = t(i);
                        if (a.isSome()) return a;
                        if (o(i)) break
                    }
                    return U.none()
                }(e, t, o)
            })
        },
        nh = uf,
        rh = function(e, t, n) {
            var r = e.formatter.get(n);
            if (r)
                for (var o = 0; o < r.length; o++)
                    if (!1 === r[o].inherit && e.dom.is(t, r[o].selector)) return !0;
            return !1
        },
        oh = function(t, e, n, r) {
            var o = t.dom.getRoot();
            return e !== o && (e = t.dom.getParent(e, function(e) {
                return !!rh(t, e, n) || (e.parentNode === o || !!uh(t, e, n, r, !0))
            }), uh(t, e, n, r))
        },
        ih = function(e, t, n) {
            return !!nh(t, n.inline) || (!!nh(t, n.block) || (n.selector ? 1 === t.nodeType && e.is(t, n.selector) : void 0))
        },
        ah = function(e, t, n, r, o, i) {
            var a, u, s, c = n[r];
            if (n.onmatch) return n.onmatch(t, n, r);
            if (c)
                if ("undefined" == typeof c.length) {
                    for (a in c)
                        if (c.hasOwnProperty(a)) {
                            if (u = "attributes" === r ? e.getAttrib(t, a) : cf(e, t, a), o && !u && !n.exact) return;
                            if ((!o || n.exact) && !nh(u, sf(e, af(c[a], i), a))) return
                        }
                } else
                    for (s = 0; s < c.length; s++)
                        if ("attributes" === r ? e.getAttrib(t, c[s]) : cf(e, t, c[s])) return n;
            return n
        },
        uh = function(e, t, n, r, o) {
            var i, a, u, s, c = e.formatter.get(n),
                l = e.dom;
            if (c && t)
                for (a = 0; a < c.length; a++)
                    if (i = c[a], ih(e.dom, t, i) && ah(l, t, i, "attributes", o, r) && ah(l, t, i, "styles", o, r)) {
                        if (s = i.classes)
                            for (u = 0; u < s.length; u++)
                                if (!e.dom.hasClass(t, af(s[u], r))) return;
                        return i
                    }
        },
        sh = function(e, t, n, r) {
            if (r) return oh(e, r, t, n);
            if (r = e.selection.getNode(), oh(e, r, t, n)) return !0;
            var o = e.selection.getStart();
            return !(o === r || !oh(e, o, t, n))
        },
        ch = function(r, t) {
            var n = function(e) {
                return Pt(e, Tt.fromDom(r.getBody()))
            };
            return U.from(r.selection.getStart(!0)).bind(function(e) {
                return th(Tt.fromDom(e), function(n) {
                    return function(e, t) {
                        for (var n = 0; n < e.length; n++) {
                            var r = t(e[n], n);
                            if (r.isSome()) return r
                        }
                        return U.none()
                    }(t, function(e) {
                        return t = e, uh(r, n.dom, t) ? U.some(t) : U.none();
                        var t
                    })
                }, n)
            }).getOrNull()
        },
        lh = function(o, i, e) {
            return $(e, function(e, t) {
                var n, r = (n = t, F(o.formatter.get(n), function(t) {
                    var n = function(e) {
                        return 1 < e.length && "%" === e.charAt(0)
                    };
                    return F(["styles", "attributes"], function(e) {
                        return he(t, e).exists(function(e) {
                            var t = S(e) ? e : pe(e);
                            return F(t, n)
                        })
                    })
                }));
                return o.formatter.matchNode(i, t, {}, r) ? e.concat([t]) : e
            }, [])
        },
        fh = go,
        dh = "_mce_caret",
        mh = function(e) {
            return 0 < function(e) {
                for (var t = []; e;) {
                    if (3 === e.nodeType && e.nodeValue !== fh || 1 < e.childNodes.length) return [];
                    1 === e.nodeType && t.push(e), e = e.firstChild
                }
                return t
            }(e).length
        },
        gh = function(e) {
            if (e) {
                var t = new Gr(e, e);
                for (e = t.current(); e; e = t.next())
                    if (Fn(e)) return e
            }
            return null
        },
        ph = function(e) {
            var t = Tt.fromTag("span");
            return Jn(t, {
                id: dh,
                "data-mce-bogus": "1",
                "data-mce-type": "format-caret"
            }), e && mn(t, Tt.fromText(fh)), t
        },
        hh = function(e, t, n) {
            void 0 === n && (n = !0);
            var r, o, i, a, u, s, c, l, f = e.dom,
                d = e.selection;
            mh(t) ? up(e, !1, Tt.fromDom(t), n) : (r = d.getRng(), o = f.getParent(t, f.isBlock), i = r.startContainer, a = r.startOffset, u = r.endContainer, s = r.endOffset, (l = gh(t)) && l.nodeValue.charAt(0) === fh && l.deleteData(0, 1), c = l, f.remove(t, !0), i === c && 0 < a && r.setStart(c, a - 1), u === c && 0 < s && r.setEnd(c, s - 1), o && f.isEmpty(o) && gg(Tt.fromDom(o)), d.setRng(r))
        },
        vh = function(e, t, n) {
            void 0 === n && (n = !0);
            var r = e.dom,
                o = e.selection;
            if (t) hh(e, t, n);
            else if (!(t = zl(e.getBody(), o.getStart())))
                for (; t = r.get(dh);) hh(e, t, !1)
        },
        yh = function(e, t) {
            return e.appendChild(t), t
        },
        bh = function(e, t) {
            var n = q(e, function(e, t) {
                return yh(e, t.cloneNode(!1))
            }, t);
            return yh(n, n.ownerDocument.createTextNode(fh))
        },
        Ch = function(e, t, n, r) {
            var o, i, a, u, s, c, l, f, d, m, g, p, h, v = e.dom,
                y = e.selection,
                b = [],
                C = y.getRng(),
                w = C.startContainer,
                x = C.startOffset,
                S = w;
            for (3 === w.nodeType && (x !== w.nodeValue.length && (o = !0), S = S.parentNode); S;) {
                if (uh(e, S, t, n, r)) {
                    i = S;
                    break
                }
                S.nextSibling && (o = !0), b.push(S), S = S.parentNode
            }
            i && (o ? (a = y.getBookmark(), C.collapse(!0), u = Df(e, C, e.formatter.get(t), !0), u = pd(u), e.formatter.remove(t, n, u, r), y.moveToBookmark(a)) : (s = zl(e.getBody(), i), c = ph(!1).dom, m = c, g = null !== s ? s : i, p = (d = e).dom, (h = p.getParent(g, k(nf, d))) && p.isEmpty(h) ? g.parentNode.replaceChild(m, g) : (mg(Tt.fromDom(g)), p.isEmpty(g) ? g.parentNode.replaceChild(m, g) : p.insertAfter(m, g)), l = function(t, e, n, r, o, i) {
                var a = t.formatter,
                    u = t.dom,
                    s = H(ae(a.get()), function(e) {
                        return e !== r && !Ve(e, "removeformat")
                    }),
                    c = lh(t, n, s);
                if (0 < H(c, function(e) {
                        return !df(t, e, r)
                    }).length) {
                    var l = n.cloneNode(!1);
                    return u.add(e, l), a.remove(r, o, l, i), u.remove(l), U.some(l)
                }
                return U.none()
            }(e, c, i, t, n, r), f = bh(b.concat(l.toArray()), c), hh(e, s, !1), y.setCursorLocation(f, 1), v.isEmpty(i) && v.remove(i)))
        },
        wh = function(i) {
            i.on("mouseup keydown", function(e) {
                var t, n, r, o;
                t = i, n = e.keyCode, r = t.selection, o = t.getBody(), vh(t, null, !1), 8 !== n && 46 !== n || !r.isCollapsed() || r.getStart().innerHTML !== fh || vh(t, zl(o, r.getStart())), 37 !== n && 39 !== n || vh(t, zl(o, r.getStart()))
            })
        },
        xh = function(e, t) {
            return e.schema.getTextInlineElements().hasOwnProperty(Mt(t)) && !Ul(t.dom) && !Pn(t.dom)
        },
        Sh = {},
        Nh = xe,
        Eh = Ce;
    Km = function(e) {
        var t, n = e.selection.getRng(),
            r = Dn(["pre"]);
        n.collapsed || (t = e.selection.getSelectedBlocks(), Eh(Nh(Nh(t, r), function(e) {
            return r(e.previousSibling) && -1 !== Se(t, e.previousSibling)
        }), function(e) {
            var t, n;
            t = e.previousSibling, hu(n = e).remove(), hu(t).append("<br><br>").append(n.childNodes)
        }))
    }, Sh[Wm = "pre"] || (Sh[Wm] = []), Sh[Wm].push(Km);
    var kh = At.each,
        _h = function(e) {
            return Tn(e) && !Yl(e) && !Ul(e) && !Pn(e)
        },
        Ah = function(e, t) {
            for (var n = e; n; n = n[t]) {
                if (Fn(n) && 0 !== n.nodeValue.length) return e;
                if (Tn(n) && !Yl(n)) return n
            }
            return e
        },
        Rh = function(e, t, n) {
            var r, o, i = jm(e);
            if (t && n && (t = Ah(t, "previousSibling"), n = Ah(n, "nextSibling"), i.compare(t, n))) {
                for (r = t.nextSibling; r && r !== n;) r = (o = r).nextSibling, t.appendChild(o);
                return e.remove(n), At.each(At.grep(n.childNodes), function(e) {
                    t.appendChild(e)
                }), t
            }
            return n
        },
        Th = function(e, t, n, r) {
            var o;
            r && !1 !== t.merge_siblings && (o = Rh(e, tf(r), r), Rh(e, o, tf(o, !0)))
        },
        Dh = function(e, t, n) {
            kh(e.childNodes, function(e) {
                _h(e) && (t(e) && n(e), e.hasChildNodes() && Dh(e, t, n))
            })
        },
        Oh = function(t, n) {
            return function(e) {
                return !(!e || !cf(t, e, n))
            }
        },
        Bh = function(r, o, i) {
            return function(e) {
                var t, n;
                r.setStyle(e, o, i), "" === e.getAttribute("style") && e.removeAttribute("style"), t = r, "SPAN" === (n = e).nodeName && 0 === t.getAttribs(n).length && t.remove(n, !0)
            }
        },
        Ph = xr([{
            keep: []
        }, {
            rename: ["name"]
        }, {
            removed: []
        }]),
        Lh = /^(src|href|style)$/,
        Ih = At.each,
        Mh = uf,
        Fh = function(e, t, n) {
            return e.isChildOf(t, n) && t !== n && !e.isBlock(n)
        },
        Uh = function(e, t, n) {
            var r, o = t[n ? "startContainer" : "endContainer"],
                i = t[n ? "startOffset" : "endOffset"];
            return Tn(o) && (r = o.childNodes.length - 1, !n && i && i--, o = o.childNodes[r < i ? r : i]), Fn(o) && n && i >= o.nodeValue.length && (o = new Gr(o, e.getBody()).next() || o), Fn(o) && !n && 0 === i && (o = new Gr(o, e.getBody()).prev() || o), o
        },
        zh = function(e, t) {
            var n = t ? "firstChild" : "lastChild";
            if (/^(TR|TH|TD)$/.test(e.nodeName) && e[n]) {
                var r = e[n];
                return "TR" === e.nodeName && r[n] || r
            }
            return e
        },
        jh = function(e, t, n, r) {
            var o = e.create(n, r);
            return t.parentNode.insertBefore(o, t), o.appendChild(t), o
        },
        Hh = function(e, t, n, r, o) {
            var i = Tt.fromDom(t),
                a = Tt.fromDom(e.create(r, o)),
                u = (n ? Jt : Gt)(i);
            return gn(a, u), n ? (ln(i, a), dn(a, i)) : (fn(i, a), mn(a, i)), a.dom
        },
        Vh = function(e, t, n, r) {
            return !(t = tf(t, n, r)) || "BR" === t.nodeName || e.isBlock(t)
        },
        qh = function(e, r, o, t, i) {
            var n, a, u, s, c, l = e.dom;
            if (u = l, !(Mh(s = t, (c = r).inline) || Mh(s, c.block) || c.selector && (Tn(s) && u.is(s, c.selector)) || (a = t, r.links && "A" === a.nodeName))) return Ph.keep();
            var f, d, m, g, p, h, v, y = t;
            if (r.inline && "all" === r.remove && S(r.preserve_attributes)) {
                var b = H(l.getAttribs(y), function(e) {
                    return M(r.preserve_attributes, e.name.toLowerCase())
                });
                if (l.removeAllAttribs(y), Y(b, function(e) {
                        return l.setAttrib(y, e.name, e.value)
                    }), 0 < b.length) return Ph.rename("span")
            }
            if ("all" !== r.remove) {
                Ih(r.styles, function(e, t) {
                    e = sf(l, af(e, o), t + ""), N(t) && (t = e, i = null), !r.remove_similar && i && !Mh(cf(l, i, t), e) || l.setStyle(y, t, ""), n = !0
                }), n && "" === l.getAttrib(y, "style") && (y.removeAttribute("style"), y.removeAttribute("data-mce-style")), Ih(r.attributes, function(e, t) {
                    var n;
                    if (e = af(e, o), N(t) && (t = e, i = null), r.remove_similar || !i || Mh(l.getAttrib(i, t), e)) {
                        if ("class" === t && (e = l.getAttrib(y, t)) && (n = "", Y(e.split(/\s+/), function(e) {
                                /mce\-\w+/.test(e) && (n += (n ? " " : "") + e)
                            }), n)) return void l.setAttrib(y, t, n);
                        if (Lh.test(t) && y.removeAttribute("data-mce-" + t), "style" === t && Dn(["li"])(y) && "none" === l.getStyle(y, "list-style-type")) return y.removeAttribute(t), void l.setStyle(y, "list-style-type", "none");
                        "class" === t && y.removeAttribute("className"), y.removeAttribute(t)
                    }
                }), Ih(r.classes, function(e) {
                    e = af(e, o), i && !l.hasClass(i, e) || l.removeClass(y, e)
                });
                for (var C = l.getAttribs(y), w = 0; w < C.length; w++) {
                    var x = C[w].nodeName;
                    if (0 !== x.indexOf("_") && 0 !== x.indexOf("data-")) return Ph.keep()
                }
            }
            return "none" !== r.remove ? (f = e, m = r, p = (d = y).parentNode, h = f.dom, v = fc(f), m.block && (v ? p === h.getRoot() && (m.list_block && Mh(d, m.list_block) || Y(ie(d.childNodes), function(e) {
                rf(f, v, e.nodeName.toLowerCase()) ? g ? g.appendChild(e) : (g = jh(h, e, v), h.setAttribs(g, f.settings.forced_root_block_attrs)) : g = 0
            })) : h.isBlock(d) && !h.isBlock(p) && (Vh(h, d, !1) || Vh(h, d.firstChild, !0, !0) || d.insertBefore(h.create("br"), d.firstChild), Vh(h, d, !0) || Vh(h, d.lastChild, !1, !0) || d.appendChild(h.create("br")))), m.selector && m.inline && !Mh(m.inline, d) || h.remove(d, !0), Ph.removed()) : Ph.keep()
        },
        $h = function(t, e, n, r, o) {
            return qh(t, e, n, r, o).fold(A, function(e) {
                return t.dom.rename(r, e), !0
            }, R)
        },
        Wh = function(e, t, n, r, o, i, a, u) {
            var s, c, l, f = e.dom;
            if (n) {
                for (var d = n.parentNode, m = r.parentNode; m && m !== d; m = m.parentNode) {
                    s = f.clone(m, !1);
                    for (var g = 0; g < t.length && null !== (s = function(t, e, n, r) {
                            return qh(t, e, n, r, r).fold(E(r), function(e) {
                                return t.dom.createFragment().appendChild(r), t.dom.rename(r, e)
                            }, E(null))
                        }(e, t[g], u, s)); g++);
                    s && (c && s.appendChild(c), l = l || s, c = s)
                }!i || a.mixed && f.isBlock(n) || (r = f.split(n, r)), c && (o.parentNode.insertBefore(c, o), l.appendChild(o), a.inline && Th(f, a, 0, c))
            }
            return r
        },
        Kh = function(s, c, l, e, f) {
            var t, d = s.formatter.get(c),
                m = d[0],
                a = !0,
                u = s.dom,
                n = s.selection,
                g = function(e) {
                    var n, t, r, o, i, a, u = (t = e, r = c, o = l, i = f, Y(ff((n = s).dom, t.parentNode).reverse(), function(e) {
                        var t;
                        a || "_start" === e.id || "_end" === e.id || (t = uh(n, e, r, o, i)) && !1 !== t.split && (a = e)
                    }), a);
                    return Wh(s, d, u, e, e, !0, m, l)
                },
                p = function(e) {
                    var t, n, r = e.parentNode;
                    Fn(e) && hf(u, r) && $h(s, m, l, r, r), Tn(e) && u.getContentEditable(e) && (t = a, a = "true" === u.getContentEditable(e), n = !0);
                    var o = ie(e.childNodes);
                    if (a && !n)
                        for (var i = 0; i < d.length && !$h(s, d[i], l, e, e); i++);
                    if (m.deep && o.length) {
                        for (i = 0; i < o.length; i++) p(o[i]);
                        n && (a = t)
                    }
                },
                h = function(e) {
                    var t, n = u.get(e ? "_start" : "_end"),
                        r = n[e ? "firstChild" : "lastChild"];
                    return Yl(t = r) && Tn(t) && ("_start" === t.id || "_end" === t.id) && (r = r[e ? "firstChild" : "lastChild"]), Fn(r) && 0 === r.data.length && (r = e ? n.previousSibling || n.nextSibling : n.nextSibling || n.previousSibling), u.remove(n, !0), r
                },
                r = function(e) {
                    var t, n, r = Df(s, e, d, e.collapsed);
                    if (m.split) {
                        if (r = pd(r), (t = Uh(s, r, !0)) !== (n = Uh(s, r))) {
                            if (t = zh(t, !0), n = zh(n, !1), Fh(u, t, n)) {
                                var o = U.from(t.firstChild).getOr(t);
                                return g(Hh(u, o, !0, "span", {
                                    id: "_start",
                                    "data-mce-type": "bookmark"
                                })), void h(!0)
                            }
                            if (Fh(u, n, t)) {
                                o = U.from(n.lastChild).getOr(n);
                                return g(Hh(u, o, !1, "span", {
                                    id: "_end",
                                    "data-mce-type": "bookmark"
                                })), void h(!1)
                            }
                            t = jh(u, t, "span", {
                                id: "_start",
                                "data-mce-type": "bookmark"
                            }), n = jh(u, n, "span", {
                                id: "_end",
                                "data-mce-type": "bookmark"
                            });
                            var i = u.createRng();
                            i.setStartAfter(t), i.setEndBefore(n), Bf(u, i, function(e) {
                                Y(e, function(e) {
                                    Yl(e) || Yl(e.parentNode) || g(e)
                                })
                            }), g(t), g(n), t = h(!0), n = h()
                        } else t = n = g(t);
                        r.startContainer = t.parentNode ? t.parentNode : t, r.startOffset = u.nodeIndex(t), r.endContainer = n.parentNode ? n.parentNode : n, r.endOffset = u.nodeIndex(n) + 1
                    }
                    Bf(u, r, function(e) {
                        Y(e, function(t) {
                            p(t);
                            Y(["underline", "line-through", "overline"], function(e) {
                                Tn(t) && s.dom.getStyle(t, "text-decoration") === e && t.parentNode && lf(u, t.parentNode) === e && $h(s, {
                                    deep: !1,
                                    exact: !0,
                                    inline: "span",
                                    styles: {
                                        textDecoration: e
                                    }
                                }, null, t)
                            })
                        })
                    })
                };
            if (e) Zl(e) ? ((t = u.createRng()).setStartBefore(e), t.setEndAfter(e), r(t)) : r(e);
            else if ("false" !== u.getContentEditable(n.getNode())) n.isCollapsed() && m.inline && !Mf(s).length ? Ch(s, c, l, f) : (qf(n, !0, function() {
                Vf(s, r)
            }), m.inline && sh(s, c, l, n.getStart()) && ef(u, n, n.getRng()), s.nodeChanged());
            else {
                e = n.getNode();
                for (var o = 0; o < d.length && (!d[o].ceFalseOverride || !$h(s, d[o], l, e, e)); o++);
            }
        },
        Xh = At.each,
        Yh = function(i, e, a, u) {
            Xh(e, function(t) {
                var r, e, n, o;
                Xh(i.dom.select(t.inline, u), function(e) {
                    _h(e) && $h(i, t, a, e, t.exact ? e : null)
                }), r = i.dom, n = u, (e = t).clear_child_styles && (o = e.links ? "*:not(a)" : "*", kh(r.select(o, n), function(n) {
                    _h(n) && kh(e.styles, function(e, t) {
                        r.setStyle(n, t, "")
                    })
                }))
            })
        },
        Gh = At.each,
        Jh = ye,
        Qh = function(E, k, _, r) {
            var e, t, n, o, A = E.formatter.get(k),
                R = A[0],
                i = !r && E.selection.isCollapsed(),
                a = E.dom,
                u = E.selection,
                T = function(n, e) {
                    var t;
                    e = e || R, n && (e.onformat && e.onformat(n, e, _, r), Gh(e.styles, function(e, t) {
                        a.setStyle(n, t, af(e, _))
                    }), !e.styles || (t = a.getAttrib(n, "style")) && a.setAttrib(n, "data-mce-style", t), Gh(e.attributes, function(e, t) {
                        a.setAttrib(n, t, af(e, _))
                    }), Gh(e.classes, function(e) {
                        e = af(e, _), a.hasClass(n, e) || a.addClass(n, e)
                    }))
                },
                m = function(e, t) {
                    var n = !1;
                    return !!gf(R) && (Gh(e, function(e) {
                        if (!("collapsed" in e && e.collapsed !== i)) return a.is(t, e.selector) && !Ul(t) ? (T(t, e), !(n = !0)) : void 0
                    }), n)
                },
                s = function(S, e, t, c) {
                    var N = [],
                        l = !0,
                        f = R.inline || R.block,
                        d = S.create(f);
                    T(d), Bf(S, e, function(e) {
                        var u, s = function(e) {
                            var t = !1,
                                n = l,
                                r = e.nodeName.toLowerCase(),
                                o = e.parentNode.nodeName.toLowerCase();
                            if (Tn(e) && S.getContentEditable(e) && (n = l, l = "true" === S.getContentEditable(e), t = !0), Hn(e) && ! function(e, t, n, r) {
                                    if (e.getParam("format_empty_lines", !1, "boolean") && pf(t)) {
                                        var o = _e(_e({}, e.schema.getTextBlockElements()), {
                                                td: {},
                                                th: {},
                                                li: {},
                                                dt: {},
                                                dd: {},
                                                figcaption: {},
                                                caption: {},
                                                details: {},
                                                summary: {}
                                            }),
                                            i = Zp(Tt.fromDom(n), function(e) {
                                                return Ul(e.dom)
                                            });
                                        return ye(o, r) && Ko(Tt.fromDom(n.parentNode), !1) && !i
                                    }
                                    return !1
                                }(E, R, e, o)) return u = null, void(mf(R) && S.remove(e));
                            if (R.wrapper && uh(E, e, k, _)) u = null;
                            else {
                                if (l && !t && mf(R) && !R.wrapper && nf(E, r) && rf(E, o, f)) {
                                    var i = S.rename(e, f);
                                    return T(i), N.push(i), void(u = null)
                                }
                                if (gf(R)) {
                                    var a = m(A, e);
                                    if (Fn(e) && hf(S, e.parentNode) && m(A, e.parentNode), !Jh(R, "inline") || a) return void(u = null)
                                }!l || t || !rf(E, f, r) || !rf(E, o, f) || !c && 3 === e.nodeType && 1 === e.nodeValue.length && 65279 === e.nodeValue.charCodeAt(0) || Ul(e) || Jh(R, "inline") && S.isBlock(e) ? (u = null, Gh(At.grep(e.childNodes), s), t && (l = n), u = null) : (u || (u = S.clone(d, !1), e.parentNode.insertBefore(u, e), N.push(u)), u.appendChild(e))
                            }
                        };
                        Gh(e, s)
                    }), !0 === R.links && Gh(N, function(e) {
                        var t = function(e) {
                            "A" === e.nodeName && T(e, R), Gh(At.grep(e.childNodes), t)
                        };
                        t(e)
                    }), Gh(N, function(e) {
                        var n, t, r, o, i, a, u, s, c, l, f, d, m, g, p, h, v, y, b, C, w = function(e) {
                                var n = !1;
                                return Gh(e.childNodes, function(e) {
                                    if ((t = e) && 1 === t.nodeType && !Yl(t) && !Ul(t) && !Pn(t)) return n = e, !1;
                                    var t
                                }), n
                            },
                            x = (n = 0, Gh(e.childNodes, function(e) {
                                var t;
                                V(t = e) && Fn(t) && 0 === t.length || Yl(e) || n++
                            }), n);
                        !(1 < N.length) && S.isBlock(e) || 0 !== x ? (pf(R) || R.wrapper) && (R.exact || 1 !== x || ((C = w(y = e)) && !Yl(C) && ih(S, C, R) && (b = S.clone(C, !1), T(b), S.replace(b, y, !0), S.remove(C, !0)), e = b || y), Yh(E, A, _, e), g = R, p = k, h = _, uh(m = E, (v = e).parentNode, p, h) && $h(m, g, h, v) || g.merge_with_parents && m.dom.getParent(v.parentNode, function(e) {
                            if (uh(m, e, p, h)) return $h(m, g, h, v), !0
                        }), c = S, f = _, d = e, (l = R).styles && l.styles.backgroundColor && Dh(d, Oh(c, "fontSize"), Bh(c, "backgroundColor", af(l.styles.backgroundColor, f))), i = S, u = e, s = function(e) {
                            var t;
                            1 === e.nodeType && e.parentNode && 1 === e.parentNode.nodeType && (t = lf(i, e.parentNode), i.getStyle(e, "color") && t ? i.setStyle(e, "text-decoration", t) : i.getStyle(e, "text-decoration") === t && i.setStyle(e, "text-decoration", null))
                        }, (a = R).styles && (a.styles.color || a.styles.textDecoration) && (At.walk(u, s, "childNodes"), s(u)), t = S, o = e, "sub" !== (r = R).inline && "sup" !== r.inline || (Dh(o, Oh(t, "fontSize"), Bh(t, "fontSize", "")), t.remove(t.select("sup" === r.inline ? "sub" : "sup", o), !0)), Th(S, R, 0, e)) : S.remove(e, !0)
                    })
                };
            if ("false" !== a.getContentEditable(u.getNode())) {
                R && (r ? Zl(r) ? m(A, r) || ((e = a.createRng()).setStartBefore(r), e.setEndAfter(r), s(a, Df(E, e, A), 0, !0)) : s(a, r, 0, !0) : i && pf(R) && !Mf(E).length ? function(e, t, n) {
                    var r, o = e.selection,
                        i = o.getRng(),
                        a = i.startOffset,
                        u = i.startContainer.nodeValue,
                        s = zl(e.getBody(), o.getStart());
                    s && (r = gh(s));
                    var c, l, f, d, m = /[^\s\u00a0\u00ad\u200b\ufeff]/;
                    u && 0 < a && a < u.length && m.test(u.charAt(a)) && m.test(u.charAt(a - 1)) ? (c = o.getBookmark(), i.collapse(!0), l = Df(e, i, e.formatter.get(t)), l = pd(l), e.formatter.apply(t, n, l), o.moveToBookmark(c)) : (s && r.nodeValue === fh || (f = e.getDoc(), d = ph(!0).dom, r = (s = f.importNode(d, !0)).firstChild, i.insertNode(s), a = 1), e.formatter.apply(t, n, s), o.setCursorLocation(r, a))
                }(E, k, _) : (t = u.getNode(), n = A[0], E.settings.forced_root_block || !n.defaultBlock || a.getParent(t, a.isBlock) || Qh(E, n.defaultBlock), u.setRng(Ip(u.getRng())), qf(u, !0, function(e) {
                    Vf(E, function(e, t) {
                        var n = t ? e : Df(E, e, A);
                        s(a, n)
                    })
                }), ef(a, u, u.getRng()), E.nodeChanged()), o = E, Eh(Sh[k], function(e) {
                    e(o)
                }))
            } else {
                r = u.getNode();
                for (var c = 0, l = A.length; c < l; c++) {
                    var f = A[c];
                    if (f.ceFalseOverride && gf(f) && a.is(r, f.selector)) return void T(r, f)
                }
            }
        },
        Zh = function(r, e, t, n) {
            var o = ae(t.get()),
                i = {},
                a = {},
                u = H(ff(r.dom, e), function(e) {
                    return 1 === e.nodeType && !e.getAttribute("data-mce-bogus")
                });
            se(n, function(e, n) {
                At.each(u, function(t) {
                    return r.formatter.matchNode(t, n, {}, e.similar) ? (-1 === o.indexOf(n) && (Y(e.callbacks, function(e) {
                        e(!0, {
                            node: t,
                            format: n,
                            parents: u
                        })
                    }), i[n] = e.callbacks), a[n] = e.callbacks, !1) : !rh(r, t, n) && void 0
                })
            });
            var s = ev(t.get(), a, e, u);
            t.set(_e(_e({}, i), s))
        },
        ev = function(e, n, r, o) {
            return me(e, function(e, t) {
                return !!ve(n, t) || (Y(e, function(e) {
                    e(!1, {
                        node: r,
                        format: t,
                        parents: o
                    })
                }), !1)
            }).t
        },
        tv = function(e, o, i, a, t) {
            var n, r, u, s, c, l, f, d;
            return null === o.get() && (r = e, u = Ru({}), (n = o).set({}), r.on("NodeChange", function(e) {
                Zh(r, e.element, u, n.get())
            })), c = i, l = a, f = t, d = (s = o).get(), Y(c.split(","), function(e) {
                d[e] || (d[e] = {
                    similar: f,
                    callbacks: []
                }), d[e].callbacks.push(l)
            }), s.set(d), {
                unbind: function() {
                    return t = i, n = a, r = (e = o).get(), Y(t.split(","), function(e) {
                        r[e].callbacks = H(r[e].callbacks, function(e) {
                            return e !== n
                        }), 0 === r[e].callbacks.length && delete r[e]
                    }), void e.set(r);
                    var e, t, n, r
                }
            }
        },
        nv = function(e, t) {
            var n = (t || document).createDocumentFragment();
            return Y(e, function(e) {
                n.appendChild(e.dom)
            }), Tt.fromDom(n)
        },
        rv = function(e, t, n) {
            return {
                element: e,
                width: t,
                rows: n
            }
        },
        ov = function(e, t) {
            return {
                element: e,
                cells: t
            }
        },
        iv = function(e, t) {
            var n = parseInt(Qn(e, t), 10);
            return isNaN(n) ? 1 : n
        },
        av = function(e) {
            return $(e, function(e, t) {
                return t.cells.length > e ? t.cells.length : e
            }, 0)
        },
        uv = function(e, t) {
            for (var n = e.rows, r = 0; r < n.length; r++)
                for (var o = n[r].cells, i = 0; i < o.length; i++)
                    if (Pt(o[i], t)) return U.some({
                        x: i,
                        y: r
                    });
            return U.none()
        },
        sv = function(e, t, n, r, o) {
            for (var i = [], a = e.rows, u = n; u <= o; u++) {
                var s = a[u].cells,
                    c = t < r ? s.slice(t, r + 1) : s.slice(r, t + 1);
                i.push(ov(a[u].element, c))
            }
            return i
        },
        cv = function(e) {
            var o = rv(rs(e), 0, []);
            return Y($u(e, "tr"), function(n, r) {
                Y($u(n, "td,th"), function(e, t) {
                    ! function(e, t, n, r, o) {
                        for (var i = iv(o, "rowspan"), a = iv(o, "colspan"), u = e.rows, s = n; s < n + i; s++) {
                            u[s] || (u[s] = ov(os(r), []));
                            for (var c = t; c < t + a; c++) {
                                u[s].cells[c] = s === n && c === t ? o : rs(o)
                            }
                        }
                    }(o, function(e, t, n) {
                        for (; r = t, o = n, ((i = e.rows)[o] ? i[o].cells : [])[r];) t++;
                        var r, o, i;
                        return t
                    }(o, t, r), r, n, e)
                })
            }), rv(o.element, av(o.rows), o.rows)
        },
        lv = function(e) {
            return n = z((t = e).rows, function(e) {
                var t = z(e.cells, function(e) {
                        var t = os(e);
                        return er(t, "colspan"), er(t, "rowspan"), t
                    }),
                    n = rs(e.element);
                return gn(n, t), n
            }), r = rs(t.element), o = Tt.fromTag("tbody"), gn(o, n), mn(r, o), r;
            var t, n, r, o
        },
        fv = function(l, e, t) {
            return uv(l, e).bind(function(c) {
                return uv(l, t).map(function(e) {
                    return t = l, r = e, o = (n = c).x, i = n.y, a = r.x, u = r.y, s = i < u ? sv(t, o, i, a, u) : sv(t, o, u, a, i), rv(t.element, av(s), s);
                    var t, n, r, o, i, a, u, s
                })
            })
        },
        dv = function(t, n) {
            return W(t, function(e) {
                return "li" === Mt(e) && zf(e, n)
            }).fold(E([]), function(e) {
                return W(t, function(e) {
                    return "ul" === Mt(e) || "ol" === Mt(e)
                }).map(function(e) {
                    var t = Tt.fromTag(Mt(e)),
                        n = ge(ir(e), function(e, t) {
                            return qe(t, "list-style")
                        });
                    return tr(t, n), [Tt.fromTag("li"), t]
                }).getOr([])
            })
        },
        mv = function(e, t) {
            var n, r = Tt.fromDom(t.commonAncestorContainer),
                o = yg(r, e),
                i = H(o, function(e) {
                    return ro(e) || to(e)
                }),
                a = dv(o, t),
                u = i.concat(a.length ? a : uo(n = r) ? Kt(n).filter(ao).fold(E([]), function(e) {
                    return [n, e]
                }) : ao(n) ? [n] : []);
            return z(u, rs)
        },
        gv = function() {
            return nv([])
        },
        pv = function(e, t) {
            return n = Tt.fromDom(t.cloneContents()), r = mv(e, t), o = $(r, function(e, t) {
                return mn(t, e), t
            }, n), 0 < r.length ? nv([o]) : o;
            var n, r, o
        },
        hv = function(e, o) {
            return t = e, n = o[0], Pr(n, "table", k(Pt, t)).bind(function(e) {
                var t = o[0],
                    n = o[o.length - 1],
                    r = cv(e);
                return fv(r, t, n).map(function(e) {
                    return nv([lv(e)])
                })
            }).getOrThunk(gv);
            var t, n
        },
        vv = function(e, t) {
            var n, r, o = If(t, e);
            return 0 < o.length ? hv(e, o) : (n = e, 0 < (r = t).length && r[0].collapsed ? gv() : pv(n, r[0]))
        },
        yv = function(e, t) {
            return 0 <= t && t < e.length && Jl(e.charAt(t))
        },
        bv = function(e, t) {
            var n = ho(e.innerText);
            return t ? n.replace(/^[ \f\n\r\t\v]+/, "") : n
        },
        Cv = function(f) {
            return U.from(f.selection.getRng()).map(function(e) {
                var t = U.from(f.dom.getParent(e.commonAncestorContainer, f.dom.isBlock)),
                    n = f.getBody(),
                    r = t.map(function(e) {
                        return e.nodeName
                    }).getOr("div").toLowerCase(),
                    o = St.browser.isIE() && "pre" !== r,
                    i = f.dom.add(n, r, {
                        "data-mce-bogus": "all",
                        style: "overflow: hidden; opacity: 0;"
                    }, e.cloneContents()),
                    a = bv(i, o),
                    u = ho(i.textContent);
                if (f.dom.remove(i), yv(u, 0) || yv(u, u.length - 1)) {
                    var s = t.getOr(n),
                        c = bv(s, o),
                        l = c.indexOf(a);
                    return -1 === l ? a : (yv(c, l - 1) ? " " : "") + a + (yv(c, l + a.length) ? " " : "")
                }
                return a
            }).getOr("")
        },
        wv = function(e, t, n) {
            if (void 0 === n && (n = {}), n.get = !0, n.format = t, n.selection = !0, (n = e.fire("BeforeGetContent", n)).isDefaultPrevented()) return e.fire("GetContent", n), n.content;
            if ("text" === n.format) return Cv(e);
            n.getInner = !0;
            var r, o, i, a, u, s, c, l = (o = n, i = (r = e).selection.getRng(), a = r.dom.create("body"), u = r.selection.getSel(), s = km(r, Pf(u)), (c = o.contextual ? vv(Tt.fromDom(r.getBody()), s).dom : i.cloneContents()) && a.appendChild(c), r.selection.serializer.serialize(a, o));
            return "tree" === n.format ? l : (n.content = e.selection.isCollapsed() ? "" : l, e.fire("GetContent", n), n.content)
        },
        xv = function(e) {
            return Tn(e) ? e.outerHTML : Fn(e) ? fi.encodeRaw(e.data, !1) : Un(e) ? "\x3c!--" + e.data + "--\x3e" : ""
        },
        Sv = function(e, t, n) {
            var r, o = function(e) {
                var t, n = document.createElement("div"),
                    r = document.createDocumentFragment();
                for (e && (n.innerHTML = e); t = n.firstChild;) r.appendChild(t);
                return r
            }(t);
            e.hasChildNodes() && n < e.childNodes.length ? (r = e.childNodes[n]).parentNode.insertBefore(o, r) : e.appendChild(o)
        },
        Nv = function(e, o) {
            var i = 0;
            Y(e, function(e) {
                var t, n, r;
                0 === e[0] ? i++ : 1 === e[0] ? (Sv(o, e[1], i), i++) : 2 === e[0] && (n = i, (t = o).hasChildNodes() && n < t.childNodes.length && (r = t.childNodes[n]).parentNode.removeChild(r))
            })
        },
        Ev = function(e, t) {
            var g, p, n, h, v, c, y, l, r, o = z(ie(t.childNodes), xv);
            return Nv((p = e, n = (g = o).length + p.length + 2, h = new Array(n), v = new Array(n), c = function(e, t, n, r, o) {
                var i = l(e, t, n, r);
                if (null === i || i.start === t && i.diag === t - r || i.end === e && i.diag === e - n)
                    for (var a = e, u = n; a < t || u < r;) a < t && u < r && g[a] === p[u] ? (o.push([0, g[a]]), ++a, ++u) : r - n < t - e ? (o.push([2, g[a]]), ++a) : (o.push([1, p[u]]), ++u);
                else {
                    c(e, i.start, n, i.start - i.diag, o);
                    for (var s = i.start; s < i.end; ++s) o.push([0, g[s]]);
                    c(i.end, t, i.end - i.diag, r, o)
                }
            }, y = function(e, t, n, r) {
                for (var o = e; o - t < r && o < n && g[o] === p[o - t];) ++o;
                return {
                    start: e,
                    end: o,
                    diag: t
                }
            }, l = function(e, t, n, r) {
                var o = t - e,
                    i = r - n;
                if (0 == o || 0 == i) return null;
                var a, u, s, c, l, f = o - i,
                    d = i + o,
                    m = (d % 2 == 0 ? d : 1 + d) / 2;
                for (h[1 + m] = e, v[1 + m] = t + 1, a = 0; a <= m; ++a) {
                    for (u = -a; u <= a; u += 2) {
                        for (s = u + m, u === -a || u !== a && h[s - 1] < h[s + 1] ? h[s] = h[s + 1] : h[s] = h[s - 1] + 1, l = (c = h[s]) - e + n - u; c < t && l < r && g[c] === p[l];) h[s] = ++c, ++l;
                        if (f % 2 != 0 && f - a <= u && u <= f + a && v[s - f] <= h[s]) return y(v[s - f], u + e - n, t, r)
                    }
                    for (u = f - a; u <= f + a; u += 2) {
                        for (s = u + m - f, u === f - a || u !== f + a && v[s + 1] <= v[s - 1] ? v[s] = v[s + 1] - 1 : v[s] = v[s - 1], l = (c = v[s] - 1) - e + n - u; e <= c && n <= l && g[c] === p[l];) v[s] = c--, l--;
                        if (f % 2 == 0 && -a <= u && u <= a && v[s] <= h[s + f]) return y(v[s], u + e - n, t, r)
                    }
                }
            }, r = [], c(0, g.length, 0, p.length, r), r), t), t
        },
        kv = Ru(U.none()),
        _v = function(n) {
            var e, t = (e = n.getBody(), H(z(ie(e.childNodes), xv), function(e) {
                    return 0 < e.length
                })),
                r = J(t, function(e) {
                    var t = Mm(n.serializer, e);
                    return 0 < t.length ? [t] : []
                }),
                o = r.join("");
            return -1 !== o.indexOf("</iframe>") ? {
                type: "fragmented",
                fragments: r,
                content: "",
                bookmark: null,
                beforeBookmark: null
            } : {
                type: "complete",
                fragments: null,
                content: o,
                bookmark: null,
                beforeBookmark: null
            }
        },
        Av = function(e, t, n) {
            "fragmented" === t.type ? Ev(t.fragments, e.getBody()) : e.setContent(t.content, {
                format: "raw"
            }), e.selection.moveToBookmark(n ? t.beforeBookmark : t.bookmark)
        },
        Rv = function(e) {
            return "fragmented" === e.type ? e.fragments.join("") : e.content
        },
        Tv = function(e) {
            var t = Tt.fromTag("body", kv.get().getOrThunk(function() {
                var e = document.implementation.createHTMLDocument("undo");
                return kv.set(U.some(e)), e
            }));
            return ts(t, Rv(e)), Y($u(t, "*[data-mce-bogus]"), vn), t.dom.innerHTML
        },
        Dv = function(e, t) {
            return !(!e || !t) && (r = t, Rv(e) === Rv(r) || (n = t, Tv(e) === Tv(n)));
            var n, r
        },
        Ov = function(e) {
            return 0 === e.get()
        },
        Bv = function(e, t, n) {
            Ov(n) && (e.typing = t)
        },
        Pv = function(e, t) {
            e.typing && (Bv(e, !1, t), e.add())
        },
        Lv = function(f) {
            return {
                undoManager: {
                    beforeChange: function(e, t) {
                        return n = f, r = t, void(Ov(e) && r.set(U.some(uc(n.selection))));
                        var n, r
                    },
                    addUndoLevel: function(e, t, n, r, o, i) {
                        return function(e, t, n, r, o, i, a) {
                            var u = _v(e);
                            if (i = i || {}, i = At.extend(i, u), !1 === Ov(r) || e.removed) return null;
                            var s = t.data[n.get()];
                            if (e.fire("BeforeAddUndo", {
                                    level: i,
                                    lastLevel: s,
                                    originalEvent: a
                                }).isDefaultPrevented()) return null;
                            if (s && Dv(s, i)) return null;
                            t.data[n.get()] && o.get().each(function(e) {
                                t.data[n.get()].beforeBookmark = e
                            });
                            var c = e.getParam("custom_undo_redo_levels", 0, "number");
                            if (c && t.data.length > c) {
                                for (var l = 0; l < t.data.length - 1; l++) t.data[l] = t.data[l + 1];
                                t.data.length--, n.set(t.data.length)
                            }
                            i.bookmark = uc(e.selection), n.get() < t.data.length - 1 && (t.data.length = n.get() + 1), t.data.push(i), n.set(t.data.length - 1);
                            var f = {
                                level: i,
                                lastLevel: s,
                                originalEvent: a
                            };
                            return 0 < n.get() ? (e.setDirty(!0), e.fire("AddUndo", f), e.fire("change", f)) : e.fire("AddUndo", f), i
                        }(f, e, t, n, r, o, i)
                    },
                    undo: function(e, t, n) {
                        return r = f, i = t, a = n, (o = e).typing && (o.add(), o.typing = !1, Bv(o, !1, i)), 0 < a.get() && (a.set(a.get() - 1), u = o.data[a.get()], Av(r, u, !0), r.setDirty(!0), r.fire("Undo", {
                            level: u
                        })), u;
                        var r, o, i, a, u
                    },
                    redo: function(e, t) {
                        return n = f, o = t, (r = e).get() < o.length - 1 && (r.set(r.get() + 1), i = o[r.get()], Av(n, i, !1), n.setDirty(!0), n.fire("Redo", {
                            level: i
                        })), i;
                        var n, r, o, i
                    },
                    clear: function(e, t) {
                        return n = f, o = t, (r = e).data = [], o.set(0), r.typing = !1, void n.fire("ClearUndos");
                        var n, r, o
                    },
                    reset: function(e) {
                        return (t = e).clear(), void t.add();
                        var t
                    },
                    hasUndo: function(e, t) {
                        return n = f, r = e, 0 < t.get() || r.typing && r.data[0] && !Dv(_v(n), r.data[0]);
                        var n, r
                    },
                    hasRedo: function(e, t) {
                        return n = e, t.get() < n.data.length - 1 && !n.typing;
                        var n
                    },
                    transact: function(e, t, n) {
                        return o = n, Pv(r = e, t), r.beforeChange(), r.ignore(o), r.add();
                        var r, o
                    },
                    ignore: function(e, t) {
                        try {
                            e.set(e.get() + 1), t()
                        } finally {
                            e.set(e.get() - 1)
                        }
                    },
                    extra: function(e, t, n, r) {
                        return o = f, a = t, u = n, s = r, void((i = e).transact(u) && (c = i.data[a.get()].bookmark, l = i.data[a.get() - 1], Av(o, l, !0), i.transact(s) && (i.data[a.get() - 1].beforeBookmark = c)));
                        var o, i, a, u, s, c, l
                    }
                },
                formatter: {
                    match: function(e, t, n) {
                        return sh(f, e, t, n)
                    },
                    matchAll: function(e, t) {
                        return o = e, i = t, a = [], u = {}, n = (r = f).selection.getStart(), r.dom.getParent(n, function(e) {
                            for (var t = 0; t < o.length; t++) {
                                var n = o[t];
                                !u[n] && uh(r, e, n, i) && (u[n] = !0, a.push(n))
                            }
                        }, r.dom.getRoot()), a;
                        var r, o, i, a, u, n
                    },
                    matchNode: function(e, t, n, r) {
                        return uh(f, e, t, n, r)
                    },
                    canApply: function(e) {
                        return function(e, t) {
                            var n, r, o, i, a, u = e.formatter.get(t),
                                s = e.dom;
                            if (u)
                                for (n = e.selection.getStart(), r = ff(s, n), i = u.length - 1; 0 <= i; i--) {
                                    if (!(a = u[i].selector) || u[i].defaultBlock) return !0;
                                    for (o = r.length - 1; 0 <= o; o--)
                                        if (s.is(r[o], a)) return !0
                                }
                            return !1
                        }(f, e)
                    },
                    closest: function(e) {
                        return ch(f, e)
                    },
                    apply: function(e, t, n) {
                        return Qh(f, e, t, n)
                    },
                    remove: function(e, t, n, r) {
                        return Kh(f, e, t, n, r)
                    },
                    toggle: function(e, t, n) {
                        return o = e, i = t, a = n, u = (r = f).formatter.get(o), void(!sh(r, o, i, a) || "toggle" in u[0] && !u[0].toggle ? Qh : Kh)(r, o, i, a);
                        var r, o, i, a, u
                    },
                    formatChanged: function(e, t, n, r) {
                        return tv(f, e, t, n, r)
                    }
                },
                editor: {
                    getContent: function(e, t) {
                        return n = f, r = e, o = t, U.from(n.getBody()).fold(E("tree" === r.format ? new Tm("body", 11) : ""), function(e) {
                            return Um(n, r, o, e)
                        });
                        var n, r, o
                    },
                    setContent: function(e, t) {
                        return Qp(f, e, t)
                    },
                    insertContent: function(e, t) {
                        return Kp(f, e, t)
                    },
                    addVisual: function(e) {
                        return t = e, a = (i = f).dom, n = V(t) ? t : i.getBody(), d(i.hasVisual) && (i.hasVisual = i.getParam("visual", !0, "boolean")), Y(a.select("table,a", n), function(e) {
                            switch (e.nodeName) {
                                case "TABLE":
                                    var t = i.getParam("visual_table_class", "mce-item-table", "string"),
                                        n = a.getAttrib(e, "border");
                                    n && "0" !== n || !i.hasVisual ? a.removeClass(e, t) : a.addClass(e, t);
                                    break;
                                case "A":
                                    var r, o;
                                    a.getAttrib(e, "href") || (r = a.getAttrib(e, "name") || e.id, o = i.getParam("visual_anchor_class", "mce-item-anchor", "string"), r && i.hasVisual ? a.addClass(e, o) : a.removeClass(e, o))
                            }
                        }), void i.fire("VisualAid", {
                            element: t,
                            hasVisual: i.hasVisual
                        });
                        var i, t, a, n
                    }
                },
                selection: {
                    getContent: function(e, t) {
                        return wv(f, e, t)
                    }
                },
                raw: {
                    getModel: function() {
                        return U.none()
                    }
                }
            }
        },
        Iv = function(e) {
            return ve(e.plugins, "rtc")
        },
        Mv = function(e) {
            var c = e;
            return he(e.plugins, "rtc").bind(function(e) {
                return U.from(e.setup)
            }).fold(function() {
                return c.rtcInstance = Lv(e), U.none()
            }, function(e) {
                return U.some(e().then(function(e) {
                    var t, o, n, i, a, r, u, s;
                    return c.rtcInstance = (o = function(e) {
                        return w(e) ? e : {}
                    }, n = b("Unimplemented feature for rtc"), i = (t = e).undoManager, a = t.formatter, r = t.editor, u = t.selection, s = t.raw, {
                        undoManager: {
                            beforeChange: te,
                            addUndoLevel: n,
                            undo: function() {
                                return i.undo()
                            },
                            redo: function() {
                                return i.redo()
                            },
                            clear: function() {
                                return i.clear()
                            },
                            reset: function() {
                                return i.reset()
                            },
                            hasUndo: function() {
                                return i.hasUndo()
                            },
                            hasRedo: function() {
                                return i.hasRedo()
                            },
                            transact: function(e, t, n) {
                                return i.transact(n)
                            },
                            ignore: function(e, t) {
                                return i.ignore(t)
                            },
                            extra: function(e, t, n, r) {
                                return i.extra(n, r)
                            }
                        },
                        formatter: {
                            match: function(e, t, n) {
                                return a.match(e, o(t))
                            },
                            matchAll: n,
                            matchNode: n,
                            canApply: function(e) {
                                return a.canApply(e)
                            },
                            closest: function(e) {
                                return a.closest(e)
                            },
                            apply: function(e, t, n) {
                                return a.apply(e, o(t))
                            },
                            remove: function(e, t, n, r) {
                                return a.remove(e, o(t))
                            },
                            toggle: function(e, t, n) {
                                return a.toggle(e, o(t))
                            },
                            formatChanged: function(e, t, n, r) {
                                return a.formatChanged(t, n, r)
                            }
                        },
                        editor: {
                            getContent: function(e, t) {
                                return r.getContent(e)
                            },
                            setContent: function(e, t) {
                                return r.setContent(e, t)
                            },
                            insertContent: function(e, t) {
                                return r.insertContent(e)
                            },
                            addVisual: te
                        },
                        selection: {
                            getContent: function(e, t) {
                                return u.getContent(t)
                            }
                        },
                        raw: {
                            getModel: function() {
                                return U.some(s.getRawModel())
                            }
                        }
                    }), e.rtc.isRemote
                }, function(e) {
                    var t, n;
                    return c.rtcInstance = (t = E(null), n = E(""), {
                        undoManager: {
                            beforeChange: te,
                            addUndoLevel: t,
                            undo: t,
                            redo: t,
                            clear: te,
                            reset: te,
                            hasUndo: A,
                            hasRedo: A,
                            transact: t,
                            ignore: te,
                            extra: te
                        },
                        formatter: {
                            match: A,
                            matchAll: E([]),
                            matchNode: A,
                            canApply: A,
                            closest: n,
                            apply: te,
                            remove: te,
                            toggle: te,
                            formatChanged: E({
                                unbind: te
                            })
                        },
                        editor: {
                            getContent: n,
                            setContent: n,
                            insertContent: te,
                            addVisual: te
                        },
                        selection: {
                            getContent: n
                        },
                        raw: {
                            getModel: E(U.none())
                        }
                    }), Mr.reject(e)
                }))
            })
        },
        Fv = function(e) {
            return e.rtcInstance ? e.rtcInstance : Lv(e)
        },
        Uv = function(e) {
            var t = e.rtcInstance;
            if (t) return t;
            throw new Error("Failed to get RTC instance not yet initialized.")
        },
        zv = function(e, t) {
            void 0 === t && (t = {});
            var n, r, o = t.format ? t.format : "html";
            return n = o, r = t, Uv(e).selection.getContent(n, r)
        },
        jv = function(e) {
            return 0 === e.dom.length ? (hn(e), U.none()) : U.some(e)
        },
        Hv = function(e, t, s, c) {
            e.bind(function(u) {
                return (c ? Yg : Xg)(u.dom, c ? u.dom.length : 0), t.filter(jt).map(function(e) {
                    return t = e, n = s, r = c, o = u.dom, i = t.dom, a = r ? o.length : i.length, void(r ? (Gg(o, i, !1, !r), n.setStart(i, a)) : (Gg(i, o, !1, !r), n.setEnd(i, a)));
                    var t, n, r, o, i, a
                })
            }).orThunk(function() {
                var e;
                return (e = c, t.filter(function(e) {
                    return Qf.isBookmarkNode(e.dom)
                }).bind(e ? Yt : Xt).or(t).filter(jt)).map(function(e) {
                    return r = c, void Kt(n = e).each(function(e) {
                        var t = n.dom;
                        r && Ug(e, Ms(t, 0)) ? Xg(t, 0) : !r && zg(e, Ms(t, t.length)) && Yg(t, t.length)
                    });
                    var n, r
                })
            })
        },
        Vv = function(e, t, n) {
            void 0 === n && (n = {});
            var r, o, i = (r = t, _e(_e({
                format: "html"
            }, n), {
                set: !0,
                selection: !0,
                content: r
            }));
            i.no_events || !(i = e.fire("BeforeSetContent", i)).isDefaultPrevented() ? (n.content = function(e, t) {
                if ("raw" === t.format) return t.content;
                var n = e.selection.getRng(),
                    r = e.dom.getParent(n.commonAncestorContainer, e.dom.isBlock),
                    o = r ? {
                        context: r.nodeName.toLowerCase()
                    } : {},
                    i = e.parser.parse(t.content, _e(_e({
                        isRootContent: !0,
                        forced_root_block: !1
                    }, o), t));
                return qm({
                    validate: e.validate
                }, e.schema).serialize(i)
            }(e, i), function(e, t) {
                var n = U.from(t.firstChild).map(Tt.fromDom),
                    r = U.from(t.lastChild).map(Tt.fromDom);
                e.deleteContents(), e.insertNode(t);
                var o = n.bind(Xt).filter(jt).bind(jv),
                    i = r.bind(Yt).filter(jt).bind(jv);
                Hv(o, n, e, !0), Hv(i, r, e, !1), e.collapse(!1)
            }(o = e.selection.getRng(), o.createContextualFragment(n.content)), e.selection.setRng(o), Hd(e, o), i.no_events || e.fire("SetContent", i)) : e.fire("SetContent", i)
        },
        qv = function(e, t, n) {
            var r;
            e && e.hasOwnProperty(t) && (0 === (r = H(e[t], function(e) {
                return e !== n
            })).length ? delete e[t] : e[t] = r)
        };
    var $v, Wv, Kv = function(e) {
            return !!e.select
        },
        Xv = function(e) {
            return !(!e || !e.ownerDocument) && It(Tt.fromDom(e.ownerDocument), Tt.fromDom(e))
        },
        Yv = function(u, s, e, c) {
            var l, f, i, n, a, d, r = function(e, t) {
                    return a || (a = {}, d = {}, n.on("NodeChange", function(e) {
                        var n = e.element,
                            r = i.getParents(n, null, i.getRoot()),
                            o = {};
                        At.each(a, function(e, n) {
                            At.each(r, function(t) {
                                if (i.is(t, n)) return d[n] || (At.each(e, function(e) {
                                    e(!0, {
                                        node: t,
                                        selector: n,
                                        parents: r
                                    })
                                }), d[n] = e), o[n] = e, !1
                            })
                        }), At.each(d, function(e, t) {
                            o[t] || (delete d[t], At.each(e, function(e) {
                                e(!1, {
                                    node: n,
                                    selector: t,
                                    parents: r
                                })
                            }))
                        })
                    })), a[e] || (a[e] = []), a[e].push(t), {
                        unbind: function() {
                            qv(a, e, t), qv(d, e, t)
                        }
                    }
                },
                t = function(e, t) {
                    return Vv(c, e, t)
                },
                o = function(e) {
                    var t = g();
                    t.collapse(!!e), p(t)
                },
                m = function() {
                    return s.getSelection ? s.getSelection() : s.document.selection
                },
                g = function() {
                    var e, t, n, r = function(e, t, n) {
                            try {
                                return t.compareBoundaryPoints(e, n)
                            } catch (r) {
                                return -1
                            }
                        },
                        o = s.document;
                    if (c.bookmark !== undefined && !1 === bm(c)) {
                        var i = am(c);
                        if (i.isSome()) return i.map(function(e) {
                            return km(c, [e])[0]
                        }).getOr(o.createRange())
                    }
                    try {
                        (e = m()) && !Rn(e.anchorNode) && (t = 0 < e.rangeCount ? e.getRangeAt(0) : e.createRange ? e.createRange() : o.createRange(), t = km(c, [t])[0])
                    } catch (a) {}
                    return (t = t || (o.createRange ? o.createRange() : o.body.createTextRange())).setStart && 9 === t.startContainer.nodeType && t.collapsed && (n = u.getRoot(), t.setStart(n, 0), t.setEnd(n, 0)), l && f && (0 === r(t.START_TO_START, t, l) && 0 === r(t.END_TO_END, t, l) ? t = f : f = l = null), t
                },
                p = function(e, t) {
                    var n;
                    if ((r = e) && (Kv(r) || Xv(r.startContainer) && Xv(r.endContainer))) {
                        var r, o = Kv(e) ? e : null;
                        if (o) {
                            f = null;
                            try {
                                o.select()
                            } catch (a) {}
                        } else {
                            var i = m();
                            if (e = c.fire("SetSelectionRange", {
                                    range: e,
                                    forward: t
                                }).range, i) {
                                f = e;
                                try {
                                    i.removeAllRanges(), i.addRange(e)
                                } catch (a) {}!1 === t && i.extend && (i.collapse(e.endContainer, e.endOffset), i.extend(e.startContainer, e.startOffset)), l = 0 < i.rangeCount ? i.getRangeAt(0) : null
                            }
                            e.collapsed || e.startContainer !== e.endContainer || !i.setBaseAndExtent || St.ie || e.endOffset - e.startOffset < 2 && e.startContainer.hasChildNodes() && (n = e.startContainer.childNodes[e.startOffset]) && "IMG" === n.tagName && (i.setBaseAndExtent(e.startContainer, e.startOffset, e.endContainer, e.endOffset), i.anchorNode === e.startContainer && i.focusNode === e.endContainer || i.setBaseAndExtent(n, 0, n, 1)), c.fire("AfterSetSelectionRange", {
                                range: e,
                                forward: t
                            })
                        }
                    }
                },
                h = function() {
                    var e = m(),
                        t = null == e ? void 0 : e.anchorNode,
                        n = null == e ? void 0 : e.focusNode;
                    if (!e || !t || !n || Rn(t) || Rn(n)) return !0;
                    var r = u.createRng();
                    r.setStart(t, e.anchorOffset), r.collapse(!0);
                    var o = u.createRng();
                    return o.setStart(n, e.focusOffset), o.collapse(!0), r.compareBoundaryPoints(r.START_TO_START, o) <= 0
                },
                v = {
                    bookmarkManager: null,
                    controlSelection: null,
                    dom: i = u,
                    win: s,
                    serializer: e,
                    editor: n = c,
                    collapse: o,
                    setCursorLocation: function(e, t) {
                        var n = u.createRng();
                        V(e) && V(t) ? (n.setStart(e, t), n.setEnd(e, t), p(n), o(!1)) : (jf(u, n, c.getBody(), !0), p(n))
                    },
                    getContent: function(e) {
                        return zv(c, e)
                    },
                    setContent: t,
                    getBookmark: function(e, t) {
                        return y.getBookmark(e, t)
                    },
                    moveToBookmark: function(e) {
                        return y.moveToBookmark(e)
                    },
                    select: function(e, t) {
                        var r, n, o;
                        return r = u, n = e, o = t, U.from(n).map(function(e) {
                            var t = r.nodeIndex(e),
                                n = r.createRng();
                            return n.setStart(e.parentNode, t), n.setEnd(e.parentNode, t + 1), o && (jf(r, n, e, !0), jf(r, n, e, !1)), n
                        }).each(p), e
                    },
                    isCollapsed: function() {
                        var e = g(),
                            t = m();
                        return !(!e || e.item) && (e.compareEndPoints ? 0 === e.compareEndPoints("StartToEnd", e) : !t || e.collapsed)
                    },
                    isForward: h,
                    setNode: function(e) {
                        return t(u.getOuterHTML(e)), e
                    },
                    getNode: function() {
                        return function(e, t) {
                            var n, r;
                            if (!t) return e;
                            n = t.startContainer, r = t.endContainer;
                            var o = t.startOffset,
                                i = t.endOffset,
                                a = t.commonAncestorContainer;
                            return !t.collapsed && (n === r && i - o < 2 && n.hasChildNodes() && (a = n.childNodes[o]), 3 === n.nodeType && 3 === r.nodeType && (n = n.length === o ? Em(n.nextSibling, !0) : n.parentNode, r = 0 === i ? Em(r.previousSibling, !1) : r.parentNode, n && n === r)) ? n : a && 3 === a.nodeType ? a.parentNode : a
                        }(c.getBody(), g())
                    },
                    getSel: m,
                    setRng: p,
                    getRng: g,
                    getStart: function(e) {
                        return Sm(c.getBody(), g(), e)
                    },
                    getEnd: function(e) {
                        return Nm(c.getBody(), g(), e)
                    },
                    getSelectedBlocks: function(e, t) {
                        return function(e, t, n, r) {
                            var o, i = [],
                                a = e.getRoot();
                            if (n = e.getParent(n || Sm(a, t, t.collapsed), e.isBlock), r = e.getParent(r || Nm(a, t, t.collapsed), e.isBlock), n && n !== a && i.push(n), n && r && n !== r)
                                for (var u = new Gr(o = n, a);
                                    (o = u.next()) && o !== r;) e.isBlock(o) && i.push(o);
                            return r && n !== r && r !== a && i.push(r), i
                        }(u, g(), e, t)
                    },
                    normalize: function() {
                        var e = g(),
                            t = m();
                        if (1 < Pf(t).length || !Hf(c)) return e;
                        var n = md(u, e);
                        return n.each(function(e) {
                            p(e, h())
                        }), n.getOr(e)
                    },
                    selectorChanged: function(e, t) {
                        return r(e, t), v
                    },
                    selectorChangedWithUnbind: r,
                    getScrollContainer: function() {
                        for (var e, t = u.getRoot(); t && "BODY" !== t.nodeName;) {
                            if (t.scrollHeight > t.clientHeight) {
                                e = t;
                                break
                            }
                            t = t.parentNode
                        }
                        return e
                    },
                    scrollIntoView: function(e, t) {
                        return r = e, o = t, void((n = c).inline ? Ud : jd)(n, r, o);
                        var n, r, o
                    },
                    placeCaretAt: function(e, t) {
                        return p(ad(e, t, c.getDoc()))
                    },
                    getBoundingClientRect: function() {
                        var e = g();
                        return e.collapsed ? Ms.fromRangeStart(e).getClientRects()[0] : e.getBoundingClientRect()
                    },
                    destroy: function() {
                        s = l = f = null, b.destroy()
                    }
                },
                y = Qf(v),
                b = od(v, c);
            return v.bookmarkManager = y, v.controlSelection = b, v
        },
        Gv = function(e, a, u) {
            e.addNodeFilter("font", function(e) {
                Y(e, function(e) {
                    var t, n = a.parse(e.attr("style")),
                        r = e.attr("color"),
                        o = e.attr("face"),
                        i = e.attr("size");
                    r && (n.color = r), o && (n["font-family"] = o), i && (n["font-size"] = u[parseInt(e.attr("size"), 10) - 1]), e.name = "span", e.attr("style", a.serialize(n)), t = e, Y(["color", "face", "size"], function(e) {
                        t.attr(e, null)
                    })
                })
            })
        },
        Jv = function(e, t) {
            var n, r = Si();
            t.convert_fonts_to_spans && Gv(e, r, At.explode(t.font_size_legacy_values)), n = r, e.addNodeFilter("strike", function(e) {
                Y(e, function(e) {
                    var t = n.parse(e.attr("style"));
                    t["text-decoration"] = "line-through", e.name = "span", e.attr("style", n.serialize(t))
                })
            })
        },
        Qv = function(e) {
            var t, n = decodeURIComponent(e).split(","),
                r = /data:([^;]+)/.exec(n[0]);
            return r && (t = r[1]), {
                type: t,
                data: n[1]
            }
        },
        Zv = function(e, t) {
            var n;
            try {
                n = atob(t)
            } catch (zk) {
                return U.none()
            }
            for (var r = new Uint8Array(n.length), o = 0; o < r.length; o++) r[o] = n.charCodeAt(o);
            return U.some(new Blob([r], {
                type: e
            }))
        },
        ey = function(e) {
            return 0 === e.indexOf("blob:") ? (i = e, new Mr(function(e, t) {
                var n = function() {
                    t("Cannot convert " + i + " to Blob. Resource might not exist or is inaccessible.")
                };
                try {
                    var r = new XMLHttpRequest;
                    r.open("GET", i, !0), r.responseType = "blob", r.onload = function() {
                        200 === r.status ? e(r.response) : n()
                    }, r.onerror = n, r.send()
                } catch (o) {
                    n()
                }
            })) : 0 === e.indexOf("data:") ? (o = e, new Mr(function(e) {
                var t = Qv(o),
                    n = t.type,
                    r = t.data;
                Zv(n, r).fold(function() {
                    return e(new Blob([]))
                }, e)
            })) : null;
            var i, o
        },
        ty = 0,
        ny = function(e) {
            return (e || "blobid") + ty++
        },
        ry = function(r, o, i, t) {
            var e, n, a, u, s;
            0 !== o.src.indexOf("blob:") ? (n = (e = Qv(o.src)).data, a = e.type, u = n, (s = r.getByData(u, a)) ? i({
                image: o,
                blobInfo: s
            }) : ey(o.src).then(function(e) {
                s = r.create(ny(), e, u), r.add(s), i({
                    image: o,
                    blobInfo: s
                })
            }, function(e) {
                t(e)
            })) : (s = r.getByUri(o.src)) ? i({
                image: o,
                blobInfo: s
            }) : ey(o.src).then(function(t) {
                var n;
                n = t, new Mr(function(e) {
                    var t = new FileReader;
                    t.onloadend = function() {
                        e(t.result)
                    }, t.readAsDataURL(n)
                }).then(function(e) {
                    u = Qv(e).data, s = r.create(ny(), t, u), r.add(s), i({
                        image: o,
                        blobInfo: s
                    })
                })
            }, function(e) {
                t(e)
            })
        },
        oy = function(i, a) {
            var u = {};
            return {
                findAll: function(e, n) {
                    n = n || R;
                    var t, r = H((t = e) ? ie(t.getElementsByTagName("img")) : [], function(e) {
                            var t = e.src;
                            return St.fileApi && !e.hasAttribute("data-mce-bogus") && !e.hasAttribute("data-mce-placeholder") && t && t !== St.transparentSrc && (0 === t.indexOf("blob:") ? !i.isUploaded(t) && n(e) : 0 === t.indexOf("data:") && n(e))
                        }),
                        o = z(r, function(n) {
                            if (u[n.src] !== undefined) return new Mr(function(t) {
                                u[n.src].then(function(e) {
                                    return "string" == typeof e ? e : void t({
                                        image: n,
                                        blobInfo: e.blobInfo
                                    })
                                })
                            });
                            var e = new Mr(function(e, t) {
                                ry(a, n, e, t)
                            }).then(function(e) {
                                return delete u[e.image.src], e
                            })["catch"](function(e) {
                                return delete u[n.src], e
                            });
                            return u[n.src] = e
                        });
                    return Mr.all(o)
                }
            }
        },
        iy = function(e, t, n, r) {
            (e.padd_empty_with_br || t.insert) && n[r.name] ? r.empty().append(new Tm("br", 1)).shortEnded = !0 : r.empty().append(new Tm("#text", 3)).value = mo
        },
        ay = function(e, t) {
            return e && e.firstChild && e.firstChild === e.lastChild && e.firstChild.name === t
        },
        uy = function(r, e, t, n) {
            return n.isEmpty(e, t, function(e) {
                return t = e, (n = r.getElementRule(t.name)) && n.paddEmpty;
                var t, n
            })
        },
        sy = function(e, o) {
            var i = o.blob_cache,
                t = function(t) {
                    var e, n, r = t.attr("src");
                    (e = t).attr("src") === St.transparentSrc || e.attr("data-mce-placeholder") || t.attr("data-mce-bogus") || ((n = /data:([^;]+);base64,([a-z0-9\+\/=]+)/i.exec(r)) ? U.some({
                        type: n[1],
                        data: decodeURIComponent(n[2])
                    }) : U.none()).filter(function() {
                        return function(e, t) {
                            if (t.images_dataimg_filter) {
                                var n = new Image;
                                return n.src = e.attr("src"), se(e.attributes.map, function(e, t) {
                                    n.setAttribute(t, e)
                                }), t.images_dataimg_filter(n)
                            }
                            return !0
                        }(t, o)
                    }).bind(function(e) {
                        var t = e.type,
                            n = e.data;
                        return U.from(i.getByData(n, t)).orThunk(function() {
                            return Zv(t, n).map(function(e) {
                                var t = i.create(ny(), e, n);
                                return i.add(t), t
                            })
                        })
                    }).each(function(e) {
                        t.attr("src", e.blobUri())
                    })
                };
            i && e.addAttributeFilter("src", function(e) {
                return Y(e, t)
            })
        },
        cy = function(e, p) {
            var h = e.schema;
            p.remove_trailing_brs && e.addNodeFilter("br", function(e, t, n) {
                var r, o, i, a, u, s, c, l, f = e.length,
                    d = At.extend({}, h.getBlockElements()),
                    m = h.getNonEmptyElements(),
                    g = h.getWhiteSpaceElements();
                for (d.body = 1, r = 0; r < f; r++)
                    if (i = (o = e[r]).parent, d[o.parent.name] && o === i.lastChild) {
                        for (u = o.prev; u;) {
                            if ("span" !== (s = u.name) || "bookmark" !== u.attr("data-mce-type")) {
                                "br" === s && (o = null);
                                break
                            }
                            u = u.prev
                        }
                        o && (o.remove(), uy(h, m, g, i) && (c = h.getElementRule(i.name)) && (c.removeEmpty ? i.remove() : c.paddEmpty && iy(p, n, d, i)))
                    } else {
                        for (a = o; i && i.firstChild === a && i.lastChild === a && !d[(a = i).name];) i = i.parent;
                        a === i && !0 !== p.padd_empty_with_br && ((l = new Tm("#text", 3)).value = mo, o.replace(l))
                    }
            }), e.addAttributeFilter("href", function(e) {
                var t, n, r = e.length;
                if (!p.allow_unsafe_link_target)
                    for (; r--;) {
                        var o = e[r];
                        "a" === o.name && "_blank" === o.attr("target") && o.attr("rel", (t = o.attr("rel"), n = t ? At.trim(t) : "", /\b(noopener)\b/g.test(n) ? n : n.split(" ").filter(function(e) {
                            return 0 < e.length
                        }).concat(["noopener"]).sort().join(" ")))
                    }
            }), p.allow_html_in_named_anchor || e.addAttributeFilter("id,name", function(e) {
                for (var t, n, r, o, i = e.length; i--;)
                    if ("a" === (o = e[i]).name && o.firstChild && !o.attr("href"))
                        for (r = o.parent, t = o.lastChild; n = t.prev, r.insert(t, o), t = n;);
            }), p.fix_list_elements && e.addNodeFilter("ul,ol", function(e) {
                for (var t, n, r, o = e.length; o--;) {
                    "ul" !== (r = (n = e[o]).parent).name && "ol" !== r.name || (n.prev && "li" === n.prev.name ? n.prev.append(n) : ((t = new Tm("li", 1)).attr("style", "list-style-type: none"), n.wrap(t)))
                }
            }), p.validate && h.getValidClasses() && e.addAttributeFilter("class", function(e) {
                for (var t, n, r, o, i, a, u, s = e.length, c = h.getValidClasses(); s--;) {
                    for (n = (t = e[s]).attr("class").split(" "), i = "", r = 0; r < n.length; r++) o = n[r], u = !1, (a = c["*"]) && a[o] && (u = !0), a = c[t.name], !u && a && a[o] && (u = !0), u && (i && (i += " "), i += o);
                    i.length || (i = null), t.attr("class", i)
                }
            }), sy(e, p)
        },
        ly = At.makeMap,
        fy = At.each,
        dy = At.explode,
        my = At.extend,
        gy = function(A, R) {
            void 0 === R && (R = wi());
            var T = {},
                D = [],
                O = {},
                B = {};
            (A = A || {}).validate = !("validate" in A) || A.validate, A.root_name = A.root_name || "body";
            var e, t, P = function(e) {
                    var t, n, r = e.name;
                    r in T && ((n = O[r]) ? n.push(e) : O[r] = [e]), t = D.length;
                    for (; t--;)(r = D[t].name) in e.attributes.map && ((n = B[r]) ? n.push(e) : B[r] = [e]);
                    return e
                },
                n = {
                    schema: R,
                    addAttributeFilter: function(e, n) {
                        fy(dy(e), function(e) {
                            for (var t = 0; t < D.length; t++)
                                if (D[t].name === e) return void D[t].callbacks.push(n);
                            D.push({
                                name: e,
                                callbacks: [n]
                            })
                        })
                    },
                    getAttributeFilters: function() {
                        return [].concat(D)
                    },
                    addNodeFilter: function(e, n) {
                        fy(dy(e), function(e) {
                            var t = T[e];
                            t || (T[e] = t = []), t.push(n)
                        })
                    },
                    getNodeFilters: function() {
                        var e = [];
                        for (var t in T) T.hasOwnProperty(t) && e.push({
                            name: t,
                            callbacks: T[t]
                        });
                        return e
                    },
                    filterNode: P,
                    parse: function(e, u) {
                        var t, n, r, o, i, s, a, c, l = [];
                        u = u || {}, O = {}, B = {};
                        var f, d = my(ly("script,style,head,html,body,title,meta,param"), R.getBlockElements()),
                            m = R.getNonEmptyElements(),
                            g = R.children,
                            p = A.validate,
                            h = "forced_root_block" in u ? u.forced_root_block : A.forced_root_block,
                            v = !1 === (f = h) ? "" : !0 === f ? "p" : f,
                            y = R.getWhiteSpaceElements(),
                            b = /^[ \t\r\n]+/,
                            C = /[ \t\r\n]+$/,
                            w = /[ \t\r\n]+/g,
                            x = /^[ \t\r\n]+$/,
                            S = y.hasOwnProperty(u.context) || y.hasOwnProperty(A.root_name),
                            N = function(e, t) {
                                var n, r = new Tm(e, t);
                                return e in T && ((n = O[e]) ? n.push(r) : O[e] = [r]), r
                            },
                            E = function(e) {
                                for (var t, n, r, o = R.getBlockElements(), i = e.prev; i && 3 === i.type;) {
                                    if (0 < (n = i.value.replace(C, "")).length) return void(i.value = n);
                                    if (t = i.next) {
                                        if (3 === t.type && t.value.length) {
                                            i = i.prev;
                                            continue
                                        }
                                        if (!o[t.name] && "script" !== t.name && "style" !== t.name) {
                                            i = i.prev;
                                            continue
                                        }
                                    }
                                    r = i.prev, i.remove(), i = r
                                }
                            },
                            k = Im({
                                validate: p,
                                allow_html_data_urls: A.allow_html_data_urls,
                                allow_svg_data_urls: A.allow_svg_data_urls,
                                allow_script_urls: A.allow_script_urls,
                                allow_conditional_comments: A.allow_conditional_comments,
                                preserve_cdata: A.preserve_cdata,
                                self_closing_elements: function(e) {
                                    var t, n = {};
                                    for (t in e) "li" !== t && "p" !== t && (n[t] = e[t]);
                                    return n
                                }(R.getSelfClosingElements()),
                                cdata: function(e) {
                                    c.append(N("#cdata", 4)).value = e
                                },
                                text: function(e, t) {
                                    var n, r, o;
                                    S || (e = e.replace(w, " "), r = c.lastChild, o = d, r && (o[r.name] || "br" === r.name) && (e = e.replace(b, ""))), 0 !== e.length && ((n = N("#text", 3)).raw = !!t, c.append(n).value = e)
                                },
                                comment: function(e) {
                                    c.append(N("#comment", 8)).value = e
                                },
                                pi: function(e, t) {
                                    c.append(N(e, 7)).value = t, E(c)
                                },
                                doctype: function(e) {
                                    c.append(N("#doctype", 10)).value = e, E(c)
                                },
                                start: function(e, t, n) {
                                    var r, o, i, a, u = p ? R.getElementRule(e) : {};
                                    if (u) {
                                        for ((r = N(u.outputName || e, 1)).attributes = t, r.shortEnded = n, c.append(r), (a = g[c.name]) && g[r.name] && !a[r.name] && l.push(r), o = D.length; o--;)(i = D[o].name) in t.map && ((s = B[i]) ? s.push(r) : B[i] = [r]);
                                        d[e] && E(r), n || (c = r), !S && y[e] && (S = !0)
                                    }
                                },
                                end: function(e) {
                                    var t, n, r, o, i, a = p ? R.getElementRule(e) : {};
                                    if (a) {
                                        if (d[e] && !S) {
                                            if ((t = c.firstChild) && 3 === t.type)
                                                if (0 < (n = t.value.replace(b, "")).length) t.value = n, t = t.next;
                                                else
                                                    for (r = t.next, t.remove(), t = r; t && 3 === t.type;) n = t.value, r = t.next, 0 !== n.length && !x.test(n) || (t.remove(), t = r), t = r;
                                            if ((t = c.lastChild) && 3 === t.type)
                                                if (0 < (n = t.value.replace(C, "")).length) t.value = n, t = t.prev;
                                                else
                                                    for (r = t.prev, t.remove(), t = r; t && 3 === t.type;) n = t.value, r = t.prev, 0 !== n.length && !x.test(n) || (t.remove(), t = r), t = r
                                        }
                                        if (S && y[e] && (S = !1), a.removeEmpty && uy(R, m, y, c)) return o = c.parent, d[c.name] ? c.empty().remove() : c.unwrap(), void(c = o);
                                        a.paddEmpty && (ay(i = c, "#text") && i.firstChild.value === mo || uy(R, m, y, c)) && iy(A, u, d, c), c = c.parent
                                    }
                                }
                            }, R),
                            _ = c = new Tm(u.context || A.root_name, 11);
                        if (k.parse(e, u.format), p && l.length && (u.context ? u.invalid = !0 : function(e) {
                                for (var t, n, r, o, i, a, u, s, c, l, f = ly("tr,td,th,tbody,thead,tfoot,table"), d = R.getNonEmptyElements(), m = R.getWhiteSpaceElements(), g = R.getTextBlockElements(), p = R.getSpecialElements(), h = 0; h < e.length; h++)
                                    if ((t = e[h]).parent && !t.fixed)
                                        if (g[t.name] && "li" === t.parent.name) {
                                            for (c = t.next; c && g[c.name];) c.name = "li", c.fixed = !0, t.parent.insert(c, t.parent), c = c.next;
                                            t.unwrap(t)
                                        } else {
                                            for (r = [t], n = t.parent; n && !R.isValidChild(n.name, t.name) && !f[n.name]; n = n.parent) r.push(n);
                                            if (n && 1 < r.length) {
                                                for (r.reverse(), o = i = P(r[0].clone()), s = 0; s < r.length - 1; s++) {
                                                    for (R.isValidChild(i.name, r[s].name) ? (a = P(r[s].clone()), i.append(a)) : a = i, u = r[s].firstChild; u && u !== r[s + 1];) l = u.next, a.append(u), u = l;
                                                    i = a
                                                }
                                                uy(R, d, m, o) ? n.insert(t, r[0], !0) : (n.insert(o, r[0], !0), n.insert(t, o)), n = r[0], (uy(R, d, m, n) || ay(n, "br")) && n.empty().remove()
                                            } else if (t.parent) {
                                                if ("li" === t.name) {
                                                    if ((c = t.prev) && ("ul" === c.name || "ol" === c.name)) {
                                                        c.append(t);
                                                        continue
                                                    }
                                                    if ((c = t.next) && ("ul" === c.name || "ol" === c.name)) {
                                                        c.insert(t, c.firstChild, !0);
                                                        continue
                                                    }
                                                    t.wrap(P(new Tm("ul", 1)));
                                                    continue
                                                }
                                                R.isValidChild(t.parent.name, "div") && R.isValidChild("div", t.name) ? t.wrap(P(new Tm("div", 1))) : p[t.name] ? t.empty().remove() : t.unwrap()
                                            }
                                        }
                            }(l)), v && ("body" === _.name || u.isRootContent) && function() {
                                var e, t, n = _.firstChild,
                                    r = function(e) {
                                        e && ((n = e.firstChild) && 3 === n.type && (n.value = n.value.replace(b, "")), (n = e.lastChild) && 3 === n.type && (n.value = n.value.replace(C, "")))
                                    };
                                if (R.isValidChild(_.name, v.toLowerCase())) {
                                    for (; n;) e = n.next, 3 === n.type || 1 === n.type && "p" !== n.name && !d[n.name] && !n.attr("data-mce-type") ? (t || ((t = N(v, 1)).attr(A.forced_root_block_attrs), _.insert(t, n)), t.append(n)) : (r(t), t = null), n = e;
                                    r(t)
                                }
                            }(), !u.invalid) {
                            for (a in O)
                                if (O.hasOwnProperty(a)) {
                                    for (s = T[a], o = (t = O[a]).length; o--;) t[o].parent || t.splice(o, 1);
                                    for (n = 0, r = s.length; n < r; n++) s[n](t, a, u)
                                } for (n = 0, r = D.length; n < r; n++)
                                if ((s = D[n]).name in B) {
                                    for (o = (t = B[s.name]).length; o--;) t[o].parent || t.splice(o, 1);
                                    for (o = 0, i = s.callbacks.length; o < i; o++) s.callbacks[o](t, s.name, u)
                                }
                        }
                        return _
                    }
                };
            return cy(n, A), e = n, (t = A).inline_styles && Jv(e, t), n
        },
        py = function(e, t, n) {
            return o = n, (r = e) && r.hasEventListeners("PreProcess") && !o.no_events ? function(e, t, n) {
                var r, o, i = e.dom;
                t = t.cloneNode(!0);
                var a, u, s = document.implementation;
                return s.createHTMLDocument && (r = s.createHTMLDocument(""), At.each("BODY" === t.nodeName ? t.childNodes : [t], function(e) {
                    r.body.appendChild(r.importNode(e, !0))
                }), t = "BODY" !== t.nodeName ? r.body.firstChild : r.body, o = i.doc, i.doc = r), a = e, u = _e(_e({}, n), {
                    node: t
                }), a.fire("PreProcess", u), o && (i.doc = o), t
            }(e, t, n) : t;
            var r, o
        },
        hy = function(e, t, n) {
            -1 === At.inArray(t, n) && (e.addAttributeFilter(n, function(e, t) {
                for (var n = e.length; n--;) e[n].attr(t, null)
            }), t.push(n))
        },
        vy = function(e, t, n, r, o) {
            var i, a, u, s, c, l, f = (i = r, qm(t, n).serialize(i));
            return a = e, s = f, (u = o).no_events || !a ? s : (c = a, l = _e(_e({}, u), {
                content: s
            }), c.fire("PostProcess", l).content)
        },
        yy = function(y, b) {
            var e = ["data-mce-selected"],
                C = b && b.dom ? b.dom : Su.DOM,
                w = b && b.schema ? b.schema : wi(y);
            y.entity_encoding = y.entity_encoding || "named", y.remove_trailing_brs = !("remove_trailing_brs" in y) || y.remove_trailing_brs;
            var t, s, c, x = gy(y, w);
            s = y, c = C, (t = x).addAttributeFilter("data-mce-tabindex", function(e, t) {
                for (var n, r = e.length; r--;)(n = e[r]).attr("tabindex", n.attr("data-mce-tabindex")), n.attr(t, null)
            }), t.addAttributeFilter("src,href,style", function(e, t) {
                for (var n, r, o = e.length, i = "data-mce-" + t, a = s.url_converter, u = s.url_converter_scope; o--;)(r = (n = e[o]).attr(i)) !== undefined ? (n.attr(t, 0 < r.length ? r : null), n.attr(i, null)) : (r = n.attr(t), "style" === t ? r = c.serializeStyle(c.parseStyle(r), n.name) : a && (r = a.call(u, r, t, n.name)), n.attr(t, 0 < r.length ? r : null))
            }), t.addAttributeFilter("class", function(e) {
                for (var t, n, r = e.length; r--;)(n = (t = e[r]).attr("class")) && (n = t.attr("class").replace(/(?:^|\s)mce-item-\w+(?!\S)/g, ""), t.attr("class", 0 < n.length ? n : null))
            }), t.addAttributeFilter("data-mce-type", function(e, t, n) {
                for (var r, o = e.length; o--;) {
                    "bookmark" !== (r = e[o]).attr("data-mce-type") || n.cleanup || (U.from(r.firstChild).exists(function(e) {
                        return !po(e.value)
                    }) ? r.unwrap() : r.remove())
                }
            }), t.addNodeFilter("noscript", function(e) {
                for (var t, n = e.length; n--;)(t = e[n].firstChild) && (t.value = fi.decode(t.value))
            }), t.addNodeFilter("script,style", function(e, t) {
                for (var n, r, o, i = e.length, a = function(e) {
                        return e.replace(/(<!--\[CDATA\[|\]\]-->)/g, "\n").replace(/^[\r\n]*|[\r\n]*$/g, "").replace(/^\s*((<!--)?(\s*\/\/)?\s*<!\[CDATA\[|(<!--\s*)?\/\*\s*<!\[CDATA\[\s*\*\/|(\/\/)?\s*<!--|\/\*\s*<!--\s*\*\/)\s*[\r\n]*/gi, "").replace(/\s*(\/\*\s*\]\]>\s*\*\/(-->)?|\s*\/\/\s*\]\]>(-->)?|\/\/\s*(-->)?|\]\]>|\/\*\s*-->\s*\*\/|\s*-->\s*)\s*$/g, "")
                    }; i--;) r = (n = e[i]).firstChild ? n.firstChild.value : "", "script" === t ? ((o = n.attr("type")) && n.attr("type", "mce-no/type" === o ? null : o.replace(/^mce\-/, "")), "xhtml" === s.element_format && 0 < r.length && (n.firstChild.value = "// <![CDATA[\n" + a(r) + "\n// ]]>")) : "xhtml" === s.element_format && 0 < r.length && (n.firstChild.value = "\x3c!--\n" + a(r) + "\n--\x3e")
            }), t.addNodeFilter("#comment", function(e) {
                for (var t, n = e.length; n--;) t = e[n], s.preserve_cdata && 0 === t.value.indexOf("[CDATA[") ? (t.name = "#cdata", t.type = 4, t.value = c.decode(t.value.replace(/^\[CDATA\[|\]\]$/g, ""))) : 0 === t.value.indexOf("mce:protected ") && (t.name = "#text", t.type = 3, t.raw = !0, t.value = unescape(t.value).substr(14))
            }), t.addNodeFilter("xml:namespace,input", function(e, t) {
                for (var n, r = e.length; r--;) 7 === (n = e[r]).type ? n.remove() : 1 === n.type && ("input" !== t || n.attr("type") || n.attr("type", "text"))
            }), t.addAttributeFilter("data-mce-type", function(e) {
                Y(e, function(e) {
                    "format-caret" === e.attr("data-mce-type") && (e.isEmpty(t.schema.getNonEmptyElements()) ? e.remove() : e.unwrap())
                })
            }), t.addAttributeFilter("data-mce-src,data-mce-href,data-mce-style,data-mce-selected,data-mce-expando,data-mce-type,data-mce-resize,data-mce-placeholder", function(e, t) {
                for (var n = e.length; n--;) e[n].attr(t, null)
            });
            return {
                schema: w,
                addNodeFilter: x.addNodeFilter,
                addAttributeFilter: x.addAttributeFilter,
                serialize: function(e, t) {
                    void 0 === t && (t = {});
                    var n, r, o, i, a, u, s, c, l, f, d, m, g = _e({
                            format: "html"
                        }, t),
                        p = py(b, e, g),
                        h = (n = C, r = p, i = ho((o = g).getInner ? r.innerHTML : n.getOuterHTML(r)), o.selection || lo(Tt.fromDom(r)) ? i : At.trim(i)),
                        v = (a = x, u = h, d = (s = g).selection ? _e({
                            forced_root_block: !1
                        }, s) : s, m = a.parse(u, d), l = function(e) {
                            return e && "br" === e.name
                        }, f = m.lastChild, !l(f) || l(c = f.prev) && (f.remove(), c.remove()), m);
                    return "tree" === g.format ? v : vy(b, y, w, v, g)
                },
                addRules: function(e) {
                    w.addValidElements(e)
                },
                setRules: function(e) {
                    w.setValidElements(e)
                },
                addTempAttr: k(hy, x, e),
                getTempAttrs: E(e),
                getNodeFilters: x.getNodeFilters,
                getAttributeFilters: x.getAttributeFilters
            }
        },
        by = function(e, t) {
            var n = yy(e, t);
            return {
                schema: n.schema,
                addNodeFilter: n.addNodeFilter,
                addAttributeFilter: n.addAttributeFilter,
                serialize: n.serialize,
                addRules: n.addRules,
                setRules: n.setRules,
                addTempAttr: n.addTempAttr,
                getTempAttrs: n.getTempAttrs,
                getNodeFilters: n.getNodeFilters,
                getAttributeFilters: n.getAttributeFilters
            }
        },
        Cy = function(e, t) {
            void 0 === t && (t = {});
            var n, r, o = t.format ? t.format : "html";
            return n = t, r = o, Fv(e).editor.getContent(n, r)
        },
        wy = function(e, t, n) {
            return void 0 === n && (n = {}), r = t, o = n, Fv(e).editor.setContent(r, o);
            var r, o
        },
        xy = Su.DOM,
        Sy = function(e) {
            return U.from(e).each(function(e) {
                return e.destroy()
            })
        },
        Ny = function(e) {
            var t, n, r, o, i;
            e.removed || (t = e._selectionOverrides, n = e.editorUpload, r = e.getBody(), o = e.getElement(), r && e.save({
                is_removing: !0
            }), e.removed = !0, e.unbindAllNativeEvents(), e.hasHiddenInput && o && xy.remove(o.nextSibling), e.fire("remove"), e.editorManager.remove(e), !e.inline && r && (i = e, xy.setStyle(i.id, "display", i.orgDisplay)), e.fire("detach"), xy.remove(e.getContainer()), Sy(t), Sy(n), e.destroy())
        },
        Ey = function(e, t) {
            var n, r, o, i = e.selection,
                a = e.dom;
            e.destroyed || (t || e.removed ? (t || (e.editorManager.off("beforeunload", e._beforeUnload), e.theme && e.theme.destroy && e.theme.destroy(), Sy(i), Sy(a)), (r = (n = e).formElement) && (r._mceOldSubmit && (r.submit = r._mceOldSubmit, r._mceOldSubmit = null), xy.unbind(r, "submit reset", n.formEventDelegate)), (o = e).contentAreaContainer = o.formElement = o.container = o.editorContainer = null, o.bodyElement = o.contentDocument = o.contentWindow = null, o.iframeElement = o.targetElm = null, o.selection && (o.selection = o.selection.win = o.selection.dom = o.selection.dom.doc = null), e.destroyed = !0) : e.remove())
        },
        ky = Object.prototype.hasOwnProperty,
        _y = ($v = function(e, t) {
            return w(e) && w(t) ? _y(e, t) : t
        }, function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            if (0 === e.length) throw new Error("Can't merge zero objects");
            for (var n = {}, r = 0; r < e.length; r++) {
                var o = e[r];
                for (var i in o) ky.call(o, i) && (n[i] = $v(n[i], o[i]))
            }
            return n
        }),
        Ay = gt().deviceType,
        Ry = Ay.isTouch(),
        Ty = Ay.isPhone(),
        Dy = Ay.isTablet(),
        Oy = ["lists", "autolink", "autosave"],
        By = {
            table_grid: !1,
            object_resizing: !1,
            resize: !1
        },
        Py = function(e) {
            var t = S(e) ? e.join(" ") : e,
                n = z(K(t) ? t.split(" ") : [], We);
            return H(n, function(e) {
                return 0 < e.length
            })
        },
        Ly = function(n, e) {
            var t, r, o = me(e, function(e, t) {
                return M(n, t)
            });
            return t = o.t, r = o.f, {
                sections: E(t),
                settings: E(r)
            }
        },
        Iy = function(e, t) {
            return e.sections().hasOwnProperty(t)
        },
        My = function(e, t) {
            return he(e, "toolbar_mode").orThunk(function() {
                return he(e, "toolbar_drawer").map(function(e) {
                    return !1 === e ? "wrap" : e
                })
            }).getOr(t)
        },
        Fy = function(e, t, n, r) {
            return e && (a = i = "mobile", u = (o = t).sections(), Iy(o, i) && u[i].theme === a) ? H(r, k(M, Oy)) : e && Iy(t, "mobile") ? r : n;
            var o, i, a, u
        },
        Uy = function(e, t, n, r) {
            var o, i, a, u = Py(n.forced_plugins),
                s = Py(r.plugins),
                c = Iy(o = t, i = "mobile") ? o.sections()[i] : {},
                l = c.plugins ? Py(c.plugins) : s,
                f = Fy(e, t, s, l),
                d = (a = f, [].concat(Py(u)).concat(Py(a)));
            if (St.browser.isIE() && M(d, "rtc")) throw new Error("RTC plugin is not supported on IE 11.");
            return At.extend(r, {
                plugins: d.join(" ")
            })
        },
        zy = function(e, t, n, r, o) {
            var i, a, u, s, c, l, f, d = e ? {
                    mobile: (i = o.mobile || {}, a = t, u = {
                        resize: !1,
                        toolbar_mode: My(i, "scrolling"),
                        toolbar_sticky: !1
                    }, _e(_e(_e({}, By), u), a ? {
                        menubar: !1
                    } : {}))
                } : {},
                m = Ly(["mobile"], _y(d, o)),
                g = At.extend(n, r, m.settings(), (f = m, e && Iy(f, "mobile") ? function(e, t, n) {
                    void 0 === n && (n = {});
                    var r = e.sections(),
                        o = r.hasOwnProperty(t) ? r[t] : {};
                    return At.extend({}, n, o)
                }(m, "mobile") : {}), {
                    validate: !0,
                    external_plugins: (s = r, c = m.settings(), l = c.external_plugins ? c.external_plugins : {}, s && s.external_plugins ? At.extend({}, s.external_plugins, l) : l)
                });
            return Uy(e, m, r, g)
        },
        jy = function(e, t, n, r, o) {
            var i, a, u, s, c = (i = n, a = Ry, u = e, s = {
                id: t,
                theme: "silver",
                toolbar_mode: My(o, "floating"),
                plugins: "",
                document_base_url: i,
                add_form_submit_trigger: !0,
                submit_patch: !0,
                add_unload_trigger: !0,
                convert_urls: !0,
                relative_urls: !0,
                remove_script_host: !0,
                object_resizing: !0,
                doctype: "<!DOCTYPE html>",
                visual: !0,
                font_size_legacy_values: "xx-small,small,medium,large,x-large,xx-large,300%",
                forced_root_block: "p",
                hidden_input: !0,
                inline_styles: !0,
                convert_fonts_to_spans: !0,
                indent: !0,
                indent_before: "p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,summary,article,hgroup,aside,figure,figcaption,option,optgroup,datalist",
                indent_after: "p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,summary,article,hgroup,aside,figure,figcaption,option,optgroup,datalist",
                entity_encoding: "named",
                url_converter: u.convertURL,
                url_converter_scope: u
            }, _e(_e({}, s), a ? By : {}));
            return zy(Ty || Dy, Ty, c, r, o)
        },
        Hy = function(e, t, n) {
            return U.from(t.settings[n]).filter(e)
        },
        Vy = function(e, t, n, r) {
            var o, i, a, u = t in e.settings ? e.settings[t] : n;
            return "hash" === r ? (a = {}, "string" == typeof(i = u) ? Y(0 < i.indexOf("=") ? i.split(/[;,](?![^=;,]*(?:[;,]|$))/) : i.split(","), function(e) {
                var t = e.split("=");
                1 < t.length ? a[At.trim(t[0])] = At.trim(t[1]) : a[At.trim(t[0])] = At.trim(t[0])
            }) : a = i, a) : "string" === r ? Hy(K, e, t).getOr(n) : "number" === r ? Hy(N, e, t).getOr(n) : "boolean" === r ? Hy(f, e, t).getOr(n) : "object" === r ? Hy(w, e, t).getOr(n) : "array" === r ? Hy(S, e, t).getOr(n) : "string[]" === r ? Hy((o = K, function(e) {
                return S(e) && Q(e, o)
            }), e, t).getOr(n) : "function" === r ? Hy(m, e, t).getOr(n) : u
        },
        qy = (Wv = {}, {
            add: function(e, t) {
                Wv[e] = t
            },
            get: function(e) {
                return Wv[e] ? Wv[e] : {
                    icons: {}
                }
            },
            has: function(e) {
                return ve(Wv, e)
            }
        }),
        $y = function(e, t) {
            return t.dom[e]
        },
        Wy = function(e, t) {
            return parseInt(nr(t, e), 10)
        },
        Ky = k($y, "clientWidth"),
        Xy = k($y, "clientHeight"),
        Yy = k(Wy, "margin-top"),
        Gy = k(Wy, "margin-left"),
        Jy = function(e, t, n) {
            var r, o, i, a, u, s, c, l, f, d, m, g = Tt.fromDom(e.getBody()),
                p = e.inline ? g : (r = g, Tt.fromDom($t(r).dom.documentElement)),
                h = (o = e.inline, a = t, u = n, s = (i = p).dom.getBoundingClientRect(), {
                    x: a - (o ? s.left + i.dom.clientLeft + Gy(i) : 0),
                    y: u - (o ? s.top + i.dom.clientTop + Yy(i) : 0)
                });
            return l = h.x, f = h.y, d = Ky(c = p), m = Xy(c), 0 <= l && 0 <= f && l <= d && f <= m
        },
        Qy = function(e) {
            var t, n = e.inline ? e.getBody() : e.getContentAreaContainer();
            return t = n, U.from(t).map(Tt.fromDom).map(yn).getOr(!1)
        },
        Zy = function(n) {
            var t, o = [],
                i = function() {
                    var e, t = n.theme;
                    return t && t.getNotificationManagerImpl ? t.getNotificationManagerImpl() : {
                        open: e = function() {
                            throw new Error("Theme did not provide a NotificationManager implementation.")
                        },
                        close: e,
                        reposition: e,
                        getArgs: e
                    }
                },
                a = function() {
                    return U.from(o[0])
                },
                u = function() {
                    0 < o.length && i().reposition(o)
                },
                s = function(t) {
                    G(o, function(e) {
                        return e === t
                    }).each(function(e) {
                        o.splice(e, 1)
                    })
                },
                r = function(r, e) {
                    if (void 0 === e && (e = !0), !n.removed && Qy(n)) return e && n.fire("BeforeOpenNotification", {
                        notification: r
                    }), W(o, function(e) {
                        return t = i().getArgs(e), n = r, !(t.type !== n.type || t.text !== n.text || t.progressBar || t.timeout || n.progressBar || n.timeout);
                        var t, n
                    }).getOrThunk(function() {
                        n.editorManager.setActive(n);
                        var e, t = i().open(r, function() {
                            s(t), u(), a().fold(function() {
                                return n.focus()
                            }, function(e) {
                                return Tt.fromDom(e.getEl()).dom.focus()
                            })
                        });
                        return e = t, o.push(e), u(), n.fire("OpenNotification", {
                            notification: _e({}, t)
                        }), t
                    })
                };
            return (t = n).on("SkinLoaded", function() {
                var e = t.getParam("service_message");
                e && r({
                    text: e,
                    type: "warning",
                    timeout: 0
                }, !1)
            }), t.on("ResizeEditor ResizeWindow NodeChange", function() {
                Kr.requestAnimationFrame(u)
            }), t.on("remove", function() {
                Y(o.slice(), function(e) {
                    i().close(e)
                })
            }), {
                open: r,
                close: function() {
                    a().each(function(e) {
                        i().close(e), s(e), u()
                    })
                },
                getNotifications: function() {
                    return o
                }
            }
        },
        eb = Pu.PluginManager,
        tb = Pu.ThemeManager;
    var nb, rb, ob = function(n) {
            var r = [],
                o = function() {
                    var e, t = n.theme;
                    return t && t.getWindowManagerImpl ? t.getWindowManagerImpl() : {
                        open: e = function() {
                            throw new Error("Theme did not provide a WindowManager implementation.")
                        },
                        openUrl: e,
                        alert: e,
                        confirm: e,
                        close: e,
                        getParams: e,
                        setParams: e
                    }
                },
                i = function(n, r) {
                    return function() {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        return r ? r.apply(n, e) : undefined
                    }
                },
                a = function(e) {
                    var t;
                    r.push(e), t = e, n.fire("OpenWindow", {
                        dialog: t
                    })
                },
                u = function(t) {
                    var e;
                    e = t, n.fire("CloseWindow", {
                        dialog: e
                    }), 0 === (r = H(r, function(e) {
                        return e !== t
                    })).length && n.focus()
                },
                s = function(e) {
                    n.editorManager.setActive(n), im(n);
                    var t = e();
                    return a(t), t
                };
            return n.on("remove", function() {
                Y(r, function(e) {
                    o().close(e)
                })
            }), {
                open: function(e, t) {
                    return s(function() {
                        return o().open(e, t, u)
                    })
                },
                openUrl: function(e) {
                    return s(function() {
                        return o().openUrl(e, u)
                    })
                },
                alert: function(e, t, n) {
                    var r = o();
                    r.alert(e, i(n || r, t))
                },
                confirm: function(e, t, n) {
                    var r = o();
                    r.confirm(e, i(n || r, t))
                },
                close: function() {
                    U.from(r[r.length - 1]).each(function(e) {
                        o().close(e), u(e)
                    })
                }
            }
        },
        ib = function(e, t) {
            e.notificationManager.open({
                type: "error",
                text: t
            })
        },
        ab = function(e, t) {
            e._skinLoaded ? ib(e, t) : e.on("SkinLoaded", function() {
                ib(e, t)
            })
        },
        ub = function(e, t, n) {
            td(e, t, {
                message: n
            }), console.error(n)
        },
        sb = function(e, t, n) {
            return n ? "Failed to load " + e + ": " + n + " from url " + t : "Failed to load " + e + " url: " + t
        },
        cb = function(e, t, n) {
            ub(e, "PluginLoadError", sb("plugin", t, n))
        },
        lb = function(e) {
            for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            var r = window.console;
            r && (r.error ? r.error.apply(r, Ae([e], t)) : r.log.apply(r, Ae([e], t)))
        },
        fb = function(e) {
            return db(e, (n = (t = e).getParam("content_css"), K(n) ? z(n.split(","), We) : S(n) ? n : !1 === n || t.inline ? [] : ["default"]));
            var t, n
        },
        db = function(t, e) {
            var n = t.editorManager.baseURL + "/skins/content",
                r = "content" + t.editorManager.suffix + ".css",
                o = !0 === t.inline;
            return z(e, function(e) {
                return /^[a-z0-9\-]+$/i.test(e) && !o ? n + "/" + e + "/" + r : t.documentBaseURI.toAbsolute(e)
            })
        },
        mb = function(e) {
            var t;
            e.contentCSS = e.contentCSS.concat(fb(e), db(t = e, yc(t)))
        },
        gb = function() {
            var n = {},
                r = function(e, t) {
                    return {
                        status: e,
                        resultUri: t
                    }
                },
                t = function(e) {
                    return e in n
                };
            return {
                hasBlobUri: t,
                getResultUri: function(e) {
                    var t = n[e];
                    return t ? t.resultUri : null
                },
                isPending: function(e) {
                    return !!t(e) && 1 === n[e].status
                },
                isUploaded: function(e) {
                    return !!t(e) && 2 === n[e].status
                },
                markPending: function(e) {
                    n[e] = r(1, null)
                },
                markUploaded: function(e, t) {
                    n[e] = r(2, t)
                },
                removeFailed: function(e) {
                    delete n[e]
                },
                destroy: function() {
                    n = {}
                }
            }
        },
        pb = 0,
        hb = function(e) {
            return e + pb++ + (t = function() {
                return Math.round(4294967295 * Math.random()).toString(36)
            }, "s" + (new Date).getTime().toString(36) + t() + t() + t());
            var t
        },
        vb = function(u, s) {
            var o = {},
                n = function(e, r, o, t) {
                    var i = new XMLHttpRequest;
                    i.open("POST", s.url), i.withCredentials = s.credentials, i.upload.onprogress = function(e) {
                        t(e.loaded / e.total * 100)
                    }, i.onerror = function() {
                        o("Image upload failed due to a XHR Transport error. Code: " + i.status)
                    }, i.onload = function() {
                        var e, t, n;
                        i.status < 200 || 300 <= i.status ? o("HTTP Error: " + i.status) : (e = JSON.parse(i.responseText)) && "string" == typeof e.location ? r((t = s.basePath, n = e.location, t ? t.replace(/\/$/, "") + "/" + n.replace(/^\//, "") : n)) : o("Invalid JSON: " + i.responseText)
                    };
                    var n = new FormData;
                    n.append("file", e.blob(), e.filename()), i.send(n)
                },
                c = function(e, t) {
                    return {
                        url: t,
                        blobInfo: e,
                        status: !0
                    }
                },
                l = function(e, t, n) {
                    return {
                        url: "",
                        blobInfo: e,
                        status: !1,
                        error: {
                            message: t,
                            options: n
                        }
                    }
                },
                f = function(e, t) {
                    At.each(o[e], function(e) {
                        e(t)
                    }), delete o[e]
                },
                r = function(e, r) {
                    return e = At.grep(e, function(e) {
                        return !u.isUploaded(e.blobUri())
                    }), Mr.all(At.map(e, function(e) {
                        return u.isPending(e.blobUri()) ? (n = e.blobUri(), new Mr(function(e) {
                            o[n] = o[n] || [], o[n].push(e)
                        })) : (i = e, t = s.handler, a = r, u.markPending(i.blobUri()), new Mr(function(r) {
                            var n;
                            try {
                                var o = function() {
                                    n && n.close()
                                };
                                t(i, function(e) {
                                    o(), u.markUploaded(i.blobUri(), e), f(i.blobUri(), c(i, e)), r(c(i, e))
                                }, function(e, t) {
                                    var n = t || {};
                                    o(), u.removeFailed(i.blobUri()), f(i.blobUri(), l(i, e, n)), r(l(i, e, n))
                                }, function(t) {
                                    t < 0 || 100 < t || U.from(n).orThunk(function() {
                                        return U.from(a).map(x)
                                    }).each(function(e) {
                                        (n = e).progressBar.value(t)
                                    })
                                })
                            } catch (e) {
                                r(l(i, e.message, {}))
                            }
                        }));
                        var i, t, a, n
                    }))
                };
            return !1 === m(s.handler) && (s.handler = n), {
                upload: function(e, t) {
                    return s.url || s.handler !== n ? r(e, t) : new Mr(function(e) {
                        e([])
                    })
                }
            }
        },
        yb = function(e) {
            return function() {
                return e.notificationManager.open({
                    text: e.translate("Image uploading..."),
                    type: "info",
                    timeout: -1,
                    progressBar: !0
                })
            }
        },
        bb = function(e, t) {
            return vb(t, {
                url: e.getParam("images_upload_url", "", "string"),
                basePath: e.getParam("images_upload_base_path", "", "string"),
                credentials: e.getParam("images_upload_credentials", !1, "boolean"),
                handler: e.getParam("images_upload_handler", null, "function")
            })
        },
        Cb = function(s) {
            var n, i, e, t, r, o, c = (n = [], i = function(e) {
                    if (!e.blob || !e.base64) throw new Error("blob and base64 representations of the image are required for BlobInfo to be created");
                    var t = e.id || hb("blobid"),
                        n = e.name || t,
                        r = e.blob;
                    return {
                        id: E(t),
                        name: E(n),
                        filename: E(e.filename || n + "." + ({
                            "image/jpeg": "jpg",
                            "image/jpg": "jpg",
                            "image/gif": "gif",
                            "image/png": "png",
                            "image/apng": "apng",
                            "image/avif": "avif",
                            "image/svg+xml": "svg",
                            "image/webp": "webp",
                            "image/bmp": "bmp",
                            "image/tiff": "tiff"
                        } [r.type.toLowerCase()] || "dat")),
                        blob: E(r),
                        base64: E(e.base64),
                        blobUri: E(e.blobUri || URL.createObjectURL(r)),
                        uri: E(e.uri)
                    }
                }, {
                    create: function(e, t, n, r, o) {
                        if (K(e)) return i({
                            id: e,
                            name: r,
                            filename: o,
                            blob: t,
                            base64: n
                        });
                        if (w(e)) return i(e);
                        throw new Error("Unknown input type")
                    },
                    add: function(e) {
                        t(e.id()) || n.push(e)
                    },
                    get: t = function(t) {
                        return e(function(e) {
                            return e.id() === t
                        })
                    },
                    getByUri: function(t) {
                        return e(function(e) {
                            return e.blobUri() === t
                        })
                    },
                    getByData: function(t, n) {
                        return e(function(e) {
                            return e.base64() === t && e.blob().type === n
                        })
                    },
                    findFirst: e = function(e) {
                        return W(n, e).getOrUndefined()
                    },
                    removeByUri: function(t) {
                        n = H(n, function(e) {
                            return e.blobUri() !== t || void URL.revokeObjectURL(e.blobUri())
                        })
                    },
                    destroy: function() {
                        Y(n, function(e) {
                            URL.revokeObjectURL(e.blobUri())
                        }), n = []
                    }
                }),
                a = gb(),
                u = [],
                l = function(n) {
                    var r = Ru(null);
                    n.on("change AddUndo", function(e) {
                        r.set(_e({}, e.level))
                    });
                    return {
                        fireIfChanged: function() {
                            var t = n.undoManager.data;
                            oe(t).filter(function(e) {
                                return !Dv(r.get(), e)
                            }).each(function(e) {
                                n.setDirty(!0), n.fire("change", {
                                    level: e,
                                    lastLevel: ne(t, t.length - 2).getOrNull()
                                })
                            })
                        }
                    }
                }(s),
                f = function(t) {
                    return function(e) {
                        return s.selection ? t(e) : []
                    }
                },
                d = function(e, t, n) {
                    for (var r = 0; - 1 !== (r = e.indexOf(t, r)) && (e = e.substring(0, r) + n + e.substr(r + t.length), r += n.length - t.length + 1), -1 !== r;);
                    return e
                },
                m = function(e, t, n) {
                    var r = 'src="' + n + '"' + (n === St.transparentSrc ? ' data-mce-placeholder="1"' : "");
                    return e = d(e, 'src="' + t + '"', r), e = d(e, 'data-mce-src="' + t + '"', 'data-mce-src="' + n + '"')
                },
                g = function(t, n) {
                    Y(s.undoManager.data, function(e) {
                        "fragmented" === e.type ? e.fragments = z(e.fragments, function(e) {
                            return m(e, t, n)
                        }) : e.content = m(e.content, t, n)
                    })
                },
                p = function(e, t) {
                    var n, r = s.convertURL(t, "src");
                    g(e.src, t), s.$(e).attr({
                        src: s.getParam("images_reuse_filename", !1, "boolean") ? (n = t) + (-1 === n.indexOf("?") ? "?" : "&") + (new Date).getTime() : t,
                        "data-mce-src": r
                    })
                },
                h = function(n) {
                    return r = r || bb(s, a), b().then(f(function(u) {
                        var e = z(u, function(e) {
                            return e.blobInfo
                        });
                        return r.upload(e, yb(s)).then(f(function(e) {
                            var a = [],
                                t = z(e, function(e, t) {
                                    var n, r, o = u[t].blobInfo,
                                        i = u[t].image;
                                    return e.status && s.getParam("images_replace_blob_uris", !0, "boolean") ? (c.removeByUri(i.src), p(i, e.url)) : e.error && (e.error.options.remove && (g(i.getAttribute("src"), St.transparentSrc), a.push(i)), n = s, r = e.error.message, ab(n, Bu.translate(["Failed to upload image: {0}", r]))), {
                                        element: i,
                                        status: e.status,
                                        uploadUri: e.url,
                                        blobInfo: o
                                    }
                                });
                            return 0 < t.length && l.fireIfChanged(), 0 < a.length && (Iv(s) ? console.error("Removing images on failed uploads is currently unsupported for RTC") : s.undoManager.transact(function() {
                                Y(a, function(e) {
                                    s.dom.remove(e), c.removeByUri(e.src)
                                })
                            })), n && n(t), t
                        }))
                    }))
                },
                v = function(e) {
                    if (mc(s)) return h(e)
                },
                y = function(t) {
                    return !1 !== Q(u, function(e) {
                        return e(t)
                    }) && (0 !== t.getAttribute("src").indexOf("data:") || s.getParam("images_dataimg_filter", R, "function")(t))
                },
                b = function() {
                    return (o = o || oy(a, c)).findAll(s.getBody(), y).then(f(function(e) {
                        return e = H(e, function(e) {
                            return "string" != typeof e || void ab(s, e)
                        }), Y(e, function(e) {
                            g(e.image.src, e.blobInfo.blobUri()), e.image.src = e.blobInfo.blobUri(), e.image.removeAttribute("data-mce-src")
                        }), e
                    }))
                },
                C = function(e) {
                    return e.replace(/src="(blob:[^"]+)"/g, function(e, n) {
                        var t = a.getResultUri(n);
                        if (t) return 'src="' + t + '"';
                        var r = c.getByUri(n);
                        return (r = r || $(s.editorManager.get(), function(e, t) {
                            return e || t.editorUpload && t.editorUpload.blobCache.getByUri(n)
                        }, null)) ? 'src="data:' + r.blob().type + ";base64," + r.base64() + '"' : e
                    })
                };
            return s.on("SetContent", function() {
                (mc(s) ? v : b)()
            }), s.on("RawSaveContent", function(e) {
                e.content = C(e.content)
            }), s.on("GetContent", function(e) {
                e.source_view || "raw" === e.format || "tree" === e.format || (e.content = C(e.content))
            }), s.on("PostRender", function() {
                s.parser.addNodeFilter("img", function(e) {
                    Y(e, function(e) {
                        var t, n = e.attr("src");
                        c.getByUri(n) || (t = a.getResultUri(n)) && e.attr("src", t)
                    })
                })
            }), {
                blobCache: c,
                addFilter: function(e) {
                    u.push(e)
                },
                uploadImages: h,
                uploadImagesAuto: v,
                scanForImages: b,
                destroy: function() {
                    c.destroy(), a.destroy(), o = r = null
                }
            }
        },
        wb = function(e) {
            var r, t, n = {},
                o = function(e, t) {
                    e && ("string" != typeof e ? At.each(e, function(e, t) {
                        o(t, e)
                    }) : (S(t) || (t = [t]), At.each(t, function(e) {
                        "undefined" == typeof e.deep && (e.deep = !e.selector), "undefined" == typeof e.split && (e.split = !e.selector || e.inline), "undefined" == typeof e.remove && e.selector && !e.inline && (e.remove = "none"), e.selector && e.inline && (e.mixed = !0, e.block_expand = !0), "string" == typeof e.classes && (e.classes = e.classes.split(/\s+/))
                    }), n[e] = t))
                };
            return o((r = e.dom, t = {
                valigntop: [{
                    selector: "td,th",
                    styles: {
                        verticalAlign: "top"
                    }
                }],
                valignmiddle: [{
                    selector: "td,th",
                    styles: {
                        verticalAlign: "middle"
                    }
                }],
                valignbottom: [{
                    selector: "td,th",
                    styles: {
                        verticalAlign: "bottom"
                    }
                }],
                alignleft: [{
                    selector: "figure.image",
                    collapsed: !1,
                    classes: "align-left",
                    ceFalseOverride: !0,
                    preview: "font-family font-size"
                }, {
                    selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",
                    styles: {
                        textAlign: "left"
                    },
                    inherit: !1,
                    preview: !1,
                    defaultBlock: "div"
                }, {
                    selector: "img,table,audio,video",
                    collapsed: !1,
                    styles: {
                        "float": "left"
                    },
                    preview: "font-family font-size"
                }],
                aligncenter: [{
                    selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",
                    styles: {
                        textAlign: "center"
                    },
                    inherit: !1,
                    preview: "font-family font-size",
                    defaultBlock: "div"
                }, {
                    selector: "figure.image",
                    collapsed: !1,
                    classes: "align-center",
                    ceFalseOverride: !0,
                    preview: "font-family font-size"
                }, {
                    selector: "img,audio,video",
                    collapsed: !1,
                    styles: {
                        display: "block",
                        marginLeft: "auto",
                        marginRight: "auto"
                    },
                    preview: !1
                }, {
                    selector: "table",
                    collapsed: !1,
                    styles: {
                        marginLeft: "auto",
                        marginRight: "auto"
                    },
                    preview: "font-family font-size"
                }],
                alignright: [{
                    selector: "figure.image",
                    collapsed: !1,
                    classes: "align-right",
                    ceFalseOverride: !0,
                    preview: "font-family font-size"
                }, {
                    selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",
                    styles: {
                        textAlign: "right"
                    },
                    inherit: !1,
                    preview: "font-family font-size",
                    defaultBlock: "div"
                }, {
                    selector: "img,table,audio,video",
                    collapsed: !1,
                    styles: {
                        "float": "right"
                    },
                    preview: "font-family font-size"
                }],
                alignjustify: [{
                    selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",
                    styles: {
                        textAlign: "justify"
                    },
                    inherit: !1,
                    defaultBlock: "div",
                    preview: "font-family font-size"
                }],
                bold: [{
                    inline: "strong",
                    remove: "all",
                    preserve_attributes: ["class", "style"]
                }, {
                    inline: "span",
                    styles: {
                        fontWeight: "bold"
                    }
                }, {
                    inline: "b",
                    remove: "all",
                    preserve_attributes: ["class", "style"]
                }],
                italic: [{
                    inline: "em",
                    remove: "all",
                    preserve_attributes: ["class", "style"]
                }, {
                    inline: "span",
                    styles: {
                        fontStyle: "italic"
                    }
                }, {
                    inline: "i",
                    remove: "all",
                    preserve_attributes: ["class", "style"]
                }],
                underline: [{
                    inline: "span",
                    styles: {
                        textDecoration: "underline"
                    },
                    exact: !0
                }, {
                    inline: "u",
                    remove: "all",
                    preserve_attributes: ["class", "style"]
                }],
                strikethrough: [{
                    inline: "span",
                    styles: {
                        textDecoration: "line-through"
                    },
                    exact: !0
                }, {
                    inline: "strike",
                    remove: "all",
                    preserve_attributes: ["class", "style"]
                }, {
                    inline: "s",
                    remove: "all",
                    preserve_attributes: ["class", "style"]
                }],
                forecolor: {
                    inline: "span",
                    styles: {
                        color: "%value"
                    },
                    links: !0,
                    remove_similar: !0,
                    clear_child_styles: !0
                },
                hilitecolor: {
                    inline: "span",
                    styles: {
                        backgroundColor: "%value"
                    },
                    links: !0,
                    remove_similar: !0,
                    clear_child_styles: !0
                },
                fontname: {
                    inline: "span",
                    toggle: !1,
                    styles: {
                        fontFamily: "%value"
                    },
                    clear_child_styles: !0
                },
                fontsize: {
                    inline: "span",
                    toggle: !1,
                    styles: {
                        fontSize: "%value"
                    },
                    clear_child_styles: !0
                },
                lineheight: {
                    selector: "h1,h2,h3,h4,h5,h6,p,li,td,th,div",
                    defaultBlock: "p",
                    styles: {
                        lineHeight: "%value"
                    }
                },
                fontsize_class: {
                    inline: "span",
                    attributes: {
                        "class": "%value"
                    }
                },
                blockquote: {
                    block: "blockquote",
                    wrapper: !0,
                    remove: "all"
                },
                subscript: {
                    inline: "sub"
                },
                superscript: {
                    inline: "sup"
                },
                code: {
                    inline: "code"
                },
                link: {
                    inline: "a",
                    selector: "a",
                    remove: "all",
                    split: !0,
                    deep: !0,
                    onmatch: function(e, t, n) {
                        return Tn(e) && e.hasAttribute("href")
                    },
                    onformat: function(n, e, t) {
                        At.each(t, function(e, t) {
                            r.setAttrib(n, t, e)
                        })
                    }
                },
                removeformat: [{
                    selector: "b,strong,em,i,font,u,strike,s,sub,sup,dfn,code,samp,kbd,var,cite,mark,q,del,ins,small",
                    remove: "all",
                    split: !0,
                    expand: !1,
                    block_expand: !0,
                    deep: !0
                }, {
                    selector: "span",
                    attributes: ["style", "class"],
                    remove: "empty",
                    split: !0,
                    expand: !1,
                    deep: !0
                }, {
                    selector: "*",
                    attributes: ["style", "class"],
                    split: !1,
                    expand: !1,
                    deep: !0
                }]
            }, At.each("p h1 h2 h3 h4 h5 h6 div address pre dt dd samp".split(/\s/), function(e) {
                t[e] = {
                    block: e,
                    remove: "all"
                }
            }), t)), o(e.getParam("formats")), {
                get: function(e) {
                    return e ? n[e] : n
                },
                has: function(e) {
                    return ve(n, e)
                },
                register: o,
                unregister: function(e) {
                    return e && n[e] && delete n[e], n
                }
            }
        },
        xb = At.each,
        Sb = Su.DOM,
        Nb = function(e, t) {
            var n, o, r, m = t && t.schema || wi({}),
                g = function(e) {
                    o = "string" == typeof e ? {
                        name: e,
                        classes: [],
                        attrs: {}
                    } : e;
                    var t, n, r = Sb.create(o.name);
                    return t = r, (n = o).classes.length && Sb.addClass(t, n.classes.join(" ")), Sb.setAttribs(t, n.attrs), r
                },
                p = function(n, e, t) {
                    var r, o, i, a, u, s, c, l = 0 < e.length && e[0],
                        f = l && l.name,
                        d = (a = f, u = "string" != typeof(i = n) ? i.nodeName.toLowerCase() : i, s = m.getElementRule(u), !(!(c = s && s.parentsRequired) || !c.length) && (a && -1 !== At.inArray(c, a) ? a : c[0]));
                    if (d) f === d ? (o = e[0], e = e.slice(1)) : o = d;
                    else if (l) o = e[0], e = e.slice(1);
                    else if (!t) return n;
                    return o && (r = g(o)).appendChild(n), t && (r || (r = Sb.create("div")).appendChild(n), At.each(t, function(e) {
                        var t = g(e);
                        r.insertBefore(t, n)
                    })), p(r, e, o && o.siblings)
                };
            return e && e.length ? (o = e[0], n = g(o), (r = Sb.create("div")).appendChild(p(n, e.slice(1), o.siblings)), r) : ""
        },
        Eb = function(e) {
            var t, a = {
                classes: [],
                attrs: {}
            };
            return "*" !== (e = a.selector = At.trim(e)) && (t = e.replace(/(?:([#\.]|::?)([\w\-]+)|(\[)([^\]]+)\]?)/g, function(e, t, n, r, o) {
                switch (t) {
                    case "#":
                        a.attrs.id = n;
                        break;
                    case ".":
                        a.classes.push(n);
                        break;
                    case ":":
                        -1 !== At.inArray("checked disabled enabled read-only required".split(" "), n) && (a.attrs[n] = n)
                }
                var i;
                return "[" !== r || (i = o.match(/([\w\-]+)(?:\=\"([^\"]+))?/)) && (a.attrs[i[1]] = i[2]), ""
            })), a.name = t || "div", a
        },
        kb = function(n, e) {
            var t, r, o, i = "",
                a = (o = n.getParam("preview_styles", "font-family font-size font-weight font-style text-decoration text-transform color background-color border border-radius outline text-shadow"), K(o) ? o : "");
            if ("" === a) return "";
            var u = function(e) {
                return e.replace(/%(\w+)/g, "")
            };
            if ("string" == typeof e) {
                if (!(e = n.formatter.get(e))) return;
                e = e[0]
            }
            if ("preview" in e) {
                var s = he(e, "preview");
                if (s.is(!1)) return "";
                a = s.getOr(a)
            }
            t = e.block || e.inline || "span";
            var c, l = (c = e.selector) && "string" == typeof c ? (c = (c = c.split(/\s*,\s*/)[0]).replace(/\s*(~\+|~|\+|>)\s*/g, "$1"), At.map(c.split(/(?:>|\s+(?![^\[\]]+\]))/), function(e) {
                    var t = At.map(e.split(/(?:~\+|~|\+)/), Eb),
                        n = t.pop();
                    return t.length && (n.siblings = t), n
                }).reverse()) : [],
                f = l.length ? (l[0].name || (l[0].name = t), t = e.selector, Nb(l, n)) : Nb([t], n),
                d = Sb.select(t, f)[0] || f.firstChild;
            return xb(e.styles, function(e, t) {
                var n = u(e);
                n && Sb.setStyle(d, t, n)
            }), xb(e.attributes, function(e, t) {
                var n = u(e);
                n && Sb.setAttrib(d, t, n)
            }), xb(e.classes, function(e) {
                var t = u(e);
                Sb.hasClass(d, t) || Sb.addClass(d, t)
            }), n.fire("PreviewFormats"), Sb.setStyles(f, {
                position: "absolute",
                left: -65535
            }), n.getBody().appendChild(f), r = Sb.getStyle(n.getBody(), "fontSize", !0), r = /px$/.test(r) ? parseInt(r, 10) : 0, xb(a.split(" "), function(e) {
                var t = Sb.getStyle(d, e, !0);
                if (!("background-color" === e && /transparent|rgba\s*\([^)]+,\s*0\)/.test(t) && (t = Sb.getStyle(n.getBody(), e, !0), "#ffffff" === Sb.toHex(t).toLowerCase()) || "color" === e && "#000000" === Sb.toHex(t).toLowerCase())) {
                    if ("font-size" === e && /em|%$/.test(t)) {
                        if (0 === r) return;
                        t = parseFloat(t) / (/%$/.test(t) ? 100 : 1) * r + "px"
                    }
                    "border" === e && t && (i += "padding:0 2px;"), i += e + ":" + t + ";"
                }
            }), n.fire("AfterPreviewFormats"), Sb.remove(f), i
        },
        _b = function(s) {
            var e = wb(s),
                u = Ru(null);
            return function(e) {
                e.addShortcut("meta+b", "", "Bold"), e.addShortcut("meta+i", "", "Italic"), e.addShortcut("meta+u", "", "Underline");
                for (var t = 1; t <= 6; t++) e.addShortcut("access+" + t, "", ["FormatBlock", !1, "h" + t]);
                e.addShortcut("access+7", "", ["FormatBlock", !1, "p"]), e.addShortcut("access+8", "", ["FormatBlock", !1, "div"]), e.addShortcut("access+9", "", ["FormatBlock", !1, "address"])
            }(s), wh(s), {
                get: e.get,
                has: e.has,
                register: e.register,
                unregister: e.unregister,
                apply: function(e, t, n) {
                    var r, o, i;
                    r = e, o = t, i = n, Uv(s).formatter.apply(r, o, i)
                },
                remove: function(e, t, n, r) {
                    var o, i, a, u;
                    o = e, i = t, a = n, u = r, Uv(s).formatter.remove(o, i, a, u)
                },
                toggle: function(e, t, n) {
                    var r, o, i;
                    r = e, o = t, i = n, Uv(s).formatter.toggle(r, o, i)
                },
                match: function(e, t, n) {
                    return r = e, o = t, i = n, Uv(s).formatter.match(r, o, i);
                    var r, o, i
                },
                closest: function(e) {
                    return t = e, Uv(s).formatter.closest(t);
                    var t
                },
                matchAll: function(e, t) {
                    return n = e, r = t, Uv(s).formatter.matchAll(n, r);
                    var n, r
                },
                matchNode: function(e, t, n, r) {
                    return o = e, i = t, a = n, u = r, Uv(s).formatter.matchNode(o, i, a, u);
                    var o, i, a, u
                },
                canApply: function(e) {
                    return t = e, Uv(s).formatter.canApply(t);
                    var t
                },
                formatChanged: function(e, t, n) {
                    return r = u, o = e, i = t, void 0 === (a = n) && (a = !1), Uv(s).formatter.formatChanged(r, o, i, a);
                    var r, o, i, a
                },
                getCssText: k(kb, s)
            }
        },
        Ab = function(n, r, o) {
            var i = Ru(!1),
                a = function(e) {
                    Bv(r, !1, o), r.add({}, e)
                };
            n.on("init", function() {
                r.add()
            }), n.on("BeforeExecCommand", function(e) {
                var t = e.command.toLowerCase();
                "undo" !== t && "redo" !== t && "mcerepaint" !== t && (Pv(r, o), r.beforeChange())
            }), n.on("ExecCommand", function(e) {
                var t = e.command.toLowerCase();
                "undo" !== t && "redo" !== t && "mcerepaint" !== t && a(e)
            }), n.on("ObjectResizeStart cut", function() {
                r.beforeChange()
            }), n.on("SaveContent ObjectResized blur", a), n.on("dragend", a), n.on("keyup", function(e) {
                var t = e.keyCode;
                e.isDefaultPrevented() || ((33 <= t && t <= 36 || 37 <= t && t <= 40 || 45 === t || e.ctrlKey) && (a(), n.nodeChanged()), 46 !== t && 8 !== t || n.nodeChanged(), i.get() && r.typing && !1 === Dv(_v(n), r.data[0]) && (!1 === n.isDirty() && (n.setDirty(!0), n.fire("change", {
                    level: r.data[0],
                    lastLevel: null
                })), n.fire("TypingUndo"), i.set(!1), n.nodeChanged()))
            }), n.on("keydown", function(e) {
                var t, n = e.keyCode;
                e.isDefaultPrevented() || (33 <= n && n <= 36 || 37 <= n && n <= 40 || 45 === n ? r.typing && a(e) : (t = e.ctrlKey && !e.altKey || e.metaKey, !(n < 16 || 20 < n) || 224 === n || 91 === n || r.typing || t || (r.beforeChange(), Bv(r, !0, o), r.add({}, e), i.set(!0))))
            }), n.on("mousedown", function(e) {
                r.typing && a(e)
            });
            n.on("input", function(e) {
                var t, n;
                e.inputType && ("insertReplacementText" === e.inputType || "insertText" === (n = e).inputType && null === n.data || ("insertFromPaste" === (t = e).inputType || "insertFromDrop" === t.inputType)) && a(e)
            }), n.on("AddUndo Undo Redo ClearUndos", function(e) {
                e.isDefaultPrevented() || n.nodeChanged()
            })
        },
        Rb = function(s) {
            var e, c = Ru(U.none()),
                l = Ru(0),
                f = Ru(0),
                d = {
                    data: [],
                    typing: !1,
                    beforeChange: function() {
                        var e, t;
                        e = l, t = c, Uv(s).undoManager.beforeChange(e, t)
                    },
                    add: function(e, t) {
                        return n = d, r = f, o = l, i = c, a = e, u = t, Uv(s).undoManager.addUndoLevel(n, r, o, i, a, u);
                        var n, r, o, i, a, u
                    },
                    undo: function() {
                        return e = d, t = l, n = f, Uv(s).undoManager.undo(e, t, n);
                        var e, t, n
                    },
                    redo: function() {
                        return e = s, t = f, n = d.data, Uv(e).undoManager.redo(t, n);
                        var e, t, n
                    },
                    clear: function() {
                        var e, t;
                        e = d, t = f, Uv(s).undoManager.clear(e, t)
                    },
                    reset: function() {
                        var e;
                        e = d, Uv(s).undoManager.reset(e)
                    },
                    hasUndo: function() {
                        return e = d, t = f, Uv(s).undoManager.hasUndo(e, t);
                        var e, t
                    },
                    hasRedo: function() {
                        return e = d, t = f, Uv(s).undoManager.hasRedo(e, t);
                        var e, t
                    },
                    transact: function(e) {
                        return t = d, n = l, r = e, Uv(s).undoManager.transact(t, n, r);
                        var t, n, r
                    },
                    ignore: function(e) {
                        var t, n;
                        t = l, n = e, Uv(s).undoManager.ignore(t, n)
                    },
                    extra: function(e, t) {
                        var n, r, o, i;
                        n = d, r = f, o = e, i = t, Uv(s).undoManager.extra(n, r, o, i)
                    }
                };
            return Iv(s) || Ab(s, d, l), (e = s).addShortcut("meta+z", "", "Undo"), e.addShortcut("meta+y,meta+shift+z", "", "Redo"), d
        },
        Tb = [9, 27, nd.HOME, nd.END, 19, 20, 44, 144, 145, 33, 34, 45, 16, 17, 18, 91, 92, 93, nd.DOWN, nd.UP, nd.LEFT, nd.RIGHT].concat(St.browser.isFirefox() ? [224] : []),
        Db = "data-mce-placeholder",
        Ob = function(e) {
            return "keydown" === e.type || "keyup" === e.type
        },
        Bb = function(e) {
            var t = e.keyCode;
            return t === nd.BACKSPACE || t === nd.DELETE
        },
        Pb = function(a) {
            var e, u = a.dom,
                s = fc(a),
                c = (e = a).getParam("placeholder", sc.getAttrib(e.getElement(), "placeholder"), "string"),
                l = function(e, t) {
                    var n, r, o, i;
                    ! function(e) {
                        if (Ob(e)) {
                            var t = e.keyCode;
                            return !Bb(e) && (nd.metaKeyPressed(e) || e.altKey || 112 <= t && t <= 123 || M(Tb, t))
                        }
                        return !1
                    }(e) && (n = a.getBody(), r = !(Ob(o = e) && !(Bb(o) || "keyup" === o.type && 229 === o.keyCode)) && function(e, t, n) {
                        if (Ko(Tt.fromDom(t), !1)) {
                            var r = "" === n,
                                o = t.firstElementChild;
                            return !o || !e.getStyle(t.firstElementChild, "padding-left") && !e.getStyle(t.firstElementChild, "padding-right") && (r ? !e.isBlock(o) : n === o.nodeName.toLowerCase())
                        }
                        return !1
                    }(u, n, s), "" !== u.getAttrib(n, Db) === r && !t || (u.setAttrib(n, Db, r ? c : null), u.setAttrib(n, "aria-placeholder", r ? c : null), i = r, a.fire("PlaceholderToggle", {
                        state: i
                    }), a.on(r ? "keydown" : "keyup", l), a.off(r ? "keyup" : "keydown", l)))
                };
            c && a.on("init", function(e) {
                l(e, !0), a.on("change SetContent ExecCommand", l), a.on("paste", function(e) {
                    return Kr.setEditorTimeout(a, function() {
                        return l(e)
                    })
                })
            })
        },
        Lb = /[\u0591-\u07FF\uFB1D-\uFDFF\uFE70-\uFEFC]/,
        Ib = function(e, t) {
            return Ot(Tt.fromDom(t), e.getParam("inline_boundaries_selector", "a[href],code,.mce-annotation", "string"))
        },
        Mb = function(e) {
            return "rtl" === Su.DOM.getStyle(e, "direction", !0) || (t = e.textContent, Lb.test(t));
            var t
        },
        Fb = function(e, t, n) {
            var r, o, i, a = (r = e, o = t, i = n, H(Su.DOM.getParents(i.container(), "*", o), r));
            return U.from(a[a.length - 1])
        },
        Ub = function(e, t) {
            if (!t) return t;
            var n = t.container(),
                r = t.offset();
            return e ? Co(n) ? Fn(n.nextSibling) ? Ms(n.nextSibling, 0) : Ms.after(n) : So(t) ? Ms(n, r + 1) : t : Co(n) ? Fn(n.previousSibling) ? Ms(n.previousSibling, n.previousSibling.data.length) : Ms.before(n) : No(t) ? Ms(n, r - 1) : t
        },
        zb = k(Ub, !0),
        jb = k(Ub, !1),
        Hb = function(e, t) {
            return It(e, t) ? Or(t, function(e) {
                return io(e) || uo(e)
            }, (n = e, function(e) {
                return Pt(n, Tt.fromDom(e.dom.parentNode))
            })) : U.none();
            var n
        },
        Vb = function(e) {
            var t, n, r;
            e.dom.isEmpty(e.getBody()) && (e.setContent(""), n = (t = e).getBody(), r = n.firstChild && t.dom.isBlock(n.firstChild) ? n.firstChild : n, t.selection.setCursorLocation(r, 0))
        },
        qb = function(e, t) {
            return {
                from: e,
                to: t
            }
        },
        $b = function(e, t) {
            var n = Tt.fromDom(e),
                r = Tt.fromDom(t.container());
            return Hb(n, r).map(function(e) {
                return {
                    block: e,
                    position: t
                }
            })
        },
        Wb = function(o, i, e) {
            var t = $b(o, Ms.fromRangeStart(e)),
                n = t.bind(function(e) {
                    return Tl(i, o, e.position).bind(function(e) {
                        return $b(o, e).map(function(e) {
                            return t = o, n = i, Hn((r = e).position.getNode()) && !1 === Ko(r.block) ? Bl(!1, r.block.dom).bind(function(e) {
                                return e.isEqual(r.position) ? Tl(n, t, e).bind(function(e) {
                                    return $b(t, e)
                                }) : U.some(r)
                            }).getOr(r) : r;
                            var t, n, r
                        })
                    })
                });
            return us(t, n, qb).filter(function(e) {
                return !1 === Pt((r = e).from.block, r.to.block) && Kt((n = e).from.block).bind(function(t) {
                    return Kt(n.to.block).filter(function(e) {
                        return Pt(t, e)
                    })
                }).isSome() && (!1 === $n((t = e).from.block.dom) && !1 === $n(t.to.block.dom));
                var t, n, r
            })
        },
        Kb = function(e) {
            var t, n = (t = Qt(e), G(t, no).fold(function() {
                return t
            }, function(e) {
                return t.slice(0, e)
            }));
            return Y(n, hn), n
        },
        Xb = function(e, t) {
            var n = yg(t, e);
            return W(n.reverse(), function(e) {
                return Ko(e)
            }).each(hn)
        },
        Yb = function(e, t, n, r) {
            if (Ko(n)) return gg(n), Il(n.dom);
            0 === H(Gt(r), function(e) {
                return !Ko(e)
            }).length && Ko(t) && ln(r, Tt.fromTag("br"));
            var o = Ll(n.dom, Ms.before(r.dom));
            return Y(Kb(t), function(e) {
                ln(r, e)
            }), Xb(e, t), o
        },
        Gb = function(e, t, n) {
            if (Ko(n)) return hn(n), Ko(t) && gg(t), Il(t.dom);
            var r = Ml(n.dom);
            return Y(Kb(t), function(e) {
                mn(n, e)
            }), Xb(e, t), r
        },
        Jb = function(e, t) {
            return It(t, e) ? (n = yg(e, t), U.from(n[n.length - 1])) : U.none();
            var n
        },
        Qb = function(e, t) {
            Bl(e, t.dom).map(function(e) {
                return e.getNode()
            }).map(Tt.fromDom).filter(oo).each(hn)
        },
        Zb = function(e, t, n) {
            return Qb(!0, t), Qb(!1, n), Jb(t, n).fold(k(Gb, e, t, n), k(Yb, e, t, n))
        },
        eC = function(e, t, n, r) {
            return t ? Zb(e, r, n) : Zb(e, n, r)
        },
        tC = function(t, n) {
            var e, r, o, i = Tt.fromDom(t.getBody()),
                a = (e = i.dom, r = n, ((o = t.selection.getRng()).collapsed ? Wb(e, r, o) : U.none()).bind(function(e) {
                    return eC(i, n, e.from.block, e.to.block)
                }));
            return a.each(function(e) {
                t.selection.setRng(e.toRange())
            }), a.isSome()
        },
        nC = function(e, t) {
            var n = Tt.fromDom(t),
                r = k(Pt, e);
            return Dr(n, co, r).isSome()
        },
        rC = function(e, t) {
            var n, r, o = Ll(e.dom, Ms.fromRangeStart(t)).isNone(),
                i = Pl(e.dom, Ms.fromRangeEnd(t)).isNone();
            return !(nC(n = e, (r = t).startContainer) || nC(n, r.endContainer)) && o && i
        },
        oC = function(e) {
            var n, r, o, t, i = Tt.fromDom(e.getBody()),
                a = e.selection.getRng();
            return rC(i, a) ? ((t = e).setContent(""), t.selection.setCursorLocation(), !0) : (n = i, r = e.selection, o = r.getRng(), us(Hb(n, Tt.fromDom(o.startContainer)), Hb(n, Tt.fromDom(o.endContainer)), function(e, t) {
                return !1 === Pt(e, t) && (o.deleteContents(), eC(n, !0, e, t).each(function(e) {
                    r.setRng(e.toRange())
                }), !0)
            }).getOr(!1))
        },
        iC = function(e, t) {
            return !e.selection.isCollapsed() && oC(e)
        },
        aC = qn,
        uC = $n,
        sC = function(e, t, n, r, o) {
            return U.from(t._selectionOverrides.showCaret(e, n, r, o))
        },
        cC = function(e, t) {
            var n, r;
            return e.fire("BeforeObjectSelected", {
                target: t
            }).isDefaultPrevented() ? U.none() : U.some(((r = (n = t).ownerDocument.createRange()).selectNode(n), r))
        },
        lC = function(e, t, n) {
            var r = il(1, e.getBody(), t),
                o = Ms.fromRangeStart(r),
                i = o.getNode();
            if (jc(i)) return sC(1, e, i, !o.isAtEnd(), !1);
            var a = o.getNode(!0);
            if (jc(a)) return sC(1, e, a, !1, !1);
            var u = e.dom.getParent(o.getNode(), function(e) {
                return uC(e) || aC(e)
            });
            return jc(u) ? sC(1, e, u, !1, n) : U.none()
        },
        fC = function(e, t, n) {
            return t.collapsed ? lC(e, t, n).getOr(t) : t
        },
        dC = function(e) {
            return fg(e) || ug(e)
        },
        mC = function(e) {
            return dg(e) || sg(e)
        },
        gC = function(n, r, e, t, o, i) {
            var a, u;
            return sC(t, n, i.getNode(!o), o, !0).each(function(e) {
                var t;
                r.collapsed ? (t = r.cloneRange(), o ? t.setEnd(e.startContainer, e.startOffset) : t.setStart(e.endContainer, e.endOffset), t.deleteContents()) : r.deleteContents(), n.selection.setRng(e)
            }), a = n.dom, Fn(u = e) && 0 === u.data.length && a.remove(u), !0
        },
        pC = function(e, t) {
            var n = e.selection.getRng();
            if (!Fn(n.commonAncestorContainer)) return !1;
            var r = t ? Fs.Forwards : Fs.Backwards,
                o = El(e.getBody()),
                i = k(cl, t ? o.next : o.prev),
                a = t ? dC : mC,
                u = ul(r, e.getBody(), n),
                s = Ub(t, i(u));
            if (!s || !ll(u, s)) return !1;
            if (a(s)) return gC(e, n, u.getNode(), r, t, s);
            var c = i(s);
            return !!(c && a(c) && ll(s, c)) && gC(e, n, u.getNode(), r, t, c)
        },
        hC = xr([{
            remove: ["element"]
        }, {
            moveToElement: ["element"]
        }, {
            moveToPosition: ["position"]
        }]),
        vC = function(e, t, n, r) {
            var o = r.getNode(!1 === t);
            return Hb(Tt.fromDom(e), Tt.fromDom(n.getNode())).map(function(e) {
                return Ko(e) ? hC.remove(e.dom) : hC.moveToElement(o)
            }).orThunk(function() {
                return U.some(hC.moveToElement(o))
            })
        },
        yC = function(u, s, c) {
            return Tl(s, u, c).bind(function(e) {
                return a = e.getNode(), co(Tt.fromDom(a)) || uo(Tt.fromDom(a)) ? U.none() : (t = u, o = e, i = function(e) {
                    return ro(Tt.fromDom(e)) && !Zc(r, o, t)
                }, al(!(n = s), r = c).fold(function() {
                    return al(n, o).fold(A, i)
                }, i) ? U.none() : s && $n(e.getNode()) || !1 === s && $n(e.getNode(!0)) ? vC(u, s, c, e) : s && dg(c) || !1 === s && fg(c) ? U.some(hC.moveToPosition(e)) : U.none());
                var t, n, r, o, i, a
            })
        },
        bC = function(r, e, o) {
            return i = e, a = o.getNode(!1 === i), u = i ? "after" : "before", Tn(a) && a.getAttribute("data-mce-caret") === u ? (t = e, n = o.getNode(!1 === e), (t && $n(n.nextSibling) ? U.some(hC.moveToElement(n.nextSibling)) : !1 === t && $n(n.previousSibling) ? U.some(hC.moveToElement(n.previousSibling)) : U.none()).fold(function() {
                return yC(r, e, o)
            }, U.some)) : yC(r, e, o).bind(function(e) {
                return t = r, n = o, e.fold(function(e) {
                    return U.some(hC.remove(e))
                }, function(e) {
                    return U.some(hC.moveToElement(e))
                }, function(e) {
                    return Zc(n, e, t) ? U.none() : U.some(hC.moveToPosition(e))
                });
                var t, n
            });
            var t, n, i, a, u
        },
        CC = function(e, t) {
            return U.from(Zf(e.getBody(), t))
        },
        wC = function(a, u) {
            var e = a.selection.getNode();
            return CC(a, e).filter($n).fold(function() {
                return e = a.getBody(), t = u, n = a.selection.getRng(), r = il(t ? 1 : -1, e, n), o = Ms.fromRangeStart(r), i = Tt.fromDom(e), (!1 === t && dg(o) ? U.some(hC.remove(o.getNode(!0))) : t && fg(o) ? U.some(hC.remove(o.getNode())) : !1 === t && fg(o) && Tg(i, o) ? Dg(i, o).map(function(e) {
                    return hC.remove(e.getNode())
                }) : t && dg(o) && Rg(i, o) ? Og(i, o).map(function(e) {
                    return hC.remove(e.getNode())
                }) : bC(e, t, o)).exists(function(e) {
                    return e.fold(function(e) {
                        return o._selectionOverrides.hideFakeCaret(), up(o, i, Tt.fromDom(e)), !0
                    }, (r = i = u, function(e) {
                        var t = r ? Ms.before(e) : Ms.after(e);
                        return n.selection.setRng(t.toRange()), !0
                    }), (t = n = o = a, function(e) {
                        return t.selection.setRng(e.toRange()), !0
                    }));
                    var t, n, r, o, i
                });
                var e, t, n, r, o, i
            }, R)
        },
        xC = function(t, n) {
            var e = t.selection.getNode();
            return !!$n(e) && CC(t, e.parentNode).filter($n).fold(function() {
                var e;
                return e = Tt.fromDom(t.getBody()), Y($u(e, ".mce-offscreen-selection"), hn), up(t, n, Tt.fromDom(t.selection.getNode())), Vb(t), !0
            }, R)
        },
        SC = function(e) {
            var t, n = e.dom,
                r = e.selection,
                o = Zf(e.getBody(), r.getNode());
            return qn(o) && n.isBlock(o) && n.isEmpty(o) && (t = n.create("br", {
                "data-mce-bogus": "1"
            }), n.setHTML(o, ""), o.appendChild(t), r.setRng(Ms.before(t).toRange())), !0
        },
        NC = function(e, t) {
            return (e.selection.isCollapsed() ? wC : xC)(e, t)
        },
        EC = function(e, t) {
            return !!e.selection.isCollapsed() && (n = e, r = t, o = Ms.fromRangeStart(n.selection.getRng()), Tl(r, n.getBody(), o).filter(function(e) {
                return (r ? ig : ag)(e)
            }).bind(function(e) {
                return U.from(el(r ? 0 : -1, e))
            }).exists(function(e) {
                return n.selection.select(e), !0
            }));
            var n, r, o
        },
        kC = Fn,
        _C = function(e) {
            return kC(e) && e.data[0] === go
        },
        AC = function(e) {
            return kC(e) && e.data[e.data.length - 1] === go
        },
        RC = function(e) {
            return e.ownerDocument.createTextNode(go)
        },
        TC = function(e, t) {
            return (e ? function(e) {
                if (kC(e.previousSibling)) return AC(e.previousSibling) || e.previousSibling.appendData(go), e.previousSibling;
                if (kC(e)) return _C(e) || e.insertData(0, go), e;
                var t = RC(e);
                return e.parentNode.insertBefore(t, e), t
            } : function(e) {
                if (kC(e.nextSibling)) return _C(e.nextSibling) || e.nextSibling.insertData(0, go), e.nextSibling;
                if (kC(e)) return AC(e) || e.appendData(go), e;
                var t = RC(e);
                return e.nextSibling ? e.parentNode.insertBefore(t, e.nextSibling) : e.parentNode.appendChild(t), t
            })(t)
        },
        DC = k(TC, !0),
        OC = k(TC, !1),
        BC = function(e, t) {
            return Fn(e.container()) ? TC(t, e.container()) : TC(t, e.getNode())
        },
        PC = function(e, t) {
            var n = t.get();
            return n && e.container() === n && Co(n)
        },
        LC = function(n, e) {
            return e.fold(function(e) {
                Bc(n.get());
                var t = DC(e);
                return n.set(t), U.some(Ms(t, t.length - 1))
            }, function(e) {
                return Il(e).map(function(e) {
                    if (PC(e, n)) return Ms(n.get(), 1);
                    Bc(n.get());
                    var t = BC(e, !0);
                    return n.set(t), Ms(t, 1)
                })
            }, function(e) {
                return Ml(e).map(function(e) {
                    if (PC(e, n)) return Ms(n.get(), n.get().length - 1);
                    Bc(n.get());
                    var t = BC(e, !1);
                    return n.set(t), Ms(t, t.length - 1)
                })
            }, function(e) {
                Bc(n.get());
                var t = OC(e);
                return n.set(t), U.some(Ms(t, 1))
            })
        },
        IC = function(e, t) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n].apply(null, t);
                if (r.isSome()) return r
            }
            return U.none()
        },
        MC = xr([{
            before: ["element"]
        }, {
            start: ["element"]
        }, {
            end: ["element"]
        }, {
            after: ["element"]
        }]),
        FC = function(e, t) {
            var n = Qc(t, e);
            return n || e
        },
        UC = function(e, t, n) {
            var r = zb(n),
                o = FC(t, r.container());
            return Fb(e, o, r).fold(function() {
                return Pl(o, r).bind(k(Fb, e, o)).map(function(e) {
                    return MC.before(e)
                })
            }, U.none)
        },
        zC = function(e, t) {
            return null === zl(e, t)
        },
        jC = function(e, t, n) {
            return Fb(e, t, n).filter(k(zC, t))
        },
        HC = function(e, t, n) {
            var r = jb(n);
            return jC(e, t, r).bind(function(e) {
                return Ll(e, r).isNone() ? U.some(MC.start(e)) : U.none()
            })
        },
        VC = function(e, t, n) {
            var r = zb(n);
            return jC(e, t, r).bind(function(e) {
                return Pl(e, r).isNone() ? U.some(MC.end(e)) : U.none()
            })
        },
        qC = function(e, t, n) {
            var r = jb(n),
                o = FC(t, r.container());
            return Fb(e, o, r).fold(function() {
                return Ll(o, r).bind(k(Fb, e, o)).map(function(e) {
                    return MC.after(e)
                })
            }, U.none)
        },
        $C = function(e) {
            return !1 === Mb(KC(e))
        },
        WC = function(e, t, n) {
            return IC([UC, HC, VC, qC], [e, t, n]).filter($C)
        },
        KC = function(e) {
            return e.fold(g, g, g, g)
        },
        XC = function(e) {
            return e.fold(E("before"), E("start"), E("end"), E("after"))
        },
        YC = function(e) {
            return e.fold(MC.before, MC.before, MC.after, MC.after)
        },
        GC = function(e) {
            return e.fold(MC.start, MC.start, MC.end, MC.end)
        },
        JC = function(a, e, u, t, n, s) {
            return us(Fb(e, u, t), Fb(e, u, n), function(e, t) {
                return e !== t && (r = t, o = Qc(e, n = u), i = Qc(r, n), o && o === i) ? MC.after(a ? e : t) : s;
                var n, r, o, i
            }).getOr(s)
        },
        QC = function(e, r) {
            return e.fold(R, function(e) {
                return n = r, !(XC(t = e) === XC(n) && KC(t) === KC(n));
                var t, n
            })
        },
        ZC = function(e, t) {
            return e ? t.fold(C(U.some, MC.start), U.none, C(U.some, MC.after), U.none) : t.fold(U.none, C(U.some, MC.before), U.none, C(U.some, MC.end))
        },
        ew = function(e, a, u, s) {
            var t = Ub(e, s),
                c = WC(a, u, t);
            return WC(a, u, t).bind(k(ZC, e)).orThunk(function() {
                return n = a, r = u, o = c, i = Ub(t = e, s), Tl(t, r, i).map(k(Ub, t)).fold(function() {
                    return o.map(YC)
                }, function(e) {
                    return WC(n, r, e).map(k(JC, t, n, r, i, e)).filter(k(QC, o))
                }).filter($C);
                var t, n, r, o, i
            })
        },
        tw = (k(ew, !1), k(ew, !0), function(e, t, n) {
            var r = e ? 1 : -1;
            return t.setRng(Ms(n.container(), n.offset() + r).toRange()), t.getSel().modify("move", e ? "forward" : "backward", "word"), !0
        }),
        nw = function(e, t) {
            var n = t.selection.getRng(),
                r = e ? Ms.fromRangeEnd(n) : Ms.fromRangeStart(n);
            return !!m(t.selection.getSel().modify) && (e && So(r) ? tw(!0, t.selection, r) : !(e || !No(r)) && tw(!1, t.selection, r))
        };
    (rb = nb = nb || {})[rb.Br = 0] = "Br", rb[rb.Block = 1] = "Block", rb[rb.Wrap = 2] = "Wrap", rb[rb.Eol = 3] = "Eol";
    var rw, ow, iw = function(e, t) {
            return e === Fs.Backwards ? Z(t) : t
        },
        aw = function(e, t, n, r) {
            for (var o, i, a, u, s, c, l = El(n), f = r, d = []; f && (s = l, c = f, o = t === Fs.Forwards ? s.next(c) : s.prev(c));) {
                if (Hn(o.getNode(!1))) return t === Fs.Forwards ? {
                    positions: iw(t, d).concat([o]),
                    breakType: nb.Br,
                    breakAt: U.some(o)
                } : {
                    positions: iw(t, d),
                    breakType: nb.Br,
                    breakAt: U.some(o)
                };
                if (o.isVisible()) {
                    if (e(f, o)) {
                        var m = (i = t, a = f, Hn((u = o).getNode(i === Fs.Forwards)) ? nb.Br : !1 === Zc(a, u) ? nb.Block : nb.Wrap);
                        return {
                            positions: iw(t, d),
                            breakType: m,
                            breakAt: U.some(o)
                        }
                    }
                    d.push(o), f = o
                } else f = o
            }
            return {
                positions: iw(t, d),
                breakType: nb.Eol,
                breakAt: U.none()
            }
        },
        uw = function(n, r, o, e) {
            return r(o, e).breakAt.map(function(e) {
                var t = r(o, e).positions;
                return n === Fs.Backwards ? t.concat(e) : [e].concat(t)
            }).getOr([])
        },
        sw = function(e, i) {
            return $(e, function(e, o) {
                return e.fold(function() {
                    return U.some(o)
                }, function(r) {
                    return us(re(r.getClientRects()), re(o.getClientRects()), function(e, t) {
                        var n = Math.abs(i - e.left);
                        return Math.abs(i - t.left) <= n ? o : r
                    }).or(e)
                })
            }, U.none())
        },
        cw = function(t, e) {
            return re(e.getClientRects()).bind(function(e) {
                return sw(t, e.left)
            })
        },
        lw = k(aw, Ms.isAbove, -1),
        fw = k(aw, Ms.isBelow, 1),
        dw = k(uw, -1, lw),
        mw = k(uw, 1, fw),
        gw = function(t) {
            var e = function(e) {
                return z(e, function(e) {
                    return (e = cs(e)).node = t, e
                })
            };
            if (Tn(t)) return e(t.getClientRects());
            if (Fn(t)) {
                var n = t.ownerDocument.createRange();
                return n.setStart(t, 0), n.setEnd(t, t.data.length), e(n.getClientRects())
            }
        },
        pw = function(e) {
            return J(e, gw)
        };
    (ow = rw = rw || {})[ow.Up = -1] = "Up", ow[ow.Down = 1] = "Down";
    var hw = function(o, i, a, e, u, t) {
            var s = 0,
                c = [],
                n = function(e) {
                    var t, n, r = pw([e]);
                    for (-1 === o && (r = r.reverse()), t = 0; t < r.length; t++)
                        if (n = r[t], !a(n, l)) {
                            if (0 < c.length && i(n, ke(c)) && s++, n.line = s, u(n)) return !0;
                            c.push(n)
                        }
                },
                l = ke(t.getClientRects());
            if (!l) return c;
            var r = t.getNode();
            return n(r),
                function(e, t, n, r) {
                    for (; r = Jc(r, e, Uo, t);)
                        if (n(r)) return
                }(o, e, n, r), c
        },
        vw = k(hw, rw.Up, ds, ms),
        yw = k(hw, rw.Down, ms, ds),
        bw = function(n) {
            return function(e) {
                return t = n, e.line > t;
                var t
            }
        },
        Cw = function(n) {
            return function(e) {
                return t = n, e.line === t;
                var t
            }
        },
        ww = $n,
        xw = Jc,
        Sw = function(e, t) {
            return Math.abs(e.left - t)
        },
        Nw = function(e, t) {
            return Math.abs(e.right - t)
        },
        Ew = function(e, t) {
            return e >= t.left && e <= t.right
        },
        kw = function(e, t) {
            return e >= t.top && e <= t.bottom
        },
        _w = function(e, o) {
            return Ne(e, function(e, t) {
                var n = Math.min(Sw(e, o), Nw(e, o)),
                    r = Math.min(Sw(t, o), Nw(t, o));
                return Ew(o, t) || !Ew(o, e) && (r === n && ww(t.node) || r < n) ? t : e
            })
        },
        Aw = function(e, t, n, r, o) {
            var i = xw(r, e, Uo, t, !o);
            do {
                if (!i || n(i)) return
            } while (i = xw(i, e, Uo, t))
        },
        Rw = function(e, t, n) {
            var r, o, i = pw(H(ie(e.getElementsByTagName("*")), Hc)),
                a = H(i, k(kw, n));
            if (u = _w(a, t)) {
                var u, s = !Ln(u.node) && !Kn(u.node);
                if ((u = _w(function(e, r, t) {
                        void 0 === t && (t = !0);
                        var o = [],
                            n = function(t, e) {
                                var n = H(pw([e]), function(e) {
                                    return !t(e, r)
                                });
                                return o = o.concat(n), 0 === n.length
                            };
                        return o.push(r), Aw(rw.Up, e, k(n, ds), r.node, t), Aw(rw.Down, e, k(n, ms), r.node, t), o
                    }(e, u, s), t)) && Hc(u.node)) return o = t, {
                    node: (r = u).node,
                    before: Sw(r, o) < Nw(r, o)
                }
            }
            return null
        },
        Tw = function(e, t) {
            e.selection.setRng(t), Hd(e, e.selection.getRng())
        },
        Dw = function(e, t, n) {
            return U.some(fC(e, t, n))
        },
        Ow = function(e, t, n, r, o, i) {
            var a = t === Fs.Forwards,
                u = El(e.getBody()),
                s = k(cl, a ? u.next : u.prev),
                c = a ? r : o;
            if (!n.collapsed) {
                var l = ps(n);
                if (i(l)) return sC(t, e, l, t === Fs.Backwards, !1)
            }
            var f = ul(t, e.getBody(), n);
            if (c(f)) return cC(e, f.getNode(!a));
            var d = Ub(a, s(f)),
                m = bo(n.startContainer);
            if (!d) return m ? U.some(n) : U.none();
            if (c(d)) return sC(t, e, d.getNode(!a), a, !1);
            var g = s(d);
            return g && c(g) && ll(d, g) ? sC(t, e, g.getNode(!a), a, !1) : m ? Dw(e, d.toRange(), !1) : U.none()
        },
        Bw = function(t, e, n, r, o, i) {
            var a = ul(e, t.getBody(), n),
                u = ke(a.getClientRects()),
                s = e === rw.Down;
            if (!u) return U.none();
            var c, l = (s ? yw : vw)(t.getBody(), bw(1), a),
                f = H(l, Cw(1)),
                d = u.left,
                m = _w(f, d);
            if (m && i(m.node)) {
                var g = Math.abs(d - m.left),
                    p = Math.abs(d - m.right);
                return sC(e, t, m.node, g < p, !1)
            }
            if (c = r(a) ? a.getNode() : o(a) ? a.getNode(!0) : ps(n)) {
                var h = function(e, t, n, r) {
                        var o, i, a, u, s = El(t),
                            c = [],
                            l = 0,
                            f = function(e) {
                                return ke(e.getClientRects())
                            },
                            d = 1 === e ? (o = s.next, i = ms, a = ds, Ms.after(r)) : (o = s.prev, i = ds, a = ms, Ms.before(r)),
                            m = f(d);
                        do {
                            if (d.isVisible() && !a(u = f(d), m)) {
                                if (0 < c.length && i(u, ke(c)) && l++, (u = cs(u)).position = d, u.line = l, n(u)) return c;
                                c.push(u)
                            }
                        } while (d = o(d));
                        return c
                    }(e, t.getBody(), bw(1), c),
                    v = _w(H(h, Cw(1)), d);
                if (v) return Dw(t, v.position.toRange(), !1);
                if (v = ke(H(h, Cw(0)))) return Dw(t, v.position.toRange(), !1)
            }
            return 0 === f.length ? Pw(t, s).filter(s ? o : r).map(function(e) {
                return fC(t, e.toRange(), !1)
            }) : U.none()
        },
        Pw = function(e, t) {
            var n = e.selection.getRng(),
                r = e.getBody();
            if (t) {
                var o = Ms.fromRangeEnd(n),
                    i = fw(r, o);
                return oe(i.positions)
            }
            o = Ms.fromRangeStart(n), i = lw(r, o);
            return re(i.positions)
        },
        Lw = function(t, e, n) {
            return Pw(t, e).filter(n).exists(function(e) {
                return t.selection.setRng(e.toRange()), !0
            })
        },
        Iw = function(e, t) {
            var n = e.dom.createRng();
            n.setStart(t.container(), t.offset()), n.setEnd(t.container(), t.offset()), e.selection.setRng(n)
        },
        Mw = function(e, t) {
            e ? t.setAttribute("data-mce-selected", "inline-boundary") : t.removeAttribute("data-mce-selected")
        },
        Fw = function(t, e, n) {
            return LC(e, n).map(function(e) {
                return Iw(t, e), n
            })
        },
        Uw = function(e, t) {
            var n, r;
            e.selection.isCollapsed() && !0 !== e.composing && t.get() && (n = Ms.fromRangeStart(e.selection.getRng()), Ms.isTextPosition(n) && !1 === (So(r = n) || No(r)) && (Iw(e, Oc(t.get(), n)), t.set(null)))
        },
        zw = function(e, t, n) {
            return !!xc(e) && (o = t, i = n, a = (r = e).getBody(), u = Ms.fromRangeStart(r.selection.getRng()), s = k(Ib, r), ew(i, s, a, u).bind(function(e) {
                return Fw(r, o, e)
            }).isSome());
            var r, o, i, a, u, s
        },
        jw = function(e, t, n) {
            return !!xc(t) && nw(e, t)
        },
        Hw = function(d) {
            var m = Ru(null),
                g = k(Ib, d);
            return d.on("NodeChange", function(e) {
                var n, r, o, t, i, a, u, s, c, l, f;
                !xc(d) || St.browser.isIE() && e.initial || (a = g, u = d.dom, s = e.parents, c = z($u(Tt.fromDom(u.getRoot()), '*[data-mce-selected="inline-boundary"]'), function(e) {
                    return e.dom
                }), l = H(c, a), f = H(s, a), Y(ee(l, f), k(Mw, !1)), Y(ee(f, l), k(Mw, !0)), Uw(d, m), n = g, r = d, o = m, t = e.parents, r.selection.isCollapsed() && (i = H(t, n), Y(i, function(e) {
                    var t = Ms.fromRangeStart(r.selection.getRng());
                    WC(n, r.getBody(), t).bind(function(e) {
                        return Fw(r, o, e)
                    })
                })))
            }), m
        },
        Vw = k(jw, !0),
        qw = k(jw, !1),
        $w = function(n, t, r) {
            if (xc(n)) {
                var e = Pw(n, t).getOrThunk(function() {
                    var e = n.selection.getRng();
                    return t ? Ms.fromRangeEnd(e) : Ms.fromRangeStart(e)
                });
                return WC(k(Ib, n), n.getBody(), e).exists(function(e) {
                    var t = YC(e);
                    return LC(r, t).exists(function(e) {
                        return Iw(n, e), !0
                    })
                })
            }
            return !1
        },
        Ww = function(t, n) {
            return function(e) {
                return LC(n, e).exists(function(e) {
                    return Iw(t, e), !0
                })
            }
        },
        Kw = function(r, o, i, a) {
            var u = r.getBody(),
                s = k(Ib, r);
            r.undoManager.ignore(function() {
                var e, t, n;
                r.selection.setRng((e = i, t = a, (n = document.createRange()).setStart(e.container(), e.offset()), n.setEnd(t.container(), t.offset()), n)), r.execCommand("Delete"), WC(s, u, Ms.fromRangeStart(r.selection.getRng())).map(GC).map(Ww(r, o))
            }), r.nodeChanged()
        },
        Xw = function(n, r, i, o) {
            var e, t, a = (e = n.getBody(), t = o.container(), Qc(t, e) || e),
                u = k(Ib, n),
                s = WC(u, a, o);
            return s.bind(function(e) {
                return i ? e.fold(E(U.some(GC(e))), U.none, E(U.some(YC(e))), U.none) : e.fold(U.none, E(U.some(YC(e))), U.none, E(U.some(GC(e))))
            }).map(Ww(n, r)).getOrThunk(function() {
                var t = Dl(i, a, o),
                    e = t.bind(function(e) {
                        return WC(u, a, e)
                    });
                return us(s, e, function() {
                    return Fb(u, a, o).exists(function(e) {
                        return !!us(Il(o = e), Ml(o), function(e, t) {
                            var n = Ub(!0, e),
                                r = Ub(!1, t);
                            return Pl(o, n).forall(function(e) {
                                return e.isEqual(r)
                            })
                        }).getOr(!0) && (up(n, i, Tt.fromDom(e)), !0);
                        var o
                    })
                }).orThunk(function() {
                    return e.bind(function(e) {
                        return t.map(function(e) {
                            return i ? Kw(n, r, o, e) : Kw(n, r, e, o), !0
                        })
                    })
                }).getOr(!1)
            })
        },
        Yw = function(e, t, n) {
            if (e.selection.isCollapsed() && xc(e)) {
                var r = Ms.fromRangeStart(e.selection.getRng());
                return Xw(e, t, n, r)
            }
            return !1
        },
        Gw = function(e) {
            return 1 === Qt(e).length
        },
        Jw = function(e, t, n, r) {
            var o, i, a, u, s, c = k(xh, t),
                l = z(H(r, c), function(e) {
                    return e.dom
                });
            0 === l.length ? up(t, e, n) : (i = n.dom, a = l, u = ph(!1), s = bh(a, u.dom), ln(Tt.fromDom(i), u), hn(Tt.fromDom(i)), o = Ms(s, 0), t.selection.setRng(o.toRange()))
        },
        Qw = function(r, o) {
            var t, e = Tt.fromDom(r.getBody()),
                n = Tt.fromDom(r.selection.getStart()),
                s = H((t = yg(n, e), G(t, no).fold(E(t), function(e) {
                    return t.slice(0, e)
                })), Gw);
            return oe(s).exists(function(e) {
                var t, i, a, u, n = Ms.fromRangeStart(r.selection.getRng());
                return i = o, a = n, u = e.dom, !(!us(Il(u), Ml(u), function(e, t) {
                    var n = Ub(!0, e),
                        r = Ub(!1, t),
                        o = Ub(!1, a);
                    return i ? Pl(u, o).exists(function(e) {
                        return e.isEqual(r) && a.isEqual(n)
                    }) : Ll(u, o).exists(function(e) {
                        return e.isEqual(n) && a.isEqual(r)
                    })
                }).getOr(!0) || Ul((t = e).dom) && mh(t.dom)) && (Jw(o, r, e, s), !0)
            })
        },
        Zw = function(e, t) {
            return !!e.selection.isCollapsed() && Qw(e, t)
        },
        ex = function(e, t, n) {
            return e._selectionOverrides.hideFakeCaret(), up(e, t, Tt.fromDom(n)), !0
        },
        tx = function(e, t) {
            return e.selection.isCollapsed() ? (i = e, u = (a = t) ? ug : sg, s = a ? Fs.Forwards : Fs.Backwards, c = ul(s, i.getBody(), i.selection.getRng()), u(c) ? ex(i, a, c.getNode(!a)) : U.from(Ub(a, c)).filter(function(e) {
                return u(e) && ll(c, e)
            }).exists(function(e) {
                return ex(i, a, e.getNode(!a))
            })) : (r = t, o = (n = e).selection.getNode(), !!Kn(o) && ex(n, r, o));
            var n, r, o, i, a, u, s, c
        },
        nx = function(e) {
            var t = parseInt(e, 10);
            return isNaN(t) ? 0 : t
        },
        rx = function(e, t) {
            return (e || "table" === Mt(t) ? "margin" : "padding") + ("rtl" === nr(t, "direction") ? "-right" : "-left")
        },
        ox = function(e) {
            var r, t = ax(e);
            return !e.mode.isReadOnly() && (1 < t.length || (r = e, Q(t, function(e) {
                var t = rx(vc(r), e),
                    n = or(e, t).map(nx).getOr(0);
                return "false" !== r.dom.getContentEditable(e.dom) && 0 < n
            })))
        },
        ix = function(e) {
            return ao(e) || uo(e)
        },
        ax = function(e) {
            return H(z(e.selection.getSelectedBlocks(), Tt.fromDom), function(e) {
                return !ix(e) && !Kt(e).map(ix).getOr(!1) && Or(e, function(e) {
                    return qn(e.dom) || $n(e.dom)
                }).exists(function(e) {
                    return qn(e.dom)
                })
            })
        },
        ux = function(e, c) {
            var l = e.dom,
                t = e.selection,
                n = e.formatter,
                r = e.getParam("indentation", "40px", "string"),
                f = /[a-z%]+$/i.exec(r)[0],
                d = parseInt(r, 10),
                m = vc(e),
                o = fc(e);
            e.queryCommandState("InsertUnorderedList") || e.queryCommandState("InsertOrderedList") || "" !== o || l.getParent(t.getNode(), l.isBlock) || n.apply("div"), Y(ax(e), function(e) {
                var t, n, r, o, i, a, u, s;
                t = l, n = c, r = m, o = d, i = f, a = e.dom, s = rx(r, Tt.fromDom(a)), "outdent" === n ? (u = Math.max(0, nx(a.style[s]) - o), t.setStyle(a, s, u ? u + i : "")) : (u = nx(a.style[s]) + o + i, t.setStyle(a, s, u))
            })
        },
        sx = function(e, t) {
            if (e.selection.isCollapsed() && ox(e)) {
                var n = e.dom,
                    r = e.selection.getRng(),
                    o = Ms.fromRangeStart(r),
                    i = n.getParent(r.startContainer, n.isBlock);
                if (null !== i && Sg(Tt.fromDom(i), o)) return ux(e, "outdent"), !0
            }
            return !1
        },
        cx = function(e, t) {
            e.getDoc().execCommand(t, !1, null)
        },
        lx = function(n, r) {
            n.addCommand("delete", function() {
                var e, t;
                t = r, sx(e = n) || NC(e, !1) || pC(e, !1) || Yw(e, t, !1) || tC(e, !1) || Pp(e) || EC(e, !1) || tx(e, !1) || iC(e) || Zw(e, !1) || (cx(e, "Delete"), Vb(e))
            }), n.addCommand("forwardDelete", function() {
                var e, t;
                t = r, NC(e = n, !0) || pC(e, !0) || Yw(e, t, !0) || tC(e, !0) || Pp(e) || EC(e, !0) || tx(e, !0) || iC(e) || Zw(e, !0) || cx(e, "ForwardDelete")
            })
        },
        fx = function(e) {
            return e.touches === undefined || 1 !== e.touches.length ? U.none() : U.some(e.touches[0])
        },
        dx = function(a) {
            var u = Ru(U.none()),
                s = Ru(!1),
                r = Iu(function(e) {
                    a.fire("longpress", _e(_e({}, e), {
                        type: "longpress"
                    })), s.set(!0)
                }, 400);
            a.on("touchstart", function(n) {
                fx(n).each(function(e) {
                    r.cancel();
                    var t = {
                        x: e.clientX,
                        y: e.clientY,
                        target: n.target
                    };
                    r.throttle(n), s.set(!1), u.set(U.some(t))
                })
            }, !0), a.on("touchmove", function(e) {
                r.cancel(), fx(e).each(function(i) {
                    u.get().each(function(e) {
                        var t, n, r, o;
                        t = i, n = e, r = Math.abs(t.clientX - n.x), o = Math.abs(t.clientY - n.y), (5 < r || 5 < o) && (u.set(U.none()), s.set(!1), a.fire("longpresscancel"))
                    })
                })
            }, !0), a.on("touchend touchcancel", function(t) {
                r.cancel(), "touchcancel" !== t.type && u.get().filter(function(e) {
                    return e.target.isEqualNode(t.target)
                }).each(function() {
                    s.get() ? t.preventDefault() : a.fire("tap", _e(_e({}, t), {
                        type: "tap"
                    }))
                })
            }, !0)
        },
        mx = function(e, t) {
            return e.hasOwnProperty(t.nodeName)
        },
        gx = function(e) {
            var t, n, r, o = e.dom,
                i = e.selection,
                a = e.schema,
                u = a.getBlockElements(),
                s = i.getStart(),
                c = e.getBody(),
                l = fc(e);
            if (s && Tn(s) && l) {
                var f = c.nodeName.toLowerCase();
                if (a.isValidChild(f, l.toLowerCase()) && (d = u, m = c, g = s, !F(vg(Tt.fromDom(g), Tt.fromDom(m)), function(e) {
                        return mx(d, e.dom)
                    }))) {
                    for (var d, m, g, p, h, v = i.getRng(), y = v.startContainer, b = v.startOffset, C = v.endContainer, w = v.endOffset, x = bm(e), s = c.firstChild; s;)
                        if (p = u, Fn(h = s) || Tn(h) && !mx(p, h) && !Yl(h)) {
                            if (function(e, t) {
                                    if (Fn(t)) {
                                        if (0 === t.nodeValue.length) return !0;
                                        if (/^\s+$/.test(t.nodeValue) && (!t.nextSibling || mx(e, t.nextSibling))) return !0
                                    }
                                    return !1
                                }(u, s)) {
                                s = (n = s).nextSibling, o.remove(n);
                                continue
                            }
                            t || (t = o.create(l, dc(e)), s.parentNode.insertBefore(t, s), r = !0), s = (n = s).nextSibling, t.appendChild(n)
                        } else t = null, s = s.nextSibling;
                    r && x && (v.setStart(y, b), v.setEnd(C, w), i.setRng(v), e.nodeChanged())
                }
            }
        },
        px = function(e, t) {
            var n;
            t.hasAttribute("data-mce-caret") && (Ao(t), (n = e).selection.setRng(n.selection.getRng()), e.selection.scrollIntoView(t))
        },
        hx = function(e, t) {
            var n, r = (n = e, Lr(Tt.fromDom(n.getBody()), "*[data-mce-caret]").fold(E(null), function(e) {
                return e.dom
            }));
            if (r) return "compositionstart" === t.type ? (t.preventDefault(), t.stopPropagation(), void px(e, r)) : void(xo(r) && (px(e, r), e.undoManager.add()))
        },
        vx = $n,
        yx = function(e, t, n) {
            var r, o, i = El(e.getBody()),
                a = k(cl, 1 === t ? i.next : i.prev);
            if (n.collapsed && "" !== fc(e)) {
                var u, s = e.dom.getParent(n.startContainer, "PRE");
                if (!s) return;
                a(Ms.fromRangeStart(n)) || (o = (r = e).dom.create(fc(r)), (!St.ie || 11 <= St.ie) && (o.innerHTML = '<br data-mce-bogus="1">'), u = o, 1 === t ? e.$(s).after(u) : e.$(s).before(u), e.selection.select(u, !0), e.selection.collapse())
            }
        },
        bx = function(e, t) {
            var n = t ? Fs.Forwards : Fs.Backwards,
                r = e.selection.getRng();
            return Ow(e, n, r, fg, dg, vx).orThunk(function() {
                return yx(e, n, r), U.none()
            })
        },
        Cx = function(e, t) {
            var n = t ? 1 : -1,
                r = e.selection.getRng();
            return Bw(e, n, r, function(e) {
                return fg(e) || cg(e)
            }, function(e) {
                return dg(e) || lg(e)
            }, vx).orThunk(function() {
                return yx(e, n, r), U.none()
            })
        },
        wx = function(t, e) {
            return bx(t, e).exists(function(e) {
                return Tw(t, e), !0
            })
        },
        xx = function(t, e) {
            return Cx(t, e).exists(function(e) {
                return Tw(t, e), !0
            })
        },
        Sx = function(e, t) {
            return Lw(e, t, t ? dg : fg)
        },
        Nx = function(e) {
            return M(["figcaption"], Mt(e))
        },
        Ex = function(e) {
            var t = document.createRange();
            return t.setStartBefore(e.dom), t.setEndBefore(e.dom), t
        },
        kx = function(e, t, n) {
            (n ? mn : dn)(e, t)
        },
        _x = function(e, t, n, r) {
            return "" === t ? (l = e, f = r, d = Tt.fromTag("br"), kx(l, d, f), Ex(d)) : (o = e, i = r, a = t, u = n, s = Tt.fromTag(a), c = Tt.fromTag("br"), Jn(s, u), mn(s, c), kx(o, s, i), Ex(c));
            var o, i, a, u, s, c, l, f, d
        },
        Ax = function(e, t, n) {
            return t ? (o = e.dom, fw(o, n).breakAt.isNone()) : (r = e.dom, lw(r, n).breakAt.isNone());
            var r, o
        },
        Rx = function(t, n) {
            var e, r, o = Tt.fromDom(t.getBody()),
                i = Ms.fromRangeStart(t.selection.getRng()),
                a = fc(t),
                u = dc(t);
            return e = i, r = k(Pt, o), Or(Tt.fromDom(e.container()), no, r).filter(Nx).exists(function() {
                if (Ax(o, n, i)) {
                    var e = _x(o, a, u, n);
                    return t.selection.setRng(e), !0
                }
                return !1
            })
        },
        Tx = function(e, t) {
            return !!e.selection.isCollapsed() && Rx(e, t)
        },
        Dx = function(e, r) {
            return J(z(e, function(e) {
                return _e({
                    shiftKey: !1,
                    altKey: !1,
                    ctrlKey: !1,
                    metaKey: !1,
                    keyCode: 0,
                    action: te
                }, e)
            }), function(e) {
                return t = e, (n = r).keyCode === t.keyCode && n.shiftKey === t.shiftKey && n.altKey === t.altKey && n.ctrlKey === t.ctrlKey && n.metaKey === t.metaKey ? [e] : [];
                var t, n
            })
        },
        Ox = function(e) {
            for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            return function() {
                return e.apply(null, t)
            }
        },
        Bx = function(e, t) {
            return W(Dx(e, t), function(e) {
                return e.action()
            })
        },
        Px = function(t, e) {
            var n = e ? Fs.Forwards : Fs.Backwards,
                r = t.selection.getRng();
            return Ow(t, n, r, ug, sg, Kn).exists(function(e) {
                return Tw(t, e), !0
            })
        },
        Lx = function(t, e) {
            var n = e ? 1 : -1,
                r = t.selection.getRng();
            return Bw(t, n, r, ug, sg, Kn).exists(function(e) {
                return Tw(t, e), !0
            })
        },
        Ix = function(e, t) {
            return Lw(e, t, t ? sg : ug)
        },
        Mx = function(o, e) {
            return J(e, function(e) {
                var t, n, r = (t = cs(e.getBoundingClientRect()), n = -1, {
                    left: t.left - n,
                    top: t.top - n,
                    right: t.right + 2 * n,
                    bottom: t.bottom + 2 * n,
                    width: t.width + n,
                    height: t.height + n
                });
                return [{
                    x: r.left,
                    y: o(r),
                    cell: e
                }, {
                    x: r.right,
                    y: o(r),
                    cell: e
                }]
            })
        },
        Fx = function(e, t, n, r, o) {
            var i, a, u = $u(Tt.fromDom(n), "td,th,caption").map(function(e) {
                    return e.dom
                }),
                s = H(Mx(e, u), function(e) {
                    return t(e, o)
                });
            return i = r, a = o, $(s, function(e, r) {
                return e.fold(function() {
                    return U.some(r)
                }, function(e) {
                    var t = Math.sqrt(Math.abs(e.x - i) + Math.abs(e.y - a)),
                        n = Math.sqrt(Math.abs(r.x - i) + Math.abs(r.y - a));
                    return U.some(n < t ? r : e)
                })
            }, U.none()).map(function(e) {
                return e.cell
            })
        },
        Ux = k(Fx, function(e) {
            return e.bottom
        }, function(e, t) {
            return e.y < t
        }),
        zx = k(Fx, function(e) {
            return e.top
        }, function(e, t) {
            return e.y > t
        }),
        jx = function(t, n) {
            return re(n.getClientRects()).bind(function(e) {
                return Ux(t, e.left, e.top)
            }).bind(function(e) {
                return cw(Ml(t = e).map(function(e) {
                    return lw(t, e).positions.concat(e)
                }).getOr([]), n);
                var t
            })
        },
        Hx = function(t, n) {
            return oe(n.getClientRects()).bind(function(e) {
                return zx(t, e.left, e.top)
            }).bind(function(e) {
                return cw(Il(t = e).map(function(e) {
                    return [e].concat(fw(t, e).positions)
                }).getOr([]), n);
                var t
            })
        },
        Vx = function(e, t, n) {
            var r, o, i, a, u = e(t, n);
            return (a = u).breakType === nb.Wrap && 0 === a.positions.length || !Hn(n.getNode()) && ((i = u).breakType === nb.Br && 1 === i.positions.length) ? (r = e, o = t, !u.breakAt.exists(function(e) {
                return r(o, e).breakAt.isSome()
            })) : u.breakAt.isNone()
        },
        qx = k(Vx, lw),
        $x = k(Vx, fw),
        Wx = function(t, e, n, r) {
            var o, i, a, u, s = t.selection.getRng(),
                c = e ? 1 : -1;
            return !(!zc() || (o = e, i = s, a = n, u = Ms.fromRangeStart(i), !Bl(!o, a).exists(function(e) {
                return e.isEqual(u)
            }))) && (sC(c, t, n, !e, !1).each(function(e) {
                Tw(t, e)
            }), !0)
        },
        Kx = function(e, t) {
            var n = t.getNode(e);
            return Tn(n) && "TABLE" === n.nodeName ? U.some(n) : U.none()
        },
        Xx = function(u, s, c) {
            var e = Kx(!!s, c),
                t = !1 === s;
            e.fold(function() {
                return Tw(u, c.toRange())
            }, function(a) {
                return Bl(t, u.getBody()).filter(function(e) {
                    return e.isEqual(c)
                }).fold(function() {
                    return Tw(u, c.toRange())
                }, function(e) {
                    return n = s, o = a, t = c, void((i = fc(r = u)) ? r.undoManager.transact(function() {
                        var e = Tt.fromTag(i);
                        Jn(e, dc(r)), mn(e, Tt.fromTag("br")), (n ? fn : ln)(Tt.fromDom(o), e);
                        var t = r.dom.createRng();
                        t.setStart(e.dom, 0), t.setEnd(e.dom, 0), Tw(r, t)
                    }) : Tw(r, t.toRange()));
                    var n, r, o, t, i
                })
            })
        },
        Yx = function(e, t, n, r) {
            var o, i, a, u, s, c, l = e.selection.getRng(),
                f = Ms.fromRangeStart(l),
                d = e.getBody();
            if (!t && qx(r, f)) {
                var m = (u = d, jx(s = n, c = f).orThunk(function() {
                    return re(c.getClientRects()).bind(function(e) {
                        return sw(dw(u, Ms.before(s)), e.left)
                    })
                }).getOr(Ms.before(s)));
                return Xx(e, t, m), !0
            }
            if (t && $x(r, f)) {
                m = (o = d, Hx(i = n, a = f).orThunk(function() {
                    return re(a.getClientRects()).bind(function(e) {
                        return sw(mw(o, Ms.after(i)), e.left)
                    })
                }).getOr(Ms.after(i)));
                return Xx(e, t, m), !0
            }
            return !1
        },
        Gx = function(n, r, o) {
            return U.from(n.dom.getParent(n.selection.getNode(), "td,th")).bind(function(t) {
                return U.from(n.dom.getParent(t, "table")).map(function(e) {
                    return o(n, r, e, t)
                })
            }).getOr(!1)
        },
        Jx = function(e, t) {
            return Gx(e, t, Wx)
        },
        Qx = function(e, t) {
            return Gx(e, t, Yx)
        },
        Zx = function(i, a) {
            i.on("keydown", function(e) {
                var t, n, r, o;
                !1 === e.isDefaultPrevented() && (t = i, n = a, r = e, o = gt().os, Bx([{
                    keyCode: nd.RIGHT,
                    action: Ox(wx, t, !0)
                }, {
                    keyCode: nd.LEFT,
                    action: Ox(wx, t, !1)
                }, {
                    keyCode: nd.UP,
                    action: Ox(xx, t, !1)
                }, {
                    keyCode: nd.DOWN,
                    action: Ox(xx, t, !0)
                }, {
                    keyCode: nd.RIGHT,
                    action: Ox(Jx, t, !0)
                }, {
                    keyCode: nd.LEFT,
                    action: Ox(Jx, t, !1)
                }, {
                    keyCode: nd.UP,
                    action: Ox(Qx, t, !1)
                }, {
                    keyCode: nd.DOWN,
                    action: Ox(Qx, t, !0)
                }, {
                    keyCode: nd.RIGHT,
                    action: Ox(Px, t, !0)
                }, {
                    keyCode: nd.LEFT,
                    action: Ox(Px, t, !1)
                }, {
                    keyCode: nd.UP,
                    action: Ox(Lx, t, !1)
                }, {
                    keyCode: nd.DOWN,
                    action: Ox(Lx, t, !0)
                }, {
                    keyCode: nd.RIGHT,
                    action: Ox(zw, t, n, !0)
                }, {
                    keyCode: nd.LEFT,
                    action: Ox(zw, t, n, !1)
                }, {
                    keyCode: nd.RIGHT,
                    ctrlKey: !o.isOSX(),
                    altKey: o.isOSX(),
                    action: Ox(Vw, t, n)
                }, {
                    keyCode: nd.LEFT,
                    ctrlKey: !o.isOSX(),
                    altKey: o.isOSX(),
                    action: Ox(qw, t, n)
                }, {
                    keyCode: nd.UP,
                    action: Ox(Tx, t, !1)
                }, {
                    keyCode: nd.DOWN,
                    action: Ox(Tx, t, !0)
                }], r).each(function(e) {
                    r.preventDefault()
                }))
            })
        },
        eS = function(o, i) {
            o.on("keydown", function(e) {
                var t, n, r;
                !1 === e.isDefaultPrevented() && (t = o, n = i, r = e, Bx([{
                    keyCode: nd.BACKSPACE,
                    action: Ox(sx, t, !1)
                }, {
                    keyCode: nd.BACKSPACE,
                    action: Ox(NC, t, !1)
                }, {
                    keyCode: nd.DELETE,
                    action: Ox(NC, t, !0)
                }, {
                    keyCode: nd.BACKSPACE,
                    action: Ox(pC, t, !1)
                }, {
                    keyCode: nd.DELETE,
                    action: Ox(pC, t, !0)
                }, {
                    keyCode: nd.BACKSPACE,
                    action: Ox(Yw, t, n, !1)
                }, {
                    keyCode: nd.DELETE,
                    action: Ox(Yw, t, n, !0)
                }, {
                    keyCode: nd.BACKSPACE,
                    action: Ox(Pp, t, !1)
                }, {
                    keyCode: nd.DELETE,
                    action: Ox(Pp, t, !0)
                }, {
                    keyCode: nd.BACKSPACE,
                    action: Ox(EC, t, !1)
                }, {
                    keyCode: nd.DELETE,
                    action: Ox(EC, t, !0)
                }, {
                    keyCode: nd.BACKSPACE,
                    action: Ox(tx, t, !1)
                }, {
                    keyCode: nd.DELETE,
                    action: Ox(tx, t, !0)
                }, {
                    keyCode: nd.BACKSPACE,
                    action: Ox(iC, t, !1)
                }, {
                    keyCode: nd.DELETE,
                    action: Ox(iC, t, !0)
                }, {
                    keyCode: nd.BACKSPACE,
                    action: Ox(tC, t, !1)
                }, {
                    keyCode: nd.DELETE,
                    action: Ox(tC, t, !0)
                }, {
                    keyCode: nd.BACKSPACE,
                    action: Ox(Zw, t, !1)
                }, {
                    keyCode: nd.DELETE,
                    action: Ox(Zw, t, !0)
                }], r).each(function(e) {
                    r.preventDefault()
                }))
            }), o.on("keyup", function(e) {
                var t, n;
                !1 === e.isDefaultPrevented() && (t = o, n = e, Bx([{
                    keyCode: nd.BACKSPACE,
                    action: Ox(SC, t)
                }, {
                    keyCode: nd.DELETE,
                    action: Ox(SC, t)
                }], n))
            })
        },
        tS = function(e, t) {
            var n, r, o = t,
                i = e.dom,
                a = e.schema.getMoveCaretBeforeOnEnterElements();
            if (t) {
                !/^(LI|DT|DD)$/.test(t.nodeName) || (r = function(e) {
                    for (; e;) {
                        if (1 === e.nodeType || 3 === e.nodeType && e.data && /[\r\n\s]/.test(e.data)) return e;
                        e = e.nextSibling
                    }
                }(t.firstChild)) && /^(UL|OL|DL)$/.test(r.nodeName) && t.insertBefore(i.doc.createTextNode(mo), t.firstChild);
                var u = i.createRng();
                if (t.normalize(), t.hasChildNodes()) {
                    for (var s = new Gr(t, t); n = s.current();) {
                        if (Fn(n)) {
                            u.setStart(n, 0), u.setEnd(n, 0);
                            break
                        }
                        if (a[n.nodeName.toLowerCase()]) {
                            u.setStartBefore(n), u.setEndBefore(n);
                            break
                        }
                        o = n, n = s.next()
                    }
                    n || (u.setStart(o, 0), u.setEnd(o, 0))
                } else Hn(t) ? t.nextSibling && i.isBlock(t.nextSibling) ? (u.setStartBefore(t), u.setEndBefore(t)) : (u.setStartAfter(t), u.setEndAfter(t)) : (u.setStart(t, 0), u.setEnd(t, 0));
                e.selection.setRng(u), Hd(e, u)
            }
        },
        nS = function(e) {
            return U.from(e.dom.getParent(e.selection.getStart(!0), e.dom.isBlock))
        },
        rS = function(e, t) {
            return e && e.parentNode && e.parentNode.nodeName === t
        },
        oS = function(e) {
            return e && /^(OL|UL|LI)$/.test(e.nodeName)
        },
        iS = function(e) {
            var t = e.parentNode;
            return /^(LI|DT|DD)$/.test(t.nodeName) ? t : e
        },
        aS = function(e, t, n) {
            for (var r = e[n ? "firstChild" : "lastChild"]; r && !Tn(r);) r = r[n ? "nextSibling" : "previousSibling"];
            return r === t
        },
        uS = function(e, t, n, r, o) {
            var i, a, u, s, c, l, f, d, m, g = e.dom,
                p = e.selection.getRng();
            n !== e.getBody() && (oS(i = n) && oS(i.parentNode) && (o = "LI"), a = o ? t(o) : g.create("BR"), aS(n, r, !0) && aS(n, r, !1) ? rS(n, "LI") ? (u = iS(n), g.insertAfter(a, u), (null === (m = (d = n).parentNode) || void 0 === m ? void 0 : m.firstChild) === d ? g.remove(u) : g.remove(n)) : g.replace(a, n) : (aS(n, r, !0) ? rS(n, "LI") ? (g.insertAfter(a, iS(n)), a.appendChild(g.doc.createTextNode(" ")), a.appendChild(n)) : n.parentNode.insertBefore(a, n) : aS(n, r, !1) ? g.insertAfter(a, iS(n)) : (n = iS(n), (s = p.cloneRange()).setStartAfter(r), s.setEndAfter(n), c = s.extractContents(), "LI" === o && (f = "LI", (l = c).firstChild && l.firstChild.nodeName === f) ? (a = c.firstChild, g.insertAfter(c, n)) : (g.insertAfter(c, n), g.insertAfter(a, n))), g.remove(r)), tS(e, a))
        },
        sS = function(e) {
            e.innerHTML = '<br data-mce-bogus="1">'
        },
        cS = function(e, t) {
            return e.nodeName === t || e.previousSibling && e.previousSibling.nodeName === t
        },
        lS = function(e, t) {
            return t && e.isBlock(t) && !/^(TD|TH|CAPTION|FORM)$/.test(t.nodeName) && !/^(fixed|absolute)/i.test(t.style.position) && "true" !== e.getContentEditable(t)
        },
        fS = function(e, t, n) {
            return !1 === Fn(t) ? n : e ? 1 === n && t.data.charAt(n - 1) === go ? 0 : n : n === t.data.length - 1 && t.data.charAt(n) === go ? t.data.length : n
        },
        dS = function(e, t) {
            for (var n, r = e.getRoot(), o = t; o !== r && "false" !== e.getContentEditable(o);) "true" === e.getContentEditable(o) && (n = o), o = o.parentNode;
            return o !== r ? n : r
        },
        mS = function(e, t) {
            var n = fc(e);
            n && n.toLowerCase() === t.tagName.toLowerCase() && function(e, o, t) {
                var i = e.dom;
                U.from(t.style).map(i.parseStyle).each(function(e) {
                    var t = ir(Tt.fromDom(o)),
                        n = _e(_e({}, t), e);
                    i.setStyles(o, n)
                });
                var n = U.from(t["class"]).map(function(e) {
                        return e.split(/\s+/)
                    }),
                    r = U.from(o.className).map(function(e) {
                        return H(e.split(/\s+/), function(e) {
                            return "" !== e
                        })
                    });
                us(n, r, function(t, e) {
                    var n = H(e, function(e) {
                            return !M(t, e)
                        }),
                        r = Ae(t, n);
                    i.setAttrib(o, "class", r.join(" "))
                });
                var a = ["style", "class"],
                    u = ge(t, function(e, t) {
                        return !M(a, t)
                    });
                i.setAttribs(o, u)
            }(e, t, dc(e))
        },
        gS = function(a, e) {
            var t, u, i, s, n, r, o, c, l, f = a.dom,
                d = a.schema,
                m = d.getNonEmptyElements(),
                g = a.selection.getRng(),
                p = function(e) {
                    var t, n = u,
                        r = d.getTextInlineElements(),
                        o = e || "TABLE" === c || "HR" === c ? f.create(e || N) : s.cloneNode(!1),
                        i = o;
                    if (!1 === a.getParam("keep_styles", !0)) f.setAttrib(o, "style", null), f.setAttrib(o, "class", null);
                    else
                        do {
                            if (r[n.nodeName]) {
                                if (Ul(n) || Yl(n)) continue;
                                t = n.cloneNode(!1), f.setAttrib(t, "id", ""), o.hasChildNodes() ? t.appendChild(o.firstChild) : i = t, o.appendChild(t)
                            }
                        } while ((n = n.parentNode) && n !== E);
                    return mS(a, o), sS(i), o
                },
                h = function(e) {
                    var t, n, r = fS(e, u, i);
                    if (Fn(u) && (e ? 0 < r : r < u.nodeValue.length)) return !1;
                    if (u.parentNode === s && l && !e) return !0;
                    if (e && Tn(u) && u === s.firstChild) return !0;
                    if (cS(u, "TABLE") || cS(u, "HR")) return l && !e || !l && e;
                    var o = new Gr(u, s);
                    for (Fn(u) && (e && 0 === r ? o.prev() : e || r !== u.nodeValue.length || o.next()); t = o.current();) {
                        if (Tn(t)) {
                            if (!t.getAttribute("data-mce-bogus") && (n = t.nodeName.toLowerCase(), m[n] && "br" !== n)) return !1
                        } else if (Fn(t) && !jo(t.nodeValue)) return !1;
                        e ? o.prev() : o.next()
                    }
                    return !0
                },
                v = function() {
                    n = /^(H[1-6]|PRE|FIGURE)$/.test(c) && "HGROUP" !== C ? p(N) : p(), a.getParam("end_container_on_empty_block", !1) && lS(f, o) && f.isEmpty(s) ? n = f.split(o, s) : f.insertAfter(n, s), tS(a, n)
                };
            md(f, g).each(function(e) {
                g.setStart(e.startContainer, e.startOffset), g.setEnd(e.endContainer, e.endOffset)
            }), u = g.startContainer, i = g.startOffset, N = fc(a);
            var y = !(!e || !e.shiftKey),
                b = !(!e || !e.ctrlKey);
            Tn(u) && u.hasChildNodes() && (l = i > u.childNodes.length - 1, u = u.childNodes[Math.min(i, u.childNodes.length - 1)] || u, i = l && Fn(u) ? u.nodeValue.length : 0);
            var C, w, x, S, N, E = dS(f, u);
            E && ((N && !y || !N && y) && (u = function(e, t, n, r, o) {
                var i, a, u, s, c, l, f = t || "P",
                    d = e.dom,
                    m = dS(d, r),
                    g = d.getParent(r, d.isBlock);
                if (!g || !lS(d, g)) {
                    if (c = (g = g || m) === e.getBody() || (l = g) && /^(TD|TH|CAPTION)$/.test(l.nodeName) ? g.nodeName.toLowerCase() : g.parentNode.nodeName.toLowerCase(), !g.hasChildNodes()) return i = d.create(f), mS(e, i), g.appendChild(i), n.setStart(i, 0), n.setEnd(i, 0), i;
                    for (u = r; u.parentNode !== g;) u = u.parentNode;
                    for (; u && !d.isBlock(u);) u = (a = u).previousSibling;
                    if (a && e.schema.isValidChild(c, f.toLowerCase())) {
                        for (i = d.create(f), mS(e, i), a.parentNode.insertBefore(i, a), u = a; u && !d.isBlock(u);) s = u.nextSibling, i.appendChild(u), u = s;
                        n.setStart(r, o), n.setEnd(r, o)
                    }
                }
                return r
            }(a, N, g, u, i)), s = f.getParent(u, f.isBlock), o = s ? f.getParent(s.parentNode, f.isBlock) : null, c = s ? s.nodeName.toUpperCase() : "", "LI" !== (C = o ? o.nodeName.toUpperCase() : "") || b || (o = (s = o).parentNode, c = C), /^(LI|DT|DD)$/.test(c) && f.isEmpty(s) ? uS(a, p, o, s, N) : N && s === a.getBody() || (N = N || "P", bo(s) ? (n = Ao(s), f.isEmpty(s) && sS(s), mS(a, n), tS(a, n)) : h() ? v() : h(!0) ? (n = s.parentNode.insertBefore(p(), s), tS(a, cS(s, "HR") ? n : s)) : ((S = (x = g).cloneRange()).setStart(x.startContainer, fS(!0, x.startContainer, x.startOffset)), S.setEnd(x.endContainer, fS(!1, x.endContainer, x.endOffset)), (t = S.cloneRange()).setEndAfter(s), r = t.extractContents(), w = r, Y(qu(Tt.fromDom(w), jt), function(e) {
                var t = e.dom;
                t.nodeValue = ho(t.nodeValue)
            }), function(e) {
                for (; Fn(e) && (e.nodeValue = e.nodeValue.replace(/^[\r\n]+/, "")), e = e.firstChild;);
            }(r), n = r.firstChild, f.insertAfter(r, s), function(e, t, n) {
                var r, o, i, a = n,
                    u = [];
                if (a) {
                    for (; a = a.firstChild;) {
                        if (e.isBlock(a)) return;
                        Tn(a) && !t[a.nodeName.toLowerCase()] && u.push(a)
                    }
                    for (r = u.length; r--;) !(a = u[r]).hasChildNodes() || a.firstChild === a.lastChild && "" === a.firstChild.nodeValue ? e.remove(a) : (o = e, (i = a) && "A" === i.nodeName && o.isEmpty(i) && e.remove(a))
                }
            }(f, m, n), function(e, t) {
                t.normalize();
                var n = t.lastChild;
                n && !/^(left|right)$/gi.test(e.getStyle(n, "float", !0)) || e.add(t, "br")
            }(f, s), f.isEmpty(s) && sS(s), n.normalize(), f.isEmpty(n) ? (f.remove(n), v()) : (mS(a, n), tS(a, n))), f.setAttrib(n, "id", ""), a.fire("NewBlock", {
                newBlock: n
            })))
        },
        pS = function(e, t, n) {
            var r = e.dom.createRng();
            n ? (r.setStartBefore(t), r.setEndBefore(t)) : (r.setStartAfter(t), r.setEndAfter(t)), e.selection.setRng(r), Hd(e, r)
        },
        hS = function(e, t) {
            var n, r, o = e.selection,
                i = e.dom,
                a = o.getRng();
            md(i, a).each(function(e) {
                a.setStart(e.startContainer, e.startOffset), a.setEnd(e.endContainer, e.endOffset)
            });
            var u, s = a.startOffset,
                c = a.startContainer;
            1 === c.nodeType && c.hasChildNodes() && (u = s > c.childNodes.length - 1, c = c.childNodes[Math.min(s, c.childNodes.length - 1)] || c, s = u && 3 === c.nodeType ? c.nodeValue.length : 0);
            var l = i.getParent(c, i.isBlock),
                f = l ? i.getParent(l.parentNode, i.isBlock) : null,
                d = f ? f.nodeName.toUpperCase() : "",
                m = !(!t || !t.ctrlKey);
            "LI" !== d || m || (l = f), c && 3 === c.nodeType && s >= c.nodeValue.length && ! function(e, t, n) {
                for (var r, o = new Gr(t, n), i = e.getNonEmptyElements(); r = o.next();)
                    if (i[r.nodeName.toLowerCase()] || 0 < r.length) return !0
            }(e.schema, c, l) && (n = i.create("br"), a.insertNode(n), a.setStartAfter(n), a.setEndAfter(n), r = !0), n = i.create("br"), js(i, a, n), pS(e, n, r), e.undoManager.add()
        },
        vS = function(e, t) {
            var n = Tt.fromTag("br");
            ln(Tt.fromDom(t), n), e.undoManager.add()
        },
        yS = function(e, t) {
            bS(e.getBody(), t) || fn(Tt.fromDom(t), Tt.fromTag("br"));
            var n = Tt.fromTag("br");
            fn(Tt.fromDom(t), n), pS(e, n.dom, !1), e.undoManager.add()
        },
        bS = function(e, t) {
            return n = Ms.after(t), !!Hn(n.getNode()) || Pl(e, Ms.after(t)).map(function(e) {
                return Hn(e.getNode())
            }).getOr(!1);
            var n
        },
        CS = function(e) {
            return e && "A" === e.nodeName && "href" in e
        },
        wS = function(e) {
            return e.fold(A, CS, CS, A)
        },
        xS = function(e, t) {
            t.fold(te, k(vS, e), k(yS, e), te)
        },
        SS = function(e, t) {
            var n, r, o, i = (r = k(Ib, n = e), o = Ms.fromRangeStart(n.selection.getRng()), WC(r, n.getBody(), o).filter(wS));
            i.isSome() ? i.each(k(xS, e)) : hS(e, t)
        },
        NS = function(e, t) {
            return nS(e).filter(function(e) {
                return 0 < t.length && Ot(Tt.fromDom(e), t)
            }).isSome()
        },
        ES = xr([{
            br: []
        }, {
            block: []
        }, {
            none: []
        }]),
        kS = function(e, t) {
            return NS(n = e, n.getParam("no_newline_selector", ""));
            var n
        },
        _S = function(n) {
            return function(e, t) {
                return "" === fc(e) === n
            }
        },
        AS = function(n) {
            return function(e, t) {
                return nS(e).filter(function(e) {
                    return uo(Tt.fromDom(e))
                }).isSome() === n
            }
        },
        RS = function(n, r) {
            return function(e, t) {
                return nS(e).fold(E(""), function(e) {
                    return e.nodeName.toUpperCase()
                }) === n.toUpperCase() === r
            }
        },
        TS = function(e) {
            return RS("pre", e)
        },
        DS = function(n) {
            return function(e, t) {
                return e.getParam("br_in_pre", !0) === n
            }
        },
        OS = function(e, t) {
            return NS(n = e, n.getParam("br_newline_selector", ".mce-toc h2,figcaption,caption"));
            var n
        },
        BS = function(e, t) {
            return t
        },
        PS = function(e) {
            var t = fc(e),
                n = function(e, t) {
                    for (var n, r = e.getRoot(), o = t; o !== r && "false" !== e.getContentEditable(o);) "true" === e.getContentEditable(o) && (n = o), o = o.parentNode;
                    return o !== r ? n : r
                }(e.dom, e.selection.getStart());
            return n && e.schema.isValidChild(n.nodeName, t || "P")
        },
        LS = function(e, t) {
            return function(n, r) {
                return $(e, function(e, t) {
                    return e && t(n, r)
                }, !0) ? U.some(t) : U.none()
            }
        },
        IS = function(e, t) {
            return IC([LS([kS], ES.none()), LS([RS("summary", !0)], ES.br()), LS([TS(!0), DS(!1), BS], ES.br()), LS([TS(!0), DS(!1)], ES.block()), LS([TS(!0), DS(!0), BS], ES.block()), LS([TS(!0), DS(!0)], ES.br()), LS([AS(!0), BS], ES.br()), LS([AS(!0)], ES.block()), LS([_S(!0), BS, PS], ES.block()), LS([_S(!0)], ES.br()), LS([OS], ES.br()), LS([_S(!1), BS], ES.br()), LS([PS], ES.block())], [e, !(!t || !t.shiftKey)]).getOr(ES.none())
        },
        MS = function(e, t) {
            IS(e, t).fold(function() {
                SS(e, t)
            }, function() {
                gS(e, t)
            }, te)
        },
        FS = function(o) {
            o.on("keydown", function(e) {
                var t, n, r;
                e.keyCode === nd.ENTER && (t = o, (n = e).isDefaultPrevented() || (n.preventDefault(), (r = t.undoManager).typing && (r.typing = !1, r.add()), t.undoManager.transact(function() {
                    !1 === t.selection.isCollapsed() && t.execCommand("Delete"), MS(t, n)
                })))
            })
        },
        US = function(o, i) {
            o.on("keydown", function(e) {
                var t, n, r;
                !1 === e.isDefaultPrevented() && (t = o, n = i, r = e, Bx([{
                    keyCode: nd.END,
                    action: Ox(Sx, t, !0)
                }, {
                    keyCode: nd.HOME,
                    action: Ox(Sx, t, !1)
                }, {
                    keyCode: nd.END,
                    action: Ox(Ix, t, !0)
                }, {
                    keyCode: nd.HOME,
                    action: Ox(Ix, t, !1)
                }, {
                    keyCode: nd.END,
                    action: Ox($w, t, !0, n)
                }, {
                    keyCode: nd.HOME,
                    action: Ox($w, t, !1, n)
                }], r).each(function(e) {
                    r.preventDefault()
                }))
            })
        },
        zS = gt().browser,
        jS = function(t) {
            var e, n;
            e = t, n = Lu(function() {
                e.composing || Wg(e)
            }, 0), zS.isIE() && (e.on("keypress", function(e) {
                n.throttle()
            }), e.on("remove", function(e) {
                n.cancel()
            })), t.on("input", function(e) {
                !1 === e.isComposing && Wg(t)
            })
        },
        HS = gt(),
        VS = function(e) {
            return e.stopImmediatePropagation()
        },
        qS = function(e) {
            return e.keyCode === nd.PAGE_UP || e.keyCode === nd.PAGE_DOWN
        },
        $S = function(e, t, n) {
            n && !e.get() ? t.on("NodeChange", VS, !0) : !n && e.get() && t.off("NodeChange", VS), e.set(n)
        },
        WS = function(o, i) {
            var a;
            HS.os.isOSX() || (a = Ru(!1), o.on("keydown", function(e) {
                qS(e) && $S(a, o, !0)
            }), o.on("keyup", function(e) {
                var t, n, r;
                !1 === e.isDefaultPrevented() && (t = o, n = i, r = e, Bx([{
                    keyCode: nd.PAGE_UP,
                    action: Ox($w, t, !1, n)
                }, {
                    keyCode: nd.PAGE_DOWN,
                    action: Ox($w, t, !0, n)
                }], r)), qS(e) && a.get() && ($S(a, o, !1), o.nodeChanged())
            }))
        },
        KS = function(n, r) {
            var e = r.container(),
                t = r.offset();
            return Fn(e) ? (e.insertData(t, n), U.some(Ms(e, t + n.length))) : sl(r).map(function(e) {
                var t = Tt.fromText(n);
                return (r.isAtEnd() ? fn : ln)(e, t), Ms(t.dom, n.length)
            })
        },
        XS = k(KS, mo),
        YS = k(KS, " "),
        GS = function(r, o) {
            return function(e) {
                return t = r, (!Mg(n = e) && (Fg(t, n) || Lg(t, n) || Ig(t, n)) ? XS : YS)(o);
                var t, n
            }
        },
        JS = function(e) {
            var t, n, r = Ms.fromRangeStart(e.selection.getRng()),
                o = Tt.fromDom(e.getBody());
            if (e.selection.isCollapsed()) {
                var i = k(Ib, e),
                    a = Ms.fromRangeStart(e.selection.getRng());
                return WC(i, e.getBody(), a).bind((n = o, function(e) {
                    return e.fold(function(e) {
                        return Ll(n.dom, Ms.before(e))
                    }, function(e) {
                        return Il(e)
                    }, function(e) {
                        return Ml(e)
                    }, function(e) {
                        return Pl(n.dom, Ms.after(e))
                    })
                })).bind(GS(o, r)).exists((t = e, function(e) {
                    return t.selection.setRng(e.toRange()), t.nodeChanged(), !0
                }))
            }
            return !1
        },
        QS = function(r) {
            r.on("keydown", function(e) {
                var t, n;
                !1 === e.isDefaultPrevented() && (t = r, n = e, Bx([{
                    keyCode: nd.SPACEBAR,
                    action: Ox(JS, t)
                }], n).each(function(e) {
                    n.preventDefault()
                }))
            })
        },
        ZS = function(e) {
            var t, n = Hw(e);
            return (t = e).on("keyup compositionstart", k(hx, t)), Zx(e, n), eS(e, n), FS(e), QS(e), jS(e), US(e, n), WS(e, n), n
        },
        eN = (tN.prototype.nodeChanged = function(e) {
            var t, n, r, o = this.editor.selection;
            this.editor.initialized && o && !this.editor.getParam("disable_nodechange") && !this.editor.mode.isReadOnly() && (r = this.editor.getBody(), (t = o.getStart(!0) || r).ownerDocument === this.editor.getDoc() && this.editor.dom.isChildOf(t, r) || (t = r), n = [], this.editor.dom.getParent(t, function(e) {
                return e === r || void n.push(e)
            }), (e = e || {}).element = t, e.parents = n, this.editor.fire("NodeChange", e))
        }, tN.prototype.isSameElementPath = function(e) {
            var t, n = this.editor.$(e).parentsUntil(this.editor.getBody()).add(e);
            if (n.length === this.lastPath.length) {
                for (t = n.length; 0 <= t && n[t] === this.lastPath[t]; t--);
                if (-1 === t) return this.lastPath = n, !0
            }
            return this.lastPath = n, !1
        }, tN);
    function tN(r) {
        var o;
        this.lastPath = [], this.editor = r;
        var t = this;
        "onselectionchange" in r.getDoc() || r.on("NodeChange click mouseup keyup focus", function(e) {
            var t = r.selection.getRng(),
                n = {
                    startContainer: t.startContainer,
                    startOffset: t.startOffset,
                    endContainer: t.endContainer,
                    endOffset: t.endOffset
                };
            "nodechange" !== e.type && ud(n, o) || r.fire("SelectionChange"), o = n
        }), r.on("contextmenu", function() {
            r.fire("SelectionChange")
        }), r.on("SelectionChange", function() {
            var e = r.selection.getStart(!0);
            !e || !St.range && r.selection.isCollapsed() || Hf(r) && !t.isSameElementPath(e) && r.dom.isChildOf(e, r.getBody()) && r.nodeChanged({
                selectionChange: !0
            })
        }), r.on("mouseup", function(e) {
            !e.isDefaultPrevented() && Hf(r) && ("IMG" === r.selection.getNode().nodeName ? Kr.setEditorTimeout(r, function() {
                r.nodeChanged()
            }) : r.nodeChanged())
        })
    }
    var nN = function(e) {
            var t, n;
            (t = e).on("click", function(e) {
                t.dom.getParent(e.target, "details") && e.preventDefault()
            }), (n = e).parser.addNodeFilter("details", function(e) {
                Y(e, function(e) {
                    e.attr("data-mce-open", e.attr("open")), e.attr("open", "open")
                })
            }), n.serializer.addNodeFilter("details", function(e) {
                Y(e, function(e) {
                    var t = e.attr("data-mce-open");
                    e.attr("open", K(t) ? t : null), e.attr("data-mce-open", null)
                })
            })
        },
        rN = function(e) {
            return Tn(e) && io(Tt.fromDom(e))
        },
        oN = function(a) {
            a.on("click", function(e) {
                var t, n, r, o, i;
                3 <= e.detail && (r = (t = a).selection.getRng(), o = Ms.fromRangeStart(r), i = Ms.fromRangeEnd(r), Ms.isElementPosition(o) && (n = o.container(), rN(n) && Il(n).each(function(e) {
                    return r.setStart(e.container(), e.offset())
                })), Ms.isElementPosition(i) && (n = o.container(), rN(n) && Ml(n).each(function(e) {
                    return r.setEnd(e.container(), e.offset())
                })), t.selection.setRng(Ip(r)))
            })
        },
        iN = function(e) {
            var t = e.getBoundingClientRect(),
                n = e.ownerDocument,
                r = n.documentElement,
                o = n.defaultView;
            return {
                top: t.top + o.pageYOffset - r.clientTop,
                left: t.left + o.pageXOffset - r.clientLeft
            }
        },
        aN = function(e, t) {
            return n = (u = e).inline ? iN(u.getBody()) : {
                left: 0,
                top: 0
            }, a = (i = e).getBody(), r = i.inline ? {
                left: a.scrollLeft,
                top: a.scrollTop
            } : {
                left: 0,
                top: 0
            }, {
                pageX: (o = function(e, t) {
                    if (t.target.ownerDocument === e.getDoc()) return {
                        left: t.pageX,
                        top: t.pageY
                    };
                    var n, r, o, i, a, u = iN(e.getContentAreaContainer()),
                        s = (r = (n = e).getBody(), o = n.getDoc().documentElement, i = {
                            left: r.scrollLeft,
                            top: r.scrollTop
                        }, a = {
                            left: r.scrollLeft || o.scrollLeft,
                            top: r.scrollTop || o.scrollTop
                        }, n.inline ? i : a);
                    return {
                        left: t.pageX - u.left + s.left,
                        top: t.pageY - u.top + s.top
                    }
                }(e, t)).left - n.left + r.left,
                pageY: o.top - n.top + r.top
            };
            var n, r, o, i, a, u
        },
        uN = $n,
        sN = qn,
        cN = function(e) {
            e && e.parentNode && e.parentNode.removeChild(e)
        },
        lN = function(u, s) {
            return function(e) {
                var t, n, r, o, i, a;
                0 === e.button && (t = W(s.dom.getParents(e.target), function() {
                    for (var n = [], e = 0; e < arguments.length; e++) n[e] = arguments[e];
                    return function(e) {
                        for (var t = 0; t < n.length; t++)
                            if (n[t](e)) return !0;
                        return !1
                    }
                }(uN, sN)).getOr(null), i = s.getBody(), uN(a = t) && a !== i && (n = s.dom.getPos(t), r = s.getBody(), o = s.getDoc().documentElement, u.set({
                    element: t,
                    dragging: !1,
                    screenX: e.screenX,
                    screenY: e.screenY,
                    maxX: (s.inline ? r.scrollWidth : o.offsetWidth) - 2,
                    maxY: (s.inline ? r.scrollHeight : o.offsetHeight) - 2,
                    relX: e.pageX - n.x,
                    relY: e.pageY - n.y,
                    width: t.offsetWidth,
                    height: t.offsetHeight,
                    ghost: function(e, t, n, r) {
                        var o = e.dom,
                            i = t.cloneNode(!0);
                        o.setStyles(i, {
                            width: n,
                            height: r
                        }), o.setAttrib(i, "data-mce-selected", null);
                        var a = o.create("div", {
                            "class": "mce-drag-container",
                            "data-mce-bogus": "all",
                            unselectable: "on",
                            contenteditable: "false"
                        });
                        return o.setStyles(a, {
                            position: "absolute",
                            opacity: .5,
                            overflow: "hidden",
                            border: 0,
                            padding: 0,
                            margin: 0,
                            width: n,
                            height: r
                        }), o.setStyles(i, {
                            margin: 0,
                            boxSizing: "border-box"
                        }), a.appendChild(i), a
                    }(s, t, t.offsetWidth, t.offsetHeight)
                })))
            }
        },
        fN = function(e, h) {
            var v = Kr.throttle(function(e, t) {
                h._selectionOverrides.hideFakeCaret(), h.selection.placeCaretAt(e, t)
            }, 0);
            return h.on("remove", v.stop),
                function(p) {
                    return e.on(function(e) {
                        var t, n, r, o, i, a, u, s, c, l, f, d, m, g = Math.max(Math.abs(p.screenX - e.screenX), Math.abs(p.screenY - e.screenY));
                        if (!e.dragging && 10 < g) {
                            if (h.fire("dragstart", {
                                    target: e.element
                                }).isDefaultPrevented()) return;
                            e.dragging = !0, h.focus()
                        }
                        e.dragging && (d = e, t = {
                            pageX: (m = aN(h, p)).pageX - d.relX,
                            pageY: m.pageY + 5
                        }, l = e.ghost, f = h.getBody(), l.parentNode !== f && f.appendChild(l), n = e.ghost, r = t, o = e.width, i = e.height, a = e.maxX, u = e.maxY, c = s = 0, n.style.left = r.pageX + "px", n.style.top = r.pageY + "px", r.pageX + o > a && (s = r.pageX + o - a), r.pageY + i > u && (c = r.pageY + i - u), n.style.width = o - s + "px", n.style.height = i - c + "px", v(p.clientX, p.clientY))
                    })
                }
        },
        dN = function(e, l) {
            return function(c) {
                e.on(function(e) {
                    var t, n, r, o, i, a, u, s;
                    e.dragging && (u = (o = l).selection, s = u.getSel().getRangeAt(0).startContainer, i = 3 === s.nodeType ? s.parentNode : s, a = e.element, i === a || o.dom.isChildOf(i, a) || uN(i) || (n = e.element, (r = n.cloneNode(!0)).removeAttribute("data-mce-selected"), t = r, l.fire("drop", {
                        clientX: c.clientX,
                        clientY: c.clientY
                    }).isDefaultPrevented() || l.undoManager.transact(function() {
                        cN(e.element), l.insertContent(l.dom.getOuterHTML(t)), l._selectionOverrides.hideFakeCaret()
                    })))
                }), mN(e)
            }
        },
        mN = function(e) {
            e.on(function(e) {
                cN(e.ghost)
            }), e.clear()
        },
        gN = function(e) {
            var t, n, r, o = (t = Ru(U.none()), {
                    clear: function() {
                        return t.set(U.none())
                    },
                    set: function(e) {
                        return t.set(U.some(e))
                    },
                    isSet: function() {
                        return t.get().isSome()
                    },
                    on: function(e) {
                        return t.get().each(e)
                    }
                }),
                i = Su.DOM,
                a = document,
                u = lN(o, e),
                s = fN(o, e),
                c = dN(o, e),
                l = (n = o, function() {
                    n.on(function(e) {
                        e.dragging && r.fire("dragend")
                    }), mN(n)
                });
            (r = e).on("mousedown", u), e.on("mousemove", s), e.on("mouseup", c), i.bind(a, "mousemove", s), i.bind(a, "mouseup", l), e.on("remove", function() {
                i.unbind(a, "mousemove", s), i.unbind(a, "mouseup", l)
            })
        },
        pN = function(e) {
            var n, i, a, u, t;
            gN(e), (n = e).on("drop", function(e) {
                var t = "undefined" != typeof e.clientX ? n.getDoc().elementFromPoint(e.clientX, e.clientY) : null;
                !uN(t) && "false" !== n.dom.getContentEditableParent(t) || e.preventDefault()
            }), e.getParam("block_unsupported_drop", !0, "boolean") && (a = function(e) {
                var t;
                e.isDefaultPrevented() || (t = e.dataTransfer) && (M(t.types, "Files") || 0 < t.files.length) && (e.preventDefault(), "drop" === e.type && ab(i, "Dropped file type is not supported"))
            }, u = function(e) {
                fm(i, e.target) && a(e)
            }, t = function() {
                var t = Su.DOM,
                    n = i.dom,
                    r = document,
                    o = i.inline ? i.getBody() : i.getDoc(),
                    e = ["drop", "dragover"];
                Y(e, function(e) {
                    t.bind(r, e, u), n.bind(o, e, a)
                }), i.on("remove", function() {
                    Y(e, function(e) {
                        t.unbind(r, e, u), n.unbind(o, e, a)
                    })
                })
            }, (i = e).on("init", function() {
                Kr.setEditorTimeout(i, t, 0)
            }))
        },
        hN = qn,
        vN = $n,
        yN = function(e, t) {
            return Zf(e.getBody(), t)
        },
        bN = function(u) {
            var s, c = u.selection,
                l = u.dom,
                f = l.isBlock,
                d = u.getBody(),
                m = Uc(u, d, f, function() {
                    return bm(u)
                }),
                g = "sel-" + l.uniqueId(),
                i = "data-mce-selected",
                p = function(e) {
                    return e !== d && (vN(e) || Kn(e)) && l.isChildOf(e, d)
                },
                h = function(e) {
                    e && c.setRng(e)
                },
                r = c.getRng,
                v = function(e, t, n, r) {
                    return void 0 === r && (r = !0), u.fire("ShowCaret", {
                        target: t,
                        direction: e,
                        before: n
                    }).isDefaultPrevented() ? null : (r && c.scrollIntoView(t, -1 === e), m.show(n, t))
                },
                t = function(e) {
                    return wo(e) || ko(e) || _o(e)
                },
                y = function(e) {
                    return t(e.startContainer) || t(e.endContainer)
                },
                b = function(e) {
                    var t = u.schema.getShortEndedElements(),
                        n = l.createRng(),
                        r = e.startContainer,
                        o = e.startOffset,
                        i = e.endContainer,
                        a = e.endOffset;
                    return ve(t, r.nodeName.toLowerCase()) ? 0 === o ? n.setStartBefore(r) : n.setStartAfter(r) : n.setStart(r, o), ve(t, i.nodeName.toLowerCase()) ? 0 === a ? n.setEndBefore(i) : n.setEndAfter(i) : n.setEnd(i, a), n
                },
                C = function(e) {
                    var t = e.cloneNode(!0),
                        n = u.fire("ObjectSelected", {
                            target: e,
                            targetClone: t
                        });
                    if (n.isDefaultPrevented()) return null;
                    var r = function(e, t, n) {
                            var r = u.$,
                                o = Lr(Tt.fromDom(u.getBody()), "#" + g).fold(function() {
                                    return r([])
                                }, function(e) {
                                    return r([e.dom])
                                });
                            0 === o.length && (o = r('<div data-mce-bogus="all" class="mce-offscreen-selection"></div>').attr("id", g)).appendTo(u.getBody());
                            var i = l.createRng();
                            t === n && St.ie ? (o.empty().append('<p style="font-size: 0" data-mce-bogus="all">\xa0</p>').append(t), i.setStartAfter(o[0].firstChild.firstChild), i.setEndAfter(t)) : (o.empty().append(mo).append(t).append(mo), i.setStart(o[0].firstChild, 1), i.setEnd(o[0].lastChild, 0)), o.css({
                                top: l.getPos(e, u.getBody()).y
                            }), o[0].focus();
                            var a = c.getSel();
                            return a.removeAllRanges(), a.addRange(i), i
                        }(e, n.targetClone, t),
                        o = Tt.fromDom(e);
                    return Y($u(Tt.fromDom(u.getBody()), "*[data-mce-selected]"), function(e) {
                        Pt(o, e) || er(e, i)
                    }), l.getAttrib(e, i) || e.setAttribute(i, "1"), s = e, S(), r
                },
                w = function(e, t) {
                    if (!e) return null;
                    if (e.collapsed) {
                        if (!y(e)) {
                            var n = t ? 1 : -1,
                                r = ul(n, d, e),
                                o = r.getNode(!t);
                            if (Hc(o)) return v(n, o, !!t && !r.isAtEnd(), !1);
                            var i = r.getNode(t);
                            if (Hc(i)) return v(n, i, !t && !r.isAtEnd(), !1)
                        }
                        return null
                    }
                    var a = e.startContainer,
                        u = e.startOffset,
                        s = e.endOffset;
                    if (3 === a.nodeType && 0 === u && vN(a.parentNode) && (a = a.parentNode, u = l.nodeIndex(a), a = a.parentNode), 1 !== a.nodeType) return null;
                    if (s === u + 1 && a === e.endContainer) {
                        var c = a.childNodes[u];
                        if (p(c)) return C(c)
                    }
                    return null
                },
                x = function() {
                    s && s.removeAttribute(i), Lr(Tt.fromDom(u.getBody()), "#" + g).each(hn), s = null
                },
                S = function() {
                    m.hide()
                };
            return St.ceFalse && !Iv(u) && function() {
                u.on("mouseup", function(e) {
                    var t = r();
                    t.collapsed && Jy(u, e.clientX, e.clientY) && lC(u, t, !1).each(h)
                }), u.on("click", function(e) {
                    var t = yN(u, e.target);
                    t && (vN(t) && (e.preventDefault(), u.focus()), hN(t) && l.isChildOf(t, c.getNode()) && x())
                }), u.on("blur NewBlock", x), u.on("ResizeWindow FullscreenStateChanged", m.reposition);
                var a = function(e) {
                        var t = El(e);
                        if (!e.firstChild) return !1;
                        var n, r = Ms.before(e.firstChild),
                            o = t.next(r);
                        return o && !(fg(n = o) || dg(n) || ug(n) || sg(n))
                    },
                    i = function(e, t) {
                        var n, r, o = l.getParent(e, f),
                            i = l.getParent(t, f);
                        return !(!o || e === i || !l.isChildOf(o, i) || !1 !== vN(yN(u, o))) || o && (n = o, r = i, !(l.getParent(n, f) === l.getParent(r, f))) && a(o)
                    };
                u.on("tap", function(e) {
                    var t = e.target,
                        n = yN(u, t);
                    vN(n) ? (e.preventDefault(), cC(u, n).each(w)) : p(t) && cC(u, t).each(w)
                }, !0), u.on("mousedown", function(e) {
                    var t, n, r, o = e.target;
                    o !== d && "HTML" !== o.nodeName && !l.isChildOf(o, d) || !1 === Jy(u, e.clientX, e.clientY) || ((t = yN(u, o)) ? vN(t) ? (e.preventDefault(), cC(u, t).each(w)) : (x(), hN(t) && e.shiftKey || ed(e.clientX, e.clientY, c.getRng()) || (S(), c.placeCaretAt(e.clientX, e.clientY))) : p(o) ? cC(u, o).each(w) : !1 === Hc(o) && (x(), S(), (n = Rw(d, e.clientX, e.clientY)) && (i(o, n.node) || (e.preventDefault(), r = v(1, n.node, n.before, !1), u.getBody().focus(), h(r)))))
                }), u.on("keypress", function(e) {
                    nd.modifierPressed(e) || vN(c.getNode()) && e.preventDefault()
                }), u.on("GetSelectionRange", function(e) {
                    var t = e.range;
                    if (s) {
                        if (!s.parentNode) return void(s = null);
                        (t = t.cloneRange()).selectNode(s), e.range = t
                    }
                }), u.on("SetSelectionRange", function(e) {
                    e.range = b(e.range);
                    var t = w(e.range, e.forward);
                    t && (e.range = t)
                });
                var n, e, o;
                u.on("AfterSetSelectionRange", function(e) {
                    var t, n = e.range,
                        r = n.startContainer.parentNode;
                    y(n) || "mcepastebin" === r.id || S(), t = r, l.hasClass(t, "mce-offscreen-selection") || x()
                }), u.on("copy", function(e) {
                    var t, n, r = e.clipboardData;
                    e.isDefaultPrevented() || !e.clipboardData || St.ie || (t = (n = l.get(g)) ? n.getElementsByTagName("*")[0] : n) && (e.preventDefault(), r.clearData(), r.setData("text/html", t.outerHTML), r.setData("text/plain", t.outerText || t.innerText))
                }), pN(u), e = Lu(function() {
                    var e, t;
                    n.removed || !n.getBody().contains(document.activeElement) || (e = n.selection.getRng()).collapsed && (t = fC(n, e, !1), n.selection.setRng(t))
                }, 0), (n = u).on("focus", function() {
                    e.throttle()
                }), n.on("blur", function() {
                    e.cancel()
                }), (o = u).on("init", function() {
                    o.on("focusin", function(e) {
                        var t, n, r = e.target;
                        Kn(r) && (t = Zf(o.getBody(), r), n = $n(t) ? t : r, o.selection.getNode() !== n && cC(o, n).each(function(e) {
                            return o.selection.setRng(e)
                        }))
                    })
                })
            }(), {
                showCaret: v,
                showBlockCaretContainer: function(e) {
                    e.hasAttribute("data-mce-caret") && (Ao(e), h(r()), c.scrollIntoView(e))
                },
                hideFakeCaret: S,
                destroy: function() {
                    m.destroy(), s = null
                }
            }
        },
        CN = function(s) {
            var n, r, o = At.each,
                c = nd.BACKSPACE,
                l = nd.DELETE,
                f = s.dom,
                d = s.selection,
                e = s.parser,
                t = St.gecko,
                i = St.ie,
                a = St.webkit,
                u = "data:text/mce-internal,",
                m = i ? "Text" : "URL",
                g = function(e, t) {
                    try {
                        s.getDoc().execCommand(e, !1, t)
                    } catch (n) {}
                },
                p = function(e) {
                    return e.isDefaultPrevented()
                },
                h = function() {
                    var u = function(e) {
                        var t = f.create("body"),
                            n = e.cloneContents();
                        return t.appendChild(n), d.serializer.serialize(t, {
                            format: "html"
                        })
                    };
                    s.on("keydown", function(e) {
                        var t, n, r, o, i, a = e.keyCode;
                        if (!p(e) && (a === l || a === c)) {
                            if (t = s.selection.isCollapsed(), n = s.getBody(), t && !f.isEmpty(n)) return;
                            if (!t && (r = s.selection.getRng(), o = u(r), (i = f.createRng()).selectNode(s.getBody()), o !== u(i))) return;
                            e.preventDefault(), s.setContent(""), n.firstChild && f.isBlock(n.firstChild) ? s.selection.setCursorLocation(n.firstChild, 0) : s.selection.setCursorLocation(n, 0), s.nodeChanged()
                        }
                    })
                },
                v = function() {
                    s.shortcuts.add("meta+a", null, "SelectAll")
                },
                y = function() {
                    Range.prototype.getClientRects || s.on("mousedown", function(e) {
                        var t;
                        p(e) || "HTML" !== e.target.nodeName || ((t = s.getBody()).blur(), Kr.setEditorTimeout(s, function() {
                            t.focus()
                        }))
                    })
                },
                b = function() {
                    s.on("click", function(e) {
                        var t = e.target;
                        /^(IMG|HR)$/.test(t.nodeName) && "false" !== f.getContentEditableParent(t) && (e.preventDefault(), s.selection.select(t), s.nodeChanged()), "A" === t.nodeName && f.hasClass(t, "mce-item-anchor") && (e.preventDefault(), d.select(t))
                    })
                },
                C = function() {
                    s.on("keydown", function(e) {
                        if (!p(e) && e.keyCode === c && d.isCollapsed() && 0 === d.getRng().startOffset) {
                            var t = d.getNode().previousSibling;
                            if (t && t.nodeName && "table" === t.nodeName.toLowerCase()) return e.preventDefault(), !1
                        }
                    })
                },
                w = function() {
                    s.getParam("readonly") || s.on("BeforeExecCommand mousedown", function() {
                        g("StyleWithCSS", !1), g("enableInlineTableEditing", !1), bc(s) || g("enableObjectResizing", !1)
                    })
                },
                x = function() {
                    s.on("SetContent ExecCommand", function(e) {
                        "setcontent" !== e.type && "mceInsertLink" !== e.command || o(f.select("a"), function(e) {
                            var t = e.parentNode,
                                n = f.getRoot();
                            if (t.lastChild === e) {
                                for (; t && !f.isBlock(t);) {
                                    if (t.parentNode.lastChild !== t || t === n) return;
                                    t = t.parentNode
                                }
                                f.add(t, "br", {
                                    "data-mce-bogus": 1
                                })
                            }
                        })
                    })
                },
                S = function() {
                    s.contentStyles.push("img:-moz-broken {-moz-force-broken-image-icon:1;min-width:24px;min-height:24px}")
                },
                N = function() {
                    s.inline || s.on("keydown", function() {
                        document.activeElement === document.body && s.getWin().focus()
                    })
                },
                E = function() {
                    s.inline || (s.contentStyles.push("body {min-height: 150px}"), s.on("click", function(e) {
                        var t;
                        if ("HTML" === e.target.nodeName) {
                            if (11 < St.ie) return void s.getBody().focus();
                            t = s.selection.getRng(), s.getBody().focus(), s.selection.setRng(t), s.selection.normalize(), s.nodeChanged()
                        }
                    }))
                },
                k = function() {
                    St.mac && s.on("keydown", function(e) {
                        !nd.metaKeyPressed(e) || e.shiftKey || 37 !== e.keyCode && 39 !== e.keyCode || (e.preventDefault(), s.selection.getSel().modify("move", 37 === e.keyCode ? "backward" : "forward", "lineboundary"))
                    })
                },
                _ = function() {
                    s.on("click", function(e) {
                        var t = e.target;
                        do {
                            if ("A" === t.tagName) return void e.preventDefault()
                        } while (t = t.parentNode)
                    }), s.contentStyles.push(".mce-content-body {-webkit-touch-callout: none}")
                },
                A = function() {
                    s.on("init", function() {
                        s.dom.bind(s.getBody(), "submit", function(e) {
                            e.preventDefault()
                        })
                    })
                },
                R = function() {
                    s.on("dragstart", function(e) {
                        var t, n, r;
                        (t = e).dataTransfer && (s.selection.isCollapsed() && "IMG" === t.target.tagName && d.select(t.target), 0 < (n = s.selection.getContent()).length && (r = u + escape(s.id) + "," + escape(n), t.dataTransfer.setData(m, r)))
                    }), s.on("drop", function(e) {
                        var t, n, r, o, i, a;
                        p(e) || (t = (i = e).dataTransfer && (a = i.dataTransfer.getData(m)) && 0 <= a.indexOf(u) ? (a = a.substr(u.length).split(","), {
                            id: unescape(a[0]),
                            html: unescape(a[1])
                        }) : null) && t.id !== s.id && (e.preventDefault(), n = ad(e.x, e.y, s.getDoc()), d.setRng(n), r = t.html, o = !0, s.queryCommandSupported("mceInsertClipboardContent") ? s.execCommand("mceInsertClipboardContent", !1, {
                            content: r,
                            internal: o
                        }) : s.execCommand("mceInsertContent", !1, r))
                    })
                },
                T = te;
            return Iv(s) ? (a && (b(), A(), v(), St.iOS && (N(), E(), _())), t && (y(), w(), S(), k())) : (s.on("keydown", function(e) {
                var t;
                if (!p(e) && e.keyCode === nd.BACKSPACE) {
                    var n = (t = d.getRng()).startContainer,
                        r = t.startOffset,
                        o = f.getRoot(),
                        i = n;
                    if (t.collapsed && 0 === r) {
                        for (; i && i.parentNode && i.parentNode.firstChild === i && i.parentNode !== o;) i = i.parentNode;
                        "BLOCKQUOTE" === i.tagName && (s.formatter.toggle("blockquote", null, i), (t = f.createRng()).setStart(n, 0), t.setEnd(n, 0), d.setRng(t))
                    }
                }
            }), h(), St.windowsPhone || s.on("keyup focusin mouseup", function(e) {
                nd.modifierPressed(e) || d.normalize()
            }, !0), a && (s.inline || f.bind(s.getDoc(), "mousedown mouseup", function(e) {
                var t;
                if (e.target === s.getDoc().documentElement)
                    if (t = d.getRng(), s.getBody().focus(), "mousedown" === e.type) {
                        if (wo(t.startContainer)) return;
                        d.placeCaretAt(e.clientX, e.clientY)
                    } else d.setRng(t)
            }), b(), fc(s) && s.on("init", function() {
                g("DefaultParagraphSeparator", fc(s))
            }), A(), C(), e.addNodeFilter("br", function(e) {
                for (var t = e.length; t--;) "Apple-interchange-newline" === e[t].attr("class") && e[t].remove()
            }), St.iOS ? (N(), E(), _()) : v()), 11 <= St.ie && (E(), C()), St.ie && (v(), g("AutoUrlDetect", !1), R()), t && (s.on("keydown", function(e) {
                if (!p(e) && e.keyCode === c) {
                    if (!s.getBody().getElementsByTagName("hr").length) return;
                    if (d.isCollapsed() && 0 === d.getRng().startOffset) {
                        var t = d.getNode(),
                            n = t.previousSibling;
                        if ("HR" === t.nodeName) return f.remove(t), void e.preventDefault();
                        n && n.nodeName && "hr" === n.nodeName.toLowerCase() && (f.remove(n), e.preventDefault())
                    }
                }
            }), y(), n = function() {
                var e = f.getAttribs(d.getStart().cloneNode(!1));
                return function() {
                    var t = d.getStart();
                    t !== s.getBody() && (f.setAttrib(t, "style", null), o(e, function(e) {
                        t.setAttributeNode(e.cloneNode(!0))
                    }))
                }
            }, r = function() {
                return !d.isCollapsed() && f.getParent(d.getStart(), f.isBlock) !== f.getParent(d.getEnd(), f.isBlock)
            }, s.on("keypress", function(e) {
                var t;
                if (!p(e) && (8 === e.keyCode || 46 === e.keyCode) && r()) return t = n(), s.getDoc().execCommand("delete", !1, null), t(), e.preventDefault(), !1
            }), f.bind(s.getDoc(), "cut", function(e) {
                var t;
                !p(e) && r() && (t = n(), Kr.setEditorTimeout(s, function() {
                    t()
                }))
            }), w(), x(), S(), k(), C())), {
                refreshContentEditable: T,
                isHidden: function() {
                    if (!t || s.removed) return !1;
                    var e = s.selection.getSel();
                    return !e || !e.rangeCount || 0 === e.rangeCount
                }
            }
        },
        wN = Su.DOM,
        xN = function(e) {
            return ge(e, function(e) {
                return !1 === d(e)
            })
        },
        SN = function(e) {
            var t, n = e.settings,
                r = e.editorUpload.blobCache;
            return xN({
                allow_conditional_comments: n.allow_conditional_comments,
                allow_html_data_urls: n.allow_html_data_urls,
                allow_svg_data_urls: n.allow_svg_data_urls,
                allow_html_in_named_anchor: n.allow_html_in_named_anchor,
                allow_script_urls: n.allow_script_urls,
                allow_unsafe_link_target: n.allow_unsafe_link_target,
                convert_fonts_to_spans: n.convert_fonts_to_spans,
                fix_list_elements: n.fix_list_elements,
                font_size_legacy_values: n.font_size_legacy_values,
                forced_root_block: n.forced_root_block,
                forced_root_block_attrs: n.forced_root_block_attrs,
                padd_empty_with_br: n.padd_empty_with_br,
                preserve_cdata: n.preserve_cdata,
                remove_trailing_brs: n.remove_trailing_brs,
                inline_styles: n.inline_styles,
                root_name: (t = e).inline ? t.getElement().nodeName.toLowerCase() : undefined,
                validate: !0,
                blob_cache: r,
                images_dataimg_filter: n.images_dataimg_filter
            })
        },
        NN = function(u) {
            var e = u.dom.getRoot();
            u.inline || Hf(u) && u.selection.getStart(!0) !== e || Il(e).each(function(e) {
                var t, n, r, o, i = e.getNode(),
                    a = Ln(i) ? Il(i).getOr(e) : e;
                St.browser.isIE() ? (t = u, n = a.toRange(), r = Tt.fromDom(t.getBody()), o = (tm(t) ? U.from(n) : U.none()).map(nm).filter(em(r)), t.bookmark = o.isSome() ? o : t.bookmark) : u.selection.setRng(a.toRange())
            })
        },
        EN = function(e) {
            var t;
            e.bindPendingEventDelegates(), e.initialized = !0, e.fire("Init"), e.focus(!0), NN(e), e.nodeChanged({
                initial: !0
            }), e.execCallback("init_instance_callback", e), (t = e).settings.auto_focus && Kr.setEditorTimeout(t, function() {
                var e = !0 === t.settings.auto_focus ? t : t.editorManager.get(t.settings.auto_focus);
                e.destroyed || e.focus()
            }, 100)
        },
        kN = function(e) {
            return e.inline ? e.ui.styleSheetLoader : e.dom.styleSheetLoader
        },
        _N = function(e, t) {
            var n, r, o, i, a = kN(e),
                u = yc(e),
                s = function() {
                    a.unloadAll(t), e.inline || e.ui.styleSheetLoader.unloadAll(u)
                },
                c = function() {
                    e.removed ? s() : (e.on("remove", s), EN(e))
                };
            Mr.all((n = e, r = t, o = u, i = [new Mr(function(e, t) {
                return kN(n).loadAll(r, e, t)
            })], n.inline ? i : i.concat([new Mr(function(e, t) {
                return n.ui.styleSheetLoader.loadAll(o, e, t)
            })]))).then(c)["catch"](c)
        },
        AN = function(t) {
            var e = t.settings,
                n = t.getDoc(),
                r = t.getBody();
            e.browser_spellcheck || e.gecko_spellcheck || (n.body.spellcheck = !1, wN.setAttrib(r, "spellcheck", "false")), t.quirks = CN(t), t.fire("PostRender");
            var o, i, a, u, s, c, l = t.getParam("directionality", Bu.isRtl() ? "rtl" : undefined);
            l !== undefined && (r.dir = l), e.protect && t.on("BeforeSetContent", function(t) {
                At.each(e.protect, function(e) {
                    t.content = t.content.replace(e, function(e) {
                        return "\x3c!--mce:protected " + escape(e) + "--\x3e"
                    })
                })
            }), t.on("SetContent", function() {
                t.addVisual(t.getBody())
            }), Iv(t) || t.load({
                initial: !0,
                format: "html"
            }), t.startContent = t.getContent({
                format: "raw"
            }), t.on("compositionstart compositionend", function(e) {
                t.composing = "compositionstart" === e.type
            }), 0 < t.contentStyles.length && (o = "", At.each(t.contentStyles, function(e) {
                o += e + "\r\n"
            }), t.dom.addStyle(o)), _N(t, t.contentCSS), e.content_style && (i = t, a = e.content_style, u = Tt.fromDom(i.getBody()), s = un(an(u)), c = Tt.fromTag("style"), Gn(c, "type", "text/css"), mn(c, Tt.fromText(a)), mn(s, c), i.on("remove", function() {
                hn(c)
            }))
        },
        RN = function(t, e) {
            var n = t.settings,
                r = t.getElement(),
                o = t.getDoc();
            n.inline || (t.getElement().style.visibility = t.orgVisibility), e || t.inline || (o.open(), o.write(t.iframeHTML), o.close()), t.inline && (wN.addClass(r, "mce-content-body"), t.contentDocument = o = document, t.contentWindow = window, t.bodyElement = r, t.contentAreaContainer = r);
            var u, i, a, s, c = t.getBody();
            c.disabled = !0, t.readonly = !!n.readonly, t.readonly || (t.inline && "static" === wN.getStyle(c, "position", !0) && (c.style.position = "relative"), c.contentEditable = t.getParam("content_editable_state", !0)), c.disabled = !1, t.editorUpload = Cb(t), t.schema = wi(n), t.dom = Su(o, {
                keep_values: !0,
                url_converter: t.convertURL,
                url_converter_scope: t,
                hex_colors: n.force_hex_style_colors,
                update_styles: !0,
                root_element: t.inline ? t.getBody() : null,
                collect: function() {
                    return t.inline
                },
                schema: t.schema,
                contentCssCors: t.getParam("content_css_cors", !1, "boolean"),
                referrerPolicy: pc(t),
                onSetAttrib: function(e) {
                    t.fire("SetAttrib", e)
                }
            }), t.parser = ((i = gy(SN(u = t), u.schema)).addAttributeFilter("src,href,style,tabindex", function(e, t) {
                for (var n, r, o = e.length, i = u.dom, a = "data-mce-" + t; o--;)
                    if ((r = (n = e[o]).attr(t)) && !n.attr(a)) {
                        if (0 === r.indexOf("data:") || 0 === r.indexOf("blob:")) continue;
                        "style" === t ? ((r = i.serializeStyle(i.parseStyle(r), n.name)).length || (r = null), n.attr(a, r), n.attr(t, r)) : "tabindex" === t ? (n.attr(a, r), n.attr(t, null)) : n.attr(a, u.convertURL(r, t, n.name))
                    }
            }), i.addNodeFilter("script", function(e) {
                for (var t = e.length; t--;) {
                    var n = e[t],
                        r = n.attr("type") || "no/type";
                    0 !== r.indexOf("mce-") && n.attr("type", "mce-" + r)
                }
            }), u.settings.preserve_cdata && i.addNodeFilter("#cdata", function(e) {
                for (var t = e.length; t--;) {
                    var n = e[t];
                    n.type = 8, n.name = "#comment", n.value = "[CDATA[" + u.dom.encode(n.value) + "]]"
                }
            }), i.addNodeFilter("p,h1,h2,h3,h4,h5,h6,div", function(e) {
                for (var t = e.length, n = u.schema.getNonEmptyElements(); t--;) {
                    var r = e[t];
                    r.isEmpty(n) && 0 === r.getAll("br").length && (r.append(new Tm("br", 1)).shortEnded = !0)
                }
            }), i), t.serializer = by((s = (a = t).settings, _e(_e({}, SN(a)), xN({
                url_converter: s.url_converter,
                url_converter_scope: s.url_converter_scope,
                element_format: s.element_format,
                entities: s.entities,
                entity_encoding: s.entity_encoding,
                indent: s.indent,
                indent_after: s.indent_after,
                indent_before: s.indent_before,
                block_elements: s.block_elements,
                boolean_attributes: s.boolean_attributes,
                custom_elements: s.custom_elements,
                extended_valid_elements: s.extended_valid_elements,
                invalid_elements: s.invalid_elements,
                invalid_styles: s.invalid_styles,
                move_caret_before_on_enter_elements: s.move_caret_before_on_enter_elements,
                non_empty_elements: s.non_empty_elements,
                schema: s.schema,
                self_closing_elements: s.self_closing_elements,
                short_ended_elements: s.short_ended_elements,
                special: s.special,
                text_block_elements: s.text_block_elements,
                text_inline_elements: s.text_inline_elements,
                valid_children: s.valid_children,
                valid_classes: s.valid_classes,
                valid_elements: s.valid_elements,
                valid_styles: s.valid_styles,
                verify_html: s.verify_html,
                whitespace_elements: s.whitespace_elements
            }))), t), t.selection = Yv(t.dom, t.getWin(), t.serializer, t), t.annotator = Jf(t), t.formatter = _b(t), t.undoManager = Rb(t), t._nodeChangeDispatcher = new eN(t), t._selectionOverrides = bN(t), dx(t), nN(t), Iv(t) || oN(t);
            var l, f, d = Iv(l = t) ? Ru(null) : ZS(l);
            lx(t, d), fc(f = t) && f.on("NodeChange", k(gx, f)), Pb(t), t.fire("PreInit"), Mv(t).fold(function() {
                AN(t)
            }, function(e) {
                t.setProgressState(!0), e.then(function(e) {
                    t.setProgressState(!1), AN(t)
                }, function(e) {
                    t.notificationManager.open({
                        type: "error",
                        text: String(e)
                    }), AN(t)
                })
            })
        },
        TN = Su.DOM,
        DN = function(e) {
            var t = e.getParam("doctype", "<!DOCTYPE html>") + "<html><head>";
            e.getParam("document_base_url", "") !== e.documentBaseUrl && (t += '<base href="' + e.documentBaseURI.getURI() + '" />'), t += '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />';
            var n = cc(e, "body_id", "tinymce"),
                r = cc(e, "body_class", "");
            return lc(e) && (t += '<meta http-equiv="Content-Security-Policy" content="' + lc(e) + '" />'), t += '</head><body id="' + n + '" class="mce-content-body ' + r + '" data-id="' + e.id + '"><br></body></html>'
        },
        ON = function(e, t) {
            var n, r, o, i, a = e.editorManager.translate("Rich Text Area. Press ALT-0 for help."),
                u = (n = e.id, r = a, t.height, o = e.getParam("iframe_attrs", {}), i = Tt.fromTag("iframe"), Jn(i, o), Jn(i, {
                    id: n + "_ifr",
                    frameBorder: "0",
                    allowTransparency: "true",
                    title: r
                }), ju(i, "tox-edit-area__iframe"), i.dom);
            u.onload = function() {
                u.onload = null, e.fire("load")
            };
            var s = function(e, t) {
                if (document.domain !== window.location.hostname && St.browser.isIE()) {
                    var n = hb("mce");
                    e[n] = function() {
                        RN(e)
                    };
                    var r = 'javascript:(function(){document.open();document.domain="' + document.domain + '";var ed = window.parent.tinymce.get("' + e.id + '");document.write(ed.iframeHTML);document.close();ed.' + n + "(true);})()";
                    return TN.setAttrib(t, "src", r), !0
                }
                return !1
            }(e, u);
            return e.contentAreaContainer = t.iframeContainer, e.iframeElement = u, e.iframeHTML = DN(e), TN.add(t.iframeContainer, u), s
        },
        BN = Su.DOM,
        PN = function(t, n, e) {
            var r = eb.get(e),
                o = eb.urls[e] || t.documentBaseUrl.replace(/\/$/, "");
            if (e = At.trim(e), r && -1 === At.inArray(n, e)) {
                if (At.each(eb.dependencies(e), function(e) {
                        PN(t, n, e)
                    }), t.plugins[e]) return;
                try {
                    var i = new r(t, o, t.$);
                    (t.plugins[e] = i).init && (i.init(t, o), n.push(e))
                } catch (zk) {
                    ! function(e, t, n) {
                        var r = Bu.translate(["Failed to initialize plugin: {0}", t]);
                        td(e, "PluginLoadError", {
                            message: r
                        }), lb(r, n), ab(e, r)
                    }(t, e, zk)
                }
            }
        },
        LN = function(e) {
            return e.replace(/^\-/, "")
        },
        IN = function(e) {
            return {
                editorContainer: e,
                iframeContainer: e,
                api: {}
            }
        },
        MN = function(e) {
            var t, n, r = e.getElement();
            return e.inline ? IN(null) : (t = r, n = BN.create("div"), BN.insertAfter(n, t), IN(n))
        },
        FN = function(e) {
            var t, n, r, o = e.getElement();
            return e.orgDisplay = o.style.display, K(wc(e)) ? e.theme.renderUI() : m(wc(e)) ? (n = (t = e).getElement(), (r = wc(t)(t, n)).editorContainer.nodeType && (r.editorContainer.id = r.editorContainer.id || t.id + "_parent"), r.iframeContainer && r.iframeContainer.nodeType && (r.iframeContainer.id = r.iframeContainer.id || t.id + "_iframecontainer"), r.height = r.iframeHeight ? r.iframeHeight : n.offsetHeight, r) : MN(e)
        },
        UN = function(e) {
            var n, t, r, o, i, a, u, s, c;
            e.fire("ScriptsLoaded"), n = e, t = At.trim(gc(n)), r = n.ui.registry.getAll().icons, o = _e(_e({}, qy.get("default").icons), qy.get(t).icons), se(o, function(e, t) {
                ve(r, t) || n.ui.registry.addIcon(t, e)
            }), u = wc(i = e), K(u) ? (i.settings.theme = LN(u), a = tb.get(u), i.theme = new a(i, tb.urls[u]), i.theme.init && i.theme.init(i, tb.urls[u] || i.documentBaseUrl.replace(/\/$/, ""), i.$)) : i.theme = {}, s = e, c = [], At.each(Sc(s).split(/[ ,]/), function(e) {
                PN(s, c, LN(e))
            });
            var l, f, d, m = FN(e);
            l = e, f = U.from(m.api).getOr({}), d = {
                show: U.from(f.show).getOr(te),
                hide: U.from(f.hide).getOr(te),
                disable: U.from(f.disable).getOr(te),
                isDisabled: U.from(f.isDisabled).getOr(A),
                enable: function() {
                    l.mode.isReadOnly() || U.from(f.enable).map(_)
                }
            }, l.ui = _e(_e({}, l.ui), d);
            var g, p, h, v = {
                editorContainer: m.editorContainer,
                iframeContainer: m.iframeContainer
            };
            return e.editorContainer = v.editorContainer ? v.editorContainer : null, mb(e), e.inline ? RN(e) : (h = ON(g = e, p = v), p.editorContainer && (TN.get(p.editorContainer).style.display = g.orgDisplay, g.hidden = TN.isHidden(p.editorContainer)), g.getElement().style.display = "none", TN.setAttrib(g.id, "aria-hidden", "true"), void(h || RN(g)))
        },
        zN = Su.DOM,
        jN = function(e) {
            return "-" === e.charAt(0)
        },
        HN = function(e, t) {
            var n, r = hc(t),
                o = t.getParam("language_url", "", "string");
            !1 === Bu.hasCode(r) && "en" !== r && (n = "" !== o ? o : t.editorManager.baseURL + "/langs/" + r + ".js", e.add(n, te, undefined, function() {
                ub(t, "LanguageLoadError", sb("language", n, r))
            }))
        },
        VN = function(t, e, n) {
            return U.from(e).filter(function(e) {
                return 0 < e.length && !qy.has(e)
            }).map(function(e) {
                return {
                    url: t.editorManager.baseURL + "/icons/" + e + "/icons" + n + ".js",
                    name: U.some(e)
                }
            })
        },
        qN = function(e, o, t) {
            var n, r = VN(o, "default", t),
                i = (n = o, U.from(n.getParam("icons_url", "", "string")).filter(function(e) {
                    return 0 < e.length
                }).map(function(e) {
                    return {
                        url: e,
                        name: U.none()
                    }
                }).orThunk(function() {
                    return VN(o, gc(o), "")
                }));
            Y(function(e) {
                for (var t = [], n = function(e) {
                        t.push(e)
                    }, r = 0; r < e.length; r++) e[r].each(n);
                return t
            }([r, i]), function(r) {
                e.add(r.url, te, undefined, function() {
                    var e, t, n;
                    e = o, t = r.url, n = r.name.getOrUndefined(), ub(e, "IconsLoadError", sb("icons", t, n))
                })
            })
        },
        $N = function(e, t) {
            var n, r, o, i, a, u, s = _u.ScriptLoader;
            n = s, o = t, i = function() {
                var r, o;
                HN(s, e), qN(s, e, t), r = e, o = t, At.each(r.getParam("external_plugins"), function(e, t) {
                    eb.load(t, e, te, undefined, function() {
                        cb(r, e, t)
                    }), r.settings.plugins += " " + t
                }), At.each(Sc(r).split(/[ ,]/), function(e) {
                    var t, n;
                    (e = At.trim(e)) && !eb.urls[e] && (jN(e) ? (e = e.substr(1, e.length), t = eb.dependencies(e), At.each(t, function(e) {
                        var t = {
                                prefix: "plugins/",
                                resource: e,
                                suffix: "/plugin" + o + ".js"
                            },
                            n = eb.createUrl(t, e);
                        eb.load(n.resource, n, te, undefined, function() {
                            cb(r, n.prefix + n.resource + n.suffix, n.resource)
                        })
                    })) : (n = {
                        prefix: "plugins/",
                        resource: e,
                        suffix: "/plugin" + o + ".js"
                    }, eb.load(e, n, te, undefined, function() {
                        cb(r, n.prefix + n.resource + n.suffix, e)
                    })))
                }), s.loadQueue(function() {
                    e.removed || UN(e)
                }, e, function() {
                    e.removed || UN(e)
                })
            }, u = wc(r = e), K(u) ? (jN(u) || tb.urls.hasOwnProperty(u) || ((a = r.getParam("theme_url")) ? tb.load(u, r.documentBaseURI.toAbsolute(a)) : tb.load(u, "themes/" + u + "/theme" + o + ".js")), n.loadQueue(function() {
                tb.waitFor(u, i)
            })) : i()
        },
        WN = function(t) {
            var e = t.id;
            Bu.setCode(hc(t));
            var n, r, o, i, a, u = function() {
                zN.unbind(window, "ready", u), t.render()
            };
            Di.Event.domLoaded ? t.getElement() && St.contentEditable && (n = Tt.fromDom(t.getElement()), r = $(n.dom.attributes, function(e, t) {
                return e[t.name] = t.value, e
            }, {}), t.on("remove", function() {
                j(n.dom.attributes, function(e) {
                    return er(n, e.name), 0
                }), Jn(n, r)
            }), t.ui.styleSheetLoader = (o = n, i = t, Yr.forElement(o, {
                contentCssCors: i.getParam("content_css_cors"),
                referrerPolicy: pc(i)
            })), t.getParam("inline") ? t.inline = !0 : (t.orgVisibility = t.getElement().style.visibility, t.getElement().style.visibility = "hidden"), (a = t.getElement().form || zN.getParent(e, "form")) && (t.formElement = a, t.getParam("hidden_input") && !Mn(t.getElement()) && (zN.insertAfter(zN.create("input", {
                type: "hidden",
                name: e
            }), e), t.hasHiddenInput = !0), t.formEventDelegate = function(e) {
                t.fire(e.type, e)
            }, zN.bind(a, "submit reset", t.formEventDelegate), t.on("reset", function() {
                t.resetContent()
            }), !t.getParam("submit_patch") || a.submit.nodeType || a.submit.length || a._mceOldSubmit || (a._mceOldSubmit = a.submit, a.submit = function() {
                return t.editorManager.triggerSave(), t.setDirty(!1), a._mceOldSubmit(a)
            })), t.windowManager = ob(t), t.notificationManager = Zy(t), "xml" === t.getParam("encoding") && t.on("GetContent", function(e) {
                e.save && (e.content = zN.encode(e.content))
            }), t.getParam("add_form_submit_trigger") && t.on("submit", function() {
                t.initialized && t.save()
            }), t.getParam("add_unload_trigger") && (t._beforeUnload = function() {
                !t.initialized || t.destroyed || t.isHidden() || t.save({
                    format: "raw",
                    no_events: !0,
                    set_dirty: !1
                })
            }, t.editorManager.on("BeforeUnload", t._beforeUnload)), t.editorManager.add(t), $N(t, t.suffix)) : zN.bind(window, "ready", u)
        },
        KN = function(e, t) {
            return n = t, Uv(e).editor.addVisual(n);
            var n
        },
        XN = {
            "font-size": "size",
            "font-family": "face"
        },
        YN = function(n, t, e) {
            return th(Tt.fromDom(e), function(e) {
                return or(t = e, n).orThunk(function() {
                    return "font" === Mt(t) ? he(XN, n).bind(function(e) {
                        return Zn(t, e)
                    }) : U.none()
                });
                var t
            }, function(e) {
                return Pt(Tt.fromDom(t), e)
            })
        },
        GN = function(o) {
            return function(r, e) {
                return U.from(e).map(Tt.fromDom).filter(zt).bind(function(e) {
                    return YN(o, r, e.dom).or((t = o, n = e.dom, U.from(Su.DOM.getStyle(n, t, !0))));
                    var t, n
                }).getOr("")
            }
        },
        JN = GN("font-size"),
        QN = C(function(e) {
            return e.replace(/[\'\"\\]/g, "").replace(/,\s+/g, ",")
        }, GN("font-family")),
        ZN = function(e) {
            return Il(e.getBody()).map(function(e) {
                var t = e.container();
                return Fn(t) ? t.parentNode : t
            })
        },
        eE = function(e, t) {
            return n = e, U.from(n.selection.getRng()).bind(function(e) {
                var t = n.getBody();
                return e.startContainer === t && 0 === e.startOffset ? U.none() : U.from(n.selection.getStart(!0))
            }).orThunk(k(ZN, e)).map(Tt.fromDom).filter(zt).map(t);
            var n
        },
        tE = function(e, t) {
            if (/^[0-9.]+$/.test(t)) {
                var n = parseInt(t, 10);
                if (1 <= n && n <= 7) {
                    var r = (a = e, At.explode(a.getParam("font_size_style_values", "xx-small,x-small,small,medium,large,x-large,xx-large"))),
                        o = (i = e, At.explode(i.getParam("font_size_classes", "")));
                    return o ? o[n - 1] || t : r[n - 1] || t
                }
                return t
            }
            return t;
            var i, a
        },
        nE = function(e, t) {
            var n, r = tE(e, t);
            e.formatter.toggle("fontname", {
                value: (n = r.split(/\s*,\s*/), z(n, function(e) {
                    return -1 === e.indexOf(" ") || qe(e, '"') || qe(e, "'") ? e : "'" + e + "'"
                }).join(","))
            }), e.nodeChanged()
        },
        rE = function(e, t) {
            var n, r, o, i, a = "string" != typeof(n = t) ? (r = At.extend({
                paste: n.paste,
                data: {
                    paste: n.paste
                }
            }, n), {
                content: n.content,
                details: r
            }) : {
                content: n,
                details: {}
            };
            o = a.content, i = a.details, Fv(e).editor.insertContent(o, i)
        },
        oE = At.each,
        iE = At.map,
        aE = At.inArray,
        uE = (sE.prototype.execCommand = function(t, n, r, e) {
            var o, i, a = !1,
                u = this;
            if (!u.editor.removed) {
                if (/^(mceAddUndoLevel|mceEndUndoLevel|mceBeginUndoLevel|mceRepaint)$/.test(t) || e && e.skip_focus ? (i = u.editor, am(i).each(function(e) {
                        return i.selection.setRng(e)
                    })) : u.editor.focus(), (e = u.editor.fire("BeforeExecCommand", {
                        command: t,
                        ui: n,
                        value: r
                    })).isDefaultPrevented()) return !1;
                var s = t.toLowerCase();
                if (o = u.commands.exec[s]) return o(s, n, r), u.editor.fire("ExecCommand", {
                    command: t,
                    ui: n,
                    value: r
                }), !0;
                if (oE(this.editor.plugins, function(e) {
                        if (e.execCommand && e.execCommand(t, n, r)) return u.editor.fire("ExecCommand", {
                            command: t,
                            ui: n,
                            value: r
                        }), !(a = !0)
                    }), a) return a;
                if (u.editor.theme && u.editor.theme.execCommand && u.editor.theme.execCommand(t, n, r)) return u.editor.fire("ExecCommand", {
                    command: t,
                    ui: n,
                    value: r
                }), !0;
                try {
                    a = u.editor.getDoc().execCommand(t, n, r)
                } catch (c) {}
                return !!a && (u.editor.fire("ExecCommand", {
                    command: t,
                    ui: n,
                    value: r
                }), !0)
            }
        }, sE.prototype.queryCommandState = function(e) {
            var t;
            if (!this.editor.quirks.isHidden() && !this.editor.removed) {
                if (e = e.toLowerCase(), t = this.commands.state[e]) return t(e);
                try {
                    return this.editor.getDoc().queryCommandState(e)
                } catch (n) {}
                return !1
            }
        }, sE.prototype.queryCommandValue = function(e) {
            var t;
            if (!this.editor.quirks.isHidden() && !this.editor.removed) {
                if (e = e.toLowerCase(), t = this.commands.value[e]) return t(e);
                try {
                    return this.editor.getDoc().queryCommandValue(e)
                } catch (n) {}
            }
        }, sE.prototype.addCommands = function(e, n) {
            void 0 === n && (n = "exec");
            var r = this;
            oE(e, function(t, e) {
                oE(e.toLowerCase().split(","), function(e) {
                    r.commands[n][e] = t
                })
            })
        }, sE.prototype.addCommand = function(e, o, i) {
            var a = this;
            e = e.toLowerCase(), this.commands.exec[e] = function(e, t, n, r) {
                return o.call(i || a.editor, t, n, r)
            }
        }, sE.prototype.queryCommandSupported = function(e) {
            if (e = e.toLowerCase(), this.commands.exec[e]) return !0;
            try {
                return this.editor.getDoc().queryCommandSupported(e)
            } catch (t) {}
            return !1
        }, sE.prototype.addQueryStateHandler = function(e, t, n) {
            var r = this;
            e = e.toLowerCase(), this.commands.state[e] = function() {
                return t.call(n || r.editor)
            }
        }, sE.prototype.addQueryValueHandler = function(e, t, n) {
            var r = this;
            e = e.toLowerCase(), this.commands.value[e] = function() {
                return t.call(n || r.editor)
            }
        }, sE.prototype.hasCustomCommand = function(e) {
            return e = e.toLowerCase(), !!this.commands.exec[e]
        }, sE.prototype.execNativeCommand = function(e, t, n) {
            return t === undefined && (t = !1), n === undefined && (n = null), this.editor.getDoc().execCommand(e, t, n)
        }, sE.prototype.isFormatMatch = function(e) {
            return this.editor.formatter.match(e)
        }, sE.prototype.toggleFormat = function(e, t) {
            this.editor.formatter.toggle(e, t ? {
                value: t
            } : undefined), this.editor.nodeChanged()
        }, sE.prototype.storeSelection = function(e) {
            this.selectionBookmark = this.editor.selection.getBookmark(e)
        }, sE.prototype.restoreSelection = function() {
            this.editor.selection.moveToBookmark(this.selectionBookmark)
        }, sE.prototype.setupCommands = function(i) {
            var a = this;
            this.addCommands({
                "mceResetDesignMode,mceBeginUndoLevel": te,
                "mceEndUndoLevel,mceAddUndoLevel": function() {
                    i.undoManager.add()
                },
                "Cut,Copy,Paste": function(e) {
                    var t, n, r = i.getDoc();
                    try {
                        a.execNativeCommand(e)
                    } catch (o) {
                        t = !0
                    }
                    "paste" !== e || r.queryCommandEnabled(e) || (t = !0), !t && r.queryCommandSupported(e) || (n = i.translate("Your browser doesn't support direct access to the clipboard. Please use the Ctrl+X/C/V keyboard shortcuts instead."), St.mac && (n = n.replace(/Ctrl\+/g, "\u2318+")), i.notificationManager.open({
                        text: n,
                        type: "error"
                    }))
                },
                unlink: function() {
                    var e;
                    i.selection.isCollapsed() ? (e = i.dom.getParent(i.selection.getStart(), "a")) && i.dom.remove(e, !0) : i.formatter.remove("link")
                },
                "JustifyLeft,JustifyCenter,JustifyRight,JustifyFull,JustifyNone": function(e) {
                    var t = e.substring(7);
                    "full" === t && (t = "justify"), oE("left,center,right,justify".split(","), function(e) {
                        t !== e && i.formatter.remove("align" + e)
                    }), "none" !== t && a.toggleFormat("align" + t)
                },
                "InsertUnorderedList,InsertOrderedList": function(e) {
                    var t;
                    a.execNativeCommand(e);
                    var n = i.dom.getParent(i.selection.getNode(), "ol,ul");
                    n && (t = n.parentNode, /^(H[1-6]|P|ADDRESS|PRE)$/.test(t.nodeName) && (a.storeSelection(), i.dom.split(t, n), a.restoreSelection()))
                },
                "Bold,Italic,Underline,Strikethrough,Superscript,Subscript": function(e) {
                    a.toggleFormat(e)
                },
                "ForeColor,HiliteColor": function(e, t, n) {
                    a.toggleFormat(e, n)
                },
                FontName: function(e, t, n) {
                    nE(i, n)
                },
                FontSize: function(e, t, n) {
                    var r, o;
                    o = n, (r = i).formatter.toggle("fontsize", {
                        value: tE(r, o)
                    }), r.nodeChanged()
                },
                LineHeight: function(e, t, n) {
                    var r, o;
                    o = n, (r = i).formatter.toggle("lineheight", {
                        value: String(o)
                    }), r.nodeChanged()
                },
                RemoveFormat: function(e) {
                    i.formatter.remove(e)
                },
                mceBlockQuote: function() {
                    a.toggleFormat("blockquote")
                },
                FormatBlock: function(e, t, n) {
                    return a.toggleFormat(n || "p")
                },
                mceCleanup: function() {
                    var e = i.selection.getBookmark();
                    i.setContent(i.getContent()), i.selection.moveToBookmark(e)
                },
                mceRemoveNode: function(e, t, n) {
                    var r = n || i.selection.getNode();
                    r !== i.getBody() && (a.storeSelection(), i.dom.remove(r, !0), a.restoreSelection())
                },
                mceSelectNodeDepth: function(e, t, n) {
                    var r = 0;
                    i.dom.getParent(i.selection.getNode(), function(e) {
                        if (1 === e.nodeType && r++ === n) return i.selection.select(e), !1
                    }, i.getBody())
                },
                mceSelectNode: function(e, t, n) {
                    i.selection.select(n)
                },
                mceInsertContent: function(e, t, n) {
                    rE(i, n)
                },
                mceInsertRawHTML: function(e, t, n) {
                    i.selection.setContent("tiny_mce_marker");
                    var r = i.getContent();
                    i.setContent(r.replace(/tiny_mce_marker/g, function() {
                        return n
                    }))
                },
                mceInsertNewLine: function(e, t, n) {
                    MS(i, n)
                },
                mceToggleFormat: function(e, t, n) {
                    a.toggleFormat(n)
                },
                mceSetContent: function(e, t, n) {
                    i.setContent(n)
                },
                "Indent,Outdent": function(e) {
                    ux(i, e)
                },
                mceRepaint: te,
                InsertHorizontalRule: function() {
                    i.execCommand("mceInsertContent", !1, "<hr />")
                },
                mceToggleVisualAid: function() {
                    i.hasVisual = !i.hasVisual, i.addVisual()
                },
                mceReplaceContent: function(e, t, n) {
                    i.execCommand("mceInsertContent", !1, n.replace(/\{\$selection\}/g, i.selection.getContent({
                        format: "text"
                    })))
                },
                mceInsertLink: function(e, t, n) {
                    "string" == typeof n && (n = {
                        href: n
                    });
                    var r = i.dom.getParent(i.selection.getNode(), "a");
                    n.href = n.href.replace(/ /g, "%20"), r && n.href || i.formatter.remove("link"), n.href && i.formatter.apply("link", n, r)
                },
                selectAll: function() {
                    var e, t = i.dom.getParent(i.selection.getStart(), qn);
                    t && ((e = i.dom.createRng()).selectNodeContents(t), i.selection.setRng(e))
                },
                mceNewDocument: function() {
                    i.setContent("")
                },
                InsertLineBreak: function(e, t, n) {
                    return SS(i, n), !0
                }
            });
            var e = function(r) {
                return function() {
                    var e = i.selection,
                        t = e.isCollapsed() ? [i.dom.getParent(e.getNode(), i.dom.isBlock)] : e.getSelectedBlocks(),
                        n = iE(t, function(e) {
                            return !!i.formatter.matchNode(e, r)
                        });
                    return -1 !== aE(n, !0)
                }
            };
            a.addCommands({
                JustifyLeft: e("alignleft"),
                JustifyCenter: e("aligncenter"),
                JustifyRight: e("alignright"),
                JustifyFull: e("alignjustify"),
                "Bold,Italic,Underline,Strikethrough,Superscript,Subscript": function(e) {
                    return a.isFormatMatch(e)
                },
                mceBlockQuote: function() {
                    return a.isFormatMatch("blockquote")
                },
                Outdent: function() {
                    return ox(i)
                },
                "InsertUnorderedList,InsertOrderedList": function(e) {
                    var t = i.dom.getParent(i.selection.getNode(), "ul,ol");
                    return t && ("insertunorderedlist" === e && "UL" === t.tagName || "insertorderedlist" === e && "OL" === t.tagName)
                }
            }, "state"), a.addCommands({
                Undo: function() {
                    i.undoManager.undo()
                },
                Redo: function() {
                    i.undoManager.redo()
                }
            }), a.addQueryValueHandler("FontName", function() {
                return eE(t = i, function(e) {
                    return QN(t.getBody(), e.dom)
                }).getOr("");
                var t
            }, this), a.addQueryValueHandler("FontSize", function() {
                return eE(t = i, function(e) {
                    return JN(t.getBody(), e.dom)
                }).getOr("");
                var t
            }, this), a.addQueryValueHandler("LineHeight", function() {
                return eE(t = i, function(n) {
                    var e = Tt.fromDom(t.getBody());
                    return th(n, function(e) {
                        return or(e, "line-height")
                    }, k(Pt, e)).getOrThunk(function() {
                        var e = parseFloat(nr(n, "line-height")),
                            t = parseFloat(nr(n, "font-size"));
                        return String(e / t)
                    })
                }).getOr("");
                var t
            }, this)
        }, sE);
    function sE(e) {
        this.commands = {
            state: {},
            exec: {},
            value: {}
        }, this.editor = e, this.setupCommands(e)
    }
    var cE = "data-mce-contenteditable",
        lE = function(e, t, n) {
            var r, o;
            Vu(e, t) && !1 === n ? (o = t, Fu(r = e) ? r.dom.classList.remove(o) : zu(r, o), Hu(r)) : n && ju(e, t)
        },
        fE = function(e, t, n) {
            try {
                e.getDoc().execCommand(t, !1, String(n))
            } catch (r) {}
        },
        dE = function(e, t) {
            e.dom.contentEditable = t ? "true" : "false"
        },
        mE = function(e, t) {
            var n, r, o, i = Tt.fromDom(e.getBody());
            lE(i, "mce-content-readonly", t), t ? (e.selection.controlSelection.hideResizeRect(), e._selectionOverrides.hideFakeCaret(), o = e, U.from(o.selection.getNode()).each(function(e) {
                e.removeAttribute("data-mce-selected")
            }), e.readonly = !0, dE(i, !1), Y($u(i, '*[contenteditable="true"]'), function(e) {
                Gn(e, cE, "true"), dE(e, !1)
            })) : (e.readonly = !1, dE(i, !0), Y($u(i, "*[" + cE + '="true"]'), function(e) {
                er(e, cE), dE(e, !0)
            }), fE(e, "StyleWithCSS", !1), fE(e, "enableInlineTableEditing", !1), fE(e, "enableObjectResizing", !1), (bm(r = e) || ym(r)) && e.focus(), (n = e).selection.setRng(n.selection.getRng()), e.nodeChanged())
        },
        gE = function(e) {
            return e.readonly
        },
        pE = function(t) {
            t.parser.addAttributeFilter("contenteditable", function(e) {
                gE(t) && Y(e, function(e) {
                    e.attr(cE, e.attr("contenteditable")), e.attr("contenteditable", "false")
                })
            }), t.serializer.addAttributeFilter(cE, function(e) {
                gE(t) && Y(e, function(e) {
                    e.attr("contenteditable", e.attr(cE))
                })
            }), t.serializer.addTempAttr(cE)
        },
        hE = function(a, u) {
            var e, t;
            "click" !== u.type || nd.metaKeyPressed(u) || (e = Tt.fromDom(u.target), t = a, Ir(e, "a", function(e) {
                return Pt(e, Tt.fromDom(t.getBody()))
            }).bind(function(e) {
                return Zn(e, "href")
            }).each(function(e) {
                var t, n, r, o, i;
                u.preventDefault(), /^#/.test(e) ? (t = a.dom.select(e + ',[name="' + (qe(n = e, r = "#") ? (o = n, i = r.length, o.substring(i)) : n) + '"]')).length && a.selection.scrollIntoView(t[0], !0) : window.open(e, "_blank", "rel=noopener noreferrer,menubar=yes,toolbar=yes,location=yes,status=yes,resizable=yes,scrollbars=yes")
            }))
        },
        vE = At.makeMap("focus blur focusin focusout click dblclick mousedown mouseup mousemove mouseover beforepaste paste cut copy selectionchange mouseout mouseenter mouseleave wheel keydown keypress keyup input beforeinput contextmenu dragstart dragend dragover draggesture dragdrop drop drag submit compositionstart compositionend compositionupdate touchstart touchmove touchend touchcancel", " "),
        yE = (bE.isNative = function(e) {
            return !!vE[e.toLowerCase()]
        }, bE.prototype.fire = function(e, t) {
            var n = e.toLowerCase(),
                r = t || {};
            r.type = n, r.target || (r.target = this.scope), r.preventDefault || (r.preventDefault = function() {
                r.isDefaultPrevented = R
            }, r.stopPropagation = function() {
                r.isPropagationStopped = R
            }, r.stopImmediatePropagation = function() {
                r.isImmediatePropagationStopped = R
            }, r.isDefaultPrevented = A, r.isPropagationStopped = A, r.isImmediatePropagationStopped = A), this.settings.beforeFire && this.settings.beforeFire(r);
            var o = this.bindings[n];
            if (o)
                for (var i = 0, a = o.length; i < a; i++) {
                    var u = o[i];
                    if (u.once && this.off(n, u.func), r.isImmediatePropagationStopped()) return r.stopPropagation(), r;
                    if (!1 === u.func.call(this.scope, r)) return r.preventDefault(), r
                }
            return r
        }, bE.prototype.on = function(e, t, n, r) {
            if (!1 === t && (t = A), t) {
                var o = {
                    func: t
                };
                r && At.extend(o, r);
                for (var i = e.toLowerCase().split(" "), a = i.length; a--;) {
                    var u = i[a],
                        s = this.bindings[u];
                    s || (s = this.bindings[u] = [], this.toggleEvent(u, !0)), n ? s.unshift(o) : s.push(o)
                }
            }
            return this
        }, bE.prototype.off = function(e, t) {
            var n = this;
            if (e)
                for (var r = e.toLowerCase().split(" "), o = r.length; o--;) {
                    var i = r[o],
                        a = this.bindings[i];
                    if (!i) return se(this.bindings, function(e, t) {
                        n.toggleEvent(t, !1), delete n.bindings[t]
                    }), this;
                    if (a) {
                        if (t)
                            for (var u = a.length; u--;) a[u].func === t && (a = a.slice(0, u).concat(a.slice(u + 1)), this.bindings[i] = a);
                        else a.length = 0;
                        a.length || (this.toggleEvent(e, !1), delete this.bindings[i])
                    }
                } else se(this.bindings, function(e, t) {
                    n.toggleEvent(t, !1)
                }), this.bindings = {};
            return this
        }, bE.prototype.once = function(e, t, n) {
            return this.on(e, t, n, {
                once: !0
            })
        }, bE.prototype.has = function(e) {
            return e = e.toLowerCase(), !(!this.bindings[e] || 0 === this.bindings[e].length)
        }, bE);
    function bE(e) {
        this.bindings = {}, this.settings = e || {}, this.scope = this.settings.scope || this, this.toggleEvent = this.settings.toggleEvent || A
    }
    var CE, wE = function(n) {
            return n._eventDispatcher || (n._eventDispatcher = new yE({
                scope: n,
                toggleEvent: function(e, t) {
                    yE.isNative(e) && n.toggleNativeEvent && n.toggleNativeEvent(e, t)
                }
            })), n._eventDispatcher
        },
        xE = {
            fire: function(e, t, n) {
                if (this.removed && "remove" !== e && "detach" !== e) return t;
                var r = wE(this).fire(e, t);
                if (!1 !== n && this.parent)
                    for (var o = this.parent(); o && !r.isPropagationStopped();) o.fire(e, r, !1), o = o.parent();
                return r
            },
            on: function(e, t, n) {
                return wE(this).on(e, t, n)
            },
            off: function(e, t) {
                return wE(this).off(e, t)
            },
            once: function(e, t) {
                return wE(this).once(e, t)
            },
            hasEventListeners: function(e) {
                return wE(this).has(e)
            }
        },
        SE = Su.DOM,
        NE = function(e, t) {
            if ("selectionchange" === t) return e.getDoc();
            if (!e.inline && /^mouse|touch|click|contextmenu|drop|dragover|dragend/.test(t)) return e.getDoc().documentElement;
            var n = Cc(e);
            return n ? (e.eventRoot || (e.eventRoot = SE.select(n)[0]), e.eventRoot) : e.getBody()
        },
        EE = function(e, t, n) {
            var r;
            (r = e).hidden || gE(r) ? gE(e) && hE(e, n) : e.fire(t, n)
        },
        kE = function(i, a) {
            var e;
            if (i.delegates || (i.delegates = {}), !i.delegates[a] && !i.removed) {
                var t = NE(i, a);
                if (Cc(i)) {
                    if (CE || (CE = {}, i.editorManager.on("removeEditor", function() {
                            i.editorManager.activeEditor || CE && (se(CE, function(e, t) {
                                i.dom.unbind(NE(i, t))
                            }), CE = null)
                        })), CE[a]) return;
                    e = function(e) {
                        for (var t = e.target, n = i.editorManager.get(), r = n.length; r--;) {
                            var o = n[r].getBody();
                            o !== t && !SE.isChildOf(t, o) || EE(n[r], a, e)
                        }
                    }, CE[a] = e, SE.bind(t, a, e)
                } else e = function(e) {
                    EE(i, a, e)
                }, SE.bind(t, a, e), i.delegates[a] = e
            }
        },
        _E = _e(_e({}, xE), {
            bindPendingEventDelegates: function() {
                var t = this;
                At.each(t._pendingNativeEvents, function(e) {
                    kE(t, e)
                })
            },
            toggleNativeEvent: function(e, t) {
                var n = this;
                "focus" !== e && "blur" !== e && (t ? n.initialized ? kE(n, e) : n._pendingNativeEvents ? n._pendingNativeEvents.push(e) : n._pendingNativeEvents = [e] : n.initialized && (n.dom.unbind(NE(n, e), e, n.delegates[e]), delete n.delegates[e]))
            },
            unbindAllNativeEvents: function() {
                var n = this,
                    e = n.getBody(),
                    t = n.dom;
                n.delegates && (se(n.delegates, function(e, t) {
                    n.dom.unbind(NE(n, t), t, e)
                }), delete n.delegates), !n.inline && e && t && (e.onload = null, t.unbind(n.getWin()), t.unbind(n.getDoc())), t && (t.unbind(e), t.unbind(n.getContainer()))
            }
        }),
        AE = ["design", "readonly"],
        RE = function(e, t, n, r) {
            var o, i = n[t.get()],
                a = n[r];
            try {
                a.activate()
            } catch (zk) {
                return void console.error("problem while activating editor mode " + r + ":", zk)
            }
            i.deactivate(), i.editorReadOnly !== a.editorReadOnly && mE(e, a.editorReadOnly), t.set(r), o = r, e.fire("SwitchMode", {
                mode: o
            })
        },
        TE = function(t) {
            var e, n, r = Ru("design"),
                o = Ru({
                    design: {
                        activate: te,
                        deactivate: te,
                        editorReadOnly: !1
                    },
                    readonly: {
                        activate: te,
                        deactivate: te,
                        editorReadOnly: !0
                    }
                });
            return (e = t).serializer ? pE(e) : e.on("PreInit", function() {
                pE(e)
            }), (n = t).on("ShowCaret", function(e) {
                gE(n) && e.preventDefault()
            }), n.on("ObjectSelected", function(e) {
                gE(n) && e.preventDefault()
            }), {
                isReadOnly: function() {
                    return gE(t)
                },
                set: function(e) {
                    return function(e, t, n, r) {
                        if (r !== n.get()) {
                            if (!ve(t, r)) throw new Error("Editor mode '" + r + "' is invalid");
                            e.initialized ? RE(e, n, t, r) : e.on("init", function() {
                                return RE(e, n, t, r)
                            })
                        }
                    }(t, o.get(), r, e)
                },
                get: function() {
                    return r.get()
                },
                register: function(e, t) {
                    o.set(function(e, t, n) {
                        var r;
                        if (M(AE, t)) throw new Error("Cannot override default mode " + t);
                        return _e(_e({}, e), ((r = {})[t] = _e(_e({}, n), {
                            deactivate: function() {
                                try {
                                    n.deactivate()
                                } catch (zk) {
                                    console.error("problem while deactivating editor mode " + t + ":", zk)
                                }
                            }
                        }), r))
                    }(o.get(), e, t))
                }
            }
        },
        DE = At.each,
        OE = At.explode,
        BE = {
            f1: 112,
            f2: 113,
            f3: 114,
            f4: 115,
            f5: 116,
            f6: 117,
            f7: 118,
            f8: 119,
            f9: 120,
            f10: 121,
            f11: 122,
            f12: 123
        },
        PE = At.makeMap("alt,ctrl,shift,meta,access"),
        LE = function(e) {
            var t, n = {};
            DE(OE(e.toLowerCase(), "+"), function(e) {
                e in PE ? n[e] = !0 : /^[0-9]{2,}$/.test(e) ? n.keyCode = parseInt(e, 10) : (n.charCode = e.charCodeAt(0), n.keyCode = BE[e] || e.toUpperCase().charCodeAt(0))
            });
            var r = [n.keyCode];
            for (t in PE) n[t] ? r.push(t) : n[t] = !1;
            return n.id = r.join(","), n.access && (n.alt = !0, St.mac ? n.ctrl = !0 : n.shift = !0), n.meta && (St.mac ? n.meta = !0 : (n.ctrl = !0, n.meta = !1)), n
        },
        IE = (ME.prototype.add = function(e, n, t, r) {
            var o = this,
                i = o.normalizeCommandFunc(t);
            return DE(OE(At.trim(e)), function(e) {
                var t = o.createShortcut(e, n, i, r);
                o.shortcuts[t.id] = t
            }), !0
        }, ME.prototype.remove = function(e) {
            var t = this.createShortcut(e);
            return !!this.shortcuts[t.id] && (delete this.shortcuts[t.id], !0)
        }, ME.prototype.normalizeCommandFunc = function(e) {
            var t = this,
                n = e;
            return "string" == typeof n ? function() {
                t.editor.execCommand(n, !1, null)
            } : At.isArray(n) ? function() {
                t.editor.execCommand(n[0], n[1], n[2])
            } : n
        }, ME.prototype.createShortcut = function(e, t, n, r) {
            var o = At.map(OE(e, ">"), LE);
            return o[o.length - 1] = At.extend(o[o.length - 1], {
                func: n,
                scope: r || this.editor
            }), At.extend(o[0], {
                desc: this.editor.translate(t),
                subpatterns: o.slice(1)
            })
        }, ME.prototype.hasModifier = function(e) {
            return e.altKey || e.ctrlKey || e.metaKey
        }, ME.prototype.isFunctionKey = function(e) {
            return "keydown" === e.type && 112 <= e.keyCode && e.keyCode <= 123
        }, ME.prototype.matchShortcut = function(e, t) {
            return !!t && t.ctrl === e.ctrlKey && t.meta === e.metaKey && t.alt === e.altKey && t.shift === e.shiftKey && !!(e.keyCode === t.keyCode || e.charCode && e.charCode === t.charCode) && (e.preventDefault(), !0)
        }, ME.prototype.executeShortcutAction = function(e) {
            return e.func ? e.func.call(e.scope) : null
        }, ME);
    function ME(e) {
        this.shortcuts = {}, this.pendingPatterns = [], this.editor = e;
        var n = this;
        e.on("keyup keypress keydown", function(t) {
            !n.hasModifier(t) && !n.isFunctionKey(t) || t.isDefaultPrevented() || (DE(n.shortcuts, function(e) {
                if (n.matchShortcut(t, e)) return n.pendingPatterns = e.subpatterns.slice(0), "keydown" === t.type && n.executeShortcutAction(e), !0
            }), n.matchShortcut(t, n.pendingPatterns[0]) && (1 === n.pendingPatterns.length && "keydown" === t.type && n.executeShortcutAction(n.pendingPatterns[0]), n.pendingPatterns.shift()))
        })
    }
    var FE = function() {
            var e, t, n, r, o, i, a, u, s = (t = {}, n = {}, r = {}, o = {}, i = {}, a = {}, {
                addButton: (u = function(n, r) {
                    return function(e, t) {
                        return n[e.toLowerCase()] = _e(_e({}, t), {
                            type: r
                        })
                    }
                })(e = {}, "button"),
                addGroupToolbarButton: u(e, "grouptoolbarbutton"),
                addToggleButton: u(e, "togglebutton"),
                addMenuButton: u(e, "menubutton"),
                addSplitButton: u(e, "splitbutton"),
                addMenuItem: u(t, "menuitem"),
                addNestedMenuItem: u(t, "nestedmenuitem"),
                addToggleMenuItem: u(t, "togglemenuitem"),
                addAutocompleter: u(n, "autocompleter"),
                addContextMenu: u(o, "contextmenu"),
                addContextToolbar: u(i, "contexttoolbar"),
                addContextForm: u(i, "contextform"),
                addSidebar: u(a, "sidebar"),
                addIcon: function(e, t) {
                    return r[e.toLowerCase()] = t
                },
                getAll: function() {
                    return {
                        buttons: e,
                        menuItems: t,
                        icons: r,
                        popups: n,
                        contextMenus: o,
                        contextToolbars: i,
                        sidebars: a
                    }
                }
            });
            return {
                addAutocompleter: s.addAutocompleter,
                addButton: s.addButton,
                addContextForm: s.addContextForm,
                addContextMenu: s.addContextMenu,
                addContextToolbar: s.addContextToolbar,
                addIcon: s.addIcon,
                addMenuButton: s.addMenuButton,
                addMenuItem: s.addMenuItem,
                addNestedMenuItem: s.addNestedMenuItem,
                addSidebar: s.addSidebar,
                addSplitButton: s.addSplitButton,
                addToggleButton: s.addToggleButton,
                addGroupToolbarButton: s.addGroupToolbarButton,
                addToggleMenuItem: s.addToggleMenuItem,
                getAll: s.getAll
            }
        },
        UE = At.each,
        zE = At.trim,
        jE = "source protocol authority userInfo user password host port relative path directory file query anchor".split(" "),
        HE = {
            ftp: 21,
            http: 80,
            https: 443,
            mailto: 25
        },
        VE = (qE.parseDataUri = function(e) {
            var t, n = decodeURIComponent(e).split(","),
                r = /data:([^;]+)/.exec(n[0]);
            return r && (t = r[1]), {
                type: t,
                data: n[1]
            }
        }, qE.getDocumentBaseUrl = function(e) {
            var t = 0 !== e.protocol.indexOf("http") && "file:" !== e.protocol ? e.href : e.protocol + "//" + e.host + e.pathname;
            return /^[^:]+:\/\/\/?[^\/]+\//.test(t) && (t = t.replace(/[\?#].*$/, "").replace(/[\/\\][^\/]+$/, ""), /[\/\\]$/.test(t) || (t += "/")), t
        }, qE.prototype.setPath = function(e) {
            var t = /^(.*?)\/?(\w+)?$/.exec(e);
            this.path = t[0], this.directory = t[1], this.file = t[2], this.source = "", this.getURI()
        }, qE.prototype.toRelative = function(e) {
            var t;
            if ("./" === e) return e;
            var n = new qE(e, {
                base_uri: this
            });
            if ("mce_host" !== n.host && this.host !== n.host && n.host || this.port !== n.port || this.protocol !== n.protocol && "" !== n.protocol) return n.getURI();
            var r = this.getURI(),
                o = n.getURI();
            return r === o || "/" === r.charAt(r.length - 1) && r.substr(0, r.length - 1) === o ? r : (t = this.toRelPath(this.path, n.path), n.query && (t += "?" + n.query), n.anchor && (t += "#" + n.anchor), t)
        }, qE.prototype.toAbsolute = function(e, t) {
            var n = new qE(e, {
                base_uri: this
            });
            return n.getURI(t && this.isSameOrigin(n))
        }, qE.prototype.isSameOrigin = function(e) {
            if (this.host == e.host && this.protocol == e.protocol) {
                if (this.port == e.port) return !0;
                var t = HE[this.protocol];
                if (t && (this.port || t) == (e.port || t)) return !0
            }
            return !1
        }, qE.prototype.toRelPath = function(e, t) {
            var n, r, o = 0,
                i = "",
                a = e.substring(0, e.lastIndexOf("/")).split("/"),
                u = t.split("/");
            if (a.length >= u.length)
                for (n = 0, r = a.length; n < r; n++)
                    if (n >= u.length || a[n] !== u[n]) {
                        o = n + 1;
                        break
                    } if (a.length < u.length)
                for (n = 0, r = u.length; n < r; n++)
                    if (n >= a.length || a[n] !== u[n]) {
                        o = n + 1;
                        break
                    } if (1 === o) return t;
            for (n = 0, r = a.length - (o - 1); n < r; n++) i += "../";
            for (n = o - 1, r = u.length; n < r; n++) i += n !== o - 1 ? "/" + u[n] : u[n];
            return i
        }, qE.prototype.toAbsPath = function(e, t) {
            var n, r, o = 0,
                i = [],
                a = /\/$/.test(t) ? "/" : "",
                u = e.split("/"),
                s = t.split("/");
            for (UE(u, function(e) {
                    e && i.push(e)
                }), u = i, n = s.length - 1, i = []; 0 <= n; n--) 0 !== s[n].length && "." !== s[n] && (".." !== s[n] ? 0 < o ? o-- : i.push(s[n]) : o++);
            return 0 !== (r = (n = u.length - o) <= 0 ? Z(i).join("/") : u.slice(0, n).join("/") + "/" + Z(i).join("/")).indexOf("/") && (r = "/" + r), a && r.lastIndexOf("/") !== r.length - 1 && (r += a), r
        }, qE.prototype.getURI = function(e) {
            var t;
            return void 0 === e && (e = !1), this.source && !e || (t = "", e || (this.protocol ? t += this.protocol + "://" : t += "//", this.userInfo && (t += this.userInfo + "@"), this.host && (t += this.host), this.port && (t += ":" + this.port)), this.path && (t += this.path), this.query && (t += "?" + this.query), this.anchor && (t += "#" + this.anchor), this.source = t), this.source
        }, qE);
    function qE(e, t) {
        e = zE(e), this.settings = t || {};
        var n, r, o, i, a = this.settings.base_uri,
            u = this;
        /^([\w\-]+):([^\/]{2})/i.test(e) || /^\s*#/.test(e) ? u.source = e : (n = 0 === e.indexOf("//"), 0 !== e.indexOf("/") || n || (e = (a && a.protocol || "http") + "://mce_host" + e), /^[\w\-]*:?\/\//.test(e) || (r = this.settings.base_uri ? this.settings.base_uri.path : new qE(document.location.href).directory, e = this.settings.base_uri && "" == this.settings.base_uri.protocol ? "//mce_host" + u.toAbsPath(r, e) : (o = /([^#?]*)([#?]?.*)/.exec(e), (a && a.protocol || "http") + "://mce_host" + u.toAbsPath(r, o[1]) + o[2])), e = e.replace(/@@/g, "(mce_at)"), i = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@\/]*):?([^:@\/]*))?@)?(\[[a-zA-Z0-9:.%]+\]|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(e), UE(jE, function(e, t) {
            var n = (n = i[t]) && n.replace(/\(mce_at\)/g, "@@");
            u[e] = n
        }), a && (u.protocol || (u.protocol = a.protocol), u.userInfo || (u.userInfo = a.userInfo), u.port || "mce_host" !== u.host || (u.port = a.port), u.host && "mce_host" !== u.host || (u.host = a.host), u.source = ""), n && (u.protocol = ""))
    }
    var $E = Su.DOM,
        WE = At.extend,
        KE = At.each,
        XE = At.resolve,
        YE = St.ie,
        GE = (JE.prototype.render = function() {
            WN(this)
        }, JE.prototype.focus = function(e) {
            var t, n;
            n = e, (t = this).removed || (n ? wm : Cm)(t)
        }, JE.prototype.hasFocus = function() {
            return bm(this)
        }, JE.prototype.execCallback = function(e) {
            for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            var r, o = this.settings[e];
            if (o) return this.callbackLookup && (r = this.callbackLookup[e]) && (o = r.func, r = r.scope), "string" == typeof o && (r = (r = o.replace(/\.\w+$/, "")) ? XE(r) : 0, o = XE(o), this.callbackLookup = this.callbackLookup || {}, this.callbackLookup[e] = {
                func: o,
                scope: r
            }), o.apply(r || this, t)
        }, JE.prototype.translate = function(e) {
            return Bu.translate(e)
        }, JE.prototype.getParam = function(e, t, n) {
            return Vy(this, e, t, n)
        }, JE.prototype.hasPlugin = function(e, t) {
            return !(!M(Sc(this).split(/[ ,]/), e) || t && eb.get(e) === undefined)
        }, JE.prototype.nodeChanged = function(e) {
            this._nodeChangeDispatcher.nodeChanged(e)
        }, JE.prototype.addCommand = function(e, t, n) {
            this.editorCommands.addCommand(e, t, n)
        }, JE.prototype.addQueryStateHandler = function(e, t, n) {
            this.editorCommands.addQueryStateHandler(e, t, n)
        }, JE.prototype.addQueryValueHandler = function(e, t, n) {
            this.editorCommands.addQueryValueHandler(e, t, n)
        }, JE.prototype.addShortcut = function(e, t, n, r) {
            this.shortcuts.add(e, t, n, r)
        }, JE.prototype.execCommand = function(e, t, n, r) {
            return this.editorCommands.execCommand(e, t, n, r)
        }, JE.prototype.queryCommandState = function(e) {
            return this.editorCommands.queryCommandState(e)
        }, JE.prototype.queryCommandValue = function(e) {
            return this.editorCommands.queryCommandValue(e)
        }, JE.prototype.queryCommandSupported = function(e) {
            return this.editorCommands.queryCommandSupported(e)
        }, JE.prototype.show = function() {
            this.hidden && (this.hidden = !1, this.inline ? this.getBody().contentEditable = "true" : ($E.show(this.getContainer()), $E.hide(this.id)), this.load(), this.fire("show"))
        }, JE.prototype.hide = function() {
            var e = this,
                t = e.getDoc();
            e.hidden || (YE && t && !e.inline && t.execCommand("SelectAll"), e.save(), e.inline ? (e.getBody().contentEditable = "false", e === e.editorManager.focusedEditor && (e.editorManager.focusedEditor = null)) : ($E.hide(e.getContainer()), $E.setStyle(e.id, "display", e.orgDisplay)), e.hidden = !0, e.fire("hide"))
        }, JE.prototype.isHidden = function() {
            return !!this.hidden
        }, JE.prototype.setProgressState = function(e, t) {
            this.fire("ProgressState", {
                state: e,
                time: t
            })
        }, JE.prototype.load = function(e) {
            var t = this.getElement();
            if (this.removed) return "";
            if (t) {
                (e = e || {}).load = !0;
                var n = Mn(t) ? t.value : t.innerHTML,
                    r = this.setContent(n, e);
                return e.element = t, e.no_events || this.fire("LoadContent", e), e.element = t = null, r
            }
        }, JE.prototype.save = function(e) {
            var t, n, r = this,
                o = r.getElement();
            if (o && r.initialized && !r.removed) return (e = e || {}).save = !0, e.element = o, e.content = r.getContent(e), e.no_events || r.fire("SaveContent", e), "raw" === e.format && r.fire("RawSaveContent", e), t = e.content, Mn(o) ? o.value = t : (!e.is_removing && r.inline || (o.innerHTML = t), (n = $E.getParent(r.id, "form")) && KE(n.elements, function(e) {
                if (e.name === r.id) return e.value = t, !1
            })), e.element = o = null, !1 !== e.set_dirty && r.setDirty(!1), t
        }, JE.prototype.setContent = function(e, t) {
            return wy(this, e, t)
        }, JE.prototype.getContent = function(e) {
            return Cy(this, e)
        }, JE.prototype.insertContent = function(e, t) {
            t && (e = WE({
                content: e
            }, t)), this.execCommand("mceInsertContent", !1, e)
        }, JE.prototype.resetContent = function(e) {
            e === undefined ? wy(this, this.startContent, {
                format: "raw"
            }) : wy(this, e), this.undoManager.reset(), this.setDirty(!1), this.nodeChanged()
        }, JE.prototype.isDirty = function() {
            return !this.isNotDirty
        }, JE.prototype.setDirty = function(e) {
            var t = !this.isNotDirty;
            this.isNotDirty = !e, e && e !== t && this.fire("dirty")
        }, JE.prototype.getContainer = function() {
            return this.container || (this.container = $E.get(this.editorContainer || this.id + "_parent")), this.container
        }, JE.prototype.getContentAreaContainer = function() {
            return this.contentAreaContainer
        }, JE.prototype.getElement = function() {
            return this.targetElm || (this.targetElm = $E.get(this.id)), this.targetElm
        }, JE.prototype.getWin = function() {
            var e;
            return this.contentWindow || (e = this.iframeElement) && (this.contentWindow = e.contentWindow), this.contentWindow
        }, JE.prototype.getDoc = function() {
            var e;
            return this.contentDocument || (e = this.getWin()) && (this.contentDocument = e.document), this.contentDocument
        }, JE.prototype.getBody = function() {
            var e = this.getDoc();
            return this.bodyElement || (e ? e.body : null)
        }, JE.prototype.convertURL = function(e, t, n) {
            var r = this.settings;
            return r.urlconverter_callback ? this.execCallback("urlconverter_callback", e, n, !0, t) : !r.convert_urls || n && "LINK" === n.nodeName || 0 === e.indexOf("file:") || 0 === e.length ? e : r.relative_urls ? this.documentBaseURI.toRelative(e) : e = this.documentBaseURI.toAbsolute(e, r.remove_script_host)
        }, JE.prototype.addVisual = function(e) {
            KN(this, e)
        }, JE.prototype.remove = function() {
            Ny(this)
        }, JE.prototype.destroy = function(e) {
            Ey(this, e)
        }, JE.prototype.uploadImages = function(e) {
            return this.editorUpload.uploadImages(e)
        }, JE.prototype._scanForImages = function() {
            return this.editorUpload.scanForImages()
        }, JE.prototype.addButton = function() {
            throw new Error("editor.addButton has been removed in tinymce 5x, use editor.ui.registry.addButton or editor.ui.registry.addToggleButton or editor.ui.registry.addSplitButton instead")
        }, JE.prototype.addSidebar = function() {
            throw new Error("editor.addSidebar has been removed in tinymce 5x, use editor.ui.registry.addSidebar instead")
        }, JE.prototype.addMenuItem = function() {
            throw new Error("editor.addMenuItem has been removed in tinymce 5x, use editor.ui.registry.addMenuItem instead")
        }, JE.prototype.addContextToolbar = function() {
            throw new Error("editor.addContextToolbar has been removed in tinymce 5x, use editor.ui.registry.addContextToolbar instead")
        }, JE);
    function JE(e, t, n) {
        var r = this;
        this.plugins = {}, this.contentCSS = [], this.contentStyles = [], this.loadedCSS = {}, this.isNotDirty = !1, this.editorManager = n, this.documentBaseUrl = n.documentBaseURL, WE(this, _E), this.settings = jy(this, e, this.documentBaseUrl, n.defaultSettings, t), this.settings.suffix && (n.suffix = this.settings.suffix), this.suffix = n.suffix, this.settings.base_url && n._setBaseUrl(this.settings.base_url), this.baseUri = n.baseURI, this.settings.referrer_policy && (_u.ScriptLoader._setReferrerPolicy(this.settings.referrer_policy), Su.DOM.styleSheetLoader._setReferrerPolicy(this.settings.referrer_policy)), Pu.languageLoad = this.settings.language_load, Pu.baseURL = n.baseURL, this.id = e, this.setDirty(!1), this.documentBaseURI = new VE(this.settings.document_base_url, {
            base_uri: this.baseUri
        }), this.baseURI = this.baseUri, this.inline = !!this.settings.inline, this.shortcuts = new IE(this), this.editorCommands = new uE(this), this.settings.cache_suffix && (St.cacheSuffix = this.settings.cache_suffix.replace(/^[\?\&]+/, "")), this.ui = {
            registry: FE(),
            styleSheetLoader: undefined,
            show: te,
            hide: te,
            enable: te,
            disable: te,
            isDisabled: A
        };
        var o = TE(this);
        this.mode = o, this.setMode = o.set, n.fire("SetupEditor", {
            editor: this
        }), this.execCallback("setup", this), this.$ = hu.overrideDefaults(function() {
            return {
                context: r.inline ? r.getBody() : r.getDoc(),
                element: r.getBody()
            }
        })
    }
    var QE, ZE = Su.DOM,
        ek = At.explode,
        tk = At.each,
        nk = At.extend,
        rk = 0,
        ok = !1,
        ik = [],
        ak = [],
        uk = function(t) {
            var n = t.type;
            tk(fk.get(), function(e) {
                switch (n) {
                    case "scroll":
                        e.fire("ScrollWindow", t);
                        break;
                    case "resize":
                        e.fire("ResizeWindow", t)
                }
            })
        },
        sk = function(e) {
            e !== ok && (e ? hu(window).on("resize scroll", uk) : hu(window).off("resize scroll", uk), ok = e)
        },
        ck = function(t) {
            var e = ak;
            delete ik[t.id];
            for (var n = 0; n < ik.length; n++)
                if (ik[n] === t) {
                    ik.splice(n, 1);
                    break
                } return ak = H(ak, function(e) {
                return t !== e
            }), fk.activeEditor === t && (fk.activeEditor = 0 < ak.length ? ak[0] : null), fk.focusedEditor === t && (fk.focusedEditor = null), e.length !== ak.length
        },
        lk = "CSS1Compat" !== document.compatMode,
        fk = _e(_e({}, xE), {
            baseURI: null,
            baseURL: null,
            defaultSettings: {},
            documentBaseURL: null,
            suffix: null,
            $: hu,
            majorVersion: "5",
            minorVersion: "8.1",
            releaseDate: "2021-05-20",
            editors: ik,
            i18n: Bu,
            activeEditor: null,
            focusedEditor: null,
            settings: {},
            setup: function() {
                var e, t = "",
                    n = VE.getDocumentBaseUrl(document.location);
                /^[^:]+:\/\/\/?[^\/]+\//.test(n) && (n = n.replace(/[\?#].*$/, "").replace(/[\/\\][^\/]+$/, ""), /[\/\\]$/.test(n) || (n += "/"));
                var r, o = window.tinymce || window.tinyMCEPreInit;
                if (o) e = o.base || o.baseURL, t = o.suffix;
                else {
                    for (var i, a = document.getElementsByTagName("script"), u = 0; u < a.length; u++) {
                        if ("" !== (i = a[u].src || "")) {
                            var s = i.substring(i.lastIndexOf("/"));
                            if (/tinymce(\.full|\.jquery|)(\.min|\.dev|)\.js/.test(i)) {
                                -1 !== s.indexOf(".min") && (t = ".min"), e = i.substring(0, i.lastIndexOf("/"));
                                break
                            }
                        }
                    }!e && document.currentScript && (-1 !== (i = document.currentScript.src).indexOf(".min") && (t = ".min"), e = i.substring(0, i.lastIndexOf("/")))
                }
                this.baseURL = new VE(n).toAbsolute(e), this.documentBaseURL = n, this.baseURI = new VE(this.baseURL), this.suffix = t, (r = this).on("AddEditor", k(dm, r)), r.on("RemoveEditor", k(mm, r))
            },
            overrideDefaults: function(e) {
                var t = e.base_url;
                t && this._setBaseUrl(t);
                var n = e.suffix;
                e.suffix && (this.suffix = n);
                var r = (this.defaultSettings = e).plugin_base_urls;
                r !== undefined && se(r, function(e, t) {
                    Pu.PluginManager.urls[t] = e
                })
            },
            init: function(r) {
                var n, u = this,
                    s = At.makeMap("area base basefont br col frame hr img input isindex link meta param embed source wbr track colgroup option table tbody tfoot thead tr th td script noscript style textarea video audio iframe object menu", " "),
                    c = function(e) {
                        var t = e.id;
                        return t || (t = he(e, "name").filter(function(e) {
                            return !ZE.get(e)
                        }).getOrThunk(ZE.uniqueId), e.setAttribute("id", t)), t
                    },
                    l = function(e, t) {
                        return t.constructor === RegExp ? t.test(e.className) : ZE.hasClass(e, t)
                    },
                    f = function(e) {
                        n = e
                    },
                    e = function() {
                        var o, i = 0,
                            a = [],
                            n = function(e, t, n) {
                                var r = new GE(e, t, u);
                                a.push(r), r.on("init", function() {
                                    ++i === o.length && f(a)
                                }), r.targetElm = r.targetElm || n, r.render()
                            };
                        ZE.unbind(window, "ready", e),
                            function(e) {
                                var t = r[e];
                                if (t) t.apply(u, [])
                            }("onpageload"), o = hu.unique(function(t) {
                                var n = [];
                                if (St.browser.isIE() && St.browser.version.major < 11) return lb("TinyMCE does not support the browser you are using. For a list of supported browsers please see: https://www.tinymce.com/docs/get-started/system-requirements/"), [];
                                if (lk) return lb("Failed to initialize the editor as the document is not in standards mode. TinyMCE requires standards mode."), [];
                                if (t.types) return tk(t.types, function(e) {
                                    n = n.concat(ZE.select(e.selector))
                                }), n;
                                if (t.selector) return ZE.select(t.selector);
                                if (t.target) return [t.target];
                                switch (t.mode) {
                                    case "exact":
                                        var e = t.elements || "";
                                        0 < e.length && tk(ek(e), function(t) {
                                            var e = ZE.get(t);
                                            e ? n.push(e) : tk(document.forms, function(e) {
                                                tk(e.elements, function(e) {
                                                    e.name === t && (t = "mce_editor_" + rk++, ZE.setAttrib(e, "id", t), n.push(e))
                                                })
                                            })
                                        });
                                        break;
                                    case "textareas":
                                    case "specific_textareas":
                                        tk(ZE.select("textarea"), function(e) {
                                            t.editor_deselector && l(e, t.editor_deselector) || t.editor_selector && !l(e, t.editor_selector) || n.push(e)
                                        })
                                }
                                return n
                            }(r)), r.types ? tk(r.types, function(t) {
                                At.each(o, function(e) {
                                    return !ZE.is(e, t.selector) || (n(c(e), nk({}, r, t), e), !1)
                                })
                            }) : (At.each(o, function(e) {
                                var t;
                                (t = u.get(e.id)) && t.initialized && !(t.getContainer() || t.getBody()).parentNode && (ck(t), t.unbindAllNativeEvents(), t.destroy(!0), t.removed = !0, t = null)
                            }), 0 === (o = At.grep(o, function(e) {
                                return !u.get(e.id)
                            })).length ? f([]) : tk(o, function(e) {
                                var t;
                                t = e, r.inline && t.tagName.toLowerCase() in s ? lb("Could not initialize inline editor on invalid inline target element", e) : n(c(e), r, e)
                            }))
                    };
                return u.settings = r, ZE.bind(window, "ready", e), new Mr(function(t) {
                    n ? t(n) : f = function(e) {
                        t(e)
                    }
                })
            },
            get: function(t) {
                return 0 === arguments.length ? ak.slice(0) : K(t) ? W(ak, function(e) {
                    return e.id === t
                }).getOr(null) : N(t) && ak[t] ? ak[t] : null
            },
            add: function(e) {
                var n = this;
                return ik[e.id] === e || (null === n.get(e.id) && ("length" !== e.id && (ik[e.id] = e), ik.push(e), ak.push(e)), sk(!0), n.activeEditor = e, n.fire("AddEditor", {
                    editor: e
                }), QE || (QE = function(e) {
                    var t = n.fire("BeforeUnload");
                    if (t.returnValue) return e.preventDefault(), e.returnValue = t.returnValue, t.returnValue
                }, window.addEventListener("beforeunload", QE))), e
            },
            createEditor: function(e, t) {
                return this.add(new GE(e, t, this))
            },
            remove: function(e) {
                var t, n, r = this;
                if (e) {
                    if (!K(e)) return n = e, a(r.get(n.id)) ? null : (ck(n) && r.fire("RemoveEditor", {
                        editor: n
                    }), 0 === ak.length && window.removeEventListener("beforeunload", QE), n.remove(), sk(0 < ak.length), n);
                    tk(ZE.select(e), function(e) {
                        (n = r.get(e.id)) && r.remove(n)
                    })
                } else
                    for (t = ak.length - 1; 0 <= t; t--) r.remove(ak[t])
            },
            execCommand: function(e, t, n) {
                var r = this.get(n);
                switch (e) {
                    case "mceAddEditor":
                        return this.get(n) || new GE(n, this.settings, this).render(), !0;
                    case "mceRemoveEditor":
                        return r && r.remove(), !0;
                    case "mceToggleEditor":
                        return r ? (r.isHidden() ? r.show() : r.hide(), !0) : (this.execCommand("mceAddEditor", !1, n), !0)
                }
                return !!this.activeEditor && this.activeEditor.execCommand(e, t, n)
            },
            triggerSave: function() {
                tk(ak, function(e) {
                    e.save()
                })
            },
            addI18n: function(e, t) {
                Bu.add(e, t)
            },
            translate: function(e) {
                return Bu.translate(e)
            },
            setActive: function(e) {
                var t = this.activeEditor;
                this.activeEditor !== e && (t && t.fire("deactivate", {
                    relatedTarget: e
                }), e.fire("activate", {
                    relatedTarget: t
                })), this.activeEditor = e
            },
            _setBaseUrl: function(e) {
                this.baseURL = new VE(this.documentBaseURL).toAbsolute(e.replace(/\/+$/, "")), this.baseURI = new VE(this.baseURL)
            }
        });
    fk.setup();
    var dk, mk, gk, pk, hk = Math.min,
        vk = Math.max,
        yk = Math.round,
        bk = function(e, t, n) {
            var r = t.x,
                o = t.y,
                i = e.w,
                a = e.h,
                u = t.w,
                s = t.h,
                c = (n || "").split("");
            return "b" === c[0] && (o += s), "r" === c[1] && (r += u), "c" === c[0] && (o += yk(s / 2)), "c" === c[1] && (r += yk(u / 2)), "b" === c[3] && (o -= a), "r" === c[4] && (r -= i), "c" === c[3] && (o -= yk(a / 2)), "c" === c[4] && (r -= yk(i / 2)), Ck(r, o, i, a)
        },
        Ck = function(e, t, n, r) {
            return {
                x: e,
                y: t,
                w: n,
                h: r
            }
        },
        wk = {
            inflate: function(e, t, n) {
                return Ck(e.x - t, e.y - n, e.w + 2 * t, e.h + 2 * n)
            },
            relativePosition: bk,
            findBestRelativePosition: function(e, t, n, r) {
                for (var o, i = 0; i < r.length; i++)
                    if ((o = bk(e, t, r[i])).x >= n.x && o.x + o.w <= n.w + n.x && o.y >= n.y && o.y + o.h <= n.h + n.y) return r[i];
                return null
            },
            intersect: function(e, t) {
                var n = vk(e.x, t.x),
                    r = vk(e.y, t.y),
                    o = hk(e.x + e.w, t.x + t.w),
                    i = hk(e.y + e.h, t.y + t.h);
                return o - n < 0 || i - r < 0 ? null : Ck(n, r, o - n, i - r)
            },
            clamp: function(e, t, n) {
                var r = e.x,
                    o = e.y,
                    i = e.x + e.w,
                    a = e.y + e.h,
                    u = t.x + t.w,
                    s = t.y + t.h,
                    c = vk(0, t.x - r),
                    l = vk(0, t.y - o),
                    f = vk(0, i - u),
                    d = vk(0, a - s);
                return r += c, o += l, n && (i += c, a += l, r -= f, o -= d), Ck(r, o, (i -= f) - r, (a -= d) - o)
            },
            create: Ck,
            fromClientRect: function(e) {
                return Ck(e.left, e.top, e.width, e.height)
            }
        },
        xk = (dk = {}, mk = {}, {
            load: function(r, o) {
                var i = 'Script at URL "' + o + '" failed to load',
                    a = 'Script at URL "' + o + "\" did not call `tinymce.Resource.add('" + r + "', data)` within 1 second";
                if (dk[r] !== undefined) return dk[r];
                var e = new Mr(function(e, t) {
                    var n = function(e, t, n) {
                        void 0 === n && (n = 1e3);
                        var r = !1,
                            o = null,
                            i = function(n) {
                                return function() {
                                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                    r || (r = !0, null !== o && (clearTimeout(o), o = null), n.apply(null, e))
                                }
                            },
                            a = i(e),
                            u = i(t);
                        return {
                            start: function() {
                                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                r || null !== o || (o = setTimeout(function() {
                                    return u.apply(null, e)
                                }, n))
                            },
                            resolve: a,
                            reject: u
                        }
                    }(e, t);
                    mk[r] = n.resolve, _u.ScriptLoader.loadScript(o, function() {
                        return n.start(a)
                    }, function() {
                        return n.reject(i)
                    })
                });
                return dk[r] = e
            },
            add: function(e, t) {
                mk[e] !== undefined && (mk[e](t), delete mk[e]), dk[e] = Mr.resolve(t)
            }
        }),
        Sk = At.each,
        Nk = At.extend,
        Ek = function() {};
    Ek.extend = gk = function(n) {
        var o = this.prototype,
            r = function() {
                var e, t, n;
                if (!pk && (this.init && this.init.apply(this, arguments), t = this.Mixins))
                    for (e = t.length; e--;)(n = t[e]).init && n.init.apply(this, arguments)
            },
            t = function() {
                return this
            };
        pk = !0;
        var i = new this;
        return pk = !1, n.Mixins && (Sk(n.Mixins, function(e) {
            for (var t in e) "init" !== t && (n[t] = e[t])
        }), o.Mixins && (n.Mixins = o.Mixins.concat(n.Mixins))), n.Methods && Sk(n.Methods.split(","), function(e) {
            n[e] = t
        }), n.Properties && Sk(n.Properties.split(","), function(e) {
            var t = "_" + e;
            n[e] = function(e) {
                return e !== undefined ? (this[t] = e, this) : this[t]
            }
        }), n.Statics && Sk(n.Statics, function(e, t) {
            r[t] = e
        }), n.Defaults && o.Defaults && (n.Defaults = Nk({}, o.Defaults, n.Defaults)), se(n, function(e, t) {
            var n, r;
            "function" == typeof e && o[t] ? i[t] = (n = t, r = e, function() {
                var e = this._super;
                this._super = o[n];
                var t = r.apply(this, arguments);
                return this._super = e, t
            }) : i[t] = e
        }), r.prototype = i, (r.constructor = r).extend = gk, r
    };
    var kk = Math.min,
        _k = Math.max,
        Ak = Math.round,
        Rk = {
            serialize: function(e) {
                var t = JSON.stringify(e);
                return K(t) ? t.replace(/[\u0080-\uFFFF]/g, function(e) {
                    var t = e.charCodeAt(0).toString(16);
                    return "\\u" + "0000".substring(t.length) + t
                }) : t
            },
            parse: function(e) {
                try {
                    return JSON.parse(e)
                } catch (t) {}
            }
        },
        Tk = {
            callbacks: {},
            count: 0,
            send: function(t) {
                var n = this,
                    r = Su.DOM,
                    o = t.count !== undefined ? t.count : n.count,
                    i = "tinymce_jsonp_" + o;
                n.callbacks[o] = function(e) {
                    r.remove(i), delete n.callbacks[o], t.callback(e)
                }, r.add(r.doc.body, "script", {
                    id: i,
                    src: t.url,
                    type: "text/javascript"
                }), n.count++
            }
        },
        Dk = _e(_e({}, xE), {
            send: function(e) {
                var t, n = 0,
                    r = function() {
                        !e.async || 4 === t.readyState || 1e4 < n++ ? (e.success && n < 1e4 && 200 === t.status ? e.success.call(e.success_scope, "" + t.responseText, t, e) : e.error && e.error.call(e.error_scope, 1e4 < n ? "TIMED_OUT" : "GENERAL", t, e), t = null) : Kr.setTimeout(r, 10)
                    };
                if (e.scope = e.scope || this, e.success_scope = e.success_scope || e.scope, e.error_scope = e.error_scope || e.scope, e.async = !1 !== e.async, e.data = e.data || "", Dk.fire("beforeInitialize", {
                        settings: e
                    }), (t = new XMLHttpRequest).overrideMimeType && t.overrideMimeType(e.content_type), t.open(e.type || (e.data ? "POST" : "GET"), e.url, e.async), e.crossDomain && (t.withCredentials = !0), e.content_type && t.setRequestHeader("Content-Type", e.content_type), e.requestheaders && At.each(e.requestheaders, function(e) {
                        t.setRequestHeader(e.key, e.value)
                    }), t.setRequestHeader("X-Requested-With", "XMLHttpRequest"), (t = Dk.fire("beforeSend", {
                        xhr: t,
                        settings: e
                    }).xhr).send(e.data), !e.async) return r();
                Kr.setTimeout(r, 10)
            }
        }),
        Ok = At.extend,
        Bk = (Pk.sendRPC = function(e) {
            return (new Pk).send(e)
        }, Pk.prototype.send = function(e) {
            var n = e.error,
                r = e.success,
                o = Ok(this.settings, e);
            o.success = function(e, t) {
                void 0 === (e = Rk.parse(e)) && (e = {
                    error: "JSON Parse error."
                }), e.error ? n.call(o.error_scope || o.scope, e.error, t) : r.call(o.success_scope || o.scope, e.result)
            }, o.error = function(e, t) {
                n && n.call(o.error_scope || o.scope, e, t)
            }, o.data = Rk.serialize({
                id: e.id || "c" + this.count++,
                method: e.method,
                params: e.params
            }), o.content_type = "application/json", Dk.send(o)
        }, Pk);
    function Pk(e) {
        this.settings = Ok({}, e), this.count = 0
    }
    try {
        var Lk, Ik = "__storage_test__";
        (Lk = window.localStorage).setItem(Ik, Ik), Lk.removeItem(Ik)
    } catch (zk) {
        Lk = function() {
            return n = {}, r = [], e = {
                getItem: function(e) {
                    var t = n[e];
                    return t || null
                },
                setItem: function(e, t) {
                    r.push(e), n[e] = String(t)
                },
                key: function(e) {
                    return r[e]
                },
                removeItem: function(t) {
                    r = r.filter(function(e) {
                        return e === t
                    }), delete n[t]
                },
                clear: function() {
                    r = [], n = {}
                },
                length: 0
            }, Object.defineProperty(e, "length", {
                get: function() {
                    return r.length
                },
                configurable: !1,
                enumerable: !1
            }), e;
            var n, r, e
        }()
    }
    var Mk, Fk = {
            geom: {
                Rect: wk
            },
            util: {
                Promise: Mr,
                Delay: Kr,
                Tools: At,
                VK: nd,
                URI: VE,
                Class: Ek,
                EventDispatcher: yE,
                Observable: xE,
                I18n: Bu,
                XHR: Dk,
                JSON: Rk,
                JSONRequest: Bk,
                JSONP: Tk,
                LocalStorage: Lk,
                Color: function(e) {
                    var n = {},
                        u = 0,
                        s = 0,
                        c = 0,
                        t = function(e) {
                            var t;
                            return "object" == typeof e ? "r" in e ? (u = e.r, s = e.g, c = e.b) : "v" in e && function(e, t, n) {
                                if (e = (parseInt(e, 10) || 0) % 360, t = parseInt(t, 10) / 100, n = parseInt(n, 10) / 100, t = _k(0, kk(t, 1)), n = _k(0, kk(n, 1)), 0 !== t) {
                                    var r = e / 60,
                                        o = n * t,
                                        i = o * (1 - Math.abs(r % 2 - 1)),
                                        a = n - o;
                                    switch (Math.floor(r)) {
                                        case 0:
                                            u = o, s = i, c = 0;
                                            break;
                                        case 1:
                                            u = i, s = o, c = 0;
                                            break;
                                        case 2:
                                            u = 0, s = o, c = i;
                                            break;
                                        case 3:
                                            u = 0, s = i, c = o;
                                            break;
                                        case 4:
                                            u = i, s = 0, c = o;
                                            break;
                                        case 5:
                                            u = o, s = 0, c = i;
                                            break;
                                        default:
                                            u = s = c = 0
                                    }
                                    u = Ak(255 * (u + a)), s = Ak(255 * (s + a)), c = Ak(255 * (c + a))
                                } else u = s = c = Ak(255 * n)
                            }(e.h, e.s, e.v) : (t = /rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)[^\)]*\)/gi.exec(e)) ? (u = parseInt(t[1], 10), s = parseInt(t[2], 10), c = parseInt(t[3], 10)) : (t = /#([0-F]{2})([0-F]{2})([0-F]{2})/gi.exec(e)) ? (u = parseInt(t[1], 16), s = parseInt(t[2], 16), c = parseInt(t[3], 16)) : (t = /#([0-F])([0-F])([0-F])/gi.exec(e)) && (u = parseInt(t[1] + t[1], 16), s = parseInt(t[2] + t[2], 16), c = parseInt(t[3] + t[3], 16)), u = u < 0 ? 0 : 255 < u ? 255 : u, s = s < 0 ? 0 : 255 < s ? 255 : s, c = c < 0 ? 0 : 255 < c ? 255 : c, n
                        };
                    return e && t(e), n.toRgb = function() {
                        return {
                            r: u,
                            g: s,
                            b: c
                        }
                    }, n.toHsv = function() {
                        return e = u, t = s, n = c, o = 0, i = kk(e /= 255, kk(t /= 255, n /= 255)), a = _k(e, _k(t, n)), i === a ? {
                            h: 0,
                            s: 0,
                            v: 100 * (o = i)
                        } : (r = (a - i) / a, {
                            h: Ak(60 * ((e === i ? 3 : n === i ? 1 : 5) - (e === i ? t - n : n === i ? e - t : n - e) / ((o = a) - i))),
                            s: Ak(100 * r),
                            v: Ak(100 * o)
                        });
                        var e, t, n, r, o, i, a
                    }, n.toHex = function() {
                        var e = function(e) {
                            return 1 < (e = parseInt(e, 10).toString(16)).length ? e : "0" + e
                        };
                        return "#" + e(u) + e(s) + e(c)
                    }, n.parse = t, n
                },
                ImageUploader: function(n) {
                    var e = gb(),
                        r = bb(n, e);
                    return {
                        upload: function(e, t) {
                            return void 0 === t && (t = !0), r.upload(e, t ? yb(n) : undefined)
                        }
                    }
                }
            },
            dom: {
                EventUtils: Di,
                Sizzle: Da,
                DomQuery: hu,
                TreeWalker: Gr,
                TextSeeker: as,
                DOMUtils: Su,
                ScriptLoader: _u,
                RangeUtils: hd,
                Serializer: by,
                StyleSheetLoader: Xr,
                ControlSelection: od,
                BookmarkManager: Qf,
                Selection: Yv,
                Event: Di.Event
            },
            html: {
                Styles: Si,
                Entities: fi,
                Node: Tm,
                Schema: wi,
                SaxParser: Im,
                DomParser: gy,
                Writer: Vm,
                Serializer: qm
            },
            Env: St,
            AddOnManager: Pu,
            Annotator: Jf,
            Formatter: _b,
            UndoManager: Rb,
            EditorCommands: uE,
            WindowManager: ob,
            NotificationManager: Zy,
            EditorObservable: _E,
            Shortcuts: IE,
            Editor: GE,
            FocusManager: um,
            EditorManager: fk,
            DOM: Su.DOM,
            ScriptLoader: _u.ScriptLoader,
            PluginManager: eb,
            ThemeManager: tb,
            IconManager: qy,
            Resource: xk,
            trim: At.trim,
            isArray: At.isArray,
            is: At.is,
            toArray: At.toArray,
            makeMap: At.makeMap,
            each: At.each,
            map: At.map,
            grep: At.grep,
            inArray: At.inArray,
            extend: At.extend,
            create: At.create,
            walk: At.walk,
            createNS: At.createNS,
            resolve: At.resolve,
            explode: At.explode,
            _addCacheSuffix: At._addCacheSuffix,
            isOpera: St.opera,
            isWebKit: St.webkit,
            isIE: St.ie,
            isGecko: St.gecko,
            isMac: St.mac
        },
        Uk = At.extend(fk, Fk);
    Mk = Uk, window.tinymce = Mk, window.tinyMCE = Mk,
        function(e) {
            if ("object" == typeof module) try {
                module.exports = e
            } catch (t) {}
        }(Uk)
}();
/* Ephox Fluffy plugin
 *
 * Copyright 2010-2016 Ephox Corporation.  All rights reserved.
 *
 * Version: 2.5.0-13
 */
! function() {
    "use strict";
    function o(n) {
        return function() {
            return n
        }
    }
    function n() {
        return f
    }
    var u = "undefined" != typeof window ? window : Function("return this;")(),
        t = function(n, t) {
            return {
                isRequired: n,
                applyPatch: t
            }
        },
        i = function(i, o) {
            return function() {
                for (var n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];
                var r = o.apply(this, n),
                    e = void 0 === r ? n : r;
                return i.apply(this, e)
            }
        },
        r = function(n, t) {
            if (n)
                for (var r = 0; r < t.length; r++) t[r].isRequired(n) && t[r].applyPatch(n);
            return n
        },
        a = o(!1),
        c = o(!0),
        f = {
            fold: function(n, t) {
                return n()
            },
            is: a,
            isSome: a,
            isNone: c,
            getOr: s,
            getOrThunk: l,
            getOrDie: function(n) {
                throw new Error(n || "error: getOrDie called on none.")
            },
            getOrNull: o(null),
            getOrUndefined: o(void 0),
            or: s,
            orThunk: l,
            map: n,
            each: function() {},
            bind: n,
            exists: a,
            forall: c,
            filter: n,
            equals: e,
            equals_: e,
            toArray: function() {
                return []
            },
            toString: o("none()")
        };
    function e(n) {
        return n.isNone()
    }
    function l(n) {
        return n()
    }
    function s(n) {
        return n
    }
    function g(e) {
        return function(n) {
            return r = typeof(t = n), (null === t ? "null" : "object" == r && (Array.prototype.isPrototypeOf(t) || t.constructor && "Array" === t.constructor.name) ? "array" : "object" == r && (String.prototype.isPrototypeOf(t) || t.constructor && "String" === t.constructor.name) ? "string" : r) === e;
            var t, r
        }
    }
    function d(n, t) {
        return r = n, e = t, -1 < D.call(r, e);
        var r, e
    }
    function p(n, t) {
        return function(n) {
            for (var t = [], r = 0, e = n.length; r < e; ++r) {
                if (!A(n[r])) throw new Error("Arr.flatten item " + r + " was not an array, input: " + n);
                P.apply(t, n[r])
            }
            return t
        }(function(n, t) {
            for (var r = n.length, e = new Array(r), i = 0; i < r; i++) {
                var o = n[i];
                e[i] = t(o, i)
            }
            return e
        }(n, t))
    }
    function v(u) {
        return function() {
            for (var n = new Array(arguments.length), t = 0; t < n.length; t++) n[t] = arguments[t];
            if (0 === n.length) throw new Error("Can't merge zero objects");
            for (var r = {}, e = 0; e < n.length; e++) {
                var i = n[e];
                for (var o in i) U.call(i, o) && (r[o] = u(r[o], i[o]))
            }
            return r
        }
    }
    function h(n, t) {
        for (var r = T(n), e = 0, i = r.length; e < i; e++) {
            var o = r[e];
            t(n[o], o)
        }
    }
    function y(r) {
        return function(n, t) {
            r[t] = n
        }
    }
    function m(n, t) {
        var r, e, i, o = {},
            u = {};
        return r = t, e = y(o), i = y(u), h(n, function(n, t) {
            (r(n, t) ? e : i)(n, t)
        }), {
            t: o,
            f: u
        }
    }
    function E(n, t) {
        return C(n, t) ? j(n[t]) : S()
    }
    function w(n) {
        if (_(n) || "" === n) return [];
        var t = A(n) ? p(n, function(n) {
            return n.split(/[\s+,]/)
        }) : n.split(/[\s+,]/);
        return p(t, function(n) {
            return 0 < n.length ? [n.trim()] : []
        })
    }
    function O(n, t) {
        var r = N(n, t),
            e = w(t.plugins),
            i = E(r, "custom_plugin_urls").getOr({}),
            o = m(i, function(n, t) {
                return d(e, t)
            }),
            u = E(r, "external_plugins").getOr({}),
            a = {};
        h(o.t, function(n, t) {
            a[t] = n
        });
        var c = R(a, u);
        return R(t, 0 === T(c).length ? {} : {
            external_plugins: c
        })
    }
    var M, b = function(r) {
            function n() {
                return i
            }
            function t(n) {
                return n(r)
            }
            var e = o(r),
                i = {
                    fold: function(n, t) {
                        return t(r)
                    },
                    is: function(n) {
                        return r === n
                    },
                    isSome: c,
                    isNone: a,
                    getOr: e,
                    getOrThunk: e,
                    getOrDie: e,
                    getOrNull: e,
                    getOrUndefined: e,
                    or: n,
                    orThunk: n,
                    map: function(n) {
                        return b(n(r))
                    },
                    each: function(n) {
                        n(r)
                    },
                    bind: t,
                    exists: t,
                    forall: t,
                    filter: function(n) {
                        return n(r) ? i : f
                    },
                    toArray: function() {
                        return [r]
                    },
                    toString: function() {
                        return "some(" + r + ")"
                    },
                    equals: function(n) {
                        return n.is(r)
                    },
                    equals_: function(n, t) {
                        return n.fold(a, function(n) {
                            return t(r, n)
                        })
                    }
                };
            return i
        },
        S = n,
        j = function(n) {
            return null == n ? f : b(n)
        },
        x = g("object"),
        A = g("array"),
        _ = (M = void 0, function(n) {
            return M === n
        }),
        D = Array.prototype.indexOf,
        P = Array.prototype.push,
        U = Object.prototype.hasOwnProperty,
        N = v(function(n, t) {
            return x(n) && x(t) ? N(n, t) : t
        }),
        R = v(function(n, t) {
            return t
        }),
        T = Object.keys,
        q = Object.hasOwnProperty,
        C = function(n, t) {
            return q.call(n, t)
        },
        I = {
            getCustomPluginUrls: O,
            patch: t(function() {
                return !0
            }, function(r) {
                r.EditorManager.init = i(r.EditorManager.init, function(n) {
                    return [O(r.defaultSettings, n)]
                }), r.EditorManager.createEditor = i(r.EditorManager.createEditor, function(n, t) {
                    return [n, O(r.defaultSettings, t)]
                })
            })
        };
    function k() {
        for (var n = 0, t = 0, r = arguments.length; t < r; t++) n += arguments[t].length;
        var e = Array(n),
            i = 0;
        for (t = 0; t < r; t++)
            for (var o = arguments[t], u = 0, a = o.length; u < a; u++, i++) e[i] = o[u];
        return e
    }
    function L(n, t) {
        return function(n, t) {
            for (var r = null != t ? t : u, e = 0; e < n.length && null != r; ++e) r = r[n[e]];
            return r
        }(n.split("."), t)
    }
    function V(n) {
        return parseInt(n, 10)
    }
    function z(n, t) {
        var r = n - t;
        return 0 == r ? 0 : 0 < r ? 1 : -1
    }
    function B(n, t, r) {
        return {
            major: n,
            minor: t,
            patch: r
        }
    }
    function F(n) {
        var t = /([0-9]+)\.([0-9]+)\.([0-9]+)(?:(\-.+)?)/.exec(n);
        return t ? B(V(t[1]), V(t[2]), V(t[3])) : B(0, 0, 0)
    }
    function $(n, t) {
        return !!n && -1 === function(n, t) {
            var r = z(n.major, t.major);
            if (0 !== r) return r;
            var e = z(n.minor, t.minor);
            if (0 !== e) return e;
            var i = z(n.patch, t.patch);
            return 0 !== i ? i : 0
        }(F([(r = n).majorVersion, r.minorVersion].join(".").split(".").slice(0, 3).join(".")), F(t));
        var r
    }
    function G(o) {
        return function(n) {
            var t = L("tinymce.util.Tools", u),
                r = w(n.plugins),
                e = o.defaultSettings.forced_plugins || [],
                i = 0 < e.length ? r.concat(e) : r;
            return [t.extend({}, n, {
                plugins: i
            })]
        }
    }
    function H() {
        return (new Date).getTime()
    }
    function J(e) {
        return function() {
            var n, t, r = (t = "position", (((n = e).currentStyle ? n.currentStyle[t] : window.getComputedStyle(n, null)[t]) || "").toLowerCase());
            return "absolute" === r || "fixed" === r
        }
    }
    function K(n) {
        n.parentNode.removeChild(n)
    }
    function Q(n, t) {
        n.notificationManager ? n.notificationManager.open({
            text: t,
            type: "warning",
            timeout: 0,
            icon: ""
        }) : n.windowManager.alert(t)
    }
    function W(n) {
        var t, r, e = L("tinymce.util.URI", u);
        (t = n.base_url) && (this.baseURL = new e(this.documentBaseURL).toAbsolute(t.replace(/\/+$/, "")), this.baseURI = new e(this.baseURL)), r = n.suffix, n.suffix && (this.suffix = r), this.defaultSettings = n
    }
    function X(n) {
        return [L("tinymce.util.Tools", u).extend({}, this.defaultSettings, n)]
    }
    function Y(n) {
        r(n, [en.patch, on.patch, Z.patch, I.patch])
    }
    var Z = {
            patch: t(function(n) {
                return $(n, "4.7.0")
            }, function(r) {
                r.EditorManager.init = i(r.EditorManager.init, G(r.EditorManager)), r.EditorManager.createEditor = i(r.EditorManager.createEditor, function(n, t) {
                    return k([n], G(r.EditorManager)(t))
                })
            })
        },
        nn = function(n, t, r, e, i) {
            var o, u = H();
            o = setInterval(function() {
                n() && (clearInterval(o), t()), H() - u > i && (clearInterval(o), r())
            }, e)
        },
        tn = function(n, t) {
            var r, e = ((r = document.createElement("div")).style.display = "none", r.className = "mce-floatpanel", r);
            document.body.appendChild(e), nn(J(e), function() {
                K(e), n()
            }, function() {
                K(e), t()
            }, 10, 5e3)
        },
        rn = function(n) {
            n.EditorManager.on("AddEditor", function(n) {
                var t = n.editor,
                    r = t.settings.service_message;
                r && tn(function() {
                    Q(t, r)
                }, function() {
                    alert(r)
                })
            })
        },
        en = {
            patch: t(function(n) {
                return "function" != typeof n.overrideDefaults
            }, function(r) {
                rn(r), r.overrideDefaults = W, r.EditorManager.init = i(r.EditorManager.init, X), r.EditorManager.createEditor = i(r.EditorManager.createEditor, function(n, t) {
                    return k([n], X.call(r, t))
                })
            })
        },
        on = {
            patch: t(function(n) {
                return $(n, "4.5.0")
            }, function(n) {
                var e;
                n.overrideDefaults = i(n.overrideDefaults, (e = n, function(n) {
                    var t = n.plugin_base_urls;
                    for (var r in t) e.PluginManager.urls[r] = t[r]
                }))
            })
        };
    Y(u.tinymce)
}();
// (function(cloudSettings) {
//     tinymce.overrideDefaults(cloudSettings);
// })({
//     "rtc_tenant_id": "no-api-key",
//     "imagetools_proxy": "https://imageproxy.tiny.cloud/2/image",
//     "suffix": ".min",
//     "linkchecker_service_url": "https://hyperlinking.tiny.cloud",
//     "spellchecker_rpc_url": "https://spelling.tiny.cloud",
//     "spellchecker_api_key": "no-api-key",
//     "tinydrive_service_url": "https://catalog.tiny.cloud",
//     "api_key": "no-api-key",
//     "imagetools_api_key": "no-api-key",
//     "tinydrive_api_key": "no-api-key",
//     "forced_plugins": ["chiffer"],
//     "referrer_policy": "origin",
//     "content_css_cors": true,
//     "custom_plugin_urls": {},
//     "chiffer_snowplow_service_url": "https://sp.tinymce.com/i",
//     "mediaembed_api_key": "no-api-key",
//     "rtc_service_url": "https://rtc.tiny.cloud",
//     "linkchecker_api_key": "no-api-key",
//     "mediaembed_service_url": "https://hyperlinking.tiny.cloud",
//     "service_message": "This domain is not registered with Tiny Cloud.  Please see the \u003ca target=\"_blank\" href=\"https://www.tiny.cloud/docs/quick-start/\"\u003equick start guide\u003c/a\u003e or \u003ca target=\"_blank\" href=\"https://www.tiny.cloud/auth/signup/\"\u003ecreate an account\u003c/a\u003e."
// });
tinymce.baseURL = "https://cdn.tiny.cloud/1/no-api-key/tinymce/5.8.1-113"
    /* Ephox chiffer plugin
     *
     * Copyright 2010-2019 Tiny Technologies Inc. All rights reserved.
     *
     * Version: 1.8.0-14
     */
    ! function() {
        "use strict";
        function o() {}
        function i() {
            return (new Date).getTime()
        }
        function t(t, n) {
            var r, c, e, n = (r = t, c = n, {
                send: function(t, n, e) {
                    var t = "?aid=" + c + "&tna=tinymce_cloud&p=web&dtm=" + n + "&stm=" + i() + "&tz=" + ("undefined" != typeof Intl ? encodeURIComponent(Intl.DateTimeFormat().resolvedOptions().timeZone) : "N%2FA") + "&e=se&se_ca=" + t,
                        o = document.createElement("img");
                    o.src = r.chiffer_snowplow_service_url + t;
                    t = function(t) {
                        return function() {
                            o.onload = null, o.onerror = null, e(t)
                        }
                    };
                    o.onload = t(!0), o.onerror = t(!1)
                }
            });
            return e = n, {
                sendStat: function(t) {
                    e.send(t, i(), o)
                }
            }
        }
        var e, n, r, c, u, a = (e = "string", function(t) {
            return t = typeof(n = t), (null === n ? "null" : "object" == t && (Array.prototype.isPrototypeOf(n) || n.constructor && "Array" === n.constructor.name) ? "array" : "object" == t && (String.prototype.isPrototypeOf(n) || n.constructor && "String" === n.constructor.name) ? "string" : t) === e;
            var n
        });
        r = tinymce.defaultSettings, c = {
            load: o
        }, u = function(t) {
            t = t.api_key;
            return a(t) ? t : void 0
        }(r), c = void 0 === u ? c : ((n = t(r, u)).sendStat("script_load"), {
            load: function(t) {
                t.once("init", function() {
                    return n.sendStat("init")
                }), t.once("focus", function() {
                    return n.sendStat("focus")
                }), t.on("ExportPdf", function() {
                    return n.sendStat("export_pdf")
                }), t.on("PastePreProcess", function(t) {
                    null == t.source || n.sendStat("powerpaste_" + t.source)
                }), t.on("VisualChars", function(t) {
                    !0 === t.state && n.sendStat("visualchars_true")
                })
            }
        }), tinymce.PluginManager.add("chiffer", c.load)
    }();