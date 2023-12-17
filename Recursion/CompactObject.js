let A = {
  key1: {
    key2: {
      key3: 4,
    },
  },
  title: {
    first: {
      second: {
        main: 'Hero',
      },
    },
  },
  details: {
    phone: {
      office: {
        desk: '04033244',
      },
    },
    ssn: {
      Id: 123243,
    },
  },
  tag: 'Exmaple',
};

// console.log(A);

function convertToCompactObject(obj, parentKey = '') {
  let result = {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      let currentKey = parentKey ? `${parentKey}.${key}` : key;

      if (typeof obj[key] === 'object' && obj[key] !== null) {
        // Recursively process nested objects
        Object.assign(result, convertToCompactObject(obj[key], currentKey));
      } else {
        // Build compact object with dot notation
        result[currentKey] = obj[key];
      }
    }
  }

  return result;
}

// Example usage:
const nestedObject = { a: { b: { c: 4 } } };
const compactObject = convertToCompactObject(A);

console.log(compactObject);
for (let key in compactObject) {
  console.log(key);
}
