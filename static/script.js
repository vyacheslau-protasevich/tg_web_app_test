let settings = {
    dailyEvents: {},
    holidays: {},
    fasts: {},
    shkiyaType: {}
};

function saveDailyEvent() {
    const event = document.getElementById('daily-events').value;
    const minutesBefore = parseInt(document.getElementById('daily-events-input').value);
    settings.dailyEvents[event] = minutesBefore;
}

function saveHoliday() {
    const holiday = document.getElementById('holidays').value;
    const minutesBefore = parseInt(document.getElementById('holidays-input').value);
    settings.holidays[holiday] = minutesBefore;
}

function saveFast() {
    const fast = document.getElementById('fasts').value;
    const minutesBefore = parseInt(document.getElementById('fasts-input').value);
    settings.fasts[fast] = minutesBefore;
}

function saveShkiyaType() {
    const shkiyaTypeEnabled = document.getElementById('shkiya-type-toggle').checked;
    if (shkiyaTypeEnabled) {
        const shkiyaType = document.getElementById('shkiya-type').value;
        settings.shkiyaType = shkiyaType;
    } else {
        settings.shkiyaType = null;
    }
}

function saveAllSettings() {
    const jsonOutput = JSON.stringify(settings, null, 2);
    document.getElementById('json-output').innerText = jsonOutput;
}
