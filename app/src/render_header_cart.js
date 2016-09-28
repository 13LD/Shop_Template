/**
 * Created by lysogordima on 27.09.16.
 */

function renderHeaderCart(count) {
    var context = {
        qty: count
    };
    var el = document.createElement('div');
    var template = document.getElementById('cart-items');
    el.innerHTML = template.textContent.replace(/%\((.+?)\)s/gm, function(str, p1) {
        if (context.hasOwnProperty(p1)) {
            return context[p1];
        }
        return str;
    });
    var content = document.getElementById('cart-header');

    content.innerHTML = '';
    content.appendChild(el);
}
renderHeaderCart(0);