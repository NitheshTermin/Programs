const removeDuplicateChars = (s) => {

    const len = s.length;
    let tempArray = [];
    s.split().forEach(char => {
        if(tempArray.indexOf(char)!== -1){
            tempArray.push(char);
        }
    });

    return tempArray;
};

console.log(removeDuplicateChars('alliswellisw'));