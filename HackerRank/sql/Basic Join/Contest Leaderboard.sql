SELECT s.hacker_id, h.name, SUM(s.score) as total_score FROM 
(SELECT  hacker_id, challenge_id, MAX(score) as score
FROM submissions
GROUP BY hacker_id, challenge_id) as s
INNER JOIN hackers as h ON s.hacker_id = h.hacker_id
GROUP BY s.hacker_id, h.name
HAVING total_score > 0
ORDER BY total_score DESC,
s.hacker_id ASC