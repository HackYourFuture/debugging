function trainStation(city, latitude, longitude, connectedCities) {
    return {city: city,
            coordinates: [latitude, longitude],
            connectedCities: connectedCities};
}

const trainStations = [
    trainStation("Amsterdam", 52.3791283, 4.8980833, ["Rotterdam", "Utrecht"]),
    trainStation("Rotterdam", 51.92235, 4.4661983, ["Amsterdam", "Utrecht"]),
    trainStation("Utrecht", 52.0894444, 5.1077981, ["Amsterdam", "Rotterdam"]),
    trainStation("Arnhem", 51.984034, 5.8983483, ["Utrecht"])
];

function latitude(coordinates) {
    return coordinates[0];
}

function longitude(coordinates) {
    return coordinates[1];
}

function metersToKilometers(meters) {
    return meters / 1000;
}

function distanceInMeters(coord1, coord2) {
    const earthRadiusInMeters = 6371000;

    function radians(degrees) {
        return (Math.PI / 180) * degrees;
    }
    
    const deltaLatitude = radians(latitude(coord2) - latitude(coord1));
    const deltaLongitude = radians(longitude(coord2) - longitude(coord1));
    const a = Math.sin(deltaLatitude / 2) * Math.sin(deltaLatitude / 2) +
        Math.cos(radians(latitude(coord1))) *
        Math.cos(radians(latitude(coord2))) *
        Math.sin(deltaLongitude / 2) * 
        Math.sin(deltaLongitude / 2);
    const c = Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)) * 2;

    return earthRadiusInMeters * c;
}

function findStation(city) {
    for(let index = 0; index < trainStations.length; index++) {
        const trainStation = trainStations[index];
        if(trainStation.city == city) {
            return trainStation;
        }
    }
}

function connectedCities(city) {
    return findStation(city).connectedCities;
}

function connectedStation(departingCity, destinationCity) {
    const departStation = findStation(departingCity);
    const desitinationStation = findStation(destinationCity);
    return desitinationStation;
}

function distanceBetweenStationsInKm(station1, station2) {
    const distanceStation1ToStation2 = distanceInMeters(station1.coordinates, station2.coordinates);
    return metersToKilometers(distanceStation1ToStation2);
}

const departingCity = "Utrecht";
const destinationCity = "Arnhem";

const destinationStation = connectedStation(departingCity, destinationCity);
console.log("Destination: ", destinationStation);

const departingStation = findStation(departingCity);
const distanceToDestinationInKm = distanceBetweenStationsInKm(destinationStation, departingStation);
console.log("We depart from", departingCity, "travelling", distanceToDestinationInKm, "km to", destinationCity)