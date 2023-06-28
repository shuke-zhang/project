<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref,onMounted } from 'vue'
import * as echarts from 'echarts';

const render = () => {
  const myChart = echarts.init(document.getElementById('main'));
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
            avoidLabelOverlap: false, //是否启用防止标签重叠策略
            label: { // 饼图图形上的文本标签
              show: true,
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
// myChart2.value.setOption(
//     {
//     color: ['#61adf2', '#56dae8', '#efa49e'],
//     series: [{
//     type: 'pie',
//     radius: ['50%', '70%'],
//     avoidLabelOverlap: true,  
//     label: { 
//       show: true,
//       position: 'center', 
//       formatter:function(params) {
//           return  '{a|虫情测报仪 }\n\n\n{b|' + total.value + '}\n\n{c|' + params.percent.toFixed(2) + '%}';
//         },
//       rich: { 
//           a: {
//             fontSize: 28,
//             color: '#1DBF73',
//             fontWeight: 'bold',
//             top:'30%',
//             },
//           b: {
//             fontSize: 28,
//             top:'45%',
//             color: '#666666',
//             },
//           c:{
//             fontSize: 28,
//             color: '#f70'
//             }
//         },
//     },
//     emphasis: { 
//       label: { 
//         show: true, 
//         formatter: function(params) {
//           return  '{a|' + params.name + '}\n\n\n{b|' + params.value + '}\n\n{c|' + params.percent.toFixed(2) + '%}';
//         },
//          rich: {
//      // 添加自定义样式，覆盖默认样式
//      a: {
//       width: '80%',
//       fontSize: 28,
//       color: '#1DBF73',
//       fontWeight: 'bold',
//      },
//      b: {
//       fontSize: 28,
//       color: 'red',
//      },
//      c: {
//       fontSize: 28,
//       color: 'green',
//       fontWeight: 'bold',
//      }
//     },
//       }
//     },
//     data: dataList
//   }]

//   }
  
//   )
onMounted (() => {
  render()
})
</script>

<template>
 <div id="main" style="width: 300px;height: 300px;"></div>
</template>

<style>

</style>
