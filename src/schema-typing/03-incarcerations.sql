-- Incarcerations (Long Datasets/Linked_Jail_Data.csv) --
DROP TABLE IF EXISTS incarcerations;
CREATE TABLE incarcerations (
  "JAIL_ID" TEXT,
  "CASE_NUMBER" TEXT,
  "ADMISSION" TEXT,
  "PERMANENT_NO" TEXT,
  "BOOKING_NO" TEXT,
  "LAST_NAME" TEXT,
  "FIRST_NAME" TEXT,
  "MIDDLE_NAME" TEXT,
  "OFFENSE_DESCRIPTION" TEXT,
  "JAIL_CASE_NUMBER" TEXT,
  "GENDER" TEXT,
  "DOB" TEXT,
  "YOB" TEXT,
  "AGE" TEXT,
  "RACE" TEXT,
  "BOOKING_DATE" TEXT,
  "BOOKING_YEAR" TEXT,
  "RELEASE_DATE" TEXT,
  "RELEASE_YEAR" TEXT,
  "MIN_BOOKING_DATE" TEXT,
  "MAX_RELEASE_DATE" TEXT,
  FOREIGN KEY("CASE_NUMBER") REFERENCES deaths("CASE_NUMBER")
);
INSERT INTO incarcerations
  SELECT jail_id, case_number, admission, permanent_no, booking_no, last_name, first_name, middle_name, offense_description, jail_case_number, gender, dob, yob, age, race, booking_date, booking_year, release_date, release_year, min_booking_date, max_release_date
  FROM Linked_Jail_Data_raw;
CREATE INDEX incarcerations_fk ON incarcerations("CASE_NUMBER");
