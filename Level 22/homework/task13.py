"""13. შექმენით ფუნქცია, რომელიც იღებს integer'ების list'ს და აბრუნებს ახალ list'ს თითოეული integer'ის კვადრატით. 
(მაგალითად: input: [2, 4]. output: [4, 16])
"""

def square_list(lst):
    squared_list = []
    for num in lst:
        squared_list.append(num ** 2)
    return squared_list


print(square_list([2, 4]))
print(square_list([-1, 0, 1]))
print(square_list([5, 10, 15]))