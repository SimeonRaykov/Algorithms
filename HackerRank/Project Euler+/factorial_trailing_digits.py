import math 


def factorial_trailing_digits(n, base):
   def remove_zereos(number):
     return int(str(number).rstrip('0'))

   curr_factorial = math.factorial(n)
   remove_trailing_zeroes = remove_zereos(curr_factorial)
   remove_n_chars = 0
   if base < len(str(remove_trailing_zeroes)):
    remove_n_chars = base - len(str(remove_trailing_zeroes))
   transform_to_base = str(remove_trailing_zeroes)[remove_n_chars:]
   print(transform_to_base)
   #if len(str(remove_zereos)) > base:
       

factorial_trailing_digits(10,10)
factorial_trailing_digits(9, 10)
factorial_trailing_digits(20, 10)