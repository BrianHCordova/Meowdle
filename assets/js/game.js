const gameBody = document.querySelector('#game-body');
const userInput = document.querySelector('#input');
const submitBtn = document.querySelector('#input-submit-btn');
const guessContainerEl = document.querySelector('.guess-container');
const hintBtn1 = document.querySelector('#hint-btn-1');
const hintBtn2 = document.querySelector('#hint-btn-2');
const hintBtn3 = document.querySelector('#hint-btn-3');

let catOfTheDay;

const sequence1 = [
	59, 51, 35, 53, 37, 44, 34, 36, 17, 11, 33, 26, 7, 49, 1, 12, 2, 10, 22, 32,
	66, 16, 0, 61, 15, 5, 30, 19, 18, 43, 48, 29, 50, 60, 65, 63, 21, 45, 57, 3,
	38, 27, 46, 55, 54, 9, 62, 52, 23, 24, 8, 6, 40, 25, 13, 31, 56, 39, 28, 41,
	14, 4, 20, 58, 42, 47, 64,
];

catList = [
	'abyssinian',
	'aegean',
	'american bobtail',
	'american curl',
	'american shorthair',
	'american wirehair',
	'arabian mau',
	'australian mist',
	'balinese',
	'bambino',
	'bengal',
	'birman',
	'bombay',
	'british longhair',
	'british shorthair',
	'burmese',
	'burmilla',
	'california spangled',
	'chantilly-tiffany',
	'chartreux',
	'chausie',
	'cheetoh',
	'colorpoint shorthair',
	'cornish rex',
	'cymric',
	'cyprus',
	'devon rex',
	'donskoy',
	'dragon li',
	'egyptian mau',
	'european burmese',
	'exotic shorthair',
	'havana brown',
	'himalayan',
	'japanese bobtail',
	'javanese',
	'khao manee',
	'korat',
	'kurilian',
	'laperm',
	'maine coon',
	'malayan',
	'manx',
	'munchkin',
	'nebelung',
	'norwegian forest cat',
	'ocicat',
	'oriental',
	'persian',
	'pixie-bob',
	'ragamuffin',
	'ragdoll',
	'russian blue',
	'savannah',
	'scottish fold',
	'selkirk rex',
	'siamese',
	'siberian',
	'singapura',
	'snowshoe',
	'somali',
	'sphynx',
	'tonkinese',
	'toyger',
	'turkish angora',
	'turkish van',
	'york chocolate',
];

catImagesList = [
	{
		name: 'abyssinian',
		image: 'https://cdn2.thecatapi.com/images/unPP08xOZ.jpg',
	},
	{
		name: 'aegean',
		image: 'https://www.europetnet.org/images/catbreeds/241.jpg',
	},
	{
		name: 'american bobtail',
		image: 'https://cdn2.thecatapi.com/images/d55E_KMKZ.jpg',
	},
	{
		name: 'american curl',
		image: 'https://cdn2.thecatapi.com/images/vJB8rwfdX.jpg',
	},
	{
		name: 'american shorthair',
		image: 'https://cdn2.thecatapi.com/images/MuEGe1-Sz.jpg',
	},
	{
		name: 'american wirehair',
		image: 'https://cdn2.thecatapi.com/images/Q6TDnfM_O.jpg',
	},
	{
		name: 'arabian mau',
		image: 'https://cdn2.thecatapi.com/images/m1TeHn2dH.jpg',
	},
	{
		name: 'australian mist',
		image: 'https://cdn2.thecatapi.com/images/_6x-3TiCA.jpg',
	},
	{
		name: 'balinese',
		image: 'https://cdn2.thecatapi.com/images/obRjvWv-e.jpg',
	},
	{ name: 'bambino', image: 'https://cdn2.thecatapi.com/images/Oaoo1ky3A.jpg' },
	{ name: 'bengal', image: 'https://cdn2.thecatapi.com/images/Rl39SPjDO.png' },
	{ name: 'birman', image: 'https://cdn2.thecatapi.com/images/qg0_IodJp.png' },
	{ name: 'bombay', image: 'https://cdn2.thecatapi.com/images/BkksyH95Z.jpg' },
	{
		name: 'british longhair',
		image: 'https://cdn2.thecatapi.com/images/7isAO4Cav.jpg',
	},
	{
		name: 'british shorthair',
		image: 'https://cdn2.thecatapi.com/images/_7U4xGLO_.jpg',
	},
	{ name: 'burmese', image: 'https://cdn2.thecatapi.com/images/4lXnnfxac.jpg' },
	{
		name: 'burmilla',
		image: 'https://cdn2.thecatapi.com/images/r530zDuJU.jpg',
	},
	{
		name: 'california spangled',
		image: 'https://cdn2.thecatapi.com/images/B1ERTmgph.jpg',
	},
	{
		name: 'chantilly-tiffany',
		image: 'https://cdn2.thecatapi.com/images/TR-5nAd_S.jpg',
	},
	{
		name: 'chartreux',
		image: 'https://cdn2.thecatapi.com/images/ZSV_8HqoS.jpg',
	},
	{ name: 'chausie', image: 'https://cdn2.thecatapi.com/images/r0s90j0I8.jpg' },
	{ name: 'cheetoh', image: 'https://cdn2.thecatapi.com/images/yPmEpKmnR.jpg' },
	{
		name: 'colorpoint shorthair',
		image: 'https://cdn2.thecatapi.com/images/yUhSG7Vv7.jpg',
	},
	{
		name: 'cornish rex',
		image: 'https://cdn2.thecatapi.com/images/o81wWm6-Z.jpg',
	},
	{ name: 'cymric', image: 'https://cdn2.thecatapi.com/images/WXcD6qZEn.jpg' },
	{ name: 'cyprus', image: 'https://cdn2.thecatapi.com/images/tJbzb7FKo.jpg' },
	{
		name: 'devon rex',
		image: 'https://cdn2.thecatapi.com/images/yFwzO96ds.jpg',
	},
	{
		name: 'donskoy',
		image:
			'https://www.tica.org/images/TopCats/2023/resized/BOB/Donskoy%201%20Kitten%20Ketrin%20Betcher.jpg',
	},
	{
		name: 'dragon li',
		image: 'https://cdn2.thecatapi.com/images/POPfuPq8t.jpg',
	},
	{
		name: 'egyptian mau',
		image: 'https://cdn2.thecatapi.com/images/EzYYrmFp7.jpg',
	},
	{
		name: 'european burmese',
		image: 'https://cdn2.thecatapi.com/images/d8sbdRtLJ.jpg',
	},
	{
		name: 'exotic shorthair',
		image: 'https://cdn2.thecatapi.com/images/cw18Op1Ok.jpg',
	},
	{
		name: 'havana brown',
		image: 'https://cdn2.thecatapi.com/images/wWZPyq5Jm.jpg',
	},
	{
		name: 'himalayan',
		image: 'https://cdn2.thecatapi.com/images/lZOJKmkxY.jpg',
	},
	{
		name: 'japanese bobtail',
		image: 'https://cdn2.thecatapi.com/images/RfdGhgEf3.jpg',
	},
	{
		name: 'javanese',
		image: 'https://cdn2.thecatapi.com/images/cua3trGPU.jpg',
	},
	{
		name: 'khao manee',
		image: 'https://cdn2.thecatapi.com/images/iyFN2mF8l.jpg',
	},
	{ name: 'korat', image: 'https://cdn2.thecatapi.com/images/DbwiefiaY.png' },
	{
		name: 'kurilian',
		image:
			'https://upload.wikimedia.org/wikipedia/commons/8/82/Kurilian_bobtail.JPG',
	},
	{ name: 'laperm', image: 'https://cdn2.thecatapi.com/images/w6CQYXYjy.jpg' },
	{
		name: 'maine coon',
		image: 'https://cdn2.thecatapi.com/images/vXb2jdNoo.jpg',
	},
	{
		name: 'malayan',
		image:
			'https://upload.wikimedia.org/wikipedia/commons/f/f9/IMGP1134_%2851750850378%29.jpg',
	},
	{ name: 'manx', image: 'https://cdn2.thecatapi.com/images/fhYh2PDcC.jpg' },
	{
		name: 'munchkin',
		image: 'https://cdn2.thecatapi.com/images/vDFI6jI2O.jpg',
	},
	{
		name: 'nebelung',
		image: 'https://cdn2.thecatapi.com/images/KpHqQPUPW.jpg',
	},
	{
		name: 'norwegian forest cat',
		image: 'https://cdn2.thecatapi.com/images/gXyHm7ozO.jpg',
	},
	{ name: 'ocicat', image: 'https://cdn2.thecatapi.com/images/NZ_C9Edot.jpg' },
	{
		name: 'oriental',
		image: 'https://cdn2.thecatapi.com/images/CQGI7O47l.jpg',
	},
	{ name: 'persian', image: 'https://cdn2.thecatapi.com/images/d_RzH-Zft.jpg' },
	{
		name: 'pixie-bob',
		image: 'https://cdn2.thecatapi.com/images/b4paC3RGM.jpg',
	},
	{
		name: 'ragamuffin',
		image: 'https://cdn2.thecatapi.com/images/--YZl1YWO.jpg',
	},
	{ name: 'ragdoll', image: 'https://cdn2.thecatapi.com/images/zgVRo2pWV.jpg' },
	{
		name: 'russian blue',
		image: 'https://cdn2.thecatapi.com/images/DdmsQrCAv.jpg',
	},
	{
		name: 'savannah',
		image: 'https://cdn2.thecatapi.com/images/A54VUs7Q6.jpg',
	},
	{
		name: 'scottish fold',
		image: 'https://cdn2.thecatapi.com/images/tOGSsMx5J.jpg',
	},
	{
		name: 'selkirk rex',
		image: 'https://cdn2.thecatapi.com/images/enV_ZqSpp.jpg',
	},
	{ name: 'siamese', image: 'https://cdn2.thecatapi.com/images/Ttk_tdV4g.jpg' },
	{
		name: 'siberian',
		image: 'https://cdn2.thecatapi.com/images/--ovPy5Lb.jpg',
	},
	{
		name: 'singapura',
		image: 'https://cdn2.thecatapi.com/images/VGzO6r82_.jpg',
	},
	{
		name: 'snowshoe',
		image: 'https://cdn2.thecatapi.com/images/pBRl_KzA5.jpg',
	},
	{ name: 'somali', image: 'https://cdn2.thecatapi.com/images/BjTEe8vY2.jpg' },
	{ name: 'sphynx', image: 'https://cdn2.thecatapi.com/images/bRLzjs5nf.jpg' },
	{
		name: 'tonkinese',
		image: 'https://cdn2.thecatapi.com/images/e9GFNGkwq.jpg',
	},
	{ name: 'toyger', image: 'https://cdn2.thecatapi.com/images/2CL5AqIfV.png' },
	{
		name: 'turkish angora',
		image: 'https://cdn2.thecatapi.com/images/7CGV6WVXq.jpg',
	},
	{
		name: 'turkish van',
		image:
			'https://i.pinimg.com/736x/76/f1/7e/76f17e737e4d60fd9feade8e7887b28f.jpg',
	},
	{
		name: 'york chocolate',
		image:
			'https://www.catbreedslist.com/uploads/cat-pictures/york-chocolate-2.jpg?ezimgfmt=ng%3Awebp%2Fngcb1%2Frs%3Adevice%2Frscb1-2',
	},
];

let catsObject;

// console.log(sequence1[66]);
// const sequence2 = [3, 0, 27, 6, 61, 48, 43, 14, 47, 42, 11, 24, 46, 28, 26, 23, 15, 51, 2, 33, 30, 52, 17, 66, 53, 12, 16, 21, 25, 10, 13, 36, 54, 58, 8, 60, 64, 4, 44, 57, 1, 41, 49, 5, 50, 59, 18, 39, 32, 37, 65, 9, 7, 29, 38, 45, 56, 19, 20, 63, 55, 22, 62, 31, 35, 34, 40]
//const sequence3 = [52, 53, 60, 15, 64, 11, 1, 14, 32, 43, 21, 61, 47, 50, 4, 40, 20, 54, 29, 66, 39, 36, 0, 16, 37, 3, 10, 13, 51, 24, 63, 62, 9, 18, 30, 56, 19, 5, 26, 31, 34, 57, 2, 6, 55, 27, 59, 35, 25, 33, 46, 12, 44, 28, 22, 42, 17, 8, 65, 23, 45, 49, 38, 7, 48, 58, 41]

// function shuffle(array) {
// 	let currentIndex = array.length;
// 	let randomIndex;

// 	while (currentIndex > 0) {
// 		randomIndex = Math.floor(Math.random() * currentIndex);
// 		currentIndex--;

// 		[array[currentIndex], array[randomIndex]] = [
// 			array[randomIndex],
// 			array[currentIndex],
// 		];
// 	}
// 	return array;
// }

function fetchCatsFromLocal() {
	return JSON.parse(localStorage.getItem('catBreeds'));
}

function getTodaysCat(index) {
	let randomNumber = sequence1[index];
	catOfTheDay = catsObject[randomNumber];
	// console.log(catOfTheDay);
}

function fetchBreeds() {
	let catsArray = [];
	// const randomCat = sequence1[index];

	// Fetches API
	fetch(`https://api.thecatapi.com/v1/breeds`)
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			// // console.log(data[randomCat]);
			// const catBreed = data[randomCat];

			// catOfTheDay = {
			// 	id: catBreed.id,
			// 	name: catBreed.name,
			// 	shortTail: catBreed.suppressed_tail,
			// 	shortLegs: catBreed.short_legs,
			// 	weight: catBreed.weight.imperial,
			// 	lifespan: catBreed.life_span,
			// 	hairless: catBreed.hairless,
			// 	altName: catBreed.alt_names,
			// };

			for (let i = 0; i < data.length; i++) {
				cat = {
					id: data[i].id,
					name: data[i].name,
					shortTail: data[i].suppressed_tail,
					shortLegs: data[i].short_legs,
					weight: data[i].weight.imperial,
					lifespan: data[i].life_span,
					hairless: data[i].hairless,
					altName: data[i].alt_names,
					number: i,
				};

				catsArray.push(cat);
			}
			localStorage.setItem('catBreeds', JSON.stringify(catsArray));
			catsObject = fetchCatsFromLocal();
		});
}

function addDays(date, period) {
	//Creates copy of date
	const dateCopy = new Date(date);
	let totalDays = 0;

	// While the difference of days exceeds 67, loop
	while (period > 66) {
		period = period - 67;
		// Keep adding the dates by 68 so that the reset day happens when index goes back to 0
		totalDays = totalDays + 67;
	}

	// After the difference between days is < 67 add the total # of days passed by the totalDays
	dateCopy.setDate(date.getDate() + totalDays);

	// Get the index
	let index = period;
	return [dateCopy, index];
}

function dateDiffInDays(a, b) {
	const _MS_PER_DAY = 1000 * 60 * 60 * 24;
	// Discard the time and time-zone information.
	const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
	const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

	return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}

// When user reopens the page, see if the date has passed at all
async function checkDate() {
	// Obtain date from local storage if possible
	// If there is no date grab the hard coded date (the VERY beginning date)
	// Update it from there
	let lastReset = new Date('1/1/2024');

	// const lastVisited = JSON.parse(localStorage.getItem('lastVisit'));
	const lastVisited = localStorage.getItem('lastVisit');

	const todaysDate = new Date();
	const todayDateUTC = Date.UTC(
		todaysDate.getFullYear(),
		todaysDate.getMonth(),
		todaysDate.getDate()
	);

	showHints();

	if (todayDateUTC.toString() !== lastVisited) {
		// localStorage.setItem('lastVisit', JSON.stringify(todaysDate));
		localStorage.setItem('lastVisit', todayDateUTC);
		localStorage.removeItem('guesses');
		localStorage.setItem('guessCount', 0);
	}

	const resetDate = JSON.parse(localStorage.getItem('date'));

	if (resetDate) {
		// If there is something inside the date local storage, then we should calculate the days to see if there has been a reset and the index
		// If there has been a reset update the local storage
		lastReset = new Date(resetDate);

		if (lastReset.toISOString() === todaysDate.toISOString()) {
			const index = 0;
			// const newDate = todaysDate;
			// fetchBreeds(index);
			getTodaysCat(index);
		} else {
			const daysDifference = dateDiffInDays(lastReset, todaysDate);

			const dateAndIndex = addDays(lastReset, daysDifference);
			const newDate = dateAndIndex[0];
			const index = dateAndIndex[1];

			// Sets the new date when there is a reset
			localStorage.setItem('date', JSON.stringify(newDate));

			// fetchBreeds(index);
			getTodaysCat(index);
		}
	} // Else if there is nothing in local storage, make the beginning date the last reset, then update the days to calculate which rotation we are on and the index
	else {
		const daysDifference = dateDiffInDays(lastReset, todaysDate);
		const dateAndIndex = addDays(lastReset, daysDifference);

		const newDate = dateAndIndex[0];
		const index = dateAndIndex[1];

		localStorage.setItem('date', JSON.stringify(newDate));
		// console.log(`THIS IS WHEN LOCAL IS EMPTY (DATE): ${newDate}`);
		// console.log(`THIS IS WHEN LOCAL IS EMPTY (INDEX): ${index}`);
		// fetchBreeds(index);
		getTodaysCat(index);
	}
}

// Loads the page after 2 seconds to give enough time to fetch API and store guess of the day
function load() {
	// gameBody.setAttribute('style', 'display: none');
	// const catBreeds = JSON.parse(localStorage.getItem('catBreeds'));
	catsObject = fetchCatsFromLocal();
	// console.log(catBreeds);
	if (catsObject) {
		checkDate();
		checkGuessesInLocal();
		showHTML();
	} else {
		fetchBreeds();
		setTimeout(showHTML, 2000);
		setTimeout(checkDate, 2000);

		// checkDate();
	}

	// setTimeout(showHTML, 2000);
	// checkDate();
}

function checkGuessesInLocal() {
	let anyGuesses = JSON.parse(localStorage.getItem('guesses'));

	if (anyGuesses === null) {
		anyGuesses = [];
	} else {
		guessContainerEl.innerHTML = '';
	}

	// guessContainerEl.innerHTML = '';

	for (guess of anyGuesses) {
		// const guessCard = createCards(guess);
		createCards(guess);
		// guessContainerEl.appendChild(guessCard);
	}
}

function showHTML() {
	gameBody.setAttribute('style', 'display: visible');
	// console.log(catOfTheDay);
}

function compareGuess(guess, index) {
	if (catOfTheDay.name.toLowerCase() === guess) {
		console.log('match');
	} else {
		console.log('no match');

		// Iterate count by 1 if guess is wrong
		let count = localStorage.getItem('guessCount');
		count++;
		localStorage.setItem('guessCount', count);
		if (count === 3) {
			hintBtn1.setAttribute('style', 'display: visible');
		} else if (count === 5) {
			hintBtn2.setAttribute('style', 'display: visible');
		} else if (count === 7) {
			hintBtn3.setAttribute('style', 'display: visible');
		}

		getWrongGuess(index);
	}
}

function showHints() {
	let count = localStorage.getItem('guessCount');

	if (count >= 3) {
		hintBtn1.setAttribute('style', 'display: visible');
	}
	if (count >= 5) {
		hintBtn2.setAttribute('style', 'display: visible');
	}
	if (count >= 7) {
		hintBtn3.setAttribute('style', 'display: visible');
	}
}

// function getWrongGuess(index) {
// 	const wrongCat = catsObject[index];
// 	// console.log(wrongCat);
// 	// createCards(wrongCat);
// }

function getWrongGuess(index) {
	const wrongCat = catsObject[index];

	createCards(wrongCat);
}

function createCards(cat) {
	// console.log(`index is: ${index}`);

	const divEl = document.createElement('div');
	divEl.setAttribute('class', 'card-container');

	const breedEl = document.createElement('div');
	breedEl.setAttribute('class', 'custom-card');
	const breedImg = document.createElement('img');
	breedImg.setAttribute('src', `${catImagesList[cat.number].image}`);
	breedImg.setAttribute('alt', catImagesList[cat.number].name);
	// breedImg.setAttribute('class', 'responsive-img');
	breedEl.appendChild(breedImg);

	const tailEl = document.createElement('div');
	tailEl.setAttribute('class', 'custom-card');
	let tail;
	if (cat.shortTail === 0) {
		tail = 'No';
	} else {
		tail = 'Yes';
	}
	tailEl.textContent = tail;

	const legEl = document.createElement('div');
	legEl.setAttribute('class', 'custom-card');
	let legs;
	if (cat.shortLegs === 0) {
		legs = 'No';
	} else {
		legs = 'Yes';
	}
	legEl.textContent = legs;

	const weightEl = document.createElement('div');
	weightEl.setAttribute('class', 'custom-card');
	weightEl.textContent = `${cat.weight} lbs`;

	const lifespanEl = document.createElement('div');
	lifespanEl.setAttribute('class', 'custom-card');
	lifespanEl.textContent = `${cat.lifespan} years`;

	const hairlessEl = document.createElement('div');
	hairlessEl.setAttribute('class', 'custom-card');
	let hairless;
	if (cat.hairless === 0) {
		hairless = 'No';
	} else {
		hairless = 'Yes';
	}
	hairlessEl.textContent = hairless;

	divEl.appendChild(breedEl);
	divEl.appendChild(tailEl);
	divEl.appendChild(legEl);
	divEl.appendChild(weightEl);
	divEl.appendChild(lifespanEl);
	divEl.appendChild(hairlessEl);

	guessContainerEl.appendChild(divEl);

	// const test = document.createElement('div');
	// test.textContent = 'please work?';

	// cardContainerEl.append(test);

	// contentEl.appendChild(test);
}

function updateGuessToLocal(guess) {
	// Check if it is an actual cat breed
	if (catList.includes(guess)) {
		const indexofGuess = catList.indexOf(guess);
		// console.log(`FIRST CHECK OF INDEX: ${indexofGuess}`);
		let userGuesses = JSON.parse(localStorage.getItem('guesses'));

		if (userGuesses === null) {
			userGuesses = [];
		}

		const guessInfo = {
			name: catsObject[indexofGuess].name,
			shortTail: catsObject[indexofGuess].shortTail,
			shortLegs: catsObject[indexofGuess].shortLegs,
			weight: catsObject[indexofGuess].weight,
			lifespan: catsObject[indexofGuess].lifespan,
			hairless: catsObject[indexofGuess].hairless,
			number: catsObject[indexofGuess].number,
		};

		userGuesses.push(guessInfo);
		localStorage.setItem('guesses', JSON.stringify(userGuesses));

		compareGuess(guess, indexofGuess);
		// If it is not a cat, don't add it to local and just return
	} else {
		return;
	}
}

submitBtn.addEventListener('click', function () {
	let catInput = userInput.value;
	// console.log(catInput);
	catInput = catInput.toLowerCase();
	// compareGuess(catInput);
	updateGuessToLocal(catInput);
	userInput.value = '';
});

load();

// INSTEAD OF FETCHING API EVERYDAY, FETCH IT IF THE LOCAL STORAGE IS EMPTY/DNE
// THEN ON PAGE LOAD, STORE IT IN VARIABLE AND CHECK THAT INSTEAD
