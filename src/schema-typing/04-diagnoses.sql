-- Diagnoses (Long Datasets/od_diagnosis_long.csv) --
DROP TABLE IF EXISTS diagnoses;
CREATE TABLE diagnoses (
  "CASE_NUMBER" TEXT,
  "DOD" TEXT,
  "CODE_SYSTEM" TEXT,
  "CODE_NAME" TEXT,
  "PHYS_TIME" TEXT,
  "SUD_DX_FLAG" TEXT,
  "OPIOID_DX_FLAG" TEXT,
  "SHORT_DESC" TEXT,
  "LONG_DESC" TEXT,
  "THREE_DIGIT" TEXT,
  "MAJOR" TEXT,
  "SUB_CHAPTER" TEXT,
  "CHAPTER" TEXT,
  "STUDY_TEAM_CODE_USE" TEXT,
  FOREIGN KEY("CASE_NUMBER") REFERENCES deaths("CASE_NUMBER")
);
INSERT INTO diagnoses
  SELECT case_number, dod, code_system, code_name, phys_time, sud_dx_flag, opioid_dx_flag, short_desc, long_desc, three_digit, major, sub_chapter, chapter, study_team_code_use
  FROM od_diagnosis_long_raw;
CREATE INDEX diagnoses_fk ON diagnoses("CASE_NUMBER");
