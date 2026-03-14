var colorApi = {
    async getColor() {
        const res = await fetch('https://shoe-shop-api-latest.onrender.com/color/all',{
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

export default colorApi