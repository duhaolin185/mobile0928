<template>
  <div>
    <!-- 主体内容 -->
    <router-view></router-view>
    <!-- 底部tabbar -->
    <TabBar></TabBar>
  </div>
</template>

<script setup lang="ts">
import TabBar from "@/components/tabbar/TabBar.vue";
</script>

<style scoped></style>
