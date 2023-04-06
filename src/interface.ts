interface ISavingAccount{
   Balance:(balance:number,intrest?:number)=>void
    
}
interface ICurrentAccount{
     Balance:(balance:number,intrest?:number)=>void
}

class Account implements ISavingAccount,ICurrentAccount{
 public balance: number;
 public intrest?:number;

 constructor(balance:number,intrest?:number){

    this.balance=balance;
    this.intrest=intrest;
 }
 Balance():void{
console.log("Account Details")
if (this.intrest == null){
 console.log("Current Balance:"+this.balance)   
}
else{
    console.log("Saving Balance:"+this.balance * this.intrest)
}
 }
}
let obj1=new Account(50000)
obj1.Balance();
let obj2=new Account(50000,4)
obj2.Balance();

