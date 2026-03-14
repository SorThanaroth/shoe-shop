var itemApi = {
    async getItemApi(category_id) {
        const res = await fetch(`https://shoe-shop-api-latest.onrender.com/item/categoryid/${category_id}`,{
            method: 'GET',
            // credentials: 'include',
            headers: {
                'Content-type': 'application/json',               
            }
        })
        const result = await res.json();
        return result
    },
    async getAllItemApi(category_id) {
        const res = await fetch('https://shoe-shop-api-latest.onrender.com/item/all',{
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
export default itemApi