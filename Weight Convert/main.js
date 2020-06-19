document.getElementById("output").style.visibility = "hidden";
		document.getElementById('lbsInput').addEventListener('input', function(e) {
			let lbs = e.target.value;
			document.getElementById("output").style.visibility = "visible";
  document.getElementById("kgOutput").innerHTML = lbs * 0.001;
  document.getElementById("poundsOutput").innerHTML = lbs * 0.00220462;
  document.getElementById("ounceOutput").innerHTML = lbs * 0.035274;
		});