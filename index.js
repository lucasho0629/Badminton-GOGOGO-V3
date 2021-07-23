var randomButton = document.querySelector(".randomButton");

randomButton.addEventListener("click", handleClick);

function handleClick() {
	$(".spinner-grow").css("display", "inline-block");

	localStorage.setItem("Lucas", $("#Lucas").is(":checked"));
	localStorage.setItem("Ricky", $("#Ricky").is(":checked"));
	localStorage.setItem("BigYvonne", $("#BigYvonne").is(":checked"));
	localStorage.setItem("Victor", $("#Victor").is(":checked"));
	localStorage.setItem("Eason", $("#Eason").is(":checked"));
	localStorage.setItem("SmallYvonne", $("#SmallYvonne").is(":checked"));
	localStorage.setItem("KaiXin", $("#KaiXin").is(":checked"));
	localStorage.setItem("Roy", $("#Roy").is(":checked"));

	// window.location.href = "result.html";

	var whoisplaying = ["Lucas", "Ricky", "Eason", "Victor"];
	var whoisplaying2 = ["Yvonne Lee", "Roy", "Yvonne Lim", "KaiXin"];

	if ($("#Lucas").is(":checked") == false) {
		whoisplaying[0] = "Empty";
	}
	if ($("#Ricky").is(":checked") == false) {
		whoisplaying[1] = "Empty";
	}
	if ($("#Eason").is(":checked") == false) {
		whoisplaying[2] = "Empty";
	}
	if ($("#Victor").is(":checked") == false) {
		whoisplaying[3] = "Empty";
	}

	if ($("#BigYvonne").is(":checked") == false) {
		whoisplaying2[0] = "Empty";
	}
	if ($("#Roy").is(":checked") == false) {
		whoisplaying2[1] = "Empty";
	}
	if ($("#SmallYvonne").is(":checked") == false) {
		whoisplaying2[2] = "Empty";
	}
	if ($("#KaiXin").is(":checked") == false) {
		whoisplaying2[3] = "Empty";
	}

	setTimeout(function () {
		$(".spinner-grow").css("display", "none");

		for (var a = whoisplaying, i = a.length; i--; ) {
			var counting = 0;
			var random = a.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
			var randomPointer = a.length + 1;

			if (randomPointer % 2 == 0) {
				$("#A-0" + randomPointer).text(random);
			} else {
				$("#A-0" + randomPointer).text(random);
			}
		}
		for (var a = whoisplaying2, i = a.length; i--; ) {
			var random = a.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
			var randomPointer = a.length + 1;

			if (randomPointer % 2 == 0) {
				$("#B-0" + randomPointer).text(random);
			} else {
				$("#B-0" + randomPointer).text(random);
			}
		}
	}, 3000);
}
