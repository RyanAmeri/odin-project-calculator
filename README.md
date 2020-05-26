# odin-project-calculator
Implementation of Odin Web 101 Project Calculator. The UI is inspired by macOS's built-in calculator and most of the functionality follows suit (though the percentage button functionality is different, I followed the standard four function calculators for this which show the result of the previous calculation straight away.)
# Achievements
* Implemented four function calculations
* Laid out a semi-responsive design using flexbox and CSS Grid
* Added a clear button
* Multiple operations can be stringed together
* Implemented dynamic font sizing for the display
* Handled pressing = and . buttons where they shouldn't be allowed (both by disabling the buttons when necessary and setting the appropriate mouse cursor)
* Displayed a message when dividing by 0
* Extra Credit: Users can enter and use floating point numbers
* Extra Credit: I think it looks nice?
* Extra Credit: The backspace button works. I didn't add a button to the layout as I wanted to remain faithful to the macOS calculator's layout, but pressing the backspace on the keyboard has the intended effect. Also users can change their mind and override a previous operation if they press a different operation instead. 
* Extra Credit: Keyboard support added, both for numbers and operations, both using the number row as well as the numpad. 
## Learnings
I'm not sure it's possible to list everything I have learnt during this project. From CSS Grid and animations, to lots of JavaScript functions. String manipulation, array methods, all where used in this. Most of all, I leanrt debugging in Chrome dev tools, setting break points and chasing variable values to see exactly where it was going off. 
## Shortcoming and Limitations
1) Performance sufferes from multiple inter-related function calls. In particular code needs to be refactored to reduce calls to setDisplay() and getDisplay(). 
2) Code needs various refactoring and cleanup. Currently most of the logic is implemented in event listeners. They need to be moved to their own functions. 
3) Currently if the result is a floating point number, only two decimal digits will be shown
4) I was not able to mimick the button click animation with keyboard entry. 
5) The calculator can only show numbers upto and including 24 digits. This is to simplify dealing with text overflow. There are probably more elegant solutions. 
## Future plans
Implement a Scientific and Programmer calculator a la macOS. 
