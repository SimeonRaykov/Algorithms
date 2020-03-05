def grade_students(grades):
    def round_student_grades(n):
     if n < 38:
         return n
     elif (n + 1) % 5 == 0:
         return n + 1
     elif (n + 2) % 5 == 0:
         return n + 2    
     else:
         return n
    return list(map(round_student_grades, (grades)))

print(grade_students(list([73,67,38,33])))
