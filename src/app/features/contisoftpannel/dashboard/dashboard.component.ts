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
  public chartOptions5!: Partial<ChartOptions>;





  compHead:string = 'Dashboard';
  main:string = 'Dashboard';
  sub:string = 'Standard';
  cei: number;
  chartvaluedata: number;
  dsothisfin: any;
  persentaheofriskaccount: number;
  



  constructor(){
   
// chartoption2

   this.chartOptions2 = {
      series: [
        {
          name: "Net Profit", //light-blue
          data: [0,0, 0,0] //76,50, 55, 57, 56, 61, 58, 63,60
        },
         {
           name: "Count", //dark-blue
           data: [1, 59, 71,0,80 ]
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
          "Manual",
          "Tally ERP",
          "Tally Prime",
          "QuickBooks",
          "Zoho"
        ]

      },
      yaxis: {
        title: {
          text: "Integration Counts"
        }
      },
      fill: {
        opacity: 1,
        colors:['#A7C5F6', '#0065FE', '#9C27B0']
      },
      // tooltip: {
      //   y: {
      //     // formatter: function(val) {
      //     //   return "$ " + val + " thousands";
      //     }
      //   }
      // },

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
       name: "Count", //dark-blue
       data: [3, 0, 4,6 ]
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
      "7 Days",
      "15 Days",
      "30 Days",
      "60 Days",
      
      
    ]

  },
  yaxis: {
    title: {
      text: "Customer Counts"
    }
  },
  fill: {
    opacity: 1,
    colors:['#A7C5F6', '#0065FE', '#9C27B0']
  },
  // tooltip: {
  //   y: {
  //     formatter: function(val) {
  //       return "$ " + val + " thousands";
  //     }
  //   }
  // },

  legend:{
    show:false,
  }

};

this.chartOptions4 = {
  series: [
    {
      name: "Net Profit", //light-blue
      data: [0,0, 0,0] //76,50, 55, 57, 56, 61, 58, 63,60
    },

     {
       name: "Count", //dark-blue
       data: [1, 5,0,0,0,0,0,6,75,1,4,3,24 ]
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
      "Agriculture",
      "Arts and Entertainment",
      "Banking and Financial",
      "Construction",
      "Education",
      "Healthcare",
      "Hospitality",
      "IT and Communication",
      "Manufacturing",
      "Mining and Quarrying",
      "Professional Services",
      "Retail Trading",
      "Wholesale Trading",
      "Other"
      
      
    ]

  },
  yaxis: {
    title: {
      text: "Segment Counts"
    }
  },
  fill: {
    opacity: 1,
    colors:['#A7C5F6', '#0065FE', '#9C27B0']
  },
  // tooltip: {
  //   y: {
  //     formatter: function(val) {
  //       return "$ " + val + " thousands";
  //     }
  //   }
  // },

  legend:{
    show:false,
  }

};

this.chartOptions5 = {
  series: [
    {
      name: "Net Profit", //light-blue
      data: [0,0, 0,0] //76,50, 55, 57, 56, 61, 58, 63,60
    },

     {
       name: "Count", //dark-blue
       data: [455000,5000000,100000,6000000,678880]
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
      "JD Traders",
      "Shro System Pvt Ltd",
      "Conductix-wampfler India Pvt Ltd",
      "Stratsol software  Systems Private Limited",
      "Radha food products(22-23)"
 
    ]

  },
  yaxis: {
    title: {
      text: "Amount in (₹)"
    }
  },
  fill: {
    opacity: 1,
    colors:['#A7C5F6', '#0065FE', '#9C27B0']
  },
  tooltip: {
    y: {
      formatter: function(val) {
        return "₹" + val ;
      }
    }
  },

  legend:{
    show:false,
  }

};



  }

}









 

 
  
    
  
  









