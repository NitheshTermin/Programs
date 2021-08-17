/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {

    let par = [];

    let isValid = true;
    for (i = 0; i < s.length; i++) {
        if (s[i] == '{' || s[i] == '[' || s[i] == '(') {
            par.push(s[i]);
        } else

            if (s[i] == '}' || s[i] == ']' || s[i] == ')') {
                const top = par.pop();
                if (s[i] == ')') {
                    if (top != '(') {
                        isValid = false;
                        break;
                    }
                } else if (s[i] == ']') {
                    if (top != '[') {
                        isValid = false;
                        break;
                    }
                } else if (s[i] == '}') {
                    if (top != '{') {
                        isValid = false;
                        break;
                    }
                }

            }
    }

    if (isValid && par.length == 0)
        return true;
    else
        return false;
};

console.log(isValid('([])[]'));