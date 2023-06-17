const searchBox = document.getElementById("searchBox"),
  googleIcon = document.getElementById("searchIcon");

googleIcon.onclick = function () {
  searchBox.classList.toggle("active");
};

