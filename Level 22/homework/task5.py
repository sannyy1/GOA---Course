"""5. შექმენით ფუნქცია, რომელიც იღებს string'ს და აბრუნებს True-ს 
თუ ის არის Palindrome (ანუ იგივენაირად იკითხება მარცნიდანაც და 
მარჯვნიდანაც მაგალითად: "wow") და სხვა შემთხვევაში False-ს."""

def is_palindrome(string):
    if string == string[::-1]:
        return True
    return False

print(is_palindrome("bob"))
print(is_palindrome("coding"))