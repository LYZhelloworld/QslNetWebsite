<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t } = useI18n()
</script>

<template>
	<div>
		<h2>{{ t('appendix.title') }}</h2>
		<hr>
		<table class="table table-striped">
			<thead>
				<tr>
					<th rowspan="2">{{ t('appendix.band') }}</th>
					<th rowspan="2">{{ t('appendix.frequency') }}</th>
					<th colspan="3">{{ t('appendix.power') }}</th>
				</tr>
				<tr>
					<th>{{ t('appendix.class-a') }}</th>
					<th>{{ t('appendix.class-b') }}</th>
					<th>{{ t('appendix.class-c') }}</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>2200m</td>
					<td>0.1357 &ndash; 0.1378</td>
					<td>-</td>
					<td>1</td>
					<td>1</td>
				</tr>
				<tr>
					<td>160m</td>
					<td>1.8 &ndash; 2</td>
					<td>-</td>
					<td>100</td>
					<td>1000</td>
				</tr>
				<tr>
					<td>80m</td>
					<td>3.5 &ndash; 3.9</td>
					<td>-</td>
					<td>100</td>
					<td>1000</td>
				</tr>
				<tr>
					<td>60m</td>
					<td>5.3515 &ndash; 5.3665</td>
					<td>-</td>
					<td>15</td>
					<td>15</td>
				</tr>
				<tr>
					<td>40m</td>
					<td>7 &ndash; 7.2</td>
					<td>-</td>
					<td>100</td>
					<td>1000</td>
				</tr>
				<tr>
					<td>30m</td>
					<td>10.1 &ndash; 10.15</td>
					<td>-</td>
					<td>100</td>
					<td>1000</td>
				</tr>
				<tr>
					<td>20m</td>
					<td>14 &ndash; 14.35</td>
					<td>-</td>
					<td>100</td>
					<td>1000</td>
				</tr>
				<tr>
					<td>17m</td>
					<td>18.068 &ndash; 18.168</td>
					<td>-</td>
					<td>100</td>
					<td>1000</td>
				</tr>
				<tr>
					<td>15m</td>
					<td>21 &ndash; 21.45</td>
					<td>-</td>
					<td>100</td>
					<td>1000</td>
				</tr>
				<tr>
					<td>12m</td>
					<td>24.89 &ndash; 24.99</td>
					<td>-</td>
					<td>100</td>
					<td>1000</td>
				</tr>
				<tr>
					<td>10m</td>
					<td>28 &ndash; 29.7</td>
					<td>-</td>
					<td>100</td>
					<td>1000</td>
				</tr>
				<tr>
					<td>6m</td>
					<td>50 &ndash; 54</td>
					<td>25</td>
					<td>25</td>
					<td>25</td>
				</tr>
				<tr>
					<td>2m</td>
					<td>144 &ndash; 148</td>
					<td>25</td>
					<td>25</td>
					<td>25</td>
				</tr>
				<tr>
					<td>70cm</td>
					<td>430 &ndash; 440</td>
					<td>25</td>
					<td>25</td>
					<td>25</td>
				</tr>
				<tr>
					<td>23cm</td>
					<td>1240 &ndash; 1300</td>
					<td>25</td>
					<td>25</td>
					<td>25</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>