# Debugging 2

## Examples

Work through some examples and/or homework assignments together with the
students.

## Understanding an existing program

Let's look at the code in `code_examples/train-station.js`. It's a program that
can calculate routes between the train stations of various cities in the
Netherlands, and also provides us with the distance between these cities. Very
useful if you want to know how to get from one place to the other. Unfortunately
there's a bug in this program, and even more unfortunate for us this program is
a lot bigger than our previous examples.

We need to start looking at this program from different angles. We can see that
it has various functions. Let's examine them first and write down what they
might do.

Starting from the top we see that there's a function to create a train station.
Then there's a variable called `trainStations` that contains stations of four
Dutch cities. Let's `console.log` them.

```js
function trainStation(city, latitude, longitude, connectedCities) {
    return {city: city,
            coordinates: [latitude, longitude],
            connectedCities: connectedCities};
}

const trainStations = [
    trainStation("Amsterdam", 52.3791283, 4.8980833, ["Rotterdam", "Utrecht"]),
    trainStation("Rotterdam", 51.92235, 4.4661983, ["Amsterdam", "Utrecht"]),
    trainStation("Utrecht", 52.0894444, 5.1077981, ["Amsterdam", "Rotterdam"]),
    trainStation("Arnhem", 52.0782547, 5.3677998, ["Utrecht"])
];

console.log(trainStations);
```

**Question:** What would the output of `console.log(trainStations)` look like?

Then there's some small functions.

**Question:** What do these small functions do?

Then we come accross a very complicated looking function called `distanceInMeters`.

**Question:** Can you guess what it might do, even if you don't (fully) understand it?

It's very well possible this function has a bug, but because we don't really
understand the code that's hard for us to verify.

**Question:** Even if we don't understand it, how can we get some confidence in
that it might be correct or incorrect?

**Question:** What do you think `findStation` does? How can we check if it has a
bug or not?

### Creating variables

Sometimes code is written in such a succint style it becomes hard to debug.
We need to change the code first to properly debug it.


```js
function connectedCities(city) {
    // Find the departing city in the list of train stations
    return findStation(city).connectedCities;
}
```

becomes:

```js
function connectedCities(city) {
    // Find the departing city in the list of train stations
    const station = findStation(city);
    return station.connectedCities;
}
```

## Summary

You've learned how to examine an existing program to get an understanding of
what it does. You've learned that examining a program can give you the following
insights:

1. You can examine functions separately from the rest of the program.
2. You can guess what a function does by looking at the name and its parameters.
3. If you don't understand some functions you can still make sense of what the
   program does.
4. By testing individual functions you can verify if they have a bug.