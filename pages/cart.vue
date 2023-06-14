<template>
    <div class="py-6">
      <v-row>
        <v-col md="8">
          <v-card class="py-5 px-4">
            <v-card-title class="mb-5"> My Cart </v-card-title>
            <v-card-text v-if="cartStore.formattedCart.length">
              <div v-for="item in cartStore.formattedCart" :key="item.id" class="mb-3">
                <v-row>
                  <v-col sm="4">
                    <div class="d-flex align-center no-wrap">
                      <img v-if="item.image"
                        style="width: 90px; height: 90px; object-fit: cover"
                        :src="item.image"
                      />
                      <h3 class="text-capitalize ml-3">
                        {{ item.name }}
                      </h3>
                    </div>
                  </v-col>
                  <v-col sm="8">
                    <div
                      class="d-flex justify-space-between align-center no-wrap w-full h-100"
                    >
                      <div class="d-flex align-center rounded" style="background-color: #08C5D1;;">
                        <span
                          class="icon d-flex align-center pa-3"
                          style="cursor: pointer"
                          @click="cartStore.add(item.id)"
                        >
                          <v-icon> mdi-plus </v-icon>
                        </span>
                        <span class="number d-flex align-center pa-3">
                          {{ item.quantity }}
                        </span>
                        <span
                          style="cursor: pointer"
                          class="icon d-flex align-center pa-3"
                          @click="cartStore.remove(item.id)"
                        >
                          <v-icon> mdi-minus </v-icon>
                        </span>
                      </div>
                      <p>
                        {{ item.quantity }}
                        X {{ item.price }} =
                        <strong>
                          {{ item.cost }}
                        </strong>
                      </p>
                      <v-btn @click="cartStore.removeProduct(item.id)" icon>
                        <v-icon color="red"> mdi-delete </v-icon>
                      </v-btn>
                    </div>
                  </v-col>
                </v-row>
              </div>
            </v-card-text>
            <v-card-text class="text-center" v-else>
              <v-btn class="mx-auto" @click="$router.push('/')" color="#08C5D1;" style="background-color: #08C5D1;">
                Ihr Warenkorb ist leer.
              </v-btn>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col v-if="cartStore.total" md="4">
          <v-card class="py-5 px-4">
            <v-card-title class="mb-5"> Bestellübersicht </v-card-title>
            <v-card-text>
              <div class="d-flex align-center justify-space-between mb-4">
                <p class="ma-0">Zwischensumme</p>
                <p class="text-pink">{{ cartStore.total }} €</p>
              </div>
              <div class="d-flex align-center justify-space-between mb-4">
                <p class="ma-0">Steuer</p>
                <p class="text-pink">0</p>
              </div>
              <div class="d-flex align-center justify-space-between mb-4">
                <p class="ma-0">Versandkosten</p>
                <p class="text-pink">0</p>
              </div>
              <v-divider></v-divider>
              <div class="py-3 d-flex align-center justify-space-between mb-4">
                <p class="ma-0">Bestellsumme</p>
                <p class="text-pink">${{ cartStore.total }}</p>
              </div>
              <v-btn color="#08C5D1" block> Kasse </v-btn>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </template>

<script setup>

import { useCartStore } from '~/store/cart';
import { onUnmounted, watch } from 'vue'
const cartStore = useCartStore();

if(typeof localStorage !== 'undefined') {
    cartStore.cartContent = JSON.parse(localStorage.getItem('cartContent')) || {}
}


watch(
  () => cartStore.cartContent,
  (newValue) => {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('cartContent', JSON.stringify(newValue));
    }
  },
  { deep: true } // Enable deep watching for nested objects
);


// Watch for changes in cartContent and update localStorage
onUnmounted(() => {
    if(typeof localStorage != 'undefined') {
        localStorage.setItem('cartContent', JSON.stringify(cartStore.cartContent))
    }
})


useHead({

title:'TrendCloset | Cart', 
meta:[
    {
        name:'description', content:'Willkommen in Ihrem Warenkorb! Hier können Sie die von Ihnen ausgewählten Artikel überprüfen und verwalten. Nehmen Sie sich einen Moment Zeit, um Ihre Auswahl zu bestätigen, bevor Sie zur Kasse gehen'
    }
]
})
    
</script>

<style lang="scss" scoped>

</style>