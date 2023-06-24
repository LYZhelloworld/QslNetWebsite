<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import HomePageZhCn from './HomePageZhCn.vue'
import HomePageEn from './HomePageEn.vue'
import HomePageJa from './HomePageJa.vue'

const { locale } = useI18n()
</script>

<template>
	<home-page-zh-cn v-if="locale === 'zh-CN'" />
	<home-page-en v-if="locale === 'en'" />
	<home-page-ja v-if="locale === 'ja'" />
</template>
