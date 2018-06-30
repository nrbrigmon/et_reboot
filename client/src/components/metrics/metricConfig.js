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
				"name": name,
				"colorByPoint": true,
				"data": data
			}
		]
	}
}