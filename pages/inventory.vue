<template>
    <NuxtLayout name="user-layout">
        <div class="q-pa-md q-gutter-md">
            <OTable
                    :chooseVisibleCols="true"
                    :fullScreenMode="true"
                    :showDeleteCol="false"
                    :showUpdateCol="false"
                    title="BBS Inventory"
                    @row-click-event="bbsRowClickListener"
            />
            <OTable
                    :chooseVisibleCols="true"
                    :fullScreenMode="true"
                    :showDeleteCol="false"
                    :showUpdateCol="false"
                    title="Router Inventory"
                    @row-click-event="routerRowClickListener"
            />
            <OTable
                    :chooseVisibleCols="true"
                    :showDeleteCol="false"
                    :showUpdateCol="false"
                    title="Interface Inventory"
                    @row-click-event="interfaceRowClickListener"
            />
        </div>
    </NuxtLayout>
</template>

<script lang="ts" setup>
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
