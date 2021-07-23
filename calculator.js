var calculateButton = document.querySelector(".calculateButton");

calculateButton.addEventListener("click", handleClick);

function handleClick() {
	$(".spinner-grow").css("display", "inline-block");

	var Lucas = 393.34;
	var Bobo = 393.33;
	var MY = 383.33;
	var Derick = 483.33;
	var Ricky = 746.67;
	var Amanda = 0;

	var EWBill = document.getElementById("Billing-01").value;
	var SingtelBill = document.getElementById("Billing-02").value;
	var BoboSingtel = document.getElementById("Billing-03").value;

	var EWBill_each = EWBill / 5;
	var SingtelBill_each = SingtelBill / 5;
	var BoboSingtel_each = BoboSingtel / 1;

	document.getElementById("Billing-01").value = EWBill_each;
	document.getElementById("Billing-02").value = SingtelBill_each;
	document.getElementById("Billing-03").value = BoboSingtel_each;

	Lucas = (Lucas + EWBill_each + SingtelBill_each).toFixed(2);
	Bobo = (Bobo + EWBill_each + SingtelBill_each + BoboSingtel_each).toFixed(2);
	MY = (MY + EWBill_each + SingtelBill_each).toFixed(2);
	Derick = (Derick + EWBill_each + SingtelBill_each).toFixed(2);
	Ricky = (Ricky + EWBill_each + SingtelBill_each - 69.9).toFixed(2);
	Amanda = Amanda;

	document.getElementById("Amount-01").innerHTML = Lucas;
	document.getElementById("Amount-02").innerHTML = Bobo;
	document.getElementById("Amount-03").innerHTML = MY;
	document.getElementById("Amount-04").innerHTML = Derick;
	document.getElementById("Amount-05").innerHTML = Ricky;
	document.getElementById("Amount-06").innerHTML = Amanda;
}
