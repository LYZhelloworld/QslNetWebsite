<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { routes, languages } from '@/main';

const route = useRoute()
const { t, locale } = useI18n()

const navBarTexts: { [key: string]: string } = {
  '/home': 'navbar.home',
}

function currentPageIs(path: string) {
  return route.name === path
}

function changeLocale(newLocale: string) {
  locale.value = newLocale
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
          <li v-for="(value, index) in routes.filter(x => x.path !== '/')" :key="index" class="nav-item">
            <router-link class="nav-link" :class="{ active: currentPageIs(value.path) }"
              :aria-current="currentPageIs(value.path) ? 'page' : undefined" :to="value.path">{{
                t(navBarTexts[value.path])
              }}</router-link>
          </li>
        </ul>
      </div>

      <div class="d-flex">
        <ul class="navbar-nav">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">{{
              t('navbar.language') }}</a>
            <div class="dropdown-menu dropdown-menu-end">
              <button v-for="(value, index) in languages" :key="index" class="btn btn-link dropdown-item"
                @click="changeLocale(value.code)">{{ value.name }}</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
