<template>
    <NuxtLayout name="user-layout">
        <q-item>
            <q-item-label>Hotspot page</q-item-label>
        </q-item>
        <q-btn color="primary" label="Press Me" @click="getDummyData" />
        <p>{{ dummyData }}</p>
    </NuxtLayout>
</template>

<script setup lang="ts">
const dummyData = ref('')

function getDummyData() {
    $fetch<string>('http://localhost:8080/dummy').then(r => dummyData.value = r).catch(e => console.error(e))
}
</script>