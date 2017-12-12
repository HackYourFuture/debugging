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
         connections: ["Rotterdam", "Utrecht"]},
    "Rotterdam": 
        {coordinates: [51.92235, 4.4661983], 
         connections: ["Amsterdam", "Utrecht"]},
    "Utrecht":     
        {coordinates: [52.0894444, 5.1077981], 
         connections: ["Amsterdam", "Rotterdam", "Arnhem", "Oberhausen"]},
    "Arnhem": 
        {coordinates: [51.984034, 5.8983483], 
         connections: ["Utrecht", "Oberhausen"]},
    "Oberhausen":
         {coordinates: [51.4983534, 6.8131958],
          connections: ["Arnhem", "Utrecht"]}
};