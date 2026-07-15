/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let a = s.split('')
    let b = t.split('')
    if(a.length !== b.length){
        return false
    }
    a.sort()
    b.sort()
    for(let i=0;i<a.length;i++)
    {
     if(a[i]!== b[i])
     {
         return false
     }
    }
     return true
    
};