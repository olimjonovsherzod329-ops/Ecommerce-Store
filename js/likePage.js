
const productCardContainer = document.querySelector('.product-card');

const likedProducts = JSON.parse(
    localStorage.getItem('likedProducts')
) || [];

if (likedProducts.length === 0) {
    productCardContainer.innerHTML = `
        <p>Hozircha yoqtirilgan mahsulotlar yo‘q.</p>
    `;
} else {
    productCardContainer.innerHTML = likedProducts.map(item => {
        return `
            <div class="cards">
                <div class="card-img">
                    <img src="${item.image}" alt="${item.title}">

                    <button
                        class="like-btn"
                        type="button"
                        aria-label="Remove from likes"
                        data-id="${item.id}"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="heart"
                            viewBox="0 0 24 24"
                            fill="red"
                            stroke="red"
                            stroke-width="2"
                            width="19px"
                        >
                            <path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853Z"></path>
                        </svg>
                    </button>
                </div>

                <div class="card-content">
                    <p class="title">${item.title}</p>
                    <p class="description">${item.description}</p>
                    <p class="price">$${Number(item.price).toFixed(2)}</p>
                    <button class="cart-btn" type="button">Add to Cart</button>
                </div>
            </div>
        `;
    }).join('');

    const likeBtns = document.querySelectorAll('.like-btn');

    likeBtns.forEach(likeBtn => {
        likeBtn.addEventListener('click', () => {
            const id = Number(likeBtn.dataset.id);

            const updatedProducts = JSON.parse(
                localStorage.getItem('likedProducts')
            ) || [];

            const filteredProducts = updatedProducts.filter(
                product => product.id !== id
            );

            localStorage.setItem(
                'likedProducts',
                JSON.stringify(filteredProducts)
            );

            likeBtn.closest('.cards').remove();

            if (filteredProducts.length === 0) {
                productCardContainer.innerHTML = `
                    <p>Hozircha yoqtirilgan mahsulotlar yo‘q.</p>
                `;
            }
        });
    });
}
