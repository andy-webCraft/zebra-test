<template>
  <header class="header">
    <div class="_container">
      <div class="header__wrapper">
        <a href="/">
          <img :src="logo" class="_img" alt="logo" />
        </a>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import logo from "../../assets/img/logo.png";
</script>

<style scoped>
.header {
  background-color: var(--backgroung-main);
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.08);
  z-index: 100;
}

.header__wrapper {
  display: flex;
  align-items: center;
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
}
</style>
