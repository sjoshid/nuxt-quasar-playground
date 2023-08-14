<template>
  <NuxtLayout name="user-layout">
    <div class="q-pa-md q-gutter-md">
      <OTable
          :showUpdateCol="false"
          :showDeleteCol="false"
          title="BBS Inventory"
          @row-click-event="bbsRowClickListener"
          :chooseVisibleCols="true"
          :fullScreenMode="true"
      />
      <OTable
          :showUpdateCol="false"
          :showDeleteCol="false"
          title="Router Inventory"
          @row-click-event="routerRowClickListener"
          :chooseVisibleCols="true"
          :fullScreenMode="true"
      />
      <OTable
          :showUpdateCol="false"
          :showDeleteCol="false"
          title="Interface Inventory"
          @row-click-event="interfaceRowClickListener"
          :chooseVisibleCols="true"
      />
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
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
