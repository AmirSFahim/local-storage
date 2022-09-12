const getInputValue = id=>{
    const inputField = document.getElementById(id);
    const inputValue = inputField.value ;
    const quantityfield = document.getElementById(id);
    const quantityValue = quantityfield.value ;
    inputField.value='';
    quantityfield.value ='';
    return inputValue, quantityValue;
}

const addProduct = ()=>{
    const product= getInputValue('product-input-field');
    const quantity = getInputValue('product-quantity-field');
    console.log(product,quantity);
    addproductToDisplay(product,quantity);
    saveItemLocalStorage(product,quantity);
}

const getshoppingStorage =()=>{ 
    let saveCart = localStorage.getItem('csrt')
    let cart ={};
    if(saveCart){
        cart = JSON.parse(saveCart);
        
    }
return cart;
}

const saveItemLocalStorage =(product,quantity)=>{
    const cart =  getshoppingStorage();
    cart[product] = quantity;
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified)

}

const addproductToDisplay = (product,quantity)=>{
    const container = document.getElementById('product-container');
    const li = document.createElement('li')
    li.innerText = ` ${product} :${quantity}`
   
    
container.appendChild(li)
}


const displayStorageproduct = ()=>{
    const cart = getshoppingStorage();
    for(const product in cart){
        const quantity = cart[product]
        console.log(product,quantity)
        addproductToDisplay(product,quantity)
    }
}
// addProduct()