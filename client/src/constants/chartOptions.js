// Constants for default Highchart options in Chart.js

export const SOURCE = 'Source: kaggle';

export const BAR = {
  chart: {
    type: 'column'
  },
  title: {
    text: 'Bar Chart'
  },
  subtitle: {
    text: ''
  },
  xAxis: {
    visible: false,
    categories: []
  },
  yAxis: {
    visible: false,
    min: 0,
    tickInterval: 1,
    title: {
      text: 'count(person)'
    }
  },
  tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      '<td style="padding:0"><b>{point.y}</b></td></tr>',
    footerFormat: '</table>',
    shared: true,
    useHTML: true
  },
  plotOptions: {
    column: {
      pointPadding: 0,
      borderWidth: 1,
      groupPadding: 0.2,
      shadow: false
    }
  },
  series: [{
    showInLegend: false,
    colorByPoint: true,
    data: []
  }],
  lang: {
    noData: "No Data to Display"
  },
  noData: {
    style: {
      fontWeight: 'bold',
      fontSize: '15px',
      color: '#303030'
    }
  }
};


export const PIE = {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie'
  },
  title: {
    text: 'Pie Chart'
  },
  subtitle: {
    text: ''
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: true,
        format: '<b>{point.name}</b>: {point.percentage:.1f} %'
      }
    }
  },
  series: [{
    colorByPoint: true,
    data: []
  }],
  lang: {
    noData: "No Data to Display"
  },
  noData: {
    style: {
      fontWeight: 'bold',
      fontSize: '15px',
      color: '#303030'
    }
  }
};
