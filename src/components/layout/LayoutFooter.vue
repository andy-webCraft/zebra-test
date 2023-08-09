<template>
  <footer class="footer">
    <div class="_container">
      <div class="footer__wrapper">
        <div class="footer__item">
          <img :src="logo" class="footer__logo _img" alt="logo" />

          <p class="footer__copyright">© alpha, 2023</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import logo from "../../assets/img/logo.png";
</script>

<style scoped>
.footer {
  background-color: var(--background-light);
}

.footer__wrapper {
  display: flex;
  align-items: center;
  padding-top: 4rem;
  padding-bottom: 4rem;
}

.footer__logo {
  max-width: 114px;
}

.footer__copyright {
  line-height: 140%;
  color: #81899d;
  margin-top: 1rem;
}
</style>
