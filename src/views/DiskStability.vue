<template>
  <div class="about">
    <el-col :span="24">
      <div id="chart1" style="width: 100%;height: 300px"></div>
      <div id="chart2" style="width: 100%;height: 300px"></div>
    </el-col>
  </div>
</template>

<script>
  export default {
    mounted() {
      this.initChart1();
      this.initChart2();
    },
    methods:{
      initChart1(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('chart1'));

        // 指定图表的配置项和数据
        let option = {
          title: {
            text: '虚拟内存',
            left: 'center'
          },
          tooltip: {},
          legend: {
            data:['销量']
          },
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', '1', '2222', '2222', '2222', '2222', '2222', '2222', '22222', '22222', '22222', '22222', '22222', '22222', '22222', '22222', '22222', '22222', '22222', '22222', '22222', '22222', '22222']
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320, 1600, 1600, 1600, 1600, 1600, 1600, 1600, 1600, 1600, 1600, 1600, 1600, 1600, 1600, 1600, 1600, 1600, 1600, 1600, 1600, 1600, 1600],
            type: 'line',
            // 普通样式。
            itemStyle: {
              // 点的颜色。
              color: '#3398db'
            },
          }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
      },
      initChart2(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('chart2'));

        // 指定图表的配置项和数据
        let option = {
          title: {
            text: '工作集',
            left: 'center'
          },
          tooltip: {},
          legend: {
            data:['销量']
          },
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', '1', '2222', '2222', '2222', '2222', '2222', '2222', '22222', '22222', '22222', '22222', '22222', '22222', '22222', '22222', '22222', '22222', '22222', '22222', '22222', '22222', '22222']
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320, 1600, 1600, 1600, 1600, 1600, 1600, 1600, 1600, 1600, 1600, 1600, 1600, 1600, 1600, 1600, 1600, 1600, 1600, 1600, 1600, 1600, 1600],
            type: 'line',
            // 普通样式。
            itemStyle: {
              // 点的颜色。
              color: '#3398db'
            },
          }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
      }
    }
  }
</script>