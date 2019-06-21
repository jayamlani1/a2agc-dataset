-- Dr. Referrals (Long Datasets/od_referrals_long.csv) --
DROP TABLE IF EXISTS referrals;
CREATE TABLE referrals (
  "CASE_NUMBER" TEXT,
  "DOD" TEXT,
  "PHYS_TIME" TEXT,
  "REFERRAL_NAME" TEXT,
  "STUDY_TEAM_CODE_USE" TEXT,
  FOREIGN KEY("CASE_NUMBER") REFERENCES deaths("CASE_NUMBER")
);
INSERT INTO referrals
  SELECT case_number, dod, phys_time, referral_name, study_team_code_use
  FROM od_referrals_long_raw;
CREATE INDEX referrals_fk ON referrals("CASE_NUMBER");
