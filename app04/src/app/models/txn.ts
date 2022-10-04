export interface Txn {
    id:number;
    ledger:string;
    type:string;
    amount:number;
    txnDate:Date;
    ahId:number;
    editable?:boolean;
}