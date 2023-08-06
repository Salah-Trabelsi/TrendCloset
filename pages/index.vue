<template>
    <div class="bg-image height-res-auto">
        <v-container>
            <v-row cols="12">
                <v-col cols="12" sm="6" md="6" lg="6">
                    <div class="mt-13 pt-16">
                        <v-icon size="50px" color="pink" class="mb-10">mdi-tag-multiple</v-icon>
                        <h1 class="text-black text-h2">Ihre, ultimative<br> Mode-Destination</h1> 
                    </div>
                    <div class="mt-12">
                        <p class="font-weight-light text-grey-darken-1">Shoppen Sie noch heute und erhalten Sie
                        <span class="font-weight-bold text-black">20% Rabatt</span></p>
                    </div>
                    <v-btn class="mt-10 text-lowercase rounded-0" color="#27C7D4" size="large"
                    @click="$router.push('/product')">Shop Now</v-btn>
                </v-col>
                <v-col cols="12" sm="6" md="6" lg="6">
                    <div class="mx-auto image-container hidden-sm-and-down">
                        <img src="@/assets/Layer-hmp.png" width="100%" alt="" />
                    </div>
                   
                </v-col>
            </v-row>
        </v-container>
    </div>

    <v-container>
        <v-row cols="12" class="mt-6 mb-4">
            <v-col cols="12" md="4">
                <div class="d-flex justify-center">
                    <div class="ma-2">
                        <v-icon size="45px" class="flip-h custom-icon">mdi-truck-fast-outline</v-icon></div>
                    <div class="ma-2">
                        <p class="text-uppercase mb-3">LIEFERUNG AM NÄCHSTEN TAG</p>
                        <p>Erleben Sie den Komfort des Versands am nächsten Tag</p>
                        <p>Wir legen Wert auf eine schnelle Lieferung und stellen sicher</p>
                    </div>
                </div>
            </v-col>
            <v-col cols="12" md="4">
                <div class="d-flex justify-center">
                    <div class="ma-2">
                        <v-icon :rotate="90" size="45px" class="flip-h custom-icon">mdi-refresh</v-icon>
                    </div>
                    <div class="ma-2">
                        <p class="text-uppercase mb-3">KOSTENLOSE 20-TÄGIGE RÜCKGABE</p>
                        <p>Kaufen Sie beruhigt über unseren sicheren Checkout-Prozess ein.</p>
                        <p>Wir legen großen Wert auf Ihre Online-Sicherheit</p>
                    </div>
                </div>
            </v-col>
            <v-col cols="12" md="4">
                <div class="d-flex justify-center">
                    <div class="ma-2">
                        <v-icon :rotate="90" size="45px" class="flip-h custom-icon">mdi-lock-outline</v-icon>
                    </div>
                    <div class="ma-2">
                        <p class="text-uppercase mb-2">SICHERE KASSE</p>
                        <p>Erleben Sie den Komfort des Versands am nächsten Tag</p>
                        <p>Wir legen Wert auf eine schnelle Lieferung und stellen sicher</p>
                    </div>
                </div>
            </v-col>
        </v-row>
    </v-container>
    <v-row cols="12">
        <v-col cols="12" sm="6" md="6" lg="6">
            <div class="bg-image-col">
                <div class="center-col">
                    <v-icon class="" color="pink" size="50px">mdi-cloud-outline</v-icon> <br>
                    <div class="title-col">
                        <h1 class="text-black text-h2">Diese Saison</h1>
                    </div>
                    <div class="pargraphe-col mt-6">
                        <p class="text-uppercase font-weight-light text-grey-darken-1">Seien Sie bereit für Veränderungen</p>
                    </div>
                    <div class="button-col">
                        <v-btn class="mt-10 custom-btn text-lowercase rounded-0" color="#27C7D4" size="x-large"
                        @click="$router.push('/damen')">Shop Damen</v-btn>
                    </div>
                </div>
            </div>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="6">
            <div class="bg-image-col-2">

            </div>
        </v-col>
    </v-row>
    <v-container class="mt-5">
        <div class="text-center mb-6">
            <h2 class="text-h3">Neu eingetroffen</h2>
            <h3 class="text-h6 mt-3 text-uppercase font-weight-light text-grey-darken-1">Denim-Träume</h3>
        </div>

        <v-row cols="12">
            <v-col v-for="product in slicedProducts" :key="product.id" cols="12" sm="6" md="4">
                <ProductNewArrivals :product="product" />
            </v-col>
        </v-row>
    </v-container>

    <v-row cols="12" class="mt-7">
        <v-col cols="12" sm="6" md="6" lg="6">
            <div class="bg-image-col-3">

            </div>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="6">
            <div class="bg-image-col">
                <div class="center-col">
                    <v-icon class="" color="pink" size="50px">mdi-fire</v-icon> <br>
                    <div class="title-col">
                        <h1 class="text-black text-h2 text-center">Erfahrung<br> Welt</h1>
                    </div>
                    <div class="pargraphe-col mt-6">
                        <p class="text-uppercase font-weight-light text-grey-darken-1">IN NEUEM LOOK</p>
                    </div>
                    <div class="button-col">
                        <v-btn class="mt-10 custom-btn text-lowercase rounded-0" color="#27C7D4" size="x-large"
                        @click="$router.push('/herren')">Shop Herren</v-btn>
                    </div>
                </div>
            </div>
        </v-col>
    </v-row>


    <v-container class="mt-5">
        <h2 class="mb-6 font-weight-light text-grey-darken-1 text-uppercase">GERADE ANGESAGT</h2>
        <v-row cols="12">
            <v-col v-for="product in displayedProducts" :key="product.id" cols="12" sm="6" md="4" lg="3">
                <ProductHome :product="product"  />
            </v-col>
        </v-row>
    </v-container>

    <div class="bg-image summer-highlight mt-6" style="height: 600px;">
        <v-container>
            <v-row cols="12" no-gutters>
                <v-col cols="12" sm="6" md="6" lg="6">
                    <div class="st-overlay-style">
                        <div class="bg-image-col-4 mt-11 style-scale"></div>
                    </div>
                </v-col>
                <v-col cols="12" sm="6" md="6" lg="6">
                    <v-card height="439px" class="mt-11 rounded-0">
                        <v-card-text class="mt-12 custom-margin-top">
                            <div class="ml-13">
                                <div class="card-sub-title mb-5">
                                    <p class="font-weight-light text-grey-darken-1">Salah Trabelsi 
                                        <span class="ml-4">Mai 23, 2023</span>
                                    </p>
                                </div>
                                <div class="card-title mb-5"><h3 class="text-h4">TrendCloset</h3></div>
                                <div class="card-pargarphe" style="line-height: 28px;">
                                    <p class="font-weight-light text-grey-darken-1">Entdecken Sie in unserem Online-Shop eine große Auswahl </p> 
                                    <p class="font-weight-light text-grey-darken-1">an trendiger und modischer Herren- und Damenbekleidung</p>
                                    <p class="font-weight-light text-grey-darken-1">Entdecken Sie die neuesten Stile, von lässig bis formell,</p>
                                     <p class="font-weight-light text-grey-darken-1"> und kaufen Sie mit Zuversicht hochwertige Produkte ein, die Essenz zeitgenössischer Mode einfangen</p>
                                </div>
                            </div>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>

</template>

<script setup>

    import products from '../data';
    
   
    const slicedProducts = products.slice(0, 3);

    const displayedProducts = products.slice(0, 12);

    import { useCartStore } from '~/store/cart';

    const cartStore = useCartStore();

   
</script>

<style scoped lang="scss">

.divider {

    width: 75%;
}

.bg-image {

    background-image: url('@/assets/backg-Home-page.jpg');
    background-size: cover;
    background-position: center;
    height: 650px;
}

.bg-image-col {

    background-image: url('@/assets/this-season.jpg');
    background-size: cover;
    background-position: center;
    height: 600px;
}

.bg-image-col-2 {

    background-image: url('@/assets/brand-new.jpg');
    background-size: cover;
    background-position: center;
    height: 600px;
}

.bg-image-col-3 {

    background-image: url('@/assets/layer-514.jpg');
    background-size: cover;
    background-position: center;
    height: 600px;
}

.bg-image-col-4 {

background-image: url('@/assets/califorania-summer-sytle.jpg');
background-size: cover;
background-position: center;
height: 440px;
position: relative;

}

.custom-margin-top {

    margin-top: 6rem !important;
}
.image-container {

    width: 100%;
    height: 630px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.image-container img {

    width: 100%;
    height: auto;
     max-height: 100%;
    object-fit: contain;
}

h1 {

    line-height: 70px;
}

.custom-icon {

    transition: transform 0.8s ease;
}

.custom-icon:hover  {

    transform: translatey(-10px);

}

.center-col {

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.custom-btn {

    background-color: #27C7D4;
    background-image: linear-gradient(to left, transparent 50%, black 50%);
    background-position: 100%;
    background-size: 200% 100%;
    transition: background-position 0.3s, background-color 0.3s;

  &:hover {
    background-position: 0%;
    background-color: black;
    color: #ffffff;
  }
}

@media screen and (max-width: 1278px) {

    .custom-margin-top {

        margin-top: 1rem !important;
    }
}

@media screen and (max-width: 600px) {
    .summer-highlight {

        height: auto !important;
    
    }

    .custom-margin-top {

        margin-top: 2rem !important;
    }
}
@media screen and (max-width: 415px) {
.height-res-auto {

    height: auto;
}

}





</style>

