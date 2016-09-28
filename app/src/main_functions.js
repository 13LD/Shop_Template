/**
 * Created by lysogordima on 27.09.16.
 */

function incProduct(element) {
    var qty = element.parentNode.querySelector('.qty');
    qty.value = parseInt(qty.value) + 1;
};
function decProduct(element) {
    var qty = element.parentNode.querySelector('.qty');
    qty.value = parseInt(qty.value) - 1;
    if (qty.value < 0){
        qty.value = 0;
    }
};

function buyItem(productInfo, qtyEl) {
    var qty = parseInt(qtyEl.value) || 0;
    Cart.add(productInfo, qty);
    qtyEl.value = 0;
}

function loadProducts() {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'http://localhost:8081/products.json', true);
    xhr.onreadystatechange = function (e) {
        if(this.readyState == 4 && this.status < 400){
            window.products =  JSON.parse(xhr.responseText);
            render(window.products);
        }
    };
    xhr.send();
}

function searchByName(q) {
    if (q.length == 0) {
        render(window.products);
        return false;
    }
    if (q.length < 2) return false;
    var products = window.products.filter(function (product) {
        return product.display_name.indexOf(q) > -1;
    });
    render(products);
}
function sortByPrice() {
    return window.products.concat([]).sort(function (a, b) {
        return a.price - b.price;
    });
}

function  sortByName() {
    return window.products.concat([]).sort(function (a, b) {
        return a.display_name.toLowerCase().localeCompare(b.display_name.toLowerCase());
    });
}

function sortBy(by) {
    var sorters = {
        'price': sortByPrice,
        'name': sortByName
    };
    if (sorters[by]) {
        var products = sorters[by]();
        render(products);
    }
}

loadProducts();

function purchase(popupId) {
    var popup = document.getElementById(popupId);
    popup.style.display = 'none';
    renderHeaderCart(0);
    loadProducts();
}