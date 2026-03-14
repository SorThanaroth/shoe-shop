<script setup>
    import Header from '../components/Header.vue'
    import Footer from '../components/Footer.vue'
</script>
<template>
    <Header/>
    <div class="flex w-[40%] m-auto gap-5">
        <div class="flex my-10 h-full flex-col justify-center bg-white shadow-xl w-full">
            <div class="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                <h2 class="text-2xl font-medium text-gray-900 pb-2" id="slide-over-title"><strong>Payment</strong></h2>
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <tbody>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700  dark:hover:bg-gray-600">
                                <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                    <div  class="pl-3">
                                        <div class="text-base font-semibold">Shipping Address: {{ orderDetails.street_address }} {{ orderDetails.address }},</div>
                                        <div class="text-base font-semibold">{{ orderDetails.state }}, {{ orderDetails.country }}. {{ orderDetails.postal_code }}</div>
                                    </div>  
                                </th>
                                <td class="px-6 py-4">
                                    
                                </td>
                                <td class="px-6 py-4">
                                    
                                </td>
                            </tr>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-600">
                                
                                <th scope="row" class="flex items-center pl-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <div class="pl-3 py-4">
                                        <div class="text-base font-semibold">Shipping metthod</div>
                                    </div>
                                </th>
                                
                                <td class="px-6 py-4">
                                    <div class="text-base font-semibold">{{ orderDetails.company_shipping }}</div>
                                </td>
                                <td class="px-6 py-4">
                                    <div class="text-base font-semibold">$ {{ orderDetails.shipping_price }}</div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="flex justify-between mt-4">
                    <div class="text-base font-semibold pl-2 py-4">Payment metthod</div>
                    <div class="flex items-center pr-2 py-4 gap-2">
                        <img class="w-14 " src="../assets/image/vi10.png" alt="">
                        <img class="w-7  " src="../assets/image/ma11.png" alt="">
                    </div>
                </div>
                <div class="mb-6">
                    <label for="Country" class="pl-2 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Card Number</label>
                    <input type="text" id="card_number" v-model="card_number" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0000 0000 0000 0000" required>
                </div>
                <div class="grid gap-6  md:grid-cols-3">
                    <div>
                        <input type="text" id="name_on_card" v-model="name_on_card" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name On Card" required>
                    </div>
                    <div>
                        <input type="text" id="date_of_card" v-model="date_of_card" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="MM/YY" required>
                    </div>
                    <div>
                        <input type="password" id="cvv" v-model="cvv" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="CVV" required>
                    </div>
                </div>
                <!--  -->
                <div class="flex my-4 h-full w-full flex-col justify-center bg-white shadow-xl p-6">
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
                <div class="w-full">
                    <RouterLink to="/receipt">
                        <button @click="addPayment" class=" text-white bg-yellow-300 hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-yellow-400 dark:hover:bg-yellow-400 dark:focus:ring-yellow-400">Continue</button>
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            sub_total:this.$store.getters.getSubtotal,

            orderDetails:Object,

            userId:'',
            orderDetailId:'',
            card_number:'',
            name_on_card:'',
            date_of_card:'',
            cvv:''
        }
    },
    created(){
        this.getAllOrderDetail();
    },
    methods: {
        async getAllOrderDetail(){

            await axios.get(`https://shoe-shop-api-latest.onrender.com/orderDetail/${this.$store.getters.getOrderDetailId}`)
            .then(async(res) => {
                this.orderDetails = await res.data.data;
                console.log(this.orderDetails);
                console.log(this.$store.getters.getOrderDetailId);
            })
        },
        async addPayment(){
            await axios.post("https://shoe-shop-api-latest.onrender.com/payment/create",{
                userId:this.$store.getters.getUserId,
                orderDetailId:this.$store.getters.getOrderDetailId,
                card_number:this.card_number,
                name_on_card:this.name_on_card,
                date_of_card:this.date_of_card,
                cvv:this.cvv
            }).then(res =>{
                console.log('Data of payment stored successfully!', res);
            })
        }
    }
}
</script>