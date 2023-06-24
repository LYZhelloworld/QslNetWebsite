<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
</script>

<template>
  <NavBar />
  <div class="container">
    <router-view />
  </div>
</template>

<style>
h1::after,
h2::after {
  content: "";
  display: block;
  margin: 1rem 0;
  border-bottom: var(--bs-border-width) solid;
  opacity: .25;
}
</style>
