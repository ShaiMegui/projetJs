


const cardsInCart = JSON.parse(localStorage.getItem('cardsInCart'));

function render() {
    if (cardsInCart) {

        cardsInCart.forEach(function (card) {
            let currentProduct = allProducts.find(function (item) {
                card.sku == item.sku;
            });

            let miniCartItems = document.querySelector(".mini-cart-items");
            console.log(miniCartItems)
            miniCartItems.append(createMiniCartItem(currentProduct, card.quantity));
        });
    }



    let card = document.querySelector(".main")
    if (!card) {
        allProducts.forEach(element => {
            card.append(createCardsElement(element));
        });
    }

}





