def left_rotation(i, n):
    return i[n:] + i[:n]

print(rotate([1, 2, 3, 4, 5], 4))
