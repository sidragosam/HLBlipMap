var foszforDiv = document.getElementById("foszfor-info");
var naohDiv = document.getElementById("naoh-info");
var sosavDiv = document.getElementById("sosav-info");
var dietilDiv = document.getElementById("dietil-info");

	function showFoszforInfo() {
      foszforDiv.style.display = "block";
      naohDiv.style.display = "none";
      sosavDiv.style.display = "none";
      dietilDiv.style.display = "none";
    }
	function showNaohInfo() {
      foszforDiv.style.display = "none";
      naohDiv.style.display = "block";
      sosavDiv.style.display = "none";
      dietilDiv.style.display = "none";
    }
	function showSavInfo() {
      foszforDiv.style.display = "none";
      naohDiv.style.display = "none";
      sosavDiv.style.display = "block";
      dietilDiv.style.display = "none";
    }
	function showDietilInfo() {
      foszforDiv.style.display = "none";
      naohDiv.style.display = "none";
      sosavDiv.style.display = "none";
      dietilDiv.style.display = "block";
    }