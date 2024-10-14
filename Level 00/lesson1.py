from turtle import *


#we want to paint house

#step 1: drw a square
speed(50)
width(5)
color("dark green")


forward(200)
left(90)


forward(220)
left(90)

forward(200)
left(90)

forward(220)
left(90)
#end of square

#drawing a door


begin_fill()
forward(70)
color("brown")
left(90)
forward(90)
right(90)
forward(70)
right(90)
forward(90)
end_fill()

penup()
goto(200, 220)
pendown()

color("brown")
begin_fill()
right(150)
forward(200)
left(120)
forward(200)
end_fill()


#drawing windows
penup()
goto(20, 130)
pendown()

color("green")
begin_fill()
right(150)
forward (50)
right(90)
forward(35)
right(90)
forward (50)
right(90)
forward(35)
end_fill()


penup()
goto(145, 180)
pendown()

color("green")
begin_fill()
left(90)
forward(50)
left(90)
forward(35)
left(90)
forward(50)
left(90)
forward(35)
end_fill()

exitonclick()