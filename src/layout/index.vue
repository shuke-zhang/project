<script setup>
import breadcrumb from './breadcrumb/breadcrumb.vue'
import currentInfo from './currentInfo/info.vue'
import menuNav from './menuNav/menu.vue'
</script>

<template>
    <div class="container">
        <!-- 左侧菜单 -->
        <menuNav></menuNav>
        <!-- 右侧顶部个人中心 -->
        <currentInfo></currentInfo>
        <!-- 右侧顶部面包屑 -->
        <breadcrumb></breadcrumb>
    </div>
</template> 

<style>

</style>