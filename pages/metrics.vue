<template>
  <NuxtLayout :name="userLayout">
    <TimeSeriesComponent/>
  </NuxtLayout>
</template>

<script setup lang="ts">
const userLayout = "user-layout"
</script>
