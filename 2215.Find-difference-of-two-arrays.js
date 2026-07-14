/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {

let array1 = new Set();
let array2 = new Set();
for(let i=0;i<nums1.length;i++){
    let found = false;
    for(let j=0;j<nums2.length;j++)
    {
        if(nums1[i]===nums2[j]){
            found = true;
            break;
        }
    }
    if(!found){
        array1.add(nums1[i])
    }
}
for(let i=0;i<nums2.length;i++){
    let found = false;
    for(let j=0;j<nums1.length;j++)
    {
        if(nums2[i]===nums1[j]){
            found = true;
            break;
        }
    }
    if(!found){
        array2.add(nums2[i])
    }
}
return [[...array1],[...array2]]
 
};
