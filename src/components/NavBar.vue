<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';

const route = useRoute()
const { t, locale } = useI18n()

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
  <nav class="navbar sticky-top navbar-expand-lg bg-light mb-2">
    <div class="container">
      <router-link class="navbar-brand" to="/">BD4VQK</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" :class="{ active: currentPageIs('/home') }"
              :aria-current="currentPageIs('/home') ? 'page' : undefined" to="/home">{{
                t('navbar.home')
              }}</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :class="{ active: currentPageIs('/appendix') }"
              :aria-current="currentPageIs('/appendix') ? 'page' : undefined" to="/appendix">{{
                t('navbar.appendix')
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
              <button class="btn btn-link dropdown-item" @click="changeLocale('zh-CN')">简体中文</button>
              <button class="btn btn-link dropdown-item" @click="changeLocale('en')">English</button>
              <button class="btn btn-link dropdown-item" @click="changeLocale('ja')">日本語</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
