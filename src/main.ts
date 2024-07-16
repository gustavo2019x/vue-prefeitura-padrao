import './vue-prefeitura-padrao.css'
import HeaderPrefeitura from './components/HeaderPrefeitura.vue'
import type { App } from "vue";

export default {
    install: (app: App) => {
        app.component('HeaderPadrao', HeaderPrefeitura);
    },
};

export { HeaderPrefeitura }