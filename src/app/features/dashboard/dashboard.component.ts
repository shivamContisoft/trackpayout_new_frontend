import { Component, ViewChild } from '@angular/core';

import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexFill,
  ApexTooltip
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
};


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions!:  Partial<ChartOptions>;
  public chartOptions2!: Partial<ChartOptions>;
  public chartOptions3!: Partial<ChartOptions>;
  public chartOptions4!: Partial<ChartOptions>;




  compHead:string = 'Dashboard';
  main:string = 'Dashboard';
  sub:string = 'Standard';
  


  constructor(){
    this.chartOptions = {
      series: [
        {
          name: "Net Profit", //orange
          data: [8000,2270, 0,2550, ] //76,50, 55, 57, 56, 61, 58, 63,60
        },
         {
           name: "Revenue", //red
           data: [4025, 4500, 4550, 0,]
        },
        // {
        //   name: "Free Cash Flow",
        //   data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
        // }
      ],
      
      chart: {
        type: "bar",
        height: 270,
        toolbar:{
          show:false,
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "29%",
          borderRadius:3,
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        categories: [
          "7days",
          "15days",
          "30days",
          "30Abv",  
        ]

      },
      yaxis: {
        title: {
        }
      },
      fill: {
        opacity: 1,
        colors:['#A7C5F6', '#0065FE', '#9C27B0']
      },
      tooltip: {
        y: {
          formatter: function(val) {
            return "$ " + val + " thousands";
          }
        }
      },

      legend:{
        show:false,
      }

    };
// chartoption2

   this.chartOptions2 = {
      series: [
        {
          name: "Net Profit", //light-blue
          data: [0,0, 0,0] //76,50, 55, 57, 56, 61, 58, 63,60
        },
         {
           name: "Revenue", //dark-blue
           data: [6500, 8550, 990,0 ]
        },
        // {
        //   name: "Free Cash Flow",
        //   data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
        // }
      ],
      
      chart: {
        type: "bar",
        height: 270,
        toolbar:{
          show:false,
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "29%",
          borderRadius:3,
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        categories: [
          "7days",
          "15days",
          "30days",
          "30Abv",
        ]

      },
      yaxis: {
        title: {
        }
      },
      fill: {
        opacity: 1,
        colors:['#A7C5F6', '#0065FE', '#9C27B0']
      },
      tooltip: {
        y: {
          formatter: function(val) {
            return "$ " + val + " thousands";
          }
        }
      },

      legend:{
        show:false,
      }

    }
// chart options3
this.chartOptions3 = {
  series: [
    {
      name: "Net Profit", //light-blue
      data: [0,0, 0,0] //76,50, 55, 57, 56, 61, 58, 63,60
    },

     {
       name: "Revenue", //dark-blue
       data: [3000, 8550, 1000,3500 ]
    },
    // {
    //   name: "Free Cash Flow",
    //   data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
    // }
  ],
  
  chart: {
    type: "bar",
    height: 270,
    toolbar:{
      show:false,
    }
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "29%",
      borderRadius:3,
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"]
  },
  xaxis: {
    categories: [
      "7days",
      "15days",
      "30days",
      "30Abv",
      
      
    ]

  },
  yaxis: {
    title: {
    }
  },
  fill: {
    opacity: 1,
    colors:['#A7C5F6', '#0065FE', '#9C27B0']
  },
  tooltip: {
    y: {
      formatter: function(val) {
        return "$ " + val + " thousands";
      }
    }
  },

  legend:{
    show:false,
  }

};


// linechart
this.chartOptions4 = {
  series: [
    {
      name: "Net Profit", //light-blue
      data: [0,0, 0,0] //76,50, 55, 57, 56, 61, 58, 63,60
    },
     {
       name: "Revenue", //dark-blue
       data: [0, 8550, 1000,3500 ]
    },
    // {
    //   name: "Free Cash Flow",
    //   data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
    // }
  ],
  
  chart: {
    type: "area",
    height: 270,
    toolbar:{show:false}
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "29%",
      borderRadius:3,
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2.5,
    colors: ["#0065FE"],
    dashArray:9
  },
  xaxis: {
    categories: [
      "7days",
      "15days",
      "30days",
      "30Abv",
      
      
    ]

  },
  yaxis: {
    title: {
    }
  },
  fill: {
    opacity: 1,
    colors:['#A7C5F6', '#0065FE', '#9C27B0']
  },
  tooltip: {
    y: {
      formatter: function(val) {
        return "$ " + val + " thousands";
      }
    }
  },

  legend:{
    show:false,
  }

};




   
  }

}
