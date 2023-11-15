<template>
    <NuxtLayout name="user-layout">
        <OMetricsGrid :common-app-wide-grid-options="gridOptions" :end-date-time="endDateTime"
                      :start-date-time="startDateTime" grid-name="Performance Metrics"/>
    </NuxtLayout>
</template>

<script lang="ts" setup>
import {GridStackOptions} from "gridstack";

const endDateTime = nowUTC()
const startDateTime = endDateTime.minusHours(24)

// commonAppWideGridOptions are common for ALL grids.
const gridOptions: GridStackOptions = {
    row: 10,
    alwaysShowResizeHandle: false,
    //sizeToContent: true,
}
</script>
