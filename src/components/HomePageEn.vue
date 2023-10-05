<template>
	<div lang="en">
		<p>This is BD4VQK. Welcome to my page.</p>

		<h2><i class="bi bi-whatsapp"></i> QSL Address</h2>
		<div class="card my-3">
			<div class="card-body">
				<div class="card-text">
					<address class="lead" style="white-space: pre-line;">
						Blk 25 Sispark, 328 Xinghu Jie<br />
						Suzhou Industrial Park<br />
						Suzhou, Jiangsu Province<br />
						China 215123
					</address>
				</div>
			</div>
		</div>
		<p>The mailbox is shared with others so <strong>please write my name as the recipient, not only the callsign.</strong></p>
		<p>QSL via QRZ and LoTW are preferred. Please contact me via email if you need more details.</p>

		<h2><i class="bi bi-journal-bookmark"></i> License</h2>
		<p>Current class: Class B</p>
		<p>Maximum power：100W (HF), 25W (VHF/UHF)</p>
		<p>See <router-link to="/appendix">appendix</router-link> for details about frequencies and power limits of
			different license classes.</p>

		<h2><i class="bi bi-broadcast-pin"></i> Stations and Antennas</h2>

		<h3>Radio Stations</h3>
		<table class="table table-striped">
			<thead>
				<tr>
					<th>Product Name</th>
					<th>Frequency Range</th>
					<th>Mode</th>
					<th>Power</th>
					<th>Description</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Baofeng UV5R</td>
					<td>VHF (144-148MHz)/UHF</td>
					<td>FM</td>
					<td>5W</td>
					<td>My first radio station.</td>
				</tr>
				<tr>
					<td>ICOM 7300</td>
					<td>HF/VHF (50-54MHz)</td>
					<td>SSB/CW/FT8</td>
					<td>100W</td>
					<td>My base station at home, for HF and 50MHz band.</td>
				</tr>
				<tr>
					<td>ICOM 705</td>
					<td>HF/VHF/UHF</td>
					<td>SSB/CW/FT8/FM</td>
					<td>5W</td>
					<td>A portable station used for operating outdoors.</td>
				</tr>
			</tbody>
		</table>

		<h3>Antennas</h3>
		<table class="table table-striped">
			<thead>
				<tr>
					<th>Name</th>
					<th>Type</th>
					<th>Frequency Range</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>U2V2</td>
					<td>YAGI</td>
					<td>VHF (144-148MHz)/UHF</td>
				</tr>
				<tr>
					<td>DKGP10</td>
					<td>EFHW/GP</td>
					<td>HF/VHF (50MHz)</td>
				</tr>
				<tr>
					<td>K8DX</td>
					<td>EFHW</td>
					<td>HF/VHF (50MHz)</td>
				</tr>
			</tbody>
		</table>

		<hr />
		<p>73, and hope to see you on the air.</p>
	</div>
</template>