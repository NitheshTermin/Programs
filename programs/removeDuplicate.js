const removeDuplicateChars = (s) => {

    const len = s.length;
    let tempArray = [];
    let tempString = '';
    s.split('').forEach(char => {
        if(tempArray.indexOf(char) === -1){
            tempArray.push(char);
            tempString = tempString + char;
        }
    });

    return tempString;
};

console.log(removeDuplicateChars('alliswellisw'));
