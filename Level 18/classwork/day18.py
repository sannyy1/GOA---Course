#დავალება პირველი
numbers = []

for i in range (1,10):
    numbers.append(i)

print(numbers)
print(len(numbers))




#დავალება მეორე
start = int(input("Please enter start number: "))
end = int(input("Please enter end number: "))

numbers = []

for i in range(start, end):
    numbers.append(i)

print(numbers) 




#დავალება მესამე
start = int(input("Please enter start number: "))
end = int(input("Please enter end number: "))

numbers = []

for i in range(start, end):
    numbers.append(i)

print(min(numbers))
print(max(numbers))
print(sum(numbers))



#დავალება მეოთხე

count = int(input("Please enter quantity of how many numbers you want to enter: "))

numbers = []

for i in range(count):
    num = int(input("Please enter number: "))
    numbers.append(num)

print(sum(numbers))


def greet_user(name):
    names_list = [name, name]
    
    for name_in_list in names_list:
        if name_in_list == name:
            print("hello admin")
        else:
            print("hello user")

my_name = "John"

greet_user(my_name)