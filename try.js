import Web3 from 'web3';

function getDetails(code){    
    var Amadeus = require('amadeus');

    var amadeus = new Amadeus({
    clientId: 'uDGFRwqjN9TMyagU3pwL4Yv53iUZzXN3',
    clientSecret: 'FjthFeiXCnw4KX9D'
    });

    // Travel Restrictions API by country
    var output = amadeus.client.get('/v1/duty-of-care/diseases/covid19-area-report',
    { countryCode: code })
    .then(function (response) {
        //const jsonCities = require("./cities");
        var json = response.data;
        console.log(json);
        //return json;
        //console.log(jsonCities);
    }).catch(function (error) {
        console.log(error.response);
    });
}
