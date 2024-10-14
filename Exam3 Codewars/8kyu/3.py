def count_positives_sum_negatives(arr):
    if not arr:
        return []
    
    count_positives = 0
    sum_negatives = 0
    
    for number in arr:
        if number > 0:
            count_positives += 1
        elif number < 0:
            sum_negatives += number
        
    return [count_positives, sum_negatives]