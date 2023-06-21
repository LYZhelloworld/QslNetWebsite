<script setup lang="ts">
import { useRoute } from 'vue-router';
import { routes } from '@/main';

const route = useRoute()

const navBarTexts: { [key: string]: string } = {
  '/home': 'Home',
}

function currentPageIs(path: string) {
  return route.name === path
}
</script>

<script lang="ts">
export enum NavBarItem {
  Home
}
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-light mb-2">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">BD4VQK</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li v-for="(value, index) in routes" :key="index" class="nav-item">
            <router-link class="nav-link" :class="{ active: currentPageIs(value.path) }"
              :aria-current="currentPageIs(value.path) ? 'page' : undefined" :to="value.path">{{ navBarTexts[value.path]
              }}</router-link>
          </li>
        </ul>
      </div>

      <div class="d-flex">
        <ul class="navbar-nav">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">Language</a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">English</a>
              <a class="dropdown-item" href="#">中文</a>
              <a class="dropdown-item" href="#">日本語</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
