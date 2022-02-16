const trupleGenerator = (numBars) => {
  var res = [];
  var rand = () => Math.floor(Math.random() * 255);
  for (var i = 0; i < numBars; i++) {
    res.push([rand(), rand(), rand(), Math.random() * 100]);
  }
  return res;
};

const heapAnimate = (arr, criteria) => {
  if (arr.length <= 1) return arr;
  const animations = [];
  heapSort(arr, animations, criteria);
  return animations;
};

const heapSort = (arr, animations, criteria) => {
  const n = arr.length;

  for (let i = Math.floor((n - 1) / 2); i >= 0; i--) {
    heapify(arr, n, i, animations, criteria);
  }

  for (let i = n - 1; i > 0; i--) {
    animations.push([0, arr[i]]);
    animations.push([i, arr[0]]);
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(arr, i, 0, animations, criteria);
  }
};

const heapify = (arr, n, i, animations, criteria) => {
  var largest = i;
  var l = 2 * i + 1;
  var r = 2 * i + 2;

  if (l < n && arr[l][criteria] > arr[i][criteria]) {
    largest = l;
  }
  if (r < n && arr[r][criteria] > arr[largest][criteria]) {
    largest = r;
  }
  if (largest !== i) {
    animations.push([i, arr[largest]]);
    animations.push([largest, arr[i]]);
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, n, largest, animations, criteria);
  }
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

export { trupleGenerator, mergeAnimate, quickAnimate, heapAnimate };
