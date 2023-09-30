<template>
    <highcharts ref="chartRef" :options="chartOptions"/>
</template>

<script lang="ts" setup>
import {LocalDateTime} from "@js-joda/core";
import {computed} from "@vue/reactivity";

const {chartOptions, startTimestamp, endTimestamp} = defineProps<{
    chartOptions: object,
    startTimestamp: LocalDateTime,
    endTimestamp: LocalDateTime,
}>()

const highcharts = useNuxtApp().vueApp.component('highcharts')

const metricData = computed(() => {
    return `calculating data from ${startTimestamp} - ${endTimestamp}`
})

const chartRef = ref(null)

const reflowChart = () => {
    if (chartRef.value.chart) {
        const chart = chartRef.value.chart;
        console.debug("Reflowing chart...");
        chart.reflow();
    }
}

onMounted(() => {
    const chart = chartRef.value.chart;
    console.debug("Chart has reflow()?", chart.reflow !== undefined)
    // Will have chart. null check not needed.
    chart.reflow();
});

defineExpose({
    reflowChart
})
</script>
