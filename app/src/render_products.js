/**
 * Created by lysogordima on 27.09.16.
 */

function render(products) {
    var frag = document.createDocumentFragment();
    var template = document.getElementById('product-template');
    products.forEach(function (product) {
        var el = document.createElement('div');
        el.className = 'col col-3 product-item';
        var context = JSON.parse(JSON.stringify(product));
        context.productInfo = JSON.stringify(product);
        el.innerHTML = template.textContent.replace(/%\((.+?)\)s/gm, function(str, p1) {
            if (context.hasOwnProperty(p1)) {
                return context[p1];
            }
            return str;
        });
        frag.appendChild(el);
    });
    var content = document.getElementById('products-list');

    content.innerHTML = '';
    content.appendChild(frag);
}