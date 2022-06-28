// let cardsInCart = [];


// if (localStorage.getItem("cardstInCart")) {
//     cardsInCart = JSON.parse(localStorage.getItem("cardsInCart"));

//     cardsInCart.forEach(function (card) {
//         let currentProduct = allProducts.find(function (item) {
//             return card.sku == item.sku;
//         });
//         let miniCartItems = document.querySelector(".mini-cart-items");
//         miniCartItems.append(createMiniCartItem(currentProduct, card.quantity));
//     })
// }

// console.log(panier);

// if (localStorage.getItem("cardstInCart")) {
//     let panier = JSON.parse(localStorage.getItem("cardsInCart"));

//     panier.forEach(function (card) {
//         let currentProduct = allProducts.find(function (item) {
//             card.sku == item.sku;
//         });
//         let miniCartItems = document.querySelector(".mini-cart-items");
//         miniCartItems.append(createMiniCartItem(currentProduct, card.quantity));
//     })
// }


function createMiniCartItem(panier, quantity) {

    let miniCartItem = document.createElement("div");
    miniCartItem.classList.add("mini-cart-items");
    miniCartItem.querySelector(".image");


    miniCartItem.innerHTML =
        `<div class="image">
            <img src="${panier.image}" alt="";>
        </div>
        <div class="details">
            Title: ${panier.title}
            Price: ${panier.price}
            Quantity : <span class="quantity-${panier.sku}">${quantity}</span>
            <button data-sku="${panier.sku}" class="btn-Remove">Remove</button>
        </div>`;


    miniCartItem.querySelector(".btn-Remove").addEventListener("click", RemoveMiniCart);


    return miniCartItem;
}

if (localStorage.getItem("cardstInCart")) {
    let panier = JSON.parse(localStorage.getItem("cardsInCart"));

    panier.forEach(function (card) {
        let currentProduct = panier.find(function (item) {
            card.sku == item.sku;
        });
        let miniCartItems = document.querySelector(".mini-cart-items");
        miniCartItems.append(createMiniCartItem(currentProduct, card.quantity));
    })
}



let cards = document.querySelector(".main")
let cardsInCart = localStorage.getItem("cardsInCart");
let panier = JSON.parse(cardsInCart);

if (cards != null) {
    panier.forEach(element => {
        cards.append(createMiniCartItem(element));
    });
}



