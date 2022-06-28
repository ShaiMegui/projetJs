



let cardsInCart = [];
let wishInCart = [];

if (localStorage.getItem("cardstInCart")) {
    cardsInCart = JSON.parse(localStorage.getItem("cardsInCart"));

    cardsInCart.forEach(function (card) {
        let currentProduct = allProducts.find(function (item) {
             card.sku == item.sku;
        });
        let miniCartItems = document.querySelector(".mini-cart-items");
            miniCartItems.append(createMiniCartItem(currentProduct, card.quantity));
    })
}


let cards = document.querySelector(".main")

if (cards != null) {
    allProducts.forEach(element => {
        cards.append(createCardsElement(element));
    });
}
