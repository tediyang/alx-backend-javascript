export default function appendToEachArrayValue(array, appendString) {
  const ans = [];
  for (const val of array) {
    ans.push(appendString + val);
  }

  return ans;
}
