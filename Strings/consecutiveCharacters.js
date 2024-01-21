function removeConsecutiveDuplicates(A, B) {
  const n = A.length;
  let result = '';

  let idx = 0;
  let currLen = 1;
  while (idx < n) {
    let currString = A[idx];
    let nextChar = (idx === n - 1) ? '$' : A[idx + 1];

    while (A[idx] === nextChar) {
      currLen++;
      currString += A[idx];
      idx++;
      nextChar = idx === n - 1 ? '$' : A[idx + 1];
    }

    if (currLen !== B) {
      result += currString;
    }

    currLen = 1;
    currString = '';
    idx++;
  }

  return result;
}

// Example usage:
const inputString = 'aabbbcd';
const consecutiveLength = 100;
const result = removeConsecutiveDuplicates(inputString, consecutiveLength);
console.log(result); // Output: "aacd"

A =
  'lfoajnippckfilmebjffjdacopakmhfbfagnoekojnaieolalehfdonhlpomflkcjhbkmknnciaehfbgliklmjhfmpmjpgcghcnkjfgcmbhcinljcncbmmhedboffhnnogmhfehdcfhlidohlffppmjccafimiigngfbmcdphcdgghcalijlnhmhpkoaogodmpoofpfdbdnakhkdkmekioemmbnaifbjddcgeheoehfefcjjnjmhdpfapgeifgdelgnghkhcjlfbajbldlnnpciofpplkididngalglikambfgpbojioamkaflmecccbpffchepgahbfhnfmnhlkhkfllniacehdmpfdklokdphjgmcgpfaajlkieojhffipeegjodcmfcbnmgfpenhfembheleahdgfiplbobifeimamepfeclbokjpklanpaanaiidmnaiploieogbpdfnokpjflknhjfcbgcfojiokjfohmkjdbmcceanjanhbcdocglbkgjaefejaejimpkidejkihjiedhghmoilofcijfoabnkcbjjbbahlpnigppkoniccjlclhgnpfaobmkfclijllafie';
B = 1;
// console.log(removeConsecutiveDuplicates(A, B));
