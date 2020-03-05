def compare_triplets(a, b):
   print(a,b)
   points_alice = 0
   points_bob = 0
   for i in range(len(a)):
    if a[i] > b[i]:
        points_alice+=1
    elif  a[i] < b[i]:
        points_bob+=1

   return points_alice, points_bob
