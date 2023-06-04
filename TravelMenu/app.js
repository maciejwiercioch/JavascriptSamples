const menu = [
    {
        id: 1,
        destination: "France",
        img: "./images/europe.jpg",
        price: 2000,
        description: "Travel to France"
    },
    {
        id: 2,
        destination: "India",
        img: "./images/india.jpg",
        price: 5000,
        description: "Travel to India"
    }, {
        id: 3,
        destination: "Oceania",
        img: "./images/oceanic.jpg",
        price: 7000,
        description: "Travel to Oceania"
    },
    {
        id: 4,
        destination: "United States of America",
        img: "./images/us_bridge.jpg",
        price: 4500,
        description: "Travel to USA"
    },
    {
        id: 5,
        destination: "Venice",
        img: "./images/venice.jpg",
        price: 3500,
        description: "Travel to Venice"
    }
];

const menuSection = document.querySelector(".menu-section");

window.addEventListener('DOMContentLoaded', function () {

    let displayMenu = menu.map(function (item) {

        return `<article class="menu-item">
        <img src=${item.img} class="photo" alt=${item.id}/>
        <div class="item-details">
            <header>
                <h4>${item.destination}</h4>
            </header>
            <p class="item-description">
                ${item.description}
            </p>
            <p class="item-price">
               ${item.price}
            </p>
        </div>
         </article>`;
    })
    displayMenu = displayMenu.join("");
    menuSection.innerHTML = displayMenu
});