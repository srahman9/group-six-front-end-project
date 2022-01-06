var searchFormEl = document.querySelector('#search-form')
var resultsContainerEl = document.querySelector('#results')

var formSubmitHandler = function(event) {
    event.preventDefault();
    var city = cityInputEl.value.trim();
    if (city) {
        getLatLon(city);
        cityINputEl.value = ''
    }
    else {
        alert('Please enter the name of a city');
    }
};

var getLatLon = function(city) {
    //api key for iqAir 
    var apiKey = "54cd8f0a-9f51-43d4-ad67-cb829c5298e2"
    var apiUrl = ""
}