const trupleGenerator = (numBars) => {
  var res = [];
  var rand = () => Math.floor(Math.random() * 255);
  for (var i = 0; i < numBars; i++) {
    res.push([rand(), rand(), rand(), Math.random() * 100])
  }
  return res;
}

const mergeAnimate = (arr, criteria) => {
  if (arr.length <= 1) return arr;
  const animations = [];
  const aux = arr.slice();
  mergeSort(arr, 0, arr.length - 1, aux, animations, criteria);
  return animations;
}

const mergeSort = (arr, start, end, aux, animations, criteria) => {
  if (start === end) return;
  const mid = Math.floor((start + end) / 2);
  mergeSort(aux, start, mid, arr, animations, criteria);
  mergeSort(aux, mid + 1, end, arr, animations, criteria);
  merge(arr, start, mid, end, aux, animations, criteria);
}

const merge = (arr, start, mid, end, aux, animations, criteria) => {
  var k = start;
  var i = start;
  var j = mid + 1;
  while (i <= mid && j <= end) {
    if (aux[i][criteria] <= aux[j][criteria]) {
      animations.push([k, aux[i]]);
      arr[k++] = aux[i++]
    } else {
      animations.push([k, aux[j]]);
      arr[k++] = aux[j++]
    }
  }
  while (i <= mid) {
    animations.push([k, aux[i]]);
    arr[k++] = aux[i++];
  }
  while (j <= end) {
    animations.push([k, aux[j]]);
    arr[k++] = aux[j++];
  }
}

export { trupleGenerator, mergeAnimate };