<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref,onMounted } from 'vue'
import * as echarts from 'echarts';

const render = () => {
  var myChart = echarts.init(document.getElementById('main'));
// 绘制图表
  myChart.setOption({
    title: {
      text: 'ECharts 入门示例'
    },
    tooltip: {},
    xAxis: {
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    },
    yAxis: {},
    series: [
      {
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }
    ]
  });
}
onMounted (() => {
  render()
})
</script>

<template>
 <div id="main" style="width: 300px;height: 300px;"></div>
</template>

<style>

</style>
