# Pure JavaScript Periodic Table of the Elements

This repo contains a reverse-engineered implementation of the periodic table we know and love,
calculated from scratch at runtime using only:

1. An array each of elemental names and elemental symbols
2. An array of the possible number of electrons in each successive electronic
   subshell

## But how?!

A puzzler at heart, I undertook this project in hopes that I might learn a
thing or two about how the periodic table works and why it looks the way it
does. You might know that the periodic table of the
elements is comprised of **groups** (represented by the columns of the table)
and **periods** (represented by its rows). Each one of these groups and periods
tells a story about the behavior of the elements inside them. In fact, 19th and
20th century chemists used "gaps" in the table to predict the existence of
theretofore undiscovered elements. It's wild stuff!  

But what is even wilder is that this behavior is predictable based upon an
element's atomic number and the laws that govern electron configuration. With a
bit of experimentation, I realized that an element's group is determined by a
combination of the type of its outermost (or valence) electronic subshell and
the number of electrons in that subshell. Meanwhile, the period can be
calcuated simply by summing the total number of shells in the atomic element's
electron cloud. This gets a bit fuzzy when it comes to the actinide and
lanthanide sets (you know, the elements that hang out at the bottom), but only
a little bit and only because these elements have an f-type valence subshell,
bigger than any other and whose existence was not accounted for at the time the
table was developed. Attempts have been made to develop a table that allows
these elements to sit in line with their brethren, but it seems that the one
we've got is here to stay, too elegant to die, at least for today.

Knowing all of this, an element's period and group can be calculated at the
time of an element object's instantiation. What you see here is not really a
"table" of rows and columns, but a series of 118 uniquely placed elemental
objects.

## To do
- Onsite explanation and tutorials
- Programmatic implementation of the [Aufbau Principle](https://en.wikipedia.org/wiki/Aufbau_principle)

## Misc Shoutouts
- Dedicated to my lovely daughter Opal, nearly 5 months old as I write this today.
- Special thanks to [Dmitri Mendeleev](https://en.wikipedia.org/wiki/Dmitri_Mendeleev), [Niels Bohr](https://en.wikipedia.org/wiki/Niels_Bohr), and [Wolfgang Pauli](https://en.wikipedia.org/wiki/Wolfgang_Pauli)
- Table drawn painlessly with [KonvaJS](https://konvajs.org/)
- Color palette generated with help from [coolers.co](https://coolors.co/495a49-a9714b-81a2b1-aa8274)
- This project coded with	♥ in vim.✨
