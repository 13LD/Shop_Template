/**
 * Created by lysogordima on 27.09.16.
 */
function totalCart(total) {
    var context = {
        total: total
    };
    var el = document.createElement('div');
    var template = document.getElementById('total');
    el.innerHTML = template.textContent.replace(/%\((.+?)\)s/gm, function(str, p1) {
        if (context.hasOwnProperty(p1)) {
            return context[p1];
        }
        return str;
    });
    var content = document.getElementById('total-header');

    content.innerHTML = '';
    content.appendChild(el);
}