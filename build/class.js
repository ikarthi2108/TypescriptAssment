"use strict";
class Customers {
    constructor(CustomerName, Age, Address, ContactNumber) {
        this.CustomerName = CustomerName;
        this.Age = Age;
        this.Address = Address;
        this.ContactNumber = ContactNumber;
    }
}
class Loan extends Customers {
    constructor(CustomerName, Age, Address, ContactNumber, LoanAccountNo, LoanType, LoanAmount, Duration, Intrestrate) {
        super(CustomerName, Age, Address, ContactNumber);
        this.LoanAccountNo = LoanAccountNo;
        this.LoanType = LoanType;
        this.LoanAmount = LoanAmount;
        this.Duration = Duration;
        this.Intrestrate = Intrestrate;
    }
    Display() {
        console.log(this.CustomerName + ' \n ' + this.Age + ' \n' + this.Address + '\n' + this.ContactNumber + '\n' + this.LoanAccountNo + '\n' + this.LoanType + '\n' + this.LoanAmount + '\n' + this.Duration + '\n' + this.Intrestrate);
    }
    InterestCalculate() {
        console.log("Intrest amount : " + (this.LoanAmount * this.Duration * this.Intrestrate) / 100);
    }
    CustomerDetails() {
        console.log("Customer Loan Details");
        this.Display();
        this.InterestCalculate();
    }
}
let obj = new Loan('karthi', 20, "Cbe tamilnadu", 244535, 12345, "Fire Intrest", 100000, 2, 8);
obj.CustomerDetails();
