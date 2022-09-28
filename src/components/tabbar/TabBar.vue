<template>
  <div class="">
    <van-tabbar
      v-model="active"
      active-color="#ee0a24"
      inactive-color="#000"
      @change="onChange"
      route
    >
      <van-tabbar-item to="/" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/fen" icon="search">分销</van-tabbar-item>
      <van-tabbar-item to="/cart" icon="search">购物</van-tabbar-item>
      <van-tabbar-item to="/mine" icon="search">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { routes } from "@/router/index";
console.log(routes);
let active: any = ref(0);
// 点击事件函数
let onChange: (index?: number | string) => void = (index?: number | string) => {
  active.value = index;
};
</script>

<style lang="scss" scoped></style>
