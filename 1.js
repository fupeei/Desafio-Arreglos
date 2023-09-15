function siempreHambriento(arr) {
    let comida = 0
    for( let i = 0; i <= arr.length; i++){
        if(arr[i] === "comida"){
        comida += 1; console.log("Delicioso")
        {
            
        }
        }
    }
    if(comida === 0){
        console.log("Tengo hambre!")
    }
}


siempreHambriento([3.14, "comida", "pastel", true, "comida"]);
  // esto debería mostrar "delicioso, "delicioso"
siempreHambriento([4, 1, 5, 7, 2]);