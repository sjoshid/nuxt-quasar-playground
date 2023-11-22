<template>
    <q-dialog :model-value="customRangeDialog">
        <q-card>
            <q-card-section>
                <div class="text-h6"> {{ dialogTitle }}</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
                <div :class="{ 'col': !leftRight, 'row': leftRight }" class="justify-between q-gutter-y-md">
                    <q-input :model-value="startDateTime.format(usDateFormatter)" dense filled label="From" stack-label>
                        <template v-slot:prepend>
                            <q-icon class="cursor-pointer" name="event">
                                <q-popup-proxy cover transition-hide="scale" transition-show="scale">
                                    <q-date :model-value="startDateTime?.format(usDateFormatter)" :mask="quasarFormat"
                                            @update:model-value="nv => startDateTime = ZonedDateTime.of(LocalDateTime.parse(nv, usDateFormatter), ZoneId.UTC)">
                                        <div class="row items-center justify-end">
                                            <q-btn v-close-popup color="primary" flat label="Close"/>
                                        </div>
                                    </q-date>
                                </q-popup-proxy>
                            </q-icon>
                        </template>

                        <template v-slot:append>
                            <q-icon class="cursor-pointer" name="access_time">
                                <q-popup-proxy cover transition-hide="scale" transition-show="scale">
                                    <q-time :model-value="startDateTime.format(usDateFormatter)" format24h
                                            :mask="quasarFormat"
                                            @update:model-value="nv => startDateTime = ZonedDateTime.of(LocalDateTime.parse(nv, usDateFormatter), ZoneId.UTC)">
                                        <div class="row items-center justify-end">
                                            <q-btn v-close-popup color="primary" flat label="Close"/>
                                        </div>
                                    </q-time>
                                </q-popup-proxy>
                            </q-icon>
                        </template>
                    </q-input>
                    <q-input :model-value="endDateTime.format(usDateFormatter)" dense filled label="To" stack-label>
                        <template v-slot:prepend>
                            <q-icon class="cursor-pointer" name="event">
                                <q-popup-proxy cover transition-hide="scale" transition-show="scale">
                                    <q-date :model-value="endDateTime.format(usDateFormatter)" :mask="quasarFormat"
                                            @update:model-value="nv => endDateTime = ZonedDateTime.of(LocalDateTime.parse(nv, usDateFormatter), ZoneId.UTC)">
                                        <div class="row items-center justify-end">
                                            <q-btn v-close-popup color="primary" flat label="Close"/>
                                        </div>
                                    </q-date>
                                </q-popup-proxy>
                            </q-icon>
                        </template>

                        <template v-slot:append>
                            <q-icon class="cursor-pointer" name="access_time">
                                <q-popup-proxy cover transition-hide="scale" transition-show="scale">
                                    <q-time :model-value="endDateTime.format(usDateFormatter)" format24h
                                            :mask="quasarFormat"
                                            @update:model-value="nv => endDateTime = ZonedDateTime.of(LocalDateTime.parse(nv, usDateFormatter), ZoneId.UTC)">
                                        <div class="row items-center justify-end">
                                            <q-btn v-close-popup color="primary" flat label="Close"/>
                                        </div>
                                    </q-time>
                                </q-popup-proxy>
                            </q-icon>
                        </template>
                    </q-input>
                </div>
            </q-card-section>

            <q-card-actions align="right">
                <q-btn v-close-popup color="primary" flat label="Close" @click="$emit('discard')"/>
                <q-btn v-close-popup color="primary" label="Apply" @click="calculatePeriod"/>
            </q-card-actions>
        </q-card>
    </q-dialog>
</template>

<script lang="ts" setup>
import {LocalDateTime, ZonedDateTime, ZoneId} from "@js-joda/core";
import {PresetDetails} from "~/composables/oMetricsWidget";

interface Props {
    leftRight?: boolean,
    customRangeDialog: boolean,
    dialogTitle?: string,
}

const props = withDefaults(defineProps<Props>(), {
    leftRight: false,
    dialogTitle: 'Set Custom Range'
})

const emit = defineEmits<{
    (event: 'discard'): void,
    (event: 'update:period', details: PresetDetails): void
}>()

const endDateTime = ref(nowUTC())
const startDateTime = ref(endDateTime.value.minusHours(1))

const calculatePeriod = () => {
    // sj_todo do some date validation before emitting. eg., end date cannot be before start date, etc.
    const p: PresetDetails = {
        startDateTime: startDateTime.value,
        endDateTime: endDateTime.value,
        available: []
    }
    emit('update:period', p)
}

</script>
