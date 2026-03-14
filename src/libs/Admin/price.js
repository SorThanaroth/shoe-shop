var priceApi = {
    async getPrice() {
        const res = await fetch('https://shoe-shop-api-latest.onrender.com/price/all',{
            method: 'GET',
            // credentials: 'include',
            headers: {
                'Content-type': 'application/json',
                
            }
        })
        const result = await res.json();
        return result
    }
}

export default priceApi