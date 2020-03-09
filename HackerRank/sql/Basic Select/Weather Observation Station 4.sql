SELECT ABS(COUNT(DISTINCT station.city) - COUNT(station.city))
FROM station