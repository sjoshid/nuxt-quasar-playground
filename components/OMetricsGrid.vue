<template>
    <div class="q-pa-md">
        <q-dialog v-model="customRangeDialog">
            <q-card>
                <q-card-section>
                    <div class="text-h6">Set Custom Range</div>
                </q-card-section>

                <q-card-section class="q-pt-none">
                    <ODateTimePicker
                        @update:startDTime="nv => startDateTime = date.extractDate(nv, 'MM-DD-YYYY HH:mm').valueOf()"
                        :start-d-time="date.formatDate(startDateTime, 'MM-DD-YYYY HH:mm')"
                        @update:endDTime="nv => endDateTime = date.extractDate(nv, 'MM-DD-YYYY HH:mm').valueOf()"
                        :end-d-time="date.formatDate(endDateTime, 'MM-DD-YYYY HH:mm')" />
                </q-card-section>

                <q-card-actions align="right">
                    <q-btn flat label="Apply" color="primary" v-close-popup />
                </q-card-actions>
            </q-card>
        </q-dialog>
        <q-toolbar dense class="bg-primary shadow-2 rounded-borders">
            <q-select dense filled :model-value="timePresetSelected" :options="presetOptions" label="Time Presets"
                @update:model-value="v => {
                    timePresetSelected = v
                    timePresetSelected.refresh()
                }">
                <template #after-options>
                    <q-item clickable>
                        <q-item-section @click="customRangeDialog = true">Single line item</q-item-section>
                    </q-item>
                </template>
            </q-select>
            <q-space />
            <q-tabs dense v-model="granularity" active-bg-color="secondary" indicator-color="transparent" class="shadow-2">
                <q-tab name="raw" label="Raw" />
                <q-tab name="hourly" label="Hourly" />
                <q-tab name="daily" label="Daily" />
            </q-tabs>
            <q-space />

            <OIcon :mat-svg-icon-name="matRefresh" tooltip="Refresh Dashboard" />
            <OIcon :mat-svg-icon-name="matSchedule" tooltip="Schedule Metrics Export" />
            <OIcon :mat-svg-icon-name="matPictureAsPdf" tooltip="Download PDF" />
            <OIcon :mat-svg-icon-name="matTableChart" tooltip="Show tabular data" />
        </q-toolbar>

        <h5 :v-if="gridName"> Showing "{{ gridName }}" </h5>
        <div :class="{ 'grid-stack': true, 'y-grid-stack': true }">
            <div v-for="( widget, index ) in  wids " :key="index" :gs-h="widget.dims[1]" :gs-w="widget.dims[0]"
                :gs-x="widget.origin[0]" :gs-y="widget.origin[1]" class="grid-stack-item">
                <OMetric :chart-options="widget.chartOptions" :end-timestamp="endDateTime"
                    :start-timestamp="startDateTime" />
            </div>
        </div>
        <q-btn color="primary" label="Save Grid Layout" @click="saveGrid" />
    </div>
</template>

<script lang="ts" setup>
import { matBarChart, matRefresh, matSchedule, matPictureAsPdf, matTableChart } from '@quasar/extras/material-icons'
import { GridStack } from 'gridstack';
import { GridStackOptions } from "gridstack/dist/types";
import { LocalDateTime } from "@js-joda/core";
import { OMetricsWidget } from "~/composables/oMetricsWidget";
import { date } from 'quasar'

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

const wids: OMetricsWidget[] = [{
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
        chart: {
            reflow: true
        },
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

const endDateTime = ref(Date.now())
const startDateTime = ref(date.subtractFromDate(endDateTime.value, { hours: 24 }).valueOf())

const granularity = ref('raw')
const presetOptions = [
    {
        label: 'Last 24 hrs',
        value: 'l24h',
        refresh: () => {
            endDateTime.value = Date.now()
            startDateTime.value = date.subtractFromDate(endDateTime.value, { hours: 24 }).valueOf()
        }
    },
    {
        label: 'Yesterday',
        value: 'yesterday',
        refresh: () => {
            console.warn('How to calculate Yesterday easily?');
        }
    }
]
const timePresetSelected = ref(presetOptions[0])
const customRangeDialog = ref(false)
</script>

<!--PS: Try making this a scoped style. You'll notice that resize handles disappear.-->
<style>
@import 'gridstack/dist/gridstack.css';

.y-grid-stack {
    background: lightgoldenrodyellow;
}
</style>
