const baseUrl = 'https://api.coingecko.com/api/v3';

const endpoints = {
    coins: (currency, page) => `${baseUrl}/coins/markets?vs_currency=${currency}&per_page=50&page=${page}`,
    coin: (coinId) => `${baseUrl}/coins/${coinId}?tickers=false`,
    chart: (coinId, currency, days) => `${baseUrl}/coins/${coinId}/market_chart?vs_currency=${currency}&days=${days}`,
};

export default endpoints;