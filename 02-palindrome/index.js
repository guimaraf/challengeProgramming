//This new method will check the palíndrome of any number that has been entered, regardless of the number of characters

let verifySize = (numParam) => {
    let numConvert = numParam.toString()
    let sizeCharacter = numConvert.length
    let numArray = numConvert.split('')
    let numResult = ''
    let numArrayReverse = []
    
    if(sizeCharacter >= 1){
        if(sizeCharacter % 2 == 0){
            for(let i = 0; i < sizeCharacter / 2; i++){
                numResult+= numArray[i]
            }

            numArrayReverse = numResult.split('').reverse()

            for(let i = 0; i < numArrayReverse.length; i++) {
                numResult+= numArrayReverse[i]
            }

            console.log('The palindromic number of ' + numParam + ' is ' + numResult)
        }
        else{
            for(let i = 0; i < Math.round(sizeCharacter / 2); i++){
                numResult+= numArray[i]
            }
            numArrayReverse = numResult.split('').reverse()
            numArrayReverse.splice(0,1)

            for(let i = 0; i < numArrayReverse.length; i++){
                numResult+= numArrayReverse[i]
            }

            console.log('The palindromic number of ' + numParam + ' is ' + numResult)
        }
    }
}

verifySize(12345555555)