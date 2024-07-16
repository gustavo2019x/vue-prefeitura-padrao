import { cnpj as _n } from "cpf-cnpj-validator";
/**
* @vue/shared v3.4.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function gn(e, t) {
  const n = new Set(e.split(","));
  return (r) => n.has(r);
}
const P = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, mn = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], k = () => {
}, En = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), V = Object.assign, wn = Object.prototype.hasOwnProperty, E = (e, t) => wn.call(e, t), h = Array.isArray, U = (e) => xe(e) === "[object Map]", Ot = (e) => xe(e) === "[object Set]", w = (e) => typeof e == "function", x = (e) => typeof e == "string", Q = (e) => typeof e == "symbol", b = (e) => e !== null && typeof e == "object", Nn = (e) => (b(e) || w(e)) && w(e.then) && w(e.catch), St = Object.prototype.toString, xe = (e) => St.call(e), yt = (e) => xe(e).slice(8, -1), vt = (e) => xe(e) === "[object Object]", Ye = (e) => x(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, bn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, On = bn((e) => e.charAt(0).toUpperCase() + e.slice(1)), j = (e, t) => !Object.is(e, t), Sn = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
};
let ct;
const Rt = () => ct || (ct = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function qe(e) {
  if (h(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], s = x(r) ? xn(r) : qe(r);
      if (s)
        for (const o in s)
          t[o] = s[o];
    }
    return t;
  } else if (x(e) || b(e))
    return e;
}
const yn = /;(?![^(]*\))/g, vn = /:([^]+)/, Rn = /\/\*[^]*?\*\//g;
function xn(e) {
  const t = {};
  return e.replace(Rn, "").split(yn).forEach((n) => {
    if (n) {
      const r = n.split(vn);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function Ge(e) {
  let t = "";
  if (x(e))
    t = e;
  else if (h(e))
    for (let n = 0; n < e.length; n++) {
      const r = Ge(e[n]);
      r && (t += r + " ");
    }
  else if (b(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const xt = (e) => !!(e && e.__v_isRef === !0), Ee = (e) => x(e) ? e : e == null ? "" : h(e) || b(e) && (e.toString === St || !w(e.toString)) ? xt(e) ? Ee(e.value) : JSON.stringify(e, Vt, 2) : String(e), Vt = (e, t) => xt(t) ? Vt(e, t.value) : U(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, s], o) => (n[Fe(r, o) + " =>"] = s, n),
    {}
  )
} : Ot(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Fe(n))
} : Q(t) ? Fe(t) : b(t) && !h(t) && !vt(t) ? String(t) : t, Fe = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Q(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.4.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function re(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Vn;
function Cn(e, t = Vn) {
  t && t.active && t.effects.push(e);
}
let W;
class Ct {
  constructor(t, n, r, s) {
    this.fn = t, this.trigger = n, this.scheduler = r, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, Cn(this, s);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      this._dirtyLevel = 1, Ve();
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t];
        if (n.computed && (In(n.computed), this._dirtyLevel >= 4))
          break;
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), Ce();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 4 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active)
      return this.fn();
    let t = F, n = W;
    try {
      return F = !0, W = this, this._runnings++, lt(this), this.fn();
    } finally {
      ut(this), this._runnings--, W = n, F = t;
    }
  }
  stop() {
    this.active && (lt(this), ut(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function In(e) {
  return e.value;
}
function lt(e) {
  e._trackId++, e._depsLength = 0;
}
function ut(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++)
      It(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function It(e, t) {
  const n = e.get(t);
  n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup());
}
let F = !0, Le = 0;
const Dt = [];
function Ve() {
  Dt.push(F), F = !1;
}
function Ce() {
  const e = Dt.pop();
  F = e === void 0 ? !0 : e;
}
function Qe() {
  Le++;
}
function Xe() {
  for (Le--; !Le && He.length; )
    He.shift()();
}
function Pt(e, t, n) {
  var r;
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const s = e.deps[e._depsLength];
    s !== t ? (s && It(s, e), e.deps[e._depsLength++] = t) : e._depsLength++, process.env.NODE_ENV !== "production" && ((r = e.onTrack) == null || r.call(e, V({ effect: e }, n)));
  }
}
const He = [];
function $t(e, t, n) {
  var r;
  Qe();
  for (const s of e.keys()) {
    let o;
    s._dirtyLevel < t && (o ?? (o = e.get(s) === s._trackId)) && (s._shouldSchedule || (s._shouldSchedule = s._dirtyLevel === 0), s._dirtyLevel = t), s._shouldSchedule && (o ?? (o = e.get(s) === s._trackId)) && (process.env.NODE_ENV !== "production" && ((r = s.onTrigger) == null || r.call(s, V({ effect: s }, n))), s.trigger(), (!s._runnings || s.allowRecurse) && s._dirtyLevel !== 2 && (s._shouldSchedule = !1, s.scheduler && He.push(s.scheduler)));
  }
  Xe();
}
const Tt = (e, t) => {
  const n = /* @__PURE__ */ new Map();
  return n.cleanup = e, n.computed = t, n;
}, ze = /* @__PURE__ */ new WeakMap(), B = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), Ke = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
function O(e, t, n) {
  if (F && W) {
    let r = ze.get(e);
    r || ze.set(e, r = /* @__PURE__ */ new Map());
    let s = r.get(n);
    s || r.set(n, s = Tt(() => r.delete(n))), Pt(
      W,
      s,
      process.env.NODE_ENV !== "production" ? {
        target: e,
        type: t,
        key: n
      } : void 0
    );
  }
}
function A(e, t, n, r, s, o) {
  const i = ze.get(e);
  if (!i)
    return;
  let c = [];
  if (t === "clear")
    c = [...i.values()];
  else if (n === "length" && h(e)) {
    const u = Number(r);
    i.forEach((f, _) => {
      (_ === "length" || !Q(_) && _ >= u) && c.push(f);
    });
  } else
    switch (n !== void 0 && c.push(i.get(n)), t) {
      case "add":
        h(e) ? Ye(n) && c.push(i.get("length")) : (c.push(i.get(B)), U(e) && c.push(i.get(Ke)));
        break;
      case "delete":
        h(e) || (c.push(i.get(B)), U(e) && c.push(i.get(Ke)));
        break;
      case "set":
        U(e) && c.push(i.get(B));
        break;
    }
  Qe();
  for (const u of c)
    u && $t(
      u,
      4,
      process.env.NODE_ENV !== "production" ? {
        target: e,
        type: t,
        key: n,
        newValue: r,
        oldValue: s,
        oldTarget: o
      } : void 0
    );
  Xe();
}
const Dn = /* @__PURE__ */ gn("__proto__,__v_isRef,__isVue"), Mt = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Q)
), at = /* @__PURE__ */ Pn();
function Pn() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const r = a(this);
      for (let o = 0, i = this.length; o < i; o++)
        O(r, "get", o + "");
      const s = r[t](...n);
      return s === -1 || s === !1 ? r[t](...n.map(a)) : s;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      Ve(), Qe();
      const r = a(this)[t].apply(this, n);
      return Xe(), Ce(), r;
    };
  }), e;
}
function $n(e) {
  Q(e) || (e = String(e));
  const t = a(this);
  return O(t, "has", e), t.hasOwnProperty(e);
}
class Ft {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, r) {
    const s = this._isReadonly, o = this._isShallow;
    if (n === "__v_isReactive")
      return !s;
    if (n === "__v_isReadonly")
      return s;
    if (n === "__v_isShallow")
      return o;
    if (n === "__v_raw")
      return r === (s ? o ? zt : Ht : o ? Jn : Lt).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const i = h(t);
    if (!s) {
      if (i && E(at, n))
        return Reflect.get(at, n, r);
      if (n === "hasOwnProperty")
        return $n;
    }
    const c = Reflect.get(t, n, r);
    return (Q(n) ? Mt.has(n) : Dn(n)) || (s || O(t, "get", n), o) ? c : R(c) ? i && Ye(n) ? c : c.value : b(c) ? s ? Ut(c) : Kt(c) : c;
  }
}
class Tn extends Ft {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, s) {
    let o = t[n];
    if (!this._isShallow) {
      const u = G(o);
      if (!J(r) && !G(r) && (o = a(o), r = a(r)), !h(t) && R(o) && !R(r))
        return u ? !1 : (o.value = r, !0);
    }
    const i = h(t) && Ye(n) ? Number(n) < t.length : E(t, n), c = Reflect.set(t, n, r, s);
    return t === a(s) && (i ? j(r, o) && A(t, "set", n, r, o) : A(t, "add", n, r)), c;
  }
  deleteProperty(t, n) {
    const r = E(t, n), s = t[n], o = Reflect.deleteProperty(t, n);
    return o && r && A(t, "delete", n, void 0, s), o;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!Q(n) || !Mt.has(n)) && O(t, "has", n), r;
  }
  ownKeys(t) {
    return O(
      t,
      "iterate",
      h(t) ? "length" : B
    ), Reflect.ownKeys(t);
  }
}
class At extends Ft {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return process.env.NODE_ENV !== "production" && re(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return process.env.NODE_ENV !== "production" && re(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const Mn = /* @__PURE__ */ new Tn(), Fn = /* @__PURE__ */ new At(), An = /* @__PURE__ */ new At(!0), Ze = (e) => e, Ie = (e) => Reflect.getPrototypeOf(e);
function ae(e, t, n = !1, r = !1) {
  e = e.__v_raw;
  const s = a(e), o = a(t);
  n || (j(t, o) && O(s, "get", t), O(s, "get", o));
  const { has: i } = Ie(s), c = r ? Ze : n ? tt : ce;
  if (i.call(s, t))
    return c(e.get(t));
  if (i.call(s, o))
    return c(e.get(o));
  e !== s && e.get(t);
}
function fe(e, t = !1) {
  const n = this.__v_raw, r = a(n), s = a(e);
  return t || (j(e, s) && O(r, "has", e), O(r, "has", s)), e === s ? n.has(e) : n.has(e) || n.has(s);
}
function pe(e, t = !1) {
  return e = e.__v_raw, !t && O(a(e), "iterate", B), Reflect.get(e, "size", e);
}
function ft(e) {
  e = a(e);
  const t = a(this);
  return Ie(t).has.call(t, e) || (t.add(e), A(t, "add", e, e)), this;
}
function pt(e, t) {
  t = a(t);
  const n = a(this), { has: r, get: s } = Ie(n);
  let o = r.call(n, e);
  o ? process.env.NODE_ENV !== "production" && jt(n, r, e) : (e = a(e), o = r.call(n, e));
  const i = s.call(n, e);
  return n.set(e, t), o ? j(t, i) && A(n, "set", e, t, i) : A(n, "add", e, t), this;
}
function dt(e) {
  const t = a(this), { has: n, get: r } = Ie(t);
  let s = n.call(t, e);
  s ? process.env.NODE_ENV !== "production" && jt(t, n, e) : (e = a(e), s = n.call(t, e));
  const o = r ? r.call(t, e) : void 0, i = t.delete(e);
  return s && A(t, "delete", e, void 0, o), i;
}
function ht() {
  const e = a(this), t = e.size !== 0, n = process.env.NODE_ENV !== "production" ? U(e) ? new Map(e) : new Set(e) : void 0, r = e.clear();
  return t && A(e, "clear", void 0, void 0, n), r;
}
function de(e, t) {
  return function(r, s) {
    const o = this, i = o.__v_raw, c = a(i), u = t ? Ze : e ? tt : ce;
    return !e && O(c, "iterate", B), i.forEach((f, _) => r.call(s, u(f), u(_), o));
  };
}
function he(e, t, n) {
  return function(...r) {
    const s = this.__v_raw, o = a(s), i = U(o), c = e === "entries" || e === Symbol.iterator && i, u = e === "keys" && i, f = s[e](...r), _ = n ? Ze : t ? tt : ce;
    return !t && O(
      o,
      "iterate",
      u ? Ke : B
    ), {
      // iterator protocol
      next() {
        const { value: l, done: p } = f.next();
        return p ? { value: l, done: p } : {
          value: c ? [_(l[0]), _(l[1])] : _(l),
          done: p
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function $(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      re(
        `${On(e)} operation ${n}failed: target is readonly.`,
        a(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function jn() {
  const e = {
    get(o) {
      return ae(this, o);
    },
    get size() {
      return pe(this);
    },
    has: fe,
    add: ft,
    set: pt,
    delete: dt,
    clear: ht,
    forEach: de(!1, !1)
  }, t = {
    get(o) {
      return ae(this, o, !1, !0);
    },
    get size() {
      return pe(this);
    },
    has: fe,
    add: ft,
    set: pt,
    delete: dt,
    clear: ht,
    forEach: de(!1, !0)
  }, n = {
    get(o) {
      return ae(this, o, !0);
    },
    get size() {
      return pe(this, !0);
    },
    has(o) {
      return fe.call(this, o, !0);
    },
    add: $("add"),
    set: $("set"),
    delete: $("delete"),
    clear: $("clear"),
    forEach: de(!0, !1)
  }, r = {
    get(o) {
      return ae(this, o, !0, !0);
    },
    get size() {
      return pe(this, !0);
    },
    has(o) {
      return fe.call(this, o, !0);
    },
    add: $("add"),
    set: $("set"),
    delete: $("delete"),
    clear: $("clear"),
    forEach: de(!0, !0)
  };
  return [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((o) => {
    e[o] = he(o, !1, !1), n[o] = he(o, !0, !1), t[o] = he(o, !1, !0), r[o] = he(
      o,
      !0,
      !0
    );
  }), [
    e,
    n,
    t,
    r
  ];
}
const [
  Ln,
  Hn,
  zn,
  Kn
] = /* @__PURE__ */ jn();
function ke(e, t) {
  const n = t ? e ? Kn : zn : e ? Hn : Ln;
  return (r, s, o) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? r : Reflect.get(
    E(n, s) && s in r ? n : r,
    s,
    o
  );
}
const Un = {
  get: /* @__PURE__ */ ke(!1, !1)
}, Wn = {
  get: /* @__PURE__ */ ke(!0, !1)
}, Bn = {
  get: /* @__PURE__ */ ke(!0, !0)
};
function jt(e, t, n) {
  const r = a(n);
  if (r !== n && t.call(e, r)) {
    const s = yt(e);
    re(
      `Reactive ${s} contains both the raw and reactive versions of the same object${s === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Lt = /* @__PURE__ */ new WeakMap(), Jn = /* @__PURE__ */ new WeakMap(), Ht = /* @__PURE__ */ new WeakMap(), zt = /* @__PURE__ */ new WeakMap();
function Yn(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function qn(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Yn(yt(e));
}
function Kt(e) {
  return G(e) ? e : et(
    e,
    !1,
    Mn,
    Un,
    Lt
  );
}
function Ut(e) {
  return et(
    e,
    !0,
    Fn,
    Wn,
    Ht
  );
}
function _e(e) {
  return et(
    e,
    !0,
    An,
    Bn,
    zt
  );
}
function et(e, t, n, r, s) {
  if (!b(e))
    return process.env.NODE_ENV !== "production" && re(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = s.get(e);
  if (o)
    return o;
  const i = qn(e);
  if (i === 0)
    return e;
  const c = new Proxy(
    e,
    i === 2 ? r : n
  );
  return s.set(e, c), c;
}
function te(e) {
  return G(e) ? te(e.__v_raw) : !!(e && e.__v_isReactive);
}
function G(e) {
  return !!(e && e.__v_isReadonly);
}
function J(e) {
  return !!(e && e.__v_isShallow);
}
function Ue(e) {
  return e ? !!e.__v_raw : !1;
}
function a(e) {
  const t = e && e.__v_raw;
  return t ? a(t) : e;
}
function Gn(e) {
  return Object.isExtensible(e) && Sn(e, "__v_skip", !0), e;
}
const ce = (e) => b(e) ? Kt(e) : e, tt = (e) => b(e) ? Ut(e) : e, Qn = "Computed is still dirty after getter evaluation, likely because a computed is mutating its own dependency in its getter. State mutations in computed getters should be avoided.  Check the docs for more details: https://vuejs.org/guide/essentials/computed.html#getters-should-be-side-effect-free";
class Xn {
  constructor(t, n, r, s) {
    this.getter = t, this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new Ct(
      () => t(this._value),
      () => we(
        this,
        this.effect._dirtyLevel === 2 ? 2 : 3
      )
    ), this.effect.computed = this, this.effect.active = this._cacheable = !s, this.__v_isReadonly = r;
  }
  get value() {
    const t = a(this);
    return (!t._cacheable || t.effect.dirty) && j(t._value, t._value = t.effect.run()) && we(t, 4), Wt(t), t.effect._dirtyLevel >= 2 && (process.env.NODE_ENV !== "production" && this._warnRecursive && re(Qn, `

getter: `, this.getter), we(t, 2)), t._value;
  }
  set value(t) {
    this._setter(t);
  }
  // #region polyfill _dirty for backward compatibility third party code for Vue <= 3.3.x
  get _dirty() {
    return this.effect.dirty;
  }
  set _dirty(t) {
    this.effect.dirty = t;
  }
  // #endregion
}
function Wt(e) {
  var t;
  F && W && (e = a(e), Pt(
    W,
    (t = e.dep) != null ? t : e.dep = Tt(
      () => e.dep = void 0,
      e instanceof Xn ? e : void 0
    ),
    process.env.NODE_ENV !== "production" ? {
      target: e,
      type: "get",
      key: "value"
    } : void 0
  ));
}
function we(e, t = 4, n, r) {
  e = a(e);
  const s = e.dep;
  s && $t(
    s,
    t,
    process.env.NODE_ENV !== "production" ? {
      target: e,
      type: "set",
      key: "value",
      newValue: n,
      oldValue: r
    } : void 0
  );
}
function R(e) {
  return !!(e && e.__v_isRef === !0);
}
function Zn(e) {
  return kn(e, !1);
}
function kn(e, t) {
  return R(e) ? e : new er(e, t);
}
class er {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : a(t), this._value = n ? t : ce(t);
  }
  get value() {
    return Wt(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || J(t) || G(t);
    if (t = n ? t : a(t), j(t, this._rawValue)) {
      const r = this._rawValue;
      this._rawValue = t, this._value = n ? t : ce(t), we(this, 4, t, r);
    }
  }
}
function tr(e) {
  return R(e) ? e.value : e;
}
const nr = {
  get: (e, t, n) => tr(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const s = e[t];
    return R(s) && !R(n) ? (s.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function rr(e) {
  return te(e) ? e : new Proxy(e, nr);
}
/**
* @vue/runtime-core v3.4.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const Y = [];
function sr(e) {
  Y.push(e);
}
function or() {
  Y.pop();
}
function g(e, ...t) {
  Ve();
  const n = Y.length ? Y[Y.length - 1].component : null, r = n && n.appContext.config.warnHandler, s = ir();
  if (r)
    q(
      r,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((o) => {
          var i, c;
          return (c = (i = o.toString) == null ? void 0 : i.call(o)) != null ? c : JSON.stringify(o);
        }).join(""),
        n && n.proxy,
        s.map(
          ({ vnode: o }) => `at <${pn(n, o.type)}>`
        ).join(`
`),
        s
      ]
    );
  else {
    const o = [`[Vue warn]: ${e}`, ...t];
    s.length && o.push(`
`, ...cr(s)), console.warn(...o);
  }
  Ce();
}
function ir() {
  let e = Y[Y.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const r = e.component && e.component.parent;
    e = r && r.vnode;
  }
  return t;
}
function cr(e) {
  const t = [];
  return e.forEach((n, r) => {
    t.push(...r === 0 ? [] : [`
`], ...lr(n));
  }), t;
}
function lr({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", r = e.component ? e.component.parent == null : !1, s = ` at <${pn(
    e.component,
    e.type,
    r
  )}`, o = ">" + n;
  return e.props ? [s, ...ur(e.props), o] : [s + o];
}
function ur(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((r) => {
    t.push(...Bt(r, e[r]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Bt(e, t, n) {
  return x(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : R(t) ? (t = Bt(e, a(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : w(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = a(t), n ? t : [`${e}=`, t]);
}
const Jt = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."
};
function q(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (s) {
    nt(s, t, n);
  }
}
function Ne(e, t, n, r) {
  if (w(e)) {
    const s = q(e, t, n, r);
    return s && Nn(s) && s.catch((o) => {
      nt(o, t, n);
    }), s;
  }
  if (h(e)) {
    const s = [];
    for (let o = 0; o < e.length; o++)
      s.push(Ne(e[o], t, n, r));
    return s;
  } else process.env.NODE_ENV !== "production" && g(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function nt(e, t, n, r = !0) {
  const s = t ? t.vnode : null;
  if (t) {
    let o = t.parent;
    const i = t.proxy, c = process.env.NODE_ENV !== "production" ? Jt[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; o; ) {
      const f = o.ec;
      if (f) {
        for (let _ = 0; _ < f.length; _++)
          if (f[_](e, i, c) === !1)
            return;
      }
      o = o.parent;
    }
    const u = t.appContext.config.errorHandler;
    if (u) {
      Ve(), q(
        u,
        null,
        10,
        [e, i, c]
      ), Ce();
      return;
    }
  }
  ar(e, n, s, r);
}
function ar(e, t, n, r = !0) {
  if (process.env.NODE_ENV !== "production") {
    const s = Jt[t];
    if (n && sr(n), g(`Unhandled error${s ? ` during execution of ${s}` : ""}`), n && or(), r)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let Se = !1, We = !1;
const C = [];
let M = 0;
const ne = [];
let T = null, z = 0;
const Yt = /* @__PURE__ */ Promise.resolve();
let rt = null;
const fr = 100;
function pr(e) {
  const t = rt || Yt;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function dr(e) {
  let t = M + 1, n = C.length;
  for (; t < n; ) {
    const r = t + n >>> 1, s = C[r], o = le(s);
    o < e || o === e && s.pre ? t = r + 1 : n = r;
  }
  return t;
}
function st(e) {
  (!C.length || !C.includes(
    e,
    Se && e.allowRecurse ? M + 1 : M
  )) && (e.id == null ? C.push(e) : C.splice(dr(e.id), 0, e), qt());
}
function qt() {
  !Se && !We && (We = !0, rt = Yt.then(Qt));
}
function Gt(e) {
  h(e) ? ne.push(...e) : (!T || !T.includes(
    e,
    e.allowRecurse ? z + 1 : z
  )) && ne.push(e), qt();
}
function hr(e) {
  if (ne.length) {
    const t = [...new Set(ne)].sort(
      (n, r) => le(n) - le(r)
    );
    if (ne.length = 0, T) {
      T.push(...t);
      return;
    }
    for (T = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), z = 0; z < T.length; z++) {
      const n = T[z];
      process.env.NODE_ENV !== "production" && Xt(e, n) || n.active !== !1 && n();
    }
    T = null, z = 0;
  }
}
const le = (e) => e.id == null ? 1 / 0 : e.id, _r = (e, t) => {
  const n = le(e) - le(t);
  if (n === 0) {
    if (e.pre && !t.pre) return -1;
    if (t.pre && !e.pre) return 1;
  }
  return n;
};
function Qt(e) {
  We = !1, Se = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), C.sort(_r);
  const t = process.env.NODE_ENV !== "production" ? (n) => Xt(e, n) : k;
  try {
    for (M = 0; M < C.length; M++) {
      const n = C[M];
      if (n && n.active !== !1) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        q(n, null, 14);
      }
    }
  } finally {
    M = 0, C.length = 0, hr(e), Se = !1, rt = null, (C.length || ne.length) && Qt(e);
  }
}
function Xt(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > fr) {
      const r = t.ownerInstance, s = r && fn(r.type);
      return nt(
        `Maximum recursive updates exceeded${s ? ` in component <${s}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
        null,
        10
      ), !0;
    } else
      e.set(t, n + 1);
  }
}
const X = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (Rt().__VUE_HMR_RUNTIME__ = {
  createRecord: Ae(gr),
  rerender: Ae(mr),
  reload: Ae(Er)
});
const ye = /* @__PURE__ */ new Map();
function gr(e, t) {
  return ye.has(e) ? !1 : (ye.set(e, {
    initialDef: oe(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function oe(e) {
  return dn(e) ? e.__vccOpts : e;
}
function mr(e, t) {
  const n = ye.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((r) => {
    t && (r.render = t, oe(r.type).render = t), r.renderCache = [], r.effect.dirty = !0, r.update();
  }));
}
function Er(e, t) {
  const n = ye.get(e);
  if (!n) return;
  t = oe(t), _t(n.initialDef, t);
  const r = [...n.instances];
  for (const s of r) {
    const o = oe(s.type);
    X.has(o) || (o !== n.initialDef && _t(o, t), X.add(o)), s.appContext.propsCache.delete(s.type), s.appContext.emitsCache.delete(s.type), s.appContext.optionsCache.delete(s.type), s.ceReload ? (X.add(o), s.ceReload(t.styles), X.delete(o)) : s.parent ? (s.parent.effect.dirty = !0, st(() => {
      s.parent.update(), X.delete(o);
    })) : s.appContext.reload ? s.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  Gt(() => {
    for (const s of r)
      X.delete(
        oe(s.type)
      );
  });
}
function _t(e, t) {
  V(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function Ae(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (r) {
      console.error(r), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let Z, ge = [];
function Zt(e, t) {
  var n, r;
  Z = e, Z ? (Z.enabled = !0, ge.forEach(({ event: s, args: o }) => Z.emit(s, ...o)), ge = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((r = (n = window.navigator) == null ? void 0 : n.userAgent) != null && r.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((o) => {
    Zt(o, t);
  }), setTimeout(() => {
    Z || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, ge = []);
  }, 3e3)) : ge = [];
}
let v = null, wr = null;
const Nr = Symbol.for("v-ndc"), br = (e) => e.__isSuspense;
function Or(e, t) {
  t && t.pendingBranch ? h(e) ? t.effects.push(...e) : t.effects.push(e) : Gt(e);
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Sr(e, t) {
  return w(e) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    V({ name: e.name }, t, { setup: e })
  ) : e;
}
const yr = (e) => !!e.type.__asyncLoader;
function vr(e, t, n = {}, r, s) {
  if (v.isCE || v.parent && yr(v.parent) && v.parent.isCE)
    return ot("slot", n, r);
  let o = e[t];
  process.env.NODE_ENV !== "production" && o && o.length > 1 && (g(
    "SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."
  ), o = () => []), o && o._c && (o._d = !1), rn();
  const i = o && kt(o(n)), c = Ur(
    De,
    {
      key: n.key || // slot content array of a dynamic conditional slot may have a branch
      // key attached in the `createSlots` helper, respect that
      i && i.key || `_${t}`
    },
    i || [],
    i && e._ === 1 ? 64 : -2
  );
  return c.scopeId && (c.slotScopeIds = [c.scopeId + "-s"]), o && o._c && (o._d = !0), c;
}
function kt(e) {
  return e.some((t) => on(t) ? !(t.type === nn || t.type === De && !kt(t.children)) : !0) ? e : null;
}
const Be = (e) => e ? Gr(e) ? Qr(e) : Be(e.parent) : null, ie = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ V(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? _e(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? _e(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? _e(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? _e(e.refs) : e.refs,
    $parent: (e) => Be(e.parent),
    $root: (e) => Be(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Vr(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      e.effect.dirty = !0, st(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = pr.bind(e.proxy)),
    $watch: (e) => Ar.bind(e)
  })
), Rr = (e) => e === "_" || e === "$", je = (e, t) => e !== P && !e.__isScriptSetup && E(e, t), xr = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: s, props: o, accessCache: i, type: c, appContext: u } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let f;
    if (t[0] !== "$") {
      const m = i[t];
      if (m !== void 0)
        switch (m) {
          case 1:
            return r[t];
          case 2:
            return s[t];
          case 4:
            return n[t];
          case 3:
            return o[t];
        }
      else {
        if (je(r, t))
          return i[t] = 1, r[t];
        if (s !== P && E(s, t))
          return i[t] = 2, s[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (f = e.propsOptions[0]) && E(f, t)
        )
          return i[t] = 3, o[t];
        if (n !== P && E(n, t))
          return i[t] = 4, n[t];
        i[t] = 0;
      }
    }
    const _ = ie[t];
    let l, p;
    if (_)
      return t === "$attrs" ? (O(e.attrs, "get", ""), process.env.NODE_ENV !== "production" && void 0) : process.env.NODE_ENV !== "production" && t === "$slots" && O(e, "get", t), _(e);
    if (
      // css module (injected by vue-loader)
      (l = c.__cssModules) && (l = l[t])
    )
      return l;
    if (n !== P && E(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      p = u.config.globalProperties, E(p, t)
    )
      return p[t];
    process.env.NODE_ENV !== "production" && v && (!x(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (s !== P && Rr(t[0]) && E(s, t) ? g(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === v && g(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: s, ctx: o } = e;
    return je(s, t) ? (s[t] = n, !0) : process.env.NODE_ENV !== "production" && s.__isScriptSetup && E(s, t) ? (g(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : r !== P && E(r, t) ? (r[t] = n, !0) : E(e.props, t) ? (process.env.NODE_ENV !== "production" && g(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && g(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(o, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : o[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: s, propsOptions: o }
  }, i) {
    let c;
    return !!n[i] || e !== P && E(e, i) || je(t, i) || (c = o[0]) && E(c, i) || E(r, i) || E(ie, i) || E(s.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : E(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (xr.ownKeys = (e) => (g(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function gt(e) {
  return h(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function Vr(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: s,
    optionsCache: o,
    config: { optionMergeStrategies: i }
  } = e.appContext, c = o.get(t);
  let u;
  return c ? u = c : !s.length && !n && !r ? u = t : (u = {}, s.length && s.forEach(
    (f) => ve(u, f, i, !0)
  ), ve(u, t, i)), b(t) && o.set(t, u), u;
}
function ve(e, t, n, r = !1) {
  const { mixins: s, extends: o } = t;
  o && ve(e, o, n, !0), s && s.forEach(
    (i) => ve(e, i, n, !0)
  );
  for (const i in t)
    if (r && i === "expose")
      process.env.NODE_ENV !== "production" && g(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const c = Cr[i] || n && n[i];
      e[i] = c ? c(e[i], t[i]) : t[i];
    }
  return e;
}
const Cr = {
  data: mt,
  props: wt,
  emits: wt,
  // objects
  methods: se,
  computed: se,
  // lifecycle
  beforeCreate: S,
  created: S,
  beforeMount: S,
  mounted: S,
  beforeUpdate: S,
  updated: S,
  beforeDestroy: S,
  beforeUnmount: S,
  destroyed: S,
  unmounted: S,
  activated: S,
  deactivated: S,
  errorCaptured: S,
  serverPrefetch: S,
  // assets
  components: se,
  directives: se,
  // watch
  watch: Dr,
  // provide / inject
  provide: mt,
  inject: Ir
};
function mt(e, t) {
  return t ? e ? function() {
    return V(
      w(e) ? e.call(this, this) : e,
      w(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Ir(e, t) {
  return se(Et(e), Et(t));
}
function Et(e) {
  if (h(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function S(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function se(e, t) {
  return e ? V(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function wt(e, t) {
  return e ? h(e) && h(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : V(
    /* @__PURE__ */ Object.create(null),
    gt(e),
    gt(t ?? {})
  ) : t;
}
function Dr(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = V(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = S(e[r], t[r]);
  return n;
}
let Nt = null;
function Pr(e, t, n = !1) {
  const r = Pe || v;
  if (r || Nt) {
    const s = r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : Nt._context.provides;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && w(t) ? t.call(r && r.proxy) : t;
    process.env.NODE_ENV !== "production" && g(`injection "${String(e)}" not found.`);
  } else process.env.NODE_ENV !== "production" && g("inject() can only be used inside setup() or functional components.");
}
const $r = {}, en = (e) => Object.getPrototypeOf(e) === $r, bt = Or, Tr = Symbol.for("v-scx"), Mr = () => {
  {
    const e = Pr(Tr);
    return e || process.env.NODE_ENV !== "production" && g(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
}, me = {};
function Fr(e, t, {
  immediate: n,
  deep: r,
  flush: s,
  once: o,
  onTrack: i,
  onTrigger: c
} = P) {
  if (t && o) {
    const d = t;
    t = (...Me) => {
      d(...Me), Te();
    };
  }
  process.env.NODE_ENV !== "production" && r !== void 0 && typeof r == "number" && g(
    'watch() "deep" option with number value will be used as watch depth in future versions. Please use a boolean instead to avoid potential breakage.'
  ), process.env.NODE_ENV !== "production" && !t && (n !== void 0 && g(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && g(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && g(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const u = (d) => {
    g(
      "Invalid watch source: ",
      d,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, f = Pe, _ = (d) => r === !0 ? d : (
    // for deep: false, only traverse root-level properties
    K(d, r === !1 ? 1 : void 0)
  );
  let l, p = !1, m = !1;
  if (R(e) ? (l = () => e.value, p = J(e)) : te(e) ? (l = () => _(e), p = !0) : h(e) ? (m = !0, p = e.some((d) => te(d) || J(d)), l = () => e.map((d) => {
    if (R(d))
      return d.value;
    if (te(d))
      return _(d);
    if (w(d))
      return q(d, f, 2);
    process.env.NODE_ENV !== "production" && u(d);
  })) : w(e) ? t ? l = () => q(e, f, 2) : l = () => (N && N(), Ne(
    e,
    f,
    3,
    [D]
  )) : (l = k, process.env.NODE_ENV !== "production" && u(e)), t && r) {
    const d = l;
    l = () => K(d());
  }
  let N, D = (d) => {
    N = y.onStop = () => {
      q(d, f, 4), N = y.onStop = void 0;
    };
  }, $e;
  if (an)
    if (D = k, t ? n && Ne(t, f, 3, [
      l(),
      m ? [] : void 0,
      D
    ]) : l(), s === "sync") {
      const d = Mr();
      $e = d.__watcherHandles || (d.__watcherHandles = []);
    } else
      return k;
  let L = m ? new Array(e.length).fill(me) : me;
  const H = () => {
    if (!(!y.active || !y.dirty))
      if (t) {
        const d = y.run();
        (r || p || (m ? d.some((Me, hn) => j(Me, L[hn])) : j(d, L))) && (N && N(), Ne(t, f, 3, [
          d,
          // pass undefined as the old value when it's changed for the first time
          L === me ? void 0 : m && L[0] === me ? [] : L,
          D
        ]), L = d);
      } else
        y.run();
  };
  H.allowRecurse = !!t;
  let ue;
  s === "sync" ? ue = H : s === "post" ? ue = () => bt(H, f && f.suspense) : (H.pre = !0, f && (H.id = f.uid), ue = () => st(H));
  const y = new Ct(l, k, ue), Te = () => {
    y.stop();
  };
  return process.env.NODE_ENV !== "production" && (y.onTrack = i, y.onTrigger = c), t ? n ? H() : L = y.run() : s === "post" ? bt(
    y.run.bind(y),
    f && f.suspense
  ) : y.run(), $e && $e.push(Te), Te;
}
function Ar(e, t, n) {
  const r = this.proxy, s = x(e) ? e.includes(".") ? jr(r, e) : () => r[e] : e.bind(r, r);
  let o;
  w(t) ? o = t : (o = t.handler, n = t);
  const i = qr(this), c = Fr(s, o.bind(r), n);
  return i(), c;
}
function jr(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let s = 0; s < n.length && r; s++)
      r = r[n[s]];
    return r;
  };
}
function K(e, t = 1 / 0, n) {
  if (t <= 0 || !b(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, R(e))
    K(e.value, t, n);
  else if (h(e))
    for (let r = 0; r < e.length; r++)
      K(e[r], t, n);
  else if (Ot(e) || U(e))
    e.forEach((r) => {
      K(r, t, n);
    });
  else if (vt(e)) {
    for (const r in e)
      K(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && K(e[r], t, n);
  }
  return e;
}
function tn(e, t) {
  e.shapeFlag & 6 && e.component ? tn(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
const Lr = (e) => e.__isTeleport, De = Symbol.for("v-fgt"), Hr = Symbol.for("v-txt"), nn = Symbol.for("v-cmt"), be = [];
let I = null;
function rn(e = !1) {
  be.push(I = e ? null : []);
}
function zr() {
  be.pop(), I = be[be.length - 1] || null;
}
function sn(e) {
  return e.dynamicChildren = I || mn, zr(), I && I.push(e), e;
}
function Kr(e, t, n, r, s, o) {
  return sn(
    ee(
      e,
      t,
      n,
      r,
      s,
      o,
      !0
    )
  );
}
function Ur(e, t, n, r, s) {
  return sn(
    ot(
      e,
      t,
      n,
      r,
      s,
      !0
    )
  );
}
function on(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
const Wr = (...e) => ln(
  ...e
), cn = ({ key: e }) => e ?? null, Oe = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? x(e) || R(e) || w(e) ? { i: v, r: e, k: t, f: !!n } : e : null);
function ee(e, t = null, n = null, r = 0, s = null, o = e === De ? 0 : 1, i = !1, c = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && cn(t),
    ref: t && Oe(t),
    scopeId: wr,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: r,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: v
  };
  return c ? (it(u, n), o & 128 && e.normalize(u)) : n && (u.shapeFlag |= x(n) ? 8 : 16), process.env.NODE_ENV !== "production" && u.key !== u.key && g("VNode created with invalid key (NaN). VNode type:", u.type), // avoid a block node from tracking itself
  !i && // has current parent block
  I && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (u.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && I.push(u), u;
}
const ot = process.env.NODE_ENV !== "production" ? Wr : ln;
function ln(e, t = null, n = null, r = 0, s = null, o = !1) {
  if ((!e || e === Nr) && (process.env.NODE_ENV !== "production" && !e && g(`Invalid vnode type when creating vnode: ${e}.`), e = nn), on(e)) {
    const c = Re(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && it(c, n), !o && I && (c.shapeFlag & 6 ? I[I.indexOf(e)] = c : I.push(c)), c.patchFlag = -2, c;
  }
  if (dn(e) && (e = e.__vccOpts), t) {
    t = Br(t);
    let { class: c, style: u } = t;
    c && !x(c) && (t.class = Ge(c)), b(u) && (Ue(u) && !h(u) && (u = V({}, u)), t.style = qe(u));
  }
  const i = x(e) ? 1 : br(e) ? 128 : Lr(e) ? 64 : b(e) ? 4 : w(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && i & 4 && Ue(e) && (e = a(e), g(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), ee(
    e,
    t,
    n,
    r,
    s,
    i,
    o,
    !0
  );
}
function Br(e) {
  return e ? Ue(e) || en(e) ? V({}, e) : e : null;
}
function Re(e, t, n = !1, r = !1) {
  const { props: s, ref: o, patchFlag: i, children: c, transition: u } = e, f = t ? Yr(s || {}, t) : s, _ = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: f,
    key: f && cn(f),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && o ? h(o) ? o.concat(Oe(t)) : [o, Oe(t)] : Oe(t)
    ) : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && i === -1 && h(c) ? c.map(un) : c,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== De ? i === -1 ? 16 : i | 16 : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: u,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Re(e.ssContent),
    ssFallback: e.ssFallback && Re(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return u && r && tn(
    _,
    u.clone(_)
  ), _;
}
function un(e) {
  const t = Re(e);
  return h(e.children) && (t.children = e.children.map(un)), t;
}
function Jr(e = " ", t = 0) {
  return ot(Hr, null, e, t);
}
function it(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (h(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), it(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !en(t) ? t._ctx = v : s === 3 && v && (v.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else w(t) ? (t = { default: t, _ctx: v }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [Jr(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Yr(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const s in r)
      if (s === "class")
        t.class !== r.class && (t.class = Ge([t.class, r.class]));
      else if (s === "style")
        t.style = qe([t.style, r.style]);
      else if (En(s)) {
        const o = t[s], i = r[s];
        i && o !== i && !(h(o) && o.includes(i)) && (t[s] = o ? [].concat(o, i) : i);
      } else s !== "" && (t[s] = r[s]);
  }
  return t;
}
let Pe = null, Je;
{
  const e = Rt(), t = (n, r) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(r), (o) => {
      s.length > 1 ? s.forEach((i) => i(o)) : s[0](o);
    };
  };
  Je = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Pe = n
  ), t(
    "__VUE_SSR_SETTERS__",
    (n) => an = n
  );
}
const qr = (e) => {
  const t = Pe;
  return Je(e), e.scope.on(), () => {
    e.scope.off(), Je(t);
  };
};
function Gr(e) {
  return e.vnode.shapeFlag & 4;
}
let an = !1;
process.env.NODE_ENV;
function Qr(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(rr(Gn(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in ie)
        return ie[n](e);
    },
    has(t, n) {
      return n in t || n in ie;
    }
  })) : e.proxy;
}
const Xr = /(?:^|[-_])(\w)/g, Zr = (e) => e.replace(Xr, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function fn(e, t = !0) {
  return w(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function pn(e, t, n = !1) {
  let r = fn(t);
  if (!r && t.__file) {
    const s = t.__file.match(/([^/\\]+)\.\w+$/);
    s && (r = s[1]);
  }
  if (!r && e && e.parent) {
    const s = (o) => {
      for (const i in o)
        if (o[i] === t)
          return i;
    };
    r = s(
      e.components || e.parent.type.components
    ) || s(e.appContext.components);
  }
  return r ? Zr(r) : n ? "App" : "Anonymous";
}
function dn(e) {
  return w(e) && "__vccOpts" in e;
}
function kr() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, r = { style: "color:#eb2f96" }, s = {
    header(l) {
      return b(l) ? l.__isVue ? ["div", e, "VueInstance"] : R(l) ? [
        "div",
        {},
        ["span", e, _(l)],
        "<",
        c(l.value),
        ">"
      ] : te(l) ? [
        "div",
        {},
        ["span", e, J(l) ? "ShallowReactive" : "Reactive"],
        "<",
        c(l),
        `>${G(l) ? " (readonly)" : ""}`
      ] : G(l) ? [
        "div",
        {},
        ["span", e, J(l) ? "ShallowReadonly" : "Readonly"],
        "<",
        c(l),
        ">"
      ] : null : null;
    },
    hasBody(l) {
      return l && l.__isVue;
    },
    body(l) {
      if (l && l.__isVue)
        return [
          "div",
          {},
          ...o(l.$)
        ];
    }
  };
  function o(l) {
    const p = [];
    l.type.props && l.props && p.push(i("props", a(l.props))), l.setupState !== P && p.push(i("setup", l.setupState)), l.data !== P && p.push(i("data", a(l.data)));
    const m = u(l, "computed");
    m && p.push(i("computed", m));
    const N = u(l, "inject");
    return N && p.push(i("injected", N)), p.push([
      "div",
      {},
      [
        "span",
        {
          style: r.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: l }]
    ]), p;
  }
  function i(l, p) {
    return p = V({}, p), Object.keys(p).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        l
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(p).map((m) => [
          "div",
          {},
          ["span", r, m + ": "],
          c(p[m], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function c(l, p = !0) {
    return typeof l == "number" ? ["span", t, l] : typeof l == "string" ? ["span", n, JSON.stringify(l)] : typeof l == "boolean" ? ["span", r, l] : b(l) ? ["object", { object: p ? a(l) : l }] : ["span", n, String(l)];
  }
  function u(l, p) {
    const m = l.type;
    if (w(m))
      return;
    const N = {};
    for (const D in l.ctx)
      f(m, D, p) && (N[D] = l.ctx[D]);
    return N;
  }
  function f(l, p, m) {
    const N = l[m];
    if (h(N) && N.includes(p) || b(N) && p in N || l.extends && f(l.extends, p, m) || l.mixins && l.mixins.some((D) => f(D, p, m)))
      return !0;
  }
  function _(l) {
    return J(l) ? "ShallowRef" : l.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(s) : window.devtoolsFormatters = [s];
}
process.env.NODE_ENV;
process.env.NODE_ENV;
process.env.NODE_ENV;
/**
* vue v3.4.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function es() {
  kr();
}
process.env.NODE_ENV !== "production" && es();
const ts = { class: "bg-blue-700 h-10 w-full text-lg flex items-center justify-between" }, ns = { class: "bg-blue-700 h-10 w-full" }, ss = /* @__PURE__ */ Sr({
  __name: "HeaderPrefeitura",
  props: {
    textoHeader: { default: "Cabeçalho Padrão Pref" },
    textoFooter: { default: "Rodapé Padrão" }
  },
  setup(e) {
    const t = Zn("Gerar CNPJ");
    function n() {
      t.value = _n.generate();
    }
    return (r, s) => (rn(), Kr("div", null, [
      ee("header", ts, [
        ee("div", null, Ee(r.textoHeader), 1),
        ee("button", {
          class: "text-white h-8 bg-green-900 p-1 w-40",
          onClick: n
        }, Ee(t.value), 1)
      ]),
      vr(r.$slots, "default"),
      ee("footer", ns, Ee(r.textoFooter), 1)
    ]));
  }
});
export {
  ss as HeaderPrefeitura
};
