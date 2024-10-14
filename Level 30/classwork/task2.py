"""შექმენით ფუნქცია სახელად even_sum, რომელსაც გადასცემთ რიცხვების სია, თქვენი
დავალებაა ამ სიაში შეკრიბოთ ლუწი რიცხზვები და მიღებული ჯამი დააბრუნოთ ფუნქციიდან"""

def even_sum(numbers):
    return sum(num for num in numbers if num % 2 == 0)

numbers = [1, 2, 3, 4, 5, 6]
result = even_sum(numbers)
print(result)

def even_sum(numbers):
    total = 0
    for num in numbers:
        if num % 2 == 0:
            total += num
    return total

numbers = [1, 2, 3, 4, 5, 6]
result = even_sum(numbers)
print(result)