export const double = a => a * 2

export const rectangleArea = (width, height) => width * height

export const hello = name => `Hello, ${name}`

export const isMature = age => {
    if (age >= 18) {
        return true
    } 

    return false
}

export const iteratesOne = array => {
    if (array.length === 0 || array[0] === "") {
      return [null];
    }
  
    return array.map(item => item + 1);
  };