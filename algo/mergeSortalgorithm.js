const  MergeSort = (arr, lowerBound, upperBound) => {
    if (lowerBound < upperBound) {
        const mid = Math.floor(( lowerBound + upperBound)/2);
        MergeSort(arr, lowerBound, mid);
        MergeSort(arr, mid + 1, upperBound);
        Merge(arr, lowerBound, mid, upperBound);
    }

    return;
}


const Merge = (arr, lb, mid, ub) => {
    let b = Array(arr.length).fill(0);
    let k = lb, i = lb, j = mid + 1;

    while (i <= mid && j <= ub) {
        if (arr[i] < arr[j]) {
            b[k] = arr[i];
            i++;
        } else {
            b[k] = arr[j];
            j++;
        }
        k++;
    }

    while (i <= mid ) {
        b[k] = arr[i];
        i++;
        k++;
    }

    while (j <= ub ) {
        b[k] = arr[j];
        j++;
        k++;
    }
    console.log(b);
    for (let l = lb; l <= ub; l++) {
        arr[l] = b[l];
    }
}


const mergeSortAlgo = (arr) =>{
    MergeSort(arr, 0, arr.length - 1);
 }
 
 let arr = [4,2,5,1,6,3,12, 34, 534, 524,145, 9582, 58292,0];
 console.log(mergeSortAlgo(arr));
 console.log(arr);