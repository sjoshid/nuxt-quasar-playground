<template>
  <q-table
    :columns="tableCols"
    :rows="tableData"
    :title="title"
    row-key="name"
    @row-click="rowClickEventHandler"
    :visible-columns="visibleColumns"
  >
    <q-space />
    <template #top-right="props">
      <q-select
        v-model="visibleColumns"
        multiple
        outlined
        dense
        options-dense
        :display-value="$q.lang.table.columns"
        emit-value
        map-options
        :options="tableCols"
        option-value="name"
        options-cover
        style="min-width: 150px"
        v-if="chooseVisibleCols"
      />
      <q-space />
      <q-btn
        flat
        round
        dense
        :icon="props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"
        @click="props.toggleFullscreen"
        class="q-ml-md"
        v-if="fullScreenMode"
      />
    </template>
  </q-table>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { tableCols, tableData } from '../stores/dummy-store';
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
