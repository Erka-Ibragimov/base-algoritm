let obj1 = {
  foo: "foo",
  bar: "bar",
};
let obj2 = {
  bar: "foo",
  some: "some",
};

function sameKey(obj1, obj2) {
  for (let key in obj2) {
    if (obj1.hasOwnProperty(key)) {
      obj1[key] = obj2[key];
    }
  }
  return obj1;
}
const result = sameKey(obj1, obj2);
console.log(result);

////////////////////////////////////////////////////
const arr = [6.1, 4.2, 6.3];
const func = Math.floor;

const group = (arr, func) => {
  let result = {};
  arr.forEach((item) => {
    let mathFloor = func(item);
    if (!result.hasOwnProperty(mathFloor)) {
      result[mathFloor] = [item];
    } else {
      result[mathFloor].push(item);
    }
  });
  return result;
};
console.log(group(arr, func));
