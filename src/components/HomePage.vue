<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n()

function getLocale() {
	return locale.value
}
</script>

<template>
	<div :lang="getLocale()" class="container">
		<p>{{ t('homepage.introduction') }}</p>
		<h2>{{ t('homepage.title-qsl-address') }}</h2>
		<hr>

		<div class="card my-3">
			<div class="card-body">
				<div class="card-text">
					<p v-html="t('homepage.qsl-note-ja')"></p>
					<address class="lead" style="white-space: pre-line;">
						{{ t('homepage.qsl-address') }}
					</address>
				</div>
			</div>
		</div>

		<p v-html="t('homepage.qsl-info-1')"></p>
		<p v-html="t('homepage.qsl-info-2')"></p>
		<p v-html="t('homepage.qsl-info-3')"></p>
		<p v-html="t('homepage.qsl-info-4')"></p>

		<h2>{{ t('homepage.title-license') }}</h2>
		<hr>
		<p v-html="t('homepage.license-info-1')"></p>
		<p v-html="t('homepage.license-info-2')"></p>
		<i18n-t keypath="homepage.license-info-3" tag="p">
			<router-link to="/appendix">{{ t('homepage.license-info-3-appendix-link-text') }}</router-link>
		</i18n-t>

		<h2>{{ t('homepage.title-stations-and-antennas') }}</h2>
		<hr>

		<h3>{{ t('homepage.title-stations') }}</h3>
		<table class="table table-striped">
			<thead>
				<tr>
					<th>{{ t('homepage.station-name') }}</th>
					<th>{{ t('homepage.station-frequency-range') }}</th>
					<th>{{ t('homepage.station-mode') }}</th>
					<th>{{ t('homepage.station-power') }}</th>
					<th>{{ t('homepage.station-description') }}</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>{{ t('homepage.station-1-name') }}</td>
					<td>
						VHF (144-148MHz)/UHF
					</td>
					<td>FM</td>
					<td>5W</td>
					<td v-html="t('homepage.station-1-description')"></td>
				</tr>
				<tr>
					<td>{{ t('homepage.station-2-name') }}</td>
					<td>HF/VHF (50-54MHz)</td>
					<td>SSB/CW/FT8</td>
					<td>100W</td>
					<td v-html="t('homepage.station-2-description')"></td>
				</tr>
				<tr>
					<td>{{ t('homepage.station-3-name') }}</td>
					<td>HF/VHF/UHF</td>
					<td>SSB/CW/FT8/FM</td>
					<td>5W</td>
					<td v-html="t('homepage.station-3-description')"></td>
				</tr>
			</tbody>
		</table>

		<h3>{{ t('homepage.title-antennas') }}</h3>
		<table class="table table-striped">
			<thead>
				<tr>
					<th>{{ t('homepage.antenna-name') }}</th>
					<th>{{ t('homepage.antenna-type') }}</th>
					<th>{{ t('homepage.antenna-frequency-range') }}</th>
					<th>{{ t('homepage.antenna-description') }}</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>RH771S</td>
					<td>GP</td>
					<td>VHF (144-148MHz)/UHF</td>
					<td v-html="t('homepage.antenna-1-description')"></td>
				</tr>
				<tr>
					<td>U7V4</td>
					<td>YAGI</td>
					<td>VHF (144-148MHz)/UHF</td>
					<td v-html="t('homepage.antenna-2-description')"></td>
				</tr>
				<tr>
					<td>DKGP10</td>
					<td>EFHW/GP</td>
					<td>HF/VHF (50MHz)</td>
					<td v-html="t('homepage.antenna-3-description')"></td>
				</tr>
			</tbody>
		</table>

		<h2>{{ t('homepage.title-frequency') }}</h2>
		<hr>

		<h3>HF</h3>
		<p>{{ t('homepage.frequency-hf-bands') }}</p>
		<ul>
			<li>40m (7MHz-7.2MHz)</li>
			<li>30m (10.1MHz-10.15MHz)</li>
			<li>20m (14MHz-14.35MHz)</li>
			<li>17m (18.068-18.168MHz)</li>
			<li>15m (21MHz-21.45MHz)</li>
			<li>12m (24.89MHz-24.99MHz)</li>
			<li>10m (28MHz-29.7MHz)</li>
		</ul>
		<p v-html="t('homepage.frequency-hf-info-1')"></p>
		<p v-html="t('homepage.frequency-hf-info-2')"></p>
		<p v-html="t('homepage.frequency-hf-info-3')"></p>
		<p v-html="t('homepage.frequency-hf-info-4')"></p>

		<h3>VHF (50MHz-54MHz)</h3>
		<p v-html="t('homepage.frequency-vhf-6m-info-1')"></p>
		<p v-html="t('homepage.frequency-vhf-6m-info-2')"></p>
		<p v-html="t('homepage.frequency-vhf-6m-info-3')"></p>

		<h3>VHF (144-148MHz)/UHF</h3>
		<p v-html="t('homepage.frequency-vhf-2m-info-1')"></p>
		<p v-html="t('homepage.frequency-vhf-2m-info-2')"></p>
		<p v-html="t('homepage.frequency-vhf-2m-info-3')"></p>

		<hr>
		<p v-html="t('homepage.footer')"></p>
	</div>
</template>
