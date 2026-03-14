<script setup>
    import { onMounted } from 'vue'
    import { Modal } from 'flowbite'
    import { RouterLink } from 'vue-router'
    onMounted(() => {
        const $buttonElement = document.querySelector('#button');
        const $modalElement = document.querySelector('#modal');
        const $closeButton = document.querySelector('#closeButton');

        const modalOptions = {
            backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40'
        }

        if ($modalElement) {
            const modal = new Modal($modalElement, modalOptions);
            $buttonElement.addEventListener('click', () => modal.toggle());
            $closeButton.addEventListener('click', () => modal.hide());
            
            // programmatically show
            // modal.show();
        }
    })
</script>
<template>
    <nav class="bg-[#ffbe1c] p-5 ml-0 mt-0">
        <div class="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
            <div class="flex h-16 items-center justify-between">
                <div class="flex items-center">
                    <div class="flex-shrink-0">
                        <RouterLink to="/home/logined">
                            <img class="w-10" src="../assets//image/logoadidas.png" alt="Your Company">
                        </RouterLink>
                    </div>
                    <div class="hidden md:block">
                        <div class="ml-10 flex items-baseline space-x-4">
                            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                            <RouterLink to="/home/logined" class=" text-white hover:bg-[#f2b31a] rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Home</RouterLink>
                            <RouterLink to="/product" class="text-white hover:bg-[#f2b31a] hover:text-white rounded-md px-3 py-2 text-sm font-medium">Products</RouterLink>
                            <RouterLink to="#" class="text-white hover:bg-[#f2b31a] hover:text-white rounded-md px-3 py-2 text-sm font-medium">Contact</RouterLink>
                            <RouterLink to="/about" class="text-white hover:bg-[#f2b31a] hover:text-white rounded-md px-3 py-2 text-sm font-medium">About</RouterLink>
                            <RouterLink to="#" class="text-white hover:bg-[#f2b31a] hover:text-white rounded-md px-3 py-2 text-sm font-medium">Reports</RouterLink>
                        </div>
                    </div>
                </div>
                
                <div class="flex">
                    <form class="flex items-center">   
                        <label for="simple-search" class="sr-only">Search</label>
                        <div class="relative w-full">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                            </div>
                            <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required>
                        </div>
                        <button type="submit" class="p-2.5 ml-2 text-sm font-medium text-white bg-white rounded-lg border border-gray-200  focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <svg class="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            <span class="sr-only">Search</span>
                        </button>
                    </form>
                    <div class=" md:block ">
                        <div class="ml-4 p-2.5 flex items-center md:ml-6">
                            <button id="button" data-modal-toggle="modal" data-modal-target="modal" type="button" class=" rounded-full  p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                <span class="sr-only">View notifications</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                </svg>

                            </button>
                            <!-- Profile dropdown -->
                            <div class="relative ml-3">
                                <div>
                                    <!-- <RouterLink to="/login"> -->
                                        <button @click="showPopups" type="button" class="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"  aria-expanded="false" aria-haspopup="true">
                                            <span class="sr-only">Open user menu</span>
                                            <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                                        </button>
                                    <!-- </RouterLink> -->
                                    
                                </div>
                                <!--
                                    Dropdown menu, show/hide based on menu state.
                                    Entering: "transition ease-out duration-100"
                                    From: "transform opacity-0 scale-95"
                                    To: "transform opacity-100 scale-100"
                                    Leaving: "transition ease-in duration-75"
                                    From: "transform opacity-100 scale-100"
                                    To: "transform opacity-0 scale-95"
                                -->
                                <userPopup v-if="showPopup">
                                    <div class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                                        <!-- Active: "bg-gray-100", Not Active: "" -->
                                        <div>
                                            <ul>
                                                <li v-for="user in users" :key="user.id">
                                                    {{ user.username }}
                                                </li>
                                            </ul>
                                        </div>
                                        <RouterLink to="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</RouterLink>
                                        <RouterLink to="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</RouterLink>
                                        <RouterLink to="/login" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</RouterLink>
                                    </div>
                                </userPopup>
                            </div>
                        </div>
                    </div> 
                </div>         
            </div>
        </div>
    </nav>
    

<!-- Main modal -->
<div id="modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full">
    <!-- <div class="relative p-4 w-full max-w-xl h-full md:h-auto">
        <div class="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                <div class="flex justify-between mb-4 rounded-t sm:mb-5">
                    <div class="text-lg text-gray-900 md:text-xl dark:text-white">
                        <h3 class="font-semibold ">
                            Apple iMac 27”
                        </h3>
                        <p class="font-bold">
                            $2999
                        </p>
                    </div>
                    <div>
                        <button id="closeButton" data-modal-hide="modal" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 inline-flex dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="modal">
                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                    </div>
                </div>
                <dl>
                    <dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Details</dt>
                    <dd class="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">Standard glass ,3.8GHz 8-core 10th-generation Intel Core i7 processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4 memory, Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB SSD storage, Gigabit Ethernet, Magic Mouse 2, Magic Keyboard - US.</dd>
                    <dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Category</dt>
                    <dd class="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">Electronics/PC</dd>
                </dl>
                <div class="flex justify-between items-center">
                    <div class="flex items-center space-x-3 sm:space-x-4">
                        <button type="button" class="text-white inline-flex items-center bg-blue-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                            <svg aria-hidden="true" class="mr-1 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path></svg>
                            Edit
                        </button>               
                        <button type="button" class="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                            Preview
                        </button>
                    </div>              
                    <button type="button" class="inline-flex items-center text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900">
                        <svg aria-hidden="true" class="w-5 h-5 mr-1.5 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
                        Delete
                    </button>
                </div>
        </div>
    </div> -->
    <div class="flex w-[30%] m-auto gap-5">
        
            <div class="flex my-10 h-full w-full flex-col justify-center bg-white shadow-xl ">
                <div class="flex-1 overflow-y-auto px-4 py-6">
                    <div class="flex justify-between px-2">
                        <h2 class="text-lg font-medium text-gray-900" id="slide-over-title">Shopping cart</h2>
                        <button id="closeButton" data-modal-hide="modal" type="button" data-modal-toggle="modal">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>

                        </button>
                    </div>
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
</div>
</template>

<script>
    import { RouterLink, RouterView } from 'vue-router'
    import userPopup from './Admin/AddCatePopup.vue'
    import axios from 'axios'
    
    export default {
        name: "App",
        components: {
            userPopup
        },
        data(){
            return{
                showPopup: false,
                users: [],
                cards:[],
                serverUrl: 'https://shoe-shop-api-latest.onrender.com/static/',

                products:[],
            }
        },
        created(){
            this.getAllCard();
        },
        methods: {
            showPopups(){
                this.showPopup = !this.showPopup;
            },
            async getAllCard(){
                await axios.get("https://shoe-shop-api-latest.onrender.com/card/all")
                .then(async(res) =>{
                    this.cards = await res.data.data;
                    console.log(this.cards);
                })
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
        },
        
    }
</script>