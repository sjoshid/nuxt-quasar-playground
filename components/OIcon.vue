<template>
    <div class="q-pa-xs">
        <q-btn v-if="tooltip" :icon="matSvgIconName" :size="iconSize">
            <q-tooltip>
                {{ tooltip }}
            </q-tooltip>
        </q-btn>
        <q-btn v-else :icon="matSvgIconName" :size="iconSize" />
    </div>
</template>

<script lang="ts" setup>
export interface Props {
    matSvgIconName: string,
    iconSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    tooltip?: string
}

const props = withDefaults(defineProps<Props>(), {
    iconSize: 'md'
})
</script>

<style scoped lang="sass">
.q-btn:hover
    background-color: $primary
</style>