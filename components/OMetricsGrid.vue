<template>
    <div class="q-pa-md">
        <h5 :v-if="gridName"> Showing "{{ gridName }}" </h5>
        <div :class="{'grid-stack': true, 'y-grid-stack': true}">
            <div v-for="(widget, index) in wids" :key="index"
                 :gs-h="widget.dims[1]" :gs-w="widget.dims[0]"
                 :gs-x="widget.origin[0]" :gs-y="widget.origin[1]"
                 class="grid-stack-item">
                <OMetric :chart-options="widget.chartOptions" :end-timestamp="endTimestamp"
                         :start-timestamp="startTimestamp"/>
            </div>
        </div>
        <q-btn color="primary" label="Save Grid Layout" @click="saveGrid"/>
    </div>
</template>

<script lang="ts" setup>
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
    dims: [3, 3],
    name: 'Router Saturation',
    chartOptions: {
        chart: {
            reflow: true
        },
        title: {
            text: 'Router Saturation 1'
        },
        series: [
            {
                data: [10, 20, 30]
            }
        ]
    }
}, {
    origin: [0, 3],
    dims: [3, 3],
    name: 'Router Saturation',
    chartOptions: {
        title: {
            text: 'Router Saturation 2'
        },
        series: [
            {
                data: [10, 20, 30]
            }
        ]
    }
}];
</script>

<!--PS: Try making this a scoped style. You'll notice that resize handles disappear.-->
<style>
@import 'gridstack/dist/gridstack.css';

.y-grid-stack {
    background: lightgoldenrodyellow;
}
</style>
