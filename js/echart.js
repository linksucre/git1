$(function() {
//  车辆分类
	var myChart = echarts.init(document.getElementById('main'));
	option = {
		tooltip: {
			trigger: 'item',
			formatter: "{a} <br/>{b} : {c} ({d}%)"
		},
		series: [{
			type: 'pie',
			radius: '70%',
			center: ['50%', '50%'],
			data: [{
					value: 11.57,
					name: '普通货车：11.57%'
				},
				{
					value: 4.79,
					name: '中、大型客车：4.79%'
				},
				{
					value: 0.08,
					name: '消防车：0.08%'
				},
				{
					value: 2.78,
					name: '特种车辆：2.78%'
				},
				{
					value: 5.67,
					name: '工程车：5.67%'
				},
				{
					value: 0.13,
					name: '生活服务：0.13%'
				},
				{
					value: 15.32,
					name: '小客车：15.32%'
				},
				{
					value: 0.22,
					name: '挂车：0.22%'
				},
				{
					value: 0.23,
					name: '卡车：0.23%'
				},
				{
					value: 58.84,
					name: '危货(油罐车)：58.84%'
				}
			],
			itemStyle: {
				emphasis: {
					shadowBlur: 10,
					shadowOffsetX: 0,
					shadowColor: 'rgba(0, 0, 0, 0.5)'
				}
			}
		}]
	};
	myChart.setOption(option);
//驾驶员级别
    var myChart = echarts.init(document.getElementById('main1'));
	option1 = {
		tooltip: {
			trigger: 'item',
			formatter: "{a} <br/>{b} : {c} ({d}%)"
		},
		series: [{
			type: 'pie',
			radius: '70%',
			center: ['50%', '50%'],
			data: [{
					value: 16.39,
					name: '五星：16.39%'
				},
				{
					value: 5.68,
					name: '四星：5.68%'
				},
				{
					value: 0.00,
					name: '三星：0.00%'
				},
				{
					value: 24.35,
					name: '二星：24.35%'
				},
				{
					value: 53.58,
					name: '一星：53.58%'
				}
			],
			itemStyle: {
				emphasis: {
					shadowBlur: 10,
					shadowOffsetX: 0,
					shadowColor: 'rgba(0, 0, 0, 0.5)'
				}
			}
		}]
	};
	myChart.setOption(option1);
//车辆里程
 var myChart = echarts.init(document.getElementById('main2'));
	option2 = {
		tooltip: {
			trigger: 'item',
			formatter: "{a} <br/>{b} : {c} ({d}%)"
		},
		series: [{
			type: 'pie',
			radius: '70%',
			center: ['45%', '50%'],
			data: [{
					value: 0.00,
					name: '总部机关：0.00%'
				},
				{
					value: 8.10,
					name: '油气田企业：8.10%'
				},
				{
					value: 3.61,
					name: '炼化企业：3.61%'
				},
				{
					value: 0.56,
					name: '销售企业：0.56%'
				},
				{
					value: 0.59,
					name: '管道存储企业：0.59%'
				},
				{
					value: 12.21,
					name: '工程技术服务企业：12.21%'
				},
				{
					value: 74.92,
					name: '运输公司：74.92%'
				},
			],
			itemStyle: {
				emphasis: {
					shadowBlur: 10,
					shadowOffsetX: 0,
					shadowColor: 'rgba(0, 0, 0, 0.5)'
				}
			}
		}]
	};
	myChart.setOption(option2);
//违规处理统计
var myChart = echarts.init(document.getElementById('main3'));
  option3 = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['超速','疲劳驾驶','异常停车','紧急','越区','偏航','三交一封','其他']
        }
    ],
    yAxis: {
				type: 'value',
				name: '水量',
				min: 0,
				max: 60,
				interval:20,
				axisLabel: {
					formatter: '{value}k'
				}
			},
    series : [
        {
            name:'超速',
            type:'bar',
            data:[7, 45, 52, 0, 0, 0, 5]
        },
        {
            name:'处理数量',
            type:'bar',
            data:[5, 41, 51, 0, 0, 0, 2]
        }
    ]
};

myChart.setOption(option3);
//轨迹回放统计
var myChart = echarts.init(document.getElementById('main4'));
option4 = {
    color: ['#3398DB'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '1%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            axisLabel: {interval:0},
            data : ['油气企业', '炼化企业', '销售企业', '运输公司', '管道储存企业', '工程技术服务企业'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
     yAxis: {
				type: 'value',
				name: '水量',
				min: 0,
				max:8,
				interval:2,
				axisLabel: {
					formatter: '{value}k'
				}
			},
    series : [
        {
            name:'直接访问',
            type:'bar',
            barWidth: '30%',
            data:[4.2, 2.8, 1, 5.9, 1.9, 1.7]
        }
    ]
};
myChart.setOption(option4);
//报警统计
var myChart = echarts.init(document.getElementById('main5'));
 option5 = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            axisLabel: {interval:0},
            data : ['一公司','长庆运输公司','黑龙江分公司','辽宁分公司','内蒙古分公司','河北跟公司']
        }
    ],
    yAxis: {
				type: 'value',
				name: '水量',
				min: 0,
				max:100,
				interval:25,
				axisLabel: {
					formatter: '{value}k'
				}
			},
    series : [
        {
            name:'报警车数',
            type:'bar',
            data:[1, 5, 2, 0, 15, 2]
        },
        {
            name:'报警车次',
            type:'bar',
            data:[2, 80, 10, 1, 23, 6]
        }
    ]
};
 myChart.setOption(option5);
})