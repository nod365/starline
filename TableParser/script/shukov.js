!function t(e, i, s) {
    function r(o, a) {
        if (!i[o]) {
            if (!e[o]) {
                var h = "function" == typeof require && require;
                if (!a && h)
                    return h(o, !0);
                if (n)
                    return n(o, !0);
                var l = new Error("Cannot find module '" + o + "'");
                throw l.code = "MODULE_NOT_FOUND",
                l
            }
            var p = i[o] = {
                exports: {}
            };
            e[o][0].call(p.exports, (function (t) {
                return r(e[o][1][t] || t)
            }
            ), p, p.exports, t, e, i, s)
        }
        return i[o].exports
    }
    for (var n = "function" == typeof require && require, o = 0; o < s.length; o++)
        r(s[o]);
    return r
}({
    1: [function (t, e, i) {
        "use strict";
        var s = new (t("../v-js/v-export").V)({
            console: !!(null !== document.body.getAttribute("data-v-console") & "false" !== document.body.getAttribute("data-v-console")),
            page: document.body.getAttribute("data-v-page"),
            tablet: parseInt(document.body.getAttribute("data-v-tablet")),
            mobile: parseInt(document.body.getAttribute("data-v-mobile"))
        });
        s = s.init(),
            window.v = s
    }
        , {
        "../v-js/v-export": 2
    }],
    2: [function (t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var s = function (t, e) {
            if (Array.isArray(t))
                return t;
            if (Symbol.iterator in Object(t))
                return function (t, e) {
                    var i = []
                        , s = !0
                        , r = !1
                        , n = void 0;
                    try {
                        for (var o, a = t[Symbol.iterator](); !(s = (o = a.next()).done) && (i.push(o.value),
                            !e || i.length !== e); s = !0)
                            ;
                    } catch (t) {
                        r = !0,
                            n = t
                    } finally {
                        try {
                            !s && a.return && a.return()
                        } finally {
                            if (r)
                                throw n
                        }
                    }
                    return i
                }(t, e);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
            , r = function t(e, i, s) {
                null === e && (e = Function.prototype);
                var r = Object.getOwnPropertyDescriptor(e, i);
                if (void 0 === r) {
                    var n = Object.getPrototypeOf(e);
                    return null === n ? void 0 : t(n, i, s)
                }
                if ("value" in r)
                    return r.value;
                var o = r.get;
                return void 0 !== o ? o.call(s) : void 0
            }
            , n = function () {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var s = e[i];
                        s.enumerable = s.enumerable || !1,
                            s.configurable = !0,
                            "value" in s && (s.writable = !0),
                            Object.defineProperty(t, s.key, s)
                    }
                }
                return function (e, i, s) {
                    return i && t(e.prototype, i),
                        s && t(e, s),
                        e
                }
            }()
            , o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            }
                : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
            ;
        function a(t, e) {
            if (!t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }
        function h(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
                e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        function l(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        var p = i.V = function t(e) {
            for (var i in l(this, t),
                this.time = +new Date,
                this.prop = {
                    console: !0,
                    page: "index",
                    tablet: 1199,
                    mobile: 760
                },
                e)
                this.prop[i] = e[i];
            this.prefix = "v-",
                this.name = "V",
                this.eventListenerAttribute = "v_eventListeners"
        }
            ;
        Number.isInteger = Number.isInteger || function (t) {
            return "number" == typeof t && Number.isFinite(t) && !(t % 1)
        }
            ,
            Number.isFinite = Number.isFinite || function (t) {
                return "number" == typeof t && isFinite(t)
            }
            ,
            [].includes || (Array.prototype.includes = function (t) {
                var e = Object(this)
                    , i = parseInt(e.length) || 0;
                if (0 === i)
                    return !1;
                var s, r = parseInt(arguments[1]) || 0;
                for (0 <= r ? s = r : (s = i + r) < 0 && (s = 0); s < i;) {
                    var n = e[s];
                    if (t === n || t != t && n != n)
                        return !0;
                    s++
                }
                return !1
            }
            ),
            String.prototype.includes || (String.prototype.includes = function () {
                return -1 !== String.prototype.indexOf.apply(this, arguments)
            }
            ),
            "function" != typeof Object.assign && Object.defineProperty(Object, "assign", {
                value: function (t, e) {
                    if (null == t)
                        throw new TypeError("Cannot convert undefined or null to object");
                    for (var i = Object(t), s = 1; s < arguments.length; s++) {
                        var r = arguments[s];
                        if (null != r)
                            for (var n in r)
                                Object.prototype.hasOwnProperty.call(r, n) && (i[n] = r[n])
                    }
                    return i
                },
                writable: !0,
                configurable: !0
            }),
            "remove" in Element.prototype || (Element.prototype.remove = function () {
                this.parentNode && this.parentNode.removeChild(this)
            }
            ),
            p.prototype.loaded = !1,
            p.prototype.page = [],
            p.prototype.doc = document,
            p.prototype.document = document.documentElement,
            p.prototype.body = document.body,
            p.prototype.vw = [],
            p.prototype.vh = [],
            p.prototype.resize = [],
            p.prototype.timeMin = 25,
            p.prototype.ajaxTimeMax = 5e3,
            p.prototype.console = function () {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ""
                    , e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null
                    , i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "";
                if (!0 !== (3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : this.prop.console))
                    return !1;
                if (0 < t.length) {
                    var s = "font: 2.5em/1 Arial; color: #298DA4;"
                        , r = "font: 1.25em/1 Arial; color: dodgerblue;"
                        , n = "font: 1.25em/1 Arial; color: crimson;"
                        , o = "font: 1.25em/1 Arial; color: orange;"
                        , a = "font: 1.25em/1 Arial; color: darkgray;";
                    switch (i) {
                        case "title":
                            console.log("%c" + t, s);
                            break;
                        case "info":
                            console.info("%c" + t, r);
                            break;
                        case "error":
                            console.error("%c" + t, n);
                            break;
                        case "warn":
                            console.warn("%c" + t, o);
                            break;
                        default:
                            console.log("%c" + t, a)
                    }
                }
                return null !== e && console.dir(e),
                    !0
            }
            ,
            p.prototype.checkType = function () {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "function"
                    , e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1]
                    , i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                if ("function" === t)
                    return e && "[object Function]" === {}.toString.call(e);
                if ("dom" === t)
                    return null !== this.doc.querySelector(e);
                if ("htmlElement" === t)
                    return e instanceof HTMLElement;
                if ("object" === t)
                    return "object" === (void 0 === e ? "undefined" : o(e));
                if ("string" === t)
                    return "string" == typeof e;
                if ("number" === t)
                    return "number" == typeof e;
                if ("integer" === t)
                    return !!Number.isInteger(e);
                if ("boolean" === t)
                    return "boolean" == typeof e;
                if ("array" === t)
                    return !!Array.isArray(e);
                if ("bezier" === t) {
                    var s = !0;
                    if (!e)
                        return !1;
                    if (void 0 !== e.on ? "boolean" != typeof e.on && (s = !1) : s = !1,
                        "string" != typeof e.name)
                        if (e.values)
                            if (Array.isArray(e.values))
                                if (e.values.length < 4)
                                    s = !1;
                                else
                                    for (var r = 0; r < e.values.length; r++)
                                        "number" != typeof e.values[r] && (s = !1);
                            else
                                s = !1;
                        else
                            s = !1;
                    return s
                }
                if ("numberArray" === t) {
                    if (!Array.isArray(e))
                        return !1;
                    if (e.length < i.count)
                        return !1;
                    for (var n = 0; n < e.length; n++)
                        if ("number" != typeof e[n])
                            return !1;
                    return !0
                }
                if ("functionArray" === t) {
                    if (!Array.isArray(e))
                        return !1;
                    if (e.length < i.count)
                        return !1;
                    for (var a = 0; a < e.length; a++)
                        if ("function" != typeof e[a])
                            return !1;
                    return !0
                }
                if ("stringArray" === t) {
                    if (!Array.isArray(e))
                        return !1;
                    if (e.length < i.count)
                        return !1;
                    for (var h = 0; h < e.length; h++)
                        if ("string" != typeof e[h])
                            return !1;
                    return !0
                }
                if ("callback" === t)
                    return void 0 !== e.target && "number" == typeof e.target && void 0 !== e.do && !!this.checkType("function", e.do);
                if ("callbacks" === t) {
                    if (!Array.isArray(e))
                        return !1;
                    for (var l = 0; l < e.length; l++)
                        if (!this.checkType("callback", e[l]))
                            return !1;
                    return !0
                }
                if ("styleCallback" === t)
                    return void 0 !== e.scope && !!this.checkType("numberArray", e.scope, {
                        count: 2
                    }) && void 0 !== e.property && "string" == typeof e.property && void 0 !== e.value && !!this.checkType("function", e.value);
                if ("styleCallbacks" === t) {
                    if (!Array.isArray(e))
                        return !1;
                    for (var p = 0; p < e.length; p++)
                        if (!this.checkType("styleCallback", e[p]))
                            return !1;
                    return !0
                }
                return !1
            }
            ,
            p.prototype.checkTypes = function () {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {
                    obj: {},
                    name: "Name",
                    console: !0,
                    vars: []
                }
                    , e = t.obj
                    , i = void 0 === e ? {} : e
                    , s = t.name
                    , r = void 0 === s ? "Name" : s
                    , n = t.console
                    , o = void 0 === n || n
                    , a = t.vars
                    , h = void 0 === a ? [] : a;
                if (!this.checkType("object", i))
                    return !1;
                if (!this.checkType("string", r))
                    return !1;
                if (!this.checkType("boolean", o))
                    return !1;
                if (!this.checkType("array", h))
                    return !1;
                for (var l = [], p = 0; p < h.length; p++)
                    void 0 === i[h[p][0]] ? l.push(r + ". " + h[p][0] + " doesn't exist in") : this.checkType(h[p][1], i[h[p][0]], h[p][2]) || l.push(r + ". " + h[p][0] + " must be a " + h[p][1]);
                if (0 === l.length)
                    return !0;
                for (var u = 0; u < l.length; u++)
                    this.console(l[u], i, "error", o);
                return !1
            }
            ,
            p.prototype.childOf = function () {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null
                    , e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
                return null !== t && null !== e && function t() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null
                        , i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
                    if (null === e || null === i)
                        return !1;
                    var s = !1;
                    return e === i && (s = !0),
                        !0 === s || null !== e && t(e.parentNode, i)
                }(t, e)
            }
            ,
            p.prototype.removeChildren = function () {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
                if (!this.checkType("htmlElement", t))
                    return !1;
                for (; t.firstChild;)
                    t.removeChild(t.firstChild);
                return !0
            }
            ,
            p.prototype.insertAfter = function () {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null
                    , e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null
                    , i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                if (null == t || null == e)
                    return !1;
                var s = null == i ? t.parentNode : i
                    , r = t.nextSibling;
                return r ? s.insertBefore(e, r) : s.appendChild(e),
                    !0
            }
            ,
            p.prototype.bindEventListener = function () {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}
                    , e = {
                        el: null,
                        target: "",
                        do: function () { }
                    };
                for (var i in t)
                    e[i] = t[i];
                if (!this.checkType("htmlElement", e.el) & e.el != window)
                    return !1;
                if (!this.checkType("string", e.target))
                    return !1;
                if (!this.checkType("function", e.do))
                    return !1;
                this.checkType("object", e.el[this.eventListenerAttribute]) || (e.el[this.eventListenerAttribute] = {});
                var s = e.target + "__" + Math.random();
                return e.el.addEventListener(e.target, e.do, !1),
                    e.el[this.eventListenerAttribute][s] = e.do,
                {
                    el: e.el,
                    id: s
                }
            }
            ,
            p.prototype.getEventListener = function (t) {
                var e = {
                    el: null,
                    id: ""
                };
                for (var i in t)
                    e[i] = t[i];
                if (!this.checkType("htmlElement", e.el) & e.el != window)
                    return !1;
                if (!this.checkType("string", e.id))
                    return !1;
                if (!this.checkType("object", e.el[this.eventListenerAttribute]))
                    return !1;
                for (var s in e.el[this.eventListenerAttribute])
                    if (s === e.id)
                        return {
                            el: e.el,
                            id: e.id,
                            do: e.el[this.eventListenerAttribute][s]
                        };
                return !1
            }
            ,
            p.prototype.unbindEventListener = function (t) {
                var e = this.getEventListener(t);
                if (!e)
                    return !1;
                var i = e.id;
                return i = i.split("__"),
                    e.el.removeEventListener(i[0], e.do, !1),
                    delete e.el[this.eventListenerAttribute][e.id],
                    !0
            }
            ,
            p.prototype.loadEvent = function () {
                return this.load = [],
                    window.addEventListener("load", function () {
                        this.loaded = !0;
                        for (var t = 0; t < this.load.length; t++) {
                            var e = this.load[t][1];
                            this.checkType("function", e) && e()
                        }
                        this.body.classList.remove("v-loading"),
                            this.time = +new Date - this.time,
                            this.console("The page has been loaded for " + this.time / 1e3 + "s")
                    }
                        .bind(this)),
                    !0
            }
            ,
            p.prototype.addLoad = function (t) {
                var e = "load-" + +new Date / Math.random() * Math.random();
                return this.load.push([e, t]),
                    e
            }
            ,
            p.prototype.deleteLoad = function () {
                for (var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "", e = !1, i = 0; i < this.load.length; i++)
                    this.load[i][0] === t && (this.load[i][1] = [],
                        e = !0);
                return e
            }
            ,
            p.prototype.setPage = function () {
                for (var t = this.prop.page.split(" "), e = 0; e < t.length; e++)
                    this.page.push(t[e]),
                        this.document.classList.add(this.prefix + "page_" + t[e]);
                return this.console("Page:", this.page),
                    this.page
            }
            ,
            p.prototype.checkPage = function () {
                for (var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "index", e = 0; e < this.page.length; e++)
                    if (t === this.page[e])
                        return !0;
                return !1
            }
            ,
            p.prototype.setOS = function () {
                var t = 0;
                switch (-1 != navigator.userAgent.indexOf("Windows") && (t = 1),
                -1 != navigator.userAgent.indexOf("Linux") && (t = 2),
                -1 != navigator.userAgent.indexOf("Mac") && (t = 3),
                -1 != navigator.userAgent.indexOf("FreeBSD") && (t = 4),
                t) {
                    case 1:
                        return "windows";
                    case 2:
                        return "linux";
                    case 3:
                        return "macos";
                    case 4:
                        return "freebsd";
                    default:
                        return "unknown"
                }
            }
            ,
            p.prototype.setBrowser = function () {
                var t = !!window.opr && !!opr.addons || !!window.opera || 0 <= navigator.userAgent.indexOf(" OPR/")
                    , e = "undefined" != typeof InstallTrigger
                    , i = /constructor/i.test(window.HTMLElement) || "[object SafariRemoteNotification]" === (!window.safari || safari.pushNotification).toString()
                    , s = !!document.documentMode
                    , r = !s && !!window.StyleMedia
                    , n = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
                return t ? "opera" : e ? "firefox" : i ? "safari" : s ? "ie" : r ? "edge" : n ? "chrome" : "unknown"
            }
            ,
            p.prototype.mobileCheck = function () {
                var t, e = !1;
                return t = navigator.userAgent || navigator.vendor || window.opera,
                    (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))) && (e = !0),
                    e
            }
            ,
            p.prototype.Event = function (t) {
                function e() {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    l(this, e);
                    var i = a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                    for (var s in i.prop = {
                        console: i.prop.console
                    },
                        t)
                        i.prop[s] = t[s];
                    return i.name = "Event",
                        i.events = [],
                        i.targets = [],
                        i.setEvent(),
                        i
                }
                return h(e, p),
                    n(e, [{
                        key: "init",
                        value: function () {
                            var t = this;
                            return {
                                add: this.add.bind(this),
                                delete: this.delete.bind(this),
                                turn: this.turn.bind(this),
                                get: this.getEvent.bind(this),
                                events: function () {
                                    return t.events
                                }
                            }
                        }
                    }, {
                        key: "target",
                        value: function () {
                            for (var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "", e = !1, i = 0; i < this.targets.length; i++)
                                t === this.targets[i] && (e = !0);
                            return 0 === this.targets.length && (e = !0),
                                e
                        }
                    }, {
                        key: "do",
                        value: function (t) {
                            return !!this.checkType("function", t)
                        }
                    }, {
                        key: "checkEvent",
                        value: function () {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                            return !!this.do(t.do)
                        }
                    }, {
                        key: "add",
                        value: function () {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}
                                , e = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1]
                                , i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : this.prop.console;
                            if (this.checkEvent(t)) {
                                var s = this.name + "-" + +new Date + "-" + Math.random()
                                    , r = {
                                        id: s,
                                        on: e,
                                        data: t
                                    };
                                return this.events.push(r),
                                    this.console(this.name + '. Event "' + s + '" added', r, "info", i),
                                    this.addCallback(s),
                                    s
                            }
                            return !1
                        }
                    }, {
                        key: "delete",
                        value: function () {
                            for (var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "", e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : this.prop.console, i = !1, s = [], r = 0; r < this.events.length; r++)
                                null !== this.events[r] && (this.events[r].id === t ? (this.deleteCallback(t),
                                    i = !(this.events[r] = null),
                                    this.console(this.name + '. Event "' + t + '" deleted', null, "info", e)) : s.push(this.events[r]));
                            return this.events = s,
                                i
                        }
                    }, {
                        key: "deleteAll",
                        value: function () {
                            for (var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : this.prop.console, e = 0; e < this.events.length; e++)
                                if (null !== this.events[e]) {
                                    var i = this.events[e].id;
                                    this.deleteCallback(i),
                                        this.events[e] = null,
                                        this.console(this.name + '. Event "' + i + '" deleted', null, "info", t)
                                }
                            return this.events = [],
                                !0
                        }
                    }, {
                        key: "turn",
                        value: function () {
                            for (var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "", e = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1], i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : this.prop.console, s = !1, r = 0; r < this.events.length; r++)
                                null !== this.events[r] && this.events[r].id === t && (this.events[r].on = e,
                                    s = !0,
                                    this.console(this.name + '. Event "' + t + '" turned to ' + e, null, "info", i));
                            return this.turnCallback(t),
                                s
                        }
                    }, {
                        key: "setEvent",
                        value: function () {
                            return !0
                        }
                    }, {
                        key: "addCallback",
                        value: function () {
                            return !0
                        }
                    }, {
                        key: "turnCallback",
                        value: function () {
                            return !0
                        }
                    }, {
                        key: "deleteCallback",
                        value: function () {
                            return !0
                        }
                    }, {
                        key: "getEvent",
                        value: function () {
                            for (var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "", e = 0; e < this.events.length; e++)
                                if (null !== this.events[e] && this.events[e].id === t)
                                    return this.events[e];
                            return !1
                        }
                    }, {
                        key: "launchEvent",
                        value: function () {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null
                                , e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : function () { }
                                , i = 0;
                            return t.data.timeout && (i = t.data.timeout),
                                0 === i ? e() : setTimeout(e.bind(this), i),
                                !0
                        }
                    }, {
                        key: "launchEvents",
                        value: function () {
                            for (var t = 0; t < this.events.length; t++)
                                null !== this.events[t] && this.events[t].on && this.launchEvent(this.events[t], this.events[t].data.do.bind(this));
                            return !0
                        }
                    }, {
                        key: "launchEventsByTarget",
                        value: function () {
                            for (var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "", e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, i = 0; i < this.events.length; i++)
                                null !== this.events[i] && void 0 !== o(this.events[i].data.target) && this.events[i].data.target === t & this.events[i].on && this.launchEvent(this.events[i], this.events[i].data.do.bind(this, e));
                            return !0
                        }
                    }]),
                    e
            }(),
            p.prototype.Viewport = function (t) {
                function e() {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    l(this, e);
                    var i = a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                    return i.name = "Viewport",
                        i.targets = ["w", "h", "wh", "hw"],
                        i
                }
                return h(e, p.prototype.Event),
                    n(e, [{
                        key: "init",
                        value: function () {
                            var t = this;
                            return {
                                add: this.add.bind(this),
                                delete: this.delete.bind(this),
                                turn: this.turn.bind(this),
                                get: this.getEvent.bind(this),
                                events: function () {
                                    return t.events
                                },
                                vw: function () {
                                    return t.vw
                                },
                                vh: function () {
                                    return t.vh
                                },
                                dpr: function () {
                                    return t.dpr
                                },
                                desktop: function () {
                                    return t.desktop
                                },
                                tablet: function () {
                                    return t.tablet
                                },
                                mobile: function () {
                                    return t.mobile
                                }
                            }
                        }
                    }, {
                        key: "checkEvent",
                        value: function () {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                            return !(!r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "checkEvent", this).call(this, t) || !this.target(t.target) || t.timeout && !Number.isInteger(t.timeout))
                        }
                    }, {
                        key: "setEvent",
                        value: function () {
                            return window.addEventListener("resize", this.implement.bind(this)),
                                this.setViewport()
                        }
                    }, {
                        key: "implement",
                        value: function () {
                            this.vw[1] = this.document.clientWidth,
                                this.vh[1] = this.document.clientHeight;
                            for (var t = 0; t < this.events.length; t++)
                                null !== this.events[t] && void 0 !== o(this.events[t].data.target) & this.events[t].on && ("w" === this.events[t].data.target & this.vw[0] !== this.vw[1] && this.launchEvent(this.events[t], this.events[t].data.do.bind(this)),
                                    "h" === this.events[t].data.target & this.vh[0] !== this.vh[1] && this.launchEvent(this.events[t], this.events[t].data.do.bind(this)),
                                    "wh" !== this.events[t].data.target && "hw" !== this.events[t].data.target || this.launchEvent(this.events[t], this.events[t].data.do.bind(this)));
                            return this.setViewport(),
                                !0
                        }
                    }, {
                        key: "setViewport",
                        value: function () {
                            return this.vw = [this.document.clientWidth, this.document.clientWidth],
                                this.vh = [this.document.clientHeight, this.document.clientHeight],
                                this.dpr = this.getDPR(),
                                this.console("Viewport width: " + this.vw[1] + ". Viewport height: " + this.vh[1]),
                                this.setViewportClass(),
                                this.setViewportBreakpoints(),
                                this.setViewportMobile(),
                            {
                                vw: this.vw,
                                vh: this.vh,
                                dpr: this.dpr
                            }
                        }
                    }, {
                        key: "getDPR",
                        value: function () {
                            var t = 1;
                            return void 0 !== window.devicePixelRatio && (t = window.devicePixelRatio),
                                t
                        }
                    }, {
                        key: "setViewportClass",
                        value: function () {
                            this.vw[1] <= this.prop.tablet ? this.document.classList.add(this.prefix + "tablet") : this.document.classList.remove(this.prefix + "tablet"),
                                this.vw[1] <= this.prop.mobile ? this.document.classList.add(this.prefix + "mobile") : this.document.classList.remove(this.prefix + "mobile"),
                                this.vw[1] > this.vh[1] ? (this.document.classList.add(this.prefix + "landscape"),
                                    this.document.classList.remove(this.prefix + "protrait")) : this.vw[1] < this.vh[1] && (this.document.classList.remove(this.prefix + "landscape"),
                                        this.document.classList.add(this.prefix + "protrait"))
                        }
                    }, {
                        key: "setViewportBreakpoints",
                        value: function () {
                            this.vw[1] > this.prop.tablet ? (this.desktop = !0,
                                this.tablet = !1,
                                this.mobile = !1) : this.vw[1] > this.prop.mobile ? (this.desktop = !1,
                                    this.tablet = !0,
                                    this.mobile = !1) : (this.desktop = !1,
                                        this.tablet = !1,
                                        this.mobile = !0)
                        }
                    }, {
                        key: "setViewportMobile",
                        value: function () {
                            this.mobileCheck() ? this.document.classList.add(this.prefix + "mobile-device") : this.document.classList.remove(this.prefix + "mobile-device")
                        }
                    }]),
                    e
            }(),
            p.prototype.addResize = function (t) {
                var e = {};
                if (v.checkType("array", t)) {
                    if (t.length < 2)
                        return !1;
                    if (!this.checkType("function", t[1]))
                        return !1;
                    var i = this.timeMin;
                    t[2] ? Number.isInteger(t[2]) && (i = t[2]) : i = this.timeMin,
                        e = {
                            target: t[0],
                            do: t[1],
                            timeout: i,
                            name: "none"
                        }
                } else
                    e = t;
                return this.viewport.add(e)
            }
            ,
            p.prototype.deleteResize = function () {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "";
                return this.viewport.delete(t)
            }
            ,
            p.prototype.turnResize = function () {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ""
                    , e = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
                return this.viewport.turn(t, e)
            }
            ,
            p.prototype.getParam = function () {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {
                    name: "name",
                    url: window.location.href
                }
                    , e = t.name
                    , i = void 0 === e ? "name" : e
                    , s = t.url
                    , r = void 0 === s ? window.location.href : s;
                i = i.replace(/[\[\]]/g, "\\$&");
                var n = new RegExp("[?&]" + i + "(=([^&#]*)|&|#|$)").exec(r);
                return n ? n[2] ? decodeURIComponent(n[2].replace(/\+/g, " ")) : "" : null
            }
            ,
            p.prototype.setParam = function () {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {
                    name: "name",
                    value: "value",
                    push: !1,
                    url: ""
                }
                    , e = t.name
                    , i = void 0 === e ? "name" : e
                    , s = t.value
                    , r = void 0 === s ? "value" : s
                    , n = t.push
                    , o = void 0 === n || n
                    , a = t.url
                    , h = void 0 === a ? "" : a;
                i = encodeURI(i),
                    r = encodeURI(r);
                for (var l = null, p = "" === (l = 0 < h.length ? new URL(h) : window.location).search.substr(1) ? [] : l.search.substr(1).split("&"), u = p.length, d = void 0; u--;)
                    if ((d = p[u].split("="))[0] == i) {
                        d[1] = r,
                            p[u] = d.join("=");
                        break
                    }
                u < 0 && (p[p.length] = [i, r].join("="));
                var c = l.pathname + "?" + p.join("&");
                return 0 === r.length && (c = (c = (c = (c = c.replace("?" + i + "=&", "?")).replace("?" + i + "=", "")).replace("&" + i + "=", "")).replace(i + "=", "")),
                    !0 === o && window.history.pushState(null, "", c),
                    c
            }
            ,
            p.prototype.popState = function () {
                return !0
            }
            ,
            p.prototype.ajaxCache = {},
            p.prototype.ajaxGetCache = function () {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}
                    , e = !1;
                for (var i in this.ajaxCache)
                    if (i == t.url)
                        for (var s = 0; s < this.ajaxCache[i].length; s++) {
                            var r = this.ajaxCache[i][s];
                            if (t.method == r.method) {
                                var n = Object.keys(t.data).length
                                    , o = 0;
                                for (var a in r.data)
                                    for (var h in t.data)
                                        a == h & r.data[a] == t.data[h] && o++;
                                o == n && (e = r)
                            }
                        }
                return e
            }
            ,
            p.prototype.ajaxSetCache = function () {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                return void 0 === this.ajaxCache[t.url] && (this.ajaxCache[t.url] = []),
                    this.ajaxCache[t.url].push(t),
                    !0
            }
            ,
            p.prototype.ajaxClearCache = function () {
                return this.ajaxCache = {},
                    !0
            }
            ,
            p.prototype.ajax = function () {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                if (!this.checkType("object", t))
                    return !1;
                var e = {
                    method: "post",
                    url: window.location.href,
                    data: {},
                    cache: !1,
                    abortOnError: !0,
                    callback: function () { },
                    fail: function () { },
                    error: function () { }
                };
                for (var i in t)
                    e[i] = t[i];
                if (!this.checkTypes({
                    obj: e,
                    console: !1,
                    vars: [["method", "string"], ["url", "string"], ["data", "object"], ["cache", "boolean"], ["abortOnError", "boolean"], ["callback", "function"], ["fail", "function"], ["error", "function"]]
                }))
                    return !1;
                if (e.method = e.method.toLocaleLowerCase(),
                    "post" !== e.method & "get" !== e.method)
                    return !1;
                var s = !1;
                if (e.cache && (s = this.ajaxGetCache(e)),
                    s)
                    e.callback(s.content);
                else {
                    var r = $[e.method](e.url, e.data, function (t) {
                        e.cache && this.ajaxSetCache(Object.assign({
                            content: t
                        }, e)),
                            e.callback.call(this, t)
                    }
                        .bind(this)).fail(function (t, i) {
                            "error" == i & e.abortOnError ? e.error(t, i, t.responseText) : ("error" == i && e.error(t, i, t.responseText),
                                e.fail())
                        }
                            .bind(this));
                    setTimeout(function (t) {
                        t.abort()
                    }
                        .bind(this, r), this.ajaxTimeMax)
                }
                return !0
            }
            ,
            p.prototype.bezier = function () {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {
                    values: [1, 1, 1, 1],
                    x: 0,
                    t: 1,
                    b: 0,
                    c: 0,
                    d: 1e3,
                    name: null
                }
                    , e = t.values
                    , i = void 0 === e ? [1, 1, 1, 1] : e
                    , s = t.x
                    , r = void 0 === s ? 0 : s
                    , n = t.t
                    , o = void 0 === n ? 1 : n
                    , a = t.b
                    , h = void 0 === a ? 0 : a
                    , l = t.c
                    , p = void 0 === l ? 0 : l
                    , u = t.d
                    , d = void 0 === u ? 1e3 : u
                    , c = t.name
                    , v = void 0 === c ? null : c
                    , f = o;
                if (null === v)
                    f = this.bezierCurve(i, o);
                else
                    switch (v) {
                        case "easeInQuad":
                            return p * (o /= d) * o + h;
                        case "easeOutQuad":
                            return -p * (o /= d) * (o - 2) + h;
                        case "easeInOutQuad":
                            return (o /= d / 2) < 1 ? p / 2 * o * o + h : -p / 2 * (--o * (o - 2) - 1) + h;
                        case "easeInCubic":
                            return p * (o /= d) * o * o + h;
                        case "easeOutCubic":
                            return p * ((o = o / d - 1) * o * o + 1) + h;
                        case "easeInOutCubic":
                            return (o /= d / 2) < 1 ? p / 2 * o * o * o + h : p / 2 * ((o -= 2) * o * o + 2) + h;
                        case "easeInQuart":
                            return p * (o /= d) * o * o * o + h;
                        case "easeOutQuart":
                            return -p * ((o = o / d - 1) * o * o * o - 1) + h;
                        case "easeInOutQuart":
                            return (o /= d / 2) < 1 ? p / 2 * o * o * o * o + h : -p / 2 * ((o -= 2) * o * o * o - 2) + h;
                        case "easeInQuint":
                            return p * (o /= d) * o * o * o * o + h;
                        case "easeOutQuint":
                            return p * ((o = o / d - 1) * o * o * o * o + 1) + h;
                        case "easeInOutQuint":
                            return (o /= d / 2) < 1 ? p / 2 * o * o * o * o * o + h : p / 2 * ((o -= 2) * o * o * o * o + 2) + h;
                        case "easeInSine":
                            return -p * Math.cos(o / d * (Math.PI / 2)) + p + h;
                        case "easeOutSine":
                            return p * Math.sin(o / d * (Math.PI / 2)) + h;
                        case "easeInOutSine":
                            return -p / 2 * (Math.cos(Math.PI * o / d) - 1) + h;
                        case "easeInExpo":
                            return 0 == o ? h : p * Math.pow(2, 10 * (o / d - 1)) + h;
                        case "easeOutExpo":
                            return o == d ? h + p : p * (1 - Math.pow(2, -10 * o / d)) + h;
                        case "easeInOutExpo":
                            return 0 == o ? h : o == d ? h + p : (o /= d / 2) < 1 ? p / 2 * Math.pow(2, 10 * (o - 1)) + h : p / 2 * (2 - Math.pow(2, -10 * --o)) + h;
                        case "easeInCirc":
                            return -p * (Math.sqrt(1 - (o /= d) * o) - 1) + h;
                        case "easeOutCirc":
                            return p * Math.sqrt(1 - (o = o / d - 1) * o) + h;
                        case "easeInOutCirc":
                            return (o /= d / 2) < 1 ? -p / 2 * (Math.sqrt(1 - o * o) - 1) + h : p / 2 * (Math.sqrt(1 - (o -= 2) * o) + 1) + h;
                        case "easeInElastic":
                            var g = 1.70158;
                            return 0 == o ? h : 1 == (o /= d) ? h + p : ((m = 0) || (m = .3 * d),
                                (y = p) < Math.abs(p) ? (y = p,
                                    g = m / 4) : g = m / (2 * Math.PI) * Math.asin(p / y),
                                -y * Math.pow(2, 10 * (o -= 1)) * Math.sin((o * d - g) * (2 * Math.PI) / m) + h);
                        case "easeOutElastic":
                            return g = 1.70158,
                                0 == o ? h : 1 == (o /= d) ? h + p : ((m = 0) || (m = .3 * d),
                                    (y = p) < Math.abs(p) ? (y = p,
                                        g = m / 4) : g = m / (2 * Math.PI) * Math.asin(p / y),
                                    y * Math.pow(2, -10 * o) * Math.sin((o * d - g) * (2 * Math.PI) / m) + p + h);
                        case "easeInOutElastic":
                            var m, y;
                            return g = 1.70158,
                                0 == o ? h : 2 == (o /= d / 2) ? h + p : ((m = 0) || (m = d * (.3 * 1.5)),
                                    (y = p) < Math.abs(p) ? (y = p,
                                        g = m / 4) : g = m / (2 * Math.PI) * Math.asin(p / y),
                                    o < 1 ? y * Math.pow(2, 10 * (o -= 1)) * Math.sin((o * d - g) * (2 * Math.PI) / m) * -.5 + h : y * Math.pow(2, -10 * (o -= 1)) * Math.sin((o * d - g) * (2 * Math.PI) / m) * .5 + p + h);
                        case "easeInBack":
                            return null == g && (g = 1.70158),
                                p * (o /= d) * o * ((g + 1) * o - g) + h;
                        case "easeOutBack":
                            return null == g && (g = 1.70158),
                                p * ((o = o / d - 1) * o * ((g + 1) * o + g) + 1) + h;
                        case "easeInOutBack":
                            return null == g && (g = 1.70158),
                                (o /= d / 2) < 1 ? p / 2 * (o * o * ((1 + (g *= 1.525)) * o - g)) + h : p / 2 * ((o -= 2) * o * ((1 + (g *= 1.525)) * o + g) + 2) + h;
                        case "easeInBounce":
                            return p - this.bezier({
                                name: "easeOutBounce",
                                x: r,
                                t: d - o,
                                b: 0,
                                c: p,
                                d: d
                            }) + h;
                        case "easeOutBounce":
                            return (o /= d) < 1 / 2.75 ? p * (7.5625 * o * o) + h : o < 2 / 2.75 ? p * (7.5625 * (o -= 1.5 / 2.75) * o + .75) + h : o < 2.5 / 2.75 ? p * (7.5625 * (o -= 2.25 / 2.75) * o + .9375) + h : p * (7.5625 * (o -= 2.625 / 2.75) * o + .984375) + h;
                        case "easeInOutBounce":
                            return o < d / 2 ? .5 * this.bezier({
                                name: "easeOutBounce",
                                x: r,
                                t: 2 * o,
                                b: 0,
                                c: p,
                                d: d
                            }) + h : .5 * this.bezier({
                                name: "easeOutBounce",
                                x: r,
                                t: 2 * o - d,
                                b: 0,
                                c: p,
                                d: d
                            }) + .5 * p + h;
                        default:
                            f = o
                    }
                return f
            }
            ,
            p.prototype.bezierCurve = function (t, e) {
                var i = s(t, 4)
                    , r = i[0]
                    , n = i[1]
                    , o = i[2]
                    , a = i[3];
                if (r === n && o === a)
                    return e;
                for (var h = [], l = 0; l < 11; ++l)
                    h[l] = this.bezierCalc(.1 * l, r, o);
                return 0 === e ? 0 : 1 === e ? 1 : this.bezierCalc(this.bezierCurveGetX([r, n, o, a], e, h), n, a)
            }
            ,
            p.prototype.bezierCurveGetX = function (t, e, i) {
                for (var r = s(t, 4), n = r[0], o = (r[1],
                    r[2]), a = (r[3],
                        0), h = 1; 10 !== h && i[h] <= e; ++h)
                    a += .1;
                var l = a + (e - i[--h]) / (i[h + 1] - i[h]) * .1
                    , p = this.bezierCurveGetSlope(l, n, o);
                return .001 <= p ? this.bezierCurveNewtonRaphsonIterate(e, l, n, o) : 0 === p ? l : this.bezierCurveBinarySubdivide(e, a, a + .1, n, o)
            }
            ,
            p.prototype.bezierCurveGetSlope = function (t, e, i) {
                return 3 * this.bezierCalcA(e, i) * t * t + 2 * this.bezierCalcB(e, i) * t + this.bezierCalcC(e)
            }
            ,
            p.prototype.bezierCurveNewtonRaphsonIterate = function (t, e, i, s) {
                for (var r = 0; r < 4; ++r) {
                    var n = this.bezierCurveGetSlope(e, i, s);
                    if (0 === n)
                        return e;
                    e -= (this.bezierCalc(e, i, s) - t) / n
                }
                return e
            }
            ,
            p.prototype.bezierCurveBinarySubdivide = function (t, e, i, s, r) {
                for (var n, o, a = 0; o = e + (i - e) / 2,
                    0 < (n = this.bezierCalc(o, s, r) - t) ? i = o : e = o,
                    1e-7 < Math.abs(n) && ++a < 10;)
                    ;
                return o
            }
            ,
            p.prototype.bezierCalc = function (t, e, i) {
                return ((this.bezierCalcA(e, i) * t + this.bezierCalcB(e, i)) * t + this.bezierCalcC(e)) * t
            }
            ,
            p.prototype.bezierCalcA = function (t, e) {
                return 1 - 3 * e + 3 * t
            }
            ,
            p.prototype.bezierCalcB = function (t, e) {
                return 3 * e - 6 * t
            }
            ,
            p.prototype.bezierCalcC = function (t) {
                return 3 * t
            }
            ,
            p.prototype.depthPercent = function () {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {
                    scope: [0, 1],
                    t: .5
                }
                    , e = t.scope
                    , i = void 0 === e ? [0, 1] : e
                    , s = t.t
                    , r = void 0 === s ? .5 : s;
                return !!this.checkType("numberArray", i, {
                    count: 2
                }) && "number" == typeof r && (r - i[0]) / (i[1] - i[0])
            }
            ,
            p.prototype.randInt = function () {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0
                    , e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 100;
                if (!Number.isInteger(t))
                    return !1;
                if (!Number.isInteger(e))
                    return !1;
                if (t = Math.ceil(t),
                    e = Math.ceil(e),
                    t < 0 || 1e10 < e)
                    return 0;
                var i = t + Math.random() * (e - t);
                return Math.round(i)
            }
            ,
            p.prototype.radians = function (t) {
                return t * Math.PI / 180
            }
            ,
            p.prototype.degrees = function (t) {
                return 180 * t / Math.PI
            }
            ,
            p.prototype.shuffle = function (t) {
                var e = void 0
                    , i = void 0
                    , s = void 0;
                for (s = t.length - 1; 0 < s; s--)
                    e = Math.floor(Math.random() * (s + 1)),
                        i = t[s],
                        t[s] = t[e],
                        t[e] = i;
                return t
            }
            ,
            p.prototype.imageSize = function () {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {
                    img: null,
                    size: "cover",
                    width: 100,
                    height: 100,
                    maxWidth: o,
                    maxHeight: h
                }
                    , e = t.img
                    , i = void 0 === e ? null : e
                    , s = t.size
                    , r = void 0 === s ? "cover" : s
                    , n = t.width
                    , o = void 0 === n ? 100 : n
                    , a = t.height
                    , h = void 0 === a ? 100 : a
                    , l = t.maxWidth
                    , p = void 0 === l ? o : l
                    , u = t.maxHeight
                    , d = void 0 === u ? h : u;
                if (null === i)
                    return !1;
                if ("cover" !== r & "contain" !== r)
                    return !1;
                if ("number" != typeof o)
                    return !1;
                if ("number" != typeof h)
                    return !1;
                if ("number" != typeof p)
                    return !1;
                if ("number" != typeof d)
                    return !1;
                var c = 0
                    , v = 0
                    , f = 0
                    , g = 0
                    , m = 0
                    , y = 0;
                return "VIDEO" == i.tagName ? (m = i.videoWidth,
                    y = i.videoHeight) : (m = i.width,
                        y = i.height),
                    "cover" === r ? (f = 0,
                        g = (h - (v = y * (c = o) / m)) / 2,
                        v < h && (f = (o - (c = m * (v = h) / y)) / 2,
                            g = 0),
                        p === o && d === h || (f = (p - c) / 2,
                            g = (d - v) / 2)) : "contain" === r && (y < m ? (f = 0,
                                g = (h - (v = y * (c = o) / m)) / 2) : m <= y && (f = (o - (c = m * (v = h) / y)) / 2,
                                    g = 0)),
                {
                    img: i,
                    imageWidth: c,
                    imageHeight: v,
                    x: f,
                    y: g,
                    size: r
                }
            }
            ,
            p.prototype.Keydown = function (t) {
                function e() {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    l(this, e);
                    var i = a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                    return i.name = "Keydown",
                        i.syncInterval = 250,
                        i.targets = ["stack", "once", "sync"],
                        i
                }
                return h(e, p.prototype.Event),
                    n(e, [{
                        key: "checkEvent",
                        value: function () {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                            if (!r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "checkEvent", this).call(this, t))
                                return !1;
                            if (!this.target(t.target))
                                return !1;
                            if (!t.key)
                                return !1;
                            for (var i = 0; i < t.key.length; i++)
                                if (!Number.isInteger(t.key[i]))
                                    return !1;
                            return !(t.timeout && !Number.isInteger(t.timeout))
                        }
                    }, {
                        key: "implement",
                        value: function (t) {
                            for (var e = 0; e < this.events.length; e++)
                                if (null !== this.events[e] && !0 === this.events[e].on) {
                                    if ("once" === this.events[e].data.target && t.keyCode === this.events[e].data.key[0] && this.launchEvent(this.events[e], this.events[e].data.do.bind(t, this.events[e])),
                                        "stack" === this.events[e].data.target) {
                                        if (void 0 === this.events[e].string && (this.events[e].string = ""),
                                            this.events[e].string += "-" + t.keyCode,
                                            void 0 === this.events[e].compareString) {
                                            this.events[e].compareString = "";
                                            for (var i = 0; i < this.events[e].data.key.length; i++)
                                                this.events[e].compareString += "-" + this.events[e].data.key[i]
                                        }
                                        this.events[e].string.includes(this.events[e].compareString) && (this.launchEvent(this.events[e], this.events[e].data.do.bind(t, this.events[e])),
                                            this.events[e].string = "")
                                    }
                                    if ("sync" === this.events[e].data.target) {
                                        void 0 === this.events[e].array && (this.events[e].array = []),
                                            this.events[e].array.push(t.keyCode),
                                            setTimeout(function (t) {
                                                t.array = []
                                            }
                                                .bind(this, this.events[e]), this.syncInterval);
                                        for (var s = 0, r = 0; r < this.events[e].data.key.length; r++)
                                            for (var n = 0; n < this.events[e].array.length; n++)
                                                this.events[e].data.key[r] === this.events[e].array[n] && s++;
                                        this.events[e].data.key.length === s && (this.launchEvent(this.events[e], this.events[e].data.do.bind(t, this.events[e])),
                                            this.events[e].array = [])
                                    }
                                }
                            return !0
                        }
                    }, {
                        key: "setEvent",
                        value: function () {
                            return this.document.addEventListener("keydown", function (t) {
                                this.implement(t)
                            }
                                .bind(this)),
                                !0
                        }
                    }]),
                    e
            }(),
            p.prototype.DragSwipe = function (t) {
                function e() {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    l(this, e);
                    var i = a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                    return i.name = "DragSwipe",
                        i.targets = ["start", "end", "move", "up", "down", "left", "right"],
                        i.targetsOnce = ["up", "down", "left", "right"],
                        i.x = null,
                        i.y = null,
                        i.xStart = null,
                        i.yStart = null,
                        i.global = {
                            x: 0,
                            y: 0
                        },
                        i.startedBool = !1,
                        i
                }
                return h(e, p.prototype.Event),
                    n(e, [{
                        key: "checkEvent",
                        value: function () {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                            return !(!r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "checkEvent", this).call(this, t) || !this.target(t.target) || t.timeout && !Number.isInteger(t.timeout))
                        }
                    }, {
                        key: "eventNeeded",
                        value: function (t, e, i) {
                            var s = 3 < arguments.length && void 0 !== arguments[3] && arguments[3];
                            if (null === e)
                                return !1;
                            if (!0 !== e.on)
                                return !1;
                            void 0 === e.data.outer && (e.data.outer = this.body);
                            var r = !1;
                            return void 0 === e.data.ignoreOuter ? r = !1 : e.data.ignoreOuter && (r = !0),
                                s && (r = !0),
                                !(!r && !0 !== this.childOf(t.target, e.data.outer)) && e.data.target == i && e
                        }
                    }, {
                        key: "eventImplement",
                        value: function () {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ""
                                , e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : ""
                                , i = arguments[2];
                            if ("start" == e && (this.startedBool = !0),
                                !("start" != e & !this.startedBool)) {
                                "end" == e && (this.startedBool = !1),
                                    this.global = {
                                        x: this.x,
                                        y: this.y
                                    },
                                    "start" == e ? (this.x = i.pageX,
                                        this.y = i.pageY,
                                        this.xStart = i.pageX,
                                        this.yStart = i.pageY,
                                        "swipe" == t && (this.x = i.targetTouches[0].pageX,
                                            this.y = i.targetTouches[0].pageY,
                                            this.xStart = i.targetTouches[0].pageX,
                                            this.yStart = i.targetTouches[0].pageY),
                                        this.global.x = this.x,
                                        this.global.y = this.y) : (this.global.x = i.pageX,
                                            this.global.y = i.pageY,
                                            "swipe" == t && ("end" != e & !this.targetsOnce.includes(e) ? (this.global.x = i.targetTouches[0].pageX,
                                                this.global.y = i.targetTouches[0].pageY) : (this.global.x = i.changedTouches[0].pageX,
                                                    this.global.y = i.changedTouches[0].pageY)));
                                var s = !1;
                                "end" == e && (s = !0);
                                for (var r = 0; r < this.events.length; r++) {
                                    var n = this.eventNeeded(i, this.events[r], e, s);
                                    if (n) {
                                        this.events[r] = n;
                                        var o = this.events[r].data.outer
                                            , a = {
                                                top: 0,
                                                left: 0
                                            }
                                            , h = {
                                                x: 0,
                                                y: 0
                                            }
                                            , l = {
                                                x: 0,
                                                y: 0
                                            };
                                        h.x = this.global.x,
                                            h.y = this.global.y,
                                            o != window & o != this.doc & o != this.body && (a = o.getBoundingClientRect(),
                                                h.x = this.global.x - a.left,
                                                h.y = this.global.y - a.top),
                                            l.x = h.x - (this.x - a.left),
                                            l.y = h.y - (this.y - a.top),
                                            this.launchEventCoords(this.events[r], this.global, h, l)
                                    }
                                }
                                "start" != e && (this.x = this.global.x,
                                    this.y = this.global.y)
                            }
                        }
                    }, {
                        key: "launchEventCoords",
                        value: function (t, e, i, s) {
                            if (this.targetsOnce.includes(t.data.target))
                                return this.launchEventOnce(t, e, i, s);
                            this.launchEvent(t, t.data.do.bind(this, {
                                global: e,
                                inner: i,
                                diff: s
                            }, t))
                        }
                    }, {
                        key: "launchEventOnce",
                        value: function (t, e, i, s) {
                            var r = !1;
                            "up" == t.data.target && e.y < this.yStart && Math.abs(this.yStart - e.y) > Math.abs(t.data.k) && (r = !0),
                                "down" == t.data.target && e.y > this.yStart && Math.abs(this.yStart - e.y) > Math.abs(t.data.k) && (r = !0),
                                "left" == t.data.target && e.x < this.xStart && Math.abs(this.xStart - e.x) > Math.abs(t.data.k) && (r = !0),
                                "right" == t.data.target && e.x > this.xStart && Math.abs(this.xStart - e.x) > Math.abs(t.data.k) && (r = !0),
                                r && this.launchEvent(t, t.data.do.bind(this, t))
                        }
                    }]),
                    e
            }(),
            p.prototype.Swipe = function (t) {
                function e() {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    l(this, e);
                    var i = a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                    return i.name = "Swipe",
                        i
                }
                return h(e, p.prototype.DragSwipe),
                    n(e, [{
                        key: "setEvent",
                        value: function () {
                            var t = this;
                            return this.body.addEventListener("touchstart", this.eventImplement.bind(this, "swipe", "start")),
                                this.body.addEventListener("touchmove", this.eventImplement.bind(this, "swipe", "move")),
                                this.document.addEventListener("touchend", (function (e) {
                                    t.eventImplement("swipe", "up", e),
                                        t.eventImplement("swipe", "down", e),
                                        t.eventImplement("swipe", "left", e),
                                        t.eventImplement("swipe", "right", e),
                                        t.eventImplement("swipe", "end", e)
                                }
                                )),
                                !0
                        }
                    }]),
                    e
            }(),
            p.prototype.Drag = function (t) {
                function e() {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    l(this, e);
                    var i = a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                    return i.name = "Drag",
                        i
                }
                return h(e, p.prototype.DragSwipe),
                    n(e, [{
                        key: "setEvent",
                        value: function () {
                            var t = this;
                            return this.document.addEventListener("mousedown", (function (e) {
                                1 == e.which && t.eventImplement("drag", "start", e)
                            }
                            )),
                                this.document.addEventListener("mousemove", this.eventImplement.bind(this, "drag", "move")),
                                this.document.addEventListener("mouseup", (function (e) {
                                    t.eventImplement("drag", "up", e),
                                        t.eventImplement("drag", "down", e),
                                        t.eventImplement("drag", "left", e),
                                        t.eventImplement("drag", "right", e),
                                        t.eventImplement("drag", "end", e)
                                }
                                )),
                                window.addEventListener("blur", (function (e) {
                                    t.eventImplement("drag", "end", e)
                                }
                                )),
                                !0
                        }
                    }]),
                    e
            }(),
            p.prototype.Wheel = function (t) {
                function e() {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    l(this, e);
                    var i = a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                    return i.name = "Wheel",
                        i.targets = ["up", "down", "left", "right"],
                        i.timeInterval = 200,
                        i
                }
                return h(e, p.prototype.Event),
                    n(e, [{
                        key: "checkEvent",
                        value: function () {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                            return !(!r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "checkEvent", this).call(this, t) || !this.target(t.target) || !t.k || !this.checkType("number", t.k) || t.timeout && !Number.isInteger(t.timeout) || !this.checkType("htmlElement", t.outer))
                        }
                    }, {
                        key: "add",
                        value: function () {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}
                                , i = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1]
                                , s = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : this.prop.console;
                            t.time = (new Date).getTime();
                            var n = r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "add", this).call(this, t, i, s);
                            return !1 !== n ? this.setEventListener(n) : n
                        }
                    }, {
                        key: "implement",
                        value: function () {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ""
                                , e = arguments[1]
                                , i = this.getEvent(t);
                            if (i && null !== i && !0 === i.on) {
                                var s = (new Date).getTime();
                                if (!(s - i.data.time < this.timeInterval)) {
                                    i.data.time = s;
                                    var r = this.normalizeWheel(e)
                                        , n = r.spinY
                                        , o = r.spinX;
                                    return "up" === i.data.target && n < 0 & n < -1 * i.data.k && this.launchEvent(i, i.data.do.bind(e, i)),
                                        "down" === i.data.target && 0 < n & n > i.data.k && this.launchEvent(i, i.data.do.bind(e, i)),
                                        "left" === i.data.target && o < 0 & o < -1 * i.data.k && this.launchEvent(i, i.data.do.bind(e, i)),
                                        "right" === i.data.target && 0 < o & o > i.data.k && this.launchEvent(i, i.data.do.bind(e, i)),
                                        !0
                                }
                            }
                        }
                    }, {
                        key: "setEventListener",
                        value: function () {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ""
                                , e = this.getEvent(t);
                            return !!e && (e.data.outer.addEventListener("wheel", this.implement.bind(this, t)),
                                e.id)
                        }
                    }]),
                    e
            }(),
            p.prototype.Interval = function (t) {
                function e() {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    l(this, e);
                    var i = a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                    return i.name = "Interval",
                        i
                }
                return h(e, p.prototype.Event),
                    n(e, [{
                        key: "checkEvent",
                        value: function () {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                            return !!(r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "checkEvent", this).call(this, t) && this.target(t.target) && t.time && Number.isInteger(t.time))
                        }
                    }, {
                        key: "addCallback",
                        value: function () {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ""
                                , e = this.getEvent(t);
                            return !!e && (e.onUniversal = e.on,
                                e.intervalFunc = !1,
                                e.on && this.on(t),
                                window.addEventListener("focus", this.on.bind(this, t, "window")),
                                window.addEventListener("blur", this.off.bind(this, t, "window")),
                                !0)
                        }
                    }, {
                        key: "turnCallback",
                        value: function () {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ""
                                , e = this.getEvent(t);
                            return !!e && (e.on ? this.on(t) : this.off(t),
                                !0)
                        }
                    }, {
                        key: "deleteCallback",
                        value: function () {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ""
                                , e = this.getEvent(t);
                            return !(!e || (!1 !== e.intervalFunc && clearInterval(e.intervalFunc),
                                e.intervalFunc = !1,
                                e.on = !1,
                                e.onUniversal = !1))
                        }
                    }, {
                        key: "on",
                        value: function () {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ""
                                , e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null
                                , i = this.getEvent(t);
                            if (!i)
                                return !1;
                            this.off(t, e);
                            var s = !1;
                            return "window" === e ? i.onUniversal && (s = !0) : s = !0,
                                s && (i.intervalFunc = setInterval(i.data.do.bind(this, i), i.data.time),
                                    i.on = !0,
                                    i.onUniversal = !0),
                                !0
                        }
                    }, {
                        key: "off",
                        value: function () {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ""
                                , e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null
                                , i = this.getEvent(t);
                            return !!i && (!1 !== i.intervalFunc && clearInterval(i.intervalFunc),
                                i.intervalFunc = !1,
                                i.on = !1,
                                "window" !== e && (i.onUniversal = !1),
                                !0)
                        }
                    }]),
                    e
            }(),
            p.prototype.normalizeWheel_PIXEL_STEP = 10,
            p.prototype.normalizeWheel_LINE_HEIGHT = 40,
            p.prototype.normalizeWheel_PAGE_HEIGHT = 800,
            p.prototype.normalizeWheel = function (t) {
                var e = 0
                    , i = 0
                    , s = 0
                    , r = 0;
                return "detail" in t && (i = t.detail),
                    "wheelDelta" in t && (i = -t.wheelDelta / 120),
                    "wheelDeltaY" in t && (i = -t.wheelDeltaY / 120),
                    "wheelDeltaX" in t && (e = -t.wheelDeltaX / 120),
                    "axis" in t && t.axis === t.HORIZONTAL_AXIS && (e = i,
                        i = 0),
                    s = e * this.normalizeWheel_PIXEL_STEP,
                    r = i * this.normalizeWheel_PIXEL_STEP,
                    "deltaY" in t && (r = t.deltaY),
                    "deltaX" in t && (s = t.deltaX),
                    (s || r) && t.deltaMode && (1 == t.deltaMode ? (s *= this.normalizeWheel_LINE_HEIGHT,
                        r *= this.normalizeWheel_LINE_HEIGHT) : (s *= this.normalizeWheel_PAGE_HEIGHT,
                            r *= this.normalizeWheel_PAGE_HEIGHT)),
                    s && !e && (e = s < 1 ? -1 : 1),
                    r && !i && (i = r < 1 ? -1 : 1),
                {
                    spinX: e,
                    spinY: i,
                    pixelX: s,
                    pixelY: r
                }
            }
            ,
            p.prototype.Class = function (t) {
                function e() {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    l(this, e);
                    var i = a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                    for (var s in i.name = i.constructor.name,
                        i.prop = Object.assign(i.prop, {
                            v: window.v,
                            console: void 0 === window.v || window.v.prop().console,
                            eventsStorage: !1
                        }),
                        t)
                        i.prop[s] = t[s];
                    return (i.eventsStorage = i).eventsStorageCustom = !1,
                        i.checkType("object", i.prop.eventsStorage) && i.prop.eventsStorage.hasOwnProperty("addEventListener") & i.prop.eventsStorage.hasOwnProperty("removeEventListeners") & i.prop.eventsStorage.hasOwnProperty("getEventListeners") && (i.eventsStorage = i.prop.eventsStorage,
                            i.eventsStorageCustom = !0),
                        i
                }
                return h(e, p.prototype.Event),
                    n(e, [{
                        key: "check",
                        value: function () {
                            return !0
                        }
                    }, {
                        key: "checkEvent",
                        value: function () {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                            return !(t.timeout && !Number.isInteger(t.timeout) || !this.do(t.do))
                        }
                    }, {
                        key: "changeProp",
                        value: function () {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                            for (var e in t)
                                this.prop[e] = t[e];
                            return this.check()
                        }
                    }, {
                        key: "removeEventListeners",
                        value: function () {
                            if (this.eventsStorageCustom)
                                return this.eventsStorage.removeEventListeners();
                            this.checkType("array", this.eventListeners) || (this.eventListeners = []);
                            for (var t = 0; t < this.eventListeners.length; t++)
                                this.unbindEventListener(this.eventListeners[t]);
                            return this.eventListeners = [],
                                !0
                        }
                    }, {
                        key: "addEventListener",
                        value: function () {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                            if (this.eventsStorageCustom)
                                return this.eventsStorage.addEventListener(t);
                            var e = this.bindEventListener(t);
                            return !!e && (this.eventListeners.push(e),
                                !0)
                        }
                    }, {
                        key: "getEventListeners",
                        value: function () {
                            return this.eventsStorageCustom ? this.eventsStorage.getEventListeners() : this.eventListeners
                        }
                    }, {
                        key: "init",
                        value: function () {
                            var t = this;
                            return this.eventListeners = [],
                                !!this.check() && (this.console(this.name + ". Using " + this.name + " for", this.prop, "info", this.prop.console),
                                {
                                    removeEventListeners: this.eventsStorage.removeEventListeners.bind(this),
                                    addEventListener: this.eventsStorage.addEventListener.bind(this),
                                    getEventListeners: this.eventsStorage.getEventListeners.bind(this),
                                    add: this.add.bind(this),
                                    delete: this.delete.bind(this),
                                    turn: this.turn.bind(this),
                                    events: function () {
                                        return t.events
                                    },
                                    prop: function () {
                                        return t.prop
                                    },
                                    changeProp: this.changeProp.bind(this),
                                    targets: function () {
                                        return t.targets
                                    },
                                    launchEventsByTarget: this.launchEventsByTarget.bind(this)
                                })
                        }
                    }]),
                    e
            }(),
            p.prototype.Preloader = function (t) {
                function e() {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    l(this, e);
                    var i = a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                    for (var s in i.prefix = i.prefix + "preloader",
                        i.dataPrefix = "data-" + i.prefix,
                        i.prop = Object.assign(i.prop, {
                            selector: "#" + i.prefix,
                            animation: 750,
                            animationInner: 25,
                            progress: {
                                on: !1,
                                animate: !1,
                                k: .01,
                                forceEnd: !1,
                                duration: 3e3,
                                bezier: {
                                    on: !1,
                                    name: "linear"
                                }
                            },
                            hide: !0
                        }),
                        t)
                        i.prop[s] = t[s];
                    return i.targets = ["progress", "progressAnimate", "hide", "hidden"],
                        i
                }
                return h(e, p.prototype.Class),
                    n(e, [{
                        key: "check",
                        value: function () {
                            var t = this.checkTypes({
                                obj: this.prop,
                                name: this.name,
                                console: this.prop.console,
                                vars: [["selector", "dom"], ["animation", "integer"], ["animationInner", "integer"], ["progress", "object"], ["hide", "boolean"]]
                            });
                            return !!t && !!(t = this.checkTypes({
                                obj: this.prop.progress,
                                name: this.name,
                                console: this.prop.console,
                                vars: [["on", "boolean"], ["animate", "boolean"], ["k", "number"], ["forceEnd", "boolean"], ["duration", "number"], ["bezier", "bezier"]]
                            })) && (this.outer = this.prop.v.document().querySelector(this.prop.selector),
                                this.outer.classList.add("" + this.prefix),
                                !0)
                        }
                    }, {
                        key: "checkEvent",
                        value: function () {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                            return void 0 === t.target && (t.target = "hidden"),
                                r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "checkEvent", this).call(this, t)
                        }
                    }, {
                        key: "setStyles",
                        value: function () {
                            return this.outer.style.opacity = "1",
                                this.outer.style.transition = this.prop.animation / 1e3 + "s",
                                !0
                        }
                    }, {
                        key: "start",
                        value: function () {
                            var t = this;
                            return this.prop.animationInner = this.prop.animationInner + this.prop.v.timeMin(),
                                setTimeout((function () {
                                    t.outer.classList.add(t.prefix + "_animate")
                                }
                                ), this.prop.v.timeMin()),
                                this.setEvents(),
                                !0
                        }
                    }, {
                        key: "setEvents",
                        value: function () {
                            var t = this;
                            this.prop.v.addLoad((function () {
                                t.loaded = !0,
                                    t.onloaded()
                            }
                            )),
                                this.prop.progress.on && (this.getImages(),
                                    this.getVideos(),
                                    this.resourcesTotal = this.images.length + this.videos.length,
                                    this.resourcesLoad(),
                                    this.prop.progress.animate && this.progressFrameSet())
                        }
                    }, {
                        key: "getImages",
                        value: function () {
                            for (var t = this.prop.v.document().querySelectorAll("*:not(script)"), e = 0; e < t.length; e++) {
                                var i = getComputedStyle(t[e]).backgroundImage;
                                -1 == i.indexOf("none") & -1 == i.indexOf("-gradient") ? -1 != i.indexOf("url") && (i = i.match(/url\((.*?)\)/)[1].replace(/\"/g, ""),
                                    this.images.push(i)) : "IMG" == t[e].tagName && this.images.push(t[e].src)
                            }
                        }
                    }, {
                        key: "getVideos",
                        value: function () {
                            for (var t = this.prop.v.document().querySelectorAll("video"), e = 0; e < t.length; e++)
                                this.videos.push(t[e])
                        }
                    }, {
                        key: "resourcesLoad",
                        value: function () {
                            for (var t = this, e = 0; e < this.images.length; e++) {
                                var i = new Image;
                                i.onload = function () {
                                    t.resourceOnloaded()
                                }
                                    ,
                                    i.onerror = function () {
                                        t.resourceOnloaded()
                                    }
                                    ,
                                    i.src = this.images[e]
                            }
                            for (var s = 0; s < this.videos.length; s++)
                                this.videos[s].load(),
                                    this.videos[s].onloadeddata = function () {
                                        t.resourceOnloaded()
                                    }
                        }
                    }, {
                        key: "resourceOnloaded",
                        value: function () {
                            this.resourcesLoaded++,
                                this.currentProgress = this.resourcesLoaded / this.resourcesTotal,
                                this.launchEventsByTarget("progress", {
                                    progress: this.currentProgress,
                                    loaded: this.resourcesLoaded,
                                    total: this.resourcesTotal
                                })
                        }
                    }, {
                        key: "addResourcesTotal",
                        value: function () {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 1;
                            this.resourcesTotal += t
                        }
                    }, {
                        key: "addResourcesLoaded",
                        value: function () {
                            for (var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 1, e = 0; e < t; e++)
                                this.resourceOnloaded()
                        }
                    }, {
                        key: "progressFrameSet",
                        value: function () {
                            this.progressFrameId = window.requestAnimationFrame(this.progressFrame.bind(this))
                        }
                    }, {
                        key: "progressFrame",
                        value: function () {
                            if (this.progressBool) {
                                if (this.animationProgress += (this.currentProgress - this.animationProgress) * this.prop.progress.k,
                                    .99 <= this.animationProgress)
                                    return this.animationProgress = 1,
                                        this.onloaded(),
                                        cancelAnimationFrame(this.progressFrameId),
                                        void this.launchEventsByTarget("progressAnimate", {
                                            progress: this.animationProgress,
                                            loaded: this.resourcesLoaded,
                                            total: this.resourcesTotal
                                        });
                                this.launchEventsByTarget("progressAnimate", {
                                    progress: this.animationProgress,
                                    loaded: this.resourcesLoaded,
                                    total: this.resourcesTotal
                                }),
                                    this.progressFrameId = window.requestAnimationFrame(this.progressFrame.bind(this))
                            }
                        }
                    }, {
                        key: "progressFrameForce",
                        value: function (t, e) {
                            var i = 1 - this.animationProgress
                                , s = e * i;
                            if (s == i)
                                return this.animationProgress = 1,
                                    this.onloaded(),
                                    void this.launchEventsByTarget("progressAnimate", {
                                        progress: this.animationProgress,
                                        loaded: this.resourcesLoaded,
                                        total: this.resourcesTotal
                                    });
                            this.launchEventsByTarget("progressAnimate", {
                                progress: this.animationProgress + s,
                                loaded: this.resourcesLoaded,
                                total: this.resourcesTotal
                            })
                        }
                    }, {
                        key: "onloaded",
                        value: function () {
                            if (this.loaded) {
                                if (this.prop.progress.on) {
                                    if (this.resourcesTotal > this.resourcesLoaded)
                                        return;
                                    if (this.prop.progress.animate && this.animationProgress < 1) {
                                        if (!this.prop.progress.forceEnd)
                                            return;
                                        if (null == this.forceEndAnimate)
                                            return cancelAnimationFrame(this.progressFrameId),
                                                this.progressBool = !1,
                                                this.forceEndAnimate = new this.Animate({
                                                    console: this.prop.console,
                                                    duration: this.prop.progress.duration,
                                                    bezier: this.prop.progress.bezier,
                                                    do: this.progressFrameForce.bind(this)
                                                }),
                                                this.forceEndAnimate = this.forceEndAnimate.init(),
                                                void this.forceEndAnimate.run()
                                    }
                                }
                                this.launchEventsByTarget("hide"),
                                    this.prop.hide && this.hide()
                            }
                        }
                    }, {
                        key: "hide",
                        value: function () {
                            var t = this.getInterval();
                            0 === t ? this.hideAnimate() : setTimeout(this.hideAnimate.bind(this), t)
                        }
                    }, {
                        key: "getInterval",
                        value: function () {
                            var t = +new Date - this.startTime
                                , e = 0;
                            return t < this.prop.animationInner && (e = this.prop.animationInner - t),
                                e
                        }
                    }, {
                        key: "hideAnimate",
                        value: function () {
                            this.outer.style.opacity = "0",
                                this.outer.classList.add(this.prefix + "_animated"),
                                setTimeout(function () {
                                    this.outer.classList.add(this.prefix + "_hidden"),
                                        this.onhidden()
                                }
                                    .bind(this), this.prop.animation)
                        }
                    }, {
                        key: "onhidden",
                        value: function () {
                            this.hidden = !0,
                                this.launchEventsByTarget("hidden"),
                                this.console(this.name + ". Hide", null, "info", this.prop.console)
                        }
                    }, {
                        key: "init",
                        value: function () {
                            var t = this
                                , i = r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "init", this).call(this);
                            return !!i && (this.startTime = +new Date,
                                this.hidden = !1,
                                this.loaded = !1,
                                this.images = [],
                                this.videos = [],
                                this.resourcesTotal = 0,
                                this.resourcesLoaded = 0,
                                this.currentProgress = 0,
                                this.animationProgress = 0,
                                this.progressFrameId = null,
                                this.progressBool = !0,
                                this.forceEndAnimate = null,
                                this.setStyles(),
                                this.start(),
                                Object.assign(i, {
                                    hidden: function () {
                                        return t.hidden
                                    },
                                    loaded: function () {
                                        return t.loaded
                                    },
                                    resourcesTotal: function () {
                                        return t.resourcesTotal
                                    },
                                    resourcesLoaded: function () {
                                        return t.resourcesLoaded
                                    },
                                    animationProgress: function () {
                                        return t.animationProgress
                                    },
                                    hide: this.hide.bind(this),
                                    addResourcesTotal: this.addResourcesTotal.bind(this),
                                    addResourcesLoaded: this.addResourcesLoaded.bind(this)
                                }))
                        }
                    }]),
                    e
            }(),
            p.prototype.Scrollbar = function (t) {
                function e() {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    l(this, e);
                    var i = a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                    for (var s in i.prefix = i.prefix + "scrollbar",
                        i.prop = Object.assign(i.prop, {
                            selector: "#" + i.prefix,
                            init: !0
                        }),
                        t)
                        i.prop[s] = t[s];
                    return i
                }
                return h(e, p.prototype.Class),
                    n(e, [{
                        key: "check",
                        value: function () {
                            return !!this.checkTypes({
                                obj: this.prop,
                                name: this.name,
                                console: this.prop.console,
                                vars: [["selector", "dom"], ["init", "boolean"]]
                            }) && (this.outer = this.prop.v.document().querySelector(this.prop.selector),
                                !0)
                        }
                    }, {
                        key: "destroy",
                        value: function () {
                            return jQuery(this.outer).scrollbar("destroy"),
                                this.outer.classList.remove("scrollbar-macosx"),
                                !0
                        }
                    }, {
                        key: "create",
                        value: function () {
                            return this.outer.classList.add("scrollbar-macosx"),
                                jQuery(this.outer).scrollbar(),
                                !0
                        }
                    }, {
                        key: "init",
                        value: function () {
                            var t = this;
                            return !!r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "init", this).call(this) && (this.outer.classList.add("" + this.prefix),
                                this.prop.init && this.create(),
                            {
                                create: this.create.bind(this),
                                destroy: this.destroy.bind(this),
                                prop: function () {
                                    return t.prop
                                },
                                changeProp: this.changeProp.bind(this)
                            })
                        }
                    }]),
                    e
            }(),
            p.prototype.Animate = function (t) {
                function e() {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    l(this, e);
                    var i = a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                    for (var s in i.prop = Object.assign(i.prop, {
                        duration: 250,
                        scope: [0, 1],
                        durationAuto: !1,
                        delay: 0,
                        bezier: {
                            on: !1,
                            values: [1, 1, 1, 1]
                        },
                        do: function (t, e) { }
                    }),
                        t)
                        i.prop[s] = t[s];
                    return i
                }
                return h(e, p.prototype.Class),
                    n(e, [{
                        key: "check",
                        value: function () {
                            var t = this.checkTypes({
                                obj: this.prop,
                                name: this.name,
                                console: this.prop.console,
                                vars: [["duration", "number"], ["scope", "numberArray", {
                                    count: 2
                                }], ["durationAuto", "boolean"], ["delay", "number"], ["bezier", "bezier"], ["do", "function"]]
                            });
                            return !!t && (this.prop.duration = parseInt(this.prop.duration),
                                this.prop.delay = parseInt(this.prop.delay),
                                !!(t = this.checkTypes({
                                    obj: this.prop,
                                    name: this.name,
                                    console: this.prop.console,
                                    vars: [["duration", "integer"], ["delay", "integer"]]
                                })))
                        }
                    }, {
                        key: "animate",
                        value: function () {
                            this.animating = !0;
                            var t = [this.prop.scope[0], this.prop.scope[1]];
                            this.continued && (t[0] = this.stopValue,
                                this.reversed && (t[1] = this.stopValue,
                                    t[0] = this.prop.scope[0]));
                            var e = this.prop.duration;
                            this.prop.durationAuto && (e = (t[1] - t[0]) * this.prop.duration);
                            var i = t[1] - t[0]
                                , s = (Date.now() - this.time) / e
                                , r = s * i + t[0];
                            1 <= s && (r = t[s = 1],
                                this.animating = !1);
                            var n = r;
                            if (1 !== s && this.stopped && (this.stopValue = r,
                                this.animating = !1),
                                this.reversed && (r = (t[1] - t[0]) * (1 - s) + t[0],
                                    1 <= s && (r = this.prop.scope[0],
                                        this.reversed = !1)),
                                n = r,
                                this.prop.bezier.on) {
                                var o = {};
                                for (var a in this.prop.bezier)
                                    o[a] = this.prop.bezier[a];
                                o.t = r,
                                    o.b = t[0],
                                    o.c = t[1],
                                    o.d = t[1],
                                    n = this.bezier(o)
                            }
                            1 !== s && this.stopped && (this.stopValue = r,
                                this.animating = !1),
                                this.prop.do(r, n),
                                this.stopped || s < 1 && window.requestAnimationFrame(this.animate.bind(this))
                        }
                    }, {
                        key: "imitate",
                        value: function () {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0
                                , e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : t;
                            this.prop.do(t, e)
                        }
                    }, {
                        key: "run",
                        value: function () {
                            return !this.animating && (this.stopped ? (this.continued = !0,
                                this.stopped = !1,
                                this.time = Date.now(),
                                window.requestAnimationFrame(this.animate.bind(this))) : (this.continued = !1,
                                    0 === this.prop.delay ? (this.time = Date.now(),
                                        window.requestAnimationFrame(this.animate.bind(this))) : setTimeout(function () {
                                            this.time = Date.now(),
                                                window.requestAnimationFrame(this.animate.bind(this))
                                        }
                                            .bind(this), this.prop.delay)),
                                !0)
                        }
                    }, {
                        key: "reverse",
                        value: function () {
                            return !this.animating && (this.reversed = !0,
                                this.run())
                        }
                    }, {
                        key: "stop",
                        value: function () {
                            return !!this.animating && (this.stopped = !0)
                        }
                    }, {
                        key: "init",
                        value: function () {
                            var t = this;
                            return !!r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "init", this).call(this) && (this.continued = !1,
                                this.stopValue = 0,
                                this.stopped = !1,
                                this.animating = !1,
                                this.reversed = !1,
                                this.time = Date.now(),
                            {
                                run: this.run.bind(this),
                                reverse: this.reverse.bind(this),
                                stop: this.stop.bind(this),
                                imitate: this.imitate.bind(this),
                                prop: function () {
                                    return t.prop
                                },
                                changeProp: this.changeProp.bind(this)
                            })
                        }
                    }]),
                    e
            }(),
            p.prototype.AnimationFrame = function (t) {
                function e() {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    l(this, e);
                    var i = a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                    for (var s in i.prefix = i.prefix + "animationFrame",
                        i.prop = Object.assign(i.prop, {
                            fps: 60,
                            run: !0
                        }),
                        t)
                        i.prop[s] = t[s];
                    return i
                }
                return h(e, p.prototype.Class),
                    n(e, [{
                        key: "check",
                        value: function () {
                            return !!this.checkTypes({
                                obj: this.prop,
                                name: this.name,
                                console: this.prop.console,
                                vars: [["fps", "integer"], ["run", "boolean"]]
                            })
                        }
                    }, {
                        key: "changeProp",
                        value: function (t) {
                            var i = this.prop.run;
                            return !!r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "changeProp", this).call(this, t) && (this.prop.run !== i && this.run(),
                                !0)
                        }
                    }, {
                        key: "run",
                        value: function () {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0;
                            this.prop.run && (window.requestAnimationFrame(this.run.bind(this)),
                                this.animate(t))
                        }
                    }, {
                        key: "animate",
                        value: function (t) {
                            null == this.time && (this.time = t);
                            var e = Math.floor((t - this.time) / (1e3 / this.prop.fps));
                            e > this.frame && (this.frame = e,
                                this.launchEvents())
                        }
                    }, {
                        key: "init",
                        value: function () {
                            var t = r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "init", this).call(this);
                            return !!t && (this.time = null,
                                this.frame = -1,
                                this.run(),
                                t)
                        }
                    }]),
                    e
            }(),
            p.prototype.TextAnimate = function (t) {
                function e() {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    l(this, e);
                    var i = a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                    for (var s in i.prefix = i.prefix + "text",
                        i.prop = Object.assign(i.prop, {
                            selector: "#" + i.prefix,
                            resize: !0
                        }),
                        t)
                        i.prop[s] = t[s];
                    return i.types = ["letter", "word", "string", "stringletter", "stringword"],
                        i
                }
                return h(e, p.prototype.Class),
                    n(e, [{
                        key: "check",
                        value: function () {
                            return !!this.checkTypes({
                                obj: this.prop,
                                name: this.name,
                                console: this.prop.console,
                                vars: [["selector", "dom"], ["resize", "boolean"]]
                            }) && (this.outer = this.prop.v.document().querySelector(this.prop.selector),
                                !0)
                        }
                    }, {
                        key: "changeProp",
                        value: function (t) {
                            return !!r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "changeProp", this).call(this, t) && (this.setEvents(),
                                !0)
                        }
                    }, {
                        key: "split",
                        value: function () {
                            return this.splitted || (this.text = this.outer.innerText,
                                this.splitLetters(),
                                this.splitLettersSpan(),
                                this.splitWords(),
                                this.splitWordsSpan(),
                                this.splitted = !0),
                                this.splitStrings(),
                                !0
                        }
                    }, {
                        key: "splitLetters",
                        value: function () {
                            for (var t = 0; t < this.text.length; t++)
                                this.letters.push(this.text[t]);
                            return !0
                        }
                    }, {
                        key: "splitLettersSpan",
                        value: function () {
                            for (var t = 0; t < this.letters.length; t++) {
                                var e = {
                                    element: null,
                                    spaces: !1,
                                    clear: !1,
                                    content: ""
                                }
                                    , i = document.createElement("span");
                                i.classList.add(this.prefix + "__letter"),
                                    i.classList.add(this.prefix + "__letter_" + t),
                                    32 === this.letters[t].charCodeAt(0) || 160 === this.letters[t].charCodeAt(0) ? (i.innerHTML = "&nbsp;",
                                        e.spaces = !0) : 10 === this.letters[t].charCodeAt(0) ? ((i = document.createElement("div")).classList.add("clear"),
                                            i.classList.add(this.prefix + "__space"),
                                            i.classList.add(this.prefix + "__space_" + t),
                                            i.innerHTML = "",
                                            e.clear = !0) : (i.innerHTML = this.letters[t],
                                                i.classList.add(this.prefix + "__letter_code-" + this.letters[t].charCodeAt().toString(16))),
                                    e.element = i,
                                    e.content = i.innerHTML,
                                    this.elements.letters.push(e)
                            }
                            this.outer.innerHTML = "";
                            for (var s = 0; s < this.elements.letters.length; s++)
                                this.outer.appendChild(this.elements.letters[s].element);
                            return !0
                        }
                    }, {
                        key: "splitWords",
                        value: function () {
                            for (var t = -1, e = void 0, i = 0, s = 0; i < this.elements.letters.length; i++)
                                this.elements.letters[i].clear && (s += 1),
                                    t !== s && (e = {
                                        element: null,
                                        spaces: !1,
                                        clear: this.elements.letters[i].clear,
                                        letters: [],
                                        content: ""
                                    },
                                        this.elements.words.push(e)),
                                    e.letters.push(this.elements.letters[i]),
                                    t = s,
                                    (this.elements.letters[i].spaces || this.elements.letters[i].clear) && s++;
                            for (var r = 0; r < this.elements.words.length; r++) {
                                for (var n = 0, o = 0; o < this.elements.words[r].letters.length; o++)
                                    this.elements.words[r].letters[o].spaces && n++,
                                        this.elements.words[r].content += this.elements.words[r].letters[o].content;
                                n === this.elements.words[r].letters.length && (this.elements.words[r].spaces = !0)
                            }
                            return !0
                        }
                    }, {
                        key: "splitWordsSpan",
                        value: function () {
                            for (var t = 0; t < this.elements.words.length; t++) {
                                var e = document.createElement("span");
                                e.classList.add(this.prefix + "__word"),
                                    e.classList.add(this.prefix + "__word_" + t),
                                    this.elements.words[t].clear && ((e = document.createElement("div")).classList.add("clear"),
                                        e.classList.add(this.prefix + "__clear"),
                                        e.classList.add(this.prefix + "__clear_" + t)),
                                    this.outer.appendChild(e),
                                    this.elements.words[t].element = e
                            }
                            for (var i = 0; i < this.elements.words.length; i++)
                                for (var s = 0; s < this.elements.words[i].letters.length; s++)
                                    this.elements.words[i].element.appendChild(this.elements.words[i].letters[s].element);
                            for (var r = [], n = 0; n < this.elements.words.length; n++)
                                this.elements.words[n].clear || r.push(this.elements.words[n]);
                            return this.elements.words = r,
                                !0
                        }
                    }, {
                        key: "splitStrings",
                        value: function () {
                            var t = null
                                , e = -1
                                , i = void 0;
                            this.elements.strings = [];
                            for (var s = 0, r = -1; s < this.elements.words.length; s++)
                                this.elements.words[s].element.getBoundingClientRect().top !== t && r++,
                                    e !== r && (i = {
                                        spaces: !1,
                                        clear: !1,
                                        words: [],
                                        content: ""
                                    },
                                        this.elements.strings.push(i)),
                                    i.words.push(this.elements.words[s]),
                                    e = r,
                                    t = this.elements.words[s].element.getBoundingClientRect().top;
                            for (var n = 0; n < this.elements.strings.length; n++) {
                                for (var o = 0, a = 0; a < this.elements.strings[n].words.length; a++)
                                    this.elements.strings[n].words[a].spaces && o++,
                                        this.elements.strings[n].content += this.elements.strings[n].words[a].content;
                                o === this.elements.strings[n].words.length && (this.elements.strings[n].spaces = !0)
                            }
                            return !0
                        }
                    }, {
                        key: "setEvents",
                        value: function () {
                            return this.prop.resize ? null == this.resizeId && (this.resizeId = this.prop.v.viewport.add({
                                target: "wh",
                                name: this.name + " Resize",
                                do: this.eventResize.bind(this),
                                timeout: this.prop.v.timeMin()
                            })) : null !== this.resizeId && (this.prop.v.viewport.delete(this.resizeId),
                                this.resizeId = null),
                                !0
                        }
                    }, {
                        key: "eventResize",
                        value: function () {
                            return !!this.splitted && (this.splitStrings(),
                                !0)
                        }
                    }, {
                        key: "checkVars",
                        value: function (t) {
                            var e = {
                                types: ["letter"],
                                delay: 0,
                                duration: 250,
                                bezier: {
                                    on: !1,
                                    name: "linear"
                                },
                                letter: [],
                                word: [],
                                string: [],
                                strings: [],
                                shift: .2,
                                shiftString: .2,
                                ignoreSpaces: !0,
                                reverse: !1,
                                shuffle: !1,
                                callbacks: []
                            };
                            for (var i in t)
                                e[i] = t[i];
                            return !!this.checkTypes({
                                obj: e,
                                name: this.name,
                                console: this.prop.console,
                                vars: [["types", "stringArray", {
                                    count: 1
                                }], ["delay", "integer"], ["duration", "integer"], ["bezier", "bezier"], ["shift", "number"], ["shiftString", "number"], ["ignoreSpaces", "boolean"], ["reverse", "boolean"], ["shuffle", "boolean"], ["strings", "array"], ["callbacks", "callbacks"], ["letter", "styleCallbacks"], ["word", "styleCallbacks"], ["string", "styleCallbacks"]]
                            }) && e
                        }
                    }, {
                        key: "animate",
                        value: function (t) {
                            if (this.animating)
                                return !1;
                            if (!this.checkVars(t))
                                return !1;
                            t = this.checkVars(t);
                            for (var e = 0; e < t.types.length; e++) {
                                var i = t.types[e]
                                    , s = i;
                                "letter" !== i && "word" !== i || (s = "elementary"),
                                    "stringletter" !== i && "stringword" !== i || (s = "string_elementary"),
                                    "string" === i && (s = "string"),
                                    void 0 !== this["animate_" + s] && (this.animating = !0,
                                        setTimeout(this["animate_" + s].bind(this, t, i), t.delay))
                            }
                            return !0
                        }
                    }, {
                        key: "calcTime",
                        value: function (t) {
                            for (var e = [], i = 0, s = 0, r = 0, n = 0; r < t.elements.length; r++)
                                !0 === t.ignoreSpaces ? !0 !== t.elements[r].spaces && (s = n * t.duration * t.shift,
                                    n++) : (s = n * t.duration * shift,
                                        n++),
                                    e.push({
                                        time: s,
                                        percent: 0
                                    }),
                                    i = s;
                            var o = i + t.duration;
                            o = parseInt(o);
                            for (var a = 0; a < e.length; a++)
                                e[a].percent = e[a].time / o,
                                    e[a].percentEnd = (e[a].time + t.duration) / o;
                            return {
                                intervals: e,
                                duration: t.duration,
                                durationFull: o,
                                elements: t.elements,
                                shift: t.shift
                            }
                        }
                    }, {
                        key: "splitAnimate",
                        value: function (t) {
                            for (var e = [], i = 0; i < t.callbacks.length; i++)
                                e.push({
                                    target: t.callbacks[i].target,
                                    do: t.callbacks[i].do,
                                    proceeded: !1
                                });
                            var s = new this.Animate({
                                console: this.prop.console,
                                duration: t.animationInfo.durationFull,
                                do: function (t, e, i, s, r) {
                                    for (var n = 0; n < t.intervals.length; n++) {
                                        var o;
                                        o = s < t.intervals[n].percent ? 0 : s >= t.intervals[n].percent & s <= t.intervals[n].percentEnd ? this.depthPercent({
                                            scope: [t.intervals[n].percent, t.intervals[n].percentEnd],
                                            t: s
                                        }) : 1,
                                            e(t.elements[n], o)
                                    }
                                    1 === s && (this.animating = !1);
                                    for (var a = 0; a < i.length; a++)
                                        s >= i[a].target && (i[a].proceeded || (i[a].do(s),
                                            i[a].proceeded = !0))
                                }
                                    .bind(this, t.animationInfo, t.do, e)
                            });
                            return (s = s.init()).run(),
                                !0
                        }
                    }, {
                        key: "setStylesSimple",
                        value: function (t) {
                            for (var e = 0; e < t.properties.length; e++) {
                                var i = t.properties[e].scope
                                    , s = 0
                                    , r = 0;
                                if (t.progress >= i[0] & t.progress < i[1] ? s = this.depthPercent({
                                    scope: i,
                                    t: t.progress
                                }) : t.progress >= i[1] && (s = 1),
                                    t.bezier.on) {
                                    var n = {};
                                    for (var o in t.bezier)
                                        n[o] = t.bezier[o];
                                    n.t = s,
                                        n.b = 0,
                                        n.c = 1,
                                        n.d = 1,
                                        r = this.bezier(n)
                                } else
                                    r = s;
                                var a = t.properties[e].property
                                    , h = t.properties[e].value(r);
                                t.element.element.style[a] = h
                            }
                        }
                    }, {
                        key: "setStyles",
                        value: function (t) {
                            var e = new this.Animate({
                                console: this.prop.console,
                                duration: t.animationData.duration,
                                bezier: t.bezier,
                                do: function (t, e, i, s) {
                                    for (var r = 0; r < e.length; r++) {
                                        var n = e[r].scope
                                            , o = 0;
                                        s >= n[0] & s < n[1] ? o = this.depthPercent({
                                            scope: n,
                                            t: s
                                        }) : s >= n[1] && (o = 1);
                                        var a = e[r].property
                                            , h = e[r].value(o);
                                        t.element.style[a] = h
                                    }
                                }
                                    .bind(this, t.element, t.properties)
                            });
                            return (e = e.init()).run(),
                                !0
                        }
                    }, {
                        key: "init",
                        value: function () {
                            var t = this;
                            return !!r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "init", this).call(this) && (this.outer.classList.add("" + this.prefix),
                                this.defaultHTML = this.outer.innerHTML,
                                this.splitted = !1,
                                this.animating = !1,
                                this.text = "",
                                this.letters = [],
                                this.elements = {
                                    letters: [],
                                    words: [],
                                    strings: []
                                },
                                this.resizeId = null,
                                this.split(),
                                this.setEvents(),
                            {
                                elements: function () {
                                    return t.elements
                                },
                                split: this.splitStrings.bind(this),
                                animate: this.animate.bind(this),
                                animating: function () {
                                    return t.animating
                                },
                                changeProp: this.changeProp.bind(this)
                            })
                        }
                    }]),
                    e
            }(),
            p.prototype.TextAnimate.prototype.animate_elementary = function (t, e) {
                var i = [];
                i = "word" === e ? this.elements.words : this.elements.letters;
                var s;
                s = "word" === e ? t.word : t.letter,
                    t.reverse && (i = i.slice()).reverse(),
                    t.shuffle && (i = i.slice(),
                        this.shuffle(i));
                var r = this.calcTime({
                    elements: i,
                    duration: t.duration,
                    shift: t.shift,
                    ignoreSpaces: t.ignoreSpaces
                });
                return this.splitAnimate({
                    animationInfo: r,
                    do: function (e, i) {
                        this.setStylesSimple({
                            bezier: t.bezier,
                            element: e,
                            progress: i,
                            properties: s
                        })
                    }
                        .bind(this),
                    callbacks: t.callbacks
                }),
                    !0
            }
            ,
            p.prototype.TextAnimate.prototype.animate_string = function (t, e) {
                var i = this.elements.strings
                    , s = t.string;
                t.reverse && (i = i.slice()).reverse(),
                    t.shuffle && (i = i.slice(),
                        this.shuffle(i));
                var r = this.calcTime({
                    elements: i,
                    duration: t.duration,
                    shift: t.shift,
                    ignoreSpaces: t.ignoreSpaces
                });
                return this.splitAnimate({
                    animationInfo: r,
                    do: function (e, i) {
                        for (var r = 0; r < e.words.length; r++)
                            this.setStylesSimple({
                                bezier: t.bezier,
                                element: e.words[r],
                                progress: i,
                                properties: s
                            })
                    }
                        .bind(this),
                    callbacks: t.callbacks
                }),
                    !0
            }
            ,
            p.prototype.TextAnimate.prototype.animate_string_elementary = function (t, e) {
                return this.animate_string_elementaryAnimate(t, e),
                    !0
            }
            ,
            p.prototype.TextAnimate.prototype.animate_string_elementaryAnimate = function (t, e) {
                t.definedProperties = "stringword" === e ? t.word : t.letter;
                for (var i = this.animate_string_elementaryGetElements(t, e), s = i.length, r = [], n = 0; n < s; n++) {
                    var o = this.calcTime({
                        elements: i[n],
                        duration: t.duration,
                        shift: t.shift,
                        ignoreSpaces: t.ignoreSpaces
                    });
                    r.push(o)
                }
                for (var a = [], h = [], l = [], p = [], u = 0; u < s; u++) {
                    var d = 0
                        , c = 0;
                    0 !== u && (d = r[u - 1].durationFull * t.shiftString),
                        h.push(d),
                        a.push(r[u].durationFull);
                    for (var v = 0; v < h.length; v++)
                        c += h[v];
                    l.push(c),
                        p.push(c + r[u].durationFull)
                }
                for (var f = {
                    duration: t.duration,
                    durationFull: Math.max.apply(Math, p),
                    elements: r,
                    intervals: []
                }, g = 0; g < s; g++) {
                    var m = {
                        time: l[g],
                        percent: l[g] / f.durationFull,
                        percentEnd: p[g] / f.durationFull
                    };
                    f.intervals.push(m)
                }
                return this.splitAnimate({
                    animationInfo: f,
                    do: function (e, i) {
                        this.animate_string_elementaryAnimation(t, e, i)
                    }
                        .bind(this),
                    callbacks: t.callbacks
                }),
                    !0
            }
            ,
            p.prototype.TextAnimate.prototype.animate_string_elementaryGetElements = function (t, e) {
                var i = []
                    , s = this.elements.strings;
                t.reverse && (s = s.slice()).reverse(),
                    t.shuffle && (s = s.slice(),
                        this.shuffle(s));
                for (var r = 0; r < s.length; r++) {
                    var n = []
                        , o = s[r].words;
                    if (t.reverse && (o = o.slice()).reverse(),
                        t.shuffle && (o = o.slice(),
                            this.shuffle(o)),
                        "stringword" === e)
                        n = o;
                    else
                        for (var a = 0; a < o.length; a++) {
                            var h = s[r].words[a].letters;
                            t.reverse && (h = h.slice()).reverse(),
                                t.shuffle && (h = h.slice(),
                                    this.shuffle(h));
                            for (var l = 0; l < h.length; l++)
                                n.push(h[l])
                        }
                    i.push(n)
                }
                return i
            }
            ,
            p.prototype.TextAnimate.prototype.animate_string_elementaryAnimation = function (t, e, i) {
                for (var s = 0; s < e.intervals.length; s++) {
                    var r;
                    r = i < e.intervals[s].percent ? 0 : i >= e.intervals[s].percent & i <= e.intervals[s].percentEnd ? this.depthPercent({
                        scope: [e.intervals[s].percent, e.intervals[s].percentEnd],
                        t: i
                    }) : 1,
                        this.setStylesSimple({
                            bezier: t.bezier,
                            element: e.elements[s],
                            progress: r,
                            properties: t.definedProperties
                        })
                }
            }
            ,
            p.prototype.Slider = function (t) {
                function e() {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    l(this, e);
                    var i = a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                    for (var s in i.prefix = i.prefix + "slider",
                        i.prop = Object.assign(i.prop, {
                            selector: "#" + i.prefix,
                            selectorEvents: "#" + i.prefix,
                            bezier: {
                                on: !1,
                                name: "linear"
                            },
                            duration: 750,
                            delay: 0,
                            direction: "h",
                            disable: !1,
                            loop: !0,
                            start: !0,
                            keydown: !1,
                            swipe: !1,
                            wheel: !1,
                            interval: !1,
                            time: 5e3,
                            control: !0,
                            dot: !0,
                            prev: !0,
                            next: !0,
                            resize: !0,
                            resizeTimeout: 0,
                            active: 0
                        }),
                        t)
                        i.prop[s] = t[s];
                    return i
                }
                return h(e, p.prototype.Class),
                    n(e, [{
                        key: "check",
                        value: function () {
                            return !(!this.checkTypes({
                                obj: this.prop,
                                name: this.name,
                                console: this.prop.console,
                                vars: [["selector", "dom"], ["bezier", "bezier"], ["duration", "integer"], ["delay", "integer"], ["direction", "string"], ["disable", "boolean"], ["loop", "boolean"], ["start", "boolean"], ["keydown", "boolean"], ["swipe", "boolean"], ["wheel", "boolean"], ["interval", "boolean"], ["time", "integer"], ["control", "boolean"], ["dot", "boolean"], ["prev", "boolean"], ["next", "boolean"], ["resize", "boolean"], ["active", "integer"]]
                            }) || (this.checkType("dom", this.prop.selectorEvents) || (this.prop.selectorEvents = this.prop.selector),
                                this.outer = this.prop.v.document().querySelector(this.prop.selector),
                                this.outerEvents = this.prop.v.document().querySelector(this.prop.selectorEvents),
                                "v" !== this.prop.direction & "h" !== this.prop.direction))
                        }
                    }, {
                        key: "changeProp",
                        value: function (t) {
                            return !!r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "changeProp", this).call(this, t) && (this.setKeydown(),
                                this.setSwipe(),
                                this.setWheel(),
                                this.setInterval(),
                                this.setControl(),
                                this.setDot(),
                                this.setEventsResize(),
                                !0)
                        }
                    }, {
                        key: "checkItems",
                        value: function () {
                            var t = this.outer.querySelector("." + this.prefix + "__items");
                            return null !== t && (this.itemsSource = t.querySelectorAll("." + this.prefix + "__item"),
                                0 !== this.itemsSource.length)
                        }
                    }, {
                        key: "createControl",
                        value: function () {
                            return this.prev = document.createElement("div"),
                                this.prev.classList.add(this.prefix + "__control"),
                                this.prev.classList.add(this.prefix + "__control_prev"),
                                this.outer.appendChild(this.prev),
                                this.next = document.createElement("div"),
                                this.next.classList.add(this.prefix + "__control"),
                                this.next.classList.add(this.prefix + "__control_next"),
                                this.outer.appendChild(this.next),
                                !0
                        }
                    }, {
                        key: "setControl",
                        value: function () {
                            return this.prop.control ? this.outer.classList.remove(this.prefix + "_control-hidden") : this.outer.classList.add(this.prefix + "_control-hidden"),
                                !0
                        }
                    }, {
                        key: "setControlAbolished",
                        value: function () {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : this.active;
                            return 0 === t & !1 === this.prop.loop ? this.prev.classList.add(this.prefix + "__control_abolished") : this.prev.classList.remove(this.prefix + "__control_abolished"),
                                t === this.count - 1 & !1 === this.prop.loop ? this.next.classList.add(this.prefix + "__control_abolished") : this.next.classList.remove(this.prefix + "__control_abolished"),
                                !0
                        }
                    }, {
                        key: "createDot",
                        value: function () {
                            this.dots = document.createElement("div"),
                                this.dots.classList.add(this.prefix + "__dots");
                            for (var t = 0; t < this.itemsSource.length; t++) {
                                var e = document.createElement("div");
                                e.classList.add(this.prefix + "__dot"),
                                    this.dots.appendChild(e),
                                    this.dot.push(e)
                            }
                            return this.outer.appendChild(this.dots),
                                !0
                        }
                    }, {
                        key: "setDot",
                        value: function () {
                            return this.prop.dot ? this.outer.classList.remove(this.prefix + "_dot-hidden") : this.outer.classList.add(this.prefix + "_dot-hidden"),
                                !0
                        }
                    }, {
                        key: "setDotActive",
                        value: function () {
                            for (var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : this.active, e = 0; e < this.dot.length; e++)
                                e === t ? this.dot[e].classList.add(this.prefix + "__dot_active") : this.dot[e].classList.remove(this.prefix + "__dot_active");
                            return !0
                        }
                    }, {
                        key: "setPrevBool",
                        value: function () {
                            var t = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
                            return "boolean" == typeof t && (this.prevBool = t,
                                !0 === this.prevBool ? this.prev.classList.remove(this.prefix + "__control_disabled") : this.prev.classList.add(this.prefix + "__control_disabled"),
                                !0)
                        }
                    }, {
                        key: "setNextBool",
                        value: function () {
                            var t = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
                            return "boolean" == typeof t && (this.nextBool = t,
                                !0 === this.nextBool ? this.next.classList.remove(this.prefix + "__control_disabled") : this.next.classList.add(this.prefix + "__control_disabled"),
                                !0)
                        }
                    }, {
                        key: "setEvents",
                        value: function () {
                            this.keydownEventIDs.push(this.prop.v.keydown.add({
                                target: "once",
                                key: [37],
                                do: this.keydownEvent.bind(this)
                            }, this.prop.keydown, this.prop.console)),
                                this.keydownEventIDs.push(this.prop.v.keydown.add({
                                    target: "once",
                                    key: [38],
                                    do: this.keydownEvent.bind(this)
                                }, this.prop.keydown, this.prop.console)),
                                this.keydownEventIDs.push(this.prop.v.keydown.add({
                                    target: "once",
                                    key: [39],
                                    do: this.keydownEvent.bind(this)
                                }, this.prop.keydown, this.prop.console)),
                                this.keydownEventIDs.push(this.prop.v.keydown.add({
                                    target: "once",
                                    key: [40],
                                    do: this.keydownEvent.bind(this)
                                }, this.prop.keydown, this.prop.console)),
                                this.swipeEventIDs.push(this.prop.v.swipe.add({
                                    target: "right",
                                    outer: this.outerEvents,
                                    k: 100,
                                    do: this.swipeEvent.bind(this)
                                }, this.prop.swipe, this.prop.console)),
                                this.swipeEventIDs.push(this.prop.v.swipe.add({
                                    target: "left",
                                    outer: this.outerEvents,
                                    k: 100,
                                    do: this.swipeEvent.bind(this)
                                }, this.prop.swipe, this.prop.console)),
                                this.swipeEventIDs.push(this.prop.v.swipe.add({
                                    target: "down",
                                    outer: this.outerEvents,
                                    k: 100,
                                    do: this.swipeEvent.bind(this)
                                }, this.prop.swipe, this.prop.console)),
                                this.swipeEventIDs.push(this.prop.v.swipe.add({
                                    target: "up",
                                    outer: this.outerEvents,
                                    k: 100,
                                    do: this.swipeEvent.bind(this)
                                }, this.prop.swipe, this.prop.console)),
                                this.wheelEventIDs.push(this.prop.v.wheel.add({
                                    target: "right",
                                    outer: this.outerEvents,
                                    k: .5,
                                    do: this.wheelEvent.bind(this)
                                }, this.prop.wheel, this.prop.console)),
                                this.wheelEventIDs.push(this.prop.v.wheel.add({
                                    target: "left",
                                    outer: this.outerEvents,
                                    k: .5,
                                    do: this.wheelEvent.bind(this)
                                }, this.prop.wheel, this.prop.console)),
                                this.wheelEventIDs.push(this.prop.v.wheel.add({
                                    target: "down",
                                    outer: this.outerEvents,
                                    k: .1,
                                    do: this.wheelEvent.bind(this)
                                }, this.prop.wheel, this.prop.console)),
                                this.wheelEventIDs.push(this.prop.v.wheel.add({
                                    target: "up",
                                    outer: this.outerEvents,
                                    k: .1,
                                    do: this.wheelEvent.bind(this)
                                }, this.prop.wheel, this.prop.console)),
                                this.intervalEventIDs.push(this.prop.v.interval.add({
                                    time: this.prop.time,
                                    do: this.setNext.bind(this)
                                }, this.prop.interval, this.prop.console)),
                                this.addEventListener({
                                    el: this.prev,
                                    target: "click",
                                    do: this.setPrev.bind(this, "controlPrev")
                                }),
                                this.addEventListener({
                                    el: this.next,
                                    target: "click",
                                    do: this.setNext.bind(this, "controlNext")
                                });
                            for (var t = 0; t < this.dot.length; t++)
                                this.addEventListener({
                                    el: this.dot[t],
                                    target: "click",
                                    do: this.set.bind(this, t, !0, "dot", "none")
                                });
                            return !0
                        }
                    }, {
                        key: "setEventsResize",
                        value: function () {
                            null != this.resizeID && (this.prop.v.viewport.delete(this.resizeID),
                                this.resizeID = null);
                            var t = this.prop.resizeTimeout;
                            t < this.prop.v.timeMin() && (t = this.prop.v.timeMin()),
                                this.prop.resize && (this.resizeID = this.prop.v.viewport.add({
                                    target: "wh",
                                    name: this.name + " Resize",
                                    do: function () {
                                        this.setSize(),
                                            this.startSlide(this.active)
                                    }
                                        .bind(this),
                                    timeout: t
                                }))
                        }
                    }, {
                        key: "destroyEvents",
                        value: function () {
                            for (var t = 0; t < this.keydownEventIDs.length; t++)
                                this.prop.v.keydown.delete(this.keydownEventIDs[t]);
                            for (var e = 0; e < this.swipeEventIDs.length; e++)
                                this.prop.v.swipe.delete(this.swipeEventIDs[e]);
                            for (var i = 0; i < this.wheelEventIDs.length; i++)
                                this.prop.v.wheel.delete(this.wheelEventIDs[i]);
                            null != this.resizeID && (this.prop.v.viewport.delete(this.resizeID),
                                this.resizeID = null)
                        }
                    }, {
                        key: "keydownEvent",
                        value: function (t) {
                            if ("h" === this.prop.direction)
                                if (37 === t.data.key[0])
                                    this.setPrev("keydown");
                                else {
                                    if (39 !== t.data.key[0])
                                        return !1;
                                    this.setNext("keydown")
                                }
                            if ("v" === this.prop.direction)
                                if (38 === t.data.key[0])
                                    this.setPrev("keydown");
                                else {
                                    if (40 !== t.data.key[0])
                                        return !1;
                                    this.setNext("keydown")
                                }
                            return !0
                        }
                    }, {
                        key: "swipeEvent",
                        value: function (t) {
                            if ("h" === this.prop.direction)
                                if ("right" === t.data.target)
                                    this.setPrev("swipe");
                                else {
                                    if ("left" !== t.data.target)
                                        return !1;
                                    this.setNext("swipe")
                                }
                            if ("v" === this.prop.direction)
                                if ("down" === t.data.target)
                                    this.setPrev("swipe");
                                else {
                                    if ("up" !== t.data.target)
                                        return !1;
                                    this.setNext("swipe")
                                }
                            return !0
                        }
                    }, {
                        key: "wheelEvent",
                        value: function (t) {
                            if ("h" === this.prop.direction)
                                if ("left" === t.data.target)
                                    this.setPrev("wheel");
                                else {
                                    if ("right" !== t.data.target)
                                        return !1;
                                    this.setNext("wheel")
                                }
                            if ("v" === this.prop.direction)
                                if ("up" === t.data.target)
                                    this.setPrev("swipe");
                                else {
                                    if ("down" !== t.data.target)
                                        return !1;
                                    this.setNext("swipe")
                                }
                            return !0
                        }
                    }, {
                        key: "setKeydown",
                        value: function () {
                            for (var t = 0; t < this.keydownEventIDs.length; t++)
                                this.prop.v.keydown.turn(this.keydownEventIDs[t], this.prop.keydown, this.prop.console);
                            return !0
                        }
                    }, {
                        key: "setSwipe",
                        value: function () {
                            for (var t = 0; t < this.swipeEventIDs.length; t++)
                                this.prop.v.swipe.turn(this.swipeEventIDs[t], this.prop.swipe, this.prop.console);
                            return !0
                        }
                    }, {
                        key: "setWheel",
                        value: function () {
                            for (var t = 0; t < this.wheelEventIDs.length; t++)
                                this.prop.v.wheel.turn(this.wheelEventIDs[t], this.prop.wheel, this.prop.console);
                            return !0
                        }
                    }, {
                        key: "setInterval",
                        value: function () {
                            for (var t = 0; t < this.intervalEventIDs.length; t++)
                                this.prop.v.interval.turn(this.intervalEventIDs[t], this.prop.interval, this.prop.console);
                            return !0
                        }
                    }, {
                        key: "setIntervalOff",
                        value: function () {
                            for (var t = 0; t < this.intervalEventIDs.length; t++)
                                this.prop.v.interval.turn(this.intervalEventIDs[t], !1, this.prop.console);
                            return !0
                        }
                    }, {
                        key: "setSize",
                        value: function () {
                            return this.width = this.outer.clientWidth,
                                this.height = this.outer.clientHeight,
                                !0
                        }
                    }, {
                        key: "getPrev",
                        value: function () {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : this.active;
                            if ((t -= 1) < 0) {
                                if (!this.prop.loop)
                                    return !1;
                                t = this.count - 1
                            }
                            return t
                        }
                    }, {
                        key: "getNext",
                        value: function () {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : this.active;
                            if ((t += 1) > this.count - 1) {
                                if (!this.prop.loop)
                                    return !1;
                                t = 0
                            }
                            return t
                        }
                    }, {
                        key: "setPrev",
                        value: function () {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "none";
                            if (!0 === this.animating || !0 !== this.prevBool)
                                return !1;
                            var e = this.getPrev();
                            return !1 !== e && (this.set(e, !0, "prev", t),
                                !0)
                        }
                    }, {
                        key: "setNext",
                        value: function () {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "none";
                            if (!0 === this.animating || !0 !== this.nextBool)
                                return !1;
                            var e = this.getNext();
                            return !1 !== e && (this.set(e, !0, "next", t),
                                !0)
                        }
                    }, {
                        key: "getActive",
                        value: function () {
                            return this.active
                        }
                    }, {
                        key: "set",
                        value: function () {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : this.active
                                , e = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
                            if (this.prop.disable)
                                return !1;
                            if (this.animating)
                                return !1;
                            if ((t = parseInt(t)) < 0 || t > this.count - 1 || t === this.active & this.activeShown)
                                return !1;
                            this.setIntervalOff(),
                                setTimeout(this.setInterval.bind(this), this.prop.delay + this.prop.duration),
                                this.setControlAbolished(t),
                                e && (this.active = t);
                            for (var i = 0; i < this.itemsSource.length; i++)
                                t === i ? this.itemsSource[i].classList.add(this.prefix + "__item_active") : this.itemsSource[i].classList.remove(this.prefix + "__item_active");
                            return this.setDotActive(t),
                                !0
                        }
                    }, {
                        key: "startSlide",
                        value: function () {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : this.active
                                , e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
                            return !(!0 === this.animating & !e || this.firstStart & !this.prop.start || !this.activeShown || (this.active = t,
                                this.firstStart = !1,
                                this.activeShown = !0,
                                this.outer.classList.add(this.prefix + "_showActive"),
                                this.itemsSource[t].classList.add(this.prefix + "__item_active"),
                                this.setDotActive(t),
                                0))
                        }
                    }, {
                        key: "showActive",
                        value: function () {
                            return !this.activeShown && !this.animating && (this.activeShown = !0,
                                this.outer.classList.add(this.prefix + "_showActive"),
                                this.itemsSource[this.active].classList.add(this.prefix + "__item_active"),
                                this.setDotActive(this.active),
                                !0)
                        }
                    }, {
                        key: "hideActive",
                        value: function () {
                            return !(!this.activeShown || this.animating || (this.activeShown = !1,
                                this.outer.classList.remove(this.prefix + "_showActive"),
                                this.itemsSource[this.active].classList.remove(this.prefix + "__item_active"),
                                this.setDotActive(this.active),
                                0))
                        }
                    }, {
                        key: "init",
                        value: function () {
                            var t = this
                                , i = r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "init", this).call(this);
                            return !!i && (this.itemsSource = [],
                                !!this.checkItems() && (this.outer.classList.add("" + this.prefix),
                                    this.active = this.prop.active,
                                    this.animating = !1,
                                    this.firstStart = !0,
                                    this.activeShown = !1,
                                    this.prev = !1,
                                    this.next = !1,
                                    this.prevBool = !1,
                                    this.nextBool = !1,
                                    this.dots = !1,
                                    this.dot = [],
                                    this.keydownEventIDs = [],
                                    this.swipeEventIDs = [],
                                    this.wheelEventIDs = [],
                                    this.intervalEventIDs = [],
                                    this.resizeID = null,
                                    this.loopTypes = ["keydown", "wheel", "swipe", "controlPrev", "controlNext"],
                                    this.createControl(),
                                    this.setControl(),
                                    this.setControlAbolished(),
                                    this.createDot(),
                                    this.setDot(),
                                    this.setDotActive(this.active),
                                    this.setPrevBool(this.prop.prev),
                                    this.setNextBool(this.prop.next),
                                    this.setEvents(),
                                    this.setEventsResize(),
                                    this.setSize(),
                                    Object.assign(i, {
                                        count: function () {
                                            return t.count
                                        },
                                        animating: function () {
                                            return t.animating
                                        },
                                        itemsSource: function () {
                                            return t.itemsSource
                                        },
                                        getActive: this.getActive.bind(this),
                                        setPrev: this.setPrevBool.bind(this),
                                        setNext: this.setNextBool.bind(this),
                                        set: this.set.bind(this),
                                        prev: this.setPrev.bind(this),
                                        next: this.setNext.bind(this),
                                        getPrev: this.getPrev.bind(this),
                                        getNext: this.getNext.bind(this),
                                        showActive: this.showActive.bind(this),
                                        hideActive: this.hideActive.bind(this),
                                        destroyEvents: this.destroyEvents.bind(this)
                                    })))
                        }
                    }]),
                    e
            }(),
            p.prototype.SliderCanvas = function (t) {
                function e() {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    l(this, e);
                    var i = a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                    for (var s in i.prefix = "" + i.prefix,
                        i.prop = Object.assign(i.prop, {
                            animations: {
                                prev: [0, .5],
                                next: [.5, 1]
                            },
                            resetAnimatingTimeout: 0,
                            parallaxX: 0,
                            parallaxY: 0,
                            parallaxPrev: !1,
                            hidePrev: !0,
                            fill: "transparent",
                            reverse: !1,
                            reverseSwipe: !1,
                            zoom: !1,
                            zoomHTML: !1,
                            zoomK: 2,
                            zoomAnimation: 350,
                            useVideo: !1,
                            tapVideo: !1,
                            tapVideoText: "Tap and hold",
                            tapVideoDuration: 250,
                            imageSize: "cover",
                            asyncLoad: !1
                        }),
                        t)
                        i.prop[s] = t[s];
                    return i.targets = ["prev", "next", "before", "after", "show", "hide", "start", "firstStart", "zoomGain", "zoomDiscard"],
                        i
                }
                return h(e, p.prototype.Slider),
                    n(e, [{
                        key: "check",
                        value: function () {
                            if (!r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "check", this).call(this))
                                return !1;
                            var t = this.checkTypes({
                                obj: this.prop,
                                name: this.name,
                                console: this.prop.console,
                                vars: [["animations", "object"], ["resetAnimatingTimeout", "integer"], ["parallaxX", "number"], ["parallaxY", "number"], ["parallaxPrev", "boolean"], ["hidePrev", "boolean"], ["fill", "string"], ["reverse", "boolean"], ["reverseSwipe", "boolean"], ["zoom", "boolean"], ["zoomHTML", "boolean"], ["zoomK", "number"], ["zoomAnimation", "integer"], ["useVideo", "boolean"], ["tapVideo", "boolean"], ["tapVideoText", "string"], ["tapVideoDuration", "integer"], ["imageSize", "string"], ["asyncLoad", "boolean"]]
                            });
                            return !!t && !!(t = this.checkTypes({
                                obj: this.prop.animations,
                                name: this.name,
                                console: this.prop.console,
                                vars: [["prev", "numberArray", {
                                    count: 2
                                }], ["next", "numberArray", {
                                    count: 2
                                }]]
                            }))
                        }
                    }, {
                        key: "changeProp",
                        value: function (t) {
                            return !!r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "changeProp", this).call(this, t) && (this.setMaxParallax(),
                                this.zoomSetProp(),
                                this.tapSet(),
                                !0)
                        }
                    }, {
                        key: "zoomInit",
                        value: function () {
                            this.zoomHTML = document.createElement("div"),
                                this.zoomHTML.classList.add(this.prefix + "__zoom"),
                                this.outer.appendChild(this.zoomHTML),
                                this.zoomBg = document.createElement("div"),
                                this.zoomBg.classList.add("bg-image"),
                                this.zoomHTML.appendChild(this.zoomBg),
                                this.zoomButton = document.createElement("div"),
                                this.zoomButton.classList.add(this.prefix + "__zoom-button"),
                                this.outer.appendChild(this.zoomButton),
                                this.zoomSetProp()
                        }
                    }, {
                        key: "zoomEvents",
                        value: function () {
                            for (var t = 0; t < this.canvas.length; t++)
                                this.addEventListener({
                                    target: "click",
                                    el: this.canvas[t],
                                    do: function () {
                                        this.prop.zoomHTML || this.zoomCanvasClick()
                                    }
                                        .bind(this)
                                }),
                                    this.addEventListener({
                                        target: "mousemove",
                                        el: this.canvas[t],
                                        do: function (t) {
                                            this.prop.zoomHTML || (this.zoomX = t.offsetX,
                                                this.zoomY = t.offsetY)
                                        }
                                            .bind(this)
                                    });
                            this.addEventListener({
                                target: "click",
                                el: this.zoomButton,
                                do: this.zoomCanvasClick.bind(this)
                            }),
                                this.addEventListener({
                                    target: "scroll",
                                    el: this.zoomHTML,
                                    do: this.zoomScrollEvent.bind(this)
                                })
                        }
                    }, {
                        key: "zoomScrollEvent",
                        value: function () {
                            var t = this.zoomHTML.scrollLeft / (this.zoomHTML.scrollWidth - this.zoomHTML.clientWidth)
                                , e = this.zoomHTML.scrollTop / (this.zoomHTML.scrollHeight - this.zoomHTML.clientHeight);
                            this.zoomX = t * this.outer.clientWidth,
                                this.zoomY = e * this.outer.clientHeight
                        }
                    }, {
                        key: "zoomSetProp",
                        value: function () {
                            this.prop.zoom ? this.outer.classList.add(this.prefix + "_zoom") : this.outer.classList.remove(this.prefix + "_zoom"),
                                this.prop.zoomHTML ? this.outer.classList.add(this.prefix + "_zoom_html") : this.outer.classList.remove(this.prefix + "_zoom_html"),
                                this.zoomResize()
                        }
                    }, {
                        key: "zoomResize",
                        value: function () {
                            if (this.zoomBg) {
                                var t = this.outer.clientWidth * this.prop.zoomK
                                    , e = this.outer.clientHeight * this.prop.zoomK;
                                this.zoomBg.style.width = t + "px",
                                    this.zoomBg.style.height = e + "px"
                            }
                        }
                    }, {
                        key: "zoomScroll",
                        value: function () {
                            $(this.zoomHTML).animate({
                                scrollTop: (this.zoomBg.clientHeight - this.zoomHTML.clientHeight) / this.prop.zoomK,
                                scrollLeft: (this.zoomBg.clientWidth - this.zoomHTML.clientWidth) / this.prop.zoomK
                            }, 0)
                        }
                    }, {
                        key: "zoomCanvasClick",
                        value: function (t) {
                            if (!this.prop.zoom || this.firstStartSlide || this.zoomAnimating)
                                return !1;
                            if (this.zoomed) {
                                this.zoomedHover = !1,
                                    this.zoomAnimating = !0,
                                    this.zoomButton.classList.remove(this.prefix + "__zoom-button_active");
                                var e = new this.Animate({
                                    console: this.prop.console,
                                    duration: this.prop.zoomAnimation,
                                    bezier: this.prop.bezier,
                                    do: this.animateCanvas.bind(this, {
                                        ctx: 0,
                                        num: this.active,
                                        action: "zoomDiscard",
                                        do: function () {
                                            this.zoomed = !1,
                                                this.animating = !1,
                                                this.zoomAnimating = !1,
                                                this.zoomHTML.classList.remove(this.prefix + "__zoom_shown"),
                                                this.startSlide()
                                        }
                                            .bind(this)
                                    })
                                });
                                (e = e.init()).run(),
                                    this.launchEventsByTarget("zoomDiscard")
                            } else {
                                this.prop.zoomHTML & !this.zoomHTML.classList.contains(this.prefix + "__zoom_shown") && (this.zoomX = this.outer.clientWidth / 2,
                                    this.zoomY = this.outer.clientHeight / 2),
                                    this.zoomAnimating = !0,
                                    this.zoomButton.classList.add(this.prefix + "__zoom-button_active");
                                var i = new this.Animate({
                                    console: this.prop.console,
                                    duration: this.prop.zoomAnimation,
                                    bezier: this.prop.bezier,
                                    do: this.animateCanvas.bind(this, {
                                        ctx: 0,
                                        num: this.active,
                                        action: "zoomGain",
                                        do: function () {
                                            this.zoomed = !0,
                                                this.zoomedHover = !0,
                                                this.zoomAnimating = !1,
                                                this.zoomLoop(),
                                                this.zoomHTML.classList.add(this.prefix + "__zoom_shown"),
                                                this.zoomScroll(0)
                                        }
                                            .bind(this)
                                    })
                                });
                                (i = i.init()).run(),
                                    this.launchEventsByTarget("zoomGain")
                            }
                        }
                    }, {
                        key: "zoomLoop",
                        value: function () {
                            this.animateCanvas({
                                ctx: 0,
                                num: this.active,
                                action: "zoomGain",
                                do: function () { }
                            }, 1, 1),
                                this.zoomedHover && window.requestAnimationFrame(this.zoomLoop.bind(this))
                        }
                    }, {
                        key: "tapInit",
                        value: function () {
                            return this.isTap = !1,
                                this.timeTap = 0,
                                this.tap = document.createElement("div"),
                                this.tap.classList.add(this.prefix + "__tap"),
                                this.outer.appendChild(this.tap),
                                this.videoOuter = document.createElement("div"),
                                this.videoOuter.classList.add(this.prefix + "__video"),
                                this.outer.appendChild(this.videoOuter),
                                !0
                        }
                    }, {
                        key: "tapSet",
                        value: function () {
                            return this.prop.tapVideo ? this.outer.classList.remove(this.prefix + "_tap-hidden") : this.outer.classList.add(this.prefix + "_tap-hidden"),
                                this.tap.innerHTML = "<div></div><span>" + this.prop.tapVideoText + "</span>",
                                !0
                        }
                    }, {
                        key: "tapShowHide",
                        value: function () {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : this.active;
                            null == this.videos[t] ? this.outer.classList.add(this.prefix + "_tap-hide") : this.outer.classList.remove(this.prefix + "_tap-hide")
                        }
                    }, {
                        key: "tapEvents",
                        value: function () {
                            return this.tap.addEventListener("touchstart", this.tapEventOn.bind(this)),
                                this.tap.addEventListener("touchend", this.tapEventOff.bind(this)),
                                this.tap.addEventListener("mousedown", this.tapEventOn.bind(this)),
                                this.tap.addEventListener("mouseup", this.tapEventOff.bind(this)),
                                !0
                        }
                    }, {
                        key: "tapEventOn",
                        value: function () {
                            var t = this;
                            this.animating || this.isTap || (this.isTap = !0,
                                this.tap.classList.add(this.prefix + "__tap_active"),
                                setTimeout((function () {
                                    t.isTap && t.tapRender()
                                }
                                ), this.prop.tapVideoDuration))
                        }
                    }, {
                        key: "tapEventOff",
                        value: function () {
                            this.isTap = !1,
                                this.tap.classList.remove(this.prefix + "__tap_active"),
                                this.tapRender()
                        }
                    }, {
                        key: "tapRender",
                        value: function () {
                            var t = this.videos[this.active];
                            if (null != t)
                                if (this.isTap) {
                                    t.load();
                                    var e = t.play();
                                    void 0 !== e && e.then((function () { }
                                    )).catch(function (t) { }
                                        .bind(this)),
                                        t.classList.add("active")
                                } else {
                                    var i = t.pause();
                                    void 0 !== i && i.then((function () { }
                                    )).catch(function (e) {
                                        var i = this;
                                        setTimeout((function () {
                                            i.isTap || (t.currentTime = 0)
                                        }
                                        ), 350)
                                    }
                                        .bind(this)),
                                        t.classList.remove("active")
                                }
                        }
                    }, {
                        key: "createCanvas",
                        value: function () {
                            for (var t = 0; t < this.canvasAmount; t++) {
                                var e = document.createElement("canvas");
                                this.outer.appendChild(e),
                                    this.canvas.push(e)
                            }
                            for (var i = 0; i < this.canvas.length; i++) {
                                this.ctx.push(this.canvas[i].getContext("2d"));
                                var s = this.ctx[this.ctx.length - 1];
                                s.mozImageSmoothingEnabled = !1,
                                    s.webkitImageSmoothingEnabled = !1,
                                    s.msImageSmoothingEnabled = !1,
                                    s.imageSmoothingEnabled = !1
                            }
                            for (var r = 0; r < this.canvasAmount; r++) {
                                var n = document.createElement("canvas");
                                this.canvasAdditional.push(n)
                            }
                            for (var o = 0; o < this.canvasAdditional.length; o++) {
                                this.ctxAdditional.push(this.canvasAdditional[o].getContext("2d"));
                                var a = this.ctxAdditional[this.ctxAdditional.length - 1];
                                a.mozImageSmoothingEnabled = !1,
                                    a.webkitImageSmoothingEnabled = !1,
                                    a.msImageSmoothingEnabled = !1,
                                    a.imageSmoothingEnabled = !1
                            }
                            return !0
                        }
                    }, {
                        key: "createImages",
                        value: function () {
                            for (var t = 0; t < this.itemsSource.length; t++) {
                                var e = this.itemsSource[t].querySelector("img");
                                if (null !== e) {
                                    var i = e.getAttribute("src");
                                    if (null === i || 0 === i.length)
                                        continue;
                                    var s = new Image;
                                    s[this.data.loaded] = !1,
                                        s.addEventListener("load", function (t) {
                                            t[this.data.loaded] = !0,
                                                this.loaded++,
                                                this.startSlide(this.active)
                                        }
                                            .bind(this, s), !1),
                                        s.src = i,
                                        this.images.push(s),
                                        this.imagesTotal.push(s);
                                    var r = e.getAttribute(this.data.imageTablet);
                                    if (null === r || 0 === r.length)
                                        this.imagesTablet.push(s);
                                    else {
                                        var n = new Image;
                                        n[this.data.loaded] = !1,
                                            n.addEventListener("load", function (t) {
                                                t[this.data.loaded] = !0,
                                                    this.loaded++,
                                                    this.startSlide(this.active)
                                            }
                                                .bind(this, n), !1),
                                            n.src = r,
                                            this.imagesTablet.push(n),
                                            this.imagesTotal.push(n)
                                    }
                                    var o = e.getAttribute(this.data.imageMobile);
                                    if (null === o || 0 === o.length)
                                        this.imagesMobile.push(s);
                                    else {
                                        var a = new Image;
                                        a[this.data.loaded] = !1,
                                            a.addEventListener("load", function (t) {
                                                t[this.data.loaded] = !0,
                                                    this.loaded++,
                                                    this.startSlide(this.active)
                                            }
                                                .bind(this, a), !1),
                                            a.src = o,
                                            this.imagesMobile.push(a),
                                            this.imagesTotal.push(a)
                                    }
                                    if (this.prop.useVideo) {
                                        var h = this.itemsSource[t].querySelector("video");
                                        null !== h & !(("firefox" == this.prop.v.browser() || "opera" == this.prop.v.browser()) & !this.prop.v.desktop()) ? (h.setAttribute("playsinline", "playsinline"),
                                            h.setAttribute("preload", "metadata"),
                                            h.setAttribute("loop", "loop"),
                                            h.setAttribute("muted", ""),
                                            h[this.data.loaded] = !1,
                                            this.videos.push(h),
                                            h.addEventListener("loadedmetadata", function (t) {
                                                t[this.data.loaded] = !0,
                                                    this.loadedVideos++,
                                                    this.startSlide(this.active)
                                            }
                                                .bind(this, h), !1),
                                            this.videoOuter.appendChild(h)) : this.videos.push(null)
                                    } else
                                        this.videos.push(null)
                                }
                            }
                            return !0
                        }
                    }, {
                        key: "setEvents",
                        value: function () {
                            return !!r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "setEvents", this).call(this)
                        }
                    }, {
                        key: "setSize",
                        value: function () {
                            if (!r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "setSize", this).call(this))
                                return !1;
                            if (this.videos)
                                for (var t = 0; t < this.videos.length; t++)
                                    if (null != this.videos[t]) {
                                        var i = this.imageSize({
                                            size: this.prop.imageSize,
                                            img: this.videos[t],
                                            width: this.width * this.maxParallax,
                                            height: this.height * this.maxParallax,
                                            maxWidth: this.width,
                                            maxHeight: this.height
                                        });
                                        this.videos[t].style.top = i.y + "px",
                                            this.videos[t].style.left = i.x + "px",
                                            this.videos[t].style.height = i.imageHeight + "px",
                                            this.videos[t].style.width = i.imageWidth + "px"
                                    }
                            this.dpr = this.prop.v.dpr();
                            var s = Math.floor(this.width * this.dpr)
                                , n = Math.floor(this.height * this.dpr);
                            this.width === s && this.height === n || (this.width = s,
                                this.height = n);
                            for (var o = 0; o < this.canvas.length; o++)
                                this.canvas[o].width = this.width,
                                    this.canvas[o].height = this.height;
                            return this.imagesCurrent = this.images,
                                this.prop.v.tablet() && (this.imagesCurrent = this.imagesTablet),
                                this.prop.v.mobile() && (this.imagesCurrent = this.imagesMobile),
                                !0
                        }
                    }, {
                        key: "setMaxParallax",
                        value: function () {
                            return this.maxParallax = 1 + 2 * Math.max(Math.abs(this.prop.parallaxX), Math.abs(this.prop.parallaxY)),
                                !0
                        }
                    }, {
                        key: "startSlide",
                        value: function () {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : this.active
                                , i = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
                            if (this.prop.asyncLoad) {
                                if (!this.imagesCurrent[t][this.data.loaded])
                                    return !1;
                                var s = this.videos[t];
                                if (null != s && !s[this.data.loaded])
                                    return !1
                            } else if (this.loaded < this.countImages || this.loadedVideos < this.countVideos)
                                return !1;
                            if (this.setSize(),
                                !r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "startSlide", this).call(this, t, i))
                                return !1;
                            this.ctx[0].save(),
                                this.ctx[0].beginPath(),
                                this.ctx[0].clearRect(0, 0, this.width, this.height),
                                this.ctx[0].rect(0, 0, this.width, this.height),
                                this.ctx[0].fillStyle = this.prop.fill,
                                this.ctx[0].fillRect(0, 0, this.width, this.height);
                            var n, o, a = this.imagesCurrent[this.active];
                            return o = a,
                                n = this.imageSize({
                                    size: this.prop.imageSize,
                                    img: o,
                                    width: this.width * this.maxParallax,
                                    height: this.height * this.maxParallax,
                                    maxWidth: this.width,
                                    maxHeight: this.height
                                }),
                                this.imageInfo = {
                                    outer: {
                                        width: this.width * this.maxParallax,
                                        height: this.height * this.maxParallax,
                                        maxWidth: this.width,
                                        maxHeight: this.height
                                    },
                                    size: n
                                },
                                this.ctx[0].drawImage(a, 0, 0, a.width, a.height, n.x, n.y, n.imageWidth, n.imageHeight),
                                this.ctx[0].closePath(),
                                this.ctx[0].restore(),
                                this.ctx[1].save(),
                                this.ctx[1].beginPath(),
                                this.ctx[1].clearRect(0, 0, this.width, this.height),
                                this.ctx[1].closePath(),
                                this.ctx[1].restore(),
                                this.ctx[2].save(),
                                this.ctx[2].beginPath(),
                                this.ctx[2].clearRect(0, 0, this.width, this.height),
                                this.ctx[2].closePath(),
                                this.ctx[2].restore(),
                                this.tapShowHide(t),
                                this.launchEventsByTarget("start"),
                                this.firstStartSlide && this.launchEventsByTarget("firstStart"),
                                this.firstStartSlide = !1,
                                !(this.animating = !1)
                        }
                    }, {
                        key: "set",
                        value: function () {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : this.active
                                , i = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1]
                                , s = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "next"
                                , n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : "none"
                                , o = this.active;
                            if (!r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "set", this).call(this, t, !1, s, n))
                                return !1;
                            if (this.isTap)
                                return !1;
                            this.tapShowHide(t);
                            var a = {
                                prev: {
                                    duration: (this.prop.animations.prev[1] - this.prop.animations.prev[0]) * this.prop.duration,
                                    delay: this.prop.animations.prev[0] * this.prop.duration,
                                    reversed: !1
                                },
                                next: {
                                    duration: (this.prop.animations.next[1] - this.prop.animations.next[0]) * this.prop.duration,
                                    delay: this.activeShown ? this.prop.animations.next[0] * this.prop.duration : 0,
                                    reversed: !1
                                }
                            };
                            return this.loopTypes.includes(n) ? "prev" === s ? (a.prev.reversed = !0,
                                a.next.reversed = !0) : "next" === s && t < o && (a.prev.reversed = !1,
                                    a.next.reversed = !1) : t < o && (a.prev.reversed = !0,
                                        a.next.reversed = !0),
                                "swipe" == n & this.prop.reverseSwipe && (a.prev.reversed ? a.prev.reversed = !1 : a.prev.reversed = !0,
                                    a.next.reversed ? a.next.reversed = !1 : a.next.reversed = !0),
                                this.launchEventsByTarget("before", {
                                    prev: o,
                                    next: t,
                                    dir: s,
                                    type: n
                                }),
                                o < t ? this.launchEventsByTarget("next", {
                                    prev: o,
                                    next: t,
                                    dir: s,
                                    type: n
                                }) : this.launchEventsByTarget("prev", {
                                    prev: o,
                                    next: t,
                                    dir: s,
                                    type: n
                                }),
                                this.animating = !0,
                                setTimeout(function () {
                                    if (!this.activeShown)
                                        return i && (this.active = t),
                                            this.animating = !1,
                                            this.showActive();
                                    this.animate({
                                        duration: a.prev.duration,
                                        delay: a.prev.delay,
                                        ctx: 1,
                                        num: o,
                                        action: "hide",
                                        reversed: a.prev.reversed
                                    }),
                                        this.animate({
                                            duration: a.next.duration,
                                            delay: a.next.delay,
                                            ctx: 2,
                                            num: t,
                                            action: "show",
                                            reversed: a.next.reversed,
                                            do: function (t) {
                                                var e = this;
                                                this.launchEventsByTarget("after", {
                                                    prev: this.active,
                                                    next: t,
                                                    dir: s,
                                                    type: n
                                                }),
                                                    this.active = t,
                                                    setTimeout((function () {
                                                        e.animating = !1,
                                                            e.startSlide(t)
                                                    }
                                                    ), this.prop.v.timeMin() + this.prop.resetAnimatingTimeout)
                                            }
                                                .bind(this, t)
                                        })
                                }
                                    .bind(this), this.prop.delay),
                                !0
                        }
                    }, {
                        key: "showActive",
                        value: function () {
                            if (!r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "showActive", this).call(this))
                                return !1;
                            var t = (this.prop.animations.next[1] - this.prop.animations.next[0]) * this.prop.duration;
                            return this.animate({
                                duration: t,
                                ctx: 1,
                                num: this.active,
                                action: "showActive",
                                do: function () {
                                    this.firstStart && (this.firstStart = !1),
                                        this.animating = !1,
                                        this.startSlide(),
                                        this.launchEventsByTarget("show")
                                }
                                    .bind(this)
                            }),
                                !0
                        }
                    }, {
                        key: "hideActive",
                        value: function () {
                            if (!r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "hideActive", this).call(this))
                                return !1;
                            var t = (this.prop.animations.next[1] - this.prop.animations.next[0]) * this.prop.duration;
                            return this.animate({
                                duration: t,
                                ctx: 1,
                                num: this.active,
                                action: "hideActive",
                                reversed: !1,
                                do: function () {
                                    this.animating = !1,
                                        this.launchEventsByTarget("hide")
                                }
                                    .bind(this)
                            }),
                                !0
                        }
                    }, {
                        key: "animate",
                        value: function (t) {
                            var e = {
                                duration: this.prop.duration,
                                delay: 0,
                                ctx: 0,
                                num: this.active,
                                action: "show",
                                reversed: !1,
                                do: function () { }
                            };
                            for (var i in t)
                                e[i] = t[i];
                            this.ctx[0].save(),
                                this.ctx[0].beginPath(),
                                this.ctx[0].clearRect(0, 0, this.width, this.height),
                                this.ctx[0].closePath(),
                                this.ctx[0].restore(),
                                this.animateCanvas({
                                    ctx: e.ctx,
                                    num: e.num,
                                    action: e.action,
                                    reversed: e.reversed,
                                    do: e.do
                                }, 0, 0);
                            var s = new this.Animate({
                                console: this.prop.console,
                                duration: parseInt(e.duration),
                                delay: parseInt(e.delay),
                                bezier: this.prop.bezier,
                                do: this.animateCanvas.bind(this, {
                                    ctx: e.ctx,
                                    num: e.num,
                                    action: e.action,
                                    reversed: e.reversed,
                                    do: e.do
                                })
                            });
                            return (s = s.init()).run(),
                                !0
                        }
                    }, {
                        key: "animateCanvas",
                        value: function (t, e, i) {
                            var s = {};
                            for (var r in t)
                                s[r] = t[r];
                            this.animating = !0;
                            var n = 1;
                            "zoomGain" == s.action ? (n = (this.prop.zoomK - 1) * i,
                                n += 1) : "zoomDiscard" == s.action && (n = (this.prop.zoomK - 1) * (1 - i),
                                    n += 1);
                            var o, a, h = this.imagesCurrent[s.num];
                            a = h,
                                o = this.imageSize({
                                    size: this.prop.imageSize,
                                    img: a,
                                    width: this.width * this.maxParallax * n,
                                    height: this.height * this.maxParallax * n,
                                    maxWidth: this.width,
                                    maxHeight: this.height
                                }),
                                this.prop.reverse && (s.reversed ? s.reversed = !1 : s.reversed = !0);
                            var l = void 0;
                            l = "show" === s.action || "showActive" === s.action ? 1 - i : this.prop.parallaxPrev || "hideActive" === s.action ? i : 0,
                                "zoomDiscard" !== s.action && "zoomGain" !== s.action || (l = 0);
                            var p = this.prop.parallaxX
                                , u = this.prop.parallaxY;
                            "hide" !== s.action && "hideActive" !== s.action || (p *= -1,
                                u *= -1),
                                s.reversed && (p *= -1,
                                    u *= -1);
                            var d = p * this.width * l
                                , c = u * this.height * l
                                , v = o.x - d
                                , f = o.y - c
                                , g = void 0
                                , m = void 0
                                , y = 0
                                , b = 0
                                , _ = 0
                                , x = 0;
                            if ("zoomGain" !== s.action & "zoomDiscard" !== s.action)
                                "h" === this.prop.direction ? (g = this.width * i,
                                    m = this.height,
                                    s.reversed && (y = this.width - g),
                                    "hide" !== s.action && "hideActive" !== s.action || (g = this.width * (1 - i),
                                        y = this.width - g,
                                        "hide" === s.action && (this.prop.hidePrev || (g = this.width,
                                            y = 0)),
                                        s.reversed && (y = 0))) : (g = this.width,
                                            m = this.height * i,
                                            s.reversed && (b = this.height - m),
                                            m = this.height * i,
                                            g = this.width,
                                            s.reversed && (b = this.height - m),
                                            "hide" !== s.action && "hideActive" !== s.action || (m = this.height * (1 - i),
                                                b = this.height - m,
                                                "hide" === s.action && (this.prop.hidePrev || (m = this.height,
                                                    b = 0)),
                                                s.reversed && (b = 0)));
                            else {
                                var k = this.zoomX / this.outer.clientWidth
                                    , w = this.zoomY / this.outer.clientHeight
                                    , E = i;
                                "zoomDiscard" == s.action && (E = 1 - E),
                                    .5 != k && (_ = 1 - k / .5,
                                        _ *= this.width * (this.prop.zoomK - 1) / 2,
                                        v += _ *= E),
                                    .5 != w && (x = 1 - w / .5,
                                        x *= this.width * (this.prop.zoomK - 1) / 2,
                                        f += x *= E),
                                    g = this.width,
                                    m = this.height
                            }
                            return this.ctx[s.ctx].save(),
                                this.ctx[s.ctx].beginPath(),
                                this.ctx[s.ctx].clearRect(0, 0, this.width, this.height),
                                this.ctx[s.ctx].rect(y, b, g, m),
                                this.ctx[s.ctx].closePath(),
                                this.ctx[s.ctx].clip(),
                                this.ctx[s.ctx].fillStyle = this.prop.fill,
                                this.ctx[s.ctx].fillRect(0, 0, this.width, this.height),
                                this.ctx[s.ctx].drawImage(h, 0, 0, h.width, h.height, v, f, o.imageWidth, o.imageHeight),
                                this.ctx[s.ctx].restore(),
                                1 === e && s.do.call(this),
                                !0
                        }
                    }, {
                        key: "init",
                        value: function () {
                            var t = this;
                            this.maxParallax = 0,
                                this.canvas = [],
                                this.canvasAdditional = [];
                            var i = r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "init", this).call(this);
                            if (!i)
                                return !1;
                            this.data = {
                                imageTablet: "data-" + this.prefix + "-imageTablet",
                                imageMobile: "data-" + this.prefix + "-imageMobile",
                                loaded: "data-" + this.prefix + "-loaded"
                            },
                                this.canvasAmount = 3,
                                this.ctx = [],
                                this.ctxAdditional = [],
                                this.videos = [],
                                this.loadedVideos = 0,
                                this.images = [],
                                this.imagesCurrent = [],
                                this.imagesTotal = [],
                                this.imagesTablet = [],
                                this.imagesMobile = [],
                                this.videos = [],
                                this.loaded = 0,
                                this.count = 0,
                                this.width = 0,
                                this.height = 0,
                                this.dpr = 1,
                                this.imageInfo = null,
                                this.firstStartSlide = !0,
                                this.prop.start && (this.activeShown = !0),
                                this.zoomBg = !1,
                                this.zoomed = !1,
                                this.zoomedHover = !1,
                                this.zoomX = 0,
                                this.zoomY = 0,
                                this.zoomAnimating = !1,
                                this.tapInit(),
                                this.tapSet(),
                                this.tapShowHide(),
                                this.tapEvents(),
                                this.createCanvas(),
                                this.createImages(),
                                this.count = this.images.length,
                                this.countImages = this.imagesTotal.length;
                            for (var s = this.countVideos = 0; s < this.videos.length; s++)
                                null != this.videos[s] && this.countVideos++;
                            return this.zoomInit(),
                                this.zoomEvents(),
                                this.setMaxParallax(),
                                this.setSize(),
                                this.startSlide(),
                                Object.assign(i, {
                                    images: function () {
                                        return t.images
                                    },
                                    imageInfo: function () {
                                        return t.imageInfo
                                    },
                                    firstStart: function () {
                                        return t.firstStartSlide
                                    },
                                    zoom: this.zoomCanvasClick.bind(this)
                                })
                        }
                    }]),
                    e
            }(),
            p.prototype.SliderContent = function (t) {
                function e() {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    l(this, e);
                    var i = a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                    for (var s in i.prefixAdditional = i.prefix + "Content",
                        t)
                        i.prop[s] = t[s];
                    return i.targets = ["prev", "next", "before", "after", "show", "hide"],
                        i
                }
                return h(e, p.prototype.Slider),
                    n(e, [{
                        key: "check",
                        value: function () {
                            return !!r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "check", this).call(this)
                        }
                    }, {
                        key: "checkItems",
                        value: function () {
                            var t = this.outer.querySelector("." + this.prefixAdditional + "__items");
                            return null !== t && (this.itemsSource = t.querySelectorAll("." + this.prefixAdditional + "__item"),
                                0 !== this.itemsSource.length)
                        }
                    }, {
                        key: "createControl",
                        value: function () {
                            return !!r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "createControl", this).call(this) && (this.prev.classList.add(this.prefixAdditional + "__control"),
                                this.prev.classList.add(this.prefixAdditional + "__control_prev"),
                                this.next.classList.add(this.prefixAdditional + "__control"),
                                this.next.classList.add(this.prefixAdditional + "__control_next"),
                                !0)
                        }
                    }, {
                        key: "setControl",
                        value: function () {
                            return !!r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "setControl", this).call(this) && (this.prop.control ? this.outer.classList.remove(this.prefixAdditional + "_control-hidden") : this.outer.classList.add(this.prefixAdditional + "_control-hidden"),
                                !0)
                        }
                    }, {
                        key: "createDot",
                        value: function () {
                            if (!r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "createDot", this).call(this))
                                return !1;
                            this.dots.classList.add(this.prefixAdditional + "__dots");
                            for (var t = 0; t < this.dot.length; t++)
                                this.dot[t].classList.add(this.prefixAdditional + "__dot");
                            return !0
                        }
                    }, {
                        key: "setDot",
                        value: function () {
                            return !!r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "setDot", this).call(this) && (this.prop.dot ? this.outer.classList.remove(this.prefixAdditional + "_dot-hidden") : this.outer.classList.add(this.prefixAdditional + "_dot-hidden"),
                                !0)
                        }
                    }, {
                        key: "setDotActive",
                        value: function () {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : this.active;
                            if (!r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "setDotActive", this).call(this, t))
                                return !1;
                            for (var i = 0; i < this.dot.length; i++)
                                i === t ? this.dot[i].classList.add(this.prefixAdditional + "__dot_active") : this.dot[i].classList.remove(this.prefixAdditional + "__dot_active");
                            return !0
                        }
                    }, {
                        key: "setPrevBool",
                        value: function () {
                            var t = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
                            return !!r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "setPrevBool", this).call(this, t) && (!0 === this.prevBool ? this.prev.classList.remove(this.prefixAdditional + "__control_disabled") : this.prev.classList.add(this.prefixAdditional + "__control_disabled"),
                                !0)
                        }
                    }, {
                        key: "setNextBool",
                        value: function () {
                            var t = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
                            return !!r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "setNextBool", this).call(this, t) && (!0 === this.nextBool ? this.next.classList.remove(this.prefixAdditional + "__control_disabled") : this.next.classList.add(this.prefixAdditional + "__control_disabled"),
                                !0)
                        }
                    }, {
                        key: "set",
                        value: function () {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : this.active
                                , i = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1]
                                , s = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "next"
                                , n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : "none"
                                , o = this.active;
                            if (!r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "set", this).call(this, t, !1, s, n))
                                return !1;
                            0 === (t = parseInt(t)) & !1 === this.prop.loop ? this.prev.classList.add(this.prefixAdditional + "__control_abolished") : this.prev.classList.remove(this.prefixAdditional + "__control_abolished"),
                                t === this.count - 1 & !1 === this.prop.loop ? this.next.classList.add(this.prefixAdditional + "__control_abolished") : this.next.classList.remove(this.prefixAdditional + "__control_abolished");
                            for (var a = 0; a < this.itemsSource.length; a++)
                                t === a ? this.itemsSource[a].classList.add(this.prefixAdditional + "__item_active") : this.itemsSource[a].classList.remove(this.prefixAdditional + "__item_active");
                            return this.launchEventsByTarget("before", {
                                prev: o,
                                next: t,
                                dir: s,
                                type: n
                            }),
                                this.loopTypes.includes(n) ? "prev" === s ? this.launchEventsByTarget("prev", {
                                    prev: o,
                                    next: t,
                                    dir: s,
                                    type: n
                                }) : this.launchEventsByTarget("next", {
                                    prev: o,
                                    next: t,
                                    dir: s,
                                    type: n
                                }) : o < t ? this.launchEventsByTarget("next", {
                                    prev: o,
                                    next: t,
                                    dir: s,
                                    type: n
                                }) : this.launchEventsByTarget("prev", {
                                    prev: o,
                                    next: t,
                                    dir: s,
                                    type: n
                                }),
                                this.animating = !0,
                                this.activeShown ? (setTimeout(function () {
                                    this.launchEventsByTarget("after", {
                                        prev: this.active,
                                        next: t,
                                        dir: s,
                                        type: n
                                    }),
                                        i && (this.active = t),
                                        this.animating = !1,
                                        this.startSlide(t)
                                }
                                    .bind(this), this.prop.delay + this.prop.duration),
                                    !0) : (i && (this.active = t),
                                        this.animating = !1,
                                        this.showActive())
                        }
                    }, {
                        key: "startSlide",
                        value: function () {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : this.active;
                            return !!r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "startSlide", this).call(this, t) && (this.outer.classList.add(this.prefixAdditional + "_showActive"),
                                this.itemsSource[t].classList.add(this.prefixAdditional + "__item_active"),
                                !0)
                        }
                    }, {
                        key: "showActive",
                        value: function () {
                            return !!r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "showActive", this).call(this) && (this.outer.classList.add(this.prefixAdditional + "_showActive"),
                                this.itemsSource[this.active].classList.add(this.prefixAdditional + "__item_active"),
                                this.animating = !0,
                                setTimeout(function () {
                                    this.firstStart && (this.firstStart = !1),
                                        this.startSlide(),
                                        this.animating = !1,
                                        this.launchEventsByTarget("show")
                                }
                                    .bind(this), this.prop.duration),
                                !0)
                        }
                    }, {
                        key: "hideActive",
                        value: function () {
                            return !!r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "hideActive", this).call(this) && (this.outer.classList.remove(this.prefixAdditional + "_showActive"),
                                this.itemsSource[this.active].classList.remove(this.prefixAdditional + "__item_active"),
                                this.animating = !0,
                                setTimeout(function () {
                                    this.animating = !1,
                                        this.launchEventsByTarget("hide")
                                }
                                    .bind(this), this.prop.duration),
                                !0)
                        }
                    }, {
                        key: "init",
                        value: function () {
                            var t = r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "init", this).call(this);
                            return !!t && (this.outer.classList.add("" + this.prefixAdditional),
                                this.count = this.itemsSource.length,
                                this.prop.start && (this.activeShown = !0),
                                this.startSlide(),
                                t)
                        }
                    }]),
                    e
            }(),
            p.prototype.Cursor = function (t) {
                function e() {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    l(this, e);
                    var i = a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                    for (var s in i.prefix = i.prefix + "cursor",
                        i.prop = Object.assign(i.prop, {
                            selector: "#" + i.prefix,
                            selectorAnchor: "." + i.prefix + "__hover",
                            k: {
                                value: .3,
                                size: .3,
                                ignore: .1
                            },
                            run: !0,
                            hideDefault: !1,
                            width: 36,
                            height: 36,
                            radius: 18,
                            helpers: 0,
                            moveInner: {
                                on: !0,
                                k: .1,
                                max: 1e3,
                                ignore: .1
                            }
                        }),
                        t)
                        i.prop[s] = t[s];
                    return i.targets = [],
                        i
                }
                return h(e, p.prototype.Class),
                    n(e, [{
                        key: "check",
                        value: function () {
                            var t = this.checkTypes({
                                obj: this.prop,
                                name: this.name,
                                console: this.prop.console,
                                vars: [["selector", "dom"], ["selectorAnchor", "dom"], ["k", "object"], ["run", "boolean"], ["hideDefault", "boolean"], ["width", "integer"], ["height", "integer"], ["radius", "integer"], ["helpers", "integer"], ["moveInner", "object"]]
                            });
                            return !(!t || !(t = this.checkTypes({
                                obj: this.prop.k,
                                name: this.name,
                                console: this.prop.console,
                                vars: [["value", "number"], ["size", "number"], ["ignore", "number"]]
                            })) || !(t = this.checkTypes({
                                obj: this.prop.moveInner,
                                name: this.name,
                                console: this.prop.console,
                                vars: [["on", "boolean"], ["k", "number"], ["max", "number"], ["ignore", "number"]]
                            })) || (this.outer = this.prop.v.document().querySelector(this.prop.selector),
                                this.prop.hideDefault ? this.outer.classList.add(this.prefix + "_hideDefault") : this.outer.classList.remove(this.prefix + "_hideDefault"),
                                0))
                        }
                    }, {
                        key: "changeProp",
                        value: function (t) {
                            var i = this.prop.run;
                            return !!r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "changeProp", this).call(this, t) && (this.prop.run !== i && this.run(),
                                !0)
                        }
                    }, {
                        key: "create",
                        value: function () {
                            this.outer.classList.add("" + this.prefix),
                                this.element = document.createElement("div"),
                                this.element.classList.add(this.prefix + "__element"),
                                this.outer.appendChild(this.element),
                                this.border = document.createElement("div"),
                                this.border.classList.add(this.prefix + "__border"),
                                this.element.appendChild(this.border);
                            for (var t = 0; t < this.prop.helpers; t++) {
                                var e = document.createElement("div");
                                e.classList.add(this.prefix + "__helper"),
                                    e.classList.add(this.prefix + "__helper_" + t),
                                    this.element.appendChild(e),
                                    this.helpers.push(e)
                            }
                            return !0
                        }
                    }, {
                        key: "setEvents",
                        value: function () {
                            return this.addEventListener({
                                el: this.outer,
                                target: "mousemove",
                                do: this.mousemove.bind(this)
                            }),
                                this.addEventListener({
                                    el: window,
                                    target: "mouseover",
                                    do: this.mouseover.bind(this)
                                }),
                                this.addEventListener({
                                    el: window,
                                    target: "mouseout",
                                    do: this.mouseout.bind(this)
                                }),
                                this.addEventListener({
                                    el: this.prop.v.document(),
                                    target: "mousedown",
                                    do: this.mousedown.bind(this)
                                }),
                                this.addEventListener({
                                    el: this.prop.v.document(),
                                    target: "mouseup",
                                    do: this.mouseup.bind(this)
                                }),
                                this.addEventListener({
                                    el: window,
                                    target: "blur",
                                    do: this.blur.bind(this)
                                }),
                                !0
                        }
                    }, {
                        key: "mousemove",
                        value: function (t) {
                            this.coords.x = t.x,
                                this.coords.y = t.y,
                                this.shown || (this.shown = !0,
                                    this.element.classList.add(this.prefix + "__element_shown"),
                                    this.animate(!0))
                        }
                    }, {
                        key: "mouseover",
                        value: function (t) {
                            this.element.classList.add(this.prefix + "__element_shown")
                        }
                    }, {
                        key: "mouseout",
                        value: function (t) {
                            this.element.classList.remove(this.prefix + "__element_shown")
                        }
                    }, {
                        key: "mousedown",
                        value: function (t) {
                            1 == t.which && this.element.classList.add(this.prefix + "__element_click")
                        }
                    }, {
                        key: "mouseup",
                        value: function (t) {
                            this.element.classList.remove(this.prefix + "__element_click")
                        }
                    }, {
                        key: "blur",
                        value: function (t) {
                            this.element.classList.remove(this.prefix + "__element_click")
                        }
                    }, {
                        key: "updateElements",
                        value: function () {
                            for (var t = this.prop.v.document().querySelectorAll(this.prop.selectorAnchor), e = [], i = 0; i < this.elements.length; i++)
                                this.childOf(this.elements[i], this.outer) && e.push(this.elements[i]);
                            this.elements = e;
                            for (var s = 0; s < t.length; s++)
                                null == t[s].getAttribute(this.data.proceeded) && (t[s][this.data.data] = {
                                    hovered: !1,
                                    inner: t[s].parentNode.querySelector("." + this.prefix + "__inner"),
                                    bounding: {},
                                    x: 0,
                                    y: 0,
                                    xCurrent: 0,
                                    yCurrent: 0,
                                    moveInnerMax: null
                                },
                                    t[s][this.data.data].inner && (t[s][this.data.data].bounding = t[s].getBoundingClientRect()),
                                    t[s].getAttribute(this.data.moveInnerMax) && (t[s][this.data.data].moveInnerMax = parseFloat(t[s].getAttribute(this.data.moveInnerMax))),
                                    this.elements.push(t[s]),
                                    this.addEventListener({
                                        el: t[s],
                                        target: "mouseover",
                                        do: this.mouseoverAnchor.bind(this, t[s])
                                    }),
                                    this.addEventListener({
                                        el: t[s],
                                        target: "mouseout",
                                        do: this.mouseoutAnchor.bind(this, t[s])
                                    }),
                                    t[s].setAttribute(this.data.proceeded, "true"))
                        }
                    }, {
                        key: "mouseoverAnchor",
                        value: function (t, e) {
                            if (this.prop.run) {
                                this.hovered = !0,
                                    t[this.data.data].hovered = !0;
                                var i = t.getAttribute(this.data.width)
                                    , s = t.getAttribute(this.data.height)
                                    , r = t.getAttribute(this.data.borderColor)
                                    , n = t.getAttribute(this.data.class);
                                i ? (i = parseInt(i),
                                    this.pos.width = i) : this.pos.width = t.getBoundingClientRect().width,
                                    s ? (s = parseInt(s),
                                        this.pos.height = s) : this.pos.height = t.getBoundingClientRect().height,
                                    r && (this.border.style.borderColor = r),
                                    this.pos.radius = this.pos.height / 2,
                                    t.parentNode.classList.add(this.prefix + "_hovered"),
                                    n && this.element.classList.add(n)
                            }
                        }
                    }, {
                        key: "mouseoutAnchor",
                        value: function (t, e) {
                            if (this.prop.run) {
                                this.hovered = !1,
                                    t[this.data.data].hovered = !1,
                                    this.border.style.borderColor = "",
                                    this.pos.radius = this.prop.radius,
                                    t.parentNode.classList.remove(this.prefix + "_hovered");
                                var i = t.getAttribute(this.data.class);
                                i && this.element.classList.remove(i)
                            }
                        }
                    }, {
                        key: "resetHover",
                        value: function () {
                            this.hovered = !1;
                            for (var t = 0; t < this.elements.length; t++)
                                this.mouseoutAnchor(this.elements[t])
                        }
                    }, {
                        key: "run",
                        value: function () {
                            this.prop.run && (window.requestAnimationFrame(this.run.bind(this)),
                                this.animate())
                        }
                    }, {
                        key: "r",
                        value: function (t, e) {
                            return e = void 0 !== e ? Math.pow(10, e) : 1e3,
                                Math.round(t * e) / e
                        }
                    }, {
                        key: "animatePos",
                        value: function (t) {
                            var e = this.coords.x
                                , i = this.coords.y;
                            this.pos.x += (e - this.pos.x) * t,
                                this.pos.y += (i - this.pos.y) * t;
                            var s = {
                                x: Math.ceil(this.pos.x),
                                y: Math.ceil(this.pos.y)
                            };
                            Math.abs(s.x - this.pos.x) <= this.prop.k.ignore && (this.pos.x = s.x),
                                Math.abs(s.y - this.pos.y) <= this.prop.k.ignore && (this.pos.y = s.y)
                        }
                    }, {
                        key: "animateSizes",
                        value: function (t) {
                            this.hovered ? (this.pos.widthCurrent += (this.pos.width - this.pos.widthCurrent) * t,
                                this.pos.heightCurrent += (this.pos.height - this.pos.heightCurrent) * t) : (this.pos.widthCurrent -= (this.pos.widthCurrent - this.prop.width) * t,
                                    this.pos.heightCurrent -= (this.pos.heightCurrent - this.prop.height) * t),
                                this.pos.widthCurrent = this.r(this.pos.widthCurrent),
                                this.pos.heightCurrent = this.r(this.pos.heightCurrent);
                            var e = {
                                w: Math.ceil(this.pos.widthCurrent),
                                h: Math.ceil(this.pos.heightCurrent)
                            };
                            Math.abs(e.w - this.pos.widthCurrent) <= this.prop.k.ignore && (this.pos.widthCurrent = e.w),
                                Math.abs(e.h - this.pos.heightCurrent) <= this.prop.k.ignore && (this.pos.heightCurrent = e.h),
                                this.pos.xDiff = this.pos.widthCurrent / 2,
                                this.pos.yDiff = this.pos.heightCurrent / 2
                        }
                    }, {
                        key: "animateRadius",
                        value: function (t) {
                            this.hovered ? this.pos.radiusCurrent += (this.pos.radius - this.pos.radiusCurrent) * t : this.pos.radiusCurrent -= (this.pos.radiusCurrent - this.prop.radius) * t,
                                this.pos.radiusCurrent = this.r(this.pos.radiusCurrent);
                            var e = Math.ceil(this.pos.radiusCurrent);
                            Math.abs(e - this.pos.radiusCurrent) <= this.prop.k.ignore && (this.pos.radiusCurrent = e)
                        }
                    }, {
                        key: "animate",
                        value: function () {
                            var t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0]
                                , e = this.prop.k.value
                                , i = this.prop.k.size;
                            t && (i = e = 1),
                                this.animateSizes(i),
                                this.animateRadius(i),
                                this.animatePos(e),
                                this.element.style.transform = "translate3d(" + (this.pos.x - this.pos.xDiff) + "px, " + (this.pos.y - this.pos.yDiff) + "px, 0)",
                                this.element.style.width = this.pos.widthCurrent + "px",
                                this.element.style.height = this.pos.heightCurrent + "px",
                                this.border.style.borderRadius = this.pos.radiusCurrent + "px";
                            for (var s = this.prop.moveInner.max, r = 0; r < this.elements.length; r++) {
                                var n = this.elements[r]
                                    , o = n[this.data.data];
                                if (o.hovered & null != o.inner & this.prop.moveInner.on) {
                                    n[this.data.data].bounding = n.getBoundingClientRect();
                                    var a = this.coords.x - o.bounding.left - this.pos.width / 2 - (n.clientWidth - this.pos.width) / 2
                                        , h = this.coords.y - o.bounding.top - this.pos.height / 2 - (n.clientHeight - this.pos.height) / 2;
                                    o.xCurrent += (a - o.xCurrent) * this.prop.moveInner.k,
                                        o.yCurrent += (h - o.yCurrent) * this.prop.moveInner.k,
                                        null != o.moveInnerMax && (s = o.moveInnerMax),
                                        Math.abs(o.xCurrent) > s && (o.xCurrent < 0 ? o.xCurrent = -s : 0 < o.xCurrent && (o.xCurrent = s)),
                                        Math.abs(o.yCurrent) > s && (o.yCurrent < 0 ? o.yCurrent = -s : 0 < o.yCurrent && (o.yCurrent = s)),
                                        o.inner.style.transform = "translate3d(" + o.xCurrent + "px, " + o.yCurrent + "px, 0)"
                                } else if (!o.hovered & null != o.inner) {
                                    if ((0 == o.xCurrent || Math.abs(o.xCurrent) <= this.prop.moveInner.ignore) & (0 == o.yCurrent || Math.abs(o.yCurrent) <= this.prop.moveInner.ignore))
                                        continue;
                                    o.xCurrent -= o.xCurrent * this.prop.moveInner.k,
                                        o.yCurrent -= o.yCurrent * this.prop.moveInner.k,
                                        o.inner.style.transform = "translate3d(" + o.xCurrent + "px, " + o.yCurrent + "px, 0)"
                                }
                            }
                        }
                    }, {
                        key: "init",
                        value: function () {
                            var t = this
                                , i = r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "init", this).call(this);
                            return !!i && (this.coords = {
                                x: 0,
                                y: 0
                            },
                                this.pos = {
                                    x: 0,
                                    y: 0,
                                    xDiff: 0,
                                    yDiff: 0,
                                    width: this.prop.width,
                                    widthCurrent: this.prop.width,
                                    height: this.prop.height,
                                    heightCurrent: this.prop.height,
                                    radius: this.prop.radius,
                                    radiusCurrent: this.prop.radius
                                },
                                this.data = {
                                    proceeded: "data-" + this.prefix + "-proceeded",
                                    data: "data-" + this.prefix + "-data",
                                    width: "data-" + this.prefix + "-width",
                                    height: "data-" + this.prefix + "-height",
                                    borderColor: "data-" + this.prefix + "-borderColor",
                                    class: "data-" + this.prefix + "-class",
                                    moveInnerMax: "data-" + this.prefix + "-moveInnerMax",
                                    timeout: "data-" + this.prefix + "-timeout"
                                },
                                this.elements = [],
                                this.helpers = [],
                                this.hovered = !1,
                                this.shown = !1,
                                this.resizeId = null,
                                this.create(),
                                this.setEvents(),
                                this.updateElements(),
                                this.run(),
                                Object.assign(i, {
                                    getElement: function () {
                                        return t.element
                                    },
                                    getElements: function () {
                                        return t.elements
                                    },
                                    getBorder: function () {
                                        return t.border
                                    },
                                    getHelpers: function () {
                                        return t.helpers
                                    },
                                    getOuter: function () {
                                        return t.outer
                                    },
                                    getPos: function () {
                                        return t.pos
                                    },
                                    updateElements: this.updateElements.bind(this),
                                    resetHover: this.resetHover.bind(this)
                                }))
                        }
                    }]),
                    e
            }(),
            p.prototype.Menu = function (t) {
                function e() {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    l(this, e);
                    var i = a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                    for (var s in i.prefix = i.prefix + "menu",
                        i.prop = Object.assign(i.prop, {
                            selector: "#" + i.prefix,
                            selectorButton: "#" + i.prefix + "-button",
                            animation: 500,
                            animationButton: 650,
                            animationInner: {
                                on: !1,
                                duration: 500
                            },
                            delays: {
                                show: 0,
                                hide: 0
                            },
                            keydown: {
                                on: !0,
                                key: 27
                            },
                            link: {
                                on: !1,
                                href: ""
                            }
                        }),
                        t)
                        i.prop[s] = t[s];
                    return i.targets = ["show", "shown", "hide", "hidden"],
                        i
                }
                return h(e, p.prototype.Class),
                    n(e, [{
                        key: "check",
                        value: function () {
                            var t = this.checkTypes({
                                obj: this.prop,
                                name: this.name,
                                console: this.prop.console,
                                vars: [["selector", "dom"], ["selectorButton", "dom"], ["animation", "integer"], ["animationButton", "integer"], ["animationInner", "object"], ["delays", "object"], ["keydown", "object"], ["link", "object"]]
                            });
                            return !(!t || !(t = this.checkTypes({
                                obj: this.prop.delays,
                                name: this.name,
                                console: this.prop.console,
                                vars: [["show", "integer"], ["hide", "integer"]]
                            })) || !(t = this.checkTypes({
                                obj: this.prop.animationInner,
                                name: this.name,
                                console: this.prop.console,
                                vars: [["on", "boolean"], ["duration", "integer"]]
                            })) || !(t = this.checkTypes({
                                obj: this.prop.keydown,
                                name: this.name,
                                console: this.prop.console,
                                vars: [["on", "boolean"], ["key", "integer"]]
                            })) || !(t = this.checkTypes({
                                obj: this.prop.link,
                                name: this.name,
                                console: this.prop.console,
                                vars: [["on", "boolean"], ["href", "string"]]
                            })) || (this.outer = this.prop.v.document().querySelector(this.prop.selector),
                                this.button = this.prop.v.document().querySelector(this.prop.selectorButton),
                                0))
                        }
                    }, {
                        key: "changeProp",
                        value: function (t) {
                            return !!r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "changeProp", this).call(this, t) && (this.keydownEvents(),
                                this.linkEvent(),
                                !0)
                        }
                    }, {
                        key: "setEvents",
                        value: function () {
                            return this.buttonEvents(),
                                this.keydownEvents(),
                                this.linkEvent(),
                                !0
                        }
                    }, {
                        key: "buttonEvents",
                        value: function () {
                            return this.button.setAttribute("data-" + this.prop.v.prefix() + "preloader-none", !0),
                                this.addEventListener({
                                    el: this.button,
                                    target: "click",
                                    do: this.clickButton.bind(this)
                                }),
                                this.addEventListener({
                                    el: this.button,
                                    target: "mouseover",
                                    do: this.mouseoverButton.bind(this)
                                }),
                                this.addEventListener({
                                    el: this.button,
                                    target: "mouseleave",
                                    do: this.mouseleaveButton.bind(this)
                                }),
                                !0
                        }
                    }, {
                        key: "clickButton",
                        value: function (t) {
                            t.preventDefault(),
                                this.buttonClick()
                        }
                    }, {
                        key: "mouseoverButton",
                        value: function (t) {
                            this.buttonHovered = !0
                        }
                    }, {
                        key: "mouseleaveButton",
                        value: function (t) {
                            this.buttonHovered = !1
                        }
                    }, {
                        key: "keydownEvents",
                        value: function () {
                            for (var t = 0; t < this.keydownEventIDs.length; t++)
                                this.prop.v.keydown.delete(this.keydownEventIDs[t], this.prop.console);
                            return this.keydownEventIDs.push(this.prop.v.keydown.add({
                                target: "once",
                                key: [this.prop.keydown.key],
                                do: this.hide.bind(this)
                            }, this.prop.keydown.on, this.prop.console)),
                                !0
                        }
                    }, {
                        key: "linkEvent",
                        value: function () {
                            return this.prop.link.on ? (this.button.classList.add(this.prefix + "-button_close"),
                                this.button.classList.add(this.prefix + "-button_forbidden-hover"),
                                this.button.href = this.prop.link.href) : !this.shown & !this.animating && (this.button.classList.remove(this.prefix + "-button_close"),
                                    this.button.classList.remove(this.prefix + "-button_forbidden-hover"),
                                    this.button.href = ""),
                                !0
                        }
                    }, {
                        key: "buttonClick",
                        value: function () {
                            return this.prop.link.on ? window.location.href = this.prop.link.href : this.showHide(),
                                !0
                        }
                    }, {
                        key: "show",
                        value: function () {
                            return !this.shown && this.showHide()
                        }
                    }, {
                        key: "hide",
                        value: function () {
                            return !!this.shown && this.showHide()
                        }
                    }, {
                        key: "showHide",
                        value: function () {
                            return !this.animating && (this.buttonHoverForbidden = !0,
                                this.animating = !0,
                                this.shown ? (this.launchEventsByTarget("hide"),
                                    0 === this.prop.delays.hide ? this.hideFunc() : setTimeout(this.hideFunc.bind(this), this.prop.delays.hide)) : (this.launchEventsByTarget("show"),
                                        0 === this.prop.delays.show ? this.showFunc() : setTimeout(this.showFunc.bind(this), this.prop.delays.show)),
                                !0)
                        }
                    }, {
                        key: "showFunc",
                        value: function () {
                            return this.prop.v.document().classList.add(this.prefix + "_shown"),
                                this.outer.classList.add(this.prefix + "_show"),
                                this.button.classList.add(this.prefix + "-button_close"),
                                this.outer.classList.remove(this.prefix + "_prepare-hide"),
                                setTimeout(function () {
                                    this.outer.classList.add(this.prefix + "_prepare-show"),
                                        this.button.classList.add(this.prefix + "-button_forbidden-hover")
                                }
                                    .bind(this), this.prop.v.timeMin()),
                                setTimeout(function () {
                                    this.shown = !0,
                                        this.prop.animationInner.on ? (this.outer.classList.add(this.prefix + "_animation-show"),
                                            setTimeout(function () {
                                                this.animating = !1,
                                                    this.launchEventsByTarget("shown")
                                            }
                                                .bind(this), this.prop.animationInner.duration)) : (this.animating = !1,
                                                    this.launchEventsByTarget("shown"))
                                }
                                    .bind(this), this.prop.animation),
                                !0
                        }
                    }, {
                        key: "hideFunc",
                        value: function () {
                            return this.outer.classList.remove(this.prefix + "_animation-show"),
                                this.prop.animationInner.on ? setTimeout(this.hideFuncInner.bind(this), this.prop.animationInner.duration) : this.hideFuncInner(),
                                !0
                        }
                    }, {
                        key: "hideFuncInner",
                        value: function () {
                            return this.prop.v.document().classList.remove(this.prefix + "_shown"),
                                this.button.classList.remove(this.prefix + "-button_close"),
                                this.outer.classList.remove(this.prefix + "_prepare-show"),
                                this.outer.classList.add(this.prefix + "_prepare-hide"),
                                setTimeout(function () {
                                    this.outer.classList.remove(this.prefix + "_show"),
                                        this.shown = !1,
                                        this.animating = !1,
                                        this.launchEventsByTarget("hidden")
                                }
                                    .bind(this), this.prop.animation),
                                setTimeout(function () {
                                    this.buttonHovered ? $(this.button).one("mouseleave", function () {
                                        this.buttonHoverForbidden && this.button.classList.remove(this.prefix + "-button_forbidden-hover")
                                    }
                                        .bind(this)) : this.button.classList.remove(this.prefix + "-button_forbidden-hover")
                                }
                                    .bind(this), this.prop.animationButton),
                                !0
                        }
                    }, {
                        key: "init",
                        value: function () {
                            var t = this
                                , i = r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "init", this).call(this);
                            return !!i && (this.outer.classList.add("" + this.prefix),
                                this.button.classList.add(this.prefix + "-button"),
                                this.shown = !1,
                                this.animating = !1,
                                this.buttonHovered = !1,
                                this.buttonHoverForbidden = !1,
                                this.keydownEventIDs = [],
                                this.setEvents(),
                                Object.assign(i, {
                                    shown: function () {
                                        return t.shown
                                    },
                                    animating: function () {
                                        return t.animating
                                    },
                                    show: this.show.bind(this),
                                    hide: this.hide.bind(this),
                                    showHide: this.showHide.bind(this)
                                }))
                        }
                    }]),
                    e
            }(),
            p.prototype.Filter = function (t) {
                function e() {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    l(this, e);
                    var i = a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                    for (var s in i.prefix = i.prefix + "filter",
                        i.prop = Object.assign(i.prop, {
                            selectors: {
                                item: "." + i.prefix + "__item",
                                title: "." + i.prefix + "__title",
                                value: "." + i.prefix + "__value",
                                markers: "." + i.prefix + "__markers"
                            },
                            saveOnChange: !0,
                            updateTitle: !0,
                            updateCount: !0,
                            removeDisabledActive: !0,
                            start: !0,
                            disabledTries: 1e3,
                            popstateEvent: !0,
                            popstateEventReload: !0,
                            setParamToNull: !1,
                            param: "page",
                            markers: !0,
                            separator: "__",
                            separatorAjax: "__",
                            separatorAjaxCount: "--",
                            cache: !1
                        }),
                        t)
                        i.prop[s] = t[s];
                    return i.targets = ["title", "value", "start", "reset", "save", "count"],
                        i
                }
                return h(e, p.prototype.Class),
                    n(e, [{
                        key: "check",
                        value: function () {
                            var t = this.checkTypes({
                                obj: this.prop,
                                name: this.name,
                                console: this.prop.console,
                                vars: [["selectors", "object"], ["saveOnChange", "boolean"], ["updateTitle", "boolean"], ["updateCount", "boolean"], ["removeDisabledActive", "boolean"], ["start", "boolean"], ["disabledTries", "integer"], ["popstateEvent", "boolean"], ["popstateEventReload", "boolean"], ["setParamToNull", "boolean"], ["param", "string"], ["markers", "boolean"], ["separator", "string"], ["separatorAjax", "string"], ["separatorAjaxCount", "string"], ["cache", "boolean"]]
                            });
                            return !!t && (!!(t = this.checkTypes({
                                obj: this.prop.selectors,
                                name: this.name,
                                console: this.prop.console,
                                vars: [["item", "string"], ["title", "string"], ["value", "string"], ["markers", "string"]]
                            })) && !(this.prop.markers && !this.checkTypes({
                                obj: this.prop.selectors,
                                name: this.name,
                                console: this.prop.console,
                                vars: [["markers", "dom"]]
                            })))
                        }
                    }, {
                        key: "changeProp",
                        value: function (t) {
                            return !!r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "changeProp", this).call(this, t) && !!this.setItems() && (this.start(),
                                this.set(),
                                !0)
                        }
                    }, {
                        key: "setItems",
                        value: function () {
                            return !!this.addMarkers() && (this.addItems(),
                                this.addValues(),
                                !0)
                        }
                    }, {
                        key: "addMarkers",
                        value: function () {
                            return this.prop.markers && (this.markers = this.prop.v.document().querySelector(this.prop.selectors.markers),
                                this.markers.classList.add(this.prefix + "__markers")),
                                !0
                        }
                    }, {
                        key: "addItems",
                        value: function () {
                            for (var t = this.prop.v.document().querySelectorAll(this.prop.selectors.item), e = 0; e < t.length; e++) {
                                var i = t[e].getAttribute(this.data.id)
                                    , s = t[e].getAttribute(this.data.proceeded);
                                if (null !== i && null === s) {
                                    this.items.push(t[e]),
                                        this.ids.push(i);
                                    var r = this.prop.v.document().querySelector(this.prop.selectors.title + "[" + this.data.id + '="' + i + '"]');
                                    null !== r && (this.titles[i] = r,
                                        this.titlesDefault[i] = r.innerHTML,
                                        r.classList.add(this.prefix + "__title")),
                                        t[e].classList.add(this.prefix + "__item"),
                                        t[e].setAttribute(this.data.proceeded, !0)
                                }
                            }
                            return !0
                        }
                    }, {
                        key: "addValues",
                        value: function () {
                            for (var t = 0; t < this.ids.length; t++)
                                for (var e = this.prop.v.document().querySelectorAll(this.prop.selectors.value + "[" + this.data.id + '="' + this.ids[t] + '"]'), i = 0; i < e.length; i++)
                                    null != e[i].getAttribute(this.data.value) && null === e[i].getAttribute(this.data.proceeded) && (e[i].classList.add(this.prefix + "__value"),
                                        e[i].setAttribute(this.data.proceeded, !0),
                                        e[i].setAttribute("data-" + this.prop.v.prefix() + "preloader-none", !0),
                                        this.valueEvent(e[i]),
                                        this.values.push(e[i]));
                            return !0
                        }
                    }, {
                        key: "getItem",
                        value: function () {
                            for (var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "", e = null, i = 0; i < this.items.length; i++)
                                this.items[i].getAttribute(this.data.id) == t && (e = this.items[i]);
                            return e
                        }
                    }, {
                        key: "getValues",
                        value: function () {
                            for (var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "", e = [], i = 0; i < this.values.length; i++)
                                this.values[i].getAttribute(this.data.id) == t && e.push(this.values[i]);
                            return e
                        }
                    }, {
                        key: "getValueActive",
                        value: function (t) {
                            return t.classList.contains(this.classes.valueActive)
                        }
                    }, {
                        key: "getValueDisabled",
                        value: function (t) {
                            return t.classList.contains(this.classes.valueDisabled)
                        }
                    }, {
                        key: "valuesRemoveActive",
                        value: function (t, e) {
                            for (var i = 0; i < t.length; i++)
                                t[i].getAttribute(this.data.value) != e && t[i].classList.remove(this.classes.valueActive);
                            return !0
                        }
                    }, {
                        key: "valueToggleActive",
                        value: function (t) {
                            return this.getValueActive(t) ? t.classList.remove(this.classes.valueActive) : t.classList.add(this.classes.valueActive),
                                !0
                        }
                    }, {
                        key: "markersToggleActive",
                        value: function () {
                            return 0 < this.markers.children.length ? this.markers.classList.remove(this.prefix + "__markers_empty") : this.markers.classList.add(this.prefix + "__markers_empty"),
                                !0
                        }
                    }, {
                        key: "valueEvent",
                        value: function (t) {
                            return this.addEventListener({
                                el: t,
                                target: "click",
                                do: this.valueClick.bind(this, t)
                            }),
                                !0
                        }
                    }, {
                        key: "valueClick",
                        value: function (t) {
                            var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
                            if (null !== e && e.preventDefault(),
                                !this.valueClickCheck(t))
                                return !1;
                            var i = t.getAttribute(this.data.id)
                                , s = t.getAttribute(this.data.value)
                                , r = this.getItem(i);
                            if (null === r)
                                return !1;
                            var n = this.getValues(i);
                            if (null !== r.getAttribute(this.data.count) && this.valuesRemoveActive(n, s),
                                this.valueToggleActive(t),
                                null == r.getAttribute(this.data.count) & null !== t.getAttribute(this.data.all))
                                if (t.classList.contains(this.classes.valueActive))
                                    for (var o = 0; o < n.length; o++)
                                        n[o].classList.add(this.classes.valueActive);
                                else
                                    for (var a = 0; a < n.length; a++)
                                        n[a].classList.remove(this.classes.valueActive);
                            return this.launchEventsByTarget("value", {
                                element: t,
                                id: i,
                                active: this.getValueActive(t),
                                disabled: this.getValueDisabled(t)
                            }),
                                this.prop.saveOnChange ? this.save() : (this.set(),
                                    this.count()),
                                !0
                        }
                    }, {
                        key: "valueClickCheck",
                        value: function (t) {
                            return !(this.loading & this.prop.updateCount || this.getValueDisabled(t) & !this.getValueActive(t) || this.getValueActive(t) & !this.prop.removeDisabledActive)
                        }
                    }, {
                        key: "setTitle",
                        value: function () {
                            for (var t = 0; t < this.ids.length; t++)
                                if (void 0 !== this.titles[this.ids[t]]) {
                                    for (var e = "", i = this.ids[t], s = this.getValues(i), r = 0; r < s.length; r++)
                                        this.getValueActive(s[r]) && (e += ", " + s[r].innerHTML);
                                    e = "" === e ? this.titlesDefault[this.ids[t]] : this.prop.updateTitle ? e.substring(2) : this.titlesDefault[this.ids[t]],
                                        this.titles[this.ids[t]].innerHTML = e,
                                        this.launchEventsByTarget("title", {
                                            element: this.titles[this.ids[t]],
                                            id: this.ids[t],
                                            title: e
                                        })
                                }
                            return !0
                        }
                    }, {
                        key: "setMarker",
                        value: function () {
                            if (!this.prop.markers)
                                return !1;
                            this.removeChildren(this.markers);
                            for (var t = 0; t < this.ids.length; t++) {
                                for (var e = this.getValues(this.ids[t]), i = 0; i < e.length; i++)
                                    if (this.getValueActive(e[i]) & null === e[i].getAttribute(this.data.all)) {
                                        var s = e[i].innerHTML
                                            , r = this.createMarker(s, e[i]);
                                        this.markers.appendChild(r)
                                    }
                                this.markersToggleActive()
                            }
                            return !0
                        }
                    }, {
                        key: "createMarker",
                        value: function (t, e) {
                            var i = document.createElement("div");
                            return i.classList.add(this.prefix + "__marker"),
                                i.innerHTML = '\n            <div class="' + this.prefix + '__marker-outer">\n                ' + t + '\n            </div>\n            <div class="' + this.prefix + '__marker-close"></div>\n        ',
                                this.addEventListener({
                                    el: i,
                                    target: "click",
                                    do: this.valueClick.bind(this, e)
                                }),
                                i
                        }
                    }, {
                        key: "set",
                        value: function () {
                            return this.setTitle(),
                                this.setMarker(),
                                !0
                        }
                    }, {
                        key: "start",
                        value: function () {
                            var t = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
                            if (this.loading & this.prop.updateCount & t)
                                return !1;
                            for (var e = 0; e < this.values.length; e++) {
                                var i = this.getParam({
                                    name: this.values[e].getAttribute(this.data.id)
                                });
                                null !== i && (i = i.split(this.prop.separator)).includes(this.values[e].getAttribute(this.data.value)) ? this.values[e].classList.add(this.classes.valueActive) : this.values[e].classList.remove(this.classes.valueActive)
                            }
                            return this.launchEventsByTarget("start"),
                                t && (this.set(),
                                    this.count()),
                                !0
                        }
                    }, {
                        key: "reset",
                        value: function () {
                            return !(this.loading & this.prop.updateCount || (this.valuesRemoveActive(this.values, "dfghfdh"),
                                this.launchEventsByTarget("reset"),
                                this.save(),
                                0))
                        }
                    }, {
                        key: "save",
                        value: function () {
                            var t = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
                            if (this.loading & this.prop.updateCount)
                                return !1;
                            this.set();
                            for (var e = 0; e < this.ids.length; e++) {
                                for (var i = this.ids[e], s = [], r = this.getValues(i), n = 0; n < r.length; n++)
                                    this.getValueActive(r[n]) && s.push(r[n].getAttribute(this.data.value));
                                for (var o = "", a = !0, h = 0; h < s.length; h++)
                                    o += this.prop.separator + s[h];
                                if (0 === o.length ? (a = !1,
                                    null !== this.getParam({
                                        name: i
                                    }) && (a = !0)) : o = o.substr(this.prop.separator.length),
                                    a & t)
                                    if (this.prop.setParamToNull) {
                                        var l = this.setParam({
                                            name: i,
                                            value: o,
                                            push: !1
                                        });
                                        l = location.origin + l,
                                            this.setParam({
                                                name: this.prop.param,
                                                value: "",
                                                url: l
                                            })
                                    } else
                                        this.setParam({
                                            name: i,
                                            value: o
                                        })
                            }
                            return this.count(),
                                this.launchEventsByTarget("save"),
                                !0
                        }
                    }, {
                        key: "count",
                        value: function () {
                            if (!this.prop.updateCount)
                                return !1;
                            if (this.loading)
                                return !1;
                            this.loading = !0;
                            for (var t = [], e = 0; e < this.ids.length; e++) {
                                for (var i = this.ids[e], s = [], r = this.getValues(i), n = 0; n < r.length; n++)
                                    this.getValueActive(r[n]) && s.push(r[n].getAttribute(this.data.value));
                                for (var o = "", a = 0; a < s.length; a++)
                                    o += this.prop.separator + s[a];
                                0 < o.length && (o = o.substr(this.prop.separator.length)),
                                    t.push([i, o])
                            }
                            for (var h = 0; h < this.ids.length; h++) {
                                for (var l = this.ids[h], p = [], u = 0; u < t.length; u++)
                                    t[u][0] != l && p.push(t[u]);
                                this.prop.v.ajax({
                                    method: "post",
                                    data: {
                                        get: l,
                                        values: JSON.stringify(p)
                                    },
                                    cache: this.prop.cache,
                                    callback: this.countCallback.bind(this, l),
                                    fail: this.count.bind(this)
                                })
                            }
                            return !0
                        }
                    }, {
                        key: "countCallback",
                        value: function (t, e) {
                            for (var i = e.split(this.prop.separatorAjax), s = this.getValues(t), r = 0; r < s.length; r++)
                                for (var n = 0; n < i.length; n++) {
                                    var o = i[n].split(this.prop.separatorAjaxCount);
                                    s[r].getAttribute(this.data.value) == o[0] && (0 < parseInt(o[1]) ? s[r].classList.remove(this.classes.valueDisabled) : s[r].classList.add(this.classes.valueDisabled))
                                }
                            return this.countLoading++,
                                this.countLoading >= this.ids.length && (this.loading = !1,
                                    this.countLoading = 0,
                                    this.launchEventsByTarget("count")),
                                !0
                        }
                    }, {
                        key: "popstate",
                        value: function () {
                            return this.disabledTries = 0,
                                this.addEventListener({
                                    el: window,
                                    target: "popstate",
                                    do: this.popstateEvent.bind(this)
                                }),
                                !0
                        }
                    }, {
                        key: "popstateEvent",
                        value: function (t) {
                            return this.prop.popstateEvent ? (this.catchStopLoading(),
                                !0) : (this.prop.popstateEventReload && location.reload(),
                                    !1)
                        }
                    }, {
                        key: "catchStopLoading",
                        value: function () {
                            if (this.save(!1))
                                this.start(!1),
                                    this.disabledTries = 0;
                            else if (this.disabledTries++,
                                this.disabledTries <= this.prop.disabledTries)
                                return window.requestAnimationFrame(this.catchStopLoading.bind(this)),
                                    !1;
                            return !0
                        }
                    }, {
                        key: "init",
                        value: function () {
                            var t = this
                                , i = r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "init", this).call(this);
                            return !!i && (this.loading = !1,
                                this.countLoading = 0,
                                this.markers = null,
                                this.items = [],
                                this.ids = [],
                                this.titles = {},
                                this.titlesDefault = {},
                                this.values = [],
                                this.data = {
                                    id: "data-" + this.prefix + "-id",
                                    value: "data-" + this.prefix + "-value",
                                    proceeded: "data-" + this.prefix + "-proceeded",
                                    count: "data-" + this.prefix + "-count",
                                    all: "data-" + this.prefix + "-all"
                                },
                                this.classes = {
                                    valueActive: this.prefix + "__value_active",
                                    valueDisabled: this.prefix + "__value_disabled"
                                },
                                this.popstate(),
                                !!this.setItems() && (this.prop.start && this.start(),
                                    Object.assign(i, {
                                        items: function () {
                                            return t.items
                                        },
                                        ids: function () {
                                            return t.ids
                                        },
                                        titles: function () {
                                            return t.titles
                                        },
                                        titlesDefault: function () {
                                            return t.titlesDefault
                                        },
                                        values: function () {
                                            return t.values
                                        },
                                        valueClick: this.valueClick.bind(this),
                                        start: this.start.bind(this),
                                        reset: this.reset.bind(this),
                                        save: this.save.bind(this),
                                        count: this.count.bind(this)
                                    })))
                        }
                    }]),
                    e
            }(),
            p.prototype.Media = function (t) {
                function e() {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    l(this, e);
                    var i = a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                    for (var s in i.prefix = i.prefix + "media",
                        i.dataPrefix = "data-" + i.prefix,
                        i.prop = Object.assign(i.prop, {
                            selector: "#" + i.prefix,
                            duration: 500,
                            delay: 0,
                            bezier: {
                                on: !1,
                                name: "linear"
                            }
                        }),
                        t)
                        i.prop[s] = t[s];
                    return i
                }
                return h(e, p.prototype.Class),
                    n(e, [{
                        key: "check",
                        value: function () {
                            return !!this.checkTypes({
                                obj: this.prop,
                                name: this.name,
                                console: this.prop.console,
                                vars: [["selector", "dom"], ["duration", "integer"], ["delay", "integer"], ["bezier", "bezier"]]
                            }) && (this.outer = this.prop.v.document().querySelector(this.prop.selector),
                                null === this.outer.getAttribute(this.data.proceeded))
                        }
                    }, {
                        key: "checkMedia",
                        value: function () {
                            if (null !== this.outer.getAttribute(this.data.iframe))
                                this.type = "iframe";
                            else if (null !== this.outer.getAttribute(this.data.mp4) || null !== this.outer.getAttribute(this.data.ogv) || null !== this.outer.getAttribute(this.data.webm))
                                this.type = "video";
                            else {
                                if (null === this.outer.getAttribute(this.data.image))
                                    return !1;
                                this.type = "image"
                            }
                            return !0
                        }
                    }, {
                        key: "set",
                        value: function () {
                            if ("iframe" === this.type) {
                                var t = document.createElement("iframe");
                                t.setAttribute("src", this.outer.getAttribute(this.data.iframe)),
                                    this.outer.appendChild(t),
                                    this.elements.iframe = t
                            }
                            if ("video" === this.type) {
                                var e = document.createElement("video");
                                if (e.setAttribute("controls", !0),
                                    null !== this.outer.getAttribute(this.data.mp4)) {
                                    var i = document.createElement("source");
                                    i.setAttribute("src", this.outer.getAttribute(this.data.mp4)),
                                        i.setAttribute("type", 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"'),
                                        e.appendChild(i)
                                }
                                if (null !== this.outer.getAttribute(this.data.ogv)) {
                                    var s = document.createElement("source");
                                    s.setAttribute("src", this.outer.getAttribute(this.data.ogv)),
                                        s.setAttribute("type", 'video/ogg; codecs="theora, vorbis"'),
                                        e.appendChild(s)
                                }
                                if (null !== this.outer.getAttribute(this.data.webm)) {
                                    var r = document.createElement("source");
                                    r.setAttribute("src", this.outer.getAttribute(this.data.webm)),
                                        r.setAttribute("type", 'video/webm; codecs="vp8, vorbis"'),
                                        e.appendChild(r)
                                }
                                if (this.outer.appendChild(e),
                                    this.elements.video = e,
                                    null !== this.outer.getAttribute(this.data.image)) {
                                    var n = document.createElement("div");
                                    n.classList.add(this.prefix + "__play"),
                                        n.innerHTML = "<div></div>",
                                        this.outer.appendChild(n),
                                        this.elements.play = n
                                }
                            }
                            if (("image" === this.type || "video" === this.type) && null !== this.outer.getAttribute(this.data.image)) {
                                var o = document.createElement("div");
                                o.classList.add("bg-image"),
                                    o.classList.add(this.prefix + "__image"),
                                    o.style.backgroundImage = "url(" + this.outer.getAttribute(this.data.image) + ")",
                                    this.outer.appendChild(o),
                                    this.elements.image = o
                            }
                            if (null !== this.outer.getAttribute(this.data.link)) {
                                var a = document.createElement("a");
                                a.classList.add(this.prefix + "__link"),
                                    a.setAttribute("href", this.outer.getAttribute(this.data.link)),
                                    this.outer.appendChild(a),
                                    this.elements.link = a,
                                    null !== this.outer.getAttribute(this.data.linkNonePreloader) && a.setAttribute("data-" + this.prop.v.prefix() + "preloader-none", !0),
                                    null !== this.outer.getAttribute(this.data.linkAjaxPage) && a.classList.add(this.prop.v.prefix() + "ajaxPage__link"),
                                    null !== this.outer.getAttribute(this.data.blank) && a.setAttribute("target", "_blank")
                            }
                            return "video" === this.type && this.videoEvents(),
                                this.elements.outer = this.outer,
                                !0
                        }
                    }, {
                        key: "videoEvents",
                        value: function () {
                            return this.vars.opened = !1,
                                this.addEventListener({
                                    el: this.elements.play,
                                    target: "click",
                                    do: this.videoToggle.bind(this)
                                }),
                                this.addEventListener({
                                    el: this.elements.image,
                                    target: "click",
                                    do: this.videoToggle.bind(this)
                                }),
                                !0
                        }
                    }, {
                        key: "videoToggle",
                        value: function () {
                            if (this.animating)
                                return !1;
                            if (this.animating = !0,
                                this.vars.opened) {
                                this.elements.video.pause(),
                                    this.elements.image.classList.remove(this.prefix + "__hidden"),
                                    this.elements.play.classList.remove(this.prefix + "__hidden");
                                var t = new this.prop.v.Animate({
                                    console: this.prop.console,
                                    bezier: this.prop.bezier,
                                    delay: this.prop.delay + this.prop.v.timeMin(),
                                    duration: this.prop.duration,
                                    do: function (t, e) {
                                        var i = this;
                                        this.elements.image.style.opacity = e,
                                            this.elements.play.style.opacity = e,
                                            1 === t && setTimeout((function () {
                                                i.elements.video.currentTime = 0,
                                                    i.animating = !1
                                            }
                                            ), this.prop.v.timeMin())
                                    }
                                        .bind(this)
                                });
                                (t = t.init()).run(),
                                    this.vars.opened = !1
                            } else {
                                var e = new this.prop.v.Animate({
                                    console: this.prop.console,
                                    bezier: this.prop.bezier,
                                    delay: this.prop.delay,
                                    duration: this.prop.duration,
                                    do: function (t, e) {
                                        var i = this;
                                        this.elements.image.style.opacity = 1 - e,
                                            this.elements.play.style.opacity = 1 - e,
                                            1 === t && setTimeout((function () {
                                                i.elements.image.classList.add(i.prefix + "__hidden"),
                                                    i.elements.play.classList.add(i.prefix + "__hidden"),
                                                    i.elements.video.play(),
                                                    i.animating = !1
                                            }
                                            ), this.prop.v.timeMin())
                                    }
                                        .bind(this)
                                });
                                (e = e.init()).run(),
                                    this.vars.opened = !0
                            }
                            return !0
                        }
                    }, {
                        key: "init",
                        value: function () {
                            var t = this;
                            if (this.type = "",
                                this.animating = !1,
                                this.data = {
                                    proceeded: this.dataPrefix + "-proceeded",
                                    link: this.dataPrefix + "-link",
                                    linkNonePreloader: this.dataPrefix + "-link-nonePreloader",
                                    linkAjaxPage: this.dataPrefix + "-link-ajaxPage",
                                    iframe: this.dataPrefix + "-iframe",
                                    mp4: this.dataPrefix + "-mp4",
                                    ogv: this.dataPrefix + "-ogv",
                                    webm: this.dataPrefix + "-webm",
                                    image: this.dataPrefix + "-image",
                                    blank: this.dataPrefix + "-blank"
                                },
                                this.types = ["video", "iframe", "image"],
                                !r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "init", this).call(this))
                                return !1;
                            if (this.elements = {},
                                this.vars = {},
                                !this.checkMedia())
                                return !1;
                            this.set(),
                                this.outer.classList.add("" + this.prefix),
                                this.outer.classList.add(this.prefix + "_" + this.type),
                                this.outer.setAttribute(this.data.proceeded, !0);
                            var i = {
                                type: function () {
                                    return t.type
                                },
                                elements: function () {
                                    return t.elements
                                },
                                prop: function () {
                                    return t.prop
                                },
                                changeProp: this.changeProp.bind(this)
                            };
                            return "video" === this.type && (i = Object.assign({
                                videoToggle: this.videoToggle.bind(this),
                                opened: function () {
                                    return t.vars.opened
                                }
                            }, i)),
                                i
                        }
                    }]),
                    e
            }(),
            p.prototype.SameHeight = function (t) {
                function e() {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    l(this, e);
                    var i = a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                    for (var s in i.prefix = i.prefix + "sameHeight",
                        i.prop = Object.assign(i.prop, {
                            selector: "." + i.prefix,
                            resize: !0
                        }),
                        t)
                        i.prop[s] = t[s];
                    return i
                }
                return h(e, p.prototype.Class),
                    n(e, [{
                        key: "check",
                        value: function () {
                            return !!this.checkTypes({
                                obj: this.prop,
                                name: this.name,
                                console: this.prop.console,
                                vars: [["selector", "string"], ["resize", "boolean"]]
                            }) && (this.items = this.prop.v.document().querySelectorAll(this.prop.selector),
                                !0)
                        }
                    }, {
                        key: "changeProp",
                        value: function (t) {
                            return !!r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "changeProp", this).call(this, t) && (this.update(),
                                this.setEvents(),
                                !0)
                        }
                    }, {
                        key: "setEvents",
                        value: function () {
                            return this.prop.resize ? null == this.resizeID && (this.resizeID = this.prop.v.viewport.add({
                                target: "w",
                                name: this.name + " Resize",
                                do: this.set.bind(this),
                                timeout: this.prop.v.timeMin()
                            })) : (this.prop.v.viewport.delete(this.resizeID),
                                this.resizeID = null),
                                !0
                        }
                    }, {
                        key: "update",
                        value: function () {
                            return this.items = this.prop.v.document().querySelectorAll(this.prop.selector),
                                this.set(),
                                !0
                        }
                    }, {
                        key: "clear",
                        value: function () {
                            for (var t = 0; t < this.items.length; t++)
                                this.items[t].style.height = "";
                            return !0
                        }
                    }, {
                        key: "set",
                        value: function () {
                            return this.clear(),
                                setTimeout(function () {
                                    for (var t = 0, e = 0; e < this.items.length; e++) {
                                        var i = this.items[e].clientHeight;
                                        t < i && (t = i)
                                    }
                                    for (var s = 0; s < this.items.length; s++)
                                        this.items[s].style.height = t + "px"
                                }
                                    .bind(this), this.prop.v.timeMin()),
                                !0
                        }
                    }, {
                        key: "init",
                        value: function () {
                            var t = this;
                            return !!r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "init", this).call(this) && (this.resizeID = null,
                                this.setEvents(),
                                this.set(),
                            {
                                clear: this.clear.bind(this),
                                set: this.set.bind(this),
                                update: this.update.bind(this),
                                prop: function () {
                                    return t.prop
                                },
                                changeProp: this.changeProp.bind(this)
                            })
                        }
                    }]),
                    e
            }(),
            p.prototype.AjaxContent = function (t) {
                function e() {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    l(this, e);
                    var i = a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                    for (var s in i.prefix = i.prefix + "ajaxContent",
                        i.prop = Object.assign(i.prop, {
                            selector: "#" + i.prefix,
                            selectorAjax: "#" + i.prefix,
                            param: "page",
                            updateUrl: !1,
                            updateTitle: !0,
                            updateContent: !0,
                            pagination: {
                                on: !1,
                                left: 3,
                                right: 3,
                                changeContent: !0,
                                timeout: 0
                            },
                            disabledTries: 1e3,
                            popstateEvent: !0,
                            popstateEventReload: !0,
                            setPageToOne: !1,
                            staticUrl: !1,
                            cache: !1
                        }),
                        t)
                        i.prop[s] = t[s];
                    return i.targets = ["load", "last", "empty", "pagination"],
                        i
                }
                return h(e, p.prototype.Class),
                    n(e, [{
                        key: "check",
                        value: function () {
                            var t = this.checkTypes({
                                obj: this.prop,
                                name: this.name,
                                console: this.prop.console,
                                vars: [["selector", "dom"], ["selectorAjax", "string"], ["param", "string"], ["updateUrl", "boolean"], ["updateTitle", "boolean"], ["updateContent", "boolean"], ["pagination", "object"], ["disabledTries", "integer"], ["popstateEvent", "boolean"], ["popstateEventReload", "boolean"], ["setPageToOne", "boolean"], ["staticUrl", "boolean"], ["cache", "boolean"]]
                            });
                            return !!t && !!(t = this.checkTypes({
                                obj: this.prop.pagination,
                                name: this.name,
                                console: this.prop.console,
                                vars: [["on", "boolean"], ["left", "integer"], ["right", "integer"], ["changeContent", "boolean"], ["timeout", "integer"]]
                            })) && (this.outer = this.prop.v.document().querySelector(this.prop.selector),
                                !0)
                        }
                    }, {
                        key: "changeProp",
                        value: function (t) {
                            return !!r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "changeProp", this).call(this, t) && (this.reload(),
                                this.showHidePagination(),
                                !0)
                        }
                    }, {
                        key: "getRange",
                        value: function () {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null
                                , e = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1]
                                , i = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2];
                            if (null === t)
                                return !1;
                            var s = void 0;
                            return e && (s = t.getAttribute(this.data.active),
                                s = parseInt(s),
                                v.checkType("integer", s) ? s < 1 && (s = 1) : s = 1,
                                this.active = s),
                                i && (s = t.getAttribute(this.data.max),
                                    s = parseInt(s),
                                    v.checkType("integer", s) ? s < 1 && (s = 1) : s = 1,
                                    this.max = s),
                                s = t.getAttribute(this.data.total),
                                this.total = parseInt(s),
                                !0
                        }
                    }, {
                        key: "checkEmpty",
                        value: function () {
                            return this.max === this.active && this.launchEventsByTarget("empty"),
                                !0
                        }
                    }, {
                        key: "set",
                        value: function () {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null
                                , e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1]
                                , i = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2];
                            if (e) {
                                if (t > this.max || this.loading)
                                    return !1
                            } else if (this.active >= this.max || this.loading)
                                return !1;
                            if (null === t)
                                t = this.active + 1;
                            else if (t = parseInt(t),
                                !this.checkType("integer", t))
                                return !1;
                            var s = !1;
                            return this.prop.updateUrl & i && (s = !0),
                                this.prop.staticUrl && (s = !1),
                                this.prop.staticUrl || (this.url = this.setParam({
                                    name: this.prop.param,
                                    value: t,
                                    push: s
                                })),
                                this.loading = !0,
                                this.prop.v.ajax({
                                    url: this.prop.staticUrl ? this.url : window.location.href,
                                    method: "get",
                                    data: {
                                        ajaxContent: 1,
                                        page: t
                                    },
                                    cache: this.prop.cache,
                                    callback: this.html.bind(this, !1, t, e),
                                    fail: this.set.bind(this)
                                }),
                                !0
                        }
                    }, {
                        key: "reload",
                        value: function () {
                            var t = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0]
                                , e = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
                            if (this.loading)
                                return !1;
                            if (e & !this.prop.staticUrl) {
                                var i = this.getParam({
                                    name: this.prop.param
                                });
                                i = null !== i ? parseInt(i) : 1,
                                    this.url != window.location.pathname + window.location.search && (this.active = i)
                            }
                            if (this.prop.staticUrl)
                                this.active = 1;
                            else {
                                var s = !1;
                                this.prop.updateUrl & t && (s = !0),
                                    this.url = this.setParam({
                                        name: this.prop.param,
                                        value: this.active,
                                        push: s
                                    })
                            }
                            return this.loading = !0,
                                this.prop.v.ajax({
                                    url: this.prop.staticUrl ? this.url : window.location.href,
                                    method: "get",
                                    data: {
                                        ajaxContent: 1,
                                        page: this.active
                                    },
                                    cache: this.prop.cache,
                                    callback: this.html.bind(this, !0, this.active, !1),
                                    fail: this.reload.bind(this)
                                }),
                                !0
                        }
                    }, {
                        key: "html",
                        value: function () {
                            var t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0]
                                , e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : this.active
                                , i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2]
                                , s = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : ""
                                , r = document.createElement("div");
                            if (r.innerHTML = s,
                                this.prop.updateTitle) {
                                var n = {
                                    current: document.querySelector("title"),
                                    new: r.querySelector("title")
                                };
                                null !== n.current & null !== n.new && (n.current.innerHTML = n.new.innerHTML)
                            }
                            var o, a = {
                                current: this.outer,
                                new: r.querySelector(this.prop.selectorAjax)
                            };
                            return null !== a.new && (o = a.new.innerHTML,
                                this.prop.updateContent && (t || i && this.prop.pagination.changeContent ? (this.removeChildren(a.current),
                                    a.current.innerHTML = o) : a.current.innerHTML += o),
                                this.getRange(a.new, !1, !0),
                                this.launchEventsByTarget("load", {
                                    pagination: i,
                                    reload: t,
                                    outer: this.outer,
                                    docHTML: s,
                                    html: o,
                                    total: this.total
                                }),
                                this.active = e,
                                this.active >= this.max && this.launchEventsByTarget("last", {
                                    outer: this.outer,
                                    docHTML: s,
                                    html: o
                                }),
                                this.createPaginationLinks(),
                                this.setEventsPagination(),
                                this.setActivePagination(),
                                r = null,
                                !(this.loading = !1))
                        }
                    }, {
                        key: "showHidePagination",
                        value: function () {
                            return this.prop.pagination.on ? this.pagination.classList.remove("display_none") : this.pagination.classList.add("display_none"),
                                !0
                        }
                    }, {
                        key: "createPagination",
                        value: function () {
                            return this.pagination = document.createElement("div"),
                                this.pagination.classList.add(this.prefix + "__pagination"),
                                null === this.outer.nextElementSibling ? this.outer.parentElement.appendChild(this.pagination) : this.outer.parentElement.insertBefore(this.pagination, this.outer.nextElementSibling),
                                !0
                        }
                    }, {
                        key: "createPaginationLinks",
                        value: function () {
                            this.removeEventListeners(),
                                this.removeChildren(this.pagination),
                                this.popstate(),
                                this.paginationElements = [],
                                this.paginationLinks = [],
                                this.paginationDots = [];
                            for (var t = 0; t < this.max; t++) {
                                var e = document.createElement("div");
                                this.paginationElements.push(e),
                                    e.classList.add(this.prefix + "__page");
                                var i = document.createElement("a");
                                i.setAttribute("data-" + this.prop.v.prefix() + "preloader-none", !0),
                                    e.appendChild(i),
                                    this.paginationLinks.push(i);
                                var s = this.setParam({
                                    name: this.prop.param,
                                    value: t + 1,
                                    push: !1
                                });
                                i.href = s;
                                var r = t + 1;
                                t < 9 && (r = "0" + r),
                                    i.innerHTML = "<span>" + r + "</span>",
                                    this.pagination.appendChild(e)
                            }
                            1 === this.max ? this.pagination.classList.add("display_none_important") : this.pagination.classList.remove("display_none_important");
                            for (var n = [0, this.max - 1], o = this.active - 1; o >= this.active - 1 - this.prop.pagination.left; o--)
                                n.push(o);
                            for (var a = this.active - 1; a <= this.active - 1 + this.prop.pagination.left; a++)
                                n.push(a);
                            for (var h = 0; h < this.paginationLinks.length; h++) {
                                for (var l = !1, p = 0; p < n.length; p++)
                                    h === n[p] && (l = !0);
                                if (l)
                                    this.paginationDots.push(null);
                                else {
                                    this.paginationLinks[h].parentElement.classList.add(this.prefix + "__page_dot"),
                                        this.paginationDots.push(this.paginationLinks[h].parentElement),
                                        this.paginationLinks[h].classList.add("display_none");
                                    var u = document.createElement("span");
                                    u.innerHTML = "...",
                                        this.paginationLinks[h].parentElement.appendChild(u)
                                }
                            }
                            for (var d = 0, c = 0; d < this.active; d++)
                                null !== this.paginationDots[d] && (0 < c && this.paginationDots[d].classList.add("display_none"),
                                    c++);
                            for (var v = this.active - 1, f = 0; v < this.max - 1; v++)
                                null !== this.paginationDots[v] && (0 < f && this.paginationDots[v].classList.add("display_none"),
                                    f++);
                            return !0
                        }
                    }, {
                        key: "setEventsPagination",
                        value: function () {
                            for (var t = 0; t < this.paginationLinks.length; t++)
                                this.addEventListener({
                                    el: this.paginationLinks[t],
                                    target: "click",
                                    do: this.clickEventPagination.bind(this, this.paginationLinks[t], t)
                                });
                            return !0
                        }
                    }, {
                        key: "clickEventPagination",
                        value: function (t, e, i) {
                            return i.preventDefault(),
                                !t.parentElement.classList.contains(this.prefix + "__page_active") && (e += 1,
                                    this.launchEventsByTarget("pagination", {
                                        outer: this.outer,
                                        num: e,
                                        link: t
                                    }),
                                    setTimeout(this.set.bind(this, e, !0), this.prop.pagination.timeout),
                                    !0)
                        }
                    }, {
                        key: "setActivePagination",
                        value: function () {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : this.active;
                            t -= 1;
                            for (var e = 0; e < this.paginationLinks.length; e++)
                                e !== t ? this.paginationLinks[e].parentElement.classList.remove(this.prefix + "__page_active") : this.paginationLinks[e].parentElement.classList.add(this.prefix + "__page_active");
                            return !0
                        }
                    }, {
                        key: "popstate",
                        value: function () {
                            return this.disabledTries = 0,
                                this.addEventListener({
                                    el: window,
                                    target: "popstate",
                                    do: this.popstateEvent.bind(this)
                                }),
                                !0
                        }
                    }, {
                        key: "popstateEvent",
                        value: function (t) {
                            return this.prop.popstateEvent ? (this.catchStopLoading(),
                                !0) : (this.prop.popstateEventReload && location.reload(),
                                    !1)
                        }
                    }, {
                        key: "catchStopLoading",
                        value: function () {
                            var t = this.url = this.getParam({
                                name: this.prop.param
                            });
                            if (t = null !== t ? parseInt(t) : 1,
                                this.set(t, !0, !1))
                                this.disabledTries = 0;
                            else if (this.disabledTries++,
                                this.disabledTries <= this.prop.disabledTries)
                                return window.requestAnimationFrame(this.catchStopLoading.bind(this)),
                                    !1;
                            return !0
                        }
                    }, {
                        key: "init",
                        value: function () {
                            var t = r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "init", this).call(this);
                            if (!t)
                                return !1;
                            this.data = {
                                active: "data-" + this.prefix + "-active",
                                max: "data-" + this.prefix + "-max",
                                url: "data-" + this.prefix + "-url",
                                total: "data-" + this.prefix + "-total"
                            },
                                this.active = 1,
                                this.max = 1,
                                this.total = 0;
                            var i = this.outer.getAttribute("" + this.data.url);
                            if (null != i & this.prop.staticUrl) {
                                var s = new URL(i);
                                this.url = s.href
                            } else
                                this.url = window.location.href;
                            return this.loading = !1,
                                this.popstate(),
                                this.getRange(this.outer),
                                this.checkEmpty(),
                                this.createPagination(),
                                this.createPaginationLinks(),
                                this.setEventsPagination(),
                                this.setActivePagination(),
                                this.showHidePagination(),
                                Object.assign(t, {
                                    set: this.set.bind(this),
                                    reload: this.reload.bind(this)
                                })
                        }
                    }]),
                    e
            }(),
            p.prototype.Anchor = function (t) {
                function e() {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    l(this, e);
                    var i = a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                    for (var s in i.prefix = i.prefix + "anchor",
                        i.prop = Object.assign(i.prop, {
                            selectorOuter: "#" + i.prefix + "__outer",
                            selectorSection: "." + i.prefix + "__section",
                            selectorAnchor: "." + i.prefix + "__anchor",
                            duration: 500,
                            delay: 0,
                            edge: .5,
                            edgeClick: .3
                        }),
                        t)
                        i.prop[s] = t[s];
                    return i.targets = ["change", "click"],
                        i
                }
                return h(e, p.prototype.Class),
                    n(e, [{
                        key: "check",
                        value: function () {
                            return !!this.checkTypes({
                                obj: this.prop,
                                name: this.name,
                                console: this.prop.console,
                                vars: [["selectorOuter", "dom"], ["selectorSection", "dom"], ["selectorAnchor", "dom"], ["duration", "integer"], ["delay", "integer"], ["edge", "number"], ["edgeClick", "number"]]
                            })
                        }
                    }, {
                        key: "changeProp",
                        value: function (t) {
                            return !!r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "changeProp", this).call(this, t) && (this.getElements(),
                                this.setEvents(),
                                !0)
                        }
                    }, {
                        key: "removeElements",
                        value: function () {
                            this.checkType("htmlElement", this.outer) && this.outer.removeAttribute(this.data.proceeded);
                            for (var t = 0; t < this.anchors.length; t++)
                                this.anchors[t].removeAttribute(this.data.proceeded);
                            this.removeEventListeners()
                        }
                    }, {
                        key: "getElements",
                        value: function () {
                            this.removeElements(),
                                this.outer = this.prop.v.doc().querySelector(this.prop.selectorOuter),
                                this.sections = this.prop.v.doc().querySelectorAll(this.prop.selectorSection),
                                this.anchors = this.prop.v.doc().querySelectorAll(this.prop.selectorAnchor),
                                this.outer.classList.add(this.prefix + "__outer");
                            for (var t = 0; t < this.sections.length; t++)
                                this.sections[t].classList.add(this.prefix + "__section");
                            for (var e = 0; e < this.anchors.length; e++)
                                this.anchors[e].classList.add(this.prefix + "__anchor"),
                                    this.anchors[e].setAttribute("data-" + this.prop.v.prefix() + "preloader-none", !0);
                            this.hrefs = [];
                            for (var i = 0; i < this.anchors.length; i++) {
                                var s = this.getHref(this.anchors[i]);
                                s && this.hrefs.push(s)
                            }
                            return !0
                        }
                    }, {
                        key: "setEvents",
                        value: function () {
                            if (null === this.outer.getAttribute(this.data.proceeded) || this.prevSelectorOuter !== this.prop.selectorOuter || this.prevSelectorSection !== this.prop.selectorSection || this.prevSelectorAnchor !== this.prop.selectorAnchor) {
                                var t = this.outer;
                                this.outer !== window && this.outer !== this.prop.v.document() && this.outer !== this.prop.v.body() || (t = window),
                                    this.addEventListener({
                                        el: t,
                                        target: "scroll",
                                        do: this.seek.bind(this)
                                    }),
                                    this.outer.setAttribute(this.data.proceeded, !0),
                                    this.prevSelectorOuter = this.prop.selectorOuter,
                                    this.prevSelectorSection = this.prop.selectorSection,
                                    this.prevSelectorAnchor = this.prop.selectorAnchor
                            }
                            for (var e = 0; e < this.anchors.length; e++)
                                null === this.anchors[e].getAttribute(this.data.proceeded) && (this.addEventListener({
                                    el: this.anchors[e],
                                    target: "click",
                                    do: this.anchorClick.bind(this, this.anchors[e])
                                }),
                                    this.anchors[e].setAttribute(this.data.proceeded, !0));
                            return !0
                        }
                    }, {
                        key: "anchorClick",
                        value: function (t) {
                            var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
                            null !== e && e.preventDefault();
                            var i = this.getHref(t);
                            if (!i)
                                return !1;
                            var s = this.getSection(i);
                            return null !== s && (this.launchEventsByTarget("click", {
                                href: i,
                                section: s,
                                anchor: t
                            }),
                                this.scrollTo(s),
                                !0)
                        }
                    }, {
                        key: "getHref",
                        value: function (t) {
                            var e = t.getAttribute("href");
                            return null !== e && 0 !== e.length && e.replace("#", "")
                        }
                    }, {
                        key: "getSection",
                        value: function () {
                            for (var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "", e = null, i = 0; i < this.sections.length; i++)
                                this.sections[i].getAttribute("id") === t && (e = this.sections[i]);
                            return e
                        }
                    }, {
                        key: "getAnchor",
                        value: function () {
                            for (var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "", e = null, i = 0; i < this.anchors.length; i++) {
                                var s = this.anchors[i].getAttribute("href");
                                (s = s.replace("#", "")) === t && (e = this.anchors[i])
                            }
                            return e
                        }
                    }, {
                        key: "scrollTo",
                        value: function (t) {
                            var e = this.outer.scrollTop
                                , i = this.outer.getBoundingClientRect().top
                                , s = this.outer.clientHeight
                                , r = t.getBoundingClientRect();
                            this.outer !== window && this.outer !== this.prop.v.document() && this.outer !== this.prop.v.body() || (e = window.pageYOffset,
                                s = this.prop.v.vh()[1],
                                i = 0);
                            var n = e + r.top - i;
                            n -= this.prop.edgeClick * s,
                                n += 1;
                            var o = this.outer;
                            return this.outer !== window && this.outer !== this.prop.v.document() && this.outer !== this.prop.v.body() || (o = "html, body"),
                                $(o).stop().delay(this.prop.delay).animate({
                                    scrollTop: n
                                }, this.prop.duration),
                                !0
                        }
                    }, {
                        key: "seek",
                        value: function () {
                            if (0 === this.hrefs.length)
                                return !1;
                            var t = ""
                                , e = this.outer.getBoundingClientRect()
                                , i = this.outer.clientHeight
                                , s = e.top;
                            this.outer !== window && this.outer !== this.prop.v.document() && this.outer !== this.prop.v.body() || (i = this.prop.v.vh()[1],
                                s = 0);
                            for (var r = 0; r < this.hrefs.length; r++) {
                                var n = this.getSection(this.hrefs[r]);
                                if (null !== n) {
                                    var o = n.getBoundingClientRect()
                                        , a = s + i * this.prop.edge;
                                    o.top <= a && (t = this.hrefs[r])
                                }
                            }
                            return "" === t && (t = this.hrefs[0]),
                                this.active !== t && this.changeActive(t),
                                !0
                        }
                    }, {
                        key: "changeActive",
                        value: function () {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ""
                                , e = this.getAnchor(t);
                            if (null === e)
                                return !1;
                            for (var i = 0; i < this.anchors.length; i++)
                                this.anchors[i] != e ? this.anchors[i].classList.remove(this.prefix + "__anchor_active") : this.anchors[i].classList.add(this.prefix + "__anchor_active");
                            var s = this.active;
                            return this.active = t,
                                this.launchEventsByTarget("change", {
                                    prev: {
                                        href: s,
                                        section: this.getSection(s),
                                        anchor: this.getAnchor(s)
                                    },
                                    next: {
                                        href: this.active,
                                        section: this.getSection(this.active),
                                        anchor: this.getAnchor(this.active)
                                    }
                                }),
                                !0
                        }
                    }, {
                        key: "set",
                        value: function () {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ""
                                , e = this.getSection(t);
                            return null !== e && (this.scrollTo(e),
                                !0)
                        }
                    }, {
                        key: "init",
                        value: function () {
                            var t = this
                                , i = r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "init", this).call(this);
                            return !!i && (this.data = {
                                proceeded: "data-" + this.prefix + "-proceeded"
                            },
                                this.prevSelectorOuter = "",
                                this.prevSelectorSection = "",
                                this.prevSelectorAnchor = "",
                                this.active = null,
                                this.anchors = [],
                                this.getElements(),
                                this.setEvents(),
                                this.seek(),
                                this.prop.v.addResize(["wh", this.seek.bind(this)]),
                                Object.assign(i, {
                                    getActive: function () {
                                        return t.active
                                    },
                                    getHrefs: function () {
                                        return t.hrefs
                                    },
                                    getSections: function () {
                                        return t.sections
                                    },
                                    getAnchors: function () {
                                        return t.anchors
                                    },
                                    getOuter: function () {
                                        return t.outer
                                    },
                                    set: this.set.bind(this),
                                    seek: this.seek.bind(this)
                                }))
                        }
                    }]),
                    e
            }(),
            p.prototype.ScrollEvents = function (t) {
                function e() {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    l(this, e);
                    var i = a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                    for (var s in i.prefix = i.prefix + "scrollEvents",
                        i.prop = Object.assign(i.prop, {
                            scrollSelector: "#" + i.prop.v.prefix() + "scrollbar",
                            selector: "." + i.prefix,
                            selectorInside: !0,
                            init: !0,
                            on: !0,
                            resize: !0,
                            nativeEvent: !0
                        }),
                        t)
                        i.prop[s] = t[s];
                    return i.targets = [],
                        i
                }
                return h(e, p.prototype.Class),
                    n(e, [{
                        key: "check",
                        value: function () {
                            return !!this.checkTypes({
                                obj: this.prop,
                                name: this.name,
                                console: this.prop.console,
                                vars: [["scrollSelector", "dom"], ["selector", "dom"], ["selectorInside", "boolean"], ["init", "boolean"], ["on", "boolean"], ["resize", "boolean"]]
                            })
                        }
                    }, {
                        key: "changeProp",
                        value: function (t) {
                            return !!r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "changeProp", this).call(this, t) && (this.firstLoad = !0,
                                this.getElements(),
                                this.setEvents(),
                                this.setResizeEvents(),
                                !0)
                        }
                    }, {
                        key: "removeElements",
                        value: function () {
                            this.checkType("htmlElement", this.outer) && (this.outer[this.data.proceeded] = void 0),
                                this.removeEventListeners()
                        }
                    }, {
                        key: "getElements",
                        value: function () {
                            this.removeElements(),
                                this.outer = this.prop.v.doc().querySelector(this.prop.scrollSelector),
                                this.prop.selectorInside ? this.elements = this.outer.querySelectorAll(this.prop.selector) : this.elements = this.prop.v.doc().querySelectorAll(this.prop.selector),
                                this.outer.classList.add(this.prefix + "__outer");
                            for (var t = 0; t < this.elements.length; t++)
                                this.elements[t].classList.add("" + this.prefix);
                            return !0
                        }
                    }, {
                        key: "setResizeEvents",
                        value: function () {
                            null === this.resizeHeightId & this.prop.resize ? this.resizeHeightId = this.prop.v.viewport.add({
                                target: "wh",
                                name: this.name + " Resize Height",
                                do: this.setHeight.bind(this)
                            }) : null !== this.resizeHeightId & !this.prop.resize && (this.prop.v.viewport.delete(this.resizeHeightId),
                                this.resizeHeightId = null),
                                null === this.resizeSeekId & this.prop.resize ? this.resizeSeekId = this.prop.v.viewport.add({
                                    target: "wh",
                                    name: this.name + " Resize Seek",
                                    do: this.setHeight.bind(this)
                                }) : null !== this.resizeSeekId & !this.prop.resize && (this.prop.v.viewport.delete(this.resizeSeekId),
                                    this.resizeSeekId = null)
                        }
                    }, {
                        key: "setEvents",
                        value: function () {
                            for (var t = 0; t < this.elements.length; t++)
                                void 0 === this.elements[t][this.data.proceeded] && (this.elements[t][this.data.proceeded] = !0);
                            return this.setScrollEvent(),
                                !0
                        }
                    }, {
                        key: "setScrollEvent",
                        value: function () {
                            if (!this.firstLoad)
                                return !1;
                            if (void 0 === this.outer[this.data.proceeded] || this.prevSelector !== this.prop.selector) {
                                var t = this.outer;
                                this.outer !== window && this.outer !== this.prop.v.document() && this.outer !== this.prop.v.body() || (t = window),
                                    this.prop.nativeEvent && this.addEventListener({
                                        el: t,
                                        target: "scroll",
                                        do: this.seek.bind(this, null)
                                    }),
                                    this.outer[this.data.proceeded] = !0,
                                    this.prevSelector = this.prop.selector
                            }
                            return this.prop.init && (this.seek(),
                                this.firstLoad = !1),
                                !0
                        }
                    }, {
                        key: "setHeight",
                        value: function () {
                            return this.height = this.outer.clientHeight,
                                this.outer !== window && this.outer !== this.prop.v.document() && this.outer !== this.prop.v.body() || (this.height = this.prop.v.vh()[1]),
                                this.setScrollTop(),
                                this.bounding = this.outer.getBoundingClientRect(),
                                !0
                        }
                    }, {
                        key: "setScrollTop",
                        value: function () {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
                            return this.outer === window || this.outer === this.prop.v.document() || this.outer === this.prop.v.body() ? this.scrollTop = window.pageYOffset : this.scrollTop = null != t ? t : this.outer.scrollTop,
                                !0
                        }
                    }, {
                        key: "seek",
                        value: function () {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
                            return !!this.prop.on && (this.setScrollTop(t),
                                !0)
                        }
                    }, {
                        key: "init",
                        value: function () {
                            var t = r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "init", this).call(this);
                            return !!t && (this.data = {
                                proceeded: "data-" + this.prefix + "-proceeded"
                            },
                                this.prevSelector = "",
                                this.firstLoad = !0,
                                this.height = 0,
                                this.scrollTop = 0,
                                this.resizeSeekId = null,
                                this.resizeHeightId = null,
                                this.getElements(),
                                this.setHeight(),
                                this.setEvents(),
                                this.setResizeEvents(),
                                t)
                        }
                    }]),
                    e
            }(),
            p.prototype.View = function (t) {
                function e() {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    l(this, e);
                    var i = a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                    for (var s in i.prefix = i.prop.v.prefix() + "view",
                        i.prop = Object.assign(i.prop, {
                            selector: "." + i.prefix,
                            percent: .3,
                            load: !0,
                            loadTimeout: 1e3
                        }),
                        t)
                        i.prop[s] = t[s];
                    return i.targets = ["in"],
                        i
                }
                return h(e, p.prototype.ScrollEvents),
                    n(e, [{
                        key: "check",
                        value: function () {
                            return !!r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "check", this).call(this) && !!this.checkTypes({
                                obj: this.prop,
                                name: this.name,
                                console: this.prop.console,
                                vars: [["percent", "number"], ["load", "boolean"], ["loadTimeout", "integer"]]
                            })
                        }
                    }, {
                        key: "changeProp",
                        value: function (t) {
                            return !!r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "changeProp", this).call(this, t) && (this.setHeight(),
                                !0)
                        }
                    }, {
                        key: "setEvents",
                        value: function () {
                            for (var t = 0; t < this.elements.length; t++)
                                void 0 === this.elements[t][this.data.proceeded] && (this.elements[t].in = !1,
                                    this.elements[t].out = !1,
                                    this.elements[t][this.data.proceeded] = !0);
                            return this.prop.load & !this.prop.v.loaded() ? v.addLoad(function () {
                                setTimeout(this.setScrollEvent.bind(this), this.prop.loadTimeout)
                            }
                                .bind(this)) : this.setScrollEvent(),
                                !0
                        }
                    }, {
                        key: "setHeight",
                        value: function () {
                            return !!r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "setHeight", this).call(this) && (this.percent = this.prop.percent * this.height,
                                !0)
                        }
                    }, {
                        key: "seek",
                        value: function () {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
                            if (!r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "seek", this).call(this, t))
                                return !1;
                            var i = this.percent;
                            this.firstLoad && (i = this.height);
                            for (var s = 0; s < this.elements.length; s++)
                                if (!this.elements[s].in) {
                                    var n = this.elements[s].getBoundingClientRect()
                                        , o = n.top - this.bounding.top
                                        , a = n.bottom - this.bounding.bottom;
                                    if (n.left,
                                        this.bounding.left,
                                        n.right,
                                        this.bounding.right,
                                        (o < i & !this.elements[s].out || i < a & this.elements[s].out) && o > -1 * this.elements[s].clientHeight) {
                                        var h = null;
                                        this.firstLoad && (h = this.elements[s].getAttribute(this.data.firstStackDelay)) && (h = parseInt(h)),
                                            null != h & this.firstLoad && this.elements[s].classList.add(this.prefix + "_" + h),
                                            this.launchEventsByTarget("in", {
                                                in: !0,
                                                element: this.elements[s]
                                            }),
                                            this.elements[s].in = !0,
                                            this.elements[s].out = !1
                                    }
                                }
                            return this.firstLoad && (this.firstLoad = !1),
                                !0
                        }
                    }, {
                        key: "init",
                        value: function () {
                            var t = this;
                            this.percent = 0,
                                this.add({
                                    target: "in",
                                    do: function (t) {
                                        t.element.classList.add(this.prefix + "ed"),
                                            this.checkType("function", t.element[this.data.callback]) && t.element[this.data.callback]()
                                    }
                                        .bind(this)
                                });
                            var i = r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "init", this).call(this);
                            return !!i && (this.data = Object.assign(this.data, {
                                callback: this.prefix + "-callback",
                                firstStackDelay: "data-" + this.prefix + "-firstStackDelay"
                            }),
                                Object.assign(i, {
                                    getElements: function () {
                                        return t.elements
                                    },
                                    getOuter: function () {
                                        return t.outer
                                    },
                                    seek: this.seek.bind(this)
                                }))
                        }
                    }]),
                    e
            }(),
            p.prototype.Parallax = function (t) {
                function e() {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    l(this, e);
                    var i = a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                    for (var s in i.prefix = i.prop.v.prefix() + "parallax",
                        i.prop = Object.assign(i.prop, {
                            selector: "." + i.prefix,
                            k: .2
                        }),
                        t)
                        i.prop[s] = t[s];
                    return i
                }
                return h(e, p.prototype.ScrollEvents),
                    n(e, [{
                        key: "check",
                        value: function () {
                            return !!r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "check", this).call(this) && !!this.checkTypes({
                                obj: this.prop,
                                name: this.name,
                                console: this.prop.console,
                                vars: [["k", "number"]]
                            })
                        }
                    }, {
                        key: "setEvents",
                        value: function () {
                            this.data = Object.assign(this.data, {
                                translateY: "data-" + this.prefix + "-translateY",
                                k: "data-" + this.prefix + "-k"
                            });
                            for (var t = 0; t < this.elements.length; t++)
                                void 0 === this.elements[t][this.data.proceeded] && (this.elements[t][this.data.proceeded] = !0,
                                    void 0 === this.elements[t][this.data.translateY] && (this.elements[t][this.data.translateY] = 0));
                            return this.setScrollEvent(),
                                !0
                        }
                    }, {
                        key: "seek",
                        value: function () {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
                            if (!r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "seek", this).call(this, t))
                                return !1;
                            for (var i = 0; i < this.elements.length; i++) {
                                var s = this.elements[i].clientHeight
                                    , n = this.elements[i].getBoundingClientRect()
                                    , o = n.top - this.elements[i][this.data.translateY]
                                    , a = n.bottom - this.elements[i][this.data.translateY]
                                    , h = o + this.scrollTop + s
                                    , l = this.elements[i].getAttribute(this.data.k);
                                if (l = null == l ? this.prop.k : parseFloat(l),
                                    o < this.height & 0 < a) {
                                    var p = this.scrollTop / h * (l * this.elements[i].clientHeight);
                                    this.elements[i].style.transform = "translate3d(0, " + p + "px, 0)"
                                }
                            }
                            return !0
                        }
                    }, {
                        key: "init",
                        value: function () {
                            var t = this
                                , i = r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "init", this).call(this);
                            return !!i && Object.assign(i, {
                                getElements: function () {
                                    return t.elements
                                },
                                getOuter: function () {
                                    return t.outer
                                },
                                seek: this.seek.bind(this)
                            })
                        }
                    }]),
                    e
            }(),
            p.prototype.SmoothScroll = function (t) {
                function e() {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    l(this, e);
                    var i = a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                    for (var s in i.prefix = i.prefix + "smoothScroll",
                        i.prop = Object.assign(i.prop, {
                            selector: "#" + i.prefix,
                            selectorElements: "." + i.prefix + "__element",
                            run: !0,
                            autoResize: !0,
                            allowScroll: !0,
                            useScroll: !1,
                            useTransform: !0,
                            horizontal: !1,
                            k: {
                                value: .1,
                                reduce: !0,
                                reduceK: .005,
                                ignoreK: .1
                            },
                            drag: {
                                on: !1,
                                k: .1,
                                multiply: 1,
                                reset: !0,
                                listenersOff: !0,
                                listenersTimeout: 10,
                                min: 1
                            },
                            ignoreDrag: !1,
                            stopPropagation: !0,
                            renderByPixels: !1
                        }),
                        t)
                        i.prop[s] = t[s];
                    return i.scrollTargets = [],
                        i.targets = ["update"],
                        i
                }
                return h(e, p.prototype.Class),
                    n(e, [{
                        key: "check",
                        value: function () {
                            var t = this.checkTypes({
                                obj: this.prop,
                                name: this.name,
                                console: this.prop.console,
                                vars: [["selector", "dom"], ["selectorElements", "dom"], ["run", "boolean"], ["autoResize", "boolean"], ["allowScroll", "boolean"], ["useScroll", "boolean"], ["useTransform", "boolean"], ["horizontal", "boolean"], ["k", "object"], ["drag", "object"], ["ignoreDrag", "boolean"], ["stopPropagation", "boolean"], ["renderByPixels", "boolean"]]
                            });
                            return !!t && !!(t = this.checkTypes({
                                obj: this.prop.k,
                                name: this.name,
                                console: this.prop.console,
                                vars: [["value", "number"], ["reduce", "boolean"], ["reduceK", "number"], ["ignoreK", "number"]]
                            })) && !!(t = this.checkTypes({
                                obj: this.prop.drag,
                                name: this.name,
                                console: this.prop.console,
                                vars: [["on", "boolean"], ["k", "number"], ["multiply", "number"], ["reset", "boolean"], ["listenersOff", "boolean"], ["listenersTimeout", "integer"], ["min", "number"]]
                            }))
                        }
                    }, {
                        key: "changeProp",
                        value: function (t) {
                            var i = this.prop.run;
                            return !!r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "changeProp", this).call(this, t) && (this.getElements(),
                                this.createElements(),
                                this.prop.run !== i && this.run(),
                                !0)
                        }
                    }, {
                        key: "getElements",
                        value: function () {
                            return this.outer = this.prop.v.doc().querySelector(this.prop.selector),
                                this.outer.classList.add("" + this.prefix),
                                this.prop.useScroll ? this.outer.classList.add(this.prefix + "_scroll") : this.outer.classList.remove(this.prefix + "_scroll"),
                                this.elements = document.querySelectorAll(this.prop.selectorElements),
                                this.elementsLength = this.elements.length,
                                this.setItemsProperties(),
                                !0
                        }
                    }, {
                        key: "createElements",
                        value: function () {
                            if (null === this.outer.getAttribute(this.data.proceeded) & this.prevSelector !== this.prop.selector) {
                                this.sub = document.createElement("div"),
                                    this.sub.classList.add(this.prefix + "__sub"),
                                    this.outer.appendChild(this.sub),
                                    this.container = document.createElement("div"),
                                    this.container.classList.add(this.prefix + "__container"),
                                    this.outer.appendChild(this.container);
                                for (var t = 0; t < this.outer.children.length; t++)
                                    this.outer.children[t] !== this.sub & this.outer.children[t] !== this.container && this.container.appendChild(this.outer.children[t]);
                                this.outer.setAttribute(this.data.proceeded, !0),
                                    this.prevSelector = this.prop.selector,
                                    this.removeEventListeners(),
                                    this.setEvents()
                            }
                            return this.setEventsDrag(),
                                this.setSize(),
                                !0
                        }
                    }, {
                        key: "setItemsProperties",
                        value: function () {
                            for (var t = 0; t < this.elementsLength; t++) {
                                var e = void 0
                                    , i = this.elements[t].getAttribute(this.data.k);
                                e = null !== i ? parseFloat(i) : this.getReducedK(t),
                                    this.checkType("number", e) || (e = this.getReducedK(t)),
                                    this.elements[t][this.properties.k] = e,
                                    this.elements[t][this.properties.x] = 0,
                                    this.elements[t][this.properties.y] = 0,
                                    this.elements[t][this.properties.current] = [0, 0]
                            }
                        }
                    }, {
                        key: "setEvents",
                        value: function () {
                            return this.setSize(),
                                this.setResize(),
                                this.addEventListener({
                                    el: this.outer,
                                    target: "scroll",
                                    do: this.updateScrollTargets.bind(this)
                                }),
                                this.addEventListener({
                                    el: this.outer,
                                    target: "wheel",
                                    do: this.wheel.bind(this)
                                }),
                                !0
                        }
                    }, {
                        key: "setSize",
                        value: function () {
                            return this.prop.useScroll ? (this.container.style.width = this.outer.clientWidth + "px",
                                this.container.style.height = this.outer.clientHeight + "px",
                                this.height = this.container.scrollHeight,
                                this.width = this.container.scrollWidth) : (this.container.style.width = "",
                                    this.container.style.height = "",
                                    this.height = this.container.clientHeight,
                                    this.width = this.container.clientWidth),
                                this.sub.style.width = this.width + "px",
                                this.sub.style.height = this.height + "px",
                                this.scrollForce = !0
                        }
                    }, {
                        key: "setResize",
                        value: function () {
                            return null == this.resizeId && (this.resizeId = this.prop.v.viewport.add({
                                target: "wh",
                                name: this.name + " Resize",
                                do: this.setSize.bind(this)
                            })),
                                !0
                        }
                    }, {
                        key: "resetResize",
                        value: function () {
                            return null !== this.resizeId && (this.prop.v.viewport.delete(this.resizeId),
                                this.resizeId = null),
                                !0
                        }
                    }, {
                        key: "setEventsDrag",
                        value: function () {
                            null != this.dragIds.start && (this.prop.v.drag.delete(this.dragIds.start),
                                this.dragIds.start = null),
                                null != this.dragIds.end && (this.prop.v.drag.delete(this.dragIds.end),
                                    this.dragIds.end = null),
                                null != this.dragIds.move && (this.prop.v.drag.delete(this.dragIds.move),
                                    this.dragIds.move = null),
                                null != this.swipeIds.start && (this.prop.v.swipe.delete(this.swipeIds.start),
                                    this.swipeIds.start = null),
                                null != this.swipeIds.end && (this.prop.v.swipe.delete(this.swipeIds.end),
                                    this.swipeIds.end = null),
                                null != this.swipeIds.move && (this.prop.v.swipe.delete(this.swipeIds.move),
                                    this.swipeIds.move = null),
                                this.prop.drag.on && this.prop.run && (this.dragIds.start = this.prop.v.drag.add({
                                    target: "start",
                                    outer: this.outer,
                                    do: this.dragStart.bind(this)
                                }),
                                    this.dragIds.end = this.prop.v.drag.add({
                                        target: "end",
                                        outer: this.outer,
                                        do: this.dragEnd.bind(this)
                                    }),
                                    this.dragIds.move = this.prop.v.drag.add({
                                        target: "move",
                                        outer: this.outer,
                                        do: this.dragMove.bind(this)
                                    }),
                                    this.swipeIds.start = this.prop.v.swipe.add({
                                        target: "start",
                                        outer: this.outer,
                                        do: this.dragStart.bind(this)
                                    }),
                                    this.swipeIds.end = this.prop.v.swipe.add({
                                        target: "end",
                                        outer: this.outer,
                                        do: this.dragEnd.bind(this)
                                    }),
                                    this.swipeIds.move = this.prop.v.swipe.add({
                                        target: "move",
                                        outer: this.outer,
                                        do: this.dragMove.bind(this)
                                    }))
                        }
                    }, {
                        key: "dragStart",
                        value: function () {
                            this.prop.run && (this.dragging = !0,
                                this.dragTargets = [0, 0])
                        }
                    }, {
                        key: "dragEnd",
                        value: function () {
                            var t = this;
                            this.prop.run && (this.dragging = !1,
                                this.dragTargets = [0, 0],
                                this.prop.drag.listenersOff && setTimeout((function () {
                                    t.dragging || t.outer.classList.remove(t.prefix + "_dragging")
                                }
                                ), this.prop.drag.listenersTimeout))
                        }
                    }, {
                        key: "dragMove",
                        value: function (t, e) {
                            if (this.prop.run & this.dragging) {
                                if (this.prop.ignoreDrag)
                                    return;
                                this.dragTargets[0] += t.diff.x * this.prop.drag.multiply,
                                    this.dragTargets[1] += t.diff.y * this.prop.drag.multiply,
                                    this.prop.drag.listenersOff && (Math.abs(t.diff.x) > this.prop.drag.min || Math.abs(t.diff.y) > this.prop.drag.min) && this.outer.classList.add(this.prefix + "_dragging")
                            }
                        }
                    }, {
                        key: "r",
                        value: function (t, e) {
                            return e = void 0 !== e ? Math.pow(10, e) : 1e3,
                                Math.round(t * e) / e
                        }
                    }, {
                        key: "getReducedK",
                        value: function () {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0;
                            return 1 < arguments.length && void 0 !== arguments[1] || this.elementsLength,
                                this.prop.k.reduce ? this.prop.k.value - this.prop.k.reduceK * t : this.prop.k.value
                        }
                    }, {
                        key: "run",
                        value: function () {
                            this.prop.run ? (this.setResize(),
                                requestAnimationFrame(this.loop.bind(this))) : this.resetResize()
                        }
                    }, {
                        key: "updateScrollTargets",
                        value: function () {
                            this.scrollTargets = [this.outer.scrollLeft, this.outer.scrollTop],
                                this.scrollValues = [this.outer.scrollLeft, this.outer.scrollTop]
                        }
                    }, {
                        key: "wheel",
                        value: function (t) {
                            if (this.prop.run & this.prop.allowScroll) {
                                this.prop.stopPropagation && (t.preventDefault(),
                                    t.stopPropagation());
                                var e = this.normalizeWheel(t);
                                return this.prop.horizontal ? (this.outer.scrollLeft += e.pixelY,
                                    this.outer.scrollTop += e.pixelX) : (this.outer.scrollLeft += e.pixelX,
                                        this.outer.scrollTop += e.pixelY),
                                    this.prop.renderByPixels && (this.outer.scrollLeft = Math.round(this.outer.scrollLeft),
                                        this.outer.scrollTop = Math.round(this.outer.scrollTop)),
                                    !0
                            }
                        }
                    }, {
                        key: "loop",
                        value: function () {
                            if (this.prop.run) {
                                if (this.prop.autoResize) {
                                    var t = this.container.clientHeight
                                        , e = this.container.clientWidth;
                                    this.prop.useScroll && (t = this.container.scrollHeight,
                                        e = this.container.scrollWidth),
                                        t == this.height && e == this.width || this.setSize()
                                }
                                this.dragRender();
                                var i = !1;
                                this.scrollForce && (i = !0,
                                    this.scrollForce = !1);
                                for (var s = 0; s < this.elementsLength; s++) {
                                    var r = [this.scrollTargets[0] - this.elements[s][this.properties.current][0], this.scrollTargets[1] - this.elements[s][this.properties.current][1]]
                                        , n = this.elements[s][this.properties.k];
                                    i && (n = 1),
                                        this.elements[s][this.properties.current][0] += r[0] * n,
                                        this.elements[s][this.properties.current][1] += r[1] * n
                                }
                                this.render(),
                                    requestAnimationFrame(this.loop.bind(this))
                            }
                        }
                    }, {
                        key: "dragRender",
                        value: function () {
                            this.prop.drag.on && (this.dragValues[0] += (this.dragTargets[0] - this.dragValues[0]) * this.prop.drag.k,
                                this.prop.drag.reset && (this.dragTargets[0] = 0),
                                this.dragValues[1] += (this.dragTargets[1] - this.dragValues[1]) * this.prop.drag.k,
                                this.prop.drag.reset && (this.dragTargets[1] = 0),
                                this.outer.scrollLeft -= this.dragValues[0],
                                this.outer.scrollTop -= this.dragValues[1])
                        }
                    }, {
                        key: "render",
                        value: function () {
                            for (var t = {
                                left: 0,
                                top: 0
                            }, e = 0; e < this.elementsLength; e++) {
                                var i = this.r(this.elements[e][this.properties.current][0])
                                    , s = this.r(this.elements[e][this.properties.current][1])
                                    , r = Math.ceil(i);
                                Math.abs(r - i) <= this.prop.k.ignoreK && (i = r);
                                var n = Math.ceil(s);
                                Math.abs(n - s) <= this.prop.k.ignoreK && (s = n),
                                    this.elements[e][this.properties.x] = i,
                                    this.elements[e][this.properties.y] = s,
                                    t.left = i,
                                    t.top = s,
                                    this.prop.useScroll || (this.prop.useTransform ? this.elements[e].style.transform = "translate3d(-" + i + "px, -" + s + "px, 0)" : (this.elements[e].style.left = "-" + i + "px",
                                        this.elements[e].style.top = "-" + s + "px"))
                            }
                            this.prop.useScroll && (this.container.scrollLeft = t.left,
                                this.container.scrollTop = t.top),
                                this.launchEventsByTarget("update", {
                                    scrollValues: this.scrollValues,
                                    scrollTargets: [t.left, t.top]
                                })
                        }
                    }, {
                        key: "init",
                        value: function () {
                            var t = this
                                , i = r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "init", this).call(this);
                            return !!i && (this.data = {
                                proceeded: "data-" + this.prefix + "-proceeded",
                                k: "data-" + this.prefix + "-k"
                            },
                                this.properties = {
                                    current: this.prefix + "-current",
                                    k: this.prefix + "-k",
                                    y: this.prefix + "-y",
                                    x: this.prefix + "-x"
                                },
                                this.scrollTargets = [0, 0],
                                this.scrollValues = [0, 0],
                                this.scrollForce = !1,
                                this.prevSelector = "",
                                this.resizeId = null,
                                this.dragIds = {
                                    start: null,
                                    end: null,
                                    move: null
                                },
                                this.swipeIds = {
                                    start: null,
                                    end: null,
                                    move: null
                                },
                                this.dragging = !1,
                                this.dragTargets = [0, 0],
                                this.dragValues = [0, 0],
                                this.getElements(),
                                this.createElements(),
                                this.run(),
                                Object.assign(i, {
                                    getOuter: function () {
                                        return t.outer
                                    },
                                    getElements: function () {
                                        return t.elements
                                    },
                                    setSize: this.setSize.bind(this),
                                    scrollValues: function () {
                                        return t.scrollValues
                                    },
                                    scrollTargets: function () {
                                        return t.scrollTargets
                                    }
                                }))
                        }
                    }]),
                    e
            }(),
            p.prototype.Select = function (t) {
                function e() {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    l(this, e);
                    var i = a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                    for (var s in i.prefix = i.prefix + "select",
                        i.prop = Object.assign(i.prop, {
                            selector: "#" + i.prefix,
                            showSelected: !0,
                            changeSelectedText: !0,
                            scroll: !0,
                            duration: 350,
                            shift: .1,
                            animation: "fade",
                            search: !0,
                            searchPlaceholder: "Type to search",
                            closeOnOutClick: !0,
                            closeOnChange: !0,
                            changeOnClick: !0
                        }),
                        t)
                        i.prop[s] = t[s];
                    return i.targets = ["show", "hide", "change", "click"],
                        i.animations = {
                            fade: {},
                            slide: {},
                            queue: {},
                            queueSlide: {}
                        },
                        i
                }
                return h(e, p.prototype.Class),
                    n(e, [{
                        key: "check",
                        value: function () {
                            if (!this.checkTypes({
                                obj: this.prop,
                                name: this.name,
                                console: this.prop.console,
                                vars: [["selector", "dom"], ["showSelected", "boolean"], ["changeSelectedText", "boolean"], ["scroll", "boolean"], ["duration", "integer"], ["shift", "number"], ["animation", "string"], ["search", "boolean"], ["searchPlaceholder", "string"], ["closeOnOutClick", "boolean"], ["closeOnChange", "boolean"], ["changeOnClick", "boolean"]]
                            }))
                                return !1;
                            var t = !1;
                            for (var e in this.animations)
                                e.toLowerCase() == this.prop.animation.toLowerCase() && (t = !0);
                            return !!t
                        }
                    }, {
                        key: "changeProp",
                        value: function (t) {
                            return !!r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "changeProp", this).call(this, t) && (this.prop.search ? this.outer.classList.add(this.prefix + "_searchable") : this.outer.classList.remove(this.prefix + "_searchable"),
                                this.searchInput.setAttribute("placeholder", this.prop.searchPlaceholder),
                                this.prop.scroll ? (this.outer.classList.add(this.prefix + "_scroll"),
                                    this.scrollbar.create()) : (this.outer.classList.remove(this.prefix + "_scroll"),
                                        this.scrollbar.destroy()),
                                !0)
                        }
                    }, {
                        key: "getElements",
                        value: function () {
                            return this.select = this.prop.v.document().querySelector(this.prop.selector),
                                "SELECT" == this.select.tagName && (this.select.classList.add("display_none"),
                                    this.options = this.select.querySelectorAll("option"),
                                    0 !== this.options.length && (this.parent = this.select.parentElement,
                                        this.parent.classList.contains(this.prop.v.prefix() + "form__input") && this.parent.classList.add(this.prop.v.prefix() + "form__input_select"),
                                        !0))
                        }
                    }, {
                        key: "createElements",
                        value: function () {
                            this.outer = document.createElement("div"),
                                this.outer.classList.add("" + this.prefix),
                                this.parent.insertBefore(this.outer, this.select),
                                this.prop.showSelected && this.outer.classList.add(this.prefix + "_show-selected"),
                                this.selected = document.createElement("div"),
                                this.selected.classList.add(this.prefix + "__selected"),
                                this.outer.appendChild(this.selected),
                                this.outerUl = document.createElement("div"),
                                this.outerUl.classList.add(this.prefix + "__outerUl"),
                                this.outer.appendChild(this.outerUl),
                                this.content = document.createElement("div"),
                                this.content.classList.add(this.prefix + "__content"),
                                this.outerUl.appendChild(this.content);
                            var t = this.randInt(0, 1e3);
                            this.content.setAttribute("id", this.prefix + "__content_" + t),
                                this.scrollbar = new this.prop.v.Scrollbar({
                                    console: this.prop.console,
                                    init: !1,
                                    selector: "#" + this.prefix + "__content_" + t
                                }),
                                this.scrollbar.init(),
                                this.prop.scroll && (this.outer.classList.add(this.prefix + "_scroll"),
                                    this.scrollbar.create()),
                                this.searchOuter = document.createElement("div"),
                                this.searchOuter.classList.add(this.prefix + "__search"),
                                this.content.appendChild(this.searchOuter),
                                this.searchInput = document.createElement("input"),
                                this.searchInput.setAttribute("type", "text"),
                                this.searchInput.setAttribute("placeholder", this.prop.searchPlaceholder),
                                this.searchInput.classList.add(this.prefix + "__search-input"),
                                this.searchOuter.appendChild(this.searchInput),
                                this.prop.search && this.outer.classList.add(this.prefix + "_searchable"),
                                this.ul = document.createElement("ul"),
                                this.ul.classList.add(this.prefix + "__ul"),
                                this.content.appendChild(this.ul);
                            for (var e = 0; e < this.options.length; e++) {
                                var i = this.options[e]
                                    , s = i.innerHTML
                                    , r = document.createElement("li");
                                r.classList.add(this.prefix + "__li"),
                                    r.innerHTML = s,
                                    null !== i.getAttribute("selected") && (r.classList.add(this.prefix + "__li_active"),
                                        this.selected.innerHTML = s,
                                        this.active = e),
                                    this.li.push(r),
                                    this.ul.appendChild(r)
                            }
                            return 0 < this.options.length & !this.prop.changeSelectedText && (this.selected.innerHTML = this.options[0].innerHTML),
                                !0
                        }
                    }, {
                        key: "setEvents",
                        value: function () {
                            this.selected.onclick = this.toggle.bind(this);
                            for (var t = 0; t < this.li.length; t++)
                                this.li[t].onclick = this.change.bind(this, t);
                            return this.addEventListener({
                                el: window,
                                target: "click",
                                do: this.clickWindow.bind(this)
                            }),
                                this.addEventListener({
                                    el: this.select,
                                    target: "change",
                                    do: this.changeSelect.bind(this)
                                }),
                                this.addEventListener({
                                    el: this.searchInput,
                                    target: "keyup",
                                    do: this.searchEvent.bind(this)
                                }),
                                !0
                        }
                    }, {
                        key: "clickWindow",
                        value: function (t) {
                            !this.childOf(t.target, this.outer) & this.opened & this.prop.closeOnOutClick && this.hide()
                        }
                    }, {
                        key: "changeSelect",
                        value: function (t) {
                            for (var e = this.select.value, i = 0; i < this.options.length; i++)
                                this.options[i].value == e && this.change(i)
                        }
                    }, {
                        key: "show",
                        value: function () {
                            return !this.opened && (this.opened = !0,
                                this.outer.classList.add(this.prefix + "_opened"),
                                this.animations[this.prop.animation].show(),
                                this.launchEventsByTarget("show", this.callbackData()),
                                !0)
                        }
                    }, {
                        key: "hide",
                        value: function () {
                            return !!this.opened && (this.opened = !1,
                                this.outer.classList.remove(this.prefix + "_opened"),
                                this.animations[this.prop.animation].hide(),
                                this.launchEventsByTarget("hide", this.callbackData()),
                                !0)
                        }
                    }, {
                        key: "showCallback",
                        value: function () {
                            return this.searchInput.value = "",
                                this.searchEvent(),
                                !0
                        }
                    }, {
                        key: "getAnimationElements",
                        value: function () {
                            for (var t = [], e = 0; e < this.li.length; e++)
                                e === this.active ? this.prop.showSelected && t.push(this.li[e]) : t.push(this.li[e]);
                            return this.prop.search && (t = [this.searchOuter].concat(t)),
                                t
                        }
                    }, {
                        key: "setAnimations",
                        value: function () {
                            return this.animations.fade.show = function () {
                                $(this.outerUl).stop().fadeIn(this.prop.duration, this.showCallback.bind(this))
                            }
                                .bind(this),
                                this.animations.fade.hide = function () {
                                    $(this.outerUl).stop().fadeOut(this.prop.duration)
                                }
                                    .bind(this),
                                this.animations.slide.show = function () {
                                    $(this.outerUl).stop().slideDown(this.prop.duration, this.showCallback.bind(this))
                                }
                                    .bind(this),
                                this.animations.slide.hide = function () {
                                    $(this.outerUl).stop().slideUp(this.prop.duration)
                                }
                                    .bind(this),
                                this.animations.queue.show = function () {
                                    for (var t = this.getAnimationElements(), e = 0; e < t.length; e++)
                                        $(t[e]).stop().fadeOut(0);
                                    $(this.outerUl).stop().delay(this.prop.v.timeMin()).fadeIn(0, function () {
                                        for (var e = 0; e < t.length; e++) {
                                            var i = parseInt(this.prop.shift * e * this.prop.duration);
                                            $(t[e]).stop().delay(i).fadeIn(this.prop.duration)
                                        }
                                    }
                                        .bind(this))
                                }
                                    .bind(this),
                                this.animations.queue.hide = function () {
                                    for (var t = this.getAnimationElements(), e = t.length - 1, i = 0; 0 <= e; e--,
                                        i++) {
                                        var s = parseInt(this.prop.shift * i * this.prop.duration);
                                        0 !== e ? $(t[e]).stop().delay(s).fadeOut(this.prop.duration) : $(t[e]).stop().delay(s).fadeOut(this.prop.duration, function () {
                                            $(this.outerUl).stop().fadeOut(0, function () {
                                                for (var e = 0; e < t.length; e++)
                                                    t[e].style.opacity = "",
                                                        t[e].style.display = ""
                                            }
                                                .bind(this))
                                        }
                                            .bind(this))
                                    }
                                }
                                    .bind(this),
                                this.animations.queueSlide.show = function () {
                                    for (var t = this.getAnimationElements(), e = 0; e < t.length; e++)
                                        $(t[e]).stop().fadeOut(0);
                                    $(this.outerUl).stop().delay(this.prop.v.timeMin()).fadeIn(0, function () {
                                        for (var e = 0; e < t.length; e++)
                                            $(t[e]).css("display", "block"),
                                                $(t[e]).stop().animate({
                                                    opacity: 0,
                                                    top: "-12px"
                                                }, 0);
                                        for (var i = t.length - 1; 0 <= i; i--) {
                                            var s = parseInt(0 * this.prop.shift * this.prop.duration);
                                            $(t[i]).delay(s).animate({
                                                opacity: 1,
                                                top: "0px"
                                            }, this.prop.duration)
                                        }
                                    }
                                        .bind(this))
                                }
                                    .bind(this),
                                this.animations.queueSlide.hide = function () {
                                    for (var t = this.getAnimationElements(), e = 0; e < t.length; e++) {
                                        var i = parseInt(this.prop.shift * e * this.prop.duration);
                                        e !== t.length - 1 ? $(t[e]).delay(i).animate({
                                            opacity: 0,
                                            top: "-12px"
                                        }, this.prop.duration) : $(t[e]).delay(i).animate({
                                            opacity: 0,
                                            top: "-12px"
                                        }, this.prop.duration, function () {
                                            $(this.outerUl).stop().fadeOut(0, function () {
                                                for (var e = 0; e < t.length; e++)
                                                    t[e].style.opacity = "",
                                                        t[e].style.display = ""
                                            }
                                                .bind(this))
                                        }
                                            .bind(this))
                                    }
                                }
                                    .bind(this),
                                !0
                        }
                    }, {
                        key: "toggle",
                        value: function () {
                            return this.opened ? this.hide() : this.show(),
                                !0
                        }
                    }, {
                        key: "callbackData",
                        value: function () {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null
                                , e = {
                                    opened: this.opened,
                                    active: this.active,
                                    value: this.value,
                                    changes: this.changes,
                                    options: this.options,
                                    select: this.select,
                                    outer: this.outer
                                };
                            return null !== t && (e = Object.assign(e, {
                                clickNum: t,
                                clickValue: this.options[t].value,
                                clickLi: this.li[t]
                            })),
                                e
                        }
                    }, {
                        key: "searchEvent",
                        value: function () {
                            if (!0 !== this.prop.search)
                                return !1;
                            var t = this.searchInput.value;
                            if (0 === t.length)
                                for (var e = 0; e < this.li.length; e++)
                                    this.li[e].classList.remove("display_none_important");
                            else
                                for (var i = 0; i < this.li.length; i++)
                                    this.li[i].innerHTML.toUpperCase().includes(t.toUpperCase()) ? this.li[i].classList.remove("display_none_important") : this.li[i].classList.add("display_none_important");
                            return !0
                        }
                    }, {
                        key: "change",
                        value: function () {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : this.active;
                            if ((t = parseInt(t)) > this.li.length || t < 0)
                                return !1;
                            if (this.prop.changeOnClick || -1 === this.changes) {
                                for (var e = 0; e < this.options.length; e++)
                                    this.options[e].removeAttribute("selected");
                                for (var i = 0; i < this.li.length; i++)
                                    this.li[i].classList.remove(this.prefix + "__li_active");
                                this.active = t,
                                    this.options[this.active].setAttribute("selected", !0),
                                    this.li[this.active].classList.add(this.prefix + "__li_active"),
                                    this.value = this.options[this.active].value,
                                    this.prop.changeSelectedText && (this.selected.innerHTML = "<span>" + this.options[this.active].innerHTML + "</span>"),
                                    this.changes++,
                                    this.launchEventsByTarget("change", this.callbackData()),
                                    this.opened & this.prop.closeOnChange && this.hide()
                            }
                            return this.launchEventsByTarget("click", this.callbackData(t)),
                                !0
                        }
                    }, {
                        key: "init",
                        value: function () {
                            var t = this
                                , i = r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "init", this).call(this);
                            return !!i && !!this.getElements() && (this.opened = !1,
                                this.active = 0,
                                this.value = "",
                                this.changes = -1,
                                this.li = [],
                                this.createElements(),
                                this.setAnimations(),
                                this.setEvents(),
                                this.change(this.active),
                                Object.assign(i, {
                                    opened: function () {
                                        return t.opened
                                    },
                                    active: function () {
                                        return t.active
                                    },
                                    value: function () {
                                        return t.value
                                    },
                                    changes: function () {
                                        return t.changes
                                    },
                                    options: function () {
                                        return t.options
                                    },
                                    li: function () {
                                        return t.li
                                    },
                                    toggle: this.toggle.bind(this),
                                    show: this.show.bind(this),
                                    hide: this.hide.bind(this),
                                    change: this.change.bind(this)
                                }))
                        }
                    }]),
                    e
            }(),
            p.prototype.Audio = function (t) {
                function e() {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    l(this, e);
                    var i = a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                    for (var s in i.prefix = i.prefix + "audio",
                        i.prop = Object.assign(i.prop, {
                            selector: "#" + i.prefix,
                            forceLoad: !0,
                            waitLoad: !0,
                            draggable: !0,
                            resetOnEnd: !0,
                            undefined: "Undefined"
                        }),
                        t)
                        i.prop[s] = t[s];
                    return i.targets = ["load", "play", "playToggle", "pause", "pauseToggle", "timeupdate", "end", "dragStart", "drag", "dragEnd"],
                        i
                }
                return h(e, p.prototype.Class),
                    n(e, [{
                        key: "check",
                        value: function () {
                            return !!this.checkTypes({
                                obj: this.prop,
                                name: this.name,
                                console: this.prop.console,
                                vars: [["selector", "dom"], ["forceLoad", "boolean"], ["waitLoad", "boolean"], ["draggable", "boolean"], ["resetOnEnd", "boolean"], ["undefined", "string"]]
                            }) && (this.setDraggable(),
                                !0)
                        }
                    }, {
                        key: "getElements",
                        value: function () {
                            return this.audio = this.prop.v.document().querySelector(this.prop.selector),
                                this.audio.classList.add("display_none"),
                                this.parent = this.audio.parentNode,
                                !0
                        }
                    }, {
                        key: "setValues",
                        value: function () {
                            this.audio.volume = 1
                        }
                    }, {
                        key: "createElements",
                        value: function () {
                            this.outer = document.createElement("div"),
                                this.outer.classList.add(this.prefix + "__el"),
                                this.outer.classList.add(this.prefix + "_notloaded"),
                                this.wrapper = document.createElement("div"),
                                this.wrapper.classList.add(this.prefix + "__wrapper"),
                                this.outer.appendChild(this.wrapper),
                                this.container = document.createElement("div"),
                                this.container.classList.add(this.prefix + "__container"),
                                this.wrapper.appendChild(this.container),
                                this.button = document.createElement("div"),
                                this.button.classList.add(this.prefix + "__button"),
                                this.container.appendChild(this.button),
                                this.buttonPlay = document.createElement("div"),
                                this.buttonPlay.classList.add(this.prefix + "__play"),
                                this.button.appendChild(this.buttonPlay),
                                this.buttonPause = document.createElement("div"),
                                this.buttonPause.classList.add(this.prefix + "__pause"),
                                this.button.appendChild(this.buttonPause),
                                this.nameDom = document.createElement("div"),
                                this.nameDom.classList.add(this.prefix + "__name"),
                                this.container.appendChild(this.nameDom);
                            var t = this.audio.getAttribute(this.data.name);
                            return this.nameDom.innerHTML = t || this.prop.undefined,
                                this.bar = document.createElement("div"),
                                this.bar.classList.add(this.prefix + "__bar"),
                                this.wrapper.appendChild(this.bar),
                                this.progress = document.createElement("div"),
                                this.progress.classList.add(this.prefix + "__progress"),
                                this.bar.appendChild(this.progress),
                                this.dot = document.createElement("div"),
                                this.dot.classList.add(this.prefix + "__dot"),
                                this.progress.appendChild(this.dot),
                                this.time = document.createElement("div"),
                                this.time.classList.add(this.prefix + "__time"),
                                this.container.appendChild(this.time),
                                this.current = document.createElement("div"),
                                this.current.classList.add(this.prefix + "__current"),
                                this.current.innerHTML = this.formatTime(0),
                                this.time.appendChild(this.current),
                                this.separator = document.createElement("div"),
                                this.separator.classList.add(this.prefix + "__separator"),
                                this.time.appendChild(this.separator),
                                this.total = document.createElement("div"),
                                this.total.classList.add(this.prefix + "__total"),
                                this.total.innerHTML = this.formatTime(0),
                                this.time.appendChild(this.total),
                                this.parent.insertBefore(this.outer, this.audio),
                                !0
                        }
                    }, {
                        key: "setEvents",
                        value: function () {
                            var t = this;
                            return this.prop.waitLoad && this.audio.addEventListener("loadedmetadata", (function () {
                                t.loaded = !0,
                                    t.total.innerHTML = t.formatTime(t.audio.duration),
                                    t.outer.classList.remove(t.prefix + "_notloaded"),
                                    t.launchEventsByTarget("load")
                            }
                            )),
                                this.prop.waitLoad || (this.loaded = !0,
                                    this.total.innerHTML = this.audio.getAttribute(this.data.duration),
                                    this.outer.classList.remove(this.prefix + "_notloaded")),
                                this.prop.forceLoad && this.audio.load(),
                                this.button.addEventListener("click", this.toggle.bind(this)),
                                this.audio.addEventListener("play", (function () {
                                    t.toggleClass(),
                                        t.launchEventsByTarget("play")
                                }
                                )),
                                this.audio.addEventListener("pause", (function () {
                                    t.toggleClass(),
                                        t.launchEventsByTarget("pause")
                                }
                                )),
                                this.audio.addEventListener("timeupdate", this.updateProgress.bind(this)),
                                this.audio.addEventListener("ended", (function () {
                                    t.prop.resetOnEnd && (t.audio.currentTime = 0),
                                        t.launchEventsByTarget("end")
                                }
                                )),
                                this.dragIds.push(this.prop.v.drag.add({
                                    target: "start",
                                    outer: this.bar,
                                    ignoreOuter: !1,
                                    do: this.dragStart.bind(this)
                                }, this.prop.draggable)),
                                this.dragIds.push(this.prop.v.drag.add({
                                    target: "end",
                                    outer: this.bar,
                                    ignoreOuter: !0,
                                    do: this.dragEnd.bind(this)
                                }, this.prop.draggable)),
                                this.dragIds.push(this.prop.v.drag.add({
                                    target: "move",
                                    outer: this.bar,
                                    ignoreOuter: !0,
                                    do: this.dragMove.bind(this)
                                }, this.prop.draggable)),
                                this.swipeIds.push(this.prop.v.swipe.add({
                                    target: "start",
                                    outer: this.bar,
                                    ignoreOuter: !1,
                                    do: this.dragStart.bind(this)
                                }, this.prop.draggable)),
                                this.swipeIds.push(this.prop.v.swipe.add({
                                    target: "end",
                                    outer: this.bar,
                                    ignoreOuter: !0,
                                    do: this.dragEnd.bind(this)
                                }, this.prop.draggable)),
                                this.swipeIds.push(this.prop.v.swipe.add({
                                    target: "move",
                                    outer: this.bar,
                                    ignoreOuter: !0,
                                    do: this.dragMove.bind(this)
                                }, this.prop.draggable)),
                                !0
                        }
                    }, {
                        key: "toggle",
                        value: function () {
                            this.audio.paused ? (this.audio.play(),
                                this.launchEventsByTarget("playToggle")) : (this.audio.pause(),
                                    this.launchEventsByTarget("pauseToggle"))
                        }
                    }, {
                        key: "toggleClass",
                        value: function () {
                            this.audio.paused ? this.outer.classList.remove(this.prefix + "_playing") : this.outer.classList.add(this.prefix + "_playing")
                        }
                    }, {
                        key: "updateProgress",
                        value: function () {
                            if (this.loaded) {
                                var t = this.audio.currentTime
                                    , e = t / this.audio.duration * 100;
                                this.dragging || (this.progress.style.width = e + "%"),
                                    this.current.innerHTML = this.formatTime(t),
                                    this.launchEventsByTarget("timeupdate", {
                                        currentTime: this.audio.currentTime,
                                        progress: e / 100
                                    })
                            }
                        }
                    }, {
                        key: "setDraggable",
                        value: function () {
                            for (var t = 0; t < this.dragIds.length; t++)
                                this.prop.v.drag.turn(this.dragIds[t], this.prop.draggable);
                            for (var e = 0; e < this.swipeIds.length; e++)
                                this.prop.v.swipe.turn(this.swipeIds[e], this.prop.draggable)
                        }
                    }, {
                        key: "removeDragEvents",
                        value: function () {
                            for (var t = 0; t < this.dragIds.length; t++)
                                this.prop.v.drag.delete(this.dragIds[t]);
                            for (var e = 0; e < this.swipeIds.length; e++)
                                this.prop.v.swipe.delete(this.swipeIds[e])
                        }
                    }, {
                        key: "dragStart",
                        value: function (t, e) {
                            this.dragging = !0,
                                this.launchEventsByTarget("dragStart", {
                                    data: t
                                }),
                                this.dragMove(t, e),
                                this.outer.classList.add(this.prefix + "_dragging")
                        }
                    }, {
                        key: "dragEnd",
                        value: function (t, e) {
                            this.dragging && (this.dragging = !1,
                                this.launchEventsByTarget("dragEnd", {
                                    data: t
                                }),
                                this.audio.currentTime = this.dragCurrent,
                                this.outer.classList.remove(this.prefix + "_dragging"))
                        }
                    }, {
                        key: "dragMove",
                        value: function (t, e) {
                            if (this.dragging & this.loaded) {
                                var i = t.inner.x;
                                i < 0 && (i = 0),
                                    i > this.bar.clientWidth && (i = this.bar.clientWidth);
                                var s = i / this.bar.clientWidth
                                    , r = s * this.audio.duration;
                                this.dragCurrent = r;
                                var n = this.dragCurrent / this.audio.duration * 100;
                                this.progress.style.width = n + "%",
                                    this.launchEventsByTarget("drag", {
                                        currentTime: r,
                                        progress: s,
                                        x: i,
                                        data: t
                                    })
                            }
                        }
                    }, {
                        key: "formatTime",
                        value: function (t) {
                            var e = Math.floor(t / 60)
                                , i = Math.floor(t % 60);
                            return e < 10 && (e = "0" + e),
                                i < 10 && (i = "0" + i),
                                e + ":" + i
                        }
                    }, {
                        key: "init",
                        value: function () {
                            var t = this;
                            this.data = {
                                name: "data-" + this.prefix + "-name",
                                duration: "data-" + this.prefix + "-duration"
                            },
                                this.dragIds = [],
                                this.swipeIds = [],
                                this.loaded = !1,
                                this.dragging = !1,
                                this.dragCurrent = 0;
                            var i = r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "init", this).call(this);
                            return !!i && !!this.getElements() && (this.setValues(),
                                this.createElements(),
                                this.setEvents(),
                                Object.assign(i, {
                                    outer: function () {
                                        return t.outer
                                    },
                                    audio: function () {
                                        return t.audio
                                    },
                                    loaded: function () {
                                        return t.loaded
                                    },
                                    removeDragEvents: this.removeDragEvents.bind(this)
                                }))
                        }
                    }]),
                    e
            }(),
            p.prototype.Form = function (t) {
                function e() {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    l(this, e);
                    var i = a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                    for (var s in i.prefix = i.prefix + "form",
                        i.dataPrefix = "data-" + i.prefix,
                        i.prop = Object.assign(i.prop, {
                            selector: "#" + i.prefix,
                            addErrorClass: !0,
                            errorInfoDuration: 250,
                            scrollSelector: "#" + i.prop.v.prefix() + "scrollbar",
                            scroll: !0,
                            scrollDuration: 500,
                            clearAfterSuccess: !0,
                            autocomplete: !1,
                            spellcheck: !1,
                            separator: "__",
                            useInputs: !0,
                            focusExeptions: ["", "none"],
                            disabled: !1
                        }),
                        t)
                        i.prop[s] = t[s];
                    return i.targets = ["success", "fail"],
                        i
                }
                return h(e, p.prototype.Class),
                    n(e, [{
                        key: "check",
                        value: function () {
                            var t = this.checkTypes({
                                obj: this.prop,
                                name: this.name,
                                console: this.prop.console,
                                vars: [["selector", "dom"], ["addErrorClass", "boolean"], ["errorInfoDuration", "integer"], ["scroll", "boolean"], ["scrollDuration", "integer"], ["clearAfterSuccess", "boolean"], ["autocomplete", "boolean"], ["spellcheck", "boolean"], ["separator", "string"], ["useInputs", "boolean"], ["focusExeptions", "stringArray"], ["disabled", "boolean"]]
                            });
                            return !(!t || this.prop.scroll && !(t = this.checkTypes({
                                obj: this.prop,
                                name: this.name,
                                console: this.prop.console,
                                vars: [["scrollSelector", "dom"]]
                            })) || (this.getElements(),
                                this.setEvents(),
                                0))
                        }
                    }, {
                        key: "getElements",
                        value: function () {
                            this.form = this.prop.v.doc().querySelector(this.prop.selector),
                                this.form.classList.add("" + this.prefix),
                                this.scroll = this.prop.v.doc().querySelector(this.prop.scrollSelector),
                                this.action = this.form.getAttribute("action"),
                                null === this.action && this.form.setAttribute("action", window.location.href),
                                this.method = this.form.getAttribute("method"),
                                null === this.method ? this.method = "post" : (this.method = this.method.toLowerCase(),
                                    "post" !== this.method & "get" !== this.method && (this.method = "post")),
                                this.form.setAttribute("method", this.method),
                                this.submit = this.form.querySelector("input[type='submit']"),
                                null === this.submit && (this.submit = this.form.querySelector("button[type='submit']"),
                                    null === this.submit && (this.submit = document.createElement("button"),
                                        this.form.appendChild(this.submit))),
                                this.elements = this.form.querySelectorAll("input, select, textarea");
                            for (var t = 0; t < this.elements.length; t++)
                                this.prop.autocomplete ? this.elements[t].removeAttribute("autocomplete") : this.elements[t].setAttribute("autocomplete", "off"),
                                    this.prop.spellcheck ? this.elements[t].removeAttribute("spellcheck") : this.elements[t].setAttribute("spellcheck", "false"),
                                    this.eventBlurClass(this.elements[t]);
                            return this.submitDisabled(),
                                !0
                        }
                    }, {
                        key: "getInputs",
                        value: function () {
                            return this.inputs = this.form.querySelectorAll("input:not([type='submit']):not([type='button']), textarea, select"),
                                this.inputs
                        }
                    }, {
                        key: "getErrorsEl",
                        value: function () {
                            return this.errors = this.form.querySelectorAll("." + this.prefix + "__error"),
                                this.errors
                        }
                    }, {
                        key: "getInfosEl",
                        value: function () {
                            return this.infos = this.form.querySelectorAll("." + this.prefix + "__info"),
                                this.infos
                        }
                    }, {
                        key: "getJSON",
                        value: function () {
                            return this.json = $(this.form).serializeObject(),
                                this.json
                        }
                    }, {
                        key: "setEvents",
                        value: function () {
                            if (null == this.form[this.data.proceeded]) {
                                this.addEventListener({
                                    el: this.form,
                                    target: "submit",
                                    do: this.eventSubmit.bind(this)
                                });
                                for (var t = 0; t < this.elements.length; t++)
                                    this.addEventListener({
                                        el: this.elements[t],
                                        target: "focus",
                                        do: this.eventFocus.bind(this, this.elements[t])
                                    }),
                                        this.addEventListener({
                                            el: this.elements[t],
                                            target: "blur",
                                            do: this.eventBlur.bind(this, this.elements[t])
                                        }),
                                        this.addEventListener({
                                            el: this.elements[t],
                                            target: "keyup",
                                            do: this.eventKeyup.bind(this, this.elements[t])
                                        });
                                this.form[this.data.proceeded] = !0
                            }
                            return !0
                        }
                    }, {
                        key: "eventSubmit",
                        value: function (t) {
                            t.preventDefault(),
                                this.formEvent(t)
                        }
                    }, {
                        key: "eventFocus",
                        value: function (t, e) {
                            var i = t.parentElement;
                            i.classList.contains(this.prefix + "__input") && i.classList.add(this.prefix + "__input_focus")
                        }
                    }, {
                        key: "eventKeyup",
                        value: function (t, e) {
                            this.submitDisabled()
                        }
                    }, {
                        key: "eventBlur",
                        value: function (t, e) {
                            $(t).is(":focus") || this.eventBlurClass(t),
                                this.submitDisabled()
                        }
                    }, {
                        key: "eventBlurClass",
                        value: function (t) {
                            var e = t.parentElement;
                            e.classList.contains(this.prefix + "__input") && (this.checkFilledValue(t) ? e.classList.add(this.prefix + "__input_focus") : e.classList.remove(this.prefix + "__input_focus"))
                        }
                    }, {
                        key: "submitDisabled",
                        value: function () {
                            this.prop.disabled && (this.checkFilled() ? this.submit.removeAttribute("disabled") : this.submit.setAttribute("disabled", "disabled"))
                        }
                    }, {
                        key: "checkFilled",
                        value: function () {
                            for (var t = 0, e = 0; e < this.elements.length; e++)
                                this.checkFilledValue(this.elements[e]) && t++;
                            return t == this.elements.length
                        }
                    }, {
                        key: "checkFilledValue",
                        value: function (t) {
                            var e = t.value;
                            return !this.prop.focusExeptions.includes(e)
                        }
                    }, {
                        key: "formEvent",
                        value: function () {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
                            null !== t && t.preventDefault(),
                                this.submit.setAttribute("disabled", "disabled"),
                                this.getInputs(),
                                this.getErrorsEl(),
                                this.getInfosEl(),
                                this.getJSON();
                            var e = {};
                            return e = this.prop.useInputs ? {
                                inputs: this.json
                            } : this.json,
                                this.prop.v.ajax({
                                    url: this.action,
                                    method: this.method,
                                    data: e,
                                    callback: this.formEventCallback.bind(this),
                                    fail: this.formEvent.bind(this)
                                }),
                                !0
                        }
                    }, {
                        key: "formEventCallback",
                        value: function (t) {
                            if (this.submit.removeAttribute("disabled"),
                                this.removeErrors(),
                                "error_smtp" === t)
                                return alert(this.name + ". SMTP Error!"),
                                    !1;
                            if ("error_inputs" === t)
                                return alert(this.name + ". Inputs Error!"),
                                    !1;
                            if ("error_form" === t)
                                return alert(this.name + ". Form Error!"),
                                    !1;
                            var e = this.getErrors(t);
                            if (0 === e.length) {
                                this.clearInputs(),
                                    this.hideErrors(),
                                    this.launchEventsByTarget("success", {
                                        json: this.json,
                                        inputs: this.inputs,
                                        data: t,
                                        form: this.form
                                    });
                                var i = this.form.getAttribute(this.data.redirect);
                                null !== i && (location.href = i)
                            } else
                                this.addErrors(e),
                                    this.toggleErrors(e),
                                    this.scrollToError(e),
                                    this.launchEventsByTarget("fail", {
                                        errors: e,
                                        json: this.json,
                                        inputs: this.inputs,
                                        data: t,
                                        form: this.form
                                    });
                            return !0
                        }
                    }, {
                        key: "removeErrors",
                        value: function () {
                            for (var t = 0; t < this.inputs.length; t++) {
                                var e = this.inputs[t].parentElement;
                                this.inputs[t].classList.remove(this.prefix + "__input_error"),
                                    e.classList.contains(this.prefix + "__input_select") && e.classList.remove(this.prefix + "__input_select-error"),
                                    e.classList.contains(this.prefix + "__input") && e.classList.remove(this.prefix + "__input_error-i")
                            }
                            return !0
                        }
                    }, {
                        key: "hideErrors",
                        value: function () {
                            for (var t = 0; t < this.errors.length; t++)
                                $(this.errors[t]).stop().slideUp(this.prop.errorInfoDuration);
                            for (var e = 0; e < this.infos.length; e++)
                                $(this.infos[e]).stop().slideDown(this.prop.errorInfoDuration);
                            return !0
                        }
                    }, {
                        key: "getErrors",
                        value: function (t) {
                            for (var e = t.split(this.prop.separator), i = [], s = [], r = 0; r < e.length; r++)
                                i.push(e[r]);
                            for (var n = 0; n < this.inputs.length; n++) {
                                var o = this.inputs[n].getAttribute("name");
                                if (null !== o)
                                    for (var a = 0; a < i.length; a++)
                                        o.toLowerCase() === i[a].toLowerCase() && s.push({
                                            name: i[a],
                                            e: this.inputs[n]
                                        })
                            }
                            return s
                        }
                    }, {
                        key: "addErrors",
                        value: function (t) {
                            if (!this.prop.addErrorClass)
                                return !1;
                            for (var e = 0; e < t.length; e++) {
                                t[e].name;
                                var i = t[e].e
                                    , s = i.parentElement;
                                if (i.classList.add(this.prefix + "__input_error"),
                                    s.classList.contains(this.prefix + "__input") && s.classList.add(this.prefix + "__input_error-i"),
                                    s.classList.contains(this.prefix + "__input_select") && s.classList.add(this.prefix + "__input_select-error"),
                                    i.classList.contains(this.prop.v.prefix() + "checkbox_hidden")) {
                                    var r = i.previousElementSibling;
                                    null !== r && r.classList.add(this.prefix + "__input_checkbox-error")
                                }
                            }
                            return !0
                        }
                    }, {
                        key: "toggleErrors",
                        value: function (t) {
                            for (var e = 0; e < this.errors.length; e++) {
                                for (var i = !1, s = this.errors[e].getAttribute(this.data.name), r = 0; r < t.length; r++)
                                    t[r].name == s && (i = !0);
                                if (i) {
                                    for (var n = !1, o = 0; o < this.infos.length; o++)
                                        n = !1,
                                            this.infos[o].getAttribute(this.data.name) == s && (n = !0),
                                            n && $(this.infos[o]).stop().slideUp(this.prop.errorInfoDuration);
                                    n ? $(this.errors[e]).stop().delay(this.prop.errorInfoDuration).slideDown(this.prop.errorInfoDuration) : $(this.errors[e]).stop().slideDown(this.prop.errorInfoDuration)
                                } else {
                                    $(this.errors[e]).stop().slideUp(this.prop.errorInfoDuration);
                                    for (var a = 0; a < this.infos.length; a++) {
                                        var h = !1;
                                        this.infos[a].getAttribute(this.data.name) == s && (h = !0),
                                            h && $(this.infos[a]).stop().delay(this.prop.errorInfoDuration).slideDown(this.prop.errorInfoDuration)
                                    }
                                }
                            }
                            return !0
                        }
                    }, {
                        key: "scrollToError",
                        value: function (t) {
                            if (!this.prop.scroll)
                                return !1;
                            if (0 === t.length)
                                return !1;
                            t[0].name;
                            var e = t[0].e
                                , i = e.parentElement
                                , s = void 0;
                            if (i.classList.contains(this.prefix + "__input_select"))
                                s = $(i).offset().top;
                            else if (e.classList.contains(this.prop.v.prefix() + "checkbox_hidden")) {
                                var r = e.previousElementSibling;
                                null === r && (r = e),
                                    s = $(r).offset().top
                            } else
                                s = $(e).offset().top;
                            return (s < this.prop.v.vh()[1] / 2 || s > .75 * this.prop.v.vh()[1]) && $(this.scroll).stop().animate({
                                scrollTop: $(this.scroll).scrollTop() + s - this.prop.v.vh()[1] / 2
                            }, this.prop.scrollDuration),
                                !0
                        }
                    }, {
                        key: "clearInputs",
                        value: function () {
                            if (this.prop.clearAfterSuccess)
                                for (var t = 0; t < this.inputs.length; t++)
                                    "hidden" !== this.inputs[t].getAttribute("type") & "checkbox" !== this.inputs[t].getAttribute("type") & "radio" !== this.inputs[t].getAttribute("type") & "SELECT" !== this.inputs[t].tagName && (this.inputs[t].value = ""),
                                        this.eventBlur(this.inputs[t]);
                            return !0
                        }
                    }, {
                        key: "init",
                        value: function () {
                            this.data = {
                                proceeded: this.dataPrefix + "-proceeded",
                                redirect: this.dataPrefix + "-redirect",
                                name: this.dataPrefix + "-name"
                            };
                            var t = r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "init", this).call(this);
                            return !!t && (this.inputs = [],
                                this.errors = [],
                                this.infos = [],
                                this.json = {},
                                Object.assign(t, {
                                    formEvent: this.formEvent.bind(this),
                                    getInputs: this.getInputs.bind(this),
                                    getErrors: this.getErrorsEl.bind(this),
                                    getInfos: this.getInfosEl.bind(this),
                                    getJSON: this.getJSON.bind(this),
                                    removeErrors: this.removeErrors.bind(this),
                                    clearInputs: this.clearInputs.bind(this)
                                }))
                        }
                    }]),
                    e
            }(),
            p.prototype.Popup = function (t) {
                function e() {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    l(this, e);
                    var i = a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                    for (var s in i.prefix = i.prefix + "popup",
                        i.prop = Object.assign(i.prop, {
                            animation: 500
                        }),
                        t)
                        i.prop[s] = t[s];
                    return i.targets = ["show", "shown", "hide", "hidden"],
                        i.types = ["standard", "modal", "media", "text", "auto"],
                        i
                }
                return h(e, p.prototype.Class),
                    n(e, [{
                        key: "check",
                        value: function () {
                            return !!this.checkTypes({
                                obj: this.prop,
                                name: this.name,
                                console: this.prop.console,
                                vars: [["animation", "integer"]]
                            })
                        }
                    }, {
                        key: "create",
                        value: function () {
                            return !this.created && (this.id = this.prefix + "_" + this.randInt(0, 9999),
                                this.outer = document.createElement("div"),
                                this.outer.setAttribute("id", this.id),
                                this.outer.classList.add("" + this.prefix),
                                this.outer.classList.add(this.id),
                                this.outer.classList.add("display_none"),
                                this.overlay = document.createElement("div"),
                                this.overlay.classList.add(this.prefix + "__overlay"),
                                this.outer.appendChild(this.overlay),
                                this.container = document.createElement("div"),
                                this.container.classList.add(this.prefix + "__container"),
                                this.outer.appendChild(this.container),
                                this.content = document.createElement("div"),
                                this.content.classList.add(this.prefix + "__content"),
                                this.container.appendChild(this.content),
                                this.levelsEl[0] = document.createElement("div"),
                                this.levelsEl[0].classList.add(this.prefix + "__level"),
                                this.levelsEl[0].classList.add(this.prefix + "__level_0"),
                                this.content.appendChild(this.levelsEl[0]),
                                this.levelsEl[1] = document.createElement("div"),
                                this.levelsEl[1].classList.add(this.prefix + "__level"),
                                this.levelsEl[1].classList.add(this.prefix + "__level_1"),
                                this.content.appendChild(this.levelsEl[1]),
                                this.close = document.createElement("div"),
                                this.close.classList.add(this.prefix + "__close"),
                                this.container.appendChild(this.close),
                                this.prop.v.body().appendChild(this.outer),
                                this.setEvents(),
                                this.created = !0)
                        }
                    }, {
                        key: "setEvents",
                        value: function () {
                            return this.addEventListener({
                                el: this.overlay,
                                target: "click",
                                do: this.hide.bind(this)
                            }),
                                this.addEventListener({
                                    el: this.close,
                                    target: "click",
                                    do: this.hide.bind(this)
                                }),
                                !0
                        }
                    }, {
                        key: "closeButtonsEvents",
                        value: function () {
                            for (var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0, e = this.levelsEl[t].querySelectorAll("." + this.prefix + "__close-button"), i = 0; i < e.length; i++)
                                this.addEventListener({
                                    el: e[i],
                                    target: "click",
                                    do: this.clickCloseButton.bind(this)
                                });
                            return !0
                        }
                    }, {
                        key: "clickCloseButton",
                        value: function () {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
                            null !== t && t.preventDefault(),
                                this.hide()
                        }
                    }, {
                        key: "afterCloseEvent",
                        value: function () {
                            return this.addEventListener({
                                el: this.levelsEl[0].querySelector("." + this.prefix + "__after-close"),
                                target: "click",
                                do: this.clickAfterClose.bind(this)
                            }),
                                !0
                        }
                    }, {
                        key: "clickAfterClose",
                        value: function () {
                            return this.levels[1] && this.hide(),
                                !0
                        }
                    }, {
                        key: "stopVideo",
                        value: function () {
                            for (var t = this.outer.querySelectorAll("video"), e = 0; e < t.length; e++)
                                t[e].pause();
                            return !0
                        }
                    }, {
                        key: "getLevel",
                        value: function () {
                            for (var t = !1, e = 0; e < this.levels.length; e++)
                                this.levels[e] && (t = e);
                            return t
                        }
                    }, {
                        key: "getNextLevel",
                        value: function () {
                            var t = this.getLevel();
                            return !1 === t ? 0 : 1
                        }
                    }, {
                        key: "checkData",
                        value: function () {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}
                                , e = {
                                    selector: "." + this.prefix + "__html",
                                    types: ["standard"]
                                };
                            for (var i in t)
                                e[i] = t[i];
                            if (!this.checkTypes({
                                obj: e,
                                name: this.name,
                                console: this.prop.console,
                                vars: [["selector", "dom"], ["types", "stringArray", {
                                    count: 1
                                }]]
                            }))
                                return !1;
                            for (var s = !1, r = 0; r < e.types.length; r++)
                                for (var n = 0; n < this.types.length; n++)
                                    e.types[r] === this.types[n] && (s = !0);
                            s || e.types.push(this.types[0]);
                            for (var o = 0; o < e.types.length; o++)
                                if (0 === e.types[o].length)
                                    return !1;
                            return e
                        }
                    }, {
                        key: "show",
                        value: function () {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                            if (this.created || this.create(),
                                !(t = this.checkData(t)))
                                return !1;
                            var e = this.getNextLevel();
                            if (this.levels[e])
                                return !1;
                            var i = this.prop.v.document().querySelector(t.selector);
                            return this["showLevel_" + e](i, t.types),
                                this.launchEventsByTarget("show", {
                                    outer: this.outer,
                                    level: e,
                                    types: t.types
                                }),
                                !0
                        }
                    }, {
                        key: "showLevel_0",
                        value: function (t, e) {
                            this.levels[0] = !0,
                                this.levels[1] = !1,
                                this.activeTypes = e,
                                this.shown = !0,
                                this.levelsEl[0].innerHTML = t.innerHTML,
                                this.levelsEl[0].innerHTML += '<div class="' + this.prefix + '__after-close"></div>',
                                this.outer.classList.remove("display_none"),
                                this.outer.classList.add("display_flex"),
                                this.prop.v.document().classList.add(this.prefix + "_shown");
                            for (var i = 0; i < e.length; i++)
                                this.outer.classList.add(this.prefix + "_" + e[i]);
                            return setTimeout(function () {
                                this.outer.classList.add(this.prefix + "_level_0"),
                                    this.outer.classList.remove(this.prefix + "_level_1"),
                                    this.prop.v.document().classList.add(this.prefix + "_shown_level_0"),
                                    this.prop.v.document().classList.remove(this.prefix + "_shown_level_1")
                            }
                                .bind(this), this.prop.v.timeMin()),
                                this.afterCloseEvent(),
                                this.closeButtonsEvents(0),
                                setTimeout(function () {
                                    this.launchEventsByTarget("shown", {
                                        outer: this.outer,
                                        level: 0,
                                        types: this.activeTypes
                                    })
                                }
                                    .bind(this), this.prop.v.timeMin() + this.prop.animation),
                                !0
                        }
                    }, {
                        key: "showLevel_1",
                        value: function (t, e) {
                            return this.levels[0] = !0,
                                this.levels[1] = !0,
                                this.levelsEl[1].innerHTML = t.innerHTML,
                                setTimeout(function () {
                                    this.outer.classList.add(this.prefix + "_level_1"),
                                        this.prop.v.document().classList.add(this.prefix + "_shown_level_1")
                                }
                                    .bind(this), v.timeMin),
                                this.afterCloseEvent(),
                                this.closeButtonsEvents(1),
                                setTimeout(function () {
                                    this.launchEventsByTarget("shown", {
                                        outer: this.outer,
                                        level: 1,
                                        types: this.activeTypes
                                    })
                                }
                                    .bind(this), this.prop.v.timeMin() + this.prop.animation),
                                !0
                        }
                    }, {
                        key: "hide",
                        value: function () {
                            return !!this.show && (this.stopVideo(),
                                this.launchEventsByTarget("hide", {
                                    outer: this.outer,
                                    level: this.getLevel(),
                                    types: this.activeTypes
                                }),
                                1 === this.getLevel() ? this.hideLevel_1() : 0 !== this.getLevel() || this.hideLevel_0())
                        }
                    }, {
                        key: "hideLevel_0",
                        value: function () {
                            return this.levels[0] = !1,
                                this.levels[1] = !1,
                                this.outer.classList.remove(this.prefix + "_level_0"),
                                this.prop.v.document().classList.remove(this.prefix + "_shown_level_0"),
                                this.prop.v.document().classList.remove(this.prefix + "_shown_level_1"),
                                setTimeout(function () {
                                    this.prop.v.document().classList.remove(this.prefix + "_shown"),
                                        this.outer.classList.add("display_none"),
                                        this.outer.classList.remove("display_flex");
                                    for (var t = 0; t < this.activeTypes.length; t++)
                                        this.outer.classList.remove(this.prefix + "_" + this.activeTypes[t]);
                                    this.levelsEl[0].innerHTML = "",
                                        this.shown = !1,
                                        this.launchEventsByTarget("hidden", {
                                            outer: this.outer,
                                            level: 0,
                                            types: this.activeTypes
                                        })
                                }
                                    .bind(this), this.prop.animation),
                                !0
                        }
                    }, {
                        key: "hideLevel_1",
                        value: function () {
                            return this.levels[0] = !0,
                                this.levels[1] = !1,
                                setTimeout(function () {
                                    this.outer.classList.remove(this.prefix + "_level_1"),
                                        this.prop.v.document().classList.remove(this.prefix + "_shown_level_1")
                                }
                                    .bind(this), this.prop.v.timeMin()),
                                setTimeout(function () {
                                    this.levelsEl[1].innerHTML = "",
                                        this.launchEventsByTarget("hidden", {
                                            outer: this.outer,
                                            level: 1,
                                            types: this.activeTypes
                                        })
                                }
                                    .bind(this), this.prop.v.timeMin() + this.prop.animation),
                                !0
                        }
                    }, {
                        key: "hideAll",
                        value: function () {
                            return this.levels[0] = !1,
                                this.levels[1] = !1,
                                this.launchEventsByTarget("hide", {
                                    outer: this.outer,
                                    level: 0,
                                    types: this.activeTypes
                                }),
                                this.outer.classList.remove(this.prefix + "_level_0"),
                                this.outer.classList.remove(this.prefix + "_level_1"),
                                this.prop.v.document().classList.remove(this.prefix + "_shown_level_0"),
                                this.prop.v.document().classList.remove(this.prefix + "_shown_level_1"),
                                setTimeout(function () {
                                    this.prop.v.document().classList.remove(this.prefix + "_shown"),
                                        this.outer.classList.add("display_none"),
                                        this.outer.classList.remove("display_flex");
                                    for (var t = 0; t < this.activeTypes.length; t++)
                                        this.outer.classList.remove(this.prefix + "_" + this.activeTypes[t]);
                                    this.levelsEl[0].innerHTML = "",
                                        this.levelsEl[1].innerHTML = "",
                                        this.shown = !1,
                                        this.launchEventsByTarget("hidden", {
                                            outer: this.outer,
                                            level: 0,
                                            types: this.activeTypes
                                        })
                                }
                                    .bind(this), this.prop.animation),
                                !0
                        }
                    }, {
                        key: "init",
                        value: function () {
                            var t = this
                                , i = r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "init", this).call(this);
                            return !!i && (this.created = !1,
                                this.shown = !1,
                                this.levels = [!1, !1],
                                this.levelsEl = [],
                                this.activeTypes = [],
                                Object.assign(i, {
                                    level: this.getLevel.bind(this),
                                    shown: function () {
                                        return t.shown
                                    },
                                    id: function () {
                                        return t.id
                                    },
                                    activeTypes: function () {
                                        return t.activeTypes
                                    },
                                    show: this.show.bind(this),
                                    hide: this.hide.bind(this),
                                    hideAll: this.hideAll.bind(this)
                                }))
                        }
                    }]),
                    e
            }(),
            p.prototype.AjaxPage = function (t) {
                function e() {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    l(this, e);
                    var i = a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                    for (var s in i.prefix = i.prefix + "ajaxPage",
                        i.prop = Object.assign(i.prop, {
                            selectorLinks: "." + i.prefix + "__link",
                            selectorOuter: "#" + i.prefix + "__outer",
                            selectorVData: "body",
                            disabled: !1,
                            disabledTries: 1e3,
                            popstateEvent: !0,
                            popstateEventReload: !0,
                            on: !0,
                            updateUrl: !0,
                            updateTitle: !0,
                            updateContent: !0,
                            timeoutAjax: 0,
                            timeoutUpdate: 0,
                            timeoutAfter: 0,
                            maxChanges: 999,
                            changeSame: !0,
                            cache: !1
                        }),
                        t)
                        i.prop[s] = t[s];
                    return i.targets = ["before", "load", "after", "changeSame"],
                        i
                }
                return h(e, p.prototype.Class),
                    n(e, [{
                        key: "check",
                        value: function () {
                            return !!this.checkTypes({
                                obj: this.prop,
                                name: this.name,
                                console: this.prop.console,
                                vars: [["selectorLinks", "dom"], ["selectorOuter", "dom"], ["selectorVData", "string"], ["disabled", "boolean"], ["disabledTries", "integer"], ["popstateEvent", "boolean"], ["popstateEventReload", "boolean"], ["on", "boolean"], ["updateUrl", "boolean"], ["updateTitle", "boolean"], ["updateContent", "boolean"], ["timeoutAjax", "integer"], ["timeoutUpdate", "integer"], ["timeoutAfter", "integer"], ["maxChanges", "integer"], ["changeSame", "boolean"], ["cache", "boolean"]]
                            })
                        }
                    }, {
                        key: "changeProp",
                        value: function (t) {
                            return !!r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "changeProp", this).call(this, t) && (this.getElements(),
                                this.setEvents(),
                                !0)
                        }
                    }, {
                        key: "getElements",
                        value: function () {
                            this.outer = this.prop.v.doc().querySelector(this.prop.selectorOuter);
                            for (var t = this.prop.v.doc().querySelectorAll(this.prop.selectorLinks), e = 0; e < t.length; e++)
                                void 0 === t[e][this.data.proceeded] && this.links.push(t[e]);
                            return this.links
                        }
                    }, {
                        key: "setEvents",
                        value: function () {
                            for (var t = 0; t < this.links.length; t++)
                                void 0 === this.links[t][this.data.proceeded] && (this.addEventListener({
                                    el: this.links[t],
                                    target: "click",
                                    do: this.load.bind(this, this.links[t], !0, !1)
                                }),
                                    this.links[t].setAttribute("data-" + this.prop.v.prefix() + "preloader-none", !0),
                                    this.links[t][this.data.proceeded] = !0);
                            return !0
                        }
                    }, {
                        key: "checkHref",
                        value: function () {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
                            if (null === t)
                                return !1;
                            var e = "";
                            if ("string" == typeof t)
                                e = t;
                            else {
                                if (!this.checkType("htmlElement", t))
                                    return !1;
                                if (null === t.getAttribute("href"))
                                    return !1;
                                e = t.href
                            }
                            return e
                        }
                    }, {
                        key: "setTimeout",
                        value: function (t) {
                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e.toString = function () {
                                return t.toString()
                            }
                                ,
                                e
                        }((function () {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : function () { }
                                , e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0
                                , i = +new Date - this.startLoading;
                            return i < e ? setTimeout(t.bind(this), e - i) : t(),
                                !0
                        }
                        ))
                    }, {
                        key: "getVPage",
                        value: function () {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
                            if (null === t)
                                return !1;
                            var e = t.getAttribute("data-" + this.prop.v.prefix() + "page");
                            if (null !== e) {
                                for (var i = e.split(" "), s = [], r = 0; r < i.length; r++)
                                    s.push(i[r]);
                                return s
                            }
                            return !1
                        }
                    }, {
                        key: "load",
                        value: function () {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null
                                , e = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1]
                                , i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2]
                                , s = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
                            if (this.prop.on) {
                                if (null !== s && s.preventDefault(),
                                    this.loading)
                                    return !1;
                                if (this.prop.disabled)
                                    return !1;
                                var r = this.checkHref(t);
                                return !!r && (v.checkType("function", t.getAttribute) && null !== t.getAttribute("target") ? void (window.location.href = r) : r.includes(window.location.host) ? this.changes >= this.prop.maxChanges ? void (window.location.href = r) : !this.prop.changeSame & !i && r == location.href ? void this.launchEventsByTarget("changeSame", {
                                    link: t
                                }) : (this.loading = !0,
                                    this.launchEventsByTarget("before", {
                                        link: t,
                                        onpopstate: i
                                    }),
                                    setTimeout(function (t, e, i) {
                                        this.startLoading = +new Date,
                                            this.ajaxLoad(t, e, i),
                                            this.changes++
                                    }
                                        .bind(this, r, e, i), this.prop.timeoutAjax),
                                    !0) : void (window.location.href = r))
                            }
                        }
                    }, {
                        key: "ajaxLoad",
                        value: function () {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ""
                                , e = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1]
                                , i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
                            return this.loading = !0,
                                this.prop.v.ajax({
                                    url: t,
                                    method: "post",
                                    data: {
                                        ajaxPage: 1
                                    },
                                    cache: this.prop.cache,
                                    abortOnError: !0,
                                    callback: this.update.bind(this, t, e, i),
                                    fail: this.ajaxLoad.bind(this, t),
                                    error: this.error.bind(this, t, e, i)
                                }),
                                !0
                        }
                    }, {
                        key: "error",
                        value: function () {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ""
                                , e = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1]
                                , i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2]
                                , s = arguments[3]
                                , r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : "";
                            return 404 == s.status ? this.update(t, e, i, r) : window.location.href = t,
                                !0
                        }
                    }, {
                        key: "update",
                        value: function () {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ""
                                , e = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1]
                                , i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2]
                                , s = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : ""
                                , r = document.createElement("html");
                            r.innerHTML = s;
                            var n = r.querySelector(this.prop.selectorVData)
                                , o = this.getVPage(n);
                            if (!o)
                                return window.location.href = t,
                                    !1;
                            var a = {
                                current: this.outer,
                                new: r.querySelector(this.prop.selectorOuter)
                            };
                            if (null === a.new)
                                return window.location.href = t,
                                    !1;
                            this.setTimeout(function () {
                                this.prop.updateUrl & e && window.history.pushState(null, "", t)
                            }
                                .bind(this), this.prop.timeoutUpdate),
                                this.setTimeout(function () {
                                    if (this.prop.updateTitle) {
                                        var t = {
                                            current: document.querySelector("title"),
                                            new: r.querySelector("title")
                                        };
                                        null !== t.current & null !== t.new && (t.current.innerHTML = t.new.innerHTML)
                                    }
                                }
                                    .bind(this), this.prop.timeoutUpdate);
                            var h = a.new.innerHTML;
                            return this.setTimeout(function () {
                                this.prop.updateContent && (a.current.innerHTML = h,
                                    this.getElements(),
                                    this.setEvents())
                            }
                                .bind(this), this.prop.timeoutUpdate),
                                this.setTimeout(function () {
                                    this.launchEventsByTarget("load", {
                                        prev: this.page,
                                        next: o,
                                        url: t,
                                        html: h,
                                        htmlFull: s,
                                        onpopstate: i
                                    })
                                }
                                    .bind(this), this.prop.timeoutUpdate),
                                this.setTimeout(function () {
                                    setTimeout(function () {
                                        this.launchEventsByTarget("after", {
                                            prev: this.page,
                                            next: o,
                                            url: t,
                                            html: h,
                                            onpopstate: i
                                        })
                                    }
                                        .bind(this), this.prop.timeoutAfter)
                                }
                                    .bind(this), this.prop.timeoutUpdate),
                                this.setTimeout(function () {
                                    setTimeout(function () {
                                        this.loading = !1,
                                            this.url = t,
                                            this.page = o
                                    }
                                        .bind(this), this.prop.timeoutAfter)
                                }
                                    .bind(this), this.prop.timeoutUpdate),
                                !0
                        }
                    }, {
                        key: "popstate",
                        value: function () {
                            return this.disabledTries = 0,
                                window.onpopstate = this.popstateEvent.bind(this),
                                !0
                        }
                    }, {
                        key: "popstateEvent",
                        value: function (t) {
                            return this.prop.popstateEvent ? (this.catchStopLoading(),
                                !0) : (this.prop.popstateEventReload && location.reload(),
                                    !1)
                        }
                    }, {
                        key: "catchStopLoading",
                        value: function () {
                            !this.loading & !this.prop.disabled ? (this.load(location.href, !1, !0),
                                this.disabledTries = 0) : (this.disabledTries++,
                                    this.disabledTries <= this.prop.disabledTries && window.requestAnimationFrame(this.catchStopLoading.bind(this)))
                        }
                    }, {
                        key: "setUrl",
                        value: function () {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "";
                            this.url = t
                        }
                    }, {
                        key: "init",
                        value: function () {
                            var t = this
                                , i = r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "init", this).call(this);
                            return !!i && (this.data = {
                                proceeded: this.prefix + "-proceeded"
                            },
                                this.outer = null,
                                this.links = [],
                                this.changes = 0,
                                this.url = window.location.href,
                                this.page = this.prop.v.getPage(),
                                this.startLoading = 0,
                                this.loading = !1,
                                this.popstate(),
                                this.getElements(),
                                this.setEvents(),
                                Object.assign(i, {
                                    changes: function () {
                                        return t.changes
                                    },
                                    links: function () {
                                        return t.links
                                    },
                                    outer: function () {
                                        return t.outer
                                    },
                                    url: function () {
                                        return t.url
                                    },
                                    page: function () {
                                        return t.page
                                    },
                                    loading: function () {
                                        return t.loading
                                    },
                                    getElements: this.getElements.bind(this),
                                    setEvents: this.setEvents.bind(this),
                                    load: this.load.bind(this),
                                    setUrl: this.setUrl.bind(this)
                                }))
                        }
                    }]),
                    e
            }(),
            p.prototype.Page = function (t) {
                function e() {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    l(this, e);
                    var i = a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                    for (var s in i.prop = Object.assign(i.prop, {
                        name: "" + i.prefix,
                        images: !1
                    }),
                        t)
                        i.prop[s] = t[s];
                    return i.targets = ["create", "show", "hide", "destroy", "resize", "resizeW", "resizeH"],
                        i
                }
                return h(e, p.prototype.Class),
                    n(e, [{
                        key: "check",
                        value: function () {
                            return !!this.checkTypes({
                                obj: this.prop,
                                name: this.name,
                                console: this.prop.console,
                                vars: [["name", "string"], ["images", "boolean"]]
                            })
                        }
                    }, {
                        key: "resize",
                        value: function () {
                            return this.launchEventsByTarget("resize"),
                                !0
                        }
                    }, {
                        key: "resizeW",
                        value: function () {
                            return this.launchEventsByTarget("resizeW"),
                                !0
                        }
                    }, {
                        key: "resizeH",
                        value: function () {
                            return this.launchEventsByTarget("resizeH"),
                                !0
                        }
                    }, {
                        key: "create",
                        value: function () {
                            var t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                            if (this.created)
                                return !1;
                            this.created = !0,
                                this.ajaxBool = t;
                            var e = this.prop.v.viewport;
                            return this.resizeId = e.add({
                                target: "wh",
                                name: this.name + " Resize",
                                do: this.resize.bind(this)
                            }),
                                this.resizeWId = e.add({
                                    target: "w",
                                    name: this.name + " Resize Width",
                                    do: this.resizeW.bind(this)
                                }),
                                this.resizeHId = e.add({
                                    target: "h",
                                    name: this.name + " Resize Height",
                                    do: this.resizeH.bind(this)
                                }),
                                this.launchEventsByTarget("create"),
                                this.imagesLoaded = 0,
                                this.showAfterImages = !1,
                                this.prop.images ? (this.imagesLoadedAll = !1,
                                    this.imagesLoad()) : this.imagesLoadedAll = !0,
                                !0
                        }
                    }, {
                        key: "show",
                        value: function () {
                            return 0 < arguments.length && void 0 !== arguments[0] || this.ajaxBool,
                                !(this.shown || (this.imagesLoadedAll ? (this.shown = !0,
                                    this.launchEventsByTarget("show"),
                                    0) : this.showAfterImages = !0))
                        }
                    }, {
                        key: "hide",
                        value: function () {
                            return 0 < arguments.length && void 0 !== arguments[0] || this.ajaxBool,
                                !!this.shown && (this.shown = !1,
                                    this.launchEventsByTarget("hide"),
                                    !0)
                        }
                    }, {
                        key: "destroy",
                        value: function () {
                            return 0 < arguments.length && void 0 !== arguments[0] || this.ajaxBool,
                                !!this.created && (this.created = !1,
                                    null !== this.resizeId && (this.prop.v.viewport.delete(this.resizeId),
                                        this.resizeId = null),
                                    null !== this.resizeWId && (this.prop.v.viewport.delete(this.resizeWId),
                                        this.resizeWId = null),
                                    null !== this.resizeHId && (this.prop.v.viewport.delete(this.resizeHId),
                                        this.resizeHId = null),
                                    this.launchEventsByTarget("destroy"),
                                    this.removeEventListeners(),
                                    this.deleteAll(this.prop.console),
                                    !0)
                        }
                    }, {
                        key: "imagesLoad",
                        value: function () {
                            this.imgs = document.querySelectorAll("img");
                            for (var t = 0; t < this.imgs.length; t++) {
                                var e = new Image;
                                e.onload = this.imagesOnLoad.bind(this),
                                    e.onerror = this.imagesOnLoad.bind(this),
                                    e.src = this.imgs[t].src
                            }
                            0 == this.imgs.length && (this.imagesLoadedAll = !0)
                        }
                    }, {
                        key: "imagesOnLoad",
                        value: function () {
                            this.imagesLoaded++,
                                this.imagesLoaded >= this.imgs.length && (this.imagesLoadedAll = !0,
                                    this.showAfterImages && this.show(this.ajaxBool))
                        }
                    }, {
                        key: "init",
                        value: function () {
                            var t = this
                                , i = r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "init", this).call(this);
                            return !!i && (this.ajaxBool = !1,
                                this.created = !1,
                                this.shown = !1,
                                this.resizeId = null,
                                this.resizeWId = null,
                                this.resizeHId = null,
                                this.imgs = [],
                                this.imagesLoaded = 0,
                                this.imagesLoadedAll = !1,
                                this.showAfterImages = !1,
                                this.prop.v.pages instanceof Array || (this.prop.v.pages = []),
                                this.prop.v.pages.push(this.prop.name),
                                Object.assign(i, {
                                    shown: function () {
                                        return t.shown
                                    },
                                    created: function () {
                                        return t.created
                                    },
                                    create: this.create.bind(this),
                                    show: this.show.bind(this),
                                    hide: this.hide.bind(this),
                                    destroy: this.destroy.bind(this)
                                }))
                        }
                    }]),
                    e
            }(),
            p.prototype.Faq = function (t) {
                function e() {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    l(this, e);
                    var i = a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                    for (var s in i.prefix = i.prefix + "faq",
                        i.prop = Object.assign(i.prop, {
                            selector: "#" + i.prefix,
                            selectorItem: "." + i.prefix + "__item",
                            selectorQuestion: "." + i.prefix + "__question",
                            selectorAnswer: "." + i.prefix + "__answer",
                            selectorClose: "." + i.prefix + "__close",
                            duration: 350,
                            multiShow: !1
                        }),
                        t)
                        i.prop[s] = t[s];
                    return i.targets = ["toggle", "show", "hide"],
                        i
                }
                return h(e, p.prototype.Class),
                    n(e, [{
                        key: "check",
                        value: function () {
                            return !!this.checkTypes({
                                obj: this.prop,
                                name: this.name,
                                console: this.prop.console,
                                vars: [["selector", "dom"], ["selectorItem", "dom"], ["selectorQuestion", "dom"], ["selectorAnswer", "dom"], ["selectorClose", "string"], ["duration", "integer"], ["multiShow", "boolean"]]
                            }) && !!this.getElements()
                        }
                    }, {
                        key: "changeProp",
                        value: function (t) {
                            return !!r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "changeProp", this).call(this, t) && !!this.getElements() && (this.setEvents(),
                                !0)
                        }
                    }, {
                        key: "getElements",
                        value: function () {
                            this.removeEventListeners(),
                                this.outer = this.prop.v.doc().querySelector(this.prop.selector);
                            var t = this.outer.getAttribute(this.data.proceeded);
                            null === t && (t = this.name + "-" + +new Date + "-" + Math.random(),
                                this.outer.setAttribute(this.data.proceeded, t),
                                this.outer.classList.add("" + this.prefix));
                            for (var e = this.outer.querySelectorAll(this.prop.selectorItem), i = 0; i < e.length; i++)
                                if (null === e[i].getAttribute(this.data.proceeded)) {
                                    var s = {
                                        id: this.name + "-" + +new Date + "-" + Math.random(),
                                        item: e[i],
                                        questions: e[i].querySelectorAll(this.prop.selectorQuestion),
                                        answers: e[i].querySelectorAll(this.prop.selectorAnswer),
                                        closes: e[i].querySelectorAll(this.prop.selectorClose),
                                        proceededEvents: !1,
                                        shown: !1
                                    };
                                    this.items.push(s),
                                        e[i].setAttribute(this.data.proceeded, s.id),
                                        e[i].classList.add(this.prefix + "__item");
                                    for (var r = 0; r < s.questions.length; r++)
                                        s.questions[r].classList.add(this.prefix + "__question");
                                    for (var n = 0; n < s.answers.length; n++)
                                        s.answers[n].classList.add(this.prefix + "__answer");
                                    for (var o = 0; o < s.closes.length; o++)
                                        s.closes[o].classList.add(this.prefix + "__close")
                                }
                            for (var a = 0; a < this.items.length; a++)
                                this.items[a].proceededEvents = !1;
                            return !0
                        }
                    }, {
                        key: "getItem",
                        value: function () {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0;
                            if (this.checkType("integer", t))
                                return !(t < 0 & t >= this.items.length) && this.items[t];
                            if (this.checkType("string", t))
                                for (var e = 0; e < this.items.length; e++)
                                    if (this.items[e].id === t)
                                        return this.items[e];
                            return !1
                        }
                    }, {
                        key: "getActive",
                        value: function () {
                            for (var t = [], e = 0; e < this.items.length; e++)
                                this.items[e].shown && t.push(this.items[e]);
                            return t
                        }
                    }, {
                        key: "setEvents",
                        value: function () {
                            for (var t = 0; t < this.items.length; t++)
                                if (!this.items[t].proceededEvents) {
                                    for (var e = 0; e < this.items[t].questions.length; e++)
                                        this.addEventListener({
                                            el: this.items[t].questions[e],
                                            target: "click",
                                            do: this.clickQuestion.bind(this, this.items[t].id)
                                        });
                                    for (var i = 0; i < this.items[t].closes.length; i++)
                                        this.addEventListener({
                                            el: this.items[t].closes[i],
                                            target: "click",
                                            do: this.clickClose.bind(this, this.items[t].id)
                                        });
                                    this.items[t].proceededEvents = !0
                                }
                            return !0
                        }
                    }, {
                        key: "clickQuestion",
                        value: function () {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ""
                                , e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
                            return null !== e && e.preventDefault(),
                                this.toggle(t),
                                !0
                        }
                    }, {
                        key: "clickClose",
                        value: function () {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ""
                                , e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
                            return null !== e && (e.preventDefault(),
                                e.stopPropagation()),
                                this.toggle(t),
                                !0
                        }
                    }, {
                        key: "toggle",
                        value: function () {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0
                                , e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : this.prop.duration;
                            if (!this.checkType("integer", e))
                                return !1;
                            var i = this.getItem(t);
                            return !!i && (i.shown ? this.hide(t, e) : this.show(t, e),
                                this.launchEventsByTarget("toggle", i),
                                !0)
                        }
                    }, {
                        key: "show",
                        value: function () {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0
                                , e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : this.prop.duration;
                            if (!this.checkType("integer", e))
                                return !1;
                            var i = this.getItem(t);
                            if (!i)
                                return !1;
                            if (i.shown)
                                return !1;
                            if (this.toggleClassActive(i, "add"),
                                this.showAnimation(i, e),
                                i.shown = !0,
                                !this.prop.multiShow)
                                for (var s = 0; s < this.items.length; s++)
                                    this.items[s] != i && this.hide(this.items[s].id, e);
                            return this.launchEventsByTarget("show", i),
                                !0
                        }
                    }, {
                        key: "hide",
                        value: function () {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0
                                , e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : this.prop.duration;
                            if (!this.checkType("integer", e))
                                return !1;
                            var i = this.getItem(t);
                            return !!i && !!i.shown && (this.toggleClassActive(i, "remove"),
                                this.hideAnimation(i, e),
                                i.shown = !1,
                                this.launchEventsByTarget("hide", i),
                                !0)
                        }
                    }, {
                        key: "toggleClassActive",
                        value: function () {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}
                                , e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "add";
                            t.item.classList[e](this.prefix + "__item_active");
                            for (var i = 0; i < t.questions.length; i++)
                                t.questions[i].classList[e](this.prefix + "__question_active");
                            for (var s = 0; s < t.answers.length; s++)
                                t.answers[s].classList[e](this.prefix + "__answer_active");
                            for (var r = 0; r < t.closes.length; r++)
                                t.closes[r].classList[e](this.prefix + "__close_active")
                        }
                    }, {
                        key: "showAnimation",
                        value: function (t, e) {
                            for (var i = 0; i < t.answers.length; i++)
                                $(t.answers[i]).stop().slideDown(e);
                            return !0
                        }
                    }, {
                        key: "hideAnimation",
                        value: function (t, e) {
                            for (var i = 0; i < t.answers.length; i++)
                                $(t.answers[i]).stop().slideUp(e);
                            return !0
                        }
                    }, {
                        key: "addItem",
                        value: function () {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ""
                                , e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "";
                            if (!this.checkType("string", t))
                                return !1;
                            if (!this.checkType("string", e))
                                return !1;
                            var i = document.createElement("div");
                            i.classList.add(this.prefix + "__item"),
                                this.outer.appendChild(i);
                            var s = document.createElement("div");
                            s.classList.add(this.prefix + "__question"),
                                s.innerHTML = t,
                                i.appendChild(s);
                            var r = document.createElement("div");
                            return r.classList.add(this.prefix + "__answer"),
                                r.innerHTML = e,
                                i.appendChild(r),
                                this.getElements(),
                                this.setEvents(),
                                !0
                        }
                    }, {
                        key: "addHtml",
                        value: function () {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ""
                                , e = document.createElement("div");
                            e.innerHTML = t;
                            for (var i = e.querySelectorAll(this.prop.selectorItem), s = 0; s < i.length; s++) {
                                var r = i[s].querySelector(this.prop.selectorQuestion)
                                    , n = "";
                                null !== r && (n = r.innerHTML);
                                var o = i[s].querySelector(this.prop.selectorAnswer)
                                    , a = "";
                                null !== o && (a = o.innerHTML),
                                    this.addItem(n, a)
                            }
                            return !(e = null)
                        }
                    }, {
                        key: "init",
                        value: function () {
                            this.data = {
                                proceeded: "data-" + this.prefix + "-proceeded"
                            },
                                this.outer = null,
                                this.items = [];
                            var t = r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "init", this).call(this);
                            return !!t && (this.setEvents(),
                                Object.assign(t, {
                                    getItem: this.getItem.bind(this),
                                    toggle: this.toggle.bind(this),
                                    show: this.show.bind(this),
                                    hide: this.hide.bind(this),
                                    getActive: this.getActive.bind(this),
                                    addItem: this.addItem.bind(this),
                                    addHtml: this.addHtml.bind(this)
                                }))
                        }
                    }]),
                    e
            }(),
            p.prototype.Map = function (t) {
                function e() {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    l(this, e);
                    var i = a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                    for (var s in i.prefix = i.prefix + "map",
                        i.prop = Object.assign(i.prop, {
                            selector: "#" + i.prefix,
                            styles: [{
                                elementType: "geometry",
                                stylers: [{
                                    color: "#f5f5f5"
                                }]
                            }, {
                                elementType: "labels.icon",
                                stylers: [{
                                    visibility: "off"
                                }]
                            }, {
                                elementType: "labels.text.fill",
                                stylers: [{
                                    color: "#616161"
                                }]
                            }, {
                                elementType: "labels.text.stroke",
                                stylers: [{
                                    color: "#f5f5f5"
                                }]
                            }, {
                                featureType: "administrative.land_parcel",
                                elementType: "labels.text.fill",
                                stylers: [{
                                    color: "#bdbdbd"
                                }]
                            }, {
                                featureType: "poi",
                                elementType: "geometry",
                                stylers: [{
                                    color: "#eeeeee"
                                }]
                            }, {
                                featureType: "poi",
                                elementType: "labels.text.fill",
                                stylers: [{
                                    color: "#757575"
                                }]
                            }, {
                                featureType: "poi.park",
                                elementType: "geometry",
                                stylers: [{
                                    color: "#e5e5e5"
                                }]
                            }, {
                                featureType: "poi.park",
                                elementType: "labels.text.fill",
                                stylers: [{
                                    color: "#9e9e9e"
                                }]
                            }, {
                                featureType: "road",
                                elementType: "geometry",
                                stylers: [{
                                    color: "#ffffff"
                                }]
                            }, {
                                featureType: "road.arterial",
                                elementType: "labels.text.fill",
                                stylers: [{
                                    color: "#757575"
                                }]
                            }, {
                                featureType: "road.highway",
                                elementType: "geometry",
                                stylers: [{
                                    color: "#dadada"
                                }]
                            }, {
                                featureType: "road.highway",
                                elementType: "labels.text.fill",
                                stylers: [{
                                    color: "#616161"
                                }]
                            }, {
                                featureType: "road.local",
                                elementType: "labels.text.fill",
                                stylers: [{
                                    color: "#9e9e9e"
                                }]
                            }, {
                                featureType: "transit.line",
                                elementType: "geometry",
                                stylers: [{
                                    color: "#e5e5e5"
                                }]
                            }, {
                                featureType: "transit.station",
                                elementType: "geometry",
                                stylers: [{
                                    color: "#eeeeee"
                                }]
                            }, {
                                featureType: "water",
                                elementType: "geometry",
                                stylers: [{
                                    color: "#c9c9c9"
                                }]
                            }, {
                                featureType: "water",
                                elementType: "labels.text.fill",
                                stylers: [{
                                    color: "#9e9e9e"
                                }]
                            }],
                            address: "London",
                            icon: "",
                            iconSize: [50, 50],
                            zoom: 16,
                            zoomControl: !0,
                            mapTypeControl: !0,
                            scaleControl: !0,
                            streetViewControl: !0,
                            rotateControl: !0,
                            fullscreenControl: !0,
                            scrollwheel: !1,
                            mapTypeId: "roadmap",
                            init: !0
                        }),
                        i.mapTypeIds = ["roadmap", "satellite", "hybrid", "terrain"],
                        t)
                        i.prop[s] = t[s];
                    return i
                }
                return h(e, p.prototype.Class),
                    n(e, [{
                        key: "check",
                        value: function () {
                            if (!this.checkTypes({
                                obj: this.prop,
                                name: this.name,
                                console: this.prop.console,
                                vars: [["selector", "dom"], ["styles", "array"], ["address", "string"], ["icon", "string"], ["iconSize", "numberArray"], ["zoom", "integer"], ["zoomControl", "boolean"], ["mapTypeControl", "boolean"], ["scaleControl", "boolean"], ["streetViewControl", "boolean"], ["rotateControl", "boolean"], ["fullscreenControl", "boolean"], ["scrollwheel", "boolean"], ["mapTypeId", "string"], ["init", "boolean"]]
                            }))
                                return !1;
                            for (var t = !1, e = 0; e < this.mapTypeIds.length; e++)
                                this.mapTypeIds[e].toLowerCase() == this.prop.mapTypeId.toLowerCase() && (t = !0);
                            return !!t && (this.outer = this.prop.v.document().querySelector(this.prop.selector),
                                !0)
                        }
                    }, {
                        key: "create",
                        value: function () {
                            var t = this;
                            return this.created = !0,
                                this.outer.querySelector("." + this.prefix + "__outer"),
                                $(this.prop.selector + " ." + this.prefix + "__outer").gmap3("destroy").remove(),
                                this.outer.innerHTML = '<div class="' + this.prefix + '__outer relative col_12 row_12"></div>',
                                setTimeout((function () {
                                    var e = t.outer.querySelector("." + t.prefix + "__outer")
                                        , i = t.prop.icon
                                        , s = t.prop.iconSize;
                                    t.map = $(e).gmap3({
                                        map: {
                                            options: {
                                                zoom: t.prop.zoom,
                                                zoomControl: t.prop.zoomControl,
                                                mapTypeControl: t.prop.mapTypeControl,
                                                scaleControl: t.prop.scaleControl,
                                                streetViewControl: t.prop.streetViewControl,
                                                rotateControl: t.prop.rotateControl,
                                                fullscreenControl: t.prop.fullscreenControl,
                                                mapTypeId: 1 < t.prop.styles.length & !t.prop.mapTypeControl ? "" + t.prefix : t.prop.mapTypeId,
                                                scrollwheel: t.prop.scrollwheel
                                            },
                                            callback: function (t) {
                                                (this.googleMap = t).addListener("maptypeid_changed", function () {
                                                    var e = this;
                                                    setTimeout((function () {
                                                        var i = e.outer.querySelector("." + e.prefix + "__outer");
                                                        if (null !== i) {
                                                            for (var s = 0; s < e.mapTypeIds.length; s++)
                                                                i.classList.remove(e.prefix + "__outer_" + e.mapTypeIds[s]);
                                                            e.prop.mapTypeId = t.mapTypeId.toLowerCase(),
                                                                i.classList.add(e.prefix + "__outer_" + e.prop.mapTypeId)
                                                        }
                                                    }
                                                    ), 250)
                                                }
                                                    .bind(this))
                                            }
                                                .bind(t)
                                        },
                                        getlatlng: {
                                            address: t.prop.address,
                                            callback: function (t) {
                                                t && ($(this).gmap3({
                                                    marker: {
                                                        latLng: t[0].geometry.location,
                                                        labelClass: "map-label",
                                                        options: {
                                                            icon: new google.maps.MarkerImage(i, new google.maps.Size(s[0], s[1]), new google.maps.Point(0, 0), new google.maps.Point(s[0] / 2, s[1] / 2))
                                                        }
                                                    }
                                                }),
                                                    $(this).gmap3("get").setCenter(new google.maps.LatLng(t[0].geometry.location.lat(), t[0].geometry.location.lng())))
                                            }
                                        },
                                        styledmaptype: 1 < t.prop.styles.length & !t.prop.mapTypeControl ? {
                                            id: "" + t.prefix,
                                            options: {
                                                name: "" + t.prefix
                                            },
                                            styles: t.prop.styles
                                        } : {}
                                    })
                                }
                                ), v.timeMin()),
                                !0
                        }
                    }, {
                        key: "init",
                        value: function () {
                            var t = this;
                            return !!r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "init", this).call(this) && (this.outer.classList.add("" + this.prefix),
                                this.created = !1,
                                this.map = !1,
                                this.googleMap = !1,
                                this.prop.init && this.create(),
                            {
                                create: this.create.bind(this),
                                created: function () {
                                    return t.created
                                },
                                map: function () {
                                    return t.map
                                },
                                googleMap: function () {
                                    return t.googleMap
                                },
                                prop: function () {
                                    return t.prop
                                },
                                changeProp: this.changeProp.bind(this)
                            })
                        }
                    }]),
                    e
            }(),
            p.prototype.Columns = function (t) {
                function e() {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    l(this, e);
                    var i = a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                    for (var s in i.prefix = i.prefix + "columns",
                        i.prop = Object.assign(i.prop, {
                            selector: "#" + i.prefix,
                            selectorItem: "#" + i.prefix,
                            columns: [0, 1, 2]
                        }),
                        t)
                        i.prop[s] = t[s];
                    return i
                }
                return h(e, p.prototype.Class),
                    n(e, [{
                        key: "check",
                        value: function () {
                            return !(!this.checkTypes({
                                obj: this.prop,
                                name: this.name,
                                console: this.prop.console,
                                vars: [["selector", "dom"], ["selectorItem", "dom"], ["columns", "numberArray"]]
                            }) || (this.firstLoad && this.getElements(),
                                this.moveItemsToParent(),
                                this.deleteColumns(),
                                this.createColumns(),
                                this.insertItems(),
                                this.firstLoad = !1))
                        }
                    }, {
                        key: "getElements",
                        value: function () {
                            return this.outer = this.prop.v.doc().querySelector(this.prop.selector),
                                this.outer.classList.add("" + this.prefix),
                                this.elements = this.outer.querySelectorAll(this.prop.selectorItem),
                                !0
                        }
                    }, {
                        key: "moveItemsToParent",
                        value: function () {
                            for (var t = 0; t < this.elements.length; t++)
                                this.outer.appendChild(this.elements[t]);
                            return !0
                        }
                    }, {
                        key: "deleteColumns",
                        value: function () {
                            this.outer.classList.remove(this.prefix + "_" + this.columns.length);
                            for (var t = 0; t < this.columns.length; t++)
                                this.outer.removeChild(this.columns[t]);
                            return this.columns = [],
                                !(this.lastColumn = 0)
                        }
                    }, {
                        key: "createColumns",
                        value: function () {
                            this.outer.classList.add(this.prefix + "_" + this.prop.columns.length);
                            for (var t = 0; t < this.prop.columns.length; t++) {
                                var e = document.createElement("div");
                                e.classList.add(this.prefix + "__column"),
                                    e.classList.add(this.prefix + "__column_" + t),
                                    this.outer.appendChild(e),
                                    this.columns.push(e)
                            }
                            return !0
                        }
                    }, {
                        key: "insertItems",
                        value: function () {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : this.elements
                                , e = 0;
                            t !== this.elements && (e = this.lastColumn + 1) >= this.prop.columns.length && (e = 0);
                            for (var i = 0, s = e; i < t.length; s++,
                                i++) {
                                var r = this.prop.columns[s];
                                this.columns[r].appendChild(t[i]),
                                    (this.lastColumn = s) >= this.prop.columns.length - 1 && (s = -1)
                            }
                            return !0
                        }
                    }, {
                        key: "addItem",
                        value: function () {
                            var t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                            return !!this.checkType("htmlElement", t) && (this.insertItems([t]),
                                !0)
                        }
                    }, {
                        key: "addHtml",
                        value: function () {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "";
                            if (!this.checkType("string", t))
                                return !1;
                            var e = document.createElement("html");
                            e.innerHTML = t;
                            for (var i = e.querySelectorAll(this.prop.selectorItem), s = 0; s < i.length; s++)
                                this.addItem(i[s]);
                            return !0
                        }
                    }, {
                        key: "init",
                        value: function () {
                            var t = this;
                            return this.firstLoad = !0,
                                this.outer = null,
                                this.elements = [],
                                this.columns = [],
                                this.lastColumn = 0,
                                !!r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "init", this).call(this) && {
                                    addHtml: this.addHtml.bind(this),
                                    addItem: this.addItem.bind(this),
                                    getElements: this.getElements.bind(this),
                                    prop: function () {
                                        return t.prop
                                    },
                                    changeProp: this.changeProp.bind(this)
                                }
                        }
                    }]),
                    e
            }(),
            p.prototype.Clear = function (t) {
                function e() {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    l(this, e);
                    var i = a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                    for (var s in i.prefix = i.prefix + "clear",
                        i.prop = Object.assign(i.prop, {
                            selector: "#" + i.prefix,
                            selectorItem: "." + i.prefix + "__item",
                            skipClass: i.prefix + "__skip",
                            step: 2
                        }),
                        t)
                        i.prop[s] = t[s];
                    return i
                }
                return h(e, p.prototype.Class),
                    n(e, [{
                        key: "check",
                        value: function () {
                            return !!this.checkTypes({
                                obj: this.prop,
                                name: this.name,
                                console: this.prop.console,
                                vars: [["selector", "dom"], ["selectorItem", "dom"], ["skipClass", "string"], ["step", "integer"]]
                            }) && (this.getElements(),
                                this.addClears(),
                                !0)
                        }
                    }, {
                        key: "getElements",
                        value: function () {
                            return this.outer = this.prop.v.doc().querySelector(this.prop.selector),
                                this.outer.classList.add("" + this.prefix),
                                this.elements = this.outer.querySelectorAll(this.prop.selectorItem),
                                !0
                        }
                    }, {
                        key: "moveItemsToParent",
                        value: function () {
                            for (var t = 0; t < this.elements.length; t++)
                                this.outer.appendChild(this.elements[t]);
                            return !0
                        }
                    }, {
                        key: "removeClears",
                        value: function () {
                            for (var t = 0; t < this.clears.length; t++)
                                this.childOf(this.clears[t], this.outer) && this.outer.removeChild(this.clears[t]);
                            this.clears = [];
                            for (var e = 0; e < this.elements.length; e++)
                                for (var i = 0; i <= this.lastStep; i++)
                                    this.elements[e].classList.remove(this.prefix + "__item_" + i);
                            return this.lastStep = this.prop.step,
                                !0
                        }
                    }, {
                        key: "addClears",
                        value: function () {
                            this.lastStep !== this.prop.step && this.removeClears();
                            for (var t = 0, e = 0; t < this.elements.length; t++)
                                if (!this.elements[t].classList.contains(this.prop.skipClass)) {
                                    if (e > this.prop.step - 1 && (e = 0),
                                        this.elements[t].classList.add(this.prefix + "__item_" + e),
                                        e == this.prop.step - 1 && null !== this.elements[t].nextElementSibling) {
                                        if (this.elements[t].nextElementSibling.classList.contains(this.prefix + "__clear")) {
                                            e++;
                                            continue
                                        }
                                        var i = document.createElement("div");
                                        i.classList.add(this.prefix + "__clear"),
                                            i.classList.add("clear"),
                                            this.insertAfter(this.elements[t], i, this.outer),
                                            this.clears.push(i)
                                    }
                                    e++
                                }
                        }
                    }, {
                        key: "addItem",
                        value: function () {
                            var t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                            return !!this.checkType("htmlElement", t) && (this.outer.appendChild(t),
                                this.getElements(),
                                this.addClears(),
                                !0)
                        }
                    }, {
                        key: "addHtml",
                        value: function () {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "";
                            if (!this.checkType("string", t))
                                return !1;
                            var e = document.createElement("html");
                            e.innerHTML = t;
                            for (var i = e.querySelectorAll(this.prop.selectorItem), s = 0; s < i.length; s++)
                                this.addItem(i[s]);
                            return !0
                        }
                    }, {
                        key: "init",
                        value: function () {
                            var t = this;
                            return this.outer = null,
                                this.elements = [],
                                this.clears = [],
                                this.lastStep = 0,
                                !!r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "init", this).call(this) && {
                                    prop: function () {
                                        return t.prop
                                    },
                                    changeProp: this.changeProp.bind(this),
                                    getElements: this.getElements.bind(this),
                                    removeClears: this.removeClears.bind(this),
                                    addClears: this.addClears.bind(this),
                                    addHtml: this.addHtml.bind(this),
                                    addItem: this.addItem.bind(this)
                                }
                        }
                    }]),
                    e
            }(),
            p.prototype.ElasticButton = function (t) {
                function e() {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    l(this, e);
                    var i = a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                    for (var s in i.prefix = i.prefix + "elasticButton",
                        i.dataPrefix = "data-" + i.prefix,
                        i.prop = Object.assign(i.prop, {
                            selector: "#" + i.prefix,
                            run: !0,
                            widthSegments: 10,
                            padding: 20,
                            lineWidth: 2,
                            buldge: 5,
                            color: "#000",
                            fillColor: "#ccc",
                            opacity: 1,
                            noStroke: !1,
                            lineIn: 1,
                            tapScale: 2
                        }),
                        t)
                        i.prop[s] = t[s];
                    return i.targets = ["mouseover", "mouseleave", "mousemove", "mousedown", "mouseup"],
                        i
                }
                return h(e, p.prototype.Class),
                    n(e, [{
                        key: "check",
                        value: function () {
                            return !!this.checkTypes({
                                obj: this.prop,
                                name: this.name,
                                console: this.prop.console,
                                vars: [["selector", "dom"], ["run", "boolean"], ["widthSegments", "integer"], ["lineWidth", "number"], ["buldge", "integer"], ["color", "string"], ["fillColor", "string"], ["opacity", "number"], ["noStroke", "boolean"], ["lineIn", "number"], ["tapScale", "number"]]
                            })
                        }
                    }, {
                        key: "changeProp",
                        value: function (t) {
                            return !!r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "changeProp", this).call(this, t) && (this.run(),
                                !0)
                        }
                    }, {
                        key: "setVars",
                        value: function () {
                            this.animPow = 50,
                                this.wiggleDis = 10,
                                this.wigglePow = .5,
                                this.MOUSE_ATTRACT_DIS = 130,
                                this.TAP_POWER = 1,
                                this.maskP = 1,
                                this.maskSpeed = 0,
                                this.preMaskP = 1,
                                this.gradientX = 1,
                                this.gradientP = 0,
                                this.gradientAlpha = 0,
                                this.DRAG = .2,
                                this.DIS_DRAG = .15,
                                this.ELASTIC = .65,
                                this.DIS_ELASTIC = -.05,
                                this.fill = {
                                    value: 0,
                                    velocity: 0
                                }
                        }
                    }, {
                        key: "create",
                        value: function () {
                            return this.update(),
                                null !== this.resizeID && (this.prop.v.deleteResize(this.resizeID),
                                    this.resizeID = null),
                                this.resizeID = this.prop.v.addResize(["wh", this.setSize.bind(this), this.prop.v.timeMin()]),
                                !0
                        }
                    }, {
                        key: "update",
                        value: function () {
                            this.outers = this.prop.v.doc().querySelectorAll(this.prop.selector);
                            for (var t = 0; t < this.outers.length; t++)
                                this.outers[t].getAttribute(this.data.proceeded) || (this.outers[t].setAttribute(this.data.proceeded, "true"),
                                    this.outers[t].classList.add("" + this.prefix),
                                    this.createCanvas(this.outers[t]),
                                    this.el.push(this.outers[t]),
                                    this.setEvents(this.outers[t]));
                            this.setSize()
                        }
                    }, {
                        key: "createCanvas",
                        value: function (t) {
                            t.innerHTML = "<span>" + t.innerHTML + "</span>",
                                t[this.var.points] = [],
                                t[this.var.isActive] = !1,
                                t[this.var.needsUpdate] = !1,
                                t[this.var.updateTimeout] = null;
                            var e = t.getBoundingClientRect();
                            t[this.var.width] = e.width + 2 * this.prop.padding,
                                t[this.var.height] = e.height + 2 * this.prop.padding,
                                t[this.var.ctx] = Object(this.createCanvasObj)(t[this.var.width], t[this.var.height]),
                                t[this.var.ctx].canvas.style.top = "-" + this.prop.padding + "px",
                                t[this.var.ctx].canvas.style.left = "-" + this.prop.padding + "px",
                                t[this.var.temp] = Object(this.createCanvasObj)(t[this.var.width], t[this.var.height]),
                                t.appendChild(t[this.var.ctx].canvas)
                        }
                    }, {
                        key: "createCanvasObj",
                        value: function (t, e) {
                            var i = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2]
                                , s = arguments[3]
                                , r = document.createElement("canvas")
                                , n = r.getContext("2d")
                                , o = window.devicePixelRatio ? window.devicePixelRatio : 1;
                            return o = Math.max(o, 1),
                                r.width = t,
                                r.height = e,
                                r.style.width = t + "px",
                                r.style.height = e + "px",
                                i && (s && (o = Math.min(o, s)),
                                    r.width = t * o,
                                    r.height = e * o,
                                    n.scale(o, o)),
                                n
                        }
                    }, {
                        key: "createCanvasSize",
                        value: function (t, e, i) {
                            var s = !(3 < arguments.length && void 0 !== arguments[3]) || arguments[3]
                                , r = arguments[4]
                                , n = window.devicePixelRatio ? window.devicePixelRatio : 1;
                            n = Math.max(n, 1),
                                t.canvas.width = e,
                                t.canvas.height = i,
                                t.canvas.style.width = e + "px",
                                t.canvas.style.height = i + "px",
                                s && (r && (n = Math.min(n, r)),
                                    t.canvas.width = e * n,
                                    t.canvas.height = i * n,
                                    t.scale(n, n))
                        }
                    }, {
                        key: "setSize",
                        value: function () {
                            this.dpr = 1,
                                void 0 !== window.devicePixelRatio && (this.dpr = window.devicePixelRatio);
                            for (var t = 0; t < this.el.length; t++) {
                                var e = this.el[t].getBoundingClientRect()
                                    , i = this.el[t];
                                i[this.var.width] = e.width + 2 * this.prop.padding,
                                    i[this.var.height] = e.height + 2 * this.prop.padding,
                                    this.gradientTouchX = -i[this.var.width],
                                    Object(this.createCanvasSize)(i[this.var.ctx], i[this.var.width], i[this.var.height]),
                                    i[this.var.points] = [];
                                for (var s = e.height, r = e.height / 2, n = (e.width - 2 * r) / this.prop.widthSegments, o = this.prop.padding, a = 0; a < 2; a++)
                                    for (var h = s * a - (2 * a - 1) * this.prop.lineWidth + o, l = 0; l <= this.prop.widthSegments; l++) {
                                        var p = n * l + r + o
                                            , u = .1 * Math.abs(1 - l / (this.prop.widthSegments / 2))
                                            , d = .3 - .3 * Math.abs(1 - l / (this.prop.widthSegments / 2));
                                        i[this.var.points].push({
                                            pos: {
                                                x: p,
                                                y: h
                                            },
                                            fpos: {
                                                x: p,
                                                y: h
                                            },
                                            offset: {
                                                x: 0,
                                                y: 0
                                            },
                                            offsetSpeed: {
                                                x: 0,
                                                y: 0
                                            },
                                            elasticAdd: u,
                                            dragAdd: d,
                                            ydir: 2 * a - 1
                                        })
                                    }
                            }
                            this.renderCanvas(!0)
                        }
                    }, {
                        key: "renderCanvas",
                        value: function () {
                            for (var t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0], e = 0; e < this.el.length; e++)
                                if (!(!t & !this.el[e][this.var.needsUpdate])) {
                                    var i = this.el[e]
                                        , s = this.el[e].pos
                                        , r = this.getDynamicVars(i);
                                    i[this.var.isActive] && (r.buldge *= -1),
                                        i[this.var.ctx].globalCompositeOperation = "source-over";
                                    var n = i[this.var.width] * (1 - this.maskP);
                                    this.maskSpeed = this.maskP - this.preMaskP,
                                        this.preMaskP = this.maskP;
                                    for (var o = 0; o < i[this.var.points].length; o++) {
                                        var a = i[this.var.points][o]
                                            , h = {
                                                x: 0,
                                                y: 0
                                            }
                                            , l = 1;
                                        if (s) {
                                            var p = s.x - a.pos.x
                                                , u = s.y - a.pos.y
                                                , d = Math.sqrt(p * p + u * u);
                                            l = 1 - Math.max(0, (this.MOUSE_ATTRACT_DIS - d) / this.MOUSE_ATTRACT_DIS),
                                                h.x = 0,
                                                h.y = r.tapScale * a.ydir
                                        }
                                        h.y += Math.max(0, this.wiggleDis - Math.abs(n - a.fpos.x) * this.wigglePow) * this.maskSpeed * this.animPow * a.ydir,
                                            a.offsetSpeed.x = (h.x - a.offset.x) * (this.DRAG - this.DIS_DRAG * l + a.dragAdd) + a.offsetSpeed.x * (this.ELASTIC - this.DIS_ELASTIC * l + a.elasticAdd),
                                            a.offsetSpeed.y = (h.y + (1 - l) * a.ydir * r.buldge - a.offset.y + a.dragAdd) * (this.DRAG - this.DIS_DRAG * l) + a.offsetSpeed.y * (this.ELASTIC - this.DIS_ELASTIC * l + a.elasticAdd),
                                            a.offset.y += a.offsetSpeed.y,
                                            a.offset.x += a.offsetSpeed.x,
                                            a.fpos.y = a.offset.y + a.pos.y,
                                            a.fpos.x = a.offset.x + a.pos.x
                                    }
                                    var c = ((s ? .9 : 0) - this.fill.value) * (s ? .4 : .9);
                                    if (this.fill.velocity *= s ? .45 : .1,
                                        this.fill.velocity += c,
                                        this.fill.value += this.fill.velocity,
                                        i[this.var.ctx].clearRect(0, 0, i[this.var.width], i[this.var.height]),
                                        i[this.var.ctx].save(),
                                        i[this.var.ctx].beginPath(),
                                        i[this.var.ctx].strokeStyle = r.color,
                                        i[this.var.ctx].lineWidth = this.prop.lineWidth,
                                        this.drawOutline(i[this.var.ctx], i),
                                        r.noStroke || i[this.var.ctx].stroke(),
                                        i[this.var.ctx].globalAlpha = r.opacity,
                                        r.fillColor ? (i[this.var.ctx].globalAlpha = r.opacity,
                                            i[this.var.ctx].fillStyle = r.fillColor) : (i[this.var.ctx].globalAlpha = r.opacity,
                                                i[this.var.ctx].fillStyle = r.color,
                                                i[this.var.ctx].fill(),
                                                i[this.var.ctx].fillStyle = r.color),
                                        i[this.var.ctx].fill(),
                                        this.gradientAlpha -= .1 * this.gradientAlpha,
                                        i[this.var.ctx].restore(),
                                        this.prop.drawGradient) {
                                        var v = 2 * i[this.var.width] * (1 - this.gradientP) - i[this.var.width];
                                        s ? (this.gradientTouchX = (.5 * i[this.var.width] - s.x) * this.dpr,
                                            this.gradientX += .5 * (this.gradientTouchX - this.gradientX)) : (this.gradientX += .5 * (v - this.gradientX),
                                                this.gradientTouchX += .1 * (-i[this.var.width] - this.gradientTouchX));
                                        var f = i[this.var.width] / this.dpr
                                            , g = i[this.var.height] / this.dpr;
                                        i[this.var.temp].clearRect(0, 0, i[this.var.width], i[this.var.height]),
                                            i[this.var.temp].globalCompositeOperation = "source-over",
                                            i[this.var.temp].drawImage(i[this.var.top].canvas, this.gradientX, 0, f, g, 0, 0, f, g),
                                            i[this.var.temp].globalCompositeOperation = "destination-in",
                                            i[this.var.temp].drawImage(i[this.var.ctx].canvas, 0, 0, f, g, 0, 0, f, g),
                                            i[this.var.ctx].globalCompositeOperation = "screen",
                                            i[this.var.ctx].globalAlpha = this.gradientAlpha,
                                            i[this.var.ctx].drawImage(i[this.var.temp].canvas, 0, 0, f, g, 0, 0, f, g),
                                            i[this.var.ctx].globalAlpha = 1
                                    }
                                    this.maskP < 1 && (i[this.var.ctx].globalCompositeOperation = "destination-in",
                                        i[this.var.ctx].fillRect(n, 0, i[this.var.width], i[this.var.height])),
                                        i[this.var.ctx].globalCompositeOperation = "source-over",
                                        i[this.var.ctx].beginPath();
                                    var m = i[this.var.points].length / 2 - 1
                                        , y = i[this.var.points].length - 1
                                        , b = (i[this.var.points][m].fpos.x + i[this.var.points][y].fpos.x) / 2
                                        , _ = (i[this.var.points][m].fpos.y,
                                            i[this.var.points][y].fpos.y,
                                            (i[this.var.points][m + 1].fpos.x + i[this.var.points][0].fpos.x) / 2)
                                        , x = (i[this.var.points][m + 1].fpos.y,
                                            i[this.var.points][0].fpos.y,
                                            b + .5 * Math.abs(i[this.var.points][m].fpos.y - i[this.var.points][y].fpos.y))
                                        , k = _ - .5 * Math.abs(i[this.var.points][m + 1].fpos.y - i[this.var.points][0].fpos.y);
                                    i[this.var.ctx].moveTo(Math.max(k, Math.min(x, (4 * r.lineIn - 3) * i[this.var.width])), .5 * i[this.var.height]),
                                        i[this.var.ctx].lineTo(Math.max(k, Math.min(x, i[this.var.width] * r.lineIn)), .5 * i[this.var.height]),
                                        i[this.var.ctx].closePath(),
                                        i[this.var.ctx].strokeStyle = r.color,
                                        i[this.var.ctx].lineWidth = this.prop.lineWidth,
                                        i[this.var.ctx].stroke()
                                }
                        }
                    }, {
                        key: "drawOutline",
                        value: function (t, e) {
                            var i = e[this.var.points].length / 2 - 1
                                , s = e[this.var.points].length - 1
                                , r = (e[this.var.points][i].fpos.x + e[this.var.points][s].fpos.x) / 2
                                , n = (e[this.var.points][i].fpos.y + e[this.var.points][s].fpos.y) / 2
                                , o = (e[this.var.points][i + 1].fpos.x + e[this.var.points][0].fpos.x) / 2
                                , a = (e[this.var.points][i + 1].fpos.y + e[this.var.points][0].fpos.y) / 2
                                , h = Math.abs(e[this.var.points][i].fpos.y - e[this.var.points][s].fpos.y)
                                , l = Math.abs(e[this.var.points][i + 1].fpos.y - e[this.var.points][0].fpos.y);
                            t.moveTo(e[this.var.points][0].fpos.x, e[this.var.points][0].fpos.y);
                            for (var p = 1; p < e[this.var.points].length / 2; p++) {
                                var u = e[this.var.points][p];
                                t.lineTo(u.fpos.x, u.fpos.y)
                            }
                            for (t.arc(r, n, .5 * h, .5 * -Math.PI, .5 * Math.PI),
                                p = s; i < p; p--)
                                u = e[this.var.points][p],
                                    t.lineTo(u.fpos.x, u.fpos.y);
                            t.arc(o, a, .5 * l, .5 * +Math.PI, .5 * -Math.PI)
                        }
                    }, {
                        key: "getDynamicVars",
                        value: function (t) {
                            for (var e = {}, i = 0; i < this.dynamicVars.length; i++) {
                                var s = this.dynamicVars[i]
                                    , r = t.getAttribute(this.dataPrefix + "-" + s)
                                    , n = null;
                                null !== r ? "buldge" == s ? n = parseInt(r) : "color" == s || "fillColor" == s ? n = r : "opacity" == s ? n = parseFloat(r) : "noStroke" == s ? n = !!r : ("lineIn" == s || "tapScale" == s) && (n = parseFloat(r)) : n = this.prop[s],
                                    e[s] = n
                            }
                            return e
                        }
                    }, {
                        key: "setEvents",
                        value: function (t) {
                            t.pos = !1,
                                this.addEventListener({
                                    el: t,
                                    target: "mouseover",
                                    do: this.onMouseOver.bind(this, t)
                                }),
                                this.addEventListener({
                                    el: t,
                                    target: "mouseleave",
                                    do: this.onMouseLeave.bind(this, t)
                                }),
                                this.addEventListener({
                                    el: t,
                                    target: "mousemove",
                                    do: this.onMouseMove.bind(this, t)
                                }),
                                this.addEventListener({
                                    el: t,
                                    target: "mousedown",
                                    do: this.onMouseDown.bind(this, t)
                                })
                        }
                    }, {
                        key: "setEventsUniversal",
                        value: function () {
                            this.addEventListener({
                                el: window,
                                target: "mouseup",
                                do: this.onMouseUp.bind(this)
                            })
                        }
                    }, {
                        key: "onMouseOver",
                        value: function (t, e) {
                            t[this.var.needsUpdate] = !0,
                                null != t[this.var.updateTimeout] && (clearInterval(t[this.var.updateTimeout]),
                                    t[this.var.updateTimeout] = null),
                                this.launchEventsByTarget("mouseover", {
                                    el: t,
                                    e: e
                                })
                        }
                    }, {
                        key: "onMouseLeave",
                        value: function (t, e) {
                            t.pos = !1,
                                t[this.var.updateTimeout] = setTimeout(function () {
                                    t[this.var.needsUpdate] = !1,
                                        t[this.var.updateTimeout] = null
                                }
                                    .bind(this), 500),
                                this.launchEventsByTarget("mouseleave", {
                                    el: t,
                                    e: e
                                })
                        }
                    }, {
                        key: "onMouseMove",
                        value: function (t, e) {
                            t.pos = {
                                x: e.offsetX,
                                y: e.offsetY
                            },
                                this.launchEventsByTarget("mousemove", {
                                    el: t,
                                    e: e
                                })
                        }
                    }, {
                        key: "onMouseDown",
                        value: function (t, e) {
                            t[this.var.isActive] = !0,
                                this.launchEventsByTarget("mousedown", {
                                    el: t,
                                    e: e
                                })
                        }
                    }, {
                        key: "onMouseUp",
                        value: function (t) {
                            for (var e = 0; e < this.el.length; e++)
                                this.el[e][this.var.isActive] = !1;
                            this.launchEventsByTarget("mouseup", {
                                e: t
                            })
                        }
                    }, {
                        key: "run",
                        value: function () {
                            this.prop.run & !this.running && (this.running = !0,
                                window.requestAnimationFrame(this.loop.bind(this)))
                        }
                    }, {
                        key: "loop",
                        value: function () {
                            this.prop.run ? window.requestAnimationFrame(this.loop.bind(this)) : this.running = !1,
                                this.renderCanvas()
                        }
                    }, {
                        key: "clearPos",
                        value: function () {
                            for (var t = 0; t < this.el.length; t++)
                                this.el[t].pos = null
                        }
                    }, {
                        key: "init",
                        value: function () {
                            this.data = {
                                proceeded: this.dataPrefix + "-proceeded"
                            },
                                this.var = {
                                    isActive: this.prefix + "-isActive",
                                    needsUpdate: this.prefix + "-needsUpdate",
                                    updateTimeout: this.prefix + "-updateTimeout",
                                    points: this.prefix + "-points",
                                    width: this.prefix + "-width",
                                    height: this.prefix + "-height",
                                    ctx: this.prefix + "-ctx",
                                    temp: this.prefix + "-temp"
                                },
                                this.dynamicVars = ["buldge", "color", "fillColor", "opacity", "noStroke", "lineIn", "tapScale"],
                                this.running = !1,
                                this.resizeID = null,
                                this.el = [];
                            var t = r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "init", this).call(this);
                            return !!t && (this.setVars(),
                                this.create(),
                                this.setEventsUniversal(),
                                this.run(),
                                Object.assign(t, {
                                    update: this.update.bind(this),
                                    clearPos: this.clearPos.bind(this),
                                    setSize: this.setSize.bind(this),
                                    renderCanvas: this.renderCanvas.bind(this)
                                }))
                        }
                    }]),
                    e
            }(),
            p.prototype.Cart = function (t) {
                function e() {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    l(this, e);
                    var i = a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                    for (var s in i.prefix = i.prefix + "cart",
                        i.prop = Object.assign(i.prop, {
                            urls: {
                                add: "",
                                addArray: "",
                                remove: "",
                                removeArray: "",
                                change: "",
                                changeArray: "",
                                update: ""
                            },
                            initLoad: !0,
                            separator: ",",
                            selectorTotal: "." + i.prefix + "__total",
                            selectorAdd: "." + i.prefix + "__add",
                            total: 0
                        }),
                        t)
                        i.prop[s] = t[s];
                    return i.targets = ["start", "html", "total", "add", "change", "remove"],
                        i
                }
                return h(e, p.prototype.Class),
                    n(e, [{
                        key: "check",
                        value: function () {
                            var t = this.checkTypes({
                                obj: this.prop,
                                name: this.name,
                                console: this.prop.console,
                                vars: [["urls", "object"], ["initLoad", "boolean"], ["separator", "string"], ["selectorTotal", "string"], ["selectorAdd", "string"], ["total", "integer"]]
                            });
                            return !!t && !!(t = this.checkTypes({
                                obj: this.prop.urls,
                                name: this.name,
                                console: this.prop.console,
                                vars: [["add", "string"], ["addArray", "string"], ["remove", "string"], ["removeArray", "string"], ["change", "string"], ["changeArray", "string"], ["update", "string"]]
                            }))
                        }
                    }, {
                        key: "start",
                        value: function () {
                            this.prop.initLoad && this.loadHTML(),
                                this.totalGet(),
                                this.totalSet(),
                                this.setAdd(),
                                this.launchEventsByTarget("start")
                        }
                    }, {
                        key: "setAdd",
                        value: function () {
                            for (var t = this.prop.v.doc().querySelectorAll(this.prop.selectorAdd), e = 0; e < t.length; e++)
                                void 0 === t[e][this.data.proceeded] && (t[e].addEventListener("click", this.eventAdd.bind(this, t[e])),
                                    t[e][this.data.proceeded] = !0)
                        }
                    }, {
                        key: "loadHTML",
                        value: function () {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : function () { }
                                ;
                            this.prop.v.ajax({
                                url: this.prop.urls.update,
                                method: "post",
                                data: {
                                    ajaxCart: 1
                                },
                                callback: this.loadHTMLCallback.bind(this, t),
                                fail: this.loadHTML.bind(this)
                            })
                        }
                    }, {
                        key: "loadHTMLCallback",
                        value: function (t, e) {
                            t(this.html = e),
                                this.launchEventsByTarget("html", {
                                    html: e
                                })
                        }
                    }, {
                        key: "set",
                        value: function (t) {
                            var e = this.setCheck(t);
                            if (!e)
                                return !1;
                            var i = this.setCreate(e);
                            return this.obj[i.id] = i,
                                this.setElements(i),
                                !0
                        }
                    }, {
                        key: "setCheck",
                        value: function (t) {
                            var e = {
                                selector: "#" + this.prefix,
                                selectorProduct: "." + this.prefix + "__product",
                                selectorItem: "." + this.prefix + "__item",
                                selectorRemove: "." + this.prefix + "__remove",
                                selectorCount: "." + this.prefix + "__count",
                                selectorPlus: "." + this.prefix + "__plus",
                                selectorMinus: "." + this.prefix + "__minus",
                                selectorUpdate: "." + this.prefix + "__update"
                            };
                            for (var i in t)
                                e[i] = t[i];
                            if (!this.checkTypes({
                                obj: e,
                                name: this.name,
                                console: this.prop.console,
                                vars: [["selector", "dom"], ["selectorProduct", "string"], ["selectorItem", "string"], ["selectorRemove", "string"], ["selectorPlus", "string"], ["selectorMinus", "string"], ["selectorCount", "string"], ["selectorUpdate", "string"]]
                            }))
                                return !1;
                            var s = this.prop.v.doc().querySelector(e.selector);
                            return void 0 === s[this.data.proceeded] && (s[this.data.proceeded] = !0,
                                e)
                        }
                    }, {
                        key: "setCreate",
                        value: function (t) {
                            var e = this.prop.v.doc().querySelector(t.selector);
                            return {
                                id: this.prefix + "_" + +new Date + "_" + this.randInt(0, 1e3),
                                prop: t,
                                outer: e,
                                remove: [],
                                plus: [],
                                minus: [],
                                count: []
                            }
                        }
                    }, {
                        key: "setElements",
                        value: function (t) {
                            this.setRemove(t),
                                this.setCount(t),
                                this.setPlus(t),
                                this.setMinus(t)
                        }
                    }, {
                        key: "setRemove",
                        value: function (t) {
                            var e = t.outer.querySelectorAll(t.prop.selectorRemove);
                            t.remove = e;
                            for (var i = 0; i < e.length; i++)
                                void 0 === e[i][this.data.proceeded] && (e[i].addEventListener("click", this.eventRemove.bind(this, e[i])),
                                    e[i][this.data.proceeded] = !0)
                        }
                    }, {
                        key: "setCount",
                        value: function (t) {
                            var e = t.outer.querySelectorAll(t.prop.selectorCount);
                            t.count = e;
                            for (var i = 0; i < e.length; i++)
                                void 0 === e[i][this.data.proceeded] && ("INPUT" == e[i].tagName || "TEXTAREA" == e[i].tagName ? (e[i].addEventListener("keypress", this.eventChangeKeypress.bind(this, t, e[i])),
                                    e[i].addEventListener("blur", this.eventChangeValue.bind(this, t, e[i])),
                                    void 0 === e[i][this.data.prevValue] && (e[i][this.data.prevValue] = parseInt(e[i].value))) : void 0 === e[i][this.data.prevValue] && (e[i][this.data.prevValue] = parseInt(e[i].innerText)),
                                    e[i][this.data.proceeded] = !0)
                        }
                    }, {
                        key: "setPlus",
                        value: function (t) {
                            var e = t.outer.querySelectorAll(t.prop.selectorPlus);
                            t.plus = e;
                            for (var i = 0; i < e.length; i++)
                                void 0 === e[i][this.data.proceeded] && (e[i].addEventListener("click", this.eventPlusMinus.bind(this, t, e[i], "plus")),
                                    e[i][this.data.proceeded] = !0)
                        }
                    }, {
                        key: "setMinus",
                        value: function (t) {
                            var e = t.outer.querySelectorAll(t.prop.selectorMinus);
                            t.minus = e;
                            for (var i = 0; i < e.length; i++)
                                void 0 === e[i][this.data.proceeded] && (e[i].addEventListener("click", this.eventPlusMinus.bind(this, t, e[i], "minus")),
                                    e[i][this.data.proceeded] = !0)
                        }
                    }, {
                        key: "loadingCheck",
                        value: function () {
                            return !this.loading
                        }
                    }, {
                        key: "getIds",
                        value: function (t) {
                            return "number" == typeof t && (t += ""),
                                "string" == typeof t && (t = t.split(this.prop.separator)),
                                t
                        }
                    }, {
                        key: "eventRemove",
                        value: function (t, e) {
                            if (e.preventDefault(),
                                !this.loadingCheck())
                                return !1;
                            var i = t.getAttribute(this.data.id);
                            if (null == i)
                                return !1;
                            this.remove(i)
                        }
                    }, {
                        key: "remove",
                        value: function (t) {
                            if (!this.loadingCheck())
                                return !1;
                            this.loading = !0;
                            var e = "";
                            1 == (t = this.getIds(t)).length ? (e = this.prop.urls.remove,
                                t = t[0]) : e = this.prop.urls.removeArray,
                                this.prop.v.ajax({
                                    url: e,
                                    method: "post",
                                    data: {
                                        ajaxCart: 1,
                                        id: t
                                    },
                                    callback: this.actionCallback.bind(this, "remove"),
                                    fail: this.remove.bind(this, t)
                                })
                        }
                    }, {
                        key: "eventChangeKeypress",
                        value: function (t, e, i) {
                            if (!this.loadingCheck())
                                return i.preventDefault(),
                                    !1;
                            var s = (i = i || window.event).which ? i.which : i.keyCode;
                            31 < s && (s < 48 || 57 < s) && i.preventDefault()
                        }
                    }, {
                        key: "eventChangeValue",
                        value: function (t, e, i) {
                            if (!this.loadingCheck())
                                return !1;
                            var s = e.getAttribute(this.data.id);
                            if (null == s)
                                return !1;
                            var r = ""
                                , n = !0;
                            if (e[this.data.prevValue] == (r = "INPUT" == e.tagName || "TEXTAREA" == e.tagName ? parseInt(e.value) : parseInt(e.innerText)) && (n = !1),
                                0 < r ? r < 10 && (r = "0" + r) : r = "0",
                                n || ("INPUT" == e.tagName || "TEXTAREA" == e.tagName ? e.value = r : e.innerHTML = r),
                                n) {
                                for (var o = [], a = 0; a < t.count.length; a++)
                                    t.count[a].getAttribute(this.data.id) == s && ("INPUT" == t.count[a].tagName || "TEXTAREA" == t.count[a].tagName ? t.count[a].value = r : t.count[a].innerHTML = r,
                                        t.count[a][this.data.prevValue] = parseInt(r),
                                        o.push(parseInt(r)));
                                this.change(s, o)
                            }
                        }
                    }, {
                        key: "eventPlusMinus",
                        value: function (t, e) {
                            var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "plus";
                            if (arguments[3].preventDefault(),
                                !this.loadingCheck())
                                return !1;
                            var s = e.getAttribute(this.data.id);
                            if (null == s)
                                return !1;
                            var r = 1;
                            "minus" == i && (r = -1);
                            for (var n = [], o = 0; o < t.count.length; o++)
                                if (t.count[o].getAttribute(this.data.id) == s) {
                                    var a = 0;
                                    "INPUT" == t.count[o].tagName || "TEXTAREA" == t.count[o].tagName ? (0 < (a = parseInt(t.count[o].value) + r) ? a < 10 && (a = "0" + a) : a = "0",
                                        t.count[o].value = a) : (0 < (a = parseInt(t.count[o].innerHTML) + r) ? a < 10 && (a = "0" + a) : a = "0",
                                            t.count[o].innerHTML = a),
                                        t.count[o][this.data.prevValue] = parseInt(a),
                                        n.push(parseInt(a))
                                }
                            this.change(s, n)
                        }
                    }, {
                        key: "change",
                        value: function (t, e) {
                            if (!this.loadingCheck())
                                return !1;
                            this.loading = !0;
                            var i = "";
                            1 == (t = this.getIds(t)).length ? (i = this.prop.urls.change,
                                t = t[0],
                                e = e[0]) : i = this.prop.urls.changeArray,
                                this.prop.v.ajax({
                                    url: i,
                                    method: "post",
                                    data: {
                                        ajaxCart: 1,
                                        id: t,
                                        quantity: e
                                    },
                                    callback: this.actionCallback.bind(this, "change"),
                                    fail: this.change.bind(this, t)
                                })
                        }
                    }, {
                        key: "isJSON",
                        value: function (t) {
                            return !!/^[\],:{}\s]*$/.test(t.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))
                        }
                    }, {
                        key: "eventAdd",
                        value: function (t, e) {
                            if (e.preventDefault(),
                                !this.loadingCheck())
                                return !1;
                            var i = t.getAttribute(this.data.data);
                            return null != i && !!this.isJSON(i) && (i = JSON.parse(i),
                                void this.addToCart(i))
                        }
                    }, {
                        key: "addToCart",
                        value: function () {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                            if (!this.loadingCheck())
                                return !1;
                            this.loading = !0;
                            var e = "";
                            e = 1 == Object.keys(t).length ? this.prop.urls.add : this.prop.urls.addArray,
                                t = Object.assign(t, {
                                    ajaxCart: 1
                                }),
                                this.prop.v.ajax({
                                    url: e,
                                    method: "post",
                                    data: t,
                                    callback: this.actionCallback.bind(this, "add"),
                                    fail: this.addToCart.bind(this, t)
                                })
                        }
                    }, {
                        key: "actionCallback",
                        value: function () {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ""
                                , e = arguments[1];
                            "string" == typeof e && (e = JSON.parse(e));
                            var i = parseInt(e.success)
                                , s = parseInt(e.count);
                            if (1 != i)
                                return !1;
                            this.update(t),
                                this.totalSet(s)
                        }
                    }, {
                        key: "update",
                        value: function () {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "";
                            this.loadHTML(this.updateCallback.bind(this, t))
                        }
                    }, {
                        key: "updateCallback",
                        value: function (t, e) {
                            var i = document.createElement("html");
                            i.innerHTML = e,
                                this.updateElements(i),
                                this.updateItems(i, "selectorItem"),
                                this.updateItems(i, "selectorProduct", this.data.idProduct),
                                this.launchEventsByTarget(t, {}),
                                this.loading = !1
                        }
                    }, {
                        key: "updateElements",
                        value: function (t) {
                            for (var e in this.obj)
                                for (var i = this.obj[e].outer.querySelectorAll(this.obj[e].prop.selectorUpdate), s = t.querySelectorAll(this.obj[e].prop.selectorUpdate), r = 0; r < i.length; r++)
                                    for (var n = i[r].getAttribute(this.data.update), o = 0; o < s.length; o++)
                                        s[o].getAttribute(this.data.update) == n && (i[r].innerHTML = s[o].innerHTML)
                        }
                    }, {
                        key: "updateItems",
                        value: function (t) {
                            var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "selectorItem"
                                , i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : this.data.id;
                            for (var s in this.obj)
                                for (var r = this.obj[s].outer.querySelectorAll(this.obj[s].prop[e]), n = t.querySelectorAll(this.obj[s].prop[e]), o = 0; o < r.length; o++) {
                                    for (var a = r[o].getAttribute(i), h = !1, l = 0; l < n.length; l++)
                                        n[l].getAttribute(i) == a && (h = !0);
                                    h || $(r[o]).stop().slideUp(350, function (t) {
                                        t.parentNode.removeChild(t)
                                    }
                                        .bind(this, r[o]))
                                }
                        }
                    }, {
                        key: "totalGet",
                        value: function () {
                            this.totals = this.prop.v.doc().querySelectorAll(this.prop.selectorTotal)
                        }
                    }, {
                        key: "totalSet",
                        value: function () {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : this.prop.total;
                            t < 10 && (t = "0" + t);
                            for (var e = 0; e < this.totals.length; e++)
                                0 < t ? this.totals[e].classList.add(this.prefix + "__total_empty") : this.totals[e].classList.remove(this.prefix + "__total_empty"),
                                    this.totals[e].innerHTML = t;
                            this.total = parseInt(t),
                                this.launchEventsByTarget("total", {
                                    total: this.total
                                })
                        }
                    }, {
                        key: "init",
                        value: function () {
                            var t = this;
                            this.data = {
                                proceeded: this.prefix + "-proceeded",
                                prevValue: this.prefix + "-prevValue",
                                id: "data-" + this.prefix + "-id",
                                idProduct: "data-" + this.prefix + "-id-product",
                                data: "data-" + this.prefix + "-data",
                                update: "data-" + this.prefix + "-update"
                            },
                                this.html = "",
                                this.loading = !1,
                                this.obj = {};
                            var i = r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "init", this).call(this);
                            return !!i && (this.total = 0,
                                this.totals = [],
                                this.start(),
                                Object.assign(i, {
                                    html: function () {
                                        return t.html
                                    },
                                    loading: function () {
                                        return t.loading
                                    },
                                    set: this.set.bind(this),
                                    obj: function () {
                                        return t.obj
                                    },
                                    update: this.update.bind(this),
                                    remove: this.remove.bind(this),
                                    change: this.change.bind(this),
                                    addToCart: this.addToCart.bind(this),
                                    total: function () {
                                        return t.total
                                    },
                                    totalGet: this.totalGet.bind(this),
                                    totalSet: this.totalSet.bind(this),
                                    setAdd: this.setAdd.bind(this)
                                }))
                        }
                    }]),
                    e
            }(),
            p.prototype.init = function () {
                var t = this;
                if (!this.checkTypes({
                    obj: this.prop,
                    name: this.name,
                    console: this.prop.console,
                    vars: [["console", "boolean"], ["page", "string"], ["tablet", "integer"], ["mobile", "integer"]]
                }))
                    return !1;
                this.loadEvent(),
                    this.setPage(),
                    this.os = this.setOS(),
                    this.document.classList.add(this.prefix + "os_" + this.os),
                    this.console("OS: " + this.os),
                    this.browser = this.setBrowser(),
                    this.document.classList.add(this.prefix + "browser_" + this.browser),
                    this.console("Browser: " + this.browser),
                    this.popState(),
                    this.viewport = new this.Viewport(this.prop),
                    this.viewport = this.viewport.init();
                var e = new this.Keydown({
                    console: this.prop.console
                });
                e = e.init();
                var i = new this.Swipe({
                    console: this.prop.console
                });
                i = i.init();
                var s = new this.Drag({
                    console: this.prop.console
                });
                s = s.init();
                var r = new this.Wheel({
                    console: this.prop.console
                });
                r = r.init();
                var n = new this.Interval({
                    console: this.prop.console
                });
                return n = n.init(),
                {
                    prop: function () {
                        return t.prop
                    },
                    prefix: function () {
                        return t.prefix
                    },
                    time: function () {
                        return t.time
                    },
                    loaded: function () {
                        return t.loaded
                    },
                    addLoad: this.addLoad.bind(this),
                    deleteLoad: this.deleteLoad.bind(this),
                    checkType: this.checkType.bind(this),
                    checkTypes: this.checkTypes.bind(this),
                    childOf: this.childOf.bind(this),
                    removeChildren: this.removeChildren.bind(this),
                    insertAfter: this.insertAfter.bind(this),
                    bindEventListener: this.bindEventListener.bind(this),
                    getEventListener: this.getEventListener.bind(this),
                    unbindEventListener: this.unbindEventListener.bind(this),
                    getPage: function () {
                        return t.page
                    },
                    os: function () {
                        return t.os
                    },
                    browser: function () {
                        return t.browser
                    },
                    console: this.console.bind(this),
                    checkPage: this.checkPage.bind(this),
                    timeMin: function () {
                        return t.timeMin
                    },
                    ajaxTimeMax: function () {
                        return t.ajaxTimeMax
                    },
                    doc: function () {
                        return t.doc
                    },
                    document: function () {
                        return t.document
                    },
                    body: function () {
                        return t.body
                    },
                    viewport: this.viewport,
                    vw: this.viewport.vw.bind(this),
                    vh: this.viewport.vh.bind(this),
                    dpr: this.viewport.dpr.bind(this),
                    desktop: this.viewport.desktop.bind(this),
                    tablet: this.viewport.tablet.bind(this),
                    mobile: this.viewport.mobile.bind(this),
                    mobileCheck: this.mobileCheck.bind(this),
                    getResize: this.viewport.events.bind(this),
                    addResize: this.addResize.bind(this),
                    deleteResize: this.deleteResize.bind(this),
                    turnResize: this.turnResize.bind(this),
                    getParam: this.getParam.bind(this),
                    setParam: this.setParam.bind(this),
                    ajax: this.ajax.bind(this),
                    ajaxCache: function () {
                        return t.ajaxCache
                    },
                    ajaxClearCache: this.ajaxClearCache.bind(this),
                    bezier: this.bezier.bind(this),
                    depthPercent: this.depthPercent.bind(this),
                    randInt: this.randInt.bind(this),
                    radians: this.radians.bind(this),
                    degrees: this.degrees.bind(this),
                    imageSize: this.imageSize.bind(this),
                    Class: this.Class,
                    Event: this.Event,
                    keydown: e,
                    swipe: i,
                    drag: s,
                    wheel: r,
                    interval: n,
                    normalizeWheel: this.normalizeWheel,
                    Preloader: this.Preloader,
                    Scrollbar: this.Scrollbar,
                    Animate: this.Animate,
                    AnimationFrame: this.AnimationFrame,
                    TextAnimate: this.TextAnimate,
                    Slider: this.Slider,
                    SliderCanvas: this.SliderCanvas,
                    SliderContent: this.SliderContent,
                    Cursor: this.Cursor,
                    Menu: this.Menu,
                    Filter: this.Filter,
                    Media: this.Media,
                    AjaxContent: this.AjaxContent,
                    AjaxPage: this.AjaxPage,
                    Page: this.Page,
                    Anchor: this.Anchor,
                    ScrollEvents: this.ScrollEvents,
                    View: this.View,
                    Parallax: this.Parallax,
                    SmoothScroll: this.SmoothScroll,
                    Select: this.Select,
                    Audio: this.Audio,
                    Form: this.Form,
                    Popup: this.Popup,
                    Faq: this.Faq,
                    Map: this.Map,
                    Columns: this.Columns,
                    Clear: this.Clear,
                    SameHeight: this.SameHeight,
                    ElasticButton: this.ElasticButton,
                    Cart: this.Cart
                }
            }
    }
        , {}]
}, {}, [1]),
    function t(e, i, s) {
        function r(o, a) {
            if (!i[o]) {
                if (!e[o]) {
                    var h = "function" == typeof require && require;
                    if (!a && h)
                        return h(o, !0);
                    if (n)
                        return n(o, !0);
                    var l = new Error("Cannot find module '" + o + "'");
                    throw l.code = "MODULE_NOT_FOUND",
                    l
                }
                var p = i[o] = {
                    exports: {}
                };
                e[o][0].call(p.exports, (function (t) {
                    return r(e[o][1][t] || t)
                }
                ), p, p.exports, t, e, i, s)
            }
            return i[o].exports
        }
        for (var n = "function" == typeof require && require, o = 0; o < s.length; o++)
            r(s[o]);
        return r
    }({
        1: [function (t, e, i) {
            "use strict";
            var s = function () {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var s = e[i];
                        s.enumerable = s.enumerable || !1,
                            s.configurable = !0,
                            "value" in s && (s.writable = !0),
                            Object.defineProperty(t, s.key, s)
                    }
                }
                return function (e, i, s) {
                    return i && t(e.prototype, i),
                        s && t(e, s),
                        e
                }
            }()
                , r = function t(e, i, s) {
                    null === e && (e = Function.prototype);
                    var r = Object.getOwnPropertyDescriptor(e, i);
                    if (void 0 === r) {
                        var n = Object.getPrototypeOf(e);
                        return null === n ? void 0 : t(n, i, s)
                    }
                    if ("value" in r)
                        return r.value;
                    var o = r.get;
                    return void 0 !== o ? o.call(s) : void 0
                };
            function n(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }
            function o(t, e) {
                if (!t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }
            function a(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                    e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            v.addLoad(function () {
                v.document().classList.remove("v-none-transition")
            }
                .bind(void 0)),
                window.page = {
                    bezier: {
                        on: !0,
                        values: [.25, .1, .25, 1]
                    },
                    bezierText: {
                        on: !0,
                        values: [.25, .1, .25, 1]
                    },
                    current: !1,
                    scrollSelector: void 0,
                    preloaderAnimation: 150,
                    ajaxBool: !0
                },
                page.preloader = new v.Preloader({
                    console: !1,
                    animationInner: page.preloaderAnimation,
                    animation: 0
                }),
                page.preloader = page.preloader.init(),
                page.setFullHeight = function () {
                    for (var t = document.querySelectorAll(".fullHeight"), e = 0; e < t.length; e++)
                        t[e].style.height = v.vh()[1] + "px";
                    for (var i = document.querySelectorAll(".fullHeightMin"), s = 0; s < i.length; s++)
                        i[s].style.minHeight = v.vh()[1] + "px"
                }
                ,
                page.setFullHeight(),
                v.addLoad(page.setFullHeight.bind(void 0)),
                v.viewport.add({
                    target: "wh",
                    name: "Set FullHeight",
                    do: page.setFullHeight.bind(void 0),
                    timeout: 25
                }),
                page.helpers = {
                    getElements: function () {
                        return page.wrap = document.querySelector(".page-wrap"),
                            page.screen = document.querySelector(".page__screen"),
                            page.default = document.querySelector(".default"),
                            page.header = document.querySelector(".v-header"),
                            page.logo = document.querySelector(".v-header__logo"),
                            page.footer = document.querySelector(".v-footer"),
                            !0
                    },
                    changeAjaxElements: function () {
                        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
                        if (null === t)
                            return !1;
                        var e = {
                            old: document.querySelector(".v-header__logo"),
                            new: t.querySelector(".v-header__logo")
                        };
                        return null !== e.old & null !== e.new && (e.old.innerHTML = e.new.innerHTML),
                            page.helpers.getElements(),
                            !0
                    },
                    showAjaxHidden: function () {
                        for (var t = document.querySelectorAll(".ajax_hidden"), e = 0; e < t.length; e++)
                            t[e].classList.remove("ajax_hidden");
                        return !0
                    },
                    addLoadEvent: function () {
                        var t = this
                            , e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : function () { }
                            , i = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
                        return v.loaded() ? (e(),
                            i && (setTimeout(e.bind(this), 100),
                                setTimeout(e.bind(this), 200),
                                setTimeout(e.bind(this), 300))) : v.addLoad((function () {
                                    setTimeout(e.bind(t), 250)
                                }
                                )),
                            !0
                    },
                    scrollSelector: function () {
                        if (void 0 === page.scrollSelector)
                            return page.scrollSelector = "#v-scrollbar",
                                t(),
                                v.addResize(["w", function () {
                                    t()
                                }
                                    .bind(this), 125]),
                                !0;
                        function t() {
                            v.mobile() ? page.scrollSelector = "html" : page.scrollSelector = "#v-scrollbar"
                        }
                    }
                };
            var h = document.querySelector(".page__canvas");
            h.width = h.clientWidth,
                h.height = h.clientHeight;
            var l = {
                SIM_RESOLUTION: 128,
                DYE_RESOLUTION: 512,
                DENSITY_DISSIPATION: .97,
                VELOCITY_DISSIPATION: .98,
                PRESSURE_DISSIPATION: .8,
                PRESSURE_ITERATIONS: 20,
                CURL: 0,
                SPLAT_RADIUS: .25,
                SHADING: !0,
                COLORFUL: !0,
                PAUSED: !1,
                BACK_COLOR: {
                    r: 0,
                    g: 0,
                    b: 0
                },
                TRANSPARENT: !1,
                BLOOM: !0,
                BLOOM_ITERATIONS: 8,
                BLOOM_RESOLUTION: 256,
                BLOOM_INTENSITY: .85,
                BLOOM_THRESHOLD: .6,
                BLOOM_SOFT_KNEE: .7
            };
            function p() {
                this.id = -1,
                    this.x = 0,
                    this.y = 0,
                    this.dx = 0,
                    this.dy = 0,
                    this.down = !1,
                    this.moved = !1,
                    this.color = [30, 0, 300]
            }
            var u = []
                , d = []
                , c = [];
            u.push(new p);
            var f = function (t) {
                var e, i, s = {
                    alpha: !0,
                    depth: !1,
                    stencil: !1,
                    antialias: !1,
                    preserveDrawingBuffer: !1
                }, r = t.getContext("webgl2", s), n = !!r;
                n || (r = t.getContext("webgl", s) || t.getContext("experimental-webgl", s)),
                    n ? (r.getExtension("EXT_color_buffer_float"),
                        i = r.getExtension("OES_texture_float_linear")) : (e = r.getExtension("OES_texture_half_float"),
                            i = r.getExtension("OES_texture_half_float_linear")),
                    r.clearColor(0, 0, 0, 1);
                var o, a, h, l = n ? r.HALF_FLOAT : e.HALF_FLOAT_OES;
                return n ? (o = y(r, r.RGBA16F, r.RGBA, l),
                    a = y(r, r.RG16F, r.RG, l),
                    h = y(r, r.R16F, r.RED, l)) : (o = y(r, r.RGBA, r.RGBA, l),
                        a = y(r, r.RGBA, r.RGBA, l),
                        h = y(r, r.RGBA, r.RGBA, l)),
                {
                    gl: r,
                    ext: {
                        formatRGBA: o,
                        formatRG: a,
                        formatR: h,
                        halfFloatTexType: l,
                        supportLinearFiltering: i
                    }
                }
            }(h)
                , g = f.gl
                , m = f.ext;
            function y(t, e, i, s) {
                if (!function (t, e, i, s) {
                    var r = t.createTexture();
                    t.bindTexture(t.TEXTURE_2D, r),
                        t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.NEAREST),
                        t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.NEAREST),
                        t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE),
                        t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE),
                        t.texImage2D(t.TEXTURE_2D, 0, e, 4, 4, 0, i, s, null);
                    var n = t.createFramebuffer();
                    return t.bindFramebuffer(t.FRAMEBUFFER, n),
                        t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, r, 0),
                        t.checkFramebufferStatus(t.FRAMEBUFFER) == t.FRAMEBUFFER_COMPLETE
                }(t, e, i, s))
                    switch (e) {
                        case t.R16F:
                            return y(t, t.RG16F, t.RG, s);
                        case t.RG16F:
                            return y(t, t.RGBA16F, t.RGBA, s);
                        default:
                            return null
                    }
                return {
                    internalFormat: e,
                    format: i
                }
            }
            /Mobi|Android/i.test(navigator.userAgent) && (l.SHADING = !1),
                m.supportLinearFiltering || (l.SHADING = !1,
                    l.BLOOM = !1);
            var b = function (t, e) {
                if (this.uniforms = {},
                    this.program = g.createProgram(),
                    g.attachShader(this.program, t),
                    g.attachShader(this.program, e),
                    g.linkProgram(this.program),
                    !g.getProgramParameter(this.program, g.LINK_STATUS))
                    throw g.getProgramInfoLog(this.program);
                for (var i = g.getProgramParameter(this.program, g.ACTIVE_UNIFORMS), s = 0; s < i; s++) {
                    var r = g.getActiveUniform(this.program, s).name;
                    this.uniforms[r] = g.getUniformLocation(this.program, r)
                }
            };
            function _(t, e) {
                var i = g.createShader(t);
                if (g.shaderSource(i, e),
                    g.compileShader(i),
                    !g.getShaderParameter(i, g.COMPILE_STATUS))
                    throw g.getShaderInfoLog(i);
                return i
            }
            b.prototype.bind = function () {
                g.useProgram(this.program)
            }
                ;
            var x, k, w, E, T, L, A, S, C, O, I = _(g.VERTEX_SHADER, "\n    precision highp float;\n\n    attribute vec2 aPosition;\n    varying vec2 vUv;\n    varying vec2 vL;\n    varying vec2 vR;\n    varying vec2 vT;\n    varying vec2 vB;\n    uniform vec2 texelSize;\n\n    void main () {\n        vUv = aPosition * 0.5 + 0.5;\n        vL = vUv - vec2(texelSize.x, 0.0);\n        vR = vUv + vec2(texelSize.x, 0.0);\n        vT = vUv + vec2(0.0, texelSize.y);\n        vB = vUv - vec2(0.0, texelSize.y);\n        gl_Position = vec4(aPosition, 0.0, 1.0);\n    }\n"), P = _(g.FRAGMENT_SHADER, "\n    precision mediump float;\n    precision mediump sampler2D;\n\n    varying highp vec2 vUv;\n    uniform sampler2D uTexture;\n    uniform float value;\n\n    void main () {\n        gl_FragColor = value * texture2D(uTexture, vUv);\n    }\n"), z = _(g.FRAGMENT_SHADER, "\n    precision mediump float;\n\n    uniform vec4 color;\n\n    void main () {\n        gl_FragColor = color;\n    }\n"), D = _(g.FRAGMENT_SHADER, "\n    precision highp float;\n    precision highp sampler2D;\n\n    varying vec2 vUv;\n    uniform sampler2D uTexture;\n    uniform float aspectRatio;\n\n    #define SCALE 25.0\n\n    void main () {\n        vec2 uv = floor(vUv * SCALE * vec2(aspectRatio, 1.0));\n        float v = mod(uv.x + uv.y, 2.0);\n        v = v * 0.1 + 0.8;\n        gl_FragColor = vec4(vec3(v), 1.0);\n    }\n"), j = _(g.FRAGMENT_SHADER, "\n    precision highp float;\n    precision highp sampler2D;\n\n    varying vec2 vUv;\n    uniform sampler2D uTexture;\n\n    void main () {\n        vec3 C = texture2D(uTexture, vUv).rgb;\n        float a = max(C.r, max(C.g, C.b));\n        gl_FragColor = vec4(C, a);\n    }\n"), M = _(g.FRAGMENT_SHADER, "\n    precision highp float;\n    precision highp sampler2D;\n\n    varying vec2 vUv;\n    uniform sampler2D uTexture;\n    uniform sampler2D uBloom;\n    uniform sampler2D uDithering;\n    uniform vec2 ditherScale;\n\n    void main () {\n        vec3 C = texture2D(uTexture, vUv).rgb;\n        vec3 bloom = texture2D(uBloom, vUv).rgb;\n        vec3 noise = texture2D(uDithering, vUv * ditherScale).rgb;\n        noise = noise * 2.0 - 1.0;\n        bloom += noise / 800.0;\n        bloom = pow(bloom.rgb, vec3(1.0 / 2.2));\n        C += bloom;\n        float a = max(C.r, max(C.g, C.b));\n        gl_FragColor = vec4(C, a);\n    }\n"), R = _(g.FRAGMENT_SHADER, "\n    precision highp float;\n    precision highp sampler2D;\n\n    varying vec2 vUv;\n    varying vec2 vL;\n    varying vec2 vR;\n    varying vec2 vT;\n    varying vec2 vB;\n    uniform sampler2D uTexture;\n    uniform vec2 texelSize;\n\n    void main () {\n        vec3 L = texture2D(uTexture, vL).rgb;\n        vec3 R = texture2D(uTexture, vR).rgb;\n        vec3 T = texture2D(uTexture, vT).rgb;\n        vec3 B = texture2D(uTexture, vB).rgb;\n        vec3 C = texture2D(uTexture, vUv).rgb;\n\n        float dx = length(R) - length(L);\n        float dy = length(T) - length(B);\n\n        vec3 n = normalize(vec3(dx, dy, length(texelSize)));\n        vec3 l = vec3(0.0, 0.0, 1.0);\n\n        float diffuse = clamp(dot(n, l) + 0.7, 0.7, 1.0);\n        C.rgb *= diffuse;\n\n        float a = max(C.r, max(C.g, C.b));\n        gl_FragColor = vec4(C, a);\n    }\n"), B = _(g.FRAGMENT_SHADER, "\n    precision highp float;\n    precision highp sampler2D;\n\n    varying vec2 vUv;\n    varying vec2 vL;\n    varying vec2 vR;\n    varying vec2 vT;\n    varying vec2 vB;\n    uniform sampler2D uTexture;\n    uniform sampler2D uBloom;\n    uniform sampler2D uDithering;\n    uniform vec2 ditherScale;\n    uniform vec2 texelSize;\n\n    void main () {\n        vec3 L = texture2D(uTexture, vL).rgb;\n        vec3 R = texture2D(uTexture, vR).rgb;\n        vec3 T = texture2D(uTexture, vT).rgb;\n        vec3 B = texture2D(uTexture, vB).rgb;\n        vec3 C = texture2D(uTexture, vUv).rgb;\n\n        float dx = length(R) - length(L);\n        float dy = length(T) - length(B);\n\n        vec3 n = normalize(vec3(dx, dy, length(texelSize)));\n        vec3 l = vec3(0.0, 0.0, 1.0);\n\n        float diffuse = clamp(dot(n, l) + 0.7, 0.7, 1.0);\n        C *= diffuse;\n\n        vec3 bloom = texture2D(uBloom, vUv).rgb;\n        vec3 noise = texture2D(uDithering, vUv * ditherScale).rgb;\n        noise = noise * 2.0 - 1.0;\n        bloom += noise / 800.0;\n        bloom = pow(bloom.rgb, vec3(1.0 / 2.2));\n        C += bloom;\n\n        float a = max(C.r, max(C.g, C.b));\n        gl_FragColor = vec4(C, a);\n    }\n"), H = _(g.FRAGMENT_SHADER, "\n    precision mediump float;\n    precision mediump sampler2D;\n\n    varying vec2 vUv;\n    uniform sampler2D uTexture;\n    uniform vec3 curve;\n    uniform float threshold;\n\n    void main () {\n        vec3 c = texture2D(uTexture, vUv).rgb;\n        float br = max(c.r, max(c.g, c.b));\n        float rq = clamp(br - curve.x, 0.0, curve.y);\n        rq = curve.z * rq * rq;\n        c *= max(rq, br - threshold) / max(br, 0.0001);\n        gl_FragColor = vec4(c, 0.0);\n    }\n"), F = _(g.FRAGMENT_SHADER, "\n    precision mediump float;\n    precision mediump sampler2D;\n\n    varying vec2 vL;\n    varying vec2 vR;\n    varying vec2 vT;\n    varying vec2 vB;\n    uniform sampler2D uTexture;\n\n    void main () {\n        vec4 sum = vec4(0.0);\n        sum += texture2D(uTexture, vL);\n        sum += texture2D(uTexture, vR);\n        sum += texture2D(uTexture, vT);\n        sum += texture2D(uTexture, vB);\n        sum *= 0.25;\n        gl_FragColor = sum;\n    }\n"), U = _(g.FRAGMENT_SHADER, "\n    precision mediump float;\n    precision mediump sampler2D;\n\n    varying vec2 vL;\n    varying vec2 vR;\n    varying vec2 vT;\n    varying vec2 vB;\n    uniform sampler2D uTexture;\n    uniform float intensity;\n\n    void main () {\n        vec4 sum = vec4(0.0);\n        sum += texture2D(uTexture, vL);\n        sum += texture2D(uTexture, vR);\n        sum += texture2D(uTexture, vT);\n        sum += texture2D(uTexture, vB);\n        sum *= 0.25;\n        gl_FragColor = sum * intensity;\n    }\n"), N = _(g.FRAGMENT_SHADER, "\n    precision highp float;\n    precision highp sampler2D;\n\n    varying vec2 vUv;\n    uniform sampler2D uTarget;\n    uniform float aspectRatio;\n    uniform vec3 color;\n    uniform vec2 point;\n    uniform float radius;\n\n    void main () {\n        vec2 p = vUv - point.xy;\n        p.x *= aspectRatio;\n        vec3 splat = exp(-dot(p, p) / radius) * color;\n        vec3 base = texture2D(uTarget, vUv).xyz;\n        gl_FragColor = vec4(base + splat, 1.0);\n    }\n"), q = _(g.FRAGMENT_SHADER, "\n    precision highp float;\n    precision highp sampler2D;\n\n    varying vec2 vUv;\n    uniform sampler2D uVelocity;\n    uniform sampler2D uSource;\n    uniform vec2 texelSize;\n    uniform vec2 dyeTexelSize;\n    uniform float dt;\n    uniform float dissipation;\n\n    vec4 bilerp (sampler2D sam, vec2 uv, vec2 tsize) {\n        vec2 st = uv / tsize - 0.5;\n\n        vec2 iuv = floor(st);\n        vec2 fuv = fract(st);\n\n        vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);\n        vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);\n        vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);\n        vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);\n\n        return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);\n    }\n\n    void main () {\n        vec2 coord = vUv - dt * bilerp(uVelocity, vUv, texelSize).xy * texelSize;\n        gl_FragColor = dissipation * bilerp(uSource, coord, dyeTexelSize);\n        gl_FragColor.a = 1.0;\n    }\n"), V = _(g.FRAGMENT_SHADER, "\n    precision highp float;\n    precision highp sampler2D;\n\n    varying vec2 vUv;\n    uniform sampler2D uVelocity;\n    uniform sampler2D uSource;\n    uniform vec2 texelSize;\n    uniform float dt;\n    uniform float dissipation;\n\n    void main () {\n        vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;\n        gl_FragColor = dissipation * texture2D(uSource, coord);\n        gl_FragColor.a = 1.0;\n    }\n"), X = _(g.FRAGMENT_SHADER, "\n    precision mediump float;\n    precision mediump sampler2D;\n\n    varying highp vec2 vUv;\n    varying highp vec2 vL;\n    varying highp vec2 vR;\n    varying highp vec2 vT;\n    varying highp vec2 vB;\n    uniform sampler2D uVelocity;\n\n    void main () {\n        float L = texture2D(uVelocity, vL).x;\n        float R = texture2D(uVelocity, vR).x;\n        float T = texture2D(uVelocity, vT).y;\n        float B = texture2D(uVelocity, vB).y;\n\n        vec2 C = texture2D(uVelocity, vUv).xy;\n        if (vL.x < 0.0) { L = -C.x; }\n        if (vR.x > 1.0) { R = -C.x; }\n        if (vT.y > 1.0) { T = -C.y; }\n        if (vB.y < 0.0) { B = -C.y; }\n\n        float div = 0.5 * (R - L + T - B);\n        gl_FragColor = vec4(div, 0.0, 0.0, 1.0);\n    }\n"), G = _(g.FRAGMENT_SHADER, "\n    precision mediump float;\n    precision mediump sampler2D;\n\n    varying highp vec2 vUv;\n    varying highp vec2 vL;\n    varying highp vec2 vR;\n    varying highp vec2 vT;\n    varying highp vec2 vB;\n    uniform sampler2D uVelocity;\n\n    void main () {\n        float L = texture2D(uVelocity, vL).y;\n        float R = texture2D(uVelocity, vR).y;\n        float T = texture2D(uVelocity, vT).x;\n        float B = texture2D(uVelocity, vB).x;\n        float vorticity = R - L - T + B;\n        gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);\n    }\n"), W = _(g.FRAGMENT_SHADER, "\n    precision highp float;\n    precision highp sampler2D;\n\n    varying vec2 vUv;\n    varying vec2 vL;\n    varying vec2 vR;\n    varying vec2 vT;\n    varying vec2 vB;\n    uniform sampler2D uVelocity;\n    uniform sampler2D uCurl;\n    uniform float curl;\n    uniform float dt;\n\n    void main () {\n        float L = texture2D(uCurl, vL).x;\n        float R = texture2D(uCurl, vR).x;\n        float T = texture2D(uCurl, vT).x;\n        float B = texture2D(uCurl, vB).x;\n        float C = texture2D(uCurl, vUv).x;\n\n        vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));\n        force /= length(force) + 0.0001;\n        force *= curl * C;\n        force.y *= -1.0;\n\n        vec2 vel = texture2D(uVelocity, vUv).xy;\n        gl_FragColor = vec4(vel + force * dt, 0.0, 1.0);\n    }\n"), Y = _(g.FRAGMENT_SHADER, "\n    precision mediump float;\n    precision mediump sampler2D;\n\n    varying highp vec2 vUv;\n    varying highp vec2 vL;\n    varying highp vec2 vR;\n    varying highp vec2 vT;\n    varying highp vec2 vB;\n    uniform sampler2D uPressure;\n    uniform sampler2D uDivergence;\n\n    vec2 boundary (vec2 uv) {\n        return uv;\n        // uncomment if you use wrap or repeat texture mode\n        // uv = min(max(uv, 0.0), 1.0);\n        // return uv;\n    }\n\n    void main () {\n        float L = texture2D(uPressure, boundary(vL)).x;\n        float R = texture2D(uPressure, boundary(vR)).x;\n        float T = texture2D(uPressure, boundary(vT)).x;\n        float B = texture2D(uPressure, boundary(vB)).x;\n        float C = texture2D(uPressure, vUv).x;\n        float divergence = texture2D(uDivergence, vUv).x;\n        float pressure = (L + R + B + T - divergence) * 0.25;\n        gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);\n    }\n"), K = _(g.FRAGMENT_SHADER, "\n    precision mediump float;\n    precision mediump sampler2D;\n\n    varying highp vec2 vUv;\n    varying highp vec2 vL;\n    varying highp vec2 vR;\n    varying highp vec2 vT;\n    varying highp vec2 vB;\n    uniform sampler2D uPressure;\n    uniform sampler2D uVelocity;\n\n    vec2 boundary (vec2 uv) {\n        return uv;\n        // uv = min(max(uv, 0.0), 1.0);\n        // return uv;\n    }\n\n    void main () {\n        float L = texture2D(uPressure, boundary(vL)).x;\n        float R = texture2D(uPressure, boundary(vR)).x;\n        float T = texture2D(uPressure, boundary(vT)).x;\n        float B = texture2D(uPressure, boundary(vB)).x;\n        vec2 velocity = texture2D(uVelocity, vUv).xy;\n        velocity.xy -= vec2(R - L, T - B);\n        gl_FragColor = vec4(velocity, 0.0, 1.0);\n    }\n"), Q = (g.bindBuffer(g.ARRAY_BUFFER, g.createBuffer()),
                g.bufferData(g.ARRAY_BUFFER, new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]), g.STATIC_DRAW),
                g.bindBuffer(g.ELEMENT_ARRAY_BUFFER, g.createBuffer()),
                g.bufferData(g.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2, 0, 2, 3]), g.STATIC_DRAW),
                g.vertexAttribPointer(0, 2, g.FLOAT, !1, 0, 0),
                g.enableVertexAttribArray(0),
                function (t) {
                    g.bindFramebuffer(g.FRAMEBUFFER, t),
                        g.drawElements(g.TRIANGLES, 6, g.UNSIGNED_SHORT, 0)
                }
            ), J = function (t) {
                var e = g.createTexture();
                g.bindTexture(g.TEXTURE_2D, e),
                    g.texParameteri(g.TEXTURE_2D, g.TEXTURE_MIN_FILTER, g.LINEAR),
                    g.texParameteri(g.TEXTURE_2D, g.TEXTURE_MAG_FILTER, g.LINEAR),
                    g.texParameteri(g.TEXTURE_2D, g.TEXTURE_WRAP_S, g.REPEAT),
                    g.texParameteri(g.TEXTURE_2D, g.TEXTURE_WRAP_T, g.REPEAT),
                    g.texImage2D(g.TEXTURE_2D, 0, g.RGB, 1, 1, 0, g.RGB, g.UNSIGNED_BYTE, new Uint8Array([255, 255, 255]));
                var i = {
                    texture: e,
                    width: 1,
                    height: 1,
                    attach: function (t) {
                        return g.activeTexture(g.TEXTURE0 + t),
                            g.bindTexture(g.TEXTURE_2D, e),
                            t
                    }
                }
                    , s = new Image;
                return s.onload = function () {
                    i.width = s.width,
                        i.height = s.height,
                        g.bindTexture(g.TEXTURE_2D, e),
                        g.texImage2D(g.TEXTURE_2D, 0, g.RGB, g.RGB, g.UNSIGNED_BYTE, s)
                }
                    ,
                    s.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAA3bElEQVR4nBWXh1uNDx+HT4SMlhClZEQUqSirVEoDoVIqmVFKoVBWKqKIpKGFjAaSmawIRaUhq2j/KrQUJUrc73n/gHOdcz3P93zu+xZ8Gu6AR6U7SfHvGD3YnM87fZnTtYlzx6UwFbtCv48+JK8VsPvufN7UuBJqM5HlygMYtXE2hslP+c9sDD8+a3LO5R9LU4+w5/gj0gtUaHdowv2CK5nPeikPv8CY9HSWen5lyzRDYu1Os3KRKtNef6fx4myq/A5gmefCWdkPvGo0YvVmDSInXMVAczd/9hVy7sYCHJWcyAy6Tes3byIfKSESfp6L9hJ0nE3Da2Yhs51/4LtiJbUnSzl3fyjePo2YFT6jSXIe92qF339qMTufHuW6axdLrVyIb3vC6hwtBINnVnAiI5gfFqLsK4pjg2Edz28qMGX6A+4tX0Kt7wy6IjoYN8wOKa9bbBGvgCNLSfoYw655zawMu4bqLk8eKEVxTH0+MwetZ/XWfST9TGWi5Bxsv4rgM3oXWnNX8bJzJgfPSyIQceH+qXyCvBehIJFE0pQs5lhO4l9kJ15HYhAxXcq9qhZWPDxJYZgtMz+rUrUpBNWBIoyY/ZKy5ctxU93CoYb/KC7UwVx8A+F/vGm7NIppC6azQnQLAqdYrkxwROuOInar2/ir4Ylh6SfyU5SRmRyDv8RBssPlERh3/8Z223wmTbnJ9ZR1iK1W5c/7UEJH/GHYY3f8yGe1aTjRxXIYab+gMtaLGbk9PGsbzgCBLxFZH8l715eN1i/pba9jjMlQYqIUeXUzm4WTI+k+VEuE5WMuFx+jc10Xhn5naXn5Hx/SbrKteRA5m5txKg/n1B9bhl4RwUQsl8C2AOrPSjBG5h6+85W4bdVAv7hLHC8s5fLO78xNn4b1wXuou/WiODaUjOtiDNidxOYpj7j+upXCg8cJ7jSm/Mxbns0/xIH904j+k4qKrDQbds6hrjGXGTfMaF17AcHFMQ8p/m8ntUeGoy3axpGm5yzbs5IPsQZs3VLGvKQJpE1KoPDzZ444BXPngRrrLa6iPHU9h1YbUj7Kjnk3JiMRuBiz6kSqH/2m/x5rPs96y5HShUg6T+bNmRHIDlzMhvocJk6cwPmFK5mp4IP4jCAWZYzim+F2JoyZx+v190mdu5Yfd2qZssqVSzvm4v63m0WTPfmZZca6qgPskB3Gg544/gnsqTZW4Ozz/Xw9Vo7jkmXkfJnP0KxX/Bw+gfEfb+C0opsRL4bTkPiQIYIw3pnbc+L4Oy4X7GZrQDOjjCUQ7Dm/nIgVEUhll+AaMZvcWRc5M24AY7/f4fH8ANr7SKIevJbl1+YxUGERP38N5uyBU5heekTr1wJS3Ntw1znBzfh7+A3w4/E6DTxfbWOaYhAuLR3oGTtxL9UfK59yau9tZcfx/jzjHfZvjYhy0OTW4UI+navgwPO/2H5I4cn+YWxUm4ZuyUU+5JQwRDSS/1IGEX3gFi9N17FwtS6DIo5yNPkNMu8Xsvd7DvNlJqMS20XM6jVYaJ9jx9a+zArfzaWpy1k4eiPbN9dwo9UA6we96Nn1p1P7BuP7r+XBe3UEc7w/g6wL5j+VubPxEK33P+FgtQvD/EYE5RpccEzlc04Xsj5ZPNfdx/YB7xl9spG3C7Sxvj8Wmb3n6fonzfiJLrw3KCcseQDLh97kqk0cOUGSnMt6wN7fFxGVnc4x7WvcWHoKebdv+Effo2PEefR+OLGzrwX9to1H46QPJ34FMUK+nbjFi3kWPBp7JzsOteQip6CFyoyftNx6ytuvdTioiZK6wpPs2Wm4e0XRXSHD+/6BHLriQaZJA1//zSDyZg6vq4agHhjH7/z9PIl+Rp/xHgQ2jKVgUyiOjwoR9NMQ4aN+Cl6f/iEvbcLUayMJOLCJyiHL8Dl5Ghf1t4RbbMOhZTi+JSnUbbNi1idXjk8YwMMhh/Gx3IHGm5/EPZ/LqtAi5nxeTc+vFobGjKPZfTYTBhfzaaoNrAadPH1MKhX4PGA/RVmTUdv1G5makzw068cZ9dvU2ETTNmQBS2M/suvaY/7W7URTI5CM01Xov5fl2pZk9gdvIV5iEto+5xl7ro1FTk6Eps9hyMQaLn97gEKwIgsevmHgoGPc8Ulm5dJvHJ2hjKKEBecMNNm8LZGqpA4s/i4gPtwfgWqeAlmXX3A00J4i8/tcVj2LTEMHPVvHc/1iJot+9+H1HSPGS9ehf3Yy11bEEfcERFPScaqrojjKHKPhwitxlkOwKJJXXkYoTH/OoTvLWDP/Pxa/3c2pk6JsanQhL+EzZ/3zELuyFrcpllzRlWLt7af0XpiNUcFXXBsLuHHfgYHlYpS4p6Gkr0LIsHi+2Lay9cFCPnadRHK+Nc7FUnQ9OUjhaE3qfhdzO3cI0w/YstLyEjVFprhtAJTt2deky7CTbjStScf8dzl7PgxDKyOSoXIruGVRQ+PgdAQbVkeT2Lgda7fp6J09zsbegZzKKuSp3H60jWYh7hTKdyVb7h0MpGJqHq4ucnT3zGXyjDU0rZ9I4qEXBH1bSca1z2wWncL5gH3sLE6kdvwWbv53Ao3L15FYMpGH22NQUApkpcEwfq1M4mRXDYuPbuft2vccGXuQ0XtdeLlpGpPnjMJ/ggfz/Xu58l2XDa820XdPXxYNesDziz5MV/7AsmX/CKx+Qp9QIdtN77BO/CRtWt/xu7SHc3LqzJw3kPy4KFTejmK9bDGl1wNIObeGnL0t/JiaT9hRcQzKNwnpMAeBuMoblEYvpeHtNzpEahigo8+7lauwCU5hzPsqjv3Xw7lIJ9SfZxD45TvDB+9k8bEw7OXfkmN0gDH5MUioCrCc+4jOymCmPP7LI+uB6EqOJHrDDzr2GfJGUIb3n0yOPFjMNJmZpDfcwSvnBOOGGFNfqoh2+1USZZax6upPykISaLI8ToxIDlaP6ylMsqLL7DXnwpQIbZhG28ZUUgLm8bDvak5vHY1eWiOyX13IiphAietLRLvKWV5zg9THuzi+5TGPFv5kQHYf5vWdzWrLNCZsCOJNuw/bdKfw+8YvBBG/BnLT0hetB0PxibhB/O5JmBS4s/Xyc74MkKJghiJrd15ip746YkX9eLx4KaW30ogslcRrpxHz73dReW4b+xxncUpxLSZ/bvPxwlsGHtPC+sdLPHLWkDxrMEZx3bS896TKuQi9U32Q8uzi2UxVopbH0ed0Kz4LB2P27AFh/yoZXrIPjzgN7q6TQW3yJYZ2B+Cj8Ivx2ptZnRvNqLvVVHOUKbo76FU6S6KjAJOPBijfPUKkyDK89m7gi00dxtPV+HnEDI+O85xW3kr9f2PJKDBBdsRHbJ8+JDsmCUH1DkOWBAuZPv8Cmd/fUb7+CJPGf+X2EjMOdEQz55E3f2VKWOagT+KFctr2uTGz/Qk3o1s4aKvOP7Ek1H+Wcs1XiaHhNeS5mrNRawdHF9ogd+80L0b5MmnVJfqoTmVtwDESFtnxSvkrB9I30ZZ0AJtDudx6ZU/HgF1kaegxZMc4/oxcxKyatVTMukugxymefJzFvOvPqNu1iNf2/TGOHYm7ag57L6ix4vUbPhy+QrBFN5um3OfuAkk+Hj+DxNUxjJE+yvmylUzf+ZX9c8KRSnnO4vC/HPGw5sIieWb1P4bA+b/vFLzMQ3aqBo7iO5G6PZJf9b0kxcygz4G7PNxsyci0Vk798yN3/BmMRZRwn/MfcpOD6V8rS+bITbx5k4fdklNCRIkzLu8cF4e30L1Lmfqm+/hGNHC7arTQ/EwIz6tk5PezLBcby9UKXTb1PkJF4ROf3Ibj1hrB9IRCfFdfJm2xCKtvvGF06A/aJTxxthrC8iOfuC52g0PffBkg00HeYuGQNdUjudOEGY/2Uz9Mg2FnSunJ38a8v0Iijf3D4cZXFMXfxmrVcD49/EBvgDpXxfszteUMrTNdELlUjWDCqPH8s1/OlasRbK94hIa7LSeGD8DA0Fn4REP48EYF1eVDqClfg+Phl4zPnEmdkw3nU3ezfqspi07cI26+FVsm7WVOsz7efa9z91MgU69I4zhxLrOXvmax+1b+6t5ki5QEahey6Vzpwyz9awxcN5AQ1SUY3JrJqANOQiP9xfKHBzkzsZG8zliMdxsQ2TiJpCcrES9u4p/BOmJKNdA5nsCPZxmErhfnXP8N5OhEYf9jBPv/W0Xy1lYmr0vk+aw9tKUPIK2/M31NDdj0Zz8nFBx5ujIdz9u7KC3WYZ9TKoIQDqHr24/YhV18jZ/P00Pl2LZcoSW3gJjjdSzpl8Wus0lc0+xm0LYTHGgQ43jBFV4t7eR7RxyTnvUjOLGXwZvq+G/PVKJm5WDu0E3/wE1kFZ3gTH8Ljv/7ieSxdWTvnMnu+m9k+FpR8uQU8XH/+FJygUdmDcKrucuRuVOoD/ZAuZ81O/JHILLgCe9igtBUv8y2sQo8u3iSSW4lrNeaz5L9HoyuGsvmlHZaw54gsC3ksd8Jlogrc/KpGZuXPWX3Gy20wyp46HKZiS87mK8RgnxFMat2t2I0QYYHJ54hsL73BcmBt3n3dgtmSqPZZx2P0sx95AstT2LNXA7/2s4PeVmemSxkflg6PcOdyYgvwlJCGR2NMioOzeKyUDqe/pVn1EMPfsXbE/i5L2UGn9jqfIVvF0cx9mkmK8fGUnc3EKMZJRyRlUUxVI1tfdxZssMfmsaw1iaE/pFDmPcxh1+bdchMruKo/Aaa1//FPqAAxV5Tqhy92fNAjIyOHupGHuPtxKtMNt7FrpdzWKC4lNgbaShMG8LXizW8PXyY4TtWYKoSRXyNCp8Tpcg/uoQO4zEMOqNPQlsUDbr2CHJqFrJRcwpqnm9JfxbCgO4Wqgab435pLVd82phRFY38jRWce1rF5tapqK/+ioyeAdv3bKdPufAp26/B+HUSRfJ3cLIqYcXRWJKGmDL/thYjOpsp0dhLmo0KMz/257yJEf3avPjoeo/V7yu48dMACa18tF6sxOfKe0qFn7vdm4LL9FPIWu5m6b3bXKuejr+kJPnXzmFk9pAQQTWi4cu5ZP0cvdvTONT7iXRnUX6W+lGm18zMX25cq0pHTF4e27Zf/DHI48ig7WzramDZ8MdEbUvC/7kH1/t8QnH5HgTel8SJDD/Hjw1rOJw2g/NBOcw268Mf1wc8Gh/EurkSfLR5xwo/b06qBFJyWY6vPVHEPpDk1ng/IUstGBs5GD/jRjSrJnBfLQDl3Cx+jNnOmt3nCQ63Y8+IXB5vqMI5+g9dqSlETnJgylIBtYk/ODT6OtkHZRi3YSehmT2s2PWZuMJxTDvcj4ofi5nrEcCgWe50vmzljPdsVtROYmSCMz1Fw1kllKuCIEeGDPqHZWwCwbsns2bRG3L76uIXtY6LaReoXNMPJV8/bt+dhbT1at6q9eJSKsKMtdPpOZiPoP+4y8zrCqBc8h9yX2RYrbaTZR8TCY9SQ+VHDwvzr/NFRgdRj2yuf7jIeNF/mAXZs27RTZ43/sB2SyWntDVp9HZmyFV9qtq+C2tsOC+XvEfw3xAWvp7HlIOnaGp2xmKQBqMKj5J/ZDzzHc+wIsOZH3paRDdEYaJyn5aF85A+60iuUhHf9c7j07eTiPMV3H+riEtIJGqjHfiqd4sstQO4N38hXOYVmjNNufr5HsPt5dh634aJxRF8c9uNge0XtjxTZ/pHc17o3GFN0RvmRJ6ltlGI+SuWLB56j6LM7wjslowls8ACd/27XFtZR9MoG3xeGPDmSjkygs0cOmSBV914XpzZwM8ZAva+XESwUy5Vo9QYdT6EuQMSuPDrFW5Zu7khGUHI6gzmxFiSMPMYEZd/c1fkJhUGXxnyUJ7j25eyfU4pd3pesH9oI0mVBxnpsRynsFpeC4UsVXoz28qPYLhqGomnHjG2bgWrLPR4O/kpw+3ekPKzDzpPuvh4MIx96/UZazGE5ufbiE88QtUkbfj/pYV0crppMHIaj7mvFMTxc58YLKFAstdm9ilI0LZpInfn1HLix0kSvTcgOKj+Bmn3uZimu1Nw9jTK+/Lpu/E4FzUG8d1oP/dWv+JMehgzl7Zg+PMBUoaeJEXWMr1WgfZXbgyyGcqHEBNMJv2BYhFGBiSybKQ6bx87sclhHD295thM8eXSxbM8t3qIzhhxep/tFvq9MR/iRjK931MevZrCYItEtPe3U502ioPfTjPg2Q6e7pDCfNg1/t45ys6YzQR9MsfCLYVbYqUMvjmGhScv8LyiHeddFcz5fRnTOS7svrKQvvtG8ME4lWVY0hDUw68lESzsNOD0k3ZEjubhaaLNiOgdNL4bjmDq4cf8bq0iNrQfM/tPILi2k+x/19APGY3zoy9YN51BSUqG/0IXsEUxGIdbmrz2jOXBtPl4HnjPId2V5H3MZPKmsTgmrGavfikNXfWML9+JtBAzM1yL8c8fgILvVkpru1gbaYdy4yzOmKThNu0vDXYn8b70gWMP9mKv/RKVzQvpHFKP07R3nEhZRy0TUN3YQh9fLQqlhuG00IvTibb87tHAblwWB/XXMKCv8K26iHDy8QHsaj9weeAZZuZtZcOtSexc/wzlSm9eJzlgOzmFrHpf9EfeYv3NhbwbEo9g+Vo77o0+yp4nu6mdq4nNGzNYuo4bYx6hvn02Za/tGKj6kxO7U8l694a/1oOZNOgXEX/vCVfalw3JX7ijeJUzrcGILntJzl1dkgaPINPnFNvHCjFoosNpqUoMb0/BZ0aysC+ErN5UxMlrbuiXinLlhyMWI3X5e1SJs+OsuVNyk1fWfZAX4vWaMcx6F0vc7N2kj6/i24N7yNfnoqIVzMv8PySt2ktF3BKmvo/ibWAjSmb3+bJqKi/iV9ExUpjeU+cg49OXa4JmDusOR8O+jH9bl1Hxoj/jrBsI7/2JwLVCgn6Xr5Ji3oSiylnW7yxF8sYhdgzaweloVZr0PrI/2Z3UTcosarHi3DkfBM/Xors6mcahk1A0H8LPHdpo9/HgxKlvNH/2Q191KYdtYfE1KW7EOFBUFkj/74ZcdvzG/eNDEX80kcLx//EtMB5p3ftCAnjxrroTwZ8EjCM3se/JCSyb/Wgenc2Wk0vwyxXDpuMCRisW8N+xSeze2sDcUf0Zsfcm377NwutWEeenjSJIwRKpn39ROxHGAY+XGLYe5L93N8iOPIdrhiby/o9IKBnHgQFhXL/gTO4sNQQjXRdg9OoF3/xHUdhsTVhCOpnrh2He1stwmxfk5CQyu7s/q/sKB0vrKRWB/7F3wiiul5vw5kQokt87hCJiyaebMazYPwBXHVXUc84z6O19alrdWTO3iSk7Yvk9/CmbF69nemE6RxCe+3YTnkm0cuCFJutTDvPYezCnBJVsna/Op21NTL+QwRAxOZ6sceDdrmKkhal8QfgbghM28OhDDK6LRnIyy43l0tXoW4ewtmAnfy5eZ9EnfTx0JHhoOYawB2/ot3A9S4ca0fIliIxxWxH7DYvCLqK9t4gfqgEIjkV78kmkm60rNzJJtph5z/S4oNlXmJGnOfxpCRNHneCN73y+m7ez7fotNOq1eTH/NHYx+QRtriBmphNGKg+4WvMWGYfr3NtSTe/FTcQcWkC+6ASGb3hD6JM+WJ634JOfAufUPvHTIBLZMyuYY5XDjWZ5pmpc5b/Fi5h3q5BhDkPpUtlG9H8LSMmYjP6SK0yo3MIf9Zk46kui6SfU6C/v6ZqSifjp89ycu5CnIeKIbP/Bq8FOXNl7icrsWlaN38PYxKXCUvzF7LWDWaNVz4nUbDwtHPmqPxeHR0M5++U+gmk3o3myYCaWPePxP3Wc0uo2RCQ2U21Uj/MdJaxV1nIn4h3xjsMIyXJh4XYLumX/Mm5ZX5yLtlPvN53sMzJMNDYmQHwX7/+NZsyoHHYu6SQx7ARz1G/g161FltIOlCp+Y3z1CLv6TKX6nRjRd9/hfnIjP4b+4ciHUyTFPsL+1WpedMbgr9PNugNl1Jw+jLfMF049jiDj2x1E17WyWFKPcZdVOfvvN583O7Cv5iWTf2gSZTSeOdeFCrzhCV29M4kfsIVd+feEOxNOz9lJTHEV5nS1HE/lPiIp/DvukV6O4Nf7ZAZ71RIz8TG37vvi6HIBzT3T2N15nSuX9mLocQ/FL830e6PKV6kEhv45SkaKEucf+tK//xNmdCWyVP4Iv973sC7VjoisGZgpB2DXIE5dhjXpxXvxsK6j+WgiIq6vWNs0jzzhpUzcs41l487Rb5Mexf4+mLcrozhGh7tB/kweloyYcz8Wf1hO2/jHyP0Zxqst49l8Ip/kMXupzvVg591Q7G0UmSniT+nYdDY+iua78LoCo2yxGt6H25WtTJ93mdzdIwiwLmfIiAPEPD+D4a6bjCnaI9yS4yR3CBDMXb4Wp0Mj+Jq8CHntgXwvWUn+ko8MG7uAiFeF/J0zhGdiK/AL3oWTUR5F6tew2vOBfVUOtK3T5/GtBrZvV+aiVS6S4WEU+jejtfYc3ww+IrZdlwmXn2AkLcubeRuJyJbgmpwdAVFtZPyqoXGODBdqniAjxO2eBbb0epTgYtlOY+oYXj97wdGFPtxM1GWW7UYsb1xEtWQRnUKFPjzrGgY7iyk49JWQ0iUMTezP/TXfUPJzZ0dTPm8XG9HfPQ63WFVMJ9kxqlSP8tACVoh1cmv6DI5edGOzsDwtxr1DMOH0H4oH72RX600MVv8gRDSbJce2ci92JHW2h9meqY36pnA+tf/i8gVjJtpLoxM+g/Bx33g/L5rhRwdx7Mt6qtVuMX+2OfvbRXhSepVr8esIGaiE089Iuvf/5fwXE7TN4pC/9wCmj0Mv/wTHLZbgeP4gM8VEeDrtOmEvZdH/Z0pcv83MOFnD1hYNpMVPkqDZwce9n/Dt54hEzV+enNJB9qcMadOc+GeSglm+N5dmzaVx0CgWlITy9PZvQoP2U5uVQ/u3Rh4ZebLxriid/9ahGSDLvsavlDo958ELIwRhHmNI/a+AAQbhPHsyh0sfJ6KcFst6QExG2AnVX1ip+pSwmyKYya/Du7iW/1q3kvb8NgvMl2AvVczUl3u4lTQSEcEHOry3smXEVORyvvNxZgFWDh5kTjrC0FNT8LxQycoB+yjzcmXQkZm4Sl/m7fVu0lavp+ZLNJZ7K+h79iipc29RucuelavP8rdwEM+P3iPySwALDSfTeD6LVRuDiB1ew9SvZ9hyRh0xN2Fuh74n+pcl02xuIaU0jhStjdiJSjI3+TbBzscYp3CBSyszhVVphcDsFCMkr9J796BQhTXPYqegTtW5TWjt98d9xH90q0twZNsqCgJMObdgM+2nxzLSK54HyzLo8T+EZF9F3LaEopAwhTO9P8D+IptK5pLr8oXIu1moLvXFVLjie47cETb6AKZWfuXQa2s+O2WT81eURbYd7C8tRrVNni7XF4w6pYbnW0MmKu/g1e3B7JX7x+g6FR5OamRiRhHrhXbYR24o27O9uK18mrGPFtCetpLdA17w37Px5Mj3EFB9mIorg3DadYE/OUJU1y1m4qrZnNn7gcHvxrBD24QldT00epawWmU28WUDMO6xE6qwxUdkrsvww66JM98tsd58hw9mJUg1H+dGhjqT+1dw8IMvb7uX0e/xPNbOKeFlnXC1NcRpzsjk0W4X9isfZvFhG5QMJ7LydwQXIqVoUlpGsXs8/YWE6ZR8g8GuS9xS1CNszg2ULkeQMtGYJ08ciB69GxOdBoLNH9J++CLr7LT5UvYcc2M/Qi/IE9CxFV0LG2qjr5P7tx7NHWM4Zv6dEvuBzAv2ZeluM9KXu6I45TOzDFbzSmIqN88UY252iC/dURQN+0Z6tCtlh6cKVdkfXRFJbpzZwbYT6TTsEdZgYbYpzkcy2Vd8WfjE+zD61Hz08rzxTnzCV+3hLFp1DdeQVyQqt6M/VJXTyRfRXCdM5lBrXn+aycCRVWjH9uN98z/qxTMIvLJG2AkVjMj8hU7bIa6eHYHb8tVU3vFG/IUya+qH8v2kE7ULqpiz9xz28YMY3HKc+zljSexThmbXEmK2OCHx9CpvDszjsswpfszuYuQ7TS4GJGA9/TXOn1zo9yOdFB3hWJeM4OSfKH7dT8XrkAF9mh8SvNkD2RP/WHurHzOm2rA5/wosu4/Mr0pUdeN4UfyZ0Y7K3JNxQzC7U5vovnsQnXMUs/LftIqPI8d6I+GKZ1n1308ePR+Ikus2ahaHsTdGlp+dq0nP/YLy4CiSVqSxwyRfyGgTpGfGk1Lmhb6NAn8O5LJ+XRInhWP2rLAZ298ZTNA8zvmDPWiJfMDDOZC+HVM4PDidYuufNNy1xtlzCyOGtZN9WRq9iNP80qzHRaw/00Ifsex6Gd52RwgT9KU0aSm9UnN4EHEcvzGJrHFp4VO0NipDC0hyVMCyYC/NE6Q5Pecczz7O4IBXHv0G7eFK6jBsxy9j7xah1CWt5khtCEuN8hF0bRajLD6aWztWonIlj4CuUpIDFqMR/xWB9yz+DrND5+oCXnx9iM3ecuQMB7B1WzZf1eaz4OY4Vjfs5/eOYdzZ+Fbo7VpMkg9B9KUeuz4PpEZXFfPjZfiPUODV2gUci8nj3ZJt3Pu4jOU3mzhbIMuu6fOZWvGKP8c1OTD/MDYNJXxavpKdJS9JX7eHgTXmPM4ZzxePNRg05SEurMYp63sxzZtCy+dVZC/cyZlbfTDWOsrmTz95f6GC+33MmZ/5lLF2a6hq/0jrgkksWHeKqMZfvD3wAic5eQaqXyI54y+CVeOr8aweydHH26hfM5WNxpeQeShH+bS9bO+JJF6vhqCC8Qzus4fr6SmEVi7mvYIrfQN/Ef/9GBXn1qHWtxWrgsu8YikBpj/4kHCbs1v3MG2iGYN9nvDrqg2jmqLY+UScharCvt+uzbChWbwI8GXMmkgMFFO4/qcP4RvvIDLJC+X0MRwdPY0zPt2s+n2JAlVXxioJh9R4FDePphI3NwvPfeIoXHyHdv9FDNp5n33fnPm+ZAXDhE4iXAF2+oZwSV6OpcFGBCU08+jBJuRC+zAz5zpnV/hR802dsaeEJrhAIpURy4VGp9VO/ghdVoTepbN/IHedJbAoTeONXQ7rg9fTNqkH1ZmHMbfV4HnEHfxfSwuVs5TH89Q5NjYTuQB32qb2xezaf2QNdsDhfSyt93pJsd7C/coU5hlN57NSG9cSVzO59yybZ4vREuFK8tUKKhetwuJiLyX7F3I/7yyt8S0Yt+gzal4IlRelmW2VwZbTM+n6EMu69gXkyW2hevlnQtTGsvLpGRqOtHF1bC65L6Zz6lQMDoYN/LnqSVFtJ1Kvk5g8+RBbZR7RXaFNWv/tmM+pZ+f1Il4edEKQmWvEvz8BRO0fwuD6chJeO6Pb8hflm1b4mmoiG/UWw+8CLm06w3+XRuP6t4hZj+qxk95B59UENi1bgW6lInvuRnHB7hDiLZMIP1rMnFnSKPUE43G6AesBAk65HmD9mwoGHlMiemU3fi9L0PlvEcfbRrOunwpD3+7BU/sxswbJsCnYiWTT6yBZyd4Hy7jmt4uowW1IXX6NhpctSwr9ENwJp6PnJner57FxpQ8Trkkwd/BlDm3wQ3R6P25KzmHT8lfEuQyhTMeKlbvjyV78jj5/zfi6TYJpbyM4sX48gktTmtiQfI4lp1fxXi8Mb49JPJ34nFC/eq6O2srvIcfJfbyI3T7NSHzQJWqQLS0Lwrm1vx/K6sZc/tlJ8emX1HtXovXUEKdhmyh3echtCx2Oyo0j70UBQwN1eaf9nOnfvHg2JIyavQasHBnE3QU3GDDxC792vkT1YSjnVtTypUuLvDVvsPPyZ1rlQPoX52DpHMm3fyo8mDGAUsdqkkWH4X9CHV2XbiKl1yA9T46yuBqWdxrwsOAPjZ8dML63Ga2YDBp+TWNvlg/zkr4StkaJdVGOBMh28u6cMLdNdiHYXzaKSXYzuC1fQEv2IhRSRXFdFsvn8wsQy5VGs/oBK+cKpWTMLhQtbhJ4fBP5Hs8Y/FWFHdlXWDxqHyc3ayMYMISHBtf5F5/AiNpmfHy9+ZpkxYKpF+hZvYGE+7fwPruU9sXSyN18gJnTVAqy1vDpTAK7Xefy9NgQjtS4oSC3iCHPYoi8OoEn6g68OQ5BI+dhvGgDE54G41OZiYNyMk/PLmey6TOKS4LYdeA1Xe5hxE62wGPRYxSPviffcxzHlE4zKKCaq30MGPd5KK2Fzxg2PZn0piNY359L+8AyBHoh2VTv+EOfb+4cEdxCe8N3TDW8cey9QpmnIzEOv9gWdx7dW2VUtA1CeFUkqPijkfCWMrsv/A5ai+KbUGy0trO1+w8p+YtZMk4O1TsfWPvhBP06fhMgpMSEuslYKDZxuaCIkN9ubA37xjhNUWI/7mSB1G9sblmTOvUqZYbfWRz1jAPtnniMTaJp5Qfk6kfhfPs2dYEdnDXYhqzPfP5+fc+WVBFMpruS2KKMxv07DCzbRtXIs+xPluXCvCNYfeqiw34lD42uY3rzJAWj/xF/WI3ZBltQ3NMX958rEITqhFBwezJ2pge4UjGCP0c+8PrhLO4rCvX35GuCvvjxTW0G1/0tURl+EtbJsrFyFgsEFty/Lc/+hRnE1Q3lZfIr5luqEhgSQMnaNcTOE+W5SAapZkZUyVTiGnqIx/qRzFWdjWDrRXr6LOf61wA07N8iY6YsPPH7uF08jK6/PN3iAsZ71HP71XRmzDXhQsI+8geeIzR6CbPbxjJ4WAPlj/ZyQ1ido0d/52jELHJEGljtOID5u9X5192C6kBzNmR7MrJNgOfk1xw+vpGKLb44Wy2hu7qay+Ojydp4DcGIoSaov17H9gmJREX+h3THCiGPj5Lw7ilTB7ayZOFwRNw2U/Q8jwMp/yGln0R4ZCaNs9wZ0BOD475fqE9YScXDOr5t1WW89BMk29vo3BOPTqwGK+w8CM29gvg1G1r8BrPmA7y1VGRfShV1h57hlD+cl2PjOOXtRN8XH3kgTOy4hnDWCJFWfv8uhvtC6PuzEftt/filVkjmihlY54VxcLYk64NW8Z9w1Notk7DI8ePueVtGzCwi9c5V3i+dRVRUDi+czjPzkgq2H+YwYPB9VF/KsyemhUWXC2l4OhRBwufvdCRkYbG/Py+s9NGXiGGC9yY80gbxw9aM8sJINv2+y6V+ythZLeTJjzV4en/nddY0UoYFctTJkOHhF7k+pD8bysIJn5bKvrQJZNS/Ycvj/chP/kLRv9FobXrBTbGNnP7hw5SMNKzl1bioewrTKDMOftOhol8jU2bvZs+HKRRN/INE8muOizjTsUaK3WXPSFN0Z8prezw3XeNN0h9ihuQy/5MqfT0/MUn5AfsWyFBSA6EhJ3HbvAnzN/sQGTqcGo1GLnkH0/W1nNsZYkJDTKCsZw3i/TRZbeuFIGBBGW/dwhkgbPS7ud3UJt5mnbMaNz438GxiMieO7kD7fCfDtSRpKDmKXvBepo4VNkNqIUuXVVJTMI65rbvJ0itjoP8mlp3dyQeTZRjKSVEnfEMJ2x/yt0KPRRfjODDzPdnRxoxak0nHbkcG1W4l81EXis63+HdNDAebXGbFraI5MIGUHn+WTR/D81NzkUn7xWHTyZgcq0Gh+yAt+0Yx3TydV3FeXL19jG1Fipz1X4+EpCFffmShM2YQAZkfafNPZ8Lf1fiYmbJg+HfkV20nW2iCwVMN0PY8yIOTt4QiJG+Fy/WZTPm9l5CqXLpktzFI+x3Low8i/2QeRnJ2+Gz/RF66FjFOCfySqudmmVCEtgzn+xcb3KanceZSNr0O0/HqHUlT9j9UXF6y5q02orOPCX3/FzuWDxCanApfTX7g8vQ4Bo0iHFdpoFhiKLMtXuOufoiEkGXc7LyM+YgRyHk+xrNoIdP0y3FpSeWzdBilz85wT9uQi/02InZvOcv+iyZklB6PZnTSu/EVWl/isLlWzdOpE1CwXy4swp/Y607lcVU0p64rsFE5jcbIFVgUheG++DeUKTGudQiCq9mufHO4wF6xVi4cW4hOhjQ7FlsS+1eRz/se8We+KHdbCxhvfo3DdUsxm7IN0TPzWb3gJJnCYRnfv5OFXuYcSj+G5tjbXOlrRPSKJl40RXMjKplp95x5+K0Ku6IApHdYkTRsBjVBydwVnuiuJD1st50nolyJ/s9deDX4B4fTZ1K7zJPTCoO58/AbSm5WzPXzJtJqKGu/PuZ3eBm+E0TZ7P6Z+g5Xhq0chLHodEpP72fTrht0mm/n/IdLeG07zOu++uiGuDE4+z3vnA+g/lOC8+fV6DMymaL0YiIO1yOQnPSQyrhRyOmvxnZnCB/XX+FVcSMH+8Qz3eEvyWUnEBviinWEPC6+vynKnMgl8vi0qpnwFzMYOvoM798PxN68noKaVYwO3c9+7z4MnfqJXykKGK015cO+G0SFepF7q5gZv+Q5ZNuKhGE2auE2lPVW8GXMdCbuD+W7cREbvv7HkKOneVl9i95VG/A/O41ClXdYlv9A4sp4tNcm8mKBDinvshkbmIpjih0Hc1uI0lvCoG4JJo3QxuTZZ462vWZ4Sl96V2RzWeovfrt0uK/3mFV1VdSKbGCn02KsZgUj0NoHGxpUefr+PQvHCEj78QTlKROROrwex7TpvH2+j23jDKlKfErryrVIzo4R6qoY23weon7Tn68/FYWZ606f6ALuzLiE7pPJfPn1iKVS29iUZ0vIyGm06j1n4BQptvc5Q49LBqaam1mfO5GfA09z0fEPS2bfZX9sX+Zv3MsjtcVoJk7EVicYo7znCET7kMAh2rebMGm4B9sLj1J5/i+n1Pcw99EkWoV6e2dcEPnHMtma0UP12pM8OGhD44wRTB+3G6vX59nSZMG4acdpDxrJ8MxdzLOK5caVfrxEiOSDUldpXu5B1MMYBJG1/L0yFzcjbx6cKcKs/hbHNCuZ6yJNdGcLk18d5v6oD4RU+vAneQmWapfZPa+S59b6bJT4RfcWGU5cC2er4TxeH37NxaVHGFP+mVmdvaRe0GXZu9WMr6vl9VUzTh4I4tYDcUZ/3sHz60ZIv3tG6kt7vL4P56T7PxIl9Ci/+YWN5mfxDirgxjxHjj2+z+Pd4owcaMHiPxGUSI9A1MsYtebzJFZsQU9iDH7ncrGr20DfhfeIjfhGrtD3j99eTfmiW5jmfyZe0ZjgiA5+b3/OmMIDCM4nGHLP9RW7NC2Y0/8gxxsdqHNv54yUOd8tB5LtE8Wo45akGSbhe2sqDofm8nLJCIaf+sstV3v0P6sR9CqdsecPs6jNkjJlZwavb0et/ioZcYPZ43GatZk+VDmMx29RKI9Oi3F21E/6Kuswd+lr3Has5+goRVYJ2ulZEcP7sR9QiEymafdWJv+05enb0QyLnkX9mGsYtFdjv0yDfyfySVu1HqePtXjHZdCxSYCVzhykV5TzW1WNKzeu8m6AERv3CFP7lwa3zpXSX3i1Pvs2k9VxGVXNibhU2bPYWOgBYq13cXg5lvEnuiiwl2SZ7ylkC+RQu3+JPb/dEZXt4r8P41jabxU/v9wV9nsdCye4UfP9FTEiEQy6N4Tvjt7CcCpFY/8z4t+MI1O0Ctv0xdTNGInIuPW8GPiQ6MDlDNMpo23bZRx69vG5+DZ7zzZT+e0shSeuoWrqT1zgbBZlOiNW+4At+hIECw3Owm4fOhu7KU49SYzGSPrXtxBwewcaeknE+XfxRM6fY9dW8el1Mwq+sYSznxl5A9m1uQ65sq3Uz85CRS6A7s+/Wes6h+LkfMQdjtEoJhzGCc0I9A/68GPYBj71JJI0fwYBn26zfsJH3s98icE6HS68OMCm+Cw0pryl2OM4Oy6IkPjmPE5PFzDFIIuSoCY8VNZTXTGT1aai+IadYYRwNzpspnL4TwFmezv4dyOBya0zMHz+ki3iHmgeU2OMvh0ZG2RYqL4I8U8qtFx+hfZfMQLWNpI3fDr30o/w++AirkrdZV31ZNqytzBhpDUeW+L5cK4fTRN1GfJTlQkvFFhg8py1Ai9ebjUh/UQJZopHaVkqT1ZWBweDF3PRdhiz78URYWiN1ZvRJB/bhleWFidvRiB4vqiSqWsH4576DOnRX+m6tJnMpRO5HnYEmxvG/Dn4mSBzSe7+8eLUA3P6z/xB015/AodN5lGsIiu2HWXu9SSk/pryYvZ1mlPAwDOEiOFbmHH8FsnvDPEyOSjksoCCST18bJAlyDaSy3ef0S3zgRVPjhHmXovLPE/SJllTe+YUDq/Hore0g5HNl4hMqmFI6CBhcxhz/0ApyR8OYSL6FJuHb8lZsRgvzZNcjLjC5++S+Gb24jrfmolf73D2ymwGSa5lqXoKWytLhH+9nSioPKJh6H9o9V7kzqw+yO5ahiCweBKp04KJ/U8fs2d7mellwcAfvUT06cvor+uYqHuDlwrxSNlrseCkHB8HpqJjuQH5rtf8+2SFz+KfhL2U4vyAWpQ25LKjdgU3p8xhU9NAinU/M9p5JQ5DlRBfW83Jwo1Y7DZhgLDNn1XMY8dBUSZ2beTCkF6yXs2nz/6bjO33FG+3jyTozGPqCy8qt6/iZf9srHrb0dK+yn9rJiDd7Cg01Dvc9nSj5782RmwoQ1PoFyKXJvBmsgusOUdwzAvW+EymvDuUn+79kXppyHv/qfhatmOycR1/4+6w5usfBNVh8VhutadJ/C27Y4aRc+QcDRsf4jbsJOXvC/HepULzVUscq3pIKMrGvbmG7BuzubFpJ+ZjbiPQiOXzHlcyoqawRHoH7w6NZvKyVvrFP6Y6N5ynl3fh3/GaVs1kZp86xi+Le6zrv4PoWRcZOsEPvUWP+BCugO/KBLglzfKy/bz+vZ7vpwUEKsZhOk0OZxs/eu9FEBQ5B4VXMhSYw2bJPcy6OpBypTNYvLElKiCQtCUPsCmrZu7AvgwtbOLVwn1Mu16G4bh/XBO9wbGWYJzvSDOg/AB5CgsZJ3iBYNbD7fTt6OTOipsozpjKKsNqjhbaMu+eIolnv7FkqhvTXUo5KB7Ibz9HLFUiUdbrT1RIG+sShlHUUIq6nR4HSw7x88lp7H+8F2JnHd2KFznjK8NywRSUq55y985sLiosYzejUXN7R/2NyeQ3t/MjwZINO7UY+SUUI41OQk1MuXO0EMlVqXhc6+XJ96WIvJvGJZ9i5g/dTmzSf3SoHmdv93QmPf+MY7wch2cb0N5SyJN73nh5jeC/jnASj+hyR3s5exrkiFzlgt0leybPe0XLjtNcUPvA6SRZdhlrI3A9OIafY8MIKxel5I4bU3oP8m/SLO7ZpyCyeDcl7Xo8ybnIyJhBXDOdwEDPhfyXmYnvq2Dah07ncrcFI64+x3XSb3SNxBnkdo1ULQ10yozxcPiIodlmPm9tY+MhKWTnx/Lu8W9MhT6QekIcK8c0Aou2oiFfwYOn+TQk2jNFXIU1I6uZXTWTK/7HaDJ8zKRzTZSM24BnfV8ctjzg0WErRFeZkmr0knN7b1Ik7APxlT8YfyoRE01zTo75hbzLdlyys2iWvkifsAYK307gnvks5gUvYVnXFj7mf+Oh4zUEQXOWYXC+jqHeBcLkNcUkJQtfvy6GjRYjtiabDcHDqJn9lbCR99H9K7TCS58osL2AVp/NSPh/wXjOZSo8HTktN578kPvUX1rK3iEHePz7D5JhwQRnWpM35QanG/fQ98J/PLZTJ0TmMEpTC/Hwi6RfX2OS9QYQ6xLA9s5kcq1HUvHAh9NerozOk8Rm4HVObBxD+vILDMvUZ9q8aEorPrJwRArf7h5AvkYZfbcTbHo1GL+hUym97khnbT4zEtJ4bqXBoozDjNsziKr2h3iOqGTU0xR+CdN9iFsmaqWBCL5Ib+D517lsXH+JSrMmtgmfVK77WmyiTtP0+D1GokvZuT6ESXc20lmnw4Nx3VwoXYFNqzzHN+Sxc9F+7j8UYfn7E4z65swFqzrWv8hh7E5RSueO5fuIc6jHzmdH3gCsxV5QuWsLOrV3aTeZQ0ZXIx/Tx9Fc8YTFk52Q8f1CQFiGkPVRdM7+xu7Jxry/8xbjxpV0hezBt/MndX1UsCxy5uTpEbyY3sO29jk0KL8lPbEOte57nDcNpP8+JVb2kSLwXytxBib8GR/Luo1bSYndzymtHvzTHFm1dBpXosoRyGYOYsW0A8TljWLGyR20NR9nvNRtrs4wQvO3J0HecPvNFMSXp7HmxCtMt4jzUWsnY6JU6bljQHZQHBNr22jtV0RQrBrTnObROyGaFQ3buX35LuYlVcit6+DqsnX8+x6On44Za07LIpFjS2TyJeZu3YXyMlgVN43uN3rMVxzExXWWLOU5zxZPZHp0IBtk6xDTEif+ch5XfINwWfQEybT+HFzvxcwT8UQvW8Hfw+4snmdI3tMzbF9TSf37jaSFlKA7zYb9uT+R/iSL+kpDnviF8r5OCZOJ5yj8l4dgz8pwelP/0k8+g0BdG27fH8wQmyrCz2vSvXAMo684kKcaz9cAWeIGmuGXE4ao8Q+cZe8SU1TL7MnCTLU359rMG2zb780C/R/k3B1J+BEHDojmc/avFhsO+FM8fhLzU6+gcuQTlzZ1kyvbl93jS3A5doKSQUs58f0sWUYF3EoNwlXkNxMurOVYYDxpn3T44uFBbraQIqssUJqoSc+2Nu78W4XK6LtUPmvCdsBoBr19zjFPAetU/vEwRpthI3ahknaK9+6TeHnxBVZiaXz7pSUUomLcvOoZ13cXEceMEajtu4Ke80SedOSwJFCHNxM6cKg6j/fmIkpfHGHzmFqsWh8zS6+Jx+f8Uet8Q/P1RG7uWU1hdxD+km4MO/eOPtk2vPkzmBrZC4wsL2XwEjPmTA+lcYsQO0bLOV79mnSp0dSVejH80SF+9zxg4dy1XK8fjdiaGvbfl0J+xg00dnrS/FSBj6/LkbDtx3bxh4zq+sdho5FYvKtm1/kICiX1WPDxPWvnHyJrnymyTVO4ejuCd6P8GFN9Bf32JfyedZewZWJsbvFl4KH/SDAVNoeCCNVz79D3nBU/30qRbtjC/wDretpKF+v7NwAAAABJRU5ErkJggg==",
                    i
            }(), Z = new b(I, P), tt = new b(I, z), et = new b(I, D), it = new b(I, j), st = new b(I, M), rt = new b(I, R), nt = new b(I, B), ot = new b(I, H), at = new b(I, F), ht = new b(I, U), lt = new b(I, N), pt = new b(I, m.supportLinearFiltering ? V : q), ut = new b(I, X), dt = new b(I, G), ct = new b(I, W), vt = new b(I, Y), ft = new b(I, K);
            function gt() {
                var t = Et(l.SIM_RESOLUTION)
                    , e = Et(l.DYE_RESOLUTION);
                x = t.width,
                    k = t.height,
                    w = e.width,
                    E = e.height;
                var i = m.halfFloatTexType
                    , s = m.formatRGBA
                    , r = m.formatRG
                    , n = m.formatR
                    , o = m.supportLinearFiltering ? g.LINEAR : g.NEAREST;
                T = null == T ? yt(w, E, s.internalFormat, s.format, i, o) : bt(T, w, E, s.internalFormat, s.format, i, o),
                    L = null == L ? yt(x, k, r.internalFormat, r.format, i, o) : bt(L, x, k, r.internalFormat, r.format, i, o),
                    A = mt(x, k, n.internalFormat, n.format, i, g.NEAREST),
                    S = mt(x, k, n.internalFormat, n.format, i, g.NEAREST),
                    C = yt(x, k, n.internalFormat, n.format, i, g.NEAREST),
                    function () {
                        var t = Et(l.BLOOM_RESOLUTION)
                            , e = m.halfFloatTexType
                            , i = m.formatRGBA
                            , s = m.supportLinearFiltering ? g.LINEAR : g.NEAREST;
                        O = mt(t.width, t.height, i.internalFormat, i.format, e, s);
                        for (var r = c.length = 0; r < l.BLOOM_ITERATIONS; r++) {
                            var n = t.width >> r + 1
                                , o = t.height >> r + 1;
                            if (n < 2 || o < 2)
                                break;
                            var a = mt(n, o, i.internalFormat, i.format, e, s);
                            c.push(a)
                        }
                    }()
            }
            function mt(t, e, i, s, r, n) {
                g.activeTexture(g.TEXTURE0);
                var o = g.createTexture();
                g.bindTexture(g.TEXTURE_2D, o),
                    g.texParameteri(g.TEXTURE_2D, g.TEXTURE_MIN_FILTER, n),
                    g.texParameteri(g.TEXTURE_2D, g.TEXTURE_MAG_FILTER, n),
                    g.texParameteri(g.TEXTURE_2D, g.TEXTURE_WRAP_S, g.CLAMP_TO_EDGE),
                    g.texParameteri(g.TEXTURE_2D, g.TEXTURE_WRAP_T, g.CLAMP_TO_EDGE),
                    g.texImage2D(g.TEXTURE_2D, 0, i, t, e, 0, s, r, null);
                var a = g.createFramebuffer();
                return g.bindFramebuffer(g.FRAMEBUFFER, a),
                    g.framebufferTexture2D(g.FRAMEBUFFER, g.COLOR_ATTACHMENT0, g.TEXTURE_2D, o, 0),
                    g.viewport(0, 0, t, e),
                    g.clear(g.COLOR_BUFFER_BIT),
                {
                    texture: o,
                    fbo: a,
                    width: t,
                    height: e,
                    attach: function (t) {
                        return g.activeTexture(g.TEXTURE0 + t),
                            g.bindTexture(g.TEXTURE_2D, o),
                            t
                    }
                }
            }
            function yt(t, e, i, s, r, n) {
                var o = mt(t, e, i, s, r, n)
                    , a = mt(t, e, i, s, r, n);
                return {
                    get read() {
                        return o
                    },
                    set read(t) {
                        o = t
                    },
                    get write() {
                        return a
                    },
                    set write(t) {
                        a = t
                    },
                    swap: function () {
                        var t = o;
                        o = a,
                            a = t
                    }
                }
            }
            function bt(t, e, i, s, r, n, o) {
                var a, h;
                return t.read = (a = t.read,
                    h = mt(e, i, s, r, n, o),
                    Z.bind(),
                    g.uniform1i(Z.uniforms.uTexture, a.attach(0)),
                    g.uniform1f(Z.uniforms.value, 1),
                    Q(h.fbo),
                    h),
                    t.write = mt(e, i, s, r, n, o),
                    t
            }
            gt(),
                kt(parseInt(20 * Math.random()) + 5);
            var _t = Date.now();
            function xt(t, e, i, s, r) {
                g.viewport(0, 0, x, k),
                    lt.bind(),
                    g.uniform1i(lt.uniforms.uTarget, L.read.attach(0)),
                    g.uniform1f(lt.uniforms.aspectRatio, h.width / h.height),
                    g.uniform2f(lt.uniforms.point, t / h.width, 1 - e / h.height),
                    g.uniform3f(lt.uniforms.color, i, -s, 1),
                    g.uniform1f(lt.uniforms.radius, l.SPLAT_RADIUS / 100),
                    Q(L.write.fbo),
                    L.swap(),
                    g.viewport(0, 0, w, E),
                    g.uniform1i(lt.uniforms.uTarget, T.read.attach(0)),
                    g.uniform3f(lt.uniforms.color, r.r, r.g, r.b),
                    Q(T.write.fbo),
                    T.swap()
            }
            function kt(t) {
                for (var e = 0; e < t; e++) {
                    var i = wt();
                    i.r *= 10,
                        i.g *= 10,
                        i.b *= 10,
                        xt(h.width * Math.random(), h.height * Math.random(), 1e3 * (Math.random() - .5), 1e3 * (Math.random() - .5), i)
                }
            }
            function wt() {
                var t = function (t, e, i) {
                    var s, r, n, o, a, h, l;
                    switch (0,
                    h = 1 * (1 - 1 * (a = 6 * t - (o = Math.floor(6 * t)))),
                    l = 1 * (1 - 1 * (1 - a)),
                    o % 6) {
                        case 0:
                            s = 1,
                                r = l,
                                n = 0;
                            break;
                        case 1:
                            s = h,
                                r = 1,
                                n = 0;
                            break;
                        case 2:
                            s = 0,
                                r = 1,
                                n = l;
                            break;
                        case 3:
                            s = 0,
                                r = h,
                                n = 1;
                            break;
                        case 4:
                            s = l,
                                r = 0,
                                n = 1;
                            break;
                        case 5:
                            s = 1,
                                r = 0,
                                n = h
                    }
                    return {
                        r: s,
                        g: r,
                        b: n
                    }
                }(Math.random());
                return t.r *= .17,
                    t.g *= .17,
                    t.b *= .17,
                    t
            }
            function Et(t) {
                var e = g.drawingBufferWidth / g.drawingBufferHeight;
                e < 1 && (e = 1 / e);
                var i = Math.round(t * e)
                    , s = Math.round(t);
                return g.drawingBufferWidth > g.drawingBufferHeight ? {
                    width: i,
                    height: s
                } : {
                    width: s,
                    height: i
                }
            }
            function Tt(t, e, i) {
                return {
                    x: e / t.width,
                    y: i / t.height
                }
            }
            !function t() {
                h.width == h.clientWidth && h.height == h.clientHeight || (h.width = h.clientWidth,
                    h.height = h.clientHeight,
                    gt()),
                    function () {
                        0 < d.length && kt(d.pop());
                        for (var t = 0; t < u.length; t++) {
                            var e = u[t];
                            e.moved && (xt(e.x, e.y, e.dx, e.dy, e.color),
                                e.moved = !1)
                        }
                        if (l.COLORFUL && _t + 100 < Date.now()) {
                            _t = Date.now();
                            for (var i = 0; i < u.length; i++) {
                                u[i].color = wt()
                            }
                        }
                    }(),
                    l.PAUSED || function (t) {
                        g.disable(g.BLEND),
                            g.viewport(0, 0, x, k),
                            dt.bind(),
                            g.uniform2f(dt.uniforms.texelSize, 1 / x, 1 / k),
                            g.uniform1i(dt.uniforms.uVelocity, L.read.attach(0)),
                            Q(S.fbo),
                            ct.bind(),
                            g.uniform2f(ct.uniforms.texelSize, 1 / x, 1 / k),
                            g.uniform1i(ct.uniforms.uVelocity, L.read.attach(0)),
                            g.uniform1i(ct.uniforms.uCurl, S.attach(1)),
                            g.uniform1f(ct.uniforms.curl, l.CURL),
                            g.uniform1f(ct.uniforms.dt, .016),
                            Q(L.write.fbo),
                            L.swap(),
                            ut.bind(),
                            g.uniform2f(ut.uniforms.texelSize, 1 / x, 1 / k),
                            g.uniform1i(ut.uniforms.uVelocity, L.read.attach(0)),
                            Q(A.fbo),
                            Z.bind(),
                            g.uniform1i(Z.uniforms.uTexture, C.read.attach(0)),
                            g.uniform1f(Z.uniforms.value, l.PRESSURE_DISSIPATION),
                            Q(C.write.fbo),
                            C.swap(),
                            vt.bind(),
                            g.uniform2f(vt.uniforms.texelSize, 1 / x, 1 / k),
                            g.uniform1i(vt.uniforms.uDivergence, A.attach(0));
                        for (var e = 0; e < l.PRESSURE_ITERATIONS; e++)
                            g.uniform1i(vt.uniforms.uPressure, C.read.attach(1)),
                                Q(C.write.fbo),
                                C.swap();
                        ft.bind(),
                            g.uniform2f(ft.uniforms.texelSize, 1 / x, 1 / k),
                            g.uniform1i(ft.uniforms.uPressure, C.read.attach(0)),
                            g.uniform1i(ft.uniforms.uVelocity, L.read.attach(1)),
                            Q(L.write.fbo),
                            L.swap(),
                            pt.bind(),
                            g.uniform2f(pt.uniforms.texelSize, 1 / x, 1 / k),
                            m.supportLinearFiltering || g.uniform2f(pt.uniforms.dyeTexelSize, 1 / x, 1 / k);
                        var i = L.read.attach(0);
                        g.uniform1i(pt.uniforms.uVelocity, i),
                            g.uniform1i(pt.uniforms.uSource, i),
                            g.uniform1f(pt.uniforms.dt, .016),
                            g.uniform1f(pt.uniforms.dissipation, l.VELOCITY_DISSIPATION),
                            Q(L.write.fbo),
                            L.swap(),
                            g.viewport(0, 0, w, E),
                            m.supportLinearFiltering || g.uniform2f(pt.uniforms.dyeTexelSize, 1 / w, 1 / E),
                            g.uniform1i(pt.uniforms.uVelocity, L.read.attach(0)),
                            g.uniform1i(pt.uniforms.uSource, T.read.attach(1)),
                            g.uniform1f(pt.uniforms.dissipation, l.DENSITY_DISSIPATION),
                            Q(T.write.fbo),
                            T.swap()
                    }(),
                    function (t) {
                        l.BLOOM && function (t, e) {
                            if (!(c.length < 2)) {
                                var i = e;
                                g.disable(g.BLEND),
                                    ot.bind();
                                var s = l.BLOOM_THRESHOLD * l.BLOOM_SOFT_KNEE + 1e-4
                                    , r = l.BLOOM_THRESHOLD - s
                                    , n = 2 * s
                                    , o = .34 / s;
                                g.uniform3f(ot.uniforms.curve, r, n, o),
                                    g.uniform1f(ot.uniforms.threshold, l.BLOOM_THRESHOLD),
                                    g.uniform1i(ot.uniforms.uTexture, t.attach(0)),
                                    g.viewport(0, 0, i.width, i.height),
                                    Q(i.fbo),
                                    at.bind();
                                for (var a = 0; a < c.length; a++) {
                                    var h = c[a];
                                    g.uniform2f(at.uniforms.texelSize, 1 / i.width, 1 / i.height),
                                        g.uniform1i(at.uniforms.uTexture, i.attach(0)),
                                        g.viewport(0, 0, h.width, h.height),
                                        Q(h.fbo),
                                        i = h
                                }
                                g.blendFunc(g.ONE, g.ONE),
                                    g.enable(g.BLEND);
                                for (var p = c.length - 2; 0 <= p; p--) {
                                    var u = c[p];
                                    g.uniform2f(at.uniforms.texelSize, 1 / i.width, 1 / i.height),
                                        g.uniform1i(at.uniforms.uTexture, i.attach(0)),
                                        g.viewport(0, 0, u.width, u.height),
                                        Q(u.fbo),
                                        i = u
                                }
                                g.disable(g.BLEND),
                                    ht.bind(),
                                    g.uniform2f(ht.uniforms.texelSize, 1 / i.width, 1 / i.height),
                                    g.uniform1i(ht.uniforms.uTexture, i.attach(0)),
                                    g.uniform1f(ht.uniforms.intensity, l.BLOOM_INTENSITY),
                                    g.viewport(0, 0, e.width, e.height),
                                    Q(e.fbo)
                            }
                        }(T.read, O),
                            g.blendFunc(g.ONE, g.ONE_MINUS_SRC_ALPHA),
                            g.enable(g.BLEND);
                        var e = g.drawingBufferWidth
                            , i = g.drawingBufferHeight;
                        if (g.viewport(0, 0, e, i),
                            !l.TRANSPARENT) {
                            tt.bind();
                            var s = l.BACK_COLOR;
                            g.uniform4f(tt.uniforms.color, s.r / 255, s.g / 255, s.b / 255, 1),
                                Q(t)
                        }
                        if (l.TRANSPARENT && (et.bind(),
                            g.uniform1f(et.uniforms.aspectRatio, h.width / h.height),
                            Q(null)),
                            l.SHADING) {
                            var r = l.BLOOM ? nt : rt;
                            if (r.bind(),
                                g.uniform2f(r.uniforms.texelSize, 1 / e, 1 / i),
                                g.uniform1i(r.uniforms.uTexture, T.read.attach(0)),
                                l.BLOOM) {
                                g.uniform1i(r.uniforms.uBloom, O.attach(1)),
                                    g.uniform1i(r.uniforms.uDithering, J.attach(2));
                                var n = Tt(J, e, i);
                                g.uniform2f(r.uniforms.ditherScale, n.x, n.y)
                            }
                        } else {
                            var o = l.BLOOM ? st : it;
                            if (o.bind(),
                                g.uniform1i(o.uniforms.uTexture, T.read.attach(0)),
                                l.BLOOM) {
                                g.uniform1i(o.uniforms.uBloom, O.attach(1)),
                                    g.uniform1i(o.uniforms.uDithering, J.attach(2));
                                var a = Tt(J, e, i);
                                g.uniform2f(o.uniforms.ditherScale, a.x, a.y)
                            }
                        }
                        Q(t)
                    }(null),
                    requestAnimationFrame(t)
            }(),
                window.addEventListener("mousemove", (function (t) {
                    u[0].moved = u[0].down,
                        u[0].dx = 5 * (t.pageX - u[0].x),
                        u[0].dy = 5 * (t.pageY - u[0].y),
                        u[0].x = t.pageX,
                        u[0].y = t.pageY
                }
                )),
                window.addEventListener("touchmove", (function (t) {
                    t.preventDefault();
                    for (var e = t.targetTouches, i = 0; i < e.length; i++) {
                        var s = u[i];
                        s.moved = s.down,
                            s.dx = 11 * (e[i].pageX - s.x),
                            s.dy = 11 * (e[i].pageY - s.y),
                            s.x = e[i].pageX,
                            s.y = e[i].pageY
                    }
                }
                ), !1),
                window.addEventListener("touchstart", (function (t) {
                    t.preventDefault();
                    for (var e = t.targetTouches, i = 0; i < e.length; i++)
                        i >= u.length && u.push(new p),
                            u[i].id = e[i].identifier,
                            u[i].down = !0,
                            u[i].x = e[i].pageX,
                            u[i].y = e[i].pageY,
                            u[i].color = wt()
                }
                )),
                window.addEventListener("touchend", (function (t) {
                    for (var e = t.changedTouches, i = 0; i < e.length; i++)
                        for (var s = 0; s < u.length; s++)
                            e[i].identifier == u[s].id && (u[s].down = !1)
                }
                )),
                window.addEventListener("keydown", (function (t) {
                    " " === t.key && d.push(parseInt(25 * Math.random()) + 7)
                }
                )),
                v.addLoad((function () {
                    u[0].down = !0,
                        u[0].color = wt()
                }
                ));
            window.matchMedia("(min-width: 1000px)").matches && (window.addEventListener("click", (function (t) {
                d.push(parseInt(4 * Math.random()) + 3)
            }
            )),
                window.addEventListener("dblclick", (function (t) {
                    d.push(parseInt(24 * Math.random()) + 23)
                }
                )));
            window.matchMedia("(max-width: 999px)").matches && window.addEventListener("click", (function (t) {
                d.push(parseInt(2 * Math.random()) + 2)
            }
            ));
            var Lt = "home";
            page[Lt] = function (t) {
                function e() {
                    return n(this, e),
                        o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                }
                return a(e, v.Page),
                    s(e, [{
                        key: "init",
                        value: function () {
                            var t = this
                                , i = r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "init", this).call(this);
                            return !!i && (this.obj = {},
                                Object.assign(i, {
                                    obj: function () {
                                        return t.obj
                                    }
                                }))
                        }
                    }, {
                        key: "create",
                        value: function () {
                            var t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                            return !!r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "create", this).call(this, t) && (this.setList(),
                                this.setTexts(),
                                this.detectDevice(),
                                this.fixed(),
                                this.add({
                                    target: "resizeW",
                                    do: this.fixed.bind(this),
                                    timeout: 1e3
                                }),
                                !0)
                        }
                    }, {
                        key: "setTexts",
                        value: function () {
                            this.text = new v.TextAnimate({
                                console: !1,
                                selector: ".home__text"
                            }),
                                this.text = this.text.init(),
                                this.developing = new v.TextAnimate({
                                    console: !1,
                                    selector: ".home__developing"
                                }),
                                this.developing = this.developing.init(),
                                this.telephone = document.querySelector(".home__telephone"),
                                this.see = document.querySelector(".home__see"),
                                this.email = document.querySelector(".home__email")
                        }
                    }, {
                        key: "animateTexts",
                        value: function () {
                            this.text.animate({
                                bezier: page.bezierText,
                                type: ["stringletter"],
                                duration: 400,
                                shift: .05,
                                shiftString: .25,
                                delay: 150,
                                letter: [{
                                    scope: [0, 1],
                                    property: "opacity",
                                    value: function (t) {
                                        return t
                                    }
                                }, {
                                    scope: [0, .5],
                                    property: "transform",
                                    value: function (t) {
                                        return "translateX(" + 10 * (1 - t) + "px) scale(" + (.05 * (1 - t) + 1) + ")"
                                    }
                                }]
                            }),
                                this.developing.animate({
                                    bezier: page.bezierText,
                                    type: ["stringletter"],
                                    duration: 400,
                                    shift: .05,
                                    shiftString: .25,
                                    delay: 350,
                                    letter: [{
                                        scope: [0, 1],
                                        property: "opacity",
                                        value: function (t) {
                                            return t
                                        }
                                    }, {
                                        scope: [0, .5],
                                        property: "transform",
                                        value: function (t) {
                                            return "translateX(" + 10 * (1 - t) + "px) scale(" + (.05 * (1 - t) + 1) + ")"
                                        }
                                    }],
                                    callbacks: [{
                                        target: .65,
                                        do: function () {
                                            "mobile" !== this.device && this.showHideList(),
                                                this.getLinkActive(),
                                                this.telephone.classList.add("show"),
                                                this.see.classList.add("show"),
                                                this.email.classList.add("show")
                                        }
                                            .bind(this)
                                    }]
                                }),
                                "mobile" == this.device && (setTimeout(this.showHideList.bind(this), 400),
                                    setTimeout(this.getLinkActive.bind(this), 400))
                        }
                    }, {
                        key: "setList",
                        value: function () {
                            this.list = document.querySelector(".home__list"),
                                this.li = document.querySelectorAll(".home__list li"),
                                this.links = document.querySelectorAll(".home__list li a"),
                                this.colors = [],
                                this.linkActive = null,
                                this.linkBool = !0;
                            for (var t = 0; t < this.links.length; t++)
                                this.colors.push(this.links[t].getAttribute("data-color")),
                                    this.addEventListener({
                                        el: this.links[t],
                                        target: "mouseover",
                                        do: function (t) {
                                            var e = this;
                                            v.desktop() && setTimeout((function () {
                                                $(e.links[t]).is(":hover") && (e.linkActive = t)
                                            }
                                            ), 50)
                                        }
                                            .bind(this, t)
                                    }),
                                    this.addEventListener({
                                        el: this.links[t],
                                        target: "mouseleave",
                                        do: function () {
                                            v.desktop() && setTimeout(function () {
                                                for (var t = null, e = 0; e < this.links.length; e++)
                                                    $(this.links[e]).is(":hover") && (t = e);
                                                this.linkActive = t
                                            }
                                                .bind(this), 150)
                                        }
                                            .bind(this)
                                    });
                            return this.createList(),
                                this.add({
                                    target: "resize",
                                    do: this.createList.bind(this),
                                    timeot: 150
                                }),
                                !0
                        }
                    }, {
                        key: "detectDevice",
                        value: function () {
                            var t, e = screen.msOrientation || (screen.orientation || screen.mozOrientation || {}).type;
                            return void 0 === e ? "undefined" != window.orientation && (e = 90 === Math.abs(window.orientation) ? "landscape" : "portrait") : "landscape-primary" === e || "landscape-secondary" === e ? e = "landscape" : "portrait-secondary" !== e && "portrait-primary" !== e || (e = "portrait"),
                                t = v.vw()[1] <= 750 & "portrait" == e || v.vw()[1] <= 850 & "landscape" == e ? "mobile" : "desktop",
                                this.device = t,
                                this.device
                        }
                    }, {
                        key: "createList",
                        value: function () {
                            this.detectDevice();
                            var t = this.list.getAttribute("data-slick-inited");
                            "desktop" == this.device ? null !== t && ($(this.list).slick("unslick"),
                                this.list.removeAttribute("data-slick-inited")) : null == t && ($(this.list).slick({
                                    dots: !0,
                                    arrows: !1,
                                    infinite: !0,
                                    speed: 600,
                                    slidesToShow: 1,
                                    slidesToScroll: 1
                                }),
                                    this.list.setAttribute("data-slick-inited", "true"))
                        }
                    }, {
                        key: "showHideList",
                        value: function () {
                            for (var t = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0], e = 0; e < this.li.length; e++)
                                t ? this.li[e].classList.add("show") : this.li[e].classList.remove("show");
                            return !0
                        }
                    }, {
                        key: "getLinkActive",
                        value: function () {
                            if (this.linkBool)
                                return "mobile" !== this.device ? null !== this.linkActive ? (this.list.classList.contains("hovered") || this.list.classList.add("hovered"),
                                    page.wrap.style.background = this.colors[this.linkActive]) : (this.list.classList.contains("hovered") && this.list.classList.remove("hovered"),
                                        page.wrap.style.background = "") : page.wrap.style.background = this.colors[$(this.list).slick("slickCurrentSlide")],
                                    window.requestAnimationFrame(this.getLinkActive.bind(this)),
                                    !0
                        }
                    }, {
                        key: "show",
                        value: function () {
                            return !!r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "show", this).call(this) && (page.default.classList.add("show"),
                                page.header.classList.add("show"),
                                this.animateTexts(),
                                this.fixed(),
                                !0)
                        }
                    }, {
                        key: "destroy",
                        value: function () {
                            return !!r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "destroy", this).call(this)
                        }
                    }, {
                        key: "fixed",
                        value: function () {
                            page.wrap.clientHeight <= v.vh()[0] ? page.wrap.classList.add("fixed") : page.wrap.classList.remove("fixed")
                        }
                    }]),
                    e
            }(),
                page[Lt] = new page[Lt]({
                    console: !1,
                    name: Lt
                }),
                page[Lt] = page[Lt].init(),
                Lt = "defaultPage",
                page[Lt] = function (t) {
                    function e() {
                        return n(this, e),
                            o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                    }
                    return a(e, v.Page),
                        s(e, [{
                            key: "init",
                            value: function () {
                                var t = this
                                    , i = r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "init", this).call(this);
                                return !!i && (i = Object.assign(i, {
                                    name: function () {
                                        return t.pageName
                                    }
                                }),
                                    this.obj = {},
                                    this.p = {},
                                    Object.assign(i, {
                                        obj: function () {
                                            return t.obj
                                        },
                                        p: function () {
                                            return t.p
                                        }
                                    }))
                            }
                        }, {
                            key: "create",
                            value: function () {
                                return false;
                            }
                        }, {
                            key: "show",
                            value: function () {
                                var t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                                r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "show", this).call(this, t),
                                    page.helpers.showAjaxHidden();
                                var i = 25;
                                return t && (i = 0),
                                    v.mobile() && (i = 0),
                                    this.obj.view && (this.obj.view.seek(),
                                        this.obj.view.changeProp({
                                            percent: .8
                                        })),
                                    0 < this.pageName.length && (0 < i ? setTimeout(page[this.pageName].show.bind(this, t), i) : page[this.pageName].show(t)),
                                    !0
                            }
                        }, {
                            key: "hide",
                            value: function () {
                                var t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                                return r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "hide", this).call(this, t),
                                    0 < this.pageName.length && page[this.pageName].hide(t),
                                    !0
                            }
                        }, {
                            key: "destroy",
                            value: function () {
                                var t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                                return r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "destroy", this).call(this, t),
                                    0 < this.pageName.length && page[this.pageName].destroy(t),
                                    !0
                            }
                        }]),
                        e
                }(),
                page.current = new page[Lt]({
                    console: !1,
                    name: Lt
                }),
                page.current = page.current.init(),
                page.current.create()
        }
            , {}]
    }, {}, [1]);
