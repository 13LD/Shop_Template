/**
 * Created by lysogordima on 27.09.16.
 */

function renderCart(products) {
    var frag = document.createDocumentFragment();
    var template = document.getElementById('cart-item-template');
    products.forEach(function (product) {
        var el = document.createElement('tr');
        el.innerHTML = template.textContent.replace(/%\((.+?)\)s/gm, function(str, p1) {
            if (product.hasOwnProperty(p1)) {
                return product[p1];
            }
            return str;
        });
        frag.appendChild(el)
    });
    var content = document.getElementById('cart-list');

    var thead = [
        '<tr>',
        '<th>Product</th>',
        '<th>Quantity</th>',
        '<th>Price</th>',
        '<th></th>',
        '</tr>',
    ].join('');
    content.innerHTML = thead;
    content.appendChild(frag);
}