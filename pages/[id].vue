<template>
  <div v-if="product">
    <v-container class="mt-7">
        <v-row cols="12">
          <v-col cols="12" sm="6" md="6" lg="6">
            <img :src="product.image" :alt="product.name" class="w-75" />
          </v-col>
          <v-col cols="12" sm="6" md="6" lg="6">
            <h1 class="text-h4">{{ product.name }}</h1>
            <hr class="divider-s-p mt-3" color="#E0E0E0" />
            <p class="mt-3 font-weight-bold">{{ product.price }} €</p>
            <hr class="divider-s-p mt-3" color="#E0E0E0" />
            <p class="mt-5">{{ product.description }}</p>
            <p class="mt-5 font-weight-bold text-grey">{{ product.Stock }} in stock</p>
            <div class="mt-8 align-sm-center">
              <div class="button-stock mt-3">
                <v-btn rounded="xl" size="large" color="#27C7D4" @click="cartStore.add(product.id)">
                  <v-icon dark right class="mr-5">mdi-cart-outline</v-icon> in den Warenkorb
                </v-btn>
              </div>
            </div>
            <p class="mt-16 font-weight-bold">Kategorie: {{ product.category }}</p>

          </v-col>
        </v-row>
    </v-container>
  </div>
  <div v-else>
    Product not found. 
    😢 
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue';
import products from '../data';
import { useRoute } from 'vue-router';
import { useCartStore } from '~/store/cart';
const cartStore = useCartStore();


const route = useRoute();


const props = defineProps({
  id: {
    type: String,
    required: true
  }
});

const product = computed(() => {
  const foundProduct = products.find((product) => product.id === route.params.id);
  return foundProduct;
});







</script>

<style scoped>

.divider-s-p {

  width: 88%;

}

</style>