function mergesort(array) {
  var size = array.length;
  for (var subArrSize = 1; subArrSize < size; subArrSize++) {
    console.log(subArrSize)
    for (var left = 0; left < size - 1; left += 2 * subArrSize) {
      var mid = Math.min(left + subArrSize, size - 1);
      var right = Math.min(left + 2 * subArrSize, size);

      var leftOffset = 0;
      var rightOffset = 0;
      while (left + leftOffset < mid && mid + rightOffset < right) {
        console.log('Array Before Test: ' + arr);
        console.log(left + ", " + mid);
        if (array[left + leftOffset] > array[mid + rightOffset]) {
          console.log('In Place Swap');
          var temp = array[left + leftOffset];
          array[left + leftOffset] = array[mid + rightOffset];
          var tempTwo = array[left + leftOffset + 1];
          for (let i = 0; i < mid + rightOffset - (left + leftOffset); i++) {
            array[left + leftOffset + 1 + i] = temp;
            temp = tempTwo;
            tempTwo = array[left + leftOffset + 2 + i];
          }

          leftOffset++;
          rightOffset++;
        } else {
          leftOffset++;
        }
      }
    }
  }
  return array;
}
