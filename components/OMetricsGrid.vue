<template>
    <div class="q-pa-md">
        <q-toolbar class="bg-primary shadow-2 rounded-borders" dense>
            <OTimePresets label="Time Presets" show-custom-preset @update:period="p => period = p"/>
            <q-space/>
            <!--            <q-tabs v-model="granularity" active-bg-color="secondary" class="shadow-2" dense-->
            <!--                    indicator-color="transparent">-->
            <!--                <q-tab label="Raw" name="raw"/>-->
            <!--                <q-tab label="Hourly" name="hourly"/>-->
            <!--                <q-tab label="Daily" name="daily"/>-->
            <!--            </q-tabs>-->
            <q-space/>

            <OIcon :mat-svg-icon-name="matRefresh" tooltip="Refresh Dashboard"/>
            <OIcon :mat-svg-icon-name="matSchedule" tooltip="Schedule Metrics Export"/>
            <OIcon :mat-svg-icon-name="matPictureAsPdf" tooltip="Download PDF"/>
            <OIcon :mat-svg-icon-name="matTableChart" tooltip="Show tabular data"/>
        </q-toolbar>

        <p style="padding: 10px">
            <span v-if="gridName" style="font-size: 40px">{{ gridName }}&nbsp;</span>
            <span style="font-size: 16px;"><i>{{ updateTimeRangeLabel }}</i></span>
        </p>

        <div :class="{ 'grid-stack': true, 'y-grid-stack': true }">
            <div v-for="( widget, index ) in  metricWidgets " :key="index" :gs-h="widget.dims[1]" :gs-w="widget.dims[0]"
                 :gs-x="widget.origin[0]" :gs-y="widget.origin[1]" class="grid-stack-item">
                <OMetric :chart-options="widget.chartOptions" :period="period"/>
            </div>
        </div>
        <q-btn color="primary" label="Save Grid Layout" @click="saveGrid"/>
    </div>
</template>

<script lang="ts" setup>
import {matPictureAsPdf, matRefresh, matSchedule, matTableChart} from '@quasar/extras/material-icons'
import {GridStack, GridStackOptions} from 'gridstack';

const props = defineProps<{
    gridName?: string,
    commonAppWideGridOptions: GridStackOptions,
}>()
const emits = defineEmits(['update:gridName'])
const updateTimeRangeLabel = ref('')

let grid: GridStack;

onMounted(() => {
    grid = GridStack.init(props.commonAppWideGridOptions);
    if (period.value !== null) {
        updateTimeRangeLabel.value = `${period.value.startDateTime.format(usDateFormatter)} - ${period.value.endDateTime.format(usDateFormatter)}. Available grans ${period.value.available}`
        watch(period, (nv, ov) => {
            updateTimeRangeLabel.value = `${period.value.startDateTime.format(usDateFormatter)} - ${period.value.endDateTime.format(usDateFormatter)}. Available grans ${period.value.available}`
        })
    }
});

const saveGrid = () => {
    const widgets = grid.save(false)
    console.log(widgets)
}

const period = shallowRef(null)

const customRangeDialog = ref(false)
</script>

<!--PS: Try making this a scoped style. You'll notice that resize handles disappear.-->
<style>
@import 'gridstack/dist/gridstack.css';

.y-grid-stack {
    background: lightgoldenrodyellow;
}
</style>
