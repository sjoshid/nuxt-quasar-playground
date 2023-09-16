<script lang="ts" setup>
import {GridStackWidget} from "gridstack/dist/types";
const highcharts = useNuxtApp().vueApp.component('highcharts')

defineProps<{ widget: GridStackWidget }>()
const chartOptions = ref({
		title: "Sujit title",
		series: [
				{
						data: [1, 0, 3],
				}
		],

});
</script>

<template>
		<div :gs-x="widget.x" :gs-y="widget.y"
		     :gs-w="widget.w" :gs-h="widget.h"
		     class="grid-stack-item">
				<div class="grid-stack-item-content c-grid-stack-item-content">
						<highcharts :options="chartOptions"/>
				</div>
		</div>
</template>

<style>
.c-grid-stack-item-content {
		color: #2c3e50;
		text-align: center;
		background-color: #18bc9c;
}
</style>
