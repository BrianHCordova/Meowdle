let catBreeds = [];

fetch(`https://api.thecatapi.com/v1/breeds`)
	.then(function (response) {
		return response.json();
	})
	.then(function (data) {
		// console.log(data);
		for (let i = 0; i < data.length; i++) {
			catBreeds.push(data[i].name);
		}
	});
