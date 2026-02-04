let cart = JSON.parse(localStorage.getItem("cart")) || [];

document.addEventListener("DOMContentLoaded", () => {
    updateCartCount();
});

function addToCart(name, price) {
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    alert(name + " cart me add ho gaya 🛒");
}

function updateCartCount() {
    let count = document.getElementById("cart-count");
    if (count) {
        count.innerText = cart.length;
    }
}
function filterByPrice() {
    let range = document.getElementById("priceRange").value;
    document.getElementById("priceValue").innerText = range;

    let products = document.querySelectorAll(".product");
    products.forEach(p => {
        let price = p.getAttribute("data-price");
        p.style.display = price <= range ? "block" : "none";
    });
}
function orderWhatsApp() {
    let msg = "🛍️ *New Order* %0A";
    let total = 0;

    cart.forEach(item => {
        msg += `- ${item.name} : ₹${item.price}%0A`;
        total += item.price;
    });

    msg += `%0A*Total:* ₹${total}`;

    let phone = "918859455780"; // apna WhatsApp number
    let url = `https://wa.me/${phone}?text=${msg}`;
    window.open(url, "_blank");
}
function goHome() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function goCart() {
    window.location.href = "cart.html";
}

function goOrders() {
    window.location.href = "order-history.html";
}
let navItems = document.querySelectorAll(".nav-item");

navItems.forEach(item => {
    item.addEventListener("click", () => {
        navItems.forEach(i => i.classList.remove("active"));
        item.classList.add("active");
    });
});
function openImage(src) {
    document.getElementById("imageModal").style.display = "flex";
    document.getElementById("fullImage").src = src;
}

function closeImage() {
    document.getElementById("imageModal").style.display = "none";
}
window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("splash").style.display = "none";
    }, 2000);
});
window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
    }, 1500);
});