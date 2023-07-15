# reference_key = 1000 -> equals to 1 coin

# example of a time generating function that incrememnts a value for t seconds in total

# import time
# from datetime import datetime

# def hash_function_one():
#     value = 0
#     reference_key = 1000 # number of hashes that equals to 1 COIN
#     start_time = time.time()
#     while time.time() - start_time < 2:
#         value += 2
#         #print(f"{datetime.now()}: {value}")
#         time.sleep(0.00005)

#     print("Total amount = ", value)

#     conversion = value / reference_key
#     print(conversion)
#     return conversion


# hash_function_one()

# import time
# from django.utils import timezone

# def set_and_reset_value(value):
#     now = timezone.now()
#     value = 1 
#     timezone.after(seconds=5, function=lambda: value = 0)
#     return value

# value = set_and_reset_value(1)
# print(value)
# time.sleep(5)
# print(value)

import time

value = 1  # set initial value to 1
print(value)  # output initial value

time.sleep(5)  # delay for 5 seconds

value = 0  # reset value to 0
print(value)  # output reset value

