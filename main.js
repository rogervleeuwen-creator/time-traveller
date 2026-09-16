// --------------------------------
// CITY DATA — REAL IANA TIME ZONES
// --------------------------------

const cities = {
    "Amsterdam": { timeZone: "Europe/Amsterdam" },
    "Athens": { timeZone: "Europe/Athens" },
    "Berlin": { timeZone: "Europe/Berlin" },
    "Brussels": { timeZone: "Europe/Brussels" },
    "Budapest": { timeZone: "Europe/Budapest" },
    "Copenhagen": { timeZone: "Europe/Copenhagen" },
    "Dublin": { timeZone: "Europe/Dublin" },
    "Helsinki": { timeZone: "Europe/Helsinki" },
    "Lisbon": { timeZone: "Europe/Lisbon" },
    "London": { timeZone: "Europe/London" },
    "Madrid": { timeZone: "Europe/Madrid" },
    "Oslo": { timeZone: "Europe/Oslo" },
    "Paris": { timeZone: "Europe/Paris" },
    "Prague": { timeZone: "Europe/Prague" },
    "Reykjavik": { timeZone: "Atlantic/Reykjavik" },
    "Rome": { timeZone: "Europe/Rome" },
    "Stockholm": { timeZone: "Europe/Stockholm" },
    "Vienna": { timeZone: "Europe/Vienna" },
    "Warsaw": { timeZone: "Europe/Warsaw" },
    "Zurich": { timeZone: "Europe/Zurich" },
    "Bucharest": { timeZone: "Europe/Bucharest" },
    "Sofia": { timeZone: "Europe/Sofia" },
    "Belgrade": { timeZone: "Europe/Belgrade" },
    "Zagreb": { timeZone: "Europe/Zagreb" },
    "Ljubljana": { timeZone: "Europe/Ljubljana" },
    "Bratislava": { timeZone: "Europe/Bratislava" },
    "Tallinn": { timeZone: "Europe/Tallinn" },
    "Riga": { timeZone: "Europe/Riga" },
    "Vilnius": { timeZone: "Europe/Vilnius" },
    "Sarajevo": { timeZone: "Europe/Sarajevo" },
    "Skopje": { timeZone: "Europe/Skopje" },
    "Tirana": { timeZone: "Europe/Tirane" },
    "Podgorica": { timeZone: "Europe/Podgorica" },
    "Chisinau": { timeZone: "Europe/Chisinau" },
    "Kyiv": { timeZone: "Europe/Kyiv" },
    "Istanbul": { timeZone: "Europe/Istanbul" },
    "Ankara": { timeZone: "Europe/Istanbul" },
    "Cairo": { timeZone: "Africa/Cairo" },
    "Marrakesh": { timeZone: "Africa/Casablanca" },
    "Casablanca": { timeZone: "Africa/Casablanca" },
    "Tunis": { timeZone: "Africa/Tunis" },
    "Nairobi": { timeZone: "Africa/Nairobi" },
    "Cape Town": { timeZone: "Africa/Johannesburg" },
    "Johannesburg": { timeZone: "Africa/Johannesburg" },
    "Dakar": { timeZone: "Africa/Dakar" },
    "Accra": { timeZone: "Africa/Accra" },
    "Addis Ababa": { timeZone: "Africa/Addis_Ababa" },
    "Dar es Salaam": { timeZone: "Africa/Dar_es_Salaam" },
    "Kigali": { timeZone: "Africa/Kigali" },
    "Victoria": { timeZone: "Indian/Mahe" },
    "Port Louis": { timeZone: "Indian/Mauritius" },
    "Dubai": { timeZone: "Asia/Dubai" },
    "Abu Dhabi": { timeZone: "Asia/Dubai" },
    "Doha": { timeZone: "Asia/Qatar" },
    "Muscat": { timeZone: "Asia/Muscat" },
    "Riyadh": { timeZone: "Asia/Riyadh" },
    "Amman": { timeZone: "Asia/Amman" },
    "Jerusalem": { timeZone: "Asia/Jerusalem" },
    "Beirut": { timeZone: "Asia/Beirut" },
    "Tbilisi": { timeZone: "Asia/Tbilisi" },
    "Yerevan": { timeZone: "Asia/Yerevan" },
    "Baku": { timeZone: "Asia/Baku" },
    "New Delhi": { timeZone: "Asia/Kolkata" },
    "Mumbai": { timeZone: "Asia/Kolkata" },
    "Kathmandu": { timeZone: "Asia/Kathmandu" },
    "Colombo": { timeZone: "Asia/Colombo" },
    "Dhaka": { timeZone: "Asia/Dhaka" },
    "Bangkok": { timeZone: "Asia/Bangkok" },
    "Hanoi": { timeZone: "Asia/Ho_Chi_Minh" },
    "Ho Chi Minh City": { timeZone: "Asia/Ho_Chi_Minh" },
    "Phnom Penh": { timeZone: "Asia/Phnom_Penh" },
    "Kuala Lumpur": { timeZone: "Asia/Kuala_Lumpur" },
    "Singapore": { timeZone: "Asia/Singapore" },
    "Jakarta": { timeZone: "Asia/Jakarta" },
    "Bali": { timeZone: "Asia/Makassar" },
    "Manila": { timeZone: "Asia/Manila" },
    "Hong Kong": { timeZone: "Asia/Hong_Kong" },
    "Taipei": { timeZone: "Asia/Taipei" },
    "Beijing": { timeZone: "Asia/Shanghai" },
    "Shanghai": { timeZone: "Asia/Shanghai" },
    "Seoul": { timeZone: "Asia/Seoul" },
    "Tokyo": { timeZone: "Asia/Tokyo" },
    "Washington": { timeZone: "America/New_York" },
    "New York": { timeZone: "America/New_York" },
    "Miami": { timeZone: "America/New_York" },
    "Chicago": { timeZone: "America/Chicago" },
    "Denver": { timeZone: "America/Denver" },
    "Los Angeles": { timeZone: "America/Los_Angeles" },
    "San Francisco": { timeZone: "America/Los_Angeles" },
    "Honolulu": { timeZone: "Pacific/Honolulu" },
    "Anchorage": { timeZone: "America/Anchorage" },
    "Ottawa": { timeZone: "America/Toronto" },
    "Toronto": { timeZone: "America/Toronto" },
    "Montreal": { timeZone: "America/Toronto" },
    "Winnipeg": { timeZone: "America/Winnipeg" },
    "Calgary": { timeZone: "America/Edmonton" },
    "Vancouver": { timeZone: "America/Vancouver" },
    "Mexico City": { timeZone: "America/Mexico_City" },
    "Havana": { timeZone: "America/Havana" },
    "Nassau": { timeZone: "America/Nassau" },
    "Kingston": { timeZone: "America/Jamaica" },
    "San José": { timeZone: "America/Costa_Rica" },
    "Panama City": { timeZone: "America/Panama" },
    "Santo Domingo": { timeZone: "America/Santo_Domingo" },
    "Bogotá": { timeZone: "America/Bogota" },
    "Lima": { timeZone: "America/Lima" },
    "Quito": { timeZone: "America/Guayaquil" },
    "Caracas": { timeZone: "America/Caracas" },
    "Santiago": { timeZone: "America/Santiago" },
    "Buenos Aires": { timeZone: "America/Argentina/Buenos_Aires" },
    "Montevideo": { timeZone: "America/Montevideo" },
    "Asunción": { timeZone: "America/Asuncion" },
    "La Paz": { timeZone: "America/La_Paz" },
    "Brasília": { timeZone: "America/Sao_Paulo" },
    "São Paulo": { timeZone: "America/Sao_Paulo" },
    "Rio de Janeiro": { timeZone: "America/Sao_Paulo" },
    "Manaus": { timeZone: "America/Manaus" },
    "Canberra": { timeZone: "Australia/Sydney" },
    "Sydney": { timeZone: "Australia/Sydney" },
    "Melbourne": { timeZone: "Australia/Melbourne" },
    "Brisbane": { timeZone: "Australia/Brisbane" },
    "Adelaide": { timeZone: "Australia/Adelaide" },
    "Perth": { timeZone: "Australia/Perth" },
    "Darwin": { timeZone: "Australia/Darwin" },
    "Hobart": { timeZone: "Australia/Hobart" },
    "Auckland": { timeZone: "Pacific/Auckland" },
    "Wellington": { timeZone: "Pacific/Auckland" },
    "Queenstown": { timeZone: "Pacific/Auckland" },
    "Nadi": { timeZone: "Pacific/Fiji" }
};


// --------------------------------
// HTML ELEMENTS
// --------------------------------

const homeCity = document.getElementById("homeCity");
const destinationCity = document.getElementById("destinationCity");
const homeSuggestions = document.getElementById("homeSuggestions");
const destinationSuggestions = document.getElementById("destinationSuggestions");
const homeDate = document.getElementById("homeDate");
const destinationDate = document.getElementById("destinationDate");
const homeDateDisplay = document.getElementById("homeDateDisplay");
const destinationDateDisplay = document.getElementById("destinationDateDisplay");

const homeName = document.getElementById("homeName");
const destinationName = document.getElementById("destinationName");
const homeTime = document.getElementById("homeTime");
const destinationTime = document.getElementById("destinationTime");
const timeDifference = document.getElementById("timeDifference");

const timelineHomeName = document.getElementById("timelineHomeName");
const timelineDestinationName = document.getElementById("timelineDestinationName");
const homeHours = document.getElementById("homeHours");
const destinationHours = document.getElementById("destinationHours");

const callDestinationTime = document.getElementById("callDestinationTime");
const callHomeTime = document.getElementById("callHomeTime");
const callDestinationName = document.getElementById("callDestinationName");
const callHomeName = document.getElementById("callHomeName");


// --------------------------------
// HELPERS
// --------------------------------

function localDateString(date = new Date()) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
}

function formatDisplayDate(dateString) {
    if (!dateString) return "";

    const [year, month, day] = dateString.split("-").map(Number);
    const date = new Date(year, month - 1, day);

    return new Intl.DateTimeFormat("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric"
    }).format(date);
}

function updateDateDisplays() {
    homeDateDisplay.querySelector(".date-text").textContent = formatDisplayDate(homeDate.value);
    destinationDateDisplay.querySelector(".date-text").textContent = formatDisplayDate(destinationDate.value);
}

function openDatePicker(input) {
    if (typeof input.showPicker === "function") {
        input.showPicker();
    } else {
        input.focus();
        input.click();
    }
}

function normalizeCity(value) {
    const typed = value.trim().toLowerCase();

    return Object.keys(cities).find(
        city => city.toLowerCase() === typed
    ) || null;
}

function getParts(date, timeZone) {
    const parts = new Intl.DateTimeFormat("en-GB", {
        timeZone,
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hourCycle: "h23"
    }).formatToParts(date);

    const result = {};

    for (const part of parts) {
        if (part.type !== "literal") {
            result[part.type] = Number(part.value);
        }
    }

    return result;
}

// Offset in minutes for a time zone at a real instant.
function getOffsetMinutes(date, timeZone) {
    const p = getParts(date, timeZone);

    const asUTC = Date.UTC(
        p.year,
        p.month - 1,
        p.day,
        p.hour,
        p.minute,
        p.second
    );

    return Math.round((asUTC - date.getTime()) / 60000);
}

// Convert a wall-clock time in a named time zone into a real Date.
// The second pass handles DST offset changes around the requested date.
function zonedDateTimeToDate(dateString, hour, minute, timeZone) {
    const [year, month, day] = dateString.split("-").map(Number);

    const guess = Date.UTC(year, month - 1, day, hour, minute, 0);

    let offset = getOffsetMinutes(new Date(guess), timeZone);
    let timestamp = guess - offset * 60000;

    const correctedOffset =
        getOffsetMinutes(new Date(timestamp), timeZone);

    if (correctedOffset !== offset) {
        timestamp = guess - correctedOffset * 60000;
    }

    return new Date(timestamp);
}

function formatTime(date, timeZone) {
    return new Intl.DateTimeFormat("en-GB", {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        hourCycle: "h23"
    }).format(date);
}

function formatDifference(minutes) {
    if (minutes === 0) {
        return "SAME TIME";
    }

    const sign = minutes > 0 ? "+" : "-";
    const absolute = Math.abs(minutes);
    const hours = Math.floor(absolute / 60);
    const mins = absolute % 60;

    if (mins === 0) {
        return `${sign}${hours} ${hours === 1 ? "HOUR" : "HOURS"}`;
    }

    return `${sign}${hours}:${String(mins).padStart(2, "0")} HOURS`;
}


// --------------------------------
// LOAD / SAVE SETTINGS
// --------------------------------

const today = localDateString();

const savedHome = localStorage.getItem("timeTravellerHome");
const savedDestination = localStorage.getItem("timeTravellerDestination");
homeCity.value =
    normalizeCity(savedHome || "") || "Amsterdam";

destinationCity.value =
    normalizeCity(savedDestination || "") || "Tokyo";

// A fresh visit always starts on today's date.
// Only Home and Destination are remembered.
homeDate.value = today;
destinationDate.value = today;


function saveSettings() {
    localStorage.setItem("timeTravellerHome", homeCity.value);
    localStorage.setItem(
        "timeTravellerDestination",
        destinationCity.value
    );
    // Dates are deliberately not saved.
    // A new visit should always begin on today's date.
}


// --------------------------------
// CITY AUTOCOMPLETE
// --------------------------------

function matchingCities(value) {
    const typed = value.trim().toLowerCase();

    if (!typed) {
        return [];
    }

    // Prefix matching only:
    // "a" shows Amsterdam, Athens, Ankara, etc.
    // It does not show cities merely because an "a" appears somewhere.
    return Object.keys(cities)
        .filter(city => city.toLowerCase().startsWith(typed))
        .sort((a, b) => a.localeCompare(b));
}

function closeSuggestions(box) {
    box.classList.remove("open");
    box.innerHTML = "";
}

function showSuggestions(input, box) {
    const matches = matchingCities(input.value);

    box.innerHTML = "";

    if (matches.length === 0 || normalizeCity(input.value)) {
        closeSuggestions(box);
        return;
    }

    for (const city of matches) {
        const item = document.createElement("div");
        item.className = "city-suggestion";
        item.tabIndex = 0;
        item.textContent = city;

        const choose = () => {
            input.value = city;
            closeSuggestions(box);
            update();
            input.focus();
        };

        item.addEventListener("mousedown", event => {
            event.preventDefault();
            choose();
        });

        item.addEventListener("keydown", event => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                choose();
            }
        });

        box.appendChild(item);
    }

    box.classList.add("open");
}

// --------------------------------
// VALIDATION
// --------------------------------

function validateCities() {
    const validHome = normalizeCity(homeCity.value);
    const validDestination =
        normalizeCity(destinationCity.value);

    homeCity.classList.toggle("invalid", !validHome);
    destinationCity.classList.toggle(
        "invalid",
        !validDestination
    );

    if (!validHome || !validDestination) {
        return null;
    }

    // Correct capitalization if the user typed e.g. "tokyo".
    homeCity.value = validHome;
    destinationCity.value = validDestination;

    return {
        homeName: validHome,
        destinationName: validDestination,
        home: cities[validHome],
        destination: cities[validDestination]
    };
}


// --------------------------------
// CREATE 24-HOUR TIMELINE
// --------------------------------

function createTimeline(data) {
    homeHours.innerHTML = "";
    destinationHours.innerHTML = "";

    // Each home hour is converted as an actual instant. This means the
    // timeline remains correct even on dates when DST changes.
    for (let hour = 0; hour < 24; hour++) {
        const homeCell = document.createElement("div");
        homeCell.className = "hour";
        homeCell.textContent =
            String(hour).padStart(2, "0");

        homeHours.appendChild(homeCell);

        const instant = zonedDateTimeToDate(
            homeDate.value,
            hour,
            0,
            data.home.timeZone
        );

        const destinationCell =
            document.createElement("div");

        destinationCell.className = "hour";

        destinationCell.textContent =
            new Intl.DateTimeFormat("en-GB", {
                timeZone: data.destination.timeZone,
                hour: "2-digit",
                hourCycle: "h23"
            }).format(instant);

        destinationHours.appendChild(destinationCell);
    }
}


// --------------------------------
// UPDATE SCREEN
// --------------------------------

function update() {
    updateDateDisplays();

    const data = validateCities();

    if (!data || !homeDate.value || !destinationDate.value) {
        return;
    }

    homeName.textContent = data.homeName;
    destinationName.textContent = data.destinationName;

    timelineHomeName.textContent =
        data.homeName.toUpperCase();

    timelineDestinationName.textContent =
        data.destinationName.toUpperCase();

    callDestinationName.textContent =
        data.destinationName;

    callHomeName.textContent =
        data.homeName;

    // Current real-world time in both selected cities.
    const now = new Date();

    homeTime.textContent =
        formatTime(now, data.home.timeZone);

    destinationTime.textContent =
        formatTime(now, data.destination.timeZone);

    // Difference for the selected travel date.
    // Noon is used deliberately: it avoids the ambiguous/nonexistent
    // clock hour that can occur during a DST switch around 02:00.
    const homeNoon = zonedDateTimeToDate(
        homeDate.value,
        12,
        0,
        data.home.timeZone
    );

    const homeOffset =
        getOffsetMinutes(homeNoon, data.home.timeZone);

    const destinationOffset =
        getOffsetMinutes(homeNoon, data.destination.timeZone);

    const differenceMinutes =
        destinationOffset - homeOffset;

    timeDifference.textContent =
        formatDifference(differenceMinutes);

    // "Best time to call home": 18:00 at the destination on the
    // destination date, converted to the home time zone.
    const callInstant = zonedDateTimeToDate(
        destinationDate.value,
        18,
        0,
        data.destination.timeZone
    );

    callDestinationTime.textContent = "18:00";

    callHomeTime.textContent =
        formatTime(callInstant, data.home.timeZone);

    createTimeline(data);
    saveSettings();
}


// --------------------------------
// EVENTS
// --------------------------------

function updateWhenCityIsValid(event) {
    const validCity = normalizeCity(event.target.value);

    // Update immediately when a complete valid city is selected or typed.
    // Partial text remains untouched while the user is still typing.
    if (validCity) {
        event.target.value = validCity;
        update();
    }
}

homeCity.addEventListener("input", event => {
    updateWhenCityIsValid(event);
    showSuggestions(homeCity, homeSuggestions);
});

destinationCity.addEventListener("input", event => {
    updateWhenCityIsValid(event);
    showSuggestions(destinationCity, destinationSuggestions);
});

homeCity.addEventListener("change", update);
destinationCity.addEventListener("change", update);
homeDateDisplay.addEventListener("click", () => openDatePicker(homeDate));
destinationDateDisplay.addEventListener("click", () => openDatePicker(destinationDate));

homeDate.addEventListener("change", update);
destinationDate.addEventListener("change", update);

// If a city is typed manually, update when the field loses focus.
homeCity.addEventListener("blur", update);
destinationCity.addEventListener("blur", update);

// Refresh current clocks once per minute without needing a reload.
setInterval(update, 60000);


// --------------------------------
// START
// --------------------------------

update();


homeCity.addEventListener("blur", () => {
    setTimeout(() => closeSuggestions(homeSuggestions), 100);
});

destinationCity.addEventListener("blur", () => {
    setTimeout(() => closeSuggestions(destinationSuggestions), 100);
});
