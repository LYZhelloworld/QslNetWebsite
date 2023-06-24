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
		<p><strong>Please DO NOT write only my callsign as the recipient. My name is required</strong> since the mailbox is
			shared with others. It will not be delivered to me if there is not my name on it.</p>
		<p>QSL via QRZ and LoTW are preferred. Please contact me via email if you need more details.</p>
		<p>Please send to the address above instead of bureau or it may <strong>NOT</strong> be able to deliver to me.</p>
		<p>QRZ contains more fields than LoTW so the information from QRZ will take precedence if conflicts exist.</p>

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
					<td> VHF (144-148MHz)/UHF </td>
					<td>FM</td>
					<td>5W</td>
					<td>My first radio station to get my callsign.</td>
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
					<td>A portable station used for operating outdoors and satellite communication. You will see a suffix
						<code>/QRP</code> on HF to indicate that I am using this station.
					</td>
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
					<th>Description</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>RH771S</td>
					<td>GP</td>
					<td>VHF (144-148MHz)/UHF</td>
					<td>The antenna for Baofeng UV5R.</td>
				</tr>
				<tr>
					<td>U7V4</td>
					<td>YAGI</td>
					<td>VHF (144-148MHz)/UHF</td>
					<td>A Yagi with 7 UHF and 4 VHF elements, for satellite communication.</td>
				</tr>
				<tr>
					<td>DKGP10</td>
					<td>EFHW/GP</td>
					<td>HF/VHF (50MHz)</td>
					<td>An end-fed HF antenna, used horizontally by the window at home, or vertically on a tripod when operating
						outdoors.</td>
				</tr>
			</tbody>
		</table>

		<h2><i class="bi bi-soundwave"></i> Mainly-used Frequencies and Modes</h2>

		<h3>HF</h3>
		<p>Usually operate on the following bands:</p>
		<ul>
			<li>40m (7MHz-7.2MHz)</li>
			<li>30m (10.1MHz-10.15MHz)</li>
			<li>20m (14MHz-14.35MHz)</li>
			<li>17m (18.068-18.168MHz)</li>
			<li>15m (21MHz-21.45MHz)</li>
			<li>12m (24.89MHz-24.99MHz)</li>
			<li>10m (28MHz-29.7MHz)</li>
		</ul>
		<p>You will often see me on FT8 frequencies of these bands, but also the SSB/CW frequencies on 40m/20m/15m/10m
			bands.</p>
		<p>Personally, I like CW more. You are welcome to contact me any time when you receive my call.</p>
		<p>If my callsign is attached with a <code>/QRP</code>, it means that I am using my QRP station with 5W power. QRP
			contact are challenging and it requires better propagation and antenna. Your QSO will be my best encouragement.
		</p>
		<p><strong>Note:</strong> my callsign on your logbook shall be the same as what I send (i.e. <strong>DO NOT remove
				the prefixes or suffixes by yourself</strong>), otherwise the logs may not be able to be confirmed.</p>
		<h3>VHF (50MHz-54MHz)</h3>
		<p>Due to its special propagation characteristics, I will only use "the most efficient and safe" FT8 mode to
			communicate at 50.313MHz.</p>
		<p>By regulation, the maximum power limit on VHF is 25W. It is normal that you may find my signal strength not very
			strong.</p>
		<p>Similarly, you may meet me with <code>/QRP</code> suffix, which means I am using my QRP station.</p>
		<h3>VHF (144-148MHz)/UHF</h3>
		<p>This is mainly for satellite communications. By regulation I am able to transmit on 146MHz-148MHz as well, but it
			is not for amateur satellites so I am not using this part very often.</p>
		<p>Right now I do not have any assistance for adjusting antenna azimuth, elevation, and Doppler. All of them are
			done manually. Usually I operates at ground level outdoors, focusing on FM because I am unable to bring many
			devices for digital satellites.</p>
		<p>Sometimes I will participate in communications via local repeaters, which will be logged on QRZ. If you need
			confirmation, remember to expand the "Propagation" section and select "Terrestrial or atmospheric repeater or
			transponder".</p>

		<hr/>
		<p>73, and hope to see you on the air.</p>
	</div>
</template>