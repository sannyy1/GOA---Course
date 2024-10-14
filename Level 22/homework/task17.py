"""17. შექმენით ფუნქცია, რომელიც იღებს მთელი რიცხვების სიას და აბრუნებს სიაში ყველაზე მცირე რიცხვს."""

def find_smallest_number(lst):
    if not lst:
        return None

    smallest = lst[0]
    for num in lst[1:]:
        if num < smallest:
            smallest = num
    return smallest

print(find_smallest_number([4, 2, 7, 1, 5]))
print(find_smallest_number([-1, -5, -3, -7]))
print(find_smallest_number([10]))