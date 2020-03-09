SELECT city.name
FROM city
INNER JOIN country ON  country.code = city.countrycode
WHERE continent = 'Africa'