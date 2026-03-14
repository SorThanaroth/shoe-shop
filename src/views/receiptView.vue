<script setup>
    import { RouterLink } from 'vue-router';
</script>
<template>
    <div>
        <div class="flex gap-4 mx-52 py-10 text-4xl text-[#ffbe1c]">
            <div>Order</div>
            <div>{{ orderDetails._id }}</div>
            <div>Confirmed</div>
        </div>
        <!--  -->
        <div class="w-full h-[1px] bg-black"></div>
        <!--  -->
        <div class="mt-6 mx-52 flex justify-between">
            <div>{{ orderDetails.username }}</div>
            <div>{{ orderDetails.createdAt }}</div>
        </div>
    </div>
    <!--  -->
    <div class="ml-52 flex w-full h-[400px] ">
        <div class="flex h-full items-center">
            <img src="../assets/image/logoadidas.png" alt="">
        </div>
        <div class="ml-8 text-5xl h-full flex items-center"><strong>Buy me a shoes</strong></div>
    </div>
    <!--  -->
    <div class="ml-52 w-1/3 ">
        <div class="text-3xl my-6"><strong>Thank you for your purchase!</strong></div>
        <p>Hi {{ orderDetails.username }}, we're getting your order ready to be shipped. We will notify you when it has been sent.</p>
    </div>
    <!--  -->
    <div class="ml-52 my-6 flex">
        <RouterLink to="/home/logined">
            <button type="button" class="px-6 py-3.5 text-base font-medium text-white inline-flex items-center bg-[#ffbe1c] hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-yellow-100 rounded-lg text-center dark:bg-yellow-400 dark:hover:bg-yellow-400 dark:focus:ring-yellow-400">
                View your order
            </button>
        </RouterLink>
        <div class="px-6 py-3.5">
            <strong>or</strong>
        </div>
        <!-- <RouterLink to="/home/logined"> -->
            <button @click="deleteCardById" class="text-blue-600 px-6 py-3.5">Visit our Store</button>
        <!-- </RouterLink> -->
    </div>
    <div class="ml-52 mt-16 text-4xl">
        <strong>Order Summary</strong>
    </div>
    <!--  -->
    <div v-for="card in cards" :key="card._id" class="h-[80px] mx-52 my-6 flex gap-[18%]">
        <div class="w-1/12">
            <img :src="serverUrl+card.product.image" alt="">
        </div>
        <div class="pt-6">
            <div>
                <strong class="text-xl">{{ card.product.title }}</strong>
            </div>
            <div>size: {{ card.size.size }}</div>
        </div>
        <div class="pt-6">
            <strong class="text-xl">$ {{card.product.price  }}</strong>
        </div>
        <!-- quantity -->
        <div class="pt-6">
            <strong class="text-xl">x {{card.quantity  }}</strong>
        </div>
    </div>
    <div class="w-[80%] mx-52 h-[1px] bg-[#ffbe1c] my-8"></div>
    <div class="mx-52 flex justify-end">
        <div class="flex my-4 h-full w-1/4 flex-col justify-center rounded-lg bg-white shadow-xl p-6">
            <div class="text-lg font-semibold pl-2 pb-4 ">Summary</div>
            <div class="flex justify-between px-2">
                <div>Sub Total</div>
                <div>$ {{ sub_total }}</div>
            </div>
            <div class="flex justify-between px-2 py-2">
                <div>Shipping</div>
                <div>$ {{ orderDetails.shipping_price }}</div>
            </div>
            <div class="w-full h-[1px] bg-black my-2"></div>
            <div class="flex justify-between px-2">
                <div><strong>Total</strong></div>
                <div><strong>$ {{ orderDetails.total_price }}</strong></div>
            </div>
        </div>
    </div>

    <!--  -->
    <div class="ml-52 mt-16 text-3xl">
        <strong>Order Summary</strong>
    </div>
    <div class="mx-52 mt-8">
        <div class="relative w-1/2 overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <tbody>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700  dark:hover:bg-gray-600">
                        <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                            <div  class="pl-3">
                                <div class="text-base font-semibold">Shipping Address: 
                                    {{ orderDetails.street_address }} {{ orderDetails.address }},
                                </div>
                                <div class="text-base font-semibold">hii
                                    {{ orderDetails.state }}, {{ orderDetails.country }}. {{ orderDetails.postal_code }}
                                </div>
                            </div>  
                        </th>
                        <td class="px-6 py-4">
                            
                        </td>
                        <td class="px-6 py-4">
                            
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- Payment -->
        
        <div class="relative overflow-x-auto my-4">
            <table class="w-1/2 text-sm text-left text-gray-500 dark:text-gray-400">
                <tbody>
                    <tr class="bg-white dark:bg-gray-800 dark:border-gray-700  dark:hover:bg-gray-600">
                        
                        <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                            <div class="pl-3">
                                <div class="text-base font-semibold">Shipping Method</div>
                                <div class="font-normal text-gray-500">{{ orderDetails.company_shipping }} (Estimated ship time of 1-3 days)</div>
                            </div>  
                        </th>

                        <td class="text-gray-900 px-6 py-4">
                            <div class="pl-3">
                                <div class="text-base font-semibold">Payment Method</div>
                                <div class="flex font-normal text-gray-500">
                                    <svg aria-hidden="true" class="w-10 h-3 mr-2 -ml-1" viewBox="0 0 660 203" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M233.003 199.762L266.362 4.002H319.72L286.336 199.762H233.003V199.762ZM479.113 8.222C468.544 4.256 451.978 0 431.292 0C378.566 0 341.429 26.551 341.111 64.604C340.814 92.733 367.626 108.426 387.865 117.789C408.636 127.387 415.617 133.505 415.517 142.072C415.384 155.195 398.931 161.187 383.593 161.187C362.238 161.187 350.892 158.22 333.368 150.914L326.49 147.803L319.003 191.625C331.466 197.092 354.511 201.824 378.441 202.07C434.531 202.07 470.943 175.822 471.357 135.185C471.556 112.915 457.341 95.97 426.556 81.997C407.906 72.941 396.484 66.898 396.605 57.728C396.605 49.591 406.273 40.89 427.165 40.89C444.611 40.619 457.253 44.424 467.101 48.39L471.882 50.649L479.113 8.222V8.222ZM616.423 3.99899H575.193C562.421 3.99899 552.861 7.485 547.253 20.233L468.008 199.633H524.039C524.039 199.633 533.198 175.512 535.27 170.215C541.393 170.215 595.825 170.299 603.606 170.299C605.202 177.153 610.098 199.633 610.098 199.633H659.61L616.423 3.993V3.99899ZM551.006 130.409C555.42 119.13 572.266 75.685 572.266 75.685C571.952 76.206 576.647 64.351 579.34 57.001L582.946 73.879C582.946 73.879 593.163 120.608 595.299 130.406H551.006V130.409V130.409ZM187.706 3.99899L135.467 137.499L129.902 110.37C120.176 79.096 89.8774 45.213 56.0044 28.25L103.771 199.45L160.226 199.387L244.23 3.99699L187.706 3.996" fill="#0E4595"/><path d="M86.723 3.99219H0.682003L0 8.06519C66.939 24.2692 111.23 63.4282 129.62 110.485L110.911 20.5252C107.682 8.12918 98.314 4.42918 86.725 3.99718" fill="#F2AE14"/></svg>
                                    <div>-${{ orderDetails.total_price }}</div>
                                </div>
                            </div> 
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="w-full h-[1px] bg-[#ffbe1c]"></div>
    <div class="flex justify-center mx-52 py-10 text-xl ">
        <div>If you have any questions, reply to this email or contact us at buymeashoes@gmail.com</div>
    </div>
</template>
<script>
    import axios from 'axios';
export default {
    data(){
        return{
            orderDetails:'',
            cards:[],
            sub_total:this.$store.getters.getSubtotal,
            serverUrl: 'https://shoe-shop-api-latest.onrender.com/static/',
        }
    },
    created(){
        this.getAllOrderDetail();
        this.getAllCard();
    },
    methods: {
        async getAllOrderDetail(){
            await axios.get(`https://shoe-shop-api-latest.onrender.com/orderDetail/${this.$store.getters.getOrderDetailId}`)
            .then(async(res) => {
                this.orderDetails = await res.data.data;
                console.log(this.orderDetails);
                console.log(this.$store.getters.getOrderDetailId);
                console.log();
            })
        },
        async getAllCard(){
            await axios.get("https://shoe-shop-api-latest.onrender.com/card/all")
            .then(async(res) =>{
                this.cards = await res.data.data;
                console.log(this.cards);
            })
        },
        async deleteCardById(){
            console.log("lalll");
            console.log(this.$store.getters.getUserId);
            for(const element of this.cards){
                if(element.user._id == this.$store.getters.getUserId){
                    await axios.post(`https://shoe-shop-api-latest.onrender.com/card/delete/userid/${this.$store.getters.getUserId}`)
                    .then(res =>{
                        console.log("Delete cards success!!");
                    })
                }
            }
        }
    }
}
</script>