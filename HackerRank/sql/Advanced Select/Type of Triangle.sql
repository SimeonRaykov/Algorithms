SELECT case
when A = B AND A = C AND B = C then 'Equilateral'
when A + C <= B OR A + B <= C OR C + B <= A THEN 'Not A Triangle'
when A = B  OR A = C OR B = C THEN 'Isosceles'
ELSE 'Scalene'
END 
FROM triangles