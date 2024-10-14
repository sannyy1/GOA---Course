"""16. შექმენით ფუნქცია, რომელიც იღებს string'ების სიას და აბრუნებს ყველაზე გრძელ string'ს."""


def longest_string(lst):
    result = ""
    for i in lst:
        if len(i) > len(result):
            result = i 
    return result

print(longest_string(["hello", "python", "programming"]))