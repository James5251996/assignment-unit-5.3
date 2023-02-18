console.log('***** Music Collection *****')
let collection = [];
const addToCollection = (title, artist, yearPublished) => {
    let song = {
        'Title': title,
        'artist': artist,
        'yearPublished': yearPublished,
    }; return collection.push(song);
};


addToCollection('Feels good to be me', 'Andy Grammer', 2022);
addToCollection('Sing', 'Ed Sheeran', 2014);
addToCollection('Low', 'Flo Rida', 2007);
addToCollection('Bang', 'AJR', 2021);
addToCollection('Light Switch', 'Charlie Puth', 2022);
addToCollection('Run', 'OneRepublic', 2021);



const showCollection = (array) => {
    console.log(array.length);
    for (let i = 0; i < array.length; i++) {
        console.log(array[i].Title + ' by ' + array[i].artist + ', published in ' + array[i].yearPublished);
    };
};


const findByArtist = (artist) => {
    let findArtist = [];
    for (x = 0; x < collection.length; x++) {
        if (artist === collection[x].artist) {
            findArtist.push(collection[x]);
            console.log(findArtist);
        }
    } return findArtist;
};


const search = (object) => {
    let searchArray = [];
    let searchObject = {
        'artist': 'Ray Charles',
        'year': 1957,
    };
    for (i = 0; i < collection.length; i++) {
        if (collection[i].artist === searchObject.artist && collection[i].yearPublished === searchObject.year) {
            searchArray.push(collection[i]);
            console.log(searchArray);
        } else if (collection[i].artist !== searchObject.artist && collection[i].yearPublished !== searchObject.year) {
            console.log(searchArray);
        } else {
             console.log(collection);
        }
    };
};





showCollection(collection);
findByArtist('Ed Sheeran');
findByArtist('Andy Grammer');
findByArtist('Jimmy Buffet');
console.log(collection);

search(collection)