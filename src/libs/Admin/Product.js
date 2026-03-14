var productApi = {
    async getProductApi() {
        const res = await fetch('https://shoe-shop-api-latest.onrender.com/product/all',{
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
export default productApi