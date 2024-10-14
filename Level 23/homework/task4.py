"""შექმენით ფუნქცია რომელსაც გადაეცემა ლისტი.
 ფუნქციამ უნდა იპოვოს ლისტში უდიდესი რიცხვი."""

def find_largest_number(num_list):
    if not num_list:
        return None 
    
    largest = num_list[0]
    
    for num in num_list[1:]:
        if num > largest:
            largest = num
    
    return largest

numbers = [10, 5, 20, 8, 15]
result = find_largest_number(numbers)
print(f"The largest number in the list {numbers} is: {result}") 