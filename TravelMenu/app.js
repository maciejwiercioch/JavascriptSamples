const menu = [
    {
        id: 1,
        destination: "France",
        img: "./images/europe.jpg",
        price: 2000,
        description: "Travel to France",
        continent: "Europe"
    },
    {
        id: 2,
        destination: "India",
        img: "./images/india.jpg",
        price: 5000,
        description: "Travel to India",
        continent: "Asia"
    }, {
        id: 3,
        destination: "Australia",
        img: "./images/oceanic.jpg",
        price: 7000,
        description: "Travel to Oceania",
        continent: "Australia"
    },
    {
        id: 4,
        destination: "United States of America",
        img: "./images/us_bridge.jpg",
        price: 4500,
        description: "Travel to USA",
        continent: "America"
    },
    {
        id: 5,
        destination: "Italy",
        img: "./images/venice.jpg",
        price: 3500,
        description: "Travel to Venice",
        continent: "Europe"
    }
];

const menuSection = document.querySelector(".menu-section");
const filterButtons = document.querySelectorAll(".filter-button");

// load menu
window.addEventListener('DOMContentLoaded', function () {
    displayMenuSection(menu);
});

// filter menu items
filterButtons.forEach(button => {
    button.addEventListener('click', function(e){
        const continent = e.currentTarget.dataset.id;
        const menuContinent = menu.filter(function(menuItem){
            if(menuItem.continent === continent)
                return menuItem;
        });

        if(continent === "All"){
            displayMenuSection(menu);
        }else{
            displayMenuSection(menuContinent);
        }
    });
});

function displayMenuSection(menu){
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
}