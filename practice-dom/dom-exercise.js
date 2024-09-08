//// 注意: 以下は編集しないこと!
let data = [
	{name:'札幌', lat:43.06417, lng:141.34694},
	{name:'仙台', lat:38.26889, lng:140.87194},
	{name:'新宿', lat:35.68944, lng:139.69167},
	{name:'名古屋', lat:35.18028, lng:136.90667},
	{name:'大阪', lat:34.68639, lng:135.52},
	{name:'広島', lat:34.39639, lng:132.45944},
	{name:'高知', lat:33.55972, lng:133.53111},
	{name:'福岡', lat:33.60639, lng:130.41806},
	{name:'鹿児島', lat:31.56028, lng:130.55806},
	{name:'沖縄', lat:26.2125, lng:127.68111}
];
//// 注意: 以上は編集しないこと!

// 練習4-2 メッセージ追加プログラム
const ex42 = document.getElementById('ex42');
const p = document.createElement('p');
p.textContent = '練習4-2の目標';
p.style.textEmphasis = 'sesame green';
ex42.insertAdjacentElement('afterend', p);

// 練習4-3 写真表作成プログラム
const photoTable = document.getElementById('phototable');
const imageFiles = ['taro.png', 'jiro.png', 'hanako.png'];

for (const file of imageFiles) {
    const img = document.createElement('img');
    img.src = file;
    const p = document.createElement('p');
    p.appendChild(img);
    photoTable.appendChild(p);
}

// 練習4-4 箇条書き削除プログラム
const liElements = document.querySelectorAll('ul#location > li');
for(const li of liElements){
	li.remove();
}

// 練習4-5 箇条書き追加プログラム
const list = document.getElementById('location');  // 修正: documents → document
for(const city of data){
	const li = document.createElement('li');
	// 修正: テンプレートリテラルの使用方法を修正
	li.textContent = `${city.name} ... 緯度: ${city.lat}, 経度: ${city.lng}`;
	list.appendChild(li);
}

