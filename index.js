!(function() {
  "use strict";
  var f = "5.3.1";
  var m = (function() {
    function e() {
      this.exceptions = [];
    }
    return (
      (e.prototype.catchAndStoreException = function(e, t) {
        try {
          return void 0 === t ? e() : e.apply(this, t);
        } catch (e) {
          e instanceof Error
            ? this.exceptions.push(e)
            : this.exceptions.push(new Error(e));
        }
      }),
      (e.prototype.setProtectedTimeout = function(e, t) {
        var o = this;
        if (
          "undefined" != typeof window &&
          "function" == typeof window.setTimeout
        ) {
          return window.setTimeout(function() {
            return o.catchAndStoreException(e);
          }, t);
        }
      }),
      (e.prototype.addProtectedEventListener = function(e, t, o, i) {
        var n = this;
        if (void 0 !== e && "function" == typeof e.addEventListener) {
          return e.addEventListener(
            t,
            function() {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              return n.catchAndStoreException(o, e);
            },
            i
          );
        }
      }),
      (e.prototype.attachProtectedEvent = function(e, t, o) {
        var i = this;
        if (void 0 !== e && "function" == typeof e.attachEvent) {
          return e.attachEvent(t, function() {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            return i.catchAndStoreException(o, e);
          });
        }
      }),
      e
    );
  })();
  function b(e, t) {
    if (e instanceof Array)
      for (var o = 0, i = e; o < i.length; o++) {
        b(i[o], t);
      }
    else V(t, e) || t.push(e);
  }
  function V(e, t) {
    for (
      var o = JSON.stringify || encodeURIComponent || escape,
        i = o(t),
        n = 0,
        a = e;
      n < a.length;
      n++
    ) {
      var r = a[n];
      if (r === t || o(r) === i) return !0;
    }
    return !1;
  }
  function a(e, t) {
    var o = [];
    if (void 0 === e) return void 0 === t ? o : t.slice();
    if (void 0 === t) return e.slice();
    for (var i = 0, n = t; i < n.length; i++) {
      var a = n[i];
      V(e, a) || o.push(a);
    }
    return e.concat(o);
  }
  function I(e, t) {
    if (void 0 === e && void 0 === t) return !0;
    if (void 0 === e || void 0 === t) return !1;
    if (!(e instanceof Array)) return I([e], t);
    if (!(t instanceof Array)) return I(e, [t]);
    if (e.length !== t.length) return !1;
    for (var o = 0, i = e; o < i.length; o++) {
      if (!V(t, i[o])) return !1;
    }
    return !0;
  }
  var i,
    e,
    O = (function() {
      function a() {}
      return (
        (a.extractHostname = function(e) {
          var t = document.createElement("a");
          return (t.href = e), t.hostname;
        }),
        (a.getAnchorWithReferrer = function(e) {
          if (e && e.referrer) {
            var t = e.createElement("a");
            return (t.href = e.referrer), t;
          }
          return null;
        }),
        (a.getQueryString = function(t) {
          var o;
          try {
            o = t.top.location.search;
          } catch (e) {
            var i = t;
            try {
              for (; i.parent.document !== i.document && i.parent.document; )
                i = i.parent;
            } catch (e) {}
            if (i) {
              var n = a.getAnchorWithReferrer(i.document);
              n && (o = n.search);
            }
          }
          return o;
        }),
        (a.getHighestAccessibleUrl = function(e) {
          var t,
            o = a.getHighestAccessibleWindow(e),
            i = o.topFrame;
          if (o.err)
            try {
              try {
                t = i.top.location.href;
              } catch (e) {
                var n = i.location.ancestorOrigins;
                t = n[n.length - 1];
              }
            } catch (e) {
              t = i.document.referrer;
            }
          else t = i.location.href;
          return t;
        }),
        (a.onBodyReady = function(t, o) {
          !(function e() {
            document.body
              ? t.setProtectedTimeout(o, 0)
              : t.setProtectedTimeout(e, 10);
          })();
        }),
        (a.onDocumentReady = function(o, i) {
          if ("complete" === document.readyState) i();
          else if (document.addEventListener)
            o.addProtectedEventListener(document, "DOMContentLoaded", i, !1),
              o.addProtectedEventListener(window, "load", i, !1);
          else {
            o.attachProtectedEvent(document, "onreadystatechange", i),
              o.attachProtectedEvent(window, "onload", i);
            var e = !1;
            try {
              e = null === window.frameElement && document.documentElement;
            } catch (e) {}
            if (e && e.doScroll)
              !(function t() {
                if (e) {
                  try {
                    e.doScroll("left");
                  } catch (e) {
                    return void o.setProtectedTimeout(t, 50);
                  }
                  i();
                }
              })();
            else {
              var t = !1,
                n =
                  null === document.onload
                    ? null
                    : function(e, t) {
                        return e.onload(t);
                      },
                a =
                  null === document.onreadystatechange
                    ? null
                    : function(e, t) {
                        return e.onreadystatechange(t);
                      };
              document.onload = document.onreadystatechange = function(e) {
                a instanceof Function && a(document, e),
                  t ||
                    (document.readyState &&
                      "complete" !== document.readyState) ||
                    (n instanceof Function && n(document, e), (t = !0), i());
              };
            }
          }
        }),
        (a.removeLater = function(e, t) {
          e.setProtectedTimeout(function() {
            null !== t &&
              null !== t.parentElement &&
              t.parentElement.removeChild(t);
          }, 3e4);
        }),
        (a.appendCriteoContainer = function(e) {
          if (!e) return null;
          var t = document.createElement("div");
          return (
            t.setAttribute("id", "criteo-tags-div"),
            (t.style.display = "none"),
            e.appendChild(t),
            t
          );
        }),
        (a.getHighestAccessibleWindow = function(e) {
          var t = e,
            o = !1;
          try {
            for (; t.parent.document !== t.document; ) {
              if (!t.parent.document) {
                o = !0;
                break;
              }
              t = t.parent;
            }
          } catch (e) {
            o = !0;
          }
          return { topFrame: t, err: o };
        }),
        a
      );
    })();
  function R(e) {
    var t = e;
    if (e instanceof Function) return (t = e()) instanceof Function ? t : R(t);
    if (e instanceof Array) {
      t = [];
      for (var o = 0; o < e.length; ++o) t[o] = R(e[o]);
    } else if (e && "[object Object]" === e.toString()) {
      t = {};
      for (var i = 0, n = Object.getOwnPropertyNames(e); i < n.length; i++) {
        var a = n[i];
        t[a] = R(e[a]);
      }
    }
    return t;
  }
  function F(e, t) {
    for (var o = 0, i = e; o < i.length; o++) {
      var n = i[o];
      if (n.event === t.event && I(t.account, n.account)) {
        for (var a in t)
          t.hasOwnProperty(a) && "account" !== a && (n[a] = t[a]);
        return;
      }
    }
    e.push(t);
  }
  function _(e, t) {
    for (var o = 0, i = e; o < i.length; o++) {
      var n = i[o];
      if (
        n.event === t.event &&
        I(t.account, n.account) &&
        n.hash_method === t.hash_method
      )
        return void (
          void 0 !== t.email &&
          (n.email = a(
            n.email instanceof Array || void 0 === n.email
              ? n.email
              : [n.email],
            t.email instanceof Array ? t.email : [t.email]
          ))
        );
    }
    e.push(t);
  }
  function D(e, t, o) {
    var i = R(o);
    return T(e, i), F(t, R(i)), 1;
  }
  function T(e, t) {
    for (var o = 0, i = e; o < i.length; o++) {
      var n = i[o];
      if (
        (n.event === t.event && void 0 === t.account && void 0 === n.account) ||
        I(t.account, n.account)
      ) {
        for (var a in t)
          t.hasOwnProperty(a) && "account" !== a && (n[a] = t[a]);
        return;
      }
    }
    e.push(t);
  }
  ((e = i || (i = {}))[(e.None = 0)] = "None"),
    (e[(e.Cookie = 1)] = "Cookie"),
    (e[(e.LocalStorage = 2)] = "LocalStorage");
  var p = (function() {
      function e(e, t) {
        (this.cookieValue = null),
          (this.isCookieValueExternallySet = !1),
          (this.isCookieRead = !1),
          (this.cookieName = e),
          (this.cookieRetentionTimeInMs = t),
          (this.cookieOrigin = i.None),
          (this.useLocalStorage = this.checkLocalStorage());
      }
      return (
        (e.prototype.checkLocalStorage = function() {
          try {
            if (!window.localStorage) return !1;
            var e = "criteo_localstorage_check";
            return (
              window.localStorage.setItem(e, e),
              window.localStorage.removeItem(e),
              !0
            );
          } catch (e) {
            return !1;
          }
        }),
        (e.prototype.setCookieRead = function() {
          this.isCookieRead = !0;
        }),
        (e.prototype.setValue = function(e) {
          (this.cookieValue = e),
            (this.isCookieValueExternallySet = !0),
            this.writeOnAllStorages(e);
        }),
        (e.prototype.setValueFromExistingCookie = function() {
          var e = this.getValue();
          void 0 !== e &&
            ((this.cookieValue = e), (this.cookieOrigin |= i.Cookie));
        }),
        (e.prototype.setValueFromAllStorages = function() {
          var e = this.getFromAllStorages();
          (this.cookieValue = e.value), (this.cookieOrigin = e.origin);
        }),
        (e.prototype.getValue = function() {
          for (var e = 0, t = document.cookie.split(";"); e < t.length; e++) {
            var o = t[e];
            if (
              o.substr(0, o.indexOf("=")).replace(/^\s+|\s+$/g, "") ===
              this.cookieName
            ) {
              var i = o.substr(o.indexOf("=") + 1);
              return (decodeURIComponent || unescape)(i);
            }
          }
        }),
        (e.prototype.remove = function() {
          this.setOnMainDomainWithExpiration("", 0);
        }),
        (e.prototype.setOnMainDomain = function(e) {
          return this.setOnMainDomainWithExpiration(
            e,
            this.cookieRetentionTimeInMs
          );
        }),
        (e.prototype.writeOnAllStorages = function(e) {
          this.setOnMainDomain(e),
            this.useLocalStorage &&
              window.localStorage.setItem(this.cookieName, e);
        }),
        (e.prototype.getFromAllStorages = function() {
          var e = null;
          this.useLocalStorage &&
            (e = window.localStorage.getItem(this.cookieName));
          var t = this.getValue() || null;
          return { value: t || e, origin: this.computeStorageOrigin(t, e) };
        }),
        (e.prototype.removeFromAllStorages = function() {
          this.remove(),
            this.useLocalStorage &&
              window.localStorage.removeItem(this.cookieName);
        }),
        (e.prototype.setValueWitNoDomain = function(e) {
          var t = new Date();
          t.setTime(t.getTime() + this.cookieRetentionTimeInMs);
          var o = "expires=" + t.toUTCString(),
            i = encodeURIComponent || escape;
          document.cookie = this.cookieName + "=" + i(e) + ";" + o + ";path=/";
          var n = this.getValue();
          void 0 !== n && (this.cookieValue = n);
        }),
        (e.prototype.toFragmentData = function() {
          return { origin: this.cookieOrigin, value: this.cookieValue };
        }),
        (e.prototype.setOnMainDomainWithExpiration = function(e, t) {
          var o = new Date();
          o.setTime(o.getTime() + t);
          for (
            var i = "expires=" + o.toUTCString(),
              n =
                null === document.location
                  ? []
                  : document.location.hostname.split("."),
              a = null,
              r = 0;
            r < n.length;
            ++r
          ) {
            var s =
                "domain=." +
                (a = n.slice(n.length - r - 1, n.length).join(".")),
              c = encodeURIComponent || escape;
            document.cookie =
              this.cookieName + "=" + c(e) + ";" + i + ";" + s + ";path=/";
            var u = this.getValue();
            if (u && u === e) break;
          }
          return a || document.location;
        }),
        (e.prototype.computeStorageOrigin = function(e, t) {
          var o = i.None;
          return e && (o |= i.Cookie), t && (o |= i.LocalStorage), o;
        }),
        e
      );
    })(),
    N = (function() {
      function e(e, t, o) {
        (this.readonlyCookieRetentionTime = 0),
          (this.optoutCookieRetentionTime = 15768e7),
          (this.identificationCookieRetentionTime = 34164e6),
          (this.acidCookie = new p(
            "criteo_acid",
            this.readonlyCookieRetentionTime
          )),
          (this.axidCookie = new p(
            "cto_axid",
            this.readonlyCookieRetentionTime
          )),
          (this.ccpCookie = new p(
            "criteo_cookie_perm",
            this.readonlyCookieRetentionTime
          )),
          (this.guidCookie = new p(
            "cto_idcpy",
            this.identificationCookieRetentionTime
          )),
          (this.idfsCookie = new p(
            "cto_idfs",
            this.identificationCookieRetentionTime
          )),
          (this.lwidCookie = new p(
            "cto_lwid",
            this.identificationCookieRetentionTime
          )),
          (this.optoutCookie = new p(
            "cto_optout",
            this.optoutCookieRetentionTime
          )),
          (this.pxsigCookie = new p(
            "cto_pxsig",
            this.readonlyCookieRetentionTime
          )),
          (this.secureIdCookie = new p(
            "cto_sid",
            this.identificationCookieRetentionTime
          )),
          (this.bundleCookie = new p(
            "cto_bundle",
            this.identificationCookieRetentionTime
          )),
          (this.canWriteCookie = !1),
          (this.clickOriginPayload = null),
          (this.tld = this.getTld()),
          (this.privateMode = this.getPrivateMode(t, o)),
          (this.exceptionHandler = e);
      }
      return (
        (e.prototype.fillQueryStringParams = function(e) {
          this.gaid && e.push("ai=" + this.gaid),
            this.idfa && e.push("idfa=" + this.idfa),
            null !== this.acidCookie.cookieValue &&
              e.push("acid=" + this.acidCookie.cookieValue),
            null !== this.axidCookie.cookieValue &&
              e.push("axid=" + this.axidCookie.cookieValue),
            null !== this.pxsigCookie.cookieValue &&
              e.push("pxsig=" + this.pxsigCookie.cookieValue),
            this.canWriteCookie && e.push("adce=1"),
            null !== this.ccpCookie.cookieValue &&
              e.push("ccp=" + this.ccpCookie.cookieValue),
            null !== this.clickOriginPayload &&
              e.push("cop=" + this.clickOriginPayload),
            null !== this.guidCookie.cookieValue &&
              (e.push("idcpy=" + this.guidCookie.cookieValue),
              e.push("iddom=" + document.location.hostname)),
            null !== this.idfsCookie.cookieValue &&
              e.push("idfs=" + this.idfsCookie.cookieValue),
            this.idfsCookie.isCookieRead && e.push("idfs_read=1"),
            null !== this.optoutCookie.cookieValue && e.push("optout=1"),
            null != this.bundleCookie.cookieValue &&
              e.push("bundle=" + this.bundleCookie.cookieValue),
            null !== this.secureIdCookie.cookieValue &&
              (e.push("sid=" + this.secureIdCookie.cookieValue),
              e.push(
                "sid_read=" +
                  (this.secureIdCookie.isCookieValueExternallySet ? "1" : "0")
              )),
            null !== this.lwidCookie.cookieValue &&
              e.push("lwid=" + this.lwidCookie.cookieValue),
            null !== this.tld && e.push("tld=" + this.tld),
            null !== this.privateMode &&
              0 !== this.privateMode &&
              e.push("pm=" + this.privateMode),
            void 0 !==
              new p("cto_clc", this.readonlyCookieRetentionTime).getValue() &&
              e.push("clc=1");
        }),
        (e.prototype.checkAcid = function() {
          this.acidCookie.setValueFromExistingCookie(),
            void 0 !== this.optoutCookie.getValue()
              ? this.axidCookie.setValue("optout")
              : this.axidCookie.setValueFromExistingCookie(),
            this.pxsigCookie.setValueFromExistingCookie(),
            this.setCanWriteCookie();
        }),
        (e.prototype.setCop = function(e) {
          var t = O.getQueryString(e);
          if (
            (void 0 !== t &&
              (this.clickOriginPayload = this.getParameterValueByName(
                t,
                "cto_pld"
              )),
            null === this.clickOriginPayload)
          )
            try {
              var o = O.getAnchorWithReferrer(e.top.document);
              o &&
                o.search &&
                (this.clickOriginPayload = this.getParameterValueByName(
                  o.search,
                  "cto_pld"
                ));
            } catch (e) {}
        }),
        (e.prototype.checkClientSideIdentityStatus = function(e) {
          this.guidCookie.setValueFromAllStorages(),
            this.optoutCookie.getFromAllStorages(),
            this.idfsCookie.setValueFromAllStorages(),
            this.secureIdCookie.setValueFromAllStorages(),
            this.bundleCookie.setValueFromAllStorages(),
            this.getOrSetLwidIfNotDefined(e);
        }),
        (e.prototype.checkCookies = function(e) {
          if ((e.idfsRead && this.idfsCookie.setCookieRead(), e.callbacks))
            for (
              var t = 0,
                o =
                  "string" == typeof e.callbacks ? [e.callbacks] : e.callbacks;
              t < o.length;
              t++
            ) {
              var i = o[t],
                n = document.createElement("img");
              n.setAttribute("style", "display:none;"),
                n.setAttribute("width", "1"),
                n.setAttribute("height", "1"),
                n.setAttribute("data-owner", "criteo-tag"),
                n.setAttribute("src", i);
              var a = document.getElementsByTagName("script")[0];
              a.parentNode.insertBefore(n, a),
                O.removeLater(this.exceptionHandler, n);
            }
          else
            e.optout
              ? (this.optoutCookie.setValue("1"),
                this.guidCookie.removeFromAllStorages(),
                this.idfsCookie.removeFromAllStorages(),
                this.secureIdCookie.removeFromAllStorages(),
                this.bundleCookie.removeFromAllStorages())
              : (e.uid && this.guidCookie.setValue(e.uid),
                e.idfs && this.idfsCookie.setValue(e.idfs),
                e.bundle && this.bundleCookie.setValue(e.bundle),
                e.removeSid
                  ? this.secureIdCookie.removeFromAllStorages()
                  : e.sid && this.secureIdCookie.setValue(e.sid));
        }),
        (e.prototype.getOrSetLwidIfNotDefined = function(e) {
          if (
            (this.lwidCookie.setValueFromAllStorages(), this.canWriteCookie)
          ) {
            var t = this.lwidCookie.cookieValue,
              o = t || e();
            this.lwidCookie.writeOnAllStorages(o),
              this.lwidCookie.setValueFromAllStorages();
          }
        }),
        (e.prototype.getParameterValueByName = function(e, t) {
          if (e && 1 < e.length) {
            "?" === e[0] && (e = "&" + e.substr(1));
            var o = "&" + t + "=",
              i = e.indexOf(o);
            if (-1 !== i) {
              var n = e.indexOf("&", i + o.length);
              return e.slice(i + o.length, n < 0 ? void 0 : n);
            }
          }
          return null;
        }),
        (e.prototype.setCanWriteCookie = function() {
          if (
            null === this.acidCookie.cookieValue &&
            null === this.axidCookie.cookieValue &&
            null === this.pxsigCookie.cookieValue
          ) {
            var e = new p("criteo_write_test", 1e4);
            e.setValueWitNoDomain("ChUIBBINbXlHb29nbGVSdGJJZBgBIAE"),
              (this.canWriteCookie = void 0 !== e.cookieValue),
              e.remove();
          } else this.canWriteCookie = !0;
        }),
        (e.prototype.getTld = function() {
          var e = new p("cto_tld_test", 36e5),
            t = e.setOnMainDomain("woot");
          return e.remove(), t;
        }),
        (e.prototype.getPrivateMode = function(e, t) {
          if (e.isSafari)
            try {
              if ("function" == typeof t.openDatabase)
                return t.openDatabase(null, null, null, null), 1;
            } catch (e) {
              return 2;
            }
          return 0;
        }),
        e
      );
    })(),
    M = (function() {
      function e(e) {
        (this.forceSyncFrame = !1),
          (this.gumSyncFrameEndPoint =
            window.CriteoSyncFrameUrlOverride ||
            "https://gum.criteo.com/syncframe"),
          (this.gumSyncFrameId = "criteo-syncframe"),
          (this.isSyncframeLoading = e.isSafari || e.isAndroid || e.isFirefox),
          (this.waitingForSyncframe = e.hasItp);
      }
      return (
        (e.prototype.createIframe = function(e, t, o) {
          var i = document.createElement("iframe"),
            n = encodeURIComponent || escape,
            a = O.getHighestAccessibleUrl(window),
            r = n(O.extractHostname(a)),
            s = {
              bundle: e.bundleCookie.toFragmentData(),
              cw: e.canWriteCookie,
              idfs: e.idfsCookie.toFragmentData(),
              lwid: e.lwidCookie.toFragmentData(),
              optout: e.optoutCookie.toFragmentData(),
              origin: window.SYNCFRAME_ORIGIN || "onetag",
              pm: e.privateMode,
              sid: e.secureIdCookie.toFragmentData(),
              tld: e.tld,
              topUrl: r,
              uid: e.guidCookie.cookieValue,
              version: t.replace(/\./g, "_")
            },
            c = this.gumSyncFrameEndPoint;
          return (
            "#gum-debug-mode" === window.location.hash
              ? (c += "?debug=1&topUrl=" + r)
              : (c += "?topUrl=" + r),
            (c += "#" + JSON.stringify(s)),
            (i.src = c),
            (i.id = this.gumSyncFrameId),
            (i.width = "0"),
            (i.height = "0"),
            (i.frameBorder = "0"),
            i.setAttribute(
              "style",
              "border-width:0px; margin:0px; display:none"
            ),
            (i.title = "Criteo GUM iframe"),
            O.removeLater(o, i),
            i
          );
        }),
        (e.prototype.setWaitingFlag = function(e) {
          this.waitingForSyncframe =
            this.waitingForSyncframe &&
            null === e.guidCookie.cookieValue &&
            null === e.secureIdCookie.cookieValue &&
            null === e.optoutCookie.cookieValue &&
            null === e.idfsCookie.cookieValue;
        }),
        (e.prototype.shouldInjectSyncframe = function() {
          var e =
            (this.isSyncframeLoading && void 0 !== window.addEventListener) ||
            this.forceSyncFrame;
          return e || (this.isSyncframeLoading = !1), e;
        }),
        e
      );
    })();
  var L = new RegExp(
      /^Mozilla\/5\.0 \([^)]+\) AppleWebKit\/[^ ]+ \(KHTML, like Gecko\) Version\/([^ ]+)( Mobile\/[^ ]+)? Safari\/[^ ]+$/i
    ),
    U = (function() {
      function e() {
        (this.timings = { initTime: null, pushTime: null }),
          (this.beginInit = null),
          (this.beginPush = null),
          (this.hasPerformanceApi =
            void 0 !== window.performance &&
            "function" == typeof window.performance.now);
      }
      return (
        (e.prototype.canRetrieveMetrics = function() {
          return this.hasPerformanceApi;
        }),
        (e.prototype.startRecordingInit = function() {
          this.canRetrieveMetrics() && (this.beginInit = performance.now());
        }),
        (e.prototype.stopRecordingInit = function() {
          if (
            this.canRetrieveMetrics() &&
            null === this.timings.initTime &&
            null !== this.beginInit
          ) {
            var e = performance.now();
            this.timings.initTime = e - this.beginInit;
          }
        }),
        (e.prototype.startRecordingPush = function() {
          this.canRetrieveMetrics() && (this.beginPush = performance.now());
        }),
        (e.prototype.stopRecordingPush = function() {
          if (
            this.canRetrieveMetrics() &&
            null === this.timings.pushTime &&
            null !== this.beginPush &&
            null !== this.timings.initTime
          ) {
            var e = performance.now();
            this.timings.pushTime = e - this.beginPush;
          }
        }),
        (e.prototype.getPerformanceOrDegradedNow = function() {
          return this.canRetrieveMetrics()
            ? performance.now()
            : new Date().getTime();
        }),
        e
      );
    })(),
    B = (function() {
      function e() {
        (this.abe = void 0), (this.isCbsEnabled = !1), (this.uat = void 0);
      }
      return (
        (e.prototype.trySetPageId = function(e, t) {
          this.isCbsEnabled &&
            this.checkNotExistOrEmpty(e.page_id) &&
            (e.page_id = t);
        }),
        (e.prototype.tryForceViewListPageId = function(e) {
          this.isCbsEnabled &&
            this.checkNotExistOrEmpty(e.page_id) &&
            (this.checkNotExistOrEmpty(e.category)
              ? this.checkNotExistOrEmpty(e.keywords)
                ? (e.page_id = "viewList")
                : (e.page_id = "viewSearchResult")
              : (e.page_id = "viewCategory"));
        }),
        (e.prototype.tryRunActionAfterAdBlockDetectionOrImmediate = function(
          t,
          e
        ) {
          var o = this,
            i = window.criteo_q;
          if (null != i) {
            var n = i.adBlockDetector;
            this.isCbsEnabled && void 0 !== n
              ? (n(function(e) {
                  (o.abe = e), t();
                }),
                e(t))
              : t();
          } else t();
        }),
        (e.prototype.tryAppendAdBlockerParameter = function(e) {
          void 0 !== this.abe && e.push("abe=" + (this.abe ? 1 : 0));
        }),
        (e.prototype.tryAppendUatParameter = function(e) {
          if (this.isCbsEnabled && void 0 !== this.uat) {
            var t = encodeURIComponent || escape;
            e.push("uat=" + t(this.uat));
          }
        }),
        (e.prototype.clean = function() {
          (this.abe = void 0), (this.isCbsEnabled = !1), (this.uat = void 0);
        }),
        (e.prototype.enable = function() {
          this.isCbsEnabled = !0;
        }),
        (e.prototype.setUat = function(e) {
          this.uat = e;
        }),
        (e.prototype.checkNotExistOrEmpty = function(e) {
          return void 0 === e || "" === e;
        }),
        e
      );
    })();
  var g = /^\#(enable|disable)-criteo-tag-debug-mode(\=(\d+))?$/;
  function q(e, t, o, i, n) {
    if (
      ((function() {
        if (!document || !window.location.hash) return;
        var e = g.exec(window.location.hash);
        if (!e || 4 !== e.length) return;
        var t = "enable" === e[1],
          o = Number(e[3]);
        new p("criteoTagDebugMode", t ? 864e5 : 0).setValueWitNoDomain(
          t && o && !isNaN(o) ? String(o) : "0"
        ),
          (window.location.href = window.location.href.substr(
            0,
            window.location.href.indexOf("#")
          ));
      })(),
      document &&
        "function" == typeof Array.prototype.indexOf &&
        -1 !== document.cookie.indexOf("criteoTagDebugMode="))
    ) {
      var a =
        ((s = t),
        (c = o),
        (u = i),
        (l = n),
        (d = {
          exceptions: (r = e).exceptions,
          m_config: c,
          m_state: u,
          originalPush: r.push,
          performances: r.performances,
          push: function() {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            0 < e.length && this.stagedPushes.push(e), l.stopRecordingInit();
          },
          pushError: function(e) {
            this.stagedPushes.push(e);
          },
          removeLater: r.removeLater,
          setProtectedTimeout: s.setProtectedTimeout,
          stagedErrors: [],
          stagedPushes: []
        }),
        (window.onerror =
          ((h = window.onerror),
          function(e, t, o, i) {
            var n = { column: i, lineNumber: o, message: e, url: t };
            return (
              d.pushError(n),
              !(!h || "function" != typeof h) && h.apply(window, [e, t, o, i])
            );
          })),
        d);
      return (
        (function() {
          if (!document) return;
          var e = "ld-tag-debug." + f + ".js",
            t = document.createElement("script");
          t.setAttribute("type", "text/javascript"),
            t.setAttribute(
              "src",
              document.location.protocol + "//static.criteo.net/js/ld/" + e
            );
          var o = document.getElementsByTagName("script")[0];
          o.parentNode.insertBefore(t, o);
        })(),
        a
      );
    }
    return e;
    var r, s, c, u, l, d, h;
  }
  if (!window.criteo_q || window.criteo_q instanceof Array) {
    var t = window.criteo_q || [];
    (window.criteo_q = (function() {
      var x = new m(),
        c = new U();
      c.startRecordingInit();
      var e,
        t,
        o,
        i,
        n,
        a,
        r,
        g = {
          app: {
            accounts: [],
            actions: [],
            bodyReady: !1,
            disingScheduled: [],
            domReady: !1,
            queue: []
          },
          cbs: new B()
        },
        v =
          ((e =
            null !== document.location &&
            "https:" === document.location.protocol
              ? "https://sslwidget."
              : "http://widget."),
          {
            hooks: {},
            shortNameMap: {
              events: {
                applaunched: "al",
                viewitem: "vp",
                viewhome: "vh",
                viewlist: "vl",
                viewbasket: "vb",
                viewsearch: "vs",
                tracktransaction: "vc",
                addtocart: "ac",
                calldising: "dis",
                setdata: "exd",
                setemail: "ce"
              },
              properties: {
                event: "e",
                account: "a",
                currency: "c",
                product: "p",
                item: "p",
                "item.id": "i",
                "item.price": "pr",
                "item.quantity": "q",
                "product.id": "i",
                "product.price": "pr",
                "product.quantity": "q",
                data: "d",
                keywords: "kw",
                checkin_date: "din",
                checkout_date: "dout",
                deduplication: "dd",
                delivery: "dl",
                attribution: "at",
                "attribution.channel": "ac",
                "attribution.value": "v",
                user_segment: "si",
                new_customer: "nc",
                customer_id: "ci",
                email: "m",
                hash_method: "h",
                transaction_value: "tv",
                responseType: "rt",
                page_name: "pn",
                page_id: "pi",
                page_number: "pnb",
                category: "ca",
                filters: "f",
                "filters.name": "fn",
                "filters.operator": "fo",
                "filters.value": "fv",
                retailer_visitor_id: "rvi",
                price: "pr",
                availability: "av",
                sub_event_type: "se",
                store_id: "s",
                item_group_id: "sp",
                sku_parent: "sp",
                zipcode: "z"
              }
            },
            trackingCallData: {
              account: null,
              customerInfo: [],
              extraData: [],
              handlerParams: { v: f },
              handlerResponseType: "single",
              handlerUrlPrefix: e + "criteo.com/event",
              partnerPayload: null,
              responseType: "js",
              tagVersion: f
            },
            workflow: {
              container: null,
              disOnce: !1,
              manualDising: !1,
              manualFlush: !1,
              noPartialFlush: !1,
              partialDis: !1
            }
          }),
        s =
          ((t = window.navigator.userAgent),
          (o = t.match(L)),
          (i = t.toLowerCase()),
          (n = null !== o),
          (a = -1 < i.indexOf("android")),
          (r = -1 < i.indexOf("firefox")),
          {
            hasItp: null !== o && 11 <= parseFloat(o[1]),
            isSafari: n,
            isAndroid: a,
            isFirefox: r
          }),
        y = new N(x, s, window),
        k = new M(s);
      function w(e, t, o, i, n, a, r, s) {
        e.waitingForSyncframe &&
          ((e.waitingForSyncframe = !1), h(e, t, o, i, n, a, r, s));
      }
      function u(d, h, p, f, m, g, v, y) {
        if (d.shouldInjectSyncframe()) {
          var e = d.createIframe(f, g.tagVersion, x);
          window.addEventListener &&
            (x.addProtectedEventListener(
              window,
              "message",
              function(e) {
                var t, o, i, n, a, r, s, c, u, l;
                (t = d),
                  (o = h),
                  (i = p),
                  (n = f),
                  (a = m),
                  (r = g),
                  (s = v),
                  (c = y),
                  (l = (u = e).data) &&
                    l.isCriteoMessage &&
                    (u.stopPropagation(),
                    (t.isSyncframeLoading = !1),
                    n.checkCookies(l),
                    t.waitingForSyncframe && w(t, o, i, n, a, r, s, c));
              },
              !0
            ),
            h.queue.push({ event: "appendtag", element: e }));
        }
      }
      function l(e, t) {
        !(function(e) {
          var t = !1;
          if (200 < e.length) t = !0;
          else
            for (var o = 0, i = e; o < i.length; o++) {
              var n = i[o],
                a = 0;
              if (Object.keys) a = Object.keys(n).length;
              else
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (a += 1);
              if (200 < a) {
                t = !0;
                break;
              }
            }
          t && (e.length = 0);
        })(e.extraData),
          (e.customerInfo = []),
          t.clean();
      }
      function d() {
        for (var i = [], e = 0; e < arguments.length; e++) i[e] = arguments[e];
        x.catchAndStoreException(function() {
          c.startRecordingPush();
          for (var e = 0, t = i; e < t.length; e++) {
            var o = t[e];
            g.app.queue.push(o);
          }
          h(
            k,
            g.app,
            g.cbs,
            y,
            v.shortNameMap,
            v.trackingCallData,
            v.hooks,
            v.workflow
          ),
            l(v.trackingCallData, g.cbs),
            c.stopRecordingPush();
        }, arguments),
          c.stopRecordingInit();
      }
      function h(e, t, o, i, n, a, r, s) {
        for (var c = [], u = t.queue, l = 0; l < u.length; ++l) {
          var d = u[l];
          if (d instanceof Array) {
            var h = [l + 1, 0];
            u.splice.apply(u, h.concat(d));
          }
          if (d instanceof Function) u.splice(l + 1, 0, d());
          else if (d && "[object Object]" === d.toString())
            switch (p(t, o, i, n, a, r, s, d, l, u, c)) {
              case 0:
                c.push(d);
                break;
              case -1:
                (c = c.concat(u.slice(l))), (l = u.length);
            }
        }
        r.afterEval instanceof Function && r.afterEval(),
          (t.queue = c || []),
          s.manualFlush ||
            (s.noPartialFlush && 0 !== t.queue.length) ||
            e.waitingForSyncframe ||
            C(t, o, i, n, a, r, s, 0 !== t.queue.length);
      }
      function S(e, t, o) {
        o.hasOwnProperty("account") || (o.account = t.accounts);
        var i = e.handlerResponseType;
        o.hasOwnProperty("type") && ((i = o.type), delete o.type),
          b(o.account, t.disingScheduled),
          "sequential" === i && (o.dc = !0);
      }
      function P(e, t, o, i) {
        if (
          (!e.bodyReady ||
            (t.container && document.body.contains(t.container)) ||
            (t.container = O.appendCriteoContainer(document.body)),
          i.url)
        ) {
          var n = void 0;
          i.isImgUrl
            ? ((n = document.createElement("img")).setAttribute(
                "style",
                "display:none;"
              ),
              n.setAttribute("width", "1"),
              n.setAttribute("height", "1"))
            : ((n = document.createElement("script")).setAttribute(
                "async",
                "true"
              ),
              n.setAttribute("type", "text/javascript")),
            n.setAttribute("src", i.url),
            (i.element = n);
        }
        if (
          (o.beforeAppend instanceof Function &&
            (i.element = o.beforeAppend(i.element)),
          R(i),
          i.element && (i.element.tagName || i.isImgUrl))
        )
          if (
            t.container ||
            ("script" !== i.element.tagName.toLowerCase() && !i.isImgUrl)
          ) {
            if (!t.container) return 0;
            t.container.appendChild(i.element), O.removeLater(x, i.element);
          } else {
            var a = document.getElementsByTagName("script")[0];
            i.element.setAttribute("data-owner", "criteo-tag"),
              a.parentNode.insertBefore(i.element, a),
              O.removeLater(x, i.element);
          }
        return 1;
      }
      function A(e, t) {
        return !e.domReady && t.requiresDOM && "no" !== t.requiresDOM
          ? "blocking" === t.requiresDOM
            ? -1
            : 0
          : (delete t.requiresDOM,
            t.event
              ? (t.account && b(t.account, e.accounts),
                (t.event = t.event.toLowerCase()),
                null)
              : (R(t), 1));
      }
      function p(e, t, o, i, n, a, r, s, c, u, l) {
        var d = s.event,
          h = A(e, s);
        if (null !== h) return h;
        switch (s.event) {
          case "setdata":
            return D(n.extraData, e.actions, s);
          case "setparameter":
            for (var p in s)
              "event" !== p.toLowerCase() &&
                s.hasOwnProperty(p) &&
                (n.handlerParams[p] = s[p]);
            return 1;
          case "calldising":
            S(n, e, s);
            break;
          case "setzipcode":
          case "setstore":
            return (s.event = "setdata"), D(n.extraData, e.actions, s);
          case "setcustomerid":
            return (
              (s.event = "setdata"),
              (s.customer_id = s.id),
              delete s.id,
              D(n.extraData, e.actions, s)
            );
          case "setretailervisitorid":
            return (
              t.enable(),
              (s.event = "setdata"),
              (s.retailer_visitor_id = s.id),
              delete s.id,
              D(n.extraData, e.actions, s)
            );
          case "setgoogleadvertisingid":
            return (
              (o.gaid = s.gaid),
              D(n.extraData, e.actions, { event: "setdata", site_type: "aa" })
            );
          case "setappleadvertisingid":
            return (
              (o.idfa = s.idfa),
              D(n.extraData, e.actions, { event: "setdata", site_type: "aios" })
            );
          case "setemail":
          case "sethashedemail":
          case "ceh":
            (s.event = "setemail"),
              s.hasOwnProperty("email") &&
                (s.email instanceof Array || (s.email = [s.email]),
                (s.email = (function(e) {
                  for (var t = [], o = 0, i = e; o < i.length; o++) {
                    var n = i[o];
                    null != n && t.push(n);
                  }
                  return t;
                })(s.email)));
            var f = R(s);
            return n.customerInfo.push(f), _(e.actions, R(s)), 1;
          case "setsitetype":
            var m = "d";
            return (
              ("mobile" !== s.type && "m" !== s.type) || (m = "m"),
              ("tablet" !== s.type && "t" !== s.type) || (m = "t"),
              (s.event = "setdata"),
              delete s.type,
              (s.site_type = m),
              D(n.extraData, e.actions, s)
            );
          case "appendtag":
            return P(e, r, a, s);
          case "gettagstate":
            return s.callback instanceof Function ? s.callback(g, v, y, k) : 1;
          case "setuat":
            return t.setUat(s.uat), 1;
          case "viewsearchresult":
          case "viewcategory":
            t.trySetPageId(s, d), (s.event = "viewlist");
            break;
          case "viewlist":
            t.tryForceViewListPageId(s);
            break;
          case "viewitem":
          case "viewhome":
          case "viewbasket":
          case "tracktransaction":
          case "addtocart":
            t.trySetPageId(s, d);
            break;
          case "viewstore":
            t.trySetPageId(s, d),
              (s.event = "viewHome"),
              (s.sub_event_type = "s");
            break;
          case "checkavailability":
            t.trySetPageId(s, d),
              (s.event = "viewBasket"),
              (s.sub_event_type = "a");
            break;
          case "reserveinstore":
            t.trySetPageId(s, d),
              (s.event = "viewBasket"),
              (s.sub_event_type = "r");
            break;
          case "flush":
          case "flushevents":
            return (
              C(e, t, o, i, n, a, r, c !== u.length - 1 || 0 !== l.length), 1
            );
          case "setaccount":
            return (n.account = s.account), 1;
          case "seturl":
            return (n.handlerUrlPrefix = s.url), 1;
          case "setcalltype":
            return (n.handlerResponseType = s.type), 1;
          case "setresponsetype":
            return (n.responseType = s.type), 1;
          case "setpartnerpayload":
            return (n.partnerPayload = s.payload), 1;
          case "oninitialized":
            return (a.onInitialized = s.callback), 1;
          case "ondomready":
            return (a.onDOMReady = s.callback), 1;
          case "beforeappend":
            return (a.beforeAppend = s.callback), 1;
          case "aftereval":
            return (a.afterEval = s.callback), 1;
          case "onflush":
            return (a.onFlush = s.callback), 1;
          case "disonce":
            return (r.disOnce = !0), 1;
          case "manualdising":
            return (r.manualDising = !0), 1;
          case "manualflush":
            return (r.manualFlush = !0), 1;
          case "nopartialflush":
            return (r.noPartialFlush = !0), 1;
          case "disonpartialflush":
            return (r.partialDis = !0), 1;
        }
        return e.actions.push(R(s)), 1;
      }
      function C(c, u, e, t, l, d, h, o) {
        if (
          (d.onFlush instanceof Function &&
            (d.onFlush(),
            console.warn(
              "on flush hook is deprecated and will soon be removed. Please do not use it and contact criteo if you think this may break your integration"
            )),
          0 !== c.actions.length)
        ) {
          for (var i = 0, n = l.extraData; i < n.length; i++) {
            var a = n[i];
            F(c.actions, a);
          }
          for (var r = 0, s = l.customerInfo; r < s.length; r++) {
            var p = s[r];
            _(c.actions, p);
          }
          if (!h.manualDising && (!o || h.partialDis)) {
            for (var f = [], m = 0, g = c.accounts; m < g.length; m++) {
              var v = g[m];
              V(c.disingScheduled, v) || f.push(v);
            }
            0 < f.length &&
              ((y = l),
              null !== A((k = c), (w = { event: "callDising", account: f })) ||
                (S(y, k, w), k.actions.push(R(w))));
          }
          var y,
            k,
            w,
            C = !1,
            b = (function(e, t, o, i, n) {
              var a = e.actions,
                r = [];
              if (
                (1 === e.accounts.length && (n.account = e.accounts[0]),
                null !== n.account && r.push("a=" + E(i, n.account, [])),
                "js" !== n.responseType &&
                  r.push("rt=" + E(i, n.responseType, [])),
                n.handlerParams)
              ) {
                var s = decodeURIComponent(E(i, n.handlerParams, []));
                s && r.push(s);
              }
              t.tryAppendUatParameter(r);
              for (var c = 0; c < a.length; ++c) {
                var u = a[c];
                u.account &&
                  I(
                    null === n.account ? void 0 : n.account,
                    null === u.account ? void 0 : u.account
                  ) &&
                  delete u.account,
                  r.push("p" + c + "=" + E(i, u, []));
              }
              return (
                o.fillQueryStringParams(r),
                null !== n.partnerPayload &&
                  r.push("pp=" + E(i, n.partnerPayload, [])),
                r.push("dtycbr=" + Math.floor(1e5 * Math.random())),
                r
              );
            })(c, u, e, t, l);
          (c.actions = []),
            u.tryRunActionAfterAdBlockDetectionOrImmediate(
              function() {
                if (!C) {
                  (C = !0), u.tryAppendAdBlockerParameter(b);
                  var e,
                    t,
                    o,
                    i,
                    n,
                    a,
                    r = b.join("&"),
                    s =
                      ((t = r),
                      {
                        event: "appendTag",
                        isImgUrl: "gif" === (e = l).responseType,
                        url: e.handlerUrlPrefix + "?" + t
                      });
                  (i = h),
                    (n = d),
                    null !== A((o = c), (a = s)) || P(o, i, n, a),
                    h.disOnce || (c.disingScheduled = []);
                }
              },
              function(e) {
                return x.setProtectedTimeout(e, 500);
              }
            );
        }
      }
      function E(e, t, o) {
        var i,
          n,
          a,
          r = "";
        if (t instanceof Function) r = E(e, t(), o);
        else if (t instanceof Array) {
          for (var s = [], c = 0; c < t.length; ++c) s[c] = E(e, t[c], o);
          r += "[" + s.join(",") + "]";
        } else if (t && "[object Object]" === t.toString()) {
          var u = [];
          for (var l in t)
            if (t.hasOwnProperty(l)) {
              var d = o.concat([l]);
              u.push(
                ((i = e),
                (n = l),
                (a = d.join(".")),
                (i.properties[a] ? i.properties[a] : n) + "=" + E(e, t[l], d))
              );
            }
          r += u.join("&");
        } else
          1 === o.length && "event" === o[0]
            ? (r += e.events[t.toLowerCase()] ? e.events[t.toLowerCase()] : t)
            : (r += t);
        return (encodeURIComponent || escape)(r);
      }
      return x.catchAndStoreException(function() {
        var e, t, o, i, n, a, r, s;
        return (
          y.checkAcid(),
          y.checkClientSideIdentityStatus(function() {
            return (
              (o = c.getPerformanceOrDegradedNow()),
              "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(
                e
              ) {
                var t = (o + 16 * Math.random()) % 16 | 0;
                return (
                  (o = Math.floor(o / 16)),
                  ("x" === e ? t : (3 & t) | 8).toString(16)
                );
              })
            );
            var o;
          }),
          y.setCop(window),
          (e = k),
          (t = g.app),
          (o = g.cbs),
          (i = y),
          (n = v.shortNameMap),
          (a = v.trackingCallData),
          (r = v.hooks),
          (s = v.workflow),
          e.setWaitingFlag(i),
          e.waitingForSyncframe &&
            x.setProtectedTimeout(function() {
              w(e, t, o, i, n, a, r, s);
            }, 1e4),
          y.ccpCookie.setValueFromExistingCookie(),
          O.onBodyReady(x, function() {
            v.hooks.onInitialized instanceof Function
              ? ((g.app.bodyReady = v.hooks.onInitialized()),
                console.warn(
                  "onInitialized hook is deprecated and will soon be removed. Please do not use it and contact criteo if you think this may break your integration"
                ))
              : (g.app.bodyReady = !0),
              u(
                k,
                g.app,
                g.cbs,
                y,
                v.shortNameMap,
                v.trackingCallData,
                v.hooks,
                v.workflow
              ),
              h(
                k,
                g.app,
                g.cbs,
                y,
                v.shortNameMap,
                v.trackingCallData,
                v.hooks,
                v.workflow
              );
          }),
          O.onDocumentReady(x, function() {
            v.hooks.onDOMReady instanceof Function
              ? ((g.app.domReady = v.hooks.onDOMReady()),
                console.warn(
                  "on DOM ready hook is deprecated and will soon be removed. Please do not use it and contact criteo if you think this may break your integration"
                ))
              : (g.app.domReady = !0),
              h(
                k,
                g.app,
                g.cbs,
                y,
                v.shortNameMap,
                v.trackingCallData,
                v.hooks,
                v.workflow
              );
          }),
          (function(e) {
            try {
              var t = O.getAnchorWithReferrer(document);
              t &&
                t.hostname !== document.location.hostname &&
                T(e, { event: "setData", ref: t.protocol + "//" + t.hostname });
            } catch (e) {}
          })(v.trackingCallData.extraData),
          q(
            {
              exceptions: x.exceptions,
              performances: c.timings,
              push: d,
              removeLater: function(e) {
                return O.removeLater(x, e);
              }
            },
            x,
            v,
            g,
            c
          )
        );
      });
    })()),
      void 0 !== typeof t.adBlockDetector &&
        (window.criteo_q.adBlockDetector = t.adBlockDetector),
      window.criteo_q.push.apply(window.criteo_q, t);
  }
})();
