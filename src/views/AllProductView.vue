<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import router from '../router'
</script>

<template>
    <!-- Header -->
    <Header />
    <!-- main -->
    <div class="w-full py-6">
        <div class="p-6"><strong>Product</strong></div>
        <div class="w-full flex rounded-2xl shadow-[1px_1px_20px_-6px_#0D2750] ">
            <div class="bg-slate-50 w-[30%] rounded-l-2xl p-8">  
                <ol v-for="category in categories" :key="category._id" class="space-y-4 list-decimal list-inside dark:text-gray-400">
                    <ul>
                        <button @Click="onClick(category._id,'')">{{category.name}}</button>
                        <ul class="pl-5 mt-2 space-y-1 list-disc list-inside">
                            <li v-for="item in category?.items" :key="item._id">
                                <a @click="onClick(item.category, item._id)">{{item.name}}</a>
                            </li>                  
                        </ul>
                    </ul>
                </ol>
            </div>

            <!-- pic -->
            <div class="bg-slate-200 w-[75%] overflow-y-auto grid grid-cols-4 gap-4 rounded-r-2xl p-10">
                <div v-for="product in products" :key="product._id" class="w-full bg-white rounded-lg shadow-[1px_1px_20px_-6px_#0D2750] p-4">           
                    <div class="w-full">
                        <router-link :to="`/list/${product._id}`">
                            <div>
                                <img :src="serverUrl+product.image" alt="imgLogo">
                            </div>
                        </router-link>
                        <div class="w-full flex justify-center py-2">{{product.title}}</div>
                        <div class="text-center text-[#ffbe1c]"><strong>${{ product.price }}</strong></div>
                        <div v-for="price in product['prices']" :key="price._id" class="flex justify-around">
                            <div>$ {{price.price}}</div>
                            <div>{{ price.source }}</div>
                        </div>
                    </div>           
                </div>
            </div>
        </div>
    </div>

    <!-- footer -->
    <Footer />
</template>

<script>
import categoriesApi from '../libs/Admin/category'
import allProductApi from '../libs/allProduct'
import router from '../router'
export default {
  data() {
    return {
        categories: [],
        products: [],
        serverUrl: 'https://shoe-shop-api-latest.onrender.com/static/',
        imageUrl: null
      
    }
  },
  async mounted() {
    this.categories = await categoriesApi.getCategoryItem();
    console.log(this.categories);
    this.products = await allProductApi.getAllProduct("", "");
    console.log(this.products);

    // this.products = await productsApi.getProductApi();

    // this.productPrices = await productpriceApi.getProductPrice();
    // this.productPrices = this.productPrices.data
    // console.log(this.products);
    
  },
  methods: {
    async onClick(categoryId, itemId){
      this.products = await allProductApi.getAllProduct(categoryId, itemId)
      console.log(this.products);
    }
  }
}
</script>