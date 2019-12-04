console.log("hello Koders")
var word = "perros"
var wordSingular = word[0] + word[1] + word[2] + word [3] + word[4]
console.log (wordSingular)


var number = 50
if (number >=0 && number<=100 && number % 10 === 0){
    console.log("Esta entre el rango de 0 y 100, es multiplo de 10")

}



var str = "Apple, Banana, Kiwi";
var res = str.slice(7,13);

/** Ejercicio 3 en clase*/
var Palabra = "mandados"
if (Palabra.length % 2 === 0) {
    if(Palabra.length < 10 ){
        console.log("esta palabra tiene la longitud de 0 a 10 caracteres")
    } else if (Palabra.length < 15) {
        console.log ("esta palabra tiene la longitud de 10 a 15 caracteres")

    }
}