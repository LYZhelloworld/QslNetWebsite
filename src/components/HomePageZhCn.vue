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
		<p>该信箱与他人共用，<strong>邮寄时请务必写上我的姓名，不要只用呼号作为收件人。</strong></p>
		<p>优先使用 QRZ、LoTW 确认。如果需要更详细的信息，请通过邮箱联系我。</p>

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
					<td>VHF (144-148MHz)/UHF</td>
					<td>FM</td>
					<td>5W</td>
					<td>我的第一部设备。</td>
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
					<td>一部便捷式电台，用于野外架台。</td>
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
		<p>期望与您在空中相会，73。</p>
	</div>
</template>