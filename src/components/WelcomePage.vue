<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { languages } from '@/main';
const { locale } = useI18n()

function changeLocale(newLocale: string) {
	locale.value = newLocale
}
</script>

<template>
	<div class="container">
		<div>
			<pre class="text-center">
			CQ CQ CQ DE BD4VQK
			=
			QTH PM01
			PSE QSL VIA QRZ LOTW DIRECT
			=
			LIS B MAX PWR 100W HF 25W VHF ES UHF
			=
			RIG BF-UV5R VHF UHF
			RIG IC-7300 HF VHF
			RIG IC-705 QRP HF VHF UHF
			=
			ANT U2V2 YAGI
			ANT DKGP10 EFHW/GP
			ANT K8DX EFHW
			=
			HPE TO CU ON FREQ
			73 ES 88
			SK
	    </pre>
		</div>

		<hr>
		<ul class="nav nav-underline nav-fill flex-column flex-sm-row">
			<li class="nav-item" v-for="(value, index) in languages" :key="index">
				<router-link class="nav-link" to="/home" @click="changeLocale(value.code)">{{ value.name }}</router-link>
			</li>
		</ul>
		<hr>
	</div>
</template>

<style scoped>
pre {
	font-family: 'Courier New', Courier, monospace;
	white-space: pre-line;
}
</style>
