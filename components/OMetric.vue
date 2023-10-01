<template>
		<div ref="containerRef" class="grid-stack-item-content c-grid-stack-item-content">
				<highcharts ref="chartRef" :options="chartOptions"/>
		</div>
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

const chartRef = ref(null), containerRef = ref(null);

const reflowChart = () => {
		if (chartRef.value.chart && containerRef.value) {
				const chartContainer = containerRef.value
				const chart = chartRef.value.chart
				/*console.log("chartContainer offsetWidth", chartContainer.offsetWidth)
				console.log("chartContainer offsetHeight", chartContainer.offsetHeight)*/
				chart.setSize(chartContainer.offsetWidth - 3, chartContainer.offsetHeight - 3, false)
				chart.reflow()
		}
}

defineExpose({
		reflowChart
})
</script>

<style>
.c-grid-stack-item-content {
		color: #2c3e50;
		text-align: center;
		background-color: #18bc9c;
}
</style>
