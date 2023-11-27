<template>
    <ODateTimePicker :custom-range-dialog="customRangeDialog" @discard="customRangeDialog = false" @update:preset="preset => {
        $emit('update:preset', preset)
        customRangeDialog = false
    }"/>
    <q-select :model-value="selectedPreset.label" :options="availablePresets" dense filled :label="props.label"
              @update:model-value="nv => {
            selectedPreset = nv
            if (selectedPreset.value != 'ctp') {
                $emit('update:preset', nv)
            } else {
                customRangeDialog = true
            }
        }"/>
</template>

<script setup lang="ts">
interface Props {
    label?: string,
    showCustomPreset?: boolean,
}

const props = withDefaults(defineProps<Props>(), {
    label: 'Presets',
    showCustomPreset: false,
})

const emit = defineEmits<{
    (event: 'update:preset', details: Preset): void
}>()

const selectedPreset = ref(availablePresets[0])

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
    emit('update:preset', selectedPreset.value)
})
</script>

<style scoped>

</style>