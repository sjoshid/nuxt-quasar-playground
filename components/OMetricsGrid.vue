<template>
		<div class="q-pa-md">
				<h5> Showing {{ serviceName }} </h5>
				<div :class="{'grid-stack': true, 'y-grid-stack': true}">
						<OMetric v-for="(widget, index) in widgets" :key="index" v-bind="{ widget }"/>
				</div>
				<q-btn color="primary" @click="saveGrid" label="Save Grid Layout"/>
		</div>
</template>

<script setup lang="ts">
import {GridStack} from 'gridstack';
import {GridStackOptions, GridStackWidget} from "gridstack/dist/types";

const props = defineProps<{
		gridOptions: GridStackOptions,
		serviceName: string,
		widgets: GridStackWidget[]
}>()

let grid: GridStack;

onMounted(() => {
		grid = GridStack.init(props.gridOptions);
});

const saveGrid = () => {
		const widgets = grid.save(false)
		console.log(widgets)
}
</script>

<!--PS: Try making this a scoped style. You'll notice that resize handles disappear.-->
<style>
@import 'gridstack/dist/gridstack.css';

.y-grid-stack {
		background: lightgoldenrodyellow;
}

</style>
