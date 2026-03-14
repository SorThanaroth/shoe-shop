<script setup>
    import Header from '../components/Header.vue'
    import Footer from '../components/Footer.vue'
    import { RouterLink } from 'vue-router';
</script>
<template>
    <Header />
    <div class="flex w-[40%] m-auto gap-5">
        <div class="flex my-10 h-full flex-col justify-center bg-white shadow-xl w-full">
            <div class="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                <h2 class="text-lg font-medium text-gray-900 pb-2" id="slide-over-title">Order Inforamtion</h2>
                
                <!-- <form> -->
                    <div class="grid gap-6 mb-6 md:grid-cols-2">
                        <div>
                            <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User name</label>
                            <input type="text" id="username" v-model="username" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required>
                        </div>
                        <div>
                            <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
                            <input type="tel" id="phone" v-model="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required>
                        </div>
                        
                    </div>
                    
                    <div class="mb-6">
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                        <input type="email" id="email" v-model="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required>
                    </div> 
                    
                    <div class="grid gap-6 mb-6 md:grid-cols-2">
                        <div>
                            <label for="Address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                            <input type="text" id="Address" v-model="address" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="flowbite.com" required>
                        </div>
                        <div>
                            <label for="street_address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Street Address</label>
                            <input type="text" id="street_address" v-model="street_address" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Street Address" required>
                        </div>
                    </div>

                    <div class="grid gap-6 mb-6 md:grid-cols-3">
                        <div>
                            <label for="Country" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Country</label>
                            <select id="countries" v-model="country" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="Cambodia" selected>Cambodia</option>
                            </select>
                        </div>
                        <div>
                            <label for="state" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">State</label>
                            <select id="countries" v-model="state" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option disabled selected>Choose a state</option>
                                <option value="Banteaymeanchey">Banteaymeanchey</option>
                                <option value="Battombong">Battombong</option>
                                <option value="Pusat">Pusat</option>
                                <option value="PhnomPenh">Phnom Penh</option>
                            </select>
                        </div>
                        <div>
                            <label for="postal_code" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Postal Code (Zip)</label>
                            <input type="number" id="postal_code" v-model="postal_code" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required>
                        </div>
                    </div>

                    <!-- Shipping Information -->
                    
                    <h3 class="mb-4 font-semibold text-gray-900 dark:text-white">Shipping Information</h3>
                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <tbody>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td class="w-4 p-4">
                                        <div class="flex items-center">
                                            <input v-model="shipping_price" :value="jnt" id="default-radio-1" type="radio"  name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                        </div>
                                    </td>
                                    <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                        <img class="w-10 h-10 rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/3/35/Logo_J%26T_Merah_Square.jpg" alt="Jese image">
                                        <div class="pl-3">
                                            <div class="text-base font-semibold">J&T Express</div>
                                        </div>  
                                    </th>
                                    <td class="px-6 py-4">
                                        
                                    </td>
                                    <td class="px-6 py-4">
                                        
                                    </td>
                                    <td class="px-6 py-4">
                                        <div  class="font-medium text-blue-600 dark:text-blue-500 hover:underline">$ {{ jnt }}</div>
                                    </td>
                                </tr>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td class="w-4 p-4">
                                        <div class="flex items-center">
                                            <input v-model="shipping_price" :value="vireak" id="default-radio-2" type="radio"  name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                        </div>
                                    </td>
                                    <th scope="row" class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <img class="w-10 h-10 rounded-full" src="https://www.sec4business.com/public/uploads/company-profile/logos/logo-58-1509523122.jpg" alt="Jese image">
                                        <div class="pl-3">
                                            <div class="text-base font-semibold">វិរះប៊ុនថាំ</div>
                                        </div>
                                    </th>
                                    <td class="px-6 py-4">
                                        
                                    </td>
                                    <td class="px-6 py-4">
                                        
                                    </td>
                                    <td class="px-6 py-4">
                                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">$ {{ vireak }}</a>
                                    </td>
                                </tr>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td class="w-4 p-4">
                                        <div class="flex items-center">
                                            <input v-model="shipping_price" :value="zto" id="default-radio-3" type="radio"  name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                        </div>
                                    </td>
                                    <th scope="row" class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <img class="w-10 h-10 rounded-full" src="data:image/png;base64,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" alt="Jese image">
                                        <div class="pl-3">
                                            <div class="text-base font-semibold">ZTO Express</div>
                                        </div>
                                    </th>
                                    <td class="px-6 py-4">
                                       
                                    </td>
                                    <td class="px-6 py-4">
                                        
                                    </td>
                                    <td class="px-6 py-4">
                                        <div class="font-medium text-blue-600 dark:text-blue-500 hover:underline">$ {{ zto }}</div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <RouterLink to="/card">
                        <div class="mt-6 mb-4 flex justify-start text-center text-sm text-gray-500">
                        <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500">
                            <span aria-hidden="true"> &larr;</span>
                            Back to Card
                        </button>
                    </div>
                    </RouterLink>
                    <!--  -->
                    <div class="w-full">
                        <RouterLink to="/payment">
                            <button @click="handleButtonClick" class=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
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
    data() {
        return {
            username: '',
            phone:'',
            email:'',
            address:'',
            street_address:'',
            country:'',
            state:'',
            postal_code:'',

            sub_total:'',
            total_price:'',
            userId:'',

            company_shipping:'',
            shipping_price: '',
            jnt: 1.5,
            vireak: 2,
            zto: 3,

            cards:[],
            newOrderDetailId:''
        }
    },
    created(){
        this.getAllCard();
    },
    methods: {
        
        async addOrder(){
            console.log("Il: "+this.$store.getters.getSubtotal);
            console.log("I2: "+this.$store.getters.getUserId);
            console.log(this.shipping_price);
            if(this.shipping_price == 2){
                this.company_shipping = 'Vireak_Bun_Tham'
            }else if(this.shipping_price == 1.5){
                this.company_shipping = 'J&T'
            }else{
                this.company_shipping = 'ZTO'
            }
            await axios.post("https://shoe-shop-api-latest.onrender.com/orderDetail/create",{
                userId:this.$store.getters.getUserId,
                username: this.username,
                phone:this.phone,
                email:this.email,
                address:this.address,
                street_address:this.street_address,
                country:this.country,
                state:this.state,
                postal_code:this.postal_code,

                total_price:(this.$store.getters.getSubtotal)+(this.shipping_price),
                
                shipping_price: this.shipping_price,

                company_shipping:this.company_shipping,
            })
            .then(res=> {
                // console.log('Data stored successfully!', res);
                this.newOrderDetailId = res.data.data._id
                console.log(this.newOrderDetailId);
                this.storeDataFromCardToOrder(this.newOrderDetailId);
                this.$store.commit('setOrderDetailId',this.newOrderDetailId);
            })
        },
        
        async getAllCard(){
            await axios.get("https://shoe-shop-api-latest.onrender.com/card/all")
            .then(async(res) =>{
                this.cards = await res.data.data;
                console.log(this.cards);
            })
        },
        storeDataFromCardToOrder(OrderDetailId) {
            for(const element of this.cards){
                axios.post("https://shoe-shop-api-latest.onrender.com/order/create", {
                    orderDetail:OrderDetailId,
                    product: element.product,
                    user: element.user,
                    color:element.color,
                    size: element.size,
                    quantity: element.quantity
                })
                .then(response => {
                    console.log('Data stored successfully!', response);
                })
            }
            console.log("called");
        },
        handleButtonClick(){
            this.addOrder();
        }
    }
}
</script>