<template>
		<div class="q-pa-md">
				<div class="grid-stack y-grid-stack">
						<div v-for="(widget, index) in items" :key="index"
						     :gs-x="widget.x" :gs-y="widget.y"
						     :gs-w="widget.w" :gs-h="widget.h"
						     class="grid-stack-item">
								<div class="grid-stack-item-content c-grid-stack-item-content">{{ widget.content }}</div>
						</div>
				</div>
		</div>
</template>

<script setup lang="ts">

import { GridStack } from 'gridstack';
let grid: GridStack;
import {GridStackWidget} from "gridstack/dist/types";
import {Ref} from "@vue/reactivity";

let items: Ref<GridStackWidget[]> = ref([
		{x: 0, y: 0, w: 2, h: 2, content: '1'},
		{x: 0, y: 4, w: 4, h: 4, content: '2'},
		{x: 8, y: 8, w: 4, h: 4, content: '3'}
]);

onMounted(() => {
		grid = GridStack.init({
				cellHeight: '40px',
				minRow: 9,
				alwaysShowResizeHandle: true,
		});
});
</script>

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
