"""შექმენით ფუნქცია სახელად odd_index_sum რომელსაც გადაეცემა რიცხვების სია, თქენი დავალებაა
შეკრიბოთ ყველა ის რიცხვი რომელიც დგას !!!!კენტ ინდექსზე!!!, მიღებული ჯამი დააბრუნეთ ფუნქციიდან"""

def odd_index_sum(numbers):
    return sum(numbers[i] for i in range(1, len(numbers), 2))

numbers = [10, 20, 30, 40, 50]
result = odd_index_sum(numbers)
print(result)

def odd_index_sum(numbers):
    total = 0
    for i in range(1, len(numbers), 2):
        total += numbers[i]
    return total

numbers = [10, 20, 30, 40, 50]
result = odd_index_sum(numbers)
print(result)