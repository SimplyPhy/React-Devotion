# Devotion Economy

### **Goal**: Practice working with React by building a small personal project with it.  
___

\*\* **IMPORTANT**: This [app](https://simplyphy.github.io/React-Devotion/) is designed exclusively for use on a **desktop or laptop**. \*\*

### Instructions:
- Add new people via the input box found near the middle of the screen.
- Click one of the 4 gems found on the right side of each person's display to add 0, 1, 2, or 3 points to his/her score.
- As each person's score increases, s/he will reach new light tiers and classes.

**TL;DR**: This app provides a simple interface for a user to judge and track peoples' daily performance using whatever criteria s/he chooses.
The app is hosted [_here_](https://simplyphy.github.io/React-Devotion/).  

### What's a Devotion Economy?
Basically, it's a sort of gamified motivational system that I've played around with over the past few years.
The original inspiration is from the socio-economic class system found in [__The Seventh Tower__](https://en.wikipedia.org/wiki/The_Seventh_Tower) book series by Garth Nix,
where denizens of 'the Castle' are separated by their color ranking (red through violet).
One's color is, ideally, defined by his/her achievements.
In the books, each inhabitant of the Castle [apart from the underfolk] has a sunstone, which is a magic gemstone.
The sunstones can produce enchanted light, and the color of light produced manipulates the enchantments.
People aren't taught and are forbidden from using colors above their position in society.  

### Understanding the App:
My app provides a simple interface to create and track different individuals' light class and tier.
To create a new user, input a name and [optionally] his/her starting points.  The default starting points is 0.
For each user listed, you can judge his/her daily performance by selecting one of the four gemstones from inside his/her display.
The gemstones represent ratings of lightless, dark, light, or bright, and are valued between 0 and 3 devotion points (DP).  

As users earn additional DP, their tiers will increase.
All light classes have the same 9 tiers, starting at 'dull' and ending with 'brilliant'.
The only exceptions are 'lightless' and 'eternal', which have no tiers.
Each tier takes 11% (*12% for brilliant) of the total DP from the current class to reach the next tier.
For example, it takes 200 DP to go from Crimson (100 DP) to Ember (300 DP).
Therefore, if you have 100 DP, you require 22 DP (11% of 200) to reach from 'Dim' to 'Dull', etc.

### Additional Information:
The gamified motivational system described above doesn't entirely accurately describe the existing structure of the one I experiment with myself.
Likewise, this app doesn't currently attempt to describe many key elements of that system.
I'd like to build something more comprehensive and dynamic in the future, but in the meantime, feel free to message with with inquiries about it.

#### Techniques Used:
React, JSX, CSS3 animations, flexbox, spritesheets

#### Software Used:
Photoshop, Affinity Photo, Sublime Text 3, Git, ImageOptim

#### Regrets:
Not using Sass :sweat:
