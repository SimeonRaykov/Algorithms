def merge_sort(arr):
 isSorted = None
 while not isSorted:
  isSorted = True
  for x,val in enumerate(arr):
   try:
    if val>arr[x+1]:
     temp = arr[x]
     arr[x] = arr[x+1]
     arr[x+1] = temp
     isSorted = False
   except IndexError:
       x-=1
 return arr

print(merge_sort([5,3,1,2,10,5,7,4,5]))
print(merge_sort([1,2,3]))
print(merge_sort([3,2,1,4,4,4,10,1000]))