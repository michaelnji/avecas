import { DateTime } from "luxon";
var dt = DateTime;
var locale = "en";
var format = { month: "long", day: "numeric", year: "numeric" };
function today() {
  return dt.now().setLocale(locale).toLocaleString(DateTime.DATE_HUGE);
}
function todayToISO() {
  dt.now().toISODate();
}
export default {
  today,
  todayToISO,
};
