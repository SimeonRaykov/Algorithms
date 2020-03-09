SELECT case
WHEN p is NULL THEN CONCAT(n, ' Root')
WHEN n in (select distinct p from bst) THEN CONCAT(n, ' Inner') 
ELSE CONCAT(n, ' Leaf')
end
FROM BST
ORDER BY n