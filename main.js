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
  let i = 0;
  while(i < arr.length) {
    if(arr[i] % 2 === 1) {
      arr[i] = 'odd';
    } else {
      arr[i] = 'even';
    }
    i++;
  }
}

function changeNextThreeToValue(start, arr, val) {
  let i = start;
  let count = 0;

  while(i < arr.length && count < 3) {
    arr[i] = val;
    count++;
    i++;
  } 
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