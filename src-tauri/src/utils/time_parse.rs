use chrono::{DateTime, NaiveDateTime, TimeZone};
use chrono_tz::{Asia::Tokyo, Tz};

pub fn convert_datetime_str_to_tz(datetime_str: String) -> DateTime<Tz> {
    let naive_date = NaiveDateTime::parse_from_str(&datetime_str, "%Y-%m-%d %H:%M:%S").unwrap();
    let dt = Tokyo.from_local_datetime(&naive_date).unwrap();
    return dt;
}
