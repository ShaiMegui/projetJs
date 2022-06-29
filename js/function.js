

function createCardsElement(card) {
    let { sku, image, title, price, sale, instock } = card;


    let cardElement = document.createElement("div");
    cardElement.classList.add("cards");
    cardElement.innerHTML = `
            <div class="card">
            <div class="image">
                <img src="${image}" alt="">
            </div>
                <div class="card-header">
                    <h4 class="title">${title}</h4>
                    <span class="price">${price} $</span>
                </div>
                <div class="card-body">
                    <input type="text" placeholder="quantity" class="quantity">   
                    <p><i class="far fa-heart" data-sku="${sku}"></i></p>
                    <button data-sku="${sku}" data-sale="${sale}" data-in-stock="${instock}" class="add-to-cart">Add to cart</button>
                </div>
            </div>`;

    cardElement.querySelector(".add-to-cart").addEventListener("click", onClickAddToCart);
    cardElement.querySelector(".fa-heart").addEventListener("click", onClickAddToWishlist); 
    cardElement.querySelector(".card-header").addEventListener("click", () => {
        cardElement.classList.toggle("selectionProduct");
        let cardImg = cardElement.querySelector('.image');
        cardImg.classList.toggle("selectionImage");
    })
    
    return cardElement;
}






function createMiniCartItem(card, quantity) {
    // cardsInCart = JSON.parse(localStorage.getItem("cardsInCart"));
    let miniCartItem = document.createElement("div");
    miniCartItem.classList.add("mini-cart-items");

const detailQuantity = document.querySelector('.quantity')
const detailTitle = document.querySelector('.title')
    const detailPrice = document.querySelector('.price')
    
    // console.log(detailQuantity)
    // console.log(detailTitle)
    // console.log(detailPrice)

    // detailPrice.innerHTML = card.price
    // detailQuantity.innerHTML = card.quantity
    // detailTitle.innerHTML = card.title
    
    miniCartItem.innerHTML =
        `<div class="image">
            <img src="${card.image}" alt="" width="10px";>
        </div>
        <div class="details">
            Title: ${card.title}
            Price: ${card.price}
            Quantity : <span class="quantity-${card.sku}">${quantity}</span>
            <button data-sku="${card.sku}" class="btn-Remove">Remove</button>
        </div>`;


    miniCartItem.querySelector(".btn-Remove").addEventListener("click", RemoveMiniCart);

    console.log(card.title);

    return miniCartItem;
}




function onClickAddToCart(event) {
    let button = event.target;
    let card = button.closest(".card");
    let quantityInput = card.querySelector(".quantity");
    let quantity = quantityInput.value > 0 ? quantityInput.value : 1;
    let { sku } = button.dataset;
    let { image } = document.querySelector(".image");
    let currentProduct = allProducts.find(function (item) {
        return sku == item.sku
    });

    let miniCartItems = document.querySelector(".cards");
    let cartIndex = cardsInCart.findIndex(function (item) {
        return sku == item.sku
    });

    if (cartIndex == -1) {
        cardsInCart.push({ sku: sku, quantity: quantity, image : image });
        miniCartItems.addEventListener("click", createMiniCartItem(currentProduct, quantity));

    }
    else {
        let newQuantity = +quantity + +cardsInCart[cartIndex].quantity;
        cardsInCart[cartIndex].quantity = newQuantity;
        document.querySelector(`.quantity-${sku}`).innerHTML = newQuantity;
    }

    localStorage.setItem("cardsInCart", JSON.stringify(cardsInCart));
}



function RemoveMiniCart(event) {
    let sku = event.target.dataset.sku;
    event.target.closest(".mini-cart-items").remove();
    localStorage.clear(event.target.dataset.sku);
    panier.findIndex(function (item) {
        return item.sku == sku;
    });
}

// wishlist function



function onClickAddToWishlist(event) {
    let heart = document.querySelector(".card-body .fa-heart")
    heart.classList.toggle("wish-active");

    let wishButton = event.target;
    wishButton.closest(".card");


    let { sku } = wishButton.dataset;

    let wishProduct = allProducts.find(function (item) {
        return sku == item.sku;
    });

    let wishItems = document.querySelector(".cards");

    let wishIndex = wishInCart.findIndex(function (item) {
        return sku == item.sku;
    });

    if (wishIndex == -1) {
        wishInCart.push({ sku: sku });
        wishItems.addEventListener("click", createWishlistElement(wishProduct))
    }

    localStorage.setItem("wishInCart", JSON.stringify(wishInCart));
}
function removeWishlistElement(event) {
    let sku = event.target.dataset.sku;
    event.target.closest("wishlist-div").remove();
    localStorage.clear(event.target.dataset.sku);
    wishlist.findIndex(function (item) {
        return item.sku == sku;
    });
}


function createWishlistElement() {
    let wishlistElement = document.createElement("div");
    wishlistElement.classList.add("wishlist-div");

    wishlistElement.innerHTML = `
            <div class="wishlist-image">
                <img src="" alt="">
            </div>
            <div class="wishlist-details">
                <p class="wishlist-title">Air Jordan 1</p>
                <span class="wishlit-price">120$</span>
            </div>
            <button class="btn-remove" data-sku="">Remove Item</button>`;

    wishlistElement.querySelector(".btn-Remove").addEventListener("click", removeWishlistElement);

}


// allProducts.forEach(function (product) {

//     cardElement.append(createCardsElement(product));
// })




// allProducts.forEach(function (product) {
//     cardDiv.append(createCardsElement(product));
// })
// let btnFilter = document.querySelector(".btn-filter");


// btnFilter.addEventListener("click", function () {
//     let input = document.querySelector(".input-filter");
//     let title = input.value;
//     let card = document.querySelector(".main");

//     if (title == "") {
//         let cardElement = createCardsElement(card)
//         allProducts.forEach(product => cardDiv.append(cardElement));
//     } else {
//         let cardElement = createCardsElement(card)
//         let filteredArray = allProducts.filter(product => product.title == title);
//         filteredArray.forEach(product => cardDiv.append(cardElement));
//     }
// })


// MON FILTRE


function createFilterCard(card) {
    let { sku, image, title, price, sale, instock } = card;


    let cardElement = document.createElement("div");
    cardElement.classList.add("cards");

    cardElement.innerHTML = `
            <div class="card">
           <img src="${image}" alt="">
                <div class="card-header">
                    <h4 class="title">${title}</h4>
                    <span class="price">${price} $</span>
                </div>
                <div class="card-body">
                    <input type="text" placeholder="quantity" class="quantity">   
                    <p><i class="far fa-heart" data-sku="${sku}"></i></p>
                    <button data-sku="${sku}" data-sale="${sale}" data-in-stock="${instock}" class="add-to-cart">Add to cart</button>
                </div>
            </div>`;



    cardElement.querySelector(".add-to-cart").addEventListener("click", onClickAddToCart);
    cardElement.querySelector(".fa-heart").addEventListener("click", onClickAddToWishlist);
    cardElement.querySelector(".card-header").addEventListener("click", () => {
        cardElement.classList.toggle("selectionProduct");
        let cardImg = cardElement.querySelector('.image');
        cardImg.classList.toggle("selectionImage");
    })

    return cardElement;
}


let productDiv = document.querySelector(".main")


let filterButton = document.querySelector(".btn-filter");
let filterInput = document.querySelector(".input-filter");

window.addEventListener('onload', (() => {
    


    filterButton.addEventListener("click", () => {
        let filterInput = document.querySelector(".input-filter");
        let title = filterInput.value;
    
        if (title == "") {
            productDiv.innerHTML = "";
            let cards = document.querySelector(".main")
            if (cards != null) {
                allProducts.forEach(element => {
                    cards.append(createCardsElement(element));
                });
            }
        }
        else {
            productDiv.innerHTML = "";
            let filteredArrayCategory = allProducts.filter(item => item.category == title);
            filteredArrayCategory.forEach(item => productDiv.append(createFilterCard(item)));
            let filteredArrayTitle = allProducts.filter(item => item.title == title);
            filteredArrayTitle.forEach(item => productDiv.append(createFilterCard(item)));
            let filteredArrayColor = allProducts.filter(item => item.color == title);
            filteredArrayColor.forEach(item => productDiv.append(createFilterCard(item)));
    
    
        }
    
    });
}))








