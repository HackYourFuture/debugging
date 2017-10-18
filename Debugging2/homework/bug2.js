/*
This program should log for every movie in the `movies` array whether it is a
top 10 movie or not.

Hint: there's more than one bug.
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

function notInTop10(movieName) {
    return !(top10Movies.indexOf(movieName) >= 0);
};

function booleanToString(b) {
    if(b) {
        " ";
    } else {
        ' not ';
    }
};

function logTop10(movieTitle) {
    console.log(movieTitle + ' is' + booleanToString(notInTop10(movieTitle)) + 'in the top 10!');    
};

const movies = ['AI', 'Forrest Gump', 'The Matrix', 'Stalker', 'Goodfellas'];
for(movieTitle of movies) {
    logTop10(movieTitle);
}