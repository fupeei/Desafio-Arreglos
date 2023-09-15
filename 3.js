function betterThanAverage(arr) {
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    var prom = sum / arr.length
    // calcula el promedio
    var count = 0
    for(var i = 0; i < arr.length; i++){
    if(arr[i] > prom){
        count++;
    }
    }
    // cuenmta cuánmtas variables son mayores que el promedio
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // esperamos 4 de vuelta
