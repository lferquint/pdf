function doProducts(products){
    let newText;

    for(let i = 0; i < products.length; i++){
        if(products.length == 1){
            newText = products[0];
            return newText;
        
        }else if(i === 0){
            newText = products[0];
        }
        else if(products[products.length - 1] != products[i]){
            newText = newText + ", " + products[i];
        }else{
            newText = newText + " y " + products[i];
            newText = newText.toLowerCase();
            console.log(newText)

            return newText;
        }
    }
}
export default doProducts;