/**
 * Created by lysogordima on 27.09.16.
 */
function openPopup(popupId) {
    var popup = document.getElementById(popupId);
    if (Cart.count() == 0) return false;
    popup.style.display = 'block';
}

function closePopup(popupId) {
    var popup = document.getElementById(popupId);
    popup.style.display = 'none';
}