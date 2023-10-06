function findWords(input) {
    const[searchWords, ...words] = input;
    const wordOcc = searchWords.split(" ")
        .reduce((acc, curr) => {
            acc[curr] = 0;
            return acc;
        }, {});
    words.forEach(word => {
        if(wordOcc.hasOwnProperty(word)){
            wordOcc[word] += 1;
        }
    });
    //TODO print
}
findWords(
    [
        'this sentence',
        'In', 'this', 'sentence', 'you', 'have',
        'to', 'count', 'the', 'occurrences', 'of',
        'the', 'words', 'this', 'and', 'sentence',
        'because', 'this', 'is', 'your', 'task'
    ]

)