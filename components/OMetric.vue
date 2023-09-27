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

onMounted(() => {
		console.log("HC options", chartOptions)
});
</script>

<template>
		<highcharts :options="chartOptions"/>
</template>
