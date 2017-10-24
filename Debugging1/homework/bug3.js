/*
For each hour our train hasn't arrived this program should log `train arriving
in n hours`. Where n is the number of hours it takes for the train to arrive. 
Like:
train arrives in 9 hours
train arrives in 8 hours
train arrives in 7 hours
etc..
*/

let currentHour = 0;
let trainArrivesHour = 9;

for(let hour = currentHour; currentHour <= trainArrivesHour; hour++) {
    let trainArrivesIn = trainArrivesHour - hour;
    console.log("train arrives in " + trainArrivesIn  + " hours");
}