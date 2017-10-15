/*
We want to know if our train arrives soon or not.
If our train arrives within two hours we consider it to be soon.

Tip: try playing with the variables `currentHour` and `trainArrivesHour`
to find the defect.
*/

let currentHour = 8;
let trainArrivesHour = 9;

if((trainArrivesHour - currentHour) < 3) {
    console.log("soon");
}