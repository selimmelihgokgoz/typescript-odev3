function mergeArrays<T, U>(arr1: T[], arr2: U[]): (T | U)[] {
  return [...arr1, ...arr2];
}

const arr1 = [1, 2, 3];
const arr2 = ['a', 'b', 'c'];
const mergedArray = mergeArrays(arr1, arr2);

console.log(mergedArray);
