def recursive_digit_sum(n, k):
    def repeat_to_length(s, wanted):
     return s * wanted

    def sum_digits(n):
     r = 0
     while n:
         r, n = r + n % 10, n // 10
     return r
    
    p = repeat_to_length(n, k)
    while len(str(p)) != 1:
        p = sum_digits(int(p))
    return p

print(recursive_digit_sum(148,3))
print(recursive_digit_sum(123,3))
print(recursive_digit_sum(861568688536788, 100000))