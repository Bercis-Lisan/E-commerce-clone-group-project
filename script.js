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
        category: "men,men-shoes,football,featured",
        newest: true
        category: "men,men-shoes,football"
    },

    {
        image: "images/product2.jpg",
        tag: "Just In",
        name: "Nike Mercurial Vapor 17 Club",
        content: "Multi-Ground Low-Top Football Boots",
        price: "₹5,495",
        category: "men,men-shoes,football,featured",
        newest: true
        category: "men,men-shoes,football"
    },

    {
        image: "images/product3.jpg",
        tag: "Just In",
        name: "Nike Tiempo Maestro Club",
        content: "Multi-Ground Low-Top Football Boots",
        price: "₹5,495",
        category: "men,men-shoes,football,women,featured",
        newest: true
        category: "men,men-shoes,football,women"
    },

    {
        image: "images/product4.jpg",
        tag: "Just In",
        name: "Nike Mercurial Vapor 17 Club",
        content: "Older Kids' Multi-Ground High-Top Football Boots",
        price: "₹5,995",
        category: "men,men-shoes,football,women,featured",
        newest: true
        category: "men,men-shoes,football,women"
    },

    {
        image: "images/product5.jpg",
        tag: "Just In",
        name: "Nike Jr. Mercurial Superfly 11 Club",
        content: "Older Kids' Multi-Ground High-Top Football Boots",
        price: "₹5,495",
        category: "kids-shoes,featured",
        newest: true
        category: "kids-shoes"
    },

    {
        image: "images/product6.jpg",
        tag: "Just In",
        name: "Nike Jr. Mercurial Superfly 11 Club",
        content: "Older Kids' Multi-Ground High-Top Football Boots",
        price: "₹4,995",
        category: "kids-shoes,featured",
        newest: true
        category: "kids-shoes"
    },

    {
        image: "images/product7.jpg",
        tag: "Just In",
        name: "Nike Jr. Mercurial Vapor 17 Club",
        content: "Older Kids' Multi-Ground Low-Top Football Boots",
        price: "₹4,495",
        category: "kids-shoes,featured",
        newest: true
        category: "kids-shoes"
    },

    {
        image: "images/product8.jpg",
        tag: "Just In",
        name: "England 2026 Match Home",
        content: "Men's Nike Aero-FIT Football Authentic Shirt",
        price: "₹8,295",
        category: "men,men-clothing,short sleeve,featured",
        newest: true
        category: "men,men-clothing"
    },

    {
        image: "images/product9.jpg",
        name: "Brazil 2026 Stadium Home",
        content: "Men's Nike Dri-FIT Football Replica Shorts",
        price: "₹2,546",
        category: "men,men-clothing,featured"
        category: "men,men-clothing"
    },

    {
        image: "images/product10.jpg",
        name: "Brazil 2026 Stadium Home",
        content: "Nike Brazil 2026 Stadium Home Older Kids' Dri-FIT Football Replica Shirt",
        price: "₹3,995",
        category: "kids,kids-clothing,short sleeve,featured"
        category: "kids,kids-clothing"
    },

    {
        image: "images/product11.jpg",
        name: "England 2026 Match Home",
        content: "Older Kids' Nike Dri-FIT Football Replica Shirt",
        price: "₹3,995",
        category: "kids,kids-clothing,short sleeve,featured"
        category: "kids,kids-clothing"
    },
    {
        image: "images/product12.jpg",
        name: "England 2026 Match Home",
        content: "Younger Kids' Nike Football Replica 3-Piece Kit",
        price: "₹3,995",
        category: "kids,kids-clothing,short sleeve,featured"
        category: "kids,kids-clothing"
    },
    {
        image: "images/product13.jpg",
        name: "England 2026 Match Home",
        content: "Men's Nike Aero-FIT Football Authentic Shirt",
        price: "₹2,546",
        category: "men,men-clothing,featured"
        category: "men,men-clothing"
    },
    {
        image: "images/product14.jpg",
        name: "FFF 2026 Stadium Away",
        content: "Men's Nike Dri-FIT Football Replica Shorts",
        price: "₹5,095",
        category: "men,men-clothing,featured"
        category: "men,men-clothing"
    },
    {
        image: "images/product15.jpg",
        name: "FFF 2026 Stadium Away",
        content: "Older Kids' Nike Dri-FIT Football Replica Shirt",
        price: "₹3,995",
        category: "kids,kids-clothing,short sleeve,featured"
        category: "kids,kids-clothing"
    },
    {
        image: "images/product16.jpg",
        name: "Nike Killshot 2",
        content: "Men's Shoes",
        price: "₹6,447",
        originalPrice: "₹8,595",
        discount: "30% off",
        category: "men,women,tennis,20% and above,featured,all discounted products"
        category: "men,women,tennis"
    },
    {
        image: "images/product17.jpg",
        name: "Netherlands 2026 Stadium Home",
        content: "Men's Nike Dri-FIT Football Replica Shirt",
        price: "₹5,095",
        category: "men,men-clothing,short sleeve,featured"
        category: "men,men-clothing"
    },
    {
        image: "images/lifestyle1.jpg",
        name: "Nike Air Max 95 Big Bubble SE",
        content: "Men's Shoes",
        price: "₹12,796",
        originalPrice: "₹15,999",
        discount: "20% off",
        category: "men,women,lifestyle,10% and above,20% and above,all discounted products,featured"
        price: "₹13,596",
        category: "men,women,lifestyle"
    },
    {
        image: "images/lifestyle2.jpg",
        name: "Nike Air Force 1 '07 LV8",
        content: "Men's Shoes",
        price: "₹13,795",
        originalPrice: "₹16,995",
        discount: "20% off",
        category: "men,women,lifestyle,10% and above,20% and above,all discounted products,featured"
        price: "₹10,795",
        category: "men,women,lifestyle"
    },
    {
        image: "images/lifestyle3.jpg",
        name: "Nike Air Max 95 Big Bubble 'OG'",
        content: "Men's Shoes",
        price: "₹14,396",
        originalPrice: "₹15,995",
        discount: "10% off",
        category: "men,women,lifestyle,10% and above,all discounted products,featured"
        category: "men,women,lifestyle"
    },
    {
        image: "images/accessories1.jpg",
        name: "NK ACDMY TEAM M DUFF",
        content: "Academy Team Football Duffel Bag (Medium, 60L)",
        price: "₹2,156",
        originalPrice: "₹2,695",
        discount: "20% off",
        category: "men,men-accessories,women-accessories,20% and above,all discounted products,featured"
        price: "₹2,426",
        category: "men,men-accessories"
    },
    {
        image: "images/accessories2.jpg",
        name: "Nike",
        content: "Academic Football Shoe Bag",
        price: "₹846",
        category: "men,men-accessories,women-accessories,featured"
        category: "men,men-accessories"
    },
    {
        image: "images/accessories3.jpg",
        name: "Jordan Pro",
        content: "Nike Jordan Pro Unstructured Flat-Bill Hat",
        price: "₹1,995",
        category: "men,men-accessories,women-accessories,featured"
        category: "men,men-accessories"
    },
    {
        image: "images/accessories4.jpg",
        name: "FFF VaporFast Home",
        content: "Nike FFF VaporFast Home Dri-FIT ADV Football Knee-High Socks",
        price: "₹1,436",
        category: "men,men-accessories,women-accessories,featured"
        category: "men,men-accessories"
    },
    {
        image: "images/women1.jpg",
        name: "Nike Sportswear",
        content: "Women's Loose Lace Polo Jersey Top",
        price: "₹5,295",
        category: "women,women-clothing,short sleeve,featured"
        category:"women,women-clothing"
    },
    {
        image: "images/women2.jpg",
        name: "Nike United Academy",
        content: "Women's Dri-FIT Football Knit Shorts",
        price: "₹1,596",
        originalPrice: "₹1,995",
        discount: "20% off",
        category: "women,women-clothing,20% and above,featured,all discounted products"
        price: "₹1,696",
        category:"women,women-clothing"
    },
    {
        image: "images/women3.jpg",
        name: "Nike Sportswear",
        content: "Women's Oversized Satin Top",
        price: "₹3,141",
        category: "women,women-clothing,featured"
    },

    {
        image: "images/womenshoes1.jpg",
        name: "Nike Air Max 95 Big Bubble",
        content: "Women's Shoes",
        price: "₹15,995",
        category: "women,women-shoes,featured"
    },

    {
        image: "images/womenshoes2.jpg",
        name: "Nike Air Max 90",
        content: "Women's Shoes",
        price: "₹10,995",
        category: "women,women-shoes,featured"
    },

    {
        image: "images/womenshoes3.jpg",
        name: "Nike Astrograbber Leather",
        content: "Women's Shoes",
        price: "₹7,557",
        category: "women,women-shoes,featured"
    },
    {
        image: "images/running.jpg",
        name: "Nike Stride",
        content: "Men's Dri-FIT 13cm (approx.) Brief-Lined Running Shorts",
        price: "₹1,797",
        originalPrice: "₹2,995",
        discount: "40% off",
        category: "all discounted products,running,10% and above,20% and above,featured"
    },
    {
        image: "images/running1.jpg",
        tag: "Just In",
        name: "Nike Air Max 95 Big Bubble",
        content: "Women's Shoes with Reflective Design Accents",
        price: "₹15,995",
        category: "women,women-shoes,running,featured"
    },
    {
        image: "images/longsleeve.jpg",
        name: "Brazil Club",
        content: "Nike Brazil Club Men's Footbal French Terry Pullover Hoodie",
        price: "₹4,695",
        category: "long sleeve,featured"
    },
    {
        image: "images/longsleeve1.jpg",
        name: "FFF Club",
        content: "Nike FFF Club Men's Football French Terry Pullover Hoodie",
        price: "₹4,695",
        category: "long sleeve,featured"
    },
    {
        image: "images/jordan1.jpg",
        name: "Air Jordan 1 Low",
        content: "Men's Shoes",
        price: "₹11,895",
        category: "men,jordan,featured"
    },
    {
        image: "images/jordan2.jpg",
        name: "Air Jordan 4 Retro Military Blue",
        content: "Men's Shoes",
        price: "₹18,295",
        category: "men,jordan,featured"
    },
    {
        image: "images/jordan3.jpg",
        name: "Air Jordan 1 Mid",
        content: "Men's Shoes",
        price: "₹12,295",
        category: "men,jordan,featured"
    },
    {
        image: "images/jordan4.jpg",
        name: "Air Jordan 3 Retro White Cement",
        content: "Men's Shoes",
        price: "₹17,495",
        category: "men,jordan,featured"
    },
    {
        image: "images/longsleeve2.jpg",
        name: "Nike Academy",
        content: "Men's Dri-FIT Football Drill Top",
        price: "₹2,097",
        originalPrice: "₹2, 995",
        discount: "30 % off",
        category: "long sleeve,featured"
    }

];



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

        <div class="price-section">
            <span class="price">${product.price}</span>

             ${product.originalPrice ? `
           <span class="original-price">${product.originalPrice}</span>
            <span class="discount">${product.discount}</span> ` : ""
            }
     </div>
 
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


if (category) {
if(category){

    const filtered = products.filter(product =>
        product.category.includes(category)
    );

    displayProducts(filtered);

} else {
}else{

    displayProducts(products);

}
const sortBtn = document.getElementById("sortBtn");
const sortMenu = document.getElementById("sortMenu");

sortBtn.addEventListener("click", () => {
    sortMenu.classList.toggle("show");
});

window.addEventListener("click", (e) => {

    if (!e.target.closest(".sort-dropdown")) {
        sortMenu.classList.remove("show");
    }

});
function sortProducts(type) {

    if (type === "featured") {

        const featuredProducts = products.filter(product =>
            product.category.includes("featured")
        );

        displayProducts(featuredProducts);
    }

     if (type === "newest") {

        const newestProducts = products.filter(product =>
            product.newest === true
        );

        displayProducts(newestProducts);
    }


    sortMenu.classList.remove("show");

}










let sidenav = document.getElementById("sidenav")
let menuicon = document.getElementById("menuicon")
let navclose = document.getElementById("navclose")

menuicon.addEventListener("click",function(){
    sidenav.style.right=0
})

navclose.addEventListener("click",function(){
    sidenav.style.right="-50%"
})
