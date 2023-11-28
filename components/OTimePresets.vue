<template>
    <ODateTimePicker :custom-range-dialog="customRangeDialog" @discard="customRangeDialog = false" @update:preset="(preset: Preset) => {
        selectedPreset = preset
        customRangeDialog = false
    }"/>
    <q-select :model-value="selectedPreset.label" :options="availablePresets" dense filled :label="props.label"
              @update:model-value="nv => {
            if (selectedPreset.value != 'ctp') {
                selectedPreset = nv
            } else {
                customRangeDialog = true
            }
        }"/>
</template>

<script setup lang="ts">
import {Preset, selectedPreset} from "~/composables/UTCZonedDateTime";

interface Props {
    label?: string,
    showCustomPreset?: boolean,
}

const props = withDefaults(defineProps<Props>(), {
    label: 'Presets',
    showCustomPreset: false,
})

const customRangeDialog = ref(false)
</script>

<style scoped>

</style>