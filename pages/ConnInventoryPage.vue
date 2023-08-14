<template>
  <div class="q-pa-md q-gutter-md">
    <MyTable
      :showUpdateCol="false"
      :showDeleteCol="false"
      title="BBS Inventory"
      @row-click-event="bbsRowClickListener"
      :chooseVisibleCols="true"
      :fullScreenMode="true"
    />
    <MyTable
      :showUpdateCol="false"
      :showDeleteCol="false"
      title="Router Inventory"
      @row-click-event="routerRowClickListener"
      :chooseVisibleCols="true"
      :fullScreenMode="true"
    />
    <MyTable
      :showUpdateCol="false"
      :showDeleteCol="false"
      title="Interface Inventory"
      @row-click-event="interfaceRowClickListener"
      :chooseVisibleCols="true"
    />
  </div>
</template>

<script setup lang="ts">
import MyTable from '../components/MyTable.vue';

const bbsRowClickListener = () => {
  console.log('bbsRowClickListener called.');
};

const routerRowClickListener = () => {
  console.log('routerRowClickListener called.');
};

const interfaceRowClickListener = () => {
  console.log('interfaceRowClickListener called.');
};
</script>
