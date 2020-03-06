def find_the_median(arr):
    sorted_arr = sorted(arr)
    return sorted_arr[int(len(arr)/2)]

print(find_the_median([0, 1, 2, 4, 6, 5, 3]))