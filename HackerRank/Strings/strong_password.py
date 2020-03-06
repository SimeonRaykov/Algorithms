import re


def minimum_number(n,password):
   minimum_number = 0
   required = 0
 #  numbers = "0123456789"
 #  lower_case = "abcdefghijklmnopqrstuvwxyz"
 #  upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
 #  special_characters = "!@#$%^&*()-+"

   if not re.search('[0-9]',password):
       minimum_number += 1
   if not re.search('[a-z]',password):
       minimum_number += 1
   if not re.search('[A-Z]',password):
       minimum_number += 1
   if not re.search('[!@#$%^&*()\-+]',password):
       minimum_number += 1
   required += minimum_number + n

   if required < 6:
      required += 6 - required
     #  print(required)
     #  print(minimum_number)
   return required - n


print(minimum_number(11,'#Hackerrank'))
print(minimum_number(3,'Ab1'))
print(minimum_number(7,'AUzs-nV'))