<template>
		<div class="q-pa-md">
				<h5> Showing "{{ gridName }}" </h5>
				<div :class="{'grid-stack': true, 'y-grid-stack': true}">
						<div v-for="(widget, index) in wids" :key="index"
						     :gs-x="widget.origin[0]" :gs-y="widget.origin[1]"
						     :gs-w="widget.dims[0]" :gs-h="widget.dims[1]"
						     class="grid-stack-item">
								<div class="grid-stack-item-content c-grid-stack-item-content">
										<OMetric :chart-options="widget.chartOptions" :start-timestamp="startTimestamp"
										         :end-timestamp="endTimestamp"/>
								</div>
						</div>
				</div>
				<q-btn color="primary" @click="saveGrid" label="Save Grid Layout"/>
		</div>
</template>

<script setup lang="ts">
import {GridStack} from 'gridstack';
import {GridStackOptions} from "gridstack/dist/types";
import {LocalDateTime} from "@js-joda/core";
import {OMetricsWidget} from "~/composables/oMetricsWidget";

const props = defineProps<{
		gridName?: string,
		commonAppWideGridOptions: GridStackOptions,
		startTimestamp: LocalDateTime,
		endTimestamp: LocalDateTime,
}>()

let grid: GridStack;

onMounted(() => {
		grid = GridStack.init(props.commonAppWideGridOptions);
});

const saveGrid = () => {
		const widgets = grid.save(false)
		console.log(widgets)
}

const wids: OMetricsWidget [] = [{
		origin: [0, 0],
		dims: [12, 2],
		name: 'Router In/Out Kbps',
		chartOptions: {
				title: {
						text: 'Router IN/OUT Kbps'
				},
		}
}, {
		origin: [0, 3],
		dims: [6, 2],
		name: 'Router Saturation',
		chartOptions: {
				title: {
						text: 'Router Saturation'
				},
		}
}];
</script>

<!--PS: Try making this a scoped style. You'll notice that resize handles disappear.-->
<style>
@import 'gridstack/dist/gridstack.css';

.y-grid-stack {
		background: lightgoldenrodyellow;
}

.c-grid-stack-item-content {
		color: #2c3e50;
		text-align: center;
		background-color: #18bc9c;
}

</style>
