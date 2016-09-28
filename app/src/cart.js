/**
 * Created by lysogordima on 27.09.16.
 */

var Cart = {
    _items: {},
    _subscribers: [],

    add: function(product, qty) {
        if (Cart._items[product.id]) {
            Cart._items[product.id].qty += qty;
        } else {
            var prodInfo = JSON.parse(JSON.stringify(product));
            prodInfo.qty = qty;
            Cart._items[product.id] = prodInfo;
        }
        Cart._subscribers.forEach(function(func) { func(Cart); });
    },
    remove: function(product_id) {
        delete Cart._items[product_id];
        Cart._subscribers.forEach(function(func) { func(Cart); });
    },
    count: function() {
        return Object.keys(Cart._items).reduce(function(i1, i2) {
            return i1 + Cart._items[i2].qty;
        }, 0);
    },
    total: function() {
        return Object.keys(Cart._items).reduce(function(i1, i2) {
            return i1 + Cart._items[i2].qty * Cart._items[i2].price;
        }, 0);
    },
    getItems: function () {
        return Object.keys(Cart._items).map(function(productId) {
            return Cart._items[productId];
        });
    },
    subscribe: function(renderer) {
        Cart._subscribers.push(renderer);
    }
};


function removeItem(element) {
    var product_id = element.hash.substring(1);
    Cart.remove(product_id);
}


Cart.subscribe(function(cart) {
    renderCart(cart.getItems());
    if (cart.count() == 0) {
        closePopup('Wrapp');
    }
});

Cart.subscribe(function (cart) {
    renderHeaderCart(cart.count());

})

Cart.subscribe(function (cart) {
    totalCart(cart.total());
})