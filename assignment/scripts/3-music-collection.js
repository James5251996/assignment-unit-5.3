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
console.log(collection);
