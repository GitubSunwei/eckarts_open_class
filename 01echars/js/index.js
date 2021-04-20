(function(){
  // 初始化实例对象
  var myChart = echarts.init(document.querySelector('.bar .chart'));

  // 指定配置项的数据
  option = {
    color: ['#2f89cf'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    // 修改图标的大小
    grid: {
      left: '0%',
      top: '10%',
      right: '0%',
      bottom: '4%',
      containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
                alignWithLabel: true
            },
            axisLabel:{
              color: "rgba(255,255,255,.6)",
              fontSize: 12,
            },
            // 不显示x坐标轴的线
            axisLine:{
              show: false
            }
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '直接访问',
            type: 'bar',
            barWidth: '60%',
            data: [10, 52, 200, 334, 390, 330, 220]
        }
    ]
  };

  // 把配置项给实例对象
  myChart.setOption(option);

  window.addEventListener("resize", function() {
    myChart.resize();
  });
})()