import { Component } from '@angular/core';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss']
})
export class BillComponent {

  BillsOfDebtor = [];
  BillsOfDebtorCleared = [];
  BillsOfCreditor = [];
  BillsOfCreditorCleared = [];
  activeTab = 'tab1';


  green = "#003366 ";
  black = "black";
  navy = '#003366 ';
  white = 'white';


  public debitorscolumns: any = [
    { name: 'bill_pay', value: 'STATUS', sortable: true, isEnabled: true, textAlign: 'left', filterable: false },
    { name: 'ledger_name', value: 'LEDGER NAME', sortable: true, isEnabled: true, textAlign: 'left', filterable: false },
    { name: 'bill_type', value: 'BILL TYPE', sortable: true, isEnabled: false, textAlign: 'left', filterable: false },
    { name: 'voucher_type', value: 'VOUCHER TYPE', sortable: true, isEnabled: false, textAlign: 'left' },
    { name: 'bill_name', value: 'BILL NO', sortable: true, isEnabled: true, textAlign: 'left' },
    { name: 'bill_date', value: 'BILL OF DATE', sortable: true, isEnabled: true, textAlign: 'center', filterable: false, isDate: true, dateFormat: 'dd-MM-yyyy', },
    { name: 'bill_due_date', value: 'BILL DUE DATE', sortable: true, isEnabled: true, textAlign: 'center', filterable: false, isDate: true, dateFormat: 'dd-MM-yyyy', },
    { name: 'bill_amt', value: 'BILL AMOUNT', sortable: true, isEnabled: true, textAlign: 'right', filterable: false },
    { name: 'balance_amount', value: 'BALANCE AMOUNT', sortable: true, isEnabled: true, textAlign: 'right', filterable: false },
    { name: 'last_payment_date', value: 'LAST DATE OF ADJ.', sortable: true, isEnabled: true, textAlign: 'center', filterable: false },
    { name: 'avg_payment_days', value: 'AVG. PAYMENT DAYS', sortable: true, isEnabled: true, textAlign: 'left', filterable: false },
    { name: 'overdue_days', value: 'OVERDUE DAYS', sortable: true, isEnabled: true, textAlign: 'left', filterable: false },
    { name: 'followup_count', value: 'FOLLOWUP COUNT', sortable: true, isEnabled: true, textAlign: 'left', filterable: false },
    { name: 'interest_amount', value: 'Interest Amount', sortable: true, isEnabled: true, textAlign: 'left', filterable: false }
  ];
  countOfBill=10

  public creditorscolumns: any = [
    { name: 'bill_pay', value: 'STATUS', sortable: true, isEnabled: true, textAlign: 'left', filterable: false },
    { name: 'ledger_name', value: 'LEDGER NAME', sortable: true, isEnabled: true, textAlign: 'left', filterable: false },
    { name: 'bill_type', value: 'BILL TYPE', sortable: true, isEnabled: false, textAlign: 'left', filterable: false },
    { name: 'voucher_type', value: 'VOUCHER TYPE', sortable: true, isEnabled: false, textAlign: 'left' },
    { name: 'bill_name', value: 'BILL NO', sortable: true, isEnabled: true, textAlign: 'left' },
    { name: 'bill_date', value: 'BILL OF DATE', sortable: true, isEnabled: true, textAlign: 'center', filterable: false, isDate: true, dateFormat: 'dd-MM-yyyy', },
    { name: 'bill_due_date', value: 'BILL DUE DATE', sortable: true, isEnabled: true, textAlign: 'center', filterable: false, isDate: true, dateFormat: 'dd-MM-yyyy', },
    { name: 'bill_amt', value: 'BILL AMOUNT', sortable: true, isEnabled: true, textAlign: 'right', filterable: false },
    { name: 'balance_amount', value: 'BALANCE AMOUNT', sortable: true, isEnabled: true, textAlign: 'right', filterable: false },
    { name: 'last_payment_date', value: 'LAST DATE OF ADJ.', sortable: true, isEnabled: true, textAlign: 'center', filterable: false },
    { name: 'avg_payment_days', value: 'AVG. PAYMENT DAYS', sortable: true, isEnabled: true, textAlign: 'left', filterable: false },
    { name: 'overdue_days', value: 'OVERDUE DAYS', sortable: true, isEnabled: true, textAlign: 'left', filterable: false },
  ];

  public debitorsactions: any = [
    { name: '1', value: 'Download PDF', icon: 'eye', multiple: false, noSelection: true }
  ];

  public creditorsactions: any = [
    { name: '1', value: 'Download PDF', icon: 'eye', multiple: false, noSelection: true },
    { name: '2', value: 'Pay Bill', icon: 'eye', multiple: false }
  ];
  Maxdate = ''
  Mindate = ''
  Companies = [];
  companyData = [];
  interest_rate: any;


}
