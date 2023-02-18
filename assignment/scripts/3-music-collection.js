console.log('***** Music Collection *****')
let collection = [];
const addToCollection = (title, artist, yearPublished) => {
    let song = {
        'Title': title,
        'artist': artist,
        'yearPublished': yearPublished,
    }; return collection.push(song);
}
addToCollection('Feels good to be me', 'Andy Grammer', 2022);
addToCollection('Ed Sheeran', 'Sing', 2014);
addToCollection('Low', 'Flo Rida', 2007); 
addToCollection('Bang', 'AJR', 2021);
addToCollection('Light Switch', 'Charlie Puth', 2022);
addToCollection('Run', 'OneRepublic', 2021);
console.log(collection);
