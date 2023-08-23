<script lang="ts" setup>
import {GridStackWidget} from "gridstack/dist/types";

defineProps<{ widget: GridStackWidget }>()
</script>

<template>
		<div :gs-x="widget.x" :gs-y="widget.y"
		     :gs-w="widget.w" :gs-h="widget.h"
		     class="grid-stack-item">
				<div class="grid-stack-item-content c-grid-stack-item-content">{{ widget.content }}</div>
		</div>
</template>

<style>
.c-grid-stack-item-content {
		color: #2c3e50;
		text-align: center;
		background-color: #18bc9c;
}
</style>
