def hackerrank_in_string(s):
    hackerrank = 'hackerrank'
    i = 0
    for curr_char in s:
        if i == 10:
            break
        else:
            if curr_char == hackerrank[i]:
                i += 1

    if i >= 10:
        print('YES')
    else:
        print('NO')


hackerrank_in_string('hacakaeararanaka')
