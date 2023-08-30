const portfolioContainer = document.querySelector('.portfolio');

const cryptocurrencies = [
    { name: 'Bitcoin', symbol: 'BTC', amount: 1.5, price: 45000 },
    { name: 'Ethereum', symbol: 'ETH', amount: 5, price: 3000 },
    // Add more cryptocurrencies
];

function calculateTotalValue(crypto) {
    return crypto.amount * crypto.price;
}

function displayPortfolio() {
    portfolioContainer.innerHTML = '';
    cryptocurrencies.forEach(crypto => {
        const totalValue = calculateTotalValue(crypto);
        const item = document.createElement('div');
        item.classList.add('crypto-item');
        item.innerHTML = `
            <h2>${crypto.name} (${crypto.symbol})</h2>
            <p>Amount: ${crypto.amount}</p>
            <p>Current Price: $${crypto.price}</p>
            <p>Total Value: $${totalValue}</p>
        `;
        portfolioContainer.appendChild(item);
    });
}

displayPortfolio();
