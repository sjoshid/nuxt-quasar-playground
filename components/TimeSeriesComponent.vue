<template>
		<div class="q-pa-md">
				<div :class="{'grid-stack': true, 'y-grid-stack': true}">
						<div v-for="(widget, index) in items" :key="index"
						     :gs-x="widget.x" :gs-y="widget.y"
						     :gs-w="widget.w" :gs-h="widget.h"
						     class="grid-stack-item">
								<div class="grid-stack-item-content c-grid-stack-item-content">{{ widget.content }}</div>
						</div>
				</div>
				<q-btn @click="saveGrid" label="Save Grid Layout"/>
		</div>
</template>

<script setup lang="ts">
import {GridStack} from 'gridstack';

let items = ref([
		{x: 0, y: 0, w: 2, h: 2, content: '1'},
		{x: 0, y: 4, w: 4, h: 4, content: '2'},
		{x: 0, y: 6, w: 4, h: 4, content: '3'},
		{x: 0, y: 6, w: 4, h: 4, content: '4'},
		{x: 0, y: 6, w: 4, h: 4, content: '5'}
]);

let grid: GridStack;

onMounted(() => {
		// No need to read return value of init() if you are not going to programmatically change the grid.
		grid = GridStack.init({
				cellHeight: '40px',
				minRow: 9,
				alwaysShowResizeHandle: true,
		});
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

.c-grid-stack-item-content {
		color: #2c3e50;
		text-align: center;
		background-color: #18bc9c;
}

</style>
