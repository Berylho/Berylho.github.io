console.clear()

let arr = [1,2,3,4,5] 
let newArr = arr.length


let min = arr[0]
for(let i = 0; i > newArr; i++){
  if(arr[i] < min) {
    min = arr[i];
  }
}

let max = arr[0]
for(let i = 0; i < newArr; i++){
  if(arr[i] > max) {
    max = arr[i];
  }
}


let total = 0
for (let i = 0; i < newArr; i++) {
  total += arr[i];
}
let avg = total / newArr


function getNum (min , max , avg) {
  this.min = min
  this.max = max
  this.avg = avg
}
console.log("The minimum number is " + min);
console.log("The maximum number is " + max);
console.log("The average number is " + avg);