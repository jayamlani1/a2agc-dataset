-- Hospital Encounters (Long Datasets/od_encounters_long.csv) --
DROP TABLE IF EXISTS encounters;
CREATE TABLE encounters (
  "CASE_NUMBER" TEXT,
  "DOD" TEXT,
  "ENCOUNTER_ID" TEXT, -- PRIMARY KEY,
  "ADMIT_TIME" TEXT,
  "DISCHARGE_TIME" TEXT,
  "CARE_SETTING_CODE" TEXT,
  FOREIGN KEY("CASE_NUMBER") REFERENCES deaths("CASE_NUMBER")
);
INSERT INTO encounters
  SELECT case_number, dod, encounter_id, admit_time, discharge_time, care_setting_code
  FROM od_encounters_long_raw;
CREATE INDEX encounters_fk ON encounters("CASE_NUMBER");
