CREATE TEMPORARY TABLE "ALL_AGGREGATES" AS
SELECT
    -- Data Variables
    d.CASE_NUMBER,
    d.SEX,
    d.HOME_STATE,
    d.AGE,
    d.DOD,
    d.ANY_HEROIN,
    d.ANY_COCAINE,
    d.FENTANYL,
    d.ANY_METHAMPHETAMINE,
    r.N_OPIOID_PRESCRIPTIONS,
    r.HYDROMORPHONE_1YEAR,
    r.MORPHINE_1YEAR,
    r.OXYMORPHONE_1YEAR,
    r.OXYCODONE_1YEAR,
    r.FENTANYL_1YEAR,
    r.ANTIANXIETY_1YEAR,
    r.ANTIDEPRESSANT_1YEAR,
    r.BENZODIAZEPINE_1YEAR,
    r.HYPNOTIC_1YEAR,
    r.OTHER_OPIOID_1YEAR,
    r.N_PRESCRIPTIONS,
    l.LATITUDE,
    l.LONGITUDE,

    -- Graphic Variables
    CASE
        WHEN d.ANY_HEROIN THEN 'true'
        WHEN d.ANY_COCAINE THEN 'true'
        WHEN d.FENTANYL THEN 'true'
        WHEN d.ANY_METHAMPHETAMINE THEN 'true'
        ELSE 'false'
    END AS 'ANY_ILLICIT',
    ---- Any Prescriptions?
    CASE
        WHEN r.N_PRESCRIPTIONS > 0 THEN 'true'
        ELSE 'false'
    END AS 'ANY_PRESCRIPTIONS',
    ---- Any Opiod Prescription in last year
    CASE
        WHEN r.HYDROMORPHONE_1YEAR THEN 'true'
        WHEN r.MORPHINE_1YEAR THEN 'true'
        WHEN r.OXYMORPHONE_1YEAR THEN 'true'
        WHEN r.OXYCODONE_1YEAR THEN 'true'
        WHEN r.FENTANYL_1YEAR THEN 'true'
        WHEN r.ANTIANXIETY_1YEAR THEN 'true'
        WHEN r.ANTIDEPRESSANT_1YEAR THEN 'true'
        WHEN r.BENZODIAZEPINE_1YEAR THEN 'true'
        WHEN r.HYPNOTIC_1YEAR THEN 'true'
        WHEN r.OTHER_OPIOID_1YEAR THEN 'true'
        ELSE 'false'
    END AS 'OPIOD_PRESCRIPTIONS_1YEAR',
    ---- Color coding by SEX
    CASE
        WHEN d.SEX = 'M' THEN 'blue'
        WHEN d.SEX = 'F' THEN 'pink'
    ELSE 'black' END AS 'SEX$$color',
    ---- Color coding by HOME_STATE
    CASE
        WHEN d.HOME_STATE = 'IN' THEN '#bebebe'
        ELSE 'black'
    END AS 'HOME_STATE$$color',
    ---- Shape coding by HOME_STATE
    CASE
        WHEN d.HOME_STATE = 'IN' THEN 'circle'
        ELSE 'triangle'
    END AS 'HOME_STATE$$shape',
    ---- Size coding by N_OPIOID_PRESCRIPTIONS
    (CAST(r.N_OPIOID_PRESCRIPTIONS AS real) / (SELECT max(N_OPIOID_PRESCRIPTIONS) FROM rollup1) * 500) + 25 AS 'N_OPIOID_PRESCRIPTIONS$$areaSize',

    ---- Fixed-value Graphic Variables
    'Fixed values for visualization' AS 'Fixed',
    '#bebebe' AS 'Fixed$$color',
    1 AS 'Fixed$$strokeWidth',
    0.4 AS 'Fixed$$strokeTransparency',
    0.2 AS 'Fixed$$transparency'
FROM
    deaths as d
    -- Join rollup1 for N_OPIOID_PRESCRIPTIONS
    INNER JOIN rollup1 as r ON d.CASE_NUMBER = r.CASE_NUMBER
    -- Join locations to get latitude/longitude of INJURY_ADDRESSes
    INNER JOIN locations as l ON d.INJURY_ADDRESS = l.ADDRESS and d.INJURY_CITY = l.CITY and d.INJURY_ZIP = l.ZIP
WHERE l.LATITUDE BETWEEN 37.77191769456694 AND 41.7605318
    AND l.LONGITUDE BETWEEN -88.09054069310693 AND -84.79556880758807
ORDER BY d.CASE_NUMBER ASC;

SELECT * FROM (
    SELECT CASE_NUMBER, LATITUDE, LONGITUDE, DOD AS PERIOD, "HOME_STATE$$shape", "N_OPIOID_PRESCRIPTIONS",
        'SEX' AS "DATA_VARIABLE", SEX AS "VALUE", "SEX$$color" AS "COLOR"
    FROM "ALL_AGGREGATES"
    UNION ALL
    SELECT CASE_NUMBER, LATITUDE, LONGITUDE, DOD AS PERIOD, "HOME_STATE$$shape", "N_OPIOID_PRESCRIPTIONS",
        'AGE' AS "DATA_VARIABLE", AGE AS "VALUE", "AGE$$color" AS "COLOR"
    FROM "ALL_AGGREGATES"
    UNION ALL
    SELECT CASE_NUMBER, LATITUDE, LONGITUDE, DOD AS PERIOD, "HOME_STATE$$shape", "N_OPIOID_PRESCRIPTIONS",
        'OPIOID_PRESCRIPTIONS_1YEAR' AS "DATA_VARIABLE", OPIOD_PRESCRIPTIONS_1YEAR AS "VALUE", "OPIOD_PRESCRIPTIONS_1YEAR$$color" AS "COLOR"
    FROM "ALL_AGGREGATES"
) AS A;
