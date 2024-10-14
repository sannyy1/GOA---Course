#2
for i in range (0, 21):
    print(i)



#3
num = int(input("Enter a number: "))

if num % 2 == 0:
    print("Number is even")
else:
    print("Number is odd")


#4
for num in range(1, 20):
    if num % 2 == 0:
        print(num)


#5
total_sum = 0

for num in range(50, 101):
    total_sum += num  

print("Sum of numbers from 50 to 100:", total_sum)


#6
for num in range(1, 51):
    if num % 5 == 0:
        print(num)


#7
num1 = int(input("Enter the first number: "))
num2 = int(input("Enter the second number: "))

if num1 < num2:
    smallest = num1
    largest = num2
else:
    smallest = num2
    largest = num1

print(f"All numbers from {smallest} to {largest}:")
for num in range(smallest, largest + 1):
    print(num)


#8 
#განვლილი მასალის გამეორება
    

#9
product = 1

for num in range(5, 11):  
    product *= num 

print("Product of numbers 5 to 10:", product)


#10
word = "Hello"

reversed_word = ""

for i in range(len(word) - 1, -1, -1):
    reversed_word += word[i]

print("Original word:", word)
print("Word in opposite direction:", reversed_word)