def vending_machine(products):
    count = 1

    for product in products:
        print(count, products)
        count = count + 1


    choose = int(input("Please choose product: "))
    money = int(input("Please enter money: "))


    if choose == 1 and money >= 2:
        return "Cola"
    elif choose == 2 and money >= 5:
        return "Borjomi"
    elif choose == 3 and money >= 3:
        return "Snickers"
    else:
        return "invalid Option or not enaugh money"




vending_machine(["Cola 2.00", "Borjomi 5.00", "Snickers 3.00"])