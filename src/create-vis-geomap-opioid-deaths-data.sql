SELECT
    -- Data Variables
    d.CASE_NUMBER,
    d.SEX,
    d.HOME_STATE,
    r.N_OPIOID_PRESCRIPTIONS,
    l.LATITUDE,
    l.LONGITUDE,

    -- Graphic Variables
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
