<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref,onMounted } from 'vue'
import * as echarts from 'echarts';

const render = () => {
  var myChart = echarts.init(document.getElementById('main'));
  let option = {
        tooltip: {
          trigger: "item",
          formatter: "{d} %",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          borderColor: "rgba(0, 0, 0, 0.8)",
          textStyle: {
            color: "#fff",
          },
          confine: true,
        },
        legend: {
          show: false,
        },
        color:[
  "#6778FF",
  "#00EBCC",
  "#E3CA4A",
  "#964DFF",
  "#FF7474",
  "#A2F3FF",
  "#D84CDD",
],
        series: [
          {
            type: "pie",
            radius: ["50%", "80%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: { // 鼠标移入时显示的标签
                show: true,
                color: "#1DBF73",
                // fontSize: "14",
              },
              formatter(data) {
                console.log(data);
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 335, name: "直接访问" },
              { value: 310, name: "邮件营销" },
              { value: 234, name: "联盟广告" },
              { value: 135, name: "视频广告" },
              { value: 1548, name: "搜索引擎" },]
          },
        ],
      };
// 绘制图表
  myChart.setOption(option);
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
