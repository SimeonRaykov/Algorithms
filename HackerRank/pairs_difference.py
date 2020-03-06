import itertools


def pairs_difference(diff, arr):
  counter = 0
  for pair in itertools.product(arr, repeat=2):
    if pair[0] - pair[1] == diff:
      counter+=1
  return counter


print(pairs_difference(2,[1, 5, 3, 4, 2]))
