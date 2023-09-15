import { Component ,  ViewChild} from '@angular/core';

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
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.scss']
})
export class LedgerComponent {

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions!:  Partial<ChartOptions>;
  public chartOptions1!:  Partial<ChartOptions>;
  public chartOptions2!:  Partial<ChartOptions>;
  




  constructor(){
   
    this.chartOptions = {
      series: [
        {
          name: "Sales", //orange
          data: [8000,2270, 0,2550, 19,399,5000,7633,367,456,234,897] //76,50, 55, 57, 56, 61, 58, 63,60
        },
         {
           name: "Receipt", //red
           data: [4025, 4500, 4550, 456,399,55,60,786,3427,745,457,432]
        },
        {
          name: "Credit Note",
          data:  [4325, 450, 550,400,3990,558,603,786,363,7665,4500,432]
        }
      ],
      
      chart: {
        type: "bar",
        height: 450,
        width: 750,
        toolbar:{
          show:false,
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "49%",
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
          "APR",
          "MAY",
          "JUN",
          "JUL",
          "AUG",
          "SEP",
          "OCT",
          "NOV",
          "DEC",
          "JAN",
          "FEB",
          "MAR"  
        ]

      },
      yaxis: {
        title: {
        }
      },
      fill: {
        opacity: 1,
        colors:['#A7C5F6', '#0065FE', '#4791FF']
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
   

    this.chartOptions1 = {
      series: [
        {
          name: "Sales", //orange
          data: [8000,2270, 0,2550, 19,399,5000,7633,367,456,234,897] //76,50, 55, 57, 56, 61, 58, 63,60
        },
         {
           name: "Receipt", //red
           data: [4025, 4500, 4550, 456,399,55,60,786,3427,745,457,432]
        },
        {
          name: "Credit Note",
          data:  [4325, 450, 550,400,3990,558,603,786,363,7665,4500,432]
        }
      ],
      
      chart: {
        type: "bar",
        height: 450,
        width: 450,
        toolbar:{
          show:false,
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "49%",
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
          "APR",
          "MAY",
          "JUN",
          "JUL",
          "AUG",
          "SEP",
          "OCT",
          "NOV",
          "DEC",
          "JAN",
          "FEB",
          "MAR"  
        ]

      },
      yaxis: {
        title: {
        }
      },
      fill: {
        opacity: 1,
        colors:['#A7C5F6', '#0065FE', '#4791FF']
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
   
   
    this.chartOptions2 = {
      series: [
        {
          name: "Sales", //orange
          data: [8000,2270, 0,2550, 19,399,5000,7633,367,456,234,897] //76,50, 55, 57, 56, 61, 58, 63,60
        },
         {
           name: "Receipt", //red
           data: [4025, 4500, 4550, 456,399,55,60,786,3427,745,457,432]
        },
        {
          name: "Credit Note",
          data:  [4325, 450, 550,400,3990,558,603,786,363,7665,4500,432]
        }
      ],
      
      chart: {
        type: "bar",
        height: 450,
        width: 1050,
        toolbar:{
          show:false,
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "69%",
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
          "APR",
          "MAY",
          "JUN",
          "JUL",
          "AUG",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
          "Jan",
          "Feb",
          "Mar"          
        ]

      },
      yaxis: {
        title: {
        }
      },
      fill: {
        opacity: 1,
        colors:['#A7C5F6', '#0065FE', '#4791FF']
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




