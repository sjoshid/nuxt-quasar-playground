<template>
    <div class="grid-stack-item-content c-grid-stack-item-content">
        <p v-if="period !== null">Period is {{ period.startDateTime.format(usDateFormatter) }} - {{
                period.endDateTime.format(usDateFormatter)
            }}</p>
        <highcharts :options="chartOptions"/>
    </div>
</template>

<script lang="ts" setup>
import Highcharts from "highcharts"

const {chartOptions, period} = defineProps<{
    chartOptions: object,
    period: PresetDetails | null,
}>()

const highcharts = useNuxtApp().vueApp.component('highcharts')
const dummyData = ref('Dummy')

onMounted(() => {
    $fetch<string>('http://localhost:8080/dummy').then(r => dummyData.value = r).catch(e => console.error(e))
})
</script>

<style>
.c-grid-stack-item-content {
    color: #2c3e50;
    text-align: center;
    background-color: #18bc9c;
}
</style>
