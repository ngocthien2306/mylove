import os
import time
def love():
	with open("love.txt", "r") as lines:
		for line in lines:
			print(line.strip())
			time.sleep(0.05)
print("Nguyễn Ngọc Thiện")
love()
