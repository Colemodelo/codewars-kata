// Write a function that returns the total surface area and volume of a box as an array: [area, volume]
const getSize = (w, h, d) => {
  let a = 2 * h * w + 2 * d * h + 2 * w * d;
  let v =  w * h * d;
  return [a, v]
}
