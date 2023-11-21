<template>
    <div class="grid-stack-item-content c-grid-stack-item-content">
        <p>Period is {{ period.startDateTime.format(usDateFormatter) }} - {{ period.endDateTime.format(usDateFormatter) }}</p>
        <highcharts :options="chartOptions" />
    </div>
</template>

<script lang="ts" setup>
import Highcharts from "highcharts"

const { chartOptions, period } = defineProps<{
    chartOptions: object,
    period: PresetDetails,
}>()

/*Highcharts.Chart.prototype.getChartSize = function () {
    const chart = this, optionsChart = chart.options.chart, widthOption = optionsChart.width,
        heightOption = optionsChart.height, containerBox = chart.getContainerBox();
    /!**
     * The current pixel width of the chart.
     *
     * @name Highcharts.Chart#chartWidth
     * @type {number}
     *!/
    chart.chartWidth = Math.max(// #1393
        0, widthOption || containerBox.width || 600 // #1460
    );
    /!**
     * The current pixel height of the chart.
     *
     * @name Highcharts.Chart#chartHeight
     * @type {number}
     *!/
    chart.chartHeight = Math.max(0, chart?.container?.offsetParent?.offsetHeight || 0);
    chart.containerBox = containerBox;
}*/

const highcharts = useNuxtApp().vueApp.component('highcharts')

</script>

<style>
.c-grid-stack-item-content {
    color: #2c3e50;
    text-align: center;
    background-color: #18bc9c;
}
</style>
