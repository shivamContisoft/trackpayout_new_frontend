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
  selector: 'app-amount',
  templateUrl: './amount.component.html',
  styleUrls: ['./amount.component.scss']
})
export class AmountComponent {

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions!:  Partial<ChartOptions>;
  public chartOptions1!:  Partial<ChartOptions>;
  public chartOptions2!:  Partial<ChartOptions>;


  constructor(){
   
    this.chartOptions = {
      series: [
        {
          name: "Amount", //orange
          data: [8000,2270, 0,2550, 19,399,5000,7633,367,456,234,897] //76,50, 55, 57, 56, 61, 58, 63,60
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
        colors:['#0065FE']
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
          data: [80,2270, 30,200] //76,50, 55, 57, 56, 61, 58, 63,60
        },
         {
           name: "Receipt", //red
           data: [425, 20, 40, 10]
        },
       
      ],
      
      chart: {
        type: "bar",
        height: 450,
        width: 1100,
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
          "0-30",
          "30-60",
          "60-90",
          "90+"
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
          data: [8000,2270, 0,2550, 19,399,5000,7633,367,456] //76,50, 55, 57, 56, 61, 58, 63,60
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
          "Bajaj Debetors",
          "Contisoft(Debtors)",
          "A4",
          "Customer X17",
          "Anant Khande",
          "Creative New",
          "Customer Harish II",
          "Kirti Debtors",
          "Haldiram",
          "Arun Kumaar Singh"
        ]

      },
      yaxis: {
        title: {
        }
      },
      fill: {
        opacity: 1,
        colors:['#0065FE']
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

















