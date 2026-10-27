
function Product(quantity) {
    try {
        if(quantity>0){
            throw new Error("it mus not be less than 5")
        }
    } catch (error) {
        console.log(error.name+":"+error.message);
        
    }
}

console.log(
 Product(-1));