<script setup lang="ts">
import { ref } from 'vue'
import NavBar, { ColourModeEnum } from '@/components/NavBar.vue'

const colourMode = ref<ColourModeEnum>(ColourModeEnum.Auto)
changeColourMode(colourMode.value)

function setDarkColourMode() {
  document.documentElement.setAttribute('data-bs-theme', 'dark');
}

function setLightColourMode() {
  document.documentElement.removeAttribute('data-bs-theme');
}

function setAutoColourMode() {
  const hour = new Date().getHours()
  if (hour < 6 || hour > 18) {
    setDarkColourMode()
  } else {
    setLightColourMode()
  }
}

function changeColourMode(newColourMode: ColourModeEnum) {
  colourMode.value = newColourMode

  switch (newColourMode) {
    case ColourModeEnum.Light:
      setLightColourMode();
      break;
    case ColourModeEnum.Dark:
      setDarkColourMode();
      break;
    case ColourModeEnum.Auto:
      setAutoColourMode();
      break;
  }
}
</script>

<template>
  <NavBar :colour-mode="colourMode" @change-colour-mode="changeColourMode" />
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
