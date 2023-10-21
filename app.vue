<template>
    <div class="q-pa-sm">
        <q-layout view="lhh Lpr lff">
            <q-header elevated>
                <q-toolbar>
                    <q-toolbar-title>Oculus</q-toolbar-title>
                    <!-- q-toggle v-model needs a Ref<boolean>. If I provide $q.dark.mode, I get hydration errors in browser console. -->
                    <q-toggle v-model="darkModeActive" checked-icon="dark_mode" color="green" unchecked-icon="light_mode"
                        @click="$q.dark.toggle()" />
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
import {darkModeActive} from '~/stores/dummy-store'
const $q = useQuasar()

$q.dark.set(darkModeActive.value)
</script>
