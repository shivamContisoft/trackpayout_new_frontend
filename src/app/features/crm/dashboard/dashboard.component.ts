import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  



  constructor(private router: Router, private route: ActivatedRoute){
   
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
          "Manu",
          "Pallavi",
          "Anant",
          "Anant K",
          "Shivam Sharma"
        ]

      },
      // yaxis: {
      //   title: {
      //     text: "Integration Counts"
      //   }
      // },
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
      text: "Quotation Status"
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







  }

  ngOnInit() {    
    this.piechart()
  }
  piechart(){

console.log("chart  pie ");


    var statusoptions = {
      series: [12,32,23,9],
      chart: {
        type: 'pie', // Change the chart type to 'pie'
         height: 400,
        width: 400,
      },
      labels: ['Qualified','Contacted','Lost Lead','Not-Qualified'], // Use salespersons array as labels for pie chart
      plotOptions: {
        pie: {
          startAngle: 0,
          expandOnClick: false,
        },
      },
      dataLabels: {
        enabled: false,
        formatter: function (val) {
          return parseInt(val) + " Leads";
        },
      },
      tooltip: {
        enabled: true,
        y: {
          formatter: function (val) {
            return parseInt(val) + " Leads";
          },
        },
      },
    };
    
    var statuschart = new ApexCharts(document.querySelector('#chart1'), statusoptions);
    statuschart.render();
    }



    opensalespersonpage() {
      this.router.navigateByUrl(`/features/crm/sales-executive`)
    }
  
    openleadform() {
      this.router.navigateByUrl(`/features/crm/leads`)
    }
  
    openquotationform() {
      this.router.navigateByUrl(`/features/crm/quotation`)
    }
  
    openleadreport() {
      this.router.navigateByUrl(`/313out41yap141/crm/reports/leadreport`)
    }
  
    opensalespersonanalysis() {
      this.router.navigateByUrl(`/313out41yap141/crm/reports/salespersonanalysis`)
    }
  

}