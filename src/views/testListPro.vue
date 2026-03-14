<script setup>
    import Header from '../components/Header.vue'
    import Footer from '../components/Footer.vue'
    import { RouterLink } from 'vue-router';
</script>
<template>

    <Header />

    <div class="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
      <div class="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
        <div class="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
          <div class=" grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
            <div class="h-full my-32 rounded-lg sm:col-span-4 lg:col-span-5 bg-cover" >
              <img  :src="serverUrl+product.image" alt="" >
            </div>
            <div class="sm:col-span-8 lg:col-span-7">
              <h2 class="text-2xl font-bold text-gray-900 sm:pr-12">{{ product.title }}</h2>
              <section aria-labelledby="information-heading" class="mt-2">
                <h3 id="information-heading" class="sr-only">Product information</h3>
                <p class="text-2xl text-gray-900">${{ product.price }}</p>
              </section>
              <section class="mt-6">
                <h3 id="options-heading" class="sr-only">Product options</h3>
                <!-- <form> -->

                  <div >
                    <h4 class="text-sm font-medium text-gray-900">Color</h4>
                    
                    <fieldset class="mt-4 grid grid-cols-4 gap-4">
                      <legend class="sr-only">Choose a color</legend>
                      <span v-for="color in product['colors']" :key="color._id">
                        <div class="flex items-center  pl-4 border border-gray-200 rounded dark:border-gray-700">
                          <!--  -->
                            <input id="" type="radio" :value="color._id" v-model="color1" name="color" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="" class="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                              <div :class="'w-6 h-6 rounded-full bg-['+color.color+']'" ></div>
                            </label>
                            <!-- <div>{{ color._id }}</div> -->
                        </div>
                      </span>
                    </fieldset>
                  </div>

                  <!-- Sizes -->
                  <div class="my-6">
                    <div class="flex items-center justify-between">
                      <h4 class="text-sm font-medium text-gray-900">Size</h4>
                    </div>
                    <div  class="mt-4 grid grid-cols-4 gap-4">
                      <div v-for="size in product['sizes']" :key="size._id">
                        <!-- Active: "ring-2 ring-indigo-500" -->
                        <div class="flex items-center  pl-4 border border-gray-200 rounded dark:border-gray-700">
                          <!-- :value="size._id" v-model="size" name="" -->
                            <input id="" type="radio" :value="size._id" v-model="size1" name="size" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <!-- <div>{{ size._id }}</div> -->
                            <label for="" class="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{ size.size }}</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <!--  -->
                    <div>Quantity</div>
                      <select v-model="quantity" name="quantiy" id="underline_select" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                        <option disabled selected>Choose a Quantity</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                    </select>
                  </div>
                  <RouterLink to="/card">
                    <button v-on:click="addToCard()" class="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Add to bag</button>
                  </RouterLink>
                <!-- </form> -->
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Footer -->
    <Footer />
      
</template>
<script>
  import axios from 'axios';
  import { initFlowbite } from 'flowbite';
  export default {
  data() {
    return {
        categories: [],
        product: Object,
        // anotherData: [],
        serverUrl: 'https://shoe-shop-api-latest.onrender.com/static/',
        imageUrl: null,
        user:'',
        product1:'',
        color1:'',
        size1:'',
        quantity:''
      
    }
  },
  created(){
    this.getProductByID();
  },
  mounted() {
    initFlowbite();
  },
  methods: {
    getProductByID(){
      axios.get(`https://shoe-shop-api-latest.onrender.com/product/${this.$route.params.id}`)
      .then(res =>{
        this.product = res.data[0];
        console.log(this.products);
      })
    },
    async addToCard(){
      console.log({
        user:this.$store.getters.getUserId,
        color:this.color1,
        size:this.size1,
        quantity:this.quantity,
        product: this.product._id
        
      });
      let result = await axios.post("https://shoe-shop-api-latest.onrender.com/card/create", {
        user:this.$store.getters.getUserId,
        color:this.color1,
        size:this.size1,
        quantity:this.quantity,
        product: this.product._id
        
      });
      console.log(result);
    }
  }
}
</script>