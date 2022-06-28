

if (localStorage.getItem("wishInCart")) {
    let wishlist = JSON.parse(localStorage.getItem("wishInCart"));

        wishlist.forEach(function (card) {
        let currentProduct = wishlist.find(function (item) {
            card.sku == item.sku;
        });
        let wishlistPage = document.querySelector(".mini-cart-items");
            wishlistPage.append(createWishlistElement(currentProduct));
    })
}

let cards = document.querySelector('.main');
let wishlist = JSON.parse(localStorage.getItem("wishInCart"));

if (cards != null) {
    wishlist.forEach(element => {
        cards.append(createWishlistElement(element));
    });
}