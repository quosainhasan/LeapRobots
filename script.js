const products = [
    { name: 'Basic Robotics Kit', image: 'image1.jpg', description: 'A beginner-friendly kit.' },
    { name: 'Advanced Robotics Kit', image: 'image2.jpg', description: 'Take your skills to the next level.' }
];

const productList = document.getElementById('product-list');

products.forEach((product) => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.innerHTML = `
        <h3>${product.name}</h3>
        <img src="${product.image}" alt="${product.name}">
        <p>${product.description}</p>
    `;
    productList.appendChild(productCard);
});
