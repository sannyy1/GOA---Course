"""3) შექმენით ფუნქცია რომელიც ამოწმებს
     რიცხვი კენტია თუ ლუწი."""

def check_odd_or_even(number):
    if number % 2 == 0:
        return f"{number} is even."
    else:
        return f"{number} is odd."


print(check_odd_or_even(5))
print(check_odd_or_even(10))
print(check_odd_or_even(2))