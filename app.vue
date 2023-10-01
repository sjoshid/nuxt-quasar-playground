<template>
    <div>
        <NuxtLayout>
            <NuxtPage/>
        </NuxtLayout>
    </div>
</template>

<script lang="ts" setup>
const $q = useQuasar()
$q.dark.set(true)
</script>
