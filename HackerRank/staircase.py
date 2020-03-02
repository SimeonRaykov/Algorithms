def staircase(n):
    stair_hashes = 1
    spaces = n - 1
    for x in range(n):
        current_staircase = ' ' * spaces + '#' * stair_hashes
        spaces -= 1
        stair_hashes += 1
        print(current_staircase)


staircase(5)
