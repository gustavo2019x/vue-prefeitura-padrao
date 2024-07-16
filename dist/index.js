import { defineComponent as l, ref as n, openBlock as s, createElementBlock as u, createElementVNode as e, toDisplayString as o, renderSlot as d } from "vue";
import { cnpj as c } from "cpf-cnpj-validator";
const f = { class: "bg-blue-700 h-10 w-full text-lg flex items-center justify-between" }, i = { class: "bg-blue-700 h-10 w-full" }, b = /* @__PURE__ */ l({
  __name: "HeaderPrefeitura",
  props: {
    textoHeader: { default: "Cabeçalho Padrão Pref" },
    textoFooter: { default: "Rodapé Padrão" }
  },
  setup(p) {
    const r = n("Gerar CNPJ");
    function a() {
      r.value = c.generate();
    }
    return (t, m) => (s(), u("div", null, [
      e("header", f, [
        e("div", null, o(t.textoHeader), 1),
        e("button", {
          class: "text-white h-8 bg-green-900 p-1 w-40",
          onClick: a
        }, o(r.value), 1)
      ]),
      d(t.$slots, "default"),
      e("footer", i, o(t.textoFooter), 1)
    ]));
  }
});
export {
  b as HeaderPrefeitura
};
