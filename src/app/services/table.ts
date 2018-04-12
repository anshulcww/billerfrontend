export class Table {
    _id: string;
    "tablename": string;
}

export class Amount {
  _id: string;
  "amount" : number;
  
}
export class BillItem {
  
  "menuId": string;
  "quantity": string;
  "amount":number;
}
export class Bill {
  _id: string;
  billItems: BillItem[];
  customerId: string;
  tabelNo: number;
  billingTime: Date;
  billAmount: number;
}