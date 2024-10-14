#მაგალითი პირველი
countdown = 5

print("Starting countdown...")
while countdown > 0:
    print(countdown)
    countdown -= 1

print("Finished")

#მაგალითი მეორე
password = ""
expected_password = "sandro123"

while password != expected_password:
    password = input("Enter the password: ")

print("Password is correct.")


#მაგალითი მესამე
num = 0

while num < 10:
    print("Sandro")
    num += 1