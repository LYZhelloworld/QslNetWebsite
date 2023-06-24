<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import HomePageZhCn from './HomePageZhCn.vue'
import HomePageEn from './HomePageEn.vue'
import HomePageJa from './HomePageJa.vue'

const { locale } = useI18n()

function getLocale() {
	return locale.value
}
</script>

<template>
	<home-page-zh-cn v-if="getLocale() === 'zh-CN'" />
	<home-page-en v-if="getLocale() === 'en'" />
	<home-page-ja v-if="getLocale() === 'ja'" />
</template>
