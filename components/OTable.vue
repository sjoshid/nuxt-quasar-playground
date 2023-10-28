<template>
    <q-table :columns="tableCols" :rows="tableData" :title="title" :visible-columns="visibleColumns" row-key="name"
        @row-click="rowClickEventHandler">
        <q-space />
        <template #top-right="props">
            <q-select v-if="chooseVisibleCols" v-model="visibleColumns" :display-value="$q.lang.table.columns"
                :options="tableCols" dense emit-value map-options multiple option-value="name" options-cover options-dense
                outlined style="min-width: 150px" />
            <q-space />
            <q-btn v-if="fullScreenMode" :icon="props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'" class="q-ml-md" dense
                flat round @click="props.toggleFullscreen" />
        </template>
    </q-table>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { tableCols, tableData } from '~/stores/dummy-store';

const emit = defineEmits(['rowClickEvent']);

const props = defineProps({
    showUpdateCol: Boolean,
    showDeleteCol: Boolean,
    title: String,
    chooseVisibleCols: Boolean,
    fullScreenMode: Boolean,
});

const rowClickEventHandler = () => {
    console.log('Emitting rowClickEvent...');
    emit('rowClickEvent');
    console.log('Done emitting rowClickEvent.');
};

const visibleColumns = ref(['id', 'acna', 'sb']);

const fullScreenMode = ref(props.fullScreenMode);
</script>
