"""4. შექმენით ფუნქცია, რომელიც იღებს string'ების list'ს და 
აბრუნებს ამ string'ების სიგრძეების list'ს (გამოიყენეთ ფუნქცია len())."""

def length(list):
    len_list = []

    for string in list:
        len_list.append(len(string))

    return len_list

print(length(["sandro","luka", "gio"]))