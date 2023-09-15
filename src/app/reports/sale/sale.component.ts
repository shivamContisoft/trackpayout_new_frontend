import { Component } from '@angular/core';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.scss']
})
export class SaleComponent {
  
  saleInvoice: any = [];
  public columns: any = [
    { name: 'date', value: 'DATE', sortable: true, isEnabled: true, textAlign: 'center', filterable: false, isDate: true, dateFormat: 'dd-MM-yyyy' },
    { name: 'voucher_number', value: 'VOUCHER NUMBER', sortable: true, isEnabled: true, textAlign: 'left' },
    { name: 'voucher_type', value: 'VOUCHER TYPE', sortable: true, isEnabled: true, textAlign: 'left' },
    { name: 'ledger_name', value: 'LEDGER NAME', sortable: true, isEnabled: true, textAlign: 'left', filterable: false },
    { name: 'gstn_no', value: 'GSTN NO', sortable: true, isEnabled: true, textAlign: 'left', filterable: false },
    { name: 'igst_amount', value: 'IGST AMOUNT', sortable: true, isEnabled: true, textAlign: 'right', filterable: false },
    { name: 'cgst_amount', value: 'CGST AMOUNT', sortable: true, isEnabled: true, textAlign: 'right', filterable: false },
    { name: 'sgst_amount', value: 'SGST AMOUNT', sortable: true, isEnabled: true, textAlign: 'right', filterable: false },
    { name: 'amount', value: 'TOTAL AMOUNT', sortable: true, isEnabled: true, textAlign: 'right', filterable: false },
    { name: 'attachment', value: 'FILES', sortable: true, isEnabled: true, textAlign: 'center', filterable: false, exportable: false },
  ];



}
