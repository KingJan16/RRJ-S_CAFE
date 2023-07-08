let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Cappucino',
        image: '1.jpg',
        price: 180
    },
    {
        id: 2,
        name: 'Espresso',
        image: '2.jpg',
        price:  150
    },
    {
        id: 3,
        name: 'Hazelnut Cappucino',
        image: '3.png',
        price: 250
    },
    {
        id: 4,
        name: 'Irish Cream Coffee',
        image: '4.jpeg',
        price: 250
    },
    {
        id: 5,
        name: 'Long Black Coffee',
        image: '5.jpg',
        price: 150
    },
    {
        id: 6,
        name: 'Cafe Mocha',
        image: '6.jpg',
        price: 250
    },
    {
        id: 7,
        name: 'Affogato',
        image: '7.jpg',
        price: 250
    },
    {
        id: 8,
        name: 'Ice Caramel Frappe',
        image: '8.jpg',
        price: 275
    },
    {
        id: 9,
        name: 'Flat White   ',
        image: '10.jpg',
        price: 250
    },
    {
        id: 10,
        name: 'Iced Chocolate Mocha Frappe',
        image: '12.jpg',
        price: 275
    },
    {
        id: 11,
        name: 'Cafe Late',
        image: '14.jpg',
        price: 250
    },
    {
        id: 12,
        name: 'Turkish Coffee',
        image: '16.jpg',
        price: 250
    },
    {
        id: 13,
        name: 'Bagel',
        image: 'a.jpg',
        price: 150
    },
    {
        id: 14,
        name: 'Biscotti',
        image: 'b.jpg',
        price: 150
    },
    {
        id: 15,
        name: 'Cheese Bread',
        image: 'c.jpg',
        price: 100
    },
    {
        id: 16,
        name: 'Crepes',
        image: 'd.jpg',
        price: 150
    },
    {
        id: 17,
        name: 'Croissant',
        image: 'e.jpg',
        price: 160
    },
    {
        id: 18,
        name: 'Cheese Cake',
        image: 'f.jpg',
        price: 160
    },
    {
        id: 19,
        name: 'Chocolate Glazed Donut',
        image: 'g.jpg',
        price: 100
    },
    {
        id: 20,
        name: 'Cinnamon Rolls',
        image: 'h.jpg',
        price: 150
    },
    {
        id: 21,
        name: 'Muffin',
        image: 'i.jpg',
        price: 100
    },
    {
        id: 22,
        name: 'Tart',
        image: 'j.jpg',
        price: 150
    },
    {
        id: 23,
        name: 'Tiramisu',
        image: 'k.jpg',
        price: 150
    },
    {
        id: 24,
        name: 'Avocado Toast with Egg',
        image: 'l.jpg',
        price: 125
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">ORDER</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}