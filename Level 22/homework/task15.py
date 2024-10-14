"""15. შექმენით ფუნქცია, რომელიც იღებს რაიმე integer'ს და თუ ლუწია აბრუნებს
True'ს, თუ კენტი False'ს."""

def is_even(num):
    if num % 2 == 0:
        return True
    else:
        return False
    
print(is_even(4))
print(is_even(7))
print(is_even(-2))
print(is_even(0))