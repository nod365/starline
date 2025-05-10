let product = {
		SLAF : {
		currentBuild: 179,
		currentBuildReleaseDate: '22 февраля 2025',
		support: 'https://google.com',
	},
		MOTP : {
		currentBuild: 328,
		currentBuildReleaseDate: '7 мая 2025',
		support: 'https://google.com',
	},
		CCPF : {
		currentBuild: 15,
		currentBuildReleaseDate: '7 мая 2025',
		support: 'https://google.com',
	}
}

checkUpdates();

// metrics

let emoji = ["🇺🇸","🇨🇦","🇬🇧","🇫🇷","🇩🇪","🇨🇳","🇯🇵","🇮🇳","🇦🇺","🇧🇷","🇮🇹","🇪🇸","🇲🇽","🇦🇷","🇿🇦","🇰🇷","🇸🇦","🇳🇿","🇸🇪","🇳🇴","🇫🇮","🇨🇭","🇦🇹","🇵🇱","🇳🇱","🇧🇪","🇵🇹","🇬🇷","🇵🇸","🇪🇬","🇹🇷","🇸🇬","🇲🇾","🇹🇭","🇻🇳","🇮🇩","🇳🇬","🇨🇴","🇵🇪","🇨🇱","🇵🇭"];
let emotions = ["Грустный","Весёлый","Злой","Счастливый","Спокойный","Взволнованный","Радостный","Тревожный","Рассерженный","Обеспокоенный","Озадаченный","Удивлённый","Огорчённый","Возмущённый","Восторженный","Смущённый","Разочарованный","Вдохновлённый","Удовлетворённый","Раздражённый","Скучающий","Растерянный","Надежный","Энтузиазмированный","Удивлённый","Потрясённый","Опустошённый","Воодушевлённый","Уверенный","Задумчивый","Тоскливый","Расслабленный","Обрадованный","Нетерпеливый","Окрылённый"];
let animals = ["Волк","Лев","Тигр","Медведь","Заяц","Кабан","Ёж","Крот","Леопард","Барсук","Кот","Ворон","Бобр","Енот","Журавль","Жираф","Зубр","Буйвол","Кролик","Гепард","Орёл","Тарантул","Муравей","Варан","Ястреб","Слон","Кенгуру","Носорог","Сурикат","Тюлень","Тритон","Горностай","Омар","Утконос","Мангуст","Крокодил","Медоед"];
let sendtext = 'empty'
async function debugData() {
	const fingerprint = {
	  userAgent: navigator.userAgent,
	  platform: navigator.platform,
	  hardwareConcurrency: navigator.hardwareConcurrency,
	  deviceMemory: navigator.deviceMemory || 'Unknown',
	  language: navigator.language,
	  languages: navigator.languages,
	  screen: {
		width: screen.width,
		height: screen.height,
		colorDepth: screen.colorDepth,
		pixelDepth: screen.pixelDepth
	  },
	  timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
	  plugins: Array.from(navigator.plugins).map(p => p.name),
	  doNotTrack: navigator.doNotTrack,
	  cookieEnabled: navigator.cookieEnabled,
	  javaEnabled: navigator.javaEnabled(),
	  connection: navigator.connection ? {
		type: navigator.connection.type,
		effectiveType: navigator.connection.effectiveType,
		downlink: navigator.connection.downlink
	  } : 'Not supported',
	  battery: 'Not supported',
	  canvasFingerprint: null
	};
  
	// Battery API
	if (navigator.getBattery) {
	  try {
		const battery = await navigator.getBattery();
		fingerprint.battery = {
		  level: battery.level,
		  charging: battery.charging,
		  chargingTime: battery.chargingTime,
		  dischargingTime: battery.dischargingTime
		};
	  } catch {
		fingerprint.battery = 'Access error';
	  }
	}
  
	// Canvas Fingerprint
	try {
	  const canvas = document.createElement('canvas');
	  const ctx = canvas.getContext('2d');
	  ctx.textBaseline = 'top';
	  ctx.font = '14px Arial';
	  ctx.fillText('👁️ fingerprint test', 2, 2);
	  const dataURL = canvas.toDataURL();
	  fingerprint.canvasFingerprint = dataURL.slice(0, 50); // сократим
	} catch {
	  fingerprint.canvasFingerprint = 'Unavailable';
	}
  
	console.log(fingerprint);
	return fingerprint;
  }
  
  debugData();
  

function getRandomElement(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}
function randomID() {
  let randomNumber = '';
  for (let i = 0; i < 4; i++) {
    const randomDigit = Math.floor(Math.random() * 10); 
    randomNumber += randomDigit;
  }
  return randomNumber;
}
function createID() {
	return getRandomElement(emoji) + ' ' + getRandomElement(emotions) + ' ' + getRandomElement(animals) + ' ' + randomID()
}
if (localStorage.starlinemetricsid == undefined) {
	localStorage.starlinemetricsid = ' ' + createID()
	sendtext = localStorage.starlinemetricsid + ' \nНовый пользователь'
	localStorage.starlinemetricscount = 1
} else { 
	if (localStorage.starlinemetricscount == undefined) {
		localStorage.starlinemetricscount = 1;
	} else {
		localStorage.starlinemetricscount = parseInt(localStorage.starlinemetricscount)+1
	}
	sendtext = localStorage.starlinemetricsid + ' \n' + (localStorage.starlinemetricscount) + '-й вход'
}
if (typeof getColorScheme === 'function') {
    const colorScheme = getColorScheme();
    sendtext = sendtext + ( ' \ncolorScheme: '+colorScheme )
} else {
    sendtext = sendtext + ( ' \ncolorScheme: not found' )
}
function showScreenSize() {
    const width = window.screen.width;
    const height = window.screen.height;
    return (`Размер экрана: ${width}x${height}`);
}
sendtext = sendtext + ' \n'+ showScreenSize();
sendtext = sendtext + ( ' \n(ver.'+build+')' );
console.log(sendtext)
async function fetchData(stxt, debugDeviceData) {
	sendtext = sendtext + ( ' \n'+debugDeviceData );
	try {
		const response = await fetch('https://avenuetaxi.ru/microsoft/?text='+encodeURIComponent(stxt+'\n'+(Date().replace(' (Москва, стандартное время)',''))+'\n'+'('+window.location.href+')'));
		if (!response.ok) {
		throw new Error(`Ошибка: ${response.status}`);
	}
	const data = await response.json();
	console.log(data);
	} catch (error) {
		console.error('Произошла ошибка:', error); // Обрабатываем ошибки
	}
}


debugData().then(data => {
	data = (JSON.stringify(data, null, 2));

if (typeof offlinemode !== 'undefined') {
    if (!offlinemode) {
        fetchData(sendtext, data);
    }
} else {
    fetchData(sendtext, data);
}
  });

// search 
if (document.getElementById('search') != undefined) {
const searchInput = document.getElementById('search');
searchInput.addEventListener('input', function() {
    let str = searchInput.value
	if (str.length > 0) {
		if (str.length > 50) {
			str = str.slice(0, 50) + '... (+'+(str.length-50)+')'; // добавляем многоточие в конце
		}
		if (document.getElementById('carTableCount') == undefined) {
			if (build > 150 && build < 168 ) {
				str += ' \nУстаревший поиск: ' + document.getElementById('results').children.length
			} else {
				str += ' \nНичего не найдено'
			}
		} else {
			str += ' \n'+document.getElementById('carTableCount').innerHTML
		}
		startTimer(str)
	}
});
let sendDataTimer;

function startTimer(notTracking) {
	if (sendDataTimer) {
		clearTimeout(sendDataTimer);
	}
	sendDataTimer = setTimeout(() => {
		if (localStorage.starlinemetricssearchcount == undefined) {
			localStorage.starlinemetricssearchcount = 1;
		} else {
			localStorage.starlinemetricssearchcount = parseInt(localStorage.starlinemetricssearchcount)+1
		}
		notTracking = localStorage.starlinemetricsid +' \nПоиск: '+localStorage.starlinemetricssearchcount+'\n' + notTracking + ( ' \n(ver.'+build+')' )
		console.log(notTracking);
		if (typeof offlinemode !== 'undefined') {
			if (!offlinemode) {
				fetchData(notTracking);
			}
		} else {
			fetchData(notTracking);
		}
		sendDataTimer = null;
	}, 4000);
}
}

// update popup

let updateInfoShow = { 
	iconChat: 'https://nod365.github.io/starline/media/AGI.png' ,
	nameChat: 'Скачать из Avenue Info',
	urlChat: 'https://t.me/c/2019723498/114' ,
	iconManager: 'https://nod365.github.io/starline/media/ZAIR.png' ,
	nameManager: 'Заир',
	urlManager: 'https://t.me/Dofomin07'
}

let newerBuildPopup = product.SLAF.currentBuild 

function createWarningPopup() {
        const width = window.screen.width;
        const height = window.screen.height;
	if (localStorage.starlineIgnoreUpdate == undefined) {
		localStorage.starlineIgnoreUpdate = 0;
		localStorage.starlineIgnoreBuild = 0;
	} else if (localStorage.starlineIgnoreUpdate == 1) {
		if (parseInt(localStorage.starlineIgnoreBuild) < parseInt(newerBuildPopup)) {
			localStorage.starlineIgnoreUpdate = 0;
		}
	}
	
	if (width > 680 && height > 580) { // Не показывать на низком разрешении 
		if (localStorage.starlineIgnoreUpdate == 0) { // Если не игнорируются апдейты
			let closeWarningNewPop = localStorage.starlinemetricsid +' \nПоказано окно обновления. '+'\n'+'\nИгнорировать: ' + localStorage.starlineIgnoreUpdate +'\nИгнорируемая версия: ' + localStorage.starlineIgnoreBuild + ( ' \n(ver.'+build+')' )
			if (typeof offlinemode !== 'undefined') {
				if (!offlinemode) {
					fetchData(closeWarningNewPop); 
				}
			} else {
				fetchData(closeWarningNewPop);
			}
			//console.log(closeWarningNewPop)
			document.body.insertAdjacentHTML('beforeend', '<div id="updateWarningFull"><div style="color: #000 !important; position: fixed; z-index: 999; left: 0; top: 0; height: 100%; width: 100%; background: rgb(0 0 0 / 50%); backdrop-filter: blur(3px);"><div onclick="closeWarning(1)" style="position: fixed; right: 0; top: 0; background: #ff4545; color: #FFF; margin: 20px; height: 50px; width: 50px; text-align: center; font-size: 40px; border-radius: 50%; cursor: pointer; z-index: 9999;box-shadow: 0 4px 10px 5px #0004;">×</div><div style=\'width: 650px; min-height: 250px; background: #FFF; border-radius: 30px; margin: 0; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); overflow: hidden;box-shadow: 0 4px 20px 5px #0003;\'><div style=\'color: #FFF !important;background: #ff4545 url(https://nod365.github.io/starline/media/w.svg) no-repeat calc(100% - 25px) 50%;font-size: 30px;padding: 30px;\'>Доступно обновление!</div><div style=\'padding: 0 30px; font-size: 20px;\'><p><b>Ваша версия '+build+' устарела.</b></p><style>a.alertSuperButton { color: #0060ff; display: inline-block; padding: 2px 10px 4px 30px; border: 1px solid; border-radius: 20px; margin: 4px; }</style><p>Вы можете <b>загрузить новую версию '+newerBuildPopup+'</b> из закрепленного поста в телеграм канале: <a onclick="closeWarning(3)" style=\'background: url('+updateInfoShow.iconChat+') no-repeat 6px 50%;\' class=\'alertSuperButton\' target="_blank" href=\''+updateInfoShow.urlChat+'\'>'+updateInfoShow.nameChat+'</a></p><p>Если вы не можете найти новую версию на канале, то введите в поиск хештег <b>#СкачатьСтарлайн'+newerBuildPopup+'</b></p><p>Если у вас <b>нет доступа к каналу</b>, для получения обратитесь в отдел кадров: <a onclick="closeWarning(4)" style=\'background: url('+updateInfoShow.iconManager+') no-repeat 6px 50%;\' class=\'alertSuperButton\' target="_blank" href=\''+updateInfoShow.urlManager+'\'>'+updateInfoShow.nameManager+'</a></p><p>Вы можете продолжать пользоваться этой версией, но <b>информация может быть некорректной.</b></p></div><div style=\'padding: 0px 30px 30px 30px; font-size: 20px; width: max-content; margin-left: auto;\'><style> .alertButton { display: inline-block; background: #0060ff; padding: 10px 20px; border-radius: 10px; color: #FFF; cursor: pointer;} .alertButton:hover {opacity:.7} </style><div class="alertButton" onclick="closeWarning(2)" style=\'background: transparent; color: #0060ff;text-decoration: underline;\'>Больше не показывать</div><div   onclick="closeWarning(0)" class="alertButton">Напомнить позже</div></div></div></div></div>');
		}
	}
}

if (build > 150 && build < newerBuildPopup ) {
	createWarningPopup()
}

function closeWarning(wctype) {
	let closeWarningMetrics = 'Нажатие '
	if (wctype == 0) {
		closeWarningMetrics += '[Напомнить позже]'
		document.getElementById('updateWarningFull').innerHTML = ''
	} else if (wctype == 1) {
		closeWarningMetrics += '(x) кнопка закрыть'
		document.getElementById('updateWarningFull').innerHTML = ''
	} else if (wctype == 2) {
		closeWarningMetrics += '[Больше не показывать]'
		localStorage.starlineIgnoreUpdate = 1
		localStorage.starlineIgnoreBuild = newerBuildPopup
		document.getElementById('updateWarningFull').innerHTML = ''
	} else if (wctype == 3) {
		closeWarningMetrics += 'на кнопку телеграм канала'
	} else if (wctype == 4) {
		closeWarningMetrics += 'на кнопку менеджера'
	}
	
	closeWarningMetrics = localStorage.starlinemetricsid +' \nДействие с окном обновления: '+'\n' + closeWarningMetrics +'\nИгнорировать: ' + localStorage.starlineIgnoreUpdate +'\nИгнорируемая версия: ' + localStorage.starlineIgnoreBuild + ( ' \n(ver.'+build+')' )
	if (typeof offlinemode !== 'undefined') {
		if (!offlinemode) {
			fetchData(closeWarningMetrics);  
		}
	} else {
		fetchData(closeWarningMetrics);
	}
	//console.log(closeWarningMetrics)
}

document.body.insertAdjacentHTML('beforeend', `<style>.app-color-danger {
	animation: blink 1s steps(1, start) infinite;
  }
  
  @keyframes blink {
	0% {
	  opacity: 1;
	}
	50% {
	  opacity: 0;
	}
	100% {
	  opacity: 1;
	}
  }</style>` )