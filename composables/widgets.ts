import {OMetricsWidget} from "~/composables/oMetricsWidget";

export const metricWidgets: OMetricsWidget[] = [{
    origin: [0, 0],
    dims: [3, 3],
    name: 'Router Saturation',
    chartOptions: {
        chart: {
            reflow: true
        },
        title: {
            text: 'Router Saturation 1'
        },
        series: [
            {
                data: [10, 20, 30]
            }
        ]
    }
}, {
    origin: [0, 3],
    dims: [3, 3],
    name: 'Router Saturation',
    chartOptions: {
        chart: {
            reflow: true
        },
        title: {
            text: 'Router Saturation 2'
        },
        series: [
            {
                data: [10, 20, 30]
            }
        ]
    }
}];