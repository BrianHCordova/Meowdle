// let catBreeds = [];
let day = 68;

function shuffle(array) {
	let currentIndex = array.length;
	let randomIndex;

	while (currentIndex > 0) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		[array[currentIndex], array[randomIndex]] = [
			array[randomIndex],
			array[currentIndex],
		];
	}
	// localStorage.removeItem('cats');
	updateBreedToLocal(array);
	// return array;
}

function updateBreedToLocal(catBreeds) {
	localStorage.setItem('cats', JSON.stringify(catBreeds));
}

function updateDayToLocal() {
	localStorage.setItem('day', day);
}

function fetchBreeds() {
	// If the day exceeds 67 days, then we remove the previous breeds array from local storage then fetch a new randomized list, else we just grab the pre-existing cat breeds list from local storage
	if (day > 67) {
		localStorage.removeItem('cats');
		catBreeds = JSON.parse(localStorage.getItem('cats'));

		if (catBreeds === null) {
			catBreeds = [];
		}

		// Fetches API on page load
		fetch(`https://api.thecatapi.com/v1/breeds`)
			.then(function (response) {
				return response.json();
			})
			.then(function (data) {
				// console.log(data);

				for (let i = 0; i < data.length; i++) {
					catBreeds.push(data[i].name);
				}
				shuffle(catBreeds);
				console.log(catBreeds);
			});
	} else {
		catBreeds = JSON.parse(localStorage.getItem('cats'));
	}
}

fetchBreeds();
