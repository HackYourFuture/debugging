/*
We want to know if our train arrives soon or not.
If our train arrives within two hours we consider it to be soon.
Normally hours wrap around from 24->0. For this assignment we're gonna
assume hours don't wrap, so hour 24 + 1 becomes 25 and so on.

Hint: try changing the variables `currentHour` and `trainArrivesHour`
to find the defect.
*/

let currentHour = 8;
let trainArrivesHour = 9;

if((trainArrivesHour - currentHour) < 3) {
    console.log("our train arrives soon");
}