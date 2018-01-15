/**
 As a user I want to travel by train to a certain city. I can give this program
 the city I depart from and the city I want to arrive at.

 The program should give us the route we need to take, that is: which stations
 we need to go to. For example, if we want to go from Amsterdam to Arnhem it
 should give us [Amsterdam, Utrecht, Arnhem]

 Furthermore it should also tell us the distance of a route and the cost of our
 train ticket. A train ticket costs about 19 eurocents per kilometer
 */

const trainStations = {
    "Amsterdam":
        {// [latitude, longitude]
            coordinates: [52.3791283, 4.8980833],
            connections: ["Rotterdam", "Utrecht"]
        },
    "Rotterdam":
        {
            coordinates: [51.92235, 4.4661983],
            connections: ["Amsterdam", "Utrecht"]
        },
    "Utrecht":
        {
            coordinates: [52.0894444, 5.1077981],
            connections: ["Amsterdam", "Rotterdam", "Arnhem", "Oberhausen"]
        },
    "Arnhem":
        {
            coordinates: [51.984034, 5.8983483],
            connections: ["Utrecht", "Oberhausen"]
        },
    "Oberhausen":
        {
            coordinates: [51.4983534, 6.8131958],
            connections: ["Arnhem", "Utrecht"]
        }
};

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
// const distanceBetweenAmsterdamAndUtrecht = distanceInMeters([52.3791283, 4.8980833], [52.0894444, 5.1077981]);
// console.log('distance Between Amsterdam And Utrecht: ',metersToKilometers(distanceBetweenAmsterdamAndUtrecht));
function distanceBetweenStationsInMeters(station1, station2) {
    return distanceInMeters(station1.coordinates, station2.coordinates);
}

function departure(route) {
    return route[0];
}
//["Amsterdam", "Utrecht", "Arnhem"]
//console.log('departure: ', departure(["Amsterdam", "Utrecht", "Arnhem"]));
function destination(route) {
    return route[route.length - 1];
}
//console.log('destination: ', destination(["Amsterdam", "Utrecht", "Arnhem"]));
function isInRoute(route, city) {
    return route.includes(city);
}

function updateRoute(route, city) {
    const newRoute = route.slice();
    newRoute.push(city);
    return newRoute;
}

function routes(departingCity, destinationCity) {
    if (departingCity === destinationCity) {
        throw "Destination city cannot be the same as departure city.";
    }

    const possibleRoutes = [];
    function buildRoutes(route) {
        const currentCity = route[route.length - 1];
        //console.log('currentCity: ', currentCity);
        const currentStation = trainStations[currentCity];
        //console.log('currentStation: ', currentStation);
        currentStation.connections.forEach(connectedCity => {
            if (!isInRoute(route, connectedCity)) {
                const updatedRoute = updateRoute(route, connectedCity);
                //console.log('updatedRoute: ', updatedRoute);
                if (connectedCity === destinationCity) {
                    // Stop the presses! We have a route!
                    possibleRoutes.push(updatedRoute);
                } else {
                    buildRoutes(updatedRoute);
                }
            }
        });
    }
    const startingRoute = [departingCity];
    buildRoutes(startingRoute);
    return possibleRoutes;
}


function routeLengthInKilometers(route) {
    if (route.length < 2) {
        return 0;
    } else {
        let totalLengthInKm = 0;
        for (let index = 0; index < route.length - 1; index++) {
            const currentCity = route[index];
            const currentStation = trainStations[currentCity];
            const nextCity = route[index + 1];
            const nextStation = trainStations[nextCity];
            const distanceInMeter = distanceBetweenStationsInMeters(currentStation, nextStation);
            const distanceInKm = metersToKilometers(distanceInMeter);
            totalLengthInKm += distanceInKm;
        }
        return totalLengthInKm;
    }
}

function shortestRoute(routes) {
    //console.log(routes);
    if (routes.length === 0) {
        throw "Have to provide at least one route";
    } else {
        let currentShortestRoute = routes[0];
        //console.log('current Shortest Route is: ', currentShortestRoute);
        for (let index = 1; index < routes.length - 1; index++) {
            const route = routes[index];
            //console.log(route);
            //console.log(routeLengthInKilometers(currentShortestRoute));
            if (routeLengthInKilometers(currentShortestRoute) > routeLengthInKilometers(route)) {
                currentShortestRoute = route;
            }
        }
        return currentShortestRoute;
    }
}

function routeCostInEuros(route) {
    const pricePerKilometers = 0.19;
    const routeLengthInKm = routeLengthInKilometers(route);
    const price = routeLengthInKm * pricePerKilometers;
    // We have to return the result, or will give us undefined
    return price;
    //console.log('€',price);
}

const amsterdamArnhemRoutes = routes("Amsterdam", "Arnhem");
//console.log(amsterdamArnhemRoutes);
const shortestAmsterdamArnhemRoute = shortestRoute(amsterdamArnhemRoutes);
//console.log(shortestAmsterdamArnhemRoute);
console.log(
    "Our route:",
    shortestAmsterdamArnhemRoute,
    "is",
    routeLengthInKilometers(shortestAmsterdamArnhemRoute) + " km",
    ", costing € " + routeCostInEuros(shortestAmsterdamArnhemRoute));
