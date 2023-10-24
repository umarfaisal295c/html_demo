let openshopping=document.querySelector(".shopping");
let closeshopping=document.querySelector(".closeshopping");
let list=document.querySelector(".list");
let listcard=document.querySelector(".listcard");
let body=document.querySelector("body");
let total=document.querySelector(".total");
let quantity=document.querySelector(".quantity");

openshopping.addEventListener('click',()=>{
    body.classList.add('active')
})
closeshopping.addEventListener('click',()=>{
    body.classList.remove('active')
})

let products=[
    {
        id:1,
        name:"Product 1",
        image:"p1.png",
        price:2050
    },
    {
        id:2,
        name:"Product 2",
        image:"p2.png",
        price:3500
    },
    {
        id:3,
        name:"Product 3",
        image:"p3.png",
        price:1200
    },
    {
        id:4,
        name:"Product 4",
        image:"p4.png",
        price:1900
    },
    {
        id:5,
        name:"Product 5",
        image:"p5.png",
        price:1550
    },
    {
        id:6,
        name:"Product 6",
        image:"p6.png",
        price:1500
    },
];

let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="images/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
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
    listcard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="images/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listcard.appendChild(newDiv);
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