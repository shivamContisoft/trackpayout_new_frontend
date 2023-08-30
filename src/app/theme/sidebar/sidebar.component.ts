import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
    openSidebar: boolean = true;

      menuSidebar=[
        {
        link_name: "Dashboard",
        link: "/dashboard",
        icon: "fa-solid fa-border-all",
        sub_menu: [
          {
            link_name: "Standard",
            link: "/html-n-css",
          }, 
          {
            link_name: "By Amount",
            link: "/html-n-css",
          }, 
          {
            link_name: "By Ledger",
            link: "/html-n-css",
          }, 
          {
            link_name: "By Stock item",
            link: "/html-n-css",
          },
          {
            link_name: "Monthly Report",
            link: "/html-n-css",
          },  
        ]
      }, 
      
      
      {
        link_name: "Stock Summary",
        link: null,
        icon: "fa-solid fa-file-invoice",
        sub_menu: [
          {
            link_name: "HTML & CSS",
            link: "/html-n-css",
          }, {
            link_name: "JavaScript",
            link: "/javascript",
          }, {
            link_name: "PHP & MySQL",
            link: "/php-n-mysql",
          }
        ]
      }, 
      
      
      
      {
        link_name: "Reports",
        link: null,
        icon: "fa-solid fa-chart-column",
        sub_menu: [
          
          {
            link_name: "Group Oustanding",
            link: "/posts/web-design",
          }, {
            link_name: "Post Dated Report",
            link: "/posts/login-form",
          }, {
            link_name: "Sales Registor",
            link: "/posts/card-design",
          },
          {
            link_name: "Receipt Registor",
            link: "/html-n-css",
          }, 
          {
            link_name: "Credit Note Registor",
            link: "/html-n-css",
          }, 
          {
            link_name: "Purchase Registor",
            link: "/html-n-css",
          }, 
          {
            link_name: "Payment Registor",
            link: "/html-n-css",
          }, 
          {
            link_name: "Debit Note Registor",
            link: "/html-n-css",
          }, 
          {
            link_name: "Journal Registor",
            link: "/html-n-css",
          }, 
        ]
      },
       {
        link_name: "By Due Days",
        link: "/analytics",
        icon: "fa-solid fa-calendar-days",
        sub_menu: [
          {
            link_name: "Sundry Debtor",
            link: "/html-n-css",
          }, 
          {
            link_name: "Sundry Creditor",
            link: "/html-n-css",
          }, 
        ]
      }, 
      {
        link_name: "Ledger Statement",
        link: "/chart",
        icon: "fa-solid fa-file-lines",
        sub_menu: [
          {
            link_name: "Sundry Debtor",
            link: "/html-n-css",
          }, 
          {
            link_name: "Sundry Creditor",
            link: "/html-n-css",
          }, 
        ]
      },
       {
        link_name: "Ageing Report",
        link: null,
        icon: "fa-solid fa-file-lines",
        sub_menu: [
          {
            link_name: "UI Face",
            link: "/ui-face",
          }, {
            link_name: "Pigments",
            link: "/pigments",
          }, {
            link_name: "Box Icons",
            link: "/box-icons",
          }
        ]
      },
      
       {
        link_name: "Client Performance",
        link: "/history",
        icon: "fa-solid fa-chart-line",
        sub_menu: []
      },
       {
        link_name: "Task",
        link: "/setting",
        icon: "fa-solid fa-clock",
        sub_menu: []
      }  , 
      {
        link_name: "Bill Discount",
        link: "/setting",
        icon: "fa-solid fa-percent",
        sub_menu: []
      },
       {
        link_name: "Statutory",
        link: "/setting",
        icon: "fa-solid fa-circle-check",
        sub_menu: [
          {
            link_name: "MSME",
            link: "/html-n-css",
          }, 
          {
            link_name: "GST",
            link: "/html-n-css",
          }, 
        ]
      }, 
      
      {
        link_name: "CRM",
        link: "/setting",
        icon: "fa-solid fa-user",
        sub_menu: [
          {
            link_name: "Sales Executive",
            link: "/html-n-css",
          }, 
          {
            link_name: "Leads",
            link: "/html-n-css",
          }, 
          {
            link_name: "Quotations",
            link: "/html-n-css",
          }, 
        ]
      },
       {
        link_name: "Legal Support",
        link: "/setting",
        icon: "fa-solid fa-circle-question",
        sub_menu: []
      },
      
      {
        link_name: "Contisoft Pannel",
        link: "/setting",
        icon: "fa-solid fa-bars-staggered",
        sub_menu: [
          {
            link_name: "Dashboard",
            link: "/html-n-css",
          }, 
          {
            link_name: "Subscriptions",
            link: "/html-n-css",
          }, 
          {
            link_name: "Companies",
            link: "/html-n-css",
          }, 
        ]
      },
      
      {
        link_name: "Adminstrator",
        link: "/setting",
        icon: "fa-solid fa-gear",
        sub_menu: [
          {
            link_name: "User",
            link: "/html-n-css",
          }, 
          {
            link_name: "Ledger",
            link: "/html-n-css",
          }, 
          {
            link_name: "OnBoard Masters",
            link: "/html-n-css",
          }, 
          {
            link_name: "Bank Details",
            link: "/html-n-css",
          },
          {
            link_name: "Company",
            link: "/html-n-css",
          },  
          {
            link_name: "General Configuration",
            link: "/html-n-css",
          }, 
        ]
      },
      
      {
        link_name: "Banking",
        link: "/setting",
        icon: "fa-solid fa-laptop",
        sub_menu: [
          {
            link_name: "Customer Statement",
            link: "/html-n-css",
          }, 
          {
            link_name: "DP Power Calculator",
            link: "/html-n-css",
          }, 
        ]
      },
      
        {
          link_name: "Log",
          link: "/setting",
          icon: "fa-solid fa-arrow-right-from-bracket",
          sub_menu: [
            {
              link_name: "Logs",
              link: "/html-n-css",
            },   {
              link_name: "Logs by user",
              link: "/html-n-css",
            }
          ]
        },


      ];
      

      showSubmenu(itemEl: HTMLElement) {
        itemEl.classList.toggle("showMenu");
      }

  
}
