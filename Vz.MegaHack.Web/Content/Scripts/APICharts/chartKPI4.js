function onChartLoad() {

    var radius,
        label,
        left,
        right,
        renderer;

    if (this.chartWidth < 530) {
        return;
    }

    // Prepare mouseover
    renderer = this.renderer;
    if (renderer.defs) { // is SVG
        $.each(this.get('employees').points, function () {
            var point = this,
                pattern;
            if (point.image) {
                pattern = renderer.createElement('pattern').attr({
                    id: 'pattern-' + point.image,
                    patternUnits: 'userSpaceOnUse',
                    width: 400,
                    height: 400
                }).add(renderer.defs);

                Highcharts.addEvent(point, 'mouseOver', function () {
                    empImage
                        .attr({
                            fill: 'url(#pattern-' + point.image + ')'
                        })
                        .animate({ opacity: 1 }, { duration: 500 });
                });
                Highcharts.addEvent(point, 'mouseOut', function () {
                    empImage.animate({ opacity: 0 }, { duration: 500 });
                });
            }
        });
    }
}

$(function () {
    var options = {

        chart: {
            events: {
                load: onChartLoad
            }
        },
        credits: {
            enabled: false
        },
        xAxis: {
            type: 'datetime',
            minTickInterval: 30 * 24 * 36e5,
            labels: {
                align: 'left'
            },
            plotBands: [{
                from: Date.UTC(2015, 0, 1),
                to: Date.UTC(2015, 2, 31),
                color: '#EFFFFF',
                label: {
                    text: '<em>Quarter1</em>',
                    style: {
                        color: '#999999'
                    },
                    y: 10
                }
            }, {
                from: Date.UTC(2015, 3, 1),
                to: Date.UTC(2015, 5, 30),
                color: '#FFFFEF',
                label: {
                    text: '<em>Quarter2</em>',
                    style: {
                        color: '#999999'
                    },
                    y: 10
                }
            }, {
                from: Date.UTC(2015, 6, 1),
                to: Date.UTC(2015, 8, 30),
                color: '#FFEFFF',
                label: {
                    text: '<em>Quarter3</em>',
                    style: {
                        color: '#999999'
                    },
                    y: 10
                }
            }]

        },

        title: {
            text: 'FCR'
        },

        tooltip: {
            style: {
                width: '250px'
            }
        },

        yAxis: [{
            max: 10,
            allowDecimals: false,
            labels: {
                style: {
                    color: Highcharts.getOptions().colors[2]
                },
                enabled: true
            },
            title: {
                text: 'Performance Points',
                style: {
                    color: Highcharts.getOptions().colors[2]
                }
            },
            gridLineColor: 'rgba(0, 0, 0, 0.07)',
            opposite: true,
            gridLineWidth: 0
        }],

        plotOptions: {
            series: {
                marker: {
                    enabled: false,
                    symbol: 'circle',
                    radius: 2
                },
                fillOpacity: 0.5
            },
            flags: {
                tooltip: {
                    xDateFormat: '%B %e, %Y'
                }
            }
        },

        series: [{
            yAxis: 0,
            name: 'Center Average',
            id: 'revenue',
            type: 'area',
            data: [
                { x: Date.UTC(2015, 0, 1), y: 4, name: '4' },
                { x: Date.UTC(2015, 1, 1), y: 2, name: '2' },
                { x: Date.UTC(2015, 2, 1), y: 3, name: '3' },
                { x: Date.UTC(2015, 3, 1), y: 9, name: '9' },
                { x: Date.UTC(2015, 4, 1), y: 4, name: '4' },
                { x: Date.UTC(2015, 5, 1), y: 2, name: '2' },
                { x: Date.UTC(2015, 6, 1), y: 3, name: '3' },
                { x: Date.UTC(2015, 7, 1), y: 4, name: '4' },
                { x: Date.UTC(2015, 8, 1), y: 8, name: '8' },
                { x: Date.UTC(2015, 9, 1), y: 7, name: '7' }
            ],
            tooltip: {
                headerFormat: '<span style="font-size: 11px;color:#666">{point.x:%B %e, %Y}</span><br>',
                valueSuffix: ' %'
            }

        }, {
            yAxis: 0,
            name: 'Agent Performance',
            id: 'employees',
            type: 'area',
            step: 'left',
            tooltip: {
                headerFormat: '<span style="font-size: 11px;color:#666">{point.x:%B %e, %Y}</span><br>',
                //pointFormat: '{point.name}<br><b>{point.y}</b>',
                valueSuffix: ' %'
            },
            data: [
                { x: Date.UTC(2015, 0, 1), y: 6, name: '6' },
                { x: Date.UTC(2015, 1, 1), y: 4, name: '4' },
                { x: Date.UTC(2015, 2, 1), y: 5, name: '5' },
                { x: Date.UTC(2015, 3, 1), y: 7, name: '7' },
                { x: Date.UTC(2015, 4, 1), y: 6, name: '6' },
                { x: Date.UTC(2015, 5, 1), y: 5, name: '5' },
                { x: Date.UTC(2015, 6, 1), y: 5, name: '5' },
                { x: Date.UTC(2015, 7, 1), y: 7, name: '7' },
                { x: Date.UTC(2015, 8, 1), y: 6, name: '6' },
                { x: Date.UTC(2015, 9, 1), y: 4, name: '4' }
            ]

        }]
    };

    // Add flags for important milestones. This requires Highstock.
    if (Highcharts.seriesTypes.flags) {
        options.series.push({
            type: 'flags',
            name: 'Training',
            color: '#333333',
            fillColor: 'rgba(255,255,255,0.8)',
            data: [
                { x: Date.UTC(2015, 3, 26), text: 'Undertook training', title: 'Training 1' },
                { x: Date.UTC(2015, 5, 25), text: 'Undertook Training', title: 'Training 2' },
                { x: Date.UTC(2015, 7, 27), text: 'Undertook Training', title: 'Training 3' }
            ],
            onSeries: 'employees',
            showInLegend: false
        });
        options.series.push({
            type: 'flags',
            name: 'Awards',
            color: '#333333',
            fillColor: 'green',
            data: [
                { x: Date.UTC(2015, 2, 13), text: 'Awarded Best Employee', title: 'Award 1' },
                { x: Date.UTC(2015, 8, 13), text: 'Spotlight Award', title: 'Award 2' }
            ],
            onSeries: 'employees',
            showInLegend: false
        });
    }


    $('#chart_Container_KPI4').highcharts(options);
});