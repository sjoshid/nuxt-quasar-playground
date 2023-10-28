<template>
    <div :class="{ 'col': !leftRight, 'row': leftRight }" class="justify-between q-gutter-y-md">
        <q-input filled dense label="From" stack-label :model-value="startDTime">
            <template v-slot:prepend>
                <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                        <q-date :model-value="startDTime" mask="MM-DD-YYYY HH:mm"
                            @update:model-value="nv => $emit('update:startDTime', nv)">
                            <div class="row items-center justify-end">
                                <q-btn v-close-popup label="Close" color="primary" flat />
                            </div>
                        </q-date>
                    </q-popup-proxy>
                </q-icon>
            </template>

            <template v-slot:append>
                <q-icon name="access_time" class="cursor-pointer">
                    <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                        <q-time :model-value="startDTime" mask="MM-DD-YYYY HH:mm" format24h
                            @update:model-value="nv => $emit('update:startDTime', nv)">
                            <div class="row items-center justify-end">
                                <q-btn v-close-popup label="Close" color="primary" flat />
                            </div>
                        </q-time>
                    </q-popup-proxy>
                </q-icon>
            </template>
        </q-input>
        <q-input filled dense label="To" stack-label :model-value="endDTime">
            <template v-slot:prepend>
                <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                        <q-date :model-value="endDTime" mask="MM-DD-YYYY HH:mm"
                            @update:model-value="nv => $emit('update:endDTime', nv)">
                            <div class="row items-center justify-end">
                                <q-btn v-close-popup label="Close" color="primary" flat />
                            </div>
                        </q-date>
                    </q-popup-proxy>
                </q-icon>
            </template>

            <template v-slot:append>
                <q-icon name="access_time" class="cursor-pointer">
                    <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                        <q-time :model-value="endDTime" mask="MM-DD-YYYY HH:mm" format24h
                            @update:model-value="nv => $emit('update:endDTime', nv)">
                            <div class="row items-center justify-end">
                                <q-btn v-close-popup label="Close" color="primary" flat />
                            </div>
                        </q-time>
                    </q-popup-proxy>
                </q-icon>
            </template>
        </q-input>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
    startDTime: string,
    endDTime: string,
    leftRight?: {
        type: boolean,
        default: false
    },
}>()

const emits = defineEmits(['update:startDTime', 'update:endDTime'])
</script>
