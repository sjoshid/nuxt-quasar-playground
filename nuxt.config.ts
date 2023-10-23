// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ['nuxt-quasar-ui', '@vueuse/nuxt', '@pinia/nuxt'],
    quasar: {
        sassVariables: true,
        config: {
            brand: {
                'dark-page': '#0b1630',
                dark: '#13295c'
            }
        }
    },
})