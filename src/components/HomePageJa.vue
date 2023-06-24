<template>
	<div lang="ja">
		<p>こちらはBD4VQKです。私のホームページへようこそ。</p>

		<h2>QSL住所</h2>
		<hr>
		<div class="card my-3">
			<div class="card-body">
				<div class="card-text">
					<p><strong>国際郵便ですので、英語版の住所をご利用ください。</strong>日本語版のは参考用です。</p>
					<address class="lead" style="white-space: pre-line;">
						中華人民共和国
						江蘇省蘇州市
						蘇州工業園区星湖街３２８号
						蘇州創意産業園２５ビル
						〒２１５１２３</address>
				</div>
			</div>
		</div>
		<p><strong>受信者はコールサインではなく、私の名前を書いてください。</strong>このメールボックスは他の人と共用するので、名前がない場合は私のところに届けないかもしれません。</p>
		<p>QRZ・LoTWで確認するのが最優先です。詳しい情報が必要する場合、メールで連絡してください。</p>
		<p>ビューローに送ったカードは<strong>届かない</strong>かもしれませんので、上記の住所にQSLカードを送ってください。</p>
		<p>QRZのログにはLoTWより最も完全な情報が含まれており、両者が矛盾する場合は、QRZの情報が優先されます。</p>

		<h2>免許証</h2>
		<hr>

		<p>現在の免許証レベル：Ｂ級。</p>
		<p>最大出力：100W（HF）、25W（VHF/UHF）</p>
		<p>免許証の操作範囲と最大出力の詳細については、<router-link to="/appendix">付録</router-link>をご参照してください。</p>

		<h2>無線機とアンテナ</h2>
		<hr>

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
					<td> VHF (144-148MHz)/UHF </td>
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
					<td>移動局。屋外設置や衛星通信に使用されます。HFで通信するとき、<code>/QRP</code>接尾があります。</td>
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
					<th>説明</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>RH771S</td>
					<td>GP</td>
					<td>VHF (144-148MHz)/UHF</td>
					<td>UV5R用アンテナ。</td>
				</tr>
				<tr>
					<td>U7V4</td>
					<td>YAGI</td>
					<td>VHF (144-148MHz)/UHF</td>
					<td>主に衛星通信に使用されるUHF 7素子、VHF 4素子の八木アンテナです。</td>
				</tr>
				<tr>
					<td>DKGP10</td>
					<td>EFHW/GP</td>
					<td>HF/VHF (50MHz)</td>
					<td>エンドフェッドアンテナです。家に使う場合はベランダの窓際で水平に立てます、屋外に使う場合は三脚を使用して垂直に立てて垂直アンテナになります。主にHFで使用されます。</td>
				</tr>
			</tbody>
		</table>

		<h2>主に使用する周波数とモード</h2>
		<hr>

		<h3>HF</h3>
		<p>主に以下のバンドに操作します：</p>
		<ul>
			<li>40m (7MHz-7.2MHz)</li>
			<li>30m (10.1MHz-10.15MHz)</li>
			<li>20m (14MHz-14.35MHz)</li>
			<li>17m (18.068-18.168MHz)</li>
			<li>15m (21MHz-21.45MHz)</li>
			<li>12m (24.89MHz-24.99MHz)</li>
			<li>10m (28MHz-29.7MHz)</li>
		</ul>
		<p>通常、FT8の周波数で私を見ることができますが、40m・20m・15m・10mのSSBやCWモードの周波数に見つけることもできます。</p>
		<p>個人的にはCWモードの方がより好きです。私を見かけたらご連絡してください。</p>
		<p>SSB・CW・FT8で私のコールサインに<code>/QRP</code>が付いている場合は5Wの低出力無線を使用しています。QRP交信は環境と機器に対する要件が高いですから、お前のQSOは何よりの励みになります。</p>
		<p>
			<strong>注：</strong>ログを記録する場合、ログ内の私のコールサインは、私が報告したコールサインとまったく同じである必要があります（つまり、<strong>サフィックスまたはプレフィックスを削除しないでください</strong>）。そうしない場合、ログは互いに確認できない可能性があります。
		</p>

		<h3>VHF (50MHz-54MHz)</h3>
		<p>6m帯域は、特殊な伝播特性により、通常50.313MHzで最も効率的で安全なFT8モードのみを使用します。</p>
		<p>規制により、VHFの最大電力制限は25Wです。信号強度が高くないと思われるかもしれませんが、これは正常です。</p>
		<p>同様に、<code>/QRP</code>が付いた私のコールサインに見える可能性もあります。5Wの電力を使用している意味です。</p>

		<h3>VHF (144-148MHz)/UHF</h3>
		<p>衛星通信は主にこのバンドで行われます。規定により146MHz～148MHzでの送信も許可されていますが、それはアマチュア衛星周波数ではありませんから、見かけることは少ないかもしれません。</p>
		<p>現在、アンテナの仰角と方位角とドップラーを調整するための補助装置が全部ありません、すべての操作は手動です。普段は屋外の地上で交信します。持ち運べる機器が少ないので、主にFM衛星通信がします。</p>
		<p>UHF帯では、ローカル中継での交信に参加することもあります。これらのログはQRZに記録されます。ログを確認する必要がある場合は、ログを記入するときに「Propagation」部分を開いて、「Terrestrial or
			atmospheric repeater or transponder」を選択してください。</p>
		<hr>
		<p>電波でおあいしましょう、７３。</p>
	</div>
</template>