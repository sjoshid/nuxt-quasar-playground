<template>
    <div class="q-pa-xs">
        <q-btn v-if="tooltip" :icon="matSvgIconName" :size="iconSize" :disable="disabled">
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
    tooltip?: string,
    disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    iconSize: 'md',
    disabled: false
})
</script>

<style scoped lang="sass">
.q-btn:hover
    background-color: $primary
</style>