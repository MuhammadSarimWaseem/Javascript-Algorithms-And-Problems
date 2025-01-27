let array1=[2,4,6,8]
let array2=[1,3,5,7,9]
let mergeArray=[]
let i=0
let j=0
while(i<array1.length&&j<array2.length){
    if(array1[i]<array2[j]){
        mergeArray.push(array1[i])
        i++
    }else{
        mergeArray.push(array2[j])
        j++
    }
}
while (i < array1.length) {
    mergeArray.push(array1[i]);
    i++;
}

// Add remaining elements from array2 (if any)
while (j < array2.length) {
    mergeArray.push(array2[j]);
    j++;
}
console.log(mergeArray);
