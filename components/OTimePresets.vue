<template>
    <ODateTimePicker :custom-range-dialog="customRangeDialog" @discard="customRangeDialog = false"/>
    <q-select :model-value="selectedPreset.label" :options="availablePresets" dense filled :label="props.label"
              @update:model-value="nv => {
            selectedPreset = nv
            if (selectedPreset.value != 'ctp') {
                $emit('update:period', nv.period())
            } else {
                customRangeDialog = true
            }
        }"/>
</template>

<script setup lang="ts">
import {ChronoUnit} from "@js-joda/core";
import {Granularity, PresetDetails} from "~/composables/oMetricsWidget";

interface Props {
    label?: string,
    showCustomPreset?: boolean,
}

const props = withDefaults(defineProps<Props>(), {
    label: 'Presets',
    showCustomPreset: false,
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

const selectedPreset = ref(availablePresets[1])

const customRangeDialog = ref(false)

if (props.showCustomPreset) {
    availablePresets.push(
        {
            label: 'Custom',
            value: 'ctp',
            period: (): PresetDetails => {
                // This preset is invalid
                return {
                    startDateTime: nowUTC(),
                    endDateTime: nowUTC(),
                    available: []
                }
            }
        }
    )
}

onMounted(() => {
    emit('update:period', selectedPreset.value.period())
})
</script>

<style scoped>

</style>