    $(document).ready(function() {
        $(".icon-container").click(function() {
            // Add your action here
            alert("Added To Favourite!");
        });
    });
    const heartIcon = document.querySelector(".icon-container");

    heartIcon.addEventListener("click", () => {
        heartIcon.classList.toggle("clicked");
    });

    const addToCartButton = document.querySelector(".add-to-cart");

addToCartButton.addEventListener("click", () => {
    alert("Added to Cart");
});

