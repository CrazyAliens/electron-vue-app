<script setup lang="ts">
import Versions from './components/Versions.vue'
import Test from './components/test/index.vue'
</script>

<template>
  <Versions></Versions>
  <Test></Test>
  <svg class="hero-logo" viewBox="0 0 900 300">
    <use xlink:href="./assets/icons.svg#electron" />
  </svg>

</template>

<style lang="less">
@import './assets/css/styles.less';
</style>
