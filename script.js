document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('predictionForm').addEventListener('submit', function(e) {
        e.preventDefault();

        var location = document.getElementById('location').value;
        var year = document.getElementById('year').value;
        var inputData = { 
            location: location,
            year: parseInt(year)
        };

        makePrediction(inputData);
    });
});

function makePrediction(inputData) {
    var apiEndpoint = 'arn:aws:apigateway:us-west-1::/apis/zo6cxqogkb/routes/ouj8zpb'; // Replace with your API endpoint URL
    //var apiKey = 'your-api-key'; // Replace with your API key if required

    fetch(apiEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            //'x-api-key': apiKey // Include the API key header if necessary
        },
        body: JSON.stringify(inputData)
    })
    .then(response => response.json())
    .then(data => {
        displayPrediction(data.prediction);
    })
    .catch(error => {
        console.error('Error making prediction:', error);
    });
}

function displayPrediction(prediction) {
    var resultElement = document.getElementById('prediction-result');
    resultElement.textContent = "Prediction: " + prediction;
}
