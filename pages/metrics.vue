<template>
    <NuxtLayout name="user-layout">
        <OMetricsGrid :common-app-wide-grid-options="gridOptions" :default-end-date-time="endDateTime"
                      :default-start-date-time="startDateTime" grid-name="Performance Metrics"/>
    </NuxtLayout>
</template>

<script lang="ts" setup>
import {GridStackOptions} from "gridstack";

const endDateTime = ref(nowUTC())
const startDateTime = ref(endDateTime.value.minusHours(24))

// commonAppWideGridOptions are common for ALL grids.
const gridOptions: GridStackOptions = {
    row: 10,
    alwaysShowResizeHandle: false,
    //sizeToContent: true,
}
</script>
