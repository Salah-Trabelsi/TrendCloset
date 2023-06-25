import { defineStore } from 'pinia'

import products from '../data'


export const useCartStore = defineStore('cart',{

    state: () => ({

        cartContent: {},
        theme: "light",
        totalProducts: 0, 

    }),

    getters: {
        getTheme() {
            return this.theme;
          },


        formattedCart() {
            return Object.keys(this.cartContent).map((productId) => {
                const product = this.cartContent[productId];

                return {

                    id: product.productId,
                    image: products.find((p) => p.id === product.productId).image,
                    name: products.find((p) => p.id === product.productId).name,
                    price: products.find((p) => p.id === product.productId).price,
                    quantity: product.quantity,

                    cost: 
                    product.quantity * products.find((p) => p.id === product.productId).price
                };
            });
        },

        total() {

            return Object.keys(this.cartContent).reduce((acc, id) => {

                const product = products.find(p => p.id === id);
                if(product) {

                    return acc + product.price * this.cartContent[id].quantity;
                }

                return acc + 0;

            }, 0)
        },

        productTotal() {

            return Object.keys(this.cartContent).reduce((acc, id)=> {
                return acc + this.cartContent[id].quantity
            },0)
        },

        getTheme() {

            return this.theme;
        },

        getCartContent() {
            return this.cartContent
        },

    },
    actions: {

        loadCartContent() {
            const cartContent = localStorage.getItem('cartContent');
            const productTotal = localStorage.getItem('productTotal');
            if (cartContent) {
              this.cartContent = JSON.parse(cartContent);
            }
            if (productTotal) {
              this.setProductTotal(parseInt(productTotal));
            }
          },
          
      
          saveCartContent() {
            localStorage.setItem('cartContent', JSON.stringify(this.cartContent))
          },
      

        add(productId) {

            if(this.cartContent.hasOwnProperty(productId)) {

                this.cartContent[productId] = {
                    productId,
                    quantity: this.cartContent[productId].quantity + 1,
                };


            }else {

                this.cartContent[productId] = {
                    productId,
                    quantity: 1,
                };
            };

            this.saveCartContent()

           
        },

        remove(productId) {
            if(!this.cartContent[productId]) {
                return
            }
            this.cartContent[productId].quantity -=1;

            if(this.cartContent[productId].quantity === 0) {

                delete this.cartContent[productId]

            }
            this.saveCartContent()
        },

        removeProduct(productId) {

            delete this.cartContent[productId]
            this.saveCartContent()
        },

        toggleTheme() {
            this.theme = this.theme === "light" ? "dark" : "light";
            this.saveCartContent();
            localStorage.setItem('theme', this.theme); 
           

        },
        
        setProductTotal(total) {
            this.totalProducts = total;
        },

        onInit() {
            this.loadCartContent();
            if (typeof localStorage !== 'undefined') {
              const storedProductTotal = JSON.parse(localStorage.getItem('productTotal'));
              const storedTheme = localStorage.getItem('theme')
              if (storedProductTotal !== null) {
                this.setProductTotal(storedProductTotal);
              }
              if (storedTheme) {
                this.theme = storedTheme; 
                }
            }
        },

    },


      
})