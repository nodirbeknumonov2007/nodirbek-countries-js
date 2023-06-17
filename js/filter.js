const region = document.querySelector("#sources");

const regions = ["All","Africa", "America", "Asia", "Europe", "Oceania"];


region.addEventListener("change", function () {
  let region = this.value.toLowerCase();
  console.log(region);
  if (region === "all") {
    getCountries(`https://restcountries.com/v3.1/all`);
  } else {
    getCountries(`https://restcountries.com/v3.1/region/${region}`);
  }
});
// $(".custom-select").each(function () {
//   var classes = $(this).attr("class"),
//     id = $(this).attr("id"),
//     name = $(this).attr("name");
//   var template = '<div class="' + classes + '">';
//   template +=
//     '<span class="custom-select-trigger">' +
//     $(this).attr("placeholder") +
//     "</span>";
//   template += '<div class="custom-options">';
//   $(this)
//     .find("option")
//     .each(function () {
//       template +=
//         '<span class="custom-option ' +
//         $(this).attr("class") +
//         '" data-value="' +
//         $(this).attr("value") +
//         '">' +
//         $(this).html() +
//         "</span>";
//     });
//   template += "</div></div>";

//   $(this).wrap('<div class="custom-select-wrapper"></div>');
//   $(this).hide();
//   $(this).after(template);
// });
// $(".custom-option:first-of-type").hover(
//   function () {
//     $(this).parents(".custom-options").addClass("option-hover");
//   },
//   function () {
//     $(this).parents(".custom-options").removeClass("option-hover");
//   }
// );
// $(".custom-select-trigger").on("click", function () {
//   $("html").one("click", function () {
//     $(".custom-select").removeClass("opened");
//   });
//   $(this).parents(".custom-select").toggleClass("opened");
//   event.stopPropagation();
// });
// $(".custom-option").on("click", function () {
//   $(this)
//     .parents(".custom-select-wrapper")
//     .find("select")
//     .val($(this).data("value"));
//   $(this)
//     .parents(".custom-options")
//     .find(".custom-option")
//     .removeClass("selection");
//   $(this).addClass("selection");
//   $(this).parents(".custom-select").removeClass("opened");
//   $(this)
//     .parents(".custom-select")
//     .find(".custom-select-trigger")
//     .text($(this).text());
// });


regions.map((el) => {
  region.innerHTML += `<option class="item" value="${el}">${el}</option>`;
});


// const continentSelect = document.getElementById("sources");
// // const countryList = document.getElementById("country-list");

// continentSelect.addEventListener("change", () => {
//   const selectedContinent = continentSelect.value;
//   // const countries = countriesBox.querySelectorAll(".wrap");

//   countriesBox.forEach((country) => {
//     if (
//       selectedContinent === "all" ||
//       country.dataContinent === selectedContinent
//     ) {
//       country.style.display = "block !important";
//     } else {
//       country.style.display = "none !important";
//     }
//   });
// });
