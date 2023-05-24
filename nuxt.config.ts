// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

    css: ["vuetify/styles/main.sass", 
        "@mdi/font/css/materialdesignicons.css",
        '@fortawesome/fontawesome-svg-core/styles.css'
    ],

    build: {
        transpile: ["vuetify",
        '@fortawesome/vue-fontawesome',
        '@fortawesome/fontawesome-svg-core',
        '@fortawesome/free-solid-svg-icons',
        '@fortawesome/free-regular-svg-icons',
        '@fortawesome/free-brands-svg-icons'
    ]
    },
    modules: [
        // ...
        '@pinia/nuxt',
    ],
    app: {

        head: {
            title: 'TrendCloset',

            meta: [
                {name: 'description', content:'Entdecken Sie in unserem Online-Shop eine große Auswahl an trendiger und modischer Herren- und Damenbekleidung. Entdecken Sie die neuesten Stile, von lässig bis formell, und kaufen Sie mit Zuversicht hochwertige Produkte ein, die die Essenz zeitgenössischer Mode einfangen'},
                {name: 'keywords', content:'Shop ,HerrenKelidung, DamenKleidung'},
                {name:'author', content:'Salah Trabelsi'}
            ]
        }
    }


});
