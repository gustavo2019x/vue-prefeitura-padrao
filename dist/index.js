import { defineComponent as n, ref as l, openBlock as s, createElementBlock as c, createElementVNode as e, toDisplayString as t } from "vue";
import { cnpj as u } from "cpf-cnpj-validator";
const i = { class: "bg-blue-700 h-10 w-full text-lg flex items-center justify-between" }, d = { class: "bg-blue-700 h-10 w-full" }, h = /* @__PURE__ */ n({
  __name: "HeaderPrefeitura",
  props: {
    textoHeader: { default: "Cabeçalho Padrão Pref2.0" },
    textoFooter: { default: "Rodapé Padrão" }
  },
  setup(f) {
    const o = l("Gerar CNPJ");
    function a() {
      o.value = u.generate();
    }
    return (r, p) => (s(), c("div", null, [
      e("header", i, [
        e("div", null, t(r.textoHeader), 1),
        e("button", {
          class: "text-white h-8 bg-green-900 p-1 w-40",
          onClick: a
        }, t(o.value), 1)
      ]),
      e("footer", d, t(r.textoFooter), 1)
    ]));
  }
});
export {
  h as HeaderPrefeitura
};
