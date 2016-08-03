$(document).ready(function() {

		$( "#calculate" ).click(calculatePayment);

		    function calculatePayment() {
			    // Loan balance is $300,000
			    var loanBalance = $("#loanBalance").val();

			    // Loan term is 30 years
			    var loanTerm = $("#loanTerm").val();

			    // Period is 12 for monthly, 2 for bi-monthly
			    var period = $("#period").val();

			    // Annual Interest Rate is 4%
			    var interestRate = $("#interestRate").val();

			    // number of payments (360)
			    var numberOfPayments = loanTerm * period;

			    // monthly interest rate (~0.0033)      
			    var monthlyInterestRate = (interestRate / 100) / period;

			    // compounded interest rate (~3.31)
			    var compoundedInterestRate = Math.pow((1 + monthlyInterestRate), numberOfPayments);

			    // interest quotient (~0.004)
			    var interestQuotient = (monthlyInterestRate * compoundedInterestRate) / (compoundedInterestRate - 1);

			    // final calculation rounded to two decimal places ($1432.25)
			    var monthlyPayment = Math.round((loanBalance * interestQuotient) * 100) / 100;

		        $("#answerArea").html(monthlyPayment);
		    };

});
//create document ready state
//jquery.get
