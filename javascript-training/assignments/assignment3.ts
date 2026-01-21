//*** Assignment 3 ***//

function evaluateLoan(
customerName:string,
creditScore:number,
income:number,
isEmployed:boolean,
debtToIncomeRatio:number
): void{

    console.log("Customer name, applying for loan  is " + customerName);

    if(creditScore>750){
        console.log("Good Credit Score, Your Loan is Approved");
    }
    else if(creditScore>650){
            console.log("Credit Score is :" + creditScore);

            if(income>=50000){
                console.log("Customer Income is :" + income);
            
            if(isEmployed){
                console.log("Employment Status is  :" + isEmployed);
            
                if(debtToIncomeRatio<40){
                console.log("debt-to-income (DTI) ratio is  :" + debtToIncomeRatio);
                console.log("Loan is approved!!!");
            } //4th check ends 

                 else{
                console.log("Loan denied due to DTI ratio is >= 40%");
            }
        } // 3rd check ends
            else{
                console.log("Loan denied due to Unemployment");
            }
        } // 2nd check ends
            else{
                console.log("Loan Denied...income is < 50000");
            }
    } //1st check ends
    else {
        console.log("Loan is denied");
    }
 } 




evaluateLoan(
"John Doe",
710,
51000,
true,
41)

console.log("******New Customer Evaluation******");

evaluateLoan(
"Sam",
649,
51000,
true,
39)