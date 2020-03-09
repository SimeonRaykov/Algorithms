SELECT (CASE WHEN grades.grade<8 THEN 'NULL' ELSE students.name END), grades.grade, students.marks
FROM students
INNER JOIN grades ON (students.marks>=grades.min_mark and students.marks<=grades.max_mark)
ORDER BY grades.grade DESC, students.name