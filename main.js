function changeLast(arr, num) {
  arr.pop();
  arr.push(num);
}

function addMeToEnd(arr) {
  arr.push('Colin');
}

function addMeToStart(arr) {
  arr.unshift('Colin');
}

function changeAllValuesTo(arr, value) {
  for(i = 0; i < arr.length; ++i){
    arr[i] = value;
  } 
}

function oddOrEven(arr) {
  for(i = 0; i < arr.length; ++i){
   if(arr[i] % 2 === 0) {
     newArray = "even";
   } else if (arr[i] % 2 === 0) {
     newArray = "odd";
   }
 }
}

function changeNextThreeToValue(start, arr, value) {
  
}
// const value1 = 15;
// expect(arr1).toEqual([1, 2, 15, 15, 15, 9]);

module.exports = {
  changeLast,
  addMeToEnd,
  addMeToStart,
  changeAllValuesTo,
  oddOrEven,
  changeNextThreeToValue,
}



// ✕ starting with the given index, it changes three consecutive values in the given array to the given value (1ms)