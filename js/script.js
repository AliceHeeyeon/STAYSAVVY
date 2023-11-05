// Declare variables
const SwiperWrapper = document.querySelector(".swiper-wrapper");
// nav bar
const dayToNightModeBtn = document.querySelectorAll(".day-to-night-mode-btn");
const nightToDayModeBtn = document.querySelectorAll(".night-to-day-mode-btn");
// Main Search erea//
const locationBtn = document.getElementById("location");
const checkInInput = document.getElementById('check-in');
const checkOutInput = document.getElementById('check-out');
const guestsBtn = document.getElementById("guests");
const GuestNumber = document.querySelectorAll(".guest-number");
const locationLists = document.getElementById("location-lists");
const locationOption = document.querySelectorAll(".location-option");
const numberLists = document.getElementById("number-lists");
const searchBtn = document.getElementById("search-btn");
// Recommend accommodation//
// String Search
const searchIcon = document.getElementById("search-icon");
const searchModal = document.getElementById("search-modal");
const alertNoString = document.getElementById("alert-no-string");
const searchInput = document.getElementById("search-input");
const stringSearchBtn = document.getElementById("string-search-btn");
const closeSearchModalBtn = document.getElementById("close-search-modal-btn");
// filter
const filterCallBtn = document.getElementById("filter-call-btn");
const filterList = document.getElementById("filter-list");
// Contents display 
const recommendContentsBox = document.getElementById("recommend-contents-box");
const statusUpdate = document.getElementById("status-update");
const leftBtn = document.getElementById("left-btn");
const rightBtn = document.getElementById("right-btn");
// Newsletter
const emailInput = document.getElementById("email-input");
const emailValidation = document.getElementById("email-validation");
const subscribeBtn = document.getElementById("subscribe-btn");
// Filtered Results page //
const valueLocation = document.getElementById("value-location");
const valueCheckinDate = document.getElementById("value-checkin-date");
const valueCheckoutDate = document.getElementById("value-checkout-date");
const valueGuests = document.getElementById("value-guests");
const resultStatus = document.getElementById("result-status");
const listViewBtn = document.getElementById("list-view-btn");
const sortBy = document.getElementById("sort-by");
const viewPrevious = document.getElementById("view-previous");
const viewNext = document.getElementById("view-next");
const filteredResultBox = document.getElementById("filtered-result-box");
const backToTheMainBtn = document.getElementById("back-to-the-main-btn");
// Detail info page //
const placeInfoBox = document.getElementById("place-info-box");
const readBtn = document.getElementById("read-btn");
const modalReadmore = document.getElementById("modal-readmore");
const modalDescription = document.getElementById("modal-description");
const closeModalReadmore = document.getElementById("close-modal-readmore");
const mealOptionBtn = document.getElementById("meal-option-btn");
const mealOptionLists = document.getElementById("meal-option-lists");
const breakfast = document.querySelectorAll(".breakfast");
const night = document.getElementById("night");
const accommodationCost = document.getElementById("accommodation-cost");
const routeCost = document.getElementById("route-cost");
const seeOnMap = document.getElementById("see-on-map");
const modalMapDistance = document.getElementById("modal-map-distance");
const modalMapCloseBtn = document.getElementById("modal-map-close-btn");
const mealCost = document.getElementById("meal-cost");
const totalCost = document.getElementById("total-cost");
const transportCostValue = document.getElementById("transport-cost-value");
const totalBudget = document.getElementById("total-budget");
const reserveBtn = document.getElementById("reserve-btn");
const backToThePreviousBtn = document.getElementById("back-to-the-previous-btn");
const home = document.getElementById("home");
const resultBox = document.getElementById("result-box");
const goHomeBtn = document.getElementById("go-home-btn");
// Create variable to get a chosen value
let filteredResults = accommodations;
let selectedLocation = "";
let selectedGuestNo = "";
let checkInDate = "";
let checkOutDate = "";
let differenceInDays = "";
let accommodationIndex = "";
let onewayTransportCost = "";
let addExtra = 0;

// Validation checker
let validationPassed = false;

// Swiper
let swiper = new Swiper("#mySwiper", {
    allowTouchMove: false,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    }
});


function updateSwiperSlidesPerView() {
    let screenWidth = window.innerWidth;
    if (screenWidth < 768) {
        recommendContentsBox.setAttribute('slides-per-view', 1)
        filteredResultBox.setAttribute('slides-per-view', 1)
    } else if (screenWidth >= 768 && screenWidth < 992) {
        recommendContentsBox.setAttribute('slides-per-view', 2)
        filteredResultBox.setAttribute('slides-per-view', 2)
    } else {
        recommendContentsBox.setAttribute('slides-per-view', 3)
        filteredResultBox.setAttribute('slides-per-view', 3)
    }
}

updateSwiperSlidesPerView();
window.addEventListener('resize', updateSwiperSlidesPerView);

// Initialize datepicker
flatpickr("#check-in", {
    dateFormat: "d/m/Y",
    onChange: function (selectedDates, dateStr) {
        checkInInput.innerHTML = dateStr;
        checkInDate = selectedDates;
    }
});

flatpickr("#check-out", {
    dateFormat: "d/m/Y",
    onChange: function (selectedDates, dateStr) {
        checkOutInput.innerHTML = dateStr;
        checkOutDate = selectedDates;
    }
});

// Initialize mapbox
mapboxgl.accessToken = 'pk.eyJ1IjoiaGlubmVlZWUiLCJhIjoiY2xpMmFxNmRxMXVhdjNycDA3YXFuZ2d0eiJ9.yd4yknaWtpQz-3gUIEv1qw';

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/hinneeee/clic8r0pm00dd01o7941k9hg0',
    center: [174.777211, -41.288795],
    zoom: 5,
    interactive: true
});

const mapbox = new mapboxgl.Map({
    container: 'mapbox',
    style: 'mapbox://styles/hinneeee/clic8r0pm00dd01o7941k9hg0',
    center: [174.777211, -41.288795],
    zoom: 5,
    interactive: true
});

let nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'top-right');
mapbox.addControl(nav, 'top-right');

// scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

//toggle Darkmode(Day/Night)
function toggleDarkMode() {
    for (let i = 0; i < dayToNightModeBtn.length; i++) {
        dayToNightModeBtn[i].addEventListener("click", function () {
            for (let index = 0; index < dayToNightModeBtn.length; index++) {
                dayToNightModeBtn[index].classList.toggle("active");
            }
            SwiperWrapper.classList.toggle("night-mode");
            for (let number = 0; number < nightToDayModeBtn.length; number++) {
                nightToDayModeBtn[number].classList.toggle("active");
            }
        });
    }
}

function toggleDayMode() {
    for (let i = 0; i < nightToDayModeBtn.length; i++) {
        nightToDayModeBtn[i].addEventListener("click", function () {
            for (let index = 0; index < nightToDayModeBtn.length; index++) {
                nightToDayModeBtn[index].classList.toggle("active");
            }
            SwiperWrapper.classList.toggle("night-mode");
            for (let number = 0; number < dayToNightModeBtn.length; number++) {
                dayToNightModeBtn[number].classList.toggle("active");
            }
        });
    }
}

toggleDayMode();
toggleDarkMode();

//Main search function
//Get a chosen location value
locationOption.forEach(function (option) {
    option.addEventListener("click", function () {
        locationOption.forEach(function (otherOption) {
            otherOption.classList.remove("selected");
        });
        this.classList.add("selected");

        let checkedLocation = document.querySelector(".location-option.selected");
        selectedLocation = checkedLocation.getAttribute("data-value");
        //change location button value to chosen location 
        locationBtn.innerHTML = selectedLocation;
    });
});

//Get a chosen guest number
GuestNumber.forEach(function (number) {
    number.addEventListener("click", function () {
        GuestNumber.forEach(function (otherNumber) {
            otherNumber.classList.remove("selected");
        });
        this.classList.add("selected");

        let checkedNumber = document.querySelector(".guest-number.selected");
        selectedGuestNo = checkedNumber.getAttribute("data-value");
        //change guest value to chosen number
        guestsBtn.innerHTML = selectedGuestNo;
    });
});

//Calculate date difference
function calculateDateDifference() {
    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);

    // Calculate the time difference in milliseconds
    const timeDiff = checkOut.getTime() - checkIn.getTime();

    // Convert the time difference to days
    const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    differenceInDays = daysDiff;
}

//Check All value is validate, if pass, render functions.
function checkValidation() {
    calculateDateDifference();
    if (selectedLocation.length === 0) {
        alert("You haven't choose a location");
        return;
    }
    if (checkInDate.length === 0) {
        alert("When are you going to stay?(Check-in date)");
        return;
    }
    if (checkOutDate.length === 0) {
        alert("Don't forget to choose Check-out Date");
        return;
    }
    if (selectedGuestNo.length === 0) {
        alert("How many guests will be?");
        return;
    }
    if (differenceInDays <= 0) {
        alert("The check-out date should be at least one day later than the check-in date");
        return;
    }
    validationPassed = true;
    displyChosenOption();
    findAccommodation();
    swiper.slideNext();
}

//Display options that user choose
function displyChosenOption() {
    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);
    const dayCheckIn = checkIn.getDate();
    const dayCheckOut = checkOut.getDate();
    const monthCheckIn = checkIn.toLocaleString('default', { month: 'short' });
    const monthCheckOut = checkOut.toLocaleString('default', { month: 'short' });
    const formattedCheckInDate = dayCheckIn + " " + monthCheckIn;
    const formattedCheckOutDate = dayCheckOut + " " + monthCheckOut;
    checkInDate = formattedCheckInDate;
    checkOutDate = formattedCheckOutDate;
    valueLocation.innerHTML = selectedLocation;
    valueCheckinDate.innerHTML = checkInDate;
    valueCheckoutDate.innerHTML = checkOutDate;
    valueGuests.innerHTML = selectedGuestNo;
}

// find place that matched selected location and guest number
function findAccommodation() {
    filteredResults = [];
    filteredResultBox.innerHTML = "";
    for (let i = 0; i < accommodations.length; i++) {
        let result = accommodations[i];
        if (selectedLocation === result.location && selectedGuestNo <= result.MaxGuest) {
            filteredResults.push(result);
            DisplayFilteredResults(result);
            addLocationMarkers(result.id);
            resultStatus.innerHTML = `${filteredResults.length} places in ${selectedLocation}`;
        }
    }
}

// Display filtered result in second slide
function DisplayFilteredResults(result) {
    filteredResultBox.innerHTML += `
    <swiper-slide>
        <div class="display-contents display-filtered-result">
            <img src="${result.image.mainImage}" alt="${result.title}}">
            <h5>${result.title} in ${result.location}</h5>
            <div class="contents-box">
                <p class="article-contents"><i class="bi bi-star-fill"></i>${result.rating}</p>
                <p class="article-contents bed">${result.bed}</p>
                <p class="article-contents">${result.feature}</p>
            </div>
            <div class="article-price-and-viewbtn">
                <div class="price-and-tax">
                    <p class="price"><span>$${result.price}</span>/Night</p>
                    <p class="tax-explain">Including taxes and fees</p>
                </div>
                <button data-id="${result.id}" class="view-rooms">View Rooms</button>
            </div>
        </div>
    </swiper-slide>
    `;
    updateSwiperSlidesPerView();
    addButtonEvent();
}



// Selectable menu will be shown when click location/guest buttons
locationBtn.addEventListener("click", function () {
    locationLists.classList.toggle("active");
});

locationLists.addEventListener("mouseleave", function () {
    locationLists.classList.remove("active");
});

guestsBtn.addEventListener("click", function () {
    numberLists.classList.toggle("active");
});

numberLists.addEventListener("mouseleave", function () {
    numberLists.classList.remove("active");
});

searchBtn.addEventListener("click", function () {
    checkValidation();
});


//Display Contents in recommend accommodation 
function displayAccommodation() {
    recommendContentsBox.innerHTML = "";
    for (let i = 0; i < filteredResults.length; i++) {
        const place = filteredResults[i];
        recommendContentsBox.innerHTML += `
        <swiper-slide>
            <div class="display-contents">
            <img src="${place.image.mainImage}" alt="${place.title}}">
            <h5>${place.title} in ${place.location}</h5>
            <div class="contents-box">
            <p class="article-contents"><i class="bi bi-star-fill"></i>${place.rating}</p>
            <p class="article-contents bed">${place.bed}</p>
            <p class="article-contents">${place.feature}</p>
            </div>
            <div class="article-price-and-viewbtn">
            <div class="price-and-tax">
            <p class="price"><span>$${place.price}</span>/Night</p>
            <p class="tax-explain">Including taxes and fees</p>
            </div>
            <button data-id="${place.id}" class="view-rooms">View Rooms</button>
            </div>
            </div>
        </swiper-slide>
            `;

    }
}

//Get a view room buttons of specific accommodation
function addButtonEvent() {
    const viewRoomsBtn = document.querySelectorAll(".view-rooms");

    for (let i = 0; i < viewRoomsBtn.length; i++) {
        viewRoomsBtn[i].addEventListener("click", function () {
            let currentPlaceId = viewRoomsBtn[i].dataset.id;
            for (let index = 0; index < filteredResults.length; index++) {
                if (currentPlaceId == filteredResults[index].id) {
                    accommodationIndex = currentPlaceId;
                    openPlaceInfo(accommodationIndex);
                }
            }
            scrollToTop();
        });
    }

   
}

//Show detail info of the place that user click view button 
function openPlaceInfo(placeId) {
    swiper.slideTo(2);
    let place = accommodations[placeId];
    night.innerHTML = `${differenceInDays + " Night"}`;
    accommodationCost.innerHTML = `$${place.price * differenceInDays}`;
    mealCost.innerHTML = "$0";
    totalCost.innerHTML = `$${place.price * differenceInDays}`;

    placeInfoBox.innerHTML = `
    <div id="image-container">
        <div>
            <img id="grid-main" src="${place.image.mainImage}" alt="${place.title}">
        </div>
        <div>
        <img id="side1" src="${place.image.sideImage1}" alt="${place.title}">
        <img id="side2" src="${place.image.sideImage2}" alt="${place.title}">
        <img id="side3" src="${place.image.sideImage3}" alt="${place.title}">
        </div>
    </div>
    <div id="information-wrapper">
        <div class="title-location-feature">
            <h2>${place.title}</h2>
            <p><i class="bi bi-geo-alt"></i>${" " + place.location}</p>
            <span>${place.feature}</span>
        </div>
        <div class="price-review-rating">
            <h2>$${place.price + "NZD "}<span>/ Night</span></h2>
            <div>
            <p>Reviews</p>
            <span id="rating-star"><i class="bi bi-star-fill"></i>${" " + place.rating}</span>
            </div>
        </div>
    </div>
`;
}

displayAccommodation();
addButtonEvent();


//----------------String search----------------//
function searchAccommodations(e) {
    e.preventDefault();
    let searchString = searchInput.value;
    if (searchString === "") {
        return;
    }
    findMatch(searchString);
}

function renderAccommodation(place) {
    recommendContentsBox.innerHTML += `
    <swiper-slide>
    <div class="display-contents">
        <img src="${place.image.mainImage}" alt="${place.title}}">
        <h5>${place.title} in ${place.location}</h5>
        <div class="contents-box">
            <p class="article-contents"><i class="bi bi-star-fill"></i>${place.rating}</p>
            <p class="article-contents bed">${place.bed}</p>
            <p class="article-contents">${place.feature}</p>
        </div>
        <div class="article-price-and-viewbtn">
            <div class="price-and-tax">
                <p class="price"><span>$${place.price}</span>/Night</p>
                <p class="tax-explain">Including taxes and fees</p>
            </div>
            <button data-id="${place.id}" class="view-rooms">View Rooms</button>
        </div>
    </div>
    </swiper-slide>
    `;
    updateSwiperSlidesPerView();
    addButtonEvent();
}

// find places that match the entered terms against our accommodation 
function findMatch(string) {
    recommendContentsBox.innerHTML = "";
    filteredResults = [];
    let match = false;
    let matchedAccommodation = 0;
    let lowerCaseString = string.toLowerCase();
    for (let i = 0; i < accommodations.length; i++) {
        const place = accommodations[i];
        if (place.title.toLowerCase().match(lowerCaseString) || place.feature.toLowerCase().match(lowerCaseString) || place.location.toLowerCase().match(lowerCaseString) || place.description.toLowerCase().match(lowerCaseString)) {
            match = true;
            matchedAccommodation++;
            statusUpdate.innerHTML = `
            ${matchedAccommodation} results for "${string}"
            `;
            filteredResults.push(place);
            renderAccommodation(place);
        }
    }
}

// open search modal when click the icon
searchIcon.addEventListener("click", function () {
    searchModal.classList.toggle("active");
    alertNoString.innerHTML = "";
    scrollToTop()
});

// string search event will occur when click this button
stringSearchBtn.addEventListener("click", function () {
    if (searchInput.value === "") {
        alertNoString.innerHTML = `
        <p><i class="bi bi-exclamation-triangle-fill"></i>
        Please enter any term!</p>
        `;
        return;
    } else {
        searchModal.classList.toggle("active");
        searchAccommodations(event);
    }
});

//input will be cleared when click the input box
searchInput.addEventListener("click", function () {
    searchInput.value = "";
    alertNoString.innerHTML = "";
});

closeSearchModalBtn.addEventListener("click", function () {
    searchModal.classList.toggle("active");
});

//----------------filter ------------------//
// filter list toggle
filterCallBtn.addEventListener("click", function () {
    filterList.classList.toggle("active");
});

filterList.addEventListener("mouseleave", function () {
    filterList.classList.remove("active");
});

// only show the places that match selected category option
function filterBySelectedOption(option) {
    filteredResults = [];
    recommendContentsBox.innerHTML = "";

    for (let i = 0; i < option.length; i++) {
        for (let index = 0; index < accommodations.length; index++) {
            if (accommodations[index].feature === option[i]) {
                renderAccommodation(accommodations[index]);
                filteredResults.push(accommodations[index]);
            }
        }
    }
    statusUpdate.innerHTML = `Filtered by: ${option}, ${filteredResults.length} results`;
    statusUpdate.classList.add("active");
    
}


//grab a list of type and know which one is clicked
const checkOption = document.querySelectorAll(".filter-option");
checkOption.forEach(function (option) {
    option.addEventListener("click", function () {
        checkOption.forEach(function (otherOption) {
            otherOption.classList.remove("selected");
        });
        this.classList.add("selected");
        //put a data in selectedOption array
        let selectedOption = [];

        let checkedOption = document.querySelector(".filter-option.selected");
        selectedOption.push(checkedOption.getAttribute("data-value"));
        //give the selected option array to accommodation filter function 
        filterBySelectedOption(selectedOption);
    });
});

//------------- Newsletter----------------//
emailInput.addEventListener("click", function () {
    emailInput.value = "";
    emailValidation.innerHTML = "";
    emailInput.classList.add("active");
});

// check the email address is valid
subscribeBtn.addEventListener("click", function () {
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
        alert("Subscribe request submitted!");
        emailInput.value = "";
    } else {
        emailValidation.innerHTML = "Please enter a valid email address";
    }

});

// --------------- Filtered Results (2nd slider)---------------//
//Sorting(Price/Rating)
//grab a selected sorting option
const sortingOption = document.querySelectorAll(".sorting-option");
sortingOption.forEach(function (option) {
    option.addEventListener("click", function () {
        sortingOption.forEach(function (otherOption) {
            otherOption.classList.remove("selected");
        });
        this.classList.add("selected");
        //put a data in an array
        let selectedSortingOption = [];
        let checkedsortingOption = document.querySelector(".sorting-option.selected");
        selectedSortingOption.push(checkedsortingOption.getAttribute("data-value"));

        //give the selected option to accommodation filter function 
        sortingBySelectedOption(selectedSortingOption);
    });
});

// sorting filtered results by price or rating
function sortingBySelectedOption(option) {
    filteredResultBox.innerHTML = "";
    resultStatus.classList.add("active");
    if (option == "pricelow") {
        filteredResults.sort((a, b) => a.price - b.price);
        resultStatus.innerHTML = `Sort by price from low to high`;
        for (let i = 0; i < filteredResults.length; i++) {
            DisplayFilteredResults(filteredResults[i]);
        }
    }
    else if (option == "pricehigh") {
        filteredResults.sort((a, b) => b.price - a.price);
        resultStatus.innerHTML = `Sort by price from high to low`;
        for (let i = 0; i < filteredResults.length; i++) {
            DisplayFilteredResults(filteredResults[i]);
        }
    }
    else if (option == "rating") {
        filteredResults.sort((a, b) => b.rating - a.rating);
        resultStatus.innerHTML = `Sort by rating`;
        for (let i = 0; i < filteredResults.length; i++) {
            DisplayFilteredResults(filteredResults[i]);
        }
    }
}

listViewBtn.addEventListener("click", function () {
    sortBy.classList.toggle("active");
});

sortBy.addEventListener("mouseleave", function () {
    sortBy.classList.remove("active");
});

//customize mapbox
map.on('load', () => {
    //this will add location icon
    map.loadImage('https://location-icon.vercel.app/img/location-icon.png', function (error, image) {
        if (error) {
            throw error;
        }
        map.addImage('location-icon', image);
    });
    map.addSource(
        'places', {
        'type': 'geojson',
        'data': {
            'type': 'FeatureCollection',
            'features': []
        }
    });

    map.addLayer({
        'id': 'places',
        'type': 'symbol',
        'source': 'places',
        'layout': {
            'icon-image': ['get', 'icon'],
            'icon-allow-overlap': true
        }
    });

    map.on('click', 'places', (e) => {

        // Copy coordinates array.
        const coordinates = e.features[0].geometry.coordinates.slice();
        const description = e.features[0].properties.description;

        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML(description)
            .addTo(map);
    });

    // Change the cursor to a pointer when the mouse is over the places layer.
    map.on('mouseenter', 'places', () => {
        map.getCanvas().style.cursor = 'pointer';
    });

    // Change it back to a pointer when it leaves.
    map.on('mouseleave', 'places', () => {
        map.getCanvas().style.cursor = '';
    });

});


function addLocationMarkers(placeId) {
    //get the marker data
    let existingMarkers = map.getSource('places')._data;

    let location = LocationOfPlace[placeId];
    let feature = {
        'type': 'Feature',
        'properties': {
            'description': location.description,
            'icon': location.icon
        },
        'geometry': {
            'type': 'Point',
            'coordinates': location.coordinates
        }
    };
    existingMarkers.features.push(feature);


    let addNewMarkers = existingMarkers;

    map.getSource('places').setData(addNewMarkers);

    // fly to a more suitable place on the map
    map.flyTo({
        center: feature.geometry.coordinates,
        zoom: 12
    });
}

backToTheMainBtn.addEventListener("click", function () {
    swiper.slideTo(0);
});

//-------------- Detail info page -------------//
//show place description when click read button
readBtn.addEventListener("click", function () {
    modalReadmore.classList.add("active");
    modalDescription.innerHTML = `
    <h2>About this place</h2>
    <p>${accommodations[accommodationIndex].description}</p>
`;
});

closeModalReadmore.addEventListener("click", function () {
    modalReadmore.classList.remove("active");
});

//toggle meal option lists
mealOptionBtn.addEventListener("click", function () {
    mealOptionLists.classList.toggle("active");
});

mealOptionLists.addEventListener("mouseleave", function () {
    mealOptionLists.classList.remove("active");
});

//Calculate meal option cost by guest number and stay days
//when click the meal option, cost will be added to total cost
breakfast.forEach(function (meal) {
    meal.addEventListener("click", function () {
        let addMeal = selectedGuestNo * 30 * differenceInDays;
        mealCost.innerHTML = `$${addMeal}`;
        addExtra = addMeal;
        calculateTotalcost();
        EstimateBudget();
    });
});

function calculateTotalcost() {
    totalCost.innerHTML = `
    $${(accommodations[accommodationIndex].price * differenceInDays) + addExtra}
    `;
}

//pop up map modal when user click SeeOnMap button
seeOnMap.addEventListener("click", function () {
    modalMapDistance.classList.add("active");
    addMarkers();
    scrollToTop();
});

//Close modal
modalMapCloseBtn.addEventListener("click", function () {
    modalMapDistance.classList.remove("active");
});

//add location icon which shows chosen place's location in the mapbox of calculate distance
mapbox.on('load', () => {
    //this will add location icon
    mapbox.loadImage('https://location-icon.vercel.app/img/location-icon.png', function (error, image) {
        if (error) {
            throw error;
        }
        mapbox.addImage('location-icon', image);
    });
    mapbox.addSource(
        'places', {
        'type': 'geojson',
        'data': {
            'type': 'FeatureCollection',
            'features': []
        }
    });

    mapbox.addLayer({
        'id': 'places',
        'type': 'symbol',
        'source': 'places',
        'layout': {
            'icon-image': ['get', 'icon'],
            'icon-allow-overlap': true
        }
    });
});

function addMarkers() {
    //get the marker data
    let existingMarkers = mapbox.getSource('places')._data;

    let location = LocationOfPlace[accommodationIndex];
    let feature = {
        'type': 'Feature',
        'properties': {
            'description': location.description,
            'icon': location.icon
        },
        'geometry': {
            'type': 'Point',
            'coordinates': location.coordinates
        }
    };
    existingMarkers.features.push(feature);


    let addNewMarkers = existingMarkers;

    mapbox.getSource('places').setData(addNewMarkers);
}


// Calculate distance and get fuel cost
//custom directions control
const customDirections = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
    profile: 'mapbox/driving',
    controls: {
        instructions: false,
        profileSwitcher: false
    }
});

mapbox.addControl(customDirections, 'top-left');

mapbox.on('click', function (e) {
    // Get the clicked destination coordinates
    const startingPoint = e.lngLat;

    // Use Mapbox Custom Directions API to calculate the route
    // Set the destination point coordinates
    customDirections.setOrigin(startingPoint);
    customDirections.setDestination(LocationOfPlace[accommodationIndex].coordinates);

    // Event listener for the 'route' event fired when the route is calculated
    customDirections.on('route', function (event) {
        let meters = event.route[0].distance;
        let kilometers = (meters / 1000).toFixed(2);
        let fuelCostPerKm = 0.21;
        let cost = Math.floor(kilometers * fuelCostPerKm);

        // Display the distance and cost
        routeCost.classList.add("active");
        routeCost.innerHTML = `
            <p>Distance: ${kilometers} km</p>
            <p>Cost(one-way): $${cost}</p>
            <button id="calculate-budget">Calculate Total Budget</button>
        `;
        onewayTransportCost = cost;
        const calculateBudget = document.getElementById("calculate-budget");
        calculateBudget.addEventListener("click", function () {
            EstimateBudget();
        });
    });
});

// show transport cost(include return), apply to total budget
function EstimateBudget() {
    let transportCostReturn = Math.floor(onewayTransportCost * 2);
    let budget = Math.floor((differenceInDays * accommodations[accommodationIndex].price) + transportCostReturn + addExtra);
    transportCostValue.innerHTML = `$${transportCostReturn}`;
    totalBudget.innerHTML = `$${budget}`;
    modalMapDistance.classList.remove("active");
}

// check everything is selected and send data to next slide
reserveBtn.addEventListener("click", function () {
    if (selectedLocation === "" || selectedGuestNo === "" || differenceInDays === "") {
        alert("Please Go the the main and choose the plan of your trip!");
        return;
    }
    let chosenPlace = accommodations[accommodationIndex];
    resultBox.innerHTML = `
    <h2>${chosenPlace.title}</h2>
    <div id="reservation-info-container">
        <div class="reservation-info">
            <p class="info-category">Check In</p>
            <h5 class="info-context" >${checkInDate}</h5>
        </div>
        <div class="reservation-info">
            <p class="info-category">Check Out</p>
            <h5 class="info-context" >${checkOutDate}</h5>
        </div>
        <div class="reservation-info">
            <p class="info-category">Guests</p>
            <h5 class="info-context" >${differenceInDays}</h5>
        </div>
    </div>
    `;
    swiper.slideTo(3);
    scrollToTop();
});

// going to previous stage
backToThePreviousBtn.addEventListener("click", function () {
    swiper.slideTo(1);
    scrollToTop();
});

// Start again. this button reset everyting
function goHome() {
    filteredResults = accommodations;
    selectedLocation = "";
    selectedGuestNo = "";
    checkInDate = "";
    checkOutDate = "";
    differenceInDays = "";
    accommodationIndex = "";
    onewayTransportCost = "";
    addExtra = 0;
    locationBtn.innerHTML = `
    <i class="bi bi-geo-alt"></i>Location
    `;
    checkInInput.innerHTML = `
    <i class="bi bi-calendar-check"></i>Check In
    `;
    checkOutInput.innerHTML = `
    <i class="bi bi-calendar-check-fill"></i>Check Out
    `;
    guestsBtn.innerHTML = `
    <i class="bi bi-people"></i>Guest
    `;
    swiper.slideTo(0);
    scrollToTop();
}

home.addEventListener("click", function () {
    goHome();
})

goHomeBtn.addEventListener("click", function () {
    goHome();
});


//location Array
const LocationOfPlace = [
    {
        id: 0,
        coordinates: [168.66002372065577, -45.025706164034055],
        description: `
        <img src="${accommodations[0].image.mainImage}" alt="${accommodations[0].title}">
        <div class="popup-contents-info-box">
        <h3>${accommodations[0].title} in ${accommodations[0].location}</h3>
        <div class="price-and-rating">
        <div class="price-per-night">
        <h3>$${accommodations[0].price}NZD</h3><p>night</p>
        </div>
        <span><i class="bi bi-star-fill"></i> ${accommodations[0].rating}</span>
        </div>
        </div>
        `,
        icon: 'location-icon'
    },
    {
        id: 1,
        coordinates: [168.67243420600533, -45.03498004968735],
        description: `
        <img src="${accommodations[1].image.mainImage}" alt="${accommodations[1].title}">
        <div class="popup-contents-info-box">
        <h3>${accommodations[1].title} in ${accommodations[1].location}</h3>
        <div class="price-and-rating">
        <div class="price-per-night">
        <h3>$${accommodations[1].price}NZD</h3><p>night</p>
        </div>
        <span><i class="bi bi-star-fill"></i> ${accommodations[1].rating}</span>
        </div>
        </div>
        `,
        icon: 'location-icon'
    },
    {
        id: 2,
        coordinates: [170.49544453361358, -45.874501104293955],
        description: `
        <img src="${accommodations[2].image.mainImage}" alt="${accommodations[2].title}">
        <div class="popup-contents-info-box">
        <h3>${accommodations[2].title} in ${accommodations[2].location}</h3>
        <div class="price-and-rating">
        <div class="price-per-night">
        <h3>$${accommodations[2].price}NZD</h3><p>night</p>
        </div>
        <span><i class="bi bi-star-fill"></i> ${accommodations[2].rating}</span>
        </div>
        </div>
        `,
        icon: 'location-icon'
    },
    {
        id: 3,
        coordinates: [169.13066708839835, -44.658376780741186],
        description: `
        <img src="${accommodations[3].image.mainImage}" alt="${accommodations[3].title}">
        <div class="popup-contents-info-box">
        <h3>${accommodations[3].title} in ${accommodations[3].location}</h3>
        <div class="price-and-rating">
        <div class="price-per-night">
        <h3>$${accommodations[3].price}NZD</h3><p>night</p>
        </div>
        <span><i class="bi bi-star-fill"></i> ${accommodations[3].rating}</span>
        </div>
        </div>
        `,
        icon: 'location-icon'
    },
    {
        id: 4,
        coordinates: [170.97666193177503, -45.08596848204533],
        description: `
        <img src="${accommodations[4].image.mainImage}" alt="${accommodations[4].title}">
        <div class="popup-contents-info-box">
        <h3>${accommodations[4].title} in ${accommodations[4].location}</h3>
        <div class="price-and-rating">
        <div class="price-per-night">
        <h3>$${accommodations[4].price}NZD</h3><p>night</p>
        </div>
        <span><i class="bi bi-star-fill"></i> ${accommodations[4].rating}</span>
        </div>
        </div>
        `,
        icon: 'location-icon'
    },
    {
        id: 5,
        coordinates: [170.09888345632658, -44.25915404752024],
        description: `
        <img src="${accommodations[5].image.mainImage}" alt="${accommodations[5].title}">
        <div class="popup-contents-info-box">
        <h3>${accommodations[5].title} in ${accommodations[5].location}</h3>
        <div class="price-and-rating">
        <div class="price-per-night">
        <h3>$${accommodations[5].price}NZD</h3><p>night</p>
        </div>
        <span><i class="bi bi-star-fill"></i> ${accommodations[5].rating}</span>
        </div>
        </div>
        `,
        icon: 'location-icon'
    },
    {
        id: 6,
        coordinates: [170.47062668323764, -44.004898649155045],
        description: `
        <img src="${accommodations[6].image.mainImage}" alt="${accommodations[6].title}">
        <div class="popup-contents-info-box">
        <h3>${accommodations[6].title} in ${accommodations[6].location}</h3>
        <div class="price-and-rating">
        <div class="price-per-night">
        <h3>$${accommodations[6].price}NZD</h3><p>night</p>
        </div>
        <span><i class="bi bi-star-fill"></i> ${accommodations[6].rating}</span>
        </div>
        </div>
        `,
        icon: 'location-icon'
    },
    {
        id: 7,
        coordinates: [170.48011679235208, -44.00885056107007],
        description: `
        <img src="${accommodations[7].image.mainImage}" alt="${accommodations[7].title}">
        <div class="popup-contents-info-box">
        <h3>${accommodations[7].title} in ${accommodations[7].location}</h3>
        <div class="price-and-rating">
        <div class="price-per-night">
        <h3>$${accommodations[7].price}NZD</h3><p>night</p>
        </div>
        <span><i class="bi bi-star-fill"></i> ${accommodations[7].rating}</span>
        </div>
        </div>
        `,
        icon: 'location-icon'
    },
    {
        id: 8,
        coordinates: [172.61207741506905, -43.508484917928925],
        description: `
        <img src="${accommodations[8].image.mainImage}" alt="${accommodations[8].title}">
        <div class="popup-contents-info-box">
        <h3>${accommodations[8].title} in ${accommodations[8].location}</h3>
        <div class="price-and-rating">
        <div class="price-per-night">
        <h3>$${accommodations[8].price}NZD</h3><p>night</p>
        </div>
        <span><i class="bi bi-star-fill"></i> ${accommodations[8].rating}</span>
        </div>
        </div>
        `,
        icon: 'location-icon'
    },
    {
        id: 9,
        coordinates: [172.6323468669554, -43.554522613673946],
        description: `
        <img src="${accommodations[9].image.mainImage}" alt="${accommodations[9].title}">
        <div class="popup-contents-info-box">
        <h3>${accommodations[9].title} in ${accommodations[9].location}</h3>
        <div class="price-and-rating">
        <div class="price-per-night">
        <h3>$${accommodations[9].price}NZD</h3><p>night</p>
        </div>
        <span><i class="bi bi-star-fill"></i> ${accommodations[9].rating}</span>
        </div>
        </div>
        `,
        icon: 'location-icon'
    },
    {
        id: 10,
        coordinates: [172.82934300618706, -42.517886859962225],
        description: `
        <img src="${accommodations[10].image.mainImage}" alt="${accommodations[10].title}">
        <div class="popup-contents-info-box">
        <h3>${accommodations[10].title} in ${accommodations[10].location}</h3>
        <div class="price-and-rating">
        <div class="price-per-night">
        <h3>$${accommodations[10].price}NZD</h3><p>night</p>
        </div>
        <span><i class="bi bi-star-fill"></i> ${accommodations[10].rating}</span>
        </div>
        </div>
        `,
        icon: 'location-icon'
    },
    {
        id: 11,
        coordinates: [174.76637658825354, -41.286989072588625],
        description: `
        <img src="${accommodations[11].image.mainImage}" alt="${accommodations[11].title}">
        <div class="popup-contents-info-box">
        <h3>${accommodations[11].title} in ${accommodations[11].location}</h3>
        <div class="price-and-rating">
        <div class="price-per-night">
        <h3>$${accommodations[11].price}NZD</h3><p>night</p>
        </div>
        <span><i class="bi bi-star-fill"></i> ${accommodations[11].rating}</span>
        </div>
        </div>
        `,
        icon: 'location-icon'
    },
    {
        id: 12,
        coordinates: [174.77469304519718, -41.27972647653331],
        description: `
        <img src="${accommodations[12].image.mainImage}" alt="${accommodations[12].title}">
        <div class="popup-contents-info-box">
        <h3>${accommodations[12].title} in ${accommodations[12].location}</h3>
        <div class="price-and-rating">
        <div class="price-per-night">
        <h3>$${accommodations[12].price}NZD</h3><p>night</p>
        </div>
        <span><i class="bi bi-star-fill"></i> ${accommodations[12].rating}</span>
        </div>
        </div>
        `,
        icon: 'location-icon'
    },
    {
        id: 13,
        coordinates: [176.06731315467687, -38.686317064335185],
        description: `
        <img src="${accommodations[13].image.mainImage}" alt="${accommodations[13].title}">
        <div class="popup-contents-info-box">
        <h3>${accommodations[13].title} in ${accommodations[13].location}</h3>
        <div class="price-and-rating">
        <div class="price-per-night">
        <h3>$${accommodations[13].price}NZD</h3><p>night</p>
        </div>
        <span><i class="bi bi-star-fill"></i> ${accommodations[13].rating}</span>
        </div>
        </div>
        `,
        icon: 'location-icon'
    },
    {
        id: 14,
        coordinates: [176.25342273033255, -38.15984854554488],
        description: `
        <img src="${accommodations[14].image.mainImage}" alt="${accommodations[14].title}">
        <div class="popup-contents-info-box">
        <h3>${accommodations[14].title} in ${accommodations[14].location}</h3>
        <div class="price-and-rating">
        <div class="price-per-night">
        <h3>$${accommodations[14].price}NZD</h3><p>night</p>
        </div>
        <span><i class="bi bi-star-fill"></i> ${accommodations[14].rating}</span>
        </div>
        </div>
        `,
        icon: 'location-icon'
    },
    {
        id: 15,
        coordinates: [176.23824042779938, -38.12608951543089],
        description: `
        <img src="${accommodations[15].image.mainImage}" alt="${accommodations[15].title}">
        <div class="popup-contents-info-box">
        <h3>${accommodations[15].title} in ${accommodations[15].location}</h3>
        <div class="price-and-rating">
        <div class="price-per-night">
        <h3>$${accommodations[15].price}NZD</h3><p>night</p>
        </div>
        <span><i class="bi bi-star-fill"></i> ${accommodations[15].rating}</span>
        </div>
        </div>
        `,
        icon: 'location-icon'
    },
    {
        id: 16,
        coordinates: [176.16882806464787, -37.67092545274991],
        description: `
        <img src="${accommodations[16].image.mainImage}" alt="${accommodations[16].title}">
        <div class="popup-contents-info-box">
        <h3>${accommodations[16].title} in ${accommodations[16].location}</h3>
        <div class="price-and-rating">
        <div class="price-per-night">
        <h3>$${accommodations[16].price}NZD</h3><p>night</p>
        </div>
        <span><i class="bi bi-star-fill"></i> ${accommodations[16].rating}</span>
        </div>
        </div>
        `,
        icon: 'location-icon'
    },
    {
        id: 17,
        coordinates: [175.504110305349, -36.748803544860486],
        description: `
        <img src="${accommodations[17].image.mainImage}" alt="${accommodations[17].title}">
        <div class="popup-contents-info-box">
        <h3>${accommodations[17].title} in ${accommodations[17].location}</h3>
        <div class="price-and-rating">
        <div class="price-per-night">
        <h3>$${accommodations[17].price}NZD</h3><p>night</p>
        </div>
        <span><i class="bi bi-star-fill"></i> ${accommodations[17].rating}</span>
        </div>
        </div>
        `,
        icon: 'location-icon'
    },
    {
        id: 18,
        coordinates: [175.48454231031968, -36.75477923422446],
        description: `
        <img src="${accommodations[18].image.mainImage}" alt="${accommodations[18].title}">
        <div class="popup-contents-info-box">
        <h3>${accommodations[18].title} in ${accommodations[18].location}</h3>
        <div class="price-and-rating">
        <div class="price-per-night">
        <h3>$${accommodations[18].price}NZD</h3><p>night</p>
        </div>
        <span><i class="bi bi-star-fill"></i> ${accommodations[18].rating}</span>
        </div>
        </div>
        `,
        icon: 'location-icon'
    },
    {
        id: 19,
        coordinates: [174.76543798176868, -36.849882993037056],
        description: `
        <img src="${accommodations[19].image.mainImage}" alt="${accommodations[19].title}">
        <div class="popup-contents-info-box">
        <h3>${accommodations[19].title} in ${accommodations[19].location}</h3>
        <div class="price-and-rating">
        <div class="price-per-night">
        <h3>$${accommodations[19].price}NZD</h3><p>night</p>
        </div>
        <span><i class="bi bi-star-fill"></i> ${accommodations[19].rating}</span>
        </div>
        </div>
        `,
        icon: 'location-icon'
    },
    {
        id: 20,
        coordinates: [174.7617650335858, -36.846651154071935],
        description: `
        <img src="${accommodations[20].image.mainImage}" alt="${accommodations[20].title}">
        <div class="popup-contents-info-box">
        <h3>${accommodations[20].title} in ${accommodations[20].location}</h3>
        <div class="price-and-rating">
        <div class="price-per-night">
        <h3>$${accommodations[20].price}NZD</h3><p>night</p>
        </div>
        <span><i class="bi bi-star-fill"></i> ${accommodations[20].rating}</span>
        </div>
        </div>
        `,
        icon: 'location-icon'
    },
    {
        id: 21,
        coordinates: [168.65507921141688, -45.031146484334414],
        description: `
        <img src="${accommodations[21].image.mainImage}" alt="${accommodations[21].title}">
        <div class="popup-contents-info-box">
        <h3>${accommodations[21].title} in ${accommodations[21].location}</h3>
        <div class="price-and-rating">
        <div class="price-per-night">
        <h3>$${accommodations[21].price}NZD</h3><p>night</p>
        </div>
        <span><i class="bi bi-star-fill"></i> ${accommodations[21].rating}</span>
        </div>
        </div>
        `,
        icon: 'location-icon'
    },
    {
        id: 22,
        coordinates: [174.78801927614444, -36.853633447143245],
        description: `
        <img src="${accommodations[22].image.mainImage}" alt="${accommodations[22].title}">
        <div class="popup-contents-info-box">
        <h3>${accommodations[22].title} in ${accommodations[22].location}</h3>
        <div class="price-and-rating">
        <div class="price-per-night">
        <h3>$${accommodations[22].price}NZD</h3><p>night</p>
        </div>
        <span><i class="bi bi-star-fill"></i> ${accommodations[22].rating}</span>
        </div>
        </div>
        `,
        icon: 'location-icon'
    },
    {
        id: 23,
        coordinates: [174.73770541581996, -36.883305928107795],
        description: `
        <img src="${accommodations[23].image.mainImage}" alt="${accommodations[23].title}">
        <div class="popup-contents-info-box">
        <h3>${accommodations[23].title} in ${accommodations[23].location}</h3>
        <div class="price-and-rating">
        <div class="price-per-night">
        <h3>$${accommodations[23].price}NZD</h3><p>night</p>
        </div>
        <span><i class="bi bi-star-fill"></i> ${accommodations[23].rating}</span>
        </div>
        </div>
        `,
        icon: 'location-icon'
    }
];