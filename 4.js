function reverse(arr) {
  var left = 0;
  var right = arr.length - 1;
  while(left < right) {
      var temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
  }
  // your code here
  return arr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result)