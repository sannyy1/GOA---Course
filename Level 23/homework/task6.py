"""შექმენით ფუნქცია რომელსაც გადაეცემა სტრინგები და 
   ინტეჯერები რაღაც თანმიმდევრობით. ფუნქციამ უნდა შეძლოს
   და ეს სტრინგების და ინტეჯერების თანმიმდევრობა უნდა 
   ამოიტანოს შებრუნებულად."""

def reverse_sequence(*args):
    return args[::-1]

result1 = reverse_sequence(1, 2, "three", 4, "five")
print(result1) 

result2 = reverse_sequence("hello", 123, "world", 456)
print(result2)  

result3 = reverse_sequence()
print(result3)  