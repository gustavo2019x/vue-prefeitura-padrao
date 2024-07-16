import { defineComponent as l, ref as s, openBlock as u, createElementBlock as d, createElementVNode as e, toDisplayString as o, renderSlot as i } from "vue";
import { cnpj as c } from "cpf-cnpj-validator";
const f = { class: "bg-blue-700 h-10 w-full text-lg flex items-center justify-between" }, p = { class: "bg-blue-700 h-10 w-full" }, m = /* @__PURE__ */ l({
  __name: "HeaderPrefeitura",
  props: {
    textoHeader: { default: "Cabeçalho Padrão Pref" },
    textoFooter: { default: "Rodapé Padrão" }
  },
  setup(r) {
    const a = s("Gerar CNPJ");
    function n() {
      a.value = c.generate();
    }
    return (t, _) => (u(), d("div", null, [
      e("header", f, [
        e("div", null, o(t.textoHeader), 1),
        e("button", {
          class: "text-white h-8 bg-green-900 p-1 w-40",
          onClick: n
        }, o(a.value), 1)
      ]),
      i(t.$slots, "default"),
      e("footer", p, o(t.textoFooter), 1)
    ]));
  }
}), g = {
  install: (r) => {
    r.component("HeaderPrefeitura", m);
  }
};
export {
  m as HeaderPrefeitura,
  g as default
};
