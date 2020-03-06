def big_sorting(arr):
#   return sorted(arr)
 str_arr =  list(map(str,arr))
 print(str_arr.sort(key = lambda x: (len(x), x)) )
 return str_arr

print(big_sorting([8,1,2,100,12303479849857341718340192371,3084193741082937,3084193741082938,111,200]))