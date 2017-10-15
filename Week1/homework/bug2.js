/*
For each hour our train hasn't arrived this program should log `train arriving
in n hours`. Where n is the number of hours it takes for the train to arrive. 
*/

let currentHour = 0;
let trainArrivesHour = 9;

let hasTrainArrived = false;
while(!hasTrainArrived) {
    let trainArrivesIn = trainArrivesHour - currentHour;
    console.log("train arrives in " + trainArrivesIn  + " hours");

    currentHour++;
    hasTrainArrived = currentHour < trainArrivesHour;
}