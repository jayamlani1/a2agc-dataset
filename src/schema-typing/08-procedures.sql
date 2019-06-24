-- Procedures done (Long Datasets/od_procedures_long.csv) --
DROP TABLE IF EXISTS procedures;
CREATE TABLE procedures (
  "CASE_NUMBER" TEXT,
  "DOD" TEXT,
  "PHYS_TIME" TEXT,
  "CPT4_CODE" TEXT,
  "CODE_NAME" TEXT,
  "STUDY_TEAM_CODE_USE" TEXT,
  FOREIGN KEY("CASE_NUMBER") REFERENCES deaths("CASE_NUMBER")
);
INSERT INTO procedures
  SELECT case_number, dod, phys_time, cpt4_code, code_name, study_team_code_use
  FROM od_procedures_long_raw;
CREATE INDEX procedures_fk ON procedures("CASE_NUMBER");
