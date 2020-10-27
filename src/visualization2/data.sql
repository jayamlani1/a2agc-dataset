WITH
  P AS (
    SELECT CASE_NUMBER,
    CASE
      WHEN max(OPIOID_FLAG) + max(BENZO_FLAG) > 0 THEN 1 ELSE 0
    END AS OPIOID_PRESCRIPTION
    FROM medications
    GROUP BY CASE_NUMBER
  ),
  O AS ( 
    SELECT CASE_NUMBER,
    CASE
      WHEN max(OVERDOSE_CC_MOI) + max(NALOXONE_DUMMY) > 0 THEN 1 ELSE 0
    END AS OVERDOSE
    FROM ems_incidents
    GROUP BY CASE_NUMBER
  ),
  J AS ( 
    SELECT CASE_NUMBER, 1 AS JUSTICE_INVOLVEMENT
    FROM incarcerations
    GROUP BY CASE_NUMBER
  ),
  H AS (
    SELECT CASE_NUMBER, 1 AS HEALTH_DATA
    FROM encounters
    GROUP BY CASE_NUMBER
  ),
  CN_POJH AS (
    SELECT D.CASE_NUMBER, DOD,
      coalesce(OPIOID_PRESCRIPTION, 0) AS OPIOID_PRESCRIPTION,
      coalesce(OVERDOSE, 0) AS OVERDOSE,
      coalesce(JUSTICE_INVOLVEMENT, 0) AS JUSTICE_INVOLVEMENT,
      coalesce(HEALTH_DATA, 0) AS HEALTH_DATA
    FROM deaths AS D 
      LEFT OUTER JOIN P ON D.CASE_NUMBER = P.CASE_NUMBER
      LEFT OUTER JOIN O ON D.CASE_NUMBER = O.CASE_NUMBER
      LEFT OUTER JOIN J ON D.CASE_NUMBER = J.CASE_NUMBER
      LEFT OUTER JOIN H ON D.CASE_NUMBER = H.CASE_NUMBER
  ),
  labels AS (
    SELECT CASE_NUMBER, DOD, TRUE = 1,
    CASE
      WHEN OPIOID_PRESCRIPTION + OVERDOSE = 2 THEN 2
      WHEN OPIOID_PRESCRIPTION = 1 THEN 3
      WHEN OVERDOSE = 1 THEN 1
      ELSE 0
    END AS A,
    CASE
      WHEN JUSTICE_INVOLVEMENT + HEALTH_DATA = 2 THEN 2
      WHEN JUSTICE_INVOLVEMENT = 1 THEN 1
      WHEN HEALTH_DATA = 1 THEN 3
      ELSE 0
    END AS B,
    CASE
      WHEN JUSTICE_INVOLVEMENT + HEALTH_DATA + OPIOID_PRESCRIPTION + OVERDOSE = 4 THEN "Rx + OD + Jail + Health"
      WHEN JUSTICE_INVOLVEMENT + HEALTH_DATA + OVERDOSE = 3 THEN "OD + Jail + Health"
      WHEN JUSTICE_INVOLVEMENT + HEALTH_DATA + OPIOID_PRESCRIPTION = 3 THEN "Rx + Jail + Health"
      WHEN JUSTICE_INVOLVEMENT + OVERDOSE + OPIOID_PRESCRIPTION = 3 THEN "Rx + OD + Jail"
      WHEN HEALTH_DATA + OVERDOSE + OPIOID_PRESCRIPTION = 3 THEN "Rx + OD + Health"
      WHEN JUSTICE_INVOLVEMENT + HEALTH_DATA = 2 THEN "Jail + Health"
      WHEN JUSTICE_INVOLVEMENT + OVERDOSE = 2 THEN "OD + Jail"
      WHEN JUSTICE_INVOLVEMENT + OPIOID_PRESCRIPTION = 2 THEN "Rx + Jail"
      WHEN HEALTH_DATA + OPIOID_PRESCRIPTION = 2 THEN "Rx + Health"
      WHEN OPIOID_PRESCRIPTION + OVERDOSE = 2 THEN "Rx + OD"
      WHEN HEALTH_DATA + OVERDOSE = 2 THEN "OD + Health"
      WHEN JUSTICE_INVOLVEMENT = 1 THEN "Jail"
      WHEN OVERDOSE = 1 THEN "OD"
      WHEN OPIOID_PRESCRIPTION = 1 THEN "Rx"
      WHEN HEALTH_DATA = 1 THEN "Health"
      ELSE "∅"
    END AS subset
    FROM CN_POJH
  ),

  all_data as (
    SELECT
      CASE_NUMBER,
      A AS "Touchpoint A",
      B AS "Touchpoint B",
      strftime('%Y', DOD) || CASE
        WHEN cast(strftime('%m', DOD) as integer) BETWEEN 1 AND 3 THEN '-01-01'
        WHEN cast(strftime('%m', DOD) as integer) BETWEEN 4 and 6 THEN '-04-01'
        WHEN cast(strftime('%m', DOD) as integer) BETWEEN 7 and 9 THEN '-07-01'
        ELSE '-10-01'
      END AS "PERIOD",
      subset AS "Set",
      TRUE as "True"
    FROM (
      SELECT CASE_NUMBER, A, B, DOD, subset, TRUE FROM labels
    )
  )

SELECT
  *
FROM (
  SELECT CASE_NUMBER, "Touchpoint A", "Touchpoint B", "PERIOD", "Set", True from all_data
  UNION
  SELECT CASE_NUMBER, "Touchpoint A", "Touchpoint B", "PERIOD", "Set", True FROM BLANKS
) AS data
ORDER BY CASE_NUMBER;

DROP TABLE BLANKS;
CREATE TABLE BLANKS (CASE_NUMBER int, "Touchpoint A" int, "Touchpoint B" int, "PERIOD" varchar(255), "Set" varchar(255), True int);
INSERT INTO BLANKS (CASE_NUMBER, "Touchpoint A", "Touchpoint B", "PERIOD", "Set", True) 
VALUES (0, 0, 0, '2010-01-01', '∅', 0);
VALUES (0, 0, 1, '2010-01-01', 'Jail', 0);
VALUES (0, 0, 2, '2010-01-01', 'Jail + Health', 0);
VALUES (0, 0, 3, '2010-01-01', 'Health', 0);
VALUES (0, 1, 0, '2010-01-01', 'OD', 0);
VALUES (0, 1, 1, '2010-01-01', 'OD + Jail', 0);
VALUES (0, 1, 2, '2010-01-01', 'OD + Jail + Health', 0);
VALUES (0, 1, 3, '2010-01-01', 'OD + Health', 0);
VALUES (0, 2, 0, '2010-01-01', 'Rx + OD', 0);
VALUES (0, 2, 1, '2010-01-01', 'Rx + OD + Jail', 0);
VALUES (0, 2, 2, '2010-01-01', 'Rx + OD + Jail + Health', 0);
VALUES (0, 2, 3, '2010-01-01', 'Rx + OD + Health', 0);
VALUES (0, 3, 0, '2010-01-01', 'Rx', 0);
VALUES (0, 3, 1, '2010-01-01', 'Rx + Jail', 0);
VALUES (0, 3, 2, '2010-01-01', 'Rx + Jail + Health', 0);
VALUES (0, 3, 3, '2010-01-01', 'Rx + Health', 0);

VALUES (0, 0, 0, '2010-04-01', '∅', 0);
VALUES (0, 0, 1, '2010-04-01', 'Jail', 0);
VALUES (0, 0, 2, '2010-04-01', 'Jail + Health', 0);
VALUES (0, 0, 3, '2010-04-01', 'Health', 0);
VALUES (0, 1, 0, '2010-04-01', 'OD', 0);
VALUES (0, 1, 1, '2010-04-01', 'OD + Jail', 0);
VALUES (0, 1, 2, '2010-04-01', 'OD + Jail + Health', 0);
VALUES (0, 1, 3, '2010-04-01', 'OD + Health', 0);
VALUES (0, 2, 0, '2010-04-01', 'Rx + OD', 0);
VALUES (0, 2, 1, '2010-04-01', 'Rx + OD + Jail', 0);
VALUES (0, 2, 2, '2010-04-01', 'Rx + OD + Jail + Health', 0);
VALUES (0, 2, 3, '2010-04-01', 'Rx + OD + Health', 0);
VALUES (0, 3, 0, '2010-04-01', 'Rx', 0);
VALUES (0, 3, 1, '2010-04-01', 'Rx + Jail', 0);
VALUES (0, 3, 2, '2010-04-01', 'Rx + Jail + Health', 0);
VALUES (0, 3, 3, '2010-04-01', 'Rx + Health', 0);

VALUES (0, 0, 0, '2010-07-01', '∅', 0);
VALUES (0, 0, 1, '2010-07-01', 'Jail', 0);
VALUES (0, 0, 2, '2010-07-01', 'Jail + Health', 0);
VALUES (0, 0, 3, '2010-07-01', 'Health', 0);
VALUES (0, 1, 0, '2010-07-01', 'OD', 0);
VALUES (0, 1, 1, '2010-07-01', 'OD + Jail', 0);
VALUES (0, 1, 2, '2010-07-01', 'OD + Jail + Health', 0);
VALUES (0, 1, 3, '2010-07-01', 'OD + Health', 0);
VALUES (0, 2, 0, '2010-07-01', 'Rx + OD', 0);
VALUES (0, 2, 1, '2010-07-01', 'Rx + OD + Jail', 0);
VALUES (0, 2, 2, '2010-07-01', 'Rx + OD + Jail + Health', 0);
VALUES (0, 2, 3, '2010-07-01', 'Rx + OD + Health', 0);
VALUES (0, 3, 0, '2010-07-01', 'Rx', 0);
VALUES (0, 3, 1, '2010-07-01', 'Rx + Jail', 0);
VALUES (0, 3, 2, '2010-07-01', 'Rx + Jail + Health', 0);
VALUES (0, 3, 3, '2010-07-01', 'Rx + Health', 0);

VALUES (0, 0, 0, '2010-10-01', '∅', 0);
VALUES (0, 0, 1, '2010-10-01', 'Jail', 0);
VALUES (0, 0, 2, '2010-10-01', 'Jail + Health', 0);
VALUES (0, 0, 3, '2010-10-01', 'Health', 0);
VALUES (0, 1, 0, '2010-10-01', 'OD', 0);
VALUES (0, 1, 1, '2010-10-01', 'OD + Jail', 0);
VALUES (0, 1, 2, '2010-10-01', 'OD + Jail + Health', 0);
VALUES (0, 1, 3, '2010-10-01', 'OD + Health', 0);
VALUES (0, 2, 0, '2010-10-01', 'Rx + OD', 0);
VALUES (0, 2, 1, '2010-10-01', 'Rx + OD + Jail', 0);
VALUES (0, 2, 2, '2010-10-01', 'Rx + OD + Jail + Health', 0);
VALUES (0, 2, 3, '2010-10-01', 'Rx + OD + Health', 0);
VALUES (0, 3, 0, '2010-10-01', 'Rx', 0);
VALUES (0, 3, 1, '2010-10-01', 'Rx + Jail', 0);
VALUES (0, 3, 2, '2010-10-01', 'Rx + Jail + Health', 0);
VALUES (0, 3, 3, '2010-10-01', 'Rx + Health', 0);

VALUES (0, 0, 0, '2011-01-01', '∅', 0);
VALUES (0, 0, 1, '2011-01-01', 'Jail', 0);
VALUES (0, 0, 2, '2011-01-01', 'Jail + Health', 0);
VALUES (0, 0, 3, '2011-01-01', 'Health', 0);
VALUES (0, 1, 0, '2011-01-01', 'OD', 0);
VALUES (0, 1, 1, '2011-01-01', 'OD + Jail', 0);
VALUES (0, 1, 2, '2011-01-01', 'OD + Jail + Health', 0);
VALUES (0, 1, 3, '2011-01-01', 'OD + Health', 0);
VALUES (0, 2, 0, '2011-01-01', 'Rx + OD', 0);
VALUES (0, 2, 1, '2011-01-01', 'Rx + OD + Jail', 0);
VALUES (0, 2, 2, '2011-01-01', 'Rx + OD + Jail + Health', 0);
VALUES (0, 2, 3, '2011-01-01', 'Rx + OD + Health', 0);
VALUES (0, 3, 0, '2011-01-01', 'Rx', 0);
VALUES (0, 3, 1, '2011-01-01', 'Rx + Jail', 0);
VALUES (0, 3, 2, '2011-01-01', 'Rx + Jail + Health', 0);
VALUES (0, 3, 3, '2011-01-01', 'Rx + Health', 0);

VALUES (0, 0, 0, '2011-04-01', '∅', 0);
VALUES (0, 0, 1, '2011-04-01', 'Jail', 0);
VALUES (0, 0, 2, '2011-04-01', 'Jail + Health', 0);
VALUES (0, 0, 3, '2011-04-01', 'Health', 0);
VALUES (0, 1, 0, '2011-04-01', 'OD', 0);
VALUES (0, 1, 1, '2011-04-01', 'OD + Jail', 0);
VALUES (0, 1, 2, '2011-04-01', 'OD + Jail + Health', 0);
VALUES (0, 1, 3, '2011-04-01', 'OD + Health', 0);
VALUES (0, 2, 0, '2011-04-01', 'Rx + OD', 0);
VALUES (0, 2, 1, '2011-04-01', 'Rx + OD + Jail', 0);
VALUES (0, 2, 2, '2011-04-01', 'Rx + OD + Jail + Health', 0);
VALUES (0, 2, 3, '2011-04-01', 'Rx + OD + Health', 0);
VALUES (0, 3, 0, '2011-04-01', 'Rx', 0);
VALUES (0, 3, 1, '2011-04-01', 'Rx + Jail', 0);
VALUES (0, 3, 2, '2011-04-01', 'Rx + Jail + Health', 0);
VALUES (0, 3, 3, '2011-04-01', 'Rx + Health', 0);

VALUES (0, 0, 0, '2011-07-01', '∅', 0);
VALUES (0, 0, 1, '2011-07-01', 'Jail', 0);
VALUES (0, 0, 2, '2011-07-01', 'Jail + Health', 0);
VALUES (0, 0, 3, '2011-07-01', 'Health', 0);
VALUES (0, 1, 0, '2011-07-01', 'OD', 0);
VALUES (0, 1, 1, '2011-07-01', 'OD + Jail', 0);
VALUES (0, 1, 2, '2011-07-01', 'OD + Jail + Health', 0);
VALUES (0, 1, 3, '2011-07-01', 'OD + Health', 0);
VALUES (0, 2, 0, '2011-07-01', 'Rx + OD', 0);
VALUES (0, 2, 1, '2011-07-01', 'Rx + OD + Jail', 0);
VALUES (0, 2, 2, '2011-07-01', 'Rx + OD + Jail + Health', 0);
VALUES (0, 2, 3, '2011-07-01', 'Rx + OD + Health', 0);
VALUES (0, 3, 0, '2011-07-01', 'Rx', 0);
VALUES (0, 3, 1, '2011-07-01', 'Rx + Jail', 0);
VALUES (0, 3, 2, '2011-07-01', 'Rx + Jail + Health', 0);
VALUES (0, 3, 3, '2011-07-01', 'Rx + Health', 0);

VALUES (0, 0, 0, '2011-10-01', '∅', 0);
VALUES (0, 0, 1, '2011-10-01', 'Jail', 0);
VALUES (0, 0, 2, '2011-10-01', 'Jail + Health', 0);
VALUES (0, 0, 3, '2011-10-01', 'Health', 0);
VALUES (0, 1, 0, '2011-10-01', 'OD', 0);
VALUES (0, 1, 1, '2011-10-01', 'OD + Jail', 0);
VALUES (0, 1, 2, '2011-10-01', 'OD + Jail + Health', 0);
VALUES (0, 1, 3, '2011-10-01', 'OD + Health', 0);
VALUES (0, 2, 0, '2011-10-01', 'Rx + OD', 0);
VALUES (0, 2, 1, '2011-10-01', 'Rx + OD + Jail', 0);
VALUES (0, 2, 2, '2011-10-01', 'Rx + OD + Jail + Health', 0);
VALUES (0, 2, 3, '2011-10-01', 'Rx + OD + Health', 0);
VALUES (0, 3, 0, '2011-10-01', 'Rx', 0);
VALUES (0, 3, 1, '2011-10-01', 'Rx + Jail', 0);
VALUES (0, 3, 2, '2011-10-01', 'Rx + Jail + Health', 0);
VALUES (0, 3, 3, '2011-10-01', 'Rx + Health', 0);

VALUES (0, 0, 0, '2012-01-01', '∅', 0);
VALUES (0, 0, 1, '2012-01-01', 'Jail', 0);
VALUES (0, 0, 2, '2012-01-01', 'Jail + Health', 0);
VALUES (0, 0, 3, '2012-01-01', 'Health', 0);
VALUES (0, 1, 0, '2012-01-01', 'OD', 0);
VALUES (0, 1, 1, '2012-01-01', 'OD + Jail', 0);
VALUES (0, 1, 2, '2012-01-01', 'OD + Jail + Health', 0);
VALUES (0, 1, 3, '2012-01-01', 'OD + Health', 0);
VALUES (0, 2, 0, '2012-01-01', 'Rx + OD', 0);
VALUES (0, 2, 1, '2012-01-01', 'Rx + OD + Jail', 0);
VALUES (0, 2, 2, '2012-01-01', 'Rx + OD + Jail + Health', 0);
VALUES (0, 2, 3, '2012-01-01', 'Rx + OD + Health', 0);
VALUES (0, 3, 0, '2012-01-01', 'Rx', 0);
VALUES (0, 3, 1, '2012-01-01', 'Rx + Jail', 0);
VALUES (0, 3, 2, '2012-01-01', 'Rx + Jail + Health', 0);
VALUES (0, 3, 3, '2012-01-01', 'Rx + Health', 0);

VALUES (0, 0, 0, '2012-04-01', '∅', 0);
VALUES (0, 0, 1, '2012-04-01', 'Jail', 0);
VALUES (0, 0, 2, '2012-04-01', 'Jail + Health', 0);
VALUES (0, 0, 3, '2012-04-01', 'Health', 0);
VALUES (0, 1, 0, '2012-04-01', 'OD', 0);
VALUES (0, 1, 1, '2012-04-01', 'OD + Jail', 0);
VALUES (0, 1, 2, '2012-04-01', 'OD + Jail + Health', 0);
VALUES (0, 1, 3, '2012-04-01', 'OD + Health', 0);
VALUES (0, 2, 0, '2012-04-01', 'Rx + OD', 0);
VALUES (0, 2, 1, '2012-04-01', 'Rx + OD + Jail', 0);
VALUES (0, 2, 2, '2012-04-01', 'Rx + OD + Jail + Health', 0);
VALUES (0, 2, 3, '2012-04-01', 'Rx + OD + Health', 0);
VALUES (0, 3, 0, '2012-04-01', 'Rx', 0);
VALUES (0, 3, 1, '2012-04-01', 'Rx + Jail', 0);
VALUES (0, 3, 2, '2012-04-01', 'Rx + Jail + Health', 0);
VALUES (0, 3, 3, '2012-04-01', 'Rx + Health', 0);

VALUES (0, 0, 0, '2012-07-01', '∅', 0);
VALUES (0, 0, 1, '2012-07-01', 'Jail', 0);
VALUES (0, 0, 2, '2012-07-01', 'Jail + Health', 0);
VALUES (0, 0, 3, '2012-07-01', 'Health', 0);
VALUES (0, 1, 0, '2012-07-01', 'OD', 0);
VALUES (0, 1, 1, '2012-07-01', 'OD + Jail', 0);
VALUES (0, 1, 2, '2012-07-01', 'OD + Jail + Health', 0);
VALUES (0, 1, 3, '2012-07-01', 'OD + Health', 0);
VALUES (0, 2, 0, '2012-07-01', 'Rx + OD', 0);
VALUES (0, 2, 1, '2012-07-01', 'Rx + OD + Jail', 0);
VALUES (0, 2, 2, '2012-07-01', 'Rx + OD + Jail + Health', 0);
VALUES (0, 2, 3, '2012-07-01', 'Rx + OD + Health', 0);
VALUES (0, 3, 0, '2012-07-01', 'Rx', 0);
VALUES (0, 3, 1, '2012-07-01', 'Rx + Jail', 0);
VALUES (0, 3, 2, '2012-07-01', 'Rx + Jail + Health', 0);
VALUES (0, 3, 3, '2012-07-01', 'Rx + Health', 0);

VALUES (0, 0, 0, '2012-10-01', '∅', 0);
VALUES (0, 0, 1, '2012-10-01', 'Jail', 0);
VALUES (0, 0, 2, '2012-10-01', 'Jail + Health', 0);
VALUES (0, 0, 3, '2012-10-01', 'Health', 0);
VALUES (0, 1, 0, '2012-10-01', 'OD', 0);
VALUES (0, 1, 1, '2012-10-01', 'OD + Jail', 0);
VALUES (0, 1, 2, '2012-10-01', 'OD + Jail + Health', 0);
VALUES (0, 1, 3, '2012-10-01', 'OD + Health', 0);
VALUES (0, 2, 0, '2012-10-01', 'Rx + OD', 0);
VALUES (0, 2, 1, '2012-10-01', 'Rx + OD + Jail', 0);
VALUES (0, 2, 2, '2012-10-01', 'Rx + OD + Jail + Health', 0);
VALUES (0, 2, 3, '2012-10-01', 'Rx + OD + Health', 0);
VALUES (0, 3, 0, '2012-10-01', 'Rx', 0);
VALUES (0, 3, 1, '2012-10-01', 'Rx + Jail', 0);
VALUES (0, 3, 2, '2012-10-01', 'Rx + Jail + Health', 0);
VALUES (0, 3, 3, '2012-10-01', 'Rx + Health', 0);

VALUES (0, 0, 0, '2013-01-01', '∅', 0);
VALUES (0, 0, 1, '2013-01-01', 'Jail', 0);
VALUES (0, 0, 2, '2013-01-01', 'Jail + Health', 0);
VALUES (0, 0, 3, '2013-01-01', 'Health', 0);
VALUES (0, 1, 0, '2013-01-01', 'OD', 0);
VALUES (0, 1, 1, '2013-01-01', 'OD + Jail', 0);
VALUES (0, 1, 2, '2013-01-01', 'OD + Jail + Health', 0);
VALUES (0, 1, 3, '2013-01-01', 'OD + Health', 0);
VALUES (0, 2, 0, '2013-01-01', 'Rx + OD', 0);
VALUES (0, 2, 1, '2013-01-01', 'Rx + OD + Jail', 0);
VALUES (0, 2, 2, '2013-01-01', 'Rx + OD + Jail + Health', 0);
VALUES (0, 2, 3, '2013-01-01', 'Rx + OD + Health', 0);
VALUES (0, 3, 0, '2013-01-01', 'Rx', 0);
VALUES (0, 3, 1, '2013-01-01', 'Rx + Jail', 0);
VALUES (0, 3, 2, '2013-01-01', 'Rx + Jail + Health', 0);
VALUES (0, 3, 3, '2013-01-01', 'Rx + Health', 0);

VALUES (0, 0, 0, '2013-04-01', '∅', 0);
VALUES (0, 0, 1, '2013-04-01', 'Jail', 0);
VALUES (0, 0, 2, '2013-04-01', 'Jail + Health', 0);
VALUES (0, 0, 3, '2013-04-01', 'Health', 0);
VALUES (0, 1, 0, '2013-04-01', 'OD', 0);
VALUES (0, 1, 1, '2013-04-01', 'OD + Jail', 0);
VALUES (0, 1, 2, '2013-04-01', 'OD + Jail + Health', 0);
VALUES (0, 1, 3, '2013-04-01', 'OD + Health', 0);
VALUES (0, 2, 0, '2013-04-01', 'Rx + OD', 0);
VALUES (0, 2, 1, '2013-04-01', 'Rx + OD + Jail', 0);
VALUES (0, 2, 2, '2013-04-01', 'Rx + OD + Jail + Health', 0);
VALUES (0, 2, 3, '2013-04-01', 'Rx + OD + Health', 0);
VALUES (0, 3, 0, '2013-04-01', 'Rx', 0);
VALUES (0, 3, 1, '2013-04-01', 'Rx + Jail', 0);
VALUES (0, 3, 2, '2013-04-01', 'Rx + Jail + Health', 0);
VALUES (0, 3, 3, '2013-04-01', 'Rx + Health', 0);

VALUES (0, 0, 0, '2013-07-01', '∅', 0);
VALUES (0, 0, 1, '2013-07-01', 'Jail', 0);
VALUES (0, 0, 2, '2013-07-01', 'Jail + Health', 0);
VALUES (0, 0, 3, '2013-07-01', 'Health', 0);
VALUES (0, 1, 0, '2013-07-01', 'OD', 0);
VALUES (0, 1, 1, '2013-07-01', 'OD + Jail', 0);
VALUES (0, 1, 2, '2013-07-01', 'OD + Jail + Health', 0);
VALUES (0, 1, 3, '2013-07-01', 'OD + Health', 0);
VALUES (0, 2, 0, '2013-07-01', 'Rx + OD', 0);
VALUES (0, 2, 1, '2013-07-01', 'Rx + OD + Jail', 0);
VALUES (0, 2, 2, '2013-07-01', 'Rx + OD + Jail + Health', 0);
VALUES (0, 2, 3, '2013-07-01', 'Rx + OD + Health', 0);
VALUES (0, 3, 0, '2013-07-01', 'Rx', 0);
VALUES (0, 3, 1, '2013-07-01', 'Rx + Jail', 0);
VALUES (0, 3, 2, '2013-07-01', 'Rx + Jail + Health', 0);
VALUES (0, 3, 3, '2013-07-01', 'Rx + Health', 0);

VALUES (0, 0, 0, '2013-10-01', '∅', 0);
VALUES (0, 0, 1, '2013-10-01', 'Jail', 0);
VALUES (0, 0, 2, '2013-10-01', 'Jail + Health', 0);
VALUES (0, 0, 3, '2013-10-01', 'Health', 0);
VALUES (0, 1, 0, '2013-10-01', 'OD', 0);
VALUES (0, 1, 1, '2013-10-01', 'OD + Jail', 0);
VALUES (0, 1, 2, '2013-10-01', 'OD + Jail + Health', 0);
VALUES (0, 1, 3, '2013-10-01', 'OD + Health', 0);
VALUES (0, 2, 0, '2013-10-01', 'Rx + OD', 0);
VALUES (0, 2, 1, '2013-10-01', 'Rx + OD + Jail', 0);
VALUES (0, 2, 2, '2013-10-01', 'Rx + OD + Jail + Health', 0);
VALUES (0, 2, 3, '2013-10-01', 'Rx + OD + Health', 0);
VALUES (0, 3, 0, '2013-10-01', 'Rx', 0);
VALUES (0, 3, 1, '2013-10-01', 'Rx + Jail', 0);
VALUES (0, 3, 2, '2013-10-01', 'Rx + Jail + Health', 0);
VALUES (0, 3, 3, '2013-10-01', 'Rx + Health', 0);

VALUES (0, 0, 0, '2014-01-01', '∅', 0);
VALUES (0, 0, 1, '2014-01-01', 'Jail', 0);
VALUES (0, 0, 2, '2014-01-01', 'Jail + Health', 0);
VALUES (0, 0, 3, '2014-01-01', 'Health', 0);
VALUES (0, 1, 0, '2014-01-01', 'OD', 0);
VALUES (0, 1, 1, '2014-01-01', 'OD + Jail', 0);
VALUES (0, 1, 2, '2014-01-01', 'OD + Jail + Health', 0);
VALUES (0, 1, 3, '2014-01-01', 'OD + Health', 0);
VALUES (0, 2, 0, '2014-01-01', 'Rx + OD', 0);
VALUES (0, 2, 1, '2014-01-01', 'Rx + OD + Jail', 0);
VALUES (0, 2, 2, '2014-01-01', 'Rx + OD + Jail + Health', 0);
VALUES (0, 2, 3, '2014-01-01', 'Rx + OD + Health', 0);
VALUES (0, 3, 0, '2014-01-01', 'Rx', 0);
VALUES (0, 3, 1, '2014-01-01', 'Rx + Jail', 0);
VALUES (0, 3, 2, '2014-01-01', 'Rx + Jail + Health', 0);
VALUES (0, 3, 3, '2014-01-01', 'Rx + Health', 0);

VALUES (0, 0, 0, '2014-04-01', '∅', 0);
VALUES (0, 0, 1, '2014-04-01', 'Jail', 0);
VALUES (0, 0, 2, '2014-04-01', 'Jail + Health', 0);
VALUES (0, 0, 3, '2014-04-01', 'Health', 0);
VALUES (0, 1, 0, '2014-04-01', 'OD', 0);
VALUES (0, 1, 1, '2014-04-01', 'OD + Jail', 0);
VALUES (0, 1, 2, '2014-04-01', 'OD + Jail + Health', 0);
VALUES (0, 1, 3, '2014-04-01', 'OD + Health', 0);
VALUES (0, 2, 0, '2014-04-01', 'Rx + OD', 0);
VALUES (0, 2, 1, '2014-04-01', 'Rx + OD + Jail', 0);
VALUES (0, 2, 2, '2014-04-01', 'Rx + OD + Jail + Health', 0);
VALUES (0, 2, 3, '2014-04-01', 'Rx + OD + Health', 0);
VALUES (0, 3, 0, '2014-04-01', 'Rx', 0);
VALUES (0, 3, 1, '2014-04-01', 'Rx + Jail', 0);
VALUES (0, 3, 2, '2014-04-01', 'Rx + Jail + Health', 0);
VALUES (0, 3, 3, '2014-04-01', 'Rx + Health', 0);

VALUES (0, 0, 0, '2014-07-01', '∅', 0);
VALUES (0, 0, 1, '2014-07-01', 'Jail', 0);
VALUES (0, 0, 2, '2014-07-01', 'Jail + Health', 0);
VALUES (0, 0, 3, '2014-07-01', 'Health', 0);
VALUES (0, 1, 0, '2014-07-01', 'OD', 0);
VALUES (0, 1, 1, '2014-07-01', 'OD + Jail', 0);
VALUES (0, 1, 2, '2014-07-01', 'OD + Jail + Health', 0);
VALUES (0, 1, 3, '2014-07-01', 'OD + Health', 0);
VALUES (0, 2, 0, '2014-07-01', 'Rx + OD', 0);
VALUES (0, 2, 1, '2014-07-01', 'Rx + OD + Jail', 0);
VALUES (0, 2, 2, '2014-07-01', 'Rx + OD + Jail + Health', 0);
VALUES (0, 2, 3, '2014-07-01', 'Rx + OD + Health', 0);
VALUES (0, 3, 0, '2014-07-01', 'Rx', 0);
VALUES (0, 3, 1, '2014-07-01', 'Rx + Jail', 0);
VALUES (0, 3, 2, '2014-07-01', 'Rx + Jail + Health', 0);
VALUES (0, 3, 3, '2014-07-01', 'Rx + Health', 0);

VALUES (0, 0, 0, '2014-10-01', '∅', 0);
VALUES (0, 0, 1, '2014-10-01', 'Jail', 0);
VALUES (0, 0, 2, '2014-10-01', 'Jail + Health', 0);
VALUES (0, 0, 3, '2014-10-01', 'Health', 0);
VALUES (0, 1, 0, '2014-10-01', 'OD', 0);
VALUES (0, 1, 1, '2014-10-01', 'OD + Jail', 0);
VALUES (0, 1, 2, '2014-10-01', 'OD + Jail + Health', 0);
VALUES (0, 1, 3, '2014-10-01', 'OD + Health', 0);
VALUES (0, 2, 0, '2014-10-01', 'Rx + OD', 0);
VALUES (0, 2, 1, '2014-10-01', 'Rx + OD + Jail', 0);
VALUES (0, 2, 2, '2014-10-01', 'Rx + OD + Jail + Health', 0);
VALUES (0, 2, 3, '2014-10-01', 'Rx + OD + Health', 0);
VALUES (0, 3, 0, '2014-10-01', 'Rx', 0);
VALUES (0, 3, 1, '2014-10-01', 'Rx + Jail', 0);
VALUES (0, 3, 2, '2014-10-01', 'Rx + Jail + Health', 0);
VALUES (0, 3, 3, '2014-10-01', 'Rx + Health', 0);

VALUES (0, 0, 0, '2015-01-01', '∅', 0);
VALUES (0, 0, 1, '2015-01-01', 'Jail', 0);
VALUES (0, 0, 2, '2015-01-01', 'Jail + Health', 0);
VALUES (0, 0, 3, '2015-01-01', 'Health', 0);
VALUES (0, 1, 0, '2015-01-01', 'OD', 0);
VALUES (0, 1, 1, '2015-01-01', 'OD + Jail', 0);
VALUES (0, 1, 2, '2015-01-01', 'OD + Jail + Health', 0);
VALUES (0, 1, 3, '2015-01-01', 'OD + Health', 0);
VALUES (0, 2, 0, '2015-01-01', 'Rx + OD', 0);
VALUES (0, 2, 1, '2015-01-01', 'Rx + OD + Jail', 0);
VALUES (0, 2, 2, '2015-01-01', 'Rx + OD + Jail + Health', 0);
VALUES (0, 2, 3, '2015-01-01', 'Rx + OD + Health', 0);
VALUES (0, 3, 0, '2015-01-01', 'Rx', 0);
VALUES (0, 3, 1, '2015-01-01', 'Rx + Jail', 0);
VALUES (0, 3, 2, '2015-01-01', 'Rx + Jail + Health', 0);
VALUES (0, 3, 3, '2015-01-01', 'Rx + Health', 0);

VALUES (0, 0, 0, '2015-04-01', '∅', 0);
VALUES (0, 0, 1, '2015-04-01', 'Jail', 0);
VALUES (0, 0, 2, '2015-04-01', 'Jail + Health', 0);
VALUES (0, 0, 3, '2015-04-01', 'Health', 0);
VALUES (0, 1, 0, '2015-04-01', 'OD', 0);
VALUES (0, 1, 1, '2015-04-01', 'OD + Jail', 0);
VALUES (0, 1, 2, '2015-04-01', 'OD + Jail + Health', 0);
VALUES (0, 1, 3, '2015-04-01', 'OD + Health', 0);
VALUES (0, 2, 0, '2015-04-01', 'Rx + OD', 0);
VALUES (0, 2, 1, '2015-04-01', 'Rx + OD + Jail', 0);
VALUES (0, 2, 2, '2015-04-01', 'Rx + OD + Jail + Health', 0);
VALUES (0, 2, 3, '2015-04-01', 'Rx + OD + Health', 0);
VALUES (0, 3, 0, '2015-04-01', 'Rx', 0);
VALUES (0, 3, 1, '2015-04-01', 'Rx + Jail', 0);
VALUES (0, 3, 2, '2015-04-01', 'Rx + Jail + Health', 0);
VALUES (0, 3, 3, '2015-04-01', 'Rx + Health', 0);

VALUES (0, 0, 0, '2015-07-01', '∅', 0);
VALUES (0, 0, 1, '2015-07-01', 'Jail', 0);
VALUES (0, 0, 2, '2015-07-01', 'Jail + Health', 0);
VALUES (0, 0, 3, '2015-07-01', 'Health', 0);
VALUES (0, 1, 0, '2015-07-01', 'OD', 0);
VALUES (0, 1, 1, '2015-07-01', 'OD + Jail', 0);
VALUES (0, 1, 2, '2015-07-01', 'OD + Jail + Health', 0);
VALUES (0, 1, 3, '2015-07-01', 'OD + Health', 0);
VALUES (0, 2, 0, '2015-07-01', 'Rx + OD', 0);
VALUES (0, 2, 1, '2015-07-01', 'Rx + OD + Jail', 0);
VALUES (0, 2, 2, '2015-07-01', 'Rx + OD + Jail + Health', 0);
VALUES (0, 2, 3, '2015-07-01', 'Rx + OD + Health', 0);
VALUES (0, 3, 0, '2015-07-01', 'Rx', 0);
VALUES (0, 3, 1, '2015-07-01', 'Rx + Jail', 0);
VALUES (0, 3, 2, '2015-07-01', 'Rx + Jail + Health', 0);
VALUES (0, 3, 3, '2015-07-01', 'Rx + Health', 0);

VALUES (0, 0, 0, '2015-10-01', '∅', 0);
VALUES (0, 0, 1, '2015-10-01', 'Jail', 0);
VALUES (0, 0, 2, '2015-10-01', 'Jail + Health', 0);
VALUES (0, 0, 3, '2015-10-01', 'Health', 0);
VALUES (0, 1, 0, '2015-10-01', 'OD', 0);
VALUES (0, 1, 1, '2015-10-01', 'OD + Jail', 0);
VALUES (0, 1, 2, '2015-10-01', 'OD + Jail + Health', 0);
VALUES (0, 1, 3, '2015-10-01', 'OD + Health', 0);
VALUES (0, 2, 0, '2015-10-01', 'Rx + OD', 0);
VALUES (0, 2, 1, '2015-10-01', 'Rx + OD + Jail', 0);
VALUES (0, 2, 2, '2015-10-01', 'Rx + OD + Jail + Health', 0);
VALUES (0, 2, 3, '2015-10-01', 'Rx + OD + Health', 0);
VALUES (0, 3, 0, '2015-10-01', 'Rx', 0);
VALUES (0, 3, 1, '2015-10-01', 'Rx + Jail', 0);
VALUES (0, 3, 2, '2015-10-01', 'Rx + Jail + Health', 0);
VALUES (0, 3, 3, '2015-10-01', 'Rx + Health', 0);

VALUES (0, 0, 0, '2016-01-01', '∅', 0);
VALUES (0, 0, 1, '2016-01-01', 'Jail', 0);
VALUES (0, 0, 2, '2016-01-01', 'Jail + Health', 0);
VALUES (0, 0, 3, '2016-01-01', 'Health', 0);
VALUES (0, 1, 0, '2016-01-01', 'OD', 0);
VALUES (0, 1, 1, '2016-01-01', 'OD + Jail', 0);
VALUES (0, 1, 2, '2016-01-01', 'OD + Jail + Health', 0);
VALUES (0, 1, 3, '2016-01-01', 'OD + Health', 0);
VALUES (0, 2, 0, '2016-01-01', 'Rx + OD', 0);
VALUES (0, 2, 1, '2016-01-01', 'Rx + OD + Jail', 0);
VALUES (0, 2, 2, '2016-01-01', 'Rx + OD + Jail + Health', 0);
VALUES (0, 2, 3, '2016-01-01', 'Rx + OD + Health', 0);
VALUES (0, 3, 0, '2016-01-01', 'Rx', 0);
VALUES (0, 3, 1, '2016-01-01', 'Rx + Jail', 0);
VALUES (0, 3, 2, '2016-01-01', 'Rx + Jail + Health', 0);
VALUES (0, 3, 3, '2016-01-01', 'Rx + Health', 0);

VALUES (0, 0, 0, '2016-04-01', '∅', 0);
VALUES (0, 0, 1, '2016-04-01', 'Jail', 0);
VALUES (0, 0, 2, '2016-04-01', 'Jail + Health', 0);
VALUES (0, 0, 3, '2016-04-01', 'Health', 0);
VALUES (0, 1, 0, '2016-04-01', 'OD', 0);
VALUES (0, 1, 1, '2016-04-01', 'OD + Jail', 0);
VALUES (0, 1, 2, '2016-04-01', 'OD + Jail + Health', 0);
VALUES (0, 1, 3, '2016-04-01', 'OD + Health', 0);
VALUES (0, 2, 0, '2016-04-01', 'Rx + OD', 0);
VALUES (0, 2, 1, '2016-04-01', 'Rx + OD + Jail', 0);
VALUES (0, 2, 2, '2016-04-01', 'Rx + OD + Jail + Health', 0);
VALUES (0, 2, 3, '2016-04-01', 'Rx + OD + Health', 0);
VALUES (0, 3, 0, '2016-04-01', 'Rx', 0);
VALUES (0, 3, 1, '2016-04-01', 'Rx + Jail', 0);
VALUES (0, 3, 2, '2016-04-01', 'Rx + Jail + Health', 0);
VALUES (0, 3, 3, '2016-04-01', 'Rx + Health', 0);

VALUES (0, 0, 0, '2016-07-01', '∅', 0);
VALUES (0, 0, 1, '2016-07-01', 'Jail', 0);
VALUES (0, 0, 2, '2016-07-01', 'Jail + Health', 0);
VALUES (0, 0, 3, '2016-07-01', 'Health', 0);
VALUES (0, 1, 0, '2016-07-01', 'OD', 0);
VALUES (0, 1, 1, '2016-07-01', 'OD + Jail', 0);
VALUES (0, 1, 2, '2016-07-01', 'OD + Jail + Health', 0);
VALUES (0, 1, 3, '2016-07-01', 'OD + Health', 0);
VALUES (0, 2, 0, '2016-07-01', 'Rx + OD', 0);
VALUES (0, 2, 1, '2016-07-01', 'Rx + OD + Jail', 0);
VALUES (0, 2, 2, '2016-07-01', 'Rx + OD + Jail + Health', 0);
VALUES (0, 2, 3, '2016-07-01', 'Rx + OD + Health', 0);
VALUES (0, 3, 0, '2016-07-01', 'Rx', 0);
VALUES (0, 3, 1, '2016-07-01', 'Rx + Jail', 0);
VALUES (0, 3, 2, '2016-07-01', 'Rx + Jail + Health', 0);
VALUES (0, 3, 3, '2016-07-01', 'Rx + Health', 0);

VALUES (0, 0, 0, '2016-10-01', '∅', 0);
VALUES (0, 0, 1, '2016-10-01', 'Jail', 0);
VALUES (0, 0, 2, '2016-10-01', 'Jail + Health', 0);
VALUES (0, 0, 3, '2016-10-01', 'Health', 0);
VALUES (0, 1, 0, '2016-10-01', 'OD', 0);
VALUES (0, 1, 1, '2016-10-01', 'OD + Jail', 0);
VALUES (0, 1, 2, '2016-10-01', 'OD + Jail + Health', 0);
VALUES (0, 1, 3, '2016-10-01', 'OD + Health', 0);
VALUES (0, 2, 0, '2016-10-01', 'Rx + OD', 0);
VALUES (0, 2, 1, '2016-10-01', 'Rx + OD + Jail', 0);
VALUES (0, 2, 2, '2016-10-01', 'Rx + OD + Jail + Health', 0);
VALUES (0, 2, 3, '2016-10-01', 'Rx + OD + Health', 0);
VALUES (0, 3, 0, '2016-10-01', 'Rx', 0);
VALUES (0, 3, 1, '2016-10-01', 'Rx + Jail', 0);
VALUES (0, 3, 2, '2016-10-01', 'Rx + Jail + Health', 0);
VALUES (0, 3, 3, '2016-10-01', 'Rx + Health', 0);

VALUES (0, 0, 0, '2017-01-01', '∅', 0);
VALUES (0, 0, 1, '2017-01-01', 'Jail', 0);
VALUES (0, 0, 2, '2017-01-01', 'Jail + Health', 0);
VALUES (0, 0, 3, '2017-01-01', 'Health', 0);
VALUES (0, 1, 0, '2017-01-01', 'OD', 0);
VALUES (0, 1, 1, '2017-01-01', 'OD + Jail', 0);
VALUES (0, 1, 2, '2017-01-01', 'OD + Jail + Health', 0);
VALUES (0, 1, 3, '2017-01-01', 'OD + Health', 0);
VALUES (0, 2, 0, '2017-01-01', 'Rx + OD', 0);
VALUES (0, 2, 1, '2017-01-01', 'Rx + OD + Jail', 0);
VALUES (0, 2, 2, '2017-01-01', 'Rx + OD + Jail + Health', 0);
VALUES (0, 2, 3, '2017-01-01', 'Rx + OD + Health', 0);
VALUES (0, 3, 0, '2017-01-01', 'Rx', 0);
VALUES (0, 3, 1, '2017-01-01', 'Rx + Jail', 0);
VALUES (0, 3, 2, '2017-01-01', 'Rx + Jail + Health', 0);
VALUES (0, 3, 3, '2017-01-01', 'Rx + Health', 0);

VALUES (0, 0, 0, '2017-04-01', '∅', 0);
VALUES (0, 0, 1, '2017-04-01', 'Jail', 0);
VALUES (0, 0, 2, '2017-04-01', 'Jail + Health', 0);
VALUES (0, 0, 3, '2017-04-01', 'Health', 0);
VALUES (0, 1, 0, '2017-04-01', 'OD', 0);
VALUES (0, 1, 1, '2017-04-01', 'OD + Jail', 0);
VALUES (0, 1, 2, '2017-04-01', 'OD + Jail + Health', 0);
VALUES (0, 1, 3, '2017-04-01', 'OD + Health', 0);
VALUES (0, 2, 0, '2017-04-01', 'Rx + OD', 0);
VALUES (0, 2, 1, '2017-04-01', 'Rx + OD + Jail', 0);
VALUES (0, 2, 2, '2017-04-01', 'Rx + OD + Jail + Health', 0);
VALUES (0, 2, 3, '2017-04-01', 'Rx + OD + Health', 0);
VALUES (0, 3, 0, '2017-04-01', 'Rx', 0);
VALUES (0, 3, 1, '2017-04-01', 'Rx + Jail', 0);
VALUES (0, 3, 2, '2017-04-01', 'Rx + Jail + Health', 0);
VALUES (0, 3, 3, '2017-04-01', 'Rx + Health', 0);

VALUES (0, 0, 0, '2017-07-01', '∅', 0);
VALUES (0, 0, 1, '2017-07-01', 'Jail', 0);
VALUES (0, 0, 2, '2017-07-01', 'Jail + Health', 0);
VALUES (0, 0, 3, '2017-07-01', 'Health', 0);
VALUES (0, 1, 0, '2017-07-01', 'OD', 0);
VALUES (0, 1, 1, '2017-07-01', 'OD + Jail', 0);
VALUES (0, 1, 2, '2017-07-01', 'OD + Jail + Health', 0);
VALUES (0, 1, 3, '2017-07-01', 'OD + Health', 0);
VALUES (0, 2, 0, '2017-07-01', 'Rx + OD', 0);
VALUES (0, 2, 1, '2017-07-01', 'Rx + OD + Jail', 0);
VALUES (0, 2, 2, '2017-07-01', 'Rx + OD + Jail + Health', 0);
VALUES (0, 2, 3, '2017-07-01', 'Rx + OD + Health', 0);
VALUES (0, 3, 0, '2017-07-01', 'Rx', 0);
VALUES (0, 3, 1, '2017-07-01', 'Rx + Jail', 0);
VALUES (0, 3, 2, '2017-07-01', 'Rx + Jail + Health', 0);
VALUES (0, 3, 3, '2017-07-01', 'Rx + Health', 0);

VALUES (0, 0, 0, '2017-10-01', '∅', 0);
VALUES (0, 0, 1, '2017-10-01', 'Jail', 0);
VALUES (0, 0, 2, '2017-10-01', 'Jail + Health', 0);
VALUES (0, 0, 3, '2017-10-01', 'Health', 0);
VALUES (0, 1, 0, '2017-10-01', 'OD', 0);
VALUES (0, 1, 1, '2017-10-01', 'OD + Jail', 0);
VALUES (0, 1, 2, '2017-10-01', 'OD + Jail + Health', 0);
VALUES (0, 1, 3, '2017-10-01', 'OD + Health', 0);
VALUES (0, 2, 0, '2017-10-01', 'Rx + OD', 0);
VALUES (0, 2, 1, '2017-10-01', 'Rx + OD + Jail', 0);
VALUES (0, 2, 2, '2017-10-01', 'Rx + OD + Jail + Health', 0);
VALUES (0, 2, 3, '2017-10-01', 'Rx + OD + Health', 0);
VALUES (0, 3, 0, '2017-10-01', 'Rx', 0);
VALUES (0, 3, 1, '2017-10-01', 'Rx + Jail', 0);
VALUES (0, 3, 2, '2017-10-01', 'Rx + Jail + Health', 0);
VALUES (0, 3, 3, '2017-10-01', 'Rx + Health', 0);

VALUES (0, 0, 0, '2018-01-01', '∅', 0);
VALUES (0, 0, 1, '2018-01-01', 'Jail', 0);
VALUES (0, 0, 2, '2018-01-01', 'Jail + Health', 0);
VALUES (0, 0, 3, '2018-01-01', 'Health', 0);
VALUES (0, 1, 0, '2018-01-01', 'OD', 0);
VALUES (0, 1, 1, '2018-01-01', 'OD + Jail', 0);
VALUES (0, 1, 2, '2018-01-01', 'OD + Jail + Health', 0);
VALUES (0, 1, 3, '2018-01-01', 'OD + Health', 0);
VALUES (0, 2, 0, '2018-01-01', 'Rx + OD', 0);
VALUES (0, 2, 1, '2018-01-01', 'Rx + OD + Jail', 0);
VALUES (0, 2, 2, '2018-01-01', 'Rx + OD + Jail + Health', 0);
VALUES (0, 2, 3, '2018-01-01', 'Rx + OD + Health', 0);
VALUES (0, 3, 0, '2018-01-01', 'Rx', 0);
VALUES (0, 3, 1, '2018-01-01', 'Rx + Jail', 0);
VALUES (0, 3, 2, '2018-01-01', 'Rx + Jail + Health', 0);
VALUES (0, 3, 3, '2018-01-01', 'Rx + Health', 0);

VALUES (0, 0, 0, '2018-04-01', '∅', 0);
VALUES (0, 0, 1, '2018-04-01', 'Jail', 0);
VALUES (0, 0, 2, '2018-04-01', 'Jail + Health', 0);
VALUES (0, 0, 3, '2018-04-01', 'Health', 0);
VALUES (0, 1, 0, '2018-04-01', 'OD', 0);
VALUES (0, 1, 1, '2018-04-01', 'OD + Jail', 0);
VALUES (0, 1, 2, '2018-04-01', 'OD + Jail + Health', 0);
VALUES (0, 1, 3, '2018-04-01', 'OD + Health', 0);
VALUES (0, 2, 0, '2018-04-01', 'Rx + OD', 0);
VALUES (0, 2, 1, '2018-04-01', 'Rx + OD + Jail', 0);
VALUES (0, 2, 2, '2018-04-01', 'Rx + OD + Jail + Health', 0);
VALUES (0, 2, 3, '2018-04-01', 'Rx + OD + Health', 0);
VALUES (0, 3, 0, '2018-04-01', 'Rx', 0);
VALUES (0, 3, 1, '2018-04-01', 'Rx + Jail', 0);
VALUES (0, 3, 2, '2018-04-01', 'Rx + Jail + Health', 0);
VALUES (0, 3, 3, '2018-04-01', 'Rx + Health', 0);

VALUES (0, 0, 0, '2018-07-01', '∅', 0);
VALUES (0, 0, 1, '2018-07-01', 'Jail', 0);
VALUES (0, 0, 2, '2018-07-01', 'Jail + Health', 0);
VALUES (0, 0, 3, '2018-07-01', 'Health', 0);
VALUES (0, 1, 0, '2018-07-01', 'OD', 0);
VALUES (0, 1, 1, '2018-07-01', 'OD + Jail', 0);
VALUES (0, 1, 2, '2018-07-01', 'OD + Jail + Health', 0);
VALUES (0, 1, 3, '2018-07-01', 'OD + Health', 0);
VALUES (0, 2, 0, '2018-07-01', 'Rx + OD', 0);
VALUES (0, 2, 1, '2018-07-01', 'Rx + OD + Jail', 0);
VALUES (0, 2, 2, '2018-07-01', 'Rx + OD + Jail + Health', 0);
VALUES (0, 2, 3, '2018-07-01', 'Rx + OD + Health', 0);
VALUES (0, 3, 0, '2018-07-01', 'Rx', 0);
VALUES (0, 3, 1, '2018-07-01', 'Rx + Jail', 0);
VALUES (0, 3, 2, '2018-07-01', 'Rx + Jail + Health', 0);
VALUES (0, 3, 3, '2018-07-01', 'Rx + Health', 0);

VALUES (0, 0, 0, '2018-10-01', '∅', 0);
VALUES (0, 0, 1, '2018-10-01', 'Jail', 0);
VALUES (0, 0, 2, '2018-10-01', 'Jail + Health', 0);
VALUES (0, 0, 3, '2018-10-01', 'Health', 0);
VALUES (0, 1, 0, '2018-10-01', 'OD', 0);
VALUES (0, 1, 1, '2018-10-01', 'OD + Jail', 0);
VALUES (0, 1, 2, '2018-10-01', 'OD + Jail + Health', 0);
VALUES (0, 1, 3, '2018-10-01', 'OD + Health', 0);
VALUES (0, 2, 0, '2018-10-01', 'Rx + OD', 0);
VALUES (0, 2, 1, '2018-10-01', 'Rx + OD + Jail', 0);
VALUES (0, 2, 2, '2018-10-01', 'Rx + OD + Jail + Health', 0);
VALUES (0, 2, 3, '2018-10-01', 'Rx + OD + Health', 0);
VALUES (0, 3, 0, '2018-10-01', 'Rx', 0);
VALUES (0, 3, 1, '2018-10-01', 'Rx + Jail', 0);
VALUES (0, 3, 2, '2018-10-01', 'Rx + Jail + Health', 0);
VALUES (0, 3, 3, '2018-10-01', 'Rx + Health', 0);