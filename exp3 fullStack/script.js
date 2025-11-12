document.addEventListener('DOMContentLoaded', () => {

    // --- DATA ---
    const products = [
        { name: "Laptop", category: "electronics", price: 999 },
        { name: "T-Shirt", category: "clothing", price: 25 },
        { name: "Headphones", category: "electronics", price: 199 },
        { name: "Jeans", category: "clothing", price: 75 },
        { name: "Smartphone", category: "electronics", price: 699 },
        { name: "Jacket", category: "clothing", price: 120 }
    ];

    // --- DOM ELEMENTS ---
    const filterSelect = document.getElementById('filter');
    const productsContainer = document.getElementById('products-container');

    // --- FUNCTIONS ---

    /**
     * Renders a list of products to the page.
     * @param {Array} productsToRender - The array of product objects to display.
     */
    function renderProducts(productsToRender) {
        // Clear previous products
        productsContainer.innerHTML = '';

        // Generate and append new product elements
        productsContainer.innerHTML = productsToRender.map(p => `
            <div class="product">
                <h3>${p.name}</h3>
                <p class="category">${p.category}</p>
                <p class="price">$${p.price}</p>
            </div>
        `).join('');
    }

    /**
     * Handles the filtering logic when the select value changes.
     */
    function handleFilterChange() {
        const selectedCategory = filterSelect.value;
        
        const filteredProducts = selectedCategory === 'all' 
            ? products 
            : products.filter(p => p.category === selectedCategory);
            
        renderProducts(filteredProducts);
    }

    // --- EVENT LISTENERS ---
    filterSelect.addEventListener('change', handleFilterChange);

    // --- INITIAL RENDER ---
    // Display all products when the page first loads
    renderProducts(products);
});