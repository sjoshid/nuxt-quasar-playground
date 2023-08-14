<template>
  <div class="q-pa-sm">
    <q-layout view="lhh Lpr lff">
      <q-header elevated>
        <div class="row">
          <q-toolbar class="col-8">
            <!-- Metrics dropdown -->
            <div class="q-pa-xs">
              <q-btn-dropdown color="green" label="Metrics">
                <q-list>
                  <q-item v-close-popup clickable to="/">
                    <q-item-section>
                      <q-item-label>Hotspot</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item v-close-popup clickable to="/metrics">
                    <q-item-section>
                      <q-item-label>Performance</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>
            </div>
            <!-- Inventory dropdown -->
            <div class="q-pa-xs">
              <q-btn-dropdown color="green" label="Inventory">
                <q-list>
                  <q-item v-close-popup clickable to="/inventory">
                    <q-item-section>
                      <q-item-label>Inventory</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>
            </div>
            <div class="q-pa-xs">
              <q-input
                  v-model="search"
                  :autofocus="true"
                  debounce="500"
                  dense
                  filled
                  placeholder="Search"
              >
                <template #append>
                  <q-icon name="search"/>
                </template>
              </q-input>
            </div>
          </q-toolbar>
          <q-toolbar class="col-4">
            <q-space></q-space>
            <q-tabs indicator-color="green" shrink stretch>
              <q-route-tab
                  icon="admin_panel_settings"
                  label="Admin"
                  name="tab2"
                  href="/admin/user-mgmt"
              />
            </q-tabs>
          </q-toolbar>
        </div>
      </q-header>
      <q-page-container>
        <slot/>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue';

const search = ref('');
</script>
