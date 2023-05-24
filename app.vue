<template>
  <v-app id="inspire" :theme="cartStore.getTheme">
    <!--Header-->
    <Header />
    <v-main>  
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<script setup>

import { useCartStore } from './store/cart';

const cartStore = useCartStore()
</script>
