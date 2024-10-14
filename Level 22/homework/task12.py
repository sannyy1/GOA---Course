"""12. შექმენით ფუნქცია, რომელიც იღებს string'ს და აბრუნებს ხმოვანი ასოების რაოდენობას string'ში."""

def count_vowels(s):
    vowels = "abcdefgHIJKLM"
    count = 0 
    for char in s:
        if char in vowels:
            count += 1
    return count

print(count_vowels("Hello World"))
print(count_vowels("Python Programming"))
print(count_vowels("AI and ML"))