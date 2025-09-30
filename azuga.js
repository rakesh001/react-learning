function countTriplets(arr, target) {
  if (arr.length < 3) return 0;
  let sum = 0;
  let tripletCount = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        sum = arr[i] + arr[j] + arr[k];
        if (sum === target) tripletCount++;
      }
    }
  }
  return tripletCount;
}

countTriplets([-1, 0, 2, -3, 1], 2);
