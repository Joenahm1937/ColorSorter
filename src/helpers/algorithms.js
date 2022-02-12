const trupleGenerator = (numBars) => {
  var res = [];
  var rand = () => Math.floor(Math.random() * 255);
  for (var i = 0; i < numBars; i++) {
    res.push([rand(), rand(), rand(), Math.random() * 100]);
  }
  return res;
};

const quickAnimate = (arr, criteria) => {
  if (arr.length <= 1) return arr;
  const animations = [];
  quickSort(arr, 0, arr.length - 1, animations, criteria);
  return animations;
};

const quickSort = (arr, start, end, animations, criteria) => {
  //end as pivot
  if (start >= end) return;
  let index = partition(arr, start, end, animations, criteria);
  quickSort(arr, start, index - 1, animations, criteria);
  quickSort(arr, index + 1, end, animations, criteria);
};

const partition = (arr, start, end, animations, criteria) => {
  let pivot = arr[end][criteria];
  for (var i = start, pIndex = i; i < end; i++) {
    if (arr[i][criteria] < pivot) {
      animations.push([i, arr[pIndex]]);
      animations.push([pIndex, arr[i]]);
      [arr[i], arr[pIndex]] = [arr[pIndex], arr[i]];
      pIndex++;
    }
  }
  animations.push([end, arr[pIndex]]);
  animations.push([pIndex, arr[end]]);
  [arr[end], arr[pIndex]] = [arr[pIndex], arr[end]];
  return pIndex;
};

const mergeAnimate = (arr, criteria) => {
  if (arr.length <= 1) return arr;
  const animations = [];
  const aux = arr.slice();
  mergeSort(arr, 0, arr.length - 1, aux, animations, criteria);
  return animations;
};

const mergeSort = (arr, start, end, aux, animations, criteria) => {
  if (start === end) return;
  const mid = Math.floor((start + end) / 2);
  mergeSort(aux, start, mid, arr, animations, criteria);
  mergeSort(aux, mid + 1, end, arr, animations, criteria);
  merge(arr, start, mid, end, aux, animations, criteria);
};

const merge = (arr, start, mid, end, aux, animations, criteria) => {
  var k = start;
  var i = start;
  var j = mid + 1;
  while (i <= mid && j <= end) {
    if (aux[i][criteria] <= aux[j][criteria]) {
      animations.push([k, aux[i]]);
      arr[k++] = aux[i++];
    } else {
      animations.push([k, aux[j]]);
      arr[k++] = aux[j++];
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
};

export { trupleGenerator, mergeAnimate, quickAnimate };
