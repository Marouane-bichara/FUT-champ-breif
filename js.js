let arr = [5,3,1,5,0,5,7,9,0,2,5]

for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
        arr.push(arr[i])
        removeItemFromArray(arr,arr[i])
    }
}

function removeItemFromArray(array, item) {
    let index = array.indexOf(item); 


        array.splice(index, 1);
    
    return array;
}
console.log(arr);
