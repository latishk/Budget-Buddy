var request = require('request');

function getAveragePrice(people) {
  var priceSum = 0;
  for(var i = 0 ; i < people.length; i++){
    priceSum += people[i].price;
  }
  return priceSum/people.length;
}

// function getLocationDetails(cityName, lat, lon){
//   cityName = 'Rochester, NY'
//   var options = {
//     url: "https://developers.zomato.com/api/v2.1/locations?",
//     headers: {
//       'user_key': '6e57894bcf0f24dc99d41e658ba63b4e'
//     },
//     qs: {
//       q: cityName,
//       lat:43.08270460000001,
//       lon:-77.6574002,
//       count: 5
//     }
//   };
//
//   request(options, callbackGeo)
//
// }
//
// function callbackGeo(error, response, body) {
//   if (!error && response.statusCode == 200) {
//     var info = JSON.parse(body);
//     console.log(info.location_suggestions.[0].entity_id);
//   }
//   console.log(error);
// }


function setOptions(latitude, longitude){

  var options = {
    url: "https://developers.zomato.com/api/v2.1/search?",
    headers: {
      'user_key': '6e57894bcf0f24dc99d41e658ba63b4e'
    },
    qs: {
      q:"",
      entity_type:'city',
      radius: 10000,
      lat:latitude,
      lon:longitude,
      count:200
    }
  };

  return options;
}



function callback(error, res, body) {
  // if (!error && res.statusCode == 200) {
  //   var info = JSON.parse(body);
  //   return info;
  // //  console.log(JSON.stringify(info.restaurants[0]));
  //   // info.restaurants.forEach(function(item){
  //   //   console.log(item.restaurant.name,"\t", item.restaurant.average_cost_for_two,"\t",item.restaurant.price_range,"\t", item.restaurant.location.address);
  //   // });
  // }
  // console.log(error);
}

// request(options, callback);
function getRestauantsInPriceRange(averagePrice, data){
  minPrice = 0.75*averagePrice;
  if (minPrice < 5)
    minPrice = 0;
  maxPrice = 1.25*averagePrice;
  cleanedData = [];

  for (var i = 0; i < data.restaurants.length; i++) {
    var temp = data.restaurants[i].restaurant["average_cost_for_two"];
    if ((temp <=maxPrice)  && (temp >=minPrice)){
      cleanedData.push(data.restaurants[i]);
    }
  }
  console.log(cleanedData);
  return  cleanedData;
}

function getPlaceToEat(people, response) {

  request(setOptions(people[0].lat, people[0].lon), function(error, res, body) {

    var averagePrice =0;
    for(var i =0; i <people.length; i++){
       averagePrice += parseFloat(people[i].price);
    }
console.log("dfasfsdf  "+averagePrice);
    averagePrice /= people.length;
    averagePrice *= 2;

    if (!error && res.statusCode == 200) {
      var info = JSON.parse(body);
      // console.log(JSON.stringify(info));
      info = getRestauantsInPriceRange(averagePrice, info);
      console.log("\n", JSON.stringify(info));
      response.send(info);

    }
    console.log(error);
  });

}

module.exports = {
  getPlaceToEat: getPlaceToEat
};
