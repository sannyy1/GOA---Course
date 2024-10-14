"""შექმენით ფუნქცია რომელსაც გადაეცემა ლისტი. ფუნქციამ 
   უნდა იპოვოს ამ ლისტში შემავალი რიცხვების ჯამი"""

def summary(numbers):
    total_sum = 0
    for num in numbers:
        total_sum += num
    return total_sum

my_list = [2, 4, 6, 8, 10]
result = summary(my_list)

print(f"The sum of numbers in the list {my_list} is: {result}")

