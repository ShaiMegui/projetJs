
let createNav = () => {
    let navPrincipal = document.querySelector(".search-nav");
    navPrincipal.innerHTML = ` <nav class="search-nav">
        <div class="logo">
            <h1><a href="./index.html">ShmerdouyStockx</a> </h1>
        </div>
        <div class="onglets">
            <input type="text" class="input-filter" placeholder="search what you want">
             <button class="btn-filter">Search</button>
            </form>
            <a href="/wishList.html"><i class="far fa-heart"></i></a>
            <a href="/cart.html"><i class="fas fa-shopping-cart"></i></a>

        </div>
    </nav>`;
  
}

createNav();




let createNav2 = () => {
    let navCat = document.querySelector(".nav-categorie");
    navCat.innerHTML = `<nav class="nav-categorie">
        <a href="/product.html" class="categorie">Collection</a>
        <a href="#" class="categorie">Sneakers</a>
        <a href="#" class="categorie">Apparels</a>
        <a href="a" class="categorie">Electronics</a>
    </nav>`;
}

createNav2();


let createFooter = () => {
    let footer = document.querySelector(".footer-basic");
    footer.innerHTML = `    <div class="footer-basic">
        <footer>
            <div class="social"><a href="#"><i class="fab fa-instagram"></i></a><a href="#"><i
                        class="fab fa-snapchat"></i></a><a href="#"><i class="fab fa-twitter"></i></a><a href="#"><i
                        class="fab fa-facebook"></i></a></div>
            <ul class="list-inline">
                <li class="list-inline-item"><a href="#">Home</a></li>
                <li class="list-inline-item"><a href="#">Services</a></li>
                <li class="list-inline-item"><a href="#">About</a></li>
                <li class="list-inline-item"><a href="#">Terms</a></li>
                <li class="list-inline-item"><a href="#">Privacy Policy</a></li>
            </ul>
            <p class="copyright">ShmerdouyStockx © 2022</p>
        </footer>
    </div>
`;
}
createFooter();



