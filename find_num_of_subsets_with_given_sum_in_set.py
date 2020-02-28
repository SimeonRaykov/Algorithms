def find_num_of_subsets_with_sum(inputSet, matchingSum):
    count = 0

    def powerset(s):
        x = len(s)
        masks = [1 << i for i in range(x)]
        for i in range(1 << x):
            yield [ss for mask, ss in zip(masks, s) if i & mask]

    sub_sets = list(powerset(inputSet))
    for sub_set in sub_sets:
        if sum(sub_set) == matchingSum:
            count += 1
            print(sub_set)

    print(count)


find_num_of_subsets_with_sum([1, 2, 4, 5, 6, 10], 16)
