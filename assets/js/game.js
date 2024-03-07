const gameBody = document.querySelector('#game-body');

const sequence1 = [
	59, 51, 35, 53, 37, 44, 34, 36, 17, 11, 33, 26, 7, 49, 1, 12, 2, 10, 22, 32,
	66, 16, 0, 61, 15, 5, 30, 19, 18, 43, 48, 29, 50, 60, 65, 63, 21, 45, 57, 3,
	38, 27, 46, 55, 54, 9, 62, 52, 23, 24, 8, 6, 40, 25, 13, 31, 56, 39, 28, 41,
	14, 4, 20, 58, 42, 47, 64,
];

let catOfTheDay;

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

function fetchBreeds(index) {
	// If the day exceeds 67 days, then we remove the previous breeds array from local storage then fetch a new randomized list, else we just grab the pre-existing cat breeds list from local storage

	const randomCat = sequence1[index];

	// Fetches API
	fetch(`https://api.thecatapi.com/v1/breeds`)
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			// console.log(data[randomCat]);
			const catBreed = data[randomCat];

			catOfTheDay = {
				id: catBreed.id,
				name: catBreed.name,
				shortTail: catBreed.suppressed_tail,
				shortLegs: catBreed.short_legs,
				weight: catBreed.weight.imperial,
				lifespan: catBreed.life_span,
				hairless: catBreed.hairless,
				altName: catBreed.alt_names,
			};
			// console.log(catOfTheDay);
		});
	// console.log(catOfTheDay);
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

	const todaysDate = new Date();

	const resetDate = JSON.parse(localStorage.getItem('date'));

	if (resetDate) {
		// If there is something inside the date local storage, then we should calculate the days to see if there has been a reset and the index
		// If there has been a reset update the local storage
		lastReset = new Date(resetDate);

		if (lastReset.toISOString() === todaysDate.toISOString()) {
			const index = 0;
			// const newDate = todaysDate;
			fetchBreeds(index);
		} else {
			const daysDifference = dateDiffInDays(lastReset, todaysDate);

			const dateAndIndex = addDays(lastReset, daysDifference);
			const newDate = dateAndIndex[0];
			const index = dateAndIndex[1];

			// Sets the new date when there is a reset
			localStorage.setItem('date', JSON.stringify(newDate));
			// localStorage.setItem('day', index);

			fetchBreeds(index);
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
		fetchBreeds(index);
	}
}

// Loads the page after 2 seconds to give enough time to fetch API and store guess of the day
function load() {
	// gameBody.setAttribute('style', 'display: none');
	setTimeout(showHTML, 2000);
	checkDate();
}

function showHTML() {
	gameBody.setAttribute('style', 'display: visible');
	console.log(catOfTheDay);
}

load();
