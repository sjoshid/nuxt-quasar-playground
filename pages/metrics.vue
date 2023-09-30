<template>
    <NuxtLayout name="user-layout">
        <OMetricsGrid :common-app-wide-grid-options="gridOptions" :end-timestamp="LocalDateTime.now().minusHours(24)"
                      :start-timestamp="LocalDateTime.now()"
                      grid-name="Some name"/>
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
