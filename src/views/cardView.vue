<script setup>
    import Header from '../components/Header.vue'
    import Footer from '../components/Footer.vue'
</script>

<template>
    <Header />
        <div class="flex w-[30%] m-auto gap-5">
            <div class="flex my-10 h-full w-full flex-col justify-center bg-white shadow-xl ">
                <div class="flex-1 overflow-y-auto px-4 py-6">
                    <h2 class="text-lg font-medium text-gray-900" id="slide-over-title">Shopping cart</h2>
                    <div class="mt-8">
                        <div class="flow-root">
                            <ul v-for="card in cards" :key="card._id" role="list" class="-my-6 divide-y divide-gray-200">
                                <li  class="flex py-6">
                                    <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                        <img :src="serverUrl+card.product.image" alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." class="h-full w-full object-cover object-center">
                                    </div>
                                    <div class="ml-4 flex flex-1 flex-col">
                                        <div>
                                        <div class="flex justify-between text-base font-medium text-gray-900">
                                            <h3>
                                                <!-- <div>{{ card.createdAt }}</div> -->
                                                <div>{{ card.product.title }}</div>
                                            </h3>
                                            <p class="ml-4">${{ card.product.price }}</p>
                                        </div>
                                        <p class="mt-1 text-sm text-gray-500">Size: {{ card.size.size }}</p>
                                    </div>
                                        <div class="flex flex-1 items-end justify-between text-sm">
                                            <p class="text-gray-500">Qty {{ card.quantity }}</p>

                                            <div class="flex">
                                                <button @click="removeProductFromCard(card._id)" class="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="border-t border-gray-200 px-4 py-6 sm:px-6">
                <div class="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>${{ calculateSubtotal() }}</p>
                </div>
                <p class="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                <RouterLink to="/order" class="mt-6">
                    <!-- @click="storeData" -->
                    <div  class="mt-6 flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Checkout</div>
                </RouterLink>
                <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <p>
                    or
                    <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500">
                        Continue Shopping
                        <span aria-hidden="true"> &rarr;</span>
                    </button>
                    </p>
                </div>
                </div>
            </div>
            <!--  -->
            
        </div>
    <!-- Footer -->
    <Footer/>
</template>
<script>
import axios from 'axios';
export default {
    data(){
        return{
            array:[],
            cards:[],
            serverUrl: 'https://shoe-shop-api-latest.onrender.com/static/',

            products:[],
           
        }
    },
    created(){
        this.getAllCard();
    },
    methods: {
        async getAllCard(){
            await axios.get("https://shoe-shop-api-latest.onrender.com/card/all")
            .then(async(res) =>{
                this.cards = await res.data.data;
                console.log(this.cards);
            })
        },
        async storeData() {
            const promises = [];

            for (const element of this.cards) {
                const promise = await axios.post("https://shoe-shop-api-latest.onrender.com/order/create", element)
                    .then(response => {
                        // console.log('Data stored successfully!', response);
                        return response.data.data._id;
                        
                    })
                    .catch(error => {
                        console.error('Error while storing data:', error);
                        return null; // Handle the error gracefully or omit this line if you want to skip errors.
                    });
                console.log(await promise);
                promises.push(promise);
            }
            localStorage.setItem("promises", JSON.stringify(promises));
        },
        removeProductFromCard(cardId){
            axios.post(`https://shoe-shop-api-latest.onrender.com/card/delete/${cardId}`)
            .then(res => {
                this.getAllCard();
            })
        },
        calculateSubtotal(){
            let subtotal=0;
            for(const element of this.cards){
                console.log(element.quantity,element.product.price);
                subtotal = subtotal + parseFloat(element.quantity)*parseFloat(element.product.price);
                this.$store.commit('setSubtotal',subtotal);
            }
            return subtotal;
        }
    }
}
</script>