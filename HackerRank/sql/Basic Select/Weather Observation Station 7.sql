SELECT DISTINCT station.city FROM station
WHERE city REGEXP '%*[aeiou]$'