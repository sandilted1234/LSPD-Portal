(function() {
    const n = document.createElement("link").relList;
    if (n && n.supports && n.supports("modulepreload"))
        return;
    for (const c of document.querySelectorAll('link[rel="modulepreload"]'))
        l(c);
    new MutationObserver(c => {
        for (const d of c)
            if (d.type === "childList")
                for (const f of d.addedNodes)
                    f.tagName === "LINK" && f.rel === "modulepreload" && l(f)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function i(c) {
        const d = {};
        return c.integrity && (d.integrity = c.integrity),
        c.referrerPolicy && (d.referrerPolicy = c.referrerPolicy),
        c.crossOrigin === "use-credentials" ? d.credentials = "include" : c.crossOrigin === "anonymous" ? d.credentials = "omit" : d.credentials = "same-origin",
        d
    }
    function l(c) {
        if (c.ep)
            return;
        c.ep = !0;
        const d = i(c);
        fetch(c.href, d)
    }
}
)();
var mu = {
    exports: {}
}
  , sr = {};
var Ff;
function ky() {
    if (Ff)
        return sr;
    Ff = 1;
    var r = Symbol.for("react.transitional.element")
      , n = Symbol.for("react.fragment");
    function i(l, c, d) {
        var f = null;
        if (d !== void 0 && (f = "" + d),
        c.key !== void 0 && (f = "" + c.key),
        "key"in c) {
            d = {};
            for (var y in c)
                y !== "key" && (d[y] = c[y])
        } else
            d = c;
        return c = d.ref,
        {
            $$typeof: r,
            type: l,
            key: f,
            ref: c !== void 0 ? c : null,
            props: d
        }
    }
    return sr.Fragment = n,
    sr.jsx = i,
    sr.jsxs = i,
    sr
}
var em;
function Dy() {
    return em || (em = 1,
    mu.exports = ky()),
    mu.exports
}
var h = Dy()
  , gu = {
    exports: {}
}
  , re = {};
var tm;
function Uy() {
    if (tm)
        return re;
    tm = 1;
    var r = Symbol.for("react.transitional.element")
      , n = Symbol.for("react.portal")
      , i = Symbol.for("react.fragment")
      , l = Symbol.for("react.strict_mode")
      , c = Symbol.for("react.profiler")
      , d = Symbol.for("react.consumer")
      , f = Symbol.for("react.context")
      , y = Symbol.for("react.forward_ref")
      , g = Symbol.for("react.suspense")
      , p = Symbol.for("react.memo")
      , v = Symbol.for("react.lazy")
      , j = Symbol.for("react.activity")
      , E = Symbol.iterator;
    function _(S) {
        return S === null || typeof S != "object" ? null : (S = E && S[E] || S["@@iterator"],
        typeof S == "function" ? S : null)
    }
    var T = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }
      , C = Object.assign
      , L = {};
    function U(S, $, Q) {
        this.props = S,
        this.context = $,
        this.refs = L,
        this.updater = Q || T
    }
    U.prototype.isReactComponent = {},
    U.prototype.setState = function(S, $) {
        if (typeof S != "object" && typeof S != "function" && S != null)
            throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, S, $, "setState")
    }
    ,
    U.prototype.forceUpdate = function(S) {
        this.updater.enqueueForceUpdate(this, S, "forceUpdate")
    }
    ;
    function Y() {}
    Y.prototype = U.prototype;
    function G(S, $, Q) {
        this.props = S,
        this.context = $,
        this.refs = L,
        this.updater = Q || T
    }
    var z = G.prototype = new Y;
    z.constructor = G,
    C(z, U.prototype),
    z.isPureReactComponent = !0;
    var V = Array.isArray;
    function I() {}
    var X = {
        H: null,
        A: null,
        T: null,
        S: null
    }
      , oe = Object.prototype.hasOwnProperty;
    function ge(S, $, Q) {
        var P = Q.ref;
        return {
            $$typeof: r,
            type: S,
            key: $,
            ref: P !== void 0 ? P : null,
            props: Q
        }
    }
    function ce(S, $) {
        return ge(S.type, $, S.props)
    }
    function Te(S) {
        return typeof S == "object" && S !== null && S.$$typeof === r
    }
    function q(S) {
        var $ = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + S.replace(/[=:]/g, function(Q) {
            return $[Q]
        })
    }
    var _e = /\/+/g;
    function Ue(S, $) {
        return typeof S == "object" && S !== null && S.key != null ? q("" + S.key) : $.toString(36)
    }
    function de(S) {
        switch (S.status) {
        case "fulfilled":
            return S.value;
        case "rejected":
            throw S.reason;
        default:
            switch (typeof S.status == "string" ? S.then(I, I) : (S.status = "pending",
            S.then(function($) {
                S.status === "pending" && (S.status = "fulfilled",
                S.value = $)
            }, function($) {
                S.status === "pending" && (S.status = "rejected",
                S.reason = $)
            })),
            S.status) {
            case "fulfilled":
                return S.value;
            case "rejected":
                throw S.reason
            }
        }
        throw S
    }
    function D(S, $, Q, P, ie) {
        var he = typeof S;
        (he === "undefined" || he === "boolean") && (S = null);
        var Ee = !1;
        if (S === null)
            Ee = !0;
        else
            switch (he) {
            case "bigint":
            case "string":
            case "number":
                Ee = !0;
                break;
            case "object":
                switch (S.$$typeof) {
                case r:
                case n:
                    Ee = !0;
                    break;
                case v:
                    return Ee = S._init,
                    D(Ee(S._payload), $, Q, P, ie)
                }
            }
        if (Ee)
            return ie = ie(S),
            Ee = P === "" ? "." + Ue(S, 0) : P,
            V(ie) ? (Q = "",
            Ee != null && (Q = Ee.replace(_e, "$&/") + "/"),
            D(ie, $, Q, "", function(ds) {
                return ds
            })) : ie != null && (Te(ie) && (ie = ce(ie, Q + (ie.key == null || S && S.key === ie.key ? "" : ("" + ie.key).replace(_e, "$&/") + "/") + Ee)),
            $.push(ie)),
            1;
        Ee = 0;
        var ut = P === "" ? "." : P + ":";
        if (V(S))
            for (var Ge = 0; Ge < S.length; Ge++)
                P = S[Ge],
                he = ut + Ue(P, Ge),
                Ee += D(P, $, Q, he, ie);
        else if (Ge = _(S),
        typeof Ge == "function")
            for (S = Ge.call(S),
            Ge = 0; !(P = S.next()).done; )
                P = P.value,
                he = ut + Ue(P, Ge++),
                Ee += D(P, $, Q, he, ie);
        else if (he === "object") {
            if (typeof S.then == "function")
                return D(de(S), $, Q, P, ie);
            throw $ = String(S),
            Error("Objects are not valid as a React child (found: " + ($ === "[object Object]" ? "object with keys {" + Object.keys(S).join(", ") + "}" : $) + "). If you meant to render a collection of children, use an array instead.")
        }
        return Ee
    }
    function J(S, $, Q) {
        if (S == null)
            return S;
        var P = []
          , ie = 0;
        return D(S, P, "", "", function(he) {
            return $.call(Q, he, ie++)
        }),
        P
    }
    function te(S) {
        if (S._status === -1) {
            var $ = S._result;
            $ = $(),
            $.then(function(Q) {
                (S._status === 0 || S._status === -1) && (S._status = 1,
                S._result = Q)
            }, function(Q) {
                (S._status === 0 || S._status === -1) && (S._status = 2,
                S._result = Q)
            }),
            S._status === -1 && (S._status = 0,
            S._result = $)
        }
        if (S._status === 1)
            return S._result.default;
        throw S._result
    }
    var Se = typeof reportError == "function" ? reportError : function(S) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var $ = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof S == "object" && S !== null && typeof S.message == "string" ? String(S.message) : String(S),
                error: S
            });
            if (!window.dispatchEvent($))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", S);
            return
        }
        console.error(S)
    }
      , je = {
        map: J,
        forEach: function(S, $, Q) {
            J(S, function() {
                $.apply(this, arguments)
            }, Q)
        },
        count: function(S) {
            var $ = 0;
            return J(S, function() {
                $++
            }),
            $
        },
        toArray: function(S) {
            return J(S, function($) {
                return $
            }) || []
        },
        only: function(S) {
            if (!Te(S))
                throw Error("React.Children.only expected to receive a single React element child.");
            return S
        }
    };
    return re.Activity = j,
    re.Children = je,
    re.Component = U,
    re.Fragment = i,
    re.Profiler = c,
    re.PureComponent = G,
    re.StrictMode = l,
    re.Suspense = g,
    re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = X,
    re.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function(S) {
            return X.H.useMemoCache(S)
        }
    },
    re.cache = function(S) {
        return function() {
            return S.apply(null, arguments)
        }
    }
    ,
    re.cacheSignal = function() {
        return null
    }
    ,
    re.cloneElement = function(S, $, Q) {
        if (S == null)
            throw Error("The argument must be a React element, but you passed " + S + ".");
        var P = C({}, S.props)
          , ie = S.key;
        if ($ != null)
            for (he in $.key !== void 0 && (ie = "" + $.key),
            $)
                !oe.call($, he) || he === "key" || he === "__self" || he === "__source" || he === "ref" && $.ref === void 0 || (P[he] = $[he]);
        var he = arguments.length - 2;
        if (he === 1)
            P.children = Q;
        else if (1 < he) {
            for (var Ee = Array(he), ut = 0; ut < he; ut++)
                Ee[ut] = arguments[ut + 2];
            P.children = Ee
        }
        return ge(S.type, ie, P)
    }
    ,
    re.createContext = function(S) {
        return S = {
            $$typeof: f,
            _currentValue: S,
            _currentValue2: S,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        },
        S.Provider = S,
        S.Consumer = {
            $$typeof: d,
            _context: S
        },
        S
    }
    ,
    re.createElement = function(S, $, Q) {
        var P, ie = {}, he = null;
        if ($ != null)
            for (P in $.key !== void 0 && (he = "" + $.key),
            $)
                oe.call($, P) && P !== "key" && P !== "__self" && P !== "__source" && (ie[P] = $[P]);
        var Ee = arguments.length - 2;
        if (Ee === 1)
            ie.children = Q;
        else if (1 < Ee) {
            for (var ut = Array(Ee), Ge = 0; Ge < Ee; Ge++)
                ut[Ge] = arguments[Ge + 2];
            ie.children = ut
        }
        if (S && S.defaultProps)
            for (P in Ee = S.defaultProps,
            Ee)
                ie[P] === void 0 && (ie[P] = Ee[P]);
        return ge(S, he, ie)
    }
    ,
    re.createRef = function() {
        return {
            current: null
        }
    }
    ,
    re.forwardRef = function(S) {
        return {
            $$typeof: y,
            render: S
        }
    }
    ,
    re.isValidElement = Te,
    re.lazy = function(S) {
        return {
            $$typeof: v,
            _payload: {
                _status: -1,
                _result: S
            },
            _init: te
        }
    }
    ,
    re.memo = function(S, $) {
        return {
            $$typeof: p,
            type: S,
            compare: $ === void 0 ? null : $
        }
    }
    ,
    re.startTransition = function(S) {
        var $ = X.T
          , Q = {};
        X.T = Q;
        try {
            var P = S()
              , ie = X.S;
            ie !== null && ie(Q, P),
            typeof P == "object" && P !== null && typeof P.then == "function" && P.then(I, Se)
        } catch (he) {
            Se(he)
        } finally {
            $ !== null && Q.types !== null && ($.types = Q.types),
            X.T = $
        }
    }
    ,
    re.unstable_useCacheRefresh = function() {
        return X.H.useCacheRefresh()
    }
    ,
    re.use = function(S) {
        return X.H.use(S)
    }
    ,
    re.useActionState = function(S, $, Q) {
        return X.H.useActionState(S, $, Q)
    }
    ,
    re.useCallback = function(S, $) {
        return X.H.useCallback(S, $)
    }
    ,
    re.useContext = function(S) {
        return X.H.useContext(S)
    }
    ,
    re.useDebugValue = function() {}
    ,
    re.useDeferredValue = function(S, $) {
        return X.H.useDeferredValue(S, $)
    }
    ,
    re.useEffect = function(S, $) {
        return X.H.useEffect(S, $)
    }
    ,
    re.useEffectEvent = function(S) {
        return X.H.useEffectEvent(S)
    }
    ,
    re.useId = function() {
        return X.H.useId()
    }
    ,
    re.useImperativeHandle = function(S, $, Q) {
        return X.H.useImperativeHandle(S, $, Q)
    }
    ,
    re.useInsertionEffect = function(S, $) {
        return X.H.useInsertionEffect(S, $)
    }
    ,
    re.useLayoutEffect = function(S, $) {
        return X.H.useLayoutEffect(S, $)
    }
    ,
    re.useMemo = function(S, $) {
        return X.H.useMemo(S, $)
    }
    ,
    re.useOptimistic = function(S, $) {
        return X.H.useOptimistic(S, $)
    }
    ,
    re.useReducer = function(S, $, Q) {
        return X.H.useReducer(S, $, Q)
    }
    ,
    re.useRef = function(S) {
        return X.H.useRef(S)
    }
    ,
    re.useState = function(S) {
        return X.H.useState(S)
    }
    ,
    re.useSyncExternalStore = function(S, $, Q) {
        return X.H.useSyncExternalStore(S, $, Q)
    }
    ,
    re.useTransition = function() {
        return X.H.useTransition()
    }
    ,
    re.version = "19.2.3",
    re
}
var am;
function Vu() {
    return am || (am = 1,
    gu.exports = Uy()),
    gu.exports
}
var K = Vu()
  , yu = {
    exports: {}
}
  , rr = {}
  , pu = {
    exports: {}
}
  , bu = {};
var nm;
function zy() {
    return nm || (nm = 1,
    (function(r) {
        function n(D, J) {
            var te = D.length;
            D.push(J);
            e: for (; 0 < te; ) {
                var Se = te - 1 >>> 1
                  , je = D[Se];
                if (0 < c(je, J))
                    D[Se] = J,
                    D[te] = je,
                    te = Se;
                else
                    break e
            }
        }
        function i(D) {
            return D.length === 0 ? null : D[0]
        }
        function l(D) {
            if (D.length === 0)
                return null;
            var J = D[0]
              , te = D.pop();
            if (te !== J) {
                D[0] = te;
                e: for (var Se = 0, je = D.length, S = je >>> 1; Se < S; ) {
                    var $ = 2 * (Se + 1) - 1
                      , Q = D[$]
                      , P = $ + 1
                      , ie = D[P];
                    if (0 > c(Q, te))
                        P < je && 0 > c(ie, Q) ? (D[Se] = ie,
                        D[P] = te,
                        Se = P) : (D[Se] = Q,
                        D[$] = te,
                        Se = $);
                    else if (P < je && 0 > c(ie, te))
                        D[Se] = ie,
                        D[P] = te,
                        Se = P;
                    else
                        break e
                }
            }
            return J
        }
        function c(D, J) {
            var te = D.sortIndex - J.sortIndex;
            return te !== 0 ? te : D.id - J.id
        }
        if (r.unstable_now = void 0,
        typeof performance == "object" && typeof performance.now == "function") {
            var d = performance;
            r.unstable_now = function() {
                return d.now()
            }
        } else {
            var f = Date
              , y = f.now();
            r.unstable_now = function() {
                return f.now() - y
            }
        }
        var g = []
          , p = []
          , v = 1
          , j = null
          , E = 3
          , _ = !1
          , T = !1
          , C = !1
          , L = !1
          , U = typeof setTimeout == "function" ? setTimeout : null
          , Y = typeof clearTimeout == "function" ? clearTimeout : null
          , G = typeof setImmediate < "u" ? setImmediate : null;
        function z(D) {
            for (var J = i(p); J !== null; ) {
                if (J.callback === null)
                    l(p);
                else if (J.startTime <= D)
                    l(p),
                    J.sortIndex = J.expirationTime,
                    n(g, J);
                else
                    break;
                J = i(p)
            }
        }
        function V(D) {
            if (C = !1,
            z(D),
            !T)
                if (i(g) !== null)
                    T = !0,
                    I || (I = !0,
                    q());
                else {
                    var J = i(p);
                    J !== null && de(V, J.startTime - D)
                }
        }
        var I = !1
          , X = -1
          , oe = 5
          , ge = -1;
        function ce() {
            return L ? !0 : !(r.unstable_now() - ge < oe)
        }
        function Te() {
            if (L = !1,
            I) {
                var D = r.unstable_now();
                ge = D;
                var J = !0;
                try {
                    e: {
                        T = !1,
                        C && (C = !1,
                        Y(X),
                        X = -1),
                        _ = !0;
                        var te = E;
                        try {
                            t: {
                                for (z(D),
                                j = i(g); j !== null && !(j.expirationTime > D && ce()); ) {
                                    var Se = j.callback;
                                    if (typeof Se == "function") {
                                        j.callback = null,
                                        E = j.priorityLevel;
                                        var je = Se(j.expirationTime <= D);
                                        if (D = r.unstable_now(),
                                        typeof je == "function") {
                                            j.callback = je,
                                            z(D),
                                            J = !0;
                                            break t
                                        }
                                        j === i(g) && l(g),
                                        z(D)
                                    } else
                                        l(g);
                                    j = i(g)
                                }
                                if (j !== null)
                                    J = !0;
                                else {
                                    var S = i(p);
                                    S !== null && de(V, S.startTime - D),
                                    J = !1
                                }
                            }
                            break e
                        } finally {
                            j = null,
                            E = te,
                            _ = !1
                        }
                        J = void 0
                    }
                } finally {
                    J ? q() : I = !1
                }
            }
        }
        var q;
        if (typeof G == "function")
            q = function() {
                G(Te)
            }
            ;
        else if (typeof MessageChannel < "u") {
            var _e = new MessageChannel
              , Ue = _e.port2;
            _e.port1.onmessage = Te,
            q = function() {
                Ue.postMessage(null)
            }
        } else
            q = function() {
                U(Te, 0)
            }
            ;
        function de(D, J) {
            X = U(function() {
                D(r.unstable_now())
            }, J)
        }
        r.unstable_IdlePriority = 5,
        r.unstable_ImmediatePriority = 1,
        r.unstable_LowPriority = 4,
        r.unstable_NormalPriority = 3,
        r.unstable_Profiling = null,
        r.unstable_UserBlockingPriority = 2,
        r.unstable_cancelCallback = function(D) {
            D.callback = null
        }
        ,
        r.unstable_forceFrameRate = function(D) {
            0 > D || 125 < D ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : oe = 0 < D ? Math.floor(1e3 / D) : 5
        }
        ,
        r.unstable_getCurrentPriorityLevel = function() {
            return E
        }
        ,
        r.unstable_next = function(D) {
            switch (E) {
            case 1:
            case 2:
            case 3:
                var J = 3;
                break;
            default:
                J = E
            }
            var te = E;
            E = J;
            try {
                return D()
            } finally {
                E = te
            }
        }
        ,
        r.unstable_requestPaint = function() {
            L = !0
        }
        ,
        r.unstable_runWithPriority = function(D, J) {
            switch (D) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                D = 3
            }
            var te = E;
            E = D;
            try {
                return J()
            } finally {
                E = te
            }
        }
        ,
        r.unstable_scheduleCallback = function(D, J, te) {
            var Se = r.unstable_now();
            switch (typeof te == "object" && te !== null ? (te = te.delay,
            te = typeof te == "number" && 0 < te ? Se + te : Se) : te = Se,
            D) {
            case 1:
                var je = -1;
                break;
            case 2:
                je = 250;
                break;
            case 5:
                je = 1073741823;
                break;
            case 4:
                je = 1e4;
                break;
            default:
                je = 5e3
            }
            return je = te + je,
            D = {
                id: v++,
                callback: J,
                priorityLevel: D,
                startTime: te,
                expirationTime: je,
                sortIndex: -1
            },
            te > Se ? (D.sortIndex = te,
            n(p, D),
            i(g) === null && D === i(p) && (C ? (Y(X),
            X = -1) : C = !0,
            de(V, te - Se))) : (D.sortIndex = je,
            n(g, D),
            T || _ || (T = !0,
            I || (I = !0,
            q()))),
            D
        }
        ,
        r.unstable_shouldYield = ce,
        r.unstable_wrapCallback = function(D) {
            var J = E;
            return function() {
                var te = E;
                E = J;
                try {
                    return D.apply(this, arguments)
                } finally {
                    E = te
                }
            }
        }
    }
    )(bu)),
    bu
}
var sm;
function My() {
    return sm || (sm = 1,
    pu.exports = zy()),
    pu.exports
}
var vu = {
    exports: {}
}
  , ot = {};
var rm;
function qy() {
    if (rm)
        return ot;
    rm = 1;
    var r = Vu();
    function n(g) {
        var p = "https://react.dev/errors/" + g;
        if (1 < arguments.length) {
            p += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var v = 2; v < arguments.length; v++)
                p += "&args[]=" + encodeURIComponent(arguments[v])
        }
        return "Minified React error #" + g + "; visit " + p + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function i() {}
    var l = {
        d: {
            f: i,
            r: function() {
                throw Error(n(522))
            },
            D: i,
            C: i,
            L: i,
            m: i,
            X: i,
            S: i,
            M: i
        },
        p: 0,
        findDOMNode: null
    }
      , c = Symbol.for("react.portal");
    function d(g, p, v) {
        var j = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: c,
            key: j == null ? null : "" + j,
            children: g,
            containerInfo: p,
            implementation: v
        }
    }
    var f = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function y(g, p) {
        if (g === "font")
            return "";
        if (typeof p == "string")
            return p === "use-credentials" ? p : ""
    }
    return ot.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = l,
    ot.createPortal = function(g, p) {
        var v = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!p || p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11)
            throw Error(n(299));
        return d(g, p, null, v)
    }
    ,
    ot.flushSync = function(g) {
        var p = f.T
          , v = l.p;
        try {
            if (f.T = null,
            l.p = 2,
            g)
                return g()
        } finally {
            f.T = p,
            l.p = v,
            l.d.f()
        }
    }
    ,
    ot.preconnect = function(g, p) {
        typeof g == "string" && (p ? (p = p.crossOrigin,
        p = typeof p == "string" ? p === "use-credentials" ? p : "" : void 0) : p = null,
        l.d.C(g, p))
    }
    ,
    ot.prefetchDNS = function(g) {
        typeof g == "string" && l.d.D(g)
    }
    ,
    ot.preinit = function(g, p) {
        if (typeof g == "string" && p && typeof p.as == "string") {
            var v = p.as
              , j = y(v, p.crossOrigin)
              , E = typeof p.integrity == "string" ? p.integrity : void 0
              , _ = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
            v === "style" ? l.d.S(g, typeof p.precedence == "string" ? p.precedence : void 0, {
                crossOrigin: j,
                integrity: E,
                fetchPriority: _
            }) : v === "script" && l.d.X(g, {
                crossOrigin: j,
                integrity: E,
                fetchPriority: _,
                nonce: typeof p.nonce == "string" ? p.nonce : void 0
            })
        }
    }
    ,
    ot.preinitModule = function(g, p) {
        if (typeof g == "string")
            if (typeof p == "object" && p !== null) {
                if (p.as == null || p.as === "script") {
                    var v = y(p.as, p.crossOrigin);
                    l.d.M(g, {
                        crossOrigin: v,
                        integrity: typeof p.integrity == "string" ? p.integrity : void 0,
                        nonce: typeof p.nonce == "string" ? p.nonce : void 0
                    })
                }
            } else
                p == null && l.d.M(g)
    }
    ,
    ot.preload = function(g, p) {
        if (typeof g == "string" && typeof p == "object" && p !== null && typeof p.as == "string") {
            var v = p.as
              , j = y(v, p.crossOrigin);
            l.d.L(g, v, {
                crossOrigin: j,
                integrity: typeof p.integrity == "string" ? p.integrity : void 0,
                nonce: typeof p.nonce == "string" ? p.nonce : void 0,
                type: typeof p.type == "string" ? p.type : void 0,
                fetchPriority: typeof p.fetchPriority == "string" ? p.fetchPriority : void 0,
                referrerPolicy: typeof p.referrerPolicy == "string" ? p.referrerPolicy : void 0,
                imageSrcSet: typeof p.imageSrcSet == "string" ? p.imageSrcSet : void 0,
                imageSizes: typeof p.imageSizes == "string" ? p.imageSizes : void 0,
                media: typeof p.media == "string" ? p.media : void 0
            })
        }
    }
    ,
    ot.preloadModule = function(g, p) {
        if (typeof g == "string")
            if (p) {
                var v = y(p.as, p.crossOrigin);
                l.d.m(g, {
                    as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
                    crossOrigin: v,
                    integrity: typeof p.integrity == "string" ? p.integrity : void 0
                })
            } else
                l.d.m(g)
    }
    ,
    ot.requestFormReset = function(g) {
        l.d.r(g)
    }
    ,
    ot.unstable_batchedUpdates = function(g, p) {
        return g(p)
    }
    ,
    ot.useFormState = function(g, p, v) {
        return f.H.useFormState(g, p, v)
    }
    ,
    ot.useFormStatus = function() {
        return f.H.useHostTransitionStatus()
    }
    ,
    ot.version = "19.2.3",
    ot
}
var im;
function By() {
    if (im)
        return vu.exports;
    im = 1;
    function r() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)
            } catch (n) {
                console.error(n)
            }
    }
    return r(),
    vu.exports = qy(),
    vu.exports
}
var lm;
function Ly() {
    if (lm)
        return rr;
    lm = 1;
    var r = My()
      , n = Vu()
      , i = By();
    function l(e) {
        var t = "https://react.dev/errors/" + e;
        if (1 < arguments.length) {
            t += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var a = 2; a < arguments.length; a++)
                t += "&args[]=" + encodeURIComponent(arguments[a])
        }
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function c(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
    }
    function d(e) {
        var t = e
          , a = e;
        if (e.alternate)
            for (; t.return; )
                t = t.return;
        else {
            e = t;
            do
                t = e,
                (t.flags & 4098) !== 0 && (a = t.return),
                e = t.return;
            while (e)
        }
        return t.tag === 3 ? a : null
    }
    function f(e) {
        if (e.tag === 13) {
            var t = e.memoizedState;
            if (t === null && (e = e.alternate,
            e !== null && (t = e.memoizedState)),
            t !== null)
                return t.dehydrated
        }
        return null
    }
    function y(e) {
        if (e.tag === 31) {
            var t = e.memoizedState;
            if (t === null && (e = e.alternate,
            e !== null && (t = e.memoizedState)),
            t !== null)
                return t.dehydrated
        }
        return null
    }
    function g(e) {
        if (d(e) !== e)
            throw Error(l(188))
    }
    function p(e) {
        var t = e.alternate;
        if (!t) {
            if (t = d(e),
            t === null)
                throw Error(l(188));
            return t !== e ? null : e
        }
        for (var a = e, s = t; ; ) {
            var o = a.return;
            if (o === null)
                break;
            var u = o.alternate;
            if (u === null) {
                if (s = o.return,
                s !== null) {
                    a = s;
                    continue
                }
                break
            }
            if (o.child === u.child) {
                for (u = o.child; u; ) {
                    if (u === a)
                        return g(o),
                        e;
                    if (u === s)
                        return g(o),
                        t;
                    u = u.sibling
                }
                throw Error(l(188))
            }
            if (a.return !== s.return)
                a = o,
                s = u;
            else {
                for (var m = !1, b = o.child; b; ) {
                    if (b === a) {
                        m = !0,
                        a = o,
                        s = u;
                        break
                    }
                    if (b === s) {
                        m = !0,
                        s = o,
                        a = u;
                        break
                    }
                    b = b.sibling
                }
                if (!m) {
                    for (b = u.child; b; ) {
                        if (b === a) {
                            m = !0,
                            a = u,
                            s = o;
                            break
                        }
                        if (b === s) {
                            m = !0,
                            s = u,
                            a = o;
                            break
                        }
                        b = b.sibling
                    }
                    if (!m)
                        throw Error(l(189))
                }
            }
            if (a.alternate !== s)
                throw Error(l(190))
        }
        if (a.tag !== 3)
            throw Error(l(188));
        return a.stateNode.current === a ? e : t
    }
    function v(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6)
            return e;
        for (e = e.child; e !== null; ) {
            if (t = v(e),
            t !== null)
                return t;
            e = e.sibling
        }
        return null
    }
    var j = Object.assign
      , E = Symbol.for("react.element")
      , _ = Symbol.for("react.transitional.element")
      , T = Symbol.for("react.portal")
      , C = Symbol.for("react.fragment")
      , L = Symbol.for("react.strict_mode")
      , U = Symbol.for("react.profiler")
      , Y = Symbol.for("react.consumer")
      , G = Symbol.for("react.context")
      , z = Symbol.for("react.forward_ref")
      , V = Symbol.for("react.suspense")
      , I = Symbol.for("react.suspense_list")
      , X = Symbol.for("react.memo")
      , oe = Symbol.for("react.lazy")
      , ge = Symbol.for("react.activity")
      , ce = Symbol.for("react.memo_cache_sentinel")
      , Te = Symbol.iterator;
    function q(e) {
        return e === null || typeof e != "object" ? null : (e = Te && e[Te] || e["@@iterator"],
        typeof e == "function" ? e : null)
    }
    var _e = Symbol.for("react.client.reference");
    function Ue(e) {
        if (e == null)
            return null;
        if (typeof e == "function")
            return e.$$typeof === _e ? null : e.displayName || e.name || null;
        if (typeof e == "string")
            return e;
        switch (e) {
        case C:
            return "Fragment";
        case U:
            return "Profiler";
        case L:
            return "StrictMode";
        case V:
            return "Suspense";
        case I:
            return "SuspenseList";
        case ge:
            return "Activity"
        }
        if (typeof e == "object")
            switch (e.$$typeof) {
            case T:
                return "Portal";
            case G:
                return e.displayName || "Context";
            case Y:
                return (e._context.displayName || "Context") + ".Consumer";
            case z:
                var t = e.render;
                return e = e.displayName,
                e || (e = t.displayName || t.name || "",
                e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
                e;
            case X:
                return t = e.displayName || null,
                t !== null ? t : Ue(e.type) || "Memo";
            case oe:
                t = e._payload,
                e = e._init;
                try {
                    return Ue(e(t))
                } catch {}
            }
        return null
    }
    var de = Array.isArray
      , D = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , J = i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , te = {
        pending: !1,
        data: null,
        method: null,
        action: null
    }
      , Se = []
      , je = -1;
    function S(e) {
        return {
            current: e
        }
    }
    function $(e) {
        0 > je || (e.current = Se[je],
        Se[je] = null,
        je--)
    }
    function Q(e, t) {
        je++,
        Se[je] = e.current,
        e.current = t
    }
    var P = S(null)
      , ie = S(null)
      , he = S(null)
      , Ee = S(null);
    function ut(e, t) {
        switch (Q(he, t),
        Q(ie, e),
        Q(P, null),
        t.nodeType) {
        case 9:
        case 11:
            e = (e = t.documentElement) && (e = e.namespaceURI) ? wf(e) : 0;
            break;
        default:
            if (e = t.tagName,
            t = t.namespaceURI)
                t = wf(t),
                e = Sf(t, e);
            else
                switch (e) {
                case "svg":
                    e = 1;
                    break;
                case "math":
                    e = 2;
                    break;
                default:
                    e = 0
                }
        }
        $(P),
        Q(P, e)
    }
    function Ge() {
        $(P),
        $(ie),
        $(he)
    }
    function ds(e) {
        e.memoizedState !== null && Q(Ee, e);
        var t = P.current
          , a = Sf(t, e.type);
        t !== a && (Q(ie, e),
        Q(P, a))
    }
    function vr(e) {
        ie.current === e && ($(P),
        $(ie)),
        Ee.current === e && ($(Ee),
        er._currentValue = te)
    }
    var Ii, Pu;
    function Ya(e) {
        if (Ii === void 0)
            try {
                throw Error()
            } catch (a) {
                var t = a.stack.trim().match(/\n( *(at )?)/);
                Ii = t && t[1] || "",
                Pu = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : ""
            }
        return `
` + Ii + e + Pu
    }
    var Zi = !1;
    function Pi(e, t) {
        if (!e || Zi)
            return "";
        Zi = !0;
        var a = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var s = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (t) {
                            var H = function() {
                                throw Error()
                            };
                            if (Object.defineProperty(H.prototype, "props", {
                                set: function() {
                                    throw Error()
                                }
                            }),
                            typeof Reflect == "object" && Reflect.construct) {
                                try {
                                    Reflect.construct(H, [])
                                } catch (k) {
                                    var R = k
                                }
                                Reflect.construct(e, [], H)
                            } else {
                                try {
                                    H.call()
                                } catch (k) {
                                    R = k
                                }
                                e.call(H.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (k) {
                                R = k
                            }
                            (H = e()) && typeof H.catch == "function" && H.catch(function() {})
                        }
                    } catch (k) {
                        if (k && R && typeof k.stack == "string")
                            return [k.stack, R.stack]
                    }
                    return [null, null]
                }
            };
            s.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var o = Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot, "name");
            o && o.configurable && Object.defineProperty(s.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var u = s.DetermineComponentFrameRoot()
              , m = u[0]
              , b = u[1];
            if (m && b) {
                var x = m.split(`
`)
                  , O = b.split(`
`);
                for (o = s = 0; s < x.length && !x[s].includes("DetermineComponentFrameRoot"); )
                    s++;
                for (; o < O.length && !O[o].includes("DetermineComponentFrameRoot"); )
                    o++;
                if (s === x.length || o === O.length)
                    for (s = x.length - 1,
                    o = O.length - 1; 1 <= s && 0 <= o && x[s] !== O[o]; )
                        o--;
                for (; 1 <= s && 0 <= o; s--,
                o--)
                    if (x[s] !== O[o]) {
                        if (s !== 1 || o !== 1)
                            do
                                if (s--,
                                o--,
                                0 > o || x[s] !== O[o]) {
                                    var M = `
` + x[s].replace(" at new ", " at ");
                                    return e.displayName && M.includes("<anonymous>") && (M = M.replace("<anonymous>", e.displayName)),
                                    M
                                }
                            while (1 <= s && 0 <= o);
                        break
                    }
            }
        } finally {
            Zi = !1,
            Error.prepareStackTrace = a
        }
        return (a = e ? e.displayName || e.name : "") ? Ya(a) : ""
    }
    function ug(e, t) {
        switch (e.tag) {
        case 26:
        case 27:
        case 5:
            return Ya(e.type);
        case 16:
            return Ya("Lazy");
        case 13:
            return e.child !== t && t !== null ? Ya("Suspense Fallback") : Ya("Suspense");
        case 19:
            return Ya("SuspenseList");
        case 0:
        case 15:
            return Pi(e.type, !1);
        case 11:
            return Pi(e.type.render, !1);
        case 1:
            return Pi(e.type, !0);
        case 31:
            return Ya("Activity");
        default:
            return ""
        }
    }
    function Wu(e) {
        try {
            var t = ""
              , a = null;
            do
                t += ug(e, a),
                a = e,
                e = e.return;
            while (e);
            return t
        } catch (s) {
            return `
Error generating stack: ` + s.message + `
` + s.stack
        }
    }
    var Wi = Object.prototype.hasOwnProperty
      , Fi = r.unstable_scheduleCallback
      , el = r.unstable_cancelCallback
      , cg = r.unstable_shouldYield
      , dg = r.unstable_requestPaint
      , bt = r.unstable_now
      , hg = r.unstable_getCurrentPriorityLevel
      , Fu = r.unstable_ImmediatePriority
      , ec = r.unstable_UserBlockingPriority
      , xr = r.unstable_NormalPriority
      , fg = r.unstable_LowPriority
      , tc = r.unstable_IdlePriority
      , mg = r.log
      , gg = r.unstable_setDisableYieldValue
      , hs = null
      , vt = null;
    function pa(e) {
        if (typeof mg == "function" && gg(e),
        vt && typeof vt.setStrictMode == "function")
            try {
                vt.setStrictMode(hs, e)
            } catch {}
    }
    var xt = Math.clz32 ? Math.clz32 : bg
      , yg = Math.log
      , pg = Math.LN2;
    function bg(e) {
        return e >>>= 0,
        e === 0 ? 32 : 31 - (yg(e) / pg | 0) | 0
    }
    var _r = 256
      , wr = 262144
      , Sr = 4194304;
    function Ka(e) {
        var t = e & 42;
        if (t !== 0)
            return t;
        switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
            return 64;
        case 128:
            return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
            return e & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return e & 62914560;
        case 67108864:
            return 67108864;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 0;
        default:
            return e
        }
    }
    function Er(e, t, a) {
        var s = e.pendingLanes;
        if (s === 0)
            return 0;
        var o = 0
          , u = e.suspendedLanes
          , m = e.pingedLanes;
        e = e.warmLanes;
        var b = s & 134217727;
        return b !== 0 ? (s = b & ~u,
        s !== 0 ? o = Ka(s) : (m &= b,
        m !== 0 ? o = Ka(m) : a || (a = b & ~e,
        a !== 0 && (o = Ka(a))))) : (b = s & ~u,
        b !== 0 ? o = Ka(b) : m !== 0 ? o = Ka(m) : a || (a = s & ~e,
        a !== 0 && (o = Ka(a)))),
        o === 0 ? 0 : t !== 0 && t !== o && (t & u) === 0 && (u = o & -o,
        a = t & -t,
        u >= a || u === 32 && (a & 4194048) !== 0) ? t : o
    }
    function fs(e, t) {
        return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0
    }
    function vg(e, t) {
        switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
            return t + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
        }
    }
    function ac() {
        var e = Sr;
        return Sr <<= 1,
        (Sr & 62914560) === 0 && (Sr = 4194304),
        e
    }
    function tl(e) {
        for (var t = [], a = 0; 31 > a; a++)
            t.push(e);
        return t
    }
    function ms(e, t) {
        e.pendingLanes |= t,
        t !== 268435456 && (e.suspendedLanes = 0,
        e.pingedLanes = 0,
        e.warmLanes = 0)
    }
    function xg(e, t, a, s, o, u) {
        var m = e.pendingLanes;
        e.pendingLanes = a,
        e.suspendedLanes = 0,
        e.pingedLanes = 0,
        e.warmLanes = 0,
        e.expiredLanes &= a,
        e.entangledLanes &= a,
        e.errorRecoveryDisabledLanes &= a,
        e.shellSuspendCounter = 0;
        var b = e.entanglements
          , x = e.expirationTimes
          , O = e.hiddenUpdates;
        for (a = m & ~a; 0 < a; ) {
            var M = 31 - xt(a)
              , H = 1 << M;
            b[M] = 0,
            x[M] = -1;
            var R = O[M];
            if (R !== null)
                for (O[M] = null,
                M = 0; M < R.length; M++) {
                    var k = R[M];
                    k !== null && (k.lane &= -536870913)
                }
            a &= ~H
        }
        s !== 0 && nc(e, s, 0),
        u !== 0 && o === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(m & ~t))
    }
    function nc(e, t, a) {
        e.pendingLanes |= t,
        e.suspendedLanes &= ~t;
        var s = 31 - xt(t);
        e.entangledLanes |= t,
        e.entanglements[s] = e.entanglements[s] | 1073741824 | a & 261930
    }
    function sc(e, t) {
        var a = e.entangledLanes |= t;
        for (e = e.entanglements; a; ) {
            var s = 31 - xt(a)
              , o = 1 << s;
            o & t | e[s] & t && (e[s] |= t),
            a &= ~o
        }
    }
    function rc(e, t) {
        var a = t & -t;
        return a = (a & 42) !== 0 ? 1 : al(a),
        (a & (e.suspendedLanes | t)) !== 0 ? 0 : a
    }
    function al(e) {
        switch (e) {
        case 2:
            e = 1;
            break;
        case 8:
            e = 4;
            break;
        case 32:
            e = 16;
            break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            e = 128;
            break;
        case 268435456:
            e = 134217728;
            break;
        default:
            e = 0
        }
        return e
    }
    function nl(e) {
        return e &= -e,
        2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
    }
    function ic() {
        var e = J.p;
        return e !== 0 ? e : (e = window.event,
        e === void 0 ? 32 : Xf(e.type))
    }
    function lc(e, t) {
        var a = J.p;
        try {
            return J.p = e,
            t()
        } finally {
            J.p = a
        }
    }
    var ba = Math.random().toString(36).slice(2)
      , tt = "__reactFiber$" + ba
      , dt = "__reactProps$" + ba
      , yn = "__reactContainer$" + ba
      , sl = "__reactEvents$" + ba
      , _g = "__reactListeners$" + ba
      , wg = "__reactHandles$" + ba
      , oc = "__reactResources$" + ba
      , gs = "__reactMarker$" + ba;
    function rl(e) {
        delete e[tt],
        delete e[dt],
        delete e[sl],
        delete e[_g],
        delete e[wg]
    }
    function pn(e) {
        var t = e[tt];
        if (t)
            return t;
        for (var a = e.parentNode; a; ) {
            if (t = a[yn] || a[tt]) {
                if (a = t.alternate,
                t.child !== null || a !== null && a.child !== null)
                    for (e = Rf(e); e !== null; ) {
                        if (a = e[tt])
                            return a;
                        e = Rf(e)
                    }
                return t
            }
            e = a,
            a = e.parentNode
        }
        return null
    }
    function bn(e) {
        if (e = e[tt] || e[yn]) {
            var t = e.tag;
            if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
                return e
        }
        return null
    }
    function ys(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6)
            return e.stateNode;
        throw Error(l(33))
    }
    function vn(e) {
        var t = e[oc];
        return t || (t = e[oc] = {
            hoistableStyles: new Map,
            hoistableScripts: new Map
        }),
        t
    }
    function Fe(e) {
        e[gs] = !0
    }
    var uc = new Set
      , cc = {};
    function Xa(e, t) {
        xn(e, t),
        xn(e + "Capture", t)
    }
    function xn(e, t) {
        for (cc[e] = t,
        e = 0; e < t.length; e++)
            uc.add(t[e])
    }
    var Sg = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$")
      , dc = {}
      , hc = {};
    function Eg(e) {
        return Wi.call(hc, e) ? !0 : Wi.call(dc, e) ? !1 : Sg.test(e) ? hc[e] = !0 : (dc[e] = !0,
        !1)
    }
    function Tr(e, t, a) {
        if (Eg(t))
            if (a === null)
                e.removeAttribute(t);
            else {
                switch (typeof a) {
                case "undefined":
                case "function":
                case "symbol":
                    e.removeAttribute(t);
                    return;
                case "boolean":
                    var s = t.toLowerCase().slice(0, 5);
                    if (s !== "data-" && s !== "aria-") {
                        e.removeAttribute(t);
                        return
                    }
                }
                e.setAttribute(t, "" + a)
            }
    }
    function jr(e, t, a) {
        if (a === null)
            e.removeAttribute(t);
        else {
            switch (typeof a) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                e.removeAttribute(t);
                return
            }
            e.setAttribute(t, "" + a)
        }
    }
    function Pt(e, t, a, s) {
        if (s === null)
            e.removeAttribute(a);
        else {
            switch (typeof s) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                e.removeAttribute(a);
                return
            }
            e.setAttributeNS(t, a, "" + s)
        }
    }
    function Ct(e) {
        switch (typeof e) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
        }
    }
    function fc(e) {
        var t = e.type;
        return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
    }
    function Tg(e, t, a) {
        var s = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
        if (!e.hasOwnProperty(t) && typeof s < "u" && typeof s.get == "function" && typeof s.set == "function") {
            var o = s.get
              , u = s.set;
            return Object.defineProperty(e, t, {
                configurable: !0,
                get: function() {
                    return o.call(this)
                },
                set: function(m) {
                    a = "" + m,
                    u.call(this, m)
                }
            }),
            Object.defineProperty(e, t, {
                enumerable: s.enumerable
            }),
            {
                getValue: function() {
                    return a
                },
                setValue: function(m) {
                    a = "" + m
                },
                stopTracking: function() {
                    e._valueTracker = null,
                    delete e[t]
                }
            }
        }
    }
    function il(e) {
        if (!e._valueTracker) {
            var t = fc(e) ? "checked" : "value";
            e._valueTracker = Tg(e, t, "" + e[t])
        }
    }
    function mc(e) {
        if (!e)
            return !1;
        var t = e._valueTracker;
        if (!t)
            return !0;
        var a = t.getValue()
          , s = "";
        return e && (s = fc(e) ? e.checked ? "true" : "false" : e.value),
        e = s,
        e !== a ? (t.setValue(e),
        !0) : !1
    }
    function Nr(e) {
        if (e = e || (typeof document < "u" ? document : void 0),
        typeof e > "u")
            return null;
        try {
            return e.activeElement || e.body
        } catch {
            return e.body
        }
    }
    var jg = /[\n"\\]/g;
    function kt(e) {
        return e.replace(jg, function(t) {
            return "\\" + t.charCodeAt(0).toString(16) + " "
        })
    }
    function ll(e, t, a, s, o, u, m, b) {
        e.name = "",
        m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? e.type = m : e.removeAttribute("type"),
        t != null ? m === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Ct(t)) : e.value !== "" + Ct(t) && (e.value = "" + Ct(t)) : m !== "submit" && m !== "reset" || e.removeAttribute("value"),
        t != null ? ol(e, m, Ct(t)) : a != null ? ol(e, m, Ct(a)) : s != null && e.removeAttribute("value"),
        o == null && u != null && (e.defaultChecked = !!u),
        o != null && (e.checked = o && typeof o != "function" && typeof o != "symbol"),
        b != null && typeof b != "function" && typeof b != "symbol" && typeof b != "boolean" ? e.name = "" + Ct(b) : e.removeAttribute("name")
    }
    function gc(e, t, a, s, o, u, m, b) {
        if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (e.type = u),
        t != null || a != null) {
            if (!(u !== "submit" && u !== "reset" || t != null)) {
                il(e);
                return
            }
            a = a != null ? "" + Ct(a) : "",
            t = t != null ? "" + Ct(t) : a,
            b || t === e.value || (e.value = t),
            e.defaultValue = t
        }
        s = s ?? o,
        s = typeof s != "function" && typeof s != "symbol" && !!s,
        e.checked = b ? e.checked : !!s,
        e.defaultChecked = !!s,
        m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" && (e.name = m),
        il(e)
    }
    function ol(e, t, a) {
        t === "number" && Nr(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a)
    }
    function _n(e, t, a, s) {
        if (e = e.options,
        t) {
            t = {};
            for (var o = 0; o < a.length; o++)
                t["$" + a[o]] = !0;
            for (a = 0; a < e.length; a++)
                o = t.hasOwnProperty("$" + e[a].value),
                e[a].selected !== o && (e[a].selected = o),
                o && s && (e[a].defaultSelected = !0)
        } else {
            for (a = "" + Ct(a),
            t = null,
            o = 0; o < e.length; o++) {
                if (e[o].value === a) {
                    e[o].selected = !0,
                    s && (e[o].defaultSelected = !0);
                    return
                }
                t !== null || e[o].disabled || (t = e[o])
            }
            t !== null && (t.selected = !0)
        }
    }
    function yc(e, t, a) {
        if (t != null && (t = "" + Ct(t),
        t !== e.value && (e.value = t),
        a == null)) {
            e.defaultValue !== t && (e.defaultValue = t);
            return
        }
        e.defaultValue = a != null ? "" + Ct(a) : ""
    }
    function pc(e, t, a, s) {
        if (t == null) {
            if (s != null) {
                if (a != null)
                    throw Error(l(92));
                if (de(s)) {
                    if (1 < s.length)
                        throw Error(l(93));
                    s = s[0]
                }
                a = s
            }
            a == null && (a = ""),
            t = a
        }
        a = Ct(t),
        e.defaultValue = a,
        s = e.textContent,
        s === a && s !== "" && s !== null && (e.value = s),
        il(e)
    }
    function wn(e, t) {
        if (t) {
            var a = e.firstChild;
            if (a && a === e.lastChild && a.nodeType === 3) {
                a.nodeValue = t;
                return
            }
        }
        e.textContent = t
    }
    var Ng = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function bc(e, t, a) {
        var s = t.indexOf("--") === 0;
        a == null || typeof a == "boolean" || a === "" ? s ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : s ? e.setProperty(t, a) : typeof a != "number" || a === 0 || Ng.has(t) ? t === "float" ? e.cssFloat = a : e[t] = ("" + a).trim() : e[t] = a + "px"
    }
    function vc(e, t, a) {
        if (t != null && typeof t != "object")
            throw Error(l(62));
        if (e = e.style,
        a != null) {
            for (var s in a)
                !a.hasOwnProperty(s) || t != null && t.hasOwnProperty(s) || (s.indexOf("--") === 0 ? e.setProperty(s, "") : s === "float" ? e.cssFloat = "" : e[s] = "");
            for (var o in t)
                s = t[o],
                t.hasOwnProperty(o) && a[o] !== s && bc(e, o, s)
        } else
            for (var u in t)
                t.hasOwnProperty(u) && bc(e, u, t[u])
    }
    function ul(e) {
        if (e.indexOf("-") === -1)
            return !1;
        switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
        }
    }
    var Ag = new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]])
      , Og = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function Ar(e) {
        return Og.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e
    }
    function Wt() {}
    var cl = null;
    function dl(e) {
        return e = e.target || e.srcElement || window,
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
    }
    var Sn = null
      , En = null;
    function xc(e) {
        var t = bn(e);
        if (t && (e = t.stateNode)) {
            var a = e[dt] || null;
            e: switch (e = t.stateNode,
            t.type) {
            case "input":
                if (ll(e, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name),
                t = a.name,
                a.type === "radio" && t != null) {
                    for (a = e; a.parentNode; )
                        a = a.parentNode;
                    for (a = a.querySelectorAll('input[name="' + kt("" + t) + '"][type="radio"]'),
                    t = 0; t < a.length; t++) {
                        var s = a[t];
                        if (s !== e && s.form === e.form) {
                            var o = s[dt] || null;
                            if (!o)
                                throw Error(l(90));
                            ll(s, o.value, o.defaultValue, o.defaultValue, o.checked, o.defaultChecked, o.type, o.name)
                        }
                    }
                    for (t = 0; t < a.length; t++)
                        s = a[t],
                        s.form === e.form && mc(s)
                }
                break e;
            case "textarea":
                yc(e, a.value, a.defaultValue);
                break e;
            case "select":
                t = a.value,
                t != null && _n(e, !!a.multiple, t, !1)
            }
        }
    }
    var hl = !1;
    function _c(e, t, a) {
        if (hl)
            return e(t, a);
        hl = !0;
        try {
            var s = e(t);
            return s
        } finally {
            if (hl = !1,
            (Sn !== null || En !== null) && (gi(),
            Sn && (t = Sn,
            e = En,
            En = Sn = null,
            xc(t),
            e)))
                for (t = 0; t < e.length; t++)
                    xc(e[t])
        }
    }
    function ps(e, t) {
        var a = e.stateNode;
        if (a === null)
            return null;
        var s = a[dt] || null;
        if (s === null)
            return null;
        a = s[t];
        e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (s = !s.disabled) || (e = e.type,
            s = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
            e = !s;
            break e;
        default:
            e = !1
        }
        if (e)
            return null;
        if (a && typeof a != "function")
            throw Error(l(231, t, typeof a));
        return a
    }
    var Ft = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
      , fl = !1;
    if (Ft)
        try {
            var bs = {};
            Object.defineProperty(bs, "passive", {
                get: function() {
                    fl = !0
                }
            }),
            window.addEventListener("test", bs, bs),
            window.removeEventListener("test", bs, bs)
        } catch {
            fl = !1
        }
    var va = null
      , ml = null
      , Or = null;
    function wc() {
        if (Or)
            return Or;
        var e, t = ml, a = t.length, s, o = "value"in va ? va.value : va.textContent, u = o.length;
        for (e = 0; e < a && t[e] === o[e]; e++)
            ;
        var m = a - e;
        for (s = 1; s <= m && t[a - s] === o[u - s]; s++)
            ;
        return Or = o.slice(e, 1 < s ? 1 - s : void 0)
    }
    function Rr(e) {
        var t = e.keyCode;
        return "charCode"in e ? (e = e.charCode,
        e === 0 && t === 13 && (e = 13)) : e = t,
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
    }
    function Cr() {
        return !0
    }
    function Sc() {
        return !1
    }
    function ht(e) {
        function t(a, s, o, u, m) {
            this._reactName = a,
            this._targetInst = o,
            this.type = s,
            this.nativeEvent = u,
            this.target = m,
            this.currentTarget = null;
            for (var b in e)
                e.hasOwnProperty(b) && (a = e[b],
                this[b] = a ? a(u) : u[b]);
            return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Cr : Sc,
            this.isPropagationStopped = Sc,
            this
        }
        return j(t.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var a = this.nativeEvent;
                a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1),
                this.isDefaultPrevented = Cr)
            },
            stopPropagation: function() {
                var a = this.nativeEvent;
                a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
                this.isPropagationStopped = Cr)
            },
            persist: function() {},
            isPersistent: Cr
        }),
        t
    }
    var Ja = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, kr = ht(Ja), vs = j({}, Ja, {
        view: 0,
        detail: 0
    }), Rg = ht(vs), gl, yl, xs, Dr = j({}, vs, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: bl,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX"in e ? e.movementX : (e !== xs && (xs && e.type === "mousemove" ? (gl = e.screenX - xs.screenX,
            yl = e.screenY - xs.screenY) : yl = gl = 0,
            xs = e),
            gl)
        },
        movementY: function(e) {
            return "movementY"in e ? e.movementY : yl
        }
    }), Ec = ht(Dr), Cg = j({}, Dr, {
        dataTransfer: 0
    }), kg = ht(Cg), Dg = j({}, vs, {
        relatedTarget: 0
    }), pl = ht(Dg), Ug = j({}, Ja, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), zg = ht(Ug), Mg = j({}, Ja, {
        clipboardData: function(e) {
            return "clipboardData"in e ? e.clipboardData : window.clipboardData
        }
    }), qg = ht(Mg), Bg = j({}, Ja, {
        data: 0
    }), Tc = ht(Bg), Lg = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    }, Hg = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    }, $g = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function Gg(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : (e = $g[e]) ? !!t[e] : !1
    }
    function bl() {
        return Gg
    }
    var Vg = j({}, vs, {
        key: function(e) {
            if (e.key) {
                var t = Lg[e.key] || e.key;
                if (t !== "Unidentified")
                    return t
            }
            return e.type === "keypress" ? (e = Rr(e),
            e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Hg[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: bl,
        charCode: function(e) {
            return e.type === "keypress" ? Rr(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? Rr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    })
      , Yg = ht(Vg)
      , Kg = j({}, Dr, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    })
      , jc = ht(Kg)
      , Xg = j({}, vs, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: bl
    })
      , Jg = ht(Xg)
      , Qg = j({}, Ja, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })
      , Ig = ht(Qg)
      , Zg = j({}, Dr, {
        deltaX: function(e) {
            return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    })
      , Pg = ht(Zg)
      , Wg = j({}, Ja, {
        newState: 0,
        oldState: 0
    })
      , Fg = ht(Wg)
      , e0 = [9, 13, 27, 32]
      , vl = Ft && "CompositionEvent"in window
      , _s = null;
    Ft && "documentMode"in document && (_s = document.documentMode);
    var t0 = Ft && "TextEvent"in window && !_s
      , Nc = Ft && (!vl || _s && 8 < _s && 11 >= _s)
      , Ac = " "
      , Oc = !1;
    function Rc(e, t) {
        switch (e) {
        case "keyup":
            return e0.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
        }
    }
    function Cc(e) {
        return e = e.detail,
        typeof e == "object" && "data"in e ? e.data : null
    }
    var Tn = !1;
    function a0(e, t) {
        switch (e) {
        case "compositionend":
            return Cc(t);
        case "keypress":
            return t.which !== 32 ? null : (Oc = !0,
            Ac);
        case "textInput":
            return e = t.data,
            e === Ac && Oc ? null : e;
        default:
            return null
        }
    }
    function n0(e, t) {
        if (Tn)
            return e === "compositionend" || !vl && Rc(e, t) ? (e = wc(),
            Or = ml = va = null,
            Tn = !1,
            e) : null;
        switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length)
                    return t.char;
                if (t.which)
                    return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return Nc && t.locale !== "ko" ? null : t.data;
        default:
            return null
        }
    }
    var s0 = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };
    function kc(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === "input" ? !!s0[e.type] : t === "textarea"
    }
    function Dc(e, t, a, s) {
        Sn ? En ? En.push(s) : En = [s] : Sn = s,
        t = wi(t, "onChange"),
        0 < t.length && (a = new kr("onChange","change",null,a,s),
        e.push({
            event: a,
            listeners: t
        }))
    }
    var ws = null
      , Ss = null;
    function r0(e) {
        yf(e, 0)
    }
    function Ur(e) {
        var t = ys(e);
        if (mc(t))
            return e
    }
    function Uc(e, t) {
        if (e === "change")
            return t
    }
    var zc = !1;
    if (Ft) {
        var xl;
        if (Ft) {
            var _l = "oninput"in document;
            if (!_l) {
                var Mc = document.createElement("div");
                Mc.setAttribute("oninput", "return;"),
                _l = typeof Mc.oninput == "function"
            }
            xl = _l
        } else
            xl = !1;
        zc = xl && (!document.documentMode || 9 < document.documentMode)
    }
    function qc() {
        ws && (ws.detachEvent("onpropertychange", Bc),
        Ss = ws = null)
    }
    function Bc(e) {
        if (e.propertyName === "value" && Ur(Ss)) {
            var t = [];
            Dc(t, Ss, e, dl(e)),
            _c(r0, t)
        }
    }
    function i0(e, t, a) {
        e === "focusin" ? (qc(),
        ws = t,
        Ss = a,
        ws.attachEvent("onpropertychange", Bc)) : e === "focusout" && qc()
    }
    function l0(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown")
            return Ur(Ss)
    }
    function o0(e, t) {
        if (e === "click")
            return Ur(t)
    }
    function u0(e, t) {
        if (e === "input" || e === "change")
            return Ur(t)
    }
    function c0(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
    }
    var _t = typeof Object.is == "function" ? Object.is : c0;
    function Es(e, t) {
        if (_t(e, t))
            return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null)
            return !1;
        var a = Object.keys(e)
          , s = Object.keys(t);
        if (a.length !== s.length)
            return !1;
        for (s = 0; s < a.length; s++) {
            var o = a[s];
            if (!Wi.call(t, o) || !_t(e[o], t[o]))
                return !1
        }
        return !0
    }
    function Lc(e) {
        for (; e && e.firstChild; )
            e = e.firstChild;
        return e
    }
    function Hc(e, t) {
        var a = Lc(e);
        e = 0;
        for (var s; a; ) {
            if (a.nodeType === 3) {
                if (s = e + a.textContent.length,
                e <= t && s >= t)
                    return {
                        node: a,
                        offset: t - e
                    };
                e = s
            }
            e: {
                for (; a; ) {
                    if (a.nextSibling) {
                        a = a.nextSibling;
                        break e
                    }
                    a = a.parentNode
                }
                a = void 0
            }
            a = Lc(a)
        }
    }
    function $c(e, t) {
        return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? $c(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
    }
    function Gc(e) {
        e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
        for (var t = Nr(e.document); t instanceof e.HTMLIFrameElement; ) {
            try {
                var a = typeof t.contentWindow.location.href == "string"
            } catch {
                a = !1
            }
            if (a)
                e = t.contentWindow;
            else
                break;
            t = Nr(e.document)
        }
        return t
    }
    function wl(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
    }
    var d0 = Ft && "documentMode"in document && 11 >= document.documentMode
      , jn = null
      , Sl = null
      , Ts = null
      , El = !1;
    function Vc(e, t, a) {
        var s = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
        El || jn == null || jn !== Nr(s) || (s = jn,
        "selectionStart"in s && wl(s) ? s = {
            start: s.selectionStart,
            end: s.selectionEnd
        } : (s = (s.ownerDocument && s.ownerDocument.defaultView || window).getSelection(),
        s = {
            anchorNode: s.anchorNode,
            anchorOffset: s.anchorOffset,
            focusNode: s.focusNode,
            focusOffset: s.focusOffset
        }),
        Ts && Es(Ts, s) || (Ts = s,
        s = wi(Sl, "onSelect"),
        0 < s.length && (t = new kr("onSelect","select",null,t,a),
        e.push({
            event: t,
            listeners: s
        }),
        t.target = jn)))
    }
    function Qa(e, t) {
        var a = {};
        return a[e.toLowerCase()] = t.toLowerCase(),
        a["Webkit" + e] = "webkit" + t,
        a["Moz" + e] = "moz" + t,
        a
    }
    var Nn = {
        animationend: Qa("Animation", "AnimationEnd"),
        animationiteration: Qa("Animation", "AnimationIteration"),
        animationstart: Qa("Animation", "AnimationStart"),
        transitionrun: Qa("Transition", "TransitionRun"),
        transitionstart: Qa("Transition", "TransitionStart"),
        transitioncancel: Qa("Transition", "TransitionCancel"),
        transitionend: Qa("Transition", "TransitionEnd")
    }
      , Tl = {}
      , Yc = {};
    Ft && (Yc = document.createElement("div").style,
    "AnimationEvent"in window || (delete Nn.animationend.animation,
    delete Nn.animationiteration.animation,
    delete Nn.animationstart.animation),
    "TransitionEvent"in window || delete Nn.transitionend.transition);
    function Ia(e) {
        if (Tl[e])
            return Tl[e];
        if (!Nn[e])
            return e;
        var t = Nn[e], a;
        for (a in t)
            if (t.hasOwnProperty(a) && a in Yc)
                return Tl[e] = t[a];
        return e
    }
    var Kc = Ia("animationend")
      , Xc = Ia("animationiteration")
      , Jc = Ia("animationstart")
      , h0 = Ia("transitionrun")
      , f0 = Ia("transitionstart")
      , m0 = Ia("transitioncancel")
      , Qc = Ia("transitionend")
      , Ic = new Map
      , jl = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    jl.push("scrollEnd");
    function $t(e, t) {
        Ic.set(e, t),
        Xa(t, [e])
    }
    var zr = typeof reportError == "function" ? reportError : function(e) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var t = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
                error: e
            });
            if (!window.dispatchEvent(t))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", e);
            return
        }
        console.error(e)
    }
      , Dt = []
      , An = 0
      , Nl = 0;
    function Mr() {
        for (var e = An, t = Nl = An = 0; t < e; ) {
            var a = Dt[t];
            Dt[t++] = null;
            var s = Dt[t];
            Dt[t++] = null;
            var o = Dt[t];
            Dt[t++] = null;
            var u = Dt[t];
            if (Dt[t++] = null,
            s !== null && o !== null) {
                var m = s.pending;
                m === null ? o.next = o : (o.next = m.next,
                m.next = o),
                s.pending = o
            }
            u !== 0 && Zc(a, o, u)
        }
    }
    function qr(e, t, a, s) {
        Dt[An++] = e,
        Dt[An++] = t,
        Dt[An++] = a,
        Dt[An++] = s,
        Nl |= s,
        e.lanes |= s,
        e = e.alternate,
        e !== null && (e.lanes |= s)
    }
    function Al(e, t, a, s) {
        return qr(e, t, a, s),
        Br(e)
    }
    function Za(e, t) {
        return qr(e, null, null, t),
        Br(e)
    }
    function Zc(e, t, a) {
        e.lanes |= a;
        var s = e.alternate;
        s !== null && (s.lanes |= a);
        for (var o = !1, u = e.return; u !== null; )
            u.childLanes |= a,
            s = u.alternate,
            s !== null && (s.childLanes |= a),
            u.tag === 22 && (e = u.stateNode,
            e === null || e._visibility & 1 || (o = !0)),
            e = u,
            u = u.return;
        return e.tag === 3 ? (u = e.stateNode,
        o && t !== null && (o = 31 - xt(a),
        e = u.hiddenUpdates,
        s = e[o],
        s === null ? e[o] = [t] : s.push(t),
        t.lane = a | 536870912),
        u) : null
    }
    function Br(e) {
        if (50 < Js)
            throw Js = 0,
            Bo = null,
            Error(l(185));
        for (var t = e.return; t !== null; )
            e = t,
            t = e.return;
        return e.tag === 3 ? e.stateNode : null
    }
    var On = {};
    function g0(e, t, a, s) {
        this.tag = e,
        this.key = a,
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
        this.index = 0,
        this.refCleanup = this.ref = null,
        this.pendingProps = t,
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
        this.mode = s,
        this.subtreeFlags = this.flags = 0,
        this.deletions = null,
        this.childLanes = this.lanes = 0,
        this.alternate = null
    }
    function wt(e, t, a, s) {
        return new g0(e,t,a,s)
    }
    function Ol(e) {
        return e = e.prototype,
        !(!e || !e.isReactComponent)
    }
    function ea(e, t) {
        var a = e.alternate;
        return a === null ? (a = wt(e.tag, t, e.key, e.mode),
        a.elementType = e.elementType,
        a.type = e.type,
        a.stateNode = e.stateNode,
        a.alternate = e,
        e.alternate = a) : (a.pendingProps = t,
        a.type = e.type,
        a.flags = 0,
        a.subtreeFlags = 0,
        a.deletions = null),
        a.flags = e.flags & 65011712,
        a.childLanes = e.childLanes,
        a.lanes = e.lanes,
        a.child = e.child,
        a.memoizedProps = e.memoizedProps,
        a.memoizedState = e.memoizedState,
        a.updateQueue = e.updateQueue,
        t = e.dependencies,
        a.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        },
        a.sibling = e.sibling,
        a.index = e.index,
        a.ref = e.ref,
        a.refCleanup = e.refCleanup,
        a
    }
    function Pc(e, t) {
        e.flags &= 65011714;
        var a = e.alternate;
        return a === null ? (e.childLanes = 0,
        e.lanes = t,
        e.child = null,
        e.subtreeFlags = 0,
        e.memoizedProps = null,
        e.memoizedState = null,
        e.updateQueue = null,
        e.dependencies = null,
        e.stateNode = null) : (e.childLanes = a.childLanes,
        e.lanes = a.lanes,
        e.child = a.child,
        e.subtreeFlags = 0,
        e.deletions = null,
        e.memoizedProps = a.memoizedProps,
        e.memoizedState = a.memoizedState,
        e.updateQueue = a.updateQueue,
        e.type = a.type,
        t = a.dependencies,
        e.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }),
        e
    }
    function Lr(e, t, a, s, o, u) {
        var m = 0;
        if (s = e,
        typeof e == "function")
            Ol(e) && (m = 1);
        else if (typeof e == "string")
            m = xy(e, a, P.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
        else
            e: switch (e) {
            case ge:
                return e = wt(31, a, t, o),
                e.elementType = ge,
                e.lanes = u,
                e;
            case C:
                return Pa(a.children, o, u, t);
            case L:
                m = 8,
                o |= 24;
                break;
            case U:
                return e = wt(12, a, t, o | 2),
                e.elementType = U,
                e.lanes = u,
                e;
            case V:
                return e = wt(13, a, t, o),
                e.elementType = V,
                e.lanes = u,
                e;
            case I:
                return e = wt(19, a, t, o),
                e.elementType = I,
                e.lanes = u,
                e;
            default:
                if (typeof e == "object" && e !== null)
                    switch (e.$$typeof) {
                    case G:
                        m = 10;
                        break e;
                    case Y:
                        m = 9;
                        break e;
                    case z:
                        m = 11;
                        break e;
                    case X:
                        m = 14;
                        break e;
                    case oe:
                        m = 16,
                        s = null;
                        break e
                    }
                m = 29,
                a = Error(l(130, e === null ? "null" : typeof e, "")),
                s = null
            }
        return t = wt(m, a, t, o),
        t.elementType = e,
        t.type = s,
        t.lanes = u,
        t
    }
    function Pa(e, t, a, s) {
        return e = wt(7, e, s, t),
        e.lanes = a,
        e
    }
    function Rl(e, t, a) {
        return e = wt(6, e, null, t),
        e.lanes = a,
        e
    }
    function Wc(e) {
        var t = wt(18, null, null, 0);
        return t.stateNode = e,
        t
    }
    function Cl(e, t, a) {
        return t = wt(4, e.children !== null ? e.children : [], e.key, t),
        t.lanes = a,
        t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        },
        t
    }
    var Fc = new WeakMap;
    function Ut(e, t) {
        if (typeof e == "object" && e !== null) {
            var a = Fc.get(e);
            return a !== void 0 ? a : (t = {
                value: e,
                source: t,
                stack: Wu(t)
            },
            Fc.set(e, t),
            t)
        }
        return {
            value: e,
            source: t,
            stack: Wu(t)
        }
    }
    var Rn = []
      , Cn = 0
      , Hr = null
      , js = 0
      , zt = []
      , Mt = 0
      , xa = null
      , Jt = 1
      , Qt = "";
    function ta(e, t) {
        Rn[Cn++] = js,
        Rn[Cn++] = Hr,
        Hr = e,
        js = t
    }
    function ed(e, t, a) {
        zt[Mt++] = Jt,
        zt[Mt++] = Qt,
        zt[Mt++] = xa,
        xa = e;
        var s = Jt;
        e = Qt;
        var o = 32 - xt(s) - 1;
        s &= ~(1 << o),
        a += 1;
        var u = 32 - xt(t) + o;
        if (30 < u) {
            var m = o - o % 5;
            u = (s & (1 << m) - 1).toString(32),
            s >>= m,
            o -= m,
            Jt = 1 << 32 - xt(t) + o | a << o | s,
            Qt = u + e
        } else
            Jt = 1 << u | a << o | s,
            Qt = e
    }
    function kl(e) {
        e.return !== null && (ta(e, 1),
        ed(e, 1, 0))
    }
    function Dl(e) {
        for (; e === Hr; )
            Hr = Rn[--Cn],
            Rn[Cn] = null,
            js = Rn[--Cn],
            Rn[Cn] = null;
        for (; e === xa; )
            xa = zt[--Mt],
            zt[Mt] = null,
            Qt = zt[--Mt],
            zt[Mt] = null,
            Jt = zt[--Mt],
            zt[Mt] = null
    }
    function td(e, t) {
        zt[Mt++] = Jt,
        zt[Mt++] = Qt,
        zt[Mt++] = xa,
        Jt = t.id,
        Qt = t.overflow,
        xa = e
    }
    var at = null
      , ze = null
      , be = !1
      , _a = null
      , qt = !1
      , Ul = Error(l(519));
    function wa(e) {
        var t = Error(l(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
        throw Ns(Ut(t, e)),
        Ul
    }
    function ad(e) {
        var t = e.stateNode
          , a = e.type
          , s = e.memoizedProps;
        switch (t[tt] = e,
        t[dt] = s,
        a) {
        case "dialog":
            me("cancel", t),
            me("close", t);
            break;
        case "iframe":
        case "object":
        case "embed":
            me("load", t);
            break;
        case "video":
        case "audio":
            for (a = 0; a < Is.length; a++)
                me(Is[a], t);
            break;
        case "source":
            me("error", t);
            break;
        case "img":
        case "image":
        case "link":
            me("error", t),
            me("load", t);
            break;
        case "details":
            me("toggle", t);
            break;
        case "input":
            me("invalid", t),
            gc(t, s.value, s.defaultValue, s.checked, s.defaultChecked, s.type, s.name, !0);
            break;
        case "select":
            me("invalid", t);
            break;
        case "textarea":
            me("invalid", t),
            pc(t, s.value, s.defaultValue, s.children)
        }
        a = s.children,
        typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || s.suppressHydrationWarning === !0 || xf(t.textContent, a) ? (s.popover != null && (me("beforetoggle", t),
        me("toggle", t)),
        s.onScroll != null && me("scroll", t),
        s.onScrollEnd != null && me("scrollend", t),
        s.onClick != null && (t.onclick = Wt),
        t = !0) : t = !1,
        t || wa(e, !0)
    }
    function nd(e) {
        for (at = e.return; at; )
            switch (at.tag) {
            case 5:
            case 31:
            case 13:
                qt = !1;
                return;
            case 27:
            case 3:
                qt = !0;
                return;
            default:
                at = at.return
            }
    }
    function kn(e) {
        if (e !== at)
            return !1;
        if (!be)
            return nd(e),
            be = !0,
            !1;
        var t = e.tag, a;
        if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type,
        a = !(a !== "form" && a !== "button") || Fo(e.type, e.memoizedProps)),
        a = !a),
        a && ze && wa(e),
        nd(e),
        t === 13) {
            if (e = e.memoizedState,
            e = e !== null ? e.dehydrated : null,
            !e)
                throw Error(l(317));
            ze = Of(e)
        } else if (t === 31) {
            if (e = e.memoizedState,
            e = e !== null ? e.dehydrated : null,
            !e)
                throw Error(l(317));
            ze = Of(e)
        } else
            t === 27 ? (t = ze,
            Ma(e.type) ? (e = su,
            su = null,
            ze = e) : ze = t) : ze = at ? Lt(e.stateNode.nextSibling) : null;
        return !0
    }
    function Wa() {
        ze = at = null,
        be = !1
    }
    function zl() {
        var e = _a;
        return e !== null && (yt === null ? yt = e : yt.push.apply(yt, e),
        _a = null),
        e
    }
    function Ns(e) {
        _a === null ? _a = [e] : _a.push(e)
    }
    var Ml = S(null)
      , Fa = null
      , aa = null;
    function Sa(e, t, a) {
        Q(Ml, t._currentValue),
        t._currentValue = a
    }
    function na(e) {
        e._currentValue = Ml.current,
        $(Ml)
    }
    function ql(e, t, a) {
        for (; e !== null; ) {
            var s = e.alternate;
            if ((e.childLanes & t) !== t ? (e.childLanes |= t,
            s !== null && (s.childLanes |= t)) : s !== null && (s.childLanes & t) !== t && (s.childLanes |= t),
            e === a)
                break;
            e = e.return
        }
    }
    function Bl(e, t, a, s) {
        var o = e.child;
        for (o !== null && (o.return = e); o !== null; ) {
            var u = o.dependencies;
            if (u !== null) {
                var m = o.child;
                u = u.firstContext;
                e: for (; u !== null; ) {
                    var b = u;
                    u = o;
                    for (var x = 0; x < t.length; x++)
                        if (b.context === t[x]) {
                            u.lanes |= a,
                            b = u.alternate,
                            b !== null && (b.lanes |= a),
                            ql(u.return, a, e),
                            s || (m = null);
                            break e
                        }
                    u = b.next
                }
            } else if (o.tag === 18) {
                if (m = o.return,
                m === null)
                    throw Error(l(341));
                m.lanes |= a,
                u = m.alternate,
                u !== null && (u.lanes |= a),
                ql(m, a, e),
                m = null
            } else
                m = o.child;
            if (m !== null)
                m.return = o;
            else
                for (m = o; m !== null; ) {
                    if (m === e) {
                        m = null;
                        break
                    }
                    if (o = m.sibling,
                    o !== null) {
                        o.return = m.return,
                        m = o;
                        break
                    }
                    m = m.return
                }
            o = m
        }
    }
    function Dn(e, t, a, s) {
        e = null;
        for (var o = t, u = !1; o !== null; ) {
            if (!u) {
                if ((o.flags & 524288) !== 0)
                    u = !0;
                else if ((o.flags & 262144) !== 0)
                    break
            }
            if (o.tag === 10) {
                var m = o.alternate;
                if (m === null)
                    throw Error(l(387));
                if (m = m.memoizedProps,
                m !== null) {
                    var b = o.type;
                    _t(o.pendingProps.value, m.value) || (e !== null ? e.push(b) : e = [b])
                }
            } else if (o === Ee.current) {
                if (m = o.alternate,
                m === null)
                    throw Error(l(387));
                m.memoizedState.memoizedState !== o.memoizedState.memoizedState && (e !== null ? e.push(er) : e = [er])
            }
            o = o.return
        }
        e !== null && Bl(t, e, a, s),
        t.flags |= 262144
    }
    function $r(e) {
        for (e = e.firstContext; e !== null; ) {
            if (!_t(e.context._currentValue, e.memoizedValue))
                return !0;
            e = e.next
        }
        return !1
    }
    function en(e) {
        Fa = e,
        aa = null,
        e = e.dependencies,
        e !== null && (e.firstContext = null)
    }
    function nt(e) {
        return sd(Fa, e)
    }
    function Gr(e, t) {
        return Fa === null && en(e),
        sd(e, t)
    }
    function sd(e, t) {
        var a = t._currentValue;
        if (t = {
            context: t,
            memoizedValue: a,
            next: null
        },
        aa === null) {
            if (e === null)
                throw Error(l(308));
            aa = t,
            e.dependencies = {
                lanes: 0,
                firstContext: t
            },
            e.flags |= 524288
        } else
            aa = aa.next = t;
        return a
    }
    var y0 = typeof AbortController < "u" ? AbortController : function() {
        var e = []
          , t = this.signal = {
            aborted: !1,
            addEventListener: function(a, s) {
                e.push(s)
            }
        };
        this.abort = function() {
            t.aborted = !0,
            e.forEach(function(a) {
                return a()
            })
        }
    }
      , p0 = r.unstable_scheduleCallback
      , b0 = r.unstable_NormalPriority
      , Xe = {
        $$typeof: G,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0
    };
    function Ll() {
        return {
            controller: new y0,
            data: new Map,
            refCount: 0
        }
    }
    function As(e) {
        e.refCount--,
        e.refCount === 0 && p0(b0, function() {
            e.controller.abort()
        })
    }
    var Os = null
      , Hl = 0
      , Un = 0
      , zn = null;
    function v0(e, t) {
        if (Os === null) {
            var a = Os = [];
            Hl = 0,
            Un = Yo(),
            zn = {
                status: "pending",
                value: void 0,
                then: function(s) {
                    a.push(s)
                }
            }
        }
        return Hl++,
        t.then(rd, rd),
        t
    }
    function rd() {
        if (--Hl === 0 && Os !== null) {
            zn !== null && (zn.status = "fulfilled");
            var e = Os;
            Os = null,
            Un = 0,
            zn = null;
            for (var t = 0; t < e.length; t++)
                (0,
                e[t])()
        }
    }
    function x0(e, t) {
        var a = []
          , s = {
            status: "pending",
            value: null,
            reason: null,
            then: function(o) {
                a.push(o)
            }
        };
        return e.then(function() {
            s.status = "fulfilled",
            s.value = t;
            for (var o = 0; o < a.length; o++)
                (0,
                a[o])(t)
        }, function(o) {
            for (s.status = "rejected",
            s.reason = o,
            o = 0; o < a.length; o++)
                (0,
                a[o])(void 0)
        }),
        s
    }
    var id = D.S;
    D.S = function(e, t) {
        Vh = bt(),
        typeof t == "object" && t !== null && typeof t.then == "function" && v0(e, t),
        id !== null && id(e, t)
    }
    ;
    var tn = S(null);
    function $l() {
        var e = tn.current;
        return e !== null ? e : ke.pooledCache
    }
    function Vr(e, t) {
        t === null ? Q(tn, tn.current) : Q(tn, t.pool)
    }
    function ld() {
        var e = $l();
        return e === null ? null : {
            parent: Xe._currentValue,
            pool: e
        }
    }
    var Mn = Error(l(460))
      , Gl = Error(l(474))
      , Yr = Error(l(542))
      , Kr = {
        then: function() {}
    };
    function od(e) {
        return e = e.status,
        e === "fulfilled" || e === "rejected"
    }
    function ud(e, t, a) {
        switch (a = e[a],
        a === void 0 ? e.push(t) : a !== t && (t.then(Wt, Wt),
        t = a),
        t.status) {
        case "fulfilled":
            return t.value;
        case "rejected":
            throw e = t.reason,
            dd(e),
            e;
        default:
            if (typeof t.status == "string")
                t.then(Wt, Wt);
            else {
                if (e = ke,
                e !== null && 100 < e.shellSuspendCounter)
                    throw Error(l(482));
                e = t,
                e.status = "pending",
                e.then(function(s) {
                    if (t.status === "pending") {
                        var o = t;
                        o.status = "fulfilled",
                        o.value = s
                    }
                }, function(s) {
                    if (t.status === "pending") {
                        var o = t;
                        o.status = "rejected",
                        o.reason = s
                    }
                })
            }
            switch (t.status) {
            case "fulfilled":
                return t.value;
            case "rejected":
                throw e = t.reason,
                dd(e),
                e
            }
            throw nn = t,
            Mn
        }
    }
    function an(e) {
        try {
            var t = e._init;
            return t(e._payload)
        } catch (a) {
            throw a !== null && typeof a == "object" && typeof a.then == "function" ? (nn = a,
            Mn) : a
        }
    }
    var nn = null;
    function cd() {
        if (nn === null)
            throw Error(l(459));
        var e = nn;
        return nn = null,
        e
    }
    function dd(e) {
        if (e === Mn || e === Yr)
            throw Error(l(483))
    }
    var qn = null
      , Rs = 0;
    function Xr(e) {
        var t = Rs;
        return Rs += 1,
        qn === null && (qn = []),
        ud(qn, e, t)
    }
    function Cs(e, t) {
        t = t.props.ref,
        e.ref = t !== void 0 ? t : null
    }
    function Jr(e, t) {
        throw t.$$typeof === E ? Error(l(525)) : (e = Object.prototype.toString.call(t),
        Error(l(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)))
    }
    function hd(e) {
        function t(N, w) {
            if (e) {
                var A = N.deletions;
                A === null ? (N.deletions = [w],
                N.flags |= 16) : A.push(w)
            }
        }
        function a(N, w) {
            if (!e)
                return null;
            for (; w !== null; )
                t(N, w),
                w = w.sibling;
            return null
        }
        function s(N) {
            for (var w = new Map; N !== null; )
                N.key !== null ? w.set(N.key, N) : w.set(N.index, N),
                N = N.sibling;
            return w
        }
        function o(N, w) {
            return N = ea(N, w),
            N.index = 0,
            N.sibling = null,
            N
        }
        function u(N, w, A) {
            return N.index = A,
            e ? (A = N.alternate,
            A !== null ? (A = A.index,
            A < w ? (N.flags |= 67108866,
            w) : A) : (N.flags |= 67108866,
            w)) : (N.flags |= 1048576,
            w)
        }
        function m(N) {
            return e && N.alternate === null && (N.flags |= 67108866),
            N
        }
        function b(N, w, A, B) {
            return w === null || w.tag !== 6 ? (w = Rl(A, N.mode, B),
            w.return = N,
            w) : (w = o(w, A),
            w.return = N,
            w)
        }
        function x(N, w, A, B) {
            var ee = A.type;
            return ee === C ? M(N, w, A.props.children, B, A.key) : w !== null && (w.elementType === ee || typeof ee == "object" && ee !== null && ee.$$typeof === oe && an(ee) === w.type) ? (w = o(w, A.props),
            Cs(w, A),
            w.return = N,
            w) : (w = Lr(A.type, A.key, A.props, null, N.mode, B),
            Cs(w, A),
            w.return = N,
            w)
        }
        function O(N, w, A, B) {
            return w === null || w.tag !== 4 || w.stateNode.containerInfo !== A.containerInfo || w.stateNode.implementation !== A.implementation ? (w = Cl(A, N.mode, B),
            w.return = N,
            w) : (w = o(w, A.children || []),
            w.return = N,
            w)
        }
        function M(N, w, A, B, ee) {
            return w === null || w.tag !== 7 ? (w = Pa(A, N.mode, B, ee),
            w.return = N,
            w) : (w = o(w, A),
            w.return = N,
            w)
        }
        function H(N, w, A) {
            if (typeof w == "string" && w !== "" || typeof w == "number" || typeof w == "bigint")
                return w = Rl("" + w, N.mode, A),
                w.return = N,
                w;
            if (typeof w == "object" && w !== null) {
                switch (w.$$typeof) {
                case _:
                    return A = Lr(w.type, w.key, w.props, null, N.mode, A),
                    Cs(A, w),
                    A.return = N,
                    A;
                case T:
                    return w = Cl(w, N.mode, A),
                    w.return = N,
                    w;
                case oe:
                    return w = an(w),
                    H(N, w, A)
                }
                if (de(w) || q(w))
                    return w = Pa(w, N.mode, A, null),
                    w.return = N,
                    w;
                if (typeof w.then == "function")
                    return H(N, Xr(w), A);
                if (w.$$typeof === G)
                    return H(N, Gr(N, w), A);
                Jr(N, w)
            }
            return null
        }
        function R(N, w, A, B) {
            var ee = w !== null ? w.key : null;
            if (typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint")
                return ee !== null ? null : b(N, w, "" + A, B);
            if (typeof A == "object" && A !== null) {
                switch (A.$$typeof) {
                case _:
                    return A.key === ee ? x(N, w, A, B) : null;
                case T:
                    return A.key === ee ? O(N, w, A, B) : null;
                case oe:
                    return A = an(A),
                    R(N, w, A, B)
                }
                if (de(A) || q(A))
                    return ee !== null ? null : M(N, w, A, B, null);
                if (typeof A.then == "function")
                    return R(N, w, Xr(A), B);
                if (A.$$typeof === G)
                    return R(N, w, Gr(N, A), B);
                Jr(N, A)
            }
            return null
        }
        function k(N, w, A, B, ee) {
            if (typeof B == "string" && B !== "" || typeof B == "number" || typeof B == "bigint")
                return N = N.get(A) || null,
                b(w, N, "" + B, ee);
            if (typeof B == "object" && B !== null) {
                switch (B.$$typeof) {
                case _:
                    return N = N.get(B.key === null ? A : B.key) || null,
                    x(w, N, B, ee);
                case T:
                    return N = N.get(B.key === null ? A : B.key) || null,
                    O(w, N, B, ee);
                case oe:
                    return B = an(B),
                    k(N, w, A, B, ee)
                }
                if (de(B) || q(B))
                    return N = N.get(A) || null,
                    M(w, N, B, ee, null);
                if (typeof B.then == "function")
                    return k(N, w, A, Xr(B), ee);
                if (B.$$typeof === G)
                    return k(N, w, A, Gr(w, B), ee);
                Jr(w, B)
            }
            return null
        }
        function Z(N, w, A, B) {
            for (var ee = null, ve = null, W = w, ue = w = 0, pe = null; W !== null && ue < A.length; ue++) {
                W.index > ue ? (pe = W,
                W = null) : pe = W.sibling;
                var xe = R(N, W, A[ue], B);
                if (xe === null) {
                    W === null && (W = pe);
                    break
                }
                e && W && xe.alternate === null && t(N, W),
                w = u(xe, w, ue),
                ve === null ? ee = xe : ve.sibling = xe,
                ve = xe,
                W = pe
            }
            if (ue === A.length)
                return a(N, W),
                be && ta(N, ue),
                ee;
            if (W === null) {
                for (; ue < A.length; ue++)
                    W = H(N, A[ue], B),
                    W !== null && (w = u(W, w, ue),
                    ve === null ? ee = W : ve.sibling = W,
                    ve = W);
                return be && ta(N, ue),
                ee
            }
            for (W = s(W); ue < A.length; ue++)
                pe = k(W, N, ue, A[ue], B),
                pe !== null && (e && pe.alternate !== null && W.delete(pe.key === null ? ue : pe.key),
                w = u(pe, w, ue),
                ve === null ? ee = pe : ve.sibling = pe,
                ve = pe);
            return e && W.forEach(function($a) {
                return t(N, $a)
            }),
            be && ta(N, ue),
            ee
        }
        function ae(N, w, A, B) {
            if (A == null)
                throw Error(l(151));
            for (var ee = null, ve = null, W = w, ue = w = 0, pe = null, xe = A.next(); W !== null && !xe.done; ue++,
            xe = A.next()) {
                W.index > ue ? (pe = W,
                W = null) : pe = W.sibling;
                var $a = R(N, W, xe.value, B);
                if ($a === null) {
                    W === null && (W = pe);
                    break
                }
                e && W && $a.alternate === null && t(N, W),
                w = u($a, w, ue),
                ve === null ? ee = $a : ve.sibling = $a,
                ve = $a,
                W = pe
            }
            if (xe.done)
                return a(N, W),
                be && ta(N, ue),
                ee;
            if (W === null) {
                for (; !xe.done; ue++,
                xe = A.next())
                    xe = H(N, xe.value, B),
                    xe !== null && (w = u(xe, w, ue),
                    ve === null ? ee = xe : ve.sibling = xe,
                    ve = xe);
                return be && ta(N, ue),
                ee
            }
            for (W = s(W); !xe.done; ue++,
            xe = A.next())
                xe = k(W, N, ue, xe.value, B),
                xe !== null && (e && xe.alternate !== null && W.delete(xe.key === null ? ue : xe.key),
                w = u(xe, w, ue),
                ve === null ? ee = xe : ve.sibling = xe,
                ve = xe);
            return e && W.forEach(function(Cy) {
                return t(N, Cy)
            }),
            be && ta(N, ue),
            ee
        }
        function Ce(N, w, A, B) {
            if (typeof A == "object" && A !== null && A.type === C && A.key === null && (A = A.props.children),
            typeof A == "object" && A !== null) {
                switch (A.$$typeof) {
                case _:
                    e: {
                        for (var ee = A.key; w !== null; ) {
                            if (w.key === ee) {
                                if (ee = A.type,
                                ee === C) {
                                    if (w.tag === 7) {
                                        a(N, w.sibling),
                                        B = o(w, A.props.children),
                                        B.return = N,
                                        N = B;
                                        break e
                                    }
                                } else if (w.elementType === ee || typeof ee == "object" && ee !== null && ee.$$typeof === oe && an(ee) === w.type) {
                                    a(N, w.sibling),
                                    B = o(w, A.props),
                                    Cs(B, A),
                                    B.return = N,
                                    N = B;
                                    break e
                                }
                                a(N, w);
                                break
                            } else
                                t(N, w);
                            w = w.sibling
                        }
                        A.type === C ? (B = Pa(A.props.children, N.mode, B, A.key),
                        B.return = N,
                        N = B) : (B = Lr(A.type, A.key, A.props, null, N.mode, B),
                        Cs(B, A),
                        B.return = N,
                        N = B)
                    }
                    return m(N);
                case T:
                    e: {
                        for (ee = A.key; w !== null; ) {
                            if (w.key === ee)
                                if (w.tag === 4 && w.stateNode.containerInfo === A.containerInfo && w.stateNode.implementation === A.implementation) {
                                    a(N, w.sibling),
                                    B = o(w, A.children || []),
                                    B.return = N,
                                    N = B;
                                    break e
                                } else {
                                    a(N, w);
                                    break
                                }
                            else
                                t(N, w);
                            w = w.sibling
                        }
                        B = Cl(A, N.mode, B),
                        B.return = N,
                        N = B
                    }
                    return m(N);
                case oe:
                    return A = an(A),
                    Ce(N, w, A, B)
                }
                if (de(A))
                    return Z(N, w, A, B);
                if (q(A)) {
                    if (ee = q(A),
                    typeof ee != "function")
                        throw Error(l(150));
                    return A = ee.call(A),
                    ae(N, w, A, B)
                }
                if (typeof A.then == "function")
                    return Ce(N, w, Xr(A), B);
                if (A.$$typeof === G)
                    return Ce(N, w, Gr(N, A), B);
                Jr(N, A)
            }
            return typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint" ? (A = "" + A,
            w !== null && w.tag === 6 ? (a(N, w.sibling),
            B = o(w, A),
            B.return = N,
            N = B) : (a(N, w),
            B = Rl(A, N.mode, B),
            B.return = N,
            N = B),
            m(N)) : a(N, w)
        }
        return function(N, w, A, B) {
            try {
                Rs = 0;
                var ee = Ce(N, w, A, B);
                return qn = null,
                ee
            } catch (W) {
                if (W === Mn || W === Yr)
                    throw W;
                var ve = wt(29, W, null, N.mode);
                return ve.lanes = B,
                ve.return = N,
                ve
            }
        }
    }
    var sn = hd(!0)
      , fd = hd(!1)
      , Ea = !1;
    function Vl(e) {
        e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                lanes: 0,
                hiddenCallbacks: null
            },
            callbacks: null
        }
    }
    function Yl(e, t) {
        e = e.updateQueue,
        t.updateQueue === e && (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            callbacks: null
        })
    }
    function Ta(e) {
        return {
            lane: e,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }
    function ja(e, t, a) {
        var s = e.updateQueue;
        if (s === null)
            return null;
        if (s = s.shared,
        (we & 2) !== 0) {
            var o = s.pending;
            return o === null ? t.next = t : (t.next = o.next,
            o.next = t),
            s.pending = t,
            t = Br(e),
            Zc(e, null, a),
            t
        }
        return qr(e, s, t, a),
        Br(e)
    }
    function ks(e, t, a) {
        if (t = t.updateQueue,
        t !== null && (t = t.shared,
        (a & 4194048) !== 0)) {
            var s = t.lanes;
            s &= e.pendingLanes,
            a |= s,
            t.lanes = a,
            sc(e, a)
        }
    }
    function Kl(e, t) {
        var a = e.updateQueue
          , s = e.alternate;
        if (s !== null && (s = s.updateQueue,
        a === s)) {
            var o = null
              , u = null;
            if (a = a.firstBaseUpdate,
            a !== null) {
                do {
                    var m = {
                        lane: a.lane,
                        tag: a.tag,
                        payload: a.payload,
                        callback: null,
                        next: null
                    };
                    u === null ? o = u = m : u = u.next = m,
                    a = a.next
                } while (a !== null);
                u === null ? o = u = t : u = u.next = t
            } else
                o = u = t;
            a = {
                baseState: s.baseState,
                firstBaseUpdate: o,
                lastBaseUpdate: u,
                shared: s.shared,
                callbacks: s.callbacks
            },
            e.updateQueue = a;
            return
        }
        e = a.lastBaseUpdate,
        e === null ? a.firstBaseUpdate = t : e.next = t,
        a.lastBaseUpdate = t
    }
    var Xl = !1;
    function Ds() {
        if (Xl) {
            var e = zn;
            if (e !== null)
                throw e
        }
    }
    function Us(e, t, a, s) {
        Xl = !1;
        var o = e.updateQueue;
        Ea = !1;
        var u = o.firstBaseUpdate
          , m = o.lastBaseUpdate
          , b = o.shared.pending;
        if (b !== null) {
            o.shared.pending = null;
            var x = b
              , O = x.next;
            x.next = null,
            m === null ? u = O : m.next = O,
            m = x;
            var M = e.alternate;
            M !== null && (M = M.updateQueue,
            b = M.lastBaseUpdate,
            b !== m && (b === null ? M.firstBaseUpdate = O : b.next = O,
            M.lastBaseUpdate = x))
        }
        if (u !== null) {
            var H = o.baseState;
            m = 0,
            M = O = x = null,
            b = u;
            do {
                var R = b.lane & -536870913
                  , k = R !== b.lane;
                if (k ? (ye & R) === R : (s & R) === R) {
                    R !== 0 && R === Un && (Xl = !0),
                    M !== null && (M = M.next = {
                        lane: 0,
                        tag: b.tag,
                        payload: b.payload,
                        callback: null,
                        next: null
                    });
                    e: {
                        var Z = e
                          , ae = b;
                        R = t;
                        var Ce = a;
                        switch (ae.tag) {
                        case 1:
                            if (Z = ae.payload,
                            typeof Z == "function") {
                                H = Z.call(Ce, H, R);
                                break e
                            }
                            H = Z;
                            break e;
                        case 3:
                            Z.flags = Z.flags & -65537 | 128;
                        case 0:
                            if (Z = ae.payload,
                            R = typeof Z == "function" ? Z.call(Ce, H, R) : Z,
                            R == null)
                                break e;
                            H = j({}, H, R);
                            break e;
                        case 2:
                            Ea = !0
                        }
                    }
                    R = b.callback,
                    R !== null && (e.flags |= 64,
                    k && (e.flags |= 8192),
                    k = o.callbacks,
                    k === null ? o.callbacks = [R] : k.push(R))
                } else
                    k = {
                        lane: R,
                        tag: b.tag,
                        payload: b.payload,
                        callback: b.callback,
                        next: null
                    },
                    M === null ? (O = M = k,
                    x = H) : M = M.next = k,
                    m |= R;
                if (b = b.next,
                b === null) {
                    if (b = o.shared.pending,
                    b === null)
                        break;
                    k = b,
                    b = k.next,
                    k.next = null,
                    o.lastBaseUpdate = k,
                    o.shared.pending = null
                }
            } while (!0);
            M === null && (x = H),
            o.baseState = x,
            o.firstBaseUpdate = O,
            o.lastBaseUpdate = M,
            u === null && (o.shared.lanes = 0),
            Ca |= m,
            e.lanes = m,
            e.memoizedState = H
        }
    }
    function md(e, t) {
        if (typeof e != "function")
            throw Error(l(191, e));
        e.call(t)
    }
    function gd(e, t) {
        var a = e.callbacks;
        if (a !== null)
            for (e.callbacks = null,
            e = 0; e < a.length; e++)
                md(a[e], t)
    }
    var Bn = S(null)
      , Qr = S(0);
    function yd(e, t) {
        e = ha,
        Q(Qr, e),
        Q(Bn, t),
        ha = e | t.baseLanes
    }
    function Jl() {
        Q(Qr, ha),
        Q(Bn, Bn.current)
    }
    function Ql() {
        ha = Qr.current,
        $(Bn),
        $(Qr)
    }
    var St = S(null)
      , Bt = null;
    function Na(e) {
        var t = e.alternate;
        Q(Ve, Ve.current & 1),
        Q(St, e),
        Bt === null && (t === null || Bn.current !== null || t.memoizedState !== null) && (Bt = e)
    }
    function Il(e) {
        Q(Ve, Ve.current),
        Q(St, e),
        Bt === null && (Bt = e)
    }
    function pd(e) {
        e.tag === 22 ? (Q(Ve, Ve.current),
        Q(St, e),
        Bt === null && (Bt = e)) : Aa()
    }
    function Aa() {
        Q(Ve, Ve.current),
        Q(St, St.current)
    }
    function Et(e) {
        $(St),
        Bt === e && (Bt = null),
        $(Ve)
    }
    var Ve = S(0);
    function Ir(e) {
        for (var t = e; t !== null; ) {
            if (t.tag === 13) {
                var a = t.memoizedState;
                if (a !== null && (a = a.dehydrated,
                a === null || au(a) || nu(a)))
                    return t
            } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
                if ((t.flags & 128) !== 0)
                    return t
            } else if (t.child !== null) {
                t.child.return = t,
                t = t.child;
                continue
            }
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return null;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
        return null
    }
    var sa = 0
      , le = null
      , Oe = null
      , Je = null
      , Zr = !1
      , Ln = !1
      , rn = !1
      , Pr = 0
      , zs = 0
      , Hn = null
      , _0 = 0;
    function Le() {
        throw Error(l(321))
    }
    function Zl(e, t) {
        if (t === null)
            return !1;
        for (var a = 0; a < t.length && a < e.length; a++)
            if (!_t(e[a], t[a]))
                return !1;
        return !0
    }
    function Pl(e, t, a, s, o, u) {
        return sa = u,
        le = t,
        t.memoizedState = null,
        t.updateQueue = null,
        t.lanes = 0,
        D.H = e === null || e.memoizedState === null ? eh : fo,
        rn = !1,
        u = a(s, o),
        rn = !1,
        Ln && (u = vd(t, a, s, o)),
        bd(e),
        u
    }
    function bd(e) {
        D.H = Bs;
        var t = Oe !== null && Oe.next !== null;
        if (sa = 0,
        Je = Oe = le = null,
        Zr = !1,
        zs = 0,
        Hn = null,
        t)
            throw Error(l(300));
        e === null || Qe || (e = e.dependencies,
        e !== null && $r(e) && (Qe = !0))
    }
    function vd(e, t, a, s) {
        le = e;
        var o = 0;
        do {
            if (Ln && (Hn = null),
            zs = 0,
            Ln = !1,
            25 <= o)
                throw Error(l(301));
            if (o += 1,
            Je = Oe = null,
            e.updateQueue != null) {
                var u = e.updateQueue;
                u.lastEffect = null,
                u.events = null,
                u.stores = null,
                u.memoCache != null && (u.memoCache.index = 0)
            }
            D.H = th,
            u = t(a, s)
        } while (Ln);
        return u
    }
    function w0() {
        var e = D.H
          , t = e.useState()[0];
        return t = typeof t.then == "function" ? Ms(t) : t,
        e = e.useState()[0],
        (Oe !== null ? Oe.memoizedState : null) !== e && (le.flags |= 1024),
        t
    }
    function Wl() {
        var e = Pr !== 0;
        return Pr = 0,
        e
    }
    function Fl(e, t, a) {
        t.updateQueue = e.updateQueue,
        t.flags &= -2053,
        e.lanes &= ~a
    }
    function eo(e) {
        if (Zr) {
            for (e = e.memoizedState; e !== null; ) {
                var t = e.queue;
                t !== null && (t.pending = null),
                e = e.next
            }
            Zr = !1
        }
        sa = 0,
        Je = Oe = le = null,
        Ln = !1,
        zs = Pr = 0,
        Hn = null
    }
    function ct() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return Je === null ? le.memoizedState = Je = e : Je = Je.next = e,
        Je
    }
    function Ye() {
        if (Oe === null) {
            var e = le.alternate;
            e = e !== null ? e.memoizedState : null
        } else
            e = Oe.next;
        var t = Je === null ? le.memoizedState : Je.next;
        if (t !== null)
            Je = t,
            Oe = e;
        else {
            if (e === null)
                throw le.alternate === null ? Error(l(467)) : Error(l(310));
            Oe = e,
            e = {
                memoizedState: Oe.memoizedState,
                baseState: Oe.baseState,
                baseQueue: Oe.baseQueue,
                queue: Oe.queue,
                next: null
            },
            Je === null ? le.memoizedState = Je = e : Je = Je.next = e
        }
        return Je
    }
    function Wr() {
        return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
        }
    }
    function Ms(e) {
        var t = zs;
        return zs += 1,
        Hn === null && (Hn = []),
        e = ud(Hn, e, t),
        t = le,
        (Je === null ? t.memoizedState : Je.next) === null && (t = t.alternate,
        D.H = t === null || t.memoizedState === null ? eh : fo),
        e
    }
    function Fr(e) {
        if (e !== null && typeof e == "object") {
            if (typeof e.then == "function")
                return Ms(e);
            if (e.$$typeof === G)
                return nt(e)
        }
        throw Error(l(438, String(e)))
    }
    function to(e) {
        var t = null
          , a = le.updateQueue;
        if (a !== null && (t = a.memoCache),
        t == null) {
            var s = le.alternate;
            s !== null && (s = s.updateQueue,
            s !== null && (s = s.memoCache,
            s != null && (t = {
                data: s.data.map(function(o) {
                    return o.slice()
                }),
                index: 0
            })))
        }
        if (t == null && (t = {
            data: [],
            index: 0
        }),
        a === null && (a = Wr(),
        le.updateQueue = a),
        a.memoCache = t,
        a = t.data[t.index],
        a === void 0)
            for (a = t.data[t.index] = Array(e),
            s = 0; s < e; s++)
                a[s] = ce;
        return t.index++,
        a
    }
    function ra(e, t) {
        return typeof t == "function" ? t(e) : t
    }
    function ei(e) {
        var t = Ye();
        return ao(t, Oe, e)
    }
    function ao(e, t, a) {
        var s = e.queue;
        if (s === null)
            throw Error(l(311));
        s.lastRenderedReducer = a;
        var o = e.baseQueue
          , u = s.pending;
        if (u !== null) {
            if (o !== null) {
                var m = o.next;
                o.next = u.next,
                u.next = m
            }
            t.baseQueue = o = u,
            s.pending = null
        }
        if (u = e.baseState,
        o === null)
            e.memoizedState = u;
        else {
            t = o.next;
            var b = m = null
              , x = null
              , O = t
              , M = !1;
            do {
                var H = O.lane & -536870913;
                if (H !== O.lane ? (ye & H) === H : (sa & H) === H) {
                    var R = O.revertLane;
                    if (R === 0)
                        x !== null && (x = x.next = {
                            lane: 0,
                            revertLane: 0,
                            gesture: null,
                            action: O.action,
                            hasEagerState: O.hasEagerState,
                            eagerState: O.eagerState,
                            next: null
                        }),
                        H === Un && (M = !0);
                    else if ((sa & R) === R) {
                        O = O.next,
                        R === Un && (M = !0);
                        continue
                    } else
                        H = {
                            lane: 0,
                            revertLane: O.revertLane,
                            gesture: null,
                            action: O.action,
                            hasEagerState: O.hasEagerState,
                            eagerState: O.eagerState,
                            next: null
                        },
                        x === null ? (b = x = H,
                        m = u) : x = x.next = H,
                        le.lanes |= R,
                        Ca |= R;
                    H = O.action,
                    rn && a(u, H),
                    u = O.hasEagerState ? O.eagerState : a(u, H)
                } else
                    R = {
                        lane: H,
                        revertLane: O.revertLane,
                        gesture: O.gesture,
                        action: O.action,
                        hasEagerState: O.hasEagerState,
                        eagerState: O.eagerState,
                        next: null
                    },
                    x === null ? (b = x = R,
                    m = u) : x = x.next = R,
                    le.lanes |= H,
                    Ca |= H;
                O = O.next
            } while (O !== null && O !== t);
            if (x === null ? m = u : x.next = b,
            !_t(u, e.memoizedState) && (Qe = !0,
            M && (a = zn,
            a !== null)))
                throw a;
            e.memoizedState = u,
            e.baseState = m,
            e.baseQueue = x,
            s.lastRenderedState = u
        }
        return o === null && (s.lanes = 0),
        [e.memoizedState, s.dispatch]
    }
    function no(e) {
        var t = Ye()
          , a = t.queue;
        if (a === null)
            throw Error(l(311));
        a.lastRenderedReducer = e;
        var s = a.dispatch
          , o = a.pending
          , u = t.memoizedState;
        if (o !== null) {
            a.pending = null;
            var m = o = o.next;
            do
                u = e(u, m.action),
                m = m.next;
            while (m !== o);
            _t(u, t.memoizedState) || (Qe = !0),
            t.memoizedState = u,
            t.baseQueue === null && (t.baseState = u),
            a.lastRenderedState = u
        }
        return [u, s]
    }
    function xd(e, t, a) {
        var s = le
          , o = Ye()
          , u = be;
        if (u) {
            if (a === void 0)
                throw Error(l(407));
            a = a()
        } else
            a = t();
        var m = !_t((Oe || o).memoizedState, a);
        if (m && (o.memoizedState = a,
        Qe = !0),
        o = o.queue,
        io(Sd.bind(null, s, o, e), [e]),
        o.getSnapshot !== t || m || Je !== null && Je.memoizedState.tag & 1) {
            if (s.flags |= 2048,
            $n(9, {
                destroy: void 0
            }, wd.bind(null, s, o, a, t), null),
            ke === null)
                throw Error(l(349));
            u || (sa & 127) !== 0 || _d(s, t, a)
        }
        return a
    }
    function _d(e, t, a) {
        e.flags |= 16384,
        e = {
            getSnapshot: t,
            value: a
        },
        t = le.updateQueue,
        t === null ? (t = Wr(),
        le.updateQueue = t,
        t.stores = [e]) : (a = t.stores,
        a === null ? t.stores = [e] : a.push(e))
    }
    function wd(e, t, a, s) {
        t.value = a,
        t.getSnapshot = s,
        Ed(t) && Td(e)
    }
    function Sd(e, t, a) {
        return a(function() {
            Ed(t) && Td(e)
        })
    }
    function Ed(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var a = t();
            return !_t(e, a)
        } catch {
            return !0
        }
    }
    function Td(e) {
        var t = Za(e, 2);
        t !== null && pt(t, e, 2)
    }
    function so(e) {
        var t = ct();
        if (typeof e == "function") {
            var a = e;
            if (e = a(),
            rn) {
                pa(!0);
                try {
                    a()
                } finally {
                    pa(!1)
                }
            }
        }
        return t.memoizedState = t.baseState = e,
        t.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: ra,
            lastRenderedState: e
        },
        t
    }
    function jd(e, t, a, s) {
        return e.baseState = a,
        ao(e, Oe, typeof s == "function" ? s : ra)
    }
    function S0(e, t, a, s, o) {
        if (ni(e))
            throw Error(l(485));
        if (e = t.action,
        e !== null) {
            var u = {
                payload: o,
                action: e,
                next: null,
                isTransition: !0,
                status: "pending",
                value: null,
                reason: null,
                listeners: [],
                then: function(m) {
                    u.listeners.push(m)
                }
            };
            D.T !== null ? a(!0) : u.isTransition = !1,
            s(u),
            a = t.pending,
            a === null ? (u.next = t.pending = u,
            Nd(t, u)) : (u.next = a.next,
            t.pending = a.next = u)
        }
    }
    function Nd(e, t) {
        var a = t.action
          , s = t.payload
          , o = e.state;
        if (t.isTransition) {
            var u = D.T
              , m = {};
            D.T = m;
            try {
                var b = a(o, s)
                  , x = D.S;
                x !== null && x(m, b),
                Ad(e, t, b)
            } catch (O) {
                ro(e, t, O)
            } finally {
                u !== null && m.types !== null && (u.types = m.types),
                D.T = u
            }
        } else
            try {
                u = a(o, s),
                Ad(e, t, u)
            } catch (O) {
                ro(e, t, O)
            }
    }
    function Ad(e, t, a) {
        a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(function(s) {
            Od(e, t, s)
        }, function(s) {
            return ro(e, t, s)
        }) : Od(e, t, a)
    }
    function Od(e, t, a) {
        t.status = "fulfilled",
        t.value = a,
        Rd(t),
        e.state = a,
        t = e.pending,
        t !== null && (a = t.next,
        a === t ? e.pending = null : (a = a.next,
        t.next = a,
        Nd(e, a)))
    }
    function ro(e, t, a) {
        var s = e.pending;
        if (e.pending = null,
        s !== null) {
            s = s.next;
            do
                t.status = "rejected",
                t.reason = a,
                Rd(t),
                t = t.next;
            while (t !== s)
        }
        e.action = null
    }
    function Rd(e) {
        e = e.listeners;
        for (var t = 0; t < e.length; t++)
            (0,
            e[t])()
    }
    function Cd(e, t) {
        return t
    }
    function kd(e, t) {
        if (be) {
            var a = ke.formState;
            if (a !== null) {
                e: {
                    var s = le;
                    if (be) {
                        if (ze) {
                            t: {
                                for (var o = ze, u = qt; o.nodeType !== 8; ) {
                                    if (!u) {
                                        o = null;
                                        break t
                                    }
                                    if (o = Lt(o.nextSibling),
                                    o === null) {
                                        o = null;
                                        break t
                                    }
                                }
                                u = o.data,
                                o = u === "F!" || u === "F" ? o : null
                            }
                            if (o) {
                                ze = Lt(o.nextSibling),
                                s = o.data === "F!";
                                break e
                            }
                        }
                        wa(s)
                    }
                    s = !1
                }
                s && (t = a[0])
            }
        }
        return a = ct(),
        a.memoizedState = a.baseState = t,
        s = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Cd,
            lastRenderedState: t
        },
        a.queue = s,
        a = Pd.bind(null, le, s),
        s.dispatch = a,
        s = so(!1),
        u = ho.bind(null, le, !1, s.queue),
        s = ct(),
        o = {
            state: t,
            dispatch: null,
            action: e,
            pending: null
        },
        s.queue = o,
        a = S0.bind(null, le, o, u, a),
        o.dispatch = a,
        s.memoizedState = e,
        [t, a, !1]
    }
    function Dd(e) {
        var t = Ye();
        return Ud(t, Oe, e)
    }
    function Ud(e, t, a) {
        if (t = ao(e, t, Cd)[0],
        e = ei(ra)[0],
        typeof t == "object" && t !== null && typeof t.then == "function")
            try {
                var s = Ms(t)
            } catch (m) {
                throw m === Mn ? Yr : m
            }
        else
            s = t;
        t = Ye();
        var o = t.queue
          , u = o.dispatch;
        return a !== t.memoizedState && (le.flags |= 2048,
        $n(9, {
            destroy: void 0
        }, E0.bind(null, o, a), null)),
        [s, u, e]
    }
    function E0(e, t) {
        e.action = t
    }
    function zd(e) {
        var t = Ye()
          , a = Oe;
        if (a !== null)
            return Ud(t, a, e);
        Ye(),
        t = t.memoizedState,
        a = Ye();
        var s = a.queue.dispatch;
        return a.memoizedState = e,
        [t, s, !1]
    }
    function $n(e, t, a, s) {
        return e = {
            tag: e,
            create: a,
            deps: s,
            inst: t,
            next: null
        },
        t = le.updateQueue,
        t === null && (t = Wr(),
        le.updateQueue = t),
        a = t.lastEffect,
        a === null ? t.lastEffect = e.next = e : (s = a.next,
        a.next = e,
        e.next = s,
        t.lastEffect = e),
        e
    }
    function Md() {
        return Ye().memoizedState
    }
    function ti(e, t, a, s) {
        var o = ct();
        le.flags |= e,
        o.memoizedState = $n(1 | t, {
            destroy: void 0
        }, a, s === void 0 ? null : s)
    }
    function ai(e, t, a, s) {
        var o = Ye();
        s = s === void 0 ? null : s;
        var u = o.memoizedState.inst;
        Oe !== null && s !== null && Zl(s, Oe.memoizedState.deps) ? o.memoizedState = $n(t, u, a, s) : (le.flags |= e,
        o.memoizedState = $n(1 | t, u, a, s))
    }
    function qd(e, t) {
        ti(8390656, 8, e, t)
    }
    function io(e, t) {
        ai(2048, 8, e, t)
    }
    function T0(e) {
        le.flags |= 4;
        var t = le.updateQueue;
        if (t === null)
            t = Wr(),
            le.updateQueue = t,
            t.events = [e];
        else {
            var a = t.events;
            a === null ? t.events = [e] : a.push(e)
        }
    }
    function Bd(e) {
        var t = Ye().memoizedState;
        return T0({
            ref: t,
            nextImpl: e
        }),
        function() {
            if ((we & 2) !== 0)
                throw Error(l(440));
            return t.impl.apply(void 0, arguments)
        }
    }
    function Ld(e, t) {
        return ai(4, 2, e, t)
    }
    function Hd(e, t) {
        return ai(4, 4, e, t)
    }
    function $d(e, t) {
        if (typeof t == "function") {
            e = e();
            var a = t(e);
            return function() {
                typeof a == "function" ? a() : t(null)
            }
        }
        if (t != null)
            return e = e(),
            t.current = e,
            function() {
                t.current = null
            }
    }
    function Gd(e, t, a) {
        a = a != null ? a.concat([e]) : null,
        ai(4, 4, $d.bind(null, t, e), a)
    }
    function lo() {}
    function Vd(e, t) {
        var a = Ye();
        t = t === void 0 ? null : t;
        var s = a.memoizedState;
        return t !== null && Zl(t, s[1]) ? s[0] : (a.memoizedState = [e, t],
        e)
    }
    function Yd(e, t) {
        var a = Ye();
        t = t === void 0 ? null : t;
        var s = a.memoizedState;
        if (t !== null && Zl(t, s[1]))
            return s[0];
        if (s = e(),
        rn) {
            pa(!0);
            try {
                e()
            } finally {
                pa(!1)
            }
        }
        return a.memoizedState = [s, t],
        s
    }
    function oo(e, t, a) {
        return a === void 0 || (sa & 1073741824) !== 0 && (ye & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = a,
        e = Kh(),
        le.lanes |= e,
        Ca |= e,
        a)
    }
    function Kd(e, t, a, s) {
        return _t(a, t) ? a : Bn.current !== null ? (e = oo(e, a, s),
        _t(e, t) || (Qe = !0),
        e) : (sa & 42) === 0 || (sa & 1073741824) !== 0 && (ye & 261930) === 0 ? (Qe = !0,
        e.memoizedState = a) : (e = Kh(),
        le.lanes |= e,
        Ca |= e,
        t)
    }
    function Xd(e, t, a, s, o) {
        var u = J.p;
        J.p = u !== 0 && 8 > u ? u : 8;
        var m = D.T
          , b = {};
        D.T = b,
        ho(e, !1, t, a);
        try {
            var x = o()
              , O = D.S;
            if (O !== null && O(b, x),
            x !== null && typeof x == "object" && typeof x.then == "function") {
                var M = x0(x, s);
                qs(e, t, M, Nt(e))
            } else
                qs(e, t, s, Nt(e))
        } catch (H) {
            qs(e, t, {
                then: function() {},
                status: "rejected",
                reason: H
            }, Nt())
        } finally {
            J.p = u,
            m !== null && b.types !== null && (m.types = b.types),
            D.T = m
        }
    }
    function j0() {}
    function uo(e, t, a, s) {
        if (e.tag !== 5)
            throw Error(l(476));
        var o = Jd(e).queue;
        Xd(e, o, t, te, a === null ? j0 : function() {
            return Qd(e),
            a(s)
        }
        )
    }
    function Jd(e) {
        var t = e.memoizedState;
        if (t !== null)
            return t;
        t = {
            memoizedState: te,
            baseState: te,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: ra,
                lastRenderedState: te
            },
            next: null
        };
        var a = {};
        return t.next = {
            memoizedState: a,
            baseState: a,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: ra,
                lastRenderedState: a
            },
            next: null
        },
        e.memoizedState = t,
        e = e.alternate,
        e !== null && (e.memoizedState = t),
        t
    }
    function Qd(e) {
        var t = Jd(e);
        t.next === null && (t = e.alternate.memoizedState),
        qs(e, t.next.queue, {}, Nt())
    }
    function co() {
        return nt(er)
    }
    function Id() {
        return Ye().memoizedState
    }
    function Zd() {
        return Ye().memoizedState
    }
    function N0(e) {
        for (var t = e.return; t !== null; ) {
            switch (t.tag) {
            case 24:
            case 3:
                var a = Nt();
                e = Ta(a);
                var s = ja(t, e, a);
                s !== null && (pt(s, t, a),
                ks(s, t, a)),
                t = {
                    cache: Ll()
                },
                e.payload = t;
                return
            }
            t = t.return
        }
    }
    function A0(e, t, a) {
        var s = Nt();
        a = {
            lane: s,
            revertLane: 0,
            gesture: null,
            action: a,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        ni(e) ? Wd(t, a) : (a = Al(e, t, a, s),
        a !== null && (pt(a, e, s),
        Fd(a, t, s)))
    }
    function Pd(e, t, a) {
        var s = Nt();
        qs(e, t, a, s)
    }
    function qs(e, t, a, s) {
        var o = {
            lane: s,
            revertLane: 0,
            gesture: null,
            action: a,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (ni(e))
            Wd(t, o);
        else {
            var u = e.alternate;
            if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer,
            u !== null))
                try {
                    var m = t.lastRenderedState
                      , b = u(m, a);
                    if (o.hasEagerState = !0,
                    o.eagerState = b,
                    _t(b, m))
                        return qr(e, t, o, 0),
                        ke === null && Mr(),
                        !1
                } catch {}
            if (a = Al(e, t, o, s),
            a !== null)
                return pt(a, e, s),
                Fd(a, t, s),
                !0
        }
        return !1
    }
    function ho(e, t, a, s) {
        if (s = {
            lane: 2,
            revertLane: Yo(),
            gesture: null,
            action: s,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        ni(e)) {
            if (t)
                throw Error(l(479))
        } else
            t = Al(e, a, s, 2),
            t !== null && pt(t, e, 2)
    }
    function ni(e) {
        var t = e.alternate;
        return e === le || t !== null && t === le
    }
    function Wd(e, t) {
        Ln = Zr = !0;
        var a = e.pending;
        a === null ? t.next = t : (t.next = a.next,
        a.next = t),
        e.pending = t
    }
    function Fd(e, t, a) {
        if ((a & 4194048) !== 0) {
            var s = t.lanes;
            s &= e.pendingLanes,
            a |= s,
            t.lanes = a,
            sc(e, a)
        }
    }
    var Bs = {
        readContext: nt,
        use: Fr,
        useCallback: Le,
        useContext: Le,
        useEffect: Le,
        useImperativeHandle: Le,
        useLayoutEffect: Le,
        useInsertionEffect: Le,
        useMemo: Le,
        useReducer: Le,
        useRef: Le,
        useState: Le,
        useDebugValue: Le,
        useDeferredValue: Le,
        useTransition: Le,
        useSyncExternalStore: Le,
        useId: Le,
        useHostTransitionStatus: Le,
        useFormState: Le,
        useActionState: Le,
        useOptimistic: Le,
        useMemoCache: Le,
        useCacheRefresh: Le
    };
    Bs.useEffectEvent = Le;
    var eh = {
        readContext: nt,
        use: Fr,
        useCallback: function(e, t) {
            return ct().memoizedState = [e, t === void 0 ? null : t],
            e
        },
        useContext: nt,
        useEffect: qd,
        useImperativeHandle: function(e, t, a) {
            a = a != null ? a.concat([e]) : null,
            ti(4194308, 4, $d.bind(null, t, e), a)
        },
        useLayoutEffect: function(e, t) {
            return ti(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            ti(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var a = ct();
            t = t === void 0 ? null : t;
            var s = e();
            if (rn) {
                pa(!0);
                try {
                    e()
                } finally {
                    pa(!1)
                }
            }
            return a.memoizedState = [s, t],
            s
        },
        useReducer: function(e, t, a) {
            var s = ct();
            if (a !== void 0) {
                var o = a(t);
                if (rn) {
                    pa(!0);
                    try {
                        a(t)
                    } finally {
                        pa(!1)
                    }
                }
            } else
                o = t;
            return s.memoizedState = s.baseState = o,
            e = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: o
            },
            s.queue = e,
            e = e.dispatch = A0.bind(null, le, e),
            [s.memoizedState, e]
        },
        useRef: function(e) {
            var t = ct();
            return e = {
                current: e
            },
            t.memoizedState = e
        },
        useState: function(e) {
            e = so(e);
            var t = e.queue
              , a = Pd.bind(null, le, t);
            return t.dispatch = a,
            [e.memoizedState, a]
        },
        useDebugValue: lo,
        useDeferredValue: function(e, t) {
            var a = ct();
            return oo(a, e, t)
        },
        useTransition: function() {
            var e = so(!1);
            return e = Xd.bind(null, le, e.queue, !0, !1),
            ct().memoizedState = e,
            [!1, e]
        },
        useSyncExternalStore: function(e, t, a) {
            var s = le
              , o = ct();
            if (be) {
                if (a === void 0)
                    throw Error(l(407));
                a = a()
            } else {
                if (a = t(),
                ke === null)
                    throw Error(l(349));
                (ye & 127) !== 0 || _d(s, t, a)
            }
            o.memoizedState = a;
            var u = {
                value: a,
                getSnapshot: t
            };
            return o.queue = u,
            qd(Sd.bind(null, s, u, e), [e]),
            s.flags |= 2048,
            $n(9, {
                destroy: void 0
            }, wd.bind(null, s, u, a, t), null),
            a
        },
        useId: function() {
            var e = ct()
              , t = ke.identifierPrefix;
            if (be) {
                var a = Qt
                  , s = Jt;
                a = (s & ~(1 << 32 - xt(s) - 1)).toString(32) + a,
                t = "_" + t + "R_" + a,
                a = Pr++,
                0 < a && (t += "H" + a.toString(32)),
                t += "_"
            } else
                a = _0++,
                t = "_" + t + "r_" + a.toString(32) + "_";
            return e.memoizedState = t
        },
        useHostTransitionStatus: co,
        useFormState: kd,
        useActionState: kd,
        useOptimistic: function(e) {
            var t = ct();
            t.memoizedState = t.baseState = e;
            var a = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: null,
                lastRenderedState: null
            };
            return t.queue = a,
            t = ho.bind(null, le, !0, a),
            a.dispatch = t,
            [e, t]
        },
        useMemoCache: to,
        useCacheRefresh: function() {
            return ct().memoizedState = N0.bind(null, le)
        },
        useEffectEvent: function(e) {
            var t = ct()
              , a = {
                impl: e
            };
            return t.memoizedState = a,
            function() {
                if ((we & 2) !== 0)
                    throw Error(l(440));
                return a.impl.apply(void 0, arguments)
            }
        }
    }
      , fo = {
        readContext: nt,
        use: Fr,
        useCallback: Vd,
        useContext: nt,
        useEffect: io,
        useImperativeHandle: Gd,
        useInsertionEffect: Ld,
        useLayoutEffect: Hd,
        useMemo: Yd,
        useReducer: ei,
        useRef: Md,
        useState: function() {
            return ei(ra)
        },
        useDebugValue: lo,
        useDeferredValue: function(e, t) {
            var a = Ye();
            return Kd(a, Oe.memoizedState, e, t)
        },
        useTransition: function() {
            var e = ei(ra)[0]
              , t = Ye().memoizedState;
            return [typeof e == "boolean" ? e : Ms(e), t]
        },
        useSyncExternalStore: xd,
        useId: Id,
        useHostTransitionStatus: co,
        useFormState: Dd,
        useActionState: Dd,
        useOptimistic: function(e, t) {
            var a = Ye();
            return jd(a, Oe, e, t)
        },
        useMemoCache: to,
        useCacheRefresh: Zd
    };
    fo.useEffectEvent = Bd;
    var th = {
        readContext: nt,
        use: Fr,
        useCallback: Vd,
        useContext: nt,
        useEffect: io,
        useImperativeHandle: Gd,
        useInsertionEffect: Ld,
        useLayoutEffect: Hd,
        useMemo: Yd,
        useReducer: no,
        useRef: Md,
        useState: function() {
            return no(ra)
        },
        useDebugValue: lo,
        useDeferredValue: function(e, t) {
            var a = Ye();
            return Oe === null ? oo(a, e, t) : Kd(a, Oe.memoizedState, e, t)
        },
        useTransition: function() {
            var e = no(ra)[0]
              , t = Ye().memoizedState;
            return [typeof e == "boolean" ? e : Ms(e), t]
        },
        useSyncExternalStore: xd,
        useId: Id,
        useHostTransitionStatus: co,
        useFormState: zd,
        useActionState: zd,
        useOptimistic: function(e, t) {
            var a = Ye();
            return Oe !== null ? jd(a, Oe, e, t) : (a.baseState = e,
            [e, a.queue.dispatch])
        },
        useMemoCache: to,
        useCacheRefresh: Zd
    };
    th.useEffectEvent = Bd;
    function mo(e, t, a, s) {
        t = e.memoizedState,
        a = a(s, t),
        a = a == null ? t : j({}, t, a),
        e.memoizedState = a,
        e.lanes === 0 && (e.updateQueue.baseState = a)
    }
    var go = {
        enqueueSetState: function(e, t, a) {
            e = e._reactInternals;
            var s = Nt()
              , o = Ta(s);
            o.payload = t,
            a != null && (o.callback = a),
            t = ja(e, o, s),
            t !== null && (pt(t, e, s),
            ks(t, e, s))
        },
        enqueueReplaceState: function(e, t, a) {
            e = e._reactInternals;
            var s = Nt()
              , o = Ta(s);
            o.tag = 1,
            o.payload = t,
            a != null && (o.callback = a),
            t = ja(e, o, s),
            t !== null && (pt(t, e, s),
            ks(t, e, s))
        },
        enqueueForceUpdate: function(e, t) {
            e = e._reactInternals;
            var a = Nt()
              , s = Ta(a);
            s.tag = 2,
            t != null && (s.callback = t),
            t = ja(e, s, a),
            t !== null && (pt(t, e, a),
            ks(t, e, a))
        }
    };
    function ah(e, t, a, s, o, u, m) {
        return e = e.stateNode,
        typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(s, u, m) : t.prototype && t.prototype.isPureReactComponent ? !Es(a, s) || !Es(o, u) : !0
    }
    function nh(e, t, a, s) {
        e = t.state,
        typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, s),
        typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, s),
        t.state !== e && go.enqueueReplaceState(t, t.state, null)
    }
    function ln(e, t) {
        var a = t;
        if ("ref"in t) {
            a = {};
            for (var s in t)
                s !== "ref" && (a[s] = t[s])
        }
        if (e = e.defaultProps) {
            a === t && (a = j({}, a));
            for (var o in e)
                a[o] === void 0 && (a[o] = e[o])
        }
        return a
    }
    function sh(e) {
        zr(e)
    }
    function rh(e) {
        console.error(e)
    }
    function ih(e) {
        zr(e)
    }
    function si(e, t) {
        try {
            var a = e.onUncaughtError;
            a(t.value, {
                componentStack: t.stack
            })
        } catch (s) {
            setTimeout(function() {
                throw s
            })
        }
    }
    function lh(e, t, a) {
        try {
            var s = e.onCaughtError;
            s(a.value, {
                componentStack: a.stack,
                errorBoundary: t.tag === 1 ? t.stateNode : null
            })
        } catch (o) {
            setTimeout(function() {
                throw o
            })
        }
    }
    function yo(e, t, a) {
        return a = Ta(a),
        a.tag = 3,
        a.payload = {
            element: null
        },
        a.callback = function() {
            si(e, t)
        }
        ,
        a
    }
    function oh(e) {
        return e = Ta(e),
        e.tag = 3,
        e
    }
    function uh(e, t, a, s) {
        var o = a.type.getDerivedStateFromError;
        if (typeof o == "function") {
            var u = s.value;
            e.payload = function() {
                return o(u)
            }
            ,
            e.callback = function() {
                lh(t, a, s)
            }
        }
        var m = a.stateNode;
        m !== null && typeof m.componentDidCatch == "function" && (e.callback = function() {
            lh(t, a, s),
            typeof o != "function" && (ka === null ? ka = new Set([this]) : ka.add(this));
            var b = s.stack;
            this.componentDidCatch(s.value, {
                componentStack: b !== null ? b : ""
            })
        }
        )
    }
    function O0(e, t, a, s, o) {
        if (a.flags |= 32768,
        s !== null && typeof s == "object" && typeof s.then == "function") {
            if (t = a.alternate,
            t !== null && Dn(t, a, o, !0),
            a = St.current,
            a !== null) {
                switch (a.tag) {
                case 31:
                case 13:
                    return Bt === null ? yi() : a.alternate === null && He === 0 && (He = 3),
                    a.flags &= -257,
                    a.flags |= 65536,
                    a.lanes = o,
                    s === Kr ? a.flags |= 16384 : (t = a.updateQueue,
                    t === null ? a.updateQueue = new Set([s]) : t.add(s),
                    $o(e, s, o)),
                    !1;
                case 22:
                    return a.flags |= 65536,
                    s === Kr ? a.flags |= 16384 : (t = a.updateQueue,
                    t === null ? (t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([s])
                    },
                    a.updateQueue = t) : (a = t.retryQueue,
                    a === null ? t.retryQueue = new Set([s]) : a.add(s)),
                    $o(e, s, o)),
                    !1
                }
                throw Error(l(435, a.tag))
            }
            return $o(e, s, o),
            yi(),
            !1
        }
        if (be)
            return t = St.current,
            t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            t.flags |= 65536,
            t.lanes = o,
            s !== Ul && (e = Error(l(422), {
                cause: s
            }),
            Ns(Ut(e, a)))) : (s !== Ul && (t = Error(l(423), {
                cause: s
            }),
            Ns(Ut(t, a))),
            e = e.current.alternate,
            e.flags |= 65536,
            o &= -o,
            e.lanes |= o,
            s = Ut(s, a),
            o = yo(e.stateNode, s, o),
            Kl(e, o),
            He !== 4 && (He = 2)),
            !1;
        var u = Error(l(520), {
            cause: s
        });
        if (u = Ut(u, a),
        Xs === null ? Xs = [u] : Xs.push(u),
        He !== 4 && (He = 2),
        t === null)
            return !0;
        s = Ut(s, a),
        a = t;
        do {
            switch (a.tag) {
            case 3:
                return a.flags |= 65536,
                e = o & -o,
                a.lanes |= e,
                e = yo(a.stateNode, s, e),
                Kl(a, e),
                !1;
            case 1:
                if (t = a.type,
                u = a.stateNode,
                (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (ka === null || !ka.has(u))))
                    return a.flags |= 65536,
                    o &= -o,
                    a.lanes |= o,
                    o = oh(o),
                    uh(o, e, a, s),
                    Kl(a, o),
                    !1
            }
            a = a.return
        } while (a !== null);
        return !1
    }
    var po = Error(l(461))
      , Qe = !1;
    function st(e, t, a, s) {
        t.child = e === null ? fd(t, null, a, s) : sn(t, e.child, a, s)
    }
    function ch(e, t, a, s, o) {
        a = a.render;
        var u = t.ref;
        if ("ref"in s) {
            var m = {};
            for (var b in s)
                b !== "ref" && (m[b] = s[b])
        } else
            m = s;
        return en(t),
        s = Pl(e, t, a, m, u, o),
        b = Wl(),
        e !== null && !Qe ? (Fl(e, t, o),
        ia(e, t, o)) : (be && b && kl(t),
        t.flags |= 1,
        st(e, t, s, o),
        t.child)
    }
    function dh(e, t, a, s, o) {
        if (e === null) {
            var u = a.type;
            return typeof u == "function" && !Ol(u) && u.defaultProps === void 0 && a.compare === null ? (t.tag = 15,
            t.type = u,
            hh(e, t, u, s, o)) : (e = Lr(a.type, null, s, t, t.mode, o),
            e.ref = t.ref,
            e.return = t,
            t.child = e)
        }
        if (u = e.child,
        !To(e, o)) {
            var m = u.memoizedProps;
            if (a = a.compare,
            a = a !== null ? a : Es,
            a(m, s) && e.ref === t.ref)
                return ia(e, t, o)
        }
        return t.flags |= 1,
        e = ea(u, s),
        e.ref = t.ref,
        e.return = t,
        t.child = e
    }
    function hh(e, t, a, s, o) {
        if (e !== null) {
            var u = e.memoizedProps;
            if (Es(u, s) && e.ref === t.ref)
                if (Qe = !1,
                t.pendingProps = s = u,
                To(e, o))
                    (e.flags & 131072) !== 0 && (Qe = !0);
                else
                    return t.lanes = e.lanes,
                    ia(e, t, o)
        }
        return bo(e, t, a, s, o)
    }
    function fh(e, t, a, s) {
        var o = s.children
          , u = e !== null ? e.memoizedState : null;
        if (e === null && t.stateNode === null && (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }),
        s.mode === "hidden") {
            if ((t.flags & 128) !== 0) {
                if (u = u !== null ? u.baseLanes | a : a,
                e !== null) {
                    for (s = t.child = e.child,
                    o = 0; s !== null; )
                        o = o | s.lanes | s.childLanes,
                        s = s.sibling;
                    s = o & ~u
                } else
                    s = 0,
                    t.child = null;
                return mh(e, t, u, a, s)
            }
            if ((a & 536870912) !== 0)
                t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null
                },
                e !== null && Vr(t, u !== null ? u.cachePool : null),
                u !== null ? yd(t, u) : Jl(),
                pd(t);
            else
                return s = t.lanes = 536870912,
                mh(e, t, u !== null ? u.baseLanes | a : a, a, s)
        } else
            u !== null ? (Vr(t, u.cachePool),
            yd(t, u),
            Aa(),
            t.memoizedState = null) : (e !== null && Vr(t, null),
            Jl(),
            Aa());
        return st(e, t, o, a),
        t.child
    }
    function Ls(e, t) {
        return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }),
        t.sibling
    }
    function mh(e, t, a, s, o) {
        var u = $l();
        return u = u === null ? null : {
            parent: Xe._currentValue,
            pool: u
        },
        t.memoizedState = {
            baseLanes: a,
            cachePool: u
        },
        e !== null && Vr(t, null),
        Jl(),
        pd(t),
        e !== null && Dn(e, t, s, !0),
        t.childLanes = o,
        null
    }
    function ri(e, t) {
        return t = li({
            mode: t.mode,
            children: t.children
        }, e.mode),
        t.ref = e.ref,
        e.child = t,
        t.return = e,
        t
    }
    function gh(e, t, a) {
        return sn(t, e.child, null, a),
        e = ri(t, t.pendingProps),
        e.flags |= 2,
        Et(t),
        t.memoizedState = null,
        e
    }
    function R0(e, t, a) {
        var s = t.pendingProps
          , o = (t.flags & 128) !== 0;
        if (t.flags &= -129,
        e === null) {
            if (be) {
                if (s.mode === "hidden")
                    return e = ri(t, s),
                    t.lanes = 536870912,
                    Ls(null, e);
                if (Il(t),
                (e = ze) ? (e = Af(e, qt),
                e = e !== null && e.data === "&" ? e : null,
                e !== null && (t.memoizedState = {
                    dehydrated: e,
                    treeContext: xa !== null ? {
                        id: Jt,
                        overflow: Qt
                    } : null,
                    retryLane: 536870912,
                    hydrationErrors: null
                },
                a = Wc(e),
                a.return = t,
                t.child = a,
                at = t,
                ze = null)) : e = null,
                e === null)
                    throw wa(t);
                return t.lanes = 536870912,
                null
            }
            return ri(t, s)
        }
        var u = e.memoizedState;
        if (u !== null) {
            var m = u.dehydrated;
            if (Il(t),
            o)
                if (t.flags & 256)
                    t.flags &= -257,
                    t = gh(e, t, a);
                else if (t.memoizedState !== null)
                    t.child = e.child,
                    t.flags |= 128,
                    t = null;
                else
                    throw Error(l(558));
            else if (Qe || Dn(e, t, a, !1),
            o = (a & e.childLanes) !== 0,
            Qe || o) {
                if (s = ke,
                s !== null && (m = rc(s, a),
                m !== 0 && m !== u.retryLane))
                    throw u.retryLane = m,
                    Za(e, m),
                    pt(s, e, m),
                    po;
                yi(),
                t = gh(e, t, a)
            } else
                e = u.treeContext,
                ze = Lt(m.nextSibling),
                at = t,
                be = !0,
                _a = null,
                qt = !1,
                e !== null && td(t, e),
                t = ri(t, s),
                t.flags |= 4096;
            return t
        }
        return e = ea(e.child, {
            mode: s.mode,
            children: s.children
        }),
        e.ref = t.ref,
        t.child = e,
        e.return = t,
        e
    }
    function ii(e, t) {
        var a = t.ref;
        if (a === null)
            e !== null && e.ref !== null && (t.flags |= 4194816);
        else {
            if (typeof a != "function" && typeof a != "object")
                throw Error(l(284));
            (e === null || e.ref !== a) && (t.flags |= 4194816)
        }
    }
    function bo(e, t, a, s, o) {
        return en(t),
        a = Pl(e, t, a, s, void 0, o),
        s = Wl(),
        e !== null && !Qe ? (Fl(e, t, o),
        ia(e, t, o)) : (be && s && kl(t),
        t.flags |= 1,
        st(e, t, a, o),
        t.child)
    }
    function yh(e, t, a, s, o, u) {
        return en(t),
        t.updateQueue = null,
        a = vd(t, s, a, o),
        bd(e),
        s = Wl(),
        e !== null && !Qe ? (Fl(e, t, u),
        ia(e, t, u)) : (be && s && kl(t),
        t.flags |= 1,
        st(e, t, a, u),
        t.child)
    }
    function ph(e, t, a, s, o) {
        if (en(t),
        t.stateNode === null) {
            var u = On
              , m = a.contextType;
            typeof m == "object" && m !== null && (u = nt(m)),
            u = new a(s,u),
            t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null,
            u.updater = go,
            t.stateNode = u,
            u._reactInternals = t,
            u = t.stateNode,
            u.props = s,
            u.state = t.memoizedState,
            u.refs = {},
            Vl(t),
            m = a.contextType,
            u.context = typeof m == "object" && m !== null ? nt(m) : On,
            u.state = t.memoizedState,
            m = a.getDerivedStateFromProps,
            typeof m == "function" && (mo(t, a, m, s),
            u.state = t.memoizedState),
            typeof a.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (m = u.state,
            typeof u.componentWillMount == "function" && u.componentWillMount(),
            typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(),
            m !== u.state && go.enqueueReplaceState(u, u.state, null),
            Us(t, s, u, o),
            Ds(),
            u.state = t.memoizedState),
            typeof u.componentDidMount == "function" && (t.flags |= 4194308),
            s = !0
        } else if (e === null) {
            u = t.stateNode;
            var b = t.memoizedProps
              , x = ln(a, b);
            u.props = x;
            var O = u.context
              , M = a.contextType;
            m = On,
            typeof M == "object" && M !== null && (m = nt(M));
            var H = a.getDerivedStateFromProps;
            M = typeof H == "function" || typeof u.getSnapshotBeforeUpdate == "function",
            b = t.pendingProps !== b,
            M || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (b || O !== m) && nh(t, u, s, m),
            Ea = !1;
            var R = t.memoizedState;
            u.state = R,
            Us(t, s, u, o),
            Ds(),
            O = t.memoizedState,
            b || R !== O || Ea ? (typeof H == "function" && (mo(t, a, H, s),
            O = t.memoizedState),
            (x = Ea || ah(t, a, x, s, R, O, m)) ? (M || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(),
            typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()),
            typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308),
            t.memoizedProps = s,
            t.memoizedState = O),
            u.props = s,
            u.state = O,
            u.context = m,
            s = x) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308),
            s = !1)
        } else {
            u = t.stateNode,
            Yl(e, t),
            m = t.memoizedProps,
            M = ln(a, m),
            u.props = M,
            H = t.pendingProps,
            R = u.context,
            O = a.contextType,
            x = On,
            typeof O == "object" && O !== null && (x = nt(O)),
            b = a.getDerivedStateFromProps,
            (O = typeof b == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (m !== H || R !== x) && nh(t, u, s, x),
            Ea = !1,
            R = t.memoizedState,
            u.state = R,
            Us(t, s, u, o),
            Ds();
            var k = t.memoizedState;
            m !== H || R !== k || Ea || e !== null && e.dependencies !== null && $r(e.dependencies) ? (typeof b == "function" && (mo(t, a, b, s),
            k = t.memoizedState),
            (M = Ea || ah(t, a, M, s, R, k, x) || e !== null && e.dependencies !== null && $r(e.dependencies)) ? (O || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(s, k, x),
            typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(s, k, x)),
            typeof u.componentDidUpdate == "function" && (t.flags |= 4),
            typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || m === e.memoizedProps && R === e.memoizedState || (t.flags |= 4),
            typeof u.getSnapshotBeforeUpdate != "function" || m === e.memoizedProps && R === e.memoizedState || (t.flags |= 1024),
            t.memoizedProps = s,
            t.memoizedState = k),
            u.props = s,
            u.state = k,
            u.context = x,
            s = M) : (typeof u.componentDidUpdate != "function" || m === e.memoizedProps && R === e.memoizedState || (t.flags |= 4),
            typeof u.getSnapshotBeforeUpdate != "function" || m === e.memoizedProps && R === e.memoizedState || (t.flags |= 1024),
            s = !1)
        }
        return u = s,
        ii(e, t),
        s = (t.flags & 128) !== 0,
        u || s ? (u = t.stateNode,
        a = s && typeof a.getDerivedStateFromError != "function" ? null : u.render(),
        t.flags |= 1,
        e !== null && s ? (t.child = sn(t, e.child, null, o),
        t.child = sn(t, null, a, o)) : st(e, t, a, o),
        t.memoizedState = u.state,
        e = t.child) : e = ia(e, t, o),
        e
    }
    function bh(e, t, a, s) {
        return Wa(),
        t.flags |= 256,
        st(e, t, a, s),
        t.child
    }
    var vo = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null
    };
    function xo(e) {
        return {
            baseLanes: e,
            cachePool: ld()
        }
    }
    function _o(e, t, a) {
        return e = e !== null ? e.childLanes & ~a : 0,
        t && (e |= jt),
        e
    }
    function vh(e, t, a) {
        var s = t.pendingProps, o = !1, u = (t.flags & 128) !== 0, m;
        if ((m = u) || (m = e !== null && e.memoizedState === null ? !1 : (Ve.current & 2) !== 0),
        m && (o = !0,
        t.flags &= -129),
        m = (t.flags & 32) !== 0,
        t.flags &= -33,
        e === null) {
            if (be) {
                if (o ? Na(t) : Aa(),
                (e = ze) ? (e = Af(e, qt),
                e = e !== null && e.data !== "&" ? e : null,
                e !== null && (t.memoizedState = {
                    dehydrated: e,
                    treeContext: xa !== null ? {
                        id: Jt,
                        overflow: Qt
                    } : null,
                    retryLane: 536870912,
                    hydrationErrors: null
                },
                a = Wc(e),
                a.return = t,
                t.child = a,
                at = t,
                ze = null)) : e = null,
                e === null)
                    throw wa(t);
                return nu(e) ? t.lanes = 32 : t.lanes = 536870912,
                null
            }
            var b = s.children;
            return s = s.fallback,
            o ? (Aa(),
            o = t.mode,
            b = li({
                mode: "hidden",
                children: b
            }, o),
            s = Pa(s, o, a, null),
            b.return = t,
            s.return = t,
            b.sibling = s,
            t.child = b,
            s = t.child,
            s.memoizedState = xo(a),
            s.childLanes = _o(e, m, a),
            t.memoizedState = vo,
            Ls(null, s)) : (Na(t),
            wo(t, b))
        }
        var x = e.memoizedState;
        if (x !== null && (b = x.dehydrated,
        b !== null)) {
            if (u)
                t.flags & 256 ? (Na(t),
                t.flags &= -257,
                t = So(e, t, a)) : t.memoizedState !== null ? (Aa(),
                t.child = e.child,
                t.flags |= 128,
                t = null) : (Aa(),
                b = s.fallback,
                o = t.mode,
                s = li({
                    mode: "visible",
                    children: s.children
                }, o),
                b = Pa(b, o, a, null),
                b.flags |= 2,
                s.return = t,
                b.return = t,
                s.sibling = b,
                t.child = s,
                sn(t, e.child, null, a),
                s = t.child,
                s.memoizedState = xo(a),
                s.childLanes = _o(e, m, a),
                t.memoizedState = vo,
                t = Ls(null, s));
            else if (Na(t),
            nu(b)) {
                if (m = b.nextSibling && b.nextSibling.dataset,
                m)
                    var O = m.dgst;
                m = O,
                s = Error(l(419)),
                s.stack = "",
                s.digest = m,
                Ns({
                    value: s,
                    source: null,
                    stack: null
                }),
                t = So(e, t, a)
            } else if (Qe || Dn(e, t, a, !1),
            m = (a & e.childLanes) !== 0,
            Qe || m) {
                if (m = ke,
                m !== null && (s = rc(m, a),
                s !== 0 && s !== x.retryLane))
                    throw x.retryLane = s,
                    Za(e, s),
                    pt(m, e, s),
                    po;
                au(b) || yi(),
                t = So(e, t, a)
            } else
                au(b) ? (t.flags |= 192,
                t.child = e.child,
                t = null) : (e = x.treeContext,
                ze = Lt(b.nextSibling),
                at = t,
                be = !0,
                _a = null,
                qt = !1,
                e !== null && td(t, e),
                t = wo(t, s.children),
                t.flags |= 4096);
            return t
        }
        return o ? (Aa(),
        b = s.fallback,
        o = t.mode,
        x = e.child,
        O = x.sibling,
        s = ea(x, {
            mode: "hidden",
            children: s.children
        }),
        s.subtreeFlags = x.subtreeFlags & 65011712,
        O !== null ? b = ea(O, b) : (b = Pa(b, o, a, null),
        b.flags |= 2),
        b.return = t,
        s.return = t,
        s.sibling = b,
        t.child = s,
        Ls(null, s),
        s = t.child,
        b = e.child.memoizedState,
        b === null ? b = xo(a) : (o = b.cachePool,
        o !== null ? (x = Xe._currentValue,
        o = o.parent !== x ? {
            parent: x,
            pool: x
        } : o) : o = ld(),
        b = {
            baseLanes: b.baseLanes | a,
            cachePool: o
        }),
        s.memoizedState = b,
        s.childLanes = _o(e, m, a),
        t.memoizedState = vo,
        Ls(e.child, s)) : (Na(t),
        a = e.child,
        e = a.sibling,
        a = ea(a, {
            mode: "visible",
            children: s.children
        }),
        a.return = t,
        a.sibling = null,
        e !== null && (m = t.deletions,
        m === null ? (t.deletions = [e],
        t.flags |= 16) : m.push(e)),
        t.child = a,
        t.memoizedState = null,
        a)
    }
    function wo(e, t) {
        return t = li({
            mode: "visible",
            children: t
        }, e.mode),
        t.return = e,
        e.child = t
    }
    function li(e, t) {
        return e = wt(22, e, null, t),
        e.lanes = 0,
        e
    }
    function So(e, t, a) {
        return sn(t, e.child, null, a),
        e = wo(t, t.pendingProps.children),
        e.flags |= 2,
        t.memoizedState = null,
        e
    }
    function xh(e, t, a) {
        e.lanes |= t;
        var s = e.alternate;
        s !== null && (s.lanes |= t),
        ql(e.return, t, a)
    }
    function Eo(e, t, a, s, o, u) {
        var m = e.memoizedState;
        m === null ? e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: s,
            tail: a,
            tailMode: o,
            treeForkCount: u
        } : (m.isBackwards = t,
        m.rendering = null,
        m.renderingStartTime = 0,
        m.last = s,
        m.tail = a,
        m.tailMode = o,
        m.treeForkCount = u)
    }
    function _h(e, t, a) {
        var s = t.pendingProps
          , o = s.revealOrder
          , u = s.tail;
        s = s.children;
        var m = Ve.current
          , b = (m & 2) !== 0;
        if (b ? (m = m & 1 | 2,
        t.flags |= 128) : m &= 1,
        Q(Ve, m),
        st(e, t, s, a),
        s = be ? js : 0,
        !b && e !== null && (e.flags & 128) !== 0)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && xh(e, a, t);
                else if (e.tag === 19)
                    xh(e, a, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        switch (o) {
        case "forwards":
            for (a = t.child,
            o = null; a !== null; )
                e = a.alternate,
                e !== null && Ir(e) === null && (o = a),
                a = a.sibling;
            a = o,
            a === null ? (o = t.child,
            t.child = null) : (o = a.sibling,
            a.sibling = null),
            Eo(t, !1, o, a, u, s);
            break;
        case "backwards":
        case "unstable_legacy-backwards":
            for (a = null,
            o = t.child,
            t.child = null; o !== null; ) {
                if (e = o.alternate,
                e !== null && Ir(e) === null) {
                    t.child = o;
                    break
                }
                e = o.sibling,
                o.sibling = a,
                a = o,
                o = e
            }
            Eo(t, !0, a, null, u, s);
            break;
        case "together":
            Eo(t, !1, null, null, void 0, s);
            break;
        default:
            t.memoizedState = null
        }
        return t.child
    }
    function ia(e, t, a) {
        if (e !== null && (t.dependencies = e.dependencies),
        Ca |= t.lanes,
        (a & t.childLanes) === 0)
            if (e !== null) {
                if (Dn(e, t, a, !1),
                (a & t.childLanes) === 0)
                    return null
            } else
                return null;
        if (e !== null && t.child !== e.child)
            throw Error(l(153));
        if (t.child !== null) {
            for (e = t.child,
            a = ea(e, e.pendingProps),
            t.child = a,
            a.return = t; e.sibling !== null; )
                e = e.sibling,
                a = a.sibling = ea(e, e.pendingProps),
                a.return = t;
            a.sibling = null
        }
        return t.child
    }
    function To(e, t) {
        return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies,
        !!(e !== null && $r(e)))
    }
    function C0(e, t, a) {
        switch (t.tag) {
        case 3:
            ut(t, t.stateNode.containerInfo),
            Sa(t, Xe, e.memoizedState.cache),
            Wa();
            break;
        case 27:
        case 5:
            ds(t);
            break;
        case 4:
            ut(t, t.stateNode.containerInfo);
            break;
        case 10:
            Sa(t, t.type, t.memoizedProps.value);
            break;
        case 31:
            if (t.memoizedState !== null)
                return t.flags |= 128,
                Il(t),
                null;
            break;
        case 13:
            var s = t.memoizedState;
            if (s !== null)
                return s.dehydrated !== null ? (Na(t),
                t.flags |= 128,
                null) : (a & t.child.childLanes) !== 0 ? vh(e, t, a) : (Na(t),
                e = ia(e, t, a),
                e !== null ? e.sibling : null);
            Na(t);
            break;
        case 19:
            var o = (e.flags & 128) !== 0;
            if (s = (a & t.childLanes) !== 0,
            s || (Dn(e, t, a, !1),
            s = (a & t.childLanes) !== 0),
            o) {
                if (s)
                    return _h(e, t, a);
                t.flags |= 128
            }
            if (o = t.memoizedState,
            o !== null && (o.rendering = null,
            o.tail = null,
            o.lastEffect = null),
            Q(Ve, Ve.current),
            s)
                break;
            return null;
        case 22:
            return t.lanes = 0,
            fh(e, t, a, t.pendingProps);
        case 24:
            Sa(t, Xe, e.memoizedState.cache)
        }
        return ia(e, t, a)
    }
    function wh(e, t, a) {
        if (e !== null)
            if (e.memoizedProps !== t.pendingProps)
                Qe = !0;
            else {
                if (!To(e, a) && (t.flags & 128) === 0)
                    return Qe = !1,
                    C0(e, t, a);
                Qe = (e.flags & 131072) !== 0
            }
        else
            Qe = !1,
            be && (t.flags & 1048576) !== 0 && ed(t, js, t.index);
        switch (t.lanes = 0,
        t.tag) {
        case 16:
            e: {
                var s = t.pendingProps;
                if (e = an(t.elementType),
                t.type = e,
                typeof e == "function")
                    Ol(e) ? (s = ln(e, s),
                    t.tag = 1,
                    t = ph(null, t, e, s, a)) : (t.tag = 0,
                    t = bo(null, t, e, s, a));
                else {
                    if (e != null) {
                        var o = e.$$typeof;
                        if (o === z) {
                            t.tag = 11,
                            t = ch(null, t, e, s, a);
                            break e
                        } else if (o === X) {
                            t.tag = 14,
                            t = dh(null, t, e, s, a);
                            break e
                        }
                    }
                    throw t = Ue(e) || e,
                    Error(l(306, t, ""))
                }
            }
            return t;
        case 0:
            return bo(e, t, t.type, t.pendingProps, a);
        case 1:
            return s = t.type,
            o = ln(s, t.pendingProps),
            ph(e, t, s, o, a);
        case 3:
            e: {
                if (ut(t, t.stateNode.containerInfo),
                e === null)
                    throw Error(l(387));
                s = t.pendingProps;
                var u = t.memoizedState;
                o = u.element,
                Yl(e, t),
                Us(t, s, null, a);
                var m = t.memoizedState;
                if (s = m.cache,
                Sa(t, Xe, s),
                s !== u.cache && Bl(t, [Xe], a, !0),
                Ds(),
                s = m.element,
                u.isDehydrated)
                    if (u = {
                        element: s,
                        isDehydrated: !1,
                        cache: m.cache
                    },
                    t.updateQueue.baseState = u,
                    t.memoizedState = u,
                    t.flags & 256) {
                        t = bh(e, t, s, a);
                        break e
                    } else if (s !== o) {
                        o = Ut(Error(l(424)), t),
                        Ns(o),
                        t = bh(e, t, s, a);
                        break e
                    } else
                        for (e = t.stateNode.containerInfo,
                        e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e,
                        ze = Lt(e.firstChild),
                        at = t,
                        be = !0,
                        _a = null,
                        qt = !0,
                        a = fd(t, null, s, a),
                        t.child = a; a; )
                            a.flags = a.flags & -3 | 4096,
                            a = a.sibling;
                else {
                    if (Wa(),
                    s === o) {
                        t = ia(e, t, a);
                        break e
                    }
                    st(e, t, s, a)
                }
                t = t.child
            }
            return t;
        case 26:
            return ii(e, t),
            e === null ? (a = Uf(t.type, null, t.pendingProps, null)) ? t.memoizedState = a : be || (a = t.type,
            e = t.pendingProps,
            s = Si(he.current).createElement(a),
            s[tt] = t,
            s[dt] = e,
            rt(s, a, e),
            Fe(s),
            t.stateNode = s) : t.memoizedState = Uf(t.type, e.memoizedProps, t.pendingProps, e.memoizedState),
            null;
        case 27:
            return ds(t),
            e === null && be && (s = t.stateNode = Cf(t.type, t.pendingProps, he.current),
            at = t,
            qt = !0,
            o = ze,
            Ma(t.type) ? (su = o,
            ze = Lt(s.firstChild)) : ze = o),
            st(e, t, t.pendingProps.children, a),
            ii(e, t),
            e === null && (t.flags |= 4194304),
            t.child;
        case 5:
            return e === null && be && ((o = s = ze) && (s = ly(s, t.type, t.pendingProps, qt),
            s !== null ? (t.stateNode = s,
            at = t,
            ze = Lt(s.firstChild),
            qt = !1,
            o = !0) : o = !1),
            o || wa(t)),
            ds(t),
            o = t.type,
            u = t.pendingProps,
            m = e !== null ? e.memoizedProps : null,
            s = u.children,
            Fo(o, u) ? s = null : m !== null && Fo(o, m) && (t.flags |= 32),
            t.memoizedState !== null && (o = Pl(e, t, w0, null, null, a),
            er._currentValue = o),
            ii(e, t),
            st(e, t, s, a),
            t.child;
        case 6:
            return e === null && be && ((e = a = ze) && (a = oy(a, t.pendingProps, qt),
            a !== null ? (t.stateNode = a,
            at = t,
            ze = null,
            e = !0) : e = !1),
            e || wa(t)),
            null;
        case 13:
            return vh(e, t, a);
        case 4:
            return ut(t, t.stateNode.containerInfo),
            s = t.pendingProps,
            e === null ? t.child = sn(t, null, s, a) : st(e, t, s, a),
            t.child;
        case 11:
            return ch(e, t, t.type, t.pendingProps, a);
        case 7:
            return st(e, t, t.pendingProps, a),
            t.child;
        case 8:
            return st(e, t, t.pendingProps.children, a),
            t.child;
        case 12:
            return st(e, t, t.pendingProps.children, a),
            t.child;
        case 10:
            return s = t.pendingProps,
            Sa(t, t.type, s.value),
            st(e, t, s.children, a),
            t.child;
        case 9:
            return o = t.type._context,
            s = t.pendingProps.children,
            en(t),
            o = nt(o),
            s = s(o),
            t.flags |= 1,
            st(e, t, s, a),
            t.child;
        case 14:
            return dh(e, t, t.type, t.pendingProps, a);
        case 15:
            return hh(e, t, t.type, t.pendingProps, a);
        case 19:
            return _h(e, t, a);
        case 31:
            return R0(e, t, a);
        case 22:
            return fh(e, t, a, t.pendingProps);
        case 24:
            return en(t),
            s = nt(Xe),
            e === null ? (o = $l(),
            o === null && (o = ke,
            u = Ll(),
            o.pooledCache = u,
            u.refCount++,
            u !== null && (o.pooledCacheLanes |= a),
            o = u),
            t.memoizedState = {
                parent: s,
                cache: o
            },
            Vl(t),
            Sa(t, Xe, o)) : ((e.lanes & a) !== 0 && (Yl(e, t),
            Us(t, null, null, a),
            Ds()),
            o = e.memoizedState,
            u = t.memoizedState,
            o.parent !== s ? (o = {
                parent: s,
                cache: s
            },
            t.memoizedState = o,
            t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = o),
            Sa(t, Xe, s)) : (s = u.cache,
            Sa(t, Xe, s),
            s !== o.cache && Bl(t, [Xe], a, !0))),
            st(e, t, t.pendingProps.children, a),
            t.child;
        case 29:
            throw t.pendingProps
        }
        throw Error(l(156, t.tag))
    }
    function la(e) {
        e.flags |= 4
    }
    function jo(e, t, a, s, o) {
        if ((t = (e.mode & 32) !== 0) && (t = !1),
        t) {
            if (e.flags |= 16777216,
            (o & 335544128) === o)
                if (e.stateNode.complete)
                    e.flags |= 8192;
                else if (Ih())
                    e.flags |= 8192;
                else
                    throw nn = Kr,
                    Gl
        } else
            e.flags &= -16777217
    }
    function Sh(e, t) {
        if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
            e.flags &= -16777217;
        else if (e.flags |= 16777216,
        !Lf(t))
            if (Ih())
                e.flags |= 8192;
            else
                throw nn = Kr,
                Gl
    }
    function oi(e, t) {
        t !== null && (e.flags |= 4),
        e.flags & 16384 && (t = e.tag !== 22 ? ac() : 536870912,
        e.lanes |= t,
        Kn |= t)
    }
    function Hs(e, t) {
        if (!be)
            switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var a = null; t !== null; )
                    t.alternate !== null && (a = t),
                    t = t.sibling;
                a === null ? e.tail = null : a.sibling = null;
                break;
            case "collapsed":
                a = e.tail;
                for (var s = null; a !== null; )
                    a.alternate !== null && (s = a),
                    a = a.sibling;
                s === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : s.sibling = null
            }
    }
    function Me(e) {
        var t = e.alternate !== null && e.alternate.child === e.child
          , a = 0
          , s = 0;
        if (t)
            for (var o = e.child; o !== null; )
                a |= o.lanes | o.childLanes,
                s |= o.subtreeFlags & 65011712,
                s |= o.flags & 65011712,
                o.return = e,
                o = o.sibling;
        else
            for (o = e.child; o !== null; )
                a |= o.lanes | o.childLanes,
                s |= o.subtreeFlags,
                s |= o.flags,
                o.return = e,
                o = o.sibling;
        return e.subtreeFlags |= s,
        e.childLanes = a,
        t
    }
    function k0(e, t, a) {
        var s = t.pendingProps;
        switch (Dl(t),
        t.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return Me(t),
            null;
        case 1:
            return Me(t),
            null;
        case 3:
            return a = t.stateNode,
            s = null,
            e !== null && (s = e.memoizedState.cache),
            t.memoizedState.cache !== s && (t.flags |= 2048),
            na(Xe),
            Ge(),
            a.pendingContext && (a.context = a.pendingContext,
            a.pendingContext = null),
            (e === null || e.child === null) && (kn(t) ? la(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024,
            zl())),
            Me(t),
            null;
        case 26:
            var o = t.type
              , u = t.memoizedState;
            return e === null ? (la(t),
            u !== null ? (Me(t),
            Sh(t, u)) : (Me(t),
            jo(t, o, null, s, a))) : u ? u !== e.memoizedState ? (la(t),
            Me(t),
            Sh(t, u)) : (Me(t),
            t.flags &= -16777217) : (e = e.memoizedProps,
            e !== s && la(t),
            Me(t),
            jo(t, o, e, s, a)),
            null;
        case 27:
            if (vr(t),
            a = he.current,
            o = t.type,
            e !== null && t.stateNode != null)
                e.memoizedProps !== s && la(t);
            else {
                if (!s) {
                    if (t.stateNode === null)
                        throw Error(l(166));
                    return Me(t),
                    null
                }
                e = P.current,
                kn(t) ? ad(t) : (e = Cf(o, s, a),
                t.stateNode = e,
                la(t))
            }
            return Me(t),
            null;
        case 5:
            if (vr(t),
            o = t.type,
            e !== null && t.stateNode != null)
                e.memoizedProps !== s && la(t);
            else {
                if (!s) {
                    if (t.stateNode === null)
                        throw Error(l(166));
                    return Me(t),
                    null
                }
                if (u = P.current,
                kn(t))
                    ad(t);
                else {
                    var m = Si(he.current);
                    switch (u) {
                    case 1:
                        u = m.createElementNS("http://www.w3.org/2000/svg", o);
                        break;
                    case 2:
                        u = m.createElementNS("http://www.w3.org/1998/Math/MathML", o);
                        break;
                    default:
                        switch (o) {
                        case "svg":
                            u = m.createElementNS("http://www.w3.org/2000/svg", o);
                            break;
                        case "math":
                            u = m.createElementNS("http://www.w3.org/1998/Math/MathML", o);
                            break;
                        case "script":
                            u = m.createElement("div"),
                            u.innerHTML = "<script><\/script>",
                            u = u.removeChild(u.firstChild);
                            break;
                        case "select":
                            u = typeof s.is == "string" ? m.createElement("select", {
                                is: s.is
                            }) : m.createElement("select"),
                            s.multiple ? u.multiple = !0 : s.size && (u.size = s.size);
                            break;
                        default:
                            u = typeof s.is == "string" ? m.createElement(o, {
                                is: s.is
                            }) : m.createElement(o)
                        }
                    }
                    u[tt] = t,
                    u[dt] = s;
                    e: for (m = t.child; m !== null; ) {
                        if (m.tag === 5 || m.tag === 6)
                            u.appendChild(m.stateNode);
                        else if (m.tag !== 4 && m.tag !== 27 && m.child !== null) {
                            m.child.return = m,
                            m = m.child;
                            continue
                        }
                        if (m === t)
                            break e;
                        for (; m.sibling === null; ) {
                            if (m.return === null || m.return === t)
                                break e;
                            m = m.return
                        }
                        m.sibling.return = m.return,
                        m = m.sibling
                    }
                    t.stateNode = u;
                    e: switch (rt(u, o, s),
                    o) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        s = !!s.autoFocus;
                        break e;
                    case "img":
                        s = !0;
                        break e;
                    default:
                        s = !1
                    }
                    s && la(t)
                }
            }
            return Me(t),
            jo(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, a),
            null;
        case 6:
            if (e && t.stateNode != null)
                e.memoizedProps !== s && la(t);
            else {
                if (typeof s != "string" && t.stateNode === null)
                    throw Error(l(166));
                if (e = he.current,
                kn(t)) {
                    if (e = t.stateNode,
                    a = t.memoizedProps,
                    s = null,
                    o = at,
                    o !== null)
                        switch (o.tag) {
                        case 27:
                        case 5:
                            s = o.memoizedProps
                        }
                    e[tt] = t,
                    e = !!(e.nodeValue === a || s !== null && s.suppressHydrationWarning === !0 || xf(e.nodeValue, a)),
                    e || wa(t, !0)
                } else
                    e = Si(e).createTextNode(s),
                    e[tt] = t,
                    t.stateNode = e
            }
            return Me(t),
            null;
        case 31:
            if (a = t.memoizedState,
            e === null || e.memoizedState !== null) {
                if (s = kn(t),
                a !== null) {
                    if (e === null) {
                        if (!s)
                            throw Error(l(318));
                        if (e = t.memoizedState,
                        e = e !== null ? e.dehydrated : null,
                        !e)
                            throw Error(l(557));
                        e[tt] = t
                    } else
                        Wa(),
                        (t.flags & 128) === 0 && (t.memoizedState = null),
                        t.flags |= 4;
                    Me(t),
                    e = !1
                } else
                    a = zl(),
                    e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a),
                    e = !0;
                if (!e)
                    return t.flags & 256 ? (Et(t),
                    t) : (Et(t),
                    null);
                if ((t.flags & 128) !== 0)
                    throw Error(l(558))
            }
            return Me(t),
            null;
        case 13:
            if (s = t.memoizedState,
            e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (o = kn(t),
                s !== null && s.dehydrated !== null) {
                    if (e === null) {
                        if (!o)
                            throw Error(l(318));
                        if (o = t.memoizedState,
                        o = o !== null ? o.dehydrated : null,
                        !o)
                            throw Error(l(317));
                        o[tt] = t
                    } else
                        Wa(),
                        (t.flags & 128) === 0 && (t.memoizedState = null),
                        t.flags |= 4;
                    Me(t),
                    o = !1
                } else
                    o = zl(),
                    e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = o),
                    o = !0;
                if (!o)
                    return t.flags & 256 ? (Et(t),
                    t) : (Et(t),
                    null)
            }
            return Et(t),
            (t.flags & 128) !== 0 ? (t.lanes = a,
            t) : (a = s !== null,
            e = e !== null && e.memoizedState !== null,
            a && (s = t.child,
            o = null,
            s.alternate !== null && s.alternate.memoizedState !== null && s.alternate.memoizedState.cachePool !== null && (o = s.alternate.memoizedState.cachePool.pool),
            u = null,
            s.memoizedState !== null && s.memoizedState.cachePool !== null && (u = s.memoizedState.cachePool.pool),
            u !== o && (s.flags |= 2048)),
            a !== e && a && (t.child.flags |= 8192),
            oi(t, t.updateQueue),
            Me(t),
            null);
        case 4:
            return Ge(),
            e === null && Qo(t.stateNode.containerInfo),
            Me(t),
            null;
        case 10:
            return na(t.type),
            Me(t),
            null;
        case 19:
            if ($(Ve),
            s = t.memoizedState,
            s === null)
                return Me(t),
                null;
            if (o = (t.flags & 128) !== 0,
            u = s.rendering,
            u === null)
                if (o)
                    Hs(s, !1);
                else {
                    if (He !== 0 || e !== null && (e.flags & 128) !== 0)
                        for (e = t.child; e !== null; ) {
                            if (u = Ir(e),
                            u !== null) {
                                for (t.flags |= 128,
                                Hs(s, !1),
                                e = u.updateQueue,
                                t.updateQueue = e,
                                oi(t, e),
                                t.subtreeFlags = 0,
                                e = a,
                                a = t.child; a !== null; )
                                    Pc(a, e),
                                    a = a.sibling;
                                return Q(Ve, Ve.current & 1 | 2),
                                be && ta(t, s.treeForkCount),
                                t.child
                            }
                            e = e.sibling
                        }
                    s.tail !== null && bt() > fi && (t.flags |= 128,
                    o = !0,
                    Hs(s, !1),
                    t.lanes = 4194304)
                }
            else {
                if (!o)
                    if (e = Ir(u),
                    e !== null) {
                        if (t.flags |= 128,
                        o = !0,
                        e = e.updateQueue,
                        t.updateQueue = e,
                        oi(t, e),
                        Hs(s, !0),
                        s.tail === null && s.tailMode === "hidden" && !u.alternate && !be)
                            return Me(t),
                            null
                    } else
                        2 * bt() - s.renderingStartTime > fi && a !== 536870912 && (t.flags |= 128,
                        o = !0,
                        Hs(s, !1),
                        t.lanes = 4194304);
                s.isBackwards ? (u.sibling = t.child,
                t.child = u) : (e = s.last,
                e !== null ? e.sibling = u : t.child = u,
                s.last = u)
            }
            return s.tail !== null ? (e = s.tail,
            s.rendering = e,
            s.tail = e.sibling,
            s.renderingStartTime = bt(),
            e.sibling = null,
            a = Ve.current,
            Q(Ve, o ? a & 1 | 2 : a & 1),
            be && ta(t, s.treeForkCount),
            e) : (Me(t),
            null);
        case 22:
        case 23:
            return Et(t),
            Ql(),
            s = t.memoizedState !== null,
            e !== null ? e.memoizedState !== null !== s && (t.flags |= 8192) : s && (t.flags |= 8192),
            s ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (Me(t),
            t.subtreeFlags & 6 && (t.flags |= 8192)) : Me(t),
            a = t.updateQueue,
            a !== null && oi(t, a.retryQueue),
            a = null,
            e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool),
            s = null,
            t.memoizedState !== null && t.memoizedState.cachePool !== null && (s = t.memoizedState.cachePool.pool),
            s !== a && (t.flags |= 2048),
            e !== null && $(tn),
            null;
        case 24:
            return a = null,
            e !== null && (a = e.memoizedState.cache),
            t.memoizedState.cache !== a && (t.flags |= 2048),
            na(Xe),
            Me(t),
            null;
        case 25:
            return null;
        case 30:
            return null
        }
        throw Error(l(156, t.tag))
    }
    function D0(e, t) {
        switch (Dl(t),
        t.tag) {
        case 1:
            return e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 3:
            return na(Xe),
            Ge(),
            e = t.flags,
            (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 26:
        case 27:
        case 5:
            return vr(t),
            null;
        case 31:
            if (t.memoizedState !== null) {
                if (Et(t),
                t.alternate === null)
                    throw Error(l(340));
                Wa()
            }
            return e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 13:
            if (Et(t),
            e = t.memoizedState,
            e !== null && e.dehydrated !== null) {
                if (t.alternate === null)
                    throw Error(l(340));
                Wa()
            }
            return e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 19:
            return $(Ve),
            null;
        case 4:
            return Ge(),
            null;
        case 10:
            return na(t.type),
            null;
        case 22:
        case 23:
            return Et(t),
            Ql(),
            e !== null && $(tn),
            e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 24:
            return na(Xe),
            null;
        case 25:
            return null;
        default:
            return null
        }
    }
    function Eh(e, t) {
        switch (Dl(t),
        t.tag) {
        case 3:
            na(Xe),
            Ge();
            break;
        case 26:
        case 27:
        case 5:
            vr(t);
            break;
        case 4:
            Ge();
            break;
        case 31:
            t.memoizedState !== null && Et(t);
            break;
        case 13:
            Et(t);
            break;
        case 19:
            $(Ve);
            break;
        case 10:
            na(t.type);
            break;
        case 22:
        case 23:
            Et(t),
            Ql(),
            e !== null && $(tn);
            break;
        case 24:
            na(Xe)
        }
    }
    function $s(e, t) {
        try {
            var a = t.updateQueue
              , s = a !== null ? a.lastEffect : null;
            if (s !== null) {
                var o = s.next;
                a = o;
                do {
                    if ((a.tag & e) === e) {
                        s = void 0;
                        var u = a.create
                          , m = a.inst;
                        s = u(),
                        m.destroy = s
                    }
                    a = a.next
                } while (a !== o)
            }
        } catch (b) {
            Ae(t, t.return, b)
        }
    }
    function Oa(e, t, a) {
        try {
            var s = t.updateQueue
              , o = s !== null ? s.lastEffect : null;
            if (o !== null) {
                var u = o.next;
                s = u;
                do {
                    if ((s.tag & e) === e) {
                        var m = s.inst
                          , b = m.destroy;
                        if (b !== void 0) {
                            m.destroy = void 0,
                            o = t;
                            var x = a
                              , O = b;
                            try {
                                O()
                            } catch (M) {
                                Ae(o, x, M)
                            }
                        }
                    }
                    s = s.next
                } while (s !== u)
            }
        } catch (M) {
            Ae(t, t.return, M)
        }
    }
    function Th(e) {
        var t = e.updateQueue;
        if (t !== null) {
            var a = e.stateNode;
            try {
                gd(t, a)
            } catch (s) {
                Ae(e, e.return, s)
            }
        }
    }
    function jh(e, t, a) {
        a.props = ln(e.type, e.memoizedProps),
        a.state = e.memoizedState;
        try {
            a.componentWillUnmount()
        } catch (s) {
            Ae(e, t, s)
        }
    }
    function Gs(e, t) {
        try {
            var a = e.ref;
            if (a !== null) {
                switch (e.tag) {
                case 26:
                case 27:
                case 5:
                    var s = e.stateNode;
                    break;
                case 30:
                    s = e.stateNode;
                    break;
                default:
                    s = e.stateNode
                }
                typeof a == "function" ? e.refCleanup = a(s) : a.current = s
            }
        } catch (o) {
            Ae(e, t, o)
        }
    }
    function It(e, t) {
        var a = e.ref
          , s = e.refCleanup;
        if (a !== null)
            if (typeof s == "function")
                try {
                    s()
                } catch (o) {
                    Ae(e, t, o)
                } finally {
                    e.refCleanup = null,
                    e = e.alternate,
                    e != null && (e.refCleanup = null)
                }
            else if (typeof a == "function")
                try {
                    a(null)
                } catch (o) {
                    Ae(e, t, o)
                }
            else
                a.current = null
    }
    function Nh(e) {
        var t = e.type
          , a = e.memoizedProps
          , s = e.stateNode;
        try {
            e: switch (t) {
            case "button":
            case "input":
            case "select":
            case "textarea":
                a.autoFocus && s.focus();
                break e;
            case "img":
                a.src ? s.src = a.src : a.srcSet && (s.srcset = a.srcSet)
            }
        } catch (o) {
            Ae(e, e.return, o)
        }
    }
    function No(e, t, a) {
        try {
            var s = e.stateNode;
            ty(s, e.type, a, t),
            s[dt] = t
        } catch (o) {
            Ae(e, e.return, o)
        }
    }
    function Ah(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Ma(e.type) || e.tag === 4
    }
    function Ao(e) {
        e: for (; ; ) {
            for (; e.sibling === null; ) {
                if (e.return === null || Ah(e.return))
                    return null;
                e = e.return
            }
            for (e.sibling.return = e.return,
            e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
                if (e.tag === 27 && Ma(e.type) || e.flags & 2 || e.child === null || e.tag === 4)
                    continue e;
                e.child.return = e,
                e = e.child
            }
            if (!(e.flags & 2))
                return e.stateNode
        }
    }
    function Oo(e, t, a) {
        var s = e.tag;
        if (s === 5 || s === 6)
            e = e.stateNode,
            t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a,
            t.appendChild(e),
            a = a._reactRootContainer,
            a != null || t.onclick !== null || (t.onclick = Wt));
        else if (s !== 4 && (s === 27 && Ma(e.type) && (a = e.stateNode,
        t = null),
        e = e.child,
        e !== null))
            for (Oo(e, t, a),
            e = e.sibling; e !== null; )
                Oo(e, t, a),
                e = e.sibling
    }
    function ui(e, t, a) {
        var s = e.tag;
        if (s === 5 || s === 6)
            e = e.stateNode,
            t ? a.insertBefore(e, t) : a.appendChild(e);
        else if (s !== 4 && (s === 27 && Ma(e.type) && (a = e.stateNode),
        e = e.child,
        e !== null))
            for (ui(e, t, a),
            e = e.sibling; e !== null; )
                ui(e, t, a),
                e = e.sibling
    }
    function Oh(e) {
        var t = e.stateNode
          , a = e.memoizedProps;
        try {
            for (var s = e.type, o = t.attributes; o.length; )
                t.removeAttributeNode(o[0]);
            rt(t, s, a),
            t[tt] = e,
            t[dt] = a
        } catch (u) {
            Ae(e, e.return, u)
        }
    }
    var oa = !1
      , Ie = !1
      , Ro = !1
      , Rh = typeof WeakSet == "function" ? WeakSet : Set
      , et = null;
    function U0(e, t) {
        if (e = e.containerInfo,
        Po = Ri,
        e = Gc(e),
        wl(e)) {
            if ("selectionStart"in e)
                var a = {
                    start: e.selectionStart,
                    end: e.selectionEnd
                };
            else
                e: {
                    a = (a = e.ownerDocument) && a.defaultView || window;
                    var s = a.getSelection && a.getSelection();
                    if (s && s.rangeCount !== 0) {
                        a = s.anchorNode;
                        var o = s.anchorOffset
                          , u = s.focusNode;
                        s = s.focusOffset;
                        try {
                            a.nodeType,
                            u.nodeType
                        } catch {
                            a = null;
                            break e
                        }
                        var m = 0
                          , b = -1
                          , x = -1
                          , O = 0
                          , M = 0
                          , H = e
                          , R = null;
                        t: for (; ; ) {
                            for (var k; H !== a || o !== 0 && H.nodeType !== 3 || (b = m + o),
                            H !== u || s !== 0 && H.nodeType !== 3 || (x = m + s),
                            H.nodeType === 3 && (m += H.nodeValue.length),
                            (k = H.firstChild) !== null; )
                                R = H,
                                H = k;
                            for (; ; ) {
                                if (H === e)
                                    break t;
                                if (R === a && ++O === o && (b = m),
                                R === u && ++M === s && (x = m),
                                (k = H.nextSibling) !== null)
                                    break;
                                H = R,
                                R = H.parentNode
                            }
                            H = k
                        }
                        a = b === -1 || x === -1 ? null : {
                            start: b,
                            end: x
                        }
                    } else
                        a = null
                }
            a = a || {
                start: 0,
                end: 0
            }
        } else
            a = null;
        for (Wo = {
            focusedElem: e,
            selectionRange: a
        },
        Ri = !1,
        et = t; et !== null; )
            if (t = et,
            e = t.child,
            (t.subtreeFlags & 1028) !== 0 && e !== null)
                e.return = t,
                et = e;
            else
                for (; et !== null; ) {
                    switch (t = et,
                    u = t.alternate,
                    e = t.flags,
                    t.tag) {
                    case 0:
                        if ((e & 4) !== 0 && (e = t.updateQueue,
                        e = e !== null ? e.events : null,
                        e !== null))
                            for (a = 0; a < e.length; a++)
                                o = e[a],
                                o.ref.impl = o.nextImpl;
                        break;
                    case 11:
                    case 15:
                        break;
                    case 1:
                        if ((e & 1024) !== 0 && u !== null) {
                            e = void 0,
                            a = t,
                            o = u.memoizedProps,
                            u = u.memoizedState,
                            s = a.stateNode;
                            try {
                                var Z = ln(a.type, o);
                                e = s.getSnapshotBeforeUpdate(Z, u),
                                s.__reactInternalSnapshotBeforeUpdate = e
                            } catch (ae) {
                                Ae(a, a.return, ae)
                            }
                        }
                        break;
                    case 3:
                        if ((e & 1024) !== 0) {
                            if (e = t.stateNode.containerInfo,
                            a = e.nodeType,
                            a === 9)
                                tu(e);
                            else if (a === 1)
                                switch (e.nodeName) {
                                case "HEAD":
                                case "HTML":
                                case "BODY":
                                    tu(e);
                                    break;
                                default:
                                    e.textContent = ""
                                }
                        }
                        break;
                    case 5:
                    case 26:
                    case 27:
                    case 6:
                    case 4:
                    case 17:
                        break;
                    default:
                        if ((e & 1024) !== 0)
                            throw Error(l(163))
                    }
                    if (e = t.sibling,
                    e !== null) {
                        e.return = t.return,
                        et = e;
                        break
                    }
                    et = t.return
                }
    }
    function Ch(e, t, a) {
        var s = a.flags;
        switch (a.tag) {
        case 0:
        case 11:
        case 15:
            ca(e, a),
            s & 4 && $s(5, a);
            break;
        case 1:
            if (ca(e, a),
            s & 4)
                if (e = a.stateNode,
                t === null)
                    try {
                        e.componentDidMount()
                    } catch (m) {
                        Ae(a, a.return, m)
                    }
                else {
                    var o = ln(a.type, t.memoizedProps);
                    t = t.memoizedState;
                    try {
                        e.componentDidUpdate(o, t, e.__reactInternalSnapshotBeforeUpdate)
                    } catch (m) {
                        Ae(a, a.return, m)
                    }
                }
            s & 64 && Th(a),
            s & 512 && Gs(a, a.return);
            break;
        case 3:
            if (ca(e, a),
            s & 64 && (e = a.updateQueue,
            e !== null)) {
                if (t = null,
                a.child !== null)
                    switch (a.child.tag) {
                    case 27:
                    case 5:
                        t = a.child.stateNode;
                        break;
                    case 1:
                        t = a.child.stateNode
                    }
                try {
                    gd(e, t)
                } catch (m) {
                    Ae(a, a.return, m)
                }
            }
            break;
        case 27:
            t === null && s & 4 && Oh(a);
        case 26:
        case 5:
            ca(e, a),
            t === null && s & 4 && Nh(a),
            s & 512 && Gs(a, a.return);
            break;
        case 12:
            ca(e, a);
            break;
        case 31:
            ca(e, a),
            s & 4 && Uh(e, a);
            break;
        case 13:
            ca(e, a),
            s & 4 && zh(e, a),
            s & 64 && (e = a.memoizedState,
            e !== null && (e = e.dehydrated,
            e !== null && (a = V0.bind(null, a),
            uy(e, a))));
            break;
        case 22:
            if (s = a.memoizedState !== null || oa,
            !s) {
                t = t !== null && t.memoizedState !== null || Ie,
                o = oa;
                var u = Ie;
                oa = s,
                (Ie = t) && !u ? da(e, a, (a.subtreeFlags & 8772) !== 0) : ca(e, a),
                oa = o,
                Ie = u
            }
            break;
        case 30:
            break;
        default:
            ca(e, a)
        }
    }
    function kh(e) {
        var t = e.alternate;
        t !== null && (e.alternate = null,
        kh(t)),
        e.child = null,
        e.deletions = null,
        e.sibling = null,
        e.tag === 5 && (t = e.stateNode,
        t !== null && rl(t)),
        e.stateNode = null,
        e.return = null,
        e.dependencies = null,
        e.memoizedProps = null,
        e.memoizedState = null,
        e.pendingProps = null,
        e.stateNode = null,
        e.updateQueue = null
    }
    var qe = null
      , ft = !1;
    function ua(e, t, a) {
        for (a = a.child; a !== null; )
            Dh(e, t, a),
            a = a.sibling
    }
    function Dh(e, t, a) {
        if (vt && typeof vt.onCommitFiberUnmount == "function")
            try {
                vt.onCommitFiberUnmount(hs, a)
            } catch {}
        switch (a.tag) {
        case 26:
            Ie || It(a, t),
            ua(e, t, a),
            a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode,
            a.parentNode.removeChild(a));
            break;
        case 27:
            Ie || It(a, t);
            var s = qe
              , o = ft;
            Ma(a.type) && (qe = a.stateNode,
            ft = !1),
            ua(e, t, a),
            Ps(a.stateNode),
            qe = s,
            ft = o;
            break;
        case 5:
            Ie || It(a, t);
        case 6:
            if (s = qe,
            o = ft,
            qe = null,
            ua(e, t, a),
            qe = s,
            ft = o,
            qe !== null)
                if (ft)
                    try {
                        (qe.nodeType === 9 ? qe.body : qe.nodeName === "HTML" ? qe.ownerDocument.body : qe).removeChild(a.stateNode)
                    } catch (u) {
                        Ae(a, t, u)
                    }
                else
                    try {
                        qe.removeChild(a.stateNode)
                    } catch (u) {
                        Ae(a, t, u)
                    }
            break;
        case 18:
            qe !== null && (ft ? (e = qe,
            jf(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, a.stateNode),
            Fn(e)) : jf(qe, a.stateNode));
            break;
        case 4:
            s = qe,
            o = ft,
            qe = a.stateNode.containerInfo,
            ft = !0,
            ua(e, t, a),
            qe = s,
            ft = o;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            Oa(2, a, t),
            Ie || Oa(4, a, t),
            ua(e, t, a);
            break;
        case 1:
            Ie || (It(a, t),
            s = a.stateNode,
            typeof s.componentWillUnmount == "function" && jh(a, t, s)),
            ua(e, t, a);
            break;
        case 21:
            ua(e, t, a);
            break;
        case 22:
            Ie = (s = Ie) || a.memoizedState !== null,
            ua(e, t, a),
            Ie = s;
            break;
        default:
            ua(e, t, a)
        }
    }
    function Uh(e, t) {
        if (t.memoizedState === null && (e = t.alternate,
        e !== null && (e = e.memoizedState,
        e !== null))) {
            e = e.dehydrated;
            try {
                Fn(e)
            } catch (a) {
                Ae(t, t.return, a)
            }
        }
    }
    function zh(e, t) {
        if (t.memoizedState === null && (e = t.alternate,
        e !== null && (e = e.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null))))
            try {
                Fn(e)
            } catch (a) {
                Ae(t, t.return, a)
            }
    }
    function z0(e) {
        switch (e.tag) {
        case 31:
        case 13:
        case 19:
            var t = e.stateNode;
            return t === null && (t = e.stateNode = new Rh),
            t;
        case 22:
            return e = e.stateNode,
            t = e._retryCache,
            t === null && (t = e._retryCache = new Rh),
            t;
        default:
            throw Error(l(435, e.tag))
        }
    }
    function ci(e, t) {
        var a = z0(e);
        t.forEach(function(s) {
            if (!a.has(s)) {
                a.add(s);
                var o = Y0.bind(null, e, s);
                s.then(o, o)
            }
        })
    }
    function mt(e, t) {
        var a = t.deletions;
        if (a !== null)
            for (var s = 0; s < a.length; s++) {
                var o = a[s]
                  , u = e
                  , m = t
                  , b = m;
                e: for (; b !== null; ) {
                    switch (b.tag) {
                    case 27:
                        if (Ma(b.type)) {
                            qe = b.stateNode,
                            ft = !1;
                            break e
                        }
                        break;
                    case 5:
                        qe = b.stateNode,
                        ft = !1;
                        break e;
                    case 3:
                    case 4:
                        qe = b.stateNode.containerInfo,
                        ft = !0;
                        break e
                    }
                    b = b.return
                }
                if (qe === null)
                    throw Error(l(160));
                Dh(u, m, o),
                qe = null,
                ft = !1,
                u = o.alternate,
                u !== null && (u.return = null),
                o.return = null
            }
        if (t.subtreeFlags & 13886)
            for (t = t.child; t !== null; )
                Mh(t, e),
                t = t.sibling
    }
    var Gt = null;
    function Mh(e, t) {
        var a = e.alternate
          , s = e.flags;
        switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            mt(t, e),
            gt(e),
            s & 4 && (Oa(3, e, e.return),
            $s(3, e),
            Oa(5, e, e.return));
            break;
        case 1:
            mt(t, e),
            gt(e),
            s & 512 && (Ie || a === null || It(a, a.return)),
            s & 64 && oa && (e = e.updateQueue,
            e !== null && (s = e.callbacks,
            s !== null && (a = e.shared.hiddenCallbacks,
            e.shared.hiddenCallbacks = a === null ? s : a.concat(s))));
            break;
        case 26:
            var o = Gt;
            if (mt(t, e),
            gt(e),
            s & 512 && (Ie || a === null || It(a, a.return)),
            s & 4) {
                var u = a !== null ? a.memoizedState : null;
                if (s = e.memoizedState,
                a === null)
                    if (s === null)
                        if (e.stateNode === null) {
                            e: {
                                s = e.type,
                                a = e.memoizedProps,
                                o = o.ownerDocument || o;
                                t: switch (s) {
                                case "title":
                                    u = o.getElementsByTagName("title")[0],
                                    (!u || u[gs] || u[tt] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = o.createElement(s),
                                    o.head.insertBefore(u, o.querySelector("head > title"))),
                                    rt(u, s, a),
                                    u[tt] = e,
                                    Fe(u),
                                    s = u;
                                    break e;
                                case "link":
                                    var m = qf("link", "href", o).get(s + (a.href || ""));
                                    if (m) {
                                        for (var b = 0; b < m.length; b++)
                                            if (u = m[b],
                                            u.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && u.getAttribute("rel") === (a.rel == null ? null : a.rel) && u.getAttribute("title") === (a.title == null ? null : a.title) && u.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                                                m.splice(b, 1);
                                                break t
                                            }
                                    }
                                    u = o.createElement(s),
                                    rt(u, s, a),
                                    o.head.appendChild(u);
                                    break;
                                case "meta":
                                    if (m = qf("meta", "content", o).get(s + (a.content || ""))) {
                                        for (b = 0; b < m.length; b++)
                                            if (u = m[b],
                                            u.getAttribute("content") === (a.content == null ? null : "" + a.content) && u.getAttribute("name") === (a.name == null ? null : a.name) && u.getAttribute("property") === (a.property == null ? null : a.property) && u.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && u.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                                                m.splice(b, 1);
                                                break t
                                            }
                                    }
                                    u = o.createElement(s),
                                    rt(u, s, a),
                                    o.head.appendChild(u);
                                    break;
                                default:
                                    throw Error(l(468, s))
                                }
                                u[tt] = e,
                                Fe(u),
                                s = u
                            }
                            e.stateNode = s
                        } else
                            Bf(o, e.type, e.stateNode);
                    else
                        e.stateNode = Mf(o, s, e.memoizedProps);
                else
                    u !== s ? (u === null ? a.stateNode !== null && (a = a.stateNode,
                    a.parentNode.removeChild(a)) : u.count--,
                    s === null ? Bf(o, e.type, e.stateNode) : Mf(o, s, e.memoizedProps)) : s === null && e.stateNode !== null && No(e, e.memoizedProps, a.memoizedProps)
            }
            break;
        case 27:
            mt(t, e),
            gt(e),
            s & 512 && (Ie || a === null || It(a, a.return)),
            a !== null && s & 4 && No(e, e.memoizedProps, a.memoizedProps);
            break;
        case 5:
            if (mt(t, e),
            gt(e),
            s & 512 && (Ie || a === null || It(a, a.return)),
            e.flags & 32) {
                o = e.stateNode;
                try {
                    wn(o, "")
                } catch (Z) {
                    Ae(e, e.return, Z)
                }
            }
            s & 4 && e.stateNode != null && (o = e.memoizedProps,
            No(e, o, a !== null ? a.memoizedProps : o)),
            s & 1024 && (Ro = !0);
            break;
        case 6:
            if (mt(t, e),
            gt(e),
            s & 4) {
                if (e.stateNode === null)
                    throw Error(l(162));
                s = e.memoizedProps,
                a = e.stateNode;
                try {
                    a.nodeValue = s
                } catch (Z) {
                    Ae(e, e.return, Z)
                }
            }
            break;
        case 3:
            if (ji = null,
            o = Gt,
            Gt = Ei(t.containerInfo),
            mt(t, e),
            Gt = o,
            gt(e),
            s & 4 && a !== null && a.memoizedState.isDehydrated)
                try {
                    Fn(t.containerInfo)
                } catch (Z) {
                    Ae(e, e.return, Z)
                }
            Ro && (Ro = !1,
            qh(e));
            break;
        case 4:
            s = Gt,
            Gt = Ei(e.stateNode.containerInfo),
            mt(t, e),
            gt(e),
            Gt = s;
            break;
        case 12:
            mt(t, e),
            gt(e);
            break;
        case 31:
            mt(t, e),
            gt(e),
            s & 4 && (s = e.updateQueue,
            s !== null && (e.updateQueue = null,
            ci(e, s)));
            break;
        case 13:
            mt(t, e),
            gt(e),
            e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (hi = bt()),
            s & 4 && (s = e.updateQueue,
            s !== null && (e.updateQueue = null,
            ci(e, s)));
            break;
        case 22:
            o = e.memoizedState !== null;
            var x = a !== null && a.memoizedState !== null
              , O = oa
              , M = Ie;
            if (oa = O || o,
            Ie = M || x,
            mt(t, e),
            Ie = M,
            oa = O,
            gt(e),
            s & 8192)
                e: for (t = e.stateNode,
                t._visibility = o ? t._visibility & -2 : t._visibility | 1,
                o && (a === null || x || oa || Ie || on(e)),
                a = null,
                t = e; ; ) {
                    if (t.tag === 5 || t.tag === 26) {
                        if (a === null) {
                            x = a = t;
                            try {
                                if (u = x.stateNode,
                                o)
                                    m = u.style,
                                    typeof m.setProperty == "function" ? m.setProperty("display", "none", "important") : m.display = "none";
                                else {
                                    b = x.stateNode;
                                    var H = x.memoizedProps.style
                                      , R = H != null && H.hasOwnProperty("display") ? H.display : null;
                                    b.style.display = R == null || typeof R == "boolean" ? "" : ("" + R).trim()
                                }
                            } catch (Z) {
                                Ae(x, x.return, Z)
                            }
                        }
                    } else if (t.tag === 6) {
                        if (a === null) {
                            x = t;
                            try {
                                x.stateNode.nodeValue = o ? "" : x.memoizedProps
                            } catch (Z) {
                                Ae(x, x.return, Z)
                            }
                        }
                    } else if (t.tag === 18) {
                        if (a === null) {
                            x = t;
                            try {
                                var k = x.stateNode;
                                o ? Nf(k, !0) : Nf(x.stateNode, !1)
                            } catch (Z) {
                                Ae(x, x.return, Z)
                            }
                        }
                    } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
                        t.child.return = t,
                        t = t.child;
                        continue
                    }
                    if (t === e)
                        break e;
                    for (; t.sibling === null; ) {
                        if (t.return === null || t.return === e)
                            break e;
                        a === t && (a = null),
                        t = t.return
                    }
                    a === t && (a = null),
                    t.sibling.return = t.return,
                    t = t.sibling
                }
            s & 4 && (s = e.updateQueue,
            s !== null && (a = s.retryQueue,
            a !== null && (s.retryQueue = null,
            ci(e, a))));
            break;
        case 19:
            mt(t, e),
            gt(e),
            s & 4 && (s = e.updateQueue,
            s !== null && (e.updateQueue = null,
            ci(e, s)));
            break;
        case 30:
            break;
        case 21:
            break;
        default:
            mt(t, e),
            gt(e)
        }
    }
    function gt(e) {
        var t = e.flags;
        if (t & 2) {
            try {
                for (var a, s = e.return; s !== null; ) {
                    if (Ah(s)) {
                        a = s;
                        break
                    }
                    s = s.return
                }
                if (a == null)
                    throw Error(l(160));
                switch (a.tag) {
                case 27:
                    var o = a.stateNode
                      , u = Ao(e);
                    ui(e, u, o);
                    break;
                case 5:
                    var m = a.stateNode;
                    a.flags & 32 && (wn(m, ""),
                    a.flags &= -33);
                    var b = Ao(e);
                    ui(e, b, m);
                    break;
                case 3:
                case 4:
                    var x = a.stateNode.containerInfo
                      , O = Ao(e);
                    Oo(e, O, x);
                    break;
                default:
                    throw Error(l(161))
                }
            } catch (M) {
                Ae(e, e.return, M)
            }
            e.flags &= -3
        }
        t & 4096 && (e.flags &= -4097)
    }
    function qh(e) {
        if (e.subtreeFlags & 1024)
            for (e = e.child; e !== null; ) {
                var t = e;
                qh(t),
                t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
                e = e.sibling
            }
    }
    function ca(e, t) {
        if (t.subtreeFlags & 8772)
            for (t = t.child; t !== null; )
                Ch(e, t.alternate, t),
                t = t.sibling
    }
    function on(e) {
        for (e = e.child; e !== null; ) {
            var t = e;
            switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                Oa(4, t, t.return),
                on(t);
                break;
            case 1:
                It(t, t.return);
                var a = t.stateNode;
                typeof a.componentWillUnmount == "function" && jh(t, t.return, a),
                on(t);
                break;
            case 27:
                Ps(t.stateNode);
            case 26:
            case 5:
                It(t, t.return),
                on(t);
                break;
            case 22:
                t.memoizedState === null && on(t);
                break;
            case 30:
                on(t);
                break;
            default:
                on(t)
            }
            e = e.sibling
        }
    }
    function da(e, t, a) {
        for (a = a && (t.subtreeFlags & 8772) !== 0,
        t = t.child; t !== null; ) {
            var s = t.alternate
              , o = e
              , u = t
              , m = u.flags;
            switch (u.tag) {
            case 0:
            case 11:
            case 15:
                da(o, u, a),
                $s(4, u);
                break;
            case 1:
                if (da(o, u, a),
                s = u,
                o = s.stateNode,
                typeof o.componentDidMount == "function")
                    try {
                        o.componentDidMount()
                    } catch (O) {
                        Ae(s, s.return, O)
                    }
                if (s = u,
                o = s.updateQueue,
                o !== null) {
                    var b = s.stateNode;
                    try {
                        var x = o.shared.hiddenCallbacks;
                        if (x !== null)
                            for (o.shared.hiddenCallbacks = null,
                            o = 0; o < x.length; o++)
                                md(x[o], b)
                    } catch (O) {
                        Ae(s, s.return, O)
                    }
                }
                a && m & 64 && Th(u),
                Gs(u, u.return);
                break;
            case 27:
                Oh(u);
            case 26:
            case 5:
                da(o, u, a),
                a && s === null && m & 4 && Nh(u),
                Gs(u, u.return);
                break;
            case 12:
                da(o, u, a);
                break;
            case 31:
                da(o, u, a),
                a && m & 4 && Uh(o, u);
                break;
            case 13:
                da(o, u, a),
                a && m & 4 && zh(o, u);
                break;
            case 22:
                u.memoizedState === null && da(o, u, a),
                Gs(u, u.return);
                break;
            case 30:
                break;
            default:
                da(o, u, a)
            }
            t = t.sibling
        }
    }
    function Co(e, t) {
        var a = null;
        e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool),
        e = null,
        t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool),
        e !== a && (e != null && e.refCount++,
        a != null && As(a))
    }
    function ko(e, t) {
        e = null,
        t.alternate !== null && (e = t.alternate.memoizedState.cache),
        t = t.memoizedState.cache,
        t !== e && (t.refCount++,
        e != null && As(e))
    }
    function Vt(e, t, a, s) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; )
                Bh(e, t, a, s),
                t = t.sibling
    }
    function Bh(e, t, a, s) {
        var o = t.flags;
        switch (t.tag) {
        case 0:
        case 11:
        case 15:
            Vt(e, t, a, s),
            o & 2048 && $s(9, t);
            break;
        case 1:
            Vt(e, t, a, s);
            break;
        case 3:
            Vt(e, t, a, s),
            o & 2048 && (e = null,
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            t = t.memoizedState.cache,
            t !== e && (t.refCount++,
            e != null && As(e)));
            break;
        case 12:
            if (o & 2048) {
                Vt(e, t, a, s),
                e = t.stateNode;
                try {
                    var u = t.memoizedProps
                      , m = u.id
                      , b = u.onPostCommit;
                    typeof b == "function" && b(m, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0)
                } catch (x) {
                    Ae(t, t.return, x)
                }
            } else
                Vt(e, t, a, s);
            break;
        case 31:
            Vt(e, t, a, s);
            break;
        case 13:
            Vt(e, t, a, s);
            break;
        case 23:
            break;
        case 22:
            u = t.stateNode,
            m = t.alternate,
            t.memoizedState !== null ? u._visibility & 2 ? Vt(e, t, a, s) : Vs(e, t) : u._visibility & 2 ? Vt(e, t, a, s) : (u._visibility |= 2,
            Gn(e, t, a, s, (t.subtreeFlags & 10256) !== 0 || !1)),
            o & 2048 && Co(m, t);
            break;
        case 24:
            Vt(e, t, a, s),
            o & 2048 && ko(t.alternate, t);
            break;
        default:
            Vt(e, t, a, s)
        }
    }
    function Gn(e, t, a, s, o) {
        for (o = o && ((t.subtreeFlags & 10256) !== 0 || !1),
        t = t.child; t !== null; ) {
            var u = e
              , m = t
              , b = a
              , x = s
              , O = m.flags;
            switch (m.tag) {
            case 0:
            case 11:
            case 15:
                Gn(u, m, b, x, o),
                $s(8, m);
                break;
            case 23:
                break;
            case 22:
                var M = m.stateNode;
                m.memoizedState !== null ? M._visibility & 2 ? Gn(u, m, b, x, o) : Vs(u, m) : (M._visibility |= 2,
                Gn(u, m, b, x, o)),
                o && O & 2048 && Co(m.alternate, m);
                break;
            case 24:
                Gn(u, m, b, x, o),
                o && O & 2048 && ko(m.alternate, m);
                break;
            default:
                Gn(u, m, b, x, o)
            }
            t = t.sibling
        }
    }
    function Vs(e, t) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; ) {
                var a = e
                  , s = t
                  , o = s.flags;
                switch (s.tag) {
                case 22:
                    Vs(a, s),
                    o & 2048 && Co(s.alternate, s);
                    break;
                case 24:
                    Vs(a, s),
                    o & 2048 && ko(s.alternate, s);
                    break;
                default:
                    Vs(a, s)
                }
                t = t.sibling
            }
    }
    var Ys = 8192;
    function Vn(e, t, a) {
        if (e.subtreeFlags & Ys)
            for (e = e.child; e !== null; )
                Lh(e, t, a),
                e = e.sibling
    }
    function Lh(e, t, a) {
        switch (e.tag) {
        case 26:
            Vn(e, t, a),
            e.flags & Ys && e.memoizedState !== null && _y(a, Gt, e.memoizedState, e.memoizedProps);
            break;
        case 5:
            Vn(e, t, a);
            break;
        case 3:
        case 4:
            var s = Gt;
            Gt = Ei(e.stateNode.containerInfo),
            Vn(e, t, a),
            Gt = s;
            break;
        case 22:
            e.memoizedState === null && (s = e.alternate,
            s !== null && s.memoizedState !== null ? (s = Ys,
            Ys = 16777216,
            Vn(e, t, a),
            Ys = s) : Vn(e, t, a));
            break;
        default:
            Vn(e, t, a)
        }
    }
    function Hh(e) {
        var t = e.alternate;
        if (t !== null && (e = t.child,
        e !== null)) {
            t.child = null;
            do
                t = e.sibling,
                e.sibling = null,
                e = t;
            while (e !== null)
        }
    }
    function Ks(e) {
        var t = e.deletions;
        if ((e.flags & 16) !== 0) {
            if (t !== null)
                for (var a = 0; a < t.length; a++) {
                    var s = t[a];
                    et = s,
                    Gh(s, e)
                }
            Hh(e)
        }
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null; )
                $h(e),
                e = e.sibling
    }
    function $h(e) {
        switch (e.tag) {
        case 0:
        case 11:
        case 15:
            Ks(e),
            e.flags & 2048 && Oa(9, e, e.return);
            break;
        case 3:
            Ks(e);
            break;
        case 12:
            Ks(e);
            break;
        case 22:
            var t = e.stateNode;
            e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3,
            di(e)) : Ks(e);
            break;
        default:
            Ks(e)
        }
    }
    function di(e) {
        var t = e.deletions;
        if ((e.flags & 16) !== 0) {
            if (t !== null)
                for (var a = 0; a < t.length; a++) {
                    var s = t[a];
                    et = s,
                    Gh(s, e)
                }
            Hh(e)
        }
        for (e = e.child; e !== null; ) {
            switch (t = e,
            t.tag) {
            case 0:
            case 11:
            case 15:
                Oa(8, t, t.return),
                di(t);
                break;
            case 22:
                a = t.stateNode,
                a._visibility & 2 && (a._visibility &= -3,
                di(t));
                break;
            default:
                di(t)
            }
            e = e.sibling
        }
    }
    function Gh(e, t) {
        for (; et !== null; ) {
            var a = et;
            switch (a.tag) {
            case 0:
            case 11:
            case 15:
                Oa(8, a, t);
                break;
            case 23:
            case 22:
                if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
                    var s = a.memoizedState.cachePool.pool;
                    s != null && s.refCount++
                }
                break;
            case 24:
                As(a.memoizedState.cache)
            }
            if (s = a.child,
            s !== null)
                s.return = a,
                et = s;
            else
                e: for (a = e; et !== null; ) {
                    s = et;
                    var o = s.sibling
                      , u = s.return;
                    if (kh(s),
                    s === a) {
                        et = null;
                        break e
                    }
                    if (o !== null) {
                        o.return = u,
                        et = o;
                        break e
                    }
                    et = u
                }
        }
    }
    var M0 = {
        getCacheForType: function(e) {
            var t = nt(Xe)
              , a = t.data.get(e);
            return a === void 0 && (a = e(),
            t.data.set(e, a)),
            a
        },
        cacheSignal: function() {
            return nt(Xe).controller.signal
        }
    }
      , q0 = typeof WeakMap == "function" ? WeakMap : Map
      , we = 0
      , ke = null
      , fe = null
      , ye = 0
      , Ne = 0
      , Tt = null
      , Ra = !1
      , Yn = !1
      , Do = !1
      , ha = 0
      , He = 0
      , Ca = 0
      , un = 0
      , Uo = 0
      , jt = 0
      , Kn = 0
      , Xs = null
      , yt = null
      , zo = !1
      , hi = 0
      , Vh = 0
      , fi = 1 / 0
      , mi = null
      , ka = null
      , Pe = 0
      , Da = null
      , Xn = null
      , fa = 0
      , Mo = 0
      , qo = null
      , Yh = null
      , Js = 0
      , Bo = null;
    function Nt() {
        return (we & 2) !== 0 && ye !== 0 ? ye & -ye : D.T !== null ? Yo() : ic()
    }
    function Kh() {
        if (jt === 0)
            if ((ye & 536870912) === 0 || be) {
                var e = wr;
                wr <<= 1,
                (wr & 3932160) === 0 && (wr = 262144),
                jt = e
            } else
                jt = 536870912;
        return e = St.current,
        e !== null && (e.flags |= 32),
        jt
    }
    function pt(e, t, a) {
        (e === ke && (Ne === 2 || Ne === 9) || e.cancelPendingCommit !== null) && (Jn(e, 0),
        Ua(e, ye, jt, !1)),
        ms(e, a),
        ((we & 2) === 0 || e !== ke) && (e === ke && ((we & 2) === 0 && (un |= a),
        He === 4 && Ua(e, ye, jt, !1)),
        Zt(e))
    }
    function Xh(e, t, a) {
        if ((we & 6) !== 0)
            throw Error(l(327));
        var s = !a && (t & 127) === 0 && (t & e.expiredLanes) === 0 || fs(e, t)
          , o = s ? H0(e, t) : Ho(e, t, !0)
          , u = s;
        do {
            if (o === 0) {
                Yn && !s && Ua(e, t, 0, !1);
                break
            } else {
                if (a = e.current.alternate,
                u && !B0(a)) {
                    o = Ho(e, t, !1),
                    u = !1;
                    continue
                }
                if (o === 2) {
                    if (u = t,
                    e.errorRecoveryDisabledLanes & u)
                        var m = 0;
                    else
                        m = e.pendingLanes & -536870913,
                        m = m !== 0 ? m : m & 536870912 ? 536870912 : 0;
                    if (m !== 0) {
                        t = m;
                        e: {
                            var b = e;
                            o = Xs;
                            var x = b.current.memoizedState.isDehydrated;
                            if (x && (Jn(b, m).flags |= 256),
                            m = Ho(b, m, !1),
                            m !== 2) {
                                if (Do && !x) {
                                    b.errorRecoveryDisabledLanes |= u,
                                    un |= u,
                                    o = 4;
                                    break e
                                }
                                u = yt,
                                yt = o,
                                u !== null && (yt === null ? yt = u : yt.push.apply(yt, u))
                            }
                            o = m
                        }
                        if (u = !1,
                        o !== 2)
                            continue
                    }
                }
                if (o === 1) {
                    Jn(e, 0),
                    Ua(e, t, 0, !0);
                    break
                }
                e: {
                    switch (s = e,
                    u = o,
                    u) {
                    case 0:
                    case 1:
                        throw Error(l(345));
                    case 4:
                        if ((t & 4194048) !== t)
                            break;
                    case 6:
                        Ua(s, t, jt, !Ra);
                        break e;
                    case 2:
                        yt = null;
                        break;
                    case 3:
                    case 5:
                        break;
                    default:
                        throw Error(l(329))
                    }
                    if ((t & 62914560) === t && (o = hi + 300 - bt(),
                    10 < o)) {
                        if (Ua(s, t, jt, !Ra),
                        Er(s, 0, !0) !== 0)
                            break e;
                        fa = t,
                        s.timeoutHandle = Ef(Jh.bind(null, s, a, yt, mi, zo, t, jt, un, Kn, Ra, u, "Throttled", -0, 0), o);
                        break e
                    }
                    Jh(s, a, yt, mi, zo, t, jt, un, Kn, Ra, u, null, -0, 0)
                }
            }
            break
        } while (!0);
        Zt(e)
    }
    function Jh(e, t, a, s, o, u, m, b, x, O, M, H, R, k) {
        if (e.timeoutHandle = -1,
        H = t.subtreeFlags,
        H & 8192 || (H & 16785408) === 16785408) {
            H = {
                stylesheets: null,
                count: 0,
                imgCount: 0,
                imgBytes: 0,
                suspenseyImages: [],
                waitingForImages: !0,
                waitingForViewTransition: !1,
                unsuspend: Wt
            },
            Lh(t, u, H);
            var Z = (u & 62914560) === u ? hi - bt() : (u & 4194048) === u ? Vh - bt() : 0;
            if (Z = wy(H, Z),
            Z !== null) {
                fa = u,
                e.cancelPendingCommit = Z(tf.bind(null, e, t, u, a, s, o, m, b, x, M, H, null, R, k)),
                Ua(e, u, m, !O);
                return
            }
        }
        tf(e, t, u, a, s, o, m, b, x)
    }
    function B0(e) {
        for (var t = e; ; ) {
            var a = t.tag;
            if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue,
            a !== null && (a = a.stores,
            a !== null)))
                for (var s = 0; s < a.length; s++) {
                    var o = a[s]
                      , u = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!_t(u(), o))
                            return !1
                    } catch {
                        return !1
                    }
                }
            if (a = t.child,
            t.subtreeFlags & 16384 && a !== null)
                a.return = t,
                t = a;
            else {
                if (t === e)
                    break;
                for (; t.sibling === null; ) {
                    if (t.return === null || t.return === e)
                        return !0;
                    t = t.return
                }
                t.sibling.return = t.return,
                t = t.sibling
            }
        }
        return !0
    }
    function Ua(e, t, a, s) {
        t &= ~Uo,
        t &= ~un,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        s && (e.warmLanes |= t),
        s = e.expirationTimes;
        for (var o = t; 0 < o; ) {
            var u = 31 - xt(o)
              , m = 1 << u;
            s[u] = -1,
            o &= ~m
        }
        a !== 0 && nc(e, a, t)
    }
    function gi() {
        return (we & 6) === 0 ? (Qs(0),
        !1) : !0
    }
    function Lo() {
        if (fe !== null) {
            if (Ne === 0)
                var e = fe.return;
            else
                e = fe,
                aa = Fa = null,
                eo(e),
                qn = null,
                Rs = 0,
                e = fe;
            for (; e !== null; )
                Eh(e.alternate, e),
                e = e.return;
            fe = null
        }
    }
    function Jn(e, t) {
        var a = e.timeoutHandle;
        a !== -1 && (e.timeoutHandle = -1,
        sy(a)),
        a = e.cancelPendingCommit,
        a !== null && (e.cancelPendingCommit = null,
        a()),
        fa = 0,
        Lo(),
        ke = e,
        fe = a = ea(e.current, null),
        ye = t,
        Ne = 0,
        Tt = null,
        Ra = !1,
        Yn = fs(e, t),
        Do = !1,
        Kn = jt = Uo = un = Ca = He = 0,
        yt = Xs = null,
        zo = !1,
        (t & 8) !== 0 && (t |= t & 32);
        var s = e.entangledLanes;
        if (s !== 0)
            for (e = e.entanglements,
            s &= t; 0 < s; ) {
                var o = 31 - xt(s)
                  , u = 1 << o;
                t |= e[o],
                s &= ~u
            }
        return ha = t,
        Mr(),
        a
    }
    function Qh(e, t) {
        le = null,
        D.H = Bs,
        t === Mn || t === Yr ? (t = cd(),
        Ne = 3) : t === Gl ? (t = cd(),
        Ne = 4) : Ne = t === po ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1,
        Tt = t,
        fe === null && (He = 1,
        si(e, Ut(t, e.current)))
    }
    function Ih() {
        var e = St.current;
        return e === null ? !0 : (ye & 4194048) === ye ? Bt === null : (ye & 62914560) === ye || (ye & 536870912) !== 0 ? e === Bt : !1
    }
    function Zh() {
        var e = D.H;
        return D.H = Bs,
        e === null ? Bs : e
    }
    function Ph() {
        var e = D.A;
        return D.A = M0,
        e
    }
    function yi() {
        He = 4,
        Ra || (ye & 4194048) !== ye && St.current !== null || (Yn = !0),
        (Ca & 134217727) === 0 && (un & 134217727) === 0 || ke === null || Ua(ke, ye, jt, !1)
    }
    function Ho(e, t, a) {
        var s = we;
        we |= 2;
        var o = Zh()
          , u = Ph();
        (ke !== e || ye !== t) && (mi = null,
        Jn(e, t)),
        t = !1;
        var m = He;
        e: do
            try {
                if (Ne !== 0 && fe !== null) {
                    var b = fe
                      , x = Tt;
                    switch (Ne) {
                    case 8:
                        Lo(),
                        m = 6;
                        break e;
                    case 3:
                    case 2:
                    case 9:
                    case 6:
                        St.current === null && (t = !0);
                        var O = Ne;
                        if (Ne = 0,
                        Tt = null,
                        Qn(e, b, x, O),
                        a && Yn) {
                            m = 0;
                            break e
                        }
                        break;
                    default:
                        O = Ne,
                        Ne = 0,
                        Tt = null,
                        Qn(e, b, x, O)
                    }
                }
                L0(),
                m = He;
                break
            } catch (M) {
                Qh(e, M)
            }
        while (!0);
        return t && e.shellSuspendCounter++,
        aa = Fa = null,
        we = s,
        D.H = o,
        D.A = u,
        fe === null && (ke = null,
        ye = 0,
        Mr()),
        m
    }
    function L0() {
        for (; fe !== null; )
            Wh(fe)
    }
    function H0(e, t) {
        var a = we;
        we |= 2;
        var s = Zh()
          , o = Ph();
        ke !== e || ye !== t ? (mi = null,
        fi = bt() + 500,
        Jn(e, t)) : Yn = fs(e, t);
        e: do
            try {
                if (Ne !== 0 && fe !== null) {
                    t = fe;
                    var u = Tt;
                    t: switch (Ne) {
                    case 1:
                        Ne = 0,
                        Tt = null,
                        Qn(e, t, u, 1);
                        break;
                    case 2:
                    case 9:
                        if (od(u)) {
                            Ne = 0,
                            Tt = null,
                            Fh(t);
                            break
                        }
                        t = function() {
                            Ne !== 2 && Ne !== 9 || ke !== e || (Ne = 7),
                            Zt(e)
                        }
                        ,
                        u.then(t, t);
                        break e;
                    case 3:
                        Ne = 7;
                        break e;
                    case 4:
                        Ne = 5;
                        break e;
                    case 7:
                        od(u) ? (Ne = 0,
                        Tt = null,
                        Fh(t)) : (Ne = 0,
                        Tt = null,
                        Qn(e, t, u, 7));
                        break;
                    case 5:
                        var m = null;
                        switch (fe.tag) {
                        case 26:
                            m = fe.memoizedState;
                        case 5:
                        case 27:
                            var b = fe;
                            if (m ? Lf(m) : b.stateNode.complete) {
                                Ne = 0,
                                Tt = null;
                                var x = b.sibling;
                                if (x !== null)
                                    fe = x;
                                else {
                                    var O = b.return;
                                    O !== null ? (fe = O,
                                    pi(O)) : fe = null
                                }
                                break t
                            }
                        }
                        Ne = 0,
                        Tt = null,
                        Qn(e, t, u, 5);
                        break;
                    case 6:
                        Ne = 0,
                        Tt = null,
                        Qn(e, t, u, 6);
                        break;
                    case 8:
                        Lo(),
                        He = 6;
                        break e;
                    default:
                        throw Error(l(462))
                    }
                }
                $0();
                break
            } catch (M) {
                Qh(e, M)
            }
        while (!0);
        return aa = Fa = null,
        D.H = s,
        D.A = o,
        we = a,
        fe !== null ? 0 : (ke = null,
        ye = 0,
        Mr(),
        He)
    }
    function $0() {
        for (; fe !== null && !cg(); )
            Wh(fe)
    }
    function Wh(e) {
        var t = wh(e.alternate, e, ha);
        e.memoizedProps = e.pendingProps,
        t === null ? pi(e) : fe = t
    }
    function Fh(e) {
        var t = e
          , a = t.alternate;
        switch (t.tag) {
        case 15:
        case 0:
            t = yh(a, t, t.pendingProps, t.type, void 0, ye);
            break;
        case 11:
            t = yh(a, t, t.pendingProps, t.type.render, t.ref, ye);
            break;
        case 5:
            eo(t);
        default:
            Eh(a, t),
            t = fe = Pc(t, ha),
            t = wh(a, t, ha)
        }
        e.memoizedProps = e.pendingProps,
        t === null ? pi(e) : fe = t
    }
    function Qn(e, t, a, s) {
        aa = Fa = null,
        eo(t),
        qn = null,
        Rs = 0;
        var o = t.return;
        try {
            if (O0(e, o, t, a, ye)) {
                He = 1,
                si(e, Ut(a, e.current)),
                fe = null;
                return
            }
        } catch (u) {
            if (o !== null)
                throw fe = o,
                u;
            He = 1,
            si(e, Ut(a, e.current)),
            fe = null;
            return
        }
        t.flags & 32768 ? (be || s === 1 ? e = !0 : Yn || (ye & 536870912) !== 0 ? e = !1 : (Ra = e = !0,
        (s === 2 || s === 9 || s === 3 || s === 6) && (s = St.current,
        s !== null && s.tag === 13 && (s.flags |= 16384))),
        ef(t, e)) : pi(t)
    }
    function pi(e) {
        var t = e;
        do {
            if ((t.flags & 32768) !== 0) {
                ef(t, Ra);
                return
            }
            e = t.return;
            var a = k0(t.alternate, t, ha);
            if (a !== null) {
                fe = a;
                return
            }
            if (t = t.sibling,
            t !== null) {
                fe = t;
                return
            }
            fe = t = e
        } while (t !== null);
        He === 0 && (He = 5)
    }
    function ef(e, t) {
        do {
            var a = D0(e.alternate, e);
            if (a !== null) {
                a.flags &= 32767,
                fe = a;
                return
            }
            if (a = e.return,
            a !== null && (a.flags |= 32768,
            a.subtreeFlags = 0,
            a.deletions = null),
            !t && (e = e.sibling,
            e !== null)) {
                fe = e;
                return
            }
            fe = e = a
        } while (e !== null);
        He = 6,
        fe = null
    }
    function tf(e, t, a, s, o, u, m, b, x) {
        e.cancelPendingCommit = null;
        do
            bi();
        while (Pe !== 0);
        if ((we & 6) !== 0)
            throw Error(l(327));
        if (t !== null) {
            if (t === e.current)
                throw Error(l(177));
            if (u = t.lanes | t.childLanes,
            u |= Nl,
            xg(e, a, u, m, b, x),
            e === ke && (fe = ke = null,
            ye = 0),
            Xn = t,
            Da = e,
            fa = a,
            Mo = u,
            qo = o,
            Yh = s,
            (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null,
            e.callbackPriority = 0,
            K0(xr, function() {
                return lf(),
                null
            })) : (e.callbackNode = null,
            e.callbackPriority = 0),
            s = (t.flags & 13878) !== 0,
            (t.subtreeFlags & 13878) !== 0 || s) {
                s = D.T,
                D.T = null,
                o = J.p,
                J.p = 2,
                m = we,
                we |= 4;
                try {
                    U0(e, t, a)
                } finally {
                    we = m,
                    J.p = o,
                    D.T = s
                }
            }
            Pe = 1,
            af(),
            nf(),
            sf()
        }
    }
    function af() {
        if (Pe === 1) {
            Pe = 0;
            var e = Da
              , t = Xn
              , a = (t.flags & 13878) !== 0;
            if ((t.subtreeFlags & 13878) !== 0 || a) {
                a = D.T,
                D.T = null;
                var s = J.p;
                J.p = 2;
                var o = we;
                we |= 4;
                try {
                    Mh(t, e);
                    var u = Wo
                      , m = Gc(e.containerInfo)
                      , b = u.focusedElem
                      , x = u.selectionRange;
                    if (m !== b && b && b.ownerDocument && $c(b.ownerDocument.documentElement, b)) {
                        if (x !== null && wl(b)) {
                            var O = x.start
                              , M = x.end;
                            if (M === void 0 && (M = O),
                            "selectionStart"in b)
                                b.selectionStart = O,
                                b.selectionEnd = Math.min(M, b.value.length);
                            else {
                                var H = b.ownerDocument || document
                                  , R = H && H.defaultView || window;
                                if (R.getSelection) {
                                    var k = R.getSelection()
                                      , Z = b.textContent.length
                                      , ae = Math.min(x.start, Z)
                                      , Ce = x.end === void 0 ? ae : Math.min(x.end, Z);
                                    !k.extend && ae > Ce && (m = Ce,
                                    Ce = ae,
                                    ae = m);
                                    var N = Hc(b, ae)
                                      , w = Hc(b, Ce);
                                    if (N && w && (k.rangeCount !== 1 || k.anchorNode !== N.node || k.anchorOffset !== N.offset || k.focusNode !== w.node || k.focusOffset !== w.offset)) {
                                        var A = H.createRange();
                                        A.setStart(N.node, N.offset),
                                        k.removeAllRanges(),
                                        ae > Ce ? (k.addRange(A),
                                        k.extend(w.node, w.offset)) : (A.setEnd(w.node, w.offset),
                                        k.addRange(A))
                                    }
                                }
                            }
                        }
                        for (H = [],
                        k = b; k = k.parentNode; )
                            k.nodeType === 1 && H.push({
                                element: k,
                                left: k.scrollLeft,
                                top: k.scrollTop
                            });
                        for (typeof b.focus == "function" && b.focus(),
                        b = 0; b < H.length; b++) {
                            var B = H[b];
                            B.element.scrollLeft = B.left,
                            B.element.scrollTop = B.top
                        }
                    }
                    Ri = !!Po,
                    Wo = Po = null
                } finally {
                    we = o,
                    J.p = s,
                    D.T = a
                }
            }
            e.current = t,
            Pe = 2
        }
    }
    function nf() {
        if (Pe === 2) {
            Pe = 0;
            var e = Da
              , t = Xn
              , a = (t.flags & 8772) !== 0;
            if ((t.subtreeFlags & 8772) !== 0 || a) {
                a = D.T,
                D.T = null;
                var s = J.p;
                J.p = 2;
                var o = we;
                we |= 4;
                try {
                    Ch(e, t.alternate, t)
                } finally {
                    we = o,
                    J.p = s,
                    D.T = a
                }
            }
            Pe = 3
        }
    }
    function sf() {
        if (Pe === 4 || Pe === 3) {
            Pe = 0,
            dg();
            var e = Da
              , t = Xn
              , a = fa
              , s = Yh;
            (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Pe = 5 : (Pe = 0,
            Xn = Da = null,
            rf(e, e.pendingLanes));
            var o = e.pendingLanes;
            if (o === 0 && (ka = null),
            nl(a),
            t = t.stateNode,
            vt && typeof vt.onCommitFiberRoot == "function")
                try {
                    vt.onCommitFiberRoot(hs, t, void 0, (t.current.flags & 128) === 128)
                } catch {}
            if (s !== null) {
                t = D.T,
                o = J.p,
                J.p = 2,
                D.T = null;
                try {
                    for (var u = e.onRecoverableError, m = 0; m < s.length; m++) {
                        var b = s[m];
                        u(b.value, {
                            componentStack: b.stack
                        })
                    }
                } finally {
                    D.T = t,
                    J.p = o
                }
            }
            (fa & 3) !== 0 && bi(),
            Zt(e),
            o = e.pendingLanes,
            (a & 261930) !== 0 && (o & 42) !== 0 ? e === Bo ? Js++ : (Js = 0,
            Bo = e) : Js = 0,
            Qs(0)
        }
    }
    function rf(e, t) {
        (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache,
        t != null && (e.pooledCache = null,
        As(t)))
    }
    function bi() {
        return af(),
        nf(),
        sf(),
        lf()
    }
    function lf() {
        if (Pe !== 5)
            return !1;
        var e = Da
          , t = Mo;
        Mo = 0;
        var a = nl(fa)
          , s = D.T
          , o = J.p;
        try {
            J.p = 32 > a ? 32 : a,
            D.T = null,
            a = qo,
            qo = null;
            var u = Da
              , m = fa;
            if (Pe = 0,
            Xn = Da = null,
            fa = 0,
            (we & 6) !== 0)
                throw Error(l(331));
            var b = we;
            if (we |= 4,
            $h(u.current),
            Bh(u, u.current, m, a),
            we = b,
            Qs(0, !1),
            vt && typeof vt.onPostCommitFiberRoot == "function")
                try {
                    vt.onPostCommitFiberRoot(hs, u)
                } catch {}
            return !0
        } finally {
            J.p = o,
            D.T = s,
            rf(e, t)
        }
    }
    function of(e, t, a) {
        t = Ut(a, t),
        t = yo(e.stateNode, t, 2),
        e = ja(e, t, 2),
        e !== null && (ms(e, 2),
        Zt(e))
    }
    function Ae(e, t, a) {
        if (e.tag === 3)
            of(e, e, a);
        else
            for (; t !== null; ) {
                if (t.tag === 3) {
                    of(t, e, a);
                    break
                } else if (t.tag === 1) {
                    var s = t.stateNode;
                    if (typeof t.type.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && (ka === null || !ka.has(s))) {
                        e = Ut(a, e),
                        a = oh(2),
                        s = ja(t, a, 2),
                        s !== null && (uh(a, s, t, e),
                        ms(s, 2),
                        Zt(s));
                        break
                    }
                }
                t = t.return
            }
    }
    function $o(e, t, a) {
        var s = e.pingCache;
        if (s === null) {
            s = e.pingCache = new q0;
            var o = new Set;
            s.set(t, o)
        } else
            o = s.get(t),
            o === void 0 && (o = new Set,
            s.set(t, o));
        o.has(a) || (Do = !0,
        o.add(a),
        e = G0.bind(null, e, t, a),
        t.then(e, e))
    }
    function G0(e, t, a) {
        var s = e.pingCache;
        s !== null && s.delete(t),
        e.pingedLanes |= e.suspendedLanes & a,
        e.warmLanes &= ~a,
        ke === e && (ye & a) === a && (He === 4 || He === 3 && (ye & 62914560) === ye && 300 > bt() - hi ? (we & 2) === 0 && Jn(e, 0) : Uo |= a,
        Kn === ye && (Kn = 0)),
        Zt(e)
    }
    function uf(e, t) {
        t === 0 && (t = ac()),
        e = Za(e, t),
        e !== null && (ms(e, t),
        Zt(e))
    }
    function V0(e) {
        var t = e.memoizedState
          , a = 0;
        t !== null && (a = t.retryLane),
        uf(e, a)
    }
    function Y0(e, t) {
        var a = 0;
        switch (e.tag) {
        case 31:
        case 13:
            var s = e.stateNode
              , o = e.memoizedState;
            o !== null && (a = o.retryLane);
            break;
        case 19:
            s = e.stateNode;
            break;
        case 22:
            s = e.stateNode._retryCache;
            break;
        default:
            throw Error(l(314))
        }
        s !== null && s.delete(t),
        uf(e, a)
    }
    function K0(e, t) {
        return Fi(e, t)
    }
    var vi = null
      , In = null
      , Go = !1
      , xi = !1
      , Vo = !1
      , za = 0;
    function Zt(e) {
        e !== In && e.next === null && (In === null ? vi = In = e : In = In.next = e),
        xi = !0,
        Go || (Go = !0,
        J0())
    }
    function Qs(e, t) {
        if (!Vo && xi) {
            Vo = !0;
            do
                for (var a = !1, s = vi; s !== null; ) {
                    if (e !== 0) {
                        var o = s.pendingLanes;
                        if (o === 0)
                            var u = 0;
                        else {
                            var m = s.suspendedLanes
                              , b = s.pingedLanes;
                            u = (1 << 31 - xt(42 | e) + 1) - 1,
                            u &= o & ~(m & ~b),
                            u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0
                        }
                        u !== 0 && (a = !0,
                        ff(s, u))
                    } else
                        u = ye,
                        u = Er(s, s === ke ? u : 0, s.cancelPendingCommit !== null || s.timeoutHandle !== -1),
                        (u & 3) === 0 || fs(s, u) || (a = !0,
                        ff(s, u));
                    s = s.next
                }
            while (a);
            Vo = !1
        }
    }
    function X0() {
        cf()
    }
    function cf() {
        xi = Go = !1;
        var e = 0;
        za !== 0 && ny() && (e = za);
        for (var t = bt(), a = null, s = vi; s !== null; ) {
            var o = s.next
              , u = df(s, t);
            u === 0 ? (s.next = null,
            a === null ? vi = o : a.next = o,
            o === null && (In = a)) : (a = s,
            (e !== 0 || (u & 3) !== 0) && (xi = !0)),
            s = o
        }
        Pe !== 0 && Pe !== 5 || Qs(e),
        za !== 0 && (za = 0)
    }
    function df(e, t) {
        for (var a = e.suspendedLanes, s = e.pingedLanes, o = e.expirationTimes, u = e.pendingLanes & -62914561; 0 < u; ) {
            var m = 31 - xt(u)
              , b = 1 << m
              , x = o[m];
            x === -1 ? ((b & a) === 0 || (b & s) !== 0) && (o[m] = vg(b, t)) : x <= t && (e.expiredLanes |= b),
            u &= ~b
        }
        if (t = ke,
        a = ye,
        a = Er(e, e === t ? a : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1),
        s = e.callbackNode,
        a === 0 || e === t && (Ne === 2 || Ne === 9) || e.cancelPendingCommit !== null)
            return s !== null && s !== null && el(s),
            e.callbackNode = null,
            e.callbackPriority = 0;
        if ((a & 3) === 0 || fs(e, a)) {
            if (t = a & -a,
            t === e.callbackPriority)
                return t;
            switch (s !== null && el(s),
            nl(a)) {
            case 2:
            case 8:
                a = ec;
                break;
            case 32:
                a = xr;
                break;
            case 268435456:
                a = tc;
                break;
            default:
                a = xr
            }
            return s = hf.bind(null, e),
            a = Fi(a, s),
            e.callbackPriority = t,
            e.callbackNode = a,
            t
        }
        return s !== null && s !== null && el(s),
        e.callbackPriority = 2,
        e.callbackNode = null,
        2
    }
    function hf(e, t) {
        if (Pe !== 0 && Pe !== 5)
            return e.callbackNode = null,
            e.callbackPriority = 0,
            null;
        var a = e.callbackNode;
        if (bi() && e.callbackNode !== a)
            return null;
        var s = ye;
        return s = Er(e, e === ke ? s : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1),
        s === 0 ? null : (Xh(e, s, t),
        df(e, bt()),
        e.callbackNode != null && e.callbackNode === a ? hf.bind(null, e) : null)
    }
    function ff(e, t) {
        if (bi())
            return null;
        Xh(e, t, !0)
    }
    function J0() {
        ry(function() {
            (we & 6) !== 0 ? Fi(Fu, X0) : cf()
        })
    }
    function Yo() {
        if (za === 0) {
            var e = Un;
            e === 0 && (e = _r,
            _r <<= 1,
            (_r & 261888) === 0 && (_r = 256)),
            za = e
        }
        return za
    }
    function mf(e) {
        return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Ar("" + e)
    }
    function gf(e, t) {
        var a = t.ownerDocument.createElement("input");
        return a.name = t.name,
        a.value = t.value,
        e.id && a.setAttribute("form", e.id),
        t.parentNode.insertBefore(a, t),
        e = new FormData(e),
        a.parentNode.removeChild(a),
        e
    }
    function Q0(e, t, a, s, o) {
        if (t === "submit" && a && a.stateNode === o) {
            var u = mf((o[dt] || null).action)
              , m = s.submitter;
            m && (t = (t = m[dt] || null) ? mf(t.formAction) : m.getAttribute("formAction"),
            t !== null && (u = t,
            m = null));
            var b = new kr("action","action",null,s,o);
            e.push({
                event: b,
                listeners: [{
                    instance: null,
                    listener: function() {
                        if (s.defaultPrevented) {
                            if (za !== 0) {
                                var x = m ? gf(o, m) : new FormData(o);
                                uo(a, {
                                    pending: !0,
                                    data: x,
                                    method: o.method,
                                    action: u
                                }, null, x)
                            }
                        } else
                            typeof u == "function" && (b.preventDefault(),
                            x = m ? gf(o, m) : new FormData(o),
                            uo(a, {
                                pending: !0,
                                data: x,
                                method: o.method,
                                action: u
                            }, u, x))
                    },
                    currentTarget: o
                }]
            })
        }
    }
    for (var Ko = 0; Ko < jl.length; Ko++) {
        var Xo = jl[Ko]
          , I0 = Xo.toLowerCase()
          , Z0 = Xo[0].toUpperCase() + Xo.slice(1);
        $t(I0, "on" + Z0)
    }
    $t(Kc, "onAnimationEnd"),
    $t(Xc, "onAnimationIteration"),
    $t(Jc, "onAnimationStart"),
    $t("dblclick", "onDoubleClick"),
    $t("focusin", "onFocus"),
    $t("focusout", "onBlur"),
    $t(h0, "onTransitionRun"),
    $t(f0, "onTransitionStart"),
    $t(m0, "onTransitionCancel"),
    $t(Qc, "onTransitionEnd"),
    xn("onMouseEnter", ["mouseout", "mouseover"]),
    xn("onMouseLeave", ["mouseout", "mouseover"]),
    xn("onPointerEnter", ["pointerout", "pointerover"]),
    xn("onPointerLeave", ["pointerout", "pointerover"]),
    Xa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    Xa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
    Xa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Xa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    Xa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
    Xa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Is = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
      , P0 = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Is));
    function yf(e, t) {
        t = (t & 4) !== 0;
        for (var a = 0; a < e.length; a++) {
            var s = e[a]
              , o = s.event;
            s = s.listeners;
            e: {
                var u = void 0;
                if (t)
                    for (var m = s.length - 1; 0 <= m; m--) {
                        var b = s[m]
                          , x = b.instance
                          , O = b.currentTarget;
                        if (b = b.listener,
                        x !== u && o.isPropagationStopped())
                            break e;
                        u = b,
                        o.currentTarget = O;
                        try {
                            u(o)
                        } catch (M) {
                            zr(M)
                        }
                        o.currentTarget = null,
                        u = x
                    }
                else
                    for (m = 0; m < s.length; m++) {
                        if (b = s[m],
                        x = b.instance,
                        O = b.currentTarget,
                        b = b.listener,
                        x !== u && o.isPropagationStopped())
                            break e;
                        u = b,
                        o.currentTarget = O;
                        try {
                            u(o)
                        } catch (M) {
                            zr(M)
                        }
                        o.currentTarget = null,
                        u = x
                    }
            }
        }
    }
    function me(e, t) {
        var a = t[sl];
        a === void 0 && (a = t[sl] = new Set);
        var s = e + "__bubble";
        a.has(s) || (pf(t, e, 2, !1),
        a.add(s))
    }
    function Jo(e, t, a) {
        var s = 0;
        t && (s |= 4),
        pf(a, e, s, t)
    }
    var _i = "_reactListening" + Math.random().toString(36).slice(2);
    function Qo(e) {
        if (!e[_i]) {
            e[_i] = !0,
            uc.forEach(function(a) {
                a !== "selectionchange" && (P0.has(a) || Jo(a, !1, e),
                Jo(a, !0, e))
            });
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[_i] || (t[_i] = !0,
            Jo("selectionchange", !1, t))
        }
    }
    function pf(e, t, a, s) {
        switch (Xf(t)) {
        case 2:
            var o = Ty;
            break;
        case 8:
            o = jy;
            break;
        default:
            o = uu
        }
        a = o.bind(null, t, a, e),
        o = void 0,
        !fl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0),
        s ? o !== void 0 ? e.addEventListener(t, a, {
            capture: !0,
            passive: o
        }) : e.addEventListener(t, a, !0) : o !== void 0 ? e.addEventListener(t, a, {
            passive: o
        }) : e.addEventListener(t, a, !1)
    }
    function Io(e, t, a, s, o) {
        var u = s;
        if ((t & 1) === 0 && (t & 2) === 0 && s !== null)
            e: for (; ; ) {
                if (s === null)
                    return;
                var m = s.tag;
                if (m === 3 || m === 4) {
                    var b = s.stateNode.containerInfo;
                    if (b === o)
                        break;
                    if (m === 4)
                        for (m = s.return; m !== null; ) {
                            var x = m.tag;
                            if ((x === 3 || x === 4) && m.stateNode.containerInfo === o)
                                return;
                            m = m.return
                        }
                    for (; b !== null; ) {
                        if (m = pn(b),
                        m === null)
                            return;
                        if (x = m.tag,
                        x === 5 || x === 6 || x === 26 || x === 27) {
                            s = u = m;
                            continue e
                        }
                        b = b.parentNode
                    }
                }
                s = s.return
            }
        _c(function() {
            var O = u
              , M = dl(a)
              , H = [];
            e: {
                var R = Ic.get(e);
                if (R !== void 0) {
                    var k = kr
                      , Z = e;
                    switch (e) {
                    case "keypress":
                        if (Rr(a) === 0)
                            break e;
                    case "keydown":
                    case "keyup":
                        k = Yg;
                        break;
                    case "focusin":
                        Z = "focus",
                        k = pl;
                        break;
                    case "focusout":
                        Z = "blur",
                        k = pl;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        k = pl;
                        break;
                    case "click":
                        if (a.button === 2)
                            break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        k = Ec;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        k = kg;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        k = Jg;
                        break;
                    case Kc:
                    case Xc:
                    case Jc:
                        k = zg;
                        break;
                    case Qc:
                        k = Ig;
                        break;
                    case "scroll":
                    case "scrollend":
                        k = Rg;
                        break;
                    case "wheel":
                        k = Pg;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        k = qg;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        k = jc;
                        break;
                    case "toggle":
                    case "beforetoggle":
                        k = Fg
                    }
                    var ae = (t & 4) !== 0
                      , Ce = !ae && (e === "scroll" || e === "scrollend")
                      , N = ae ? R !== null ? R + "Capture" : null : R;
                    ae = [];
                    for (var w = O, A; w !== null; ) {
                        var B = w;
                        if (A = B.stateNode,
                        B = B.tag,
                        B !== 5 && B !== 26 && B !== 27 || A === null || N === null || (B = ps(w, N),
                        B != null && ae.push(Zs(w, B, A))),
                        Ce)
                            break;
                        w = w.return
                    }
                    0 < ae.length && (R = new k(R,Z,null,a,M),
                    H.push({
                        event: R,
                        listeners: ae
                    }))
                }
            }
            if ((t & 7) === 0) {
                e: {
                    if (R = e === "mouseover" || e === "pointerover",
                    k = e === "mouseout" || e === "pointerout",
                    R && a !== cl && (Z = a.relatedTarget || a.fromElement) && (pn(Z) || Z[yn]))
                        break e;
                    if ((k || R) && (R = M.window === M ? M : (R = M.ownerDocument) ? R.defaultView || R.parentWindow : window,
                    k ? (Z = a.relatedTarget || a.toElement,
                    k = O,
                    Z = Z ? pn(Z) : null,
                    Z !== null && (Ce = d(Z),
                    ae = Z.tag,
                    Z !== Ce || ae !== 5 && ae !== 27 && ae !== 6) && (Z = null)) : (k = null,
                    Z = O),
                    k !== Z)) {
                        if (ae = Ec,
                        B = "onMouseLeave",
                        N = "onMouseEnter",
                        w = "mouse",
                        (e === "pointerout" || e === "pointerover") && (ae = jc,
                        B = "onPointerLeave",
                        N = "onPointerEnter",
                        w = "pointer"),
                        Ce = k == null ? R : ys(k),
                        A = Z == null ? R : ys(Z),
                        R = new ae(B,w + "leave",k,a,M),
                        R.target = Ce,
                        R.relatedTarget = A,
                        B = null,
                        pn(M) === O && (ae = new ae(N,w + "enter",Z,a,M),
                        ae.target = A,
                        ae.relatedTarget = Ce,
                        B = ae),
                        Ce = B,
                        k && Z)
                            t: {
                                for (ae = W0,
                                N = k,
                                w = Z,
                                A = 0,
                                B = N; B; B = ae(B))
                                    A++;
                                B = 0;
                                for (var ee = w; ee; ee = ae(ee))
                                    B++;
                                for (; 0 < A - B; )
                                    N = ae(N),
                                    A--;
                                for (; 0 < B - A; )
                                    w = ae(w),
                                    B--;
                                for (; A--; ) {
                                    if (N === w || w !== null && N === w.alternate) {
                                        ae = N;
                                        break t
                                    }
                                    N = ae(N),
                                    w = ae(w)
                                }
                                ae = null
                            }
                        else
                            ae = null;
                        k !== null && bf(H, R, k, ae, !1),
                        Z !== null && Ce !== null && bf(H, Ce, Z, ae, !0)
                    }
                }
                e: {
                    if (R = O ? ys(O) : window,
                    k = R.nodeName && R.nodeName.toLowerCase(),
                    k === "select" || k === "input" && R.type === "file")
                        var ve = Uc;
                    else if (kc(R))
                        if (zc)
                            ve = u0;
                        else {
                            ve = l0;
                            var W = i0
                        }
                    else
                        k = R.nodeName,
                        !k || k.toLowerCase() !== "input" || R.type !== "checkbox" && R.type !== "radio" ? O && ul(O.elementType) && (ve = Uc) : ve = o0;
                    if (ve && (ve = ve(e, O))) {
                        Dc(H, ve, a, M);
                        break e
                    }
                    W && W(e, R, O),
                    e === "focusout" && O && R.type === "number" && O.memoizedProps.value != null && ol(R, "number", R.value)
                }
                switch (W = O ? ys(O) : window,
                e) {
                case "focusin":
                    (kc(W) || W.contentEditable === "true") && (jn = W,
                    Sl = O,
                    Ts = null);
                    break;
                case "focusout":
                    Ts = Sl = jn = null;
                    break;
                case "mousedown":
                    El = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    El = !1,
                    Vc(H, a, M);
                    break;
                case "selectionchange":
                    if (d0)
                        break;
                case "keydown":
                case "keyup":
                    Vc(H, a, M)
                }
                var ue;
                if (vl)
                    e: {
                        switch (e) {
                        case "compositionstart":
                            var pe = "onCompositionStart";
                            break e;
                        case "compositionend":
                            pe = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            pe = "onCompositionUpdate";
                            break e
                        }
                        pe = void 0
                    }
                else
                    Tn ? Rc(e, a) && (pe = "onCompositionEnd") : e === "keydown" && a.keyCode === 229 && (pe = "onCompositionStart");
                pe && (Nc && a.locale !== "ko" && (Tn || pe !== "onCompositionStart" ? pe === "onCompositionEnd" && Tn && (ue = wc()) : (va = M,
                ml = "value"in va ? va.value : va.textContent,
                Tn = !0)),
                W = wi(O, pe),
                0 < W.length && (pe = new Tc(pe,e,null,a,M),
                H.push({
                    event: pe,
                    listeners: W
                }),
                ue ? pe.data = ue : (ue = Cc(a),
                ue !== null && (pe.data = ue)))),
                (ue = t0 ? a0(e, a) : n0(e, a)) && (pe = wi(O, "onBeforeInput"),
                0 < pe.length && (W = new Tc("onBeforeInput","beforeinput",null,a,M),
                H.push({
                    event: W,
                    listeners: pe
                }),
                W.data = ue)),
                Q0(H, e, O, a, M)
            }
            yf(H, t)
        })
    }
    function Zs(e, t, a) {
        return {
            instance: e,
            listener: t,
            currentTarget: a
        }
    }
    function wi(e, t) {
        for (var a = t + "Capture", s = []; e !== null; ) {
            var o = e
              , u = o.stateNode;
            if (o = o.tag,
            o !== 5 && o !== 26 && o !== 27 || u === null || (o = ps(e, a),
            o != null && s.unshift(Zs(e, o, u)),
            o = ps(e, t),
            o != null && s.push(Zs(e, o, u))),
            e.tag === 3)
                return s;
            e = e.return
        }
        return []
    }
    function W0(e) {
        if (e === null)
            return null;
        do
            e = e.return;
        while (e && e.tag !== 5 && e.tag !== 27);
        return e || null
    }
    function bf(e, t, a, s, o) {
        for (var u = t._reactName, m = []; a !== null && a !== s; ) {
            var b = a
              , x = b.alternate
              , O = b.stateNode;
            if (b = b.tag,
            x !== null && x === s)
                break;
            b !== 5 && b !== 26 && b !== 27 || O === null || (x = O,
            o ? (O = ps(a, u),
            O != null && m.unshift(Zs(a, O, x))) : o || (O = ps(a, u),
            O != null && m.push(Zs(a, O, x)))),
            a = a.return
        }
        m.length !== 0 && e.push({
            event: t,
            listeners: m
        })
    }
    var F0 = /\r\n?/g
      , ey = /\u0000|\uFFFD/g;
    function vf(e) {
        return (typeof e == "string" ? e : "" + e).replace(F0, `
`).replace(ey, "")
    }
    function xf(e, t) {
        return t = vf(t),
        vf(e) === t
    }
    function Re(e, t, a, s, o, u) {
        switch (a) {
        case "children":
            typeof s == "string" ? t === "body" || t === "textarea" && s === "" || wn(e, s) : (typeof s == "number" || typeof s == "bigint") && t !== "body" && wn(e, "" + s);
            break;
        case "className":
            jr(e, "class", s);
            break;
        case "tabIndex":
            jr(e, "tabindex", s);
            break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
            jr(e, a, s);
            break;
        case "style":
            vc(e, s, u);
            break;
        case "data":
            if (t !== "object") {
                jr(e, "data", s);
                break
            }
        case "src":
        case "href":
            if (s === "" && (t !== "a" || a !== "href")) {
                e.removeAttribute(a);
                break
            }
            if (s == null || typeof s == "function" || typeof s == "symbol" || typeof s == "boolean") {
                e.removeAttribute(a);
                break
            }
            s = Ar("" + s),
            e.setAttribute(a, s);
            break;
        case "action":
        case "formAction":
            if (typeof s == "function") {
                e.setAttribute(a, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                break
            } else
                typeof u == "function" && (a === "formAction" ? (t !== "input" && Re(e, t, "name", o.name, o, null),
                Re(e, t, "formEncType", o.formEncType, o, null),
                Re(e, t, "formMethod", o.formMethod, o, null),
                Re(e, t, "formTarget", o.formTarget, o, null)) : (Re(e, t, "encType", o.encType, o, null),
                Re(e, t, "method", o.method, o, null),
                Re(e, t, "target", o.target, o, null)));
            if (s == null || typeof s == "symbol" || typeof s == "boolean") {
                e.removeAttribute(a);
                break
            }
            s = Ar("" + s),
            e.setAttribute(a, s);
            break;
        case "onClick":
            s != null && (e.onclick = Wt);
            break;
        case "onScroll":
            s != null && me("scroll", e);
            break;
        case "onScrollEnd":
            s != null && me("scrollend", e);
            break;
        case "dangerouslySetInnerHTML":
            if (s != null) {
                if (typeof s != "object" || !("__html"in s))
                    throw Error(l(61));
                if (a = s.__html,
                a != null) {
                    if (o.children != null)
                        throw Error(l(60));
                    e.innerHTML = a
                }
            }
            break;
        case "multiple":
            e.multiple = s && typeof s != "function" && typeof s != "symbol";
            break;
        case "muted":
            e.muted = s && typeof s != "function" && typeof s != "symbol";
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
            break;
        case "autoFocus":
            break;
        case "xlinkHref":
            if (s == null || typeof s == "function" || typeof s == "boolean" || typeof s == "symbol") {
                e.removeAttribute("xlink:href");
                break
            }
            a = Ar("" + s),
            e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a);
            break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
            s != null && typeof s != "function" && typeof s != "symbol" ? e.setAttribute(a, "" + s) : e.removeAttribute(a);
            break;
        case "inert":
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
            s && typeof s != "function" && typeof s != "symbol" ? e.setAttribute(a, "") : e.removeAttribute(a);
            break;
        case "capture":
        case "download":
            s === !0 ? e.setAttribute(a, "") : s !== !1 && s != null && typeof s != "function" && typeof s != "symbol" ? e.setAttribute(a, s) : e.removeAttribute(a);
            break;
        case "cols":
        case "rows":
        case "size":
        case "span":
            s != null && typeof s != "function" && typeof s != "symbol" && !isNaN(s) && 1 <= s ? e.setAttribute(a, s) : e.removeAttribute(a);
            break;
        case "rowSpan":
        case "start":
            s == null || typeof s == "function" || typeof s == "symbol" || isNaN(s) ? e.removeAttribute(a) : e.setAttribute(a, s);
            break;
        case "popover":
            me("beforetoggle", e),
            me("toggle", e),
            Tr(e, "popover", s);
            break;
        case "xlinkActuate":
            Pt(e, "http://www.w3.org/1999/xlink", "xlink:actuate", s);
            break;
        case "xlinkArcrole":
            Pt(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", s);
            break;
        case "xlinkRole":
            Pt(e, "http://www.w3.org/1999/xlink", "xlink:role", s);
            break;
        case "xlinkShow":
            Pt(e, "http://www.w3.org/1999/xlink", "xlink:show", s);
            break;
        case "xlinkTitle":
            Pt(e, "http://www.w3.org/1999/xlink", "xlink:title", s);
            break;
        case "xlinkType":
            Pt(e, "http://www.w3.org/1999/xlink", "xlink:type", s);
            break;
        case "xmlBase":
            Pt(e, "http://www.w3.org/XML/1998/namespace", "xml:base", s);
            break;
        case "xmlLang":
            Pt(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", s);
            break;
        case "xmlSpace":
            Pt(e, "http://www.w3.org/XML/1998/namespace", "xml:space", s);
            break;
        case "is":
            Tr(e, "is", s);
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = Ag.get(a) || a,
            Tr(e, a, s))
        }
    }
    function Zo(e, t, a, s, o, u) {
        switch (a) {
        case "style":
            vc(e, s, u);
            break;
        case "dangerouslySetInnerHTML":
            if (s != null) {
                if (typeof s != "object" || !("__html"in s))
                    throw Error(l(61));
                if (a = s.__html,
                a != null) {
                    if (o.children != null)
                        throw Error(l(60));
                    e.innerHTML = a
                }
            }
            break;
        case "children":
            typeof s == "string" ? wn(e, s) : (typeof s == "number" || typeof s == "bigint") && wn(e, "" + s);
            break;
        case "onScroll":
            s != null && me("scroll", e);
            break;
        case "onScrollEnd":
            s != null && me("scrollend", e);
            break;
        case "onClick":
            s != null && (e.onclick = Wt);
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            if (!cc.hasOwnProperty(a))
                e: {
                    if (a[0] === "o" && a[1] === "n" && (o = a.endsWith("Capture"),
                    t = a.slice(2, o ? a.length - 7 : void 0),
                    u = e[dt] || null,
                    u = u != null ? u[a] : null,
                    typeof u == "function" && e.removeEventListener(t, u, o),
                    typeof s == "function")) {
                        typeof u != "function" && u !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)),
                        e.addEventListener(t, s, o);
                        break e
                    }
                    a in e ? e[a] = s : s === !0 ? e.setAttribute(a, "") : Tr(e, a, s)
                }
        }
    }
    function rt(e, t, a) {
        switch (t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
            break;
        case "img":
            me("error", e),
            me("load", e);
            var s = !1, o = !1, u;
            for (u in a)
                if (a.hasOwnProperty(u)) {
                    var m = a[u];
                    if (m != null)
                        switch (u) {
                        case "src":
                            s = !0;
                            break;
                        case "srcSet":
                            o = !0;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(l(137, t));
                        default:
                            Re(e, t, u, m, a, null)
                        }
                }
            o && Re(e, t, "srcSet", a.srcSet, a, null),
            s && Re(e, t, "src", a.src, a, null);
            return;
        case "input":
            me("invalid", e);
            var b = u = m = o = null
              , x = null
              , O = null;
            for (s in a)
                if (a.hasOwnProperty(s)) {
                    var M = a[s];
                    if (M != null)
                        switch (s) {
                        case "name":
                            o = M;
                            break;
                        case "type":
                            m = M;
                            break;
                        case "checked":
                            x = M;
                            break;
                        case "defaultChecked":
                            O = M;
                            break;
                        case "value":
                            u = M;
                            break;
                        case "defaultValue":
                            b = M;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (M != null)
                                throw Error(l(137, t));
                            break;
                        default:
                            Re(e, t, s, M, a, null)
                        }
                }
            gc(e, u, b, x, O, m, o, !1);
            return;
        case "select":
            me("invalid", e),
            s = m = u = null;
            for (o in a)
                if (a.hasOwnProperty(o) && (b = a[o],
                b != null))
                    switch (o) {
                    case "value":
                        u = b;
                        break;
                    case "defaultValue":
                        m = b;
                        break;
                    case "multiple":
                        s = b;
                    default:
                        Re(e, t, o, b, a, null)
                    }
            t = u,
            a = m,
            e.multiple = !!s,
            t != null ? _n(e, !!s, t, !1) : a != null && _n(e, !!s, a, !0);
            return;
        case "textarea":
            me("invalid", e),
            u = o = s = null;
            for (m in a)
                if (a.hasOwnProperty(m) && (b = a[m],
                b != null))
                    switch (m) {
                    case "value":
                        s = b;
                        break;
                    case "defaultValue":
                        o = b;
                        break;
                    case "children":
                        u = b;
                        break;
                    case "dangerouslySetInnerHTML":
                        if (b != null)
                            throw Error(l(91));
                        break;
                    default:
                        Re(e, t, m, b, a, null)
                    }
            pc(e, s, o, u);
            return;
        case "option":
            for (x in a)
                a.hasOwnProperty(x) && (s = a[x],
                s != null) && (x === "selected" ? e.selected = s && typeof s != "function" && typeof s != "symbol" : Re(e, t, x, s, a, null));
            return;
        case "dialog":
            me("beforetoggle", e),
            me("toggle", e),
            me("cancel", e),
            me("close", e);
            break;
        case "iframe":
        case "object":
            me("load", e);
            break;
        case "video":
        case "audio":
            for (s = 0; s < Is.length; s++)
                me(Is[s], e);
            break;
        case "image":
            me("error", e),
            me("load", e);
            break;
        case "details":
            me("toggle", e);
            break;
        case "embed":
        case "source":
        case "link":
            me("error", e),
            me("load", e);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
            for (O in a)
                if (a.hasOwnProperty(O) && (s = a[O],
                s != null))
                    switch (O) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        throw Error(l(137, t));
                    default:
                        Re(e, t, O, s, a, null)
                    }
            return;
        default:
            if (ul(t)) {
                for (M in a)
                    a.hasOwnProperty(M) && (s = a[M],
                    s !== void 0 && Zo(e, t, M, s, a, void 0));
                return
            }
        }
        for (b in a)
            a.hasOwnProperty(b) && (s = a[b],
            s != null && Re(e, t, b, s, a, null))
    }
    function ty(e, t, a, s) {
        switch (t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
            break;
        case "input":
            var o = null
              , u = null
              , m = null
              , b = null
              , x = null
              , O = null
              , M = null;
            for (k in a) {
                var H = a[k];
                if (a.hasOwnProperty(k) && H != null)
                    switch (k) {
                    case "checked":
                        break;
                    case "value":
                        break;
                    case "defaultValue":
                        x = H;
                    default:
                        s.hasOwnProperty(k) || Re(e, t, k, null, s, H)
                    }
            }
            for (var R in s) {
                var k = s[R];
                if (H = a[R],
                s.hasOwnProperty(R) && (k != null || H != null))
                    switch (R) {
                    case "type":
                        u = k;
                        break;
                    case "name":
                        o = k;
                        break;
                    case "checked":
                        O = k;
                        break;
                    case "defaultChecked":
                        M = k;
                        break;
                    case "value":
                        m = k;
                        break;
                    case "defaultValue":
                        b = k;
                        break;
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (k != null)
                            throw Error(l(137, t));
                        break;
                    default:
                        k !== H && Re(e, t, R, k, s, H)
                    }
            }
            ll(e, m, b, x, O, M, u, o);
            return;
        case "select":
            k = m = b = R = null;
            for (u in a)
                if (x = a[u],
                a.hasOwnProperty(u) && x != null)
                    switch (u) {
                    case "value":
                        break;
                    case "multiple":
                        k = x;
                    default:
                        s.hasOwnProperty(u) || Re(e, t, u, null, s, x)
                    }
            for (o in s)
                if (u = s[o],
                x = a[o],
                s.hasOwnProperty(o) && (u != null || x != null))
                    switch (o) {
                    case "value":
                        R = u;
                        break;
                    case "defaultValue":
                        b = u;
                        break;
                    case "multiple":
                        m = u;
                    default:
                        u !== x && Re(e, t, o, u, s, x)
                    }
            t = b,
            a = m,
            s = k,
            R != null ? _n(e, !!a, R, !1) : !!s != !!a && (t != null ? _n(e, !!a, t, !0) : _n(e, !!a, a ? [] : "", !1));
            return;
        case "textarea":
            k = R = null;
            for (b in a)
                if (o = a[b],
                a.hasOwnProperty(b) && o != null && !s.hasOwnProperty(b))
                    switch (b) {
                    case "value":
                        break;
                    case "children":
                        break;
                    default:
                        Re(e, t, b, null, s, o)
                    }
            for (m in s)
                if (o = s[m],
                u = a[m],
                s.hasOwnProperty(m) && (o != null || u != null))
                    switch (m) {
                    case "value":
                        R = o;
                        break;
                    case "defaultValue":
                        k = o;
                        break;
                    case "children":
                        break;
                    case "dangerouslySetInnerHTML":
                        if (o != null)
                            throw Error(l(91));
                        break;
                    default:
                        o !== u && Re(e, t, m, o, s, u)
                    }
            yc(e, R, k);
            return;
        case "option":
            for (var Z in a)
                R = a[Z],
                a.hasOwnProperty(Z) && R != null && !s.hasOwnProperty(Z) && (Z === "selected" ? e.selected = !1 : Re(e, t, Z, null, s, R));
            for (x in s)
                R = s[x],
                k = a[x],
                s.hasOwnProperty(x) && R !== k && (R != null || k != null) && (x === "selected" ? e.selected = R && typeof R != "function" && typeof R != "symbol" : Re(e, t, x, R, s, k));
            return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
            for (var ae in a)
                R = a[ae],
                a.hasOwnProperty(ae) && R != null && !s.hasOwnProperty(ae) && Re(e, t, ae, null, s, R);
            for (O in s)
                if (R = s[O],
                k = a[O],
                s.hasOwnProperty(O) && R !== k && (R != null || k != null))
                    switch (O) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (R != null)
                            throw Error(l(137, t));
                        break;
                    default:
                        Re(e, t, O, R, s, k)
                    }
            return;
        default:
            if (ul(t)) {
                for (var Ce in a)
                    R = a[Ce],
                    a.hasOwnProperty(Ce) && R !== void 0 && !s.hasOwnProperty(Ce) && Zo(e, t, Ce, void 0, s, R);
                for (M in s)
                    R = s[M],
                    k = a[M],
                    !s.hasOwnProperty(M) || R === k || R === void 0 && k === void 0 || Zo(e, t, M, R, s, k);
                return
            }
        }
        for (var N in a)
            R = a[N],
            a.hasOwnProperty(N) && R != null && !s.hasOwnProperty(N) && Re(e, t, N, null, s, R);
        for (H in s)
            R = s[H],
            k = a[H],
            !s.hasOwnProperty(H) || R === k || R == null && k == null || Re(e, t, H, R, s, k)
    }
    function _f(e) {
        switch (e) {
        case "css":
        case "script":
        case "font":
        case "img":
        case "image":
        case "input":
        case "link":
            return !0;
        default:
            return !1
        }
    }
    function ay() {
        if (typeof performance.getEntriesByType == "function") {
            for (var e = 0, t = 0, a = performance.getEntriesByType("resource"), s = 0; s < a.length; s++) {
                var o = a[s]
                  , u = o.transferSize
                  , m = o.initiatorType
                  , b = o.duration;
                if (u && b && _f(m)) {
                    for (m = 0,
                    b = o.responseEnd,
                    s += 1; s < a.length; s++) {
                        var x = a[s]
                          , O = x.startTime;
                        if (O > b)
                            break;
                        var M = x.transferSize
                          , H = x.initiatorType;
                        M && _f(H) && (x = x.responseEnd,
                        m += M * (x < b ? 1 : (b - O) / (x - O)))
                    }
                    if (--s,
                    t += 8 * (u + m) / (o.duration / 1e3),
                    e++,
                    10 < e)
                        break
                }
            }
            if (0 < e)
                return t / e / 1e6
        }
        return navigator.connection && (e = navigator.connection.downlink,
        typeof e == "number") ? e : 5
    }
    var Po = null
      , Wo = null;
    function Si(e) {
        return e.nodeType === 9 ? e : e.ownerDocument
    }
    function wf(e) {
        switch (e) {
        case "http://www.w3.org/2000/svg":
            return 1;
        case "http://www.w3.org/1998/Math/MathML":
            return 2;
        default:
            return 0
        }
    }
    function Sf(e, t) {
        if (e === 0)
            switch (t) {
            case "svg":
                return 1;
            case "math":
                return 2;
            default:
                return 0
            }
        return e === 1 && t === "foreignObject" ? 0 : e
    }
    function Fo(e, t) {
        return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
    }
    var eu = null;
    function ny() {
        var e = window.event;
        return e && e.type === "popstate" ? e === eu ? !1 : (eu = e,
        !0) : (eu = null,
        !1)
    }
    var Ef = typeof setTimeout == "function" ? setTimeout : void 0
      , sy = typeof clearTimeout == "function" ? clearTimeout : void 0
      , Tf = typeof Promise == "function" ? Promise : void 0
      , ry = typeof queueMicrotask == "function" ? queueMicrotask : typeof Tf < "u" ? function(e) {
        return Tf.resolve(null).then(e).catch(iy)
    }
    : Ef;
    function iy(e) {
        setTimeout(function() {
            throw e
        })
    }
    function Ma(e) {
        return e === "head"
    }
    function jf(e, t) {
        var a = t
          , s = 0;
        do {
            var o = a.nextSibling;
            if (e.removeChild(a),
            o && o.nodeType === 8)
                if (a = o.data,
                a === "/$" || a === "/&") {
                    if (s === 0) {
                        e.removeChild(o),
                        Fn(t);
                        return
                    }
                    s--
                } else if (a === "$" || a === "$?" || a === "$~" || a === "$!" || a === "&")
                    s++;
                else if (a === "html")
                    Ps(e.ownerDocument.documentElement);
                else if (a === "head") {
                    a = e.ownerDocument.head,
                    Ps(a);
                    for (var u = a.firstChild; u; ) {
                        var m = u.nextSibling
                          , b = u.nodeName;
                        u[gs] || b === "SCRIPT" || b === "STYLE" || b === "LINK" && u.rel.toLowerCase() === "stylesheet" || a.removeChild(u),
                        u = m
                    }
                } else
                    a === "body" && Ps(e.ownerDocument.body);
            a = o
        } while (a);
        Fn(t)
    }
    function Nf(e, t) {
        var a = e;
        e = 0;
        do {
            var s = a.nextSibling;
            if (a.nodeType === 1 ? t ? (a._stashedDisplay = a.style.display,
            a.style.display = "none") : (a.style.display = a._stashedDisplay || "",
            a.getAttribute("style") === "" && a.removeAttribute("style")) : a.nodeType === 3 && (t ? (a._stashedText = a.nodeValue,
            a.nodeValue = "") : a.nodeValue = a._stashedText || ""),
            s && s.nodeType === 8)
                if (a = s.data,
                a === "/$") {
                    if (e === 0)
                        break;
                    e--
                } else
                    a !== "$" && a !== "$?" && a !== "$~" && a !== "$!" || e++;
            a = s
        } while (a)
    }
    function tu(e) {
        var t = e.firstChild;
        for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
            var a = t;
            switch (t = t.nextSibling,
            a.nodeName) {
            case "HTML":
            case "HEAD":
            case "BODY":
                tu(a),
                rl(a);
                continue;
            case "SCRIPT":
            case "STYLE":
                continue;
            case "LINK":
                if (a.rel.toLowerCase() === "stylesheet")
                    continue
            }
            e.removeChild(a)
        }
    }
    function ly(e, t, a, s) {
        for (; e.nodeType === 1; ) {
            var o = a;
            if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                if (!s && (e.nodeName !== "INPUT" || e.type !== "hidden"))
                    break
            } else if (s) {
                if (!e[gs])
                    switch (t) {
                    case "meta":
                        if (!e.hasAttribute("itemprop"))
                            break;
                        return e;
                    case "link":
                        if (u = e.getAttribute("rel"),
                        u === "stylesheet" && e.hasAttribute("data-precedence"))
                            break;
                        if (u !== o.rel || e.getAttribute("href") !== (o.href == null || o.href === "" ? null : o.href) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin) || e.getAttribute("title") !== (o.title == null ? null : o.title))
                            break;
                        return e;
                    case "style":
                        if (e.hasAttribute("data-precedence"))
                            break;
                        return e;
                    case "script":
                        if (u = e.getAttribute("src"),
                        (u !== (o.src == null ? null : o.src) || e.getAttribute("type") !== (o.type == null ? null : o.type) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin)) && u && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                            break;
                        return e;
                    default:
                        return e
                    }
            } else if (t === "input" && e.type === "hidden") {
                var u = o.name == null ? null : "" + o.name;
                if (o.type === "hidden" && e.getAttribute("name") === u)
                    return e
            } else
                return e;
            if (e = Lt(e.nextSibling),
            e === null)
                break
        }
        return null
    }
    function oy(e, t, a) {
        if (t === "")
            return null;
        for (; e.nodeType !== 3; )
            if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = Lt(e.nextSibling),
            e === null))
                return null;
        return e
    }
    function Af(e, t) {
        for (; e.nodeType !== 8; )
            if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = Lt(e.nextSibling),
            e === null))
                return null;
        return e
    }
    function au(e) {
        return e.data === "$?" || e.data === "$~"
    }
    function nu(e) {
        return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading"
    }
    function uy(e, t) {
        var a = e.ownerDocument;
        if (e.data === "$~")
            e._reactRetry = t;
        else if (e.data !== "$?" || a.readyState !== "loading")
            t();
        else {
            var s = function() {
                t(),
                a.removeEventListener("DOMContentLoaded", s)
            };
            a.addEventListener("DOMContentLoaded", s),
            e._reactRetry = s
        }
    }
    function Lt(e) {
        for (; e != null; e = e.nextSibling) {
            var t = e.nodeType;
            if (t === 1 || t === 3)
                break;
            if (t === 8) {
                if (t = e.data,
                t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F")
                    break;
                if (t === "/$" || t === "/&")
                    return null
            }
        }
        return e
    }
    var su = null;
    function Of(e) {
        e = e.nextSibling;
        for (var t = 0; e; ) {
            if (e.nodeType === 8) {
                var a = e.data;
                if (a === "/$" || a === "/&") {
                    if (t === 0)
                        return Lt(e.nextSibling);
                    t--
                } else
                    a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&" || t++
            }
            e = e.nextSibling
        }
        return null
    }
    function Rf(e) {
        e = e.previousSibling;
        for (var t = 0; e; ) {
            if (e.nodeType === 8) {
                var a = e.data;
                if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
                    if (t === 0)
                        return e;
                    t--
                } else
                    a !== "/$" && a !== "/&" || t++
            }
            e = e.previousSibling
        }
        return null
    }
    function Cf(e, t, a) {
        switch (t = Si(a),
        e) {
        case "html":
            if (e = t.documentElement,
            !e)
                throw Error(l(452));
            return e;
        case "head":
            if (e = t.head,
            !e)
                throw Error(l(453));
            return e;
        case "body":
            if (e = t.body,
            !e)
                throw Error(l(454));
            return e;
        default:
            throw Error(l(451))
        }
    }
    function Ps(e) {
        for (var t = e.attributes; t.length; )
            e.removeAttributeNode(t[0]);
        rl(e)
    }
    var Ht = new Map
      , kf = new Set;
    function Ei(e) {
        return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument
    }
    var ma = J.d;
    J.d = {
        f: cy,
        r: dy,
        D: hy,
        C: fy,
        L: my,
        m: gy,
        X: py,
        S: yy,
        M: by
    };
    function cy() {
        var e = ma.f()
          , t = gi();
        return e || t
    }
    function dy(e) {
        var t = bn(e);
        t !== null && t.tag === 5 && t.type === "form" ? Qd(t) : ma.r(e)
    }
    var Zn = typeof document > "u" ? null : document;
    function Df(e, t, a) {
        var s = Zn;
        if (s && typeof t == "string" && t) {
            var o = kt(t);
            o = 'link[rel="' + e + '"][href="' + o + '"]',
            typeof a == "string" && (o += '[crossorigin="' + a + '"]'),
            kf.has(o) || (kf.add(o),
            e = {
                rel: e,
                crossOrigin: a,
                href: t
            },
            s.querySelector(o) === null && (t = s.createElement("link"),
            rt(t, "link", e),
            Fe(t),
            s.head.appendChild(t)))
        }
    }
    function hy(e) {
        ma.D(e),
        Df("dns-prefetch", e, null)
    }
    function fy(e, t) {
        ma.C(e, t),
        Df("preconnect", e, t)
    }
    function my(e, t, a) {
        ma.L(e, t, a);
        var s = Zn;
        if (s && e && t) {
            var o = 'link[rel="preload"][as="' + kt(t) + '"]';
            t === "image" && a && a.imageSrcSet ? (o += '[imagesrcset="' + kt(a.imageSrcSet) + '"]',
            typeof a.imageSizes == "string" && (o += '[imagesizes="' + kt(a.imageSizes) + '"]')) : o += '[href="' + kt(e) + '"]';
            var u = o;
            switch (t) {
            case "style":
                u = Pn(e);
                break;
            case "script":
                u = Wn(e)
            }
            Ht.has(u) || (e = j({
                rel: "preload",
                href: t === "image" && a && a.imageSrcSet ? void 0 : e,
                as: t
            }, a),
            Ht.set(u, e),
            s.querySelector(o) !== null || t === "style" && s.querySelector(Ws(u)) || t === "script" && s.querySelector(Fs(u)) || (t = s.createElement("link"),
            rt(t, "link", e),
            Fe(t),
            s.head.appendChild(t)))
        }
    }
    function gy(e, t) {
        ma.m(e, t);
        var a = Zn;
        if (a && e) {
            var s = t && typeof t.as == "string" ? t.as : "script"
              , o = 'link[rel="modulepreload"][as="' + kt(s) + '"][href="' + kt(e) + '"]'
              , u = o;
            switch (s) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
                u = Wn(e)
            }
            if (!Ht.has(u) && (e = j({
                rel: "modulepreload",
                href: e
            }, t),
            Ht.set(u, e),
            a.querySelector(o) === null)) {
                switch (s) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    if (a.querySelector(Fs(u)))
                        return
                }
                s = a.createElement("link"),
                rt(s, "link", e),
                Fe(s),
                a.head.appendChild(s)
            }
        }
    }
    function yy(e, t, a) {
        ma.S(e, t, a);
        var s = Zn;
        if (s && e) {
            var o = vn(s).hoistableStyles
              , u = Pn(e);
            t = t || "default";
            var m = o.get(u);
            if (!m) {
                var b = {
                    loading: 0,
                    preload: null
                };
                if (m = s.querySelector(Ws(u)))
                    b.loading = 5;
                else {
                    e = j({
                        rel: "stylesheet",
                        href: e,
                        "data-precedence": t
                    }, a),
                    (a = Ht.get(u)) && ru(e, a);
                    var x = m = s.createElement("link");
                    Fe(x),
                    rt(x, "link", e),
                    x._p = new Promise(function(O, M) {
                        x.onload = O,
                        x.onerror = M
                    }
                    ),
                    x.addEventListener("load", function() {
                        b.loading |= 1
                    }),
                    x.addEventListener("error", function() {
                        b.loading |= 2
                    }),
                    b.loading |= 4,
                    Ti(m, t, s)
                }
                m = {
                    type: "stylesheet",
                    instance: m,
                    count: 1,
                    state: b
                },
                o.set(u, m)
            }
        }
    }
    function py(e, t) {
        ma.X(e, t);
        var a = Zn;
        if (a && e) {
            var s = vn(a).hoistableScripts
              , o = Wn(e)
              , u = s.get(o);
            u || (u = a.querySelector(Fs(o)),
            u || (e = j({
                src: e,
                async: !0
            }, t),
            (t = Ht.get(o)) && iu(e, t),
            u = a.createElement("script"),
            Fe(u),
            rt(u, "link", e),
            a.head.appendChild(u)),
            u = {
                type: "script",
                instance: u,
                count: 1,
                state: null
            },
            s.set(o, u))
        }
    }
    function by(e, t) {
        ma.M(e, t);
        var a = Zn;
        if (a && e) {
            var s = vn(a).hoistableScripts
              , o = Wn(e)
              , u = s.get(o);
            u || (u = a.querySelector(Fs(o)),
            u || (e = j({
                src: e,
                async: !0,
                type: "module"
            }, t),
            (t = Ht.get(o)) && iu(e, t),
            u = a.createElement("script"),
            Fe(u),
            rt(u, "link", e),
            a.head.appendChild(u)),
            u = {
                type: "script",
                instance: u,
                count: 1,
                state: null
            },
            s.set(o, u))
        }
    }
    function Uf(e, t, a, s) {
        var o = (o = he.current) ? Ei(o) : null;
        if (!o)
            throw Error(l(446));
        switch (e) {
        case "meta":
        case "title":
            return null;
        case "style":
            return typeof a.precedence == "string" && typeof a.href == "string" ? (t = Pn(a.href),
            a = vn(o).hoistableStyles,
            s = a.get(t),
            s || (s = {
                type: "style",
                instance: null,
                count: 0,
                state: null
            },
            a.set(t, s)),
            s) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        case "link":
            if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
                e = Pn(a.href);
                var u = vn(o).hoistableStyles
                  , m = u.get(e);
                if (m || (o = o.ownerDocument || o,
                m = {
                    type: "stylesheet",
                    instance: null,
                    count: 0,
                    state: {
                        loading: 0,
                        preload: null
                    }
                },
                u.set(e, m),
                (u = o.querySelector(Ws(e))) && !u._p && (m.instance = u,
                m.state.loading = 5),
                Ht.has(e) || (a = {
                    rel: "preload",
                    as: "style",
                    href: a.href,
                    crossOrigin: a.crossOrigin,
                    integrity: a.integrity,
                    media: a.media,
                    hrefLang: a.hrefLang,
                    referrerPolicy: a.referrerPolicy
                },
                Ht.set(e, a),
                u || vy(o, e, a, m.state))),
                t && s === null)
                    throw Error(l(528, ""));
                return m
            }
            if (t && s !== null)
                throw Error(l(529, ""));
            return null;
        case "script":
            return t = a.async,
            a = a.src,
            typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Wn(a),
            a = vn(o).hoistableScripts,
            s = a.get(t),
            s || (s = {
                type: "script",
                instance: null,
                count: 0,
                state: null
            },
            a.set(t, s)),
            s) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        default:
            throw Error(l(444, e))
        }
    }
    function Pn(e) {
        return 'href="' + kt(e) + '"'
    }
    function Ws(e) {
        return 'link[rel="stylesheet"][' + e + "]"
    }
    function zf(e) {
        return j({}, e, {
            "data-precedence": e.precedence,
            precedence: null
        })
    }
    function vy(e, t, a, s) {
        e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? s.loading = 1 : (t = e.createElement("link"),
        s.preload = t,
        t.addEventListener("load", function() {
            return s.loading |= 1
        }),
        t.addEventListener("error", function() {
            return s.loading |= 2
        }),
        rt(t, "link", a),
        Fe(t),
        e.head.appendChild(t))
    }
    function Wn(e) {
        return '[src="' + kt(e) + '"]'
    }
    function Fs(e) {
        return "script[async]" + e
    }
    function Mf(e, t, a) {
        if (t.count++,
        t.instance === null)
            switch (t.type) {
            case "style":
                var s = e.querySelector('style[data-href~="' + kt(a.href) + '"]');
                if (s)
                    return t.instance = s,
                    Fe(s),
                    s;
                var o = j({}, a, {
                    "data-href": a.href,
                    "data-precedence": a.precedence,
                    href: null,
                    precedence: null
                });
                return s = (e.ownerDocument || e).createElement("style"),
                Fe(s),
                rt(s, "style", o),
                Ti(s, a.precedence, e),
                t.instance = s;
            case "stylesheet":
                o = Pn(a.href);
                var u = e.querySelector(Ws(o));
                if (u)
                    return t.state.loading |= 4,
                    t.instance = u,
                    Fe(u),
                    u;
                s = zf(a),
                (o = Ht.get(o)) && ru(s, o),
                u = (e.ownerDocument || e).createElement("link"),
                Fe(u);
                var m = u;
                return m._p = new Promise(function(b, x) {
                    m.onload = b,
                    m.onerror = x
                }
                ),
                rt(u, "link", s),
                t.state.loading |= 4,
                Ti(u, a.precedence, e),
                t.instance = u;
            case "script":
                return u = Wn(a.src),
                (o = e.querySelector(Fs(u))) ? (t.instance = o,
                Fe(o),
                o) : (s = a,
                (o = Ht.get(u)) && (s = j({}, a),
                iu(s, o)),
                e = e.ownerDocument || e,
                o = e.createElement("script"),
                Fe(o),
                rt(o, "link", s),
                e.head.appendChild(o),
                t.instance = o);
            case "void":
                return null;
            default:
                throw Error(l(443, t.type))
            }
        else
            t.type === "stylesheet" && (t.state.loading & 4) === 0 && (s = t.instance,
            t.state.loading |= 4,
            Ti(s, a.precedence, e));
        return t.instance
    }
    function Ti(e, t, a) {
        for (var s = a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), o = s.length ? s[s.length - 1] : null, u = o, m = 0; m < s.length; m++) {
            var b = s[m];
            if (b.dataset.precedence === t)
                u = b;
            else if (u !== o)
                break
        }
        u ? u.parentNode.insertBefore(e, u.nextSibling) : (t = a.nodeType === 9 ? a.head : a,
        t.insertBefore(e, t.firstChild))
    }
    function ru(e, t) {
        e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
        e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
        e.title == null && (e.title = t.title)
    }
    function iu(e, t) {
        e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
        e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
        e.integrity == null && (e.integrity = t.integrity)
    }
    var ji = null;
    function qf(e, t, a) {
        if (ji === null) {
            var s = new Map
              , o = ji = new Map;
            o.set(a, s)
        } else
            o = ji,
            s = o.get(a),
            s || (s = new Map,
            o.set(a, s));
        if (s.has(e))
            return s;
        for (s.set(e, null),
        a = a.getElementsByTagName(e),
        o = 0; o < a.length; o++) {
            var u = a[o];
            if (!(u[gs] || u[tt] || e === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
                var m = u.getAttribute(t) || "";
                m = e + m;
                var b = s.get(m);
                b ? b.push(u) : s.set(m, [u])
            }
        }
        return s
    }
    function Bf(e, t, a) {
        e = e.ownerDocument || e,
        e.head.insertBefore(a, t === "title" ? e.querySelector("head > title") : null)
    }
    function xy(e, t, a) {
        if (a === 1 || t.itemProp != null)
            return !1;
        switch (e) {
        case "meta":
        case "title":
            return !0;
        case "style":
            if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
                break;
            return !0;
        case "link":
            if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
                break;
            return t.rel === "stylesheet" ? (e = t.disabled,
            typeof t.precedence == "string" && e == null) : !0;
        case "script":
            if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
                return !0
        }
        return !1
    }
    function Lf(e) {
        return !(e.type === "stylesheet" && (e.state.loading & 3) === 0)
    }
    function _y(e, t, a, s) {
        if (a.type === "stylesheet" && (typeof s.media != "string" || matchMedia(s.media).matches !== !1) && (a.state.loading & 4) === 0) {
            if (a.instance === null) {
                var o = Pn(s.href)
                  , u = t.querySelector(Ws(o));
                if (u) {
                    t = u._p,
                    t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++,
                    e = Ni.bind(e),
                    t.then(e, e)),
                    a.state.loading |= 4,
                    a.instance = u,
                    Fe(u);
                    return
                }
                u = t.ownerDocument || t,
                s = zf(s),
                (o = Ht.get(o)) && ru(s, o),
                u = u.createElement("link"),
                Fe(u);
                var m = u;
                m._p = new Promise(function(b, x) {
                    m.onload = b,
                    m.onerror = x
                }
                ),
                rt(u, "link", s),
                a.instance = u
            }
            e.stylesheets === null && (e.stylesheets = new Map),
            e.stylesheets.set(a, t),
            (t = a.state.preload) && (a.state.loading & 3) === 0 && (e.count++,
            a = Ni.bind(e),
            t.addEventListener("load", a),
            t.addEventListener("error", a))
        }
    }
    var lu = 0;
    function wy(e, t) {
        return e.stylesheets && e.count === 0 && Oi(e, e.stylesheets),
        0 < e.count || 0 < e.imgCount ? function(a) {
            var s = setTimeout(function() {
                if (e.stylesheets && Oi(e, e.stylesheets),
                e.unsuspend) {
                    var u = e.unsuspend;
                    e.unsuspend = null,
                    u()
                }
            }, 6e4 + t);
            0 < e.imgBytes && lu === 0 && (lu = 62500 * ay());
            var o = setTimeout(function() {
                if (e.waitingForImages = !1,
                e.count === 0 && (e.stylesheets && Oi(e, e.stylesheets),
                e.unsuspend)) {
                    var u = e.unsuspend;
                    e.unsuspend = null,
                    u()
                }
            }, (e.imgBytes > lu ? 50 : 800) + t);
            return e.unsuspend = a,
            function() {
                e.unsuspend = null,
                clearTimeout(s),
                clearTimeout(o)
            }
        }
        : null
    }
    function Ni() {
        if (this.count--,
        this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
            if (this.stylesheets)
                Oi(this, this.stylesheets);
            else if (this.unsuspend) {
                var e = this.unsuspend;
                this.unsuspend = null,
                e()
            }
        }
    }
    var Ai = null;
    function Oi(e, t) {
        e.stylesheets = null,
        e.unsuspend !== null && (e.count++,
        Ai = new Map,
        t.forEach(Sy, e),
        Ai = null,
        Ni.call(e))
    }
    function Sy(e, t) {
        if (!(t.state.loading & 4)) {
            var a = Ai.get(e);
            if (a)
                var s = a.get(null);
            else {
                a = new Map,
                Ai.set(e, a);
                for (var o = e.querySelectorAll("link[data-precedence],style[data-precedence]"), u = 0; u < o.length; u++) {
                    var m = o[u];
                    (m.nodeName === "LINK" || m.getAttribute("media") !== "not all") && (a.set(m.dataset.precedence, m),
                    s = m)
                }
                s && a.set(null, s)
            }
            o = t.instance,
            m = o.getAttribute("data-precedence"),
            u = a.get(m) || s,
            u === s && a.set(null, o),
            a.set(m, o),
            this.count++,
            s = Ni.bind(this),
            o.addEventListener("load", s),
            o.addEventListener("error", s),
            u ? u.parentNode.insertBefore(o, u.nextSibling) : (e = e.nodeType === 9 ? e.head : e,
            e.insertBefore(o, e.firstChild)),
            t.state.loading |= 4
        }
    }
    var er = {
        $$typeof: G,
        Provider: null,
        Consumer: null,
        _currentValue: te,
        _currentValue2: te,
        _threadCount: 0
    };
    function Ey(e, t, a, s, o, u, m, b, x) {
        this.tag = 1,
        this.containerInfo = e,
        this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = -1,
        this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null,
        this.callbackPriority = 0,
        this.expirationTimes = tl(-1),
        this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
        this.entanglements = tl(0),
        this.hiddenUpdates = tl(null),
        this.identifierPrefix = s,
        this.onUncaughtError = o,
        this.onCaughtError = u,
        this.onRecoverableError = m,
        this.pooledCache = null,
        this.pooledCacheLanes = 0,
        this.formState = x,
        this.incompleteTransitions = new Map
    }
    function Hf(e, t, a, s, o, u, m, b, x, O, M, H) {
        return e = new Ey(e,t,a,m,x,O,M,H,b),
        t = 1,
        u === !0 && (t |= 24),
        u = wt(3, null, null, t),
        e.current = u,
        u.stateNode = e,
        t = Ll(),
        t.refCount++,
        e.pooledCache = t,
        t.refCount++,
        u.memoizedState = {
            element: s,
            isDehydrated: a,
            cache: t
        },
        Vl(u),
        e
    }
    function $f(e) {
        return e ? (e = On,
        e) : On
    }
    function Gf(e, t, a, s, o, u) {
        o = $f(o),
        s.context === null ? s.context = o : s.pendingContext = o,
        s = Ta(t),
        s.payload = {
            element: a
        },
        u = u === void 0 ? null : u,
        u !== null && (s.callback = u),
        a = ja(e, s, t),
        a !== null && (pt(a, e, t),
        ks(a, e, t))
    }
    function Vf(e, t) {
        if (e = e.memoizedState,
        e !== null && e.dehydrated !== null) {
            var a = e.retryLane;
            e.retryLane = a !== 0 && a < t ? a : t
        }
    }
    function ou(e, t) {
        Vf(e, t),
        (e = e.alternate) && Vf(e, t)
    }
    function Yf(e) {
        if (e.tag === 13 || e.tag === 31) {
            var t = Za(e, 67108864);
            t !== null && pt(t, e, 67108864),
            ou(e, 67108864)
        }
    }
    function Kf(e) {
        if (e.tag === 13 || e.tag === 31) {
            var t = Nt();
            t = al(t);
            var a = Za(e, t);
            a !== null && pt(a, e, t),
            ou(e, t)
        }
    }
    var Ri = !0;
    function Ty(e, t, a, s) {
        var o = D.T;
        D.T = null;
        var u = J.p;
        try {
            J.p = 2,
            uu(e, t, a, s)
        } finally {
            J.p = u,
            D.T = o
        }
    }
    function jy(e, t, a, s) {
        var o = D.T;
        D.T = null;
        var u = J.p;
        try {
            J.p = 8,
            uu(e, t, a, s)
        } finally {
            J.p = u,
            D.T = o
        }
    }
    function uu(e, t, a, s) {
        if (Ri) {
            var o = cu(s);
            if (o === null)
                Io(e, t, s, Ci, a),
                Jf(e, s);
            else if (Ay(o, e, t, a, s))
                s.stopPropagation();
            else if (Jf(e, s),
            t & 4 && -1 < Ny.indexOf(e)) {
                for (; o !== null; ) {
                    var u = bn(o);
                    if (u !== null)
                        switch (u.tag) {
                        case 3:
                            if (u = u.stateNode,
                            u.current.memoizedState.isDehydrated) {
                                var m = Ka(u.pendingLanes);
                                if (m !== 0) {
                                    var b = u;
                                    for (b.pendingLanes |= 2,
                                    b.entangledLanes |= 2; m; ) {
                                        var x = 1 << 31 - xt(m);
                                        b.entanglements[1] |= x,
                                        m &= ~x
                                    }
                                    Zt(u),
                                    (we & 6) === 0 && (fi = bt() + 500,
                                    Qs(0))
                                }
                            }
                            break;
                        case 31:
                        case 13:
                            b = Za(u, 2),
                            b !== null && pt(b, u, 2),
                            gi(),
                            ou(u, 2)
                        }
                    if (u = cu(s),
                    u === null && Io(e, t, s, Ci, a),
                    u === o)
                        break;
                    o = u
                }
                o !== null && s.stopPropagation()
            } else
                Io(e, t, s, null, a)
        }
    }
    function cu(e) {
        return e = dl(e),
        du(e)
    }
    var Ci = null;
    function du(e) {
        if (Ci = null,
        e = pn(e),
        e !== null) {
            var t = d(e);
            if (t === null)
                e = null;
            else {
                var a = t.tag;
                if (a === 13) {
                    if (e = f(t),
                    e !== null)
                        return e;
                    e = null
                } else if (a === 31) {
                    if (e = y(t),
                    e !== null)
                        return e;
                    e = null
                } else if (a === 3) {
                    if (t.stateNode.current.memoizedState.isDehydrated)
                        return t.tag === 3 ? t.stateNode.containerInfo : null;
                    e = null
                } else
                    t !== e && (e = null)
            }
        }
        return Ci = e,
        null
    }
    function Xf(e) {
        switch (e) {
        case "beforetoggle":
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "toggle":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 2;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 8;
        case "message":
            switch (hg()) {
            case Fu:
                return 2;
            case ec:
                return 8;
            case xr:
            case fg:
                return 32;
            case tc:
                return 268435456;
            default:
                return 32
            }
        default:
            return 32
        }
    }
    var hu = !1
      , qa = null
      , Ba = null
      , La = null
      , tr = new Map
      , ar = new Map
      , Ha = []
      , Ny = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function Jf(e, t) {
        switch (e) {
        case "focusin":
        case "focusout":
            qa = null;
            break;
        case "dragenter":
        case "dragleave":
            Ba = null;
            break;
        case "mouseover":
        case "mouseout":
            La = null;
            break;
        case "pointerover":
        case "pointerout":
            tr.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            ar.delete(t.pointerId)
        }
    }
    function nr(e, t, a, s, o, u) {
        return e === null || e.nativeEvent !== u ? (e = {
            blockedOn: t,
            domEventName: a,
            eventSystemFlags: s,
            nativeEvent: u,
            targetContainers: [o]
        },
        t !== null && (t = bn(t),
        t !== null && Yf(t)),
        e) : (e.eventSystemFlags |= s,
        t = e.targetContainers,
        o !== null && t.indexOf(o) === -1 && t.push(o),
        e)
    }
    function Ay(e, t, a, s, o) {
        switch (t) {
        case "focusin":
            return qa = nr(qa, e, t, a, s, o),
            !0;
        case "dragenter":
            return Ba = nr(Ba, e, t, a, s, o),
            !0;
        case "mouseover":
            return La = nr(La, e, t, a, s, o),
            !0;
        case "pointerover":
            var u = o.pointerId;
            return tr.set(u, nr(tr.get(u) || null, e, t, a, s, o)),
            !0;
        case "gotpointercapture":
            return u = o.pointerId,
            ar.set(u, nr(ar.get(u) || null, e, t, a, s, o)),
            !0
        }
        return !1
    }
    function Qf(e) {
        var t = pn(e.target);
        if (t !== null) {
            var a = d(t);
            if (a !== null) {
                if (t = a.tag,
                t === 13) {
                    if (t = f(a),
                    t !== null) {
                        e.blockedOn = t,
                        lc(e.priority, function() {
                            Kf(a)
                        });
                        return
                    }
                } else if (t === 31) {
                    if (t = y(a),
                    t !== null) {
                        e.blockedOn = t,
                        lc(e.priority, function() {
                            Kf(a)
                        });
                        return
                    }
                } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
                    e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
                    return
                }
            }
        }
        e.blockedOn = null
    }
    function ki(e) {
        if (e.blockedOn !== null)
            return !1;
        for (var t = e.targetContainers; 0 < t.length; ) {
            var a = cu(e.nativeEvent);
            if (a === null) {
                a = e.nativeEvent;
                var s = new a.constructor(a.type,a);
                cl = s,
                a.target.dispatchEvent(s),
                cl = null
            } else
                return t = bn(a),
                t !== null && Yf(t),
                e.blockedOn = a,
                !1;
            t.shift()
        }
        return !0
    }
    function If(e, t, a) {
        ki(e) && a.delete(t)
    }
    function Oy() {
        hu = !1,
        qa !== null && ki(qa) && (qa = null),
        Ba !== null && ki(Ba) && (Ba = null),
        La !== null && ki(La) && (La = null),
        tr.forEach(If),
        ar.forEach(If)
    }
    function Di(e, t) {
        e.blockedOn === t && (e.blockedOn = null,
        hu || (hu = !0,
        r.unstable_scheduleCallback(r.unstable_NormalPriority, Oy)))
    }
    var Ui = null;
    function Zf(e) {
        Ui !== e && (Ui = e,
        r.unstable_scheduleCallback(r.unstable_NormalPriority, function() {
            Ui === e && (Ui = null);
            for (var t = 0; t < e.length; t += 3) {
                var a = e[t]
                  , s = e[t + 1]
                  , o = e[t + 2];
                if (typeof s != "function") {
                    if (du(s || a) === null)
                        continue;
                    break
                }
                var u = bn(a);
                u !== null && (e.splice(t, 3),
                t -= 3,
                uo(u, {
                    pending: !0,
                    data: o,
                    method: a.method,
                    action: s
                }, s, o))
            }
        }))
    }
    function Fn(e) {
        function t(x) {
            return Di(x, e)
        }
        qa !== null && Di(qa, e),
        Ba !== null && Di(Ba, e),
        La !== null && Di(La, e),
        tr.forEach(t),
        ar.forEach(t);
        for (var a = 0; a < Ha.length; a++) {
            var s = Ha[a];
            s.blockedOn === e && (s.blockedOn = null)
        }
        for (; 0 < Ha.length && (a = Ha[0],
        a.blockedOn === null); )
            Qf(a),
            a.blockedOn === null && Ha.shift();
        if (a = (e.ownerDocument || e).$$reactFormReplay,
        a != null)
            for (s = 0; s < a.length; s += 3) {
                var o = a[s]
                  , u = a[s + 1]
                  , m = o[dt] || null;
                if (typeof u == "function")
                    m || Zf(a);
                else if (m) {
                    var b = null;
                    if (u && u.hasAttribute("formAction")) {
                        if (o = u,
                        m = u[dt] || null)
                            b = m.formAction;
                        else if (du(o) !== null)
                            continue
                    } else
                        b = m.action;
                    typeof b == "function" ? a[s + 1] = b : (a.splice(s, 3),
                    s -= 3),
                    Zf(a)
                }
            }
    }
    function Pf() {
        function e(u) {
            u.canIntercept && u.info === "react-transition" && u.intercept({
                handler: function() {
                    return new Promise(function(m) {
                        return o = m
                    }
                    )
                },
                focusReset: "manual",
                scroll: "manual"
            })
        }
        function t() {
            o !== null && (o(),
            o = null),
            s || setTimeout(a, 20)
        }
        function a() {
            if (!s && !navigation.transition) {
                var u = navigation.currentEntry;
                u && u.url != null && navigation.navigate(u.url, {
                    state: u.getState(),
                    info: "react-transition",
                    history: "replace"
                })
            }
        }
        if (typeof navigation == "object") {
            var s = !1
              , o = null;
            return navigation.addEventListener("navigate", e),
            navigation.addEventListener("navigatesuccess", t),
            navigation.addEventListener("navigateerror", t),
            setTimeout(a, 100),
            function() {
                s = !0,
                navigation.removeEventListener("navigate", e),
                navigation.removeEventListener("navigatesuccess", t),
                navigation.removeEventListener("navigateerror", t),
                o !== null && (o(),
                o = null)
            }
        }
    }
    function fu(e) {
        this._internalRoot = e
    }
    zi.prototype.render = fu.prototype.render = function(e) {
        var t = this._internalRoot;
        if (t === null)
            throw Error(l(409));
        var a = t.current
          , s = Nt();
        Gf(a, s, e, t, null, null)
    }
    ,
    zi.prototype.unmount = fu.prototype.unmount = function() {
        var e = this._internalRoot;
        if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            Gf(e.current, 2, null, e, null, null),
            gi(),
            t[yn] = null
        }
    }
    ;
    function zi(e) {
        this._internalRoot = e
    }
    zi.prototype.unstable_scheduleHydration = function(e) {
        if (e) {
            var t = ic();
            e = {
                blockedOn: null,
                target: e,
                priority: t
            };
            for (var a = 0; a < Ha.length && t !== 0 && t < Ha[a].priority; a++)
                ;
            Ha.splice(a, 0, e),
            a === 0 && Qf(e)
        }
    }
    ;
    var Wf = n.version;
    if (Wf !== "19.2.3")
        throw Error(l(527, Wf, "19.2.3"));
    J.findDOMNode = function(e) {
        var t = e._reactInternals;
        if (t === void 0)
            throw typeof e.render == "function" ? Error(l(188)) : (e = Object.keys(e).join(","),
            Error(l(268, e)));
        return e = p(t),
        e = e !== null ? v(e) : null,
        e = e === null ? null : e.stateNode,
        e
    }
    ;
    var Ry = {
        bundleType: 0,
        version: "19.2.3",
        rendererPackageName: "react-dom",
        currentDispatcherRef: D,
        reconcilerVersion: "19.2.3"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var Mi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Mi.isDisabled && Mi.supportsFiber)
            try {
                hs = Mi.inject(Ry),
                vt = Mi
            } catch {}
    }
    return rr.createRoot = function(e, t) {
        if (!c(e))
            throw Error(l(299));
        var a = !1
          , s = ""
          , o = sh
          , u = rh
          , m = ih;
        return t != null && (t.unstable_strictMode === !0 && (a = !0),
        t.identifierPrefix !== void 0 && (s = t.identifierPrefix),
        t.onUncaughtError !== void 0 && (o = t.onUncaughtError),
        t.onCaughtError !== void 0 && (u = t.onCaughtError),
        t.onRecoverableError !== void 0 && (m = t.onRecoverableError)),
        t = Hf(e, 1, !1, null, null, a, s, null, o, u, m, Pf),
        e[yn] = t.current,
        Qo(e),
        new fu(t)
    }
    ,
    rr.hydrateRoot = function(e, t, a) {
        if (!c(e))
            throw Error(l(299));
        var s = !1
          , o = ""
          , u = sh
          , m = rh
          , b = ih
          , x = null;
        return a != null && (a.unstable_strictMode === !0 && (s = !0),
        a.identifierPrefix !== void 0 && (o = a.identifierPrefix),
        a.onUncaughtError !== void 0 && (u = a.onUncaughtError),
        a.onCaughtError !== void 0 && (m = a.onCaughtError),
        a.onRecoverableError !== void 0 && (b = a.onRecoverableError),
        a.formState !== void 0 && (x = a.formState)),
        t = Hf(e, 1, !0, t, a ?? null, s, o, x, u, m, b, Pf),
        t.context = $f(null),
        a = t.current,
        s = Nt(),
        s = al(s),
        o = Ta(s),
        o.callback = null,
        ja(a, o, s),
        a = s,
        t.current.lanes = a,
        ms(t, a),
        Zt(t),
        e[yn] = t.current,
        Qo(e),
        new zi(t)
    }
    ,
    rr.version = "19.2.3",
    rr
}
var om;
function Hy() {
    if (om)
        return yu.exports;
    om = 1;
    function r() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)
            } catch (n) {
                console.error(n)
            }
    }
    return r(),
    yu.exports = Ly(),
    yu.exports
}
var $y = Hy();
let ir = null;
const Ki = () => (ir || (ir = new (window.AudioContext || window.webkitAudioContext)),
ir.state === "suspended" && ir.resume(),
ir)
  , $m = () => {
    try {
        const r = Ki()
          , n = r.createOscillator()
          , i = r.createGain()
          , l = r.createBiquadFilter();
        n.connect(l),
        l.connect(i),
        i.connect(r.destination),
        n.frequency.setValueAtTime(220, r.currentTime),
        n.frequency.exponentialRampToValueAtTime(180, r.currentTime + .06),
        n.type = "sine",
        l.type = "lowpass",
        l.frequency.value = 800,
        l.Q.value = 1,
        i.gain.setValueAtTime(.12, r.currentTime),
        i.gain.exponentialRampToValueAtTime(.001, r.currentTime + .06),
        n.start(r.currentTime),
        n.stop(r.currentTime + .06)
    } catch {}
}
  , Ou = () => {
    try {
        const r = Ki()
          , n = r.createOscillator()
          , i = r.createGain()
          , l = r.createBiquadFilter();
        n.connect(l),
        l.connect(i),
        i.connect(r.destination),
        n.frequency.value = 294,
        n.type = "sine",
        l.type = "lowpass",
        l.frequency.value = 1e3,
        i.gain.setValueAtTime(0, r.currentTime),
        i.gain.linearRampToValueAtTime(.1, r.currentTime + .02),
        i.gain.exponentialRampToValueAtTime(.001, r.currentTime + .12),
        n.start(r.currentTime),
        n.stop(r.currentTime + .12);
        const c = r.createOscillator()
          , d = r.createGain()
          , f = r.createBiquadFilter();
        c.connect(f),
        f.connect(d),
        d.connect(r.destination),
        c.frequency.value = 392,
        c.type = "sine",
        f.type = "lowpass",
        f.frequency.value = 1200,
        d.gain.setValueAtTime(0, r.currentTime + .08),
        d.gain.linearRampToValueAtTime(.08, r.currentTime + .1),
        d.gain.exponentialRampToValueAtTime(.001, r.currentTime + .25),
        c.start(r.currentTime + .08),
        c.stop(r.currentTime + .25)
    } catch {}
}
  , Yu = () => {
    try {
        const r = Ki()
          , n = r.createOscillator()
          , i = r.createGain()
          , l = r.createBiquadFilter();
        n.connect(l),
        l.connect(i),
        i.connect(r.destination),
        n.frequency.setValueAtTime(330, r.currentTime),
        n.frequency.exponentialRampToValueAtTime(280, r.currentTime + .04),
        n.type = "sine",
        l.type = "lowpass",
        l.frequency.value = 900,
        l.Q.value = .7,
        i.gain.setValueAtTime(.1, r.currentTime),
        i.gain.exponentialRampToValueAtTime(.001, r.currentTime + .04),
        n.start(r.currentTime),
        n.stop(r.currentTime + .05)
    } catch {}
}
  , Gy = () => {
    try {
        const r = Ki()
          , n = r.createOscillator()
          , i = r.createGain()
          , l = r.createBiquadFilter();
        n.connect(l),
        l.connect(i),
        i.connect(r.destination),
        n.frequency.setValueAtTime(200, r.currentTime),
        n.frequency.exponentialRampToValueAtTime(350, r.currentTime + .08),
        n.type = "sine",
        l.type = "lowpass",
        l.frequency.value = 700,
        l.Q.value = .5,
        i.gain.setValueAtTime(0, r.currentTime),
        i.gain.linearRampToValueAtTime(.08, r.currentTime + .015),
        i.gain.exponentialRampToValueAtTime(.001, r.currentTime + .1),
        n.start(r.currentTime),
        n.stop(r.currentTime + .1)
    } catch {}
}
;
function Vy({officer: r, onLogout: n, onDashboard: i}) {
    const [l,c] = K.useState(!1)
      , d = K.useRef(null);
    K.useEffect( () => {
        const p = v => {
            d.current && !d.current.contains(v.target) && c(!1)
        }
        ;
        return document.addEventListener("mousedown", p),
        () => document.removeEventListener("mousedown", p)
    }
    , []);
    const f = () => {
        $m(),
        c(!l)
    }
      , y = () => {
        c(!1),
        i()
    }
      , g = () => {
        c(!1),
        n()
    }
    ;
    return h.jsx("header", {
        className: "bg-[#1a2332] border-b border-gray-700 sticky top-0 z-50",
        children: h.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 py-3 flex items-center justify-between",
            children: [h.jsxs("div", {
                className: "flex items-center gap-3",
                children: [h.jsx("img", {
                    src: "./fib.webp",
                    alt: "FIB Logo",
                    className: "w-10 h-10 rounded-lg shadow-lg object-cover"
                }), h.jsxs("div", {
                    children: [h.jsx("h1", {
                        className: "text-lg font-bold uppercase tracking-wider text-[#F0B20D]",
                        children: "FIB Portal"
                    }), h.jsx("p", {
                        className: "text-xs text-gray-500 uppercase tracking-wide",
                        children: "Federal Tactical Operations"
                    })]
                })]
            }), r && h.jsxs("div", {
                className: "relative",
                ref: d,
                children: [h.jsxs("button", {
                    onClick: f,
                    className: "flex items-center gap-3 px-3 py-1 rounded-lg hover:bg-[#2a3442] transition-all group",
                    children: [h.jsx("div", {
                        className: "w-8 h-8 bg-amber-500/20 rounded-full flex items-center justify-center border border-amber-500/30 group-hover:border-amber-500/50 transition-colors",
                        children: h.jsx("span", {
                            className: "text-amber-500 font-bold text-sm",
                            children: r.name?.charAt(0) || "?"
                        })
                    }), h.jsxs("div", {
                        className: "hidden sm:block text-left",
                        children: [h.jsx("p", {
                            className: "text-sm text-gray-300 font-medium",
                            children: r.name
                        }), h.jsxs("p", {
                            className: "text-xs text-gray-500",
                            children: ["Badge #", r.badgeNumber]
                        })]
                    }), h.jsx("svg", {
                        className: `w-4 h-4 text-gray-500 transition-transform ${l ? "rotate-180" : ""}`,
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: h.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M19 9l-7 7-7-7"
                        })
                    })]
                }), l && h.jsxs("div", {
                    className: "absolute right-0 mt-2 w-48 bg-[#1a2332] border border-gray-700 rounded-xl shadow-xl overflow-hidden z-50 tab-content",
                    children: [h.jsxs("div", {
                        className: "sm:hidden px-4 py-3 border-b border-gray-700",
                        children: [h.jsx("p", {
                            className: "text-sm text-gray-300 font-medium",
                            children: r.name
                        }), h.jsxs("p", {
                            className: "text-xs text-gray-500",
                            children: ["Badge #", r.badgeNumber]
                        })]
                    }), h.jsxs("button", {
                        onClick: y,
                        className: "w-full px-4 py-3 flex items-center gap-3 hover:bg-[#2a3442] transition-colors text-left",
                        children: [h.jsx("span", {
                            className: "text-lg",
                            children: "📊"
                        }), h.jsx("span", {
                            className: "text-gray-300 font-medium",
                            children: "Dashboard"
                        })]
                    }), h.jsx("div", {
                        className: "border-t border-gray-700"
                    }), h.jsxs("button", {
                        onClick: g,
                        className: "w-full px-4 py-3 flex items-center gap-3 hover:bg-red-500/10 transition-colors text-left",
                        children: [h.jsx("span", {
                            className: "text-lg",
                            children: "🚪"
                        }), h.jsx("span", {
                            className: "text-red-400 font-medium",
                            children: "Logout"
                        })]
                    })]
                })]
            })]
        })
    })
}
function Ku() {
    const r = K.useRef(null)
      , n = K.useRef({
        x: 0,
        y: 0
    })
      , i = K.useRef([])
      , l = K.useRef([])
      , c = K.useRef(null);
    return K.useEffect( () => {
        const d = r.current
          , f = d.getContext("2d");
        let y = window.innerWidth
          , g = window.innerHeight;
        const p = () => {
            y = window.innerWidth,
            g = window.innerHeight,
            d.width = y,
            d.height = g
        }
        ;
        p(),
        window.addEventListener("resize", p);
        const v = () => {
            const _ = []
              , T = Math.floor(y * g / 15e3);
            for (let C = 0; C < T; C++)
                _.push({
                    x: Math.random() * y,
                    y: Math.random() * g,
                    size: Math.random() * 2 + .5,
                    speedX: (Math.random() - .5) * .3,
                    speedY: (Math.random() - .5) * .3,
                    opacity: Math.random() * .3 + .1,
                    pulse: Math.random() * Math.PI * 2
                });
            return _
        }
        ;
        i.current = v();
        const j = _ => {
            n.current = {
                x: _.clientX,
                y: _.clientY
            },
            Math.random() > .3 && l.current.push({
                x: _.clientX + (Math.random() - .5) * 8,
                y: _.clientY + (Math.random() - .5) * 8,
                size: Math.random() * 4 + 2,
                speedX: (Math.random() - .5) * .5,
                speedY: (Math.random() - .5) * .5,
                opacity: .5,
                life: 1,
                color: Math.random() > .5 ? "#f59e0b" : "#3b82f6"
            }),
            l.current.length > 80 && (l.current = l.current.slice(-80))
        }
        ;
        window.addEventListener("mousemove", j);
        const E = () => {
            f.clearRect(0, 0, y, g),
            i.current.forEach(_ => {
                _.x += _.speedX,
                _.y += _.speedY,
                _.pulse += .02,
                _.x < 0 && (_.x = y),
                _.x > y && (_.x = 0),
                _.y < 0 && (_.y = g),
                _.y > g && (_.y = 0);
                const T = _.opacity * (.7 + Math.sin(_.pulse) * .3);
                f.beginPath(),
                f.arc(_.x, _.y, _.size, 0, Math.PI * 2),
                f.fillStyle = `rgba(245, 158, 11, ${T})`,
                f.fill()
            }
            ),
            i.current.forEach( (_, T) => {
                i.current.slice(T + 1).forEach(C => {
                    const L = _.x - C.x
                      , U = _.y - C.y
                      , Y = Math.sqrt(L * L + U * U);
                    Y < 100 && (f.beginPath(),
                    f.moveTo(_.x, _.y),
                    f.lineTo(C.x, C.y),
                    f.strokeStyle = `rgba(245, 158, 11, ${.1 * (1 - Y / 100)})`,
                    f.lineWidth = .5,
                    f.stroke())
                }
                )
            }
            ),
            l.current = l.current.filter(_ => (_.x += _.speedX,
            _.y += _.speedY,
            _.speedX *= .99,
            _.speedY *= .99,
            _.life -= .008,
            _.opacity = _.life * .5,
            _.size *= .995,
            _.life <= 0 ? !1 : (f.beginPath(),
            f.arc(_.x, _.y, _.size, 0, Math.PI * 2),
            f.fillStyle = _.color.replace(")", `, ${_.opacity})`).replace("rgb", "rgba").replace("#f59e0b", "rgba(245, 158, 11").replace("#3b82f6", "rgba(59, 130, 246"),
            _.color === "#f59e0b" ? f.fillStyle = `rgba(245, 158, 11, ${_.opacity})` : f.fillStyle = `rgba(59, 130, 246, ${_.opacity})`,
            f.fill(),
            !0))),
            c.current = requestAnimationFrame(E)
        }
        ;
        return E(),
        () => {
            window.removeEventListener("resize", p),
            window.removeEventListener("mousemove", j),
            c.current && cancelAnimationFrame(c.current)
        }
    }
    , []),
    h.jsx("canvas", {
        ref: r,
        className: "fixed inset-0 pointer-events-none z-0",
        style: {
            background: "transparent"
        }
    })
}
function Xi(r, n) {
    var i = {};
    for (var l in r)
        Object.prototype.hasOwnProperty.call(r, l) && n.indexOf(l) < 0 && (i[l] = r[l]);
    if (r != null && typeof Object.getOwnPropertySymbols == "function")
        for (var c = 0, l = Object.getOwnPropertySymbols(r); c < l.length; c++)
            n.indexOf(l[c]) < 0 && Object.prototype.propertyIsEnumerable.call(r, l[c]) && (i[l[c]] = r[l[c]]);
    return i
}
function Yy(r, n, i, l) {
    function c(d) {
        return d instanceof i ? d : new i(function(f) {
            f(d)
        }
        )
    }
    return new (i || (i = Promise))(function(d, f) {
        function y(v) {
            try {
                p(l.next(v))
            } catch (j) {
                f(j)
            }
        }
        function g(v) {
            try {
                p(l.throw(v))
            } catch (j) {
                f(j)
            }
        }
        function p(v) {
            v.done ? d(v.value) : c(v.value).then(y, g)
        }
        p((l = l.apply(r, n || [])).next())
    }
    )
}
const Ky = r => r ? (...n) => r(...n) : (...n) => fetch(...n);
class Xu extends Error {
    constructor(n, i="FunctionsError", l) {
        super(n),
        this.name = i,
        this.context = l
    }
}
class Xy extends Xu {
    constructor(n) {
        super("Failed to send a request to the Edge Function", "FunctionsFetchError", n)
    }
}
class um extends Xu {
    constructor(n) {
        super("Relay Error invoking the Edge Function", "FunctionsRelayError", n)
    }
}
class cm extends Xu {
    constructor(n) {
        super("Edge Function returned a non-2xx status code", "FunctionsHttpError", n)
    }
}
var Ru;
(function(r) {
    r.Any = "any",
    r.ApNortheast1 = "ap-northeast-1",
    r.ApNortheast2 = "ap-northeast-2",
    r.ApSouth1 = "ap-south-1",
    r.ApSoutheast1 = "ap-southeast-1",
    r.ApSoutheast2 = "ap-southeast-2",
    r.CaCentral1 = "ca-central-1",
    r.EuCentral1 = "eu-central-1",
    r.EuWest1 = "eu-west-1",
    r.EuWest2 = "eu-west-2",
    r.EuWest3 = "eu-west-3",
    r.SaEast1 = "sa-east-1",
    r.UsEast1 = "us-east-1",
    r.UsWest1 = "us-west-1",
    r.UsWest2 = "us-west-2"
}
)(Ru || (Ru = {}));
class Jy {
    constructor(n, {headers: i={}, customFetch: l, region: c=Ru.Any}={}) {
        this.url = n,
        this.headers = i,
        this.region = c,
        this.fetch = Ky(l)
    }
    setAuth(n) {
        this.headers.Authorization = `Bearer ${n}`
    }
    invoke(n) {
        return Yy(this, arguments, void 0, function*(i, l={}) {
            var c;
            let d, f;
            try {
                const {headers: y, method: g, body: p, signal: v, timeout: j} = l;
                let E = {}
                  , {region: _} = l;
                _ || (_ = this.region);
                const T = new URL(`${this.url}/${i}`);
                _ && _ !== "any" && (E["x-region"] = _,
                T.searchParams.set("forceFunctionRegion", _));
                let C;
                p && (y && !Object.prototype.hasOwnProperty.call(y, "Content-Type") || !y) ? typeof Blob < "u" && p instanceof Blob || p instanceof ArrayBuffer ? (E["Content-Type"] = "application/octet-stream",
                C = p) : typeof p == "string" ? (E["Content-Type"] = "text/plain",
                C = p) : typeof FormData < "u" && p instanceof FormData ? C = p : (E["Content-Type"] = "application/json",
                C = JSON.stringify(p)) : C = p;
                let L = v;
                j && (f = new AbortController,
                d = setTimeout( () => f.abort(), j),
                v ? (L = f.signal,
                v.addEventListener("abort", () => f.abort())) : L = f.signal);
                const U = yield this.fetch(T.toString(), {
                    method: g || "POST",
                    headers: Object.assign(Object.assign(Object.assign({}, E), this.headers), y),
                    body: C,
                    signal: L
                }).catch(V => {
                    throw new Xy(V)
                }
                )
                  , Y = U.headers.get("x-relay-error");
                if (Y && Y === "true")
                    throw new um(U);
                if (!U.ok)
                    throw new cm(U);
                let G = ((c = U.headers.get("Content-Type")) !== null && c !== void 0 ? c : "text/plain").split(";")[0].trim(), z;
                return G === "application/json" ? z = yield U.json() : G === "application/octet-stream" || G === "application/pdf" ? z = yield U.blob() : G === "text/event-stream" ? z = U : G === "multipart/form-data" ? z = yield U.formData() : z = yield U.text(),
                {
                    data: z,
                    error: null,
                    response: U
                }
            } catch (y) {
                return {
                    data: null,
                    error: y,
                    response: y instanceof cm || y instanceof um ? y.context : void 0
                }
            } finally {
                d && clearTimeout(d)
            }
        })
    }
}
var Qy = class extends Error {
    constructor(r) {
        super(r.message),
        this.name = "PostgrestError",
        this.details = r.details,
        this.hint = r.hint,
        this.code = r.code
    }
}
  , Iy = class {
    constructor(r) {
        var n, i;
        this.shouldThrowOnError = !1,
        this.method = r.method,
        this.url = r.url,
        this.headers = new Headers(r.headers),
        this.schema = r.schema,
        this.body = r.body,
        this.shouldThrowOnError = (n = r.shouldThrowOnError) !== null && n !== void 0 ? n : !1,
        this.signal = r.signal,
        this.isMaybeSingle = (i = r.isMaybeSingle) !== null && i !== void 0 ? i : !1,
        r.fetch ? this.fetch = r.fetch : this.fetch = fetch
    }
    throwOnError() {
        return this.shouldThrowOnError = !0,
        this
    }
    setHeader(r, n) {
        return this.headers = new Headers(this.headers),
        this.headers.set(r, n),
        this
    }
    then(r, n) {
        var i = this;
        this.schema === void 0 || (["GET", "HEAD"].includes(this.method) ? this.headers.set("Accept-Profile", this.schema) : this.headers.set("Content-Profile", this.schema)),
        this.method !== "GET" && this.method !== "HEAD" && this.headers.set("Content-Type", "application/json");
        const l = this.fetch;
        let c = l(this.url.toString(), {
            method: this.method,
            headers: this.headers,
            body: JSON.stringify(this.body),
            signal: this.signal
        }).then(async d => {
            let f = null
              , y = null
              , g = null
              , p = d.status
              , v = d.statusText;
            if (d.ok) {
                var j, E;
                if (i.method !== "HEAD") {
                    var _;
                    const U = await d.text();
                    U === "" || (i.headers.get("Accept") === "text/csv" || i.headers.get("Accept") && (!((_ = i.headers.get("Accept")) === null || _ === void 0) && _.includes("application/vnd.pgrst.plan+text")) ? y = U : y = JSON.parse(U))
                }
                const C = (j = i.headers.get("Prefer")) === null || j === void 0 ? void 0 : j.match(/count=(exact|planned|estimated)/)
                  , L = (E = d.headers.get("content-range")) === null || E === void 0 ? void 0 : E.split("/");
                C && L && L.length > 1 && (g = parseInt(L[1])),
                i.isMaybeSingle && i.method === "GET" && Array.isArray(y) && (y.length > 1 ? (f = {
                    code: "PGRST116",
                    details: `Results contain ${y.length} rows, application/vnd.pgrst.object+json requires 1 row`,
                    hint: null,
                    message: "JSON object requested, multiple (or no) rows returned"
                },
                y = null,
                g = null,
                p = 406,
                v = "Not Acceptable") : y.length === 1 ? y = y[0] : y = null)
            } else {
                var T;
                const C = await d.text();
                try {
                    f = JSON.parse(C),
                    Array.isArray(f) && d.status === 404 && (y = [],
                    f = null,
                    p = 200,
                    v = "OK")
                } catch {
                    d.status === 404 && C === "" ? (p = 204,
                    v = "No Content") : f = {
                        message: C
                    }
                }
                if (f && i.isMaybeSingle && (!(f == null || (T = f.details) === null || T === void 0) && T.includes("0 rows")) && (f = null,
                p = 200,
                v = "OK"),
                f && i.shouldThrowOnError)
                    throw new Qy(f)
            }
            return {
                error: f,
                data: y,
                count: g,
                status: p,
                statusText: v
            }
        }
        );
        return this.shouldThrowOnError || (c = c.catch(d => {
            var f;
            let y = "";
            const g = d?.cause;
            if (g) {
                var p, v, j, E;
                const T = (p = g?.message) !== null && p !== void 0 ? p : ""
                  , C = (v = g?.code) !== null && v !== void 0 ? v : "";
                y = `${(j = d?.name) !== null && j !== void 0 ? j : "FetchError"}: ${d?.message}`,
                y += `

Caused by: ${(E = g?.name) !== null && E !== void 0 ? E : "Error"}: ${T}`,
                C && (y += ` (${C})`),
                g?.stack && (y += `
${g.stack}`)
            } else {
                var _;
                y = (_ = d?.stack) !== null && _ !== void 0 ? _ : ""
            }
            return {
                error: {
                    message: `${(f = d?.name) !== null && f !== void 0 ? f : "FetchError"}: ${d?.message}`,
                    details: y,
                    hint: "",
                    code: ""
                },
                data: null,
                count: null,
                status: 0,
                statusText: ""
            }
        }
        )),
        c.then(r, n)
    }
    returns() {
        return this
    }
    overrideTypes() {
        return this
    }
}
  , Zy = class extends Iy {
    select(r) {
        let n = !1;
        const i = (r ?? "*").split("").map(l => /\s/.test(l) && !n ? "" : (l === '"' && (n = !n),
        l)).join("");
        return this.url.searchParams.set("select", i),
        this.headers.append("Prefer", "return=representation"),
        this
    }
    order(r, {ascending: n=!0, nullsFirst: i, foreignTable: l, referencedTable: c=l}={}) {
        const d = c ? `${c}.order` : "order"
          , f = this.url.searchParams.get(d);
        return this.url.searchParams.set(d, `${f ? `${f},` : ""}${r}.${n ? "asc" : "desc"}${i === void 0 ? "" : i ? ".nullsfirst" : ".nullslast"}`),
        this
    }
    limit(r, {foreignTable: n, referencedTable: i=n}={}) {
        const l = typeof i > "u" ? "limit" : `${i}.limit`;
        return this.url.searchParams.set(l, `${r}`),
        this
    }
    range(r, n, {foreignTable: i, referencedTable: l=i}={}) {
        const c = typeof l > "u" ? "offset" : `${l}.offset`
          , d = typeof l > "u" ? "limit" : `${l}.limit`;
        return this.url.searchParams.set(c, `${r}`),
        this.url.searchParams.set(d, `${n - r + 1}`),
        this
    }
    abortSignal(r) {
        return this.signal = r,
        this
    }
    single() {
        return this.headers.set("Accept", "application/vnd.pgrst.object+json"),
        this
    }
    maybeSingle() {
        return this.method === "GET" ? this.headers.set("Accept", "application/json") : this.headers.set("Accept", "application/vnd.pgrst.object+json"),
        this.isMaybeSingle = !0,
        this
    }
    csv() {
        return this.headers.set("Accept", "text/csv"),
        this
    }
    geojson() {
        return this.headers.set("Accept", "application/geo+json"),
        this
    }
    explain({analyze: r=!1, verbose: n=!1, settings: i=!1, buffers: l=!1, wal: c=!1, format: d="text"}={}) {
        var f;
        const y = [r ? "analyze" : null, n ? "verbose" : null, i ? "settings" : null, l ? "buffers" : null, c ? "wal" : null].filter(Boolean).join("|")
          , g = (f = this.headers.get("Accept")) !== null && f !== void 0 ? f : "application/json";
        return this.headers.set("Accept", `application/vnd.pgrst.plan+${d}; for="${g}"; options=${y};`),
        d === "json" ? this : this
    }
    rollback() {
        return this.headers.append("Prefer", "tx=rollback"),
        this
    }
    returns() {
        return this
    }
    maxAffected(r) {
        return this.headers.append("Prefer", "handling=strict"),
        this.headers.append("Prefer", `max-affected=${r}`),
        this
    }
}
;
const dm = new RegExp("[,()]");
var is = class extends Zy {
    eq(r, n) {
        return this.url.searchParams.append(r, `eq.${n}`),
        this
    }
    neq(r, n) {
        return this.url.searchParams.append(r, `neq.${n}`),
        this
    }
    gt(r, n) {
        return this.url.searchParams.append(r, `gt.${n}`),
        this
    }
    gte(r, n) {
        return this.url.searchParams.append(r, `gte.${n}`),
        this
    }
    lt(r, n) {
        return this.url.searchParams.append(r, `lt.${n}`),
        this
    }
    lte(r, n) {
        return this.url.searchParams.append(r, `lte.${n}`),
        this
    }
    like(r, n) {
        return this.url.searchParams.append(r, `like.${n}`),
        this
    }
    likeAllOf(r, n) {
        return this.url.searchParams.append(r, `like(all).{${n.join(",")}}`),
        this
    }
    likeAnyOf(r, n) {
        return this.url.searchParams.append(r, `like(any).{${n.join(",")}}`),
        this
    }
    ilike(r, n) {
        return this.url.searchParams.append(r, `ilike.${n}`),
        this
    }
    ilikeAllOf(r, n) {
        return this.url.searchParams.append(r, `ilike(all).{${n.join(",")}}`),
        this
    }
    ilikeAnyOf(r, n) {
        return this.url.searchParams.append(r, `ilike(any).{${n.join(",")}}`),
        this
    }
    regexMatch(r, n) {
        return this.url.searchParams.append(r, `match.${n}`),
        this
    }
    regexIMatch(r, n) {
        return this.url.searchParams.append(r, `imatch.${n}`),
        this
    }
    is(r, n) {
        return this.url.searchParams.append(r, `is.${n}`),
        this
    }
    isDistinct(r, n) {
        return this.url.searchParams.append(r, `isdistinct.${n}`),
        this
    }
    in(r, n) {
        const i = Array.from(new Set(n)).map(l => typeof l == "string" && dm.test(l) ? `"${l}"` : `${l}`).join(",");
        return this.url.searchParams.append(r, `in.(${i})`),
        this
    }
    notIn(r, n) {
        const i = Array.from(new Set(n)).map(l => typeof l == "string" && dm.test(l) ? `"${l}"` : `${l}`).join(",");
        return this.url.searchParams.append(r, `not.in.(${i})`),
        this
    }
    contains(r, n) {
        return typeof n == "string" ? this.url.searchParams.append(r, `cs.${n}`) : Array.isArray(n) ? this.url.searchParams.append(r, `cs.{${n.join(",")}}`) : this.url.searchParams.append(r, `cs.${JSON.stringify(n)}`),
        this
    }
    containedBy(r, n) {
        return typeof n == "string" ? this.url.searchParams.append(r, `cd.${n}`) : Array.isArray(n) ? this.url.searchParams.append(r, `cd.{${n.join(",")}}`) : this.url.searchParams.append(r, `cd.${JSON.stringify(n)}`),
        this
    }
    rangeGt(r, n) {
        return this.url.searchParams.append(r, `sr.${n}`),
        this
    }
    rangeGte(r, n) {
        return this.url.searchParams.append(r, `nxl.${n}`),
        this
    }
    rangeLt(r, n) {
        return this.url.searchParams.append(r, `sl.${n}`),
        this
    }
    rangeLte(r, n) {
        return this.url.searchParams.append(r, `nxr.${n}`),
        this
    }
    rangeAdjacent(r, n) {
        return this.url.searchParams.append(r, `adj.${n}`),
        this
    }
    overlaps(r, n) {
        return typeof n == "string" ? this.url.searchParams.append(r, `ov.${n}`) : this.url.searchParams.append(r, `ov.{${n.join(",")}}`),
        this
    }
    textSearch(r, n, {config: i, type: l}={}) {
        let c = "";
        l === "plain" ? c = "pl" : l === "phrase" ? c = "ph" : l === "websearch" && (c = "w");
        const d = i === void 0 ? "" : `(${i})`;
        return this.url.searchParams.append(r, `${c}fts${d}.${n}`),
        this
    }
    match(r) {
        return Object.entries(r).forEach( ([n,i]) => {
            this.url.searchParams.append(n, `eq.${i}`)
        }
        ),
        this
    }
    not(r, n, i) {
        return this.url.searchParams.append(r, `not.${n}.${i}`),
        this
    }
    or(r, {foreignTable: n, referencedTable: i=n}={}) {
        const l = i ? `${i}.or` : "or";
        return this.url.searchParams.append(l, `(${r})`),
        this
    }
    filter(r, n, i) {
        return this.url.searchParams.append(r, `${n}.${i}`),
        this
    }
}
  , Py = class {
    constructor(r, {headers: n={}, schema: i, fetch: l}) {
        this.url = r,
        this.headers = new Headers(n),
        this.schema = i,
        this.fetch = l
    }
    select(r, n) {
        const {head: i=!1, count: l} = n ?? {}
          , c = i ? "HEAD" : "GET";
        let d = !1;
        const f = (r ?? "*").split("").map(y => /\s/.test(y) && !d ? "" : (y === '"' && (d = !d),
        y)).join("");
        return this.url.searchParams.set("select", f),
        l && this.headers.append("Prefer", `count=${l}`),
        new is({
            method: c,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            fetch: this.fetch
        })
    }
    insert(r, {count: n, defaultToNull: i=!0}={}) {
        var l;
        const c = "POST";
        if (n && this.headers.append("Prefer", `count=${n}`),
        i || this.headers.append("Prefer", "missing=default"),
        Array.isArray(r)) {
            const d = r.reduce( (f, y) => f.concat(Object.keys(y)), []);
            if (d.length > 0) {
                const f = [...new Set(d)].map(y => `"${y}"`);
                this.url.searchParams.set("columns", f.join(","))
            }
        }
        return new is({
            method: c,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            body: r,
            fetch: (l = this.fetch) !== null && l !== void 0 ? l : fetch
        })
    }
    upsert(r, {onConflict: n, ignoreDuplicates: i=!1, count: l, defaultToNull: c=!0}={}) {
        var d;
        const f = "POST";
        if (this.headers.append("Prefer", `resolution=${i ? "ignore" : "merge"}-duplicates`),
        n !== void 0 && this.url.searchParams.set("on_conflict", n),
        l && this.headers.append("Prefer", `count=${l}`),
        c || this.headers.append("Prefer", "missing=default"),
        Array.isArray(r)) {
            const y = r.reduce( (g, p) => g.concat(Object.keys(p)), []);
            if (y.length > 0) {
                const g = [...new Set(y)].map(p => `"${p}"`);
                this.url.searchParams.set("columns", g.join(","))
            }
        }
        return new is({
            method: f,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            body: r,
            fetch: (d = this.fetch) !== null && d !== void 0 ? d : fetch
        })
    }
    update(r, {count: n}={}) {
        var i;
        const l = "PATCH";
        return n && this.headers.append("Prefer", `count=${n}`),
        new is({
            method: l,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            body: r,
            fetch: (i = this.fetch) !== null && i !== void 0 ? i : fetch
        })
    }
    delete({count: r}={}) {
        var n;
        const i = "DELETE";
        return r && this.headers.append("Prefer", `count=${r}`),
        new is({
            method: i,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            fetch: (n = this.fetch) !== null && n !== void 0 ? n : fetch
        })
    }
}
  , Wy = class Gm {
    constructor(n, {headers: i={}, schema: l, fetch: c}={}) {
        this.url = n,
        this.headers = new Headers(i),
        this.schemaName = l,
        this.fetch = c
    }
    from(n) {
        if (!n || typeof n != "string" || n.trim() === "")
            throw new Error("Invalid relation name: relation must be a non-empty string.");
        return new Py(new URL(`${this.url}/${n}`),{
            headers: new Headers(this.headers),
            schema: this.schemaName,
            fetch: this.fetch
        })
    }
    schema(n) {
        return new Gm(this.url,{
            headers: this.headers,
            schema: n,
            fetch: this.fetch
        })
    }
    rpc(n, i={}, {head: l=!1, get: c=!1, count: d}={}) {
        var f;
        let y;
        const g = new URL(`${this.url}/rpc/${n}`);
        let p;
        l || c ? (y = l ? "HEAD" : "GET",
        Object.entries(i).filter( ([j,E]) => E !== void 0).map( ([j,E]) => [j, Array.isArray(E) ? `{${E.join(",")}}` : `${E}`]).forEach( ([j,E]) => {
            g.searchParams.append(j, E)
        }
        )) : (y = "POST",
        p = i);
        const v = new Headers(this.headers);
        return d && v.set("Prefer", `count=${d}`),
        new is({
            method: y,
            url: g,
            headers: v,
            schema: this.schemaName,
            body: p,
            fetch: (f = this.fetch) !== null && f !== void 0 ? f : fetch
        })
    }
}
;
class Fy {
    constructor() {}
    static detectEnvironment() {
        var n;
        if (typeof WebSocket < "u")
            return {
                type: "native",
                constructor: WebSocket
            };
        if (typeof globalThis < "u" && typeof globalThis.WebSocket < "u")
            return {
                type: "native",
                constructor: globalThis.WebSocket
            };
        if (typeof global < "u" && typeof global.WebSocket < "u")
            return {
                type: "native",
                constructor: global.WebSocket
            };
        if (typeof globalThis < "u" && typeof globalThis.WebSocketPair < "u" && typeof globalThis.WebSocket > "u")
            return {
                type: "cloudflare",
                error: "Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",
                workaround: "Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime."
            };
        if (typeof globalThis < "u" && globalThis.EdgeRuntime || typeof navigator < "u" && (!((n = navigator.userAgent) === null || n === void 0) && n.includes("Vercel-Edge")))
            return {
                type: "unsupported",
                error: "Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",
                workaround: "Use serverless functions or a different deployment target for WebSocket functionality."
            };
        if (typeof process < "u") {
            const i = process.versions;
            if (i && i.node) {
                const l = i.node
                  , c = parseInt(l.replace(/^v/, "").split(".")[0]);
                return c >= 22 ? typeof globalThis.WebSocket < "u" ? {
                    type: "native",
                    constructor: globalThis.WebSocket
                } : {
                    type: "unsupported",
                    error: `Node.js ${c} detected but native WebSocket not found.`,
                    workaround: "Provide a WebSocket implementation via the transport option."
                } : {
                    type: "unsupported",
                    error: `Node.js ${c} detected without native WebSocket support.`,
                    workaround: `For Node.js < 22, install "ws" package and provide it via the transport option:
import ws from "ws"
new RealtimeClient(url, { transport: ws })`
                }
            }
        }
        return {
            type: "unsupported",
            error: "Unknown JavaScript runtime without WebSocket support.",
            workaround: "Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation."
        }
    }
    static getWebSocketConstructor() {
        const n = this.detectEnvironment();
        if (n.constructor)
            return n.constructor;
        let i = n.error || "WebSocket not supported in this environment.";
        throw n.workaround && (i += `

Suggested solution: ${n.workaround}`),
        new Error(i)
    }
    static createWebSocket(n, i) {
        const l = this.getWebSocketConstructor();
        return new l(n,i)
    }
    static isWebSocketSupported() {
        try {
            const n = this.detectEnvironment();
            return n.type === "native" || n.type === "ws"
        } catch {
            return !1
        }
    }
}
const ep = "2.89.0"
  , tp = `realtime-js/${ep}`
  , Vm = "1.0.0"
  , ap = "2.0.0"
  , hm = Vm
  , Cu = 1e4
  , np = 1e3
  , sp = 100;
var Ga;
(function(r) {
    r[r.connecting = 0] = "connecting",
    r[r.open = 1] = "open",
    r[r.closing = 2] = "closing",
    r[r.closed = 3] = "closed"
}
)(Ga || (Ga = {}));
var We;
(function(r) {
    r.closed = "closed",
    r.errored = "errored",
    r.joined = "joined",
    r.joining = "joining",
    r.leaving = "leaving"
}
)(We || (We = {}));
var Xt;
(function(r) {
    r.close = "phx_close",
    r.error = "phx_error",
    r.join = "phx_join",
    r.reply = "phx_reply",
    r.leave = "phx_leave",
    r.access_token = "access_token"
}
)(Xt || (Xt = {}));
var ku;
(function(r) {
    r.websocket = "websocket"
}
)(ku || (ku = {}));
var fn;
(function(r) {
    r.Connecting = "connecting",
    r.Open = "open",
    r.Closing = "closing",
    r.Closed = "closed"
}
)(fn || (fn = {}));
class rp {
    constructor(n) {
        this.HEADER_LENGTH = 1,
        this.USER_BROADCAST_PUSH_META_LENGTH = 6,
        this.KINDS = {
            userBroadcastPush: 3,
            userBroadcast: 4
        },
        this.BINARY_ENCODING = 0,
        this.JSON_ENCODING = 1,
        this.BROADCAST_EVENT = "broadcast",
        this.allowedMetadataKeys = [],
        this.allowedMetadataKeys = n ?? []
    }
    encode(n, i) {
        if (n.event === this.BROADCAST_EVENT && !(n.payload instanceof ArrayBuffer) && typeof n.payload.event == "string")
            return i(this._binaryEncodeUserBroadcastPush(n));
        let l = [n.join_ref, n.ref, n.topic, n.event, n.payload];
        return i(JSON.stringify(l))
    }
    _binaryEncodeUserBroadcastPush(n) {
        var i;
        return this._isArrayBuffer((i = n.payload) === null || i === void 0 ? void 0 : i.payload) ? this._encodeBinaryUserBroadcastPush(n) : this._encodeJsonUserBroadcastPush(n)
    }
    _encodeBinaryUserBroadcastPush(n) {
        var i, l;
        const c = (l = (i = n.payload) === null || i === void 0 ? void 0 : i.payload) !== null && l !== void 0 ? l : new ArrayBuffer(0);
        return this._encodeUserBroadcastPush(n, this.BINARY_ENCODING, c)
    }
    _encodeJsonUserBroadcastPush(n) {
        var i, l;
        const c = (l = (i = n.payload) === null || i === void 0 ? void 0 : i.payload) !== null && l !== void 0 ? l : {}
          , f = new TextEncoder().encode(JSON.stringify(c)).buffer;
        return this._encodeUserBroadcastPush(n, this.JSON_ENCODING, f)
    }
    _encodeUserBroadcastPush(n, i, l) {
        var c, d;
        const f = n.topic
          , y = (c = n.ref) !== null && c !== void 0 ? c : ""
          , g = (d = n.join_ref) !== null && d !== void 0 ? d : ""
          , p = n.payload.event
          , v = this.allowedMetadataKeys ? this._pick(n.payload, this.allowedMetadataKeys) : {}
          , j = Object.keys(v).length === 0 ? "" : JSON.stringify(v);
        if (g.length > 255)
            throw new Error(`joinRef length ${g.length} exceeds maximum of 255`);
        if (y.length > 255)
            throw new Error(`ref length ${y.length} exceeds maximum of 255`);
        if (f.length > 255)
            throw new Error(`topic length ${f.length} exceeds maximum of 255`);
        if (p.length > 255)
            throw new Error(`userEvent length ${p.length} exceeds maximum of 255`);
        if (j.length > 255)
            throw new Error(`metadata length ${j.length} exceeds maximum of 255`);
        const E = this.USER_BROADCAST_PUSH_META_LENGTH + g.length + y.length + f.length + p.length + j.length
          , _ = new ArrayBuffer(this.HEADER_LENGTH + E);
        let T = new DataView(_)
          , C = 0;
        T.setUint8(C++, this.KINDS.userBroadcastPush),
        T.setUint8(C++, g.length),
        T.setUint8(C++, y.length),
        T.setUint8(C++, f.length),
        T.setUint8(C++, p.length),
        T.setUint8(C++, j.length),
        T.setUint8(C++, i),
        Array.from(g, U => T.setUint8(C++, U.charCodeAt(0))),
        Array.from(y, U => T.setUint8(C++, U.charCodeAt(0))),
        Array.from(f, U => T.setUint8(C++, U.charCodeAt(0))),
        Array.from(p, U => T.setUint8(C++, U.charCodeAt(0))),
        Array.from(j, U => T.setUint8(C++, U.charCodeAt(0)));
        var L = new Uint8Array(_.byteLength + l.byteLength);
        return L.set(new Uint8Array(_), 0),
        L.set(new Uint8Array(l), _.byteLength),
        L.buffer
    }
    decode(n, i) {
        if (this._isArrayBuffer(n)) {
            let l = this._binaryDecode(n);
            return i(l)
        }
        if (typeof n == "string") {
            const l = JSON.parse(n)
              , [c,d,f,y,g] = l;
            return i({
                join_ref: c,
                ref: d,
                topic: f,
                event: y,
                payload: g
            })
        }
        return i({})
    }
    _binaryDecode(n) {
        const i = new DataView(n)
          , l = i.getUint8(0)
          , c = new TextDecoder;
        if (l === this.KINDS.userBroadcast)
            return this._decodeUserBroadcast(n, i, c)
    }
    _decodeUserBroadcast(n, i, l) {
        const c = i.getUint8(1)
          , d = i.getUint8(2)
          , f = i.getUint8(3)
          , y = i.getUint8(4);
        let g = this.HEADER_LENGTH + 4;
        const p = l.decode(n.slice(g, g + c));
        g = g + c;
        const v = l.decode(n.slice(g, g + d));
        g = g + d;
        const j = l.decode(n.slice(g, g + f));
        g = g + f;
        const E = n.slice(g, n.byteLength)
          , _ = y === this.JSON_ENCODING ? JSON.parse(l.decode(E)) : E
          , T = {
            type: this.BROADCAST_EVENT,
            event: v,
            payload: _
        };
        return f > 0 && (T.meta = JSON.parse(j)),
        {
            join_ref: null,
            ref: null,
            topic: p,
            event: this.BROADCAST_EVENT,
            payload: T
        }
    }
    _isArrayBuffer(n) {
        var i;
        return n instanceof ArrayBuffer || ((i = n?.constructor) === null || i === void 0 ? void 0 : i.name) === "ArrayBuffer"
    }
    _pick(n, i) {
        return !n || typeof n != "object" ? {} : Object.fromEntries(Object.entries(n).filter( ([l]) => i.includes(l)))
    }
}
class Ym {
    constructor(n, i) {
        this.callback = n,
        this.timerCalc = i,
        this.timer = void 0,
        this.tries = 0,
        this.callback = n,
        this.timerCalc = i
    }
    reset() {
        this.tries = 0,
        clearTimeout(this.timer),
        this.timer = void 0
    }
    scheduleTimeout() {
        clearTimeout(this.timer),
        this.timer = setTimeout( () => {
            this.tries = this.tries + 1,
            this.callback()
        }
        , this.timerCalc(this.tries + 1))
    }
}
var De;
(function(r) {
    r.abstime = "abstime",
    r.bool = "bool",
    r.date = "date",
    r.daterange = "daterange",
    r.float4 = "float4",
    r.float8 = "float8",
    r.int2 = "int2",
    r.int4 = "int4",
    r.int4range = "int4range",
    r.int8 = "int8",
    r.int8range = "int8range",
    r.json = "json",
    r.jsonb = "jsonb",
    r.money = "money",
    r.numeric = "numeric",
    r.oid = "oid",
    r.reltime = "reltime",
    r.text = "text",
    r.time = "time",
    r.timestamp = "timestamp",
    r.timestamptz = "timestamptz",
    r.timetz = "timetz",
    r.tsrange = "tsrange",
    r.tstzrange = "tstzrange"
}
)(De || (De = {}));
const fm = (r, n, i={}) => {
    var l;
    const c = (l = i.skipTypes) !== null && l !== void 0 ? l : [];
    return n ? Object.keys(n).reduce( (d, f) => (d[f] = ip(f, r, n, c),
    d), {}) : {}
}
  , ip = (r, n, i, l) => {
    const c = n.find(y => y.name === r)
      , d = c?.type
      , f = i[r];
    return d && !l.includes(d) ? Km(d, f) : Du(f)
}
  , Km = (r, n) => {
    if (r.charAt(0) === "_") {
        const i = r.slice(1, r.length);
        return cp(n, i)
    }
    switch (r) {
    case De.bool:
        return lp(n);
    case De.float4:
    case De.float8:
    case De.int2:
    case De.int4:
    case De.int8:
    case De.numeric:
    case De.oid:
        return op(n);
    case De.json:
    case De.jsonb:
        return up(n);
    case De.timestamp:
        return dp(n);
    case De.abstime:
    case De.date:
    case De.daterange:
    case De.int4range:
    case De.int8range:
    case De.money:
    case De.reltime:
    case De.text:
    case De.time:
    case De.timestamptz:
    case De.timetz:
    case De.tsrange:
    case De.tstzrange:
        return Du(n);
    default:
        return Du(n)
    }
}
  , Du = r => r
  , lp = r => {
    switch (r) {
    case "t":
        return !0;
    case "f":
        return !1;
    default:
        return r
    }
}
  , op = r => {
    if (typeof r == "string") {
        const n = parseFloat(r);
        if (!Number.isNaN(n))
            return n
    }
    return r
}
  , up = r => {
    if (typeof r == "string")
        try {
            return JSON.parse(r)
        } catch {
            return r
        }
    return r
}
  , cp = (r, n) => {
    if (typeof r != "string")
        return r;
    const i = r.length - 1
      , l = r[i];
    if (r[0] === "{" && l === "}") {
        let d;
        const f = r.slice(1, i);
        try {
            d = JSON.parse("[" + f + "]")
        } catch {
            d = f ? f.split(",") : []
        }
        return d.map(y => Km(n, y))
    }
    return r
}
  , dp = r => typeof r == "string" ? r.replace(" ", "T") : r
  , Xm = r => {
    const n = new URL(r);
    return n.protocol = n.protocol.replace(/^ws/i, "http"),
    n.pathname = n.pathname.replace(/\/+$/, "").replace(/\/socket\/websocket$/i, "").replace(/\/socket$/i, "").replace(/\/websocket$/i, ""),
    n.pathname === "" || n.pathname === "/" ? n.pathname = "/api/broadcast" : n.pathname = n.pathname + "/api/broadcast",
    n.href
}
;
class xu {
    constructor(n, i, l={}, c=Cu) {
        this.channel = n,
        this.event = i,
        this.payload = l,
        this.timeout = c,
        this.sent = !1,
        this.timeoutTimer = void 0,
        this.ref = "",
        this.receivedResp = null,
        this.recHooks = [],
        this.refEvent = null
    }
    resend(n) {
        this.timeout = n,
        this._cancelRefEvent(),
        this.ref = "",
        this.refEvent = null,
        this.receivedResp = null,
        this.sent = !1,
        this.send()
    }
    send() {
        this._hasReceived("timeout") || (this.startTimeout(),
        this.sent = !0,
        this.channel.socket.push({
            topic: this.channel.topic,
            event: this.event,
            payload: this.payload,
            ref: this.ref,
            join_ref: this.channel._joinRef()
        }))
    }
    updatePayload(n) {
        this.payload = Object.assign(Object.assign({}, this.payload), n)
    }
    receive(n, i) {
        var l;
        return this._hasReceived(n) && i((l = this.receivedResp) === null || l === void 0 ? void 0 : l.response),
        this.recHooks.push({
            status: n,
            callback: i
        }),
        this
    }
    startTimeout() {
        if (this.timeoutTimer)
            return;
        this.ref = this.channel.socket._makeRef(),
        this.refEvent = this.channel._replyEventName(this.ref);
        const n = i => {
            this._cancelRefEvent(),
            this._cancelTimeout(),
            this.receivedResp = i,
            this._matchReceive(i)
        }
        ;
        this.channel._on(this.refEvent, {}, n),
        this.timeoutTimer = setTimeout( () => {
            this.trigger("timeout", {})
        }
        , this.timeout)
    }
    trigger(n, i) {
        this.refEvent && this.channel._trigger(this.refEvent, {
            status: n,
            response: i
        })
    }
    destroy() {
        this._cancelRefEvent(),
        this._cancelTimeout()
    }
    _cancelRefEvent() {
        this.refEvent && this.channel._off(this.refEvent, {})
    }
    _cancelTimeout() {
        clearTimeout(this.timeoutTimer),
        this.timeoutTimer = void 0
    }
    _matchReceive({status: n, response: i}) {
        this.recHooks.filter(l => l.status === n).forEach(l => l.callback(i))
    }
    _hasReceived(n) {
        return this.receivedResp && this.receivedResp.status === n
    }
}
var mm;
(function(r) {
    r.SYNC = "sync",
    r.JOIN = "join",
    r.LEAVE = "leave"
}
)(mm || (mm = {}));
class or {
    constructor(n, i) {
        this.channel = n,
        this.state = {},
        this.pendingDiffs = [],
        this.joinRef = null,
        this.enabled = !1,
        this.caller = {
            onJoin: () => {}
            ,
            onLeave: () => {}
            ,
            onSync: () => {}
        };
        const l = i?.events || {
            state: "presence_state",
            diff: "presence_diff"
        };
        this.channel._on(l.state, {}, c => {
            const {onJoin: d, onLeave: f, onSync: y} = this.caller;
            this.joinRef = this.channel._joinRef(),
            this.state = or.syncState(this.state, c, d, f),
            this.pendingDiffs.forEach(g => {
                this.state = or.syncDiff(this.state, g, d, f)
            }
            ),
            this.pendingDiffs = [],
            y()
        }
        ),
        this.channel._on(l.diff, {}, c => {
            const {onJoin: d, onLeave: f, onSync: y} = this.caller;
            this.inPendingSyncState() ? this.pendingDiffs.push(c) : (this.state = or.syncDiff(this.state, c, d, f),
            y())
        }
        ),
        this.onJoin( (c, d, f) => {
            this.channel._trigger("presence", {
                event: "join",
                key: c,
                currentPresences: d,
                newPresences: f
            })
        }
        ),
        this.onLeave( (c, d, f) => {
            this.channel._trigger("presence", {
                event: "leave",
                key: c,
                currentPresences: d,
                leftPresences: f
            })
        }
        ),
        this.onSync( () => {
            this.channel._trigger("presence", {
                event: "sync"
            })
        }
        )
    }
    static syncState(n, i, l, c) {
        const d = this.cloneDeep(n)
          , f = this.transformState(i)
          , y = {}
          , g = {};
        return this.map(d, (p, v) => {
            f[p] || (g[p] = v)
        }
        ),
        this.map(f, (p, v) => {
            const j = d[p];
            if (j) {
                const E = v.map(L => L.presence_ref)
                  , _ = j.map(L => L.presence_ref)
                  , T = v.filter(L => _.indexOf(L.presence_ref) < 0)
                  , C = j.filter(L => E.indexOf(L.presence_ref) < 0);
                T.length > 0 && (y[p] = T),
                C.length > 0 && (g[p] = C)
            } else
                y[p] = v
        }
        ),
        this.syncDiff(d, {
            joins: y,
            leaves: g
        }, l, c)
    }
    static syncDiff(n, i, l, c) {
        const {joins: d, leaves: f} = {
            joins: this.transformState(i.joins),
            leaves: this.transformState(i.leaves)
        };
        return l || (l = () => {}
        ),
        c || (c = () => {}
        ),
        this.map(d, (y, g) => {
            var p;
            const v = (p = n[y]) !== null && p !== void 0 ? p : [];
            if (n[y] = this.cloneDeep(g),
            v.length > 0) {
                const j = n[y].map(_ => _.presence_ref)
                  , E = v.filter(_ => j.indexOf(_.presence_ref) < 0);
                n[y].unshift(...E)
            }
            l(y, v, g)
        }
        ),
        this.map(f, (y, g) => {
            let p = n[y];
            if (!p)
                return;
            const v = g.map(j => j.presence_ref);
            p = p.filter(j => v.indexOf(j.presence_ref) < 0),
            n[y] = p,
            c(y, p, g),
            p.length === 0 && delete n[y]
        }
        ),
        n
    }
    static map(n, i) {
        return Object.getOwnPropertyNames(n).map(l => i(l, n[l]))
    }
    static transformState(n) {
        return n = this.cloneDeep(n),
        Object.getOwnPropertyNames(n).reduce( (i, l) => {
            const c = n[l];
            return "metas"in c ? i[l] = c.metas.map(d => (d.presence_ref = d.phx_ref,
            delete d.phx_ref,
            delete d.phx_ref_prev,
            d)) : i[l] = c,
            i
        }
        , {})
    }
    static cloneDeep(n) {
        return JSON.parse(JSON.stringify(n))
    }
    onJoin(n) {
        this.caller.onJoin = n
    }
    onLeave(n) {
        this.caller.onLeave = n
    }
    onSync(n) {
        this.caller.onSync = n
    }
    inPendingSyncState() {
        return !this.joinRef || this.joinRef !== this.channel._joinRef()
    }
}
var gm;
(function(r) {
    r.ALL = "*",
    r.INSERT = "INSERT",
    r.UPDATE = "UPDATE",
    r.DELETE = "DELETE"
}
)(gm || (gm = {}));
var ur;
(function(r) {
    r.BROADCAST = "broadcast",
    r.PRESENCE = "presence",
    r.POSTGRES_CHANGES = "postgres_changes",
    r.SYSTEM = "system"
}
)(ur || (ur = {}));
var ga;
(function(r) {
    r.SUBSCRIBED = "SUBSCRIBED",
    r.TIMED_OUT = "TIMED_OUT",
    r.CLOSED = "CLOSED",
    r.CHANNEL_ERROR = "CHANNEL_ERROR"
}
)(ga || (ga = {}));
class us {
    constructor(n, i={
        config: {}
    }, l) {
        var c, d;
        if (this.topic = n,
        this.params = i,
        this.socket = l,
        this.bindings = {},
        this.state = We.closed,
        this.joinedOnce = !1,
        this.pushBuffer = [],
        this.subTopic = n.replace(/^realtime:/i, ""),
        this.params.config = Object.assign({
            broadcast: {
                ack: !1,
                self: !1
            },
            presence: {
                key: "",
                enabled: !1
            },
            private: !1
        }, i.config),
        this.timeout = this.socket.timeout,
        this.joinPush = new xu(this,Xt.join,this.params,this.timeout),
        this.rejoinTimer = new Ym( () => this._rejoinUntilConnected(),this.socket.reconnectAfterMs),
        this.joinPush.receive("ok", () => {
            this.state = We.joined,
            this.rejoinTimer.reset(),
            this.pushBuffer.forEach(f => f.send()),
            this.pushBuffer = []
        }
        ),
        this._onClose( () => {
            this.rejoinTimer.reset(),
            this.socket.log("channel", `close ${this.topic} ${this._joinRef()}`),
            this.state = We.closed,
            this.socket._remove(this)
        }
        ),
        this._onError(f => {
            this._isLeaving() || this._isClosed() || (this.socket.log("channel", `error ${this.topic}`, f),
            this.state = We.errored,
            this.rejoinTimer.scheduleTimeout())
        }
        ),
        this.joinPush.receive("timeout", () => {
            this._isJoining() && (this.socket.log("channel", `timeout ${this.topic}`, this.joinPush.timeout),
            this.state = We.errored,
            this.rejoinTimer.scheduleTimeout())
        }
        ),
        this.joinPush.receive("error", f => {
            this._isLeaving() || this._isClosed() || (this.socket.log("channel", `error ${this.topic}`, f),
            this.state = We.errored,
            this.rejoinTimer.scheduleTimeout())
        }
        ),
        this._on(Xt.reply, {}, (f, y) => {
            this._trigger(this._replyEventName(y), f)
        }
        ),
        this.presence = new or(this),
        this.broadcastEndpointURL = Xm(this.socket.endPoint),
        this.private = this.params.config.private || !1,
        !this.private && (!((d = (c = this.params.config) === null || c === void 0 ? void 0 : c.broadcast) === null || d === void 0) && d.replay))
            throw `tried to use replay on public channel '${this.topic}'. It must be a private channel.`
    }
    subscribe(n, i=this.timeout) {
        var l, c, d;
        if (this.socket.isConnected() || this.socket.connect(),
        this.state == We.closed) {
            const {config: {broadcast: f, presence: y, private: g}} = this.params
              , p = (c = (l = this.bindings.postgres_changes) === null || l === void 0 ? void 0 : l.map(_ => _.filter)) !== null && c !== void 0 ? c : []
              , v = !!this.bindings[ur.PRESENCE] && this.bindings[ur.PRESENCE].length > 0 || ((d = this.params.config.presence) === null || d === void 0 ? void 0 : d.enabled) === !0
              , j = {}
              , E = {
                broadcast: f,
                presence: Object.assign(Object.assign({}, y), {
                    enabled: v
                }),
                postgres_changes: p,
                private: g
            };
            this.socket.accessTokenValue && (j.access_token = this.socket.accessTokenValue),
            this._onError(_ => n?.(ga.CHANNEL_ERROR, _)),
            this._onClose( () => n?.(ga.CLOSED)),
            this.updateJoinPayload(Object.assign({
                config: E
            }, j)),
            this.joinedOnce = !0,
            this._rejoin(i),
            this.joinPush.receive("ok", async ({postgres_changes: _}) => {
                var T;
                if (this.socket._isManualToken() || this.socket.setAuth(),
                _ === void 0) {
                    n?.(ga.SUBSCRIBED);
                    return
                } else {
                    const C = this.bindings.postgres_changes
                      , L = (T = C?.length) !== null && T !== void 0 ? T : 0
                      , U = [];
                    for (let Y = 0; Y < L; Y++) {
                        const G = C[Y]
                          , {filter: {event: z, schema: V, table: I, filter: X}} = G
                          , oe = _ && _[Y];
                        if (oe && oe.event === z && us.isFilterValueEqual(oe.schema, V) && us.isFilterValueEqual(oe.table, I) && us.isFilterValueEqual(oe.filter, X))
                            U.push(Object.assign(Object.assign({}, G), {
                                id: oe.id
                            }));
                        else {
                            this.unsubscribe(),
                            this.state = We.errored,
                            n?.(ga.CHANNEL_ERROR, new Error("mismatch between server and client bindings for postgres changes"));
                            return
                        }
                    }
                    this.bindings.postgres_changes = U,
                    n && n(ga.SUBSCRIBED);
                    return
                }
            }
            ).receive("error", _ => {
                this.state = We.errored,
                n?.(ga.CHANNEL_ERROR, new Error(JSON.stringify(Object.values(_).join(", ") || "error")))
            }
            ).receive("timeout", () => {
                n?.(ga.TIMED_OUT)
            }
            )
        }
        return this
    }
    presenceState() {
        return this.presence.state
    }
    async track(n, i={}) {
        return await this.send({
            type: "presence",
            event: "track",
            payload: n
        }, i.timeout || this.timeout)
    }
    async untrack(n={}) {
        return await this.send({
            type: "presence",
            event: "untrack"
        }, n)
    }
    on(n, i, l) {
        return this.state === We.joined && n === ur.PRESENCE && (this.socket.log("channel", `resubscribe to ${this.topic} due to change in presence callbacks on joined channel`),
        this.unsubscribe().then(async () => await this.subscribe())),
        this._on(n, i, l)
    }
    async httpSend(n, i, l={}) {
        var c;
        if (i == null)
            return Promise.reject("Payload is required for httpSend()");
        const d = {
            apikey: this.socket.apiKey ? this.socket.apiKey : "",
            "Content-Type": "application/json"
        };
        this.socket.accessTokenValue && (d.Authorization = `Bearer ${this.socket.accessTokenValue}`);
        const f = {
            method: "POST",
            headers: d,
            body: JSON.stringify({
                messages: [{
                    topic: this.subTopic,
                    event: n,
                    payload: i,
                    private: this.private
                }]
            })
        }
          , y = await this._fetchWithTimeout(this.broadcastEndpointURL, f, (c = l.timeout) !== null && c !== void 0 ? c : this.timeout);
        if (y.status === 202)
            return {
                success: !0
            };
        let g = y.statusText;
        try {
            const p = await y.json();
            g = p.error || p.message || g
        } catch {}
        return Promise.reject(new Error(g))
    }
    async send(n, i={}) {
        var l, c;
        if (!this._canPush() && n.type === "broadcast") {
            console.warn("Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.");
            const {event: d, payload: f} = n
              , y = {
                apikey: this.socket.apiKey ? this.socket.apiKey : "",
                "Content-Type": "application/json"
            };
            this.socket.accessTokenValue && (y.Authorization = `Bearer ${this.socket.accessTokenValue}`);
            const g = {
                method: "POST",
                headers: y,
                body: JSON.stringify({
                    messages: [{
                        topic: this.subTopic,
                        event: d,
                        payload: f,
                        private: this.private
                    }]
                })
            };
            try {
                const p = await this._fetchWithTimeout(this.broadcastEndpointURL, g, (l = i.timeout) !== null && l !== void 0 ? l : this.timeout);
                return await ((c = p.body) === null || c === void 0 ? void 0 : c.cancel()),
                p.ok ? "ok" : "error"
            } catch (p) {
                return p.name === "AbortError" ? "timed out" : "error"
            }
        } else
            return new Promise(d => {
                var f, y, g;
                const p = this._push(n.type, n, i.timeout || this.timeout);
                n.type === "broadcast" && !(!((g = (y = (f = this.params) === null || f === void 0 ? void 0 : f.config) === null || y === void 0 ? void 0 : y.broadcast) === null || g === void 0) && g.ack) && d("ok"),
                p.receive("ok", () => d("ok")),
                p.receive("error", () => d("error")),
                p.receive("timeout", () => d("timed out"))
            }
            )
    }
    updateJoinPayload(n) {
        this.joinPush.updatePayload(n)
    }
    unsubscribe(n=this.timeout) {
        this.state = We.leaving;
        const i = () => {
            this.socket.log("channel", `leave ${this.topic}`),
            this._trigger(Xt.close, "leave", this._joinRef())
        }
        ;
        this.joinPush.destroy();
        let l = null;
        return new Promise(c => {
            l = new xu(this,Xt.leave,{},n),
            l.receive("ok", () => {
                i(),
                c("ok")
            }
            ).receive("timeout", () => {
                i(),
                c("timed out")
            }
            ).receive("error", () => {
                c("error")
            }
            ),
            l.send(),
            this._canPush() || l.trigger("ok", {})
        }
        ).finally( () => {
            l?.destroy()
        }
        )
    }
    teardown() {
        this.pushBuffer.forEach(n => n.destroy()),
        this.pushBuffer = [],
        this.rejoinTimer.reset(),
        this.joinPush.destroy(),
        this.state = We.closed,
        this.bindings = {}
    }
    async _fetchWithTimeout(n, i, l) {
        const c = new AbortController
          , d = setTimeout( () => c.abort(), l)
          , f = await this.socket.fetch(n, Object.assign(Object.assign({}, i), {
            signal: c.signal
        }));
        return clearTimeout(d),
        f
    }
    _push(n, i, l=this.timeout) {
        if (!this.joinedOnce)
            throw `tried to push '${n}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
        let c = new xu(this,n,i,l);
        return this._canPush() ? c.send() : this._addToPushBuffer(c),
        c
    }
    _addToPushBuffer(n) {
        if (n.startTimeout(),
        this.pushBuffer.push(n),
        this.pushBuffer.length > sp) {
            const i = this.pushBuffer.shift();
            i && (i.destroy(),
            this.socket.log("channel", `discarded push due to buffer overflow: ${i.event}`, i.payload))
        }
    }
    _onMessage(n, i, l) {
        return i
    }
    _isMember(n) {
        return this.topic === n
    }
    _joinRef() {
        return this.joinPush.ref
    }
    _trigger(n, i, l) {
        var c, d;
        const f = n.toLocaleLowerCase()
          , {close: y, error: g, leave: p, join: v} = Xt;
        if (l && [y, g, p, v].indexOf(f) >= 0 && l !== this._joinRef())
            return;
        let E = this._onMessage(f, i, l);
        if (i && !E)
            throw "channel onMessage callbacks must return the payload, modified or unmodified";
        ["insert", "update", "delete"].includes(f) ? (c = this.bindings.postgres_changes) === null || c === void 0 || c.filter(_ => {
            var T, C, L;
            return ((T = _.filter) === null || T === void 0 ? void 0 : T.event) === "*" || ((L = (C = _.filter) === null || C === void 0 ? void 0 : C.event) === null || L === void 0 ? void 0 : L.toLocaleLowerCase()) === f
        }
        ).map(_ => _.callback(E, l)) : (d = this.bindings[f]) === null || d === void 0 || d.filter(_ => {
            var T, C, L, U, Y, G;
            if (["broadcast", "presence", "postgres_changes"].includes(f))
                if ("id"in _) {
                    const z = _.id
                      , V = (T = _.filter) === null || T === void 0 ? void 0 : T.event;
                    return z && ((C = i.ids) === null || C === void 0 ? void 0 : C.includes(z)) && (V === "*" || V?.toLocaleLowerCase() === ((L = i.data) === null || L === void 0 ? void 0 : L.type.toLocaleLowerCase()))
                } else {
                    const z = (Y = (U = _?.filter) === null || U === void 0 ? void 0 : U.event) === null || Y === void 0 ? void 0 : Y.toLocaleLowerCase();
                    return z === "*" || z === ((G = i?.event) === null || G === void 0 ? void 0 : G.toLocaleLowerCase())
                }
            else
                return _.type.toLocaleLowerCase() === f
        }
        ).map(_ => {
            if (typeof E == "object" && "ids"in E) {
                const T = E.data
                  , {schema: C, table: L, commit_timestamp: U, type: Y, errors: G} = T;
                E = Object.assign(Object.assign({}, {
                    schema: C,
                    table: L,
                    commit_timestamp: U,
                    eventType: Y,
                    new: {},
                    old: {},
                    errors: G
                }), this._getPayloadRecords(T))
            }
            _.callback(E, l)
        }
        )
    }
    _isClosed() {
        return this.state === We.closed
    }
    _isJoined() {
        return this.state === We.joined
    }
    _isJoining() {
        return this.state === We.joining
    }
    _isLeaving() {
        return this.state === We.leaving
    }
    _replyEventName(n) {
        return `chan_reply_${n}`
    }
    _on(n, i, l) {
        const c = n.toLocaleLowerCase()
          , d = {
            type: c,
            filter: i,
            callback: l
        };
        return this.bindings[c] ? this.bindings[c].push(d) : this.bindings[c] = [d],
        this
    }
    _off(n, i) {
        const l = n.toLocaleLowerCase();
        return this.bindings[l] && (this.bindings[l] = this.bindings[l].filter(c => {
            var d;
            return !(((d = c.type) === null || d === void 0 ? void 0 : d.toLocaleLowerCase()) === l && us.isEqual(c.filter, i))
        }
        )),
        this
    }
    static isEqual(n, i) {
        if (Object.keys(n).length !== Object.keys(i).length)
            return !1;
        for (const l in n)
            if (n[l] !== i[l])
                return !1;
        return !0
    }
    static isFilterValueEqual(n, i) {
        return (n ?? void 0) === (i ?? void 0)
    }
    _rejoinUntilConnected() {
        this.rejoinTimer.scheduleTimeout(),
        this.socket.isConnected() && this._rejoin()
    }
    _onClose(n) {
        this._on(Xt.close, {}, n)
    }
    _onError(n) {
        this._on(Xt.error, {}, i => n(i))
    }
    _canPush() {
        return this.socket.isConnected() && this._isJoined()
    }
    _rejoin(n=this.timeout) {
        this._isLeaving() || (this.socket._leaveOpenTopic(this.topic),
        this.state = We.joining,
        this.joinPush.resend(n))
    }
    _getPayloadRecords(n) {
        const i = {
            new: {},
            old: {}
        };
        return (n.type === "INSERT" || n.type === "UPDATE") && (i.new = fm(n.columns, n.record)),
        (n.type === "UPDATE" || n.type === "DELETE") && (i.old = fm(n.columns, n.old_record)),
        i
    }
}
const _u = () => {}
  , qi = {
    HEARTBEAT_INTERVAL: 25e3,
    RECONNECT_DELAY: 10,
    HEARTBEAT_TIMEOUT_FALLBACK: 100
}
  , hp = [1e3, 2e3, 5e3, 1e4]
  , fp = 1e4
  , mp = `
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;
class gp {
    constructor(n, i) {
        var l;
        if (this.accessTokenValue = null,
        this.apiKey = null,
        this._manuallySetToken = !1,
        this.channels = new Array,
        this.endPoint = "",
        this.httpEndpoint = "",
        this.headers = {},
        this.params = {},
        this.timeout = Cu,
        this.transport = null,
        this.heartbeatIntervalMs = qi.HEARTBEAT_INTERVAL,
        this.heartbeatTimer = void 0,
        this.pendingHeartbeatRef = null,
        this.heartbeatCallback = _u,
        this.ref = 0,
        this.reconnectTimer = null,
        this.vsn = hm,
        this.logger = _u,
        this.conn = null,
        this.sendBuffer = [],
        this.serializer = new rp,
        this.stateChangeCallbacks = {
            open: [],
            close: [],
            error: [],
            message: []
        },
        this.accessToken = null,
        this._connectionState = "disconnected",
        this._wasManualDisconnect = !1,
        this._authPromise = null,
        this._resolveFetch = c => c ? (...d) => c(...d) : (...d) => fetch(...d),
        !(!((l = i?.params) === null || l === void 0) && l.apikey))
            throw new Error("API key is required to connect to Realtime");
        this.apiKey = i.params.apikey,
        this.endPoint = `${n}/${ku.websocket}`,
        this.httpEndpoint = Xm(n),
        this._initializeOptions(i),
        this._setupReconnectionTimer(),
        this.fetch = this._resolveFetch(i?.fetch)
    }
    connect() {
        if (!(this.isConnecting() || this.isDisconnecting() || this.conn !== null && this.isConnected())) {
            if (this._setConnectionState("connecting"),
            this.accessToken && !this._authPromise && this._setAuthSafely("connect"),
            this.transport)
                this.conn = new this.transport(this.endpointURL());
            else
                try {
                    this.conn = Fy.createWebSocket(this.endpointURL())
                } catch (n) {
                    this._setConnectionState("disconnected");
                    const i = n.message;
                    throw i.includes("Node.js") ? new Error(`${i}

To use Realtime in Node.js, you need to provide a WebSocket implementation:

Option 1: Use Node.js 22+ which has native WebSocket support
Option 2: Install and provide the "ws" package:

  npm install ws

  import ws from "ws"
  const client = new RealtimeClient(url, {
    ...options,
    transport: ws
  })`) : new Error(`WebSocket not available: ${i}`)
                }
            this._setupConnectionHandlers()
        }
    }
    endpointURL() {
        return this._appendParams(this.endPoint, Object.assign({}, this.params, {
            vsn: this.vsn
        }))
    }
    disconnect(n, i) {
        if (!this.isDisconnecting())
            if (this._setConnectionState("disconnecting", !0),
            this.conn) {
                const l = setTimeout( () => {
                    this._setConnectionState("disconnected")
                }
                , 100);
                this.conn.onclose = () => {
                    clearTimeout(l),
                    this._setConnectionState("disconnected")
                }
                ,
                typeof this.conn.close == "function" && (n ? this.conn.close(n, i ?? "") : this.conn.close()),
                this._teardownConnection()
            } else
                this._setConnectionState("disconnected")
    }
    getChannels() {
        return this.channels
    }
    async removeChannel(n) {
        const i = await n.unsubscribe();
        return this.channels.length === 0 && this.disconnect(),
        i
    }
    async removeAllChannels() {
        const n = await Promise.all(this.channels.map(i => i.unsubscribe()));
        return this.channels = [],
        this.disconnect(),
        n
    }
    log(n, i, l) {
        this.logger(n, i, l)
    }
    connectionState() {
        switch (this.conn && this.conn.readyState) {
        case Ga.connecting:
            return fn.Connecting;
        case Ga.open:
            return fn.Open;
        case Ga.closing:
            return fn.Closing;
        default:
            return fn.Closed
        }
    }
    isConnected() {
        return this.connectionState() === fn.Open
    }
    isConnecting() {
        return this._connectionState === "connecting"
    }
    isDisconnecting() {
        return this._connectionState === "disconnecting"
    }
    channel(n, i={
        config: {}
    }) {
        const l = `realtime:${n}`
          , c = this.getChannels().find(d => d.topic === l);
        if (c)
            return c;
        {
            const d = new us(`realtime:${n}`,i,this);
            return this.channels.push(d),
            d
        }
    }
    push(n) {
        const {topic: i, event: l, payload: c, ref: d} = n
          , f = () => {
            this.encode(n, y => {
                var g;
                (g = this.conn) === null || g === void 0 || g.send(y)
            }
            )
        }
        ;
        this.log("push", `${i} ${l} (${d})`, c),
        this.isConnected() ? f() : this.sendBuffer.push(f)
    }
    async setAuth(n=null) {
        this._authPromise = this._performAuth(n);
        try {
            await this._authPromise
        } finally {
            this._authPromise = null
        }
    }
    _isManualToken() {
        return this._manuallySetToken
    }
    async sendHeartbeat() {
        var n;
        if (!this.isConnected()) {
            try {
                this.heartbeatCallback("disconnected")
            } catch (i) {
                this.log("error", "error in heartbeat callback", i)
            }
            return
        }
        if (this.pendingHeartbeatRef) {
            this.pendingHeartbeatRef = null,
            this.log("transport", "heartbeat timeout. Attempting to re-establish connection");
            try {
                this.heartbeatCallback("timeout")
            } catch (i) {
                this.log("error", "error in heartbeat callback", i)
            }
            this._wasManualDisconnect = !1,
            (n = this.conn) === null || n === void 0 || n.close(np, "heartbeat timeout"),
            setTimeout( () => {
                var i;
                this.isConnected() || (i = this.reconnectTimer) === null || i === void 0 || i.scheduleTimeout()
            }
            , qi.HEARTBEAT_TIMEOUT_FALLBACK);
            return
        }
        this.pendingHeartbeatRef = this._makeRef(),
        this.push({
            topic: "phoenix",
            event: "heartbeat",
            payload: {},
            ref: this.pendingHeartbeatRef
        });
        try {
            this.heartbeatCallback("sent")
        } catch (i) {
            this.log("error", "error in heartbeat callback", i)
        }
        this._setAuthSafely("heartbeat")
    }
    onHeartbeat(n) {
        this.heartbeatCallback = n
    }
    flushSendBuffer() {
        this.isConnected() && this.sendBuffer.length > 0 && (this.sendBuffer.forEach(n => n()),
        this.sendBuffer = [])
    }
    _makeRef() {
        let n = this.ref + 1;
        return n === this.ref ? this.ref = 0 : this.ref = n,
        this.ref.toString()
    }
    _leaveOpenTopic(n) {
        let i = this.channels.find(l => l.topic === n && (l._isJoined() || l._isJoining()));
        i && (this.log("transport", `leaving duplicate topic "${n}"`),
        i.unsubscribe())
    }
    _remove(n) {
        this.channels = this.channels.filter(i => i.topic !== n.topic)
    }
    _onConnMessage(n) {
        this.decode(n.data, i => {
            if (i.topic === "phoenix" && i.event === "phx_reply")
                try {
                    this.heartbeatCallback(i.payload.status === "ok" ? "ok" : "error")
                } catch (p) {
                    this.log("error", "error in heartbeat callback", p)
                }
            i.ref && i.ref === this.pendingHeartbeatRef && (this.pendingHeartbeatRef = null);
            const {topic: l, event: c, payload: d, ref: f} = i
              , y = f ? `(${f})` : ""
              , g = d.status || "";
            this.log("receive", `${g} ${l} ${c} ${y}`.trim(), d),
            this.channels.filter(p => p._isMember(l)).forEach(p => p._trigger(c, d, f)),
            this._triggerStateCallbacks("message", i)
        }
        )
    }
    _clearTimer(n) {
        var i;
        n === "heartbeat" && this.heartbeatTimer ? (clearInterval(this.heartbeatTimer),
        this.heartbeatTimer = void 0) : n === "reconnect" && ((i = this.reconnectTimer) === null || i === void 0 || i.reset())
    }
    _clearAllTimers() {
        this._clearTimer("heartbeat"),
        this._clearTimer("reconnect")
    }
    _setupConnectionHandlers() {
        this.conn && ("binaryType"in this.conn && (this.conn.binaryType = "arraybuffer"),
        this.conn.onopen = () => this._onConnOpen(),
        this.conn.onerror = n => this._onConnError(n),
        this.conn.onmessage = n => this._onConnMessage(n),
        this.conn.onclose = n => this._onConnClose(n),
        this.conn.readyState === Ga.open && this._onConnOpen())
    }
    _teardownConnection() {
        if (this.conn) {
            if (this.conn.readyState === Ga.open || this.conn.readyState === Ga.connecting)
                try {
                    this.conn.close()
                } catch (n) {
                    this.log("error", "Error closing connection", n)
                }
            this.conn.onopen = null,
            this.conn.onerror = null,
            this.conn.onmessage = null,
            this.conn.onclose = null,
            this.conn = null
        }
        this._clearAllTimers(),
        this._terminateWorker(),
        this.channels.forEach(n => n.teardown())
    }
    _onConnOpen() {
        this._setConnectionState("connected"),
        this.log("transport", `connected to ${this.endpointURL()}`),
        (this._authPromise || (this.accessToken && !this.accessTokenValue ? this.setAuth() : Promise.resolve())).then( () => {
            this.flushSendBuffer()
        }
        ).catch(i => {
            this.log("error", "error waiting for auth on connect", i),
            this.flushSendBuffer()
        }
        ),
        this._clearTimer("reconnect"),
        this.worker ? this.workerRef || this._startWorkerHeartbeat() : this._startHeartbeat(),
        this._triggerStateCallbacks("open")
    }
    _startHeartbeat() {
        this.heartbeatTimer && clearInterval(this.heartbeatTimer),
        this.heartbeatTimer = setInterval( () => this.sendHeartbeat(), this.heartbeatIntervalMs)
    }
    _startWorkerHeartbeat() {
        this.workerUrl ? this.log("worker", `starting worker for from ${this.workerUrl}`) : this.log("worker", "starting default worker");
        const n = this._workerObjectUrl(this.workerUrl);
        this.workerRef = new Worker(n),
        this.workerRef.onerror = i => {
            this.log("worker", "worker error", i.message),
            this._terminateWorker()
        }
        ,
        this.workerRef.onmessage = i => {
            i.data.event === "keepAlive" && this.sendHeartbeat()
        }
        ,
        this.workerRef.postMessage({
            event: "start",
            interval: this.heartbeatIntervalMs
        })
    }
    _terminateWorker() {
        this.workerRef && (this.log("worker", "terminating worker"),
        this.workerRef.terminate(),
        this.workerRef = void 0)
    }
    _onConnClose(n) {
        var i;
        this._setConnectionState("disconnected"),
        this.log("transport", "close", n),
        this._triggerChanError(),
        this._clearTimer("heartbeat"),
        this._wasManualDisconnect || (i = this.reconnectTimer) === null || i === void 0 || i.scheduleTimeout(),
        this._triggerStateCallbacks("close", n)
    }
    _onConnError(n) {
        this._setConnectionState("disconnected"),
        this.log("transport", `${n}`),
        this._triggerChanError(),
        this._triggerStateCallbacks("error", n)
    }
    _triggerChanError() {
        this.channels.forEach(n => n._trigger(Xt.error))
    }
    _appendParams(n, i) {
        if (Object.keys(i).length === 0)
            return n;
        const l = n.match(/\?/) ? "&" : "?"
          , c = new URLSearchParams(i);
        return `${n}${l}${c}`
    }
    _workerObjectUrl(n) {
        let i;
        if (n)
            i = n;
        else {
            const l = new Blob([mp],{
                type: "application/javascript"
            });
            i = URL.createObjectURL(l)
        }
        return i
    }
    _setConnectionState(n, i=!1) {
        this._connectionState = n,
        n === "connecting" ? this._wasManualDisconnect = !1 : n === "disconnecting" && (this._wasManualDisconnect = i)
    }
    async _performAuth(n=null) {
        let i, l = !1;
        if (n)
            i = n,
            l = !0;
        else if (this.accessToken)
            try {
                i = await this.accessToken()
            } catch (c) {
                this.log("error", "Error fetching access token from callback", c),
                i = this.accessTokenValue
            }
        else
            i = this.accessTokenValue;
        l ? this._manuallySetToken = !0 : this.accessToken && (this._manuallySetToken = !1),
        this.accessTokenValue != i && (this.accessTokenValue = i,
        this.channels.forEach(c => {
            const d = {
                access_token: i,
                version: tp
            };
            i && c.updateJoinPayload(d),
            c.joinedOnce && c._isJoined() && c._push(Xt.access_token, {
                access_token: i
            })
        }
        ))
    }
    async _waitForAuthIfNeeded() {
        this._authPromise && await this._authPromise
    }
    _setAuthSafely(n="general") {
        this._isManualToken() || this.setAuth().catch(i => {
            this.log("error", `Error setting auth in ${n}`, i)
        }
        )
    }
    _triggerStateCallbacks(n, i) {
        try {
            this.stateChangeCallbacks[n].forEach(l => {
                try {
                    l(i)
                } catch (c) {
                    this.log("error", `error in ${n} callback`, c)
                }
            }
            )
        } catch (l) {
            this.log("error", `error triggering ${n} callbacks`, l)
        }
    }
    _setupReconnectionTimer() {
        this.reconnectTimer = new Ym(async () => {
            setTimeout(async () => {
                await this._waitForAuthIfNeeded(),
                this.isConnected() || this.connect()
            }
            , qi.RECONNECT_DELAY)
        }
        ,this.reconnectAfterMs)
    }
    _initializeOptions(n) {
        var i, l, c, d, f, y, g, p, v, j, E, _;
        switch (this.transport = (i = n?.transport) !== null && i !== void 0 ? i : null,
        this.timeout = (l = n?.timeout) !== null && l !== void 0 ? l : Cu,
        this.heartbeatIntervalMs = (c = n?.heartbeatIntervalMs) !== null && c !== void 0 ? c : qi.HEARTBEAT_INTERVAL,
        this.worker = (d = n?.worker) !== null && d !== void 0 ? d : !1,
        this.accessToken = (f = n?.accessToken) !== null && f !== void 0 ? f : null,
        this.heartbeatCallback = (y = n?.heartbeatCallback) !== null && y !== void 0 ? y : _u,
        this.vsn = (g = n?.vsn) !== null && g !== void 0 ? g : hm,
        n?.params && (this.params = n.params),
        n?.logger && (this.logger = n.logger),
        (n?.logLevel || n?.log_level) && (this.logLevel = n.logLevel || n.log_level,
        this.params = Object.assign(Object.assign({}, this.params), {
            log_level: this.logLevel
        })),
        this.reconnectAfterMs = (p = n?.reconnectAfterMs) !== null && p !== void 0 ? p : (T => hp[T - 1] || fp),
        this.vsn) {
        case Vm:
            this.encode = (v = n?.encode) !== null && v !== void 0 ? v : ( (T, C) => C(JSON.stringify(T))),
            this.decode = (j = n?.decode) !== null && j !== void 0 ? j : ( (T, C) => C(JSON.parse(T)));
            break;
        case ap:
            this.encode = (E = n?.encode) !== null && E !== void 0 ? E : this.serializer.encode.bind(this.serializer),
            this.decode = (_ = n?.decode) !== null && _ !== void 0 ? _ : this.serializer.decode.bind(this.serializer);
            break;
        default:
            throw new Error(`Unsupported serializer version: ${this.vsn}`)
        }
        if (this.worker) {
            if (typeof window < "u" && !window.Worker)
                throw new Error("Web Worker is not supported");
            this.workerUrl = n?.workerUrl
        }
    }
}
var cr = class extends Error {
    constructor(r, n) {
        super(r),
        this.name = "IcebergError",
        this.status = n.status,
        this.icebergType = n.icebergType,
        this.icebergCode = n.icebergCode,
        this.details = n.details,
        this.isCommitStateUnknown = n.icebergType === "CommitStateUnknownException" || [500, 502, 504].includes(n.status) && n.icebergType?.includes("CommitState") === !0
    }
    isNotFound() {
        return this.status === 404
    }
    isConflict() {
        return this.status === 409
    }
    isAuthenticationTimeout() {
        return this.status === 419
    }
}
;
function yp(r, n, i) {
    const l = new URL(n,r);
    if (i)
        for (const [c,d] of Object.entries(i))
            d !== void 0 && l.searchParams.set(c, d);
    return l.toString()
}
async function pp(r) {
    return !r || r.type === "none" ? {} : r.type === "bearer" ? {
        Authorization: `Bearer ${r.token}`
    } : r.type === "header" ? {
        [r.name]: r.value
    } : r.type === "custom" ? await r.getHeaders() : {}
}
function bp(r) {
    const n = r.fetchImpl ?? globalThis.fetch;
    return {
        async request({method: i, path: l, query: c, body: d, headers: f}) {
            const y = yp(r.baseUrl, l, c)
              , g = await pp(r.auth)
              , p = await n(y, {
                method: i,
                headers: {
                    ...d ? {
                        "Content-Type": "application/json"
                    } : {},
                    ...g,
                    ...f
                },
                body: d ? JSON.stringify(d) : void 0
            })
              , v = await p.text()
              , j = (p.headers.get("content-type") || "").includes("application/json")
              , E = j && v ? JSON.parse(v) : v;
            if (!p.ok) {
                const _ = j ? E : void 0
                  , T = _?.error;
                throw new cr(T?.message ?? `Request failed with status ${p.status}`,{
                    status: p.status,
                    icebergType: T?.type,
                    icebergCode: T?.code,
                    details: _
                })
            }
            return {
                status: p.status,
                headers: p.headers,
                data: E
            }
        }
    }
}
function Bi(r) {
    return r.join("")
}
var vp = class {
    constructor(r, n="") {
        this.client = r,
        this.prefix = n
    }
    async listNamespaces(r) {
        const n = r ? {
            parent: Bi(r.namespace)
        } : void 0;
        return (await this.client.request({
            method: "GET",
            path: `${this.prefix}/namespaces`,
            query: n
        })).data.namespaces.map(l => ({
            namespace: l
        }))
    }
    async createNamespace(r, n) {
        const i = {
            namespace: r.namespace,
            properties: n?.properties
        };
        return (await this.client.request({
            method: "POST",
            path: `${this.prefix}/namespaces`,
            body: i
        })).data
    }
    async dropNamespace(r) {
        await this.client.request({
            method: "DELETE",
            path: `${this.prefix}/namespaces/${Bi(r.namespace)}`
        })
    }
    async loadNamespaceMetadata(r) {
        return {
            properties: (await this.client.request({
                method: "GET",
                path: `${this.prefix}/namespaces/${Bi(r.namespace)}`
            })).data.properties
        }
    }
    async namespaceExists(r) {
        try {
            return await this.client.request({
                method: "HEAD",
                path: `${this.prefix}/namespaces/${Bi(r.namespace)}`
            }),
            !0
        } catch (n) {
            if (n instanceof cr && n.status === 404)
                return !1;
            throw n
        }
    }
    async createNamespaceIfNotExists(r, n) {
        try {
            return await this.createNamespace(r, n)
        } catch (i) {
            if (i instanceof cr && i.status === 409)
                return;
            throw i
        }
    }
}
;
function es(r) {
    return r.join("")
}
var xp = class {
    constructor(r, n="", i) {
        this.client = r,
        this.prefix = n,
        this.accessDelegation = i
    }
    async listTables(r) {
        return (await this.client.request({
            method: "GET",
            path: `${this.prefix}/namespaces/${es(r.namespace)}/tables`
        })).data.identifiers
    }
    async createTable(r, n) {
        const i = {};
        return this.accessDelegation && (i["X-Iceberg-Access-Delegation"] = this.accessDelegation),
        (await this.client.request({
            method: "POST",
            path: `${this.prefix}/namespaces/${es(r.namespace)}/tables`,
            body: n,
            headers: i
        })).data.metadata
    }
    async updateTable(r, n) {
        const i = await this.client.request({
            method: "POST",
            path: `${this.prefix}/namespaces/${es(r.namespace)}/tables/${r.name}`,
            body: n
        });
        return {
            "metadata-location": i.data["metadata-location"],
            metadata: i.data.metadata
        }
    }
    async dropTable(r, n) {
        await this.client.request({
            method: "DELETE",
            path: `${this.prefix}/namespaces/${es(r.namespace)}/tables/${r.name}`,
            query: {
                purgeRequested: String(n?.purge ?? !1)
            }
        })
    }
    async loadTable(r) {
        const n = {};
        return this.accessDelegation && (n["X-Iceberg-Access-Delegation"] = this.accessDelegation),
        (await this.client.request({
            method: "GET",
            path: `${this.prefix}/namespaces/${es(r.namespace)}/tables/${r.name}`,
            headers: n
        })).data.metadata
    }
    async tableExists(r) {
        const n = {};
        this.accessDelegation && (n["X-Iceberg-Access-Delegation"] = this.accessDelegation);
        try {
            return await this.client.request({
                method: "HEAD",
                path: `${this.prefix}/namespaces/${es(r.namespace)}/tables/${r.name}`,
                headers: n
            }),
            !0
        } catch (i) {
            if (i instanceof cr && i.status === 404)
                return !1;
            throw i
        }
    }
    async createTableIfNotExists(r, n) {
        try {
            return await this.createTable(r, n)
        } catch (i) {
            if (i instanceof cr && i.status === 409)
                return await this.loadTable({
                    namespace: r.namespace,
                    name: n.name
                });
            throw i
        }
    }
}
  , _p = class {
    constructor(r) {
        let n = "v1";
        r.catalogName && (n += `/${r.catalogName}`);
        const i = r.baseUrl.endsWith("/") ? r.baseUrl : `${r.baseUrl}/`;
        this.client = bp({
            baseUrl: i,
            auth: r.auth,
            fetchImpl: r.fetch
        }),
        this.accessDelegation = r.accessDelegation?.join(","),
        this.namespaceOps = new vp(this.client,n),
        this.tableOps = new xp(this.client,n,this.accessDelegation)
    }
    async listNamespaces(r) {
        return this.namespaceOps.listNamespaces(r)
    }
    async createNamespace(r, n) {
        return this.namespaceOps.createNamespace(r, n)
    }
    async dropNamespace(r) {
        await this.namespaceOps.dropNamespace(r)
    }
    async loadNamespaceMetadata(r) {
        return this.namespaceOps.loadNamespaceMetadata(r)
    }
    async listTables(r) {
        return this.tableOps.listTables(r)
    }
    async createTable(r, n) {
        return this.tableOps.createTable(r, n)
    }
    async updateTable(r, n) {
        return this.tableOps.updateTable(r, n)
    }
    async dropTable(r, n) {
        await this.tableOps.dropTable(r, n)
    }
    async loadTable(r) {
        return this.tableOps.loadTable(r)
    }
    async namespaceExists(r) {
        return this.namespaceOps.namespaceExists(r)
    }
    async tableExists(r) {
        return this.tableOps.tableExists(r)
    }
    async createNamespaceIfNotExists(r, n) {
        return this.namespaceOps.createNamespaceIfNotExists(r, n)
    }
    async createTableIfNotExists(r, n) {
        return this.tableOps.createTableIfNotExists(r, n)
    }
}
  , Ji = class extends Error {
    constructor(r) {
        super(r),
        this.__isStorageError = !0,
        this.name = "StorageError"
    }
}
;
function Be(r) {
    return typeof r == "object" && r !== null && "__isStorageError"in r
}
var wp = class extends Ji {
    constructor(r, n, i) {
        super(r),
        this.name = "StorageApiError",
        this.status = n,
        this.statusCode = i
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            status: this.status,
            statusCode: this.statusCode
        }
    }
}
  , Uu = class extends Ji {
    constructor(r, n) {
        super(r),
        this.name = "StorageUnknownError",
        this.originalError = n
    }
}
;
const Ju = r => r ? (...n) => r(...n) : (...n) => fetch(...n)
  , Sp = () => Response
  , zu = r => {
    if (Array.isArray(r))
        return r.map(i => zu(i));
    if (typeof r == "function" || r !== Object(r))
        return r;
    const n = {};
    return Object.entries(r).forEach( ([i,l]) => {
        const c = i.replace(/([-_][a-z])/gi, d => d.toUpperCase().replace(/[-_]/g, ""));
        n[c] = zu(l)
    }
    ),
    n
}
  , Ep = r => {
    if (typeof r != "object" || r === null)
        return !1;
    const n = Object.getPrototypeOf(r);
    return (n === null || n === Object.prototype || Object.getPrototypeOf(n) === null) && !(Symbol.toStringTag in r) && !(Symbol.iterator in r)
}
  , Tp = r => !r || typeof r != "string" || r.length === 0 || r.length > 100 || r.trim() !== r || r.includes("/") || r.includes("\\") ? !1 : /^[\w!.\*'() &$@=;:+,?-]+$/.test(r);
function dr(r) {
    "@babel/helpers - typeof";
    return dr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
        return typeof n
    }
    : function(n) {
        return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
    }
    ,
    dr(r)
}
function jp(r, n) {
    if (dr(r) != "object" || !r)
        return r;
    var i = r[Symbol.toPrimitive];
    if (i !== void 0) {
        var l = i.call(r, n);
        if (dr(l) != "object")
            return l;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (n === "string" ? String : Number)(r)
}
function Np(r) {
    var n = jp(r, "string");
    return dr(n) == "symbol" ? n : n + ""
}
function Ap(r, n, i) {
    return (n = Np(n))in r ? Object.defineProperty(r, n, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[n] = i,
    r
}
function ym(r, n) {
    var i = Object.keys(r);
    if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(r);
        n && (l = l.filter(function(c) {
            return Object.getOwnPropertyDescriptor(r, c).enumerable
        })),
        i.push.apply(i, l)
    }
    return i
}
function se(r) {
    for (var n = 1; n < arguments.length; n++) {
        var i = arguments[n] != null ? arguments[n] : {};
        n % 2 ? ym(Object(i), !0).forEach(function(l) {
            Ap(r, l, i[l])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : ym(Object(i)).forEach(function(l) {
            Object.defineProperty(r, l, Object.getOwnPropertyDescriptor(i, l))
        })
    }
    return r
}
const wu = r => {
    var n;
    return r.msg || r.message || r.error_description || (typeof r.error == "string" ? r.error : (n = r.error) === null || n === void 0 ? void 0 : n.message) || JSON.stringify(r)
}
  , Op = async (r, n, i) => {
    r instanceof await Sp() && !i?.noResolveJson ? r.json().then(l => {
        const c = r.status || 500
          , d = l?.statusCode || c + "";
        n(new wp(wu(l),c,d))
    }
    ).catch(l => {
        n(new Uu(wu(l),l))
    }
    ) : n(new Uu(wu(r),r))
}
  , Rp = (r, n, i, l) => {
    const c = {
        method: r,
        headers: n?.headers || {}
    };
    return r === "GET" || !l ? c : (Ep(l) ? (c.headers = se({
        "Content-Type": "application/json"
    }, n?.headers),
    c.body = JSON.stringify(l)) : c.body = l,
    n?.duplex && (c.duplex = n.duplex),
    se(se({}, c), i))
}
;
async function br(r, n, i, l, c, d) {
    return new Promise( (f, y) => {
        r(i, Rp(n, l, c, d)).then(g => {
            if (!g.ok)
                throw g;
            return l?.noResolveJson ? g : g.json()
        }
        ).then(g => f(g)).catch(g => Op(g, y, l))
    }
    )
}
async function hr(r, n, i, l) {
    return br(r, "GET", n, i, l)
}
async function Kt(r, n, i, l, c) {
    return br(r, "POST", n, l, c, i)
}
async function Mu(r, n, i, l, c) {
    return br(r, "PUT", n, l, c, i)
}
async function Cp(r, n, i, l) {
    return br(r, "HEAD", n, se(se({}, i), {}, {
        noResolveJson: !0
    }), l)
}
async function Qu(r, n, i, l, c) {
    return br(r, "DELETE", n, l, c, i)
}
var kp = class {
    constructor(r, n) {
        this.downloadFn = r,
        this.shouldThrowOnError = n
    }
    then(r, n) {
        return this.execute().then(r, n)
    }
    async execute() {
        var r = this;
        try {
            return {
                data: (await r.downloadFn()).body,
                error: null
            }
        } catch (n) {
            if (r.shouldThrowOnError)
                throw n;
            if (Be(n))
                return {
                    data: null,
                    error: n
                };
            throw n
        }
    }
}
;
let Jm;
Jm = Symbol.toStringTag;
var Dp = class {
    constructor(r, n) {
        this.downloadFn = r,
        this.shouldThrowOnError = n,
        this[Jm] = "BlobDownloadBuilder",
        this.promise = null
    }
    asStream() {
        return new kp(this.downloadFn,this.shouldThrowOnError)
    }
    then(r, n) {
        return this.getPromise().then(r, n)
    }
    catch(r) {
        return this.getPromise().catch(r)
    }
    finally(r) {
        return this.getPromise().finally(r)
    }
    getPromise() {
        return this.promise || (this.promise = this.execute()),
        this.promise
    }
    async execute() {
        var r = this;
        try {
            return {
                data: await (await r.downloadFn()).blob(),
                error: null
            }
        } catch (n) {
            if (r.shouldThrowOnError)
                throw n;
            if (Be(n))
                return {
                    data: null,
                    error: n
                };
            throw n
        }
    }
}
;
const Up = {
    limit: 100,
    offset: 0,
    sortBy: {
        column: "name",
        order: "asc"
    }
}
  , pm = {
    cacheControl: "3600",
    contentType: "text/plain;charset=UTF-8",
    upsert: !1
};
var zp = class {
    constructor(r, n={}, i, l) {
        this.shouldThrowOnError = !1,
        this.url = r,
        this.headers = n,
        this.bucketId = i,
        this.fetch = Ju(l)
    }
    throwOnError() {
        return this.shouldThrowOnError = !0,
        this
    }
    async uploadOrUpdate(r, n, i, l) {
        var c = this;
        try {
            let d;
            const f = se(se({}, pm), l);
            let y = se(se({}, c.headers), r === "POST" && {
                "x-upsert": String(f.upsert)
            });
            const g = f.metadata;
            typeof Blob < "u" && i instanceof Blob ? (d = new FormData,
            d.append("cacheControl", f.cacheControl),
            g && d.append("metadata", c.encodeMetadata(g)),
            d.append("", i)) : typeof FormData < "u" && i instanceof FormData ? (d = i,
            d.has("cacheControl") || d.append("cacheControl", f.cacheControl),
            g && !d.has("metadata") && d.append("metadata", c.encodeMetadata(g))) : (d = i,
            y["cache-control"] = `max-age=${f.cacheControl}`,
            y["content-type"] = f.contentType,
            g && (y["x-metadata"] = c.toBase64(c.encodeMetadata(g))),
            (typeof ReadableStream < "u" && d instanceof ReadableStream || d && typeof d == "object" && "pipe"in d && typeof d.pipe == "function") && !f.duplex && (f.duplex = "half")),
            l?.headers && (y = se(se({}, y), l.headers));
            const p = c._removeEmptyFolders(n)
              , v = c._getFinalPath(p)
              , j = await (r == "PUT" ? Mu : Kt)(c.fetch, `${c.url}/object/${v}`, d, se({
                headers: y
            }, f?.duplex ? {
                duplex: f.duplex
            } : {}));
            return {
                data: {
                    path: p,
                    id: j.Id,
                    fullPath: j.Key
                },
                error: null
            }
        } catch (d) {
            if (c.shouldThrowOnError)
                throw d;
            if (Be(d))
                return {
                    data: null,
                    error: d
                };
            throw d
        }
    }
    async upload(r, n, i) {
        return this.uploadOrUpdate("POST", r, n, i)
    }
    async uploadToSignedUrl(r, n, i, l) {
        var c = this;
        const d = c._removeEmptyFolders(r)
          , f = c._getFinalPath(d)
          , y = new URL(c.url + `/object/upload/sign/${f}`);
        y.searchParams.set("token", n);
        try {
            let g;
            const p = se({
                upsert: pm.upsert
            }, l)
              , v = se(se({}, c.headers), {
                "x-upsert": String(p.upsert)
            });
            return typeof Blob < "u" && i instanceof Blob ? (g = new FormData,
            g.append("cacheControl", p.cacheControl),
            g.append("", i)) : typeof FormData < "u" && i instanceof FormData ? (g = i,
            g.append("cacheControl", p.cacheControl)) : (g = i,
            v["cache-control"] = `max-age=${p.cacheControl}`,
            v["content-type"] = p.contentType),
            {
                data: {
                    path: d,
                    fullPath: (await Mu(c.fetch, y.toString(), g, {
                        headers: v
                    })).Key
                },
                error: null
            }
        } catch (g) {
            if (c.shouldThrowOnError)
                throw g;
            if (Be(g))
                return {
                    data: null,
                    error: g
                };
            throw g
        }
    }
    async createSignedUploadUrl(r, n) {
        var i = this;
        try {
            let l = i._getFinalPath(r);
            const c = se({}, i.headers);
            n?.upsert && (c["x-upsert"] = "true");
            const d = await Kt(i.fetch, `${i.url}/object/upload/sign/${l}`, {}, {
                headers: c
            })
              , f = new URL(i.url + d.url)
              , y = f.searchParams.get("token");
            if (!y)
                throw new Ji("No token returned by API");
            return {
                data: {
                    signedUrl: f.toString(),
                    path: r,
                    token: y
                },
                error: null
            }
        } catch (l) {
            if (i.shouldThrowOnError)
                throw l;
            if (Be(l))
                return {
                    data: null,
                    error: l
                };
            throw l
        }
    }
    async update(r, n, i) {
        return this.uploadOrUpdate("PUT", r, n, i)
    }
    async move(r, n, i) {
        var l = this;
        try {
            return {
                data: await Kt(l.fetch, `${l.url}/object/move`, {
                    bucketId: l.bucketId,
                    sourceKey: r,
                    destinationKey: n,
                    destinationBucket: i?.destinationBucket
                }, {
                    headers: l.headers
                }),
                error: null
            }
        } catch (c) {
            if (l.shouldThrowOnError)
                throw c;
            if (Be(c))
                return {
                    data: null,
                    error: c
                };
            throw c
        }
    }
    async copy(r, n, i) {
        var l = this;
        try {
            return {
                data: {
                    path: (await Kt(l.fetch, `${l.url}/object/copy`, {
                        bucketId: l.bucketId,
                        sourceKey: r,
                        destinationKey: n,
                        destinationBucket: i?.destinationBucket
                    }, {
                        headers: l.headers
                    })).Key
                },
                error: null
            }
        } catch (c) {
            if (l.shouldThrowOnError)
                throw c;
            if (Be(c))
                return {
                    data: null,
                    error: c
                };
            throw c
        }
    }
    async createSignedUrl(r, n, i) {
        var l = this;
        try {
            let c = l._getFinalPath(r)
              , d = await Kt(l.fetch, `${l.url}/object/sign/${c}`, se({
                expiresIn: n
            }, i?.transform ? {
                transform: i.transform
            } : {}), {
                headers: l.headers
            });
            const f = i?.download ? `&download=${i.download === !0 ? "" : i.download}` : "";
            return d = {
                signedUrl: encodeURI(`${l.url}${d.signedURL}${f}`)
            },
            {
                data: d,
                error: null
            }
        } catch (c) {
            if (l.shouldThrowOnError)
                throw c;
            if (Be(c))
                return {
                    data: null,
                    error: c
                };
            throw c
        }
    }
    async createSignedUrls(r, n, i) {
        var l = this;
        try {
            const c = await Kt(l.fetch, `${l.url}/object/sign/${l.bucketId}`, {
                expiresIn: n,
                paths: r
            }, {
                headers: l.headers
            })
              , d = i?.download ? `&download=${i.download === !0 ? "" : i.download}` : "";
            return {
                data: c.map(f => se(se({}, f), {}, {
                    signedUrl: f.signedURL ? encodeURI(`${l.url}${f.signedURL}${d}`) : null
                })),
                error: null
            }
        } catch (c) {
            if (l.shouldThrowOnError)
                throw c;
            if (Be(c))
                return {
                    data: null,
                    error: c
                };
            throw c
        }
    }
    download(r, n) {
        const i = typeof n?.transform < "u" ? "render/image/authenticated" : "object"
          , l = this.transformOptsToQueryString(n?.transform || {})
          , c = l ? `?${l}` : ""
          , d = this._getFinalPath(r)
          , f = () => hr(this.fetch, `${this.url}/${i}/${d}${c}`, {
            headers: this.headers,
            noResolveJson: !0
        });
        return new Dp(f,this.shouldThrowOnError)
    }
    async info(r) {
        var n = this;
        const i = n._getFinalPath(r);
        try {
            return {
                data: zu(await hr(n.fetch, `${n.url}/object/info/${i}`, {
                    headers: n.headers
                })),
                error: null
            }
        } catch (l) {
            if (n.shouldThrowOnError)
                throw l;
            if (Be(l))
                return {
                    data: null,
                    error: l
                };
            throw l
        }
    }
    async exists(r) {
        var n = this;
        const i = n._getFinalPath(r);
        try {
            return await Cp(n.fetch, `${n.url}/object/${i}`, {
                headers: n.headers
            }),
            {
                data: !0,
                error: null
            }
        } catch (l) {
            if (n.shouldThrowOnError)
                throw l;
            if (Be(l) && l instanceof Uu) {
                const c = l.originalError;
                if ([400, 404].includes(c?.status))
                    return {
                        data: !1,
                        error: l
                    }
            }
            throw l
        }
    }
    getPublicUrl(r, n) {
        const i = this._getFinalPath(r)
          , l = []
          , c = n?.download ? `download=${n.download === !0 ? "" : n.download}` : "";
        c !== "" && l.push(c);
        const d = typeof n?.transform < "u" ? "render/image" : "object"
          , f = this.transformOptsToQueryString(n?.transform || {});
        f !== "" && l.push(f);
        let y = l.join("&");
        return y !== "" && (y = `?${y}`),
        {
            data: {
                publicUrl: encodeURI(`${this.url}/${d}/public/${i}${y}`)
            }
        }
    }
    async remove(r) {
        var n = this;
        try {
            return {
                data: await Qu(n.fetch, `${n.url}/object/${n.bucketId}`, {
                    prefixes: r
                }, {
                    headers: n.headers
                }),
                error: null
            }
        } catch (i) {
            if (n.shouldThrowOnError)
                throw i;
            if (Be(i))
                return {
                    data: null,
                    error: i
                };
            throw i
        }
    }
    async list(r, n, i) {
        var l = this;
        try {
            const c = se(se(se({}, Up), n), {}, {
                prefix: r || ""
            });
            return {
                data: await Kt(l.fetch, `${l.url}/object/list/${l.bucketId}`, c, {
                    headers: l.headers
                }, i),
                error: null
            }
        } catch (c) {
            if (l.shouldThrowOnError)
                throw c;
            if (Be(c))
                return {
                    data: null,
                    error: c
                };
            throw c
        }
    }
    async listV2(r, n) {
        var i = this;
        try {
            const l = se({}, r);
            return {
                data: await Kt(i.fetch, `${i.url}/object/list-v2/${i.bucketId}`, l, {
                    headers: i.headers
                }, n),
                error: null
            }
        } catch (l) {
            if (i.shouldThrowOnError)
                throw l;
            if (Be(l))
                return {
                    data: null,
                    error: l
                };
            throw l
        }
    }
    encodeMetadata(r) {
        return JSON.stringify(r)
    }
    toBase64(r) {
        return typeof Buffer < "u" ? Buffer.from(r).toString("base64") : btoa(r)
    }
    _getFinalPath(r) {
        return `${this.bucketId}/${r.replace(/^\/+/, "")}`
    }
    _removeEmptyFolders(r) {
        return r.replace(/^\/|\/$/g, "").replace(/\/+/g, "/")
    }
    transformOptsToQueryString(r) {
        const n = [];
        return r.width && n.push(`width=${r.width}`),
        r.height && n.push(`height=${r.height}`),
        r.resize && n.push(`resize=${r.resize}`),
        r.format && n.push(`format=${r.format}`),
        r.quality && n.push(`quality=${r.quality}`),
        n.join("&")
    }
}
;
const Qm = "2.89.0"
  , Im = {
    "X-Client-Info": `storage-js/${Qm}`
};
var Mp = class {
    constructor(r, n={}, i, l) {
        this.shouldThrowOnError = !1;
        const c = new URL(r);
        l?.useNewHostname && /supabase\.(co|in|red)$/.test(c.hostname) && !c.hostname.includes("storage.supabase.") && (c.hostname = c.hostname.replace("supabase.", "storage.supabase.")),
        this.url = c.href.replace(/\/$/, ""),
        this.headers = se(se({}, Im), n),
        this.fetch = Ju(i)
    }
    throwOnError() {
        return this.shouldThrowOnError = !0,
        this
    }
    async listBuckets(r) {
        var n = this;
        try {
            const i = n.listBucketOptionsToQueryString(r);
            return {
                data: await hr(n.fetch, `${n.url}/bucket${i}`, {
                    headers: n.headers
                }),
                error: null
            }
        } catch (i) {
            if (n.shouldThrowOnError)
                throw i;
            if (Be(i))
                return {
                    data: null,
                    error: i
                };
            throw i
        }
    }
    async getBucket(r) {
        var n = this;
        try {
            return {
                data: await hr(n.fetch, `${n.url}/bucket/${r}`, {
                    headers: n.headers
                }),
                error: null
            }
        } catch (i) {
            if (n.shouldThrowOnError)
                throw i;
            if (Be(i))
                return {
                    data: null,
                    error: i
                };
            throw i
        }
    }
    async createBucket(r, n={
        public: !1
    }) {
        var i = this;
        try {
            return {
                data: await Kt(i.fetch, `${i.url}/bucket`, {
                    id: r,
                    name: r,
                    type: n.type,
                    public: n.public,
                    file_size_limit: n.fileSizeLimit,
                    allowed_mime_types: n.allowedMimeTypes
                }, {
                    headers: i.headers
                }),
                error: null
            }
        } catch (l) {
            if (i.shouldThrowOnError)
                throw l;
            if (Be(l))
                return {
                    data: null,
                    error: l
                };
            throw l
        }
    }
    async updateBucket(r, n) {
        var i = this;
        try {
            return {
                data: await Mu(i.fetch, `${i.url}/bucket/${r}`, {
                    id: r,
                    name: r,
                    public: n.public,
                    file_size_limit: n.fileSizeLimit,
                    allowed_mime_types: n.allowedMimeTypes
                }, {
                    headers: i.headers
                }),
                error: null
            }
        } catch (l) {
            if (i.shouldThrowOnError)
                throw l;
            if (Be(l))
                return {
                    data: null,
                    error: l
                };
            throw l
        }
    }
    async emptyBucket(r) {
        var n = this;
        try {
            return {
                data: await Kt(n.fetch, `${n.url}/bucket/${r}/empty`, {}, {
                    headers: n.headers
                }),
                error: null
            }
        } catch (i) {
            if (n.shouldThrowOnError)
                throw i;
            if (Be(i))
                return {
                    data: null,
                    error: i
                };
            throw i
        }
    }
    async deleteBucket(r) {
        var n = this;
        try {
            return {
                data: await Qu(n.fetch, `${n.url}/bucket/${r}`, {}, {
                    headers: n.headers
                }),
                error: null
            }
        } catch (i) {
            if (n.shouldThrowOnError)
                throw i;
            if (Be(i))
                return {
                    data: null,
                    error: i
                };
            throw i
        }
    }
    listBucketOptionsToQueryString(r) {
        const n = {};
        return r && ("limit"in r && (n.limit = String(r.limit)),
        "offset"in r && (n.offset = String(r.offset)),
        r.search && (n.search = r.search),
        r.sortColumn && (n.sortColumn = r.sortColumn),
        r.sortOrder && (n.sortOrder = r.sortOrder)),
        Object.keys(n).length > 0 ? "?" + new URLSearchParams(n).toString() : ""
    }
}
  , qp = class {
    constructor(r, n={}, i) {
        this.shouldThrowOnError = !1,
        this.url = r.replace(/\/$/, ""),
        this.headers = se(se({}, Im), n),
        this.fetch = Ju(i)
    }
    throwOnError() {
        return this.shouldThrowOnError = !0,
        this
    }
    async createBucket(r) {
        var n = this;
        try {
            return {
                data: await Kt(n.fetch, `${n.url}/bucket`, {
                    name: r
                }, {
                    headers: n.headers
                }),
                error: null
            }
        } catch (i) {
            if (n.shouldThrowOnError)
                throw i;
            if (Be(i))
                return {
                    data: null,
                    error: i
                };
            throw i
        }
    }
    async listBuckets(r) {
        var n = this;
        try {
            const i = new URLSearchParams;
            r?.limit !== void 0 && i.set("limit", r.limit.toString()),
            r?.offset !== void 0 && i.set("offset", r.offset.toString()),
            r?.sortColumn && i.set("sortColumn", r.sortColumn),
            r?.sortOrder && i.set("sortOrder", r.sortOrder),
            r?.search && i.set("search", r.search);
            const l = i.toString()
              , c = l ? `${n.url}/bucket?${l}` : `${n.url}/bucket`;
            return {
                data: await hr(n.fetch, c, {
                    headers: n.headers
                }),
                error: null
            }
        } catch (i) {
            if (n.shouldThrowOnError)
                throw i;
            if (Be(i))
                return {
                    data: null,
                    error: i
                };
            throw i
        }
    }
    async deleteBucket(r) {
        var n = this;
        try {
            return {
                data: await Qu(n.fetch, `${n.url}/bucket/${r}`, {}, {
                    headers: n.headers
                }),
                error: null
            }
        } catch (i) {
            if (n.shouldThrowOnError)
                throw i;
            if (Be(i))
                return {
                    data: null,
                    error: i
                };
            throw i
        }
    }
    from(r) {
        var n = this;
        if (!Tp(r))
            throw new Ji("Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters.");
        const i = new _p({
            baseUrl: this.url,
            catalogName: r,
            auth: {
                type: "custom",
                getHeaders: async () => n.headers
            },
            fetch: this.fetch
        })
          , l = this.shouldThrowOnError;
        return new Proxy(i,{
            get(c, d) {
                const f = c[d];
                return typeof f != "function" ? f : async (...y) => {
                    try {
                        return {
                            data: await f.apply(c, y),
                            error: null
                        }
                    } catch (g) {
                        if (l)
                            throw g;
                        return {
                            data: null,
                            error: g
                        }
                    }
                }
            }
        })
    }
}
;
const Iu = {
    "X-Client-Info": `storage-js/${Qm}`,
    "Content-Type": "application/json"
};
var Zm = class extends Error {
    constructor(r) {
        super(r),
        this.__isStorageVectorsError = !0,
        this.name = "StorageVectorsError"
    }
}
;
function Ot(r) {
    return typeof r == "object" && r !== null && "__isStorageVectorsError"in r
}
var Su = class extends Zm {
    constructor(r, n, i) {
        super(r),
        this.name = "StorageVectorsApiError",
        this.status = n,
        this.statusCode = i
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            status: this.status,
            statusCode: this.statusCode
        }
    }
}
  , Bp = class extends Zm {
    constructor(r, n) {
        super(r),
        this.name = "StorageVectorsUnknownError",
        this.originalError = n
    }
}
;
const Zu = r => r ? (...n) => r(...n) : (...n) => fetch(...n)
  , Lp = r => {
    if (typeof r != "object" || r === null)
        return !1;
    const n = Object.getPrototypeOf(r);
    return (n === null || n === Object.prototype || Object.getPrototypeOf(n) === null) && !(Symbol.toStringTag in r) && !(Symbol.iterator in r)
}
  , bm = r => r.msg || r.message || r.error_description || r.error || JSON.stringify(r)
  , Hp = async (r, n, i) => {
    if (r && typeof r == "object" && "status"in r && "ok"in r && typeof r.status == "number" && !i?.noResolveJson) {
        const l = r.status || 500
          , c = r;
        if (typeof c.json == "function")
            c.json().then(d => {
                const f = d?.statusCode || d?.code || l + "";
                n(new Su(bm(d),l,f))
            }
            ).catch( () => {
                const d = l + "";
                n(new Su(c.statusText || `HTTP ${l} error`,l,d))
            }
            );
        else {
            const d = l + "";
            n(new Su(c.statusText || `HTTP ${l} error`,l,d))
        }
    } else
        n(new Bp(bm(r),r))
}
  , $p = (r, n, i, l) => {
    const c = {
        method: r,
        headers: n?.headers || {}
    };
    return l ? (Lp(l) ? (c.headers = se({
        "Content-Type": "application/json"
    }, n?.headers),
    c.body = JSON.stringify(l)) : c.body = l,
    se(se({}, c), i)) : c
}
;
async function Gp(r, n, i, l, c, d) {
    return new Promise( (f, y) => {
        r(i, $p(n, l, c, d)).then(g => {
            if (!g.ok)
                throw g;
            if (l?.noResolveJson)
                return g;
            const p = g.headers.get("content-type");
            return !p || !p.includes("application/json") ? {} : g.json()
        }
        ).then(g => f(g)).catch(g => Hp(g, y, l))
    }
    )
}
async function Rt(r, n, i, l, c) {
    return Gp(r, "POST", n, l, c, i)
}
var Vp = class {
    constructor(r, n={}, i) {
        this.shouldThrowOnError = !1,
        this.url = r.replace(/\/$/, ""),
        this.headers = se(se({}, Iu), n),
        this.fetch = Zu(i)
    }
    throwOnError() {
        return this.shouldThrowOnError = !0,
        this
    }
    async createIndex(r) {
        var n = this;
        try {
            return {
                data: await Rt(n.fetch, `${n.url}/CreateIndex`, r, {
                    headers: n.headers
                }) || {},
                error: null
            }
        } catch (i) {
            if (n.shouldThrowOnError)
                throw i;
            if (Ot(i))
                return {
                    data: null,
                    error: i
                };
            throw i
        }
    }
    async getIndex(r, n) {
        var i = this;
        try {
            return {
                data: await Rt(i.fetch, `${i.url}/GetIndex`, {
                    vectorBucketName: r,
                    indexName: n
                }, {
                    headers: i.headers
                }),
                error: null
            }
        } catch (l) {
            if (i.shouldThrowOnError)
                throw l;
            if (Ot(l))
                return {
                    data: null,
                    error: l
                };
            throw l
        }
    }
    async listIndexes(r) {
        var n = this;
        try {
            return {
                data: await Rt(n.fetch, `${n.url}/ListIndexes`, r, {
                    headers: n.headers
                }),
                error: null
            }
        } catch (i) {
            if (n.shouldThrowOnError)
                throw i;
            if (Ot(i))
                return {
                    data: null,
                    error: i
                };
            throw i
        }
    }
    async deleteIndex(r, n) {
        var i = this;
        try {
            return {
                data: await Rt(i.fetch, `${i.url}/DeleteIndex`, {
                    vectorBucketName: r,
                    indexName: n
                }, {
                    headers: i.headers
                }) || {},
                error: null
            }
        } catch (l) {
            if (i.shouldThrowOnError)
                throw l;
            if (Ot(l))
                return {
                    data: null,
                    error: l
                };
            throw l
        }
    }
}
  , Yp = class {
    constructor(r, n={}, i) {
        this.shouldThrowOnError = !1,
        this.url = r.replace(/\/$/, ""),
        this.headers = se(se({}, Iu), n),
        this.fetch = Zu(i)
    }
    throwOnError() {
        return this.shouldThrowOnError = !0,
        this
    }
    async putVectors(r) {
        var n = this;
        try {
            if (r.vectors.length < 1 || r.vectors.length > 500)
                throw new Error("Vector batch size must be between 1 and 500 items");
            return {
                data: await Rt(n.fetch, `${n.url}/PutVectors`, r, {
                    headers: n.headers
                }) || {},
                error: null
            }
        } catch (i) {
            if (n.shouldThrowOnError)
                throw i;
            if (Ot(i))
                return {
                    data: null,
                    error: i
                };
            throw i
        }
    }
    async getVectors(r) {
        var n = this;
        try {
            return {
                data: await Rt(n.fetch, `${n.url}/GetVectors`, r, {
                    headers: n.headers
                }),
                error: null
            }
        } catch (i) {
            if (n.shouldThrowOnError)
                throw i;
            if (Ot(i))
                return {
                    data: null,
                    error: i
                };
            throw i
        }
    }
    async listVectors(r) {
        var n = this;
        try {
            if (r.segmentCount !== void 0) {
                if (r.segmentCount < 1 || r.segmentCount > 16)
                    throw new Error("segmentCount must be between 1 and 16");
                if (r.segmentIndex !== void 0 && (r.segmentIndex < 0 || r.segmentIndex >= r.segmentCount))
                    throw new Error(`segmentIndex must be between 0 and ${r.segmentCount - 1}`)
            }
            return {
                data: await Rt(n.fetch, `${n.url}/ListVectors`, r, {
                    headers: n.headers
                }),
                error: null
            }
        } catch (i) {
            if (n.shouldThrowOnError)
                throw i;
            if (Ot(i))
                return {
                    data: null,
                    error: i
                };
            throw i
        }
    }
    async queryVectors(r) {
        var n = this;
        try {
            return {
                data: await Rt(n.fetch, `${n.url}/QueryVectors`, r, {
                    headers: n.headers
                }),
                error: null
            }
        } catch (i) {
            if (n.shouldThrowOnError)
                throw i;
            if (Ot(i))
                return {
                    data: null,
                    error: i
                };
            throw i
        }
    }
    async deleteVectors(r) {
        var n = this;
        try {
            if (r.keys.length < 1 || r.keys.length > 500)
                throw new Error("Keys batch size must be between 1 and 500 items");
            return {
                data: await Rt(n.fetch, `${n.url}/DeleteVectors`, r, {
                    headers: n.headers
                }) || {},
                error: null
            }
        } catch (i) {
            if (n.shouldThrowOnError)
                throw i;
            if (Ot(i))
                return {
                    data: null,
                    error: i
                };
            throw i
        }
    }
}
  , Kp = class {
    constructor(r, n={}, i) {
        this.shouldThrowOnError = !1,
        this.url = r.replace(/\/$/, ""),
        this.headers = se(se({}, Iu), n),
        this.fetch = Zu(i)
    }
    throwOnError() {
        return this.shouldThrowOnError = !0,
        this
    }
    async createBucket(r) {
        var n = this;
        try {
            return {
                data: await Rt(n.fetch, `${n.url}/CreateVectorBucket`, {
                    vectorBucketName: r
                }, {
                    headers: n.headers
                }) || {},
                error: null
            }
        } catch (i) {
            if (n.shouldThrowOnError)
                throw i;
            if (Ot(i))
                return {
                    data: null,
                    error: i
                };
            throw i
        }
    }
    async getBucket(r) {
        var n = this;
        try {
            return {
                data: await Rt(n.fetch, `${n.url}/GetVectorBucket`, {
                    vectorBucketName: r
                }, {
                    headers: n.headers
                }),
                error: null
            }
        } catch (i) {
            if (n.shouldThrowOnError)
                throw i;
            if (Ot(i))
                return {
                    data: null,
                    error: i
                };
            throw i
        }
    }
    async listBuckets(r={}) {
        var n = this;
        try {
            return {
                data: await Rt(n.fetch, `${n.url}/ListVectorBuckets`, r, {
                    headers: n.headers
                }),
                error: null
            }
        } catch (i) {
            if (n.shouldThrowOnError)
                throw i;
            if (Ot(i))
                return {
                    data: null,
                    error: i
                };
            throw i
        }
    }
    async deleteBucket(r) {
        var n = this;
        try {
            return {
                data: await Rt(n.fetch, `${n.url}/DeleteVectorBucket`, {
                    vectorBucketName: r
                }, {
                    headers: n.headers
                }) || {},
                error: null
            }
        } catch (i) {
            if (n.shouldThrowOnError)
                throw i;
            if (Ot(i))
                return {
                    data: null,
                    error: i
                };
            throw i
        }
    }
}
  , Xp = class extends Kp {
    constructor(r, n={}) {
        super(r, n.headers || {}, n.fetch)
    }
    from(r) {
        return new Jp(this.url,this.headers,r,this.fetch)
    }
    async createBucket(r) {
        var n = () => super.createBucket
          , i = this;
        return n().call(i, r)
    }
    async getBucket(r) {
        var n = () => super.getBucket
          , i = this;
        return n().call(i, r)
    }
    async listBuckets(r={}) {
        var n = () => super.listBuckets
          , i = this;
        return n().call(i, r)
    }
    async deleteBucket(r) {
        var n = () => super.deleteBucket
          , i = this;
        return n().call(i, r)
    }
}
  , Jp = class extends Vp {
    constructor(r, n, i, l) {
        super(r, n, l),
        this.vectorBucketName = i
    }
    async createIndex(r) {
        var n = () => super.createIndex
          , i = this;
        return n().call(i, se(se({}, r), {}, {
            vectorBucketName: i.vectorBucketName
        }))
    }
    async listIndexes(r={}) {
        var n = () => super.listIndexes
          , i = this;
        return n().call(i, se(se({}, r), {}, {
            vectorBucketName: i.vectorBucketName
        }))
    }
    async getIndex(r) {
        var n = () => super.getIndex
          , i = this;
        return n().call(i, i.vectorBucketName, r)
    }
    async deleteIndex(r) {
        var n = () => super.deleteIndex
          , i = this;
        return n().call(i, i.vectorBucketName, r)
    }
    index(r) {
        return new Qp(this.url,this.headers,this.vectorBucketName,r,this.fetch)
    }
}
  , Qp = class extends Yp {
    constructor(r, n, i, l, c) {
        super(r, n, c),
        this.vectorBucketName = i,
        this.indexName = l
    }
    async putVectors(r) {
        var n = () => super.putVectors
          , i = this;
        return n().call(i, se(se({}, r), {}, {
            vectorBucketName: i.vectorBucketName,
            indexName: i.indexName
        }))
    }
    async getVectors(r) {
        var n = () => super.getVectors
          , i = this;
        return n().call(i, se(se({}, r), {}, {
            vectorBucketName: i.vectorBucketName,
            indexName: i.indexName
        }))
    }
    async listVectors(r={}) {
        var n = () => super.listVectors
          , i = this;
        return n().call(i, se(se({}, r), {}, {
            vectorBucketName: i.vectorBucketName,
            indexName: i.indexName
        }))
    }
    async queryVectors(r) {
        var n = () => super.queryVectors
          , i = this;
        return n().call(i, se(se({}, r), {}, {
            vectorBucketName: i.vectorBucketName,
            indexName: i.indexName
        }))
    }
    async deleteVectors(r) {
        var n = () => super.deleteVectors
          , i = this;
        return n().call(i, se(se({}, r), {}, {
            vectorBucketName: i.vectorBucketName,
            indexName: i.indexName
        }))
    }
}
  , Ip = class extends Mp {
    constructor(r, n={}, i, l) {
        super(r, n, i, l)
    }
    from(r) {
        return new zp(this.url,this.headers,r,this.fetch)
    }
    get vectors() {
        return new Xp(this.url + "/vector",{
            headers: this.headers,
            fetch: this.fetch
        })
    }
    get analytics() {
        return new qp(this.url + "/iceberg",this.headers,this.fetch)
    }
}
;
const Pm = "2.89.0"
  , ls = 30 * 1e3
  , qu = 3
  , Eu = qu * ls
  , Zp = "http://localhost:9999"
  , Pp = "supabase.auth.token"
  , Wp = {
    "X-Client-Info": `gotrue-js/${Pm}`
}
  , Bu = "X-Supabase-Api-Version"
  , Wm = {
    "2024-01-01": {
        timestamp: Date.parse("2024-01-01T00:00:00.0Z"),
        name: "2024-01-01"
    }
}
  , Fp = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i
  , eb = 600 * 1e3;
class fr extends Error {
    constructor(n, i, l) {
        super(n),
        this.__isAuthError = !0,
        this.name = "AuthError",
        this.status = i,
        this.code = l
    }
}
function F(r) {
    return typeof r == "object" && r !== null && "__isAuthError"in r
}
class tb extends fr {
    constructor(n, i, l) {
        super(n, i, l),
        this.name = "AuthApiError",
        this.status = i,
        this.code = l
    }
}
function ab(r) {
    return F(r) && r.name === "AuthApiError"
}
class mn extends fr {
    constructor(n, i) {
        super(n),
        this.name = "AuthUnknownError",
        this.originalError = i
    }
}
class ya extends fr {
    constructor(n, i, l, c) {
        super(n, l, c),
        this.name = i,
        this.status = l
    }
}
class At extends ya {
    constructor() {
        super("Auth session missing!", "AuthSessionMissingError", 400, void 0)
    }
}
function nb(r) {
    return F(r) && r.name === "AuthSessionMissingError"
}
class ts extends ya {
    constructor() {
        super("Auth session or user missing", "AuthInvalidTokenResponseError", 500, void 0)
    }
}
class Li extends ya {
    constructor(n) {
        super(n, "AuthInvalidCredentialsError", 400, void 0)
    }
}
class Hi extends ya {
    constructor(n, i=null) {
        super(n, "AuthImplicitGrantRedirectError", 500, void 0),
        this.details = null,
        this.details = i
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            status: this.status,
            details: this.details
        }
    }
}
function sb(r) {
    return F(r) && r.name === "AuthImplicitGrantRedirectError"
}
class vm extends ya {
    constructor(n, i=null) {
        super(n, "AuthPKCEGrantCodeExchangeError", 500, void 0),
        this.details = null,
        this.details = i
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            status: this.status,
            details: this.details
        }
    }
}
class rb extends ya {
    constructor() {
        super("PKCE code verifier not found in storage. This can happen if the auth flow was initiated in a different browser or device, or if the storage was cleared. For SSR frameworks (Next.js, SvelteKit, etc.), use @supabase/ssr on both the server and client to store the code verifier in cookies.", "AuthPKCECodeVerifierMissingError", 400, "pkce_code_verifier_not_found")
    }
}
class Lu extends ya {
    constructor(n, i) {
        super(n, "AuthRetryableFetchError", i, void 0)
    }
}
function Tu(r) {
    return F(r) && r.name === "AuthRetryableFetchError"
}
class xm extends ya {
    constructor(n, i, l) {
        super(n, "AuthWeakPasswordError", i, "weak_password"),
        this.reasons = l
    }
}
class Hu extends ya {
    constructor(n) {
        super(n, "AuthInvalidJwtError", 400, "invalid_jwt")
    }
}
const Gi = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split("")
  , _m = ` 	
\r=`.split("")
  , ib = ( () => {
    const r = new Array(128);
    for (let n = 0; n < r.length; n += 1)
        r[n] = -1;
    for (let n = 0; n < _m.length; n += 1)
        r[_m[n].charCodeAt(0)] = -2;
    for (let n = 0; n < Gi.length; n += 1)
        r[Gi[n].charCodeAt(0)] = n;
    return r
}
)();
function wm(r, n, i) {
    if (r !== null)
        for (n.queue = n.queue << 8 | r,
        n.queuedBits += 8; n.queuedBits >= 6; ) {
            const l = n.queue >> n.queuedBits - 6 & 63;
            i(Gi[l]),
            n.queuedBits -= 6
        }
    else if (n.queuedBits > 0)
        for (n.queue = n.queue << 6 - n.queuedBits,
        n.queuedBits = 6; n.queuedBits >= 6; ) {
            const l = n.queue >> n.queuedBits - 6 & 63;
            i(Gi[l]),
            n.queuedBits -= 6
        }
}
function Fm(r, n, i) {
    const l = ib[r];
    if (l > -1)
        for (n.queue = n.queue << 6 | l,
        n.queuedBits += 6; n.queuedBits >= 8; )
            i(n.queue >> n.queuedBits - 8 & 255),
            n.queuedBits -= 8;
    else {
        if (l === -2)
            return;
        throw new Error(`Invalid Base64-URL character "${String.fromCharCode(r)}"`)
    }
}
function Sm(r) {
    const n = []
      , i = f => {
        n.push(String.fromCodePoint(f))
    }
      , l = {
        utf8seq: 0,
        codepoint: 0
    }
      , c = {
        queue: 0,
        queuedBits: 0
    }
      , d = f => {
        ub(f, l, i)
    }
    ;
    for (let f = 0; f < r.length; f += 1)
        Fm(r.charCodeAt(f), c, d);
    return n.join("")
}
function lb(r, n) {
    if (r <= 127) {
        n(r);
        return
    } else if (r <= 2047) {
        n(192 | r >> 6),
        n(128 | r & 63);
        return
    } else if (r <= 65535) {
        n(224 | r >> 12),
        n(128 | r >> 6 & 63),
        n(128 | r & 63);
        return
    } else if (r <= 1114111) {
        n(240 | r >> 18),
        n(128 | r >> 12 & 63),
        n(128 | r >> 6 & 63),
        n(128 | r & 63);
        return
    }
    throw new Error(`Unrecognized Unicode codepoint: ${r.toString(16)}`)
}
function ob(r, n) {
    for (let i = 0; i < r.length; i += 1) {
        let l = r.charCodeAt(i);
        if (l > 55295 && l <= 56319) {
            const c = (l - 55296) * 1024 & 65535;
            l = (r.charCodeAt(i + 1) - 56320 & 65535 | c) + 65536,
            i += 1
        }
        lb(l, n)
    }
}
function ub(r, n, i) {
    if (n.utf8seq === 0) {
        if (r <= 127) {
            i(r);
            return
        }
        for (let l = 1; l < 6; l += 1)
            if ((r >> 7 - l & 1) === 0) {
                n.utf8seq = l;
                break
            }
        if (n.utf8seq === 2)
            n.codepoint = r & 31;
        else if (n.utf8seq === 3)
            n.codepoint = r & 15;
        else if (n.utf8seq === 4)
            n.codepoint = r & 7;
        else
            throw new Error("Invalid UTF-8 sequence");
        n.utf8seq -= 1
    } else if (n.utf8seq > 0) {
        if (r <= 127)
            throw new Error("Invalid UTF-8 sequence");
        n.codepoint = n.codepoint << 6 | r & 63,
        n.utf8seq -= 1,
        n.utf8seq === 0 && i(n.codepoint)
    }
}
function cs(r) {
    const n = []
      , i = {
        queue: 0,
        queuedBits: 0
    }
      , l = c => {
        n.push(c)
    }
    ;
    for (let c = 0; c < r.length; c += 1)
        Fm(r.charCodeAt(c), i, l);
    return new Uint8Array(n)
}
function cb(r) {
    const n = [];
    return ob(r, i => n.push(i)),
    new Uint8Array(n)
}
function gn(r) {
    const n = []
      , i = {
        queue: 0,
        queuedBits: 0
    }
      , l = c => {
        n.push(c)
    }
    ;
    return r.forEach(c => wm(c, i, l)),
    wm(null, i, l),
    n.join("")
}
function db(r) {
    return Math.round(Date.now() / 1e3) + r
}
function hb() {
    return Symbol("auth-callback")
}
const lt = () => typeof window < "u" && typeof document < "u"
  , cn = {
    tested: !1,
    writable: !1
}
  , eg = () => {
    if (!lt())
        return !1;
    try {
        if (typeof globalThis.localStorage != "object")
            return !1
    } catch {
        return !1
    }
    if (cn.tested)
        return cn.writable;
    const r = `lswt-${Math.random()}${Math.random()}`;
    try {
        globalThis.localStorage.setItem(r, r),
        globalThis.localStorage.removeItem(r),
        cn.tested = !0,
        cn.writable = !0
    } catch {
        cn.tested = !0,
        cn.writable = !1
    }
    return cn.writable
}
;
function fb(r) {
    const n = {}
      , i = new URL(r);
    if (i.hash && i.hash[0] === "#")
        try {
            new URLSearchParams(i.hash.substring(1)).forEach( (c, d) => {
                n[d] = c
            }
            )
        } catch {}
    return i.searchParams.forEach( (l, c) => {
        n[c] = l
    }
    ),
    n
}
const tg = r => r ? (...n) => r(...n) : (...n) => fetch(...n)
  , mb = r => typeof r == "object" && r !== null && "status"in r && "ok"in r && "json"in r && typeof r.json == "function"
  , os = async (r, n, i) => {
    await r.setItem(n, JSON.stringify(i))
}
  , dn = async (r, n) => {
    const i = await r.getItem(n);
    if (!i)
        return null;
    try {
        return JSON.parse(i)
    } catch {
        return i
    }
}
  , it = async (r, n) => {
    await r.removeItem(n)
}
;
class Qi {
    constructor() {
        this.promise = new Qi.promiseConstructor( (n, i) => {
            this.resolve = n,
            this.reject = i
        }
        )
    }
}
Qi.promiseConstructor = Promise;
function ju(r) {
    const n = r.split(".");
    if (n.length !== 3)
        throw new Hu("Invalid JWT structure");
    for (let l = 0; l < n.length; l++)
        if (!Fp.test(n[l]))
            throw new Hu("JWT not in base64url format");
    return {
        header: JSON.parse(Sm(n[0])),
        payload: JSON.parse(Sm(n[1])),
        signature: cs(n[2]),
        raw: {
            header: n[0],
            payload: n[1]
        }
    }
}
async function gb(r) {
    return await new Promise(n => {
        setTimeout( () => n(null), r)
    }
    )
}
function yb(r, n) {
    return new Promise( (l, c) => {
        (async () => {
            for (let d = 0; d < 1 / 0; d++)
                try {
                    const f = await r(d);
                    if (!n(d, null, f)) {
                        l(f);
                        return
                    }
                } catch (f) {
                    if (!n(d, f)) {
                        c(f);
                        return
                    }
                }
        }
        )()
    }
    )
}
function pb(r) {
    return ("0" + r.toString(16)).substr(-2)
}
function bb() {
    const n = new Uint32Array(56);
    if (typeof crypto > "u") {
        const i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~"
          , l = i.length;
        let c = "";
        for (let d = 0; d < 56; d++)
            c += i.charAt(Math.floor(Math.random() * l));
        return c
    }
    return crypto.getRandomValues(n),
    Array.from(n, pb).join("")
}
async function vb(r) {
    const i = new TextEncoder().encode(r)
      , l = await crypto.subtle.digest("SHA-256", i)
      , c = new Uint8Array(l);
    return Array.from(c).map(d => String.fromCharCode(d)).join("")
}
async function xb(r) {
    if (!(typeof crypto < "u" && typeof crypto.subtle < "u" && typeof TextEncoder < "u"))
        return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."),
        r;
    const i = await vb(r);
    return btoa(i).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
}
async function as(r, n, i=!1) {
    const l = bb();
    let c = l;
    i && (c += "/PASSWORD_RECOVERY"),
    await os(r, `${n}-code-verifier`, c);
    const d = await xb(l);
    return [d, l === d ? "plain" : "s256"]
}
const _b = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
function wb(r) {
    const n = r.headers.get(Bu);
    if (!n || !n.match(_b))
        return null;
    try {
        return new Date(`${n}T00:00:00.0Z`)
    } catch {
        return null
    }
}
function Sb(r) {
    if (!r)
        throw new Error("Missing exp claim");
    const n = Math.floor(Date.now() / 1e3);
    if (r <= n)
        throw new Error("JWT has expired")
}
function Eb(r) {
    switch (r) {
    case "RS256":
        return {
            name: "RSASSA-PKCS1-v1_5",
            hash: {
                name: "SHA-256"
            }
        };
    case "ES256":
        return {
            name: "ECDSA",
            namedCurve: "P-256",
            hash: {
                name: "SHA-256"
            }
        };
    default:
        throw new Error("Invalid alg claim")
    }
}
const Tb = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
function ns(r) {
    if (!Tb.test(r))
        throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not")
}
function Nu() {
    const r = {};
    return new Proxy(r,{
        get: (n, i) => {
            if (i === "__isUserNotAvailableProxy")
                return !0;
            if (typeof i == "symbol") {
                const l = i.toString();
                if (l === "Symbol(Symbol.toPrimitive)" || l === "Symbol(Symbol.toStringTag)" || l === "Symbol(util.inspect.custom)")
                    return
            }
            throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${i}" property of the session object is not supported. Please use getUser() instead.`)
        }
        ,
        set: (n, i) => {
            throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${i}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)
        }
        ,
        deleteProperty: (n, i) => {
            throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${i}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)
        }
    })
}
function jb(r, n) {
    return new Proxy(r,{
        get: (i, l, c) => {
            if (l === "__isInsecureUserWarningProxy")
                return !0;
            if (typeof l == "symbol") {
                const d = l.toString();
                if (d === "Symbol(Symbol.toPrimitive)" || d === "Symbol(Symbol.toStringTag)" || d === "Symbol(util.inspect.custom)" || d === "Symbol(nodejs.util.inspect.custom)")
                    return Reflect.get(i, l, c)
            }
            return !n.value && typeof l == "string" && (console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."),
            n.value = !0),
            Reflect.get(i, l, c)
        }
    })
}
function Em(r) {
    return JSON.parse(JSON.stringify(r))
}
const hn = r => r.msg || r.message || r.error_description || r.error || JSON.stringify(r)
  , Nb = [502, 503, 504];
async function Tm(r) {
    var n;
    if (!mb(r))
        throw new Lu(hn(r),0);
    if (Nb.includes(r.status))
        throw new Lu(hn(r),r.status);
    let i;
    try {
        i = await r.json()
    } catch (d) {
        throw new mn(hn(d),d)
    }
    let l;
    const c = wb(r);
    if (c && c.getTime() >= Wm["2024-01-01"].timestamp && typeof i == "object" && i && typeof i.code == "string" ? l = i.code : typeof i == "object" && i && typeof i.error_code == "string" && (l = i.error_code),
    l) {
        if (l === "weak_password")
            throw new xm(hn(i),r.status,((n = i.weak_password) === null || n === void 0 ? void 0 : n.reasons) || []);
        if (l === "session_not_found")
            throw new At
    } else if (typeof i == "object" && i && typeof i.weak_password == "object" && i.weak_password && Array.isArray(i.weak_password.reasons) && i.weak_password.reasons.length && i.weak_password.reasons.reduce( (d, f) => d && typeof f == "string", !0))
        throw new xm(hn(i),r.status,i.weak_password.reasons);
    throw new tb(hn(i),r.status || 500,l)
}
const Ab = (r, n, i, l) => {
    const c = {
        method: r,
        headers: n?.headers || {}
    };
    return r === "GET" ? c : (c.headers = Object.assign({
        "Content-Type": "application/json;charset=UTF-8"
    }, n?.headers),
    c.body = JSON.stringify(l),
    Object.assign(Object.assign({}, c), i))
}
;
async function ne(r, n, i, l) {
    var c;
    const d = Object.assign({}, l?.headers);
    d[Bu] || (d[Bu] = Wm["2024-01-01"].name),
    l?.jwt && (d.Authorization = `Bearer ${l.jwt}`);
    const f = (c = l?.query) !== null && c !== void 0 ? c : {};
    l?.redirectTo && (f.redirect_to = l.redirectTo);
    const y = Object.keys(f).length ? "?" + new URLSearchParams(f).toString() : ""
      , g = await Ob(r, n, i + y, {
        headers: d,
        noResolveJson: l?.noResolveJson
    }, {}, l?.body);
    return l?.xform ? l?.xform(g) : {
        data: Object.assign({}, g),
        error: null
    }
}
async function Ob(r, n, i, l, c, d) {
    const f = Ab(n, l, c, d);
    let y;
    try {
        y = await r(i, Object.assign({}, f))
    } catch (g) {
        throw console.error(g),
        new Lu(hn(g),0)
    }
    if (y.ok || await Tm(y),
    l?.noResolveJson)
        return y;
    try {
        return await y.json()
    } catch (g) {
        await Tm(g)
    }
}
function Yt(r) {
    var n;
    let i = null;
    kb(r) && (i = Object.assign({}, r),
    r.expires_at || (i.expires_at = db(r.expires_in)));
    const l = (n = r.user) !== null && n !== void 0 ? n : r;
    return {
        data: {
            session: i,
            user: l
        },
        error: null
    }
}
function jm(r) {
    const n = Yt(r);
    return !n.error && r.weak_password && typeof r.weak_password == "object" && Array.isArray(r.weak_password.reasons) && r.weak_password.reasons.length && r.weak_password.message && typeof r.weak_password.message == "string" && r.weak_password.reasons.reduce( (i, l) => i && typeof l == "string", !0) && (n.data.weak_password = r.weak_password),
    n
}
function Va(r) {
    var n;
    return {
        data: {
            user: (n = r.user) !== null && n !== void 0 ? n : r
        },
        error: null
    }
}
function Rb(r) {
    return {
        data: r,
        error: null
    }
}
function Cb(r) {
    const {action_link: n, email_otp: i, hashed_token: l, redirect_to: c, verification_type: d} = r
      , f = Xi(r, ["action_link", "email_otp", "hashed_token", "redirect_to", "verification_type"])
      , y = {
        action_link: n,
        email_otp: i,
        hashed_token: l,
        redirect_to: c,
        verification_type: d
    }
      , g = Object.assign({}, f);
    return {
        data: {
            properties: y,
            user: g
        },
        error: null
    }
}
function Nm(r) {
    return r
}
function kb(r) {
    return r.access_token && r.refresh_token && r.expires_in
}
const Au = ["global", "local", "others"];
class Db {
    constructor({url: n="", headers: i={}, fetch: l}) {
        this.url = n,
        this.headers = i,
        this.fetch = tg(l),
        this.mfa = {
            listFactors: this._listFactors.bind(this),
            deleteFactor: this._deleteFactor.bind(this)
        },
        this.oauth = {
            listClients: this._listOAuthClients.bind(this),
            createClient: this._createOAuthClient.bind(this),
            getClient: this._getOAuthClient.bind(this),
            updateClient: this._updateOAuthClient.bind(this),
            deleteClient: this._deleteOAuthClient.bind(this),
            regenerateClientSecret: this._regenerateOAuthClientSecret.bind(this)
        }
    }
    async signOut(n, i=Au[0]) {
        if (Au.indexOf(i) < 0)
            throw new Error(`@supabase/auth-js: Parameter scope must be one of ${Au.join(", ")}`);
        try {
            return await ne(this.fetch, "POST", `${this.url}/logout?scope=${i}`, {
                headers: this.headers,
                jwt: n,
                noResolveJson: !0
            }),
            {
                data: null,
                error: null
            }
        } catch (l) {
            if (F(l))
                return {
                    data: null,
                    error: l
                };
            throw l
        }
    }
    async inviteUserByEmail(n, i={}) {
        try {
            return await ne(this.fetch, "POST", `${this.url}/invite`, {
                body: {
                    email: n,
                    data: i.data
                },
                headers: this.headers,
                redirectTo: i.redirectTo,
                xform: Va
            })
        } catch (l) {
            if (F(l))
                return {
                    data: {
                        user: null
                    },
                    error: l
                };
            throw l
        }
    }
    async generateLink(n) {
        try {
            const {options: i} = n
              , l = Xi(n, ["options"])
              , c = Object.assign(Object.assign({}, l), i);
            return "newEmail"in l && (c.new_email = l?.newEmail,
            delete c.newEmail),
            await ne(this.fetch, "POST", `${this.url}/admin/generate_link`, {
                body: c,
                headers: this.headers,
                xform: Cb,
                redirectTo: i?.redirectTo
            })
        } catch (i) {
            if (F(i))
                return {
                    data: {
                        properties: null,
                        user: null
                    },
                    error: i
                };
            throw i
        }
    }
    async createUser(n) {
        try {
            return await ne(this.fetch, "POST", `${this.url}/admin/users`, {
                body: n,
                headers: this.headers,
                xform: Va
            })
        } catch (i) {
            if (F(i))
                return {
                    data: {
                        user: null
                    },
                    error: i
                };
            throw i
        }
    }
    async listUsers(n) {
        var i, l, c, d, f, y, g;
        try {
            const p = {
                nextPage: null,
                lastPage: 0,
                total: 0
            }
              , v = await ne(this.fetch, "GET", `${this.url}/admin/users`, {
                headers: this.headers,
                noResolveJson: !0,
                query: {
                    page: (l = (i = n?.page) === null || i === void 0 ? void 0 : i.toString()) !== null && l !== void 0 ? l : "",
                    per_page: (d = (c = n?.perPage) === null || c === void 0 ? void 0 : c.toString()) !== null && d !== void 0 ? d : ""
                },
                xform: Nm
            });
            if (v.error)
                throw v.error;
            const j = await v.json()
              , E = (f = v.headers.get("x-total-count")) !== null && f !== void 0 ? f : 0
              , _ = (g = (y = v.headers.get("link")) === null || y === void 0 ? void 0 : y.split(",")) !== null && g !== void 0 ? g : [];
            return _.length > 0 && (_.forEach(T => {
                const C = parseInt(T.split(";")[0].split("=")[1].substring(0, 1))
                  , L = JSON.parse(T.split(";")[1].split("=")[1]);
                p[`${L}Page`] = C
            }
            ),
            p.total = parseInt(E)),
            {
                data: Object.assign(Object.assign({}, j), p),
                error: null
            }
        } catch (p) {
            if (F(p))
                return {
                    data: {
                        users: []
                    },
                    error: p
                };
            throw p
        }
    }
    async getUserById(n) {
        ns(n);
        try {
            return await ne(this.fetch, "GET", `${this.url}/admin/users/${n}`, {
                headers: this.headers,
                xform: Va
            })
        } catch (i) {
            if (F(i))
                return {
                    data: {
                        user: null
                    },
                    error: i
                };
            throw i
        }
    }
    async updateUserById(n, i) {
        ns(n);
        try {
            return await ne(this.fetch, "PUT", `${this.url}/admin/users/${n}`, {
                body: i,
                headers: this.headers,
                xform: Va
            })
        } catch (l) {
            if (F(l))
                return {
                    data: {
                        user: null
                    },
                    error: l
                };
            throw l
        }
    }
    async deleteUser(n, i=!1) {
        ns(n);
        try {
            return await ne(this.fetch, "DELETE", `${this.url}/admin/users/${n}`, {
                headers: this.headers,
                body: {
                    should_soft_delete: i
                },
                xform: Va
            })
        } catch (l) {
            if (F(l))
                return {
                    data: {
                        user: null
                    },
                    error: l
                };
            throw l
        }
    }
    async _listFactors(n) {
        ns(n.userId);
        try {
            const {data: i, error: l} = await ne(this.fetch, "GET", `${this.url}/admin/users/${n.userId}/factors`, {
                headers: this.headers,
                xform: c => ({
                    data: {
                        factors: c
                    },
                    error: null
                })
            });
            return {
                data: i,
                error: l
            }
        } catch (i) {
            if (F(i))
                return {
                    data: null,
                    error: i
                };
            throw i
        }
    }
    async _deleteFactor(n) {
        ns(n.userId),
        ns(n.id);
        try {
            return {
                data: await ne(this.fetch, "DELETE", `${this.url}/admin/users/${n.userId}/factors/${n.id}`, {
                    headers: this.headers
                }),
                error: null
            }
        } catch (i) {
            if (F(i))
                return {
                    data: null,
                    error: i
                };
            throw i
        }
    }
    async _listOAuthClients(n) {
        var i, l, c, d, f, y, g;
        try {
            const p = {
                nextPage: null,
                lastPage: 0,
                total: 0
            }
              , v = await ne(this.fetch, "GET", `${this.url}/admin/oauth/clients`, {
                headers: this.headers,
                noResolveJson: !0,
                query: {
                    page: (l = (i = n?.page) === null || i === void 0 ? void 0 : i.toString()) !== null && l !== void 0 ? l : "",
                    per_page: (d = (c = n?.perPage) === null || c === void 0 ? void 0 : c.toString()) !== null && d !== void 0 ? d : ""
                },
                xform: Nm
            });
            if (v.error)
                throw v.error;
            const j = await v.json()
              , E = (f = v.headers.get("x-total-count")) !== null && f !== void 0 ? f : 0
              , _ = (g = (y = v.headers.get("link")) === null || y === void 0 ? void 0 : y.split(",")) !== null && g !== void 0 ? g : [];
            return _.length > 0 && (_.forEach(T => {
                const C = parseInt(T.split(";")[0].split("=")[1].substring(0, 1))
                  , L = JSON.parse(T.split(";")[1].split("=")[1]);
                p[`${L}Page`] = C
            }
            ),
            p.total = parseInt(E)),
            {
                data: Object.assign(Object.assign({}, j), p),
                error: null
            }
        } catch (p) {
            if (F(p))
                return {
                    data: {
                        clients: []
                    },
                    error: p
                };
            throw p
        }
    }
    async _createOAuthClient(n) {
        try {
            return await ne(this.fetch, "POST", `${this.url}/admin/oauth/clients`, {
                body: n,
                headers: this.headers,
                xform: i => ({
                    data: i,
                    error: null
                })
            })
        } catch (i) {
            if (F(i))
                return {
                    data: null,
                    error: i
                };
            throw i
        }
    }
    async _getOAuthClient(n) {
        try {
            return await ne(this.fetch, "GET", `${this.url}/admin/oauth/clients/${n}`, {
                headers: this.headers,
                xform: i => ({
                    data: i,
                    error: null
                })
            })
        } catch (i) {
            if (F(i))
                return {
                    data: null,
                    error: i
                };
            throw i
        }
    }
    async _updateOAuthClient(n, i) {
        try {
            return await ne(this.fetch, "PUT", `${this.url}/admin/oauth/clients/${n}`, {
                body: i,
                headers: this.headers,
                xform: l => ({
                    data: l,
                    error: null
                })
            })
        } catch (l) {
            if (F(l))
                return {
                    data: null,
                    error: l
                };
            throw l
        }
    }
    async _deleteOAuthClient(n) {
        try {
            return await ne(this.fetch, "DELETE", `${this.url}/admin/oauth/clients/${n}`, {
                headers: this.headers,
                noResolveJson: !0
            }),
            {
                data: null,
                error: null
            }
        } catch (i) {
            if (F(i))
                return {
                    data: null,
                    error: i
                };
            throw i
        }
    }
    async _regenerateOAuthClientSecret(n) {
        try {
            return await ne(this.fetch, "POST", `${this.url}/admin/oauth/clients/${n}/regenerate_secret`, {
                headers: this.headers,
                xform: i => ({
                    data: i,
                    error: null
                })
            })
        } catch (i) {
            if (F(i))
                return {
                    data: null,
                    error: i
                };
            throw i
        }
    }
}
function Am(r={}) {
    return {
        getItem: n => r[n] || null,
        setItem: (n, i) => {
            r[n] = i
        }
        ,
        removeItem: n => {
            delete r[n]
        }
    }
}
const ss = {
    debug: !!(globalThis && eg() && globalThis.localStorage && globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug") === "true")
};
class ag extends Error {
    constructor(n) {
        super(n),
        this.isAcquireTimeout = !0
    }
}
class Ub extends ag {
}
async function zb(r, n, i) {
    ss.debug && console.log("@supabase/gotrue-js: navigatorLock: acquire lock", r, n);
    const l = new globalThis.AbortController;
    return n > 0 && setTimeout( () => {
        l.abort(),
        ss.debug && console.log("@supabase/gotrue-js: navigatorLock acquire timed out", r)
    }
    , n),
    await Promise.resolve().then( () => globalThis.navigator.locks.request(r, n === 0 ? {
        mode: "exclusive",
        ifAvailable: !0
    } : {
        mode: "exclusive",
        signal: l.signal
    }, async c => {
        if (c) {
            ss.debug && console.log("@supabase/gotrue-js: navigatorLock: acquired", r, c.name);
            try {
                return await i()
            } finally {
                ss.debug && console.log("@supabase/gotrue-js: navigatorLock: released", r, c.name)
            }
        } else {
            if (n === 0)
                throw ss.debug && console.log("@supabase/gotrue-js: navigatorLock: not immediately available", r),
                new Ub(`Acquiring an exclusive Navigator LockManager lock "${r}" immediately failed`);
            if (ss.debug)
                try {
                    const d = await globalThis.navigator.locks.query();
                    console.log("@supabase/gotrue-js: Navigator LockManager state", JSON.stringify(d, null, "  "))
                } catch (d) {
                    console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state", d)
                }
            return console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"),
            await i()
        }
    }
    ))
}
function Mb() {
    if (typeof globalThis != "object")
        try {
            Object.defineProperty(Object.prototype, "__magic__", {
                get: function() {
                    return this
                },
                configurable: !0
            }),
            __magic__.globalThis = __magic__,
            delete Object.prototype.__magic__
        } catch {
            typeof self < "u" && (self.globalThis = self)
        }
}
function ng(r) {
    if (!/^0x[a-fA-F0-9]{40}$/.test(r))
        throw new Error(`@supabase/auth-js: Address "${r}" is invalid.`);
    return r.toLowerCase()
}
function qb(r) {
    return parseInt(r, 16)
}
function Bb(r) {
    const n = new TextEncoder().encode(r);
    return "0x" + Array.from(n, l => l.toString(16).padStart(2, "0")).join("")
}
function Lb(r) {
    var n;
    const {chainId: i, domain: l, expirationTime: c, issuedAt: d=new Date, nonce: f, notBefore: y, requestId: g, resources: p, scheme: v, uri: j, version: E} = r;
    {
        if (!Number.isInteger(i))
            throw new Error(`@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${i}`);
        if (!l)
            throw new Error('@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.');
        if (f && f.length < 8)
            throw new Error(`@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${f}`);
        if (!j)
            throw new Error('@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.');
        if (E !== "1")
            throw new Error(`@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${E}`);
        if (!((n = r.statement) === null || n === void 0) && n.includes(`
`))
            throw new Error(`@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${r.statement}`)
    }
    const _ = ng(r.address)
      , T = v ? `${v}://${l}` : l
      , C = r.statement ? `${r.statement}
` : ""
      , L = `${T} wants you to sign in with your Ethereum account:
${_}

${C}`;
    let U = `URI: ${j}
Version: ${E}
Chain ID: ${i}${f ? `
Nonce: ${f}` : ""}
Issued At: ${d.toISOString()}`;
    if (c && (U += `
Expiration Time: ${c.toISOString()}`),
    y && (U += `
Not Before: ${y.toISOString()}`),
    g && (U += `
Request ID: ${g}`),
    p) {
        let Y = `
Resources:`;
        for (const G of p) {
            if (!G || typeof G != "string")
                throw new Error(`@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${G}`);
            Y += `
- ${G}`
        }
        U += Y
    }
    return `${L}
${U}`
}
class Ze extends Error {
    constructor({message: n, code: i, cause: l, name: c}) {
        var d;
        super(n, {
            cause: l
        }),
        this.__isWebAuthnError = !0,
        this.name = (d = c ?? (l instanceof Error ? l.name : void 0)) !== null && d !== void 0 ? d : "Unknown Error",
        this.code = i
    }
}
class Vi extends Ze {
    constructor(n, i) {
        super({
            code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
            cause: i,
            message: n
        }),
        this.name = "WebAuthnUnknownError",
        this.originalError = i
    }
}
function Hb({error: r, options: n}) {
    var i, l, c;
    const {publicKey: d} = n;
    if (!d)
        throw Error("options was missing required publicKey property");
    if (r.name === "AbortError") {
        if (n.signal instanceof AbortSignal)
            return new Ze({
                message: "Registration ceremony was sent an abort signal",
                code: "ERROR_CEREMONY_ABORTED",
                cause: r
            })
    } else if (r.name === "ConstraintError") {
        if (((i = d.authenticatorSelection) === null || i === void 0 ? void 0 : i.requireResidentKey) === !0)
            return new Ze({
                message: "Discoverable credentials were required but no available authenticator supported it",
                code: "ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",
                cause: r
            });
        if (n.mediation === "conditional" && ((l = d.authenticatorSelection) === null || l === void 0 ? void 0 : l.userVerification) === "required")
            return new Ze({
                message: "User verification was required during automatic registration but it could not be performed",
                code: "ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE",
                cause: r
            });
        if (((c = d.authenticatorSelection) === null || c === void 0 ? void 0 : c.userVerification) === "required")
            return new Ze({
                message: "User verification was required but no available authenticator supported it",
                code: "ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT",
                cause: r
            })
    } else {
        if (r.name === "InvalidStateError")
            return new Ze({
                message: "The authenticator was previously registered",
                code: "ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED",
                cause: r
            });
        if (r.name === "NotAllowedError")
            return new Ze({
                message: r.message,
                code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
                cause: r
            });
        if (r.name === "NotSupportedError")
            return d.pubKeyCredParams.filter(y => y.type === "public-key").length === 0 ? new Ze({
                message: 'No entry in pubKeyCredParams was of type "public-key"',
                code: "ERROR_MALFORMED_PUBKEYCREDPARAMS",
                cause: r
            }) : new Ze({
                message: "No available authenticator supported any of the specified pubKeyCredParams algorithms",
                code: "ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG",
                cause: r
            });
        if (r.name === "SecurityError") {
            const f = window.location.hostname;
            if (sg(f)) {
                if (d.rp.id !== f)
                    return new Ze({
                        message: `The RP ID "${d.rp.id}" is invalid for this domain`,
                        code: "ERROR_INVALID_RP_ID",
                        cause: r
                    })
            } else
                return new Ze({
                    message: `${window.location.hostname} is an invalid domain`,
                    code: "ERROR_INVALID_DOMAIN",
                    cause: r
                })
        } else if (r.name === "TypeError") {
            if (d.user.id.byteLength < 1 || d.user.id.byteLength > 64)
                return new Ze({
                    message: "User ID was not between 1 and 64 characters",
                    code: "ERROR_INVALID_USER_ID_LENGTH",
                    cause: r
                })
        } else if (r.name === "UnknownError")
            return new Ze({
                message: "The authenticator was unable to process the specified options, or could not create a new credential",
                code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
                cause: r
            })
    }
    return new Ze({
        message: "a Non-Webauthn related error has occurred",
        code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
        cause: r
    })
}
function $b({error: r, options: n}) {
    const {publicKey: i} = n;
    if (!i)
        throw Error("options was missing required publicKey property");
    if (r.name === "AbortError") {
        if (n.signal instanceof AbortSignal)
            return new Ze({
                message: "Authentication ceremony was sent an abort signal",
                code: "ERROR_CEREMONY_ABORTED",
                cause: r
            })
    } else {
        if (r.name === "NotAllowedError")
            return new Ze({
                message: r.message,
                code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
                cause: r
            });
        if (r.name === "SecurityError") {
            const l = window.location.hostname;
            if (sg(l)) {
                if (i.rpId !== l)
                    return new Ze({
                        message: `The RP ID "${i.rpId}" is invalid for this domain`,
                        code: "ERROR_INVALID_RP_ID",
                        cause: r
                    })
            } else
                return new Ze({
                    message: `${window.location.hostname} is an invalid domain`,
                    code: "ERROR_INVALID_DOMAIN",
                    cause: r
                })
        } else if (r.name === "UnknownError")
            return new Ze({
                message: "The authenticator was unable to process the specified options, or could not create a new assertion signature",
                code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
                cause: r
            })
    }
    return new Ze({
        message: "a Non-Webauthn related error has occurred",
        code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
        cause: r
    })
}
class Gb {
    createNewAbortSignal() {
        if (this.controller) {
            const i = new Error("Cancelling existing WebAuthn API call for new one");
            i.name = "AbortError",
            this.controller.abort(i)
        }
        const n = new AbortController;
        return this.controller = n,
        n.signal
    }
    cancelCeremony() {
        if (this.controller) {
            const n = new Error("Manually cancelling existing WebAuthn API call");
            n.name = "AbortError",
            this.controller.abort(n),
            this.controller = void 0
        }
    }
}
const Vb = new Gb;
function Yb(r) {
    if (!r)
        throw new Error("Credential creation options are required");
    if (typeof PublicKeyCredential < "u" && "parseCreationOptionsFromJSON"in PublicKeyCredential && typeof PublicKeyCredential.parseCreationOptionsFromJSON == "function")
        return PublicKeyCredential.parseCreationOptionsFromJSON(r);
    const {challenge: n, user: i, excludeCredentials: l} = r
      , c = Xi(r, ["challenge", "user", "excludeCredentials"])
      , d = cs(n).buffer
      , f = Object.assign(Object.assign({}, i), {
        id: cs(i.id).buffer
    })
      , y = Object.assign(Object.assign({}, c), {
        challenge: d,
        user: f
    });
    if (l && l.length > 0) {
        y.excludeCredentials = new Array(l.length);
        for (let g = 0; g < l.length; g++) {
            const p = l[g];
            y.excludeCredentials[g] = Object.assign(Object.assign({}, p), {
                id: cs(p.id).buffer,
                type: p.type || "public-key",
                transports: p.transports
            })
        }
    }
    return y
}
function Kb(r) {
    if (!r)
        throw new Error("Credential request options are required");
    if (typeof PublicKeyCredential < "u" && "parseRequestOptionsFromJSON"in PublicKeyCredential && typeof PublicKeyCredential.parseRequestOptionsFromJSON == "function")
        return PublicKeyCredential.parseRequestOptionsFromJSON(r);
    const {challenge: n, allowCredentials: i} = r
      , l = Xi(r, ["challenge", "allowCredentials"])
      , c = cs(n).buffer
      , d = Object.assign(Object.assign({}, l), {
        challenge: c
    });
    if (i && i.length > 0) {
        d.allowCredentials = new Array(i.length);
        for (let f = 0; f < i.length; f++) {
            const y = i[f];
            d.allowCredentials[f] = Object.assign(Object.assign({}, y), {
                id: cs(y.id).buffer,
                type: y.type || "public-key",
                transports: y.transports
            })
        }
    }
    return d
}
function Xb(r) {
    var n;
    if ("toJSON"in r && typeof r.toJSON == "function")
        return r.toJSON();
    const i = r;
    return {
        id: r.id,
        rawId: r.id,
        response: {
            attestationObject: gn(new Uint8Array(r.response.attestationObject)),
            clientDataJSON: gn(new Uint8Array(r.response.clientDataJSON))
        },
        type: "public-key",
        clientExtensionResults: r.getClientExtensionResults(),
        authenticatorAttachment: (n = i.authenticatorAttachment) !== null && n !== void 0 ? n : void 0
    }
}
function Jb(r) {
    var n;
    if ("toJSON"in r && typeof r.toJSON == "function")
        return r.toJSON();
    const i = r
      , l = r.getClientExtensionResults()
      , c = r.response;
    return {
        id: r.id,
        rawId: r.id,
        response: {
            authenticatorData: gn(new Uint8Array(c.authenticatorData)),
            clientDataJSON: gn(new Uint8Array(c.clientDataJSON)),
            signature: gn(new Uint8Array(c.signature)),
            userHandle: c.userHandle ? gn(new Uint8Array(c.userHandle)) : void 0
        },
        type: "public-key",
        clientExtensionResults: l,
        authenticatorAttachment: (n = i.authenticatorAttachment) !== null && n !== void 0 ? n : void 0
    }
}
function sg(r) {
    return r === "localhost" || /^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(r)
}
function Om() {
    var r, n;
    return !!(lt() && "PublicKeyCredential"in window && window.PublicKeyCredential && "credentials"in navigator && typeof ((r = navigator?.credentials) === null || r === void 0 ? void 0 : r.create) == "function" && typeof ((n = navigator?.credentials) === null || n === void 0 ? void 0 : n.get) == "function")
}
async function Qb(r) {
    try {
        const n = await navigator.credentials.create(r);
        return n ? n instanceof PublicKeyCredential ? {
            data: n,
            error: null
        } : {
            data: null,
            error: new Vi("Browser returned unexpected credential type",n)
        } : {
            data: null,
            error: new Vi("Empty credential response",n)
        }
    } catch (n) {
        return {
            data: null,
            error: Hb({
                error: n,
                options: r
            })
        }
    }
}
async function Ib(r) {
    try {
        const n = await navigator.credentials.get(r);
        return n ? n instanceof PublicKeyCredential ? {
            data: n,
            error: null
        } : {
            data: null,
            error: new Vi("Browser returned unexpected credential type",n)
        } : {
            data: null,
            error: new Vi("Empty credential response",n)
        }
    } catch (n) {
        return {
            data: null,
            error: $b({
                error: n,
                options: r
            })
        }
    }
}
const Zb = {
    hints: ["security-key"],
    authenticatorSelection: {
        authenticatorAttachment: "cross-platform",
        requireResidentKey: !1,
        userVerification: "preferred",
        residentKey: "discouraged"
    },
    attestation: "direct"
}
  , Pb = {
    userVerification: "preferred",
    hints: ["security-key"],
    attestation: "direct"
};
function Yi(...r) {
    const n = c => c !== null && typeof c == "object" && !Array.isArray(c)
      , i = c => c instanceof ArrayBuffer || ArrayBuffer.isView(c)
      , l = {};
    for (const c of r)
        if (c)
            for (const d in c) {
                const f = c[d];
                if (f !== void 0)
                    if (Array.isArray(f))
                        l[d] = f;
                    else if (i(f))
                        l[d] = f;
                    else if (n(f)) {
                        const y = l[d];
                        n(y) ? l[d] = Yi(y, f) : l[d] = Yi(f)
                    } else
                        l[d] = f
            }
    return l
}
function Wb(r, n) {
    return Yi(Zb, r, n || {})
}
function Fb(r, n) {
    return Yi(Pb, r, n || {})
}
class ev {
    constructor(n) {
        this.client = n,
        this.enroll = this._enroll.bind(this),
        this.challenge = this._challenge.bind(this),
        this.verify = this._verify.bind(this),
        this.authenticate = this._authenticate.bind(this),
        this.register = this._register.bind(this)
    }
    async _enroll(n) {
        return this.client.mfa.enroll(Object.assign(Object.assign({}, n), {
            factorType: "webauthn"
        }))
    }
    async _challenge({factorId: n, webauthn: i, friendlyName: l, signal: c}, d) {
        try {
            const {data: f, error: y} = await this.client.mfa.challenge({
                factorId: n,
                webauthn: i
            });
            if (!f)
                return {
                    data: null,
                    error: y
                };
            const g = c ?? Vb.createNewAbortSignal();
            if (f.webauthn.type === "create") {
                const {user: p} = f.webauthn.credential_options.publicKey;
                p.name || (p.name = `${p.id}:${l}`),
                p.displayName || (p.displayName = p.name)
            }
            switch (f.webauthn.type) {
            case "create":
                {
                    const p = Wb(f.webauthn.credential_options.publicKey, d?.create)
                      , {data: v, error: j} = await Qb({
                        publicKey: p,
                        signal: g
                    });
                    return v ? {
                        data: {
                            factorId: n,
                            challengeId: f.id,
                            webauthn: {
                                type: f.webauthn.type,
                                credential_response: v
                            }
                        },
                        error: null
                    } : {
                        data: null,
                        error: j
                    }
                }
            case "request":
                {
                    const p = Fb(f.webauthn.credential_options.publicKey, d?.request)
                      , {data: v, error: j} = await Ib(Object.assign(Object.assign({}, f.webauthn.credential_options), {
                        publicKey: p,
                        signal: g
                    }));
                    return v ? {
                        data: {
                            factorId: n,
                            challengeId: f.id,
                            webauthn: {
                                type: f.webauthn.type,
                                credential_response: v
                            }
                        },
                        error: null
                    } : {
                        data: null,
                        error: j
                    }
                }
            }
        } catch (f) {
            return F(f) ? {
                data: null,
                error: f
            } : {
                data: null,
                error: new mn("Unexpected error in challenge",f)
            }
        }
    }
    async _verify({challengeId: n, factorId: i, webauthn: l}) {
        return this.client.mfa.verify({
            factorId: i,
            challengeId: n,
            webauthn: l
        })
    }
    async _authenticate({factorId: n, webauthn: {rpId: i=typeof window < "u" ? window.location.hostname : void 0, rpOrigins: l=typeof window < "u" ? [window.location.origin] : void 0, signal: c}={}}, d) {
        if (!i)
            return {
                data: null,
                error: new fr("rpId is required for WebAuthn authentication")
            };
        try {
            if (!Om())
                return {
                    data: null,
                    error: new mn("Browser does not support WebAuthn",null)
                };
            const {data: f, error: y} = await this.challenge({
                factorId: n,
                webauthn: {
                    rpId: i,
                    rpOrigins: l
                },
                signal: c
            }, {
                request: d
            });
            if (!f)
                return {
                    data: null,
                    error: y
                };
            const {webauthn: g} = f;
            return this._verify({
                factorId: n,
                challengeId: f.challengeId,
                webauthn: {
                    type: g.type,
                    rpId: i,
                    rpOrigins: l,
                    credential_response: g.credential_response
                }
            })
        } catch (f) {
            return F(f) ? {
                data: null,
                error: f
            } : {
                data: null,
                error: new mn("Unexpected error in authenticate",f)
            }
        }
    }
    async _register({friendlyName: n, webauthn: {rpId: i=typeof window < "u" ? window.location.hostname : void 0, rpOrigins: l=typeof window < "u" ? [window.location.origin] : void 0, signal: c}={}}, d) {
        if (!i)
            return {
                data: null,
                error: new fr("rpId is required for WebAuthn registration")
            };
        try {
            if (!Om())
                return {
                    data: null,
                    error: new mn("Browser does not support WebAuthn",null)
                };
            const {data: f, error: y} = await this._enroll({
                friendlyName: n
            });
            if (!f)
                return await this.client.mfa.listFactors().then(v => {
                    var j;
                    return (j = v.data) === null || j === void 0 ? void 0 : j.all.find(E => E.factor_type === "webauthn" && E.friendly_name === n && E.status !== "unverified")
                }
                ).then(v => v ? this.client.mfa.unenroll({
                    factorId: v?.id
                }) : void 0),
                {
                    data: null,
                    error: y
                };
            const {data: g, error: p} = await this._challenge({
                factorId: f.id,
                friendlyName: f.friendly_name,
                webauthn: {
                    rpId: i,
                    rpOrigins: l
                },
                signal: c
            }, {
                create: d
            });
            return g ? this._verify({
                factorId: f.id,
                challengeId: g.challengeId,
                webauthn: {
                    rpId: i,
                    rpOrigins: l,
                    type: g.webauthn.type,
                    credential_response: g.webauthn.credential_response
                }
            }) : {
                data: null,
                error: p
            }
        } catch (f) {
            return F(f) ? {
                data: null,
                error: f
            } : {
                data: null,
                error: new mn("Unexpected error in register",f)
            }
        }
    }
}
Mb();
const tv = {
    url: Zp,
    storageKey: Pp,
    autoRefreshToken: !0,
    persistSession: !0,
    detectSessionInUrl: !0,
    headers: Wp,
    flowType: "implicit",
    debug: !1,
    hasCustomAuthorizationHeader: !1,
    throwOnError: !1
};
async function Rm(r, n, i) {
    return await i()
}
const rs = {};
class mr {
    get jwks() {
        var n, i;
        return (i = (n = rs[this.storageKey]) === null || n === void 0 ? void 0 : n.jwks) !== null && i !== void 0 ? i : {
            keys: []
        }
    }
    set jwks(n) {
        rs[this.storageKey] = Object.assign(Object.assign({}, rs[this.storageKey]), {
            jwks: n
        })
    }
    get jwks_cached_at() {
        var n, i;
        return (i = (n = rs[this.storageKey]) === null || n === void 0 ? void 0 : n.cachedAt) !== null && i !== void 0 ? i : Number.MIN_SAFE_INTEGER
    }
    set jwks_cached_at(n) {
        rs[this.storageKey] = Object.assign(Object.assign({}, rs[this.storageKey]), {
            cachedAt: n
        })
    }
    constructor(n) {
        var i, l, c;
        this.userStorage = null,
        this.memoryStorage = null,
        this.stateChangeEmitters = new Map,
        this.autoRefreshTicker = null,
        this.visibilityChangedCallback = null,
        this.refreshingDeferred = null,
        this.initializePromise = null,
        this.detectSessionInUrl = !0,
        this.hasCustomAuthorizationHeader = !1,
        this.suppressGetSessionWarning = !1,
        this.lockAcquired = !1,
        this.pendingInLock = [],
        this.broadcastChannel = null,
        this.logger = console.log;
        const d = Object.assign(Object.assign({}, tv), n);
        if (this.storageKey = d.storageKey,
        this.instanceID = (i = mr.nextInstanceID[this.storageKey]) !== null && i !== void 0 ? i : 0,
        mr.nextInstanceID[this.storageKey] = this.instanceID + 1,
        this.logDebugMessages = !!d.debug,
        typeof d.debug == "function" && (this.logger = d.debug),
        this.instanceID > 0 && lt()) {
            const f = `${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;
            console.warn(f),
            this.logDebugMessages && console.trace(f)
        }
        if (this.persistSession = d.persistSession,
        this.autoRefreshToken = d.autoRefreshToken,
        this.admin = new Db({
            url: d.url,
            headers: d.headers,
            fetch: d.fetch
        }),
        this.url = d.url,
        this.headers = d.headers,
        this.fetch = tg(d.fetch),
        this.lock = d.lock || Rm,
        this.detectSessionInUrl = d.detectSessionInUrl,
        this.flowType = d.flowType,
        this.hasCustomAuthorizationHeader = d.hasCustomAuthorizationHeader,
        this.throwOnError = d.throwOnError,
        d.lock ? this.lock = d.lock : this.persistSession && lt() && (!((l = globalThis?.navigator) === null || l === void 0) && l.locks) ? this.lock = zb : this.lock = Rm,
        this.jwks || (this.jwks = {
            keys: []
        },
        this.jwks_cached_at = Number.MIN_SAFE_INTEGER),
        this.mfa = {
            verify: this._verify.bind(this),
            enroll: this._enroll.bind(this),
            unenroll: this._unenroll.bind(this),
            challenge: this._challenge.bind(this),
            listFactors: this._listFactors.bind(this),
            challengeAndVerify: this._challengeAndVerify.bind(this),
            getAuthenticatorAssuranceLevel: this._getAuthenticatorAssuranceLevel.bind(this),
            webauthn: new ev(this)
        },
        this.oauth = {
            getAuthorizationDetails: this._getAuthorizationDetails.bind(this),
            approveAuthorization: this._approveAuthorization.bind(this),
            denyAuthorization: this._denyAuthorization.bind(this),
            listGrants: this._listOAuthGrants.bind(this),
            revokeGrant: this._revokeOAuthGrant.bind(this)
        },
        this.persistSession ? (d.storage ? this.storage = d.storage : eg() ? this.storage = globalThis.localStorage : (this.memoryStorage = {},
        this.storage = Am(this.memoryStorage)),
        d.userStorage && (this.userStorage = d.userStorage)) : (this.memoryStorage = {},
        this.storage = Am(this.memoryStorage)),
        lt() && globalThis.BroadcastChannel && this.persistSession && this.storageKey) {
            try {
                this.broadcastChannel = new globalThis.BroadcastChannel(this.storageKey)
            } catch (f) {
                console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available", f)
            }
            (c = this.broadcastChannel) === null || c === void 0 || c.addEventListener("message", async f => {
                this._debug("received broadcast notification from other tab or client", f),
                await this._notifyAllSubscribers(f.data.event, f.data.session, !1)
            }
            )
        }
        this.initialize()
    }
    isThrowOnErrorEnabled() {
        return this.throwOnError
    }
    _returnResult(n) {
        if (this.throwOnError && n && n.error)
            throw n.error;
        return n
    }
    _logPrefix() {
        return `GoTrueClient@${this.storageKey}:${this.instanceID} (${Pm}) ${new Date().toISOString()}`
    }
    _debug(...n) {
        return this.logDebugMessages && this.logger(this._logPrefix(), ...n),
        this
    }
    async initialize() {
        return this.initializePromise ? await this.initializePromise : (this.initializePromise = (async () => await this._acquireLock(-1, async () => await this._initialize()))(),
        await this.initializePromise)
    }
    async _initialize() {
        var n;
        try {
            let i = {}
              , l = "none";
            if (lt() && (i = fb(window.location.href),
            this._isImplicitGrantCallback(i) ? l = "implicit" : await this._isPKCECallback(i) && (l = "pkce")),
            lt() && this.detectSessionInUrl && l !== "none") {
                const {data: c, error: d} = await this._getSessionFromURL(i, l);
                if (d) {
                    if (this._debug("#_initialize()", "error detecting session from URL", d),
                    sb(d)) {
                        const g = (n = d.details) === null || n === void 0 ? void 0 : n.code;
                        if (g === "identity_already_exists" || g === "identity_not_found" || g === "single_identity_not_deletable")
                            return {
                                error: d
                            }
                    }
                    return await this._removeSession(),
                    {
                        error: d
                    }
                }
                const {session: f, redirectType: y} = c;
                return this._debug("#_initialize()", "detected session in URL", f, "redirect type", y),
                await this._saveSession(f),
                setTimeout(async () => {
                    y === "recovery" ? await this._notifyAllSubscribers("PASSWORD_RECOVERY", f) : await this._notifyAllSubscribers("SIGNED_IN", f)
                }
                , 0),
                {
                    error: null
                }
            }
            return await this._recoverAndRefresh(),
            {
                error: null
            }
        } catch (i) {
            return F(i) ? this._returnResult({
                error: i
            }) : this._returnResult({
                error: new mn("Unexpected error during initialization",i)
            })
        } finally {
            await this._handleVisibilityChange(),
            this._debug("#_initialize()", "end")
        }
    }
    async signInAnonymously(n) {
        var i, l, c;
        try {
            const d = await ne(this.fetch, "POST", `${this.url}/signup`, {
                headers: this.headers,
                body: {
                    data: (l = (i = n?.options) === null || i === void 0 ? void 0 : i.data) !== null && l !== void 0 ? l : {},
                    gotrue_meta_security: {
                        captcha_token: (c = n?.options) === null || c === void 0 ? void 0 : c.captchaToken
                    }
                },
                xform: Yt
            })
              , {data: f, error: y} = d;
            if (y || !f)
                return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: y
                });
            const g = f.session
              , p = f.user;
            return f.session && (await this._saveSession(f.session),
            await this._notifyAllSubscribers("SIGNED_IN", g)),
            this._returnResult({
                data: {
                    user: p,
                    session: g
                },
                error: null
            })
        } catch (d) {
            if (F(d))
                return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: d
                });
            throw d
        }
    }
    async signUp(n) {
        var i, l, c;
        try {
            let d;
            if ("email"in n) {
                const {email: v, password: j, options: E} = n;
                let _ = null
                  , T = null;
                this.flowType === "pkce" && ([_,T] = await as(this.storage, this.storageKey)),
                d = await ne(this.fetch, "POST", `${this.url}/signup`, {
                    headers: this.headers,
                    redirectTo: E?.emailRedirectTo,
                    body: {
                        email: v,
                        password: j,
                        data: (i = E?.data) !== null && i !== void 0 ? i : {},
                        gotrue_meta_security: {
                            captcha_token: E?.captchaToken
                        },
                        code_challenge: _,
                        code_challenge_method: T
                    },
                    xform: Yt
                })
            } else if ("phone"in n) {
                const {phone: v, password: j, options: E} = n;
                d = await ne(this.fetch, "POST", `${this.url}/signup`, {
                    headers: this.headers,
                    body: {
                        phone: v,
                        password: j,
                        data: (l = E?.data) !== null && l !== void 0 ? l : {},
                        channel: (c = E?.channel) !== null && c !== void 0 ? c : "sms",
                        gotrue_meta_security: {
                            captcha_token: E?.captchaToken
                        }
                    },
                    xform: Yt
                })
            } else
                throw new Li("You must provide either an email or phone number and a password");
            const {data: f, error: y} = d;
            if (y || !f)
                return await it(this.storage, `${this.storageKey}-code-verifier`),
                this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: y
                });
            const g = f.session
              , p = f.user;
            return f.session && (await this._saveSession(f.session),
            await this._notifyAllSubscribers("SIGNED_IN", g)),
            this._returnResult({
                data: {
                    user: p,
                    session: g
                },
                error: null
            })
        } catch (d) {
            if (await it(this.storage, `${this.storageKey}-code-verifier`),
            F(d))
                return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: d
                });
            throw d
        }
    }
    async signInWithPassword(n) {
        try {
            let i;
            if ("email"in n) {
                const {email: d, password: f, options: y} = n;
                i = await ne(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
                    headers: this.headers,
                    body: {
                        email: d,
                        password: f,
                        gotrue_meta_security: {
                            captcha_token: y?.captchaToken
                        }
                    },
                    xform: jm
                })
            } else if ("phone"in n) {
                const {phone: d, password: f, options: y} = n;
                i = await ne(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
                    headers: this.headers,
                    body: {
                        phone: d,
                        password: f,
                        gotrue_meta_security: {
                            captcha_token: y?.captchaToken
                        }
                    },
                    xform: jm
                })
            } else
                throw new Li("You must provide either an email or phone number and a password");
            const {data: l, error: c} = i;
            if (c)
                return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: c
                });
            if (!l || !l.session || !l.user) {
                const d = new ts;
                return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: d
                })
            }
            return l.session && (await this._saveSession(l.session),
            await this._notifyAllSubscribers("SIGNED_IN", l.session)),
            this._returnResult({
                data: Object.assign({
                    user: l.user,
                    session: l.session
                }, l.weak_password ? {
                    weakPassword: l.weak_password
                } : null),
                error: c
            })
        } catch (i) {
            if (F(i))
                return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: i
                });
            throw i
        }
    }
    async signInWithOAuth(n) {
        var i, l, c, d;
        return await this._handleProviderSignIn(n.provider, {
            redirectTo: (i = n.options) === null || i === void 0 ? void 0 : i.redirectTo,
            scopes: (l = n.options) === null || l === void 0 ? void 0 : l.scopes,
            queryParams: (c = n.options) === null || c === void 0 ? void 0 : c.queryParams,
            skipBrowserRedirect: (d = n.options) === null || d === void 0 ? void 0 : d.skipBrowserRedirect
        })
    }
    async exchangeCodeForSession(n) {
        return await this.initializePromise,
        this._acquireLock(-1, async () => this._exchangeCodeForSession(n))
    }
    async signInWithWeb3(n) {
        const {chain: i} = n;
        switch (i) {
        case "ethereum":
            return await this.signInWithEthereum(n);
        case "solana":
            return await this.signInWithSolana(n);
        default:
            throw new Error(`@supabase/auth-js: Unsupported chain "${i}"`)
        }
    }
    async signInWithEthereum(n) {
        var i, l, c, d, f, y, g, p, v, j, E;
        let _, T;
        if ("message"in n)
            _ = n.message,
            T = n.signature;
        else {
            const {chain: C, wallet: L, statement: U, options: Y} = n;
            let G;
            if (lt())
                if (typeof L == "object")
                    G = L;
                else {
                    const ge = window;
                    if ("ethereum"in ge && typeof ge.ethereum == "object" && "request"in ge.ethereum && typeof ge.ethereum.request == "function")
                        G = ge.ethereum;
                    else
                        throw new Error("@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.")
                }
            else {
                if (typeof L != "object" || !Y?.url)
                    throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");
                G = L
            }
            const z = new URL((i = Y?.url) !== null && i !== void 0 ? i : window.location.href)
              , V = await G.request({
                method: "eth_requestAccounts"
            }).then(ge => ge).catch( () => {
                throw new Error("@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid")
            }
            );
            if (!V || V.length === 0)
                throw new Error("@supabase/auth-js: No accounts available. Please ensure the wallet is connected.");
            const I = ng(V[0]);
            let X = (l = Y?.signInWithEthereum) === null || l === void 0 ? void 0 : l.chainId;
            if (!X) {
                const ge = await G.request({
                    method: "eth_chainId"
                });
                X = qb(ge)
            }
            const oe = {
                domain: z.host,
                address: I,
                statement: U,
                uri: z.href,
                version: "1",
                chainId: X,
                nonce: (c = Y?.signInWithEthereum) === null || c === void 0 ? void 0 : c.nonce,
                issuedAt: (f = (d = Y?.signInWithEthereum) === null || d === void 0 ? void 0 : d.issuedAt) !== null && f !== void 0 ? f : new Date,
                expirationTime: (y = Y?.signInWithEthereum) === null || y === void 0 ? void 0 : y.expirationTime,
                notBefore: (g = Y?.signInWithEthereum) === null || g === void 0 ? void 0 : g.notBefore,
                requestId: (p = Y?.signInWithEthereum) === null || p === void 0 ? void 0 : p.requestId,
                resources: (v = Y?.signInWithEthereum) === null || v === void 0 ? void 0 : v.resources
            };
            _ = Lb(oe),
            T = await G.request({
                method: "personal_sign",
                params: [Bb(_), I]
            })
        }
        try {
            const {data: C, error: L} = await ne(this.fetch, "POST", `${this.url}/token?grant_type=web3`, {
                headers: this.headers,
                body: Object.assign({
                    chain: "ethereum",
                    message: _,
                    signature: T
                }, !((j = n.options) === null || j === void 0) && j.captchaToken ? {
                    gotrue_meta_security: {
                        captcha_token: (E = n.options) === null || E === void 0 ? void 0 : E.captchaToken
                    }
                } : null),
                xform: Yt
            });
            if (L)
                throw L;
            if (!C || !C.session || !C.user) {
                const U = new ts;
                return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: U
                })
            }
            return C.session && (await this._saveSession(C.session),
            await this._notifyAllSubscribers("SIGNED_IN", C.session)),
            this._returnResult({
                data: Object.assign({}, C),
                error: L
            })
        } catch (C) {
            if (F(C))
                return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: C
                });
            throw C
        }
    }
    async signInWithSolana(n) {
        var i, l, c, d, f, y, g, p, v, j, E, _;
        let T, C;
        if ("message"in n)
            T = n.message,
            C = n.signature;
        else {
            const {chain: L, wallet: U, statement: Y, options: G} = n;
            let z;
            if (lt())
                if (typeof U == "object")
                    z = U;
                else {
                    const I = window;
                    if ("solana"in I && typeof I.solana == "object" && ("signIn"in I.solana && typeof I.solana.signIn == "function" || "signMessage"in I.solana && typeof I.solana.signMessage == "function"))
                        z = I.solana;
                    else
                        throw new Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.")
                }
            else {
                if (typeof U != "object" || !G?.url)
                    throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");
                z = U
            }
            const V = new URL((i = G?.url) !== null && i !== void 0 ? i : window.location.href);
            if ("signIn"in z && z.signIn) {
                const I = await z.signIn(Object.assign(Object.assign(Object.assign({
                    issuedAt: new Date().toISOString()
                }, G?.signInWithSolana), {
                    version: "1",
                    domain: V.host,
                    uri: V.href
                }), Y ? {
                    statement: Y
                } : null));
                let X;
                if (Array.isArray(I) && I[0] && typeof I[0] == "object")
                    X = I[0];
                else if (I && typeof I == "object" && "signedMessage"in I && "signature"in I)
                    X = I;
                else
                    throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");
                if ("signedMessage"in X && "signature"in X && (typeof X.signedMessage == "string" || X.signedMessage instanceof Uint8Array) && X.signature instanceof Uint8Array)
                    T = typeof X.signedMessage == "string" ? X.signedMessage : new TextDecoder().decode(X.signedMessage),
                    C = X.signature;
                else
                    throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields")
            } else {
                if (!("signMessage"in z) || typeof z.signMessage != "function" || !("publicKey"in z) || typeof z != "object" || !z.publicKey || !("toBase58"in z.publicKey) || typeof z.publicKey.toBase58 != "function")
                    throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");
                T = [`${V.host} wants you to sign in with your Solana account:`, z.publicKey.toBase58(), ...Y ? ["", Y, ""] : [""], "Version: 1", `URI: ${V.href}`, `Issued At: ${(c = (l = G?.signInWithSolana) === null || l === void 0 ? void 0 : l.issuedAt) !== null && c !== void 0 ? c : new Date().toISOString()}`, ...!((d = G?.signInWithSolana) === null || d === void 0) && d.notBefore ? [`Not Before: ${G.signInWithSolana.notBefore}`] : [], ...!((f = G?.signInWithSolana) === null || f === void 0) && f.expirationTime ? [`Expiration Time: ${G.signInWithSolana.expirationTime}`] : [], ...!((y = G?.signInWithSolana) === null || y === void 0) && y.chainId ? [`Chain ID: ${G.signInWithSolana.chainId}`] : [], ...!((g = G?.signInWithSolana) === null || g === void 0) && g.nonce ? [`Nonce: ${G.signInWithSolana.nonce}`] : [], ...!((p = G?.signInWithSolana) === null || p === void 0) && p.requestId ? [`Request ID: ${G.signInWithSolana.requestId}`] : [], ...!((j = (v = G?.signInWithSolana) === null || v === void 0 ? void 0 : v.resources) === null || j === void 0) && j.length ? ["Resources", ...G.signInWithSolana.resources.map(X => `- ${X}`)] : []].join(`
`);
                const I = await z.signMessage(new TextEncoder().encode(T), "utf8");
                if (!I || !(I instanceof Uint8Array))
                    throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");
                C = I
            }
        }
        try {
            const {data: L, error: U} = await ne(this.fetch, "POST", `${this.url}/token?grant_type=web3`, {
                headers: this.headers,
                body: Object.assign({
                    chain: "solana",
                    message: T,
                    signature: gn(C)
                }, !((E = n.options) === null || E === void 0) && E.captchaToken ? {
                    gotrue_meta_security: {
                        captcha_token: (_ = n.options) === null || _ === void 0 ? void 0 : _.captchaToken
                    }
                } : null),
                xform: Yt
            });
            if (U)
                throw U;
            if (!L || !L.session || !L.user) {
                const Y = new ts;
                return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: Y
                })
            }
            return L.session && (await this._saveSession(L.session),
            await this._notifyAllSubscribers("SIGNED_IN", L.session)),
            this._returnResult({
                data: Object.assign({}, L),
                error: U
            })
        } catch (L) {
            if (F(L))
                return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: L
                });
            throw L
        }
    }
    async _exchangeCodeForSession(n) {
        const i = await dn(this.storage, `${this.storageKey}-code-verifier`)
          , [l,c] = (i ?? "").split("/");
        try {
            if (!l && this.flowType === "pkce")
                throw new rb;
            const {data: d, error: f} = await ne(this.fetch, "POST", `${this.url}/token?grant_type=pkce`, {
                headers: this.headers,
                body: {
                    auth_code: n,
                    code_verifier: l
                },
                xform: Yt
            });
            if (await it(this.storage, `${this.storageKey}-code-verifier`),
            f)
                throw f;
            if (!d || !d.session || !d.user) {
                const y = new ts;
                return this._returnResult({
                    data: {
                        user: null,
                        session: null,
                        redirectType: null
                    },
                    error: y
                })
            }
            return d.session && (await this._saveSession(d.session),
            await this._notifyAllSubscribers("SIGNED_IN", d.session)),
            this._returnResult({
                data: Object.assign(Object.assign({}, d), {
                    redirectType: c ?? null
                }),
                error: f
            })
        } catch (d) {
            if (await it(this.storage, `${this.storageKey}-code-verifier`),
            F(d))
                return this._returnResult({
                    data: {
                        user: null,
                        session: null,
                        redirectType: null
                    },
                    error: d
                });
            throw d
        }
    }
    async signInWithIdToken(n) {
        try {
            const {options: i, provider: l, token: c, access_token: d, nonce: f} = n
              , y = await ne(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
                headers: this.headers,
                body: {
                    provider: l,
                    id_token: c,
                    access_token: d,
                    nonce: f,
                    gotrue_meta_security: {
                        captcha_token: i?.captchaToken
                    }
                },
                xform: Yt
            })
              , {data: g, error: p} = y;
            if (p)
                return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: p
                });
            if (!g || !g.session || !g.user) {
                const v = new ts;
                return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: v
                })
            }
            return g.session && (await this._saveSession(g.session),
            await this._notifyAllSubscribers("SIGNED_IN", g.session)),
            this._returnResult({
                data: g,
                error: p
            })
        } catch (i) {
            if (F(i))
                return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: i
                });
            throw i
        }
    }
    async signInWithOtp(n) {
        var i, l, c, d, f;
        try {
            if ("email"in n) {
                const {email: y, options: g} = n;
                let p = null
                  , v = null;
                this.flowType === "pkce" && ([p,v] = await as(this.storage, this.storageKey));
                const {error: j} = await ne(this.fetch, "POST", `${this.url}/otp`, {
                    headers: this.headers,
                    body: {
                        email: y,
                        data: (i = g?.data) !== null && i !== void 0 ? i : {},
                        create_user: (l = g?.shouldCreateUser) !== null && l !== void 0 ? l : !0,
                        gotrue_meta_security: {
                            captcha_token: g?.captchaToken
                        },
                        code_challenge: p,
                        code_challenge_method: v
                    },
                    redirectTo: g?.emailRedirectTo
                });
                return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: j
                })
            }
            if ("phone"in n) {
                const {phone: y, options: g} = n
                  , {data: p, error: v} = await ne(this.fetch, "POST", `${this.url}/otp`, {
                    headers: this.headers,
                    body: {
                        phone: y,
                        data: (c = g?.data) !== null && c !== void 0 ? c : {},
                        create_user: (d = g?.shouldCreateUser) !== null && d !== void 0 ? d : !0,
                        gotrue_meta_security: {
                            captcha_token: g?.captchaToken
                        },
                        channel: (f = g?.channel) !== null && f !== void 0 ? f : "sms"
                    }
                });
                return this._returnResult({
                    data: {
                        user: null,
                        session: null,
                        messageId: p?.message_id
                    },
                    error: v
                })
            }
            throw new Li("You must provide either an email or phone number.")
        } catch (y) {
            if (await it(this.storage, `${this.storageKey}-code-verifier`),
            F(y))
                return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: y
                });
            throw y
        }
    }
    async verifyOtp(n) {
        var i, l;
        try {
            let c, d;
            "options"in n && (c = (i = n.options) === null || i === void 0 ? void 0 : i.redirectTo,
            d = (l = n.options) === null || l === void 0 ? void 0 : l.captchaToken);
            const {data: f, error: y} = await ne(this.fetch, "POST", `${this.url}/verify`, {
                headers: this.headers,
                body: Object.assign(Object.assign({}, n), {
                    gotrue_meta_security: {
                        captcha_token: d
                    }
                }),
                redirectTo: c,
                xform: Yt
            });
            if (y)
                throw y;
            if (!f)
                throw new Error("An error occurred on token verification.");
            const g = f.session
              , p = f.user;
            return g?.access_token && (await this._saveSession(g),
            await this._notifyAllSubscribers(n.type == "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN", g)),
            this._returnResult({
                data: {
                    user: p,
                    session: g
                },
                error: null
            })
        } catch (c) {
            if (F(c))
                return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: c
                });
            throw c
        }
    }
    async signInWithSSO(n) {
        var i, l, c, d, f;
        try {
            let y = null
              , g = null;
            this.flowType === "pkce" && ([y,g] = await as(this.storage, this.storageKey));
            const p = await ne(this.fetch, "POST", `${this.url}/sso`, {
                body: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, "providerId"in n ? {
                    provider_id: n.providerId
                } : null), "domain"in n ? {
                    domain: n.domain
                } : null), {
                    redirect_to: (l = (i = n.options) === null || i === void 0 ? void 0 : i.redirectTo) !== null && l !== void 0 ? l : void 0
                }), !((c = n?.options) === null || c === void 0) && c.captchaToken ? {
                    gotrue_meta_security: {
                        captcha_token: n.options.captchaToken
                    }
                } : null), {
                    skip_http_redirect: !0,
                    code_challenge: y,
                    code_challenge_method: g
                }),
                headers: this.headers,
                xform: Rb
            });
            return !((d = p.data) === null || d === void 0) && d.url && lt() && !(!((f = n.options) === null || f === void 0) && f.skipBrowserRedirect) && window.location.assign(p.data.url),
            this._returnResult(p)
        } catch (y) {
            if (await it(this.storage, `${this.storageKey}-code-verifier`),
            F(y))
                return this._returnResult({
                    data: null,
                    error: y
                });
            throw y
        }
    }
    async reauthenticate() {
        return await this.initializePromise,
        await this._acquireLock(-1, async () => await this._reauthenticate())
    }
    async _reauthenticate() {
        try {
            return await this._useSession(async n => {
                const {data: {session: i}, error: l} = n;
                if (l)
                    throw l;
                if (!i)
                    throw new At;
                const {error: c} = await ne(this.fetch, "GET", `${this.url}/reauthenticate`, {
                    headers: this.headers,
                    jwt: i.access_token
                });
                return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: c
                })
            }
            )
        } catch (n) {
            if (F(n))
                return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: n
                });
            throw n
        }
    }
    async resend(n) {
        try {
            const i = `${this.url}/resend`;
            if ("email"in n) {
                const {email: l, type: c, options: d} = n
                  , {error: f} = await ne(this.fetch, "POST", i, {
                    headers: this.headers,
                    body: {
                        email: l,
                        type: c,
                        gotrue_meta_security: {
                            captcha_token: d?.captchaToken
                        }
                    },
                    redirectTo: d?.emailRedirectTo
                });
                return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: f
                })
            } else if ("phone"in n) {
                const {phone: l, type: c, options: d} = n
                  , {data: f, error: y} = await ne(this.fetch, "POST", i, {
                    headers: this.headers,
                    body: {
                        phone: l,
                        type: c,
                        gotrue_meta_security: {
                            captcha_token: d?.captchaToken
                        }
                    }
                });
                return this._returnResult({
                    data: {
                        user: null,
                        session: null,
                        messageId: f?.message_id
                    },
                    error: y
                })
            }
            throw new Li("You must provide either an email or phone number and a type")
        } catch (i) {
            if (F(i))
                return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: i
                });
            throw i
        }
    }
    async getSession() {
        return await this.initializePromise,
        await this._acquireLock(-1, async () => this._useSession(async i => i))
    }
    async _acquireLock(n, i) {
        this._debug("#_acquireLock", "begin", n);
        try {
            if (this.lockAcquired) {
                const l = this.pendingInLock.length ? this.pendingInLock[this.pendingInLock.length - 1] : Promise.resolve()
                  , c = (async () => (await l,
                await i()))();
                return this.pendingInLock.push((async () => {
                    try {
                        await c
                    } catch {}
                }
                )()),
                c
            }
            return await this.lock(`lock:${this.storageKey}`, n, async () => {
                this._debug("#_acquireLock", "lock acquired for storage key", this.storageKey);
                try {
                    this.lockAcquired = !0;
                    const l = i();
                    for (this.pendingInLock.push((async () => {
                        try {
                            await l
                        } catch {}
                    }
                    )()),
                    await l; this.pendingInLock.length; ) {
                        const c = [...this.pendingInLock];
                        await Promise.all(c),
                        this.pendingInLock.splice(0, c.length)
                    }
                    return await l
                } finally {
                    this._debug("#_acquireLock", "lock released for storage key", this.storageKey),
                    this.lockAcquired = !1
                }
            }
            )
        } finally {
            this._debug("#_acquireLock", "end")
        }
    }
    async _useSession(n) {
        this._debug("#_useSession", "begin");
        try {
            const i = await this.__loadSession();
            return await n(i)
        } finally {
            this._debug("#_useSession", "end")
        }
    }
    async __loadSession() {
        this._debug("#__loadSession()", "begin"),
        this.lockAcquired || this._debug("#__loadSession()", "used outside of an acquired lock!", new Error().stack);
        try {
            let n = null;
            const i = await dn(this.storage, this.storageKey);
            if (this._debug("#getSession()", "session from storage", i),
            i !== null && (this._isValidSession(i) ? n = i : (this._debug("#getSession()", "session from storage is not valid"),
            await this._removeSession())),
            !n)
                return {
                    data: {
                        session: null
                    },
                    error: null
                };
            const l = n.expires_at ? n.expires_at * 1e3 - Date.now() < Eu : !1;
            if (this._debug("#__loadSession()", `session has${l ? "" : " not"} expired`, "expires_at", n.expires_at),
            !l) {
                if (this.userStorage) {
                    const f = await dn(this.userStorage, this.storageKey + "-user");
                    f?.user ? n.user = f.user : n.user = Nu()
                }
                if (this.storage.isServer && n.user && !n.user.__isUserNotAvailableProxy) {
                    const f = {
                        value: this.suppressGetSessionWarning
                    };
                    n.user = jb(n.user, f),
                    f.value && (this.suppressGetSessionWarning = !0)
                }
                return {
                    data: {
                        session: n
                    },
                    error: null
                }
            }
            const {data: c, error: d} = await this._callRefreshToken(n.refresh_token);
            return d ? this._returnResult({
                data: {
                    session: null
                },
                error: d
            }) : this._returnResult({
                data: {
                    session: c
                },
                error: null
            })
        } finally {
            this._debug("#__loadSession()", "end")
        }
    }
    async getUser(n) {
        if (n)
            return await this._getUser(n);
        await this.initializePromise;
        const i = await this._acquireLock(-1, async () => await this._getUser());
        return i.data.user && (this.suppressGetSessionWarning = !0),
        i
    }
    async _getUser(n) {
        try {
            return n ? await ne(this.fetch, "GET", `${this.url}/user`, {
                headers: this.headers,
                jwt: n,
                xform: Va
            }) : await this._useSession(async i => {
                var l, c, d;
                const {data: f, error: y} = i;
                if (y)
                    throw y;
                return !(!((l = f.session) === null || l === void 0) && l.access_token) && !this.hasCustomAuthorizationHeader ? {
                    data: {
                        user: null
                    },
                    error: new At
                } : await ne(this.fetch, "GET", `${this.url}/user`, {
                    headers: this.headers,
                    jwt: (d = (c = f.session) === null || c === void 0 ? void 0 : c.access_token) !== null && d !== void 0 ? d : void 0,
                    xform: Va
                })
            }
            )
        } catch (i) {
            if (F(i))
                return nb(i) && (await this._removeSession(),
                await it(this.storage, `${this.storageKey}-code-verifier`)),
                this._returnResult({
                    data: {
                        user: null
                    },
                    error: i
                });
            throw i
        }
    }
    async updateUser(n, i={}) {
        return await this.initializePromise,
        await this._acquireLock(-1, async () => await this._updateUser(n, i))
    }
    async _updateUser(n, i={}) {
        try {
            return await this._useSession(async l => {
                const {data: c, error: d} = l;
                if (d)
                    throw d;
                if (!c.session)
                    throw new At;
                const f = c.session;
                let y = null
                  , g = null;
                this.flowType === "pkce" && n.email != null && ([y,g] = await as(this.storage, this.storageKey));
                const {data: p, error: v} = await ne(this.fetch, "PUT", `${this.url}/user`, {
                    headers: this.headers,
                    redirectTo: i?.emailRedirectTo,
                    body: Object.assign(Object.assign({}, n), {
                        code_challenge: y,
                        code_challenge_method: g
                    }),
                    jwt: f.access_token,
                    xform: Va
                });
                if (v)
                    throw v;
                return f.user = p.user,
                await this._saveSession(f),
                await this._notifyAllSubscribers("USER_UPDATED", f),
                this._returnResult({
                    data: {
                        user: f.user
                    },
                    error: null
                })
            }
            )
        } catch (l) {
            if (await it(this.storage, `${this.storageKey}-code-verifier`),
            F(l))
                return this._returnResult({
                    data: {
                        user: null
                    },
                    error: l
                });
            throw l
        }
    }
    async setSession(n) {
        return await this.initializePromise,
        await this._acquireLock(-1, async () => await this._setSession(n))
    }
    async _setSession(n) {
        try {
            if (!n.access_token || !n.refresh_token)
                throw new At;
            const i = Date.now() / 1e3;
            let l = i
              , c = !0
              , d = null;
            const {payload: f} = ju(n.access_token);
            if (f.exp && (l = f.exp,
            c = l <= i),
            c) {
                const {data: y, error: g} = await this._callRefreshToken(n.refresh_token);
                if (g)
                    return this._returnResult({
                        data: {
                            user: null,
                            session: null
                        },
                        error: g
                    });
                if (!y)
                    return {
                        data: {
                            user: null,
                            session: null
                        },
                        error: null
                    };
                d = y
            } else {
                const {data: y, error: g} = await this._getUser(n.access_token);
                if (g)
                    throw g;
                d = {
                    access_token: n.access_token,
                    refresh_token: n.refresh_token,
                    user: y.user,
                    token_type: "bearer",
                    expires_in: l - i,
                    expires_at: l
                },
                await this._saveSession(d),
                await this._notifyAllSubscribers("SIGNED_IN", d)
            }
            return this._returnResult({
                data: {
                    user: d.user,
                    session: d
                },
                error: null
            })
        } catch (i) {
            if (F(i))
                return this._returnResult({
                    data: {
                        session: null,
                        user: null
                    },
                    error: i
                });
            throw i
        }
    }
    async refreshSession(n) {
        return await this.initializePromise,
        await this._acquireLock(-1, async () => await this._refreshSession(n))
    }
    async _refreshSession(n) {
        try {
            return await this._useSession(async i => {
                var l;
                if (!n) {
                    const {data: f, error: y} = i;
                    if (y)
                        throw y;
                    n = (l = f.session) !== null && l !== void 0 ? l : void 0
                }
                if (!n?.refresh_token)
                    throw new At;
                const {data: c, error: d} = await this._callRefreshToken(n.refresh_token);
                return d ? this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: d
                }) : c ? this._returnResult({
                    data: {
                        user: c.user,
                        session: c
                    },
                    error: null
                }) : this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: null
                })
            }
            )
        } catch (i) {
            if (F(i))
                return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: i
                });
            throw i
        }
    }
    async _getSessionFromURL(n, i) {
        try {
            if (!lt())
                throw new Hi("No browser detected.");
            if (n.error || n.error_description || n.error_code)
                throw new Hi(n.error_description || "Error in URL with unspecified error_description",{
                    error: n.error || "unspecified_error",
                    code: n.error_code || "unspecified_code"
                });
            switch (i) {
            case "implicit":
                if (this.flowType === "pkce")
                    throw new vm("Not a valid PKCE flow url.");
                break;
            case "pkce":
                if (this.flowType === "implicit")
                    throw new Hi("Not a valid implicit grant flow url.");
                break;
            default:
            }
            if (i === "pkce") {
                if (this._debug("#_initialize()", "begin", "is PKCE flow", !0),
                !n.code)
                    throw new vm("No code detected.");
                const {data: Y, error: G} = await this._exchangeCodeForSession(n.code);
                if (G)
                    throw G;
                const z = new URL(window.location.href);
                return z.searchParams.delete("code"),
                window.history.replaceState(window.history.state, "", z.toString()),
                {
                    data: {
                        session: Y.session,
                        redirectType: null
                    },
                    error: null
                }
            }
            const {provider_token: l, provider_refresh_token: c, access_token: d, refresh_token: f, expires_in: y, expires_at: g, token_type: p} = n;
            if (!d || !y || !f || !p)
                throw new Hi("No session defined in URL");
            const v = Math.round(Date.now() / 1e3)
              , j = parseInt(y);
            let E = v + j;
            g && (E = parseInt(g));
            const _ = E - v;
            _ * 1e3 <= ls && console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${_}s, should have been closer to ${j}s`);
            const T = E - j;
            v - T >= 120 ? console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale", T, E, v) : v - T < 0 && console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew", T, E, v);
            const {data: C, error: L} = await this._getUser(d);
            if (L)
                throw L;
            const U = {
                provider_token: l,
                provider_refresh_token: c,
                access_token: d,
                expires_in: j,
                expires_at: E,
                refresh_token: f,
                token_type: p,
                user: C.user
            };
            return window.location.hash = "",
            this._debug("#_getSessionFromURL()", "clearing window.location.hash"),
            this._returnResult({
                data: {
                    session: U,
                    redirectType: n.type
                },
                error: null
            })
        } catch (l) {
            if (F(l))
                return this._returnResult({
                    data: {
                        session: null,
                        redirectType: null
                    },
                    error: l
                });
            throw l
        }
    }
    _isImplicitGrantCallback(n) {
        return typeof this.detectSessionInUrl == "function" ? this.detectSessionInUrl(new URL(window.location.href), n) : !!(n.access_token || n.error_description)
    }
    async _isPKCECallback(n) {
        const i = await dn(this.storage, `${this.storageKey}-code-verifier`);
        return !!(n.code && i)
    }
    async signOut(n={
        scope: "global"
    }) {
        return await this.initializePromise,
        await this._acquireLock(-1, async () => await this._signOut(n))
    }
    async _signOut({scope: n}={
        scope: "global"
    }) {
        return await this._useSession(async i => {
            var l;
            const {data: c, error: d} = i;
            if (d)
                return this._returnResult({
                    error: d
                });
            const f = (l = c.session) === null || l === void 0 ? void 0 : l.access_token;
            if (f) {
                const {error: y} = await this.admin.signOut(f, n);
                if (y && !(ab(y) && (y.status === 404 || y.status === 401 || y.status === 403)))
                    return this._returnResult({
                        error: y
                    })
            }
            return n !== "others" && (await this._removeSession(),
            await it(this.storage, `${this.storageKey}-code-verifier`)),
            this._returnResult({
                error: null
            })
        }
        )
    }
    onAuthStateChange(n) {
        const i = hb()
          , l = {
            id: i,
            callback: n,
            unsubscribe: () => {
                this._debug("#unsubscribe()", "state change callback with id removed", i),
                this.stateChangeEmitters.delete(i)
            }
        };
        return this._debug("#onAuthStateChange()", "registered callback with id", i),
        this.stateChangeEmitters.set(i, l),
        (async () => (await this.initializePromise,
        await this._acquireLock(-1, async () => {
            this._emitInitialSession(i)
        }
        )))(),
        {
            data: {
                subscription: l
            }
        }
    }
    async _emitInitialSession(n) {
        return await this._useSession(async i => {
            var l, c;
            try {
                const {data: {session: d}, error: f} = i;
                if (f)
                    throw f;
                await ((l = this.stateChangeEmitters.get(n)) === null || l === void 0 ? void 0 : l.callback("INITIAL_SESSION", d)),
                this._debug("INITIAL_SESSION", "callback id", n, "session", d)
            } catch (d) {
                await ((c = this.stateChangeEmitters.get(n)) === null || c === void 0 ? void 0 : c.callback("INITIAL_SESSION", null)),
                this._debug("INITIAL_SESSION", "callback id", n, "error", d),
                console.error(d)
            }
        }
        )
    }
    async resetPasswordForEmail(n, i={}) {
        let l = null
          , c = null;
        this.flowType === "pkce" && ([l,c] = await as(this.storage, this.storageKey, !0));
        try {
            return await ne(this.fetch, "POST", `${this.url}/recover`, {
                body: {
                    email: n,
                    code_challenge: l,
                    code_challenge_method: c,
                    gotrue_meta_security: {
                        captcha_token: i.captchaToken
                    }
                },
                headers: this.headers,
                redirectTo: i.redirectTo
            })
        } catch (d) {
            if (await it(this.storage, `${this.storageKey}-code-verifier`),
            F(d))
                return this._returnResult({
                    data: null,
                    error: d
                });
            throw d
        }
    }
    async getUserIdentities() {
        var n;
        try {
            const {data: i, error: l} = await this.getUser();
            if (l)
                throw l;
            return this._returnResult({
                data: {
                    identities: (n = i.user.identities) !== null && n !== void 0 ? n : []
                },
                error: null
            })
        } catch (i) {
            if (F(i))
                return this._returnResult({
                    data: null,
                    error: i
                });
            throw i
        }
    }
    async linkIdentity(n) {
        return "token"in n ? this.linkIdentityIdToken(n) : this.linkIdentityOAuth(n)
    }
    async linkIdentityOAuth(n) {
        var i;
        try {
            const {data: l, error: c} = await this._useSession(async d => {
                var f, y, g, p, v;
                const {data: j, error: E} = d;
                if (E)
                    throw E;
                const _ = await this._getUrlForProvider(`${this.url}/user/identities/authorize`, n.provider, {
                    redirectTo: (f = n.options) === null || f === void 0 ? void 0 : f.redirectTo,
                    scopes: (y = n.options) === null || y === void 0 ? void 0 : y.scopes,
                    queryParams: (g = n.options) === null || g === void 0 ? void 0 : g.queryParams,
                    skipBrowserRedirect: !0
                });
                return await ne(this.fetch, "GET", _, {
                    headers: this.headers,
                    jwt: (v = (p = j.session) === null || p === void 0 ? void 0 : p.access_token) !== null && v !== void 0 ? v : void 0
                })
            }
            );
            if (c)
                throw c;
            return lt() && !(!((i = n.options) === null || i === void 0) && i.skipBrowserRedirect) && window.location.assign(l?.url),
            this._returnResult({
                data: {
                    provider: n.provider,
                    url: l?.url
                },
                error: null
            })
        } catch (l) {
            if (F(l))
                return this._returnResult({
                    data: {
                        provider: n.provider,
                        url: null
                    },
                    error: l
                });
            throw l
        }
    }
    async linkIdentityIdToken(n) {
        return await this._useSession(async i => {
            var l;
            try {
                const {error: c, data: {session: d}} = i;
                if (c)
                    throw c;
                const {options: f, provider: y, token: g, access_token: p, nonce: v} = n
                  , j = await ne(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
                    headers: this.headers,
                    jwt: (l = d?.access_token) !== null && l !== void 0 ? l : void 0,
                    body: {
                        provider: y,
                        id_token: g,
                        access_token: p,
                        nonce: v,
                        link_identity: !0,
                        gotrue_meta_security: {
                            captcha_token: f?.captchaToken
                        }
                    },
                    xform: Yt
                })
                  , {data: E, error: _} = j;
                return _ ? this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: _
                }) : !E || !E.session || !E.user ? this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: new ts
                }) : (E.session && (await this._saveSession(E.session),
                await this._notifyAllSubscribers("USER_UPDATED", E.session)),
                this._returnResult({
                    data: E,
                    error: _
                }))
            } catch (c) {
                if (await it(this.storage, `${this.storageKey}-code-verifier`),
                F(c))
                    return this._returnResult({
                        data: {
                            user: null,
                            session: null
                        },
                        error: c
                    });
                throw c
            }
        }
        )
    }
    async unlinkIdentity(n) {
        try {
            return await this._useSession(async i => {
                var l, c;
                const {data: d, error: f} = i;
                if (f)
                    throw f;
                return await ne(this.fetch, "DELETE", `${this.url}/user/identities/${n.identity_id}`, {
                    headers: this.headers,
                    jwt: (c = (l = d.session) === null || l === void 0 ? void 0 : l.access_token) !== null && c !== void 0 ? c : void 0
                })
            }
            )
        } catch (i) {
            if (F(i))
                return this._returnResult({
                    data: null,
                    error: i
                });
            throw i
        }
    }
    async _refreshAccessToken(n) {
        const i = `#_refreshAccessToken(${n.substring(0, 5)}...)`;
        this._debug(i, "begin");
        try {
            const l = Date.now();
            return await yb(async c => (c > 0 && await gb(200 * Math.pow(2, c - 1)),
            this._debug(i, "refreshing attempt", c),
            await ne(this.fetch, "POST", `${this.url}/token?grant_type=refresh_token`, {
                body: {
                    refresh_token: n
                },
                headers: this.headers,
                xform: Yt
            })), (c, d) => {
                const f = 200 * Math.pow(2, c);
                return d && Tu(d) && Date.now() + f - l < ls
            }
            )
        } catch (l) {
            if (this._debug(i, "error", l),
            F(l))
                return this._returnResult({
                    data: {
                        session: null,
                        user: null
                    },
                    error: l
                });
            throw l
        } finally {
            this._debug(i, "end")
        }
    }
    _isValidSession(n) {
        return typeof n == "object" && n !== null && "access_token"in n && "refresh_token"in n && "expires_at"in n
    }
    async _handleProviderSignIn(n, i) {
        const l = await this._getUrlForProvider(`${this.url}/authorize`, n, {
            redirectTo: i.redirectTo,
            scopes: i.scopes,
            queryParams: i.queryParams
        });
        return this._debug("#_handleProviderSignIn()", "provider", n, "options", i, "url", l),
        lt() && !i.skipBrowserRedirect && window.location.assign(l),
        {
            data: {
                provider: n,
                url: l
            },
            error: null
        }
    }
    async _recoverAndRefresh() {
        var n, i;
        const l = "#_recoverAndRefresh()";
        this._debug(l, "begin");
        try {
            const c = await dn(this.storage, this.storageKey);
            if (c && this.userStorage) {
                let f = await dn(this.userStorage, this.storageKey + "-user");
                !this.storage.isServer && Object.is(this.storage, this.userStorage) && !f && (f = {
                    user: c.user
                },
                await os(this.userStorage, this.storageKey + "-user", f)),
                c.user = (n = f?.user) !== null && n !== void 0 ? n : Nu()
            } else if (c && !c.user && !c.user) {
                const f = await dn(this.storage, this.storageKey + "-user");
                f && f?.user ? (c.user = f.user,
                await it(this.storage, this.storageKey + "-user"),
                await os(this.storage, this.storageKey, c)) : c.user = Nu()
            }
            if (this._debug(l, "session from storage", c),
            !this._isValidSession(c)) {
                this._debug(l, "session is not valid"),
                c !== null && await this._removeSession();
                return
            }
            const d = ((i = c.expires_at) !== null && i !== void 0 ? i : 1 / 0) * 1e3 - Date.now() < Eu;
            if (this._debug(l, `session has${d ? "" : " not"} expired with margin of ${Eu}s`),
            d) {
                if (this.autoRefreshToken && c.refresh_token) {
                    const {error: f} = await this._callRefreshToken(c.refresh_token);
                    f && (console.error(f),
                    Tu(f) || (this._debug(l, "refresh failed with a non-retryable error, removing the session", f),
                    await this._removeSession()))
                }
            } else if (c.user && c.user.__isUserNotAvailableProxy === !0)
                try {
                    const {data: f, error: y} = await this._getUser(c.access_token);
                    !y && f?.user ? (c.user = f.user,
                    await this._saveSession(c),
                    await this._notifyAllSubscribers("SIGNED_IN", c)) : this._debug(l, "could not get user data, skipping SIGNED_IN notification")
                } catch (f) {
                    console.error("Error getting user data:", f),
                    this._debug(l, "error getting user data, skipping SIGNED_IN notification", f)
                }
            else
                await this._notifyAllSubscribers("SIGNED_IN", c)
        } catch (c) {
            this._debug(l, "error", c),
            console.error(c);
            return
        } finally {
            this._debug(l, "end")
        }
    }
    async _callRefreshToken(n) {
        var i, l;
        if (!n)
            throw new At;
        if (this.refreshingDeferred)
            return this.refreshingDeferred.promise;
        const c = `#_callRefreshToken(${n.substring(0, 5)}...)`;
        this._debug(c, "begin");
        try {
            this.refreshingDeferred = new Qi;
            const {data: d, error: f} = await this._refreshAccessToken(n);
            if (f)
                throw f;
            if (!d.session)
                throw new At;
            await this._saveSession(d.session),
            await this._notifyAllSubscribers("TOKEN_REFRESHED", d.session);
            const y = {
                data: d.session,
                error: null
            };
            return this.refreshingDeferred.resolve(y),
            y
        } catch (d) {
            if (this._debug(c, "error", d),
            F(d)) {
                const f = {
                    data: null,
                    error: d
                };
                return Tu(d) || await this._removeSession(),
                (i = this.refreshingDeferred) === null || i === void 0 || i.resolve(f),
                f
            }
            throw (l = this.refreshingDeferred) === null || l === void 0 || l.reject(d),
            d
        } finally {
            this.refreshingDeferred = null,
            this._debug(c, "end")
        }
    }
    async _notifyAllSubscribers(n, i, l=!0) {
        const c = `#_notifyAllSubscribers(${n})`;
        this._debug(c, "begin", i, `broadcast = ${l}`);
        try {
            this.broadcastChannel && l && this.broadcastChannel.postMessage({
                event: n,
                session: i
            });
            const d = []
              , f = Array.from(this.stateChangeEmitters.values()).map(async y => {
                try {
                    await y.callback(n, i)
                } catch (g) {
                    d.push(g)
                }
            }
            );
            if (await Promise.all(f),
            d.length > 0) {
                for (let y = 0; y < d.length; y += 1)
                    console.error(d[y]);
                throw d[0]
            }
        } finally {
            this._debug(c, "end")
        }
    }
    async _saveSession(n) {
        this._debug("#_saveSession()", n),
        this.suppressGetSessionWarning = !0,
        await it(this.storage, `${this.storageKey}-code-verifier`);
        const i = Object.assign({}, n)
          , l = i.user && i.user.__isUserNotAvailableProxy === !0;
        if (this.userStorage) {
            !l && i.user && await os(this.userStorage, this.storageKey + "-user", {
                user: i.user
            });
            const c = Object.assign({}, i);
            delete c.user;
            const d = Em(c);
            await os(this.storage, this.storageKey, d)
        } else {
            const c = Em(i);
            await os(this.storage, this.storageKey, c)
        }
    }
    async _removeSession() {
        this._debug("#_removeSession()"),
        this.suppressGetSessionWarning = !1,
        await it(this.storage, this.storageKey),
        await it(this.storage, this.storageKey + "-code-verifier"),
        await it(this.storage, this.storageKey + "-user"),
        this.userStorage && await it(this.userStorage, this.storageKey + "-user"),
        await this._notifyAllSubscribers("SIGNED_OUT", null)
    }
    _removeVisibilityChangedCallback() {
        this._debug("#_removeVisibilityChangedCallback()");
        const n = this.visibilityChangedCallback;
        this.visibilityChangedCallback = null;
        try {
            n && lt() && window?.removeEventListener && window.removeEventListener("visibilitychange", n)
        } catch (i) {
            console.error("removing visibilitychange callback failed", i)
        }
    }
    async _startAutoRefresh() {
        await this._stopAutoRefresh(),
        this._debug("#_startAutoRefresh()");
        const n = setInterval( () => this._autoRefreshTokenTick(), ls);
        this.autoRefreshTicker = n,
        n && typeof n == "object" && typeof n.unref == "function" ? n.unref() : typeof Deno < "u" && typeof Deno.unrefTimer == "function" && Deno.unrefTimer(n),
        setTimeout(async () => {
            await this.initializePromise,
            await this._autoRefreshTokenTick()
        }
        , 0)
    }
    async _stopAutoRefresh() {
        this._debug("#_stopAutoRefresh()");
        const n = this.autoRefreshTicker;
        this.autoRefreshTicker = null,
        n && clearInterval(n)
    }
    async startAutoRefresh() {
        this._removeVisibilityChangedCallback(),
        await this._startAutoRefresh()
    }
    async stopAutoRefresh() {
        this._removeVisibilityChangedCallback(),
        await this._stopAutoRefresh()
    }
    async _autoRefreshTokenTick() {
        this._debug("#_autoRefreshTokenTick()", "begin");
        try {
            await this._acquireLock(0, async () => {
                try {
                    const n = Date.now();
                    try {
                        return await this._useSession(async i => {
                            const {data: {session: l}} = i;
                            if (!l || !l.refresh_token || !l.expires_at) {
                                this._debug("#_autoRefreshTokenTick()", "no session");
                                return
                            }
                            const c = Math.floor((l.expires_at * 1e3 - n) / ls);
                            this._debug("#_autoRefreshTokenTick()", `access token expires in ${c} ticks, a tick lasts ${ls}ms, refresh threshold is ${qu} ticks`),
                            c <= qu && await this._callRefreshToken(l.refresh_token)
                        }
                        )
                    } catch (i) {
                        console.error("Auto refresh tick failed with error. This is likely a transient error.", i)
                    }
                } finally {
                    this._debug("#_autoRefreshTokenTick()", "end")
                }
            }
            )
        } catch (n) {
            if (n.isAcquireTimeout || n instanceof ag)
                this._debug("auto refresh token tick lock not available");
            else
                throw n
        }
    }
    async _handleVisibilityChange() {
        if (this._debug("#_handleVisibilityChange()"),
        !lt() || !window?.addEventListener)
            return this.autoRefreshToken && this.startAutoRefresh(),
            !1;
        try {
            this.visibilityChangedCallback = async () => await this._onVisibilityChanged(!1),
            window?.addEventListener("visibilitychange", this.visibilityChangedCallback),
            await this._onVisibilityChanged(!0)
        } catch (n) {
            console.error("_handleVisibilityChange", n)
        }
    }
    async _onVisibilityChanged(n) {
        const i = `#_onVisibilityChanged(${n})`;
        this._debug(i, "visibilityState", document.visibilityState),
        document.visibilityState === "visible" ? (this.autoRefreshToken && this._startAutoRefresh(),
        n || (await this.initializePromise,
        await this._acquireLock(-1, async () => {
            if (document.visibilityState !== "visible") {
                this._debug(i, "acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");
                return
            }
            await this._recoverAndRefresh()
        }
        ))) : document.visibilityState === "hidden" && this.autoRefreshToken && this._stopAutoRefresh()
    }
    async _getUrlForProvider(n, i, l) {
        const c = [`provider=${encodeURIComponent(i)}`];
        if (l?.redirectTo && c.push(`redirect_to=${encodeURIComponent(l.redirectTo)}`),
        l?.scopes && c.push(`scopes=${encodeURIComponent(l.scopes)}`),
        this.flowType === "pkce") {
            const [d,f] = await as(this.storage, this.storageKey)
              , y = new URLSearchParams({
                code_challenge: `${encodeURIComponent(d)}`,
                code_challenge_method: `${encodeURIComponent(f)}`
            });
            c.push(y.toString())
        }
        if (l?.queryParams) {
            const d = new URLSearchParams(l.queryParams);
            c.push(d.toString())
        }
        return l?.skipBrowserRedirect && c.push(`skip_http_redirect=${l.skipBrowserRedirect}`),
        `${n}?${c.join("&")}`
    }
    async _unenroll(n) {
        try {
            return await this._useSession(async i => {
                var l;
                const {data: c, error: d} = i;
                return d ? this._returnResult({
                    data: null,
                    error: d
                }) : await ne(this.fetch, "DELETE", `${this.url}/factors/${n.factorId}`, {
                    headers: this.headers,
                    jwt: (l = c?.session) === null || l === void 0 ? void 0 : l.access_token
                })
            }
            )
        } catch (i) {
            if (F(i))
                return this._returnResult({
                    data: null,
                    error: i
                });
            throw i
        }
    }
    async _enroll(n) {
        try {
            return await this._useSession(async i => {
                var l, c;
                const {data: d, error: f} = i;
                if (f)
                    return this._returnResult({
                        data: null,
                        error: f
                    });
                const y = Object.assign({
                    friendly_name: n.friendlyName,
                    factor_type: n.factorType
                }, n.factorType === "phone" ? {
                    phone: n.phone
                } : n.factorType === "totp" ? {
                    issuer: n.issuer
                } : {})
                  , {data: g, error: p} = await ne(this.fetch, "POST", `${this.url}/factors`, {
                    body: y,
                    headers: this.headers,
                    jwt: (l = d?.session) === null || l === void 0 ? void 0 : l.access_token
                });
                return p ? this._returnResult({
                    data: null,
                    error: p
                }) : (n.factorType === "totp" && g.type === "totp" && (!((c = g?.totp) === null || c === void 0) && c.qr_code) && (g.totp.qr_code = `data:image/svg+xml;utf-8,${g.totp.qr_code}`),
                this._returnResult({
                    data: g,
                    error: null
                }))
            }
            )
        } catch (i) {
            if (F(i))
                return this._returnResult({
                    data: null,
                    error: i
                });
            throw i
        }
    }
    async _verify(n) {
        return this._acquireLock(-1, async () => {
            try {
                return await this._useSession(async i => {
                    var l;
                    const {data: c, error: d} = i;
                    if (d)
                        return this._returnResult({
                            data: null,
                            error: d
                        });
                    const f = Object.assign({
                        challenge_id: n.challengeId
                    }, "webauthn"in n ? {
                        webauthn: Object.assign(Object.assign({}, n.webauthn), {
                            credential_response: n.webauthn.type === "create" ? Xb(n.webauthn.credential_response) : Jb(n.webauthn.credential_response)
                        })
                    } : {
                        code: n.code
                    })
                      , {data: y, error: g} = await ne(this.fetch, "POST", `${this.url}/factors/${n.factorId}/verify`, {
                        body: f,
                        headers: this.headers,
                        jwt: (l = c?.session) === null || l === void 0 ? void 0 : l.access_token
                    });
                    return g ? this._returnResult({
                        data: null,
                        error: g
                    }) : (await this._saveSession(Object.assign({
                        expires_at: Math.round(Date.now() / 1e3) + y.expires_in
                    }, y)),
                    await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", y),
                    this._returnResult({
                        data: y,
                        error: g
                    }))
                }
                )
            } catch (i) {
                if (F(i))
                    return this._returnResult({
                        data: null,
                        error: i
                    });
                throw i
            }
        }
        )
    }
    async _challenge(n) {
        return this._acquireLock(-1, async () => {
            try {
                return await this._useSession(async i => {
                    var l;
                    const {data: c, error: d} = i;
                    if (d)
                        return this._returnResult({
                            data: null,
                            error: d
                        });
                    const f = await ne(this.fetch, "POST", `${this.url}/factors/${n.factorId}/challenge`, {
                        body: n,
                        headers: this.headers,
                        jwt: (l = c?.session) === null || l === void 0 ? void 0 : l.access_token
                    });
                    if (f.error)
                        return f;
                    const {data: y} = f;
                    if (y.type !== "webauthn")
                        return {
                            data: y,
                            error: null
                        };
                    switch (y.webauthn.type) {
                    case "create":
                        return {
                            data: Object.assign(Object.assign({}, y), {
                                webauthn: Object.assign(Object.assign({}, y.webauthn), {
                                    credential_options: Object.assign(Object.assign({}, y.webauthn.credential_options), {
                                        publicKey: Yb(y.webauthn.credential_options.publicKey)
                                    })
                                })
                            }),
                            error: null
                        };
                    case "request":
                        return {
                            data: Object.assign(Object.assign({}, y), {
                                webauthn: Object.assign(Object.assign({}, y.webauthn), {
                                    credential_options: Object.assign(Object.assign({}, y.webauthn.credential_options), {
                                        publicKey: Kb(y.webauthn.credential_options.publicKey)
                                    })
                                })
                            }),
                            error: null
                        }
                    }
                }
                )
            } catch (i) {
                if (F(i))
                    return this._returnResult({
                        data: null,
                        error: i
                    });
                throw i
            }
        }
        )
    }
    async _challengeAndVerify(n) {
        const {data: i, error: l} = await this._challenge({
            factorId: n.factorId
        });
        return l ? this._returnResult({
            data: null,
            error: l
        }) : await this._verify({
            factorId: n.factorId,
            challengeId: i.id,
            code: n.code
        })
    }
    async _listFactors() {
        var n;
        const {data: {user: i}, error: l} = await this.getUser();
        if (l)
            return {
                data: null,
                error: l
            };
        const c = {
            all: [],
            phone: [],
            totp: [],
            webauthn: []
        };
        for (const d of (n = i?.factors) !== null && n !== void 0 ? n : [])
            c.all.push(d),
            d.status === "verified" && c[d.factor_type].push(d);
        return {
            data: c,
            error: null
        }
    }
    async _getAuthenticatorAssuranceLevel() {
        var n, i;
        const {data: {session: l}, error: c} = await this.getSession();
        if (c)
            return this._returnResult({
                data: null,
                error: c
            });
        if (!l)
            return {
                data: {
                    currentLevel: null,
                    nextLevel: null,
                    currentAuthenticationMethods: []
                },
                error: null
            };
        const {payload: d} = ju(l.access_token);
        let f = null;
        d.aal && (f = d.aal);
        let y = f;
        ((i = (n = l.user.factors) === null || n === void 0 ? void 0 : n.filter(v => v.status === "verified")) !== null && i !== void 0 ? i : []).length > 0 && (y = "aal2");
        const p = d.amr || [];
        return {
            data: {
                currentLevel: f,
                nextLevel: y,
                currentAuthenticationMethods: p
            },
            error: null
        }
    }
    async _getAuthorizationDetails(n) {
        try {
            return await this._useSession(async i => {
                const {data: {session: l}, error: c} = i;
                return c ? this._returnResult({
                    data: null,
                    error: c
                }) : l ? await ne(this.fetch, "GET", `${this.url}/oauth/authorizations/${n}`, {
                    headers: this.headers,
                    jwt: l.access_token,
                    xform: d => ({
                        data: d,
                        error: null
                    })
                }) : this._returnResult({
                    data: null,
                    error: new At
                })
            }
            )
        } catch (i) {
            if (F(i))
                return this._returnResult({
                    data: null,
                    error: i
                });
            throw i
        }
    }
    async _approveAuthorization(n, i) {
        try {
            return await this._useSession(async l => {
                const {data: {session: c}, error: d} = l;
                if (d)
                    return this._returnResult({
                        data: null,
                        error: d
                    });
                if (!c)
                    return this._returnResult({
                        data: null,
                        error: new At
                    });
                const f = await ne(this.fetch, "POST", `${this.url}/oauth/authorizations/${n}/consent`, {
                    headers: this.headers,
                    jwt: c.access_token,
                    body: {
                        action: "approve"
                    },
                    xform: y => ({
                        data: y,
                        error: null
                    })
                });
                return f.data && f.data.redirect_url && lt() && !i?.skipBrowserRedirect && window.location.assign(f.data.redirect_url),
                f
            }
            )
        } catch (l) {
            if (F(l))
                return this._returnResult({
                    data: null,
                    error: l
                });
            throw l
        }
    }
    async _denyAuthorization(n, i) {
        try {
            return await this._useSession(async l => {
                const {data: {session: c}, error: d} = l;
                if (d)
                    return this._returnResult({
                        data: null,
                        error: d
                    });
                if (!c)
                    return this._returnResult({
                        data: null,
                        error: new At
                    });
                const f = await ne(this.fetch, "POST", `${this.url}/oauth/authorizations/${n}/consent`, {
                    headers: this.headers,
                    jwt: c.access_token,
                    body: {
                        action: "deny"
                    },
                    xform: y => ({
                        data: y,
                        error: null
                    })
                });
                return f.data && f.data.redirect_url && lt() && !i?.skipBrowserRedirect && window.location.assign(f.data.redirect_url),
                f
            }
            )
        } catch (l) {
            if (F(l))
                return this._returnResult({
                    data: null,
                    error: l
                });
            throw l
        }
    }
    async _listOAuthGrants() {
        try {
            return await this._useSession(async n => {
                const {data: {session: i}, error: l} = n;
                return l ? this._returnResult({
                    data: null,
                    error: l
                }) : i ? await ne(this.fetch, "GET", `${this.url}/user/oauth/grants`, {
                    headers: this.headers,
                    jwt: i.access_token,
                    xform: c => ({
                        data: c,
                        error: null
                    })
                }) : this._returnResult({
                    data: null,
                    error: new At
                })
            }
            )
        } catch (n) {
            if (F(n))
                return this._returnResult({
                    data: null,
                    error: n
                });
            throw n
        }
    }
    async _revokeOAuthGrant(n) {
        try {
            return await this._useSession(async i => {
                const {data: {session: l}, error: c} = i;
                return c ? this._returnResult({
                    data: null,
                    error: c
                }) : l ? (await ne(this.fetch, "DELETE", `${this.url}/user/oauth/grants`, {
                    headers: this.headers,
                    jwt: l.access_token,
                    query: {
                        client_id: n.clientId
                    },
                    noResolveJson: !0
                }),
                {
                    data: {},
                    error: null
                }) : this._returnResult({
                    data: null,
                    error: new At
                })
            }
            )
        } catch (i) {
            if (F(i))
                return this._returnResult({
                    data: null,
                    error: i
                });
            throw i
        }
    }
    async fetchJwk(n, i={
        keys: []
    }) {
        let l = i.keys.find(y => y.kid === n);
        if (l)
            return l;
        const c = Date.now();
        if (l = this.jwks.keys.find(y => y.kid === n),
        l && this.jwks_cached_at + eb > c)
            return l;
        const {data: d, error: f} = await ne(this.fetch, "GET", `${this.url}/.well-known/jwks.json`, {
            headers: this.headers
        });
        if (f)
            throw f;
        return !d.keys || d.keys.length === 0 || (this.jwks = d,
        this.jwks_cached_at = c,
        l = d.keys.find(y => y.kid === n),
        !l) ? null : l
    }
    async getClaims(n, i={}) {
        try {
            let l = n;
            if (!l) {
                const {data: _, error: T} = await this.getSession();
                if (T || !_.session)
                    return this._returnResult({
                        data: null,
                        error: T
                    });
                l = _.session.access_token
            }
            const {header: c, payload: d, signature: f, raw: {header: y, payload: g}} = ju(l);
            i?.allowExpired || Sb(d.exp);
            const p = !c.alg || c.alg.startsWith("HS") || !c.kid || !("crypto"in globalThis && "subtle"in globalThis.crypto) ? null : await this.fetchJwk(c.kid, i?.keys ? {
                keys: i.keys
            } : i?.jwks);
            if (!p) {
                const {error: _} = await this.getUser(l);
                if (_)
                    throw _;
                return {
                    data: {
                        claims: d,
                        header: c,
                        signature: f
                    },
                    error: null
                }
            }
            const v = Eb(c.alg)
              , j = await crypto.subtle.importKey("jwk", p, v, !0, ["verify"]);
            if (!await crypto.subtle.verify(v, j, f, cb(`${y}.${g}`)))
                throw new Hu("Invalid JWT signature");
            return {
                data: {
                    claims: d,
                    header: c,
                    signature: f
                },
                error: null
            }
        } catch (l) {
            if (F(l))
                return this._returnResult({
                    data: null,
                    error: l
                });
            throw l
        }
    }
}
mr.nextInstanceID = {};
const av = mr
  , nv = "2.89.0";
let lr = "";
typeof Deno < "u" ? lr = "deno" : typeof document < "u" ? lr = "web" : typeof navigator < "u" && navigator.product === "ReactNative" ? lr = "react-native" : lr = "node";
const sv = {
    "X-Client-Info": `supabase-js-${lr}/${nv}`
}
  , rv = {
    headers: sv
}
  , iv = {
    schema: "public"
}
  , lv = {
    autoRefreshToken: !0,
    persistSession: !0,
    detectSessionInUrl: !0,
    flowType: "implicit"
}
  , ov = {};
function gr(r) {
    "@babel/helpers - typeof";
    return gr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
        return typeof n
    }
    : function(n) {
        return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
    }
    ,
    gr(r)
}
function uv(r, n) {
    if (gr(r) != "object" || !r)
        return r;
    var i = r[Symbol.toPrimitive];
    if (i !== void 0) {
        var l = i.call(r, n);
        if (gr(l) != "object")
            return l;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (n === "string" ? String : Number)(r)
}
function cv(r) {
    var n = uv(r, "string");
    return gr(n) == "symbol" ? n : n + ""
}
function dv(r, n, i) {
    return (n = cv(n))in r ? Object.defineProperty(r, n, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[n] = i,
    r
}
function Cm(r, n) {
    var i = Object.keys(r);
    if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(r);
        n && (l = l.filter(function(c) {
            return Object.getOwnPropertyDescriptor(r, c).enumerable
        })),
        i.push.apply(i, l)
    }
    return i
}
function $e(r) {
    for (var n = 1; n < arguments.length; n++) {
        var i = arguments[n] != null ? arguments[n] : {};
        n % 2 ? Cm(Object(i), !0).forEach(function(l) {
            dv(r, l, i[l])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : Cm(Object(i)).forEach(function(l) {
            Object.defineProperty(r, l, Object.getOwnPropertyDescriptor(i, l))
        })
    }
    return r
}
const hv = r => r ? (...n) => r(...n) : (...n) => fetch(...n)
  , fv = () => Headers
  , mv = (r, n, i) => {
    const l = hv(i)
      , c = fv();
    return async (d, f) => {
        var y;
        const g = (y = await n()) !== null && y !== void 0 ? y : r;
        let p = new c(f?.headers);
        return p.has("apikey") || p.set("apikey", r),
        p.has("Authorization") || p.set("Authorization", `Bearer ${g}`),
        l(d, $e($e({}, f), {}, {
            headers: p
        }))
    }
}
;
function gv(r) {
    return r.endsWith("/") ? r : r + "/"
}
function yv(r, n) {
    var i, l;
    const {db: c, auth: d, realtime: f, global: y} = r
      , {db: g, auth: p, realtime: v, global: j} = n
      , E = {
        db: $e($e({}, g), c),
        auth: $e($e({}, p), d),
        realtime: $e($e({}, v), f),
        storage: {},
        global: $e($e($e({}, j), y), {}, {
            headers: $e($e({}, (i = j?.headers) !== null && i !== void 0 ? i : {}), (l = y?.headers) !== null && l !== void 0 ? l : {})
        }),
        accessToken: async () => ""
    };
    return r.accessToken ? E.accessToken = r.accessToken : delete E.accessToken,
    E
}
function pv(r) {
    const n = r?.trim();
    if (!n)
        throw new Error("supabaseUrl is required.");
    if (!n.match(/^https?:\/\//i))
        throw new Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");
    try {
        return new URL(gv(n))
    } catch {
        throw Error("Invalid supabaseUrl: Provided URL is malformed.")
    }
}
var bv = class extends av {
    constructor(r) {
        super(r)
    }
}
  , vv = class {
    constructor(r, n, i) {
        var l, c;
        this.supabaseUrl = r,
        this.supabaseKey = n;
        const d = pv(r);
        if (!n)
            throw new Error("supabaseKey is required.");
        this.realtimeUrl = new URL("realtime/v1",d),
        this.realtimeUrl.protocol = this.realtimeUrl.protocol.replace("http", "ws"),
        this.authUrl = new URL("auth/v1",d),
        this.storageUrl = new URL("storage/v1",d),
        this.functionsUrl = new URL("functions/v1",d);
        const f = `sb-${d.hostname.split(".")[0]}-auth-token`
          , y = {
            db: iv,
            realtime: ov,
            auth: $e($e({}, lv), {}, {
                storageKey: f
            }),
            global: rv
        }
          , g = yv(i ?? {}, y);
        if (this.storageKey = (l = g.auth.storageKey) !== null && l !== void 0 ? l : "",
        this.headers = (c = g.global.headers) !== null && c !== void 0 ? c : {},
        g.accessToken)
            this.accessToken = g.accessToken,
            this.auth = new Proxy({},{
                get: (v, j) => {
                    throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(j)} is not possible`)
                }
            });
        else {
            var p;
            this.auth = this._initSupabaseAuthClient((p = g.auth) !== null && p !== void 0 ? p : {}, this.headers, g.global.fetch)
        }
        this.fetch = mv(n, this._getAccessToken.bind(this), g.global.fetch),
        this.realtime = this._initRealtimeClient($e({
            headers: this.headers,
            accessToken: this._getAccessToken.bind(this)
        }, g.realtime)),
        this.accessToken && this.accessToken().then(v => this.realtime.setAuth(v)).catch(v => console.warn("Failed to set initial Realtime auth token:", v)),
        this.rest = new Wy(new URL("rest/v1",d).href,{
            headers: this.headers,
            schema: g.db.schema,
            fetch: this.fetch
        }),
        this.storage = new Ip(this.storageUrl.href,this.headers,this.fetch,i?.storage),
        g.accessToken || this._listenForAuthEvents()
    }
    get functions() {
        return new Jy(this.functionsUrl.href,{
            headers: this.headers,
            customFetch: this.fetch
        })
    }
    from(r) {
        return this.rest.from(r)
    }
    schema(r) {
        return this.rest.schema(r)
    }
    rpc(r, n={}, i={
        head: !1,
        get: !1,
        count: void 0
    }) {
        return this.rest.rpc(r, n, i)
    }
    channel(r, n={
        config: {}
    }) {
        return this.realtime.channel(r, n)
    }
    getChannels() {
        return this.realtime.getChannels()
    }
    removeChannel(r) {
        return this.realtime.removeChannel(r)
    }
    removeAllChannels() {
        return this.realtime.removeAllChannels()
    }
    async _getAccessToken() {
        var r = this, n, i;
        if (r.accessToken)
            return await r.accessToken();
        const {data: l} = await r.auth.getSession();
        return (n = (i = l.session) === null || i === void 0 ? void 0 : i.access_token) !== null && n !== void 0 ? n : r.supabaseKey
    }
    _initSupabaseAuthClient({autoRefreshToken: r, persistSession: n, detectSessionInUrl: i, storage: l, userStorage: c, storageKey: d, flowType: f, lock: y, debug: g, throwOnError: p}, v, j) {
        const E = {
            Authorization: `Bearer ${this.supabaseKey}`,
            apikey: `${this.supabaseKey}`
        };
        return new bv({
            url: this.authUrl.href,
            headers: $e($e({}, E), v),
            storageKey: d,
            autoRefreshToken: r,
            persistSession: n,
            detectSessionInUrl: i,
            storage: l,
            userStorage: c,
            flowType: f,
            lock: y,
            debug: g,
            throwOnError: p,
            fetch: j,
            hasCustomAuthorizationHeader: Object.keys(this.headers).some(_ => _.toLowerCase() === "authorization")
        })
    }
    _initRealtimeClient(r) {
        return new gp(this.realtimeUrl.href,$e($e({}, r), {}, {
            params: $e($e({}, {
                apikey: this.supabaseKey
            }), r?.params)
        }))
    }
    _listenForAuthEvents() {
        return this.auth.onAuthStateChange( (r, n) => {
            this._handleTokenChanged(r, "CLIENT", n?.access_token)
        }
        )
    }
    _handleTokenChanged(r, n, i) {
        (r === "TOKEN_REFRESHED" || r === "SIGNED_IN") && this.changedAccessToken !== i ? (this.changedAccessToken = i,
        this.realtime.setAuth(i)) : r === "SIGNED_OUT" && (this.realtime.setAuth(),
        n == "STORAGE" && this.auth.signOut(),
        this.changedAccessToken = void 0)
    }
}
;
const xv = (r, n, i) => new vv(r,n,i);
function _v() {
    if (typeof window < "u" || typeof process > "u")
        return !1;
    const r = process.version;
    if (r == null)
        return !1;
    const n = r.match(/^v(\d+)\./);
    return n ? parseInt(n[1], 10) <= 18 : !1
}
_v() && console.warn("⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217");
const wv = "https://cggnqaymruqodczsucpc.supabase.co"
  , Sv = "sb_publishable_wKbBqtK2tWU9X7d-TicX1g_jShixD25"
  , Ke = xv(wv, Sv)
  , Ev = async r => {
    try {
        const {data: n, error: i} = await Ke.from("requests").insert([{
            device_id: r.deviceId,
            badge_number: r.badgeNumber,
            name: r.name,
            game_id: r.gameId,
            discord: r.discord,
            rank: r.rank,
            password: r.password,
            status: "pending",
            created_at: new Date().toISOString()
        }]).select();
        if (i)
            throw i;
        return {
            success: !0,
            id: n[0]?.id
        }
    } catch (n) {
        return console.error("Error adding request:", n),
        {
            success: !1,
            error: n.message
        }
    }
}
  , km = async () => {
    try {
        const {data: r, error: n} = await Ke.from("requests").select("*").eq("status", "pending").order("created_at", {
            ascending: !1
        });
        if (n)
            throw n;
        return (r || []).map(i => ({
            id: i.id,
            deviceId: i.device_id,
            badgeNumber: i.badge_number,
            name: i.name,
            gameId: i.game_id,
            discord: i.discord,
            rank: i.rank,
            password: i.password,
            status: i.status,
            createdAt: i.created_at
        }))
    } catch (r) {
        return console.error("Error getting requests:", r),
        []
    }
}
  , Tv = r => {
    km().then(r);
    const n = Ke.channel("requests-channel").on("postgres_changes", {
        event: "*",
        schema: "public",
        table: "requests"
    }, () => {
        km().then(r)
    }
    ).subscribe();
    return () => {
        Ke.removeChannel(n)
    }
}
  , Dm = async (r, n) => {
    try {
        const {error: i} = await Ke.from("requests").update({
            status: n
        }).eq("id", r);
        if (i)
            throw i;
        return {
            success: !0
        }
    } catch (i) {
        return console.error("Error updating request:", i),
        {
            success: !1,
            error: i.message
        }
    }
}
  , Um = async r => {
    try {
        const {data: n, error: i} = await Ke.from("requests").select("id").eq("device_id", r).limit(1);
        if (i)
            throw i;
        return n && n.length > 0
    } catch (n) {
        return console.error("Error checking device:", n),
        !1
    }
}
  , jv = async r => {
    try {
        const {data: n, error: i} = await Ke.from("requests").select("id").eq("badge_number", r).eq("status", "pending").limit(1);
        if (i)
            throw i;
        return n && n.length > 0
    } catch (n) {
        return console.error("Error checking badge:", n),
        !1
    }
}
  , zm = async r => {
    try {
        const {data: n, error: i} = await Ke.from("officers").insert([{
            badge_number: r.badgeNumber,
            password: r.password,
            name: r.name,
            rank: r.rank,
            game_id: r.gameId || null,
            discord: r.discord || null,
            approved_at: new Date().toISOString()
        }]).select();
        if (i)
            throw i;
        return {
            success: !0,
            id: n[0]?.id
        }
    } catch (n) {
        return console.error("Error adding officer:", n),
        {
            success: !1,
            error: n.message
        }
    }
}
  , $i = async () => {
    try {
        const {data: r, error: n} = await Ke.from("officers").select("*").order("approved_at", {
            ascending: !1
        });
        if (n)
            throw n;
        return (r || []).map(i => ({
            id: i.id,
            badgeNumber: i.badge_number,
            password: i.password,
            name: i.name,
            rank: i.rank,
            gameId: i.game_id,
            discord: i.discord,
            approvedAt: i.approved_at,
            isOnDuty: i.is_on_duty || !1
        }))
    } catch (r) {
        return console.error("Error getting officers:", r),
        []
    }
}
  , rg = r => {
    $i().then(r);
    const n = Ke.channel("officers-status-channel").on("postgres_changes", {
        event: "INSERT",
        schema: "public",
        table: "officers"
    }, i => {
        console.log("Officer INSERT:", i),
        $i().then(r)
    }
    ).on("postgres_changes", {
        event: "UPDATE",
        schema: "public",
        table: "officers"
    }, i => {
        console.log("Officer UPDATE:", i),
        $i().then(r)
    }
    ).on("postgres_changes", {
        event: "DELETE",
        schema: "public",
        table: "officers"
    }, i => {
        console.log("Officer DELETE:", i),
        $i().then(r)
    }
    ).subscribe(i => {
        console.log("Supabase subscription status:", i)
    }
    );
    return () => {
        Ke.removeChannel(n)
    }
}
  , Nv = async (r, n) => {
    try {
        const {error: i} = await Ke.from("officers").update({
            badge_number: n.badgeNumber,
            name: n.name,
            rank: n.rank,
            game_id: n.gameId || null,
            discord: n.discord || null,
            ...n.password && {
                password: n.password
            }
        }).eq("id", r);
        if (i)
            throw i;
        return {
            success: !0
        }
    } catch (i) {
        return console.error("Error updating officer:", i),
        {
            success: !1,
            error: i.message
        }
    }
}
  , Av = async r => {
    try {
        const {error: n} = await Ke.from("officers").delete().eq("id", r);
        if (n)
            throw n;
        return {
            success: !0
        }
    } catch (n) {
        return console.error("Error deleting officer:", n),
        {
            success: !1,
            error: n.message
        }
    }
}
  , ig = async r => {
    try {
        const {data: n, error: i} = await Ke.from("officers").select("id").eq("badge_number", r).limit(1);
        if (i)
            throw i;
        return n && n.length > 0
    } catch (n) {
        return console.error("Error checking badge:", n),
        !1
    }
}
  , Ov = async (r, n) => {
    try {
        const {data: i, error: l} = await Ke.from("officers").select("*").eq("badge_number", r).eq("password", n).limit(1);
        if (l)
            throw l;
        if (!i || i.length === 0)
            return null;
        const c = i[0];
        return {
            id: c.id,
            badgeNumber: c.badge_number,
            password: c.password,
            name: c.name,
            rank: c.rank,
            gameId: c.game_id,
            discord: c.discord,
            approvedAt: c.approved_at,
            isOnDuty: c.is_on_duty || !1
        }
    } catch (i) {
        return console.error("Error finding officer:", i),
        null
    }
}
  , Mm = async (r, n) => {
    try {
        const {error: i} = await Ke.from("officers").update({
            is_on_duty: n
        }).eq("id", r);
        if (i)
            throw i;
        return {
            success: !0
        }
    } catch (i) {
        return console.error("Error updating duty status:", i),
        {
            success: !1,
            error: i.message
        }
    }
}
  , Rv = async r => {
    try {
        const n = new Date(Date.now() - 3e5).toISOString();
        await Ke.from("messages").delete().lt("created_at", n);
        const {error: i} = await Ke.from("messages").insert([{
            content: r.content,
            sender_id: r.senderId,
            sender_name: r.senderName,
            sender_badge: r.senderBadge,
            sender_rank: r.senderRank,
            is_system: r.isSystem || !1,
            created_at: new Date().toISOString()
        }]);
        if (i)
            throw i;
        return {
            success: !0
        }
    } catch (n) {
        return console.error("Error sending message:", n),
        {
            success: !1,
            error: n.message
        }
    }
}
  , qm = async () => {
    try {
        const r = new Date(Date.now() - 3e5).toISOString()
          , {data: n, error: i} = await Ke.from("messages").select("*").gte("created_at", r).order("created_at", {
            ascending: !0
        });
        if (i)
            throw i;
        return (n || []).map(l => ({
            id: l.id,
            content: l.content,
            senderId: l.sender_id,
            senderName: l.sender_name,
            senderBadge: l.sender_badge,
            senderRank: l.sender_rank,
            isSystem: l.is_system,
            createdAt: l.created_at
        }))
    } catch (r) {
        return console.error("Error getting messages:", r),
        []
    }
}
  , Cv = r => {
    qm().then(r);
    const n = Ke.channel("public:messages").on("postgres_changes", {
        event: "INSERT",
        schema: "public",
        table: "messages"
    }, i => {
        console.log("New Message:", i),
        qm().then(r)
    }
    ).subscribe();
    return () => {
        Ke.removeChannel(n)
    }
}
  , Bm = () => {
    let r = localStorage.getItem("fib_device_id");
    return r || (r = "device_" + Date.now() + "_" + Math.random().toString(36).substring(2, 15),
    localStorage.setItem("fib_device_id", r)),
    r
}
  , $u = [{
    value: "Director",
    label: "30: Director"
}, {
    value: "Deputy Director",
    label: "29: Deputy Director"
}, {
    value: "Assistant Director",
    label: "28: Assistant Director"
}, {
    value: "Chief of Staff",
    label: "27: Chief of Staff"
}, {
    value: "Head of Department",
    label: "26: Head of Department"
}, {
    value: "Deputy Head of Department",
    label: "25: Deputy Head of Department"
}, {
    value: "00 Agent",
    label: "24: 00 Agent"
}, {
    value: "Supervisor",
    label: "23: Supervisor"
}, {
    value: "Executive Agent",
    label: "22: Executive Agent"
}, {
    value: "Secret Agent",
    label: "21: Secret Agent"
}, {
    value: "Black Ops Agent 3",
    label: "20: Black Ops Agent 3"
}, {
    value: "Black Ops Agent 2",
    label: "19: Black Ops Agent 2"
}, {
    value: "Black Ops Agent 1",
    label: "18: Black Ops Agent 1"
}, {
    value: "Elite Senior Special Agent 3",
    label: "17: Elite Senior Special Agent 3"
}, {
    value: "Elite Senior Special Agent 2",
    label: "16: Elite Senior Special Agent 2"
}, {
    value: "Elite Senior Special Agent 1",
    label: "15: Elite Senior Special Agent 1"
}, {
    value: "Elite Agent 3",
    label: "14: Elite Agent 3"
}, {
    value: "Elite Agent 2",
    label: "13: Elite Agent 2"
}, {
    value: "Elite Agent 1",
    label: "12: Elite Agent 1"
}, {
    value: "Senior Special Agent 3",
    label: "11: Senior Special Agent 3"
}, {
    value: "Senior Special Agent 2",
    label: "10: Senior Special Agent 2"
}, {
    value: "Senior Special Agent 1",
    label: "9: Senior Special Agent 1"
}, {
    value: "Special Agent 3",
    label: "8: Special Agent 3"
}, {
    value: "Special Agent 2",
    label: "7: Special Agent 2"
}, {
    value: "Special Agent 1",
    label: "6: Special Agent 1"
}, {
    value: "Field Agent 3",
    label: "5: Field Agent 3"
}, {
    value: "Field Agent 2",
    label: "4: Field Agent 2"
}, {
    value: "Field Agent 1",
    label: "3: Field Agent 1"
}, {
    value: "Jr. Agent",
    label: "2: Jr. Agent"
}];
function kv({onLogin: r, officers: n, onAdminAccess: i}) {
    const [l,c] = K.useState("login")
      , [d,f] = K.useState("")
      , [y,g] = K.useState("")
      , [p,v] = K.useState("")
      , [j,E] = K.useState("")
      , [_,T] = K.useState(!1)
      , [C,L] = K.useState(!1)
      , [U,Y] = K.useState("")
      , [G,z] = K.useState("")
      , [V,I] = K.useState("")
      , [X,oe] = K.useState("")
      , [ge,ce] = K.useState("")
      , [Te,q] = K.useState("");
    K.useEffect( () => {
        (async () => {
            const D = Bm()
              , J = await Um(D);
            T(J)
        }
        )()
    }
    , []);
    const _e = async de => {
        de.preventDefault(),
        v(""),
        L(!0);
        try {
            if (d === "admin" && y === "fibadmin2024") {
                i();
                return
            }
            const D = await Ov(d, y)
              , J = n?.find(te => te.badgeNumber === d && te.password === y);
            D ? r(D) : J ? r(J) : v("Invalid badge number or password")
        } catch (D) {
            v("Login failed. Please try again."),
            console.error(D)
        } finally {
            L(!1)
        }
    }
      , Ue = async de => {
        de.preventDefault(),
        v(""),
        E(""),
        L(!0);
        try {
            if (!U || !G || !V || !X || !ge || !Te) {
                v("All fields are required");
                return
            }
            const D = Bm();
            if (await Um(D)) {
                v("You have already submitted a request from this device. You can only request once.");
                return
            }
            if (await jv(U)) {
                v("A request with this badge number already exists");
                return
            }
            const Se = await ig(U)
              , je = n?.some($ => $.badgeNumber === U);
            if (Se || je) {
                v("This badge number is already registered");
                return
            }
            (await Ev({
                deviceId: D,
                badgeNumber: U,
                name: G,
                gameId: V,
                discord: X,
                rank: ge,
                password: Te
            })).success ? (T(!0),
            E("Request submitted! An admin will contact you on Discord to confirm."),
            Y(""),
            z(""),
            I(""),
            oe(""),
            ce(""),
            q("")) : v("Failed to submit request. Please try again.")
        } catch (D) {
            v("An error occurred. Please try again."),
            console.error(D)
        } finally {
            L(!1)
        }
    }
    ;
    return h.jsxs("div", {
        className: "min-h-screen bg-[#0a0f1a] flex items-center justify-center p-4 relative",
        children: [h.jsx(Ku, {}), h.jsxs("div", {
            className: "w-full max-w-md relative z-10",
            children: [h.jsxs("div", {
                className: "text-center mb-8",
                children: [h.jsx("img", {
                    src: "./fib.webp",
                    alt: "FIB Logo",
                    className: "w-32 h-32 mx-auto mb-4 rounded-xl shadow-lg"
                }), h.jsx("h1", {
                    className: "text-2xl font-bold uppercase tracking-wider text-[#F0B20D]",
                    children: "FIB Portal"
                }), h.jsx("p", {
                    className: "text-sm text-gray-500 uppercase tracking-wide mt-1",
                    children: "Federal Tactical Operations"
                })]
            }), h.jsxs("div", {
                className: "flex gap-2 mb-6",
                children: [h.jsx("button", {
                    onClick: () => {
                        c("login"),
                        v(""),
                        E("")
                    }
                    ,
                    className: `flex-1 py-2 rounded-lg font-medium transition-all ${l === "login" ? "bg-amber-500 text-black" : "bg-[#1a2332] text-gray-400 hover:text-gray-200 border border-gray-700"}`,
                    children: "🔐 Login"
                }), h.jsx("button", {
                    onClick: () => {
                        c("request"),
                        v(""),
                        E("")
                    }
                    ,
                    className: `flex-1 py-2 rounded-lg font-medium transition-all ${l === "request" ? "bg-amber-500 text-black" : "bg-[#1a2332] text-gray-400 hover:text-gray-200 border border-gray-700"}`,
                    children: "📝 Request Access"
                })]
            }), l === "login" && h.jsxs("form", {
                onSubmit: _e,
                className: "bg-[#1a2332] rounded-xl p-6 border border-gray-700 tab-content",
                children: [h.jsx("h2", {
                    className: "text-lg font-bold text-gray-200 mb-6 text-center uppercase tracking-wide",
                    children: "Officer Login"
                }), p && h.jsx("div", {
                    className: "mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-sm text-center",
                    children: p
                }), h.jsxs("div", {
                    className: "space-y-4",
                    children: [h.jsxs("div", {
                        children: [h.jsx("label", {
                            className: "block text-xs text-gray-500 uppercase tracking-wide mb-2",
                            children: "Badge Number"
                        }), h.jsx("input", {
                            type: "text",
                            value: d,
                            onChange: de => f(de.target.value),
                            placeholder: "Enter badge number...",
                            className: "w-full px-4 py-3 bg-[#2a3442] border border-gray-600 rounded-lg text-gray-200 placeholder-gray-500 focus:border-amber-500 focus:outline-none",
                            required: !0
                        })]
                    }), h.jsxs("div", {
                        children: [h.jsx("label", {
                            className: "block text-xs text-gray-500 uppercase tracking-wide mb-2",
                            children: "Password"
                        }), h.jsx("input", {
                            type: "password",
                            value: y,
                            onChange: de => g(de.target.value),
                            placeholder: "Enter password...",
                            className: "w-full px-4 py-3 bg-[#2a3442] border border-gray-600 rounded-lg text-gray-200 placeholder-gray-500 focus:border-amber-500 focus:outline-none",
                            required: !0
                        })]
                    }), h.jsx("button", {
                        type: "submit",
                        className: "btn-primary btn-ripple w-full py-3 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-lg uppercase tracking-wide transition-colors mt-2",
                        children: "Login"
                    })]
                })]
            }), l === "request" && h.jsxs("div", {
                className: "bg-[#1a2332] rounded-xl p-6 border border-gray-700 tab-content",
                children: [h.jsx("h2", {
                    className: "text-lg font-bold text-gray-200 mb-2 text-center uppercase tracking-wide",
                    children: "Request Portal Access"
                }), h.jsx("div", {
                    className: "mb-4 p-3 bg-amber-500/10 border border-amber-500/30 rounded-lg",
                    children: h.jsxs("p", {
                        className: "text-amber-400 text-xs text-center",
                        children: ["⚠️ ", h.jsx("strong", {
                            children: "You can only submit ONE request."
                        }), " Make sure all information is correct.", h.jsx("br", {}), "An admin will contact you on Discord to confirm your request."]
                    })
                }), _ ? h.jsxs("div", {
                    className: "text-center py-8",
                    children: [h.jsx("p", {
                        className: "text-4xl mb-4",
                        children: "✅"
                    }), h.jsx("p", {
                        className: "text-green-400 font-bold text-lg",
                        children: "Request Submitted"
                    }), h.jsxs("p", {
                        className: "text-gray-500 text-sm mt-2",
                        children: ["You have already submitted a request from this device.", h.jsx("br", {}), "An admin will contact you on Discord.", h.jsx("br", {}), h.jsx("br", {}), h.jsx("span", {
                            className: "text-gray-600",
                            children: "You cannot submit another request."
                        })]
                    })]
                }) : h.jsxs("form", {
                    onSubmit: Ue,
                    children: [p && h.jsx("div", {
                        className: "mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-sm text-center",
                        children: p
                    }), j && h.jsx("div", {
                        className: "mb-4 p-3 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-sm text-center",
                        children: j
                    }), h.jsxs("div", {
                        className: "space-y-4",
                        children: [h.jsxs("div", {
                            className: "grid grid-cols-2 gap-4",
                            children: [h.jsxs("div", {
                                children: [h.jsx("label", {
                                    className: "block text-xs text-gray-500 uppercase tracking-wide mb-2",
                                    children: "Badge Number"
                                }), h.jsx("input", {
                                    type: "text",
                                    value: U,
                                    onChange: de => Y(de.target.value),
                                    placeholder: "e.g. 123",
                                    className: "w-full px-4 py-3 bg-[#2a3442] border border-gray-600 rounded-lg text-gray-200 placeholder-gray-500 focus:border-amber-500 focus:outline-none",
                                    required: !0
                                })]
                            }), h.jsxs("div", {
                                children: [h.jsx("label", {
                                    className: "block text-xs text-gray-500 uppercase tracking-wide mb-2",
                                    children: "In-Game ID"
                                }), h.jsx("input", {
                                    type: "text",
                                    value: V,
                                    onChange: de => I(de.target.value),
                                    placeholder: "e.g. 12345",
                                    className: "w-full px-4 py-3 bg-[#2a3442] border border-gray-600 rounded-lg text-gray-200 placeholder-gray-500 focus:border-amber-500 focus:outline-none",
                                    required: !0
                                })]
                            })]
                        }), h.jsxs("div", {
                            children: [h.jsx("label", {
                                className: "block text-xs text-gray-500 uppercase tracking-wide mb-2",
                                children: "Full Name (RP Name)"
                            }), h.jsx("input", {
                                type: "text",
                                value: G,
                                onChange: de => z(de.target.value),
                                placeholder: "e.g. John Smith",
                                className: "w-full px-4 py-3 bg-[#2a3442] border border-gray-600 rounded-lg text-gray-200 placeholder-gray-500 focus:border-amber-500 focus:outline-none",
                                required: !0
                            })]
                        }), h.jsxs("div", {
                            children: [h.jsx("label", {
                                className: "block text-xs text-gray-500 uppercase tracking-wide mb-2",
                                children: "Discord Username"
                            }), h.jsx("input", {
                                type: "text",
                                value: X,
                                onChange: de => oe(de.target.value),
                                placeholder: "e.g. username or username#1234",
                                className: "w-full px-4 py-3 bg-[#2a3442] border border-gray-600 rounded-lg text-gray-200 placeholder-gray-500 focus:border-amber-500 focus:outline-none",
                                required: !0
                            })]
                        }), h.jsxs("div", {
                            children: [h.jsx("label", {
                                className: "block text-xs text-gray-500 uppercase tracking-wide mb-2",
                                children: "Rank"
                            }), h.jsxs("select", {
                                value: ge,
                                onChange: de => ce(de.target.value),
                                className: "w-full px-4 py-3 bg-[#2a3442] border border-gray-600 rounded-lg text-gray-200 focus:border-amber-500 focus:outline-none",
                                required: !0,
                                children: [h.jsx("option", {
                                    value: "",
                                    children: "Select your rank..."
                                }), $u.map(de => h.jsx("option", {
                                    value: de.value,
                                    children: de.label
                                }, de.value))]
                            })]
                        }), h.jsxs("div", {
                            children: [h.jsx("label", {
                                className: "block text-xs text-gray-500 uppercase tracking-wide mb-2",
                                children: "Choose Password"
                            }), h.jsx("input", {
                                type: "password",
                                value: Te,
                                onChange: de => q(de.target.value),
                                placeholder: "Create a password...",
                                className: "w-full px-4 py-3 bg-[#2a3442] border border-gray-600 rounded-lg text-gray-200 placeholder-gray-500 focus:border-amber-500 focus:outline-none",
                                required: !0
                            })]
                        }), h.jsx("button", {
                            type: "submit",
                            className: "btn-success btn-ripple w-full py-3 bg-green-500 hover:bg-green-400 text-black font-bold rounded-lg uppercase tracking-wide transition-colors mt-2",
                            children: "Submit Request"
                        })]
                    })]
                })]
            }), h.jsx("p", {
                className: "text-center text-gray-600 text-xs mt-4",
                children: "Federal Investigation Bureau © 2026 | Made by Aymen"
            })]
        })]
    })
}
function Dv({onLogout: r}) {
    const [n,i] = K.useState([])
      , [l,c] = K.useState([])
      , [d,f] = K.useState("requests")
      , [y,g] = K.useState(null)
      , [p,v] = K.useState(null)
      , [j,E] = K.useState(null)
      , [_,T] = K.useState(null)
      , [C,L] = K.useState(!1)
      , [U,Y] = K.useState({
        badgeNumber: "",
        name: "",
        rank: "",
        gameId: "",
        discord: "",
        password: ""
    })
      , [G,z] = K.useState(!1);
    K.useEffect( () => {
        const q = Tv(Ue => {
            i(Ue)
        }
        )
          , _e = rg(Ue => {
            c(Ue)
        }
        );
        return () => {
            q(),
            _e()
        }
    }
    , []);
    const V = (q, _e="success") => {
        g({
            message: q,
            type: _e
        }),
        setTimeout( () => g(null), 3e3)
    }
      , I = async q => {
        z(!0);
        try {
            const _e = {
                badgeNumber: q.badgeNumber,
                password: q.password,
                name: q.name,
                rank: q.rank,
                gameId: q.gameId,
                discord: q.discord || ""
            }
              , Ue = await zm(_e);
            if (!Ue.success)
                throw new Error(Ue.error);
            const de = await Dm(q.id, "approved");
            if (!de.success)
                throw new Error(de.error);
            Ou(),
            V(`✓ Approved: ${q.name} (Badge #${q.badgeNumber})`)
        } catch (_e) {
            console.error("Error approving request:", _e),
            V(`Failed: ${_e.message}`, "error")
        } finally {
            z(!1)
        }
    }
      , X = async q => {
        z(!0);
        try {
            const _e = await Dm(q.id, "rejected");
            if (!_e.success)
                throw new Error(_e.error);
            V(`✗ Rejected: ${q.name}`, "error")
        } catch (_e) {
            console.error("Error rejecting request:", _e),
            V(`Failed: ${_e.message}`, "error")
        } finally {
            z(!1)
        }
    }
      , oe = async () => {
        if (_) {
            z(!0);
            try {
                const q = await Av(_);
                if (!q.success)
                    throw new Error(q.error);
                V(`Officer #${j} removed`),
                E(null),
                T(null)
            } catch (q) {
                console.error("Error deleting officer:", q),
                V(`Failed: ${q.message}`, "error")
            } finally {
                z(!1)
            }
        }
    }
      , ge = q => {
        v({
            ...q
        })
    }
      , ce = async () => {
        z(!0);
        try {
            const {id: q, ..._e} = p
              , Ue = await Nv(q, _e);
            if (!Ue.success)
                throw new Error(Ue.error);
            v(null),
            V(`Officer #${p.badgeNumber} updated`)
        } catch (q) {
            console.error("Error updating officer:", q),
            V(`Failed: ${q.message}`, "error")
        } finally {
            z(!1)
        }
    }
      , Te = async () => {
        if (!U.badgeNumber || !U.name || !U.rank || !U.password) {
            V("Please fill in all required fields", "error");
            return
        }
        z(!0);
        try {
            if (await ig(U.badgeNumber) || l.some(Ue => Ue.badgeNumber === U.badgeNumber)) {
                V("Badge number already exists", "error");
                return
            }
            const _e = await zm(U);
            if (!_e.success)
                throw new Error(_e.error);
            L(!1),
            Y({
                badgeNumber: "",
                name: "",
                rank: "",
                gameId: "",
                discord: "",
                password: ""
            }),
            Ou(),
            V(`✓ Officer #${U.badgeNumber} added`)
        } catch (q) {
            console.error("Error adding officer:", q),
            V(`Failed: ${q.message}`, "error")
        } finally {
            z(!1)
        }
    }
    ;
    return h.jsxs("div", {
        className: "min-h-screen bg-[#0a0f1a] relative",
        children: [h.jsx(Ku, {}), h.jsx("header", {
            className: "bg-[#1a2332] border-b border-gray-700 sticky top-0 z-50",
            children: h.jsxs("div", {
                className: "max-w-7xl mx-auto px-4 py-3 flex items-center justify-between",
                children: [h.jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [h.jsx("img", {
                        src: "./fib.webp",
                        alt: "FIB Logo",
                        className: "w-10 h-10 rounded-lg shadow-lg object-cover"
                    }), h.jsxs("div", {
                        children: [h.jsx("h1", {
                            className: "text-lg font-bold uppercase tracking-wider text-gray-100",
                            children: "Admin Panel"
                        }), h.jsx("p", {
                            className: "text-xs text-gray-500 uppercase tracking-wide",
                            children: "Officer Management System"
                        })]
                    })]
                }), h.jsx("button", {
                    onClick: r,
                    className: "btn-danger btn-ripple px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg text-sm font-medium transition-colors border border-red-500/30",
                    children: "Logout"
                })]
            })
        }), y && h.jsx("div", {
            className: "fixed top-20 left-1/2 -translate-x-1/2 z-50 toast-enter",
            children: h.jsx("div", {
                className: `px - 4 py - 2 font - medium rounded - lg shadow - lg ${y.type === "error" ? "bg-red-500/90 text-white" : "bg-green-500/90 text-black"} `,
                children: y.message
            })
        }), h.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 py-6",
            children: [h.jsxs("div", {
                className: "flex gap-2 mb-6",
                children: [h.jsxs("button", {
                    onClick: () => f("requests"),
                    className: `px - 6 py - 3 rounded - lg font - medium transition - all flex items - center gap - 2 ${d === "requests" ? "bg-amber-500 text-black" : "bg-[#1a2332] text-gray-400 hover:text-gray-200 border border-gray-700"} `,
                    children: ["📋 Pending Requests", n.length > 0 && h.jsx("span", {
                        className: "px-2 py-0.5 bg-red-500 text-white text-xs rounded-full",
                        children: n.length
                    })]
                }), h.jsxs("button", {
                    onClick: () => f("officers"),
                    className: `px - 6 py - 3 rounded - lg font - medium transition - all flex items - center gap - 2 ${d === "officers" ? "bg-amber-500 text-black" : "bg-[#1a2332] text-gray-400 hover:text-gray-200 border border-gray-700"} `,
                    children: ["👮 Registered Officers (", l.length, ")"]
                })]
            }), d === "requests" && h.jsx("div", {
                className: "space-y-4 tab-content",
                children: n.length === 0 ? h.jsxs("div", {
                    className: "bg-[#1a2332] rounded-xl p-12 border border-gray-700 text-center",
                    children: [h.jsx("p", {
                        className: "text-4xl mb-4",
                        children: "📭"
                    }), h.jsx("p", {
                        className: "text-gray-400 text-lg",
                        children: "No pending requests"
                    }), h.jsx("p", {
                        className: "text-gray-600 text-sm mt-1",
                        children: "New officer requests will appear here"
                    })]
                }) : n.map(q => h.jsx("div", {
                    className: "bg-[#1a2332] rounded-xl p-6 border border-gray-700",
                    children: h.jsxs("div", {
                        className: "flex flex-col md:flex-row md:items-start justify-between gap-4",
                        children: [h.jsxs("div", {
                            className: "flex-1",
                            children: [h.jsxs("div", {
                                className: "flex flex-wrap items-center gap-2 mb-2",
                                children: [h.jsxs("span", {
                                    className: "px-2 py-1 bg-amber-500/20 text-amber-400 rounded text-sm font-bold",
                                    children: ["Badge #", q.badgeNumber]
                                }), h.jsxs("span", {
                                    className: "px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-sm",
                                    children: ["ID: ", q.gameId]
                                }), h.jsx("span", {
                                    className: "px-2 py-1 bg-purple-500/20 text-purple-400 rounded text-sm",
                                    children: q.rank
                                })]
                            }), h.jsx("p", {
                                className: "text-lg font-bold text-gray-200",
                                children: q.name
                            }), q.discord && h.jsxs("p", {
                                className: "text-sm text-indigo-400 mt-1",
                                children: ["💬 Discord: ", h.jsx("span", {
                                    className: "font-mono",
                                    children: q.discord
                                })]
                            }), h.jsxs("p", {
                                className: "text-xs text-gray-500 mt-1",
                                children: ["Requested: ", new Date(q.requestedAt).toLocaleString()]
                            })]
                        }), h.jsxs("div", {
                            className: "flex gap-2",
                            children: [h.jsx("button", {
                                onClick: () => I(q),
                                className: "btn-success btn-ripple px-6 py-2 bg-green-500 hover:bg-green-400 text-black font-bold rounded-lg transition-colors",
                                children: "✓ Approve"
                            }), h.jsx("button", {
                                onClick: () => X(q),
                                className: "btn-danger btn-ripple px-6 py-2 bg-red-500 hover:bg-red-400 text-white font-bold rounded-lg transition-colors",
                                children: "✗ Reject"
                            })]
                        })]
                    })
                }, q.id))
            }), d === "officers" && h.jsxs("div", {
                className: "space-y-4 tab-content",
                children: [h.jsx("div", {
                    className: "flex justify-end",
                    children: h.jsx("button", {
                        type: "button",
                        onClick: () => L(!0),
                        className: "btn-success btn-ripple px-6 py-2 bg-green-500 hover:bg-green-400 text-black font-bold rounded-lg transition-colors flex items-center gap-2",
                        children: "➕ Add Officer"
                    })
                }), l.length === 0 ? h.jsxs("div", {
                    className: "bg-[#1a2332] rounded-xl p-12 border border-gray-700 text-center",
                    children: [h.jsx("p", {
                        className: "text-4xl mb-4",
                        children: "👮"
                    }), h.jsx("p", {
                        className: "text-gray-400 text-lg",
                        children: "No registered officers"
                    }), h.jsx("p", {
                        className: "text-gray-600 text-sm mt-1",
                        children: "Approved officers will appear here"
                    })]
                }) : h.jsx("div", {
                    className: "bg-[#1a2332] rounded-xl border border-gray-700 overflow-hidden overflow-x-auto",
                    children: h.jsxs("table", {
                        className: "w-full min-w-[700px]",
                        children: [h.jsx("thead", {
                            className: "bg-[#2a3442]",
                            children: h.jsxs("tr", {
                                children: [h.jsx("th", {
                                    className: "px-4 py-3 text-left text-xs font-bold text-gray-400 uppercase",
                                    children: "Badge"
                                }), h.jsx("th", {
                                    className: "px-4 py-3 text-left text-xs font-bold text-gray-400 uppercase",
                                    children: "Name"
                                }), h.jsx("th", {
                                    className: "px-4 py-3 text-left text-xs font-bold text-gray-400 uppercase",
                                    children: "Rank"
                                }), h.jsx("th", {
                                    className: "px-4 py-3 text-left text-xs font-bold text-gray-400 uppercase",
                                    children: "Game ID"
                                }), h.jsx("th", {
                                    className: "px-4 py-3 text-left text-xs font-bold text-gray-400 uppercase",
                                    children: "Discord"
                                }), h.jsx("th", {
                                    className: "px-4 py-3 text-right text-xs font-bold text-gray-400 uppercase",
                                    children: "Actions"
                                })]
                            })
                        }), h.jsx("tbody", {
                            className: "divide-y divide-gray-700",
                            children: l.map(q => h.jsxs("tr", {
                                className: "hover:bg-[#2a3442]/50",
                                children: [h.jsx("td", {
                                    className: "px-4 py-3",
                                    children: h.jsxs("span", {
                                        className: "font-mono text-amber-500 font-bold",
                                        children: ["#", q.badgeNumber]
                                    })
                                }), h.jsx("td", {
                                    className: "px-4 py-3 text-gray-200",
                                    children: q.name
                                }), h.jsx("td", {
                                    className: "px-4 py-3 text-gray-400",
                                    children: q.rank
                                }), h.jsx("td", {
                                    className: "px-4 py-3 text-gray-500",
                                    children: q.gameId || "N/A"
                                }), h.jsx("td", {
                                    className: "px-4 py-3 text-indigo-400 font-mono text-sm",
                                    children: q.discord || "N/A"
                                }), h.jsxs("td", {
                                    className: "px-4 py-3 text-right",
                                    children: [h.jsx("button", {
                                        type: "button",
                                        onClick: () => ge(q),
                                        className: "px-3 py-1 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 rounded text-sm mr-2 transition-colors",
                                        children: "Edit"
                                    }), h.jsx("button", {
                                        type: "button",
                                        onClick: () => {
                                            E(q.badgeNumber),
                                            T(q.id)
                                        }
                                        ,
                                        className: "px-3 py-1 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded text-sm transition-colors",
                                        children: "Delete"
                                    })]
                                })]
                            }, q.badgeNumber))
                        })]
                    })
                })]
            })]
        }), j && h.jsx("div", {
            className: "fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4",
            children: h.jsxs("div", {
                className: "bg-[#1a2332] rounded-xl p-6 border border-red-500/50 w-full max-w-sm tab-content text-center",
                children: [h.jsx("p", {
                    className: "text-4xl mb-4",
                    children: "⚠️"
                }), h.jsx("h2", {
                    className: "text-lg font-bold text-gray-200 mb-2",
                    children: "Delete Officer?"
                }), h.jsxs("p", {
                    className: "text-gray-400 mb-6",
                    children: ["Are you sure you want to delete officer with badge ", h.jsxs("span", {
                        className: "text-amber-500 font-bold",
                        children: ["#", j]
                    }), "?", h.jsx("br", {}), h.jsx("span", {
                        className: "text-red-400 text-sm",
                        children: "This action cannot be undone."
                    })]
                }), h.jsxs("div", {
                    className: "flex gap-2",
                    children: [h.jsx("button", {
                        type: "button",
                        onClick: oe,
                        disabled: G,
                        className: "btn-danger btn-ripple flex-1 py-2 bg-red-500 hover:bg-red-400 text-white font-bold rounded-lg transition-colors disabled:opacity-50",
                        children: G ? "Deleting..." : "Yes, Delete"
                    }), h.jsx("button", {
                        type: "button",
                        onClick: () => {
                            E(null),
                            T(null)
                        }
                        ,
                        className: "btn-secondary flex-1 py-2 bg-[#2a3442] hover:bg-[#374151] text-gray-300 font-medium rounded-lg transition-colors",
                        children: "Cancel"
                    })]
                })]
            })
        }), p && h.jsx("div", {
            className: "fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4",
            children: h.jsxs("div", {
                className: "bg-[#1a2332] rounded-xl p-6 border border-gray-700 w-full max-w-md tab-content max-h-[90vh] overflow-y-auto",
                children: [h.jsx("h2", {
                    className: "text-lg font-bold text-gray-200 mb-4",
                    children: "Edit Officer"
                }), h.jsxs("div", {
                    className: "space-y-4",
                    children: [h.jsxs("div", {
                        children: [h.jsx("label", {
                            className: "block text-xs text-gray-500 uppercase mb-2",
                            children: "Badge Number"
                        }), h.jsx("input", {
                            type: "text",
                            value: p.badgeNumber,
                            disabled: !0,
                            className: "w-full px-4 py-2 bg-[#2a3442] border border-gray-600 rounded-lg text-gray-400"
                        })]
                    }), h.jsxs("div", {
                        children: [h.jsx("label", {
                            className: "block text-xs text-gray-500 uppercase mb-2",
                            children: "Name"
                        }), h.jsx("input", {
                            type: "text",
                            value: p.name,
                            onChange: q => v({
                                ...p,
                                name: q.target.value
                            }),
                            className: "w-full px-4 py-2 bg-[#2a3442] border border-gray-600 rounded-lg text-gray-200 focus:border-amber-500 focus:outline-none"
                        })]
                    }), h.jsxs("div", {
                        children: [h.jsx("label", {
                            className: "block text-xs text-gray-500 uppercase mb-2",
                            children: "Rank"
                        }), h.jsx("select", {
                            value: p.rank,
                            onChange: q => v({
                                ...p,
                                rank: q.target.value
                            }),
                            className: "w-full px-4 py-2 bg-[#2a3442] border border-gray-600 rounded-lg text-gray-200 focus:border-amber-500 focus:outline-none",
                            children: $u.map(q => h.jsx("option", {
                                value: q.value,
                                children: q.label
                            }, q.value))
                        })]
                    }), h.jsxs("div", {
                        children: [h.jsx("label", {
                            className: "block text-xs text-gray-500 uppercase mb-2",
                            children: "Game ID"
                        }), h.jsx("input", {
                            type: "text",
                            value: p.gameId || "",
                            onChange: q => v({
                                ...p,
                                gameId: q.target.value
                            }),
                            className: "w-full px-4 py-2 bg-[#2a3442] border border-gray-600 rounded-lg text-gray-200 focus:border-amber-500 focus:outline-none"
                        })]
                    }), h.jsxs("div", {
                        children: [h.jsx("label", {
                            className: "block text-xs text-gray-500 uppercase mb-2",
                            children: "Discord Username"
                        }), h.jsx("input", {
                            type: "text",
                            value: p.discord || "",
                            onChange: q => v({
                                ...p,
                                discord: q.target.value
                            }),
                            className: "w-full px-4 py-2 bg-[#2a3442] border border-gray-600 rounded-lg text-gray-200 focus:border-amber-500 focus:outline-none"
                        })]
                    }), h.jsxs("div", {
                        children: [h.jsx("label", {
                            className: "block text-xs text-gray-500 uppercase mb-2",
                            children: "New Password (leave blank to keep)"
                        }), h.jsx("input", {
                            type: "password",
                            placeholder: "Enter new password...",
                            onChange: q => {
                                q.target.value && v({
                                    ...p,
                                    password: q.target.value
                                })
                            }
                            ,
                            className: "w-full px-4 py-2 bg-[#2a3442] border border-gray-600 rounded-lg text-gray-200 placeholder-gray-500 focus:border-amber-500 focus:outline-none"
                        })]
                    })]
                }), h.jsxs("div", {
                    className: "flex gap-2 mt-6",
                    children: [h.jsx("button", {
                        type: "button",
                        onClick: ce,
                        className: "btn-success btn-ripple flex-1 py-2 bg-green-500 hover:bg-green-400 text-black font-bold rounded-lg transition-colors",
                        children: "Save Changes"
                    }), h.jsx("button", {
                        type: "button",
                        onClick: () => v(null),
                        className: "btn-secondary flex-1 py-2 bg-[#2a3442] hover:bg-[#374151] text-gray-300 font-medium rounded-lg transition-colors",
                        children: "Cancel"
                    })]
                })]
            })
        }), C && h.jsx("div", {
            className: "fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4",
            children: h.jsxs("div", {
                className: "bg-[#1a2332] rounded-xl p-6 border border-green-500/50 w-full max-w-md tab-content max-h-[90vh] overflow-y-auto",
                children: [h.jsx("h2", {
                    className: "text-lg font-bold text-gray-200 mb-4",
                    children: "➕ Add New Officer"
                }), h.jsxs("div", {
                    className: "space-y-4",
                    children: [h.jsxs("div", {
                        className: "grid grid-cols-2 gap-4",
                        children: [h.jsxs("div", {
                            children: [h.jsx("label", {
                                className: "block text-xs text-gray-500 uppercase mb-2",
                                children: "Badge Number *"
                            }), h.jsx("input", {
                                type: "text",
                                value: U.badgeNumber,
                                onChange: q => Y({
                                    ...U,
                                    badgeNumber: q.target.value
                                }),
                                placeholder: "e.g. 123",
                                className: "w-full px-4 py-2 bg-[#2a3442] border border-gray-600 rounded-lg text-gray-200 placeholder-gray-500 focus:border-amber-500 focus:outline-none"
                            })]
                        }), h.jsxs("div", {
                            children: [h.jsx("label", {
                                className: "block text-xs text-gray-500 uppercase mb-2",
                                children: "Game ID"
                            }), h.jsx("input", {
                                type: "text",
                                value: U.gameId,
                                onChange: q => Y({
                                    ...U,
                                    gameId: q.target.value
                                }),
                                placeholder: "e.g. 12345",
                                className: "w-full px-4 py-2 bg-[#2a3442] border border-gray-600 rounded-lg text-gray-200 placeholder-gray-500 focus:border-amber-500 focus:outline-none"
                            })]
                        })]
                    }), h.jsxs("div", {
                        children: [h.jsx("label", {
                            className: "block text-xs text-gray-500 uppercase mb-2",
                            children: "Name *"
                        }), h.jsx("input", {
                            type: "text",
                            value: U.name,
                            onChange: q => Y({
                                ...U,
                                name: q.target.value
                            }),
                            placeholder: "Officer's full name",
                            className: "w-full px-4 py-2 bg-[#2a3442] border border-gray-600 rounded-lg text-gray-200 placeholder-gray-500 focus:border-amber-500 focus:outline-none"
                        })]
                    }), h.jsxs("div", {
                        children: [h.jsx("label", {
                            className: "block text-xs text-gray-500 uppercase mb-2",
                            children: "Discord Username"
                        }), h.jsx("input", {
                            type: "text",
                            value: U.discord,
                            onChange: q => Y({
                                ...U,
                                discord: q.target.value
                            }),
                            placeholder: "e.g. username#1234",
                            className: "w-full px-4 py-2 bg-[#2a3442] border border-gray-600 rounded-lg text-gray-200 placeholder-gray-500 focus:border-amber-500 focus:outline-none"
                        })]
                    }), h.jsxs("div", {
                        children: [h.jsx("label", {
                            className: "block text-xs text-gray-500 uppercase mb-2",
                            children: "Rank *"
                        }), h.jsxs("select", {
                            value: U.rank,
                            onChange: q => Y({
                                ...U,
                                rank: q.target.value
                            }),
                            className: "w-full px-4 py-2 bg-[#2a3442] border border-gray-600 rounded-lg text-gray-200 focus:border-amber-500 focus:outline-none",
                            children: [h.jsx("option", {
                                value: "",
                                children: "Select rank..."
                            }), $u.map(q => h.jsx("option", {
                                value: q.value,
                                children: q.label
                            }, q.value))]
                        })]
                    }), h.jsxs("div", {
                        children: [h.jsx("label", {
                            className: "block text-xs text-gray-500 uppercase mb-2",
                            children: "Password *"
                        }), h.jsx("input", {
                            type: "password",
                            value: U.password,
                            onChange: q => Y({
                                ...U,
                                password: q.target.value
                            }),
                            placeholder: "Set officer's password",
                            className: "w-full px-4 py-2 bg-[#2a3442] border border-gray-600 rounded-lg text-gray-200 placeholder-gray-500 focus:border-amber-500 focus:outline-none"
                        })]
                    })]
                }), h.jsxs("div", {
                    className: "flex gap-2 mt-6",
                    children: [h.jsx("button", {
                        type: "button",
                        onClick: Te,
                        className: "btn-success btn-ripple flex-1 py-2 bg-green-500 hover:bg-green-400 text-black font-bold rounded-lg transition-colors",
                        children: "Add Officer"
                    }), h.jsx("button", {
                        type: "button",
                        onClick: () => {
                            L(!1),
                            Y({
                                badgeNumber: "",
                                name: "",
                                rank: "",
                                gameId: "",
                                discord: "",
                                password: ""
                            })
                        }
                        ,
                        className: "btn-secondary flex-1 py-2 bg-[#2a3442] hover:bg-[#374151] text-gray-300 font-medium rounded-lg transition-colors",
                        children: "Cancel"
                    })]
                })]
            })
        })]
    })
}
function Uv({data: r, selectedCharges: n, setSelectedCharges: i}) {
    const [l,c] = K.useState("")
      , [d,f] = K.useState("all")
      , [y,g] = K.useState("")
      , [p,v] = K.useState("city")
      , [j,E] = K.useState(!1)
      , _ = K.useMemo( () => {
        if (!r)
            return [];
        const z = r.penalCode.map(I => ({
            ...I,
            type: "PC"
        }))
          , V = r.trafficCode.map(I => ({
            ...I,
            type: "TC"
        }));
        return [...z, ...V]
    }
    , [r])
      , T = K.useMemo( () => {
        let z = _;
        if (d !== "all" && (z = z.filter(V => V.type === d.toUpperCase())),
        l.trim()) {
            const V = l.toLowerCase();
            z = z.filter(I => I.id.toLowerCase().includes(V) || I.crime.toLowerCase().includes(V) || I.description && I.description.toLowerCase().includes(V) || I.category && I.category.toLowerCase().includes(V))
        }
        return z.slice(0, 50)
    }
    , [_, l, d])
      , C = K.useMemo( () => {
        const z = n.reduce( (X, oe) => X + (oe.fine || 0), 0)
          , V = n.reduce( (X, oe) => X + (oe.stars || 0), 0)
          , I = {
            noBail: n.some(X => X.notes?.toLowerCase().includes("no bail")),
            revokeLicense: n.some(X => X.notes?.toLowerCase().includes("revoke") && (X.notes?.toLowerCase().includes("license") || X.notes?.toLowerCase().includes("licence"))),
            confiscation: n.some(X => X.notes?.toLowerCase().includes("confiscation"))
        };
        return {
            fine: z,
            stars: V,
            flags: I
        }
    }
    , [n])
      , L = z => {
        n.find(V => V.id === z.id) || i([...n, z])
    }
      , U = z => {
        i(n.filter(V => V.id !== z))
    }
      , G = ( () => {
        const z = parseInt(y);
        if (isNaN(z))
            return null;
        const I = (r?.speedLimits || {
            highway: 200,
            outsideCity: 150,
            city: 120,
            specialZone: 60
        })[p]
          , X = z - I;
        if (X <= 0)
            return null;
        let oe = null;
        return X >= 101 ? oe = r?.trafficCode.find(ge => ge.id === "TC 3.1.7") : X >= 61 ? oe = r?.trafficCode.find(ge => ge.id === "TC 3.1.6") : X >= 31 ? oe = r?.trafficCode.find(ge => ge.id === "TC 3.1.5") : X >= 10 && (oe = r?.trafficCode.find(ge => ge.id === "TC 3.1.4")),
        oe ? {
            ...oe,
            over: X,
            limit: I,
            type: "TC"
        } : null
    }
    )();
    return h.jsxs("div", {
        className: "space-y-6 md:mt-14",
        children: [h.jsxs("div", {
            className: "bg-[#1a2332] rounded-xl p-4 border border-gray-700",
            children: [h.jsxs("div", {
                className: "flex flex-wrap items-center justify-between gap-4",
                children: [h.jsxs("div", {
                    className: "flex items-center gap-6",
                    children: [h.jsxs("div", {
                        children: [h.jsx("p", {
                            className: "text-xs text-gray-500 uppercase tracking-wide",
                            children: "Total Fine"
                        }), h.jsxs("p", {
                            className: "text-2xl font-bold text-amber-500",
                            children: ["$", C.fine.toLocaleString()]
                        })]
                    }), h.jsx("div", {
                        className: "w-px h-12 bg-gray-700"
                    }), h.jsxs("div", {
                        children: [h.jsx("p", {
                            className: "text-xs text-gray-500 uppercase tracking-wide",
                            children: "Jail Time"
                        }), h.jsxs("p", {
                            className: "text-2xl font-bold text-gray-100",
                            children: [C.stars > 0 ? "⭐".repeat(Math.min(C.stars, 5)) : "—", C.stars > 5 && h.jsxs("span", {
                                className: "text-sm ml-1",
                                children: ["+", C.stars - 5]
                            })]
                        })]
                    })]
                }), h.jsxs("div", {
                    className: "flex flex-wrap gap-2",
                    children: [C.flags.noBail && h.jsx("span", {
                        className: "badge-pulse px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-xs font-bold uppercase border border-red-500/50",
                        children: "🚫 No Bail"
                    }), C.flags.revokeLicense && h.jsx("span", {
                        className: "badge-pulse px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-xs font-bold uppercase border border-orange-500/50",
                        children: "🪪 Revoke License"
                    }), C.flags.confiscation && h.jsx("span", {
                        className: "badge-pulse px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs font-bold uppercase border border-yellow-500/50",
                        children: "📦 Confiscation"
                    })]
                })]
            }), n.length > 0 && h.jsxs("div", {
                className: "mt-4 pt-4 border-t border-gray-700",
                children: [h.jsxs("p", {
                    className: "text-xs text-gray-500 uppercase tracking-wide mb-2",
                    children: ["Selected Charges (", n.length, ")"]
                }), h.jsx("div", {
                    className: "flex flex-wrap gap-2",
                    children: n.map(z => h.jsxs("div", {
                        className: "group flex items-center bg-[#2a3442] rounded-lg border border-gray-600 overflow-hidden",
                        children: [h.jsxs("button", {
                            onClick: () => {
                                navigator.clipboard.writeText(`${z.id} ${z.crime}`)
                            }
                            ,
                            className: "flex items-center gap-2 px-3 py-1.5 hover:bg-[#374151] transition-colors flex-1 min-w-0 text-left",
                            title: "Copy to clipboard",
                            children: [h.jsx("span", {
                                className: "text-amber-500 font-mono text-xs whitespace-nowrap",
                                children: z.id
                            }), h.jsx("span", {
                                className: "text-gray-300 truncate text-xs",
                                children: z.crime
                            })]
                        }), h.jsx("button", {
                            onClick: () => U(z.id),
                            className: "px-2 py-1.5 border-l border-gray-600 hover:bg-red-500/20 text-gray-500 hover:text-red-400 transition-colors h-full flex items-center justify-center",
                            title: "Remove charge",
                            children: "×"
                        })]
                    }, z.id))
                }), h.jsx("button", {
                    onClick: () => i([]),
                    className: "mt-3 text-xs text-gray-500 hover:text-red-400 transition-colors",
                    children: "Clear all charges"
                })]
            })]
        }), h.jsxs("div", {
            className: "bg-[#1a2332] rounded-xl border border-gray-700 overflow-hidden",
            children: [h.jsxs("button", {
                onClick: () => E(!j),
                className: "w-full px-4 py-3 flex items-center justify-between text-left hover:bg-[#2a3442] transition-colors",
                children: [h.jsx("span", {
                    className: "font-medium text-gray-200",
                    children: "🚗 Speeding Violation Helper"
                }), h.jsx("span", {
                    className: `text-gray-500 transition-transform ${j ? "rotate-180" : ""}`,
                    children: "▼"
                })]
            }), j && h.jsxs("div", {
                className: "px-4 pb-4 border-t border-gray-700",
                children: [h.jsxs("div", {
                    className: "grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4",
                    children: [h.jsxs("div", {
                        children: [h.jsx("label", {
                            className: "block text-xs text-gray-500 uppercase tracking-wide mb-2",
                            children: "Zone Type"
                        }), h.jsxs("select", {
                            value: p,
                            onChange: z => v(z.target.value),
                            className: "w-full px-3 py-2 bg-[#2a3442] border border-gray-600 rounded-lg text-gray-200 focus:border-amber-500 focus:outline-none",
                            children: [h.jsx("option", {
                                value: "highway",
                                children: "Highway (200 km/h)"
                            }), h.jsx("option", {
                                value: "outsideCity",
                                children: "Outside City (150 km/h)"
                            }), h.jsx("option", {
                                value: "city",
                                children: "City (120 km/h)"
                            }), h.jsx("option", {
                                value: "specialZone",
                                children: "Special Zone (60 km/h)"
                            })]
                        })]
                    }), h.jsxs("div", {
                        children: [h.jsx("label", {
                            className: "block text-xs text-gray-500 uppercase tracking-wide mb-2",
                            children: "Clocked Speed (km/h)"
                        }), h.jsx("input", {
                            type: "number",
                            value: y,
                            onChange: z => g(z.target.value),
                            placeholder: "Enter speed...",
                            className: "w-full px-3 py-2 bg-[#2a3442] border border-gray-600 rounded-lg text-gray-200 focus:border-amber-500 focus:outline-none"
                        })]
                    }), h.jsx("div", {
                        className: "flex items-end",
                        children: G && h.jsxs("button", {
                            onClick: () => L(G),
                            className: "w-full px-4 py-2 bg-amber-500 text-black font-bold rounded-lg hover:bg-amber-400 transition-colors",
                            children: ["Add ", G.id]
                        })
                    })]
                }), G && h.jsxs("div", {
                    className: "mt-4 p-3 bg-[#2a3442] rounded-lg",
                    children: [h.jsxs("p", {
                        className: "text-sm text-gray-400",
                        children: [h.jsxs("span", {
                            className: "text-amber-500 font-bold",
                            children: [G.over, " km/h"]
                        }), " over the ", G.limit, " km/h limit"]
                    }), h.jsx("p", {
                        className: "text-gray-200 font-medium mt-1",
                        children: G.crime
                    }), h.jsxs("p", {
                        className: "text-sm text-gray-500 mt-1",
                        children: ["Fine: $", G.fine?.toLocaleString()]
                    })]
                })]
            })]
        }), h.jsx("div", {
            className: "bg-[#1a2332] rounded-xl p-4 border border-gray-700",
            children: h.jsxs("div", {
                className: "flex flex-col sm:flex-row gap-4",
                children: [h.jsx("div", {
                    className: "flex-1",
                    children: h.jsx("input", {
                        type: "text",
                        value: l,
                        onChange: z => c(z.target.value),
                        placeholder: "Search by code (PC 2.5.1) or keyword (speeding, weapon, drug...)",
                        className: "w-full px-4 py-3 bg-[#2a3442] border border-gray-600 rounded-lg text-gray-200 placeholder-gray-500 focus:border-amber-500 focus:outline-none"
                    })
                }), h.jsx("div", {
                    className: "flex gap-2",
                    children: ["all", "pc", "tc"].map(z => h.jsx("button", {
                        onClick: () => f(z),
                        className: `px-4 py-2 rounded-lg font-medium uppercase text-sm transition-all ${d === z ? "bg-amber-500 text-black" : "bg-[#2a3442] text-gray-400 hover:text-gray-200"}`,
                        children: z === "all" ? "All" : z
                    }, z))
                })]
            })
        }), h.jsx("div", {
            className: "bg-[#1a2332] rounded-xl border border-gray-700 overflow-hidden",
            children: h.jsx("div", {
                className: "max-h-[400px] overflow-y-auto",
                children: T.length === 0 ? h.jsx("div", {
                    className: "p-8 text-center text-gray-500",
                    children: h.jsx("p", {
                        children: "No codes found matching your search."
                    })
                }) : h.jsx("div", {
                    className: "divide-y divide-gray-700",
                    children: T.map(z => {
                        const V = n.some(I => I.id === z.id);
                        return h.jsxs("button", {
                            onClick: () => V ? U(z.id) : L(z),
                            className: `w-full px-4 py-3 text-left hover:bg-[#2a3442] transition-all flex items-start gap-4 ${V ? "bg-amber-500/10 border-l-2 border-amber-500" : ""}`,
                            children: [h.jsx("div", {
                                className: "flex-shrink-0",
                                children: h.jsx("span", {
                                    className: `font-mono text-sm px-2 py-1 rounded ${z.type === "PC" ? "bg-blue-500/20 text-blue-400" : "bg-green-500/20 text-green-400"}`,
                                    children: z.id
                                })
                            }), h.jsxs("div", {
                                className: "flex-1 min-w-0",
                                children: [h.jsx("p", {
                                    className: "text-gray-200 font-medium",
                                    children: z.crime
                                }), z.description && h.jsx("p", {
                                    className: "text-sm text-gray-500 truncate",
                                    children: z.description
                                }), h.jsxs("div", {
                                    className: "flex flex-wrap gap-2 mt-1",
                                    children: [h.jsxs("span", {
                                        className: "text-xs text-amber-500",
                                        children: ["$", z.fine?.toLocaleString() || "0"]
                                    }), z.stars > 0 && h.jsx("span", {
                                        className: "text-xs text-gray-400",
                                        children: "⭐".repeat(Math.min(z.stars, 5))
                                    }), z.notes && h.jsx("span", {
                                        className: "text-xs text-gray-500",
                                        children: z.notes
                                    })]
                                })]
                            }), h.jsx("div", {
                                className: "flex-shrink-0",
                                children: V ? h.jsx("span", {
                                    className: "text-green-500",
                                    children: "✓"
                                }) : h.jsx("span", {
                                    className: "text-gray-600",
                                    children: "+"
                                })
                            })]
                        }, z.id)
                    }
                    )
                })
            })
        })]
    })
}
const yr = "fib_favorites"
  , Gu = r => JSON.parse(localStorage.getItem(yr) || "{}")[r] || []
  , zv = (r, n) => {
    const i = JSON.parse(localStorage.getItem(yr) || "{}");
    return i[r] || (i[r] = []),
    i[r].some(c => c.command === n.command) ? !1 : (i[r].push({
        id: Date.now(),
        label: n.label,
        command: n.command,
        category: n.category,
        addedAt: new Date().toISOString()
    }),
    localStorage.setItem(yr, JSON.stringify(i)),
    !0)
}
  , lg = (r, n) => {
    const i = JSON.parse(localStorage.getItem(yr) || "{}");
    return i[r] ? (i[r] = i[r].filter(l => l.command !== n),
    localStorage.setItem(yr, JSON.stringify(i)),
    !0) : !1
}
;
function Mv({data: r, officer: n}) {
    const [i,l] = K.useState(1500)
      , [c,d] = K.useState(!1)
      , [f,y] = K.useState(!1)
      , g = K.useRef(null)
      , [p,v] = K.useState("universal")
      , [j,E] = K.useState(null)
      , [_,T] = K.useState([]);
    K.useEffect( () => {
        n?.badgeNumber && T(Gu(n.badgeNumber).map(ce => ce.command))
    }
    , [n]),
    K.useEffect( () => (c && !f && i > 0 ? g.current = setInterval( () => {
        l(ce => ce - 1)
    }
    , 1e3) : i === 0 && (d(!1),
    "Notification"in window && Notification.permission === "granted" && new Notification("⚠️ FIB Alert",{
        body: "Arrest timer has expired! Transport to DOC immediately."
    })),
    () => clearInterval(g.current)), [c, f, i]);
    const C = ce => {
        const Te = Math.floor(ce / 60)
          , q = ce % 60;
        return `${Te.toString().padStart(2, "0")}:${q.toString().padStart(2, "0")}`
    }
      , L = () => {
        d(!1),
        y(!1),
        l(1500)
    }
      , U = () => {
        y(!f),
        V(f ? "▶ Timer resumed" : "⏸ Lawyer Pause - Timer frozen")
    }
      , Y = () => i <= 60 ? "timer-danger text-red-500" : i <= 300 ? "timer-warning text-amber-500" : "text-gray-100"
      , G = r?.mirandaRights || "You have the right to remain silent, Anything you say can and will be used against you in the court of law. You have the right to an attorney, If you cannot afford an attorney, one will be appointed to you by the state if available. Do you understand the rights I just read to you?"
      , z = K.useCallback( (ce, Te) => {
        navigator.clipboard.writeText(ce).then( () => {
            Yu(),
            V(`✓ Copied: ${Te}`)
        }
        )
    }
    , [])
      , V = ce => {
        E(ce),
        setTimeout( () => E(null), 2e3)
    }
      , I = ce => {
        n?.badgeNumber && (_.includes(ce.command) ? (lg(n.badgeNumber, ce.command),
        T(Te => Te.filter(q => q !== ce.command)),
        V("Removed from favorites")) : (zv(n.badgeNumber, ce),
        T(Te => [...Te, ce.command]),
        V("⭐ Added to favorites")))
    }
      , X = r?.quickCommands || []
      , oe = K.useMemo( () => {
        const ce = {};
        return X.forEach(Te => {
            const q = Te.category || "Other";
            ce[q] || (ce[q] = []),
            ce[q].push(Te)
        }
        ),
        ce
    }
    , [X])
      , ge = {
        Jumpsuit: "👔",
        Lawyer: "⚖️",
        "CODE A": "🚨",
        "After Situation": "✅",
        "License Plate": "🚗",
        Other: "📋"
    };
    return h.jsxs("div", {
        className: "space-y-6 md:mt-14 tab-content",
        children: [j && h.jsx("div", {
            className: "fixed top-20 left-1/2 -translate-x-1/2 z-50 toast-enter",
            children: h.jsx("div", {
                className: "px-4 py-2 bg-green-500/90 text-black font-medium rounded-lg shadow-lg",
                children: j
            })
        }), h.jsxs("div", {
            className: "bg-[#1a2332] rounded-xl p-6 border border-gray-700",
            children: [h.jsx("h2", {
                className: "text-sm font-bold uppercase tracking-wider text-gray-400 mb-4",
                children: "⏱️ 25-Minute Arrest Timer"
            }), h.jsx("p", {
                className: "text-xs text-gray-500 mb-4",
                children: "Legal limit from cuffing to DOC transport"
            }), h.jsxs("div", {
                className: "text-center",
                children: [h.jsx("div", {
                    className: `text-6xl md:text-8xl font-mono font-bold mb-6 ${Y()}`,
                    children: C(i)
                }), f && h.jsx("div", {
                    className: "mb-4 px-4 py-2 bg-blue-500/20 border border-blue-500/50 rounded-lg inline-block",
                    children: h.jsx("span", {
                        className: "text-blue-400 font-bold uppercase tracking-wide",
                        children: "⚖️ Lawyer Pause Active - Timer Frozen"
                    })
                }), h.jsxs("div", {
                    className: "flex flex-wrap justify-center gap-3",
                    children: [h.jsx("button", {
                        onClick: () => d(!c),
                        disabled: f,
                        className: `btn-ripple px-6 py-3 rounded-lg font-bold uppercase tracking-wide transition-all ${c ? "btn-danger bg-red-500 hover:bg-red-600 text-white" : "btn-success bg-green-500 hover:bg-green-600 text-black"} ${f ? "opacity-50 cursor-not-allowed" : ""}`,
                        children: c ? "⏸ Pause" : "▶ Start"
                    }), h.jsxs("button", {
                        onClick: U,
                        className: `btn-ripple px-6 py-3 rounded-lg font-bold uppercase tracking-wide transition-all ${f ? "bg-blue-500 hover:bg-blue-400 text-white" : "bg-blue-600/50 hover:bg-blue-600 text-blue-200 border border-blue-500/50"}`,
                        children: ["⚖️ ", f ? "Resume" : "Lawyer Pause"]
                    }), h.jsx("button", {
                        onClick: L,
                        className: "btn-secondary btn-ripple px-6 py-3 bg-[#2a3442] hover:bg-[#374151] rounded-lg font-bold uppercase tracking-wide text-gray-300 transition-all",
                        children: "↺ Reset"
                    })]
                }), i <= 300 && i > 0 && !f && h.jsx("p", {
                    className: "mt-4 text-amber-500 font-medium animate-pulse",
                    children: "⚠️ Less than 5 minutes remaining!"
                }), i === 0 && h.jsx("p", {
                    className: "mt-4 text-red-500 font-bold text-lg",
                    children: "🚨 TIMER EXPIRED - Transport to DOC immediately!"
                })]
            })]
        }), h.jsxs("div", {
            className: "bg-[#011441] rounded-xl p-6 border border-[#444E54]",
            children: [h.jsx("h2", {
                className: "text-sm font-bold uppercase tracking-wider text-gray-400 mb-4",
                children: "📜 Miranda Rights"
            }), h.jsx("p", {
                className: "text-xs text-gray-500 mb-3",
                children: "Read this to the 10-15 (suspect in custody)"
            }), h.jsx("div", {
                className: "bg-[#0D1116] rounded-lg p-4 border-l-4 border-amber-500",
                children: h.jsx("p", {
                    className: "text-gray-200 italic leading-relaxed text-lg",
                    children: G
                })
            }), h.jsx("button", {
                onClick: () => z(G, "Miranda Rights"),
                className: "mt-4 btn-primary btn-ripple px-4 py-2 bg-amber-500 hover:bg-amber-400 text-black rounded-lg font-bold transition-colors",
                children: "📋 Copy Miranda Rights"
            })]
        }), h.jsxs("div", {
            className: "bg-[#011441] rounded-xl p-6 border border-[#444E54]",
            children: [h.jsx("h2", {
                className: "text-sm font-bold uppercase tracking-wider text-gray-400 mb-4",
                children: "👔 Jumpsuit Tool"
            }), h.jsx("p", {
                className: "text-xs text-gray-500 mb-4",
                children: "Select size and copy the /me command for issuing DOC jumpsuit"
            }), h.jsxs("div", {
                className: "flex flex-wrap items-center gap-4",
                children: [h.jsxs("select", {
                    value: p,
                    onChange: ce => v(ce.target.value),
                    className: "px-4 py-3 bg-[#0D1116] border border-[#444E54] rounded-lg text-gray-200 focus:border-amber-500 focus:outline-none",
                    children: [h.jsx("option", {
                        value: "universal",
                        children: "Universal"
                    }), h.jsx("option", {
                        value: "XS",
                        children: "XS"
                    }), h.jsx("option", {
                        value: "S",
                        children: "S"
                    }), h.jsx("option", {
                        value: "M",
                        children: "M"
                    }), h.jsx("option", {
                        value: "L",
                        children: "L"
                    }), h.jsx("option", {
                        value: "XL",
                        children: "XL"
                    }), h.jsx("option", {
                        value: "2XL",
                        children: "2XL"
                    }), h.jsx("option", {
                        value: "3XL",
                        children: "3XL"
                    })]
                }), h.jsx("button", {
                    onClick: () => z(`/me grabs a ${p} jumpsuit`, "Jumpsuit Command"),
                    className: "btn-primary btn-ripple px-6 py-3 bg-amber-500 hover:bg-amber-400 text-black rounded-lg font-bold transition-colors",
                    children: "📋 Copy Jumpsuit Command"
                })]
            }), h.jsx("div", {
                className: "mt-3 p-3 bg-[#0D1116] rounded-lg border border-[#444E54]",
                children: h.jsxs("code", {
                    className: "text-amber-400 font-mono",
                    children: ["/me grabs a ", p, " jumpsuit"]
                })
            })]
        }), h.jsxs("div", {
            className: "bg-[#1a2332] rounded-xl p-6 border border-gray-700",
            children: [h.jsx("h2", {
                className: "text-sm font-bold uppercase tracking-wider text-gray-400 mb-4",
                children: "⚡ Quick RP Commands"
            }), h.jsx("p", {
                className: "text-xs text-gray-500 mb-4",
                children: "Click to copy • ⭐ to favorite"
            }), h.jsx("div", {
                className: "space-y-6",
                children: Object.entries(oe).map( ([ce,Te]) => h.jsxs("div", {
                    children: [h.jsxs("h3", {
                        className: "text-sm font-medium text-gray-400 mb-3 flex items-center gap-2",
                        children: [h.jsx("span", {
                            children: ge[ce] || "📋"
                        }), h.jsx("span", {
                            children: ce
                        })]
                    }), h.jsx("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3",
                        children: Te.map( (q, _e) => h.jsxs("div", {
                            className: "relative p-3 bg-[#2a3442] hover:bg-[#374151] rounded-lg transition-all border border-gray-600 hover:border-amber-500/50 group",
                            children: [h.jsxs("button", {
                                onClick: () => z(q.command, q.label),
                                className: "w-full text-left",
                                children: [h.jsx("p", {
                                    className: "text-sm font-medium text-gray-200 group-hover:text-amber-500 transition-colors pr-8",
                                    children: q.label
                                }), h.jsx("p", {
                                    className: "text-xs text-gray-500 font-mono truncate mt-1",
                                    children: q.command
                                })]
                            }), h.jsx("button", {
                                onClick: Ue => {
                                    Ue.stopPropagation(),
                                    I(q)
                                }
                                ,
                                className: `absolute top-2 right-2 p-1.5 rounded transition-all ${_.includes(q.command) ? "text-amber-400 bg-amber-500/20" : "text-gray-600 hover:text-amber-400 hover:bg-amber-500/10 opacity-0 group-hover:opacity-100"}`,
                                title: _.includes(q.command) ? "Remove from favorites" : "Add to favorites",
                                children: _.includes(q.command) ? "★" : "☆"
                            })]
                        }, _e))
                    })]
                }, ce))
            })]
        }), h.jsxs("div", {
            className: "bg-[#1a2332] rounded-xl p-6 border border-gray-700",
            children: [h.jsx("h2", {
                className: "text-sm font-bold uppercase tracking-wider text-gray-400 mb-4",
                children: "🎯 Quick Actions"
            }), h.jsxs("button", {
                onClick: () => {
                    "Notification"in window && (Notification.requestPermission(),
                    V("Notification permissions requested"))
                }
                ,
                className: "btn-secondary btn-ripple p-4 bg-[#2a3442] hover:bg-[#374151] rounded-lg text-left transition-all border border-gray-600 w-full sm:w-auto",
                children: [h.jsx("p", {
                    className: "font-medium text-gray-200",
                    children: "🔔 Enable Notifications"
                }), h.jsx("p", {
                    className: "text-xs text-gray-500 mt-1",
                    children: "Get alerts when timer expires"
                })]
            })]
        })]
    })
}
function qv({data: r}) {
    const [n,i] = K.useState("radio")
      , [l,c] = K.useState("")
      , [d,f] = K.useState({})
      , y = [{
        id: "radio",
        label: "Radio Codes",
        icon: "📻"
    }, {
        id: "flowchart",
        label: "Arrest Flow",
        icon: "📋"
    }, {
        id: "prohibited",
        label: "Prohibited",
        icon: "🚫"
    }]
      , g = K.useMemo( () => {
        if (!r?.radioCodes)
            return [];
        if (!l.trim())
            return r.radioCodes;
        const T = l.toLowerCase();
        return r.radioCodes.filter(C => C.code.toLowerCase().includes(T) || C.meaning.toLowerCase().includes(T))
    }
    , [r?.radioCodes, l])
      , p = K.useMemo( () => {
        if (!r?.statusCodes)
            return [];
        if (!l.trim())
            return r.statusCodes;
        const T = l.toLowerCase();
        return r.statusCodes.filter(C => C.code.toLowerCase().includes(T) || C.meaning.toLowerCase().includes(T))
    }
    , [r?.statusCodes, l])
      , v = T => {
        f(C => ({
            ...C,
            [T]: !C[T]
        }))
    }
      , j = () => {
        f({})
    }
      , E = Object.values(d).filter(Boolean).length
      , _ = r?.arrestFlowchart?.length || 0;
    return h.jsxs("div", {
        className: "space-y-6 md:mt-14",
        children: [h.jsx("div", {
            className: "flex gap-2 overflow-x-auto pb-2",
            children: y.map(T => h.jsxs("button", {
                onClick: () => i(T.id),
                className: `flex-shrink-0 px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${n === T.id ? "bg-amber-500 text-black" : "bg-[#1a2332] text-gray-400 hover:text-gray-200 border border-gray-700"}`,
                children: [h.jsx("span", {
                    children: T.icon
                }), h.jsx("span", {
                    children: T.label
                })]
            }, T.id))
        }), n === "radio" && h.jsxs("div", {
            className: "space-y-4",
            children: [h.jsx("div", {
                className: "bg-[#1a2332] rounded-xl p-4 border border-gray-700",
                children: h.jsx("input", {
                    type: "text",
                    value: l,
                    onChange: T => c(T.target.value),
                    placeholder: "Search codes... (10-4, pursuit, emergency...)",
                    className: "w-full px-4 py-3 bg-[#2a3442] border border-gray-600 rounded-lg text-gray-200 placeholder-gray-500 focus:border-amber-500 focus:outline-none"
                })
            }), h.jsxs("div", {
                className: "bg-[#1a2332] rounded-xl border border-gray-700 overflow-hidden",
                children: [h.jsx("div", {
                    className: "px-4 py-3 border-b border-gray-700",
                    children: h.jsx("h3", {
                        className: "font-bold text-gray-200",
                        children: "📻 10-Codes"
                    })
                }), h.jsx("div", {
                    className: "max-h-[300px] overflow-y-auto",
                    children: h.jsx("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 divide-gray-700",
                        children: g.map( (T, C) => h.jsxs("div", {
                            className: `px-4 py-2 flex items-center gap-4 hover:bg-[#2a3442] ${C % 2 === 0 ? "md:border-r md:border-gray-700" : ""}`,
                            children: [h.jsx("span", {
                                className: "font-mono text-amber-500 font-bold min-w-[60px]",
                                children: T.code
                            }), h.jsx("span", {
                                className: "text-gray-300",
                                children: T.meaning
                            })]
                        }, C))
                    })
                })]
            }), h.jsxs("div", {
                className: "bg-[#1a2332] rounded-xl border border-gray-700 overflow-hidden",
                children: [h.jsx("div", {
                    className: "px-4 py-3 border-b border-gray-700",
                    children: h.jsx("h3", {
                        className: "font-bold text-gray-200",
                        children: "🚦 Status Codes"
                    })
                }), h.jsx("div", {
                    className: "divide-y divide-gray-700",
                    children: p.map( (T, C) => h.jsxs("div", {
                        className: "px-4 py-3 flex items-center gap-4 hover:bg-[#2a3442]",
                        children: [h.jsx("span", {
                            className: `font-mono font-bold min-w-[80px] ${T.code.includes("3") || T.code.includes("99") || T.code.includes("30") ? "text-red-500" : T.code.includes("2") || T.code.includes("20") ? "text-amber-500" : "text-green-500"}`,
                            children: T.code
                        }), h.jsx("span", {
                            className: "text-gray-300",
                            children: T.meaning
                        })]
                    }, C))
                })]
            })]
        }), n === "flowchart" && h.jsxs("div", {
            className: "space-y-4",
            children: [h.jsxs("div", {
                className: "bg-[#1a2332] rounded-xl p-4 border border-gray-700",
                children: [h.jsxs("div", {
                    className: "flex items-center justify-between mb-2",
                    children: [h.jsx("h3", {
                        className: "font-bold text-gray-200",
                        children: "📋 Maze's & Chevi's Arrest Guide"
                    }), h.jsx("button", {
                        onClick: j,
                        className: "text-xs text-gray-500 hover:text-amber-500 transition-colors",
                        children: "Reset Progress"
                    })]
                }), h.jsxs("div", {
                    className: "flex items-center gap-4",
                    children: [h.jsx("div", {
                        className: "flex-1 h-2 bg-[#2a3442] rounded-full overflow-hidden",
                        children: h.jsx("div", {
                            className: "h-full bg-gradient-to-r from-amber-500 to-green-500 transition-all duration-500",
                            style: {
                                width: `${E / _ * 100}%`
                            }
                        })
                    }), h.jsxs("span", {
                        className: "text-sm text-gray-400",
                        children: [E, "/", _]
                    })]
                })]
            }), h.jsx("div", {
                className: "bg-[#1a2332] rounded-xl border border-gray-700 overflow-hidden",
                children: h.jsx("div", {
                    className: "divide-y divide-gray-700",
                    children: r?.arrestFlowchart?.map( (T, C) => {
                        const L = d[T.step];
                        return h.jsxs("button", {
                            onClick: () => v(T.step),
                            className: `w-full px-4 py-4 text-left flex items-start gap-4 transition-all ${L ? "bg-green-500/10" : "hover:bg-[#2a3442]"}`,
                            children: [h.jsx("div", {
                                className: `flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-all ${L ? "bg-green-500 text-black" : "bg-[#2a3442] text-gray-400 border border-gray-600"}`,
                                children: L ? "✓" : T.step
                            }), h.jsxs("div", {
                                className: "flex-1",
                                children: [h.jsx("p", {
                                    className: `font-medium transition-all ${L ? "text-green-400 line-through" : "text-gray-200"}`,
                                    children: T.title
                                }), h.jsx("p", {
                                    className: "text-sm text-gray-500 mt-1",
                                    children: T.description
                                })]
                            })]
                        }, C)
                    }
                    )
                })
            })]
        }), n === "prohibited" && h.jsxs("div", {
            className: "space-y-4",
            children: [h.jsxs("div", {
                className: "bg-[#1a2332] rounded-xl p-4 border border-gray-700",
                children: [h.jsx("h3", {
                    className: "font-bold text-gray-200 mb-2",
                    children: "🚫 ANNEX I - Prohibited Items"
                }), h.jsx("p", {
                    className: "text-sm text-gray-500",
                    children: "Items that are illegal to possess in San Andreas"
                })]
            }), ( () => {
                const T = r?.prohibitedItems || []
                  , C = {};
                T.forEach(U => {
                    C[U.category] || (C[U.category] = []),
                    C[U.category].push(U)
                }
                );
                const L = {
                    "Weapons and Armors": {
                        bg: "bg-red-500/10",
                        text: "text-red-400",
                        icon: "🔫"
                    },
                    "State Issued Equipment": {
                        bg: "bg-blue-500/10",
                        text: "text-blue-400",
                        icon: "🏛️"
                    },
                    "Illicit Substances": {
                        bg: "bg-green-500/10",
                        text: "text-green-400",
                        icon: "💊"
                    },
                    "Items Prohibited Selling in Public Shops": {
                        bg: "bg-amber-500/10",
                        text: "text-amber-400",
                        icon: "🏪"
                    },
                    "Illicit Technologies and Other Prohibited Items": {
                        bg: "bg-purple-500/10",
                        text: "text-purple-400",
                        icon: "💻"
                    }
                };
                return Object.entries(C).map( ([U,Y]) => {
                    const G = L[U] || {
                        bg: "bg-gray-500/10",
                        text: "text-gray-400",
                        icon: "📋"
                    };
                    return h.jsxs("div", {
                        className: "bg-[#1a2332] rounded-xl border border-gray-700 overflow-hidden",
                        children: [h.jsx("div", {
                            className: `px-4 py-3 border-b border-gray-700 ${G.bg}`,
                            children: h.jsxs("h3", {
                                className: `font-bold ${G.text}`,
                                children: [G.icon, " ", U]
                            })
                        }), h.jsx("div", {
                            className: "divide-y divide-gray-700",
                            children: Y.map( (z, V) => h.jsx("div", {
                                className: "px-4 py-3 hover:bg-[#2a3442]",
                                children: h.jsxs("div", {
                                    className: "flex items-start gap-3",
                                    children: [h.jsx("span", {
                                        className: "font-mono text-amber-500 text-sm min-w-[60px]",
                                        children: z.id
                                    }), h.jsxs("div", {
                                        className: "flex-1",
                                        children: [h.jsx("p", {
                                            className: "text-gray-200",
                                            children: z.item
                                        }), z.notes && h.jsxs("p", {
                                            className: "text-xs text-gray-500 mt-1 italic",
                                            children: ["⚠️ ", z.notes]
                                        })]
                                    })]
                                })
                            }, V))
                        })]
                    }, U)
                }
                )
            }
            )()]
        })]
    })
}
function Bv({data: r, selectedCharges: n}) {
    const [i,l] = K.useState("")
      , [c,d] = K.useState("")
      , [f,y] = K.useState("")
      , [g,p] = K.useState(!1)
      , v = K.useMemo( () => {
        const T = n.reduce( (U, Y) => U + (Y.fine || 0), 0)
          , C = n.reduce( (U, Y) => U + (Y.stars || 0), 0)
          , L = {
            noBail: n.some(U => U.notes?.toLowerCase().includes("no bail")),
            revokeLicense: n.some(U => U.notes?.toLowerCase().includes("revoke") && (U.notes?.toLowerCase().includes("license") || U.notes?.toLowerCase().includes("licence"))),
            confiscation: n.some(U => U.notes?.toLowerCase().includes("confiscation"))
        };
        return {
            fine: T,
            stars: C,
            flags: L
        }
    }
    , [n])
      , E = ( () => {
        const T = new Date().toLocaleString()
          , C = n.map(Y => `• ${Y.id} - ${Y.crime} ($${Y.fine?.toLocaleString() || "0"}${Y.stars > 0 ? ` / ${"⭐".repeat(Y.stars)}` : ""})`).join(`
`)
          , L = [];
        return v.flags.noBail && L.push("🚫 NO BAIL"),
        v.flags.revokeLicense && L.push("🪪 LICENSE REVOKED"),
        v.flags.confiscation && L.push("📦 CONFISCATION"),
        `\`\`\`
╔══════════════════════════════════════════════════╗
║           FIB ARREST / CITATION LOG              ║
╠══════════════════════════════════════════════════╣
║ Officer: ${i.padEnd(40)}║
║ Suspect: ${c.padEnd(40)}║
║ Date/Time: ${T.padEnd(38)}║
╠══════════════════════════════════════════════════╣
║ CHARGES:                                         ║
╠══════════════════════════════════════════════════╣
${C || "• No charges selected"}
╠══════════════════════════════════════════════════╣
║ SUMMARY:                                         ║
║ Total Fine: $${v.fine.toLocaleString().padEnd(36)}║
║ Jail Time: ${v.stars > 0 ? "⭐".repeat(Math.min(v.stars, 5)) + (v.stars > 5 ? `+${v.stars - 5}` : "") : "None"}${" ".repeat(Math.max(0, 38 - (v.stars > 0 ? Math.min(v.stars, 5) + (v.stars > 5 ? 2 : 0) : 4)))}║
${L.length > 0 ? `║ Flags: ${L.join(" | ").padEnd(42)}║
` : ""}╠══════════════════════════════════════════════════╣
${f ? `║ NOTES:                                           ║
║ ${f.substring(0, 48).padEnd(48)} ║
╠══════════════════════════════════════════════════╣
` : ""}╚══════════════════════════════════════════════════╝
\`\`\``
    }
    )()
      , _ = () => {
        navigator.clipboard.writeText(E).then( () => {
            p(!0),
            setTimeout( () => p(!1), 2e3)
        }
        )
    }
    ;
    return h.jsxs("div", {
        className: "space-y-6 md:mt-14",
        children: [h.jsxs("div", {
            className: "bg-[#1a2332] rounded-xl p-6 border border-gray-700",
            children: [h.jsx("h2", {
                className: "text-sm font-bold uppercase tracking-wider text-gray-400 mb-4",
                children: "📝 Discord Log Generator"
            }), h.jsxs("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                children: [h.jsxs("div", {
                    children: [h.jsx("label", {
                        className: "block text-xs text-gray-500 uppercase tracking-wide mb-2",
                        children: "Officer Name"
                    }), h.jsx("input", {
                        type: "text",
                        value: i,
                        onChange: T => l(T.target.value),
                        placeholder: "Enter your name...",
                        className: "w-full px-4 py-3 bg-[#2a3442] border border-gray-600 rounded-lg text-gray-200 placeholder-gray-500 focus:border-amber-500 focus:outline-none"
                    })]
                }), h.jsxs("div", {
                    children: [h.jsx("label", {
                        className: "block text-xs text-gray-500 uppercase tracking-wide mb-2",
                        children: "Suspect Name"
                    }), h.jsx("input", {
                        type: "text",
                        value: c,
                        onChange: T => d(T.target.value),
                        placeholder: "Enter suspect's name...",
                        className: "w-full px-4 py-3 bg-[#2a3442] border border-gray-600 rounded-lg text-gray-200 placeholder-gray-500 focus:border-amber-500 focus:outline-none"
                    })]
                })]
            }), h.jsxs("div", {
                className: "mt-4",
                children: [h.jsx("label", {
                    className: "block text-xs text-gray-500 uppercase tracking-wide mb-2",
                    children: "Additional Notes (Optional)"
                }), h.jsx("textarea", {
                    value: f,
                    onChange: T => y(T.target.value),
                    placeholder: "Any additional notes about the arrest...",
                    rows: 2,
                    className: "w-full px-4 py-3 bg-[#2a3442] border border-gray-600 rounded-lg text-gray-200 placeholder-gray-500 focus:border-amber-500 focus:outline-none resize-none"
                })]
            })]
        }), h.jsxs("div", {
            className: "bg-[#1a2332] rounded-xl p-6 border border-gray-700",
            children: [h.jsxs("h2", {
                className: "text-sm font-bold uppercase tracking-wider text-gray-400 mb-4",
                children: ["⚖️ Charges from Calculator (", n.length, ")"]
            }), n.length === 0 ? h.jsxs("div", {
                className: "text-center py-8 text-gray-500",
                children: [h.jsx("p", {
                    className: "text-4xl mb-2",
                    children: "📋"
                }), h.jsx("p", {
                    children: "No charges selected yet."
                }), h.jsx("p", {
                    className: "text-sm mt-1",
                    children: "Go to the Calculator tab to add charges."
                })]
            }) : h.jsxs("div", {
                className: "space-y-2",
                children: [n.map(T => h.jsxs("div", {
                    className: "flex items-center justify-between px-4 py-2 bg-[#2a3442] rounded-lg",
                    children: [h.jsxs("div", {
                        className: "flex items-center gap-3 flex-1 min-w-0",
                        children: [h.jsx("button", {
                            onClick: C => {
                                const L = C.currentTarget;
                                navigator.clipboard.writeText(`${T.id} ${T.crime}`);
                                const U = L.innerHTML;
                                L.innerHTML = '<span class="text-green-500">✓</span>',
                                setTimeout( () => {
                                    L.innerHTML = U
                                }
                                , 1e3)
                            }
                            ,
                            className: "p-1 hover:bg-gray-700 rounded transition-colors text-gray-500 hover:text-gray-300",
                            title: "Copy charge details",
                            children: "📋"
                        }), h.jsx("span", {
                            className: `font-mono text-xs px-2 py-0.5 rounded whitespace-nowrap ${T.type === "PC" ? "bg-blue-500/20 text-blue-400" : "bg-green-500/20 text-green-400"}`,
                            children: T.id
                        }), h.jsx("span", {
                            className: "text-gray-300 text-sm truncate",
                            children: T.crime
                        })]
                    }), h.jsxs("div", {
                        className: "text-right",
                        children: [h.jsxs("span", {
                            className: "text-amber-500 font-medium",
                            children: ["$", T.fine?.toLocaleString()]
                        }), T.stars > 0 && h.jsx("span", {
                            className: "text-gray-400 text-sm ml-2",
                            children: "⭐".repeat(Math.min(T.stars, 3))
                        })]
                    })]
                }, T.id)), h.jsxs("div", {
                    className: "flex items-center justify-between px-4 py-3 bg-amber-500/10 rounded-lg border border-amber-500/30 mt-4",
                    children: [h.jsx("span", {
                        className: "font-bold text-amber-500",
                        children: "TOTAL"
                    }), h.jsxs("div", {
                        className: "text-right",
                        children: [h.jsxs("span", {
                            className: "text-amber-500 font-bold text-lg",
                            children: ["$", v.fine.toLocaleString()]
                        }), v.stars > 0 && h.jsx("span", {
                            className: "text-gray-300 ml-3",
                            children: "⭐".repeat(Math.min(v.stars, 5))
                        })]
                    })]
                }), (v.flags.noBail || v.flags.revokeLicense || v.flags.confiscation) && h.jsxs("div", {
                    className: "flex flex-wrap gap-2 mt-4",
                    children: [v.flags.noBail && h.jsx("span", {
                        className: "px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-xs font-bold uppercase border border-red-500/50",
                        children: "🚫 No Bail"
                    }), v.flags.revokeLicense && h.jsx("span", {
                        className: "px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-xs font-bold uppercase border border-orange-500/50",
                        children: "🪪 Revoke License"
                    }), v.flags.confiscation && h.jsx("span", {
                        className: "px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs font-bold uppercase border border-yellow-500/50",
                        children: "📦 Confiscation"
                    })]
                })]
            })]
        }), h.jsxs("div", {
            className: "bg-[#1a2332] rounded-xl p-6 border border-gray-700",
            children: [h.jsxs("div", {
                className: "flex items-center justify-between mb-4",
                children: [h.jsx("h2", {
                    className: "text-sm font-bold uppercase tracking-wider text-gray-400",
                    children: "📋 Discord Log Preview"
                }), h.jsx("button", {
                    onClick: _,
                    className: `px-4 py-2 rounded-lg font-bold transition-all ${g ? "bg-green-500 text-black" : "bg-amber-500 hover:bg-amber-400 text-black"}`,
                    children: g ? "✓ Copied!" : "📋 Copy to Clipboard"
                })]
            }), h.jsx("div", {
                className: "bg-[#2a3442] rounded-lg p-4 font-mono text-xs text-gray-300 overflow-x-auto whitespace-pre border border-gray-600",
                children: E
            })]
        })]
    })
}
const pr = "fib_duty_stats"
  , og = r => JSON.parse(localStorage.getItem(pr) || "{}")[r] || []
  , Lv = r => {
    const n = JSON.parse(localStorage.getItem(pr) || "{}");
    n[r] || (n[r] = []);
    const i = {
        id: Date.now(),
        startTime: new Date().toISOString(),
        endTime: null,
        duration: 0
    };
    return n[r].push(i),
    localStorage.setItem(pr, JSON.stringify(n)),
    i
}
  , Hv = r => {
    const n = JSON.parse(localStorage.getItem(pr) || "{}");
    if (!n[r] || n[r].length === 0)
        return null;
    const i = n[r]
      , l = i[i.length - 1];
    return l && !l.endTime && (l.endTime = new Date().toISOString(),
    l.duration = new Date(l.endTime) - new Date(l.startTime),
    localStorage.setItem(pr, JSON.stringify(n))),
    l
}
  , Lm = r => {
    const i = og(r).filter(f => f.endTime)
      , l = i.reduce( (f, y) => f + (y.duration || 0), 0)
      , c = Math.floor(l / (1e3 * 60 * 60))
      , d = Math.floor(l % (1e3 * 60 * 60) / (1e3 * 60));
    return {
        totalSessions: i.length,
        totalHours: c,
        totalMinutes: d,
        totalMs: l
    }
}
  , Hm = r => {
    const n = og(r)
      , i = [];
    for (let l = 6; l >= 0; l--) {
        const c = new Date;
        c.setDate(c.getDate() - l),
        c.setHours(0, 0, 0, 0);
        const d = new Date(c);
        d.setDate(d.getDate() + 1);
        let f = 0;
        n.forEach(y => {
            if (!y.endTime)
                return;
            const g = new Date(y.startTime)
              , p = new Date(y.endTime);
            if (p >= c && g < d) {
                const v = g < c ? c : g
                  , j = p > d ? d : p;
                f += j - v
            }
        }
        ),
        i.push({
            date: c.toISOString().split("T")[0],
            dayName: c.toLocaleDateString("en-US", {
                weekday: "short"
            }),
            hours: Math.round(f / (1e3 * 60 * 60) * 10) / 10
        })
    }
    return i
}
;
function $v({officer: r}) {
    const [n,i] = K.useState(null)
      , [l,c] = K.useState("off");
    K.useEffect( () => {
        const E = localStorage.getItem("fib_duty_state");
        E && c(E)
    }
    , []);
    const d = E => {
        c(E),
        localStorage.setItem("fib_duty_state", E)
    }
      , f = E => {
        i(E),
        setTimeout( () => i(null), 2e3)
    }
      , y = (E, _, T) => {
        navigator.clipboard.writeText(E).then( () => {
            Yu(),
            f(`✓ Copied: ${_}`),
            T && T()
        }
        )
    }
      , g = () => new Date().toLocaleTimeString("en-GB", {
        timeZone: "Europe/London",
        hour: "2-digit",
        minute: "2-digit",
        hour12: !1
    })
      , p = () => {
        const E = g()
          , _ = `${r?.badgeNumber || "Unknown"} to Dispatch, show me 10-41 at ${E}`;
        y(_, "Start Duty"),
        Ou(),
        Lv(r?.badgeNumber),
        d("on"),
        r?.id && Mm(r.id, !0)
    }
      , v = () => {
        const E = g()
          , _ = `${r?.badgeNumber || "Unknown"} to Dispatch, show me 10-42 at ${E}`;
        y(_, "End Duty"),
        d("ending")
    }
      , j = () => {
        y("/do uploads the bodycam content to FIB servers and stops recording", "Bodycam Off", () => {
            Hv(r?.badgeNumber),
            d("off"),
            r?.id && Mm(r.id, !1)
        }
        )
    }
    ;
    return h.jsxs("div", {
        className: "space-y-6 tab-content",
        children: [n && h.jsx("div", {
            className: "fixed top-20 left-1/2 -translate-x-1/2 z-50 toast-enter",
            children: h.jsx("div", {
                className: "px-4 py-2 bg-green-500/90 text-black font-medium rounded-lg shadow-lg",
                children: n
            })
        }), h.jsx("div", {
            className: "bg-[#1a2332] rounded-xl p-4 border border-gray-700",
            children: h.jsxs("div", {
                className: "flex items-center gap-4",
                children: [h.jsxs("div", {
                    className: "relative",
                    children: [h.jsx("div", {
                        className: "w-14 h-14 bg-amber-500/20 rounded-full flex items-center justify-center",
                        children: h.jsxs("span", {
                            className: "text-amber-500 font-bold text-lg",
                            children: ["#", r?.badgeNumber]
                        })
                    }), h.jsx("div", {
                        className: `absolute -top-1 -right-1 w-5 h-5 rounded-full border-2 border-[#1a2332] status-indicator ${l === "off" ? "bg-red-500" : "bg-green-500"}`,
                        style: {
                            color: l === "off" ? "#ef4444" : "#10b981"
                        }
                    })]
                }), h.jsxs("div", {
                    className: "flex-1",
                    children: [h.jsx("p", {
                        className: "font-bold text-gray-200",
                        children: r?.name
                    }), h.jsx("p", {
                        className: "text-sm text-gray-500",
                        children: r?.rank
                    })]
                }), h.jsx("div", {
                    className: `px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${l === "off" ? "bg-red-500/20 text-red-400 border border-red-500/30" : "bg-green-500/20 text-green-400 border border-green-500/30"}`,
                    children: l === "off" ? "🔴 Off Duty" : "🟢 On Duty"
                })]
            })
        }), l === "off" && h.jsxs("div", {
            className: "bg-[#1a2332] rounded-xl p-6 border border-gray-700 tab-content",
            children: [h.jsx("h2", {
                className: "text-sm font-bold uppercase tracking-wider text-gray-400 mb-4",
                children: "🟢 Start Duty"
            }), h.jsx("button", {
                onClick: p,
                className: "btn-success btn-ripple w-full py-4 bg-green-500 hover:bg-green-400 text-black font-bold rounded-lg uppercase tracking-wide text-lg",
                children: "Start Duty (10-41)"
            })]
        }), l === "on" && h.jsxs("div", {
            className: "space-y-6 tab-content",
            children: [h.jsxs("div", {
                className: "bg-[#1a2332] rounded-xl p-6 border border-gray-700",
                children: [h.jsx("h2", {
                    className: "text-sm font-bold uppercase tracking-wider text-gray-400 mb-4",
                    children: "📹 Bodycam Commands"
                }), h.jsxs("div", {
                    className: "space-y-3",
                    children: [h.jsxs("div", {
                        className: "bg-[#2a3442] rounded-lg p-4 border border-gray-600 card-interactive",
                        children: [h.jsx("p", {
                            className: "text-gray-300 font-mono text-sm mb-3",
                            children: "/me takes out Bodycam, turns it on and checks for the red light"
                        }), h.jsx("button", {
                            onClick: () => y("/me takes out Bodycam, turns it on and checks for the red light", "Bodycam On"),
                            className: "btn-primary btn-ripple px-4 py-2 bg-amber-500 hover:bg-amber-400 text-black rounded-lg text-sm font-bold transition-colors",
                            children: "Copy"
                        })]
                    }), h.jsxs("div", {
                        className: "bg-[#2a3442] rounded-lg p-4 border border-gray-600 card-interactive",
                        children: [h.jsx("p", {
                            className: "text-gray-300 font-mono text-sm mb-3",
                            children: "/do It is recording, bodycam is ballistic and water proof"
                        }), h.jsx("button", {
                            onClick: () => y("/do It is recording, bodycam is ballistic and water proof", "Bodycam Recording"),
                            className: "btn-primary btn-ripple px-4 py-2 bg-amber-500 hover:bg-amber-400 text-black rounded-lg text-sm font-bold transition-colors",
                            children: "Copy"
                        })]
                    })]
                })]
            }), h.jsxs("div", {
                className: "bg-[#1a2332] rounded-xl p-6 border border-gray-700",
                children: [h.jsx("h2", {
                    className: "text-sm font-bold uppercase tracking-wider text-gray-400 mb-4",
                    children: "🔴 End Duty"
                }), h.jsx("button", {
                    onClick: v,
                    className: "btn-danger btn-ripple w-full py-4 bg-red-500 hover:bg-red-400 text-white font-bold rounded-lg uppercase tracking-wide text-lg",
                    children: "End Duty (10-42)"
                })]
            })]
        }), l === "ending" && h.jsxs("div", {
            className: "bg-[#1a2332] rounded-xl p-6 border border-gray-700 tab-content",
            children: [h.jsx("h2", {
                className: "text-sm font-bold uppercase tracking-wider text-gray-400 mb-4",
                children: "📹 Finalize End of Duty"
            }), h.jsx("p", {
                className: "text-xs text-gray-500 mb-4",
                children: "Copy the bodycam off command to complete your end of duty"
            }), h.jsxs("div", {
                className: "bg-[#2a3442] rounded-lg p-4 border border-amber-500/50 card-interactive",
                children: [h.jsx("p", {
                    className: "text-gray-300 font-mono text-sm mb-3",
                    children: "/do uploads the bodycam content to FIB servers and stops recording"
                }), h.jsx("button", {
                    onClick: j,
                    className: "btn-success btn-ripple px-6 py-3 bg-green-500 hover:bg-green-400 text-black rounded-lg font-bold transition-colors",
                    children: "Copy & Complete End Duty"
                })]
            })]
        })]
    })
}
function Gv({officer: r}) {
    const [n,i] = K.useState({
        totalSessions: 0,
        totalHours: 0,
        totalMinutes: 0
    })
      , [l,c] = K.useState([])
      , [d,f] = K.useState([])
      , [y,g] = K.useState(null);
    K.useEffect( () => {
        r?.badgeNumber && (i(Lm(r.badgeNumber)),
        c(Hm(r.badgeNumber)),
        f(Gu(r.badgeNumber)))
    }
    , [r]),
    K.useEffect( () => {
        const _ = setInterval( () => {
            r?.badgeNumber && (i(Lm(r.badgeNumber)),
            c(Hm(r.badgeNumber)))
        }
        , 6e4);
        return () => clearInterval(_)
    }
    , [r]);
    const p = _ => {
        g(_),
        setTimeout( () => g(null), 2e3)
    }
      , v = (_, T) => {
        navigator.clipboard.writeText(_).then( () => {
            Yu(),
            p(`✓ Copied: ${T}`)
        }
        )
    }
      , j = _ => {
        $m(),
        lg(r?.badgeNumber, _),
        f(Gu(r?.badgeNumber)),
        p("Removed from favorites")
    }
      , E = K.useMemo( () => {
        const _ = Math.max(...l.map(T => T.hours), 1);
        return Math.ceil(_)
    }
    , [l]);
    return h.jsxs("div", {
        className: "space-y-6 md:mt-14",
        children: [y && h.jsx("div", {
            className: "fixed top-20 left-1/2 -translate-x-1/2 z-50 toast-enter",
            children: h.jsx("div", {
                className: "px-4 py-2 bg-green-500/90 text-black font-medium rounded-lg shadow-lg",
                children: y
            })
        }), h.jsxs("div", {
            className: "grid grid-cols-2 md:grid-cols-4 gap-4",
            children: [h.jsx("div", {
                className: "bg-[#1a2332] rounded-xl p-4 border border-gray-700",
                children: h.jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [h.jsx("div", {
                        className: "w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center",
                        children: h.jsx("span", {
                            className: "text-2xl",
                            children: "🚔"
                        })
                    }), h.jsxs("div", {
                        children: [h.jsx("p", {
                            className: "text-2xl font-bold text-amber-500",
                            children: n.totalSessions
                        }), h.jsx("p", {
                            className: "text-xs text-gray-500 uppercase tracking-wide",
                            children: "Duty Sessions"
                        })]
                    })]
                })
            }), h.jsx("div", {
                className: "bg-[#1a2332] rounded-xl p-4 border border-gray-700",
                children: h.jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [h.jsx("div", {
                        className: "w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center",
                        children: h.jsx("span", {
                            className: "text-2xl",
                            children: "⏱️"
                        })
                    }), h.jsxs("div", {
                        children: [h.jsxs("p", {
                            className: "text-2xl font-bold text-blue-400",
                            children: [n.totalHours, "h ", n.totalMinutes, "m"]
                        }), h.jsx("p", {
                            className: "text-xs text-gray-500 uppercase tracking-wide",
                            children: "Total Time"
                        })]
                    })]
                })
            }), h.jsx("div", {
                className: "bg-[#1a2332] rounded-xl p-4 border border-gray-700",
                children: h.jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [h.jsx("div", {
                        className: "w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center",
                        children: h.jsx("span", {
                            className: "text-2xl",
                            children: "📊"
                        })
                    }), h.jsxs("div", {
                        children: [h.jsxs("p", {
                            className: "text-2xl font-bold text-green-400",
                            children: [l.reduce( (_, T) => _ + T.hours, 0).toFixed(1), "h"]
                        }), h.jsx("p", {
                            className: "text-xs text-gray-500 uppercase tracking-wide",
                            children: "This Week"
                        })]
                    })]
                })
            }), h.jsx("div", {
                className: "bg-[#1a2332] rounded-xl p-4 border border-gray-700",
                children: h.jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [h.jsx("div", {
                        className: "w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center",
                        children: h.jsx("span", {
                            className: "text-2xl",
                            children: "⭐"
                        })
                    }), h.jsxs("div", {
                        children: [h.jsx("p", {
                            className: "text-2xl font-bold text-purple-400",
                            children: d.length
                        }), h.jsx("p", {
                            className: "text-xs text-gray-500 uppercase tracking-wide",
                            children: "Favorites"
                        })]
                    })]
                })
            })]
        }), h.jsxs("div", {
            className: "bg-[#1a2332] rounded-xl p-6 border border-gray-700",
            children: [h.jsx("h3", {
                className: "text-sm font-bold uppercase tracking-wider text-gray-400 mb-6",
                children: "📈 Weekly Activity"
            }), h.jsx("div", {
                className: "h-48 flex items-end justify-between gap-2",
                children: l.map( (_, T) => {
                    const C = E > 0 ? _.hours / E * 100 : 0
                      , L = T === l.length - 1;
                    return h.jsxs("div", {
                        className: "flex-1 flex flex-col items-center gap-2",
                        children: [h.jsx("div", {
                            className: "relative w-full flex-1 flex items-end justify-center",
                            children: h.jsx("div", {
                                className: `w-full max-w-[40px] rounded-t-lg transition-all duration-500 ${L ? "bg-gradient-to-t from-amber-600 to-amber-400" : "bg-gradient-to-t from-blue-600/50 to-blue-400/50"}`,
                                style: {
                                    height: `${Math.max(C, 4)}%`,
                                    minHeight: _.hours > 0 ? "8px" : "4px"
                                },
                                children: _.hours > 0 && h.jsxs("div", {
                                    className: "absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-gray-400 whitespace-nowrap",
                                    children: [_.hours, "h"]
                                })
                            })
                        }), h.jsx("div", {
                            className: `text-xs font-medium ${L ? "text-amber-500" : "text-gray-500"}`,
                            children: L ? "Today" : _.dayName
                        })]
                    }, _.date)
                }
                )
            }), l.every(_ => _.hours === 0) && h.jsx("p", {
                className: "text-center text-gray-600 text-sm mt-4",
                children: "No duty sessions recorded this week. Start your first shift!"
            })]
        }), h.jsxs("div", {
            className: "bg-[#1a2332] rounded-xl p-6 border border-gray-700",
            children: [h.jsx("h3", {
                className: "text-sm font-bold uppercase tracking-wider text-gray-400 mb-4",
                children: "⭐ Favorite Commands"
            }), d.length === 0 ? h.jsxs("div", {
                className: "text-center py-8",
                children: [h.jsx("p", {
                    className: "text-4xl mb-3",
                    children: "⭐"
                }), h.jsx("p", {
                    className: "text-gray-500",
                    children: "No favorites yet"
                }), h.jsx("p", {
                    className: "text-gray-600 text-sm mt-1",
                    children: "Star commands in the Patrol tab to add them here"
                })]
            }) : h.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-3",
                children: d.map(_ => h.jsx("div", {
                    className: "bg-[#2a3442] rounded-lg p-3 border border-gray-600 hover:border-amber-500/50 transition-all group",
                    children: h.jsxs("div", {
                        className: "flex items-start justify-between gap-2",
                        children: [h.jsxs("div", {
                            className: "flex-1 min-w-0",
                            children: [h.jsx("p", {
                                className: "text-sm text-gray-300 font-medium truncate",
                                children: _.label
                            }), h.jsx("p", {
                                className: "text-xs text-gray-500 mt-1 font-mono truncate",
                                children: _.command
                            })]
                        }), h.jsxs("div", {
                            className: "flex gap-1",
                            children: [h.jsx("button", {
                                onClick: () => v(_.command, _.label),
                                className: "p-2 bg-amber-500/20 hover:bg-amber-500/30 text-amber-400 rounded transition-colors",
                                title: "Copy",
                                children: "📋"
                            }), h.jsx("button", {
                                onClick: () => j(_.command),
                                className: "p-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded transition-colors opacity-0 group-hover:opacity-100",
                                title: "Remove",
                                children: "✕"
                            })]
                        })]
                    })
                }, _.id))
            })]
        })]
    })
}
function Vv() {
    const [r,n] = K.useState([]);
    K.useEffect( () => {
        const c = rg(d => {
            n(d || [])
        }
        );
        return () => {
            c && c()
        }
    }
    , []);
    const i = r.filter(c => c.isOnDuty).length
      , l = [...r].sort( (c, d) => c.isOnDuty && !d.isOnDuty ? -1 : !c.isOnDuty && d.isOnDuty ? 1 : c.name.localeCompare(d.name));
    return h.jsxs("div", {
        className: "bg-[#1a2332] rounded-xl border border-gray-700 overflow-hidden h-fit",
        children: [h.jsx("div", {
            className: "px-4 py-3 border-b border-gray-700 bg-[#2a3442]",
            children: h.jsxs("div", {
                className: "flex items-center justify-between",
                children: [h.jsx("h3", {
                    className: "text-sm font-bold uppercase tracking-wider text-gray-300",
                    children: "👥 Agents"
                }), h.jsxs("span", {
                    className: "text-xs text-gray-500",
                    children: [h.jsx("span", {
                        className: "text-green-400 font-bold",
                        children: i
                    }), h.jsx("span", {
                        className: "mx-1",
                        children: "/"
                    }), h.jsx("span", {
                        children: r.length
                    })]
                })]
            })
        }), h.jsx("div", {
            className: "max-h-[400px] overflow-y-auto",
            children: l.length === 0 ? h.jsx("div", {
                className: "px-4 py-6 text-center text-gray-500 text-sm",
                children: "No agents registered"
            }) : h.jsx("ul", {
                className: "divide-y divide-gray-700/50",
                children: l.map(c => h.jsxs("li", {
                    className: "px-4 py-2.5 flex items-center gap-3 hover:bg-[#2a3442]/50 transition-colors",
                    children: [h.jsx("div", {
                        className: `w-2.5 h-2.5 rounded-full flex-shrink-0 ${c.isOnDuty ? "bg-green-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]" : "bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.4)]"}`
                    }), h.jsx("div", {
                        className: "flex-1 min-w-0",
                        children: h.jsx("p", {
                            className: `text-sm font-medium truncate ${c.isOnDuty ? "text-gray-200" : "text-gray-400"}`,
                            children: c.name
                        })
                    }), h.jsxs("span", {
                        className: "text-xs text-gray-500 flex-shrink-0",
                        children: ["#", c.badgeNumber]
                    })]
                }, c.id))
            })
        })]
    })
}
function Yv({officer: r}) {
    const [n,i] = K.useState(!1)
      , [l,c] = K.useState([])
      , [d,f] = K.useState("")
      , [y,g] = K.useState(!1)
      , p = K.useRef(null)
      , v = () => {
        p.current?.scrollIntoView({
            behavior: "smooth"
        })
    }
    ;
    K.useEffect( () => {
        v()
    }
    , [l, n]),
    K.useEffect( () => {
        const E = Cv(_ => {
            c(_ || [])
        }
        );
        return () => {
            E && E()
        }
    }
    , []);
    const j = async E => {
        if (E.preventDefault(),
        !d.trim() || y)
            return;
        g(!0),
        (await Rv({
            content: d,
            senderId: r.id,
            senderName: r.name,
            senderBadge: r.badgeNumber,
            senderRank: r.rank
        })).success ? (f(""),
        g(!1)) : (console.error("Failed to send message"),
        g(!1))
    }
    ;
    return r ? h.jsxs("div", {
        className: "fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-4 pointer-events-none",
        children: [h.jsxs("div", {
            className: `
                bg-[#1a2332] border border-gray-700 shadow-2xl rounded-xl overflow-hidden
                w-80 md:w-96 transition-all duration-300 pointer-events-auto
                ${n ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95 h-0"}
            `,
            children: [h.jsxs("div", {
                className: "bg-[#2a3442] px-4 py-3 flex items-center justify-between border-b border-gray-700",
                children: [h.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [h.jsx("span", {
                        className: "text-xl",
                        children: "💬"
                    }), h.jsx("h3", {
                        className: "font-bold text-gray-200",
                        children: "Agency Communications"
                    })]
                }), h.jsx("button", {
                    onClick: () => i(!1),
                    className: "text-gray-400 hover:text-white transition-colors",
                    children: "✕"
                })]
            }), h.jsxs("div", {
                className: "h-96 overflow-y-auto bg-[#0a0f1a]/50 p-4 space-y-4",
                children: [l.length === 0 ? h.jsxs("div", {
                    className: "text-center text-gray-500 text-sm mt-10",
                    children: [h.jsx("p", {
                        children: "No active communications."
                    }), h.jsx("p", {
                        className: "text-xs mt-1",
                        children: "Messages auto-delete after 5 minutes."
                    })]
                }) : l.map(E => {
                    const _ = E.senderId === r.id;
                    return h.jsxs("div", {
                        className: `flex flex-col ${_ ? "items-end" : "items-start"}`,
                        children: [h.jsx("div", {
                            className: `
                                        max-w-[90%] px-3 py-2 rounded-lg text-sm shadow-md
                                        ${_ ? "bg-green-500/10 border border-green-500/30 text-gray-200 text-right" : "bg-[#2a3442] border border-gray-600 text-gray-300 text-left"}
                                    `,
                            children: h.jsxs("div", {
                                className: "font-medium break-words",
                                children: [h.jsxs("span", {
                                    className: `${_ ? "text-green-400" : "text-amber-500"} font-bold`,
                                    children: [E.senderName, " ", E.senderBadge ? `| ${E.senderBadge}` : ""]
                                }), h.jsx("span", {
                                    className: "text-gray-400 mx-1",
                                    children: ":"
                                }), h.jsx("span", {
                                    className: "text-gray-200",
                                    children: E.content
                                })]
                            })
                        }), h.jsx("span", {
                            className: `text-[10px] text-gray-500 mt-1 px-1 ${_ ? "text-right" : "text-left"}`,
                            children: new Date(E.createdAt).toLocaleTimeString([], {
                                hour: "2-digit",
                                minute: "2-digit"
                            })
                        })]
                    }, E.id)
                }
                ), h.jsx("div", {
                    ref: p
                })]
            }), h.jsx("form", {
                onSubmit: j,
                className: "p-3 bg-[#1a2332] border-t border-gray-700",
                children: h.jsxs("div", {
                    className: "flex gap-2",
                    children: [h.jsx("input", {
                        type: "text",
                        value: d,
                        onChange: E => f(E.target.value),
                        placeholder: "Type a message...",
                        className: "flex-1 bg-[#0a0f1a] border border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-200 focus:outline-none focus:border-amber-500/50 transition-colors"
                    }), h.jsx("button", {
                        type: "submit",
                        disabled: !d.trim() || y,
                        className: "bg-amber-500 hover:bg-amber-400 text-black p-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
                        children: h.jsx("svg", {
                            className: "w-5 h-5 transform rotate-90",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: h.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                            })
                        })
                    })]
                })
            })]
        }), h.jsx("button", {
            onClick: () => i(!n),
            className: `
                    w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 pointer-events-auto
                    ${n ? "bg-amber-500 rotate-90" : "bg-blue-600 hover:bg-blue-500"}
                `,
            children: n ? h.jsx("span", {
                className: "text-xl font-bold text-black",
                children: "✕"
            }) : h.jsx("span", {
                className: "text-2xl",
                children: "💬"
            })
        })]
    }) : null
}
function Kv() {
    const [r,n] = K.useState("duty")
      , [i,l] = K.useState(null)
      , [c,d] = K.useState([])
      , [f,y] = K.useState(!0)
      , [g,p] = K.useState(null)
      , [v,j] = K.useState(!1)
      , [E,_] = K.useState(!1)
      , [T,C] = K.useState(0);
    K.useEffect( () => {
        fetch(`./data.json?t=${new Date().getTime()}`).then(V => V.json()).then(V => {
            l(V),
            y(!1)
        }
        ).catch(V => {
            console.error("Failed to load data:", V),
            y(!1)
        }
        )
    }
    , []),
    K.useEffect( () => {
        const V = localStorage.getItem("fib_officer");
        localStorage.getItem("fib_admin") === "true" ? _(!0) : V && p(JSON.parse(V))
    }
    , []);
    const L = V => {
        p(V),
        j(V.isOnDuty || !1),
        localStorage.setItem("fib_officer", JSON.stringify(V))
    }
    ;
    K.useEffect( () => {
        const V = () => {
            if (g && g.id) {
                const I = `https://cggnqaymruqodczsucpc.supabase.co/rest/v1/officers?id=eq.${g.id}`;
                fetch(I, {
                    method: "PATCH",
                    headers: {
                        apikey: "sb_publishable_wKbBqtK2tWU9X7d-TicX1g_jShixD25",
                        Authorization: "Bearer sb_publishable_wKbBqtK2tWU9X7d-TicX1g_jShixD25",
                        "Content-Type": "application/json",
                        Prefer: "return=minimal"
                    },
                    body: JSON.stringify({
                        is_on_duty: !1
                    }),
                    keepalive: !0
                }).catch(X => console.error("Disconnect beacon failed:", X))
            }
        }
        ;
        return window.addEventListener("pagehide", V),
        window.addEventListener("beforeunload", V),
        () => {
            window.removeEventListener("pagehide", V),
            window.removeEventListener("beforeunload", V)
        }
    }
    , [g]);
    const U = () => {
        _(!0),
        localStorage.setItem("fib_admin", "true")
    }
      , Y = () => {
        p(null),
        _(!1),
        localStorage.removeItem("fib_officer"),
        localStorage.removeItem("fib_admin")
    }
      , G = V => {
        V !== r && Gy(),
        n(V),
        C(I => I + 1)
    }
      , z = [{
        id: "duty",
        label: "Duty",
        icon: "🚔"
    }, {
        id: "calculator",
        label: "Calculator",
        icon: "⚖️"
    }, {
        id: "patrol",
        label: "Patrol",
        icon: "📋"
    }, {
        id: "reference",
        label: "Reference",
        icon: "📻"
    }, {
        id: "report",
        label: "Report",
        icon: "📝"
    }];
    return f ? h.jsx("div", {
        className: "min-h-screen bg-[#0a0f1a] flex items-center justify-center",
        children: h.jsxs("div", {
            className: "text-center",
            children: [h.jsx("div", {
                className: "w-16 h-16 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"
            }), h.jsx("p", {
                className: "text-gray-400 uppercase tracking-wider",
                children: "Loading FIB Portal..."
            })]
        })
    }) : E ? h.jsx(Dv, {
        onLogout: Y
    }) : g ? h.jsxs("div", {
        className: "min-h-screen bg-[#0a0f1a] pb-20 md:pb-0 relative",
        children: [h.jsx(Ku, {}), h.jsx(Yv, {
            officer: g
        }), h.jsx(Vy, {
            officer: g,
            onLogout: Y,
            onDashboard: () => G("dashboard")
        }), h.jsx("main", {
            className: "max-w-7xl mx-auto px-4 py-6",
            children: h.jsxs("div", {
                className: "tab-content",
                children: [r === "dashboard" && h.jsx(Gv, {
                    officer: g
                }), r === "duty" && h.jsxs("div", {
                    className: "grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-6 md:mt-14",
                    children: [h.jsx($v, {
                        data: i,
                        officer: g
                    }), h.jsx("div", {
                        className: "hidden lg:block",
                        children: h.jsx("div", {
                            className: "sticky top-32",
                            children: h.jsx(Vv, {})
                        })
                    })]
                }), r === "calculator" && h.jsx(Uv, {
                    data: i,
                    selectedCharges: c,
                    setSelectedCharges: d
                }), r === "patrol" && h.jsx(Mv, {
                    data: i,
                    officer: g
                }), r === "reference" && h.jsx(qv, {
                    data: i
                }), r === "report" && h.jsx(Bv, {
                    data: i,
                    selectedCharges: c
                })]
            }, T)
        }), h.jsx("nav", {
            className: "fixed bottom-0 left-0 right-0 bg-[#1a2332] border-t border-gray-700 md:hidden z-50",
            children: h.jsx("div", {
                className: "flex justify-around",
                children: z.map(V => h.jsxs("button", {
                    onClick: () => G(V.id),
                    className: `flex-1 py-3 px-2 flex flex-col items-center gap-1 transition-all duration-300 ${r === V.id ? "text-amber-500 bg-[#2a3442]" : "text-gray-400 hover:text-gray-200"}`,
                    children: [h.jsx("span", {
                        className: `text-xl transition-transform duration-300 ${r === V.id ? "scale-110" : ""}`,
                        children: V.icon
                    }), h.jsx("span", {
                        className: "text-xs font-medium uppercase tracking-wide",
                        children: V.label
                    })]
                }, V.id))
            })
        }), h.jsx("nav", {
            className: "hidden md:block fixed top-16 left-0 right-0 bg-[#1a2332] border-b border-gray-700 z-40",
            children: h.jsx("div", {
                className: "max-w-7xl mx-auto px-4",
                children: h.jsx("div", {
                    className: "flex gap-1",
                    children: z.map(V => h.jsxs("button", {
                        onClick: () => G(V.id),
                        className: `py-3 px-6 flex items-center gap-2 transition-all duration-300 border-b-2 ${r === V.id ? "text-amber-500 border-amber-500 bg-[#2a3442]" : "text-gray-400 border-transparent hover:text-gray-200 hover:bg-[#2a3442]/50"}`,
                        children: [h.jsx("span", {
                            className: `transition-transform duration-300 ${r === V.id ? "scale-110" : ""}`,
                            children: V.icon
                        }), h.jsx("span", {
                            className: "font-medium uppercase tracking-wide",
                            children: V.label
                        })]
                    }, V.id))
                })
            })
        }), h.jsx("div", {
            className: "hidden md:block h-12"
        })]
    }) : h.jsx(kv, {
        onLogin: L,
        officers: i?.officers,
        onAdminAccess: U
    })
}
$y.createRoot(document.getElementById("root")).render(h.jsx(K.StrictMode, {
    children: h.jsx(Kv, {})
}));
