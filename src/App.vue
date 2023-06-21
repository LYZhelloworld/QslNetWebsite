<script setup lang="ts">
import NavBar, { NavBarItem } from '@/components/NavBar.vue'
import HomePage from '@/components/HomePage.vue'
</script>

<template>
  <NavBar :selected-item="NavBarItem.Home" />
  <div class="container">
    <HomePage />
  </div>
</template>
