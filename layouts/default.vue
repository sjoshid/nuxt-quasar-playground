<template>
    <q-layout view="lhh Lpr lff">
        <q-header elevated>
            <q-toolbar>
                <q-toolbar-title>Oculus</q-toolbar-title>

                <q-toggle
                        v-model="$q.dark.mode"
                        checked-icon="dark_mode"
                        color="green"
                        unchecked-icon="light_mode"
                        @click="$q.dark.toggle()"
                />
            </q-toolbar>
        </q-header>

        <q-footer>
            Company Info
        </q-footer>

        <q-page-container>
            <slot/>
        </q-page-container>
    </q-layout>
</template>