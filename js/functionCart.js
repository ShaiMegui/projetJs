
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


function RemoveMiniCart(event) {
    let sku = event.target.dataset.sku;
    event.target.closest(".mini-cart-items").remove();
    localStorage.clear(event.target.dataset.sku);
    panier.findIndex(function (item) {
        return item.sku == sku;
    });
}

