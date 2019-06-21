-- Labs (Long Datasets/od_lab_long.csv) --
DROP TABLE IF EXISTS labs;
CREATE TABLE labs (
  "CASE_NUMBER" TEXT,
  "DOD" TEXT,
  "LAB_NAME" TEXT,
  "PHYS_TIME" TEXT,
  "CODE_VALUE" TEXT,
  "CODE_VALUE_TYPE" TEXT,
  "VALUE_TEXT_FOR_DISPLAY" TEXT,
  "NORMAL_RANGE_TEXT" TEXT,
  "LOINC_LAB_TYPE" TEXT,
  "LOINC_TEST_TYPE" TEXT,
  "LOINC_CODE" TEXT,
  "LOINC_NAME" TEXT,
  FOREIGN KEY("CASE_NUMBER") REFERENCES deaths("CASE_NUMBER")
);
INSERT INTO labs
  SELECT case_number, dod, lab_name, phys_time, code_value, code_value_type, value_text_for_display, normal_range_text, loinc_lab_type, loinc_test_type, loinc_code, loinc_name
  FROM od_lab_long_raw;
CREATE INDEX labs_fk ON labs("CASE_NUMBER");
