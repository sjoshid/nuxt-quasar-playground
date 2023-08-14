<script lang="ts" setup></script>

<template>
  <NuxtLayout name="admin-layout">
    <div class="q-pa-md q-gutter-md">
      <OTable
          :showUpdateCol="false"
          :showDeleteCol="false"
          title="Users"
          :chooseVisibleCols="true"
          :fullScreenMode="true"
      />
    </div>
  </NuxtLayout>
</template>

<style scoped></style>
