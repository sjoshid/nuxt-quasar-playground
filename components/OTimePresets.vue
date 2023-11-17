<template>
    <q-select v-model="model" :options="options" dense filled :label="props.label"/>
</template>

<script setup lang="ts">

const props = defineProps<{
    label?: String,
}>()

const model = ref(null)
const options = [
    'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
]
</script>

<style scoped>

</style>