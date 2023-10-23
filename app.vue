<template>
    <div class="q-pa-sm">
        <q-layout view="lhh Lpr lff">
            <q-header elevated>
                <q-toolbar>
                    <q-toolbar-title>TNS Oculus Logo</q-toolbar-title>
                    <div class="row justify-end q-gutter-x-sm">
                        <q-btn-dropdown color="warning" push no-caps icon="help" label="Support">
                            <q-list>
                                <q-item clickable v-close-popup>
                                    <q-item-section>
                                        <q-item-label>Photos</q-item-label>
                                    </q-item-section>
                                </q-item>
                                <q-item clickable v-close-popup>
                                    <q-item-section>
                                        <q-item-label>Videos</q-item-label>
                                    </q-item-section>
                                </q-item>
                            </q-list>
                        </q-btn-dropdown>
                        <q-btn-dropdown color="secondary" push no-caps icon="image" label="john.doe@tnsi.com">
                        </q-btn-dropdown>
                        <!-- q-toggle v-model needs a Ref<boolean>. If I provide $q.dark.mode, I get hydration errors in browser console. -->
                        <q-toggle v-model="darkModeActive" checked-icon="dark_mode" color="green"
                            unchecked-icon="light_mode" @click="$q.dark.toggle()" />
                    </div>
                </q-toolbar>
            </q-header>
            <q-footer>
                Company Info
            </q-footer>
            <q-page-container>
                <NuxtPage />
            </q-page-container>
        </q-layout>
    </div>
</template>

<script lang="ts" setup>
import { darkModeActive } from '~/stores/dummy-store'
const $q = useQuasar()

$q.dark.set(darkModeActive.value)
</script>
