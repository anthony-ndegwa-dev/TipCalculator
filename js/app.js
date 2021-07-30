function calculateTip() {
	let billAmt = document.querySelector(".billAmt").value;
	let service = document.querySelector("#serviceSelector").value;
	let numOfPeople = document.querySelector(".peopleAmt").value;

	if (billAmt === "" || service == 0){
		alert("please enter some values");
		return;
	}

	if (numOfPeople === "" || numOfPeople <= 1){
		numOfPeople = 1;
		document.getElementById("each").style.display = "none";
	} else {
		document.getElementById("each").style.display = "block";
	}

	let total = (billAmt * service) / numOfPeople;
	total = Math.round(total * 100) / 100;
	total = total.toFixed(2)

	document.getElementById("totalTip").style.display = "block";
	document.getElementById("tip").innerHTML = total
}

document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

document.getElementById('calculate').addEventListener("click", function() {
	calculateTip();
})

// Typewriter-text
const typeWriter = document.getElementById('typewriter-text');
const text = 'TIP CALCULATOR.';

typeWriter.innerHTML = text;
typeWriter.style.setProperty('--characters', text.length);

// End 