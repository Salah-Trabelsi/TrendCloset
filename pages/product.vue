<template>
    <div>
        <v-container>
            <v-row>
                <v-col cols="12">
                    <v-btn-toggle background-color="primary" dark v-model="selectedCategory" desnse>
                        <v-btn color="#27C7D4" class="text-subtitle-1" value="All" text rounded="xl" size="large">Alle</v-btn>
                        <v-btn color="#27C7D4" class="text-subtitle-1" value="Damen" text rounded="xl" size="large">Damen</v-btn>
                        <v-btn color="#27C7D4" class="text-subtitle-1" value="Herren" text rounded="xl" size="large">Herren</v-btn>
                    </v-btn-toggle>
                </v-col>
            </v-row>
            <v-row cols="12">
                <v-col v-for="product in filteredProducts" :key="product.id" cols="12"  sm="6" md="4" lg="3">
                    <ProductHome :product="product" />
                </v-col>
            </v-row>
            
        </v-container>
    </div>
</template>

<script setup>

import { ref, computed } from 'vue';
import products from '@/data.js';

const selectedCategory = ref('All');
const categories = ['All', 'Herren', 'Damen'];

const filteredProducts = computed(() => {
  if (selectedCategory.value === 'All') {
    return products;
  } else {
    return products.filter((product) => product.category === selectedCategory.value);
  }
});

useHead({

    title:'TrendCloset | Product', 
    meta:[
        {
            name:'description', content:'Entdecken Sie eine kuratierte Auswahl von 22 stilvollen und trendigen Produkten für Männer und Frauen. Von modischer Kleidung bis hin zu unverzichtbaren Accessoires – finden Sie die perfekten Stücke, um Ihren Stil zu unterstreichen und ein Statement zu setzen.'
        }
    ]
})
</script>

<style scoped>

</style>