// Code goes here!

//Use constraints
function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}


const mergeObj = merge<{name: string, hobbies: string[]}, {age: number}>({name: 'Bao', hobbies: ['play','game']}, {age:26});
console.log(mergeObj.name)
console.log(mergeObj.hobbies)


// ============= another generic function =============================
interface Lengthy {
    length: number;
  }
  
  function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'Got no value.';
    if (element.length === 1) {
      descriptionText = 'Got 1 element.';
    } else if (element.length > 1) {
      descriptionText = 'Got ' + element.length + ' elements.';
    }
    return [element, descriptionText];
  }
  
  console.log(countAndDescribe(['Sports', 'Cooking']));
//   console.log(countAndDescribe(10));