<script setup lang="ts">
import { ref } from 'vue'
import Son from "./son.vue";

const count = ref(999)
// const name = ref('aa')

</script>

<template>
  <Son :count="count"></Son>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
