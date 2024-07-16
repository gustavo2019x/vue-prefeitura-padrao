import { defineComponent as l, ref as n, openBlock as s, createElementBlock as d, createElementVNode as e, toDisplayString as o, renderSlot as u } from "vue";
const c = { class: "bg-blue-700 h-10 w-full text-lg flex items-center justify-between" }, f = { class: "bg-blue-700 h-10 w-full" }, h = /* @__PURE__ */ l({
  __name: "HeaderPrefeitura",
  props: {
    textoHeader: { default: "Cabeçalho Padrão Pref2.0" },
    textoFooter: { default: "Rodapé Padrão" }
  },
  setup(i) {
    const r = n("Gerar CNPJ");
    function a() {
    }
    return (t, p) => (s(), d("div", null, [
      e("header", c, [
        e("div", null, o(t.textoHeader), 1),
        e("button", {
          class: "text-white h-8 bg-green-900 p-1 w-40",
          onClick: a
        }, o(r.value), 1)
      ]),
      u(t.$slots, "default"),
      e("footer", f, o(t.textoFooter), 1)
    ]));
  }
});
export {
  h as HeaderPrefeitura
};
