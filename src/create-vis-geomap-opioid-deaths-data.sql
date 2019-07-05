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
    CASE WHEN d.HOME_STATE = 'IN' THEN '#bebebe'
        ELSE 'black' END AS 'HOME_STATE$$color',
    CASE WHEN d.HOME_STATE = 'IN' THEN 'circle'
        ELSE 'triangle' END AS 'HOME_STATE$$shape',
    d.INJURY_ZIP,
    r.N_OPIOID_PRESCRIPTIONS,
    (CAST(r.N_OPIOID_PRESCRIPTIONS AS real) / (SELECT max(N_OPIOID_PRESCRIPTIONS) FROM rollup1) * 50) + 50 AS 'N_OPIOID_PRESCRIPTIONS$$areaSize',
    l.LATITUDE,
    l.LONGITUDE,
    'Fixed values for visualization' AS 'Fixed',
    '#bebebe' AS 'Fixed$$color',
    1 AS 'Fixed$$strokeWidth',
    0.4 AS 'Fixed$$strokeTransparency'
FROM deaths as d
    INNER JOIN rollup1 as r ON d.CASE_NUMBER = r.CASE_NUMBER
    INNER JOIN locations as l ON d.INJURY_ADDRESS = l.ADDRESS and d.INJURY_CITY = l.CITY and d.INJURY_ZIP = l.ZIP
ORDER BY d.CASE_NUMBER ASC;