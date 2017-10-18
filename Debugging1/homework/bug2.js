/*
This programs should log all the top ten movies except the first three.
Then it should log all top ten actors except the first three.
*/

let top10Movies = [
    'AI',
    'Shawshank Redemption',
    'Godfather',
    'Pulp Fiction',
    'Fight Club',
    'Forrest Gump',
    'Inception',
    'Goodfellas',
    'The Matrix',
    'Interstellar'];

let top10Actors = [
    'Marlon Brando',
    'Jack Nickolson',
    'Robert De Niro',
    'Al Pacino',
    'Daniel Day-Lewis',
    'Dustin Hoffman',
    'Tom Hanks',
    'Anthony Hopkins',
    'Paul Newman',
    'Denzel Washington'];

let index = 3;
for (index; index < top10Movies.length; index++) {
    let movie = top10Movies[index];
    console.log('Top 10 movie: ' + movie);
}

for (index; index < top10Actors.length; index++) {
    let actor = top10Actors[index];
    console.log('Top 10 actor: ' + actor);
}