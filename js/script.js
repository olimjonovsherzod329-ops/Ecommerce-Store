
const productCardContainer = document.querySelector('.product-card');

const body = document.querySelector('body')

const URL = 'https://fakestoreapi.com/products';

;

fetch(URL)
    .then(response => {
        if (!response.ok) {
            throw new Error('Mahsulotlarni yuklashda xatolik!');
        }
        return response.json();
    })
    .then(data => {
        productCardContainer.innerHTML = data.map(item => {
            const { title, description, price, image } = item;

            return `
                <div class="cards">
                    <div class="card-img">
                        <img src="${image}" alt="${title}">

                        <button class="like-btn" type="button" aria-label="Like">
                             <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19"
                        viewBox="0 0 24 24" fill="#fff">
                        <path
                            d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z">
                        </path>
                    </svg>
                        </button>

                        <div class="card-hover">
                            <button class="view-btn" type="button" aria-label="View product">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    width="19" height="19" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor"
                                    stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z"/>
                                    <circle cx="12" cy="12" r="3"/>
                                </svg>
                            </button>

                            <button class="hover-cart-btn" type="button" aria-label="Add to cart">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    width="19" height="19" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor"
                                    stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <circle cx="9" cy="21" r="1"/>
                                    <circle cx="20" cy="21" r="1"/>
                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div class="card-content">
                        <p class="title">${title}</p>
                        <p class="description">${description}</p>
                        <p class="price">$${Number(price).toFixed(2)}</p>
                        <button class="cart-btn" type="button">Add to Cart</button>
                    </div>
                </div>
            `;
        }).join('');

    })
    .catch(error => {
        console.error(error);
    })


