"""2) შექმენით ფუნქცია რომელსაც გადაეცემა ორი რიცხვი.
   ამ ფუნქციამ პირველ რიცხვს მანამ უნდა დაუმატოს მეორე
   რიცხვი სანამ ჯამი არ გახდება 100ის ტოლი ან 100ზე
   მეტი."""

def add(num1, num2):
    current_sum = num1
    iterations = 0
    while current_sum < 100:
        current_sum += num2
        iterations += 1
    
    print(f"Sum reached {current_sum} after {iterations} iterations.")
    return current_sum

result = add(20, 7)
print("Final sum:", result)