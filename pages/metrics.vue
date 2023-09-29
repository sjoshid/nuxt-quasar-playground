<template>
		<NuxtLayout name="user-layout">
				<OMetricsGrid grid-name="Some name" :common-app-wide-grid-options="gridOptions" :start-timestamp="LocalDateTime.now()"
				              :end-timestamp="LocalDateTime.now().minusHours(24)"/>
		</NuxtLayout>
</template>

<script lang="ts" setup>
import {LocalDateTime} from "@js-joda/core";

// commonAppWideGridOptions are common for ALL grids.
const gridOptions = {
		row: 10,
		alwaysShowResizeHandle: false,
		//sizeToContent: true,
}
</script>
