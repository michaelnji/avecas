import { DateTime } from "luxon";
var dt = DateTime;
var locale = "en";
var format = { month: "long", day: "numeric", year: "numeric" };
function today() {
  return dt.now().setLocale(locale).toLocaleString(DateTime.DATE_HUGE);
}
export default {
  today,
};
