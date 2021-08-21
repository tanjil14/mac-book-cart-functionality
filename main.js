//additional storage cost function
function additionalCost(extraCost, id) {
    let base = 0;
    base += extraCost;
    document.getElementById(id + '-price').innerText = base;
}
//get all input value
function getPrice(id) {
    const priceText = document.getElementById(id + '-price').innerText;
    const price = parseFloat(priceText);
    return price;
}
//calculate total with discount
function totalWithDiscount(total) {
    const discount = total * .2;
    const promoCode = 'stevekaku';
    const userPromo = document.getElementById('promo-input');
    const userPromoCode = userPromo.value;
    if (promoCode == userPromoCode) {
        document.getElementById('discount-total').innerText = total - discount;

    } else {
        document.getElementById('discount-total').innerText = total;
    }
    userPromo.value = '';
}
//get total price and update
function totalPrice() {
    const basePrice = 1299;
    const memoryPrice = getPrice('memory');
    const ssdPrice = getPrice('ssd');
    const deliveryCost = getPrice('delivery')
    const total = basePrice + memoryPrice + ssdPrice + deliveryCost;
    document.getElementById('total-price').innerText = total;

    //update total with discount
    totalWithDiscount(total)
}

//All Click handler
//memory
document.getElementById('default-memory').addEventListener('click', function () {
    additionalCost(0, 'memory')
    totalPrice()

})
document.getElementById('extra-memory').addEventListener('click', function () {
    additionalCost(180, 'memory')
    totalPrice()
})
//ssd
document.getElementById('default-ssd').addEventListener('click', function () {
    additionalCost(0, 'ssd')
    totalPrice()
})
document.getElementById('extra-ssd').addEventListener('click', function () {
    additionalCost(100, 'ssd')
    totalPrice()
})
document.getElementById('double-extra-memory').addEventListener('click', function () {
    additionalCost(180, 'ssd')
    totalPrice()
})
//delivery
document.getElementById('free-delivery').addEventListener('click', function () {
    additionalCost(0, 'delivery')
    totalPrice()
})
document.getElementById('fast-delivery').addEventListener('click', function () {
    additionalCost(20, 'delivery')
    totalPrice()
})
//promo-code
document.getElementById('promo-btn').addEventListener('click', function () {
    totalPrice()
})