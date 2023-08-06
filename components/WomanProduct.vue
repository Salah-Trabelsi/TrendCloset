<template>
    <div>
        <v-container>
            <h1 class="mt-3 mb-4">Damen</h1>
            <v-row cols="12">
                <v-col  v-for="product in WoamanProduct" :key="product.id" cols="12"  sm="6" md="4" lg="3">
                    <div class="product-card h-50">
                        <router-link :to="`/${product.id}`">
                            <img :src="product.image" :alt="product.name" class="w-100" />
                        </router-link>
                        <h3>{{ product.name }}</h3>
                        <div class="d-flex justify-center justify-space-between">
                            <hr class="divider mt-7" color="#E0E0E0" />
                            <div>  
                                <v-btn @click="cartStore.add(product.id)" outlined class="text-non elevation-0" icon>
                                    <v-icon size="23px" class="pa-6 rounded-circle" color="white"
                                    style="background-color: pink">
                                        mdi-cart-outline
                                    </v-icon>
                                </v-btn>
                            </div>
                        </div>
                        <div class="price mt-2">
                            <p class="font-weight-bold">{{ product.price }} €</p>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import products from '@/data'
    import { useCartStore } from '~/store/cart';

    const cartStore = useCartStore();

    const WoamanProduct = ref([]);

    WoamanProduct.value = products.filter(product => product.category === 'Damen');
</script>

<style scoped>

.divider {

width: 75%;
}

</style>