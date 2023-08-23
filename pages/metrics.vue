<template>
		<NuxtLayout name="user-layout">
				<OMetricsGrid :grid-options="gridOptions" serviceName="Routers" :widgets="routersLayout"/>
		</NuxtLayout>
</template>

<script lang="ts" setup>
const gridOptions = {
		cellHeight: "40px",
		minRow: 1,
		alwaysShowResizeHandle: false,
}

let routersLayout = [
		{x: 0, y: 0, w: 12, h: 4, content: '1'},
		{x: 0, y: 4, w: 6, h: 6, content: '2'},
		{x: 6, y: 4, w: 6, h: 6, content: '3'},
		{x: 0, y: 10, w: 12, h: 4, content: '4'}
];
</script>
