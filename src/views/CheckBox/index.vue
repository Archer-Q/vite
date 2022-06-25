<template>
  <div class="check-box-group" v-for="item in list" :key="item">
    <input type="checkbox" @change="change(item)" :checked="item.checked" :name="item"><span @click="handleCheck(item.label)">{{ item.label }}</span>
  </div>
</template>



<script setup lang="ts">
import { ref, reactive, readonly, shallowReactive} from "vue";

let list = reactive([
  {
    label: "aaaaaa",
    checked: false
  },
  {
    label: "bbbbbb",
    checked: false
  },
  {
    label: "cccccc",
    checked: false
  },
]);
let checkData = reactive<string[]>([]);

const handleCheck = (item: string) => {
  console.log(item, '选中')
};
const change = (item: any) => {
  item.checked = true;
  checkData.push(item)
  console.log(checkData, 'checkData')
};

</script>

<style>

</style>
