

document.querySelector("#cart-info").addEventListener("click",opener);


function opener(){
    const cart=document.querySelector('#cart');
    cart.classList.toggle("show-cart");
    
}