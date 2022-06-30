<template>
  <div class="to-ref">
    <h3>toRef</h3>
    <p> 原始对象: {{ toRefOrg }}  </p>
    <p> 原始对象Proxy对象: {{ toRefOrgProxy }}  </p>
    <button @click="change">改变toRef数据</button>

    <h3>toRefs</h3>
    <p>name ---> {{ name }}</p>
    <p>score ---> {{ score }}</p>
    <button @click="changeToRefs">改变toRefs数据</button>
  </div>
</template>

<script setup lang="ts">
import {toRef, toRefs, reactive, toRaw} from 'vue';

/*
* toRef
* 通过其引用的对象 会对自身、原始对象造成影响, 但是视图不会变化
* 但是若是原始对象被proxy代理过，那么视图也会发生变化
* toRef(原始对象, 属性)
* 原始对象与原始对象被代理过的数据一起发生改变时 会触发视图更新
*  */

const orgData = {
  name: '小明',
  score: 599
}

const orgProxyData = reactive({
  name: '小明',
  score: 599
});

let toRefOrg = toRef(orgData, "score");
let toRefOrgProxy = toRef(orgProxyData, "score");

const change = () => {
  toRefOrg.value = 600;
  console.log("原始对象toRefOrg--->", toRefOrg);
  console.log("原始对象--->", orgData);

  toRefOrgProxy.value = 600;
  console.log("原始Proxy对象toRefOrgProxy--->", toRefOrgProxy);
  console.log("原始Proxy对象--->", orgProxyData);

};

/*
* toRefs
* 批量创建ref对象, 方便解构使用
* */

const data = reactive({
  name: "小壮",
  score: 700
})

let {name, score} = toRefs(data);

const changeToRefs = () => {
  name.value = "大壮";
  score.value = 799;
};


/*
* toRaw
* 将响应式对象转化为普通对象
* */

let proxyData = reactive({
  name: "旺旺",
  score: 800
})
let rawProxyData = toRaw(proxyData);
console.log("proxyData ---> ", proxyData)
console.log("rawProxyData ---> ", rawProxyData)


</script>

<style>

</style>
