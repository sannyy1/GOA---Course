emails = []

count = int(input("Please enter how many emails do you want to enter: "))

for i in range(count):
    email = input("Please enter email: ")

    if email.endswith("@gmail.com"):
        emails.append(email)
        print("Email was correct")
    else:
        print("Invalid email")


print(emails)