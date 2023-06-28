<script setup>
import menu from './menu/menu.vue'
import breadcrumb from './breadcrumb/breadcrumb.vue'
import currentInfo from './currentInfo/info.vue'
</script>

<template>
    <div>
        <!-- 左侧菜单 -->
        <!-- 右侧顶部个人中心 -->
        <menu></menu>
        <currentInfo></currentInfo>
        <!-- 右侧顶部面包屑 -->
        <breadcrumb></breadcrumb>
    </div>
</template> 