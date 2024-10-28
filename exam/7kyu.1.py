def number(bus_stops):
    total_people = 0
    for stop in bus_stops:
        total_people += stop[0]
        total_people -= stop[1]
    return total_people