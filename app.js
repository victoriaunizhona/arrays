let rectanglesList = [];
let perimeterList = [];
let categoryList = {
  rectangle: [],
  quadrangle: [],
  square: [],
}

for (let i = 1; i <= 100; i++) {
  let arrObj = createObj();
  let perimeter = calPerimeter(arrObj);
  rectanglesList.push(arrObj);
  perimeterList.push({ [arrObj]: perimeter });
  categorizeObj(arrObj);

};


/**
 * Categorize as rectangle, quadrangle, square
 */
function categorizeObj(obj) {

  if (obj.top === obj.bottom && obj.top === obj.left && obj.top === obj.right) {
    categoryList.square.push(obj);
  }
  else if (obj.top === obj.bottom && obj.right === obj.left) {
    categoryList.rectangle.push(obj);
  }
  else categoryList.quadrangle.push(obj);
}


/**
 * Create object items 
 */
function createObj() {
  return { top: randomNum(), bottom: randomNum(), right: randomNum(), left: randomNum() }
}

/**
 * Calculate perimeter
 */
function calPerimeter(obj) {
  return Object.values(obj).reduce((a, b) => a + b, 0)
}


/**
 * Returns a random number between 1 and 10
 */
function randomNum() {
  return Math.floor((Math.random() * 10) + 1)
}
