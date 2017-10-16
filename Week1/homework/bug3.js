/*
This programs should log all the top ten movies except the first three.
*/

const top10Movies = [
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

// We list all movies, except the top 3.
let index = 3;
for (index; index < top10Movies.length; index++) {
    console.log(`movie: ${top10Movies[index]}`);
}