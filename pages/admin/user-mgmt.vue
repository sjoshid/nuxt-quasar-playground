<script lang="ts" setup></script>

<template>
    <NuxtLayout name="admin-layout">
        <div class="q-pa-md q-gutter-md">
            <OTable
                    :chooseVisibleCols="true"
                    :fullScreenMode="true"
                    :showDeleteCol="false"
                    :showUpdateCol="false"
                    title="Users"
            />
        </div>
    </NuxtLayout>
</template>

<style scoped></style>
