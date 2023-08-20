<template>
  <div class="q-pa-md">
    <div class="grid-stack">
      <div v-for="(widget, index) in items" :key="index"
           :gs-w="widget.x" :gs-y="widget.y"
           :gs-w="widget.w" :gs-h="widget.h"
           class="grid-stack-item">
        <div class="grid-stack-item-content">{{ widget.content }}</div>
      </div>
    </div>
    <q-btn @click="addNewWidget" label="Add New Widget"/>
  </div>
</template>

<script setup lang="ts">
import {GridStack} from 'gridstack';
import {Ref} from "@vue/reactivity";

interface WidgetDesc {
  x: Number,
  y: Number,
  w: Number,
  h: Number,
  content?: String,
}

let count = ref(0);
let info = ref("");
let grid: GridStack; // DO NOT use ref(null) as proxies GS will break all logic when comparing structures... see https://github.com/gridstack/gridstack.js/issues/2115
let items: Ref<WidgetDesc[]> = ref([
  {x: 0, y: 0, w: 2, h: 2, content: '1'},
  {x: 0, y: 4, w: 4, h: 4, content: '2'},
  {x: 8, y: 8, w: 4, h: 4, content: '3'}
]);

onMounted(() => {
  console.log("moounted timeseries widgets")
  grid = GridStack.init({ // DO NOT user grid.value = GridStack.init(), see above
    //float: true,
    cellHeight: "40px",
    minRow: 9,
    alwaysShowResizeHandle: true,
  });
  //grid = GridStack.init()
})

const addNewWidget = function () {
  const randomWidget = {
    x: Math.round(12 * Math.random()),
    y: Math.round(5 * Math.random()),
    w: Math.round(1 + 3 * Math.random()),
    h: Math.round(1 + 3 * Math.random()),
    content: String(Math.random())
  };
  items.value.push(randomWidget)
  console.log("added widget")
  return true;
};
</script>

<style scoped>
@import "gridstack/dist/gridstack.css";

.grid-stack {
  background: lightgoldenrodyellow;
}

.grid-stack-item-content {
  color: #2c3e50;
  text-align: center;
  background-color: #18bc9c;
}

</style>