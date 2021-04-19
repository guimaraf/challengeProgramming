//Palindromic numbers 
//Números palindrômicos
//Exemplo 2: Dado o numero inicial 3000 e número final 3010, o resultado seria: 3003.

//este novo método, vai verificar o palíndrome de qualquer número que foi inserido, não importando a quantidade de caractes
let verifySize = (numParam) => {
    let numConvert = numParam.toString()
    //console.log(numConvert)
    let sizeCharacter = numConvert.length
    //console.log(sizeCharacter)
    let numArray = numConvert.split('')
    //console.log(numArray)
    let numResult = ''

    let numArrayReverse = []
    
    if(sizeCharacter >= 1){
        if(sizeCharacter % 2 == 0){
            //se a quantidade de charactere for par
            //console.log('teste') 
            for(let i = 0; i < sizeCharacter / 2; i++){
                numResult+= numArray[i]
            }

            numArrayReverse = numResult.split('').reverse()

            //console.log(numResult)
            //console.log(numArrayReverse)

            for(let i = 0; i < numArrayReverse.length; i++) {
                numResult+= numArrayReverse[i]
            }

            console.log('The palindromic number of ' + numParam + ' is ' + numResult)
        }
        else{
            //se número tem quantidade ímpar de caracteres
            for(let i = 0; i < Math.round(sizeCharacter / 2); i++){
                numResult+= numArray[i]
            }
            console.log(numResult)
            console.log(numResult.length)

            numArrayReverse = numResult.split('').reverse()
            console.log(numArrayReverse)
            numArrayReverse.splice(0,1)
            console.log(numArrayReverse)
            console.log(numArrayReverse.length)

            for(let i = 0; i < numArrayReverse.length; i++){
                numResult+= numArrayReverse[i]
            }

            console.log('The palindromic number of ' + numParam + ' is ' + numResult)
        }
    }
}

verifySize(12345555555)