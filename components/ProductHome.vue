<template>
    <div class="product-card h-50">
        <router-link :to="`/${product.id}`">
            <img :src="product.image" :alt="product.name" class="w-100" />
        </router-link>
        <h3>{{ product.name }}</h3>
        <div class="d-flex justify-center justify-space-between">
                <!-- <v-divider  class="divider mt-7" :thickness="1" /> -->
                <hr class="divider mt-7" color="#E0E0E0" />
            <div>  
                <v-btn @click="cartStore.add(product.id)" outlined class="text-non elevation-0" icon>
                    <v-icon size="23px" class="pa-6 rounded-circle" color="white"
                    style="background-color: #08C5D1;">
                        mdi-cart-outline
                    </v-icon>
                </v-btn>
            </div>
        </div>
        <div class="price mt-2">
            <p class="font-weight-bold">{{ product.price }} €</p>
        </div>
    </div>
</template>

<script setup>

const {product} = defineProps(['product'])

import { useCartStore } from '~/store/cart';

const cartStore = useCartStore();
    
</script>

<style scoped>
.divider {

    width: 75%;
}

</style>