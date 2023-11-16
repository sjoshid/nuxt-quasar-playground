<template>
    <div :class="{ 'col': !leftRight, 'row': leftRight }" class="justify-between q-gutter-y-md">
        <q-input :model-value="startDateTime.format(usDateFormatter)" dense filled label="From" stack-label>
            <template v-slot:prepend>
                <q-icon class="cursor-pointer" name="event">
                    <q-popup-proxy cover transition-hide="scale" transition-show="scale">
                        <q-date :model-value="startDateTime.format(usDateFormatter)" :mask="quasarFormat"
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
                        <q-time :model-value="startDateTime.format(usDateFormatter)" format24h :mask="quasarFormat"
                            @update:model-value="nv => startDateTime = ZonedDateTime.of(LocalDateTime.parse(nv, usDateFormatter), ZoneId.UTC)">
                            <div class="row items-center justify-end">
                                <q-btn v-close-popup color="primary" flat label="Close" />
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
                                <q-btn v-close-popup color="primary" flat label="Close" />
                            </div>
                        </q-date>
                    </q-popup-proxy>
                </q-icon>
            </template>

            <template v-slot:append>
                <q-icon class="cursor-pointer" name="access_time">
                    <q-popup-proxy cover transition-hide="scale" transition-show="scale">
                        <q-time :model-value="endDateTime.format(usDateFormatter)" format24h :mask="quasarFormat"
                            @update:model-value="nv => endDateTime = ZonedDateTime.of(LocalDateTime.parse(nv, usDateFormatter), ZoneId.UTC)">
                            <div class="row items-center justify-end">
                                <q-btn v-close-popup color="primary" flat label="Close" />
                            </div>
                        </q-time>
                    </q-popup-proxy>
                </q-icon>
            </template>
        </q-input>
    </div>
</template>

<script lang="ts" setup>
import {LocalDateTime, ZonedDateTime, ZoneId} from "@js-joda/core";

const props = defineProps<{
    startDateTime: Ref<ZonedDateTime>,
    endDateTime: Ref<ZonedDateTime>,
    leftRight?: {
        type: boolean,
        default: false
    },
}>()

/*onMounted(() => {
    console.info(props.startDateTime.format(usDateFormatter)) // prints 11/13/2023 20:14:05
    quasar has MM-DD-YYYY HH:mm
    quasar support MM/DD/YYYY HH:mm:ss
})*/
</script>
