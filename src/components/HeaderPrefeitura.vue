<script setup lang="ts">
import { cnpj } from 'cpf-cnpj-validator';
import { withDefaults, defineProps, ref } from 'vue';

// Define as propriedades com valores padrão
withDefaults(defineProps<{ textoHeader: string, textoFooter: string }>(), {
  textoHeader: 'Cabeçalho Padrão Pref2.0',
  textoFooter: 'Rodapé Padrão'
});

const cpnj_ = ref(`Gerar CNPJ`)
function gerar() {
  cpnj_.value = cnpj.generate()
}

</script>

<template>
  <div>
    <header class="bg-blue-700 h-10 w-full text-lg flex items-center justify-between">
      <div> {{ textoHeader }}</div>
      <button class="text-white h-8 bg-green-900 p-1 w-40" @click="gerar"> {{ cpnj_ }}</button>
    </header>
    <footer class="bg-blue-700 h-10 w-full">
      {{ textoFooter }}
    </footer>
  </div>

</template>

<style scoped></style>
