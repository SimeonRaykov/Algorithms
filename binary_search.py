def binary_search(sequence, value):
    low, high = 0, len(sequence) - 1
    while low <= high:
        mid = (low + high)
        if sequence[mid] < value:
            low = mid + 1
        elif value < sequence[mid]:
            high = mid - 1
        else:
            return mid
    return -1


test_list = [1, 3, 9, 11, 14, 15, 15, 19, 29, 31, 555, 23123, 1412421]
test_val1 = 25
test_val2 = 1412421
print(binary_search(test_list, test_val1))
print(binary_search(test_list, test_val2))
binary_search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1)
