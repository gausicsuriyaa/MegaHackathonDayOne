$(function () {
    var jdata = {
        "FCR": {
            "y": [
            9.39,
            90.35,
            90.36,
            92.69],
            "name": "FCR",
            "training": [
        true,
        false,
        false,
        false],
            "trainingdate": [
        "Jan 13",
        "",
        "",
        ""]
        },
        "AHT": {
            "y": [
            6.38,
            6.63,
            90.3,
            9.65],
            "name": "AHT",
            "training": [
        false,
        false,
        true,
        false],
            "trainingdate": [
        "",
        "",
        "Mar 10",
        ""]
        }
    };

    var seriesArr = [];
    $.each(jdata, function (key, data) {
        var series = {
            name: key,
            data: []
        };

        $.each(data.y, function (index, value) {
            series.data.push({
                y: value
            });
        });

        $.each(data.training, function (index, value) {
            series.data[index].training = value;
        });
        seriesArr.push(series);
    });

    var options = {
        chart: {
            renderTo: 'container',
            defaultSeriesType: 'line'
        },
        tooltip: {
            formatter: function () {
                if (this.point.training) {
                    return 'Agent Score is : ' + this.point.y + '<br>' + 'Training Completed on : ' + this.point.trainingdate;
                }
                else {
                    return 'Agent Score is : ' + this.point.y + '<br>' + 'Agent undertook no training';
                }
            }
        },
        title: {
            text: 'Monthly Rate',
            style: {
                margin: '10px 100px 0 0' // center it
            }
        },
        xAxis: {
            categories: ['Jan 12', 'Feb 12', 'Mar 12', 'Apr 12', 'May 12', 'Jun 12', 'Jul 12', 'Aug 12', 'Sep 12', 'Oct 12', 'Nov 12', 'Dec 12', 'Jan 13', 'Feb 13']
        },
        yAxis: {
            title: {
                text: 'Performance Score',
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }],
            min: 0
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            x: 0,
            title: 'Care Setting'
        },
        plotOptions: {
            series: {
                marker: {
                    //fillColor: (function (check) { return check==true ? "#ff0000" : "#00ff00"; })(this.point.training)
                    enabled: function () {
                        return this.point.training;
                            }
                    }
                }
        },
        credits: {
            enabled: false
        },
        series: seriesArr
    };


    var chart = new Highcharts.Chart(options);

});