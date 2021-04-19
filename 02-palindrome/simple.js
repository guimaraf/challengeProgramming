//Palindromic numbers 
//Example 2: Given the starting number 3000 and ending number 3010, the result would be: 3003.

//Example for 4 characters

const initialNumber = 3551
const arString = initialNumber.toString().split('')
let reserv = ''

for (let i = 0; i < 100; i++){
    reserv = i < 10 ? '0' + i.toString() : i.toString()
    //if(arString.toString().length > )

    if(reserv == arString[1] + arString[0]){
        console.log(arString[0] + arString[1] + reserv)
        break
    }
}