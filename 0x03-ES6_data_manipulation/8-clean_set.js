/* eslint-disable */
export default function cleanSet(set, startString) {
  if (!set || !startString) return '';
  let ans = [];
  set.forEach((value) => {
    if (typeof value === 'string' && value.startsWith(startString)) {
      ans.push(value.slice(startString.length));
    }
  });
  return ans.join('-');
}