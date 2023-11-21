<template>
    <q-select :model-value="selectedPreset.label" :options="availablePresets" dense filled :label="props.label"
              @update:model-value="nv => {
            selectedPreset = nv
            $emit('update:period', nv.period())
        }"/>
</template>

<script setup lang="ts">
import {ChronoUnit, ZonedDateTime} from "@js-joda/core";
import {Granularity, PresetDetails} from "~/composables/oMetricsWidget";

interface Props {
    label?: string,
    startDateTime?: Ref<ZonedDateTime>, // is this required?
    endDateTime?: Ref<ZonedDateTime>, // is this required?
}

const props = withDefaults(defineProps<Props>(), {
    label: 'Presets',
})

const emit = defineEmits<{
    (event: 'update:period', details: PresetDetails): void
}>()

const availablePresets = [
    {
        label: 'Last 24 hrs',
        value: 'l24h',
        period: (): PresetDetails => {
            const endDateTime = nowUTC()
            const startDateTime = endDateTime.minusHours(24)
            return {
                startDateTime,
                endDateTime,
                available: [Granularity.MINUTE, Granularity.HOUR]
            }
        }
    },
    {
        label: 'Yesterday',
        value: 'yest',
        period: (): PresetDetails => {
            const endDateTime = nowUTC().truncatedTo(ChronoUnit.DAYS)
            const startDateTime = endDateTime.minusHours(24)
            return {
                startDateTime,
                endDateTime,
                available: [Granularity.MINUTE, Granularity.HOUR]
            }
        }
    },
    {
        label: 'Last 7 days',
        value: 'l7d',
        period: (): PresetDetails => {
            const endDateTime = nowUTC()
            const startDateTime = endDateTime.minusHours(24)
            return {
                startDateTime,
                endDateTime,
                available: [Granularity.MINUTE, Granularity.HOUR]
            }
        }
    }
]

const selectedPreset = ref(availablePresets[0])

onMounted(() => {
    emit('update:period', selectedPreset.value.period())
})
</script>

<style scoped>

</style>