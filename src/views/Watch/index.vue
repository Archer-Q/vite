<template>
  <div class="watch">
    <input type="text" v-model="message.nav.bar.name">
    <input type="text" v-model="nameList.gender">
  </div>
</template>

<script setup lang="ts">
import {reactive, ref, watch} from 'vue'

let nameList = reactive({
  name: "天天",
  gender: '男'
})

/*
* 监听对象中的单一属性 可以用返回值的方式
* */
watch(() => nameList.gender, (newVal, oldVal) => {
  console.log("新值: ",newVal)
  console.log("旧值: ",oldVal)
})


let message = reactive({
  nav: {
    bar: {
      name: "日月"
    }
  }
});
let flag = ref(false);
watch([message, flag], (newVal, oldVal) => {
  console.log("新值: ",newVal)
  console.log("旧值: ",oldVal)
}, {
  /*
  * 深度监听
  * 如果是ref、多层次 必须加deep: true
  * 如果是多层次的数据, 旧值会等于新值
  * */
  // deep: true,
  immediate: true // 进页面立即读取一次
});
</script>

<style>
</style>
