<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';

defineProps<{
  colourMode: ColourModeEnum;
}>();

defineEmits<{
  (e: 'changeColourMode', colourMode: ColourModeEnum): void
}>();

const route = useRoute()
const { t, locale } = useI18n()

function currentPageIs(path: string) {
  return route.path === path
}

function ariaCurrentPageIs(path: string) {
  return currentPageIs(path) ? 'page' : undefined
}

function changeLocale(newLocale: string) {
  locale.value = newLocale
}
</script>

<script lang="ts">
export enum ColourModeEnum {
  Light,
  Dark,
  Auto,
}
</script>

<template>
  <nav class="navbar sticky-top navbar-expand-lg bg-primary-subtle mb-2">
    <div class="container" :lang="locale">
      <router-link class="navbar-brand" to="/">BD4VQK</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" :class="{ active: currentPageIs('/home') }"
              :aria-current="ariaCurrentPageIs('/home')" to="/home">{{
                t('navbar.home')
              }}</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :class="{ active: currentPageIs('/appendix') }"
              :aria-current="ariaCurrentPageIs('/appendix')" to="/appendix">{{
                t('navbar.appendix')
              }}</router-link>
          </li>
        </ul>
      </div>

      <div class="d-flex">
        <ul class="navbar-nav">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i
                class="bi bi-translate"></i></a>
            <div class="dropdown-menu dropdown-menu-end">
              <button class="btn btn-link dropdown-item" @click="changeLocale('zh-CN')" lang="zh-CN">简体中文</button>
              <button class="btn btn-link dropdown-item" @click="changeLocale('en')" lang="en">English</button>
              <button class="btn btn-link dropdown-item" @click="changeLocale('ja')" lang="ja">日本語</button>
            </div>
          </li>

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i v-if="colourMode === ColourModeEnum.Light" class="bi bi-brightness-high-fill"></i>
              <i v-if="colourMode === ColourModeEnum.Dark" class="bi bi-moon-fill"></i>
              <i v-if="colourMode === ColourModeEnum.Auto" class="bi bi-circle-half"></i>
            </a>
            <div class="dropdown-menu dropdown-menu-end">
              <button class="btn btn-link dropdown-item" @click="$emit('changeColourMode', ColourModeEnum.Light)"><i
                  class="bi bi-brightness-high-fill"></i> {{ t('navbar.colour-mode-light') }}</button>
              <button class="btn btn-link dropdown-item" @click="$emit('changeColourMode', ColourModeEnum.Dark)"><i
                  class="bi bi-moon-fill"></i> {{ t('navbar.colour-mode-dark') }}</button>
              <button class="btn btn-link dropdown-item" @click="$emit('changeColourMode', ColourModeEnum.Auto)"><i
                  class="bi bi-circle-half"></i> {{ t('navbar.colour-mode-auto') }}</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
