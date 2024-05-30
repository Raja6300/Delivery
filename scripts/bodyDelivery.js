const products=[
    {
        image:"image/dosa.png",
        name:"DOSA",
        rating:{
            stars:4.5,
            count:101
        },
        price:50

    },{
       image:"image/biryani.png",
       name:"BIRYANI",
       rating:{
        stars:3.5,
        count:200
       } ,
       price:180
    },{
        image:"image/meals.png",
        name:"MEALS",
        rating:{
            stars:4.0,
            count:150
        },
        price:80
    },
    {
        image:"image/uggani.png",
        name:"UGGANI",
        rating:{
            stars:3.5,
            count:128
        },
        price:50
    },
    {
        image:"image/milk.png",
        name:"MILK",
        rating:{
            stars:4.0,
            count:100
        },
        price:40
    },{
        image:"image/puri.png",
        name:"PURI",
        rating:{
            stars:4.0,
            count:106
        },
        price:50
    }
];
let productHTML='';
products.forEach((product)=>{
     productHTML +=`
    <div class="products-container">
    <div class="product-image-container">
        <img src="${product.image}" class="product-image">
    </div>
    <div class="product-name">
       ${product.name}
    </div>
    <div class="product-rating-container">
        <img class="product-rating-stars"
        src="ratings/rating-${product.rating.stars * 10}.png">
        <div class="product-rating-count">
           ${product.rating.count}
        </div>
    </div>
    <div class="product-price">
        Price:${product.price} Rupees
    </div>
    <div class="product-quantity-container" >
        <select class="js-quantity-selector-${product.name}    ">

            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
        </select>
    </div>
    <div class="product-spacer"></div>
    <div class="added-to-cart js-added-to-cart-${product.name}">
        <img src="image/checkmark.png">
        Added
    </div>
    <button class="add-to-cart-button js-add-to-cart" data-product-name="${product.name}">Add to Cart</button>
</div>`;
});
document.querySelector('.js-products-grid').innerHTML=productHTML;
const addedMessageTimeouts={};

document.querySelectorAll('.js-add-to-cart').forEach((button)=>{
    button.addEventListener('click',()=>{
   const productName=button.dataset.productName;

   let matchingItem;
   cart.forEach((item)=>{
 if(productName === item.productName){
 matchingItem=item;
 }
   });
   const quantitySelector = document.querySelector(
    `.js-quantity-selector-${productName}`
  );

  const quantity = Number(quantitySelector.value);

   if(matchingItem){
   
    matchingItem.quantity+=quantity;
   }else{
cart.push({
    productName:productName,
  
    quantity:quantity
    
});
   }
let cartQunatity=0;

cart.forEach((item)=>{
    cartQunatity +=item.quantity;
});

document.querySelector('.js-button-quantity').innerHTML=cartQunatity;

const addedMessage = document.querySelector(
    `.js-added-to-cart-${productName}`
  );
  addedMessage.classList.add('added-to-cart-visible');

  const previousTimeOutName=addedMessageTimeouts[productName];

  if(previousTimeOutName){
    clearTimeout(previousTimeOutName);
  }
  const timeoutName=setTimeout(()=>{
    addedMessage.classList.remove('.added-to-cart-visible');
  }, 2000);
  addedMessageTimeouts[productName] = timeoutName;

console.log(productName);
console.log(cart);
    });

});


  
