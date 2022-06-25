<template>
  <div class="ref">
    <button @click="handle">Vite</button>
    <p>{{ message }}</p>
    <p>{{ shallowRefMsg }}</p>
    <p>{{ customRefMsg }}</p>
  </div>
</template>

<script setup lang="ts">
import {ref, Ref, isRef, shallowRef, triggerRef, customRef} from 'vue';
/*
* ref
* ref、triggerRef()、customRef 都会触发vue3底层的shallowRef更新
* 单独使用shallowRef不会触发更新
* */
let message: Ref<string> = ref("Hello World!");
/* shallowRef */
let shallowRefMsg = shallowRef<string | number>("Hello shallowRefMsg! 创建一个跟踪自身 .value 变化的 ref，但不会使其值也变成响应式的");
let flag = ref(true);
/* isRef */
let notRef: number = 234;
/* customRef */
let customRefMsg = MyRef("customRef 是个工厂函数要求我们返回一个对象 并且实现 get 和 set");

function MyRef<T>(value: T) {
  /* return 一个customRef 携带两个参数: 1、trank(), get()调用, 2、trigger(), set()调用 */
  return customRef((trank, trigger) => {
    /* return 两个方法 get() 和 set() */
    return {
      get() {
        trank()
        return value;
      },
      set(newValue: T) {
        console.log(newValue, "set");
        value = newValue;
        trigger()
      },
    }
  });
}


const handle = () => {
  message.value = "Hello Vite!";
  console.log(isRef(notRef))
  if (flag.value) {

    shallowRefMsg.value = "shallowRef 不会改变值, 但是triggerRef可以强制更新";
    triggerRef(shallowRefMsg);

    customRefMsg.value = "MyRef调用";
  }
};
</script>

<style>

</style>
