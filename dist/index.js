import { defineComponent as l, ref as n, openBlock as s, createElementBlock as c, createElementVNode as e, toDisplayString as t } from "vue";
const u = { class: "bg-blue-700 h-10 w-full text-lg flex items-center justify-between" }, d = { class: "bg-blue-700 h-10 w-full" }, _ = /* @__PURE__ */ l({
  __name: "HeaderPrefeitura",
  props: {
    textoHeader: { default: "Cabeçalho Padrão Pref2.0" },
    textoFooter: { default: "Rodapé Padrão" }
  },
  setup(i) {
    const r = n("Gerar CNPJ");
    function a() {
    }
    return (o, f) => (s(), c("div", null, [
      e("header", u, [
        e("div", null, t(o.textoHeader), 1),
        e("button", {
          class: "text-white h-8 bg-green-900 p-1 w-40",
          onClick: a
        }, t(r.value), 1)
      ]),
      e("footer", d, t(o.textoFooter), 1)
    ]));
  }
});
export {
  _ as HeaderPrefeitura
};
