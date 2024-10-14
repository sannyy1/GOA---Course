def manual_sum(numbers):
    total_sum = 0

    for number in numbers:
        total_sum += number
        return total_sum
    
my_list = [10, 20, 30, 40, 50]

result = manual_sum(my_list)
print(result)