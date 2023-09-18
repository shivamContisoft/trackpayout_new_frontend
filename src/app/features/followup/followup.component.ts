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
  selector: 'app-followup',
  templateUrl: './followup.component.html',
  styleUrls: ['./followup.component.scss']
})
export class FollowupComponent {

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
   

    // this.chartOptions5 = {
    //   series: [
    //     {
    //       name: "Net Profit", //light-blue
    //       data: [0,0, 0,0] //76,50, 55, 57, 56, 61, 58, 63,60
    //     },
    
    //     //  {
    //     //    name: "Count", //dark-blue
    //     //    data: [455000,5000000,100000,6000000,678880]
    //     // },
    //     {
    //       name: "count",
    //       data: [35, 41, 36, 26, 45, 48, 52, 53, 41,89,63,44]
    //     }
    //   ],
      
    //   chart: {
    //     type: "bar",
    //     height: 270,
    //     toolbar:{
    //       show:false,
    //     }
    //   },
    //   plotOptions: {
    //     bar: {
    //       horizontal: false,
    //       columnWidth: "29%",
    //       borderRadius:3,
    //     }
    //   },
    //   dataLabels: {
    //     enabled: false
    //   },
    //   stroke: {
    //     show: true,
    //     width: 2,
    //     colors: ["transparent"]
    //   },
    //   xaxis: {
    //     categories: [
    //       "Apr",
    //       "May",
    //       "Jun",
    //       "Jul",
    //       "Aug",
    //       "Sep",
    //       "Oct",
    //       "Nov",
    //       "Dec",
    //       "Jan",
    //       "Feb",
    //       "Mar"
     
    //     ]
    
    //   },
    //   // yaxis: {
    //   //   title: {
    //   //     text: "Amount in (₹)"
    //   //   }
    //   // },
    //   fill: {
    //     opacity: 1,
    //     colors:['#A7C5F6', '#0065FE', '#9C27B0']
    //   },
    //   tooltip: {
    //     // y: {
    //     //   formatter: function(val) {
    //     //     return "₹" + val ;
    //     //   }
    //     // }
    //   },
    
    //   legend:{
    //     show:false,
    //   }
    
    // };
    

    this.chartOptions5 = {
      series: [
        {
          name: "Automated",
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66,0,8,0]
        },
        {
          name: "Manual",
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94,9,7,5]
        },
        {
          name: "Whatsapp",
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41,4,3,5]
        }
      ],
      chart: {
        type: "bar",
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          // endingShape: "rounded"
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
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
          "Jan",
          "Feb",
          "Mar",
        ]
      },
      yaxis: {
        title: {
          text: "count"
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        // y: {
        //   formatter: function(val) {
        //     return "$ " + val + " thousands";
        //   }
        // }
      }
    };
    
    
      }
  


}





