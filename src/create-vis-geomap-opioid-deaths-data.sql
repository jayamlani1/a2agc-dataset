SELECT DISTINCT
    d.CASE_NUMBER,
    d.LAST_NAME,
    d.FIRST_NAME,
    d.SEX,
    CASE WHEN d.SEX = 'M' THEN 'blue'
        WHEN d.SEX = 'F' THEN 'pink'
        ELSE 'black' END AS 'SEX$$color',
    d.HOME_ZIP,
    d.HOME_STATE,
    CASE WHEN d.HOME_STATE = 'IN' THEN 'orange'
        ELSE 'red' END AS 'HOME_STATE$$color',
    d.INJURY_ZIP,
    r.N_OPIOID_PRESCRIPTIONS,
    (CAST(r.N_OPIOID_PRESCRIPTIONS AS real) / (SELECT max(N_OPIOID_PRESCRIPTIONS) FROM rollup1) * 50) + 50 AS 'N_OPIOID_PRESCRIPTIONS$$areaSize',
    l.LATITUDE,
    l.LONGITUDE,
    1 AS 'strokeWidth'
FROM deaths as d
    INNER JOIN rollup1 as r ON d.CASE_NUMBER = r.CASE_NUMBER
    INNER JOIN locations as l ON d.INJURY_ADDRESS = l.ADDRESS and d.INJURY_CITY = l.CITY and d.INJURY_ZIP = l.ZIP
ORDER BY d.CASE_NUMBER ASC;