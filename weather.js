let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};

////////// 課題3-2 ここからプログラムを書こう
/*console.log("緯度:"+data.coord.lon);
console.log("経度:"+data.coord.lat);
console.log("天気:"+data.weather[0].description);
console.log("最低気温:"+data.main.temp_min);
console.log("最高気温:"+data.main.temp_max);
console.log("湿度:"+data.main.humidity);
console.log("風速:"+data.wind.speed);
console.log("風向:"+data.wind.deg);
console.log("都市名:"+data.name);

let div=document.querySelector('div#result'); 
let li = document.createElement('li');
  li.textContent = "緯度:"+data.coord.lon;
  div.insertAdjacentElement('beforeend', li);
  let li1 = document.createElement('li');
  li1.textContent = "経度:"+data.coord.lat;
  div.insertAdjacentElement('beforeend', li1);
  let li2 = document.createElement('li');
  li2.textContent = "天気:"+data.weather[0].description;
  div.insertAdjacentElement('beforeend', li2);
  let li3 = document.createElement('li');
  li3.textContent = "最低気温:"+data.main.temp_min;
  div.insertAdjacentElement('beforeend', li3);
  let li4 = document.createElement('li');
  li4.textContent = "最高気温:"+data.main.temp_max;
  div.insertAdjacentElement('beforeend', li4);
  let li5 = document.createElement('li');
  li5.textContent = "湿度:"+data.main.humidity;
  div.insertAdjacentElement('beforeend', li5);
  let li6 = document.createElement('li');
  li6.textContent = "風速:"+data.wind.speed;
  div.insertAdjacentElement('beforeend', li6);
  let li7 = document.createElement('li');
  li7.textContent = "風向:"+data.wind.deg;
  div.insertAdjacentElement('beforeend', li7);
  let li8 = document.createElement('li');
  li8.textContent = "都市名:"+data.name;
  div.insertAdjacentElement('beforeend', li8);
*/




let b2 = document.querySelector('#sendRequest');
b2.addEventListener('click', sendRequest);
// 通信を開始する処理
function sendRequest() {
	// URL を設定
  let cs = document.querySelectorAll('input[name="wether"]');
  for (let c of cs) {
    if(c.checked){
      let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/'+c.id+'.json';
      axios.get(url)
		.then(showResult)
		.catch(showError)
		.then(finish);
    }
  }
}

// 通信が成功した時の処理
function showResult(resp) {
	// サーバから送られてきたデータを出力
	let data = resp.data;

	// data が文字列型なら，オブジェクトに変換する
	if (typeof data === 'string') {
		data = JSON.parse(data);
	}

	// data をコンソールに出力
	console.log(data);

	// data.x を出力
	console.log(data.coord.lon);

  let div=document.querySelector('div#result'); 
let li = document.createElement('li');
  li.textContent = "緯度:"+data.coord.lon+'';
  div.insertAdjacentElement('beforeend', li);
  let li1 = document.createElement('li');
  li1.textContent = "経度:"+data.coord.lat;
  div.insertAdjacentElement('beforeend', li1);
  let li2 = document.createElement('li');
  li2.textContent = "天気:"+data.weather[0].description;
  div.insertAdjacentElement('beforeend', li2);
  let li3 = document.createElement('li');
  li3.textContent = "最低気温:"+data.main.temp_min;
  div.insertAdjacentElement('beforeend', li3);
  let li4 = document.createElement('li');
  li4.textContent = "最高気温:"+data.main.temp_max;
  div.insertAdjacentElement('beforeend', li4);
  let li5 = document.createElement('li');
  li5.textContent = "湿度:"+data.main.humidity;
  div.insertAdjacentElement('beforeend', li5);
  let li6 = document.createElement('li');
  li6.textContent = "風速:"+data.wind.speed;
  div.insertAdjacentElement('beforeend', li6);
  let li7 = document.createElement('li');
  li7.textContent = "風向:"+data.wind.deg;
  div.insertAdjacentElement('beforeend', li7);
  let li8 = document.createElement('li');
  li8.textContent = "都市名:"+data.name;
  div.insertAdjacentElement('beforeend', li8);

}

// 通信エラーが発生した時の処理
function showError(err) {
	console.log(err);
}	

// 通信の最後にいつも実行する処理
function finish() {
	console.log('Ajax 通信が終わりました');
}
