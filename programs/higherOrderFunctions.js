const countOccuranceOfCharacters = (str) => {

    const result = [...str].reduce((accumulator, currentvalue)=>{
        accumulator[currentvalue] = Object.keys(accumulator).indexOf(currentvalue) === -1?1:accumulator[currentvalue]+1;
        return accumulator;
    },{});
    delete result['l'];
    console.log(result);
};

countOccuranceOfCharacters('aaaplelle');


const reverseString = (str)=> {

    let revStr = '';
    let curIndex = 0;
    for (let index = str.length -1; index >= 0; index--) {
        revStr = revStr + str[index];
        curIndex ++;
    }

    console.log(revStr);
}


const reverseIndividualWords = (str)=>{
    let wordsArr = str.split(' ');
    let revArr = [];
    wordsArr.forEach(word => {
        revArr.push(word.split('').reverse().join(''));
    });

    console.log(revArr.join(' '));
}

reverseString('on the other side of the street i knew');

reverseIndividualWords('on the other side of the street i knew');