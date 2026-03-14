var allProductApi = {
    async getAllProduct(categoryId, itemId) {
        if(categoryId == ""){
            const res = await fetch('https://shoe-shop-api-latest.onrender.com/product/allProduct',{
                method: 'GET',
                headers: {
                    'content-type': 'application/json'
                    
                }
            })
            const result = await res.json();
            // console.log(result);
            return result
        }else{
            const res = await fetch(`https://shoe-shop-api-latest.onrender.com/product/allProduct/${categoryId}/${itemId}`,{
                method: 'GET',
                headers: {
                    'content-type': 'application/json'
                }
            })
            const result = await res.json();
            return result
        }
    },
    
}
export default allProductApi