import { DateTime } from "luxon";
var dt = DateTime;
const days = ["sun", "mon", "teus", "wed", "thurs", "fri", "sat"];
const months = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
];
var locale = "en";
var format = { month: "long", day: "numeric", year: "numeric" };
function today() {
    return dt.now().setLocale(locale).toLocaleString(DateTime.DATE_HUGE);
}
function todayToISO() {
    dt.now().toISODate();
}
function returnMonth(val) {
    return `${months[val]}`;
}

function returnDay(val) {
    return `${days[val]}`;
}
export default {
    today,
    todayToISO,
    returnMonth,
    returnDay,
};
