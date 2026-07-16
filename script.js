var offerBar = document.querySelector(".offer-bar");
var offerCloseBtn = document.getElementById("offer-close");
if (offerCloseBtn) {
    offerCloseBtn.addEventListener("click", function () {
        offerBar.style.display = "none";
    });
}




const filterBtns = document.querySelectorAll(".filter-btn");

filterBtns.forEach(button => {

    button.addEventListener("click", () => {

        const currentItem = button.parentElement;

        // Close all other items
        document.querySelectorAll(".filter-item").forEach(item => {
            if (item !== currentItem) {
                item.classList.remove("active");
            }
        });

        // Toggle current item
        currentItem.classList.toggle("active");

    });

});

const filterToggle = document.getElementById("filterToggle");
const filterBar = document.querySelector(".filter-bar");

filterToggle.addEventListener("click", () => {

    filterBar.classList.toggle("active");

    if (filterBar.classList.contains("active")) {
        filterToggle.innerHTML = 'Hide Filters <i class="fa-solid fa-sliders"></i>';
    } else {
        filterToggle.innerHTML = 'Show Filters <i class="fa-solid fa-sliders"></i>';
    }

});

const products = [

    {
        image: "images/product1.jpg",
        tag: "Just In",
        name: "Nike Tiempo Maestro Academy",
        content: "Multi-Ground Low-Top Football Boots",
        price: "₹7,995",
        category: "men,men-shoes,football"
    },

    {
        image: "images/product2.jpg",
        tag: "Just In",
        name: "Nike Mercurial Vapor 17 Club",
        content: "Multi-Ground Low-Top Football Boots",
        price: "₹5,495",
        category: "men,men-shoes,football"
    },

    {
        image: "images/product3.jpg",
        tag: "Just In",
        name: "Nike Tiempo Maestro Club",
        content: "Multi-Ground Low-Top Football Boots",
        price: "₹5,495",
        category: "men,men-shoes,football,women"
    },

    {
        image: "images/product4.jpg",
        tag: "Just In",
        name: "Nike Mercurial Vapor 17 Club",
        content: "Older Kids' Multi-Ground High-Top Football Boots",
        price: "₹5,995",
        category: "men,men-shoes,football,women"
    },

    {
        image: "images/product5.jpg",
        tag: "Just In",
        name: "Nike Jr. Mercurial Superfly 11 Club",
        content: "Older Kids' Multi-Ground High-Top Football Boots",
        price: "₹5,495",
        category: "kids-shoes"
    },

    {
        image: "images/product6.jpg",
        tag: "Just In",
        name: "Nike Jr. Mercurial Superfly 11 Club",
        content: "Older Kids' Multi-Ground High-Top Football Boots",
        price: "₹4,995",
        category: "kids-shoes"
    },

    {
        image: "images/product7.jpg",
        tag: "Just In",
        name: "Nike Jr. Mercurial Vapor 17 Club",
        content: "Older Kids' Multi-Ground Low-Top Football Boots",
        price: "₹4,495",
        category: "kids-shoes"
    },

    {
        image: "images/product8.jpg",
        tag: "Just In",
        name: "England 2026 Match Home",
        content: "Men's Nike Aero-FIT Football Authentic Shirt",
        price: "₹8,295",
        category: "men,men-clothing"
    },

    {
        image: "images/product9.jpg",
        name: "Brazil 2026 Stadium Home",
        content: "Men's Nike Dri-FIT Football Replica Shorts",
        price: "₹2,546",
        category: "men,men-clothing"
    },

    {
        image: "images/product10.jpg",
        name: "Brazil 2026 Stadium Home",
        content: "Nike Brazil 2026 Stadium Home Older Kids' Dri-FIT Football Replica Shirt",
        price: "₹3,995",
        category: "kids,kids-clothing"
    },

    {
        image: "images/product11.jpg",
        name: "England 2026 Match Home",
        content: "Older Kids' Nike Dri-FIT Football Replica Shirt",
        price: "₹3,995",
        category: "kids,kids-clothing"
    },
    {
        image: "images/product12.jpg",
        name: "England 2026 Match Home",
        content: "Younger Kids' Nike Football Replica 3-Piece Kit",
        price: "₹3,995",
        category: "kids,kids-clothing"
    },
    {
        image: "images/product13.jpg",
        name: "England 2026 Match Home",
        content: "Men's Nike Aero-FIT Football Authentic Shirt",
        price: "₹2,546",
        category: "men,men-clothing"
    },
    {
        image: "images/product14.jpg",
        name: "FFF 2026 Stadium Away",
        content: "Men's Nike Dri-FIT Football Replica Shorts",
        price: "₹5,095",
        category: "men,men-clothing"
    },
    {
        image: "images/product15.jpg",
        name: "FFF 2026 Stadium Away",
        content: "Older Kids' Nike Dri-FIT Football Replica Shirt",
        price: "₹3,995",
        category: "kids,kids-clothing"
    },
    {
        image: "images/product16.jpg",
        name: "Nike Killshot 2",
        content: "Men's Shoes",
        price: "₹6,447",
        category: "men,women,tennis"
    },
    {
        image: "images/product17.jpg",
        name: "Netherlands 2026 Stadium Home",
        content: "Men's Nike Dri-FIT Football Replica Shirt",
        price: "₹5,095",
        category: "men,men-clothing"
    },
    {
        image: "images/lifestyle1.jpg",
        name: "Nike Air Max 95 Big Bubble SE",
        content: "Men's Shoes",
        price: "₹13,596",
        category: "men,women,lifestyle"
    },
    {
        image: "images/lifestyle2.jpg",
        name: "Nike Air Force 1 '07 LV8",
        content: "Men's Shoes",
        price: "₹10,795",
        category: "men,women,lifestyle"
    },
    {
        image: "images/lifestyle3.jpg",
        name: "Nike Air Max 95 Big Bubble 'OG'",
        content: "Men's Shoes",
        price: "₹14,396",
        category: "men,women,lifestyle"
    },
    {
        image: "images/accessories1.jpg",
        name: "NK ACDMY TEAM M DUFF",
        content: "Academy Team Football Duffel Bag (Medium, 60L)",
        price: "₹2,426",
        category: "men,men-accessories"
    },
    {
        image: "images/accessories2.jpg",
        name: "Nike",
        content: "Academic Football Shoe Bag",
        price: "₹846",
        category: "men,men-accessories"
    },
    {
        image: "images/accessories3.jpg",
        name: "Jordan Pro",
        content: "Nike Jordan Pro Unstructured Flat-Bill Hat",
        price: "₹1,995",
        category: "men,men-accessories"
    },
    {
        image: "images/accessories4.jpg",
        name: "FFF VaporFast Home",
        content: "Nike FFF VaporFast Home Dri-FIT ADV Football Knee-High Socks",
        price: "₹1,436",
        category: "men,men-accessories"
    },
    {
        image: "images/women1.jpg",
        name: "Nike Sportswear",
        content: "Women's Loose Lace Polo Jersey Top",
        price: "₹5,295",
        category:"women,women-clothing"
    },
    {
        image: "images/women2.jpg",
        name: "Nike United Academy",
        content: "Women's Dri-FIT Football Knit Shorts",
        price: "₹1,696",
        category:"women,women-clothing"
    },
    {
        image: "images/women3.jpg",
        name: "Nike Sportswear",
        content: "Women's Oversized Satin Top",
        price: "₹3,141",
        category:"women,women-clothing"
    }

];


const productContainer = document.getElementById("productContainer");


// Display all products initially

displayProducts(products);



function displayProducts(items) {

    productContainer.innerHTML = "";


    items.forEach(product => {

        productContainer.innerHTML += `

        <div class="product-card">

            <img src="${product.image}">
             
            ${product.tag ? `<span class="tag">${product.tag}</span>` : ""}

            <h3>${product.name}</h3>
            <span class="content">${product.content}</span>

            <p>${product.price}</p>

        </div>

        `;

    });

}



// Filter Function

function filterProducts(category) {

    const filteredProducts = products.filter(product => {

        return product.category.includes(category);

    });


    displayProducts(filteredProducts);

}


// Navbar category filter

const params = new URLSearchParams(window.location.search);

const category = params.get("category");


if(category){

    const filtered = products.filter(product =>
        product.category.includes(category)
    );

    displayProducts(filtered);

}else{

    displayProducts(products);

}