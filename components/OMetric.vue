<template>
		<highcharts :options="chartOptions" :callback="reflowChart" ref="chartRef"/>
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

const chartRef = ref(null);

const reflowChart = () => {
		const chart = chartRef.value.chart;
		console.log("Chart is ", chart)
		const chartContainer = chartRef.value.chartContainer;
		alert(chartContainer);
}
</script>
