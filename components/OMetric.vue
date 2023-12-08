<template>
    <div v-if="startDateTime !== undefined && endDateTime !== undefined"
         class="grid-stack-item-content c-grid-stack-item-content">
        <p>Period is {{ startDateTime.format(usDateTimeFormatter) }} - {{
                endDateTime.format(usDateTimeFormatter)
            }}</p>
        <p>{{ dummyData }}</p>
        <highcharts :options="chartOptions"/>
    </div>

    <div v-if="pending"></div>
</template>

<script lang="ts" setup>
import Highcharts from "highcharts"
import {ZonedDateTime} from "@js-joda/core";

const {chartOptions} = defineProps<{
    chartOptions: object,
}>()

const highcharts = useNuxtApp().vueApp.component('highcharts')
const dummyData = ref('')

let startDateTime: Ref<ZonedDateTime>;
let endDateTime: Ref<ZonedDateTime>;
let pending: Ref<boolean>;

onBeforeMount(async () => {
    const period = selectedPreset.value.period()
    startDateTime = ref(period.startDateTime)
    endDateTime = ref(period.endDateTime)
})

onMounted(async () => {
    dummyData.value = await $fetch<string>('http://localhost:8080/dummy',
        {
            onRequest({request, options}) {
                // Set the request headers
            },
            onRequestError({request, options, error}) {
                // Handle the request errors
            },
            onResponse({request, response, options}) {
                // Process the response data
            },
            onResponseError({request, response, options}) {
                // Handle the response errors
                console.log("sujit", e)
            },
            query: {},
        })
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
