abstract class Customers{
     CustomerName:string;
     Age:number;
     Address:string;
     ContactNumber:number;
 
    constructor(CustomerName:string,Age:number,Address:string,ContactNumber:number){
        this.CustomerName=CustomerName;
        this.Age=Age;
        this.Address=Address;
        this.ContactNumber=ContactNumber;
    }

    abstract Display():void
}

class Loan extends Customers{
    LoanAccountNo:number;
    LoanType:string;
    LoanAmount:number;
    Duration:number;
    Intrestrate:number;

    constructor(CustomerName:string,Age:number,Address:string,ContactNumber:number,LoanAccountNo:number,LoanType:string,LoanAmount:number,Duration:number,Intrestrate:number){
        super(CustomerName,Age,Address,ContactNumber);
        this.LoanAccountNo=LoanAccountNo;
        this.LoanType=LoanType;
        this.LoanAmount=LoanAmount;
        this.Duration=Duration;
        this.Intrestrate=Intrestrate;
    }

    Display(): void {
        console.log(this.CustomerName +' \n ' +this.Age +' \n' +this.Address +'\n' +this.ContactNumber +'\n' +this.LoanAccountNo +'\n' +this.LoanType +'\n' +this.LoanAmount +'\n' +this.Duration +'\n' +this.Intrestrate);
    }
    
    InterestCalculate():void{
        console.log("Intrest amount : " +(this.LoanAmount*this.Duration*this.Intrestrate)/100);
    } 
    CustomerDetails():void{
        console.log("Customer Loan Details");
        this.Display();
        this.InterestCalculate();
    }
}
 let obj=new Loan('karthi',20,"Cbe tamilnadu",244535,12345,"Fire Intrest",100000,2,8);
 obj.CustomerDetails();