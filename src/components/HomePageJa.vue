<template>
	<div lang="ja">
		<p>こちらはBD4VQKです。私のホームページへようこそ。</p>

		<h2><i class="bi bi-whatsapp"></i> QSL住所</h2>
		<div class="card my-3">
			<div class="card-body">
				<div class="card-text">
					<p><strong>国際郵便ですので、英語版の住所をご利用ください。</strong>日本語版のは参考用です。</p>
					<address class="lead" style="white-space: pre-line;">
						中華人民共和国<br />
						江蘇省蘇州市<br />
						蘇州工業園区星湖街３２８号<br />
						蘇州創意産業園２５ビル<br />
						〒２１５１２３
					</address>
				</div>
			</div>
		</div>
		<p>このメールボックスは他の人と共用するので、<strong>受信者にはコールサインだけではなく、私の名前も書いてください。</strong></p>
		<p>QRZ・LoTWで確認するのが最優先です。詳しい情報が必要する場合、メールで連絡してください。</p>

		<h2><i class="bi bi-journal-bookmark"></i> 免許証</h2>
		<p>現在の免許証レベル：Ｂ級。</p>
		<p>最大出力：100W（HF）、25W（VHF/UHF）</p>
		<p>免許証の操作範囲と最大出力の詳細については、<router-link to="/appendix">付録</router-link>をご参照してください。</p>

		<h2><i class="bi bi-broadcast-pin"></i> 無線機とアンテナ</h2>

		<h3>無線機</h3>
		<table class="table table-striped">
			<thead>
				<tr>
					<th>機器名</th>
					<th>周波数範囲</th>
					<th>モード</th>
					<th>出力</th>
					<th>説明</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Baofeng UV5R</td>
					<td>VHF (144-148MHz)/UHF</td>
					<td>FM</td>
					<td>5W</td>
					<td>はじめての無線機。</td>
				</tr>
				<tr>
					<td>ICOM 7300</td>
					<td>HF/VHF (50-54MHz)</td>
					<td>SSB/CW/FT8</td>
					<td>100W</td>
					<td>自宅用の基地局。主にHFや50MHzバンドを使用します。</td>
				</tr>
				<tr>
					<td>ICOM 705</td>
					<td>HF/VHF/UHF</td>
					<td>SSB/CW/FT8/FM</td>
					<td>5W</td>
					<td>移動局。屋外で使用します。</td>
				</tr>
			</tbody>
		</table>

		<h3>アンテナ</h3>
		<table class="table table-striped">
			<thead>
				<tr>
					<th>名前</th>
					<th>種類</th>
					<th>周波数範囲</th>
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
		<p>電波でおあいしましょう、７３。</p>
	</div>
</template>