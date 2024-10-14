def calculator(num1, num2):
    print("1. + ")
    print("2. - ")
    print("3. * ")
    print("4. / ")

    choice = int(input("Please enter your choice: "))
    result = 0

    if choice == 1:
        result = num1 + num2
    elif choice == 2:
        result = num1 - num2
    elif choice == 3:
        result = num1 * num2
    elif choice == 4:
        result = num1 / num2
    else:
        print("Invalid choice")

    return result


print(calculator(5, 10))