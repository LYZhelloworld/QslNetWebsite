<template>
	<div lang="zh-CN">
		<p>这里是 BD4VQK。欢迎来到我的个人主页。</p>

		<h2><i class="bi bi-whatsapp"></i> QSL地址</h2>
		<div class="card my-3">
			<div class="card-body">
				<div class="card-text">
					<address class="lead" style="white-space: pre-line;">
						江苏省 苏州市<br />
						苏州工业园区 星湖街 328 号<br />
						苏州创意产业园 25 幢<br />
						邮编 215123<br />
					</address>
				</div>
			</div>
		</div>
		<p><strong>邮寄时收件人请务必写我的姓名，不要用呼号作为收件人。</strong>该信箱为共享信箱，不写姓名很可能无法送到我手中。</p>
		<p>优先使用 QRZ、LoTW 确认。如果需要更详细的信息，请通过邮箱联系我。</p>
		<p>寄往卡片局的卡可能<strong>无法</strong>送到我手中，请向上述地址发送 QSL 卡片。</p>
		<p>QRZ 上的记录包含最完整信息，LoTW 其次。二者冲突时以 QRZ 为准。</p>

		<h2><i class="bi bi-journal-bookmark"></i> 操作证</h2>
		<p>当前操作证等级：B 级</p>
		<p>最大可用功率：100 W（HF）、25 W（VHF/UHF）</p>
		<p>详细的可用频率及功率见<router-link to="/appendix">附录</router-link>。</p>

		<h2><i class="bi bi-broadcast-pin"></i> 电台及天线</h2>

		<h3>电台</h3>
		<table class="table table-striped">
			<thead>
				<tr>
					<th>型号</th>
					<th>频率范围</th>
					<th>模式</th>
					<th>功率</th>
					<th>说明</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>宝锋 UV5R</td>
					<td> VHF (144-148MHz)/UHF </td>
					<td>FM</td>
					<td>5W</td>
					<td>我取得呼号的第一部设备。</td>
				</tr>
				<tr>
					<td>ICOM 7300</td>
					<td>HF/VHF (50-54MHz)</td>
					<td>SSB/CW/FT8</td>
					<td>100W</td>
					<td>家用基地台，主要用于 HF 和 50MHz 频段。</td>
				</tr>
				<tr>
					<td>ICOM 705</td>
					<td>HF/VHF/UHF</td>
					<td>SSB/CW/FT8/FM</td>
					<td>5W</td>
					<td>一部便捷式电台，用于野外架台或卫星通联。</td>
				</tr>
			</tbody>
		</table>

		<h3>天线</h3>
		<table class="table table-striped">
			<thead>
				<tr>
					<th>名称</th>
					<th>类别</th>
					<th>频率范围</th>
					<th>说明</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>RH771S</td>
					<td>GP</td>
					<td>VHF (144-148MHz)/UHF</td>
					<td>供 UV5R 使用的天线。</td>
				</tr>
				<tr>
					<td>U2V2</td>
					<td>YAGI</td>
					<td>VHF (144-148MHz)/UHF</td>
					<td>一个 UHF 2 单元、VHF 2 单元的八木天线。</td>
				</tr>
				<tr>
					<td>DKGP10</td>
					<td>EFHW/GP</td>
					<td>HF/VHF (50MHz)</td>
					<td>一个端馈天线，在家中使用时在阳台窗边横向架设。野外架台时配合三脚架垂直架设成为 GP 天线。主要用于 HF。</td>
				</tr>
			</tbody>
		</table>

		<h2><i class="bi bi-soundwave"></i> 主要使用频率和模式</h2>

		<h3>HF</h3>
		<p>主要出现在以下波段：</p>
		<ul>
			<li>40m (7MHz-7.2MHz)</li>
			<li>30m (10.1MHz-10.15MHz)</li>
			<li>20m (14MHz-14.35MHz)</li>
			<li>17m (18.068-18.168MHz)</li>
			<li>15m (21MHz-21.45MHz)</li>
			<li>12m (24.89MHz-24.99MHz)</li>
			<li>10m (28MHz-29.7MHz)</li>
		</ul>
		<p>通常你会在这些波段的 FT8 频率上见到我，但我也会在 40m、20m、15m、10m 波段的 SSB 和 CW 频率上出现。</p>
		<p>个人而言，我更喜欢 CW 模式。如果你见到我的话欢迎与我通联。</p>
		<p>如果你见到我的呼号带有 <code>/QRP</code> 后缀，说明我正在使用 5W 的小功率电台与你通联。鉴于在 SSB 和 CW
			中这个后缀可能太长，通常你只会在数字传输模式（如FT8）中见到。<strong>注：</strong>记录日志时，在你的日志中我的呼号需要与我报出的呼号保持完全一致（即<strong>不要擅自删掉后缀或前缀</strong>），否则我们的日志可能无法互相确认。
		</p>

		<h3>VHF (50MHz-54MHz)</h3>
		<p>6m 波段由于其特殊的传播特性，一般情况下我只会使用最高效且保险的 FT8 模式在 50.313MHz 进行通联。</p>
		<p>根据规定，VHF 上最高功率限制为 25W。你可能发现我的信号强度并不高，这是正常现象。</p>
		<p>同理，你也有可能遇到 <code>/QRP</code> 后缀的我，这表示我正在使用 5W 的功率与你通联。</p>

		<h3>VHF (144-148MHz)/UHF</h3>
		<p>在这个频段上主要进行卫星通联。虽然根据规定我也可以在 146MHz-148MHz 发射信号，但多出来的频率并非业余卫星频率，所以你可能会很少见到我。</p>
		<p>目前我没有任何辅助设备来帮助我调整天线仰角、方位角和多普勒，因此我的所有操作都是手动的。通常我会在野外的地面高度操作。由于野外能携带的设备不多，因此主要注重于 FM 卫星通联。</p>
		<p>在 UHF 频段，有时我还会参与本地中继台上的通联。这些通联会记录在 QRZ 上。如果需要与我确认日志，请在填写日志时打开Propagation”一项并选择“Terrestrial or atmospheric
			repeater or transponder”。</p>

		<hr />
		<p>期望与您在空中相会，73。</p>
	</div>
</template>