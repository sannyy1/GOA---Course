#first classwork 
age = int(input("Please enter your age: "))

if age >= 5 and age < 13:
    print("You are a child.")
elif age >= 13 and age <= 19:
    print("You are a teen.")
else: 
    print("You are an adult.")


#second classwork
    
favorite_films = ["interstellar", "cars", "toystory"]
favorite_songs = ["Mdevari", "Badfordfalls", "imaginedragons"]
united = favorite_films + favorite_songs

print(united[len(united) - 1])
print(favorite_films[0])
print(favorite_songs[0])

#სიის დახმარებით შეგვიძლია ბევრი მონაცემი შევინახოთ ერთად
#ინდექსი არის ნომერი თუ რა ადგილას იმყოფება მონაცემი სიაში
#len ფუნქციის დახმარებით ვგებულობთ თუ რამდენი მონაცემია სიაში