-- Diagnoses (Long Datasets/od_diagnosis_long.csv) --
DROP TABLE IF EXISTS diagnoses;
CREATE TABLE diagnoses (
  "CASE_NUMBER" CHARACTER(6) NOT NULL CHECK(length(case_number) = 6 OR case_number = '172987a'),
      -- FIXME: case_number = 172987a is the only row that is not length 6 and is a duplicate of 172987 
  "DOD" DATE NOT NULL CHECK((typeof(dod) = 'text' AND length(dod) = 10)),
  "CODE_SYSTEM" VARCHAR(5) NOT NULL CHECK(code_system IN ('ICD9', 'ICD10')),
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
  SELECT case_number,
    date(dod),
    code_system,
    code_name,
    phys_time,
    sud_dx_flag,
    opioid_dx_flag,
    short_desc,
    long_desc,
    three_digit,
    major,
    sub_chapter,
    chapter,
    study_team_code_use
  FROM od_diagnosis_long_raw;
CREATE INDEX diagnoses_fk ON diagnoses("CASE_NUMBER");
