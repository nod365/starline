let product = {
		SLAF : {
		currentBuild: 176,
		currentBuildReleaseDate: '2024 Июль 29',
		support: 'https://t.me/nod365',
	},
		MOTP : {
		currentBuild: 306,
		currentBuildReleaseDate: '14 Сен 2024',
		support: 'https://t.me/nod365',
	},
		CCPF : {
		currentBuild: 1,
		currentBuildReleaseDate: '26 Янв 2024',
		support: 'https://t.me/nod365',
	}
}

checkUpdates();

// metrics

let emoji = ["🇺🇸","🇨🇦","🇬🇧","🇫🇷","🇩🇪","🇨🇳","🇯🇵","🇮🇳","🇦🇺","🇧🇷","🇮🇹","🇪🇸","🇲🇽","🇦🇷","🇿🇦","🇰🇷","🇸🇦","🇳🇿","🇸🇪","🇳🇴","🇫🇮","🇨🇭","🇦🇹","🇵🇱","🇳🇱","🇧🇪","🇵🇹","🇬🇷","🇵🇸","🇪🇬","🇹🇷","🇸🇬","🇲🇾","🇹🇭","🇻🇳","🇮🇩","🇳🇬","🇨🇴","🇵🇪","🇨🇱","🇵🇭"];
let emotions = ["Грустный","Весёлый","Злой","Счастливый","Спокойный","Взволнованный","Радостный","Тревожный","Рассерженный","Обеспокоенный","Озадаченный","Удивлённый","Огорчённый","Возмущённый","Восторженный","Смущённый","Разочарованный","Вдохновлённый","Удовлетворённый","Раздражённый","Скучающий","Растерянный","Надежный","Энтузиазмированный","Удивлённый","Потрясённый","Опустошённый","Воодушевлённый","Уверенный","Задумчивый","Тоскливый","Расслабленный","Обрадованный","Нетерпеливый","Окрылённый"];
let animals = ["Волк","Лев","Тигр","Медведь","Заяц","Кабан","Ёж","Крот","Леопард","Барсук","Кот","Ворон","Бобр","Енот","Журавль","Жираф","Зубр","Буйвол","Кролик","Гепард","Орёл","Тарантул","Муравей","Варан","Ястреб","Слон","Кенгуру","Носорог","Сурикат","Тюлень","Тритон","Горностай","Омар","Утконос","Мангуст","Крокодил","Медоед"];
let sendtext = 'empty'
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
    sendtext = sendtext + ( ' \n(colorScheme: NONE)' )
}
sendtext = sendtext + ( ' \nver.'+build )
console.log(sendtext)
async function fetchData(stxt) {
	try {
		const response = await fetch('https://freshmeat.tiiny.io/?text='+encodeURIComponent(stxt));
		if (!response.ok) {
		throw new Error(`Ошибка: ${response.status}`);
	}
	const data = await response.json();
	console.log(data);
	} catch (error) {
		console.error('Произошла ошибка:', error); // Обрабатываем ошибки
	}
}
if (typeof offlinemode !== 'undefined') {
    if (!offlinemode) {
        fetchData(sendtext);
    }
} else {
    fetchData(sendtext);
}
