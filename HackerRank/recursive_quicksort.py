def partition(array):
    pivot = array[-1]
    m = 0

    for i in range(len(array) - 1):
        if array[i] < pivot:
            array[i], array[m] = array[m], array[i]
            m += 1

        else:
            continue

    array[m], array[len(array)-1] = array[len(array)-1], array[m]

    return m

def quicksort(array):
    if len(array) > 1:
        m = partition(array)

        # return the concatenation of the two sorted arrays
        return quicksort(array[:m]) + quicksort(array[m:])

    else:
        return array


print(quicksort([10,1,2,555]))