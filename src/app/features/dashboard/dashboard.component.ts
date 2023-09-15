import { Component, ViewChild } from '@angular/core';
import * as ApexCharts from 'apexcharts';


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
  cei: number;
  chartvaluedata: number;
  dsothisfin: any;
  persentaheofriskaccount: number;
  
  ngOnInit() {
    
    this.showdsopichart()

  }


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
  
  showdsopichart(){
    console.log("Chart function is loading ...");
    
    this.chartvaluedata=95
    this.chartvaluedata=0;
    this.dsothisfin=120
    if(this.dsothisfin === undefined){
       this.chartvaluedata=0
    }else{
      this.chartvaluedata=this.dsothisfin
    }
     
     
  // var options2 = {
  //   chart: {
  //     height: 200,
  //     type: "radialBar",
  //   },
  //   series: [this.chartvaluedata],
  //   colors: ["#8CC4F2"],
  //   plotOptions: {
  //     radialBar: {
  //       startAngle: -90,
  //       endAngle: 90,
  //       track: {
  //         background: '#F0F0F0',
  //         startAngle: -90,
  //         endAngle: 90,
  //       },
  //       dataLabels: {
  //         name: {
  //           show: false,
  //         },
  //         value: {
  //           fontSize: "20px",
  //           show: true
  //         }
  //       }
  //     }
  //   },
  //   fill: {
  //     type: "gradient",
  //     gradient: {
  //       shade: "dark",
  //       type: "horizontal",
  //       gradientToColors: ["#8CC4F2"],
  //       stops: [0, 100]
  //     }
  //   },
  //   stroke: {
  //     lineCap: "butt"
  //   },
  //   labels: ["Progress"]
  // };
  
  
  // new ApexCharts(document.querySelector("#chart2"), options2).render();
  this.persentaheofriskaccount=10
  let gradiantcolorrisk=["#FF1E00"]
  if(this.persentaheofriskaccount<30){
    gradiantcolorrisk= ["#0065fe"]
  }
  var options1 = {
    chart: {
      height: 200,
      type: "radialBar",
    },
    series: [this.persentaheofriskaccount],
    colors: ["#0065fe"],
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
          background: '#F0F0F0',
          startAngle: -90,
          endAngle: 90,
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            fontSize: "20px",
            show: true
          }
        }
      }
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "horizontal",
        gradientToColors: gradiantcolorrisk,
        stops: [0, 100]
      }
    },
    stroke: {
      lineCap: "butt"
    },
    labels: ["Progress"]
  };
  
  
  new ApexCharts(document.querySelector("#ceichart"), options1).render();
  this.cei=60
    let gradiantcolor=["#0065fe"]
    if(this.cei<30){
      gradiantcolor=["#0065fe"]
    }
  
  var options3 = {
    chart: {
      height: 200,
      type: "radialBar",
    },
    series: [this.cei],
    colors:["#0065fe"],// ["#003366"],
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
          background: '#F0F0F0',
          startAngle: -90,
          endAngle: 90,
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            fontSize: "20px",
            show: true
          }
        }
      }
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "horizontal",
        gradientToColors: gradiantcolor,
        stops: [0, 100]
      }
    },
    stroke: {
      lineCap: "butt"
    },
    labels: ["Progress"]
  };
  
  
  new ApexCharts(document.querySelector("#highriskchart3"), options3).render();
  
  
  }

  

}
