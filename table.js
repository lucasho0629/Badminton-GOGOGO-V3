var randomButton = document.querySelector(".randomButton");

randomButton.addEventListener("click", handleClick);

function handleClick() {
	$("#A-01").text("Empty");
	$("#A-02").text("Empty");
	$("#A-03").text("Empty");
	$("#A-04").text("Empty");
	$("#B-01").text("Empty");
	$("#B-02").text("Empty");
	$("#B-03").text("Empty");
	$("#B-04").text("Empty");

	$(".spinner-grow").css("display", "inline-block");

	localStorage.setItem("Lucas", $("#Lucas").is(":checked"));
	localStorage.setItem("Ricky", $("#Ricky").is(":checked"));
	localStorage.setItem("BigYvonne", $("#BigYvonne").is(":checked"));
	localStorage.setItem("Victor", $("#Victor").is(":checked"));
	localStorage.setItem("Eason", $("#Eason").is(":checked"));
	localStorage.setItem("SmallYvonne", $("#SmallYvonne").is(":checked"));
	localStorage.setItem("KaiXin", $("#KaiXin").is(":checked"));
	localStorage.setItem("Roy", $("#Roy").is(":checked"));

	var whoiseating = [];

	if ($("#Lucas").is(":checked") == true) {
		whoiseating.push("Lucas");
	}
	if ($("#Ricky").is(":checked") == true) {
		whoiseating.push("Ricky");
	}
	if ($("#Eason").is(":checked") == true) {
		whoiseating.push("Eason");
	}
	if ($("#Victor").is(":checked") == true) {
		whoiseating.push("Victor");
	}

	if ($("#BigYvonne").is(":checked") == true) {
		whoiseating.push("BigYvonne");
	}
	if ($("#Roy").is(":checked") == true) {
		whoiseating.push("Roy");
	}
	if ($("#SmallYvonne").is(":checked") == true) {
		whoiseating.push("SmallYvonne");
	}
	if ($("#KaiXin").is(":checked") == true) {
		whoiseating.push("KaiXin");
	}

	setTimeout(function () {
		$(".spinner-grow").css("display", "none");

		var countingA = 1;
		var countingB = 1;
		for (var a = whoiseating, i = a.length; i--; ) {
			var random = a.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
			var randomPointer = a.length + 1;

			if (randomPointer % 2 == 0) {
				$("#A-0" + countingA).text(random);
				countingA++;
			} else {
				$("#B-0" + countingB).text(random);
				countingB++;
			}
		}
	}, 3000);
}
