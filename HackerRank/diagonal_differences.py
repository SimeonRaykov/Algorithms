def diagonal_differences(matrix):
    sum_left_diagonal = 0
    for row in range(len(matrix)):
        col = len(matrix) - row - 1
        sum_left_diagonal += matrix[row][col]

    sum_right_diagonal = 0
    for row in range(len(matrix)-1, -1, -1):
        col = row
        sum_right_diagonal += matrix[row][col]

    return abs(sum_left_diagonal - sum_right_diagonal)


diagonal_differences([[98, 51, 99], [1, 24, 3], [25, 187, 88]])
