<template>
    <div v-if="startDateTime !== undefined && endDateTime !== undefined"
         class="grid-stack-item-content c-grid-stack-item-content">
        <p>Period is {{ startDateTime.format(usDateFormatter) }} - {{
                endDateTime.format(usDateFormatter)
            }}</p>
        <highcharts :options="chartOptions"/>
    </div>
</template>

<script lang="ts" setup>
import Highcharts from "highcharts"
import {ZonedDateTime} from "@js-joda/core";

const {chartOptions} = defineProps<{
    chartOptions: object,
}>()

const highcharts = useNuxtApp().vueApp.component('highcharts')
const dummyData = ref('Dummy')

let startDateTime: Ref<ZonedDateTime>;
let endDateTime: Ref<ZonedDateTime>;

onBeforeMount(() => {
    const period = selectedPreset.value.period()
    startDateTime = ref(period.startDateTime)
    endDateTime = ref(period.endDateTime)
})

onMounted(() => {
    $fetch<string>('http://localhost:8080/dummy').then(r => dummyData.value = r).catch(e => console.error(e))
})

watch(selectedPreset, (nv, ov) => {
    const period = nv.period()
    startDateTime.value = period.startDateTime
    endDateTime.value = period.endDateTime
})
</script>

<style>
.c-grid-stack-item-content {
    color: #2c3e50;
    text-align: center;
    background-color: #18bc9c;
}
</style>
