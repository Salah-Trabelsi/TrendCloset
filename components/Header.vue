<template>
    <v-app-bar>
        <v-toolbar>
            <v-toolbar-title @click="$router.push('/')" style="cursor: pointer;">
                <div class="logo-image">
                    <img src="../assets/Logo.png" alt="closet">
                </div>
            </v-toolbar-title>
            <v-spacer></v-spacer>
                <v-btn icon @click="drawer = !drawer" class="hidden-md-and-up">
                    <v-icon>mdi-menu</v-icon>
                </v-btn>
                <v-toolbar-items class="hidden-sm-and-down">
                    <v-btn flat><NuxtLink to="/product">Products</NuxtLink></v-btn>
                    <v-btn flat><NuxtLink to="/Damen">Damen</NuxtLink></v-btn>
                    <v-btn flat><NuxtLink to="/Herren">Herren</NuxtLink></v-btn>
                </v-toolbar-items>
            <v-btn @click="$router.push('/cart')" class="text-none" stacked>
                <v-badge :content="getProductTotal" color="#27C7D4">
                    <v-icon size="30px">
                        mdi-cart-outline
                    </v-icon>
                </v-badge>
            </v-btn>
            <v-btn 
                class="text-none" 
                :prepend-icon="
                theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
                size="40px"
                @click="cartStore.toggleTheme()">
            </v-btn>
        </v-toolbar>
        <v-overlay v-model="drawer" :value="drawer" transition="overlay-transition" class="mt-16" width="50%">
            <v-drawer v-model="drawer" temporary>
                <v-list>
                <v-list-item v-for="item in navigationItems" :key="item.path">
                    <v-list-item-title>
                    <NuxtLink :to="item.path" @click="closeDrawer">{{ item.label }}</NuxtLink>
                    </v-list-item-title>
                </v-list-item>
                </v-list>
            </v-drawer>
        </v-overlay>
    </v-app-bar>
</template>

<script setup>
  import { useCartStore } from '../store/cart'

  import { ref, computed, watch, onMounted, onUnmounted } from 'vue'


const cartStore = useCartStore();

const theme = computed(() => cartStore.getTheme)

const getProductTotal = computed(() => cartStore.productTotal)

// onMounted(() => {
//     cartStore.loadCartContent();
// });

onBeforeMount(() => {
    cartStore.loadCartContent();
    if (typeof localStorage !== 'undefined') {
      const storedProductTotal = JSON.parse(localStorage.getItem('productTotal'));
      const storedTheme = localStorage.getItem('theme');
      if (storedProductTotal !== null) {
        cartStore.setProductTotal(storedProductTotal);
      }
      if (storedTheme) {
        cartStore.theme = storedTheme;
      }
    }
  });

watch(getProductTotal, (newValue) => {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('productTotal', String(newValue));
  }
});

const navigationItems = [

    { label: 'Products', path: '/product' },
    { label: 'Damen', path: '/Damen' },
    { label: 'Herren', path: '/Herren' },

]



const drawer = ref(false)

function closeDrawer() {
  drawer.value = false;
}


</script>

<style scoped>
a {
    text-decoration: none;
    color: unset;
}

.logo-image {
    position: relative;
    top: 18px;
    z-index: 99999999999999999999;
    margin-left: -1rem;
}

.v-list.v-theme--light.v-list--density-default.v-list--one-line {
    height: 250px !important;
    text-align: center;
    padding: 36px;
}
</style>