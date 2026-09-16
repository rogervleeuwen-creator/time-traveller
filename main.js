// --------------------------------
// CITY DATA — REAL IANA TIME ZONES
// --------------------------------

const cities = {
    Amsterdam:    { timeZone: "Europe/Amsterdam" },
    London:       { timeZone: "Europe/London" },
    Paris:        { timeZone: "Europe/Paris" },
    "New York":   { timeZone: "America/New_York" },
    Tokyo:        { timeZone: "Asia/Tokyo" },
    Bangkok:      { timeZone: "Asia/Bangkok" },
    Sydney:       { timeZone: "Australia/Sydney" },
    Rome:         { timeZone: "Europe/Rome" },
    Madrid:       { timeZone: "Europe/Madrid" },
    Berlin:       { timeZone: "Europe/Berlin" },
    Lisbon:       { timeZone: "Europe/Lisbon" },
    Vienna:       { timeZone: "Europe/Vienna" },
    Prague:       { timeZone: "Europe/Prague" },
    Athens:       { timeZone: "Europe/Athens" },
    Dubai:        { timeZone: "Asia/Dubai" },
    Singapore:    { timeZone: "Asia/Singapore" },
    "Hong Kong":  { timeZone: "Asia/Hong_Kong" },
    "Los Angeles":{ timeZone: "America/Los_Angeles" },
    Chicago:      { timeZone: "America/Chicago" },
    Toronto:      { timeZone: "America/Toronto" },
    Vancouver:    { timeZone: "America/Vancouver" }
};


// --------------------------------
// HTML ELEMENTS
// --------------------------------

const homeCity = document.getElementById("homeCity");
const destinationCity = document.getElementById("destinationCity");
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
