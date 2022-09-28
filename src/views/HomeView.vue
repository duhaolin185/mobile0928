<template>
  <div class="home">
    <div class="banner">
      <div class="pic">
        <img src="../../public/images/img_02.png" alt="轮播图" />
      </div>
    </div>
    <p>{{ mount }}</p>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { home_http } from "@/api/httpHome";
let mount = ref("hello seec1");

// home_http().then((res) => {
//   console.log("返回的数据", res);
// });
async function getHome() {
  let { data } = await home_http();
  console.log(data);
}
getHome();
</script>
<style lang="scss" scoped>
.home {
  .banner {
    .pic {
      width: 375px;
      height: 296px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
