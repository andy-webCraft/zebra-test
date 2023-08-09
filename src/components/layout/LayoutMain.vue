<template>
  <layout-header />
  <slot name="hero" />

  <main class="content">
    <slot />
  </main>
  <layout-footer />
</template>

<script setup lang="ts">
import LayoutHeader from "./LayoutHeader.vue";
import LayoutFooter from "./LayoutFooter.vue";
</script>

<style scoped>
.content {
  flex: 1 0 auto;
  padding: 4rem 6.25rem 4.5rem;
}
</style>
