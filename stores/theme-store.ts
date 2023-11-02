
export const useThemeStore = defineStore('theme', () => {
    // There is no need to add toggle() action because darkModeEnabled is used as v-model in q-toggle. 
    // Remember v-model is a TWO-WAY BINDING. This means q-toggle will toggle the model for us. 
    const darkModeEnabled = ref(true)

    return { darkModeEnabled }
})