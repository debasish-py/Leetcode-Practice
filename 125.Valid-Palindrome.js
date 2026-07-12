/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let result = '';
    for(let i=0;i<s.length;i++){
        char = s[i]
        charcode = char.charCodeAt(0)
        if((charcode >= 65 && charcode <= 90) || (charcode >= 97 && charcode <= 122) || (charcode>= 48 && charcode <=57)){
            result += char
        }
    }
    let result1=result.toLowerCase()
    let rev = result1.split('').reverse().join('')
    console.log(rev)
    if(result1==rev){
        return true
    }
    else{
        return false
    }
};