-- Aggregates counts by year, gender, and age group
-- Each age group is an integer [0, 17] where
-- 17 represents 0-4 years old
-- 16 represents 5-9 years old
-- etc.

SELECT
  YEAR as year,
  SEX as gender,
  (17 - min(CAST((AGE / 5) AS INT), 17)) AS age_group,
  count(*) AS count
FROM deaths
GROUP BY year, gender, age_group
ORDER BY year, gender, age_group ASC;
