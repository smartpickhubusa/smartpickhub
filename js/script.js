const searchButton = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");

const earbuds = document.getElementById("earbuds");
const watch = document.getElementById("watch");
const coffee = document.getElementById("coffee");
const laptop = document.getElementById("laptop");

searchButton.addEventListener("click", function () {

    const search = searchInput.value.toLowerCase();
    if (search === "") {
    document.getElementById("searchResult").textContent =
    "Please enter a product name.";
    return;
}

    // Sab products pehle dikhao
    earbuds.style.display = "block";
    watch.style.display = "block";
    coffee.style.display = "block";
    laptop.style.display = "block";

    // Search message
    document.getElementById("searchResult").textContent =
"✅ 1 Product Found";

    // Filter
    if (search.includes("earbuds") || search.includes("wireless")) {
        watch.style.display = "none";
        coffee.style.display = "none";
        laptop.style.display = "none";
    }

    else if (search.includes("watch") || search.includes("smart")) {
        earbuds.style.display = "none";
        coffee.style.display = "none";
        laptop.style.display = "none";
    }

    else if (search.includes("coffee") || search.includes("maker")) {
        earbuds.style.display = "none";
        watch.style.display = "none";
        laptop.style.display = "none";
    }

    else if (search.includes("laptop") || search.includes("stand")) {
        earbuds.style.display = "none";
        watch.style.display = "none";
        coffee.style.display = "none";
    }

    else {
    earbuds.style.display = "none";
    watch.style.display = "none";
    coffee.style.display = "none";
    laptop.style.display = "none";

    document.getElementById("searchResult").textContent =
    "❌ No products found.";
}

});

