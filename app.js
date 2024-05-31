const lyrics = [
    'Is this the real life?',
    'Is this just fantasy?',
    'Caught in a landslide',
    'No escape from reality',
    'Oh well imagine',
    'As I\'m pacing the pews in a church corridor',
    'And I can\'t help but to hear',
    'No, I can\'t help but to hear an exchanging of words',
    'Turn around',
    'I read the news today, oh boy',
    'As I walk through the valley of the shadow of death',
    'I take a look at my life and realize there\'s not much left',
    'It\'s Britney, bitch',
    'When I was a young boy',
    'My father took me into the city',
    'I saw a werewolf with a Chinese menu in his hand',
    'Theodosia writes me a letter every day...',
    'There must be some kinda way out of here',
    'Somebody once told me',
    'The world is gonna roll me',
    'Coming out of my cage',
    'And I\'ve been doing just fine',
    'Hello darnkess my old friend',
    'Let\'s get down to business',
    'To defeat the hun'
];

const minLineNumber = 4;
const maxLineNumber = 8;

const generateRandomLyric = (max) => {
    return Math.floor(Math.random() * max);
}

const createSong = lyricsArray => {
    let numberOfLyrics = lyricsArray.length; // The number of lyrics is the number of possible song lyrics stored in the array
    let numberOfLines = Math.floor(Math.random() * (maxLineNumber + 1 - minLineNumber) + minLineNumber); // The number of lines is the number of lines desired in the output song
    let chosenLyrics = [];
    let song = [];

    for (let i = 0; i < numberOfLines; i++) {
        let randomLyric = generateRandomLyric(numberOfLyrics);
            
        while (chosenLyrics.includes(randomLyric)) {
            randomLyric = generateRandomLyric(numberOfLyrics);
        }

        chosenLyrics.push(randomLyric);
        song.push(lyricsArray[randomLyric]);
    }

    console.log(song.join('\n'));
}

createSong(lyrics);
