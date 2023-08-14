<template>
  <div class="q-pa-sm">
    <q-layout view="lhh Lpr lff">
      <q-header elevated>
        <div class="row">
          <q-toolbar class="col-8">
            <!-- User management -->
            <div class="q-pa-xs">
              <q-btn-dropdown color="green" label="User">
                <q-list>
                  <q-item v-close-popup clickable>
                    <q-item-section>
                      <q-item-label>Subscribe</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item v-close-popup clickable>
                    <q-item-section>
                      <q-item-label>Groups</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>
            </div>
            <!-- Company management -->
            <div class="q-pa-xs">
              <q-btn-dropdown color="green" label="Company">
                <q-list>
                  <q-item v-close-popup clickable>
                    <q-item-section>
                      <q-item-label>Subscribe</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item v-close-popup clickable>
                    <q-item-section>
                      <q-item-label>Acna Management</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item v-close-popup clickable>
                    <q-item-section>
                      <q-item-label>SponsoredBy Management</q-item-label>
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
              <q-route-tab icon="home" label="Home" name="tab2"
                           href="/"/>
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
