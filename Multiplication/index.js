console.log("test")

let num1 = "52025610"
let num2 = "98769575"

let arr = []

console.log(num2.length)
for (let i = num2.length-1; i > -1; i--){
    arr.push(num2[i] * num1)
}

let arr2 = []

for (let i = 0; i < arr.length; i++){
    arr2.push(arr[i]*(Math.pow(10, i)))
}

let total = 0

for (let i = 0; i < arr2.length; i++){
    total = total + arr2[i]
}


console.log(arr)
console.log(arr2)
console.log(total)
