const decondString = (str) => {

    let numStack = [];
    let charStack = [];
    let testStr = '';

    let strArray = str.split('');
    
    for (let i = 0; i < strArray.length; i++) {
        
        if (parseInt(strArray[i])) {
            numStack.push(parseInt(strArray[i]));
        } else {

            if (strArray[i] !== ']') {
                charStack.push(strArray[i]);
            } else {

                let currentCharStack = charStack.pop();
                let tempStr = '';
                testStr='';
                while (currentCharStack !== '[') {
                    tempStr = currentCharStack+tempStr;
                    currentCharStack = charStack.pop();
                }

                let currentNumStack = numStack.pop();
                for (let num = 1; num <= currentNumStack; num++) {
                    testStr = testStr + tempStr;                    
                }
                for (let k = 0; k < testStr.length; k++) {
                    
                    charStack.push(testStr[k]);
                }

            }
        }

    }
    return testStr;
};

console.log(decondString("3[a2[c]]"));