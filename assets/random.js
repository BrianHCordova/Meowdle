console.log('hello')

function fetchCatImage() {
    fetch('https://cataas.com/cat')
      .then(function(response) {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.blob();
      })
      .then(function(blob) {
        const objectURL = URL.createObjectURL(blob);
        document.getElementById('random-img').src = objectURL;
      })
      .catch(function(error) {
        console.error('There was a problem with the fetch operation:', error);
      });
  }

  fetchCatImage(); // Fetch cat image when the page loads

function fetchCatFact() {
    fetch('https://catfact.ninja/fact')
      .then(function(response) {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(function(data) {
        // Update the content of the <p> element with the fetched fact
        document.getElementById('random-fact').textContent = data.fact;
      })
      .catch(function(error) {
        console.error('There was a problem with the fetch operation:', error);
      });
  }

  // Add event listener to the <a> tag
  document.getElementById('random-btn').addEventListener('click', fetchCatImage);
  document.getElementById('random-btn').addEventListener('click', fetchCatFact);
  