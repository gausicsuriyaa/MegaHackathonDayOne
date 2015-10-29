<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="AgentKPIScoreCard.aspx.cs" Inherits="Vz.MegaHack.Web.AgentKPIScoreCard" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <script type="text/javascript" src="Content/Scripts/jquery-1.10.2.min.js"></script>
    <script type="text/javascript" src="Content/Scripts/jquery.layout.js"></script>
    <%--<script type="text/javascript" src="Content/Scripts/highcharts.js"></script>--%>
    <script type="text/javascript" src="Content/Scripts/testChart.js"></script>
    <script type="text/javascript" src="https://code.highcharts.com/modules/exporting.js"></script>
    <script type="text/javascript" src="https://code.highcharts.com/stock/highstock.js"></script>
    <script type="text/javascript">
        $(function () {  
            $('#container').highcharts({
                chart: {  
                    type: 'column' 
                },  
                title: {  
                    text: ''  
                },  
                subtitle: {  
                    text: ''  
                },  
                xAxis: {  
                    title: {  
                        text: 'Sender Name'
                    }, 
                    labels:{
                        rotation:-25,
                        y:50
                    },
                    categories: <%=chartData1%>
                },  
                yAxis: {  
                    linewidth : 10,
                    gridLineWidth: 0,
                    min: 0,  
                    title: {  
                        text: 'Payment Count'  
                    }
                },  
                tooltip: {  
                    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',  
                    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y} </b></td></tr>',  
                    footerFormat: '</table>',  
                    shared: true,  
                    useHTML: true  
                },  
                plotOptions: {  
                    column: {  
                        pointPadding: 0.2,  
                        borderWidth: 0  
                    }
                },series: [{
                    name: 'Sender',
                    data: <%= chartData%> ,
                    dataLabels: {
                        enabled: true,
                        rotation: -90,
                        color: '#FFFFFF',
                        align: 'center',
                        x:5,
                        y:10
                    }
                }]    
            });  
        }); 
    </script>
</head>
<body>
    <form id="form1" runat="server">
    <div id="chartContainer1" style="min-width: 310px; max-width:500px; height: 400px; margin: 1em auto"></div>
    </form>
</body>
</html>
