sentence = ""

while sentence.endswith("@gmail.com") != True:
    sentence = input("Please enter your gmail: ")

    if sentence.endswith("@gmail.com"):
        print("You entered valid gmail.")
    else:
        print("Email is invalid, please try again!")