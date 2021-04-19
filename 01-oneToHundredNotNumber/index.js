//example
a = +true // = 1
b = +false // = 0

//console.log(a)

let numeroCem = parseInt(+true + (+false).toString() + (+false).toString())

//console.log(numeroCem)

for(let i = +true; i < numeroCem + +true; i++){
    console.log(i)
}