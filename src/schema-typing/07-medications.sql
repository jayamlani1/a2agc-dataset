-- Medications Prescribed (Long Datasets/od_medication_long.csv) --
DROP TABLE IF EXISTS medications;
CREATE TABLE medications (
  "CASE_NUMBER" TEXT,
  "DOD" TEXT,
  "PHYS_TIME" TEXT,
  "DRUG_NAME" TEXT,
  "PRESCRIBER_NUMBER" TEXT,
  "DISPENSE_AMOUNT" TEXT,
  "NUMBER_OF_DAYS_SUPPLY" TEXT,
  "NDC_CODE" TEXT,
  "GPI_GENERIC_NAME" TEXT,
  "DRUG_CLASS_NAME" TEXT,
  "DRUG_SUB_CLASS_NAME" TEXT,
  "STUDY_TEAM_CODE_USE" TEXT,
  "STUDY_TEAM_CODING" TEXT,
  "OPIOID_FLAG" TEXT,
  "BENZO_FLAG" TEXT,
  FOREIGN KEY("CASE_NUMBER") REFERENCES deaths("CASE_NUMBER")
);
INSERT INTO medications
  SELECT case_number, dod, phys_time, drug_name, prescriber_number, dispense_amount, number_of_days_supply, ndc_code, gpi_generic_name, drug_class_name, drug_sub_class_name, study_team_code_use, study_team_coding, opioid_flag, benzo_flag
  FROM od_medication_long_raw;
CREATE INDEX medications_fk ON medications("CASE_NUMBER");
