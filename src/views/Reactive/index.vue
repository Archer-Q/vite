<template>
  <div class="reactive">
    <h3>reactive</h3>
    <p>arr: {{ arr }}</p>
    <p>1、解构: {{ oneArr }}</p>
    <p>2、声明: {{ twoArr.list }}</p>
    <h3>readonly</h3>
    <p>readonly: {{ copy.count }}</p>
    <h3>shallowReactive</h3>
    <p><button @click="change1">浅层</button> shallowReactive--浅层: {{ treeData.name }}</p>
    <p><button @click="change2">深层</button> shallowReactive--深层: {{ treeData.info.name }}</p>
  </div>
</template>



<script setup lang="ts">
import { reactive, readonly, shallowReactive} from "vue";
/*
* reactive 用来绑定复杂的数据类型 例如 对象 数组
* */

let arr = reactive<number[]>([]);
let oneArr = reactive<number[]>([]);
let twoArr = reactive<O>({
  list: []
});
/*
* 使用异步为reactive数据直接赋值、会脱离响应 因而视图不会被更新
* 更新的办法有两种：
*     1、 解构得到的数据 如：arr.push(...curArr)
*     2、 声明一个类型，包裹一层对象
* */
type O = {
  list: number[]
};

setTimeout(() => {
  let curArr = [1, 2, 3];
  arr = curArr;
  console.log(arr, 'arr')
  oneArr.push(...curArr);
  console.log(oneArr, 'oneArr')
  twoArr.list = curArr;
  console.log(twoArr, 'twoArr')
}, 1000);

/* readonly
*  拷贝一份proxy对象将其设置为只读
*  */
let person = reactive({
  count: 9527
})
let copy = readonly(person);
// copy.count++

/*
* shallowReactive
* 在挂载之后，浅层次的数据可以被修改更新视图，而深层次不会
* */

let treeData = shallowReactive({
  name: "张三",
  info: {
    name: "张三三",
    age: 6
  }
})
const change1 = () => {
  treeData.name = "张三---改名为张五！"
};
const change2 = () => {
  treeData.info.name = "张三三---改名为张五五！"
  console.log(treeData, 'treeData')
};

</script>

<style>

</style>
