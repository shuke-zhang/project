<script >
import { ref ,computed,watch,onMounted,reactive} from 'vue'
import * as echarts from 'echarts';
const pieChart= ref();
const myChart2 = ref();
const dataList = [
      { value: 335, name: '上太新闻' },
      { value: 200, name: '行业动态' },
      { value: 66, name: '影响风采' },
    ]
    const total = computed(() => {
      return dataList.reduce((total, item) => {
        return total + item.value
      }, 0)
    })
function initPieEcharts() {
  if(!myChart2) return
  myChart2.value = echarts.init(pieChart.value)
  myChart2.value.setOption(
    {
    color: ['#61adf2', '#56dae8', '#efa49e'],
    series: [{
    type: 'pie',
    radius: ['50%', '70%'],
    avoidLabelOverlap: true,  
    label: { 
      show: true,
      position: 'center', 
      formatter:function(params) {
          return  '{a|虫情测报仪 }\n\n\n{b|' + total.value + '}\n\n{c|' + params.percent.toFixed(2) + '%}';
        },
      rich: { 
          a: {
            fontSize: 28,
            color: '#1DBF73',
            fontWeight: 'bold',
            top:'30%',
            },
          b: {
            fontSize: 28,
            top:'45%',
            color: '#666666',
            },
          c:{
            fontSize: 28,
            color: '#f70'
            }
        },
    },
    emphasis: { 
      label: { 
        show: true, 
        formatter: function(params) {
          return  '{a|' + params.name + '}\n\n\n{b|' + params.value + '}\n\n{c|' + params.percent.toFixed(2) + '%}';
        },
         rich: {
     // 添加自定义样式，覆盖默认样式
     a: {
      width: '80%',
      fontSize: 28,
      color: '#1DBF73',
      fontWeight: 'bold',
     },
     b: {
      fontSize: 28,
      color: 'red',
     },
     c: {
      fontSize: 28,
      color: 'green',
      fontWeight: 'bold',
     }
    },
      }
    },
    data: dataList
  }]

  }
  
  )
}
// 在组件挂载时初始化图表
onMounted(() => {
  initPieEcharts()
  myChart2.value.on('mouseover', (params) => {
    myChart2.value.setOption({
      
      series: {
        label: {
          normal: {
              show: false,
              },
        }
      }
    })
  })
  myChart2.value.on("mouseout", () => {
    myChart2.value.setOption({
          series: {
            label: {
                  show: true,
            }
          }
        })
      })
  });
</script>

<template>
  <div ref="pieChart" style="width: 500px;height: 500px; ">
  </div>
</template>

<style>

</style>
