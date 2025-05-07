import { formatInTimeZone } from "date-fns-tz";

const dateFormat = (date) => {
  return formatInTimeZone(date, "Asia/Karachi", "dd MMM yyyy");
};

export default dateFormat;
