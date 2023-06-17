const countriesBox = document.querySelector(".countries-container");
let modeBtn = document.getElementById("change-mode");

const darkMode = document.querySelector("body");

function getData(url) {
  class ErrorResponse extends Error {
    constructor(status, message) {
      super(message);
      this.status = status;
    }
  }

  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          reject(new ErrorResponse(res.status, "Url is error"));
        }
      })
      .then((res) => {
        resolve(res);
      });
  });
}

function getCard({
  name,
  capital,
  flags,
  languages,
  population,
  region,
  timezones,
  subregion,
  borders,
	continents,
}) {
  return `
		<div class="wrap animate pop"       
		dataContinent="${region}">
            <div class="overlay">
              <div class="overlay-content animate slide-left delay-2">
                <h1 class="animate slide-left pop delay-4">${name.common}</h1>
                <div class="info">
            <p
              class="animate slide-left pop delay-5"
              style="margin-bottom: 0.2rem"
            >
              Capital: <em>${capital}</em>
            </p>
            <p
              class="animate slide-left pop delay-5"
              style="margin-bottom: 0.2rem"
            >
              Population: <em>${population}</em>
            </p>
          </div>
              </div>
              <div
                class="image-content animate slide delay-5"
                style="
                  position: absolute;
                  top: 0;
                  right: 0;
                  width: 60vmin;
                  height: 100%;
                  background-image: url('${flags.svg}');
                  background-size: contain;
                  background-repeat: no-repeat;
                  background-position: right;
                  transition: 0.3s ease-in-out;
                "
              ></div>
              <div class="dots animate">
                <div class="dot animate slide-up delay-6"></div>
                <div class="dot animate slide-up delay-7"></div>
                <div class="dot animate slide-up delay-8"></div>
              </div>
            </div>
           <div class="text">
      <p>
      Welcome to  <span class = "bold">${name.common}!</span> <br> <br>

      <span class = "bold">${name.common}!</span> is a beautiful country located in <span class = "bold">${region}!</span>. It is bordered by <span class = "bold">(${borders}!)</span>. and has a population of approximately <span class = "bold">${population}</span> people. 
      As an independent nation, <span class = "bold">${name.common}</span> has a unique identity and is proud of its Coat of Arms. Additionally, you may also encounter English being spoken in certain regions.
      <span class = "bold">${name.common}!</span> follows the <span class = "bold">${timezones}</span> time zone, so make sure to adjust your watches accordingly. The country's capital city, <span class = "bold">${capital}</span> , serves as the political, economic, and cultural hub. Explore its bustling streets, visit historical landmarks, and indulge in local cuisine to get a taste of the vibrant city life.
      When it comes to nature, <span class = "bold">${name.common}!</span> has it all. From picturesque beaches and lush forests to towering mountains and vast deserts, the country offers diverse landscapes waiting to be explored. Don't miss the opportunity to visit [FamousNationalPark], where you can witness the stunning flora and fauna that call it home.
      
      </p>
      <p>
      With a rich and diverse cultural heritage, <span class = "bold">${name.common}!</span> celebrates numerous festivals throughout the year. Experience the vibrant colors, traditional music, and captivating dance performances that reflect the country's unique traditions and customs. Join in the festivities and immerse yourself in the local culture.
      No visit to <span class = "bold">${name.common}!</span> is complete without savoring its delicious cuisine. Indulge in, among other local specialties. Each dish reflects the country's culinary traditions and will leave you craving for more.
      We look forward to welcoming you to <span class = "bold">${name.common}!</span>, where you can experience the warm hospitality, explore the breathtaking landscapes, and immerse yourself in the vibrant culture. Enjoy your stay and create unforgettable memories in this fascinating country! <br> <br>
      <span class = "bold">${name.common}!</span> 's subregion: <span class = "bold">${subregion}!</span>
      </p>
    </div>
          </div>
  `;
}

function pagination() {
  var items = $(".countries-container .wrap");
  var numItems = items.length;
  var perPage = 10;

  items.slice(perPage).hide();

  $("#pagination-container").pagination({
    items: numItems,
    itemsOnPage: perPage,
    prevText: "&laquo;",
    nextText: "&raquo;",
    onPageClick: function (pageNumber) {
      var showFrom = perPage * (pageNumber - 1);
      var showTo = showFrom + perPage;
      items.hide().slice(showFrom, showTo).show();
    },
  });
}

async function getCountries(url) {
  countriesBox.innerHTML = `<div id="loading">
	<div class="loader">
  <div class="cubes">
    <div class="cube">
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    </div>
    <div class="cube">
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    </div>
    <div class="cube">
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    </div>
    <div class="cube">
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    </div>
    <div class="cube">
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    </div>
    <div class="cube">
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    </div>
    <div class="cube">
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    </div>
    <div class="cube">
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    </div>
    <div class="cube">
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    </div>
    <div class="cube">
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    </div>
    <div class="cube">
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    </div>
    <div class="cube">
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    </div>
    <div class="cube">
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    </div>
    <div class="cube">
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    </div>
    <div class="cube">
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    </div>
    <div class="cube">
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    </div>
    <div class="cube">
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    </div>
    <div class="cube">
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    </div>
    <div class="cube">
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    </div>
    <div class="cube">
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    </div>
    <div class="cube">
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    </div>
    <div class="cube">
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    </div>
    <div class="cube">
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    </div>
    <div class="cube">
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    </div>
    <div class="cube">
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    </div>
    <div class="cube">
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    </div>
    <div class="cube">
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    </div>
    <div class="cube">
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    </div>
    <div class="cube">
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    </div>
    <div class="cube">
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    </div>
    <div class="cube">
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    </div>
    <div class="cube">
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    </div>
    <div class="cube">
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    </div>
    <div class="cube">
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    </div>
    <div class="cube">
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    </div>
    <div class="cube">
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    </div>
    <div class="cube">
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    </div>
    <div class="cube">
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    </div>
    <div class="cube">
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    </div>
    <div class="cube">
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    </div>
    <div class="cube">
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    </div>
    <div class="cube">
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    </div>
    <div class="cube">
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    </div>
    <div class="cube">
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    </div>
    <div class="cube">
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    </div>
    <div class="cube">
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    </div>
    <div class="cube">
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    </div>
    <div class="cube">
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    </div>
    <div class="cube">
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    </div>
    <div class="cube">
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    </div>
    <div class="cube">
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    </div>
    <div class="cube">
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    </div>
    <div class="cube">
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    </div>
    <div class="cube">
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    </div>
    <div class="cube">
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    </div>
    <div class="cube">
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    </div>
    <div class="cube">
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    </div>
    <div class="cube">
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    </div>
    <div class="cube">
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    </div>
    <div class="cube">
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    </div>
    <div class="cube">
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    </div>
    <div class="cube">
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    </div>
    <div class="cube">
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    </div>
    <div class="cube">
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    	<div class="side"></div>
    </div>
  </div>
</div>
</div>`;

  let countries = await getData(url);
	countriesBox.innerHTML = "";
	countries.map((country)=>{
		countriesBox.innerHTML += getCard(country);
	})
	pagination();
}

getCountries("https://restcountries.com/v3.1/all");
document.getElementById("input").addEventListener("keyup", function (event) {
	let searchQuery = event.target.value.trim();
	if(searchQuery){
		getCountries(`https://restcountries.com/v3.1/name/${searchQuery}`);
	}
});

modeBtn.addEventListener("click", function () {
  if (document.body.className != "dark") {
    this.firstElementChild.src = "../images/light.svg";
  } else {
    this.firstElementChild.src = "../images/dark.svg";
  }
  document.body.classList.toggle("dark");
});

