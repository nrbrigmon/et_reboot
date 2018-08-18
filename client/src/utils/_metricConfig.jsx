export const chartColumn = ({name, data, categories, colorArray}) => {
	return {
		chart: {
			type: "column"
		},
		title: {
			text: name
		},
		colors: colorArray,
		xAxis: {
			categories: categories,
			title: {
				text: null
			}
		},
		yAxis: {
			min: 0,
			title: {
				text: name,
				align: "high"
			},
			labels: {
				overflow: "justify"
			}
		},
		legend: {
			enabled: false
		},
		plotOptions: {
			bar: {
				dataLabels: {
				enabled: true
				}
			}
		},
		credits: {
			enabled: false
		},
		series: [
			{
				name: name,
				colorByPoint: true,
				data: data,
				dataLabels: {
					enabled: true,
					rotation: -90,
					color: '#FFFFFF',
					align: 'right',
					format: '{point.y:.1f}', // one decimal
					y: 10, // 10 pixels down from the top
					style: {
						fontSize: '11px'
						// fontFamily: 'Verdana, sans-serif'
					}
				}
			}
		]
	}
}