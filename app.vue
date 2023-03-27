<template>
  <div>
    <!-- <n-button type="primary" size="medium" >你好</n-button>
    <button class="btn">windi</button> -->

    <NuxtPage></NuxtPage>
  </div>
</template>
<script setup>
import {
  NButton
} from 'naive-ui'
// 按需引入Navite组件

// throw  createError({statusMessage: '故意粗无'})
</script>
<style>
.btn {
  @apply text-purple-600 p-25px !border-purple-600 bg-purple-300 rounded-2xl hover:bg-blue-700 hover:text-pink-600
}
</style>
